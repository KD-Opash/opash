"use client";

import React, { useEffect, useRef } from "react";

/**
 * 5 Key International Hub Nodes for the Right-Column Visual
 */
interface NetworkHub {
  name: string;
  lat: number;
  lon: number;
  showLabel?: boolean;
}

const HUBS: NetworkHub[] = [
  { name: "London", lat: 51.5074, lon: -0.1278, showLabel: true },
  { name: "New York", lat: 40.7128, lon: -74.006, showLabel: true },
  { name: "Bengaluru", lat: 12.9716, lon: 77.5946, showLabel: true },
  { name: "Singapore", lat: 1.3521, lon: 103.8198, showLabel: true },
  { name: "Dubai", lat: 25.2048, lon: 55.2708, showLabel: false },
];

/**
 * Selected connections between hubs
 */
const CONNECTIONS: [number, number][] = [
  [1, 0], // New York <-> London
  [0, 4], // London <-> Dubai
  [4, 2], // Dubai <-> Bengaluru
  [2, 3], // Bengaluru <-> Singapore
  [1, 3], // New York <-> Singapore
];

/**
 * Approximate landmass checker for Earth land points
 */
function isLandCoordinate(lat: number, lon: number): boolean {
  if (lat >= 15 && lat <= 72 && lon >= -168 && lon <= -52) return true; // N. America
  if (lat >= -56 && lat <= 13 && lon >= -82 && lon <= -34) return true;  // S. America
  if (lat >= 36 && lat <= 71 && lon >= -10 && lon <= 42) return true;   // Europe
  if (lat >= -35 && lat <= 37 && lon >= -18 && lon <= 52) return true;  // Africa
  if (lat >= 2 && lat <= 75 && lon >= 35 && lon <= 150) return true;    // Asia
  if (lat >= -47 && lat <= -10 && lon >= 112 && lon <= 178) return true;// Australia
  return false;
}

interface Particle {
  radiusFactor: number;
  lat: number;
  lon: number;
  speed: number;
  size: number;
  opacity: number;
  phase: number;
}

export default function GlobalNetworkVisual() {
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

    // Subtle pointer parallax
    let targetParallaxX = 0;
    let targetParallaxY = 0;
    let currentParallaxX = 0;
    let currentParallaxY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetParallaxX = x * 0.25;
      targetParallaxY = y * 0.18;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Generate balanced 3D dot cloud (~550 points)
    interface DotPoint {
      lat: number;
      lon: number;
      isLand: boolean;
      size: number;
    }

    const dots: DotPoint[] = [];
    const TOTAL_POINTS = window.innerWidth < 768 ? 320 : 540;

    for (let i = 0; i < TOTAL_POINTS; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / TOTAL_POINTS);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const lat = 90 - (phi * 180) / Math.PI;
      const lon = ((theta * 180) / Math.PI) % 360 - 180;

      const isLand = isLandCoordinate(lat, lon);
      if (isLand || Math.random() < 0.15) {
        dots.push({
          lat,
          lon,
          isLand,
          size: isLand ? 1.25 : 0.8,
        });
      }
    }

    // Faint atmospheric orbiting particles close to globe
    const orbitParticles: Particle[] = [];
    const PARTICLE_COUNT = window.innerWidth < 768 ? 16 : 28;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      orbitParticles.push({
        radiusFactor: 1.05 + Math.random() * 0.28,
        lat: (Math.random() - 0.5) * 120,
        lon: Math.random() * 360 - 180,
        speed: (Math.random() * 0.15 + 0.08) * (Math.random() > 0.5 ? 1 : -1),
        size: Math.random() * 1.4 + 0.8,
        opacity: Math.random() * 0.4 + 0.15,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Light pulses along connections
    interface Pulse {
      connIdx: number;
      t: number;
      speed: number;
    }

    const pulses: Pulse[] = CONNECTIONS.map((_, idx) => ({
      connIdx: idx,
      t: Math.random(),
      speed: Math.random() * 0.0035 + 0.003,
    }));

    // Resize handler
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement?.clientWidth || 500;
      height = canvas.parentElement?.clientHeight || 500;

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

    let rotation = 0;
    const rotationSpeed = prefersReducedMotion ? 0 : 0.0022;
    let time = 0;

    const render = () => {
      time += 0.016;
      rotation += rotationSpeed;

      currentParallaxX += (targetParallaxX - currentParallaxX) * 0.05;
      currentParallaxY += (targetParallaxY - currentParallaxY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const globeRadius = Math.min(width, height) * 0.40;
      const centerX = width * 0.5 + currentParallaxX * 25;
      const centerY = height * 0.5 + currentParallaxY * 20;

      const tilt = 0.24 + currentParallaxY * 0.12;
      const cosTilt = Math.cos(tilt);
      const sinTilt = Math.sin(tilt);

      // =========================================================================
      // 1. SOFT BACKDROP AMBIENT GLOW (Restrained, subtle)
      // =========================================================================
      const halo = ctx.createRadialGradient(
        centerX,
        centerY,
        globeRadius * 0.15,
        centerX,
        centerY,
        globeRadius * 1.3
      );
      halo.addColorStop(0, "rgba(94, 192, 152, 0.14)"); // Opash Mint #5EC098
      halo.addColorStop(0.35, "rgba(14, 165, 233, 0.08)"); // Sky Blue #0ea5e9
      halo.addColorStop(0.7, "rgba(4, 9, 20, 0.2)");
      halo.addColorStop(1, "transparent");

      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      // =========================================================================
      // 2. FINE LATITUDE & LONGITUDE WIREFRAME CURVES
      // =========================================================================
      ctx.lineWidth = 0.85;

      // Latitude Parallels
      [-30, 0, 30].forEach((latDeg) => {
        const radLat = (latDeg * Math.PI) / 180;
        const rParallel = globeRadius * Math.cos(radLat);
        const yOffset = -globeRadius * Math.sin(radLat);
        const yRot = yOffset * cosTilt;

        ctx.strokeStyle =
          latDeg === 0
            ? "rgba(94, 192, 152, 0.16)" // Equator slightly more pronounced
            : "rgba(71, 109, 154, 0.1)";

        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY + yRot,
          rParallel,
          rParallel * Math.sin(tilt),
          0,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      });

      // Longitude Meridians
      [0, 60, 120].forEach((lonOffset) => {
        const radOffset = ((lonOffset * Math.PI) / 180) + rotation;
        ctx.strokeStyle = "rgba(71, 109, 154, 0.08)";
        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY,
          globeRadius * Math.abs(Math.sin(radOffset)),
          globeRadius,
          tilt,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      });

      // Outer Silhouette Rim
      ctx.strokeStyle = "rgba(94, 192, 152, 0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Projector helper
      const project = (lat: number, lon: number, altitude = 1) => {
        const radLat = (lat * Math.PI) / 180;
        const radLon = ((lon * Math.PI) / 180) + rotation + currentParallaxX * 0.3;

        const r = globeRadius * altitude;
        const x3 = r * Math.cos(radLat) * Math.sin(radLon);
        const y3 = -r * Math.sin(radLat);
        const z3 = r * Math.cos(radLat) * Math.cos(radLon);

        const yRot = y3 * cosTilt - z3 * sinTilt;
        const zRot = y3 * sinTilt + z3 * cosTilt;

        return {
          x: centerX + x3,
          y: centerY + yRot,
          z: zRot,
          isFront: zRot > 0,
        };
      };

      // =========================================================================
      // 3. DRAW 3D SPHERE DOT CLOUD
      // =========================================================================
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const p = project(d.lat, d.lon);

        if (p.z < -globeRadius * 0.18) continue; // Skip deep back

        const depthFactor = (p.z + globeRadius) / (globeRadius * 2);
        const alpha = d.isLand
          ? p.isFront
            ? 0.25 + depthFactor * 0.65
            : 0.06 + depthFactor * 0.12
          : 0.05 + depthFactor * 0.12;

        const dotSize = d.size * (0.6 + depthFactor * 0.55);

        ctx.fillStyle = d.isLand
          ? `rgba(94, 192, 152, ${alpha})`
          : `rgba(71, 109, 154, ${alpha})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, dotSize, 0, Math.PI * 2);
        ctx.fill();
      }

      // =========================================================================
      // 4. DRAW ELEVATED CONNECTION ARCS & TRAVELING PHOTONS
      // =========================================================================
      const projectedHubs = HUBS.map((h) => ({
        ...h,
        pos: project(h.lat, h.lon),
      }));

      CONNECTIONS.forEach(([iA, iB], cIdx) => {
        const hA = projectedHubs[iA];
        const hB = projectedHubs[iB];

        if (!hA || !hB) return;
        if (hA.pos.z < -globeRadius * 0.25 && hB.pos.z < -globeRadius * 0.25) {
          return;
        }

        const midLat = (hA.lat + hB.lat) / 2;
        let midLon = (hA.lon + hB.lon) / 2;
        if (Math.abs(hA.lon - hB.lon) > 180) midLon += 180;

        const midPos = project(midLat, midLon, 1.16);

        const avgZ = (hA.pos.z + hB.pos.z + midPos.z) / 3;
        const lineAlpha = Math.max(0.04, Math.min(0.42, (avgZ + globeRadius * 0.5) / (globeRadius * 1.5)));

        ctx.strokeStyle = `rgba(94, 192, 152, ${lineAlpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(hA.pos.x, hA.pos.y);
        ctx.quadraticCurveTo(midPos.x, midPos.y, hB.pos.x, hB.pos.y);
        ctx.stroke();

        // Traveling Light Pulse
        const pulse = pulses[cIdx];
        if (pulse) {
          if (!prefersReducedMotion) {
            pulse.t += pulse.speed;
            if (pulse.t > 1) pulse.t = 0;
          }

          const t = pulse.t;
          const invT = 1 - t;
          const px = invT * invT * hA.pos.x + 2 * invT * t * midPos.x + t * t * hB.pos.x;
          const py = invT * invT * hA.pos.y + 2 * invT * t * midPos.y + t * t * hB.pos.y;
          const pz = invT * invT * hA.pos.z + 2 * invT * t * midPos.z + t * t * hB.pos.z;

          if (pz > -globeRadius * 0.1) {
            const pAlpha = Math.max(0.1, Math.min(0.9, (pz + globeRadius) / (globeRadius * 1.7)));

            ctx.fillStyle = `rgba(255, 255, 255, ${pAlpha})`;
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = `rgba(94, 192, 152, ${pAlpha * 0.6})`;
            ctx.beginPath();
            ctx.arc(px, py, 4.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // Outward reaching collaboration arcs (extending slightly into negative space)
      const outwardHub = projectedHubs[0]; // London or New York
      if (outwardHub && outwardHub.pos.isFront) {
        ctx.strokeStyle = "rgba(14, 165, 233, 0.2)";
        ctx.lineWidth = 0.9;
        ctx.beginPath();
        ctx.moveTo(outwardHub.pos.x, outwardHub.pos.y);
        ctx.quadraticCurveTo(
          outwardHub.pos.x + 35,
          outwardHub.pos.y - 45,
          outwardHub.pos.x + 60,
          outwardHub.pos.y - 25
        );
        ctx.stroke();

        ctx.fillStyle = "rgba(14, 165, 233, 0.4)";
        ctx.beginPath();
        ctx.arc(outwardHub.pos.x + 60, outwardHub.pos.y - 25, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // =========================================================================
      // 5. DRAW SELECTED HUBS, PULSES & SUBTLE LABELS
      // =========================================================================
      projectedHubs.forEach((hub) => {
        if (!hub.pos.isFront) return;

        const depth = hub.pos.z / globeRadius; // 0 to 1

        // Pulsing ripple ring
        const ripple = (time * 1.6 + hub.lat * 0.1) % 2;
        const rippleRadius = 2.5 + ripple * 7;
        const rippleAlpha = Math.max(0, (1 - ripple / 2) * 0.55 * depth);

        ctx.strokeStyle = `rgba(94, 192, 152, ${rippleAlpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(hub.pos.x, hub.pos.y, rippleRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Node Glow
        ctx.fillStyle = `rgba(94, 192, 152, ${0.45 * depth})`;
        ctx.beginPath();
        ctx.arc(hub.pos.x, hub.pos.y, 6, 0, Math.PI * 2);
        ctx.fill();

        // Solid Node Core
        ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * depth})`;
        ctx.beginPath();
        ctx.arc(hub.pos.x, hub.pos.y, 2.4, 0, Math.PI * 2);
        ctx.fill();

        // Minimalist Elegant Label (only 2-3 select nodes when clearly front-facing)
        if (hub.showLabel && depth > 0.35) {
          const lAlpha = Math.min(1, (depth - 0.35) / 0.4);
          ctx.font = "600 9.5px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
          ctx.fillStyle = `rgba(255, 255, 255, ${lAlpha * 0.78})`;
          ctx.fillText(hub.name.toUpperCase(), hub.pos.x + 7, hub.pos.y + 3);
        }
      });

      // =========================================================================
      // 6. FAINT ORBITING PARTICLES CLOSE TO GLOBE
      // =========================================================================
      orbitParticles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.lon += p.speed;
          if (p.lon > 180) p.lon = -180;
          if (p.lon < -180) p.lon = 180;
        }

        const proj = project(p.lat, p.lon, p.radiusFactor);
        if (proj.z < -globeRadius * 0.1) return;

        const twinkle = 0.75 + Math.sin(time * 2 + p.phase) * 0.25;
        ctx.fillStyle = `rgba(94, 192, 152, ${p.opacity * twinkle})`;
        ctx.beginPath();
        ctx.arc(proj.x, proj.y, p.size, 0, Math.PI * 2);
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
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "440px",
        maxHeight: "620px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        userSelect: "none",
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
