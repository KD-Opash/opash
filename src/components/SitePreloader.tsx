"use client";

import React, { useState, useEffect } from "react";

export default function SitePreloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Ultra-lightweight, crisp loader: ~900ms sweep time, 0.1% CPU/GPU
    const duration = 900;
    const startTime = performance.now();

    let animationFrameId: number;

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);

      // Smooth cubic acceleration
      const eased = 1 - Math.pow(1 - t, 2.5);
      setProgress(Math.min(100, Math.round(eased * 100)));

      if (t < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        // Instant completion, rapid fade out
        const holdTimer = setTimeout(() => {
          setIsExiting(true);
          const removeTimer = setTimeout(() => {
            setIsDone(true);
          }, 280);
          return () => clearTimeout(removeTimer);
        }, 80);

        return () => clearTimeout(holdTimer);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      id="site-preloader-root"
      aria-label="Site Loading"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        backgroundColor: "#030407",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? "scale(1.015)" : "scale(1)",
        pointerEvents: isExiting ? "none" : "all",
        transition: "opacity 0.28s ease, transform 0.28s ease",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.25rem",
          transform: "translateY(-4px)",
        }}
      >
        {/* Brand Logo & Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Only Logo.png"
            alt="Opash Logo"
            width={34}
            height={34}
            style={{
              width: "34px",
              height: "34px",
              objectFit: "contain",
              display: "block",
            }}
          />
          <span
            style={{
              fontSize: "1.05rem",
              fontWeight: 800,
              letterSpacing: "0.22em",
              color: "#ffffff",
              fontFamily: "var(--font-display), monospace",
            }}
          >
            OPASH
          </span>
        </div>

        {/* Minimalist Loading Bar Track */}
        <div
          style={{
            width: "clamp(160px, 22vw, 200px)",
            display: "flex",
            flexDirection: "column",
            gap: "0.55rem",
          }}
        >
          {/* Progress Track Line */}
          <div
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              borderRadius: "2px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "linear-gradient(90deg, #00bbab 0%, #00ffd1 60%, #ffffff 100%)",
                boxShadow: "0 0 10px rgba(0, 255, 209, 0.75)",
                borderRadius: "2px",
                transition: "width 0.05s linear",
              }}
            />
          </div>

          {/* Text Labels: 'Initializing' & Percentage Counter */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "var(--font-geist-mono), ui-monospace, 'SF Mono', Menlo, monospace",
              fontSize: "0.74rem",
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.55)",
              letterSpacing: "0.05em",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            <span>INITIALIZING</span>
            <span style={{ color: "#00ffd1", fontWeight: 600 }}>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
