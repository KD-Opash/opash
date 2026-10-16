"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Shield,
  Heart,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Home,
  Plane,
  Radio,
  Cog,
  Sprout,
  Sparkles,
  Pause,
  Play,
} from "lucide-react";

export interface IndustryItem {
  id: string;
  name: string;
  accent: string;
  accentRgb: string;
  customIconType: string;
}

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: "insurtech",
    name: "InsureTech",
    accent: "#f43f5e",
    accentRgb: "244, 63, 94",
    customIconType: "shield",
  },
  {
    id: "healthcare",
    name: "Health Care",
    accent: "#0ea5e9",
    accentRgb: "14, 165, 233",
    customIconType: "health",
  },
  {
    id: "fintech",
    name: "FinTech",
    accent: "#8b5cf6",
    accentRgb: "139, 92, 246",
    customIconType: "fintech",
  },
  {
    id: "ecommerce",
    name: "Ecommerce",
    accent: "#f59e0b",
    accentRgb: "245, 158, 11",
    customIconType: "ecommerce",
  },
  {
    id: "education",
    name: "Education",
    accent: "#10b981",
    accentRgb: "16, 185, 129",
    customIconType: "education",
  },
  {
    id: "realestate",
    name: "Real Estate",
    accent: "#ec4899",
    accentRgb: "236, 72, 153",
    customIconType: "realestate",
  },
  {
    id: "travel",
    name: "Travel & Hospitality",
    accent: "#eab308",
    accentRgb: "234, 179, 8",
    customIconType: "travel",
  },
  {
    id: "telecom",
    name: "Telecommunication",
    accent: "#a855f7",
    accentRgb: "168, 85, 247",
    customIconType: "telecom",
  },
  {
    id: "industrial",
    name: "Industrial Tech",
    accent: "#06b6d4",
    accentRgb: "6, 182, 212",
    customIconType: "industrial",
  },
  {
    id: "ngos",
    name: "NGOs",
    accent: "#2dd4bf",
    accentRgb: "45, 212, 191",
    customIconType: "ngos",
  },
];

export function InteractiveIndustriesBento() {
  const [hasEntered, setHasEntered] = useState(false);
  const [hasLanded, setHasLanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [displayTime, setDisplayTime] = useState("00:01.25");
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const dockRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // 1. Trigger top drop-in animation ONLY when dock container is properly in the viewport center
  useEffect(() => {
    if (!dockRef.current) return;
    let timerStart: ReturnType<typeof setTimeout> | null = null;
    let timerScroll: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset scroll container position to 0 so InsureTech is first
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = 0;
          }
          // Micro-delay so user clearly sees the empty box first, then cards drop in
          if (timerStart) clearTimeout(timerStart);
          timerStart = setTimeout(() => {
            setHasEntered(true);
            // After drop-in bounce finishes (approx 1.3s), start continuous auto-scroll
            if (timerScroll) clearTimeout(timerScroll);
            timerScroll = setTimeout(() => {
              setHasLanded(true);
            }, 1300);
          }, 180);
        } else {
          // Reset states when user scrolls away so the animation re-triggers next time
          if (timerStart) clearTimeout(timerStart);
          if (timerScroll) clearTimeout(timerScroll);
          setHasEntered(false);
          setHasLanded(false);
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = 0;
          }
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -16% 0px",
      }
    );

    observer.observe(dockRef.current);
    return () => {
      observer.disconnect();
      if (timerStart) clearTimeout(timerStart);
      if (timerScroll) clearTimeout(timerScroll);
    };
  }, []);

  // 2. Smooth infinite auto-scroll loop with synced timecode
  useEffect(() => {
    if (!hasLanded) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 0.85; // smooth luxury speed

    const step = () => {
      if (!isHovered && !isDragging && !isPaused && container) {
        container.scrollLeft += scrollSpeed;
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      if (container) {
        const halfWidth = container.scrollWidth / 2 || 1;
        const progress = (container.scrollLeft % halfWidth) / halfWidth;
        const totalSec = progress * 12; // 12-second total timeline cycle
        const sec = Math.floor(totalSec);
        const ms = Math.floor((totalSec % 1) * 100);
        setDisplayTime(`00:${String(sec).padStart(2, "0")}.${String(ms).padStart(2, "0")}`);
      }
      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [hasLanded, isHovered, isDragging, isPaused]);

  // 3. Manual Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeftState(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.6; // multiplier for responsive drag
    container.scrollLeft = scrollLeftState - walk;

    // Handle seamless wraparound while dragging
    const halfWidth = container.scrollWidth / 2;
    if (container.scrollLeft >= halfWidth) {
      container.scrollLeft -= halfWidth;
      setScrollLeftState(container.scrollLeft);
      setStartX(x);
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += halfWidth;
      setScrollLeftState(container.scrollLeft);
      setStartX(x);
    }

    // Update dynamic timecode during drag
    const progress = (container.scrollLeft % halfWidth) / halfWidth;
    const totalSec = progress * 12;
    const sec = Math.floor(totalSec);
    const ms = Math.floor((totalSec % 1) * 100);
    setDisplayTime(`00:${String(sec).padStart(2, "0")}.${String(ms).padStart(2, "0")}`);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Duplicate items 2x for seamless continuous infinite rail
  const displayItems = [...INDUSTRIES_LIST, ...INDUSTRIES_LIST];

  return (
    <section
      id="industries"
      className="industries-drop-section relative w-full overflow-x-clip select-none"
      aria-label="Industries We Specialize In"
    >
      {/* Dynamic Ambient Backdrop */}
      <div className="industries-drop-backdrop" aria-hidden="true">
        <div className="industries-drop-spotlight" />
        <div className="industries-drop-grid-floor" />
      </div>

      <div className="container-custom relative z-10">
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="industries-drop-header text-center">
          <h2 className="industries-drop-headline">
            Industries <span className="industries-drop-gradient">We Specialize In</span>
          </h2>

          <p className="industries-drop-subhead">
            Opash Software brings over 8 years of expertise in delivering tailored digital solutions for Insurance, Fintech, eCommerce, Education, and Real Estate — helping businesses overcome industry challenges and scale confidently.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. ROUNDED 4-CARD STAGE DOCK WITH DROP-IN ANIMATION & INFINITE CAROUSEL    */}
        {/* ========================================================================= */}
        <div
          ref={dockRef}
          className={`industries-dock-capsule ${hasEntered ? "is-active" : "is-empty"}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsDragging(false);
          }}
        >
          {/* Top specular gloss sheen on the dock */}
          <div className="industries-dock-sheen" />

          {/* ========================================================================= */}
          {/* MEDIA TIMELINE PLAYER BAR MATCHING IMAGE 1                                */}
          {/* ========================================================================= */}
          <div className="industries-timeline-header">
            {/* Top row: Play/Pause button, timecode, duration pill */}
            <div className="industries-timeline-controls">
              <button
                type="button"
                className="industries-timeline-play-btn"
                onClick={() => setIsPaused((prev) => !prev)}
                title={isPaused ? "Play" : "Pause"}
                aria-label={isPaused ? "Play animation" : "Pause animation"}
              >
                {isPaused ? (
                  <Play size={12} className="fill-current ml-0.5" />
                ) : (
                  <Pause size={12} className="fill-current" />
                )}
              </button>

              <div className="industries-timeline-timecode">
                <span className="current-time">{displayTime}</span>
                <span className="time-divider">/</span>
                <span className="total-time">00:12</span>
              </div>

              <div className="industries-timeline-duration">
                <span className="dur-label">Dur</span>
                <span className="dur-pill">5s</span>
                <span className="dur-unit">sec</span>
              </div>
            </div>

            {/* Bottom row: Time ruler with ticks & active scrubber clip region [ 1s | 2s ] - FULL WIDTH OF THE BOX */}
            <div className="industries-timeline-ruler" aria-hidden="true">
              <div className="timeline-ticks-row">
                <span className="time-num">0s</span>
                <span className="time-tick">|</span>

                {/* Active Clip Region [ 1s | 2s ] */}
                <div className="timeline-active-clip">
                  <span className="clip-time-num">1s</span>
                  <span className="clip-time-tick">|</span>
                  <span className="clip-time-num">2s</span>
                </div>

                <span className="time-tick">|</span>
                <span className="time-num time-num-opt">3s</span>
                <span className="time-tick time-tick-opt">|</span>
                <span className="time-num">4s</span>
                <span className="time-tick time-tick-opt">|</span>
                <span className="time-num time-num-opt">5s</span>
                <span className="time-tick">|</span>
                <span className="time-num">6s</span>
                <span className="time-tick time-tick-opt">|</span>
                <span className="time-num time-num-opt">7s</span>
                <span className="time-tick">|</span>
                <span className="time-num">8s</span>
                <span className="time-tick time-tick-opt">|</span>
                <span className="time-num time-num-opt">9s</span>
                <span className="time-tick">|</span>
                <span className="time-num">10s</span>
                <span className="time-tick time-tick-opt">|</span>
                <span className="time-num time-num-opt">11s</span>
                <span className="time-tick">|</span>
                <span className="time-num">12s</span>
              </div>
            </div>
          </div>

          {/* Interactive Scrollable Rail */}
          <div
            ref={scrollContainerRef}
            className={`industries-dock-track ${isDragging ? "is-grabbing" : ""}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {displayItems.map((item, idx) => {
              // Delay calculation for staggered drop-in
              const dropDelay = `${(idx % 10) * 0.09}s`;

              return (
                <div
                  key={`${item.id}-${idx}`}
                  className={`industry-card-item ${hasEntered ? "do-drop" : ""}`}
                  style={
                    {
                      "--ind-accent": item.accent,
                      "--ind-accent-rgb": item.accentRgb,
                      "--drop-delay": dropDelay,
                    } as React.CSSProperties
                  }
                >
                  <div className="industry-card-body">
                    {/* Top 3D Vector Hologram Icon */}
                    <div className="industry-icon-container">
                      <div className="industry-icon-aura" />
                      <div className="industry-icon-graphic">
                        <IndustryHologramIcon
                          type={item.customIconType}
                          accent={item.accent}
                          accentRgb={item.accentRgb}
                        />
                      </div>
                    </div>

                    {/* Bottom Industry Name */}
                    <h3 className="industry-card-name">{item.name}</h3>

                    {/* Subtle Base Pod */}
                    <div className="industry-card-floor-pod" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Gradient Edge Fade Masks (Left & Right) */}
          <div className="industries-dock-fade-mask left-mask" />
          <div className="industries-dock-fade-mask right-mask" />
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// CUSTOM ANIMATED 3D/VECTOR HOLOGRAM ICONS MATCHING USER'S SCREENSHOTS
// =========================================================================
function IndustryHologramIcon({
  type,
  accent,
  accentRgb,
}: {
  type: string;
  accent: string;
  accentRgb: string;
}) {
  switch (type) {
    case "shield": // InsureTech
      return (
        <svg viewBox="0 0 70 70" width="62" height="62" fill="none">
          <path
            d="M 35 7 L 58 15 L 58 39 C 58 52 35 62 35 62 C 35 62 12 52 12 39 L 12 15 Z"
            fill={`rgba(${accentRgb}, 0.22)`}
            stroke={accent}
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path
            d="M 35 22 V 46 M 23 34 H 47"
            stroke="#ffffff"
            strokeWidth="4.2"
            strokeLinecap="round"
          />
          <circle cx="35" cy="34" r="15" fill={`rgba(${accentRgb}, 0.35)`} filter="blur(6px)" />
        </svg>
      );

    case "health": // Health Care (Tree & Person)
      return (
        <svg viewBox="0 0 70 70" width="62" height="62" fill="none">
          <circle cx="35" cy="20" r="6" fill="#ffffff" />
          <path
            d="M 22 48 C 22 35 35 30 35 30 C 35 30 48 35 48 48"
            stroke={accent}
            strokeWidth="3.8"
            strokeLinecap="round"
          />
          <path
            d="M 35 30 V 58 M 27 36 L 17 28 M 43 36 L 53 28 M 35 42 L 18 42 M 35 42 L 52 42"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="17" cy="26" r="3.2" fill={accent} />
          <circle cx="53" cy="26" r="3.2" fill={accent} />
          <circle cx="18" cy="42" r="2.8" fill={accent} />
          <circle cx="52" cy="42" r="2.8" fill={accent} />
          <circle cx="35" cy="12" r="3" fill={accent} />
        </svg>
      );

    case "fintech": // FinTech (Bank Pillars)
      return (
        <svg viewBox="0 0 70 70" width="62" height="62" fill="none">
          <path d="M 12 28 L 35 12 L 58 28 Z" fill={`rgba(${accentRgb}, 0.22)`} stroke={accent} strokeWidth="2.8" strokeLinejoin="round" />
          <rect x="16" y="28" width="38" height="4" fill="#ffffff" />
          <rect x="18" y="32" width="6.5" height="21" rx="1.5" fill={accent} />
          <rect x="31.75" y="32" width="6.5" height="21" rx="1.5" fill="#ffffff" />
          <rect x="45.5" y="32" width="6.5" height="21" rx="1.5" fill={accent} />
          <rect x="13" y="53" width="44" height="6" rx="2" fill={`rgba(${accentRgb}, 0.65)`} stroke={accent} strokeWidth="1.8" />
          <circle cx="35" cy="22" r="4" fill="#ffffff" />
        </svg>
      );

    case "ecommerce": // Ecommerce (Shopping Cart)
      return (
        <svg viewBox="0 0 70 70" width="62" height="62" fill="none">
          <path
            d="M 13 16 H 21 L 28 45 H 53 L 59 22 H 23"
            stroke={accent}
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={`rgba(${accentRgb}, 0.22)`}
          />
          <circle cx="31" cy="54" r="5" fill="#ffffff" stroke={accent} strokeWidth="2.2" />
          <circle cx="50" cy="54" r="5" fill="#ffffff" stroke={accent} strokeWidth="2.2" />
          <path d="M 32 30 H 49 M 36 36 H 45" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case "education": // Education (Graduation Cap)
      return (
        <svg viewBox="0 0 70 70" width="62" height="62" fill="none">
          <path
            d="M 10 26 L 35 13 L 60 26 L 35 39 Z"
            fill={`rgba(${accentRgb}, 0.3)`}
            stroke={accent}
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path
            d="M 19 32 V 46 C 19 51 35 57 35 57 C 35 57 51 51 51 46 V 32"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M 55 29 V 49" stroke={accent} strokeWidth="2.8" strokeLinecap="round" />
          <circle cx="55" cy="51" r="3.2" fill="#ffffff" />
        </svg>
      );

    case "realestate": // Real Estate (Hand Holding House)
      return (
        <svg viewBox="0 0 70 70" width="62" height="62" fill="none">
          <path
            d="M 23 27 L 35 15 L 47 27 V 39 H 23 Z"
            fill={`rgba(${accentRgb}, 0.26)`}
            stroke={accent}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <rect x="31" y="29" width="8" height="10" rx="1.5" fill="#ffffff" />
          <path
            d="M 12 51 C 18 45 28 44 38 46 C 48 48 56 42 58 40"
            stroke="#ffffff"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M 12 51 L 19 59 L 34 53"
            stroke={accent}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "travel": // Travel & Hospitality (Calendar & Airplane)
      return (
        <svg viewBox="0 0 70 70" width="62" height="62" fill="none">
          <rect x="14" y="18" width="42" height="38" rx="6" fill={`rgba(${accentRgb}, 0.16)`} stroke={accent} strokeWidth="2.4" />
          <line x1="14" y1="28" x2="56" y2="28" stroke="#ffffff" strokeWidth="2.2" />
          <circle cx="24" cy="18" r="2.8" fill="#ffffff" />
          <circle cx="46" cy="18" r="2.8" fill="#ffffff" />
          <path
            d="M 35 32 L 35 48 M 26 38 L 44 38 M 30 46 L 40 46"
            stroke={accent}
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          <circle cx="35" cy="40" r="10" stroke="#ffffff" strokeWidth="1.6" strokeDasharray="3 3" />
        </svg>
      );

    case "telecom": // Telecommunication (Monitor & Globe)
      return (
        <svg viewBox="0 0 70 70" width="62" height="62" fill="none">
          <rect x="15" y="16" width="40" height="31" rx="5" fill={`rgba(${accentRgb}, 0.22)`} stroke={accent} strokeWidth="2.6" />
          <line x1="35" y1="47" x2="35" y2="55" stroke="#ffffff" strokeWidth="3.2" />
          <line x1="24" y1="55" x2="46" y2="55" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="35" cy="31" r="8.5" stroke={accent} strokeWidth="2" />
          <circle cx="35" cy="31" r="3.5" fill="#ffffff" />
          <path d="M 21 24 C 19 28 19 34 21 38 M 49 24 C 51 28 51 34 49 38" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "industrial": // Industrial Tech (Triple Cogs)
      return (
        <svg viewBox="0 0 70 70" width="62" height="62" fill="none">
          <g transform="translate(26, 26)">
            <circle r="12" fill={`rgba(${accentRgb}, 0.28)`} stroke={accent} strokeWidth="2.6" />
            <circle r="4.5" fill="#ffffff" />
            <line x1="0" y1="-14" x2="0" y2="14" stroke={accent} strokeWidth="3.2" />
            <line x1="-14" y1="0" x2="14" y2="0" stroke={accent} strokeWidth="3.2" />
          </g>
          <g transform="translate(46, 42)">
            <circle r="9.5" fill={`rgba(${accentRgb}, 0.22)`} stroke="#ffffff" strokeWidth="2.2" />
            <circle r="3.2" fill={accent} />
          </g>
        </svg>
      );

    case "ngos": // NGOs (Hand & Sprout/Heart)
    default:
      return (
        <svg viewBox="0 0 70 70" width="62" height="62" fill="none">
          <path
            d="M 35 34 C 35 21 47 21 47 27 C 47 35 35 44 35 44 C 35 44 23 35 23 27 C 23 21 35 21 35 34 Z"
            fill={`rgba(${accentRgb}, 0.35)`}
            stroke={accent}
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path
            d="M 14 49 C 22 45 30 47 38 49 C 46 51 54 47 56 45"
            stroke="#ffffff"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path d="M 35 18 L 35 14 M 31 15 L 35 12 L 39 15" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
  }
}
