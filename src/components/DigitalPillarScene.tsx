"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface PillarProps {
  scrollYProgress?: number;
}

/**
 * State-of-the-Art 3D Architectural Digital Pillar
 * Conceptual design for OPASH (Pillar & Foundation):
 * - Crystalline energy core with internal luminous light stream
 * - 4 Architectural Pylons representing the OPASH Logo quadrants:
 *   (3 Slate Blue #476D9A pillars + 1 Accent Emerald Mint #5EC098 pillar)
 * - Precision-engineered titanium struts with chrome metallic reflections
 * - Dual counter-rotating orbital gyro rings with glowing telemetry nodes
 * - Hovering holographic crest and stepped geometric foundation plinth
 */
function FuturisticPillarModel({ scrollYProgress = 0 }: PillarProps) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const glassRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);
  const crestRef = useRef<THREE.Group>(null);
  const mintParticlesRef = useRef<THREE.Points>(null);
  const blueParticlesRef = useRef<THREE.Points>(null);

  // Pillar Rise animation state on mount
  const currentY = useRef(-2.8);
  const targetY = 0;

  // Floating particles: Mint (#5EC098) & Blue (#476D9A)
  const particleCount = 130;
  const { mintParticlePositions, blueParticlePositions } = useMemo(() => {
    const mintPos = new Float32Array(particleCount * 3);
    const bluePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius1 = 1.5 + Math.random() * 2.8;
      const theta1 = Math.random() * Math.PI * 2;
      const y1 = (Math.random() - 0.5) * 6.5;
      mintPos[i * 3] = radius1 * Math.cos(theta1);
      mintPos[i * 3 + 1] = y1;
      mintPos[i * 3 + 2] = radius1 * Math.sin(theta1);

      const radius2 = 1.3 + Math.random() * 2.6;
      const theta2 = Math.random() * Math.PI * 2;
      const y2 = (Math.random() - 0.5) * 6.5;
      bluePos[i * 3] = radius2 * Math.cos(theta2);
      bluePos[i * 3 + 1] = y2;
      bluePos[i * 3 + 2] = radius2 * Math.sin(theta2);
    }
    return { mintParticlePositions: mintPos, blueParticlePositions: bluePos };
  }, []);

  // 4 Main Load-Bearing Architectural Pylons (0°, 90°, 180°, 270°)
  // Representing the 4 quadrants of the OPASH logo!
  const pylonAngles = useMemo(() => {
    return [0, 90, 180, 270].map((deg) => (deg * Math.PI) / 180);
  }, []);

  // 8 Perimeter vertical energy rods around the core
  const rodAngles = useMemo(() => {
    return [0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (deg * Math.PI) / 180);
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // 1. Smooth cinematic rise on load
    currentY.current = THREE.MathUtils.lerp(currentY.current, targetY, 0.045);

    // 2. Mouse Parallax & Scroll Interpolation
    const targetRotX = -state.pointer.y * 0.16 + (scrollYProgress * 0.28);
    const targetRotY = state.pointer.x * 0.28 + time * 0.14 + (scrollYProgress * 1.4);

    if (groupRef.current) {
      groupRef.current.position.y = currentY.current;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.06);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.06);
    }

    // 3. Inner Core Energy Breathing Pulse
    if (coreRef.current) {
      const pulse = 1 + Math.sin(time * 2.4) * 0.04;
      coreRef.current.scale.set(pulse, 1, pulse);
      const mat = coreRef.current.material as THREE.MeshStandardMaterial;
      if (mat) {
        mat.emissiveIntensity = 2.2 + Math.sin(time * 2.4) * 0.65;
      }
    }

    // 4. Outer Crystalline Glass Shimmer
    if (glassRef.current) {
      glassRef.current.rotation.y -= delta * 0.1;
    }

    // 5. Floating Apex Hologram Crest Rotation
    if (crestRef.current) {
      crestRef.current.rotation.y += delta * 0.4;
      crestRef.current.position.y = 2.75 + Math.sin(time * 1.8) * 0.06;
    }

    // 6. Orbital Gyro Stabilizer Rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.22;
      ring1Ref.current.rotation.y += delta * 0.14;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.18;
      ring2Ref.current.rotation.x += delta * 0.12;
    }

    // 7. Particle Streams drifting upward
    if (mintParticlesRef.current) {
      const positions = mintParticlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += delta * 0.38;
        if (positions[i * 3 + 1] > 3.8) {
          positions[i * 3 + 1] = -3.8;
        }
      }
      mintParticlesRef.current.geometry.attributes.position.needsUpdate = true;
    }

    if (blueParticlesRef.current) {
      const positions = blueParticlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += delta * 0.32;
        if (positions[i * 3 + 1] > 3.8) {
          positions[i * 3 + 1] = -3.8;
        }
      }
      blueParticlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  // =========================================================================
  // HIGH-END PROCEDURAL MATERIALS
  // =========================================================================

  // Polished Titanium Chrome for structural pylon frame (Gleaming specular highlights)
  const titaniumChrome = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#38526a",
        metalness: 0.96,
        roughness: 0.12,
      }),
    []
  );

  // Brushed Slate Alloy for foundation bases & brackets
  const brushedSlate = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#24374b",
        metalness: 0.9,
        roughness: 0.2,
      }),
    []
  );

  // Deep Obsidian Dark Base
  const obsidianBase = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#121d2a",
        metalness: 0.92,
        roughness: 0.25,
      }),
    []
  );

  // OPASH Emerald Mint Accent Material (#5EC098) - Glowing and vibrant
  const glowingMint = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#5EC098",
        emissive: "#5EC098",
        emissiveIntensity: 2.3,
        roughness: 0.15,
        metalness: 0.3,
        transparent: true,
        opacity: 0.95,
      }),
    []
  );

  // OPASH Steel Blue Accent Material (#476D9A) - Foundation glow
  const glowingBlue = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#476D9A",
        emissive: "#476D9A",
        emissiveIntensity: 1.9,
        roughness: 0.18,
        metalness: 0.4,
        transparent: true,
        opacity: 0.92,
      }),
    []
  );

  // Outer Crystalline Faceted Glass Sheath encasing the energy core
  const crystallineGlass = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#d4f1f4",
        metalness: 0.1,
        roughness: 0.08,
        transmission: 0.75,
        transparent: true,
        opacity: 0.42,
        reflectivity: 0.9,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
      }),
    []
  );

  // Neon Laser Lines
  const neonMintLine = useMemo(() => new THREE.MeshBasicMaterial({ color: "#5EC098" }), []);
  const neonBlueLine = useMemo(() => new THREE.MeshBasicMaterial({ color: "#6289B8" }), []);

  return (
    <group ref={groupRef}>
      {/* ========================================================================= */}
      {/* 1. CENTRAL MULTI-LAYERED CRYSTALLINE ENERGY COLUMN (The Spirit of OPASH)  */}
      {/* ========================================================================= */}
      {/* A. Inner Luminous Core */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 4.5, 32]} />
        <primitive object={glowingMint} attach="material" />
      </mesh>

      {/* B. Outer 8-Sided Prismatic Glass Enclosure */}
      <mesh ref={glassRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.56, 0.56, 4.6, 8]} />
        <primitive object={crystallineGlass} attach="material" />
      </mesh>

      {/* C. 8 Vertical Internal Light Filament Rods */}
      {rodAngles.map((angle, i) => {
        const r = 0.48;
        const x = r * Math.cos(angle);
        const z = r * Math.sin(angle);
        const isMint = i % 2 === 0;
        return (
          <mesh key={i} position={[x, 0, z]}>
            <cylinderGeometry args={[0.018, 0.018, 4.5, 8]} />
            <primitive object={isMint ? neonMintLine : neonBlueLine} attach="material" />
          </mesh>
        );
      })}

      {/* Internal Multi-Point Illumination casting rich light onto pillars */}
      <pointLight position={[0, 0, 0]} color="#5EC098" intensity={5.5} distance={8} />
      <pointLight position={[0, 1.4, 0]} color="#6289B8" intensity={3.5} distance={7} />
      <pointLight position={[0, -1.4, 0]} color="#5EC098" intensity={3.5} distance={7} />
      <pointLight position={[0, 2.75, 0]} color="#5EC098" intensity={3.2} distance={5} />

      {/* ========================================================================= */}
      {/* 2. FOUR ICONIC ARCHITECTURAL PYLONS (Modeled on the OPASH Logo Emblem!)   */}
      {/* ========================================================================= */}
      {pylonAngles.map((angle, index) => {
        const radius = 1.18;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);

        // Pylon #1 (top right quadrant) is the signature OPASH Emerald Mint!
        // Pylons #0, #2, #3 are the OPASH Steel Blue quadrants!
        const isMintPylon = index === 1;

        return (
          <group key={index} position={[x, 0, z]} rotation={[0, -angle, 0]}>
            {/* Main Precision Pylon Shaft */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.26, 4.35, 0.28]} />
              <primitive object={titaniumChrome} attach="material" />
            </mesh>

            {/* Inset Glowing Vertical Energy Channel */}
            <mesh position={[0, 0, 0.142]}>
              <boxGeometry args={[0.06, 3.9, 0.01]} />
              <primitive object={isMintPylon ? neonMintLine : neonBlueLine} attach="material" />
            </mesh>

            {/* Inner Reflector Channel facing the core */}
            <mesh position={[0, 0, -0.142]}>
              <boxGeometry args={[0.08, 4.0, 0.01]} />
              <primitive object={isMintPylon ? glowingMint : glowingBlue} attach="material" />
            </mesh>

            {/* Top Structural Cantilever Bracket */}
            <mesh position={[0, 2.12, 0]}>
              <boxGeometry args={[0.34, 0.22, 0.36]} />
              <primitive object={brushedSlate} attach="material" />
            </mesh>
            {/* Top Chrome Fastener Node */}
            <mesh position={[0, 2.12, 0.16]}>
              <sphereGeometry args={[0.04, 16, 16]} />
              <primitive object={isMintPylon ? glowingMint : glowingBlue} attach="material" />
            </mesh>

            {/* Mid-Span Stabilization Bracket */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.32, 0.18, 0.34]} />
              <primitive object={brushedSlate} attach="material" />
            </mesh>
            {/* Center telemetry node */}
            <mesh position={[0, 0, 0.15]}>
              <boxGeometry args={[0.1, 0.08, 0.02]} />
              <primitive object={isMintPylon ? neonMintLine : neonBlueLine} attach="material" />
            </mesh>

            {/* Bottom Foundation Anchor Bracket */}
            <mesh position={[0, -2.12, 0]}>
              <boxGeometry args={[0.34, 0.22, 0.36]} />
              <primitive object={brushedSlate} attach="material" />
            </mesh>
            {/* Bottom Chrome Fastener Node */}
            <mesh position={[0, -2.12, 0.16]}>
              <sphereGeometry args={[0.04, 16, 16]} />
              <primitive object={isMintPylon ? glowingMint : glowingBlue} attach="material" />
            </mesh>
          </group>
        );
      })}

      {/* ========================================================================= */}
      {/* 3. SOLID STEPPED ARCHITECTURAL BASE & PLINTH (The Ground Foundation)      */}
      {/* ========================================================================= */}
      <group position={[0, -2.28, 0]}>
        {/* Tier 1: Ground Base Platform */}
        <mesh position={[0, -0.28, 0]}>
          <cylinderGeometry args={[2.3, 2.6, 0.22, 6]} />
          <primitive object={obsidianBase} attach="material" />
        </mesh>

        {/* Tier 2: Stepped Plinth with Titanium Bevel */}
        <mesh position={[0, -0.06, 0]}>
          <cylinderGeometry args={[1.95, 2.15, 0.22, 6]} />
          <primitive object={titaniumChrome} attach="material" />
        </mesh>

        {/* Outer Glowing Energy Circuit Ring (Opash Steel Blue) */}
        <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.75, 0.028, 16, 64]} />
          <primitive object={glowingBlue} attach="material" />
        </mesh>

        {/* Inner Glowing Energy Circuit Ring (Opash Emerald Mint) */}
        <mesh position={[0, 0.08, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.25, 0.022, 16, 48]} />
          <primitive object={glowingMint} attach="material" />
        </mesh>

        {/* Tier 3: Core Anchor Collar */}
        <mesh position={[0, 0.17, 0]}>
          <cylinderGeometry args={[1.5, 1.75, 0.18, 6]} />
          <primitive object={brushedSlate} attach="material" />
        </mesh>

        {/* 6 Perimeter Chrome Anchor Bolts */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const r = 2.05;
          return (
            <mesh key={i} position={[r * Math.cos(rad), 0.06, r * Math.sin(rad)]}>
              <cylinderGeometry args={[0.06, 0.06, 0.08, 12]} />
              <primitive object={glowingBlue} attach="material" />
            </mesh>
          );
        })}
      </group>

      {/* ========================================================================= */}
      {/* 4. ARCHITECTURAL CAPITAL & FLOATING HOVERING CREST (Enterprise Support)   */}
      {/* ========================================================================= */}
      <group position={[0, 2.28, 0]}>
        {/* Tier 1 Capital Flange */}
        <mesh position={[0, -0.16, 0]}>
          <cylinderGeometry args={[1.75, 1.5, 0.18, 6]} />
          <primitive object={brushedSlate} attach="material" />
        </mesh>

        {/* Embedded Glowing Capital Circuit Ring */}
        <mesh position={[0, -0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.55, 0.028, 16, 48]} />
          <primitive object={glowingMint} attach="material" />
        </mesh>

        {/* Tier 2 Polished Capital Plate */}
        <mesh position={[0, 0.06, 0]}>
          <cylinderGeometry args={[2.05, 1.85, 0.22, 6]} />
          <primitive object={titaniumChrome} attach="material" />
        </mesh>

        {/* Top Platform Plate */}
        <mesh position={[0, 0.26, 0]}>
          <cylinderGeometry args={[2.4, 2.2, 0.18, 6]} />
          <primitive object={obsidianBase} attach="material" />
        </mesh>

        {/* Concentric Top Circuit Ring */}
        <mesh position={[0, 0.36, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.8, 0.024, 16, 48]} />
          <primitive object={glowingBlue} attach="material" />
        </mesh>
      </group>

      {/* Floating Holographic OPASH Emblem Crest hovering at apex */}
      <group ref={crestRef} position={[0, 2.75, 0]}>
        {/* Holographic Ring Segment */}
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.42, 0.038, 16, 32]} />
          <primitive object={glowingMint} attach="material" />
        </mesh>
        {/* Central hovering energy sphere */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <primitive object={glowingMint} attach="material" />
        </mesh>
        {/* 4 Cardinal beacon nodes */}
        {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((theta, i) => (
          <mesh key={i} position={[0.42 * Math.cos(theta), 0, 0.42 * Math.sin(theta)]}>
            <sphereGeometry args={[0.035, 12, 12]} />
            <primitive object={i === 1 ? glowingMint : glowingBlue} attach="material" />
          </mesh>
        ))}
      </group>

      {/* ========================================================================= */}
      {/* 5. PRECISION GYROSCOPE STABILIZER RINGS (Orbiting Support System)         */}
      {/* ========================================================================= */}
      {/* Upper Stabilizer Gyro: Opash Steel Blue (#476D9A) */}
      <group ref={ring1Ref} position={[0, 0.75, 0]} rotation={[0.38, 0, 0.18]}>
        {/* Titanium Outer Ring Housing */}
        <mesh>
          <torusGeometry args={[2.1, 0.038, 16, 64]} />
          <primitive object={titaniumChrome} attach="material" />
        </mesh>
        {/* Glowing Inner Energy Track */}
        <mesh>
          <torusGeometry args={[2.1, 0.016, 16, 64]} />
          <primitive object={glowingBlue} attach="material" />
        </mesh>
        {/* 4 Blue Telemetry Sensor Nodes */}
        {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((theta, i) => (
          <mesh key={i} position={[2.1 * Math.cos(theta), 2.1 * Math.sin(theta), 0]}>
            <sphereGeometry args={[0.075, 16, 16]} />
            <primitive object={glowingBlue} attach="material" />
          </mesh>
        ))}
      </group>

      {/* Lower Stabilizer Gyro: Opash Emerald Mint (#5EC098) */}
      <group ref={ring2Ref} position={[0, -0.75, 0]} rotation={[-0.35, 0, -0.22]}>
        {/* Titanium Outer Ring Housing */}
        <mesh>
          <torusGeometry args={[2.4, 0.035, 16, 64]} />
          <primitive object={titaniumChrome} attach="material" />
        </mesh>
        {/* Glowing Inner Energy Track */}
        <mesh>
          <torusGeometry args={[2.4, 0.015, 16, 64]} />
          <primitive object={glowingMint} attach="material" />
        </mesh>
        {/* 6 Mint Telemetry Sensor Nodes */}
        {[0, Math.PI / 3, (2 * Math.PI) / 3, Math.PI, (4 * Math.PI) / 3, (5 * Math.PI) / 3].map((theta, i) => (
          <mesh key={i} position={[2.4 * Math.cos(theta), 2.4 * Math.sin(theta), 0]}>
            <sphereGeometry args={[0.065, 16, 16]} />
            <primitive object={glowingMint} attach="material" />
          </mesh>
        ))}
      </group>

      {/* ========================================================================= */}
      {/* 6. FLOATING CYBER EMBERS (Dual-Tone Upward Drifting Particles)            */}
      {/* ========================================================================= */}
      {/* Mint Embers (#5EC098) */}
      <points ref={mintParticlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[mintParticlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.048}
          color="#5EC098"
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Blue Embers (#6289B8) */}
      <points ref={blueParticlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[blueParticlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.042}
          color="#6289B8"
          transparent
          opacity={0.75}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

interface DigitalPillarSceneProps {
  scrollYProgress?: number;
}

export default function DigitalPillarScene({ scrollYProgress = 0 }: DigitalPillarSceneProps) {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas
        camera={{ position: [0, 0.15, 7.1], fov: 39 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        {/* Rich Architectural Studio Lighting */}
        <ambientLight intensity={0.8} color="#0e1a26" />

        {/* Key Directional Metallic Highlight Light (Brings out chrome specular highlights) */}
        <directionalLight position={[7, 9, 7]} intensity={3.2} color="#ffffff" />

        {/* Secondary Fill Light in Opash Steel Blue #476D9A */}
        <directionalLight position={[-7, -2, -5]} intensity={2.2} color="#476D9A" />

        {/* Accent Uplight in Opash Emerald Mint #5EC098 */}
        <directionalLight position={[0, -6, 5]} intensity={1.6} color="#5EC098" />

        {/* Top Rim Light for dramatic silhouette edge definition */}
        <directionalLight position={[0, 11, -2]} intensity={2.4} color="#e6f2fa" />

        {/* Floating cinematic hover motion */}
        <Float speed={1.7} rotationIntensity={0.12} floatIntensity={0.22}>
          <FuturisticPillarModel scrollYProgress={scrollYProgress} />
        </Float>
      </Canvas>
    </div>
  );
}
