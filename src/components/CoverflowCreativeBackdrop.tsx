"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

interface CoverflowCreativeBackdropProps {
  accent?: string;
  accentRgb?: string;
}

/**
 * CoverflowCreativeBackdrop:
 * Lightweight, zero-GPU ambient background without expensive heavy blur filters.
 */
export function CoverflowCreativeBackdrop({
  accent = "#0ea5e9",
  accentRgb = "14, 165, 233",
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
        background: isLight
          ? "radial-gradient(ellipse at 50% 30%, rgba(14, 165, 233, 0.04) 0%, transparent 70%)"
          : "radial-gradient(ellipse at 50% 30%, rgba(14, 165, 233, 0.08) 0%, transparent 70%)",
      }}
    />
  );
}

export default CoverflowCreativeBackdrop;
