"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export interface CircularTextProps {
  text?: string;
  spinDuration?: number; // Duration for full 360deg rotation in seconds (default: 42)
  onHover?: "speedUp" | "slowDown" | "pause" | "none";
  className?: string;
  size?: number; // Visual diameter size (default: 1180)
  style?: React.CSSProperties;
}

export default function CircularText({
  text = "✦ INDIA ✦ UNITED STATES ✦ UNITED KINGDOM ✦ CANADA ✦ GERMANY ✦ UAE ✦ AUSTRALIA ✦ BRAZIL ✦ GLOBAL NETWORK ",
  spinDuration = 38,
  onHover = "speedUp",
  className = "",
  size = 820,
  style = {},
}: CircularTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Determine active duration based on hover state
  const currentDuration =
    isHovered && onHover === "speedUp"
      ? spinDuration / 2.8
      : isHovered && onHover === "slowDown"
      ? spinDuration * 2.2
      : spinDuration;

  return (
    <div
      className={`circular-text-stage ${className}`.trim()}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: `clamp(460px, 58vw, ${size}px)`,
        height: `clamp(460px, 58vw, ${size}px)`,
        pointerEvents: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
        userSelect: "none",
        ...style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Concentric Decorative Orbital Glow Rings */}
      <svg
        viewBox="0 0 1000 1000"
        className="circular-text-orbit-rings"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <defs>
          {/* Dark Mode Radial Aura */}
          <radialGradient id="ringAuraGlowDark" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="rgba(94, 192, 152, 0.12)" />
            <stop offset="90%" stopColor="rgba(14, 60, 145, 0.08)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Light Mode Radial Aura */}
          <radialGradient id="ringAuraGlowLight" cx="50%" cy="50%" r="50%">
            <stop offset="55%" stopColor="rgba(94, 192, 152, 0.10)" />
            <stop offset="85%" stopColor="rgba(14, 80, 215, 0.06)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Ambient Radial Fill */}
        <circle cx="500" cy="500" r="475" className="circular-radial-aura" />

        {/* Outer Orbit Dashed Ring */}
        <circle
          cx="500"
          cy="500"
          r="475"
          className="circular-orbit-ring-outer"
          strokeWidth="1.4"
          strokeDasharray="8 10"
          fill="none"
        />

        {/* Inner Orbit Dashed Ring */}
        <circle
          cx="500"
          cy="500"
          r="425"
          className="circular-orbit-ring-inner"
          strokeWidth="1.1"
          strokeDasharray="4 6"
          fill="none"
        />

        {/* Secondary Inner Fine Guideline Ring */}
        <circle
          cx="500"
          cy="500"
          r="400"
          className="circular-orbit-ring-fine"
          strokeWidth="0.8"
          fill="none"
        />
      </svg>

      {/* 2. Rotating Typography Circular Path Ring */}
      <motion.div
        className="circular-text-rotator"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: currentDuration,
        }}
      >
        <svg
          viewBox="0 0 1000 1000"
          style={{
            width: "100%",
            height: "100%",
            overflow: "visible",
          }}
        >
          <defs>
            {/* Circular Path with Radius = 450 (Circumference ~ 2827) */}
            <path
              id="circularTextPath"
              d="M 500, 500 m -450, 0 a 450,450 0 1,1 900,0 a 450,450 0 1,1 -900,0"
              fill="none"
            />

            {/* Dark Mode Linear Gradient for Text Color */}
            <linearGradient id="circularTextGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5EC098" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.75" />
              <stop offset="70%" stopColor="#ffffff" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#5EC098" stopOpacity="0.85" />
            </linearGradient>

            {/* Light Mode Linear Gradient for Text Color */}
            <linearGradient id="circularTextGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E9465" stopOpacity="0.78" />
              <stop offset="35%" stopColor="#0e50d7" stopOpacity="0.72" />
              <stop offset="70%" stopColor="#0f172a" stopOpacity="0.62" />
              <stop offset="100%" stopColor="#1E9465" stopOpacity="0.78" />
            </linearGradient>
          </defs>

          <text className="circular-text-content">
            <textPath
              href="#circularTextPath"
              startOffset="0%"
              textLength="2827"
              lengthAdjust="spacing"
            >
              {text}
            </textPath>
          </text>
        </svg>
      </motion.div>
    </div>
  );
}
