"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * 9 Exact Global Hubs matching OPASH's presence:
 * India, United States, United Kingdom, Canada, Germany, UAE, Australia, Brazil, Singapore
 */
interface Hub {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

const GLOBAL_HUBS: Hub[] = [
  { name: "Bengaluru", country: "India", lat: 12.9716, lon: 77.5946 },
  { name: "New York", country: "United States", lat: 40.7128, lon: -74.006 },
  { name: "London", country: "United Kingdom", lat: 51.5074, lon: -0.1278 },
  { name: "Toronto", country: "Canada", lat: 43.6532, lon: -79.3832 },
  { name: "Frankfurt", country: "Germany", lat: 50.1109, lon: 8.6821 },
  { name: "Dubai", country: "UAE", lat: 25.2048, lon: 55.2708 },
  { name: "Sydney", country: "Australia", lat: -33.8688, lon: 151.2093 },
  { name: "São Paulo", country: "Brazil", lat: -23.5505, lon: -46.6333 },
  { name: "Singapore", country: "Singapore", lat: 1.3521, lon: 103.8198 },
];

const HUB_CONNECTIONS: [number, number][] = [
  [1, 2], // New York <-> London
  [1, 3], // New York <-> Toronto
  [2, 4], // London <-> Frankfurt
  [4, 5], // Frankfurt <-> Dubai
  [5, 0], // Dubai <-> Bengaluru
  [0, 8], // Bengaluru <-> Singapore
  [8, 6], // Singapore <-> Sydney
  [1, 7], // New York <-> São Paulo
  [2, 7], // London <-> São Paulo
  [0, 6], // Bengaluru <-> Sydney
];

// Helper: Convert Lat/Lon to 3D Cartesian coordinates on sphere
function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

// Approximate continental landmass detection
function isContinentalLand(lat: number, lon: number): boolean {
  if (lat >= 15 && lat <= 72 && lon >= -168 && lon <= -52) return true; // N. America
  if (lat >= -56 && lat <= 13 && lon >= -82 && lon <= -34) return true;  // S. America
  if (lat >= 36 && lat <= 71 && lon >= -10 && lon <= 42) return true;   // Europe
  if (lat >= -35 && lat <= 37 && lon >= -18 && lon <= 52) return true;  // Africa
  if (lat >= 2 && lat <= 75 && lon >= 35 && lon <= 150) return true;    // Asia
  if (lat >= -47 && lat <= -10 && lon >= 112 && lon <= 178) return true;// Australia
  return false;
}

// Create elevated parabolic Great-Circle arc curve
function createElevatedArc(
  vStart: THREE.Vector3,
  vEnd: THREE.Vector3,
  radius: number,
  altitudeFactor = 0.26,
  numPoints = 50
): THREE.Vector3[] {
  const v1 = vStart.clone().normalize();
  const v2 = vEnd.clone().normalize();
  const angle = v1.angleTo(v2);

  const peakAltitude = radius + Math.sin(angle / 2) * radius * altitudeFactor;
  const points: THREE.Vector3[] = [];

  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    const q = new THREE.Quaternion();
    q.slerpQuaternions(
      new THREE.Quaternion(),
      new THREE.Quaternion().setFromUnitVectors(v1, v2),
      t
    );

    const pt = v1.clone().applyQuaternion(q);
    const altitude = radius + (peakAltitude - radius) * Math.sin(t * Math.PI);
    pt.multiplyScalar(altitude);
    points.push(pt);
  }

  return points;
}

// Generate soft radial glow texture for high-fidelity particles
function createGlowPointTexture(): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.2, "rgba(0, 240, 255, 0.95)");
    gradient.addColorStop(0.55, "rgba(0, 136, 255, 0.4)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
  }
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

export default function CinematicBlueGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 700;
    let height = container.clientHeight || 700;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. SCENE & CAMERA
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    // Camera positioned to showcase a large, dominant globe
    camera.position.set(0, 0, 7.5);

    // 2. RENDERER
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Globe root group for continuous rotation & subtle interactive parallax
    const globeGroup = new THREE.Group();
    // Default cinematic tilt: slight forward & left orientation
    globeGroup.rotation.x = 0.26;
    globeGroup.rotation.z = -0.12;
    scene.add(globeGroup);

    const GLOBE_RADIUS = 2.68;

    // 3. LAYER A: INNER DARK OCCLUDING SPHERE
    // Blocks backside lines to maintain high contrast and clarity on the front hemisphere
    const innerSphereGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 0.985, 64, 64);
    const innerSphereMat = new THREE.MeshBasicMaterial({
      color: 0x020614,
      transparent: true,
      opacity: 0.94,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    globeGroup.add(innerSphere);

    // 4. LAYER B: DENSE TRIANGULAR WIREFRAME NETWORK MESH (Ref: polygonal structure)
    const icodensity = window.innerWidth < 768 ? 3 : 4;
    const icoGeo = new THREE.IcosahedronGeometry(GLOBE_RADIUS, icodensity);
    const wireframeGeo = new THREE.WireframeGeometry(icoGeo);
    
    // Primary electric blue wireframe
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0x0088ff,
      transparent: true,
      opacity: 0.24,
      blending: THREE.AdditiveBlending,
    });
    const wireframeMesh = new THREE.LineSegments(wireframeGeo, wireframeMat);
    globeGroup.add(wireframeMesh);

    // Secondary bright cyan wireframe for multi-tone depth
    const cyanWireframeMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.14,
      blending: THREE.AdditiveBlending,
    });
    const cyanWireframeMesh = new THREE.LineSegments(wireframeGeo, cyanWireframeMat);
    cyanWireframeMesh.scale.setScalar(0.998);
    globeGroup.add(cyanWireframeMesh);

    // 5. LAYER C: THOUSANDS OF LUMINOUS BLUE & CYAN CONTINENTAL PARTICLES
    const pointTexture = createGlowPointTexture();
    const totalParticles = window.innerWidth < 768 ? 1800 : 3600;
    const particlePositions: number[] = [];
    const particleColors: number[] = [];

    const cDeepBlue = new THREE.Color(0x0066ee);
    const cCyan = new THREE.Color(0x00f0ff);
    const cWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < totalParticles; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / totalParticles);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const lat = 90 - (phi * 180) / Math.PI;
      const lon = ((theta * 180) / Math.PI) % 360 - 180;

      const isLand = isContinentalLand(lat, lon);
      // Retain continental cluster points, sample sparse ocean points
      if (isLand || Math.random() < 0.16) {
        const v = latLonToVector3(lat, lon, GLOBE_RADIUS * 1.003);
        particlePositions.push(v.x, v.y, v.z);

        // Continental nodes get bright cyan/white, ocean gets deeper blue
        let col = cDeepBlue;
        if (isLand) {
          col = Math.random() > 0.35 ? cCyan : cWhite;
        }
        particleColors.push(col.r, col.g, col.b);
      }
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(particlePositions, 3)
    );
    particlesGeo.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(particleColors, 3)
    );

    const particlesMat = new THREE.PointsMaterial({
      size: 0.05,
      map: pointTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const pointsMesh = new THREE.Points(particlesGeo, particlesMat);
    globeGroup.add(pointsMesh);

    // 6. LAYER D: ATMOSPHERIC FRESNEL RIM GLOW WITH LEFT-SIDE CINEMATIC LIGHTING
    // Lights the rim with electric blue/cyan and emphasizes the edge facing the content
    const fresnelVertexShader = `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fresnelFragmentShader = `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vec3 viewDir = normalize(-vPosition);
        float rim = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 2.5);
        
        // Light direction coming gently from the left (towards hero content)
        vec3 leftLightDir = normalize(vec3(-0.75, 0.2, 0.65));
        float leftLight = max(dot(vNormal, leftLightDir), 0.0);
        
        float intensity = rim * 0.72 + pow(leftLight, 2.2) * rim * 0.55;
        vec3 glowColor = mix(vec3(0.0, 0.5, 1.0), vec3(0.0, 0.95, 1.0), intensity);
        gl_FragColor = vec4(glowColor, intensity * 0.85);
      }
    `;

    const fresnelMat = new THREE.ShaderMaterial({
      vertexShader: fresnelVertexShader,
      fragmentShader: fresnelFragmentShader,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const fresnelSphere = new THREE.Mesh(
      new THREE.SphereGeometry(GLOBE_RADIUS * 1.048, 64, 64),
      fresnelMat
    );
    globeGroup.add(fresnelSphere);

    // 7. LAYER E: GLOBAL HUB NODES & PULSING RINGS (Exact OPASH Markets)
    const hubVectors: THREE.Vector3[] = GLOBAL_HUBS.map((h) =>
      latLonToVector3(h.lat, h.lon, GLOBE_RADIUS * 1.006)
    );

    const hubGroup = new THREE.Group();
    const hubHaloGeo = new THREE.RingGeometry(0.038, 0.082, 32);
    const hubHaloMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const hubDotGeo = new THREE.SphereGeometry(0.04, 16, 16);
    const hubDotMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });

    hubVectors.forEach((pos) => {
      const dot = new THREE.Mesh(hubDotGeo, hubDotMat);
      dot.position.copy(pos);
      hubGroup.add(dot);

      const halo = new THREE.Mesh(hubHaloGeo, hubHaloMat);
      halo.position.copy(pos.clone().multiplyScalar(1.003));
      halo.lookAt(new THREE.Vector3(0, 0, 0));
      hubGroup.add(halo);
    });
    globeGroup.add(hubGroup);

    // 8. LAYER F: ELEVATED GEODESIC CONNECTION ARCS
    const arcCurves: THREE.Vector3[][] = [];
    const arcGroup = new THREE.Group();

    HUB_CONNECTIONS.forEach(([idxA, idxB]) => {
      const vA = hubVectors[idxA];
      const vB = hubVectors[idxB];
      if (!vA || !vB) return;

      const arcPoints = createElevatedArc(vA, vB, GLOBE_RADIUS, 0.26, 48);
      arcCurves.push(arcPoints);

      const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPoints);
      const arcMat = new THREE.LineBasicMaterial({
        color: 0x00d4ff,
        transparent: true,
        opacity: 0.42,
        blending: THREE.AdditiveBlending,
      });
      const arcLine = new THREE.Line(arcGeo, arcMat);
      arcGroup.add(arcLine);
    });
    globeGroup.add(arcGroup);

    // 9. LAYER G: ANIMATED PHOTON PULSES TRAVELING ALONG ARCS
    interface ArcPulse {
      arcIdx: number;
      t: number;
      speed: number;
      mesh: THREE.Mesh;
    }

    const pulseGeo = new THREE.SphereGeometry(0.048, 12, 12);
    const pulseMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      blending: THREE.AdditiveBlending,
    });

    const pulses: ArcPulse[] = arcCurves.map((curve, idx) => {
      const mesh = new THREE.Mesh(pulseGeo, pulseMat);
      globeGroup.add(mesh);
      return {
        arcIdx: idx,
        t: Math.random(),
        speed: Math.random() * 0.005 + 0.004,
        mesh,
      };
    });

    // 10. LAYER H: AMBIENT FLOATING CYBER DUST PARTICLES
    const dustCount = window.innerWidth < 768 ? 40 : 80;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      const rad = GLOBE_RADIUS * (1.1 + Math.random() * 0.45);
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 0.5 + rad;
      dustPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      dustPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      dustPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.035,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const dustPoints = new THREE.Points(dustGeo, dustMat);
    scene.add(dustPoints);

    // Interactive mouse parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let curMouseX = 0;
    let curMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth - 0.5) * 0.22;
      targetMouseY = (e.clientY / innerHeight - 0.5) * 0.18;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Resize observer
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || 700;
      height = container.clientHeight || 700;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    // 11. ANIMATION LOOP
    let reqId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (!prefersReducedMotion) {
        // Continuous elegant rotation
        globeGroup.rotation.y += delta * 0.11;
        dustPoints.rotation.y += delta * 0.04;
      }

      // Smooth mouse parallax
      curMouseX += (targetMouseX - curMouseX) * 0.05;
      curMouseY += (targetMouseY - curMouseY) * 0.05;
      globeGroup.position.x = curMouseX * 0.7;
      globeGroup.position.y = -curMouseY * 0.5;

      // Animate photon pulses along arcs
      pulses.forEach((p) => {
        if (!prefersReducedMotion) {
          p.t += p.speed;
          if (p.t > 1) p.t = 0;
        }

        const curve = arcCurves[p.arcIdx];
        if (curve && curve.length > 0) {
          const pointIdx = Math.floor(p.t * (curve.length - 1));
          const pt = curve[pointIdx];
          if (pt) {
            p.mesh.position.copy(pt);
          }
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // 12. CLEANUP ON UNMOUNT
    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("mousemove", onMouseMove);
      ro.disconnect();

      innerSphereGeo.dispose();
      innerSphereMat.dispose();
      icoGeo.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
      cyanWireframeMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      pointTexture.dispose();
      fresnelMat.dispose();
      hubHaloGeo.dispose();
      hubHaloMat.dispose();
      hubDotGeo.dispose();
      hubDotMat.dispose();
      pulseGeo.dispose();
      pulseMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        position: "relative",
      }}
      aria-hidden="true"
    />
  );
}
