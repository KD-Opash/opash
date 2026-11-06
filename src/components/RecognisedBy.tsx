"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { useTheme } from "./ThemeProvider";

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
          <div style={{ display: "inline-flex", alignItems: "center", flexShrink: 0, userSelect: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/authorities/goodfirms.png"
              alt="GoodFirms"
              height={36}
              draggable={false}
              style={{
                height: "36px",
                width: "auto",
                objectFit: "contain",
                display: "block",
                pointerEvents: "none",
                filter: isLight ? "none" : "brightness(1.15) contrast(1.05)",
              }}
            />
          </div>
        );

      case "topdevelopers":
        return (
          <div style={{ display: "inline-flex", alignItems: "center", flexShrink: 0, userSelect: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isLight ? "/images/authorities/topdevelopers.png" : "/images/authorities/topdevelopers_dark.png"}
              alt="TopDevelopers"
              height={36}
              draggable={false}
              style={{
                height: "36px",
                width: "auto",
                objectFit: "contain",
                display: "block",
                pointerEvents: "none",
              }}
            />
          </div>
        );

      case "techreviewer":
        return (
          <div style={{ display: "inline-flex", alignItems: "center", flexShrink: 0, userSelect: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isLight ? "/images/authorities/techreviewer.png" : "/images/authorities/techreviewer_dark.png"}
              alt="techreviewer"
              height={30}
              draggable={false}
              style={{
                height: "30px",
                width: "auto",
                objectFit: "contain",
                display: "block",
                pointerEvents: "none",
              }}
            />
          </div>
        );

      case "clutch":
        return (
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", flexShrink: 0, userSelect: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/authorities/clutch.png"
              alt="Clutch"
              height={38}
              draggable={false}
              style={{
                height: "38px",
                width: "auto",
                objectFit: "contain",
                borderRadius: "9px",
                display: "block",
                pointerEvents: "none",
                boxShadow: isLight ? "0 2px 6px rgba(0, 0, 0, 0.08)" : "0 2px 8px rgba(0, 0, 0, 0.4)",
              }}
            />
            <span
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: isLight ? "#111827" : "#FFFFFF",
                letterSpacing: "-0.025em",
                whiteSpace: "nowrap",
                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              Clutch<span style={{ color: "#EF4444", fontWeight: 900 }}>.</span>
            </span>
          </div>
        );

      case "ambitionbox":
        return (
          <div style={{ display: "inline-flex", alignItems: "center", flexShrink: 0, userSelect: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isLight ? "/images/authorities/ambitionbox.png" : "/images/authorities/ambitionbox_dark.png"}
              alt="AmbitionBox"
              height={36}
              draggable={false}
              style={{
                height: "36px",
                width: "auto",
                objectFit: "contain",
                display: "block",
                pointerEvents: "none",
              }}
            />
          </div>
        );

      case "googlerating":
        return (
          <div style={{ display: "inline-flex", alignItems: "center", flexShrink: 0, userSelect: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isLight ? "/images/authorities/googlerating.png" : "/images/authorities/googlerating_dark.png"}
              alt="Google Rating"
              height={38}
              draggable={false}
              style={{
                height: "38px",
                width: "auto",
                objectFit: "contain",
                display: "block",
                pointerEvents: "none",
              }}
            />
          </div>
        );

      case "techimply":
        return (
          <div style={{ display: "inline-flex", alignItems: "center", flexShrink: 0, userSelect: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/authorities/techimply.png"
              alt="TECHIMPLY"
              height={64}
              draggable={false}
              style={{
                height: "64px",
                width: "auto",
                maxWidth: "none",
                objectFit: "contain",
                display: "block",
                pointerEvents: "none",
              }}
            />
          </div>
        );

      case "designrush":
        return (
          <div style={{ display: "inline-flex", alignItems: "center", flexShrink: 0, userSelect: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/authorities/designrush.png"
              alt="DesignRush"
              height={64}
              loading="eager"
              draggable={false}
              style={{
                height: "64px",
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
          <div style={{ display: "inline-flex", alignItems: "center", flexShrink: 0, userSelect: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isLight ? "/images/authorities/trustpilot.png" : "/images/authorities/trustpilot_dark.png"}
              alt="Trustpilot"
              height={36}
              draggable={false}
              style={{
                height: "36px",
                width: "auto",
                objectFit: "contain",
                display: "block",
                pointerEvents: "none",
              }}
            />
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
        padding: "clamp(2.5rem, 5vw, 3.5rem) 0",
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
