"use client";

import React, { useEffect, useRef } from "react";

/**
 * Real geographic coordinates for the 9 specified OPASH partnership countries
 */
interface NetworkNode {
  name: string;
  code: string;
  lat: number;
  lon: number;
}

const COUNTRY_NODES: NetworkNode[] = [
  { name: "India", code: "IND", lat: 20.5937, lon: 78.9629 },
  { name: "United States", code: "USA", lat: 37.0902, lon: -95.7129 },
  { name: "United Kingdom", code: "GBR", lat: 55.3781, lon: -3.436 },
  { name: "Canada", code: "CAN", lat: 56.1304, lon: -106.3468 },
  { name: "Germany", code: "DEU", lat: 51.1657, lon: 10.4515 },
  { name: "UAE", code: "ARE", lat: 23.4241, lon: 53.8478 },
  { name: "Australia", code: "AUS", lat: -25.2744, lon: 133.7751 },
  { name: "Brazil", code: "BRA", lat: -14.235, lon: -51.9253 },
  { name: "Singapore", code: "SGP", lat: 1.3521, lon: 103.8198 },
];

/**
 * Conceptual international connection pairs
 */
const CONNECTIONS: [number, number][] = [
  [0, 1], // India <-> USA
  [0, 2], // India <-> UK
  [0, 4], // India <-> Germany
  [0, 5], // India <-> UAE
  [0, 8], // India <-> Singapore
  [1, 2], // USA <-> UK
  [1, 3], // USA <-> Canada
  [1, 7], // USA <-> Brazil
  [2, 4], // UK <-> Germany
  [5, 8], // UAE <-> Singapore
  [8, 6], // Singapore <-> Australia
];

/**
 * Check if a coordinate falls roughly on landmass
 */
function isLandmass(lat: number, lon: number): boolean {
  // Approximate continent bounding regions
  // North America
  if (lat >= 15 && lat <= 72 && lon >= -168 && lon <= -52) return true;
  // South America
  if (lat >= -56 && lat <= 13 && lon >= -82 && lon <= -34) return true;
  // Europe
  if (lat >= 36 && lat <= 71 && lon >= -10 && lon <= 42) return true;
  // Africa
  if (lat >= -35 && lat <= 37 && lon >= -18 && lon <= 52) return true;
  // Asia & Middle East
  if (lat >= 2 && lat <= 75 && lon >= 35 && lon <= 150) return true;
  // Australia & New Zealand
  if (lat >= -47 && lat <= -10 && lon >= 112 && lon <= 178) return true;
  return false;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  phase: number;
}

interface SignalPulse {
  connIndex: number;
  progress: number; // 0 to 1
  speed: number;
}

export default function GlobalNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Mouse parallax tracking
    let targetParallaxX = 0;
    let targetParallaxY = 0;
    let currentParallaxX = 0;
    let currentParallaxY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetParallaxX = (e.clientX / innerWidth - 0.5) * 0.35;
      targetParallaxY = (e.clientY / innerHeight - 0.5) * 0.25;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Generate 3D Globe Points (Fibonacci distribution with landmass density boost)
    interface GlobeDot {
      lat: number;
      lon: number;
      isLand: boolean;
      size: number;
    }

    const globeDots: GlobeDot[] = [];
    const TOTAL_POINTS = window.innerWidth < 768 ? 650 : 1300;

    for (let i = 0; i < TOTAL_POINTS; i++) {
      // Golden spiral distribution on sphere
      const phi = Math.acos(1 - (2 * (i + 0.5)) / TOTAL_POINTS);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const lat = 90 - (phi * 180) / Math.PI;
      const lon = ((theta * 180) / Math.PI) % 360 - 180;

      const isLand = isLandmass(lat, lon);
      // Keep all land points, and randomly sample ocean points for aesthetic depth
      if (isLand || Math.random() < 0.22) {
        globeDots.push({
          lat,
          lon,
          isLand,
          size: isLand ? 1.4 : 0.85,
        });
      }
    }

    // Floating Ambient Tech Particles
    const particles: Particle[] = [];
    const PARTICLE_COUNT = window.innerWidth < 768 ? 24 : 45;
    const colors = [
      "rgba(94, 192, 152, ", // Opash Mint #5EC098
      "rgba(14, 165, 233, ", // Sky Blue #0ea5e9
      "rgba(56, 189, 248, ", // Cyan #38bdf8
      "rgba(99, 102, 241, ", // Indigo #6366f1
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.0003,
        vy: (Math.random() - 0.5) * 0.00025,
        size: Math.random() * 1.8 + 0.8,
        opacity: Math.random() * 0.45 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Active Signal Pulses traveling along connection routes
    const pulses: SignalPulse[] = [];
    CONNECTIONS.forEach((_, idx) => {
      pulses.push({
        connIndex: idx,
        progress: Math.random(),
        speed: Math.random() * 0.004 + 0.003,
      });
      // Second pulse staggered
      pulses.push({
        connIndex: idx,
        progress: (Math.random() + 0.5) % 1,
        speed: Math.random() * 0.003 + 0.0035,
      });
    });

    // Resize handler
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Globe rotation state
    let rotationAngle = 0;
    const rotationSpeed = prefersReducedMotion ? 0 : 0.0018; // Slow, regal, cinematic rotation
    let time = 0;

    // Render loop
    const render = () => {
      time += 0.016;
      rotationAngle += rotationSpeed;

      // Smooth parallax damping
      currentParallaxX += (targetParallaxX - currentParallaxX) * 0.04;
      currentParallaxY += (targetParallaxY - currentParallaxY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Globe Geometry
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;

      // Position the globe: centered or slightly offset to the right on desktop
      const globeRadius = Math.min(width, height) * (isMobile ? 0.48 : 0.38);
      const globeCenterX = isMobile
        ? width * 0.5
        : isTablet
        ? width * 0.5
        : width * 0.52 + currentParallaxX * 40;
      const globeCenterY = isMobile
        ? height * 0.44
        : height * 0.48 + currentParallaxY * 30;

      // Axial tilt (15 degrees) + slight vertical parallax tilt
      const baseTilt = 0.22 + currentParallaxY * 0.15;
      const cosTilt = Math.cos(baseTilt);
      const sinTilt = Math.sin(baseTilt);

      // =========================================================================
      // 1. AMBIENT BACKING RADIAL GLOW & LIGHTING
      // =========================================================================
      const haloGradient = ctx.createRadialGradient(
        globeCenterX,
        globeCenterY,
        globeRadius * 0.2,
        globeCenterX,
        globeCenterY,
        globeRadius * 1.35
      );
      haloGradient.addColorStop(0, "rgba(94, 192, 152, 0.12)");
      haloGradient.addColorStop(0.4, "rgba(14, 165, 233, 0.08)");
      haloGradient.addColorStop(0.7, "rgba(6, 11, 22, 0.25)");
      haloGradient.addColorStop(1, "transparent");

      ctx.fillStyle = haloGradient;
      ctx.beginPath();
      ctx.arc(globeCenterX, globeCenterY, globeRadius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // =========================================================================
      // 2. AMBIENT LATITUDE / LONGITUDE GUIDE RINGS (Subtle wireframe)
      // =========================================================================
      ctx.strokeStyle = "rgba(94, 192, 152, 0.06)";
      ctx.lineWidth = 1;

      // Equator Ring
      ctx.beginPath();
      ctx.ellipse(
        globeCenterX,
        globeCenterY,
        globeRadius,
        globeRadius * Math.sin(baseTilt),
        0,
        0,
        Math.PI * 2
      );
      ctx.stroke();

      // Outer Silhouette Rim
      ctx.strokeStyle = "rgba(56, 189, 248, 0.15)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(globeCenterX, globeCenterY, globeRadius, 0, Math.PI * 2);
      ctx.stroke();

      // =========================================================================
      // 3. 3D PROJECTION HELPER
      // =========================================================================
      const project = (lat: number, lon: number, altitude = 1) => {
        const radLat = (lat * Math.PI) / 180;
        const radLon = ((lon * Math.PI) / 180) + rotationAngle + currentParallaxX * 0.4;

        // Spherical coordinates
        const r = globeRadius * altitude;
        const x3 = r * Math.cos(radLat) * Math.sin(radLon);
        const y3 = -r * Math.sin(radLat);
        const z3 = r * Math.cos(radLat) * Math.cos(radLon);

        // Apply axial tilt rotation
        const yRot = y3 * cosTilt - z3 * sinTilt;
        const zRot = y3 * sinTilt + z3 * cosTilt;

        return {
          x: globeCenterX + x3,
          y: globeCenterY + yRot,
          z: zRot,
          visible: zRot > -globeRadius * 0.15,
          isFront: zRot > 0,
        };
      };

      // =========================================================================
      // 4. DRAW 3D GLOBE POINT CLOUD
      // =========================================================================
      for (let i = 0; i < globeDots.length; i++) {
        const dot = globeDots[i];
        const p = project(dot.lat, dot.lon);

        if (!p.visible) continue;

        // Depth cueing
        const depthFactor = (p.z + globeRadius) / (globeRadius * 2); // 0 to 1
        const opacity = dot.isLand
          ? p.isFront
            ? 0.28 + depthFactor * 0.65
            : 0.08 + depthFactor * 0.15
          : 0.08 + depthFactor * 0.18;

        const size = dot.size * (0.6 + depthFactor * 0.65);

        ctx.fillStyle = dot.isLand
          ? `rgba(94, 192, 152, ${opacity})` // Emerald / Mint
          : `rgba(71, 109, 154, ${opacity})`; // Slate Blue

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // =========================================================================
      // 5. DRAW CONNECTING ARCS & CURVED GEODESIC NETWORK
      // =========================================================================
      const projectedNodes = COUNTRY_NODES.map((node) => ({
        ...node,
        pos: project(node.lat, node.lon),
        elevatedPos: project(node.lat, node.lon, 1.02),
      }));

      // Render Connection Arcs
      CONNECTIONS.forEach(([idxA, idxB], connIdx) => {
        const nodeA = projectedNodes[idxA];
        const nodeB = projectedNodes[idxB];

        if (!nodeA || !nodeB) return;

        // Skip if both nodes are on the dark far backside
        if (nodeA.pos.z < -globeRadius * 0.3 && nodeB.pos.z < -globeRadius * 0.3) {
          return;
        }

        // Calculate midpoint elevated above surface for a gentle arc
        const midLat = (nodeA.lat + nodeB.lat) / 2;
        let midLon = (nodeA.lon + nodeB.lon) / 2;
        if (Math.abs(nodeA.lon - nodeB.lon) > 180) {
          midLon += 180;
        }

        const midPos = project(midLat, midLon, 1.18);

        // Draw curved bezier line
        const avgZ = (nodeA.pos.z + nodeB.pos.z + midPos.z) / 3;
        const lineAlpha = Math.max(0.04, Math.min(0.45, (avgZ + globeRadius * 0.5) / (globeRadius * 1.5)));

        ctx.strokeStyle = `rgba(94, 192, 152, ${lineAlpha})`;
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(nodeA.pos.x, nodeA.pos.y);
        ctx.quadraticCurveTo(midPos.x, midPos.y, nodeB.pos.x, nodeB.pos.y);
        ctx.stroke();

        // Render traveling light pulses along this connection
        pulses.forEach((pulse) => {
          if (pulse.connIndex !== connIdx) return;

          if (!prefersReducedMotion) {
            pulse.progress += pulse.speed;
            if (pulse.progress > 1) pulse.progress = 0;
          }

          const t = pulse.progress;
          // Quadratic Bezier interpolation formula: B(t) = (1-t)^2 P0 + 2(1-t)t P1 + t^2 P2
          const invT = 1 - t;
          const px =
            invT * invT * nodeA.pos.x +
            2 * invT * t * midPos.x +
            t * t * nodeB.pos.x;
          const py =
            invT * invT * nodeA.pos.y +
            2 * invT * t * midPos.y +
            t * t * nodeB.pos.y;
          const pz =
            invT * invT * nodeA.pos.z +
            2 * invT * t * midPos.z +
            t * t * nodeB.pos.z;

          if (pz > -globeRadius * 0.1) {
            const pulseAlpha = Math.max(
              0.1,
              Math.min(0.95, (pz + globeRadius) / (globeRadius * 1.8))
            );

            // Glowing photon pulse head
            ctx.fillStyle = `rgba(255, 255, 255, ${pulseAlpha})`;
            ctx.beginPath();
            ctx.arc(px, py, 2.2, 0, Math.PI * 2);
            ctx.fill();

            // Colored photon halo
            ctx.fillStyle = `rgba(94, 192, 152, ${pulseAlpha * 0.75})`;
            ctx.beginPath();
            ctx.arc(px, py, 5, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      });

      // =========================================================================
      // 6. DRAW THE 9 OPASH COUNTRY NODES & PULSING BEACONS
      // =========================================================================
      projectedNodes.forEach((node) => {
        const { pos } = node;

        if (pos.z <= -globeRadius * 0.1) return; // Behind globe horizon

        const visibility = Math.min(1, Math.max(0, (pos.z + globeRadius * 0.1) / (globeRadius * 0.7)));

        // Expanding beacon pulse wave
        const pulseCycle = (time * 1.5 + (node.lat + 90) * 0.1) % 2; // 0 to 2
        const pulseRadius = 3 + pulseCycle * 9;
        const pulseAlpha = Math.max(0, (1 - pulseCycle / 2) * 0.65 * visibility);

        ctx.strokeStyle = `rgba(94, 192, 152, ${pulseAlpha})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, pulseRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Node Glow Halo
        const nodeGlow = ctx.createRadialGradient(
          pos.x,
          pos.y,
          1,
          pos.x,
          pos.y,
          9
        );
        nodeGlow.addColorStop(0, `rgba(94, 192, 152, ${0.9 * visibility})`);
        nodeGlow.addColorStop(0.6, `rgba(56, 189, 248, ${0.4 * visibility})`);
        nodeGlow.addColorStop(1, "transparent");

        ctx.fillStyle = nodeGlow;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 9, 0, Math.PI * 2);
        ctx.fill();

        // Node Solid Core
        ctx.fillStyle = `rgba(255, 255, 255, ${0.95 * visibility})`;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Elegant country label tag (for high-contrast visibility on front)
        if (pos.z > globeRadius * 0.25 && !isMobile) {
          const labelAlpha = Math.min(1, (pos.z - globeRadius * 0.25) / (globeRadius * 0.45));
          ctx.font = "600 10px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
          ctx.fillStyle = `rgba(255, 255, 255, ${labelAlpha * 0.85})`;
          ctx.fillText(node.name, pos.x + 8, pos.y + 3);
        }
      });

      // =========================================================================
      // 7. DRAW CONTINUOUS AMBIENT TECH PARTICLES (Slow curved drift)
      // =========================================================================
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy + Math.sin(time + p.phase) * 0.00015;

          // Wrap boundaries
          if (p.x < 0) p.x = 1;
          if (p.x > 1) p.x = 0;
          if (p.y < 0) p.y = 1;
          if (p.y > 1) p.y = 0;
        }

        const px = p.x * width;
        const py = p.y * height;
        const sparkle = 0.8 + Math.sin(time * 2 + p.phase) * 0.2;

        ctx.fillStyle = `${p.color}${p.opacity * sparkle})`;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      className="global-network-bg-container"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
      aria-hidden="true"
    >
      {/* 1. Sophisticated Deep Space Navy Base Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, #040813 0%, #060b18 45%, #050a14 100%)",
        }}
      />

      {/* 2. Restrained Ambient Teal & Emerald Radial Lighting Meshes */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "5%",
          width: "clamp(350px, 45vw, 650px)",
          height: "clamp(350px, 45vw, 650px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(94, 192, 152, 0.14) 0%, rgba(94, 192, 152, 0.03) 55%, transparent 75%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "clamp(420px, 50vw, 750px)",
          height: "clamp(420px, 50vw, 750px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.16) 0%, rgba(37, 99, 235, 0.08) 50%, transparent 75%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      {/* 3. High-Performance 3D Global Network Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "none",
        }}
      />

      {/* 4. Center Vignette Overlay to ensure text readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 90% 70% at 50% 48%, rgba(6, 11, 24, 0.45) 0%, rgba(6, 11, 24, 0.1) 60%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* 5. Smooth bottom fade into next section */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "140px",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(6, 11, 20, 0.7) 65%, #060b13 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
