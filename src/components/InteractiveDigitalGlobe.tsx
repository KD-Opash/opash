"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Sliders, RotateCcw, X, Check, MapPin, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeProvider";

/**
 * 9 Exact Global Countries with verified geographic coordinates
 */
export interface CountryMarker {
  id: string;
  name: string;
  city: string;
  lat: number;
  lon: number;
}

export const COUNTRIES: CountryMarker[] = [
  { id: "IND", name: "India", city: "Bengaluru", lat: 20.5937, lon: 78.9629 },
  { id: "USA", name: "United States", city: "New York", lat: 38.8951, lon: -77.0364 },
  { id: "GBR", name: "United Kingdom", city: "London", lat: 51.5074, lon: -0.1278 },
  { id: "CAN", name: "Canada", city: "Toronto", lat: 45.4215, lon: -75.6972 },
  { id: "DEU", name: "Germany", city: "Frankfurt", lat: 51.1657, lon: 10.4515 },
  { id: "ARE", name: "UAE", city: "Dubai", lat: 25.2048, lon: 55.2708 },
  { id: "AUS", name: "Australia", city: "Sydney", lat: -33.8688, lon: 151.2093 },
  { id: "BRA", name: "Brazil", city: "São Paulo", lat: -23.5505, lon: -46.6333 },
  { id: "SGP", name: "Singapore", city: "Singapore", lat: 1.3521, lon: 103.8198 },
];

/**
 * Meaningful international routes connecting key locations:
 * - India to UK
 * - India to Singapore
 * - US to UK
 * - Germany to UAE
 * - Singapore to Australia
 * - US to Brazil
 * - US to Canada
 */
const GLOBAL_ROUTES: [number, number][] = [
  [0, 2], // India <-> UK
  [0, 8], // India <-> Singapore
  [1, 2], // US <-> UK
  [4, 5], // Germany <-> UAE
  [8, 6], // Singapore <-> Australia
  [1, 7], // US <-> Brazil
  [1, 3], // US <-> Canada
];

/**
 * Convert Latitude & Longitude to 3D Cartesian coordinates on sphere.
 * Exactly matches Three.js SphereGeometry equirectangular UV mapping:
 * phi: from North Pole (0) to South Pole (PI)
 * theta: longitude mapping aligned with Prime Meridian
 */
function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.cos(theta) * Math.sin(phi));
  const z = radius * Math.sin(theta) * Math.sin(phi);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

/**
 * Create elevated parabolic Great-Circle arc curve between two 3D points
 */
function createElevatedArc(
  vStart: THREE.Vector3,
  vEnd: THREE.Vector3,
  radius: number,
  altitudeFactor = 0.22,
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

export interface GlobeConfig {
  rotationSpeed: number;
  meshOpacity: number;
  glowIntensity: number;
  autoRotate: boolean;
  showBrandFrame: boolean;
}

export const DEFAULT_GLOBE_CONFIG: GlobeConfig = {
  rotationSpeed: 0.08,
  meshOpacity: 0.12,
  glowIntensity: 0.55,
  autoRotate: true,
  showBrandFrame: true,
};

export default function InteractiveDigitalGlobe() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const containerRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const [config, setConfig] = useState<GlobeConfig>(DEFAULT_GLOBE_CONFIG);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  // Label screen positions state for the 9 countries
  const [labelCoords, setLabelCoords] = useState<
    { id: string; x: number; y: number; visible: boolean; dot: number }[]
  >([]);

  // Three.js object references
  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const wireframeMatRef = useRef<THREE.LineBasicMaterial | null>(null);
  const fresnelMatRef = useRef<THREE.ShaderMaterial | null>(null);
  const earthMatRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const defaultCamPos = useRef(new THREE.Vector3(0, 0, 8.2));
  const isResettingCamera = useRef(false);

  // Country vectors in local globe coordinates
  const countryVectorsRef = useRef<THREE.Vector3[]>([]);

  // Smooth camera reset
  const handleResetCamera = useCallback(() => {
    isResettingCamera.current = true;
    if (controlsRef.current) {
      controlsRef.current.target.set(0, 0, 0);
    }
  }, []);

  const handleResetDefaults = () => {
    setConfig(DEFAULT_GLOBE_CONFIG);
    setSelectedCountry(null);
    handleResetCamera();
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 560;
    let height = container.clientHeight || 560;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. SCENE & CAMERA
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.copy(defaultCamPos.current);
    cameraRef.current = camera;

    // 2. RENDERER
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.touchAction = "none";
    renderer.domElement.style.outline = "none";
    container.appendChild(renderer.domElement);

    // 3. ORBIT CONTROLS (Smooth user rotation and clamped zoom)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.65;
    controls.zoomSpeed = 0.75;
    controls.minDistance = 5.2;
    controls.maxDistance = 11.5;
    controls.enablePan = false;
    controlsRef.current = controls;

    let interactionTimeout: NodeJS.Timeout | null = null;
    controls.addEventListener("start", () => {
      setIsInteracting(true);
      if (interactionTimeout) clearTimeout(interactionTimeout);
    });

    controls.addEventListener("end", () => {
      interactionTimeout = setTimeout(() => {
        setIsInteracting(false);
      }, 1500);
    });

    // 4. GLOBE ROOT GROUP (Rotates with auto-rotation and mouse drag)
    const globeGroup = new THREE.Group();
    // Natural cinematic axial tilt
    globeGroup.rotation.x = 0.22;
    globeGroup.rotation.z = -0.06;
    scene.add(globeGroup);
    globeGroupRef.current = globeGroup;

    // Proportioned radius perfectly fitting inside the OPASH "O" Aperture core
    const GLOBE_RADIUS = 1.35;

    // 5. LIGHTING SETUP
    // Key Sun directional light with pale cyan/white warmth
    const sunLight = new THREE.DirectionalLight(isLight ? 0xffffff : 0xdcfce7, isLight ? 2.5 : 2.2);
    sunLight.position.set(-6, 3, 5);
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    // Ambient space light keeping oceans deep navy
    const ambientLight = new THREE.AmbientLight(isLight ? 0xbae6fd : 0x051324, isLight ? 1.9 : 1.4);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    // Back rim light in OPASH emerald
    const rimLight = new THREE.DirectionalLight(0x5EC098, 1.2);
    rimLight.position.set(5, -2, -4);
    scene.add(rimLight);

    // 6. LAYER A: REAL EARTH MULTI-TEXTURE LIVING SURFACE
    const textureLoader = new THREE.TextureLoader();

    // High-resolution real earth textures
    const earthMap = textureLoader.load("/images/textures/earth_atmos_2048.jpg");
    const earthLights = textureLoader.load("/images/textures/earth_lights_2048.png");
    const earthNormal = textureLoader.load("/images/textures/earth_normal_2048.jpg");
    const earthSpec = textureLoader.load("/images/textures/earth_specular_2048.jpg");
    const earthClouds = textureLoader.load("/images/textures/earth_clouds_1024.png");

    // Earth Mesh: Deep midnight navy ocean tint with OPASH emerald night city lights
    const earthGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
    const earthMat = new THREE.MeshStandardMaterial({
      map: earthMap,
      normalMap: earthNormal,
      normalScale: new THREE.Vector2(0.8, 0.8),
      roughnessMap: earthSpec,
      roughness: 0.65,
      metalness: 0.08,
      color: new THREE.Color(isLight ? 0x244b68 : 0x1a364a), // Tinted ocean matching theme
      emissiveMap: earthLights,
      emissive: new THREE.Color(0x5EC098), // OPASH emerald city lights
      emissiveIntensity: isLight ? 0.6 : 0.9,
    });
    earthMatRef.current = earthMat;
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    globeGroup.add(earthMesh);

    // 7. LAYER B: LIVING CLOUDS LAYER (Slow organic rotation)
    const cloudsGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.008, 64, 64);
    const cloudsMat = new THREE.MeshStandardMaterial({
      map: earthClouds,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
    });
    const cloudsMesh = new THREE.Mesh(cloudsGeo, cloudsMat);
    globeGroup.add(cloudsMesh);

    // 8. LAYER C: SUBTLE DIGITAL TWIN NETWORK WIREFRAME
    const wireGeo = new THREE.IcosahedronGeometry(GLOBE_RADIUS * 1.003, 4);
    const wireframeGeo = new THREE.WireframeGeometry(wireGeo);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: new THREE.Color(0x5EC098),
      transparent: true,
      opacity: config.meshOpacity,
      blending: THREE.AdditiveBlending,
    });
    wireframeMatRef.current = wireframeMat;
    const wireframeMesh = new THREE.LineSegments(wireframeGeo, wireframeMat);
    globeGroup.add(wireframeMesh);

    // 9. LAYER D: UNDERSTATED ATMOSPHERIC FRESNEL RIM GLOW
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
      uniform float uIntensity;
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vec3 viewDir = normalize(-vPosition);
        float rim = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.8);
        
        vec3 leftLightDir = normalize(vec3(-0.85, 0.15, 0.5));
        float leftLight = max(dot(vNormal, leftLightDir), 0.0);
        
        float finalGlow = (rim * 0.65 + pow(leftLight, 2.8) * rim * 0.45) * uIntensity;
        vec3 glowColor = mix(vec3(0.12, 0.65, 0.45), vec3(0.2, 0.82, 0.65), rim);
        gl_FragColor = vec4(glowColor, finalGlow * 0.65);
      }
    `;

    const fresnelMat = new THREE.ShaderMaterial({
      uniforms: {
        uIntensity: { value: config.glowIntensity },
      },
      vertexShader: fresnelVertexShader,
      fragmentShader: fresnelFragmentShader,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    fresnelMatRef.current = fresnelMat;

    const fresnelSphere = new THREE.Mesh(
      new THREE.SphereGeometry(GLOBE_RADIUS * 1.035, 64, 64),
      fresnelMat
    );
    globeGroup.add(fresnelSphere);

    // 10. LAYER E: COUNTRY NODES, BEACONS & INTERACTION MARKERS
    const countryVectors: THREE.Vector3[] = COUNTRIES.map((c) =>
      latLonToVector3(c.lat, c.lon, GLOBE_RADIUS * 1.006)
    );
    countryVectorsRef.current = countryVectors;

    const markersGroup = new THREE.Group();
    const beaconHaloGeo = new THREE.RingGeometry(0.016, 0.038, 32);
    const beaconHaloMat = new THREE.MeshBasicMaterial({
      color: 0x5EC098,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const beaconDotGeo = new THREE.SphereGeometry(0.018, 16, 16);
    const beaconDotMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });

    const beaconMeshes: THREE.Mesh[] = [];

    countryVectors.forEach((pos) => {
      const dot = new THREE.Mesh(beaconDotGeo, beaconDotMat);
      dot.position.copy(pos);
      markersGroup.add(dot);
      beaconMeshes.push(dot);

      const halo = new THREE.Mesh(beaconHaloGeo, beaconHaloMat);
      halo.position.copy(pos.clone().multiplyScalar(1.002));
      halo.lookAt(new THREE.Vector3(0, 0, 0));
      markersGroup.add(halo);
    });
    globeGroup.add(markersGroup);

    // 11. LAYER F: MEANINGFUL GLOBAL ROUTES & ANIMATED LIGHT PULSES
    const arcCurves: THREE.Vector3[][] = [];
    const arcGroup = new THREE.Group();

    GLOBAL_ROUTES.forEach(([idxA, idxB]) => {
      const vA = countryVectors[idxA];
      const vB = countryVectors[idxB];
      if (!vA || !vB) return;

      const arcPoints = createElevatedArc(vA, vB, GLOBE_RADIUS, 0.18, 50);
      arcCurves.push(arcPoints);

      const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPoints);
      const arcMat = new THREE.LineBasicMaterial({
        color: 0x5EC098,
        transparent: true,
        opacity: 0.28,
        blending: THREE.AdditiveBlending,
      });
      const arcLine = new THREE.Line(arcGeo, arcMat);
      arcGroup.add(arcLine);
    });
    globeGroup.add(arcGroup);

    // Standard Route Light Pulses
    interface RoutePulse {
      arcIdx: number;
      t: number;
      speed: number;
      mesh: THREE.Mesh;
    }

    const pulseGeo = new THREE.SphereGeometry(0.022, 12, 12);
    const pulseMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      blending: THREE.AdditiveBlending,
    });

    const pulses: RoutePulse[] = arcCurves.map((curve, idx) => {
      const mesh = new THREE.Mesh(pulseGeo, pulseMat);
      globeGroup.add(mesh);
      return {
        arcIdx: idx,
        t: Math.random(),
        speed: 0.003 + Math.random() * 0.0025,
        mesh,
      };
    });

    // 12. LAYER G: UNIQUE OPASH SIGNATURE PULSE & RIPPLE EFFECT
    // Signature photon travels along Route 0 (India <-> UK) and triggers a surface ripple upon arrival
    const signatureGeo = new THREE.SphereGeometry(0.028, 16, 16);
    const signatureMat = new THREE.MeshBasicMaterial({
      color: 0x5EC098,
      blending: THREE.AdditiveBlending,
    });
    const signatureMesh = new THREE.Mesh(signatureGeo, signatureMat);
    globeGroup.add(signatureMesh);

    // Expanding ripple ring at India (Bengaluru)
    const rippleGeo = new THREE.RingGeometry(0.022, 0.046, 32);
    const rippleMat = new THREE.MeshBasicMaterial({
      color: 0x5EC098,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
    });
    const rippleMesh = new THREE.Mesh(rippleGeo, rippleMat);
    const indiaPos = countryVectors[0];
    if (indiaPos) {
      rippleMesh.position.copy(indiaPos.clone().multiplyScalar(1.004));
      rippleMesh.lookAt(new THREE.Vector3(0, 0, 0));
    }
    globeGroup.add(rippleMesh);

    let signatureT = 0;
    let rippleScale = 1;
    let isRippling = false;

    // 13. CINEMATIC BACKGROUND: FINE MICRO-SPARK DUST IN DEEP SPACE
    const starCount = 70;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const rad = GLOBE_RADIUS * (1.5 + Math.random() * 1.5);
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 0.35 + rad;
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x5EC098,
      size: 0.011,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });
    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);

    // Resize Observer
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || 560;
      height = container.clientHeight || 560;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    // Viewport Intersection Observer
    let isVisible = true;
    const io = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    io.observe(container);

    // 14. ANIMATION RENDER LOOP
    let reqId: number;
    const clock = new THREE.Clock();

    // Cache matrix and temp vectors for projected 2D coordinates
    const tempWorldPos = new THREE.Vector3();
    const tempCameraDir = new THREE.Vector3();
    const tempNormal = new THREE.Vector3();
    const globeCenter = new THREE.Vector3(0, 0, 0);

    const animate = () => {
      reqId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();

      // Smooth camera reset
      if (isResettingCamera.current) {
        camera.position.lerp(defaultCamPos.current, 0.07);
        if (camera.position.distanceTo(defaultCamPos.current) < 0.02) {
          camera.position.copy(defaultCamPos.current);
          isResettingCamera.current = false;
        }
      }

      controls.update();

      // Continuous slow rotation of Earth & Clouds
      if (!isInteracting && config.autoRotate && !prefersReducedMotion) {
        globeGroup.rotation.y += delta * config.rotationSpeed;
        cloudsMesh.rotation.y += delta * (config.rotationSpeed * 0.25);
        starPoints.rotation.y += delta * 0.015;
      }

      // Animate Route Pulses
      if (!prefersReducedMotion) {
        pulses.forEach((p) => {
          p.t += p.speed;
          if (p.t > 1) p.t = 0;

          const curve = arcCurves[p.arcIdx];
          if (curve && curve.length > 0) {
            const pointIdx = Math.floor(p.t * (curve.length - 1));
            const pt = curve[pointIdx];
            if (pt) p.mesh.position.copy(pt);
          }
        });

        // Animate OPASH Signature Pulse
        signatureT += delta * 0.18;
        if (signatureT > 1) {
          signatureT = 0;
          isRippling = true;
          rippleScale = 1;
        }

        const sigCurve = arcCurves[0]; // India <-> UK route
        if (sigCurve && sigCurve.length > 0) {
          const ptIdx = Math.floor(signatureT * (sigCurve.length - 1));
          const pt = sigCurve[ptIdx];
          if (pt) signatureMesh.position.copy(pt);
        }

        // Animate Arrival Ripple Ring
        if (isRippling) {
          rippleScale += delta * 1.8;
          rippleMesh.scale.setScalar(rippleScale);
          const rippleOpacity = Math.max(0, 1 - (rippleScale - 1) / 1.8);
          rippleMat.opacity = rippleOpacity * 0.7;
          if (rippleScale >= 2.8) {
            isRippling = false;
            rippleMat.opacity = 0;
          }
        }
      }

      // Calculate screen positions and occlusion for the 9 country labels
      globeGroup.updateMatrixWorld();
      const updatedCoords: { id: string; x: number; y: number; visible: boolean; dot: number }[] = [];

      countryVectors.forEach((localPos, idx) => {
        tempWorldPos.copy(localPos).applyMatrix4(globeGroup.matrixWorld);
        tempNormal.copy(tempWorldPos).sub(globeCenter).normalize();
        tempCameraDir.copy(camera.position).sub(tempWorldPos).normalize();
        
        // Dot product determines if point faces the camera (front hemisphere)
        const dot = tempNormal.dot(tempCameraDir);

        if (dot > 0.18) {
          const projected = tempWorldPos.clone().project(camera);
          const px = ((projected.x + 1) / 2) * width;
          const py = ((-projected.y + 1) / 2) * height;
          updatedCoords.push({
            id: COUNTRIES[idx].id,
            x: px,
            y: py,
            visible: true,
            dot,
          });
        } else {
          updatedCoords.push({
            id: COUNTRIES[idx].id,
            x: -999,
            y: -999,
            visible: false,
            dot,
          });
        }
      });

      setLabelCoords(updatedCoords);

      renderer.render(scene, camera);
    };

    animate();

    // 15. RESOURCE DISPOSAL ON UNMOUNT
    return () => {
      cancelAnimationFrame(reqId);
      if (interactionTimeout) clearTimeout(interactionTimeout);
      ro.disconnect();
      io.disconnect();
      controls.dispose();

      earthGeo.dispose();
      earthMat.dispose();
      earthMap.dispose();
      earthLights.dispose();
      earthNormal.dispose();
      earthSpec.dispose();
      earthClouds.dispose();
      cloudsGeo.dispose();
      cloudsMat.dispose();
      wireGeo.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
      fresnelMat.dispose();
      fresnelSphere.geometry.dispose();
      beaconHaloGeo.dispose();
      beaconHaloMat.dispose();
      beaconDotGeo.dispose();
      beaconDotMat.dispose();
      pulseGeo.dispose();
      pulseMat.dispose();
      signatureGeo.dispose();
      signatureMat.dispose();
      rippleGeo.dispose();
      rippleMat.dispose();
      starGeo.dispose();
      starMat.dispose();

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update live Three.js properties when config or theme changes
  useEffect(() => {
    if (wireframeMatRef.current) {
      wireframeMatRef.current.opacity = config.meshOpacity;
    }
    if (fresnelMatRef.current) {
      fresnelMatRef.current.uniforms.uIntensity.value = isLight ? 0.42 : config.glowIntensity;
    }
    if (earthMatRef.current) {
      earthMatRef.current.color.setHex(isLight ? 0x244b68 : 0x1a364a);
    }
    if (ambientLightRef.current) {
      ambientLightRef.current.color.setHex(isLight ? 0xbae6fd : 0x051324);
      ambientLightRef.current.intensity = isLight ? 1.85 : 1.4;
    }
    if (sunLightRef.current) {
      sunLightRef.current.color.setHex(isLight ? 0xffffff : 0xdcfce7);
      sunLightRef.current.intensity = isLight ? 2.5 : 2.2;
    }
  }, [config, isLight]);

  return (
    <div className="hero-interactive-globe-container" ref={containerRef}>
      {/* OPASH Brand "O" Logo Aperture Frame embracing the 3D Earth */}
      {config.showBrandFrame && (
        <div className="hero-opash-brand-aperture-wrap" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={isLight ? "/images/opash-o-portal-light.png" : "/images/opash-o-portal-dark.png"}
            alt="OPASH Brand Aperture"
            className="hero-opash-brand-aperture-img"
          />
          {/* Subtle concentric cyber glow ring */}
          <div className="hero-opash-aperture-ambient-glow" />
        </div>
      )}

      {/* 3D Three.js WebGL Canvas Mount */}
      <div
        ref={mountRef}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          cursor: isInteracting ? "grabbing" : "grab",
          zIndex: 8,
        }}
      />

      {/* HTML Overlay for Readable, Crisp Country Labels anchored to geographic positions */}
      <div className="hero-earth-labels-overlay" aria-hidden="true">
        {COUNTRIES.map((country) => {
          const coord = labelCoords.find((c) => c.id === country.id);
          if (!coord || !coord.visible) return null;

          const isSelected = selectedCountry === country.id;
          const isHovered = hoveredCountry === country.id;

          // Fade out gently as country rotates toward horizon
          const opacity = Math.min(1, Math.max(0, (coord.dot - 0.18) / 0.35));

          return (
            <div
              key={country.id}
              className={`hero-country-pill ${isSelected ? "selected" : ""} ${
                isHovered ? "hovered" : ""
              }`}
              style={{
                transform: `translate3d(${coord.x}px, ${coord.y}px, 0)`,
                opacity: opacity,
              }}
              onMouseEnter={() => setHoveredCountry(country.id)}
              onMouseLeave={() => setHoveredCountry(null)}
              onClick={() => setSelectedCountry((prev) => (prev === country.id ? null : country.id))}
            >
              <span className="hero-country-pill-dot" />
              <span className="hero-country-pill-name">{country.name}</span>

              {/* Hover Tooltip displaying city & presence */}
              {(isHovered || isSelected) && (
                <div className="hero-country-tooltip">
                  <div className="hero-tooltip-city">{country.city}</div>
                  <div className="hero-tooltip-sub">OPASH Global Market</div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Discreet Understated Adjustments Popover Trigger (Bottom Right) */}
      <div className="hero-globe-discreet-control">
        <button
          type="button"
          onClick={() => setIsPanelOpen((prev) => !prev)}
          className={`hero-discreet-btn ${isPanelOpen ? "active" : ""}`}
          title="Adjust Earth Settings"
          aria-label="Adjust Earth Settings"
        >
          <Sliders size={13} />
        </button>
      </div>

      {/* Compact Understated Popover (Closed by default) */}
      {isPanelOpen && (
        <div className="hero-discreet-panel">
          <div className="hero-discreet-panel-header">
            <span className="hero-discreet-panel-title">Earth Controls</span>
            <button
              type="button"
              onClick={() => setIsPanelOpen(false)}
              className="hero-discreet-close-btn"
              aria-label="Close controls"
            >
              <X size={14} />
            </button>
          </div>

          <div className="hero-discreet-panel-body">
            {/* Rotation Speed */}
            <div className="hero-discreet-item">
              <div className="hero-discreet-label-row">
                <span>Rotation Speed</span>
                <span className="hero-discreet-val">
                  {(config.rotationSpeed * 10).toFixed(1)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="0.2"
                step="0.01"
                value={config.rotationSpeed}
                onChange={(e) =>
                  setConfig((prev) => ({
                    ...prev,
                    rotationSpeed: parseFloat(e.target.value),
                  }))
                }
                className="hero-discreet-slider"
              />
            </div>

            {/* Network Overlay */}
            <div className="hero-discreet-item">
              <div className="hero-discreet-label-row">
                <span>Network Grid</span>
                <span className="hero-discreet-val">
                  {Math.round(config.meshOpacity * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0.04"
                max="0.25"
                step="0.01"
                value={config.meshOpacity}
                onChange={(e) =>
                  setConfig((prev) => ({
                    ...prev,
                    meshOpacity: parseFloat(e.target.value),
                  }))
                }
                className="hero-discreet-slider"
              />
            </div>

            {/* Atmosphere Glow */}
            <div className="hero-discreet-item">
              <div className="hero-discreet-label-row">
                <span>Atmosphere Rim</span>
                <span className="hero-discreet-val">
                  {config.glowIntensity.toFixed(2)}
                </span>
              </div>
              <input
                type="range"
                min="0.2"
                max="1.0"
                step="0.05"
                value={config.glowIntensity}
                onChange={(e) =>
                  setConfig((prev) => ({
                    ...prev,
                    glowIntensity: parseFloat(e.target.value),
                  }))
                }
                className="hero-discreet-slider"
              />
            </div>

            {/* Auto-Rotation Toggle */}
            <div className="hero-discreet-toggle-row">
              <span>Auto-Rotation</span>
              <button
                type="button"
                onClick={() =>
                  setConfig((prev) => ({ ...prev, autoRotate: !prev.autoRotate }))
                }
                className={`hero-discreet-switch ${config.autoRotate ? "on" : "off"}`}
                aria-pressed={config.autoRotate}
              >
                <span className="hero-discreet-thumb" />
              </button>
            </div>

            {/* OPASH "O" Aperture Toggle */}
            <div className="hero-discreet-toggle-row">
              <span>OPASH "O" Aperture</span>
              <button
                type="button"
                onClick={() =>
                  setConfig((prev) => ({
                    ...prev,
                    showBrandFrame: !prev.showBrandFrame,
                  }))
                }
                className={`hero-discreet-switch ${
                  config.showBrandFrame ? "on" : "off"
                }`}
                aria-pressed={config.showBrandFrame}
              >
                <span className="hero-discreet-thumb" />
              </button>
            </div>
          </div>

          <div className="hero-discreet-panel-footer">
            <button
              type="button"
              onClick={handleResetCamera}
              className="hero-discreet-action-btn"
              title="Reset viewing angle"
            >
              <RotateCcw size={12} />
              <span>Recenter</span>
            </button>
            <button
              type="button"
              onClick={handleResetDefaults}
              className="hero-discreet-action-btn"
            >
              <span>Reset</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
