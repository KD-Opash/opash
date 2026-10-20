"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

interface CoverflowCreativeBackdropProps {
  accent: string;
  accentRgb: string;
}

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
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Primary Center Accent Aura */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "460px",
          background: isLight
            ? `radial-gradient(ellipse at center, rgba(${accentRgb}, 0.16) 0%, rgba(0, 168, 143, 0.06) 45%, transparent 70%)`
            : `radial-gradient(ellipse at center, rgba(${accentRgb}, 0.28) 0%, rgba(14, 165, 233, 0.1) 45%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Secondary Dynamic Aurora Glows */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "15%",
          width: "45%",
          height: "360px",
          background: isLight
            ? "radial-gradient(circle, rgba(0, 168, 143, 0.1) 0%, transparent 65%)"
            : "radial-gradient(circle, rgba(0, 187, 171, 0.16) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "15%",
          width: "45%",
          height: "360px",
          background: isLight
            ? "radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 65%)"
            : "radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
