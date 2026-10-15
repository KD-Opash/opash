"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CosmicMeshLandscape() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060b13, 0.032);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 80);
    camera.position.set(0, 2.6, 9.8);
    camera.lookAt(0, -1.8, -12);

    const renderer = new THREE.WebGLRenderer({
      powerPreference: "high-performance",
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x060b13, 0); // Transparent so base gradients blend
    container.appendChild(renderer.domElement);

    // 2. Uniforms for Small, Tight-Frequency Micro-Mesh Landscape
    const meshUniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColorDeep: { value: new THREE.Color("#051630") }, // Deep midnight navy
      uColorBlue: { value: new THREE.Color("#0e3c91") }, // Opash Royal Blue
      uColorMint: { value: new THREE.Color("#5EC098") }, // Opash Signature Mint
      uColorCyan: { value: new THREE.Color("#38bdf8") }, // Electric Cyan accent
      uWireColor: { value: new THREE.Color("#5EC098") },
      uWireOpacity: { value: 0.35 },
    };

    // Reactive Light/Dark Theme Color Palette Synchronization
    const updateThemePalette = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      if (isLight) {
        scene.fog = new THREE.FogExp2(0xf8fafc, 0.030);
        meshUniforms.uColorDeep.value.set("#e2e8f0"); // Soft clean base
        meshUniforms.uColorBlue.value.set("#93c5fd"); // Airy azure blue
        meshUniforms.uColorMint.value.set("#1E9465"); // Opash Emerald
        meshUniforms.uColorCyan.value.set("#2563eb"); // Royal blue
        meshUniforms.uWireColor.value.set("#1E9465");
        meshUniforms.uWireOpacity.value = 0.28;
        renderer.setClearColor(0xf8fafc, 0);
      } else {
        scene.fog = new THREE.FogExp2(0x060b13, 0.032);
        meshUniforms.uColorDeep.value.set("#051630"); // Deep midnight navy
        meshUniforms.uColorBlue.value.set("#0e3c91"); // Opash Royal Blue
        meshUniforms.uColorMint.value.set("#5EC098"); // Opash Signature Mint
        meshUniforms.uColorCyan.value.set("#38bdf8"); // Electric Cyan accent
        meshUniforms.uWireColor.value.set("#5EC098");
        meshUniforms.uWireOpacity.value = 0.38;
        renderer.setClearColor(0x060b13, 0);
      }
    };

    updateThemePalette();

    const themeObserver = new MutationObserver(() => {
      updateThemePalette();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // 3. Compact Plane Geometry with Tight Subdivisions (Small Scale Mesh Pattern)
    const meshGeo = new THREE.PlaneGeometry(32, 28, 80, 70);
    meshGeo.rotateX(-Math.PI / 2 + 0.18);

    // Vertex Shader with Smaller, Delicate Wave Amplitude & Tighter Frequency
    const vertexShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      varying vec2 vUv;
      varying float vElevation;

      // Small, refined harmonic ripples
      float getMicroWave(vec2 p) {
        float w = 0.0;
        // Primary fine wave
        w += sin(p.x * 0.95 + uTime * 0.65 + uMouse.x * 0.4) * cos(p.y * 0.85 + uTime * 0.55) * 0.45;
        // Secondary counter ripple
        w += sin(p.x * 1.85 - uTime * 0.45 + p.y * 1.25) * 0.22;
        // Micro-detail texture
        w += cos(p.x * 3.2 + p.y * 2.6 + uTime * 0.8) * 0.08;
        return w;
      }

      void main() {
        vUv = uv;
        vec3 pos = position;
        float el = getMicroWave(pos.xz);
        pos.y += el;
        vElevation = el;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    // Fragment Shader: Subtle Translucent Ground Plane
    const terrainMat = new THREE.ShaderMaterial({
      uniforms: meshUniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      vertexShader,
      fragmentShader: `
        uniform vec3 uColorDeep;
        uniform vec3 uColorBlue;
        uniform vec3 uColorMint;
        uniform vec3 uColorCyan;
        varying vec2 vUv;
        varying float vElevation;

        void main() {
          // Normalize fine elevation
          float normEl = smoothstep(-0.45, 0.45, vElevation);

          vec3 col = mix(uColorDeep, uColorBlue, smoothstep(0.0, 0.45, normEl));
          col = mix(col, uColorMint, smoothstep(0.45, 0.85, normEl));
          col = mix(col, uColorCyan, smoothstep(0.85, 1.0, normEl));

          // Soft horizon & side fade
          float horizonFade = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.70, vUv.y);
          float sideFade = smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x);
          float alpha = horizonFade * sideFade * 0.45;

          gl_FragColor = vec4(col, alpha);
        }
      `,
    });

    const terrainMesh = new THREE.Mesh(meshGeo, terrainMat);
    terrainMesh.position.set(0, -3.2, -6.5);
    scene.add(terrainMesh);

    // 4. Fine Delicate Wireframe Overlay (Small geometric mesh lines)
    const wireframeMat = new THREE.ShaderMaterial({
      uniforms: meshUniforms,
      transparent: true,
      depthWrite: false,
      wireframe: true,
      blending: THREE.NormalBlending,
      vertexShader,
      fragmentShader: `
        uniform vec3 uWireColor;
        uniform float uWireOpacity;
        varying vec2 vUv;

        void main() {
          float horizonFade = smoothstep(0.0, 0.22, vUv.y) * smoothstep(1.0, 0.65, vUv.y);
          float sideFade = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          float alpha = horizonFade * sideFade * uWireOpacity;

          gl_FragColor = vec4(uWireColor, alpha);
        }
      `,
    });

    const wireframeMesh = new THREE.Mesh(meshGeo, wireframeMat);
    wireframeMesh.position.set(0, -3.18, -6.5);
    scene.add(wireframeMesh);

    // 5. Floating Delicate Stardust Points
    const particleCount = 750;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);

    const mintColor = new THREE.Color("#5EC098");
    const cyanColor = new THREE.Color("#38bdf8");
    const blueColor = new THREE.Color("#60a5fa");

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10 - 1.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 28 - 6;

      const rChoice = Math.random();
      const pColor = rChoice > 0.5 ? mintColor : rChoice > 0.25 ? cyanColor : blueColor;

      colors[i * 3 + 0] = pColor.r;
      colors[i * 3 + 1] = pColor.g;
      colors[i * 3 + 2] = pColor.b;

      scales[i] = Math.random() * 12.0 + 4.0;
      speeds[i] = Math.random() * 0.25 + 0.08;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    particleGeo.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    const particleMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        attribute float scale;
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vColor = color;
          vec3 pos = position;

          pos.y += sin(uTime * 0.5 + pos.x * 0.3) * 0.18;
          pos.x += cos(uTime * 0.4 + pos.z * 0.25) * 0.15;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          gl_PointSize = (scale * uPixelRatio) * (14.0 / -mvPosition.z);
          float dist = -mvPosition.z;
          vAlpha = smoothstep(1.5, 4.0, dist) * smoothstep(30.0, 16.0, dist) * 0.75;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          if (dist > 0.5) discard;

          float intensity = pow(1.0 - (dist * 2.0), 2.0);
          gl_FragColor = vec4(vColor, intensity * vAlpha);
        }
      `,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 6. Smooth Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      targetMouseX = (e.clientX - halfW) / halfW;
      targetMouseY = (e.clientY - halfH) / halfH;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 7. Responsive Resize
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || window.innerHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      particleMat.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
    };

    window.addEventListener("resize", handleResize);

    // 8. Animation Loop
    let animId: number;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = (performance.now() - startTime) * 0.001;

      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      meshUniforms.uTime.value = elapsed;
      meshUniforms.uMouse.value.set(mouseX, mouseY);
      particleMat.uniforms.uTime.value = elapsed;

      camera.position.x = mouseX * 0.9;
      camera.position.y = 2.6 + -mouseY * 0.5;
      camera.lookAt(0, -1.8, -12);

      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      const posArr = posAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        posArr[i * 3 + 2] += speeds[i] * 0.025;
        if (posArr[i * 3 + 2] > 6.0) {
          posArr[i * 3 + 2] = -24.0;
          posArr[i * 3 + 0] = (Math.random() - 0.5) * 30;
          posArr[i * 3 + 1] = (Math.random() - 0.5) * 10 - 1.5;
        }
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      themeObserver.disconnect();
      meshGeo.dispose();
      terrainMat.dispose();
      wireframeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-cosmic-mesh-canvas-container"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
        opacity: 0.65,
        filter: "blur(2.5px)",
        WebkitFilter: "blur(2.5px)",
      }}
      aria-hidden="true"
    />
  );
}
