"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface WhyChooseItem {
  id: string;
  title: string;
  accent: string;
  accentRgb: string;
  icon: React.ReactNode;
}

export function WhyChooseUsCards() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth scroll handler for manual arrow taps
  const handleScroll = (direction: "left" | "right") => {
    const el = gridRef.current;
    if (!el) return;
    const firstChild = el.firstElementChild as HTMLElement;
    const cardStep = firstChild ? firstChild.offsetWidth + 18 : 280;
    el.scrollBy({
      left: direction === "left" ? -cardStep : cardStep,
      behavior: "smooth",
    });
  };

  // Continuous auto-scroll on mobile/tablet screens
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const el = gridRef.current;
      if (!el) return;
      // If all cards fit without overflow, don't auto-scroll
      if (el.scrollWidth <= el.clientWidth + 10) return;

      const cardWidth = 280;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 15) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const CARDS: WhyChooseItem[] = [
    // 1. Trusted Upwork Agency (3D Metallic Plaque & Minted Gold Stars)
    {
      id: "upwork",
      title: "Trusted Upwork Agency",
      accent: "#16a34a",
      accentRgb: "22, 163, 74",
      icon: (
        <div
          className="upwork-custom-card"
          style={{
            position: "relative",
            margin: "0 auto",
            padding: "12px 18px 12px 18px",
            borderRadius: "16px",
            minWidth: "140px",
            background: isLight
              ? "linear-gradient(145deg, #ffffff 0%, #f1f5f9 50%, #e2e8f0 100%)"
              : "linear-gradient(145deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 60%, rgba(9, 14, 23, 0.98) 100%)",
            border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: isLight
              ? "inset 0 1px 1px #ffffff, 0 8px 16px -4px rgba(15, 23, 42, 0.12), 0 2px 4px rgba(0,0,0,0.06)"
              : "inset 0 1px 1px rgba(255, 255, 255, 0.28), inset 0 -1px 1px rgba(0,0,0,0.6), 0 12px 24px -6px rgba(0, 0, 0, 0.7)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "7px",
          }}
        >
          {/* 1. Rating at TOP: 5x 3D Minted Metallic Gold Stars */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              filter: "drop-shadow(0 2px 6px rgba(234, 179, 8, 0.5))",
            }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient id={`starLightFacet_${i}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="100%" stopColor="#eab308" />
                  </linearGradient>
                  <linearGradient id={`starDarkFacet_${i}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ca8a04" />
                    <stop offset="100%" stopColor="#854d0e" />
                  </linearGradient>
                </defs>
                {/* Left Facets (Light Gold) */}
                <polygon points="12,2 12,17.27 6.18,20.77 7.77,14.14 2.7,9.45 9.47,8.63" fill={`url(#starLightFacet_${i})`} />
                {/* Right Facets (Shadow Bronze Gold) */}
                <polygon points="12,2 14.53,8.63 21.3,9.45 16.23,14.14 17.82,20.77 12,17.27" fill={`url(#starDarkFacet_${i})`} />
                {/* Central Ridge Highlight */}
                <line x1="12" y1="2" x2="12" y2="17.27" stroke="rgba(255,255,255,0.85)" strokeWidth="0.6" />
              </svg>
            ))}
          </div>

          {/* 2. Middle: High-Contrast Visible Upwork Wordmark */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1px 0" }}>
            <span
              style={{
                fontSize: "1.28rem",
                fontWeight: 900,
                fontFamily: "var(--font-plus-jakarta-sans), system-ui, -apple-system, sans-serif",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                color: isLight ? "#15803d" : "#22c55e",
                textShadow: isLight
                  ? "none"
                  : "0 0 14px rgba(34, 197, 94, 0.5), 0 2px 4px rgba(0,0,0,0.8)",
                display: "inline-block",
              }}
            >
              upwork
            </span>
          </div>

          {/* 3. Bottom: High-Visibility Badge Capsule (Single Line with Balanced Vertical Padding) */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
              padding: "6px 13px",
              marginTop: "2px",
              borderRadius: "999px",
              whiteSpace: "nowrap",
              flexWrap: "nowrap",
              background: isLight
                ? "linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%)"
                : "linear-gradient(180deg, rgba(30, 48, 70, 0.95) 0%, rgba(15, 25, 42, 0.95) 100%)",
              border: isLight
                ? "1px solid #cbd5e1"
                : "1px solid rgba(255, 255, 255, 0.25)",
              boxShadow: isLight
                ? "inset 0 1px 0 #fff, 0 2px 6px rgba(0,0,0,0.06)"
                : "inset 0 1px 0 rgba(255,255,255,0.2), 0 3px 8px rgba(0,0,0,0.4)",
            }}
          >
            {/* 3D Faceted Ruby Gem Emblem */}
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, filter: "drop-shadow(0 0 4px rgba(244,63,94,0.6))" }}>
              <defs>
                <linearGradient id="rubyGradTop" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fda4af" />
                  <stop offset="100%" stopColor="#f43f5e" />
                </linearGradient>
                <linearGradient id="rubyGradBot" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#e11d48" />
                  <stop offset="100%" stopColor="#9f1239" />
                </linearGradient>
              </defs>
              <polygon points="8,1 15,6 8,15 1,6" fill="url(#rubyGradBot)" />
              <polygon points="8,1 15,6 8,8 1,6" fill="url(#rubyGradTop)" />
              <polygon points="8,1 11,6 8,8 5,6" fill="#ffffff" />
            </svg>
            <span
              style={{
                fontSize: "0.68rem",
                fontWeight: 850,
                letterSpacing: "0.05em",
                color: isLight ? "#0f172a" : "#ffffff",
                lineHeight: 1,
                whiteSpace: "nowrap",
                textTransform: "uppercase",
                textShadow: isLight ? "none" : "0 1px 2px rgba(0,0,0,0.8)",
                display: "inline-block",
                padding: "1px 0",
              }}
            >
              TOP RATED PLUS
            </span>
          </div>
        </div>
      ),
    },

    // 2. Agile Approach (3D Metallic Möbius Cycle)
    {
      id: "agile",
      title: "Agile Approach",
      accent: "#10b981",
      accentRgb: "16, 185, 129",
      icon: (
        <svg
          className="custom-3d-icon"
          style={{ display: "block", margin: "0 auto" }}
          width="70"
          height="70"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Emerald Metallic Gradients */}
            <linearGradient id="metalAgileArcTop" x1="12" y1="12" x2="56" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="30%" stopColor="#a7f3d0" />
              <stop offset="55%" stopColor="#10b981" />
              <stop offset="85%" stopColor="#047857" />
              <stop offset="100%" stopColor="#064e3b" />
            </linearGradient>
            <linearGradient id="metalAgileArcBot" x1="60" y1="60" x2="16" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="30%" stopColor="#a7f3d0" />
              <stop offset="55%" stopColor="#10b981" />
              <stop offset="85%" stopColor="#047857" />
              <stop offset="100%" stopColor="#064e3b" />
            </linearGradient>
            <linearGradient id="metalAgileArrow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ecfdf5" />
              <stop offset="40%" stopColor="#6ee7b7" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <filter id="metalAgileGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#10b981" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* 3D Volumetric Extrusion Underlayer (Dark Bevel Shadow) */}
          <path
            d="M 52 26 C 49 15.5 39.5 9 29 11.5 C 20.5 13.5 13.5 20.5 12.5 29"
            stroke="#022c22"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M 20 46 C 23 56.5 32.5 63 43 60.5 C 51.5 58.5 58.5 51.5 59.5 43"
            stroke="#022c22"
            strokeWidth="9"
            strokeLinecap="round"
          />

          {/* Main 3D Metallic Cylinder Torus Arcs */}
          <g filter="url(#metalAgileGlow)">
            {/* Top-Right Curving Metallic Tube */}
            <path
              d="M 52 25 C 49 15 39.5 8.5 29 11 C 20.5 13 13.5 20 12.5 28.5"
              stroke="url(#metalAgileArcTop)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            {/* Top Chrome Highlight Specular Spine */}
            <path
              d="M 50 23 C 47.5 14.5 39 9 29 11.2 C 21.5 13 15 19 14 27"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* Top 3D Faceted Arrowhead */}
            <path
              d="M 55 12 L 54 28 L 38 28 Z"
              fill="url(#metalAgileArrow)"
              stroke="#047857"
              strokeWidth="1"
              strokeLinejoin="round"
            />
            <path
              d="M 55 12 L 54 28 L 47 28 Z"
              fill="#ffffff"
              opacity="0.75"
            />

            {/* Bottom-Left Curving Metallic Tube */}
            <path
              d="M 20 47 C 23 57 32.5 63.5 43 61 C 51.5 59 58.5 52 59.5 43.5"
              stroke="url(#metalAgileArcBot)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            {/* Bottom Chrome Highlight Specular Spine */}
            <path
              d="M 22 49 C 24.5 57.5 33 63 43 60.8 C 50.5 59 57 53 58 45"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* Bottom 3D Faceted Arrowhead */}
            <path
              d="M 17 60 L 18 44 L 34 44 Z"
              fill="url(#metalAgileArrow)"
              stroke="#047857"
              strokeWidth="1"
              strokeLinejoin="round"
            />
            <path
              d="M 17 60 L 18 44 L 25 44 Z"
              fill="#ffffff"
              opacity="0.75"
            />
          </g>
        </svg>
      ),
    },

    // 3. On-Time Delivery (3D Metallic Chrono Ring & Floating Supersonic Prism)
    {
      id: "ontime",
      title: "On-Time Delivery",
      accent: "#0ea5e9",
      accentRgb: "14, 165, 233",
      icon: (
        <svg
          className="custom-3d-icon"
          style={{ display: "block", margin: "0 auto" }}
          width="70"
          height="70"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="metalChronoOuterBevel" x1="12" y1="12" x2="60" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#bae6fd" />
              <stop offset="25%" stopColor="#0284c7" />
              <stop offset="60%" stopColor="#0369a1" />
              <stop offset="90%" stopColor="#075985" />
              <stop offset="100%" stopColor="#082f49" />
            </linearGradient>
            <linearGradient id="metalChronoInnerTrack" x1="60" y1="60" x2="12" y2="12" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="40%" stopColor="#082f49" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="metalArrowTopFacet" x1="26" y1="18" x2="48" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="metalArrowBotFacet" x1="26" y1="54" x2="48" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0369a1" />
              <stop offset="60%" stopColor="#075985" />
              <stop offset="100%" stopColor="#082f49" />
            </linearGradient>
            <filter id="metalChronoGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0ea5e9" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* 3D Extruded Deep Shadow Under Ring */}
          <circle cx="36" cy="38" r="27" fill="none" stroke="#041f33" strokeWidth="6" />

          {/* 3D Precision Chrono Outer Beveled Ring */}
          <g filter="url(#metalChronoGlow)">
            <circle cx="36" cy="36" r="27" fill="none" stroke="url(#metalChronoOuterBevel)" strokeWidth="5.5" />
            {/* Top Chrome Highlight Rim */}
            <path
              d="M 17 22 C 22 14 31 10 41 10 C 49 10 56 14 60 20"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.9"
            />
            {/* Inner Dark Groove */}
            <circle cx="36" cy="36" r="23" fill="none" stroke="url(#metalChronoInnerTrack)" strokeWidth="1.5" />

            {/* 4x Milled Metallic Chrono Notches at 12, 3, 6, 9 o'clock */}
            <line x1="36" y1="9" x2="36" y2="14" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="63" y1="36" x2="58" y2="36" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
            <line x1="36" y1="63" x2="36" y2="58" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" />
            <line x1="9" y1="36" x2="14" y2="36" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />

            {/* Floating 3D Metallic Supersonic Chevron */}
            {/* Drop shadow of chevron inside ring */}
            <path d="M 28 23 L 46 38 L 28 53 L 33 38 Z" fill="rgba(0, 0, 0, 0.45)" />
            {/* Upper Facet (Catching Bright Overhead Light) */}
            <path d="M 27 21 L 45 36 L 32 36 Z" fill="url(#metalArrowTopFacet)" stroke="#ffffff" strokeWidth="0.8" strokeLinejoin="round" />
            {/* Lower Facet (In Metallic Shadow) */}
            <path d="M 32 36 L 45 36 L 27 51 Z" fill="url(#metalArrowBotFacet)" stroke="#075985" strokeWidth="0.8" strokeLinejoin="round" />
            {/* Central Ridge Chrome Gleam */}
            <line x1="32" y1="36" x2="45" y2="36" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
          </g>
        </svg>
      ),
    },

    // 4. 24/7 Support (3D Metallic Headset & Hologram Avatar)
    {
      id: "support247",
      title: "24/7 Support",
      accent: "#a855f7",
      accentRgb: "168, 85, 247",
      icon: (
        <svg
          className="custom-3d-icon"
          style={{ display: "block", margin: "0 auto" }}
          width="70"
          height="70"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="metalHeadsetBand" x1="16" y1="12" x2="56" y2="38" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f3e8ff" />
              <stop offset="25%" stopColor="#c084fc" />
              <stop offset="65%" stopColor="#7e22ce" />
              <stop offset="100%" stopColor="#3b0764" />
            </linearGradient>
            <radialGradient id="metalEarCup" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#f5d0fe" />
              <stop offset="30%" stopColor="#c084fc" />
              <stop offset="70%" stopColor="#6b21a8" />
              <stop offset="100%" stopColor="#2e1065" />
            </radialGradient>
            <radialGradient id="metalAvatarSphere" cx="40%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#d8b4fe" />
              <stop offset="75%" stopColor="#7e22ce" />
              <stop offset="100%" stopColor="#1e0538" />
            </radialGradient>
            <filter id="metalSupportGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#a855f7" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* 3D Deep Outer Halo Ring */}
          <circle cx="36" cy="38" r="28" fill="none" stroke="#25093d" strokeWidth="5" />
          <g filter="url(#metalSupportGlow)">
            <circle cx="36" cy="36" r="28" fill="none" stroke="url(#metalHeadsetBand)" strokeWidth="4.5" />
            {/* Top Chrome Highlight on Ring */}
            <path d="M 18 22 C 23 14 31 10 41 10 C 49 10 56 14 60 20" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" opacity="0.9" />

            {/* 3D Metallic Headset Arc Over Avatar */}
            <path d="M 23 31 C 23 23.5 28.5 18 36 18 C 43.5 18 49 23.5 49 31 V 36" stroke="url(#metalHeadsetBand)" strokeWidth="4" strokeLinecap="round" />
            <path d="M 25 29 C 26 24 30.5 19.5 36 19.5 C 41.5 19.5 46 24 47 29" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />

            {/* 3D Left & Right Metallic Ear Cups */}
            <rect x="20" y="30" width="5.5" height="11" rx="2.5" fill="url(#metalEarCup)" stroke="#ffffff" strokeWidth="0.8" />
            <rect x="46.5" y="30" width="5.5" height="11" rx="2.5" fill="url(#metalEarCup)" stroke="#ffffff" strokeWidth="0.8" />

            {/* 3D Articulated Boom Mic with Chrome Tip */}
            <path d="M 48 37 C 48 42 43 45.5 38 45.5" stroke="#e9d5ff" strokeWidth="2.4" strokeLinecap="round" />
            <circle cx="37" cy="45.5" r="2.2" fill="#ffffff" stroke="#7e22ce" strokeWidth="1" />

            {/* Central 3D Sculpted Metallic Avatar Head */}
            <circle cx="36" cy="31" r="6.5" fill="url(#metalAvatarSphere)" stroke="#ffffff" strokeWidth="0.8" />
            {/* 3D Beveled Shoulders */}
            <path
              d="M 24 51 C 24 44 29 41 36 41 C 43 41 48 44 48 51"
              stroke="url(#metalHeadsetBand)"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <path
              d="M 26 50 C 27 45.5 31 43 36 43 C 41 43 45 45.5 46 50"
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.85"
            />
          </g>
        </svg>
      ),
    },

    // 5. Transparent Project Management (3D Metallic Cyber-Lens Eye)
    {
      id: "transparent",
      title: "Transparent Project Management",
      accent: "#00bbab",
      accentRgb: "0, 187, 171",
      icon: (
        <svg
          className="custom-3d-icon"
          style={{ display: "block", margin: "0 auto" }}
          width="76"
          height="62"
          viewBox="0 0 78 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="metalEyeRimUpper" x1="6" y1="12" x2="72" y2="30" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5eead4" />
              <stop offset="25%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#14b8a6" />
              <stop offset="85%" stopColor="#0f766e" />
              <stop offset="100%" stopColor="#115e59" />
            </linearGradient>
            <linearGradient id="metalEyeRimLower" x1="72" y1="48" x2="6" y2="30" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0d9488" />
              <stop offset="40%" stopColor="#115e59" />
              <stop offset="80%" stopColor="#042f2e" />
              <stop offset="100%" stopColor="#134e4a" />
            </linearGradient>
            <radialGradient id="metalIrisBezel" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ccfbf1" />
              <stop offset="45%" stopColor="#14b8a6" />
              <stop offset="80%" stopColor="#0f766e" />
              <stop offset="100%" stopColor="#042f2e" />
            </radialGradient>
            <radialGradient id="metalPupilLens" cx="35%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#5eead4" />
              <stop offset="70%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#022c22" />
            </radialGradient>
            <filter id="metalEyeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#00bbab" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* 3D Cast Shadow */}
          <path
            d="M 8 32 C 17 17 31 11 39 11 C 47 11 61 17 70 32 C 61 47 47 53 39 53 C 31 53 17 47 8 32 Z"
            fill="none"
            stroke="#022c22"
            strokeWidth="7"
          />

          <g filter="url(#metalEyeGlow)">
            {/* 3D Machined Metallic Eye Frame */}
            <path
              d="M 8 30 C 17 15 31 9 39 9 C 47 9 61 15 70 30 C 61 45 47 51 39 51 C 31 51 17 45 8 30 Z"
              fill="rgba(4, 47, 46, 0.35)"
              stroke="url(#metalEyeRimUpper)"
              strokeWidth="5.5"
              strokeLinejoin="round"
            />
            {/* Top Edge Specular Chrome Sweep */}
            <path
              d="M 14 26 C 21 15 31 11 39 11 C 47 11 57 15 64 26"
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.95"
            />

            {/* 3D Concentric Milled Iris Bezel */}
            <circle cx="39" cy="30" r="13" fill="url(#metalIrisBezel)" stroke="#ffffff" strokeWidth="1.2" />
            {/* Shutter ticks / aperture ridges */}
            <circle cx="39" cy="30" r="10.5" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" strokeDasharray="3 3" />

            {/* Central Polished 3D Crystalline Aqua Pupil Lens */}
            <circle cx="39" cy="30" r="6.5" fill="url(#metalPupilLens)" stroke="#5eead4" strokeWidth="1" />
            {/* Spherical Reflection Glint Point */}
            <circle cx="36.5" cy="27.5" r="2" fill="#ffffff" />
          </g>
        </svg>
      ),
    },

    // 6. Responsive Communication (3D Metallic Speech Capsule)
    {
      id: "communication",
      title: "Responsive Communication",
      accent: "#f59e0b",
      accentRgb: "245, 158, 11",
      icon: (
        <svg
          className="custom-3d-icon"
          style={{ display: "block", margin: "0 auto" }}
          width="70"
          height="70"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="metalCommPlaque" x1="12" y1="8" x2="60" y2="58" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="25%" stopColor="#fbbf24" />
              <stop offset="60%" stopColor="#d97706" />
              <stop offset="85%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <linearGradient id="metalCommFace" x1="16" y1="12" x2="56" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#451a03" />
              <stop offset="50%" stopColor="#78350f" />
              <stop offset="100%" stopColor="#1e0b02" />
            </linearGradient>
            <linearGradient id="metalSoundwaveBar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#fef08a" />
              <stop offset="70%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <filter id="metalCommGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#f59e0b" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* 3D Extrusion Shadow Under Bubble */}
          <path
            d="M 14 15 C 14 11.5 17 8.5 20.5 8.5 H 51.5 C 55 8.5 58 11.5 58 15 V 42 C 58 45.5 55 48.5 51.5 48.5 H 27 L 14 61 V 15 Z"
            fill="none"
            stroke="#2e0f02"
            strokeWidth="7"
            strokeLinejoin="round"
          />

          <g filter="url(#metalCommGlow)">
            {/* 3D Metallic Beveled Outer Bubble Body */}
            <path
              d="M 14 13 C 14 9.5 17 6.5 20.5 6.5 H 51.5 C 55 6.5 58 9.5 58 13 V 40 C 58 43.5 55 46.5 51.5 46.5 H 27 L 14 59 V 13 Z"
              fill="url(#metalCommFace)"
              stroke="url(#metalCommPlaque)"
              strokeWidth="5.5"
              strokeLinejoin="round"
            />
            {/* Top & Left Bevel Chrome Highlight */}
            <path
              d="M 21 8.5 H 51 C 54.5 8.5 56 10 56 13"
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.9"
            />
            <path
              d="M 16 14 V 45"
              stroke="rgba(255,255,255,0.65)"
              strokeWidth="1.4"
              strokeLinecap="round"
            />

            {/* 3x Embossed 3D Metallic Soundwave / Pulse Bars Inside */}
            <rect x="25" y="24" width="4.5" height="12" rx="2.25" fill="url(#metalSoundwaveBar)" stroke="#ffffff" strokeWidth="0.6" />
            <rect x="34" y="18" width="4.5" height="24" rx="2.25" fill="url(#metalSoundwaveBar)" stroke="#ffffff" strokeWidth="0.8" />
            <rect x="43" y="22" width="4.5" height="16" rx="2.25" fill="url(#metalSoundwaveBar)" stroke="#ffffff" strokeWidth="0.6" />
          </g>
        </svg>
      ),
    },

    // 7. Post-Launch Support (3D Heavy Heraldic Cyber-Shield & Floating Checkmark)
    {
      id: "postlaunch",
      title: "Post-Launch Support",
      accent: "#3b82f6",
      accentRgb: "59, 130, 246",
      icon: (
        <svg
          className="custom-3d-icon"
          style={{ display: "block", margin: "0 auto" }}
          width="70"
          height="70"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="metalShieldRim" x1="12" y1="6" x2="60" y2="66" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#bfdbfe" />
              <stop offset="25%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="75%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#172554" />
            </linearGradient>
            <linearGradient id="metalShieldLeftFacet" x1="14" y1="8" x2="36" y2="62" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="40%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            <linearGradient id="metalShieldRightFacet" x1="58" y1="8" x2="36" y2="62" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="50%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="metalCheckmarkTop" x1="22" y1="28" x2="48" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <linearGradient id="metalCheckmarkBevel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
            <filter id="metalShieldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#3b82f6" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* 3D Cast Shadow */}
          <path
            d="M 36 9 L 57 18 V 34 C 57 48 48 58 36 62 C 24 58 15 48 15 34 V 18 L 36 9 Z"
            fill="none"
            stroke="#0b1736"
            strokeWidth="7"
            strokeLinejoin="round"
          />

          <g filter="url(#metalShieldGlow)">
            {/* Left 3D Shield Facet (Light-Facing) */}
            <path
              d="M 36 7 L 15 16 V 32 C 15 46 24 56 36 60 V 7 Z"
              fill="url(#metalShieldLeftFacet)"
            />
            {/* Right 3D Shield Facet (In Metallic Shadow) */}
            <path
              d="M 36 7 L 57 16 V 32 C 57 46 48 56 36 60 V 7 Z"
              fill="url(#metalShieldRightFacet)"
            />

            {/* 3D Machined Metallic Border Rim */}
            <path
              d="M 36 7 L 57 16 V 32 C 57 46 48 56 36 60 C 24 56 15 46 15 32 V 16 L 36 7 Z"
              fill="none"
              stroke="url(#metalShieldRim)"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            {/* Central Vertical Spine Light Reflection */}
            <line x1="36" y1="8" x2="36" y2="59" stroke="#ffffff" strokeWidth="1.4" opacity="0.85" />
            {/* Top-Left Chrome Rim Specular Highlight */}
            <path d="M 16 16.5 L 36 7.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

            {/* Floating 3D Metallic Checkmark */}
            {/* Drop shadow on shield */}
            <path
              d="M 26 34 L 33 41 L 47 27"
              stroke="rgba(0,0,0,0.45)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Extruded Bevel */}
            <path
              d="M 25 33 L 32 40 L 46 26"
              stroke="url(#metalCheckmarkBevel)"
              strokeWidth="6.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Top Chrome Facet */}
            <path
              d="M 25 31.5 L 32 38.5 L 46 24.5"
              stroke="url(#metalCheckmarkTop)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Specular White Stroke Along Checkmark Center */}
            <path
              d="M 25 31.5 L 32 38.5 L 46 24.5"
              stroke="#ffffff"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.95"
            />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="why-choose-us-section"
      style={{
        padding: "clamp(2.5rem, 5vw, 4.25rem) 1.25rem",
        position: "relative",
        background: isLight
          ? "linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)"
          : "linear-gradient(180deg, #020713 0%, #040d21 50%, #020614 100%)",
        contain: "paint",
        overflow: "hidden",
      }}
    >
      {/* Background 3D Aurora Lighting */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "1100px",
          height: "380px",
          background: isLight
            ? "radial-gradient(ellipse at top, rgba(37, 99, 235, 0.08) 0%, transparent 70%)"
            : "radial-gradient(ellipse at top, rgba(0, 255, 209, 0.08) 0%, rgba(56, 189, 248, 0.05) 45%, transparent 75%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-custom" style={{ maxWidth: "1360px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* ===================================================================== */}
        {/* SECTION HEADER                                                        */}
        {/* ===================================================================== */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.5rem auto" }}>
          <h2
            className="heading-section"
            style={{
              margin: "0 0 1rem 0",
            }}
          >
            <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>Why </span>
            <span className="opash-hero-gradient-text">
              Choose Us?
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
              color: isLight ? "#475569" : "#94a3b8",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            We eliminate traditional software outsourcing friction with verified engineering pedigree,
            predictable 2-week sprint releases, and 100% intellectual property ownership.
          </p>
        </div>

        {/* ===================================================================== */}
        {/* 7 GLASSMORPHIC 3D PILLAR CARDS (SINGLE ROW / RESPONSIVE GRID)         */}
        {/* ===================================================================== */}
        <div className="why-choose-carousel-wrapper" style={{ position: "relative" }}>
          {/* Left Arrow Button (Visible only on mobile) */}
          <button
            type="button"
            className="why-choose-arrow why-choose-arrow-left"
            onClick={() => handleScroll("left")}
            aria-label="Previous cards"
            style={{
              position: "absolute",
              left: "-12px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.9)",
              border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.2)",
              color: isLight ? "#0f172a" : "#f8fafc",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              boxShadow: isLight
                ? "0 4px 16px rgba(0, 0, 0, 0.12)"
                : "0 6px 20px rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(12px)",
              transition: "all 0.25s ease",
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow Button (Visible only on mobile) */}
          <button
            type="button"
            className="why-choose-arrow why-choose-arrow-right"
            onClick={() => handleScroll("right")}
            aria-label="Next cards"
            style={{
              position: "absolute",
              right: "-12px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.9)",
              border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.2)",
              color: isLight ? "#0f172a" : "#f8fafc",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              boxShadow: isLight
                ? "0 4px 16px rgba(0, 0, 0, 0.12)"
                : "0 6px 20px rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(12px)",
              transition: "all 0.25s ease",
            }}
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={gridRef}
            className="seven-pillars-grid"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => {
              setTimeout(() => setIsPaused(false), 2000);
            }}
          >
            {CARDS.map((card, idx) => {
              const isHovered = hoveredCard === card.id;

              return (
                <motion.div
                  key={card.id}
                  className="pillar-card-wrapper"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`pillar-3d-card ${isHovered ? "is-hovered" : ""}`}
                    style={{
                      borderColor: isHovered
                        ? card.accent
                        : isLight
                        ? "rgba(226, 232, 240, 0.85)"
                        : "rgba(255, 255, 255, 0.09)",
                      boxShadow: isHovered
                        ? isLight
                          ? `0 20px 35px -8px rgba(${card.accentRgb}, 0.22), 0 0 1px 1px ${card.accent}`
                          : `0 24px 45px -10px rgba(0, 0, 0, 0.8), 0 0 30px rgba(${card.accentRgb}, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.25)`
                        : isLight
                        ? "0 10px 25px -5px rgba(15, 23, 42, 0.04)"
                        : "inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 14px 28px -8px rgba(0, 0, 0, 0.55)",
                    }}
                  >
                    {/* Top 3D Icon Stage with Perfectly Centered Co-Axial Shadow/Glow */}
                    <div
                      className="pillar-icon-stage"
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        minHeight: "105px",
                        margin: "0 auto",
                      }}
                    >
                      {/* Centered Ambient Glow / Shadow directly behind the icon */}
                      <div
                        aria-hidden="true"
                        className="pillar-radial-flare"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "130px",
                          height: "130px",
                          borderRadius: "50%",
                          background: `radial-gradient(circle at center, rgba(${card.accentRgb}, ${isHovered ? "0.45" : "0.22"}) 0%, rgba(${card.accentRgb}, 0.08) 45%, transparent 70%)`,
                          pointerEvents: "none",
                          zIndex: 0,
                          transition: "background 0.3s ease",
                        }}
                      />

                      {/* The Icon itself, centered directly in the middle of the shadow */}
                      <div
                        style={{
                          position: "relative",
                          zIndex: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto",
                          width: "100%",
                        }}
                      >
                        {card.icon}
                      </div>
                    </div>

                    {/* Bottom Text Content */}
                    <div className="pillar-text-stage">
                      <h3 className="pillar-title">
                        {card.title}
                      </h3>
                    </div>

                    {/* Bottom Active Glow Accent Bar */}
                    <div
                      className="pillar-accent-bar"
                      style={{
                        backgroundColor: card.accent,
                        opacity: isHovered ? 1 : 0,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Large / Desktop screens: Hide arrows completely */
        .why-choose-arrow {
          display: none !important;
        }

        /* 7 Pillars Grid: 7 columns on Desktop, responsive wrap on tablet/mobile */
        .seven-pillars-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 1.15rem;
          perspective: 1200px;
        }

        @media (max-width: 1240px) and (min-width: 769px) {
          .seven-pillars-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            overflow: visible !important;
          }
        }

        /* Mobile Screens (<= 768px): Smooth Horizontal Swipeable Carousel */
        @media (max-width: 768px) {
          .why-choose-arrow {
            display: flex !important;
          }

          .seven-pillars-grid {
            display: flex !important;
            flex-direction: row !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            scroll-snap-type: x mandatory !important;
            gap: 1.15rem !important;
            padding: 0.5rem 0.5rem 1.25rem 0.5rem !important;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
            -webkit-overflow-scrolling: touch !important;
            margin: 0 -0.5rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }

          .seven-pillars-grid::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }

          .pillar-card-wrapper {
            flex: 0 0 78vw !important;
            max-width: 300px !important;
            min-width: 250px !important;
            scroll-snap-align: center !important;
          }

          .why-choose-arrow-left {
            left: -8px !important;
          }

          .why-choose-arrow-right {
            right: -8px !important;
          }
        }

        .pillar-card-wrapper {
          transform-style: preserve-3d;
        }

        /* 3D Glassmorphic Card Container */
        .pillar-3d-card {
          position: relative;
          min-height: 250px;
          height: 100%;
          border-radius: 22px;
          padding: 1.85rem 1rem 1.6rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: space-between;
          text-align: center;
          background: ${isLight
            ? "rgba(255, 255, 255, 0.75)"
            : "linear-gradient(180deg, rgba(14, 24, 46, 0.72) 0%, rgba(7, 14, 28, 0.86) 100%)"};
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-width: 1px;
          border-style: solid;
          overflow: hidden;
          will-change: transform, box-shadow;
          transform: translateY(0) rotateX(0);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s ease,
                      box-shadow 0.3s ease;
        }

        .pillar-3d-card.is-hovered {
          transform: translateY(-8px) scale(1.02);
        }

        .pillar-radial-flare {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) !important;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          pointer-events: none;
          transition: background 0.3s ease;
        }

        /* Icon Stage */
        .pillar-icon-stage {
          position: relative;
          z-index: 2;
          min-height: 105px;
          display: flex;
          align-items: center;
          justifyContent: center;
          width: 100%;
          margin: 0 auto;
        }

        .custom-3d-icon {
          display: block;
          margin: 0 auto;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pillar-3d-card.is-hovered .custom-3d-icon {
          transform: scale(1.12) translateY(-2px);
        }

        /* Upwork Badge Card Style */
        .upwork-custom-card {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .pillar-3d-card.is-hovered .upwork-custom-card {
          transform: scale(1.08) translateY(-2px);
        }

        /* Text Stage */
        .pillar-text-stage {
          position: relative;
          z-index: 2;
          width: 100%;
          margin-top: 1.25rem;
        }

        .pillar-title {
          font-size: 0.95rem;
          font-weight: 750;
          line-height: 1.35;
          color: ${isLight ? "#0f172a" : "#f1f5f9"};
          margin: 0;
          letter-spacing: -0.01em;
          transition: color 0.2s ease;
          text-wrap: balance;
        }

        /* Bottom Accent Line */
        .pillar-accent-bar {
          position: absolute;
          bottom: 0;
          left: 20%;
          right: 20%;
          height: 3px;
          border-radius: 3px 3px 0 0;
          transition: opacity 0.3s ease;
          box-shadow: 0 0 10px currentColor;
        }
      `}</style>
    </section>
  );
}

export default WhyChooseUsCards;
