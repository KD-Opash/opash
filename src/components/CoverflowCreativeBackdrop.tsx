"use client";

import React from "react";
import FluxLines from "./FluxLines";
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
      {/* Soft Ambient Radial Luminous Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "85%",
          height: "500px",
          borderRadius: "50%",
          background: isLight
            ? `radial-gradient(ellipse at center, rgba(${accentRgb}, 0.12) 0%, rgba(0, 168, 143, 0.05) 45%, transparent 75%)`
            : `radial-gradient(ellipse at center, rgba(${accentRgb}, 0.22) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 75%)`,
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* FluxLines Background Stream */}
      <div
        style={{
          width: "100%",
          height: "600px",
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
          overflow: "hidden",
        }}
      >
        <FluxLines
          colors={
            isLight
              ? [accent, "#00A88F", "#38bdf8"]
              : [accent, "#0284c7", "#0369a1"]
          }
          glow={isLight ? 0.4 : 0.8}
          rimWidth={0.2}
          lineWidth={1}
          flowDirection="down"
          mouseInteraction={false}
          clickSwirl={false}
          transparent
          lightMode={false}
          opacity={isLight ? 0.3 : 0.75}
          dpr={0.75}
        />
      </div>
    </div>
  );
}
