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
              ? ["#0f172a", "#1e293b", "#0369a1"]
              : [accent, "#0284c7", "#0369a1"]
          }
          glow={1.2}
          rimWidth={0.2}
          lineWidth={1}
          flowDirection="down"
          mouseInteraction
          clickSwirl
          transparent
          lightMode={isLight}
        />
      </div>
    </div>
  );
}
