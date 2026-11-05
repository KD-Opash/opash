"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { useTheme } from "./ThemeProvider";
import { TechimplyBadge } from "./TechimplyBadge";

interface AuthorityItem {
  id: string;
  name: string;
}

export function RecognisedBy() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [isDragging, setIsDragging] = useState(false);

  // The 9 Verified Recognition Authorities (Matching Client Reference Image in Vector Sharpness)
  const AUTHORITIES: AuthorityItem[] = [
    { id: "goodfirms", name: "GoodFirms" },
    { id: "topdevelopers", name: "TopDevelopers" },
    { id: "techreviewer", name: "techreviewer" },
    { id: "clutch", name: "Clutch" },
    { id: "ambitionbox", name: "AmbitionBox" },
    { id: "googlerating", name: "Google Rating" },
    { id: "techimply", name: "TECHIMPLY" },
    { id: "designrush", name: "DesignRush" },
    { id: "trustpilot", name: "Trustpilot" },
  ];

  // Animation & Drag state refs (direct DOM manipulation for 60/120fps buttery performance)
  const trackRef = useRef<HTMLDivElement>(null);
  const singleCycleRef = useRef<HTMLDivElement>(null);
  const cycleWidthRef = useRef<number>(0);
  const offsetRef = useRef<number>(0);
  const velocityRef = useRef<number>(-0.75); // base speed pixels/frame
  const isDraggingRef = useRef<boolean>(false);
  const isHoveredRef = useRef<boolean>(false);
  const lastXRef = useRef<number>(0);

  // Measure single cycle width dynamically
  const updateCycleWidth = useCallback(() => {
    if (singleCycleRef.current) {
      cycleWidthRef.current = singleCycleRef.current.offsetWidth;
    }
  }, []);

  useEffect(() => {
    updateCycleWidth();
    // Re-measure on window resize and font/image loading
    window.addEventListener("resize", updateCycleWidth);
    const timer = setTimeout(updateCycleWidth, 500);
    return () => {
      window.removeEventListener("resize", updateCycleWidth);
      clearTimeout(timer);
    };
  }, [updateCycleWidth]);

  // High-performance continuous animation loop with momentum inertia
  useEffect(() => {
    let animId: number;
    const baseSpeed = -0.75; // auto-scroll speed to the left

    const loop = () => {
      const cycleWidth = cycleWidthRef.current;

      if (trackRef.current && cycleWidth > 0) {
        if (!isDraggingRef.current) {
          // When hovered, glide at very gentle pace (0.25x), otherwise normal baseSpeed
          const targetSpeed = isHoveredRef.current ? -0.2 : baseSpeed;
          // Fluid inertia decay towards target speed
          velocityRef.current = velocityRef.current * 0.94 + targetSpeed * 0.06;
          offsetRef.current += velocityRef.current;
        }

        // Seamless infinite modulo wrapping in both directions (left and right dragging)
        if (offsetRef.current <= -cycleWidth) {
          offsetRef.current += cycleWidth;
        } else if (offsetRef.current > 0) {
          offsetRef.current -= cycleWidth;
        }

        trackRef.current.style.transform = `translate3d(${Math.round(offsetRef.current)}px, 0, 0)`;
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Pointer / Mouse / Touch Drag handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    lastXRef.current = e.clientX;
    velocityRef.current = 0;
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const currentX = e.clientX;
    const delta = currentX - lastXRef.current;
    lastXRef.current = currentX;

    offsetRef.current += delta;
    // Track flick velocity for fluid release inertia
    velocityRef.current = delta;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Trackpad / Mouse horizontal wheel support
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const delta = e.deltaX !== 0 ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
    if (Math.abs(delta) > 1) {
      offsetRef.current -= delta * 0.85;
      velocityRef.current = -delta * 0.25;
    }
  };

  const renderAuthorityContent = (id: string) => {
    switch (id) {
      case "goodfirms":
        return (
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.85rem", userSelect: "none" }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "10px",
                background: "#1E60E1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 2px 10px rgba(30, 96, 225, 0.4)",
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16v4H9v3h10v4H9v5H4V4z" fill="#FFFFFF" />
                <path d="M14 15h5v5h-5v-5z" fill="#FFFFFF" />
              </svg>
            </div>
            <span
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: isLight ? "#1E60E1" : "#3B82F6",
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              Good<span style={{ fontWeight: 500 }}>Firms</span>
            </span>
          </div>
        );

      case "topdevelopers":
        return (
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.85rem", userSelect: "none" }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "10px",
                background: "#0D2E5C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontWeight: 900,
                fontSize: "1.2rem",
                flexShrink: 0,
                fontFamily: "system-ui, -apple-system, sans-serif",
                boxShadow: "0 2px 10px rgba(13, 46, 92, 0.4)",
              }}
            >
              TD
            </div>
            <span
              style={{
                fontSize: "1.65rem",
                fontWeight: 800,
                color: isLight ? "#0D2E5C" : "#FFFFFF",
                letterSpacing: "-0.015em",
                whiteSpace: "nowrap",
                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              Top<span style={{ fontWeight: 500 }}>Developers</span>
            </span>
          </div>
        );

      case "techreviewer":
        return (
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem", userSelect: "none" }}>
            <span
              style={{
                color: "#EF4444",
                fontWeight: 900,
                fontSize: "2.1rem",
                lineHeight: 1,
                fontFamily: "Georgia, serif",
              }}
            >
              ’T
            </span>
            <span
              style={{
                fontSize: "1.65rem",
                fontWeight: 700,
                color: isLight ? "#111827" : "#FFFFFF",
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              techreviewer
            </span>
          </div>
        );

      case "clutch":
        return (
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.85rem", userSelect: "none" }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "10px",
                background: "#122A2F",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontWeight: 900,
                fontSize: "1.45rem",
                flexShrink: 0,
                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                boxShadow: "0 2px 10px rgba(18, 42, 47, 0.35)",
              }}
            >
              C
            </div>
            <span
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: isLight ? "#122A2F" : "#FFFFFF",
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              Clutch<span style={{ color: "#EF4444" }}>.</span>
            </span>
          </div>
        );

      case "ambitionbox":
        return (
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.85rem", userSelect: "none" }}>
            <svg width="40" height="44" viewBox="0 0 38 42" fill="none" style={{ flexShrink: 0 }}>
              <path d="M19 2L35 11.2L19 20.5L3 11.2L19 2Z" fill="#60A5FA" />
              <path d="M3 11.2L19 20.5V39L3 29.8V11.2Z" fill="#2563EB" />
              <path d="M35 11.2L19 20.5V39L35 29.8V11.2Z" fill="#1D4ED8" />
            </svg>
            <span
              style={{
                fontSize: "1.7rem",
                fontWeight: 800,
                color: isLight ? "#0F172A" : "#FFFFFF",
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              AmbitionBox
            </span>
          </div>
        );

      case "googlerating":
        return (
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.85rem", userSelect: "none" }}>
            <svg width="38" height="38" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: isLight ? "#475569" : "#E2E8F0",
                  lineHeight: 1.2,
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                Google Rating
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginTop: "2px" }}>
                <span
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: isLight ? "#0F172A" : "#FFFFFF",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  4.6
                </span>
                <span style={{ color: "#F59E0B", fontSize: "1rem", letterSpacing: "1px" }}>★★★★★</span>
              </div>
            </div>
          </div>
        );

      case "techimply":
        return (
          <div style={{ display: "inline-flex", alignItems: "center", flexShrink: 0, userSelect: "none" }}>
            <TechimplyBadge isLight={isLight} height={76} />
          </div>
        );

      case "designrush":
        return (
          <div style={{ display: "inline-flex", alignItems: "center", flexShrink: 0, userSelect: "none" }}>
            <img
              src="/images/authorities/designrush.png"
              alt="DesignRush"
              height={74}
              loading="eager"
              draggable={false}
              style={{
                height: "74px",
                width: "auto",
                maxWidth: "none",
                objectFit: "contain",
                display: "block",
                pointerEvents: "none",
                filter: isLight ? "none" : "drop-shadow(0 4px 14px rgba(0, 0, 0, 0.4))",
              }}
            />
          </div>
        );

      case "trustpilot":
        return (
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.85rem", userSelect: "none" }}>
            <svg width="40" height="40" viewBox="0 0 36 36" fill="none" style={{ flexShrink: 0 }}>
              <path d="M18 2L22.9 12.1L34 13.7L26 21.5L27.9 32.5L18 27.3L8.1 32.5L10 21.5L2 13.7L13.1 12.1L18 2Z" fill="#00B67A" />
              <path d="M18 27.3L27.9 32.5L26 21.5L18 27.3Z" fill="#005128" />
            </svg>
            <span
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: isLight ? "#0F172A" : "#FFFFFF",
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              Trustpilot
            </span>
          </div>
        );

      default:
        return null;
    }
  };

  const renderCycle = (cycleIdx: number, ref?: React.RefObject<HTMLDivElement | null>) => (
    <div
      key={`cycle-${cycleIdx}`}
      ref={ref}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4.25rem",
        paddingRight: "4.25rem",
        flexShrink: 0,
      }}
    >
      {AUTHORITIES.map((item) => (
        <div
          key={`authority-${item.id}-${cycleIdx}`}
          className="logo-item"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            padding: 0,
            background: "transparent",
            boxShadow: "none",
            cursor: isDragging ? "grabbing" : "grab",
            transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease",
          }}
        >
          {renderAuthorityContent(item.id)}
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="recognised-by"
      className="recognised-ticker-section"
      style={{
        padding: "3.5rem 0 3.75rem 0",
        position: "relative",
        overflow: "hidden",
        background: isLight ? "#f8fafc" : "transparent",
        borderTop: isLight ? "1px solid #e2e8f0" : "none",
        borderBottom: isLight ? "1px solid #e2e8f0" : "none",
        contain: "paint",
        userSelect: "none",
      }}
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
    >
      {/* Title Header matching reference image: 'We Are Recognised By' */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem", padding: "0 1.25rem" }}>
        <h3
          className="heading-section"
          style={{
            margin: 0,
            color: isLight ? "#0f172a" : "#f8fafc",
          }}
        >
          <span>We Are </span>
          <span className="opash-hero-gradient-text">
            Recognised By
          </span>
        </h3>
      </div>

      {/* Edge Feather Mask Gradients */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "4rem",
          left: 0,
          bottom: 0,
          width: "80px",
          background: isLight
            ? "linear-gradient(90deg, #f8fafc 0%, transparent 100%)"
            : "linear-gradient(90deg, #020713 0%, transparent 100%)",
          zIndex: 4,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "4rem",
          right: 0,
          bottom: 0,
          width: "80px",
          background: isLight
            ? "linear-gradient(270deg, #f8fafc 0%, transparent 100%)"
            : "linear-gradient(270deg, #020713 0%, transparent 100%)",
          zIndex: 4,
          pointerEvents: "none",
        }}
      />

      {/* Interactive Drag & Continuous Marquee Track */}
      <div
        className="marquee-interactive-viewport"
        style={{
          overflow: "hidden",
          width: "100%",
          cursor: isDragging ? "grabbing" : "grab",
          touchAction: "pan-y",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
      >
        <div
          ref={trackRef}
          className="marquee-track"
          style={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            willChange: "transform",
            userSelect: "none",
          }}
        >
          {/* Cycle 0 (Measured) */}
          {renderCycle(0, singleCycleRef)}
          {/* Cycle 1 */}
          {renderCycle(1)}
          {/* Cycle 2 */}
          {renderCycle(2)}
          {/* Cycle 3 */}
          {renderCycle(3)}
        </div>
      </div>

      <style jsx>{`
        .marquee-interactive-viewport {
          user-select: none;
          -webkit-user-select: none;
        }

        .logo-item {
          opacity: 1;
          filter: none !important;
          -webkit-filter: none !important;
        }

        .logo-item:hover {
          opacity: 1;
          transform: scale(1.08) translateY(-2px);
        }

        @media (max-width: 768px) {
          :global(.marquee-track > div) {
            gap: 3rem !important;
            padding-right: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default RecognisedBy;
