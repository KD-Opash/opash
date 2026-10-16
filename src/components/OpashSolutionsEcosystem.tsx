"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useTheme } from "./ThemeProvider";
import { Sparkles, Layers, Cpu, Cloud, Smartphone, Network, RotateCcw, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface EcosystemCapability {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  accent: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  metrics: string;
  link: string;
  defaultPos: [number, number, number];
  scale: number;
}

export const ECOSYSTEM_CAPABILITIES: EcosystemCapability[] = [
  {
    id: "custom-software",
    title: "Custom Software",
    subtitle: "Bespoke Enterprise Systems",
    badge: "Scalable Architecture",
    accent: "#00bbab",
    icon: Layers,
    metrics: "100% Bespoke · 0 Lock-in",
    link: "/services/custom-software-development",
    defaultPos: [-2.4, 1.35, 0.35],
    scale: 0.72,
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    subtitle: "Enterprise LLMs & Agents",
    badge: "Intelligent Workflows",
    accent: "#2dd4bf",
    icon: Cpu,
    metrics: "RAG & Vector Pipelines",
    link: "/services/ai-ml-solutions",
    defaultPos: [2.35, 1.45, -0.2],
    scale: 0.68,
  },
  {
    id: "cloud-platforms",
    title: "Cloud Platforms",
    subtitle: "Multi-Tenant SaaS & DevOps",
    badge: "High Availability",
    accent: "#38bdf8",
    icon: Cloud,
    metrics: "99.99% Uptime SLA",
    link: "/services/saas-development",
    defaultPos: [2.5, -1.05, 0.45],
    scale: 0.7,
  },
  {
    id: "mobile-web",
    title: "Mobile & Web",
    subtitle: "High-Performance Products",
    badge: "iOS, Android & Next.js",
    accent: "#5EC098",
    icon: Smartphone,
    metrics: "Sub-Second Latency",
    link: "/services/mobile-app-development",
    defaultPos: [-0.35, -2.15, 0.75],
    scale: 0.68,
  },
  {
    id: "systems-integration",
    title: "Systems Integration",
    subtitle: "High-Throughput APIs",
    badge: "Distributed Core",
    accent: "#0ea5e9",
    icon: Network,
    metrics: "Real-Time Event Streams",
    link: "/services/custom-software-development",
    defaultPos: [-2.45, -1.05, -0.55],
    scale: 0.7,
  },
];

export default function OpashSolutionsEcosystem() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const containerRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);

  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isEmerging, setIsEmerging] = useState(true);

  // Screen projected coordinates for interactive capability cards
  const [projectedCoords, setProjectedCoords] = useState<
    { id: string; x: number; y: number; visible: boolean }[]
  >([]);

  // Three.js object references
  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const defaultCamPos = useMemo(() => new THREE.Vector3(0, 0, 7.8), []);
  const isResettingCamera = useRef(false);

  // Satellite node interactive mesh tracking
  const interactiveMeshesRef = useRef<{ mesh: THREE.Object3D; id: string }[]>([]);

  const handleResetCamera = useCallback(() => {
    isResettingCamera.current = true;
    if (controlsRef.current) {
      controlsRef.current.target.set(0, 0, 0);
    }
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 540;
    let height = container.clientHeight || 500;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. SCENE SETUP
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.copy(defaultCamPos);
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
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isLight ? 1.4 : 1.25;
    renderer.domElement.style.touchAction = "none";
    renderer.domElement.style.outline = "none";
    container.appendChild(renderer.domElement);

    // 3. ORBIT CONTROLS (Gentle exploration, clamped distances)
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
      }, 1200);
    });

    // 4. LIGHTING SYSTEM (Atmospheric emerald, azure & key illumination)
    const ambientLight = new THREE.AmbientLight(
      isLight ? 0xbae6fd : 0x06182c,
      isLight ? 1.8 : 1.4
    );
    scene.add(ambientLight);

    const primaryLight = new THREE.DirectionalLight(
      isLight ? 0xffffff : 0xecfdf5,
      isLight ? 2.6 : 2.2
    );
    primaryLight.position.set(5, 7, 6);
    scene.add(primaryLight);

    const emeraldRimLight = new THREE.DirectionalLight(0x00bbab, isLight ? 1.2 : 2.0);
    emeraldRimLight.position.set(-6, -4, -4);
    scene.add(emeraldRimLight);

    const azureBackLight = new THREE.DirectionalLight(0x0ea5e9, isLight ? 0.8 : 1.5);
    azureBackLight.position.set(3, -6, -5);
    scene.add(azureBackLight);

    // 5. ECOSYSTEM ROOT GROUP
    const ecosystemGroup = new THREE.Group();
    scene.add(ecosystemGroup);

    // Track meshes for raycasting
    const interactiveMeshes: { mesh: THREE.Object3D; id: string }[] = [];
    interactiveMeshesRef.current = interactiveMeshes;

    // =========================================================================
    // 6. CENTRAL UNIFYING OPASH CORE (The Technology Nucleus)
    // =========================================================================
    const coreGroup = new THREE.Group();
    ecosystemGroup.add(coreGroup);

    // A. Inner Radiant Energy Crystal (Rhombic Dodecahedron)
    const innerCoreGeo = new THREE.DodecahedronGeometry(0.72, 1);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(isLight ? 0x00bbab : 0x00bbab),
      emissive: new THREE.Color(0x00bbab),
      emissiveIntensity: isLight ? 1.2 : 1.6,
      roughness: 0.15,
      metalness: 0.3,
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    coreGroup.add(innerCoreMesh);

    // B. Outer Frosted Emerald Glass Shield (Architectural Chamfered Icosahedron)
    const outerCoreGeo = new THREE.IcosahedronGeometry(0.96, 0);
    const outerCoreMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(isLight ? 0xd1fae5 : 0x003b36),
      emissive: new THREE.Color(0x00bbab),
      emissiveIntensity: 0.25,
      roughness: 0.18,
      metalness: 0.1,
      transmission: 0.75,
      ior: 1.5,
      transparent: true,
      opacity: isLight ? 0.7 : 0.65,
    });
    const outerCoreMesh = new THREE.Mesh(outerCoreGeo, outerCoreMat);
    coreGroup.add(outerCoreMesh);

    // Core Wireframe Contour Accent Lines
    const coreWireGeo = new THREE.WireframeGeometry(outerCoreGeo);
    const coreWireMat = new THREE.LineBasicMaterial({
      color: new THREE.Color(0x5EC098),
      transparent: true,
      opacity: isLight ? 0.45 : 0.6,
      blending: THREE.AdditiveBlending,
    });
    const coreWireMesh = new THREE.LineSegments(coreWireGeo, coreWireMat);
    coreGroup.add(coreWireMesh);

    // C. Dual Orbital Brand Rings (Inspired by OPASH "O" motif)
    const ring1Geo = new THREE.TorusGeometry(1.22, 0.016, 16, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x5EC098,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1Mesh.rotation.x = Math.PI / 3;
    ring1Mesh.rotation.y = 0.2;
    coreGroup.add(ring1Mesh);

    const ring2Geo = new THREE.TorusGeometry(1.36, 0.012, 16, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.x = -Math.PI / 4;
    ring2Mesh.rotation.z = 0.35;
    coreGroup.add(ring2Mesh);

    interactiveMeshes.push({ mesh: outerCoreMesh, id: "core" });

    // =========================================================================
    // 7. SATELLITE CAPABILITY NODES (5 Distinct Architectural 3D Forms)
    // =========================================================================
    interface NodeObject {
      id: string;
      group: THREE.Group;
      basePos: THREE.Vector3;
      currentPos: THREE.Vector3;
      phase: number;
      hoverMesh: THREE.Mesh;
      materials: (THREE.Material & { emissive?: THREE.Color; emissiveIntensity?: number })[];
      pathPoints: THREE.Vector3[];
      lineMesh: THREE.Line;
      pulses: { t: number; speed: number; mesh: THREE.Mesh }[];
    }

    const satelliteNodes: NodeObject[] = [];

    // Helper: Shared glass material factory
    const createGlassMat = (accentHex: number, emissiveHex: number) => {
      return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(accentHex),
        emissive: new THREE.Color(emissiveHex),
        emissiveIntensity: isLight ? 0.2 : 0.4,
        roughness: 0.15,
        metalness: 0.25,
        transmission: 0.78,
        ior: 1.48,
        transparent: true,
        opacity: isLight ? 0.8 : 0.75,
      });
    };

    ECOSYSTEM_CAPABILITIES.forEach((cap, idx) => {
      const nodeGroup = new THREE.Group();
      const basePos = new THREE.Vector3(...cap.defaultPos);
      nodeGroup.position.copy(basePos);
      ecosystemGroup.add(nodeGroup);

      const nodeMaterials: (THREE.Material & { emissive?: THREE.Color; emissiveIntensity?: number })[] = [];
      let hoverTargetMesh: THREE.Mesh | null = null;

      const accentHex = parseInt(cap.accent.replace("#", "0x"), 16);

      // Unique distinct architectural geometry for each capability
      switch (cap.id) {
        case "custom-software": {
          // Interlocking Crystalline Lattice Prisms (Foundational Modular Architecture)
          const prismGeo = new THREE.BoxGeometry(0.72, 0.72, 0.72);
          const prismMat = createGlassMat(accentHex, 0x00bbab);
          const prismMesh = new THREE.Mesh(prismGeo, prismMat);
          prismMesh.rotation.set(0.45, 0.6, 0.2);
          nodeGroup.add(prismMesh);
          nodeMaterials.push(prismMat);
          hoverTargetMesh = prismMesh;

          const wireGeo = new THREE.WireframeGeometry(prismGeo);
          const wireMat = new THREE.LineBasicMaterial({
            color: 0x5EC098,
            transparent: true,
            opacity: 0.7,
            blending: THREE.AdditiveBlending,
          });
          const wire = new THREE.LineSegments(wireGeo, wireMat);
          wire.rotation.copy(prismMesh.rotation);
          nodeGroup.add(wire);

          // Inner energy seed
          const seedGeo = new THREE.OctahedronGeometry(0.3, 0);
          const seedMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
          const seed = new THREE.Mesh(seedGeo, seedMat);
          nodeGroup.add(seed);
          break;
        }

        case "ai-automation": {
          // Dynamic Nested Octahedron with Neural Nodes (Intelligence & Agents)
          const octGeo = new THREE.OctahedronGeometry(0.68, 0);
          const octMat = createGlassMat(accentHex, 0x2dd4bf);
          const octMesh = new THREE.Mesh(octGeo, octMat);
          octMesh.rotation.set(0.3, 0.4, 0.5);
          nodeGroup.add(octMesh);
          nodeMaterials.push(octMat);
          hoverTargetMesh = octMesh;

          // Inner neural spark core
          const sparkGeo = new THREE.SphereGeometry(0.25, 16, 16);
          const sparkMat = new THREE.MeshStandardMaterial({
            color: 0x2dd4bf,
            emissive: 0x2dd4bf,
            emissiveIntensity: 2.2,
          });
          const spark = new THREE.Mesh(sparkGeo, sparkMat);
          nodeGroup.add(spark);
          nodeMaterials.push(sparkMat);

          // Orbiting micro-vertex points
          const vRingGeo = new THREE.TorusGeometry(0.85, 0.015, 8, 32);
          const vRingMat = new THREE.MeshBasicMaterial({
            color: 0x2dd4bf,
            transparent: true,
            opacity: 0.55,
            blending: THREE.AdditiveBlending,
          });
          const vRing = new THREE.Mesh(vRingGeo, vRingMat);
          vRing.rotation.x = Math.PI / 2.5;
          nodeGroup.add(vRing);
          break;
        }

        case "cloud-platforms": {
          // Tiered Hexagonal Strata Discs (Multi-Tenant Cloud Resilience)
          const hexGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.16, 6);
          const hexMat = createGlassMat(accentHex, 0x0284c7);
          const tier1 = new THREE.Mesh(hexGeo, hexMat);
          nodeGroup.add(tier1);
          nodeMaterials.push(hexMat);
          hoverTargetMesh = tier1;

          const tier2Geo = new THREE.CylinderGeometry(0.48, 0.48, 0.14, 6);
          const tier2 = new THREE.Mesh(tier2Geo, hexMat);
          tier2.position.y = 0.28;
          nodeGroup.add(tier2);

          const tier3Geo = new THREE.CylinderGeometry(0.32, 0.32, 0.12, 6);
          const tier3 = new THREE.Mesh(tier3Geo, hexMat);
          tier3.position.y = 0.52;
          nodeGroup.add(tier3);

          const pillarCore = new THREE.Mesh(
            new THREE.CylinderGeometry(0.08, 0.08, 0.78, 12),
            new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true })
          );
          tier1.position.y = -0.15;
          nodeGroup.add(pillarCore);
          break;
        }

        case "mobile-web": {
          // Intersecting Holographic Display Facets (Cross-Platform Interfaces)
          const baseGeo = new THREE.BoxGeometry(0.58, 0.88, 0.12);
          const baseMat = createGlassMat(accentHex, 0x10b981);
          const screen1 = new THREE.Mesh(baseGeo, baseMat);
          screen1.rotation.y = 0.35;
          nodeGroup.add(screen1);
          nodeMaterials.push(baseMat);
          hoverTargetMesh = screen1;

          const screen2 = new THREE.Mesh(baseGeo, baseMat);
          screen2.rotation.y = -0.55;
          screen2.position.z = 0.12;
          nodeGroup.add(screen2);

          // Interface pulse ring
          const ringGeo = new THREE.RingGeometry(0.2, 0.34, 24);
          const ringMat = new THREE.MeshBasicMaterial({
            color: 0x5EC098,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.6,
          });
          const ring = new THREE.Mesh(ringGeo, ringMat);
          ring.position.z = 0.2;
          nodeGroup.add(ring);
          break;
        }

        case "systems-integration": {
          // Tetrahedral Data Conduit & Pipeline Nexus
          const tetGeo = new THREE.TetrahedronGeometry(0.72, 0);
          const tetMat = createGlassMat(accentHex, 0x0ea5e9);
          const tetMesh = new THREE.Mesh(tetGeo, tetMat);
          tetMesh.rotation.set(0.6, 0.3, 0.4);
          nodeGroup.add(tetMesh);
          nodeMaterials.push(tetMat);
          hoverTargetMesh = tetMesh;

          const innerConduit = new THREE.Mesh(
            new THREE.OctahedronGeometry(0.35, 0),
            new THREE.MeshStandardMaterial({
              color: 0x0ea5e9,
              emissive: 0x0ea5e9,
              emissiveIntensity: 1.8,
              wireframe: true,
            })
          );
          nodeGroup.add(innerConduit);
          break;
        }
      }

      if (hoverTargetMesh) {
        interactiveMeshes.push({ mesh: hoverTargetMesh, id: cap.id });
      }

      // =========================================================================
      // 8. CONNECTING LIGHT PATHS & TRAVELLING PHOTONS
      // =========================================================================
      // Graceful 3D curved path from Central Core to Satellite
      const midPoint = new THREE.Vector3()
        .addVectors(new THREE.Vector3(0, 0, 0), basePos)
        .multiplyScalar(0.5);
      // Add slight curved arc offset perpendicular to view
      midPoint.y += (idx % 2 === 0 ? 0.35 : -0.35);
      midPoint.z += 0.25;

      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, 0),
        midPoint,
        basePos,
      ]);

      const pathPoints = curve.getPoints(45);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(pathPoints);
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(accentHex),
        transparent: true,
        opacity: isLight ? 0.35 : 0.45,
        blending: THREE.AdditiveBlending,
      });
      const lineMesh = new THREE.Line(lineGeo, lineMat);
      ecosystemGroup.add(lineMesh);

      // 2 Travelling Photons along the curve
      const pulseGeo = new THREE.SphereGeometry(0.042, 12, 12);
      const pulseMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        blending: THREE.AdditiveBlending,
      });

      const pulses = [
        {
          t: 0.1 + idx * 0.18,
          speed: 0.004 + (idx % 3) * 0.0015,
          mesh: new THREE.Mesh(pulseGeo, pulseMat),
        },
        {
          t: 0.6 + idx * 0.18,
          speed: 0.004 + (idx % 3) * 0.0015,
          mesh: new THREE.Mesh(pulseGeo, pulseMat),
        },
      ];

      pulses.forEach((p) => ecosystemGroup.add(p.mesh));

      satelliteNodes.push({
        id: cap.id,
        group: nodeGroup,
        basePos,
        currentPos: basePos.clone(),
        phase: idx * 1.35,
        hoverMesh: hoverTargetMesh || nodeGroup.children[0] as THREE.Mesh,
        materials: nodeMaterials,
        pathPoints,
        lineMesh,
        pulses,
      });
    });

    // =========================================================================
    // 9. FINE SURROUNDING TELEMETRY MICRO-PARTICLES
    // =========================================================================
    const particleCount = 85;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const rad = 1.8 + Math.random() * 3.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particlePositions[i * 3] = rad * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = rad * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = rad * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x5EC098,
      size: 0.016,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const ambientParticles = new THREE.Points(particleGeo, particleMat);
    scene.add(ambientParticles);

    // =========================================================================
    // 10. INTERACTION RAYCASTER & POINTER LISTENER
    // =========================================================================
    const raycaster = new THREE.Raycaster();
    const mouseNorm = new THREE.Vector2(-999, -999);
    let targetParallaxX = 0;
    let targetParallaxY = 0;
    let currentParallaxX = 0;
    let currentParallaxY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseNorm.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseNorm.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // Subtle desktop tilt parallax
      if (window.innerWidth >= 1024) {
        targetParallaxX = mouseNorm.x * 0.12;
        targetParallaxY = mouseNorm.y * 0.08;
      }
    };

    const onPointerLeave = () => {
      mouseNorm.set(-999, -999);
      setHoveredNode(null);
    };

    const onClick = () => {
      if (hoveredNode) {
        setActiveNode((prev) => (prev === hoveredNode ? null : hoveredNode));
      }
    };

    renderer.domElement.addEventListener("mousemove", onPointerMove);
    renderer.domElement.addEventListener("mouseleave", onPointerLeave);
    renderer.domElement.addEventListener("click", onClick);

    // Resize observer
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || 540;
      height = container.clientHeight || 500;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    // Visibility observer
    let isVisible = true;
    const io = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    io.observe(container);

    // =========================================================================
    // 11. MAIN ANIMATION & EMERGENCE LOOP
    // =========================================================================
    let reqId: number;
    let clock = new THREE.Clock();
    let emergenceTime = 0;
    const EMERGE_DURATION = 2.4;

    const tempV3 = new THREE.Vector3();

    const animate = () => {
      reqId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth camera reset
      if (isResettingCamera.current) {
        camera.position.lerp(defaultCamPos, 0.08);
        if (camera.position.distanceTo(defaultCamPos) < 0.02) {
          camera.position.copy(defaultCamPos);
          isResettingCamera.current = false;
        }
      }

      controls.update();

      // Emergence progression (components expand smoothly from center)
      if (emergenceTime < EMERGE_DURATION) {
        emergenceTime += delta;
        const progress = Math.min(1, emergenceTime / EMERGE_DURATION);
        // Ease out cubic
        const ease = 1 - Math.pow(1 - progress, 3);

        satelliteNodes.forEach((node) => {
          node.group.position.lerpVectors(new THREE.Vector3(0, 0, 0), node.basePos, ease);
          node.group.scale.setScalar(ease);
          (node.lineMesh.material as THREE.LineBasicMaterial).opacity =
            ease * (isLight ? 0.35 : 0.45);
        });

        coreGroup.scale.setScalar(Math.min(1, ease * 1.05));
        if (progress >= 1) setIsEmerging(false);
      }

      // Continuous harmonic ecosystem dance
      if (!prefersReducedMotion) {
        // Core rotation
        innerCoreMesh.rotation.y += delta * 0.28;
        innerCoreMesh.rotation.x += delta * 0.14;
        outerCoreMesh.rotation.y -= delta * 0.16;
        coreWireMesh.rotation.copy(outerCoreMesh.rotation);

        ring1Mesh.rotation.z += delta * 0.35;
        ring2Mesh.rotation.z -= delta * 0.25;

        // Core breathing pulse
        const corePulse = 1.0 + Math.sin(elapsed * 2.2) * 0.035;
        innerCoreMesh.scale.setScalar(corePulse);

        // Satellites harmonic floating
        satelliteNodes.forEach((node) => {
          const floatOffset = Math.sin(elapsed * 1.2 + node.phase) * 0.09;
          node.group.position.y = node.basePos.y + floatOffset;

          // Gentle rotation on each form
          node.group.rotation.y += delta * 0.3;
          node.group.rotation.x += delta * 0.12;

          // Animate travelling light pulses along the connection path
          node.pulses.forEach((p) => {
            p.t += p.speed;
            if (p.t > 1) p.t = 0;
            const ptIdx = Math.floor(p.t * (node.pathPoints.length - 1));
            const pt = node.pathPoints[ptIdx];
            if (pt) p.mesh.position.copy(pt);
          });
        });

        // Ambient particles slow orbit
        ambientParticles.rotation.y += delta * 0.03;
      }

      // Parallax easing
      currentParallaxX += (targetParallaxX - currentParallaxX) * 0.05;
      currentParallaxY += (targetParallaxY - currentParallaxY) * 0.05;
      ecosystemGroup.rotation.y = currentParallaxX;
      ecosystemGroup.rotation.x = currentParallaxY;

      // Raycasting for interactive hover detection
      raycaster.setFromCamera(mouseNorm, camera);
      const hits = raycaster.intersectObjects(
        interactiveMeshes.map((m) => m.mesh),
        true
      );

      if (hits.length > 0) {
        const hitMesh = hits[0].object;
        const found = interactiveMeshes.find(
          (item) => item.mesh === hitMesh || item.mesh.children.includes(hitMesh)
        );
        if (found) {
          setHoveredNode(found.id);
          renderer.domElement.style.cursor = "pointer";
        }
      } else {
        setHoveredNode(null);
        renderer.domElement.style.cursor = isInteracting ? "grabbing" : "grab";
      }

      // Highlight active or hovered nodes
      satelliteNodes.forEach((node) => {
        const isTarget = hoveredNode === node.id || activeNode === node.id;
        const targetScale = isTarget ? 1.15 : 1.0;
        node.group.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.12);

        node.materials.forEach((mat) => {
          if (mat.emissiveIntensity !== undefined) {
            mat.emissiveIntensity = THREE.MathUtils.lerp(
              mat.emissiveIntensity,
              isTarget ? 1.4 : isLight ? 0.2 : 0.4,
              0.1
            );
          }
        });

        // Highlight connecting path line
        const lineMat = node.lineMesh.material as THREE.LineBasicMaterial;
        lineMat.opacity = THREE.MathUtils.lerp(
          lineMat.opacity,
          isTarget ? 0.9 : isLight ? 0.35 : 0.45,
          0.1
        );
      });

      // Calculate 2D Screen Coordinates for capability cards
      const coords: { id: string; x: number; y: number; visible: boolean }[] = [];
      satelliteNodes.forEach((node) => {
        node.group.getWorldPosition(tempV3);
        const projected = tempV3.clone().project(camera);
        const px = ((projected.x + 1) / 2) * width;
        const py = ((-projected.y + 1) / 2) * height;

        // Is in front of camera
        const isFront = projected.z < 1;
        coords.push({
          id: node.id,
          x: px,
          y: py,
          visible: isFront,
        });
      });
      setProjectedCoords(coords);

      renderer.render(scene, camera);
    };

    animate();

    // =========================================================================
    // 12. CLEAN RESOURCE DISPOSAL ON UNMOUNT
    // =========================================================================
    return () => {
      cancelAnimationFrame(reqId);
      if (interactionTimeout) clearTimeout(interactionTimeout);
      ro.disconnect();
      io.disconnect();
      controls.dispose();

      renderer.domElement.removeEventListener("mousemove", onPointerMove);
      renderer.domElement.removeEventListener("mouseleave", onPointerLeave);
      renderer.domElement.removeEventListener("click", onClick);

      // Dispose Core
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      outerCoreGeo.dispose();
      outerCoreMat.dispose();
      coreWireGeo.dispose();
      coreWireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();

      // Dispose Satellites & Lines
      satelliteNodes.forEach((node) => {
        node.lineMesh.geometry.dispose();
        (node.lineMesh.material as THREE.Material).dispose();
        node.pulses.forEach((p) => {
          p.mesh.geometry.dispose();
          (p.mesh.material as THREE.Material).dispose();
        });
        node.group.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry?.dispose();
            if (Array.isArray(child.material)) {
              child.material.forEach((m) => m.dispose());
            } else if (child.material) {
              child.material.dispose();
            }
          }
        });
      });

      particleGeo.dispose();
      particleMat.dispose();

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isLight, defaultCamPos]);

  return (
    <div className="hero-ecosystem-container" ref={containerRef}>
      {/* 3D WebGL Canvas Mount */}
      <div
        ref={mountRef}
        className="hero-ecosystem-canvas-mount"
        aria-label="The OPASH Solutions Ecosystem - Interactive 3D Technology Experience"
      />

      {/* Floating 2D Screen-Projected Capability Labels */}
      <div className="hero-ecosystem-labels-overlay" aria-hidden="true">
        {ECOSYSTEM_CAPABILITIES.map((cap) => {
          const coord = projectedCoords.find((c) => c.id === cap.id);
          if (!coord || !coord.visible) return null;

          const isHovered = hoveredNode === cap.id;
          const isSelected = activeNode === cap.id;
          const Icon = cap.icon;

          return (
            <div
              key={cap.id}
              className={`hero-ecosystem-pill ${isHovered ? "hovered" : ""} ${
                isSelected ? "selected" : ""
              }`}
              style={{
                transform: `translate3d(${coord.x}px, ${coord.y}px, 0)`,
              }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveNode((prev) => (prev === cap.id ? null : cap.id));
              }}
              onMouseEnter={() => setHoveredNode(cap.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <span
                className="hero-ecosystem-pill-dot"
                style={{ backgroundColor: cap.accent, boxShadow: `0 0 8px ${cap.accent}` }}
              />
              <span className="hero-ecosystem-pill-text">{cap.title}</span>

              {/* Rich Tooltip Card on Hover or Select */}
              {(isHovered || isSelected) && (
                <div className="hero-ecosystem-card">
                  <div className="hero-ecosystem-card-header">
                    <Icon size={14} className="hero-ecosystem-card-icon" />
                    <span className="hero-ecosystem-card-badge">{cap.badge}</span>
                  </div>
                  <div className="hero-ecosystem-card-title">{cap.title}</div>
                  <div className="hero-ecosystem-card-desc">{cap.subtitle}</div>
                  <div className="hero-ecosystem-card-metrics">{cap.metrics}</div>

                  <Link href={cap.link} className="hero-ecosystem-card-link">
                    <span>Explore Capability</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Minimalist Understated Ecosystem Status Footer */}
      <div className="hero-ecosystem-status-bar">
        <div className="hero-ecosystem-status-indicator">
          <span className="hero-ecosystem-pulse-dot" />
          <span className="hero-ecosystem-status-text">
            The OPASH Solutions Ecosystem
          </span>
        </div>

        <button
          type="button"
          onClick={handleResetCamera}
          className="hero-ecosystem-recenter-btn"
          title="Recenter 3D Ecosystem"
          aria-label="Recenter Ecosystem"
        >
          <RotateCcw size={12} />
          <span>Recenter</span>
        </button>
      </div>
    </div>
  );
}
