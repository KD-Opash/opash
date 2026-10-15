"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import * as THREE from "three";

export interface GlobeLocation {
  id: string;
  name: string;
  label: string;
  lat: number;
  lon: number;
  city: string;
  country: string;
  isHQ?: boolean;
}

export const GLOBE_LOCATIONS: GlobeLocation[] = [
  {
    id: "india",
    name: "India (Global Engineering HQ)",
    label: "india",
    lat: 21.1702,
    lon: 72.8311,
    city: "Surat",
    country: "India",
    isHQ: true,
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    label: "uae",
    lat: 25.2048,
    lon: 55.2708,
    city: "Dubai",
    country: "UAE",
  },
  {
    id: "uk",
    name: "United Kingdom",
    label: "uk",
    lat: 51.5074,
    lon: -0.1278,
    city: "London",
    country: "United Kingdom",
  },
  {
    id: "europe",
    name: "Europe",
    label: "europe",
    lat: 52.52,
    lon: 13.405,
    city: "Berlin",
    country: "Germany",
  },
  {
    id: "usa",
    name: "USA",
    label: "usa",
    lat: 37.7749,
    lon: -122.4194,
    city: "San Francisco",
    country: "United States",
  },
  {
    id: "canada",
    name: "Canada",
    label: "canada",
    lat: 43.6532,
    lon: -79.3832,
    city: "Toronto",
    country: "Canada",
  },
  {
    id: "australia",
    name: "Australia",
    label: "australia",
    lat: -33.8688,
    lon: 151.2093,
    city: "Sydney",
    country: "Australia",
  },
  {
    id: "brazil",
    name: "Brazil",
    label: "brazil",
    lat: -23.5505,
    lon: -46.6333,
    city: "São Paulo",
    country: "Brazil",
  },
];

const GLOBE_RADIUS = 2.75;

// Convert Lat/Lon to 3D Cartesian coordinates matching equirectangular Earth textures
function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

// Spherical Linear Interpolation (SLERP) to generate great-circle parabolic 3D arcs
function createGeodesicArc(
  startPos: THREE.Vector3,
  endPos: THREE.Vector3,
  globeRadius: number,
  maxAltitudeFactor = 0.42,
  numPoints = 80
): THREE.Vector3[] {
  const v1 = startPos.clone().normalize();
  const v2 = endPos.clone().normalize();
  const angle = v1.angleTo(v2);

  // Peak altitude arching naturally high over the curvature matching Image 1
  const peakAltitude = globeRadius + Math.sin(angle / 2) * globeRadius * maxAltitudeFactor;
  const points: THREE.Vector3[] = [];

  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    const q = new THREE.Quaternion();
    q.slerpQuaternions(new THREE.Quaternion(), new THREE.Quaternion().setFromUnitVectors(v1, v2), t);

    const pt = v1.clone().applyQuaternion(q);
    const altitude = globeRadius + (peakAltitude - globeRadius) * Math.sin(t * Math.PI);
    pt.multiplyScalar(altitude);
    points.push(pt);
  }

  return points;
}

interface ProjectedLabel {
  location: GlobeLocation;
  dotX: number;
  dotY: number;
  badgeAnchorX: number;
  badgeAnchorY: number;
  isLeft: boolean;
  visible: boolean;
}

export interface InteractiveEarthGlobeProps {
  className?: string;
  introAnimation?: boolean;
  onAnimationSettled?: () => void;
}

export default function InteractiveEarthGlobe({
  className = "",
  introAnimation = true,
  onAnimationSettled,
}: InteractiveEarthGlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [projectedLabels, setProjectedLabels] = useState<ProjectedLabel[]>([]);
  const [introSettled, setIntroSettled] = useState(!introAnimation);

  const onAnimationSettledRef = useRef(onAnimationSettled);
  onAnimationSettledRef.current = onAnimationSettled;

  const targetRotation = useRef<{ x: number; y: number } | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rotationVelocity = useRef({ x: 0, y: 0.0012 });
  const isPointerDown = useRef(false);
  const prevPointerPos = useRef({ x: 0, y: 0 });
  const lastInteractionTime = useRef(0);
  const mouseParallax = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Main Three.js Scene Setup
  useEffect(() => {
    lastInteractionTime.current = Date.now();
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let width = container.clientWidth || window.innerWidth || 1200;
    let height = container.clientHeight || window.innerHeight || 800;

    // 1. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.22;

    // 2. Scene & Camera Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    cameraRef.current = camera;

    // 3. Main Rotating Globe Group
    const globeGroup = new THREE.Group();
    globeGroupRef.current = globeGroup;
    scene.add(globeGroup);

    // Responsive Target Layout Calculation (Cleanly on the Right side on desktop, bottom center on mobile)
    const getTargetLayout = () => {
      const w = window.innerWidth || 1200;
      const isDesktop = w >= 992;
      const isWide = w >= 1400;
      return {
        globeX: isDesktop ? (isWide ? 3.5 : 2.8) : 0,
        globeY: isDesktop ? -0.1 : -1.68,
        globeZ: 0,
        cameraLookX: 0,
        cameraLookY: isDesktop ? -0.05 : -1.05,
        cameraZ: isDesktop ? 9.8 : 10.2,
      };
    };
    let target = getTargetLayout();

    // Initial setup for Opening Animation:
    if (introAnimation) {
      globeGroup.position.set(target.globeX, -4.5, 1.5);
      globeGroup.rotation.y = -1.18;
      globeGroup.rotation.x = 0.22;
      camera.position.set(0, 0.35, 5.8);
      camera.lookAt(target.cameraLookX, -1.35, 0);
    } else {
      globeGroup.position.set(target.globeX, target.globeY, target.globeZ);
      globeGroup.rotation.y = -1.18;
      globeGroup.rotation.x = 0.22;
      camera.position.set(0, 0.0, target.cameraZ);
      camera.lookAt(target.cameraLookX, target.cameraLookY, 0);
    }

    // 4. Photorealistic Earth Textures
    const textureLoader = new THREE.TextureLoader();
    const dayTexture = textureLoader.load("/images/textures/earth_atmos_2048.jpg");
    const normalTexture = textureLoader.load("/images/textures/earth_normal_2048.jpg");
    const specularTexture = textureLoader.load("/images/textures/earth_specular_2048.jpg");
    const nightTexture = textureLoader.load("/images/textures/earth_lights_2048.png");
    const cloudsTexture = textureLoader.load("/images/textures/earth_clouds_1024.png");

    dayTexture.colorSpace = THREE.SRGBColorSpace;
    nightTexture.colorSpace = THREE.SRGBColorSpace;
    cloudsTexture.colorSpace = THREE.SRGBColorSpace;
    dayTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    // 5. High-Resolution Real Earth Mesh (Photorealistic solid shading matching image 3)
    const earthGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 128, 128);
    const earthMat = new THREE.MeshStandardMaterial({
      map: dayTexture,
      normalMap: normalTexture,
      normalScale: new THREE.Vector2(0.85, 0.85),
      roughnessMap: specularTexture,
      roughness: 0.65,
      metalness: 0.1,
      transparent: false,
      opacity: 1.0,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    globeGroup.add(earthMesh);

    // 6. Night City Lights Layer (Glowing on the dark side of Earth)
    const sunDirection = new THREE.Vector3(5, 3, 7).normalize();
    const nightGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.0012, 128, 128);
    const nightMat = new THREE.ShaderMaterial({
      uniforms: {
        uNightTexture: { value: nightTexture },
        uSunDir: { value: sunDirection },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uNightTexture;
        uniform vec3 uSunDir;
        varying vec3 vNormal;
        varying vec2 vUv;
        void main() {
          vec4 cityColor = texture2D(uNightTexture, vUv);
          float sunDot = dot(vNormal, uSunDir);
          float nightFactor = smoothstep(0.25, -0.3, sunDot);
          vec3 luminousLights = cityColor.rgb * vec3(1.35, 1.25, 0.95) * 2.5;
          gl_FragColor = vec4(luminousLights, cityColor.r * nightFactor * 0.92);
        }
      `,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });
    const nightMesh = new THREE.Mesh(nightGeo, nightMat);
    globeGroup.add(nightMesh);

    // 7. Atmospheric Clouds Layer
    const cloudsGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.012, 96, 96);
    const cloudsMat = new THREE.MeshStandardMaterial({
      map: cloudsTexture,
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const cloudsMesh = new THREE.Mesh(cloudsGeo, cloudsMat);
    globeGroup.add(cloudsMesh);

    // 8. Subtle Natural Atmospheric Rim Halo (Reduced Blue Shading as requested)
    const atmosphereGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.025, 64, 64);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.55 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.8);
          vec3 halo = mix(vec3(0.22, 0.65, 1.0), vec3(0.12, 0.45, 0.95), intensity);
          gl_FragColor = vec4(halo, 1.0) * intensity * 0.72;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    globeGroup.add(atmosphereMesh);

    // 9. Elegant Subtle Cosmic Star Dust (Clean & Balanced across both Dark and Light themes)
    const starCount = 650;
    const starPositions: number[] = [];
    const darkStarColors: number[] = [];
    const lightStarColors: number[] = [];

    for (let i = 0; i < starCount; i++) {
      let x: number, y: number, z: number;

      if (i < starCount * 0.6) {
        const isLeft = Math.random() > 0.5;
        // Left flank: -2.8 to -9.0, Right flank: +2.8 to +9.0
        x = isLeft ? -(2.8 + Math.random() * 6.7) : (2.8 + Math.random() * 6.7);
        y = (Math.random() - 0.5) * 8.5;
        // Keep stars strictly in the background behind text (z <= -1.2)
        z = -(1.2 + Math.random() * 6.5);
      } else {
        const dist = 6.0 + Math.random() * 8.5;
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = Math.cbrt(Math.random()) * dist;
        const sinPhi = Math.sin(phi);
        x = r * sinPhi * Math.cos(theta);
        y = r * sinPhi * Math.sin(theta);
        // Push background stars safely behind z = -1.2
        z = -Math.abs(r * Math.cos(phi)) - 1.2;
      }
      starPositions.push(x, y, z);

      // Dark Theme Star Colors (Radiant White, Electric Cyan, Light Ice Blue, Soft Mint)
      const darkRand = Math.random();
      if (darkRand > 0.68) {
        darkStarColors.push(1.0, 1.0, 1.0); // Pure White
      } else if (darkRand > 0.42) {
        darkStarColors.push(0.38, 0.75, 0.98); // Vibrant Cyan
      } else if (darkRand > 0.2) {
        darkStarColors.push(0.65, 0.88, 1.0); // Ice Blue
      } else {
        darkStarColors.push(0.55, 0.92, 0.8); // Soft Mint
      }

      // Light Theme Dots: Soft, subtle, delicate celestial tones (Not harsh or crowded)
      const lightRand = Math.random();
      if (lightRand > 0.6) {
        lightStarColors.push(0.42, 0.52, 0.7); // Subtle Slate Blue
      } else if (lightRand > 0.3) {
        lightStarColors.push(0.35, 0.58, 0.65); // Soft Muted Cyan
      } else {
        lightStarColors.push(0.48, 0.52, 0.62); // Delicate Slate
      }
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.Float32BufferAttribute(starPositions, 3));

    const isInitialLight = typeof document !== "undefined" && document.documentElement.getAttribute("data-theme") === "light";
    const initialColors = new Float32Array(isInitialLight ? lightStarColors : darkStarColors);
    starGeo.setAttribute("color", new THREE.BufferAttribute(initialColors, 3));

    // Circular Soft Star Texture to eliminate square pixel artifacts
    const createStarTexture = () => {
      const c = document.createElement("canvas");
      c.width = 32;
      c.height = 32;
      const cCtx = c.getContext("2d");
      if (cCtx) {
        const grad = cCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
        grad.addColorStop(0, "rgba(255, 255, 255, 1)");
        grad.addColorStop(0.35, "rgba(255, 255, 255, 0.75)");
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");
        cCtx.fillStyle = grad;
        cCtx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(c);
    };

    const starMat = new THREE.PointsMaterial({
      size: isInitialLight ? 0.055 : 0.065,
      map: createStarTexture(),
      vertexColors: true,
      transparent: true,
      opacity: isInitialLight ? 0.45 : 0.75,
      depthWrite: false,
    });
    const starMesh = new THREE.Points(starGeo, starMat);
    scene.add(starMesh);

    // Dynamic Theme Observer for Star Particles
    const updateThemeStars = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      const targetColors = isLight ? lightStarColors : darkStarColors;
      const colorAttr = starGeo.getAttribute("color") as THREE.BufferAttribute;
      if (colorAttr) {
        for (let j = 0; j < targetColors.length; j++) {
          colorAttr.array[j] = targetColors[j];
        }
        colorAttr.needsUpdate = true;
      }
      starMat.size = isLight ? 0.045 : 0.052;
      starMat.opacity = isLight ? 0.52 : 0.76;
    };

    const themeObserver = new MutationObserver(() => {
      updateThemeStars();
    });
    if (typeof document !== "undefined") {
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });
    }

    // 10. Surat HQ (India) Epicenter Point (Crisp Clean White Pin)
    const hqLoc = GLOBE_LOCATIONS.find((l) => l.isHQ)!;
    const hqPos = latLonToVector3(hqLoc.lat, hqLoc.lon, GLOBE_RADIUS);

    const hqCoreGeo = new THREE.SphereGeometry(0.024, 16, 16);
    const hqCoreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const hqCoreMesh = new THREE.Mesh(hqCoreGeo, hqCoreMat);
    hqCoreMesh.position.copy(hqPos);
    globeGroup.add(hqCoreMesh);

    // 11. Client Country Glowing Endpoint Nodes (Crisp Clean Pure White)
    const targetLocations = GLOBE_LOCATIONS.filter((l) => !l.isHQ);
    targetLocations.forEach((loc) => {
      const pos = latLonToVector3(loc.lat, loc.lon, GLOBE_RADIUS);
      const nodeGeo = new THREE.SphereGeometry(0.018, 12, 12);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      globeGroup.add(nodeMesh);
    });

    // 12. PURE Radiant Great-Circle Laser Arcs (JUST PURE WHITE LINES, Zero Moving Dots/Comets)
    interface ArcData {
      locId: string;
      tubeMesh: THREE.Mesh;
    }

    const arcs: ArcData[] = [];

    targetLocations.forEach((loc) => {
      const targetPos = latLonToVector3(loc.lat, loc.lon, GLOBE_RADIUS);
      const arcPoints = createGeodesicArc(hqPos, targetPos, GLOBE_RADIUS, 0.42, 80);
      const curve = new THREE.CatmullRomCurve3(arcPoints);

      // Sleek 3D Pure White Laser Line with High-Altitude Arching
      const tubeGeo = new THREE.TubeGeometry(curve, 80, 0.0075, 8, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: new THREE.Color(0xffffff),
        emissiveIntensity: 3.2,
        roughness: 0.1,
        metalness: 0.9,
        transparent: true,
        opacity: 0.95,
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      globeGroup.add(tubeMesh);

      arcs.push({
        locId: loc.id,
        tubeMesh,
      });
    });

    // 14. Dynamic Space Lighting (No Green Shading/Rounds)
    const ambientLight = new THREE.AmbientLight(0x142848, 0.75);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.5);
    sunLight.position.copy(sunDirection.clone().multiplyScalar(10));
    scene.add(sunLight);

    const cyanRimLight = new THREE.PointLight(0x38bdf8, 1.8, 20);
    cyanRimLight.position.set(6, -2, 6);
    scene.add(cyanRimLight);

    const softFillLight = new THREE.PointLight(0xffffff, 0.6, 18);
    softFillLight.position.set(-6, 3, 5);
    scene.add(softFillLight);

    // 15. Mouse-Reactive 3D Parallax & Drag Controls
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isPointerDown.current = true;
      setIsDragging(true);
      targetRotation.current = null;
      lastInteractionTime.current = Date.now();

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      prevPointerPos.current = { x: clientX, y: clientY };
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const rect = container.getBoundingClientRect();
      const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((clientY - rect.top) / rect.height) * 2 - 1);
      mouseParallax.current.targetX = nx * 0.28;
      mouseParallax.current.targetY = ny * 0.28;

      if (!isPointerDown.current || !globeGroupRef.current) return;
      lastInteractionTime.current = Date.now();

      const deltaX = clientX - prevPointerPos.current.x;
      const deltaY = clientY - prevPointerPos.current.y;
      prevPointerPos.current = { x: clientX, y: clientY };

      globeGroupRef.current.rotation.y += deltaX * 0.0055;
      globeGroupRef.current.rotation.x += deltaY * 0.0055;
      globeGroupRef.current.rotation.x = Math.max(
        -Math.PI / 3,
        Math.min(Math.PI / 3, globeGroupRef.current.rotation.x)
      );

      rotationVelocity.current = {
        x: deltaY * 0.0003,
        y: deltaX * 0.0008,
      };
    };

    const handlePointerUp = () => {
      isPointerDown.current = false;
      setIsDragging(false);
    };

    const domElement = canvas;
    domElement.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);

    domElement.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("touchend", handlePointerUp);

    // 16. Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      width = container.clientWidth || window.innerWidth || 1200;
      height = container.clientHeight || window.innerHeight || 800;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      target = getTargetLayout();
    };
    window.addEventListener("resize", handleResize);

    // 17. Animation Loop (Image 4 Bottom Half-Earth -> Smooth Pullback to Right-Side Earth on Desktop / Bottom on Mobile)
    let animationFrameId: number;
    let clock = 0;
    const introStartTime = Date.now();
    const INTRO_DURATION = 2800;
    let introTriggered = false;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      clock += 0.016;

      // Slowly drift clouds across continents
      cloudsMesh.rotation.y += 0.00035;

      // Subtle star drift
      starMesh.rotation.y += 0.0002;

      // Mouse Parallax Lerp for Volumetric Depth
      mouseParallax.current.x = THREE.MathUtils.lerp(
        mouseParallax.current.x,
        mouseParallax.current.targetX,
        0.05
      );
      mouseParallax.current.y = THREE.MathUtils.lerp(
        mouseParallax.current.y,
        mouseParallax.current.targetY,
        0.05
      );

      // CINEMATIC OPENING ANIMATION:
      // Half-Earth begins rising from the bottom across full screen,
      // then glides up and pulls back into settled position on the right side on desktop!
      if (introAnimation) {
        const elapsed = Date.now() - introStartTime;
        if (elapsed < INTRO_DURATION) {
          const p = elapsed / INTRO_DURATION;
          const ease = 1 - Math.pow(1 - p, 3);

          // Interpolate Earth position vertically in its right-side stage (desktop) or bottom (mobile)
          globeGroup.position.x = target.globeX;
          globeGroup.position.y = THREE.MathUtils.lerp(-4.5, target.globeY, ease);
          globeGroup.position.z = THREE.MathUtils.lerp(1.5, target.globeZ, ease);
          globeGroup.rotation.x = THREE.MathUtils.lerp(0.28, 0.22, ease);

          // Interpolate Camera from low horizon angle to showcase distance
          camera.position.z = THREE.MathUtils.lerp(5.8, target.cameraZ, ease);
          camera.position.y = THREE.MathUtils.lerp(0.35, 0.0, ease) + mouseParallax.current.y;
          camera.position.x = mouseParallax.current.x;

          const lookX = target.cameraLookX;
          const lookY = THREE.MathUtils.lerp(-1.35, target.cameraLookY, ease);
          camera.lookAt(lookX, lookY, 0);

          if (p >= 0.85 && !introTriggered) {
            introTriggered = true;
            setIntroSettled(true);
            onAnimationSettledRef.current?.();
          }
        } else {
          if (!introTriggered) {
            introTriggered = true;
            setIntroSettled(true);
            onAnimationSettledRef.current?.();
          }
          globeGroup.position.set(target.globeX, target.globeY, target.globeZ);
          camera.position.z = target.cameraZ;
          camera.position.y = 0.0 + mouseParallax.current.y;
          camera.position.x = mouseParallax.current.x;
          camera.lookAt(target.cameraLookX, target.cameraLookY, 0);
        }
      } else {
        globeGroup.position.set(target.globeX, target.globeY, target.globeZ);
        camera.position.z = target.cameraZ;
        camera.position.x = mouseParallax.current.x;
        camera.position.y = 0.0 + mouseParallax.current.y;
        camera.lookAt(target.cameraLookX, target.cameraLookY, 0);
      }

      // Continuous gentle rotation & spin controls
      if (targetRotation.current && globeGroupRef.current && !isPointerDown.current) {
        let diffY = (targetRotation.current.y - globeGroupRef.current.rotation.y) % (Math.PI * 2);
        if (diffY > Math.PI) diffY -= Math.PI * 2;
        if (diffY < -Math.PI) diffY += Math.PI * 2;

        const diffX = targetRotation.current.x - globeGroupRef.current.rotation.x;

        if (Math.abs(diffY) > 0.003 || Math.abs(diffX) > 0.003) {
          globeGroupRef.current.rotation.y += diffY * 0.075;
          globeGroupRef.current.rotation.x += diffX * 0.075;
        } else {
          globeGroupRef.current.rotation.y = targetRotation.current.y;
          globeGroupRef.current.rotation.x = targetRotation.current.x;
          targetRotation.current = null;
          lastInteractionTime.current = Date.now() + 6000;
        }
      } else if (!isPointerDown.current && globeGroupRef.current) {
        const timeSinceDrag = Date.now() - lastInteractionTime.current;
        if (timeSinceDrag > 0) {
          rotationVelocity.current.y = THREE.MathUtils.lerp(
            rotationVelocity.current.y,
            0.0012,
            0.02
          );
          rotationVelocity.current.x = THREE.MathUtils.lerp(
            rotationVelocity.current.x,
            0,
            0.02
          );
        } else {
          rotationVelocity.current.y *= 0.95;
          rotationVelocity.current.x *= 0.95;
        }

        globeGroupRef.current.rotation.y += rotationVelocity.current.y;
        globeGroupRef.current.rotation.x += rotationVelocity.current.x;
      }

      // Update Pure 3D Radiant Arcs (Just Lines, No Moving Dots)
      arcs.forEach((arc) => {
        arc.tubeMesh.visible = (introTriggered || !introAnimation);
      });

      // Render Three.js Scene
      renderer.render(scene, camera);

      // Project Small Letter Country Names with Leader Lines directly from surface nodes
      if (globeGroupRef.current && (introTriggered || !introAnimation)) {
        const globeScreenPos = globeGroupRef.current.position.clone().project(camera);
        const globeCenterX = ((globeScreenPos.x + 1) / 2) * width;
        const globeCenterY = ((-globeScreenPos.y + 1) / 2) * height;

        const labels: ProjectedLabel[] = GLOBE_LOCATIONS.map((loc) => {
          const worldPos = latLonToVector3(loc.lat, loc.lon, GLOBE_RADIUS);
          worldPos.applyEuler(globeGroupRef.current!.rotation);
          worldPos.add(globeGroupRef.current!.position);

          const normal = worldPos.clone().sub(globeGroupRef.current!.position).normalize();
          const toCamera = camera.position.clone().sub(worldPos).normalize();
          const dot = normal.dot(toCamera);
          const isFront = dot > -0.06;

          const screenPos = worldPos.clone().project(camera);
          const dotX = ((screenPos.x + 1) / 2) * width;
          const dotY = ((-screenPos.y + 1) / 2) * height;

          // Radial direction outward from globe center to naturally arch outward
          const dx = dotX - globeCenterX;
          const dy = dotY - globeCenterY;
          const dist = Math.hypot(dx, dy) || 1;
          const normX = dx / dist;
          const normY = dy / dist;

          // Leader line length (34px outward)
          const leaderLen = 34;
          const badgeAnchorX = dotX + normX * leaderLen;
          const badgeAnchorY = dotY + normY * leaderLen;
          const isLeft = normX < 0;

          return {
            location: loc,
            dotX,
            dotY,
            badgeAnchorX,
            badgeAnchorY,
            isLeft,
            visible: isFront,
          };
        });

        setProjectedLabels(labels);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      domElement.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
      window.removeEventListener("resize", handleResize);
      themeObserver.disconnect();
      renderer.dispose();
      starGeo.dispose();
      starMat.dispose();
      earthGeo.dispose();
      earthMat.dispose();
      nightGeo.dispose();
      nightMat.dispose();
      cloudsGeo.dispose();
      cloudsMat.dispose();
      atmosphereGeo.dispose();
      atmosphereMat.dispose();
      dayTexture.dispose();
      normalTexture.dispose();
      specularTexture.dispose();
      nightTexture.dispose();
      cloudsTexture.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`interactive-earth-globe-wrapper ${className}`}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        zIndex: 5, // Sits in front of the H1 title layer (which is at z-index: 2)
      }}
    >
      {/* 3D Canvas spanning the full screen */}
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          outline: "none",
          opacity: 0.94,
        }}
      />

      {/* Clean Country Pill Badges & Leader Lines matching Image 1 */}
      <div
        className="globe-labels-overlay"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            overflow: "visible",
          }}
        >
          {introSettled && projectedLabels.map(({ location, dotX, dotY, badgeAnchorX, badgeAnchorY, visible }) => {
            if (!visible) return null;
            return (
              <g key={`leader-${location.id}`}>
                {/* Surface Pin Node with glowing cyan ring */}
                <circle
                  cx={dotX}
                  cy={dotY}
                  r="2.5"
                  fill="#ffffff"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                />
                {/* Crisp White Leader Line from Surface Node to Badge Anchor */}
                <line
                  x1={dotX}
                  y1={dotY}
                  x2={badgeAnchorX}
                  y2={badgeAnchorY}
                  stroke="rgba(255, 255, 255, 0.88)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </g>
            );
          })}
        </svg>

        {introSettled && projectedLabels.map(({ location, badgeAnchorX, badgeAnchorY, isLeft, visible }) => {
          if (!visible) return null;
          return (
            <div
              key={location.id}
              style={{
                position: "absolute",
                left: `${badgeAnchorX}px`,
                top: `${badgeAnchorY}px`,
                transform: isLeft ? "translate(calc(-100% - 4px), -50%)" : "translate(4px, -50%)",
                pointerEvents: "none",
                zIndex: 20,
                whiteSpace: "nowrap",
              }}
            >
              <span className="globe-country-label">
                {location.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
