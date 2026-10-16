"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface ConstellationNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  pulsePhase: number;
  pulseSpeed: number;
  color: string;
}

interface TelemetryTag {
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  alpha: number;
  baseAlpha: number;
}

export default function CinematicHeroBackground() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isLight = theme === "light";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Pointer coordinates with smooth easing
    let mouseX = -9999;
    let mouseY = -9999;
    let smoothMouseX = -9999;
    let smoothMouseY = -9999;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Initialize Network Constellation Nodes (Connected Cloud Network)
    const nodeCount = window.innerWidth < 768 ? 22 : 44;
    const nodes: ConstellationNode[] = [];

    const emeraldCol = isLight ? "16, 185, 129" : "94, 192, 152";
    const tealCol = isLight ? "20, 184, 166" : "45, 212, 191";
    const blueCol = isLight ? "14, 165, 233" : "56, 189, 248";

    for (let i = 0; i < nodeCount; i++) {
      const colors = [emeraldCol, tealCol, blueCol];
      const selectedColor = colors[Math.floor(Math.random() * colors.length)];
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: -0.06 - Math.random() * 0.16, // gentle upward drift
        radius: 1.0 + Math.random() * 1.5,
        baseAlpha: isLight ? 0.22 + Math.random() * 0.25 : 0.28 + Math.random() * 0.35,
        alpha: 0.3,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.012 + Math.random() * 0.02,
        color: selectedColor,
      });
    }

    // Subtle Live Global Telemetry Tags
    const telemetryStrings = [
      "// LAT 28.61° N · LON 77.20° E [IND]",
      "// LAT 37.77° N · LON 122.41° W [USA]",
      "// LAT 51.50° N · LON 0.12° W [GBR]",
      "// LAT 52.52° N · LON 13.40° E [DEU]",
      "// LAT 25.20° N · LON 55.27° E [UAE]",
      "// SYNC: 9 GLOBAL HUBS · 0.02ms JITTER",
      "// ARCHITECTURE: DISTRIBUTED CLOUD MESH",
    ];

    const telemetryCount = window.innerWidth < 768 ? 3 : 5;
    const telemetryList: TelemetryTag[] = [];

    for (let i = 0; i < telemetryCount; i++) {
      telemetryList.push({
        x: 80 + Math.random() * (width - 320),
        y: 120 + Math.random() * (height - 240),
        vx: (Math.random() - 0.5) * 0.12,
        vy: -0.04 - Math.random() * 0.08,
        text: telemetryStrings[i % telemetryStrings.length],
        alpha: isLight ? 0.14 : 0.2,
        baseAlpha: isLight ? 0.14 : 0.2,
      });
    }

    let clock = 0;

    const render = () => {
      animId = requestAnimationFrame(render);
      clock += 0.016;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      if (mouseX > -1000) {
        if (smoothMouseX < -1000) {
          smoothMouseX = mouseX;
          smoothMouseY = mouseY;
        } else {
          smoothMouseX += (mouseX - smoothMouseX) * 0.08;
          smoothMouseY += (mouseY - smoothMouseY) * 0.08;
        }
      }

      // 1. Draw Network Connections between nearby nodes (Proximity Mesh)
      const maxDist = 80;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const edgeAlpha = (1 - dist / maxDist) * (isLight ? 0.14 : 0.22);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${nodes[i].color}, ${edgeAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // 2. Render Constellation Nodes
      nodes.forEach((node) => {
        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;
          node.pulsePhase += node.pulseSpeed;

          // Mouse subtle gentle deflection
          if (smoothMouseX > -1000) {
            const mdx = node.x - smoothMouseX;
            const mdy = node.y - smoothMouseY;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mdist < 100 && mdist > 1) {
              const force = (1 - mdist / 100) * 0.6;
              node.x += (mdx / mdist) * force;
              node.y += (mdy / mdist) * force;
            }
          }

          // Screen wrapping
          if (node.x < 0) node.x = width;
          if (node.x > width) node.x = 0;
          if (node.y < 0) node.y = height;
          if (node.y > height) node.y = 0;
        }

        const pulse = Math.sin(node.pulsePhase) * 0.12;
        node.alpha = Math.max(0.08, Math.min(0.7, node.baseAlpha + pulse));

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node.color}, ${node.alpha})`;
        ctx.fill();
      });

      // 3. Render Subtle Floating Telemetry Coordinates
      ctx.font = '500 9px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
      ctx.letterSpacing = '0.08em';

      telemetryList.forEach((item) => {
        if (!prefersReducedMotion) {
          item.x += item.vx;
          item.y += item.vy;

          if (item.x < -150) item.x = width + 50;
          if (item.x > width + 100) item.x = -100;
          if (item.y < -30) item.y = height + 20;
          if (item.y > height + 30) item.y = -20;
        }

        ctx.fillStyle = isLight
          ? `rgba(71, 85, 105, ${item.alpha})`
          : `rgba(94, 192, 152, ${item.alpha})`;
        ctx.fillText(item.text, item.x, item.y);
      });
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [isLight]);

  return (
    <div
      className={`hero-cinematic-bg-root ${isLight ? "light-mode" : "dark-mode"}`}
      aria-hidden="true"
    >
      {/* ========================================================================= */}
      {/* 1. BASE ATMOSPHERIC GRADIENT FOUNDATION                                   */}
      {/* ========================================================================= */}
      <div className="hero-cinema-layer-base" />

      {/* ========================================================================= */}
      {/* 2. PERSPECTIVE BLUEPRINT GRID WITH ARCHITECTURAL CROSSHAIRS               */}
      {/* Modern software engineering aesthetic: subtle, sharp, non-intrusive      */}
      {/* ========================================================================= */}
      <div className="hero-cinema-perspective-grid">
        <svg
          className="hero-cinema-grid-svg"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-tech-grid-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              {/* Fine subtle grid lines */}
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke={isLight ? "rgba(15, 23, 42, 0.05)" : "rgba(94, 192, 152, 0.04)"}
                strokeWidth="1"
              />
              {/* Micro intersection crosshair '+' */}
              <path
                d="M -3 0 L 3 0 M 0 -3 L 0 3"
                stroke={isLight ? "rgba(16, 185, 129, 0.2)" : "rgba(94, 192, 152, 0.22)"}
                strokeWidth="0.9"
              />
            </pattern>

            {/* Linear fade mask so grid recedes gently toward top and edges */}
            <linearGradient id="grid-fade-mask" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#fff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>

            <mask id="hero-grid-mask">
              <rect width="100%" height="100%" fill="url(#grid-fade-mask)" />
            </mask>
          </defs>

          <rect
            width="100%"
            height="100%"
            fill="url(#hero-tech-grid-pattern)"
            mask="url(#hero-grid-mask)"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 3. CONCENTRIC HORIZON RADIAL INSTRUMENTATION BEHIND EARTH                 */}
      {/* Frames the 3D Earth within an astronomical telemetry nexus                */}
      {/* ========================================================================= */}
      <div className="hero-cinema-earth-halo">
        <svg
          className="hero-cinema-rings-svg"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="haloCenterGrad" cx="50%" cy="50%" r="50%">
              <stop
                offset="0%"
                stopColor={isLight ? "#10b981" : "#5EC098"}
                stopOpacity={isLight ? "0.18" : "0.22"}
              />
              <stop
                offset="45%"
                stopColor={isLight ? "#0ea5e9" : "#0284c7"}
                stopOpacity={isLight ? "0.08" : "0.12"}
              />
              <stop offset="70%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Central diffuse aura glow */}
          <circle cx="400" cy="400" r="320" fill="url(#haloCenterGrad)" />

          {/* Innermost telemetry circle */}
          <circle
            cx="400"
            cy="400"
            r="190"
            stroke={isLight ? "rgba(16, 185, 129, 0.22)" : "rgba(94, 192, 152, 0.24)"}
            strokeWidth="1"
            strokeDasharray="4 6"
            className="hero-ring-rotate-slow"
          />

          {/* Middle coordinate ring */}
          <circle
            cx="400"
            cy="400"
            r="235"
            stroke={isLight ? "rgba(14, 165, 233, 0.16)" : "rgba(45, 212, 191, 0.18)"}
            strokeWidth="0.8"
            strokeDasharray="18 10 2 10"
            className="hero-ring-rotate-rev"
          />

          {/* Outer astronomical compass ring */}
          <circle
            cx="400"
            cy="400"
            r="290"
            stroke={isLight ? "rgba(15, 23, 42, 0.08)" : "rgba(94, 192, 152, 0.1)"}
            strokeWidth="0.75"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 4. DUAL FLOWING AURORA SPLINE CURRENTS (Organically undulating ribbons)   */}
      {/* ========================================================================= */}
      <svg
        className="hero-cinema-aurora-ribbons"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="ribbonGradEmerald" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#5EC098" stopOpacity="0" />
            <stop
              offset="35%"
              stopColor={isLight ? "#10b981" : "#5EC098"}
              stopOpacity={isLight ? "0.22" : "0.3"}
            />
            <stop
              offset="70%"
              stopColor={isLight ? "#0ea5e9" : "#2dd4bf"}
              stopOpacity={isLight ? "0.16" : "0.25"}
            />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="ribbonGradAzure" x1="100%" y1="50%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0" />
            <stop
              offset="40%"
              stopColor={isLight ? "#0284c7" : "#38bdf8"}
              stopOpacity={isLight ? "0.18" : "0.24"}
            />
            <stop
              offset="75%"
              stopColor={isLight ? "#10b981" : "#5EC098"}
              stopOpacity={isLight ? "0.12" : "0.18"}
            />
            <stop offset="100%" stopColor="#5EC098" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Emerald flowing wave across the horizon toward Earth */}
        <path
          d="M -100,560 C 260,420 540,680 880,500 C 1140,360 1340,460 1560,400"
          stroke="url(#ribbonGradEmerald)"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="hero-aurora-wave hero-aurora-wave-1"
        />

        {/* Counter azure ribbon sweeping under Earth */}
        <path
          d="M -60,620 C 320,700 680,480 1020,580 C 1240,640 1420,540 1580,480"
          stroke="url(#ribbonGradAzure)"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="hero-aurora-wave hero-aurora-wave-2"
        />
      </svg>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE CONSTELLATION & TELEMETRY CANVAS                           */}
      {/* Proximity lines, live network nodes, and micro-telemetry coordinates      */}
      {/* ========================================================================= */}
      <canvas ref={canvasRef} className="hero-cinema-particle-canvas" />

      {/* Bottom section gradient blend */}
      <div className="hero-cinema-bottom-vignette" />
    </div>
  );
}
