"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

interface CoverflowCreativeBackdropProps {
  accent: string;
  accentRgb: string;
}

/**
 * CoverflowCreativeBackdrop:
 * Delivers dynamic, colorful flowing cyber-stream light lines and rich multi-color
 * ambient auroras inspired by the original FluxLines, but 100% pure CSS & SVG (zero 3D, zero GPU).
 * Uses continuous alpha mask-image for mathematically seamless melting without any horizontal cut-lines.
 */
export function CoverflowCreativeBackdrop({
  accent,
  accentRgb,
}: CoverflowCreativeBackdropProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div
      className="coverflow-creative-backdrop"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        background: "transparent",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 160px, black calc(100% - 160px), transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 160px, black calc(100% - 160px), transparent 100%)",
      }}
    >
      {/* 1. Primary Dynamic Center Accent Aura (Responds to active service) */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: "1100px",
          height: "560px",
          background: isLight
            ? `radial-gradient(ellipse at center, rgba(${accentRgb}, 0.22) 0%, rgba(${accentRgb}, 0.08) 45%, transparent 72%)`
            : `radial-gradient(ellipse at center, rgba(${accentRgb}, 0.38) 0%, rgba(${accentRgb}, 0.14) 45%, transparent 74%)`,
          filter: "blur(90px)",
          pointerEvents: "none",
          transition: "background 0.8s ease",
        }}
      />

      {/* 2. Vibrant Multi-Color Flanking Auroras (Rich chromatic depth: Cyan, Sky Blue, Royal Indigo, Emerald) */}
      {/* Top Left: Deep Royal Indigo & Violet Glow */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "8%",
          width: "650px",
          height: "450px",
          borderRadius: "50%",
          background: isLight
            ? "radial-gradient(circle, rgba(99, 102, 241, 0.16) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 72%)"
            : "radial-gradient(circle, rgba(99, 102, 241, 0.24) 0%, rgba(139, 92, 246, 0.12) 50%, transparent 72%)",
          filter: "blur(85px)",
          pointerEvents: "none",
        }}
      />

      {/* Top Right: Electric Cyan / Turquoise Beacon */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          right: "6%",
          width: "680px",
          height: "460px",
          borderRadius: "50%",
          background: isLight
            ? "radial-gradient(circle, rgba(0, 187, 171, 0.18) 0%, rgba(14, 165, 233, 0.06) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(0, 255, 209, 0.24) 0%, rgba(14, 165, 233, 0.14) 50%, transparent 72%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom Center: Luminous Sky Blue & Mint Flare */}
      <div
        style={{
          position: "absolute",
          bottom: "4%",
          left: "35%",
          width: "720px",
          height: "420px",
          borderRadius: "50%",
          background: isLight
            ? "radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, rgba(56, 189, 248, 0.05) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(56, 189, 248, 0.12) 50%, transparent 72%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* 3. Colorful Vector Cyber-Stream Flow Lines (Zero-GPU replacement for FluxLines, softened with minor blur) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: isLight ? 0.4 : 0.55,
          filter: "blur(5px)",
          WebkitFilter: "blur(5px)",
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 1440 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%", display: "block" }}
        >
          <defs>
            <linearGradient id="streamGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00bbab" stopOpacity="0" />
              <stop offset="20%" stopColor="#00bbab" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.95" />
              <stop offset="80%" stopColor="#6366f1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="streamGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="30%" stopColor="#0284c7" stopOpacity="0.85" />
              <stop offset="65%" stopColor="#10b981" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00bbab" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="streamGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
              <stop offset="35%" stopColor="#a855f7" stopOpacity="0.75" />
              <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#00ffd1" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="streamGrad4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="25%" stopColor="#00bbab" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>

            <filter id="streamGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Primary Flowing Ribbon Streams */}
          <path
            d="M -100 280 C 300 220, 600 380, 1000 290 C 1200 240, 1400 320, 1540 270"
            stroke="url(#streamGrad1)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#streamGlow)"
          />
          <path
            d="M -100 320 C 280 390, 680 230, 1050 360 C 1250 420, 1420 310, 1540 350"
            stroke="url(#streamGrad2)"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#streamGlow)"
          />
          <path
            d="M -100 250 C 350 180, 750 320, 1100 230 C 1280 180, 1450 260, 1540 220"
            stroke="url(#streamGrad3)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeDasharray="6 4"
          />
          <path
            d="M -100 380 C 250 450, 650 330, 980 430 C 1180 480, 1380 380, 1540 420"
            stroke="url(#streamGrad4)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Harmonic Secondary Cyber Beams */}
          <path
            d="M -100 350 C 320 280, 620 420, 1020 330 C 1220 280, 1420 360, 1540 310"
            stroke={accent}
            strokeWidth="1.2"
            strokeOpacity="0.4"
            strokeDasharray="8 6"
          />
          <path
            d="M -100 210 C 380 260, 720 180, 1080 260 C 1260 300, 1440 210, 1540 250"
            stroke="#38bdf8"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
        </svg>
      </div>

      {/* 4. Fine Perspective Tech Matrix Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: isLight ? 0.32 : 0.22,
          backgroundImage: isLight
            ? "radial-gradient(rgba(100, 116, 139, 0.45) 1px, transparent 1px)"
            : "radial-gradient(rgba(148, 163, 184, 0.5) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, black 30%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, black 30%, transparent 85%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default CoverflowCreativeBackdrop;
