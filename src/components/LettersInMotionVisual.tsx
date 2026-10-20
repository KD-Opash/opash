"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

export interface ActivePhraseState {
  index: number;
  id: string;
  title: string;
  slug: string;
  primaryColor: string;
  secondaryColor: string;
  rect: {
    left: number;
    top: number;
    width: number;
    height: number;
    centerX: number;
    centerY: number;
    normX: number;
    normY: number;
    widthNorm: number;
    heightNorm: number;
  };
  transitionProgress: number;
  isTransitioning: boolean;
}

interface LettersInMotionVisualProps {
  currentIndex: number;
  activePhrase: ActivePhraseState;
  onSelectPhrase?: (index: number) => void;
}

export interface SceneMeta {
  id: string;
  title: string;
  badge: string;
  primaryColor: number;
  secondaryColor: number;
  lightKeyColor: number;
  lightAmbientColor: number;
}

export const SCENE_METAS: SceneMeta[] = [
  {
    id: "custom-software",
    title: "Custom Software",
    badge: "BESPOKE ARCHITECTURE",
    primaryColor: 0x00bbab, // OPASH Emerald Teal
    secondaryColor: 0x1e40af, // Deep Precision Blue
    lightKeyColor: 0x38bdf8,
    lightAmbientColor: 0x021324,
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    badge: "NEURAL PIPELINES",
    primaryColor: 0x2dd4bf, // Electric Mint
    secondaryColor: 0x818cf8, // Diffused Violet-Indigo
    lightKeyColor: 0x6366f1,
    lightAmbientColor: 0x090f26,
  },
  {
    id: "web-apps",
    title: "Web Applications",
    badge: "NEXT.JS EDGE",
    primaryColor: 0x38bdf8, // Clean Cyan
    secondaryColor: 0x0284c7, // Ocean Azure
    lightKeyColor: 0x00bbab,
    lightAmbientColor: 0x021626,
  },
  {
    id: "mobile-ecosystems",
    title: "Mobile Ecosystems",
    badge: "IOS & ANDROID",
    primaryColor: 0x5EC098, // Muted Emerald Mint
    secondaryColor: 0x0ea5e9, // Sky Blue
    lightKeyColor: 0x10b981,
    lightAmbientColor: 0x031818,
  },
  {
    id: "digital-transform",
    title: "Digital Transformation",
    badge: "ENTERPRISE MODERNIZATION",
    primaryColor: 0x818cf8, // Royal Indigo-Violet
    secondaryColor: 0x00bbab, // OPASH Teal
    lightKeyColor: 0x2dd4bf,
    lightAmbientColor: 0x0a1428,
  },
];

export default function LettersInMotionVisual({
  currentIndex,
  activePhrase,
  onSelectPhrase,
}: LettersInMotionVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isLight = theme === "light";

  const currentIndexRef = useRef(currentIndex);
  currentIndexRef.current = currentIndex;

  useEffect(() => {
    const container = containerRef.current;
    const mount = mountRef.current;
    if (!container || !mount) return;

    let animId: number;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 750;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(isLight ? 0xf7fafc : 0x01040a);

    const camera = new THREE.PerspectiveCamera(46, width / height, 0.1, 100);
    camera.position.set(0, 0, 9.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      });
    } catch (e) {
      console.warn("WebGL not supported or unavailable:", e);
      return;
    }
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isLight ? 0.92 : 1.0;
    mount.appendChild(renderer.domElement);

    // 2. SHARED LIGHTING RIG (Cinematic, restrained, diffuse reflections)
    const ambientLight = new THREE.AmbientLight(
      isLight ? 0xe2eaf2 : 0x021324,
      isLight ? 1.0 : 0.9
    );
    scene.add(ambientLight);

    const directionalKeyLight = new THREE.DirectionalLight(
      isLight ? 0x94a3b8 : 0x38bdf8,
      isLight ? 0.65 : 0.85
    );
    directionalKeyLight.position.set(5, 6, 6);
    scene.add(directionalKeyLight);

    const leftFillLight = new THREE.PointLight(0x00A88F, isLight ? 0.55 : 1.1, 14.0, 2.0);
    leftFillLight.position.set(-4.5, 1.5, -2.5);
    scene.add(leftFillLight);

    const rightRimLight = new THREE.PointLight(
      isLight ? 0x0284c7 : 0x1e40af,
      isLight ? 0.55 : 1.2,
      14.0,
      2.0
    );
    rightRimLight.position.set(4.5, -1.0, -2.0);
    scene.add(rightRimLight);

    // =========================================================================
    // 3. BUILD 5 GENUINELY DISTINCT FULL-VIEWPORT 3D SCENE GROUPS
    // =========================================================================
    const sceneGroups: THREE.Group[] = [];

    // Helper: Shared pinpoint particle texture (clean, no overexposed bloom)
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 32;
    pCanvas.height = 32;
    const pCtx = pCanvas.getContext("2d")!;
    const pGrad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    if (isLight) {
      pGrad.addColorStop(0, "rgba(0, 168, 143, 0.85)");
      pGrad.addColorStop(0.35, "rgba(2, 132, 199, 0.45)");
      pGrad.addColorStop(0.7, "rgba(0, 168, 143, 0.1)");
      pGrad.addColorStop(1, "rgba(247, 250, 252, 0)");
    } else {
      pGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      pGrad.addColorStop(0.3, "rgba(0, 187, 171, 0.75)");
      pGrad.addColorStop(0.65, "rgba(14, 165, 233, 0.25)");
      pGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
    }
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 32, 32);
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    // -------------------------------------------------------------------------
    // SCENE 1: CUSTOM SOFTWARE — Full-Width Architectural Glass Structures & Pathways
    // -------------------------------------------------------------------------
    const groupCustomSoftware = new THREE.Group();
    scene.add(groupCustomSoftware);
    sceneGroups.push(groupCustomSoftware);

    // 9 Floating Monolithic Glass Structures across the entire viewport
    const customBlocks: {
      mesh: THREE.Mesh;
      wire: THREE.LineSegments;
      basePos: THREE.Vector3;
      phase: number;
    }[] = [];

    const blockPositions: [number, number, number, number, number, number][] = [
      [-5.5, 2.2, -3.2, 1.6, 2.4, 1.2],
      [-3.2, -1.8, -2.8, 1.8, 2.2, 1.4],
      [-0.8, 2.8, -4.0, 2.0, 1.6, 1.2],
      [1.5, -2.2, -3.0, 2.2, 1.8, 1.5],
      [4.2, 1.8, -2.5, 2.2, 2.6, 1.4],
      [6.0, -1.2, -3.5, 1.8, 2.5, 1.2],
      [-2.0, 0.2, -4.5, 1.4, 3.2, 1.0],
      [3.0, -0.4, -4.2, 2.0, 2.0, 1.2],
      [0.2, -1.0, -5.0, 2.5, 2.5, 1.5],
    ];

    blockPositions.forEach(([bx, by, bz, bw, bh, bd], idx) => {
      // In light mode, frame the screen by pushing blocks outward and deeper in Z
      const posX = isLight ? (bx < 0 ? bx - 1.4 : bx + 1.4) : bx;
      const posY = isLight ? (by < 0 ? by - 0.8 : by + 0.8) : by;
      const posZ = isLight ? bz - 2.5 : bz;
      const bwFinal = isLight ? bw * 0.65 : bw;
      const bhFinal = isLight ? bh * 0.65 : bh;
      const bdFinal = isLight ? bd * 0.65 : bd;

      const geo = new THREE.BoxGeometry(bwFinal, bhFinal, bdFinal);
      const baseOpacity = isLight ? 0.045 : 0.68;
      const mat = isLight
        ? new THREE.MeshBasicMaterial({
            color: new THREE.Color(idx % 2 === 0 ? 0x00A88F : 0x0284c7),
            transparent: true,
            opacity: baseOpacity,
            depthWrite: false,
            userData: { baseOpacity },
          })
        : new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0x021a28),
            emissive: new THREE.Color(0x00bbab),
            emissiveIntensity: 0.32,
            roughness: 0.22,
            metalness: 0.15,
            transparent: true,
            opacity: baseOpacity,
            depthWrite: false,
            userData: { baseOpacity },
          });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(posX, posY, posZ);
      groupCustomSoftware.add(mesh);

      // Architectural wireframe edge highlight
      const edges = new THREE.EdgesGeometry(geo);
      const wireOpacity = isLight ? 0.18 : 0.65;
      const wireMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(idx % 2 === 0 ? (isLight ? 0x00A88F : 0x00bbab) : (isLight ? 0x0284c7 : 0x38bdf8)),
        transparent: true,
        opacity: wireOpacity,
        userData: { baseOpacity: wireOpacity },
      });
      const wire = new THREE.LineSegments(edges, wireMat);
      mesh.add(wire);

      customBlocks.push({
        mesh,
        wire,
        basePos: new THREE.Vector3(posX, posY, posZ),
        phase: idx * 0.7,
      });
    });

    // Orthogonal and diagonal connecting laser pathways
    const customPathGeom = new THREE.BufferGeometry();
    const customPathPoints: THREE.Vector3[] = [];
    for (let i = 0; i < customBlocks.length - 1; i++) {
      const p1 = customBlocks[i].basePos;
      const p2 = customBlocks[i + 1].basePos;
      const mid = new THREE.Vector3(p2.x, p1.y, (p1.z + p2.z) * 0.5);
      customPathPoints.push(p1, mid, mid, p2);
    }
    customPathGeom.setFromPoints(customPathPoints);
    const pathOpacity = isLight ? 0.18 : 0.45;
    const customPathMat = new THREE.LineBasicMaterial({
      color: isLight ? 0x00A88F : 0x38bdf8,
      transparent: true,
      opacity: pathOpacity,
      userData: { baseOpacity: pathOpacity },
    });
    const customPathMesh = new THREE.LineSegments(customPathGeom, customPathMat);
    groupCustomSoftware.add(customPathMesh);

    // -------------------------------------------------------------------------
    // SCENE 2: AI SOLUTIONS — 3D Connected Neural Network & Synaptic Energy Streams
    // -------------------------------------------------------------------------
    const groupAISolutions = new THREE.Group();
    groupAISolutions.visible = false;
    scene.add(groupAISolutions);
    sceneGroups.push(groupAISolutions);

    // 52 3D Neural Nodes distributed throughout the entire viewport
    const neuralNodeCount = isLight ? 36 : 52;
    const neuralNodes: {
      mesh: THREE.Mesh;
      basePos: THREE.Vector3;
      velocity: THREE.Vector3;
      pulse: number;
    }[] = [];

    const neuralGeo = new THREE.OctahedronGeometry(isLight ? 0.09 : 0.16, 0);

    for (let i = 0; i < neuralNodeCount; i++) {
      const nodeOpacity = isLight ? 0.35 : 1.0;
      const mat = isLight
        ? new THREE.MeshBasicMaterial({
            color: i % 2 === 0 ? 0x00A88F : 0x0284c7,
            transparent: true,
            opacity: nodeOpacity,
            userData: { baseOpacity: nodeOpacity },
          })
        : new THREE.MeshStandardMaterial({
            color: i % 2 === 0 ? 0x2dd4bf : 0x818cf8,
            emissive: i % 2 === 0 ? 0x2dd4bf : 0x818cf8,
            emissiveIntensity: 0.85,
            roughness: 0.2,
            metalness: 0.2,
            userData: { baseOpacity: 1.0 },
          });
      const mesh = new THREE.Mesh(neuralGeo, mat);
      const px = (Math.random() - 0.5) * (isLight ? 17 : 15);
      const py = (Math.random() - 0.5) * (isLight ? 10 : 9);
      const pz = (isLight ? -4.5 : -2.2) + (Math.random() - 0.5) * 3.0;
      mesh.position.set(px, py, pz);
      groupAISolutions.add(mesh);

      neuralNodes.push({
        mesh,
        basePos: new THREE.Vector3(px, py, pz),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.002
        ),
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Dynamic Neural Network Connecting Lines
    const neuralLinesGeom = new THREE.BufferGeometry();
    const maxLineSegments = isLight ? 80 : 160;
    const linePosBuffer = new Float32Array(maxLineSegments * 2 * 3);
    neuralLinesGeom.setAttribute("position", new THREE.BufferAttribute(linePosBuffer, 3));
    const neuralLineOpacity = isLight ? 0.14 : 0.4;
    const neuralLinesMat = new THREE.LineBasicMaterial({
      color: isLight ? 0x00A88F : 0x818cf8,
      transparent: true,
      opacity: neuralLineOpacity,
      userData: { baseOpacity: neuralLineOpacity },
    });
    const neuralLinesMesh = new THREE.LineSegments(neuralLinesGeom, neuralLinesMat);
    groupAISolutions.add(neuralLinesMesh);

    // -------------------------------------------------------------------------
    // SCENE 3: WEB APPLICATIONS — Layered Translucent Geometric Planes & Data Streams
    // -------------------------------------------------------------------------
    const groupWebApps = new THREE.Group();
    groupWebApps.visible = false;
    scene.add(groupWebApps);
    sceneGroups.push(groupWebApps);

    // 14 Floating Angled Planar Sheets across multiple depth levels
    const webPanels: {
      mesh: THREE.Mesh;
      basePos: THREE.Vector3;
      driftSpeed: number;
      phase: number;
    }[] = [];

    const panelConfigs: [number, number, number, number, number, number, number][] = [
      [-5.8, 1.8, -2.6, 3.2, 1.8, 0.1, -0.35],
      [-3.0, -1.5, -2.2, 3.6, 2.0, -0.08, 0.25],
      [-0.4, 2.4, -3.4, 4.0, 2.2, 0.12, -0.2],
      [1.8, -1.8, -2.5, 3.8, 2.1, -0.15, 0.3],
      [4.6, 1.5, -2.2, 3.5, 1.9, 0.1, -0.28],
      [6.4, -1.0, -3.2, 3.4, 1.8, -0.12, 0.35],
      [-4.5, -2.5, -4.0, 4.2, 2.2, 0.15, 0.2],
      [3.2, 2.8, -4.2, 4.5, 2.4, -0.1, -0.18],
      [-1.5, 0.4, -4.5, 5.0, 2.6, 0.05, 0.15],
      [5.5, -2.4, -4.5, 3.8, 2.0, -0.18, -0.25],
      [-6.2, -0.2, -4.8, 4.0, 2.2, 0.08, 0.3],
      [0.8, -3.0, -3.8, 4.4, 2.3, -0.14, 0.18],
      [2.2, 0.6, -5.2, 4.6, 2.4, 0.12, -0.22],
      [-2.8, 3.2, -5.0, 3.8, 2.0, -0.1, 0.25],
    ];

    panelConfigs.forEach(([px, py, pz, pw, ph, rx, ry], idx) => {
      // In light mode, frame the screen outward and push deeper
      const posX = isLight ? (px < 0 ? px - 1.5 : px + 1.5) : px;
      const posY = isLight ? (py < 0 ? py - 0.8 : py + 0.8) : py;
      const posZ = isLight ? pz - 2.5 : pz;
      const pwFinal = isLight ? pw * 0.65 : pw;
      const phFinal = isLight ? ph * 0.65 : ph;

      const geo = new THREE.PlaneGeometry(pwFinal, phFinal);
      const panelOpacity = isLight ? 0.035 : 0.55;
      const mat = isLight
        ? new THREE.MeshBasicMaterial({
            color: new THREE.Color(idx % 2 === 0 ? 0x0284c7 : 0x00A88F),
            transparent: true,
            opacity: panelOpacity,
            side: THREE.DoubleSide,
            depthWrite: false,
            userData: { baseOpacity: panelOpacity },
          })
        : new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0x021626),
            emissive: new THREE.Color(0x0284c7),
            emissiveIntensity: 0.3,
            roughness: 0.28,
            metalness: 0.1,
            transparent: true,
            opacity: 0.55,
            side: THREE.DoubleSide,
            depthWrite: false,
            userData: { baseOpacity: 0.55 },
          });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(posX, posY, posZ);
      mesh.rotation.set(rx, ry, idx * 0.05);
      groupWebApps.add(mesh);

      // Glowing perimeter edge
      const edges = new THREE.EdgesGeometry(geo);
      const edgeOpacity = isLight ? 0.16 : 0.7;
      const wireMat = new THREE.LineBasicMaterial({
        color: idx % 2 === 0 ? (isLight ? 0x0284c7 : 0x38bdf8) : (isLight ? 0x00A88F : 0x00bbab),
        transparent: true,
        opacity: edgeOpacity,
        userData: { baseOpacity: edgeOpacity },
      });
      const wire = new THREE.LineSegments(edges, wireMat);
      mesh.add(wire);

      webPanels.push({
        mesh,
        basePos: new THREE.Vector3(posX, posY, posZ),
        driftSpeed: 0.0012 + (idx % 3) * 0.0006,
        phase: idx * 0.8,
      });
    });

    // Horizontal data stream lines
    const streamCount = isLight ? 10 : 18;
    const streamGeom = new THREE.BufferGeometry();
    const streamPoints: THREE.Vector3[] = [];
    for (let i = 0; i < streamCount; i++) {
      const sy = -3.5 + (i / streamCount) * 7.5;
      const sz = (isLight ? -4.5 : -2.5) - (i % 4) * 0.8;
      streamPoints.push(new THREE.Vector3(-8, sy, sz), new THREE.Vector3(8, sy, sz));
    }
    streamGeom.setFromPoints(streamPoints);
    const streamOpacity = isLight ? 0.12 : 0.35;
    const streamMat = new THREE.LineBasicMaterial({
      color: isLight ? 0x0284c7 : 0x38bdf8,
      transparent: true,
      opacity: streamOpacity,
      userData: { baseOpacity: streamOpacity },
    });
    const streamMesh = new THREE.LineSegments(streamGeom, streamMat);
    groupWebApps.add(streamMesh);

    // -------------------------------------------------------------------------
    // SCENE 4: MOBILE ECOSYSTEMS — Interconnected Abstract 3D Forms & Looping Paths
    // -------------------------------------------------------------------------
    const groupMobileEcosystems = new THREE.Group();
    groupMobileEcosystems.visible = false;
    scene.add(groupMobileEcosystems);
    sceneGroups.push(groupMobileEcosystems);

    // 16 Interconnected Abstract Forms (Toruses & Geodesic Spheres)
    const mobileForms: {
      mesh: THREE.Mesh;
      basePos: THREE.Vector3;
      rotSpeed: THREE.Vector3;
      orbitSpeed: number;
      orbitRadius: number;
      phase: number;
    }[] = [];

    for (let i = 0; i < 16; i++) {
      const isTorus = i % 2 === 0;
      const geo = isTorus
        ? new THREE.TorusGeometry(isLight ? 0.38 : 0.55, isLight ? 0.05 : 0.09, 16, 40)
        : new THREE.IcosahedronGeometry(isLight ? 0.24 : 0.38, 1);

      const formOpacity = isLight ? 0.045 : 0.72;
      const mat = isLight
        ? new THREE.MeshBasicMaterial({
            color: i % 2 === 0 ? 0x00A88F : 0x0284c7,
            transparent: true,
            opacity: formOpacity,
            side: THREE.DoubleSide,
            depthWrite: false,
            userData: { baseOpacity: formOpacity },
          })
        : new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0x022218),
            emissive: new THREE.Color(
              i % 2 === 0 ? 0x5EC098 : 0x0ea5e9
            ),
            emissiveIntensity: 0.42,
            roughness: 0.22,
            metalness: 0.15,
            transparent: true,
            opacity: 0.72,
            side: THREE.DoubleSide,
            depthWrite: false,
            userData: { baseOpacity: 0.72 },
          });

      const mesh = new THREE.Mesh(geo, mat);

      // In light mode, expand orbit to outer perimeter so center content is completely unobstructed
      const angle = (i / 16) * Math.PI * 2;
      const radiusX = isLight ? (5.8 + (i % 3) * 1.5) : (4.2 + (i % 3) * 1.4);
      const radiusY = isLight ? (3.2 + (i % 2) * 1.2) : (2.4 + (i % 2) * 1.0);
      const bx = Math.cos(angle) * radiusX;
      const by = Math.sin(angle) * radiusY;
      const bz = (isLight ? -4.5 : -2.5) + (i % 4) * -0.7;

      mesh.position.set(bx, by, bz);
      groupMobileEcosystems.add(mesh);

      // Delicate wireframe outline
      const edges = new THREE.EdgesGeometry(geo);
      const wireOpacity = isLight ? 0.16 : 0.55;
      const wireMat = new THREE.LineBasicMaterial({
        color: isLight ? (i % 2 === 0 ? 0x00A88F : 0x0284c7) : (i % 2 === 0 ? 0x5EC098 : 0x0ea5e9),
        transparent: true,
        opacity: wireOpacity,
        userData: { baseOpacity: wireOpacity },
      });
      const wire = new THREE.LineSegments(edges, wireMat);
      mesh.add(wire);

      mobileForms.push({
        mesh,
        basePos: new THREE.Vector3(bx, by, bz),
        rotSpeed: new THREE.Vector3(
          0.008 + (i % 3) * 0.004,
          0.01 + (i % 2) * 0.005,
          0.006
        ),
        orbitSpeed: 0.0008 + (i % 2) * 0.0004,
        orbitRadius: 0.5 + (i % 3) * 0.25,
        phase: i * 0.6,
      });
    }

    // Curved orbital conduits linking the mobile ecosystem
    const mobileSpline = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(-6.5, -1.8, -2.8),
        new THREE.Vector3(-4.0, 2.2, -2.4),
        new THREE.Vector3(-1.2, 0.8, -2.6),
        new THREE.Vector3(1.5, -2.0, -2.5),
        new THREE.Vector3(4.5, -0.4, -2.2),
        new THREE.Vector3(6.2, 1.8, -2.6),
        new THREE.Vector3(3.8, 2.6, -3.0),
        new THREE.Vector3(0.5, 1.2, -2.8),
        new THREE.Vector3(-3.0, -1.5, -3.2),
        new THREE.Vector3(-6.5, -1.8, -2.8),
      ],
      true
    );
    const mobileConduitGeom = new THREE.BufferGeometry().setFromPoints(mobileSpline.getPoints(120));
    const conduitOpacity = isLight ? 0.15 : 0.6;
    const mobileConduitMat = new THREE.LineBasicMaterial({
      color: isLight ? 0x00A88F : 0x5EC098,
      transparent: true,
      opacity: conduitOpacity,
      linewidth: 1.5,
      userData: { baseOpacity: conduitOpacity },
    });
    const mobileConduit = new THREE.Line(mobileConduitGeom, mobileConduitMat);
    groupMobileEcosystems.add(mobileConduit);

    // -------------------------------------------------------------------------
    // SCENE 5: DIGITAL TRANSFORMATION — Flowing Branches Converging into Unified Core
    // -------------------------------------------------------------------------
    const groupDigitalTransformation = new THREE.Group();
    groupDigitalTransformation.visible = false;
    scene.add(groupDigitalTransformation);
    sceneGroups.push(groupDigitalTransformation);

    // 6 Flowing Spline Branches converging from viewport boundaries into a central core
    const convergenceTarget = new THREE.Vector3(1.6, 0.1, isLight ? -3.2 : -2.6);
    const branchCurves: THREE.CatmullRomCurve3[] = [
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-7.5, 3.6, -4.0),
        new THREE.Vector3(-4.5, 2.2, -3.2),
        new THREE.Vector3(-1.8, 1.2, -2.8),
        convergenceTarget,
      ]),
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-7.0, -3.2, -4.0),
        new THREE.Vector3(-4.0, -1.8, -3.2),
        new THREE.Vector3(-1.2, -0.6, -2.8),
        convergenceTarget,
      ]),
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.0, 4.2, -4.2),
        new THREE.Vector3(0.6, 2.5, -3.2),
        new THREE.Vector3(1.1, 1.2, -2.8),
        convergenceTarget,
      ]),
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.0, -4.2, -4.2),
        new THREE.Vector3(0.8, -2.4, -3.2),
        new THREE.Vector3(1.2, -1.0, -2.8),
        convergenceTarget,
      ]),
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(7.2, 3.2, -3.8),
        new THREE.Vector3(5.0, 1.8, -3.0),
        new THREE.Vector3(3.2, 0.8, -2.8),
        convergenceTarget,
      ]),
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(7.0, -2.8, -3.8),
        new THREE.Vector3(4.8, -1.6, -3.0),
        new THREE.Vector3(3.0, -0.6, -2.8),
        convergenceTarget,
      ]),
    ];

    const branchLines: THREE.Line[] = [];
    const branchOpacity = isLight ? 0.22 : 0.65;
    branchCurves.forEach((c, idx) => {
      const geo = new THREE.BufferGeometry().setFromPoints(c.getPoints(60));
      const mat = new THREE.LineBasicMaterial({
        color: idx % 2 === 0 ? (isLight ? 0x6366f1 : 0x818cf8) : (isLight ? 0x00A88F : 0x00bbab),
        transparent: true,
        opacity: branchOpacity,
        linewidth: 1.5,
        userData: { baseOpacity: branchOpacity },
      });
      const line = new THREE.Line(geo, mat);
      groupDigitalTransformation.add(line);
      branchLines.push(line);
    });

    // Central Unified Helical Core
    const coreHelicalPoints: THREE.Vector3[] = [];
    for (let t = 0; t <= Math.PI * 6; t += 0.15) {
      const r = 0.65 + (t / (Math.PI * 6)) * 0.45;
      coreHelicalPoints.push(
        new THREE.Vector3(
          convergenceTarget.x + Math.cos(t) * r,
          convergenceTarget.y + (t - Math.PI * 3) * 0.28,
          convergenceTarget.z + Math.sin(t) * r
        )
      );
    }
    const coreHelixGeom = new THREE.BufferGeometry().setFromPoints(coreHelicalPoints);
    const helixOpacity = isLight ? 0.3 : 0.85;
    const coreHelixMat = new THREE.LineBasicMaterial({
      color: isLight ? 0x00A88F : 0x2dd4bf,
      transparent: true,
      opacity: helixOpacity,
      linewidth: 2,
      userData: { baseOpacity: helixOpacity },
    });
    const coreHelixMesh = new THREE.Line(coreHelixGeom, coreHelixMat);
    groupDigitalTransformation.add(coreHelixMesh);

    // Central Core Faceted Jewel
    const coreJewelGeo = new THREE.IcosahedronGeometry(isLight ? 0.36 : 0.48, 1);
    const jewelOpacity = isLight ? 0.22 : 0.88;
    const coreJewelMat = isLight
      ? new THREE.MeshBasicMaterial({
          color: 0x6366f1,
          transparent: true,
          opacity: jewelOpacity,
          userData: { baseOpacity: jewelOpacity },
        })
      : new THREE.MeshStandardMaterial({
          color: 0x818cf8,
          emissive: 0x818cf8,
          emissiveIntensity: 0.95,
          roughness: 0.2,
          metalness: 0.25,
          transparent: true,
          opacity: jewelOpacity,
          userData: { baseOpacity: jewelOpacity },
        });
    const coreJewelMesh = new THREE.Mesh(coreJewelGeo, coreJewelMat);
    coreJewelMesh.position.copy(convergenceTarget);
    groupDigitalTransformation.add(coreJewelMesh);

    // -------------------------------------------------------------------------
    // 4. SHARED 3-ZONE DEPTH PARTICLES (Foreground Motes, Midground, Deep Stardust)
    // -------------------------------------------------------------------------
    const particleCount = isLight ? 36 : 56;
    const pPositions = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);
    const pSizes = new Float32Array(particleCount);

    interface ParticleFlow {
      basePos: THREE.Vector3;
      vel: THREE.Vector3;
      pulsePhase: number;
    }
    const particleFlows: ParticleFlow[] = [];

    const initPrimary = new THREE.Color(SCENE_METAS[0].primaryColor);
    const initSecondary = new THREE.Color(SCENE_METAS[0].secondaryColor);

    for (let i = 0; i < particleCount; i++) {
      const px = (Math.random() - 0.5) * 16;
      const py = (Math.random() - 0.5) * 10;
      const pz = -2.0 - Math.random() * 5.0;

      pPositions[i * 3] = px;
      pPositions[i * 3 + 1] = py;
      pPositions[i * 3 + 2] = pz;

      const c = i % 2 === 0 ? initPrimary : initSecondary;
      pColors[i * 3] = c.r;
      pColors[i * 3 + 1] = c.g;
      pColors[i * 3 + 2] = c.b;

      pSizes[i] = (isLight ? 0.8 : 1.2) + Math.random() * 0.8;

      particleFlows.push({
        basePos: new THREE.Vector3(px, py, pz),
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.002,
          0.0012 + Math.random() * 0.0018,
          (Math.random() - 0.5) * 0.001
        ),
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
    particleGeom.setAttribute("color", new THREE.BufferAttribute(pColors, 3));
    particleGeom.setAttribute("size", new THREE.BufferAttribute(pSizes, 1));

    const particleMat = new THREE.PointsMaterial({
      size: isLight ? 0.9 : 1.4,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: isLight ? 0.35 : 0.75,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const sharedParticles = new THREE.Points(particleGeom, particleMat);
    scene.add(sharedParticles);

    // 5. CAMERA PARALLAX & MOUSE EVENT LISTENERS
    let targetCamX = 0;
    let targetCamY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetCamX = x * 0.35;
      targetCamY = y * 0.25;
    };

    const handleMouseLeave = () => {
      targetCamX = 0;
      targetCamY = 0;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!container || !renderer) return;
      width = container.clientWidth;
      height = container.clientHeight || 750;
      camera.aspect = width / height;

      if (width < 768) {
        camera.position.z = 11.2;
        camera.position.y = -0.3;
      } else {
        camera.position.z = 9.5;
        camera.position.y = 0;
      }
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // 6. SCENE-BASED TRANSITION ENGINE & RENDER LOOP (900–1400ms Transitions)
    const clock = new THREE.Clock();
    let currentSceneIdx = currentIndexRef.current;
    let prevSceneIdx = currentIndexRef.current;
    let transitionStartTime = -10;
    const TRANSITION_DURATION = 1.15;
    const curPrimary = new THREE.Color(SCENE_METAS[0].primaryColor);
    const curSecondary = new THREE.Color(SCENE_METAS[0].secondaryColor);
    const targetPrimary = new THREE.Color(SCENE_METAS[0].primaryColor);
    const targetSecondary = new THREE.Color(SCENE_METAS[0].secondaryColor);

    let isVisible = true;
    let isTabVisible = !document.hidden;
    let lastFrameTime = performance.now();
    const TARGET_FPS = 30; // 30 FPS ambient background cuts GPU consumption significantly
    const FRAME_INTERVAL = 1000 / TARGET_FPS;
    let neuralFrameSkip = 0;
    let particleFrameSkip = 0;

    const startLoop = () => {
      if (!animId && isVisible && isTabVisible) {
        lastFrameTime = performance.now();
        animId = requestAnimationFrame(animate);
      }
    };

    const stopLoop = () => {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = 0;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && isTabVisible) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const onVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isVisible && isTabVisible) {
        startLoop();
      } else {
        stopLoop();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const animate = (now: number) => {
      if (!isVisible || !isTabVisible) {
        animId = 0;
        return;
      }
      animId = requestAnimationFrame(animate);

      const delta = now - lastFrameTime;
      if (delta < FRAME_INTERVAL) return;
      lastFrameTime = now - (delta % FRAME_INTERVAL);

      const elapsed = clock.getElapsedTime();
      const activeIdx = currentIndexRef.current;
      const activeMeta = SCENE_METAS[activeIdx] || SCENE_METAS[0];

      // Detect scene change
      if (activeIdx !== currentSceneIdx) {
        prevSceneIdx = currentSceneIdx;
        currentSceneIdx = activeIdx;
        transitionStartTime = elapsed;

        // Ensure both outgoing and incoming scenes are visible during cross-fade
        sceneGroups.forEach((g, idx) => {
          if (idx === currentSceneIdx || idx === prevSceneIdx) {
            g.visible = true;
          }
        });
      }

      const timeSinceTransition = elapsed - transitionStartTime;
      const isTransitioning = timeSinceTransition < TRANSITION_DURATION;
      const tProgress = Math.min(Math.max(timeSinceTransition / TRANSITION_DURATION, 0), 1);

      // Smooth cubic ease-in-out
      const easeProgress = tProgress < 0.5
        ? 4 * tProgress * tProgress * tProgress
        : 1 - Math.pow(-2 * tProgress + 2, 3) / 2;

      // Update scene group opacities and hide inactive scenes completely
      sceneGroups.forEach((group, idx) => {
        if (idx === currentSceneIdx) {
          group.visible = true;
          const alpha = isTransitioning ? easeProgress : 1.0;
          group.scale.setScalar(0.94 + alpha * 0.06);

          group.traverse((child) => {
            if (child instanceof THREE.Mesh && child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach((m) => {
                  m.opacity = (m.userData.baseOpacity ?? (isLight ? 0.14 : 0.7)) * alpha;
                });
              } else {
                child.material.opacity = (child.material.userData.baseOpacity ?? (isLight ? 0.14 : 0.7)) * alpha;
              }
            } else if (child instanceof THREE.Line || child instanceof THREE.LineSegments) {
              if (child.material && "opacity" in child.material) {
                const baseLine = child.material.userData?.baseOpacity ?? (isLight ? 0.2 : 0.65);
                (child.material as THREE.Material).opacity = baseLine * alpha;
              }
            }
          });
        } else if (idx === prevSceneIdx && isTransitioning) {
          group.visible = true;
          const alpha = 1.0 - easeProgress;
          group.scale.setScalar(1.0 - easeProgress * 0.05);

          group.traverse((child) => {
            if (child instanceof THREE.Mesh && child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach((m) => {
                  m.opacity = (m.userData.baseOpacity ?? (isLight ? 0.14 : 0.7)) * alpha;
                });
              } else {
                child.material.opacity = (child.material.userData.baseOpacity ?? (isLight ? 0.14 : 0.7)) * alpha;
              }
            } else if (child instanceof THREE.Line || child instanceof THREE.LineSegments) {
              if (child.material && "opacity" in child.material) {
                const baseLine = child.material.userData?.baseOpacity ?? (isLight ? 0.2 : 0.65);
                (child.material as THREE.Material).opacity = baseLine * alpha;
              }
            }
          });
        } else {
          // Inactive scenes are completely hidden and do not show through
          group.visible = false;
        }
      });

      // Lighting Palette Interpolation
      targetPrimary.set(activeMeta.primaryColor);
      targetSecondary.set(activeMeta.secondaryColor);
      curPrimary.lerp(targetPrimary, 0.06);
      curSecondary.lerp(targetSecondary, 0.06);

      ambientLight.color.set(activeMeta.lightAmbientColor);
      directionalKeyLight.color.set(activeMeta.lightKeyColor);
      leftFillLight.color.copy(curPrimary);
      rightRimLight.color.copy(curSecondary);

      // Camera parallax damping
      camera.position.x += (targetCamX - camera.position.x) * 0.035;
      camera.position.y += (targetCamY - camera.position.y) * 0.035;

      const speedFactor = prefersReducedMotion ? 0.25 : 1.0;

      // -----------------------------------------------------------------------
      // ANIMATE SPECIFIC ACTIVE SCENE BEHAVIORS
      // -----------------------------------------------------------------------
      if (groupCustomSoftware.visible) {
        customBlocks.forEach((block) => {
          const floatY = Math.sin(elapsed * 0.85 * speedFactor + block.phase) * 0.22;
          const floatZ = Math.cos(elapsed * 0.7 * speedFactor + block.phase) * 0.15;
          block.mesh.position.y = block.basePos.y + floatY;
          block.mesh.position.z = block.basePos.z + floatZ;
          block.mesh.rotation.y = Math.sin(elapsed * 0.3 * speedFactor + block.phase) * 0.08;
        });
      }

      if (groupAISolutions.visible) {
        neuralNodes.forEach((node) => {
          if (!prefersReducedMotion) {
            node.mesh.position.add(node.velocity);
            if (Math.abs(node.mesh.position.x - node.basePos.x) > 1.2) node.velocity.x *= -1;
            if (Math.abs(node.mesh.position.y - node.basePos.y) > 0.9) node.velocity.y *= -1;
          }
          const scale = 1.0 + Math.sin(elapsed * 2.2 + node.pulse) * 0.25;
          node.mesh.scale.setScalar(scale);
          node.mesh.rotation.x += 0.01;
          node.mesh.rotation.y += 0.012;
        });

        neuralFrameSkip = (neuralFrameSkip + 1) % 2;
        if (neuralFrameSkip === 0) {
          // Update Dynamic Proximity Lines between Neural Nodes
          let segCount = 0;
          const posArr = neuralLinesGeom.attributes.position.array as Float32Array;
          const threshold = 2.4;

          for (let i = 0; i < neuralNodes.length && segCount < maxLineSegments; i++) {
            for (let j = i + 1; j < neuralNodes.length && segCount < maxLineSegments; j++) {
              const p1 = neuralNodes[i].mesh.position;
              const p2 = neuralNodes[j].mesh.position;
              const d = p1.distanceTo(p2);

              if (d < threshold) {
                const idx = segCount * 6;
                posArr[idx] = p1.x;
                posArr[idx + 1] = p1.y;
                posArr[idx + 2] = p1.z;
                posArr[idx + 3] = p2.x;
                posArr[idx + 4] = p2.y;
                posArr[idx + 5] = p2.z;
                segCount++;
              }
            }
          }
          neuralLinesGeom.setDrawRange(0, segCount * 2);
          neuralLinesGeom.attributes.position.needsUpdate = true;
        }
      }

      if (groupWebApps.visible) {
        webPanels.forEach((panel) => {
          const floatX = Math.sin(elapsed * 0.6 * speedFactor + panel.phase) * 0.25;
          const floatY = Math.cos(elapsed * 0.75 * speedFactor + panel.phase) * 0.18;
          panel.mesh.position.x = panel.basePos.x + floatX;
          panel.mesh.position.y = panel.basePos.y + floatY;
        });
        streamMesh.position.x = ((elapsed * 0.8) % 2) - 1;
      }

      if (groupMobileEcosystems.visible) {
        mobileForms.forEach((form) => {
          form.mesh.rotation.x += form.rotSpeed.x * speedFactor;
          form.mesh.rotation.y += form.rotSpeed.y * speedFactor;
          const orbitAngle = elapsed * form.orbitSpeed * 30 + form.phase;
          form.mesh.position.x = form.basePos.x + Math.cos(orbitAngle) * form.orbitRadius;
          form.mesh.position.y = form.basePos.y + Math.sin(orbitAngle) * form.orbitRadius;
        });
        mobileConduit.rotation.z = Math.sin(elapsed * 0.25 * speedFactor) * 0.04;
      }

      if (groupDigitalTransformation.visible) {
        coreHelixMesh.rotation.y = elapsed * 0.45 * speedFactor;
        coreJewelMesh.rotation.x += 0.008 * speedFactor;
        coreJewelMesh.rotation.y += 0.012 * speedFactor;
        const jewelPulse = 1.0 + Math.sin(elapsed * 2.0) * 0.08;
        coreJewelMesh.scale.setScalar(jewelPulse);
      }

      particleFrameSkip = (particleFrameSkip + 1) % 2;
      if (particleFrameSkip === 0) {
        // Shared Particle Depth Flow
        const pos = particleGeom.attributes.position.array as Float32Array;
        const col = particleGeom.attributes.color.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          const flow = particleFlows[i];
          pos[i * 3 + 1] += flow.vel.y * speedFactor * 2;
          pos[i * 3] += flow.vel.x * speedFactor * 2;

          if (pos[i * 3 + 1] > 5.5) pos[i * 3 + 1] = -5.5;
          if (pos[i * 3] > 8.5) pos[i * 3] = -8.5;
          if (pos[i * 3] < -8.5) pos[i * 3] = 8.5;

          // Shift particle color to active scene
          const targetC = i % 2 === 0 ? curPrimary : curSecondary;
          col[i * 3] += (targetC.r - col[i * 3]) * 0.05;
          col[i * 3 + 1] += (targetC.g - col[i * 3 + 1]) * 0.05;
          col[i * 3 + 2] += (targetC.b - col[i * 3 + 2]) * 0.05;
        }
        particleGeom.attributes.position.needsUpdate = true;
        particleGeom.attributes.color.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    startLoop();

    return () => {
      stopLoop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);

      // Comprehensive Disposal
      renderer.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      particleTexture.dispose();

      sceneGroups.forEach((g) => {
        g.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry?.dispose();
            if (Array.isArray(child.material)) child.material.forEach((m) => m.dispose());
            else child.material?.dispose();
          } else if (child instanceof THREE.Line || child instanceof THREE.LineSegments) {
            child.geometry?.dispose();
            (child.material as THREE.Material)?.dispose();
          }
        });
      });

      if (renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [isLight]);

  return (
    <div className="cinematic-3d-hero-stage" ref={containerRef}>
      {/* 1. THREE.JS 3D WEBGL CANVAS (Spans full width and height of hero) */}
      <div ref={mountRef} className="cinematic-3d-canvas-mount" aria-hidden="true" />

      {/* 2. CINEMATIC BLACK LAYER: Rich dark contrast layer so 3D animation glows with high contrast */}
      <div className="cinematic-3d-black-layer" aria-hidden="true" />

      {/* 3. ATMOSPHERIC CONTRAST VIGNETTE (Guarantees 100% text readability) */}
      <div className="cinematic-3d-vignette" aria-hidden="true" />

      {/* 4. RIGHT-SIDE INTERACTIVE CAPABILITY BOX ON TOP */}
      <div className="letters-motion-nodes-overlay">
        {SCENE_METAS.map((item, idx) => {
          const isActive = idx === currentIndex;
          const hexStr = `#${item.primaryColor.toString(16).padStart(6, "0")}`;
          return (
            <button
              key={item.id}
              type="button"
              className={`letters-motion-node-chip ${isActive ? "active" : ""}`}
              style={{
                borderColor: isActive ? hexStr : undefined,
                boxShadow: isActive ? `0 0 16px ${hexStr}45` : undefined,
              }}
              onClick={(e) => {
                e.stopPropagation();
                onSelectPhrase?.(idx);
              }}
              title={`Switch to ${item.title}`}
              aria-label={`View ${item.title}`}
            >
              <span
                className="letters-motion-node-dot"
                style={{
                  backgroundColor: hexStr,
                  boxShadow: `0 0 8px ${hexStr}`,
                }}
              />
              <span className="letters-motion-node-title">{item.title}</span>
              <span
                className="letters-motion-node-badge"
                style={{
                  color: hexStr,
                  backgroundColor: `${hexStr}18`,
                  borderColor: `${hexStr}35`,
                }}
              >
                {item.badge}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
