"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Cpu,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

export interface CarouselIndustry {
  id: string;
  name: string;
  shortName: string;
  headline: string;
  description: string;
  stat: string;
  statLabel: string;
  tags: string[];
  accent: string;
  accentRgb: string;
  timeMark: string;
  iconType: string;
}

export const CAROUSEL_INDUSTRIES: CarouselIndustry[] = [
  {
    id: "healthcare",
    name: "Health Care",
    shortName: "Health Care",
    headline: "Connected Medical Systems & HL7 Telehealth",
    description:
      "Architecting HIPAA-compliant EHR integrations, zero-latency WebRTC clinical video streams, and interoperable FHIR data pipelines.",
    stat: "HIPAA & HL7",
    statLabel: "Regulatory Compliance",
    tags: ["Telehealth WebRTC", "FHIR / HL7 APIs", "EHR Interop", "Clinical AI"],
    accent: "#00d2ff",
    accentRgb: "0, 210, 255",
    timeMark: "0s",
    iconType: "health",
  },
  {
    id: "fintech",
    name: "FinTech",
    shortName: "FinTech",
    headline: "High-Frequency Financial Engines & Banking Rails",
    description:
      "Enterprise transaction rails, real-time fraud mitigation, micro-ledger architectures, and PCI-DSS Level 1 compliant open-banking integrations.",
    stat: "99.999% SLA",
    statLabel: "Core Reliability",
    tags: ["Open Banking", "Micro-Ledgers", "PCI-DSS Level 1", "Real-Time Clearing"],
    accent: "#a855f7",
    accentRgb: "168, 85, 247",
    timeMark: "1s",
    iconType: "fintech",
  },
  {
    id: "ecommerce",
    name: "Ecommerce",
    shortName: "Ecommerce",
    headline: "High-Scale Composable Commerce & Omnichannel",
    description:
      "Sub-second headless storefronts, multi-warehouse inventory synchronization, automated checkout pipelines, and AI-driven dynamic pricing.",
    stat: "100k+ Peak TPS",
    statLabel: "Throughput Capacity",
    tags: ["Headless Commerce", "Omnichannel ERP", "AI Merchandising", "Multi-Currency"],
    accent: "#f59e0b",
    accentRgb: "245, 158, 11",
    timeMark: "2s",
    iconType: "ecommerce",
  },
  {
    id: "education",
    name: "Education",
    shortName: "Education",
    headline: "Adaptive Digital Academies & LMS Platforms",
    description:
      "Interactive virtual classrooms, automated AI-proctoring suites, gamified knowledge pathways, and SCORM/xAPI compliant engines.",
    stat: "500k+ Active",
    statLabel: "Concurrent Learners",
    tags: ["LMS Platforms", "AI Proctoring", "Adaptive Learning", "SCORM / xAPI"],
    accent: "#10b981",
    accentRgb: "16, 185, 129",
    timeMark: "3s",
    iconType: "education",
  },
  {
    id: "realestate",
    name: "Real Estate",
    shortName: "Real Estate",
    headline: "Spatial PropTech & 3D Asset Intelligence",
    description:
      "Immersive 3D digital twins, tenant lifecycle ERPs, automated escrow smart contracts, and IoT facility monitoring systems.",
    stat: "3D Virtual Tours",
    statLabel: "Spatial Visualization",
    tags: ["Digital Twins", "Smart Lease ERP", "Automated Escrow", "Facility IoT"],
    accent: "#ec4899",
    accentRgb: "236, 72, 153",
    timeMark: "4s",
    iconType: "realestate",
  },
  {
    id: "travel",
    name: "Travel",
    shortName: "Travel",
    headline: "Dynamic Global Booking & Hospitality Engines",
    description:
      "Unified flight & hotel distribution, AI dynamic pricing matrices, real-time itinerary feeds, and cross-carrier loyalty rewards.",
    stat: "Global GDS",
    statLabel: "Live Inventory Sync",
    tags: ["GDS Integration", "Dynamic Pricing", "PNR Sync", "Loyalty Engines"],
    accent: "#38bdf8",
    accentRgb: "56, 189, 248",
    timeMark: "5s",
    iconType: "travel",
  },
  {
    id: "insurtech",
    name: "InsureTech",
    shortName: "InsureTech",
    headline: "Automated Policy Lifecycles & Underwriting AI",
    description:
      "Automated risk rating engines, biometric identity verification, and straight-through automated claims settlement systems.",
    stat: "4.2x Faster",
    statLabel: "Claims Settlement",
    tags: ["Risk AI Modeling", "Automated Claims", "Underwriting APIs", "Telematics"],
    accent: "#f43f5e",
    accentRgb: "244, 63, 94",
    timeMark: "6s",
    iconType: "insurtech",
  },
  {
    id: "telecom",
    name: "Telecom & 5G",
    shortName: "Telecom",
    headline: "Carrier-Grade Mesh Systems & Low Latency",
    description:
      "High-concurrency OSS/BSS platforms, 5G network slicing controllers, and distributed self-healing VoIP infrastructure.",
    stat: "< 5ms Latency",
    statLabel: "Mesh Telemetry",
    tags: ["5G Core Routing", "OSS / BSS Systems", "VoIP Mesh", "Carrier Billing"],
    accent: "#818cf8",
    accentRgb: "129, 140, 248",
    timeMark: "7s",
    iconType: "telecom",
  },
  {
    id: "industrial",
    name: "Industrial IoT",
    shortName: "Industrial",
    headline: "Smart Factory Automation & SCADA Telemetry",
    description:
      "Industrial edge computing, predictive machinery maintenance AI, and real-time SCADA sensor monitoring architectures.",
    stat: "Industry 4.0",
    statLabel: "Edge Standard",
    tags: ["SCADA Telemetry", "Predictive AI", "Edge Computing", "Digital Sensors"],
    accent: "#06b6d4",
    accentRgb: "6, 182, 212",
    timeMark: "8s",
    iconType: "industrial",
  },
  {
    id: "ngos",
    name: "Public & NGOs",
    shortName: "NGOs",
    headline: "Transparent Global Aid & Social Impact",
    description:
      "Grant disbursement tracking, multi-region donor engagement portals, and WCAG AAA compliant accessibility platforms.",
    stat: "100% Audit",
    statLabel: "Aid Traceability",
    tags: ["Grant Tracking", "Donor Portals", "WCAG AAA", "Impact Analytics"],
    accent: "#14b8a6",
    accentRgb: "20, 184, 166",
    timeMark: "9s",
    iconType: "ngos",
  },
];

// Bespoke Neon Glowing Icons matching the user's screenshot
function IndustryNeonIcon({ type, accent }: { type: string; accent: string }) {
  const glowStyle = {
    filter: `drop-shadow(0 0 10px ${accent}) drop-shadow(0 0 20px ${accent}88)`,
  };

  switch (type) {
    case "health":
      // Molecule/cross node network from screenshot
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "38px", height: "38px", ...glowStyle }}
        >
          <circle cx="24" cy="24" r="5" fill={accent} fillOpacity="0.25" />
          <line x1="24" y1="6" x2="24" y2="19" />
          <line x1="24" y1="29" x2="24" y2="42" />
          <line x1="6" y1="24" x2="19" y2="24" />
          <line x1="29" y1="24" x2="42" y2="24" />
          <circle cx="24" cy="6" r="3" fill={accent} />
          <circle cx="24" cy="42" r="3" fill={accent} />
          <circle cx="6" cy="24" r="3" fill={accent} />
          <circle cx="42" cy="24" r="3" fill={accent} />
          <line x1="12" y1="12" x2="19" y2="19" />
          <line x1="36" y1="36" x2="29" y2="29" />
          <circle cx="11" cy="11" r="2.5" fill={accent} />
          <circle cx="37" cy="37" r="2.5" fill={accent} />
        </svg>
      );

    case "fintech":
      // Classical banking temple from screenshot
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "38px", height: "38px", ...glowStyle }}
        >
          <path d="M6 16L24 6L42 16H6Z" fill={accent} fillOpacity="0.2" />
          <line x1="4" y1="16" x2="44" y2="16" />
          <line x1="10" y1="20" x2="10" y2="36" />
          <line x1="19" y1="20" x2="19" y2="36" />
          <line x1="29" y1="20" x2="29" y2="36" />
          <line x1="38" y1="20" x2="38" y2="36" />
          <line x1="4" y1="36" x2="44" y2="36" />
          <line x1="2" y1="42" x2="46" y2="42" />
          <circle cx="24" cy="12" r="1.5" fill={accent} />
        </svg>
      );

    case "ecommerce":
      // Shopping cart with 2 wheels from screenshot
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "38px", height: "38px", ...glowStyle }}
        >
          <circle cx="18" cy="38" r="3.5" fill={accent} />
          <circle cx="36" cy="38" r="3.5" fill={accent} />
          <path d="M4 8H10L15 30H39L43 14H12" />
          <line x1="18" y1="18" x2="38" y2="18" />
          <line x1="20" y1="24" x2="36" y2="24" />
        </svg>
      );

    case "education":
      // Mortarboard graduation cap with tassel from screenshot
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "38px", height: "38px", ...glowStyle }}
        >
          <path d="M24 10L6 18L24 26L42 18L24 10Z" fill={accent} fillOpacity="0.2" />
          <path d="M12 21.5V32C12 36 17 39 24 39C31 39 36 36 36 32V21.5" />
          <path d="M42 18V30" />
          <circle cx="42" cy="32" r="2" fill={accent} />
        </svg>
      );

    case "realestate":
      // Modern house with sweeping foundation curve from screenshot
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "38px", height: "38px", ...glowStyle }}
        >
          <path d="M24 8L10 20V38H38V20L24 8Z" fill={accent} fillOpacity="0.2" />
          <rect x="20" y="24" width="8" height="14" />
          <line x1="17" y1="16" x2="17" y2="12" />
          <path d="M6 40C14 36 34 44 42 38" strokeWidth="3" />
        </svg>
      );

    case "travel":
      // Supersonic passenger jet from screenshot
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "38px", height: "38px", ...glowStyle }}
        >
          <path d="M24 6L28 18H42L31 26L35 40L24 32L13 40L17 26L6 18H20L24 6Z" fill={accent} fillOpacity="0.2" />
          <circle cx="24" cy="24" r="3" fill={accent} />
        </svg>
      );

    case "insurtech":
      // Shield with check
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "38px", height: "38px", ...glowStyle }}
        >
          <path d="M24 6L38 12V24C38 33 32 40 24 43C16 40 10 33 10 24V12L24 6Z" fill={accent} fillOpacity="0.2" />
          <path d="M18 24L22 28L30 19" />
        </svg>
      );

    case "telecom":
      // Broadcast tower & radar waves
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "38px", height: "38px", ...glowStyle }}
        >
          <circle cx="24" cy="14" r="4" fill={accent} />
          <path d="M18 38L23 18H25L30 38" />
          <line x1="20" y1="28" x2="28" y2="28" />
          <path d="M15 8C10 13 10 21 15 26" />
          <path d="M33 8C38 13 38 21 33 26" />
        </svg>
      );

    case "industrial":
      // Gear & processor node
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "38px", height: "38px", ...glowStyle }}
        >
          <circle cx="24" cy="24" r="8" fill={accent} fillOpacity="0.2" />
          <circle cx="24" cy="24" r="4" fill={accent} />
          <line x1="24" y1="6" x2="24" y2="12" strokeWidth="3" />
          <line x1="24" y1="36" x2="24" y2="42" strokeWidth="3" />
          <line x1="6" y1="24" x2="12" y2="24" strokeWidth="3" />
          <line x1="36" y1="24" x2="42" y2="24" strokeWidth="3" />
          <line x1="11" y1="11" x2="16" y2="16" strokeWidth="3" />
          <line x1="32" y1="32" x2="37" y2="37" strokeWidth="3" />
          <line x1="11" y1="37" x2="16" y2="32" strokeWidth="3" />
          <line x1="32" y1="16" x2="37" y2="11" strokeWidth="3" />
        </svg>
      );

    case "ngos":
    default:
      // Global heart / hands
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "38px", height: "38px", ...glowStyle }}
        >
          <circle cx="24" cy="24" r="16" fill={accent} fillOpacity="0.15" />
          <path d="M24 14C22 10 16 10 14 14C11 18 17 24 24 29C31 24 37 18 34 14C32 10 26 10 24 14Z" fill={accent} />
          <path d="M12 36C18 34 30 34 36 36" />
        </svg>
      );
  }
}

// Custom High-Performance Animated Typewriter for the Active Card
function TypewriterConsole({
  text,
  speed = 28,
  accent,
}: {
  text: string;
  speed?: number;
  accent: string;
}) {
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayed("");
    setIsTyping(true);
    let currentIndex = 0;

    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayed(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span style={{ display: "inline" }}>
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: "8px",
          height: "1.1em",
          verticalAlign: "middle",
          backgroundColor: accent,
          marginLeft: "4px",
          borderRadius: "2px",
          opacity: isTyping ? 1 : 0.4,
          animation: "cursorPulse 0.8s infinite ease-in-out",
        }}
      />
    </span>
  );
}

export function AnimatedIndustriesCarousel() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [elapsedMs, setElapsedMs] = useState(0);
  const CARD_DURATION_MS = 3800; // 3.8 seconds per card

  const activeIndustry = CAROUSEL_INDUSTRIES[activeIndex];
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the carousel track so active card stays in view
  useEffect(() => {
    if (!carouselTrackRef.current) return;
    const track = carouselTrackRef.current;
    const cardElements = track.querySelectorAll<HTMLButtonElement>(".carousel-card-item");
    const activeEl = cardElements[activeIndex];
    if (activeEl) {
      const scrollLeft =
        activeEl.offsetLeft - track.clientWidth / 2 + activeEl.clientWidth / 2;
      track.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  // Main animation timer loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = 50; // update 20 times per second for smooth millisecond clock
    const timer = setInterval(() => {
      setElapsedMs((prev) => {
        const next = prev + interval;
        if (next >= CARD_DURATION_MS) {
          setActiveIndex((idx) => (idx + 1) % CAROUSEL_INDUSTRIES.length);
          return 0;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, CARD_DURATION_MS]);

  // Format timecode matching the user screenshot: "00:01.70 / 00:10"
  const currentTotalSeconds = activeIndex + elapsedMs / CARD_DURATION_MS;
  const currentSec = Math.floor(currentTotalSeconds);
  const currentHundredths = Math.floor(
    (currentTotalSeconds - currentSec) * 100
  );
  const formattedTime = `00:${currentSec < 10 ? "0" + currentSec : currentSec}.${
    currentHundredths < 10 ? "0" + currentHundredths : currentHundredths
  }`;
  const totalDurationStr = `00:${CAROUSEL_INDUSTRIES.length < 10 ? "0" + CAROUSEL_INDUSTRIES.length : CAROUSEL_INDUSTRIES.length}`;

  const handleSelectCard = useCallback((index: number) => {
    setActiveIndex(index);
    setElapsedMs(0);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === 0 ? CAROUSEL_INDUSTRIES.length - 1 : prev - 1
    );
    setElapsedMs(0);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_INDUSTRIES.length);
    setElapsedMs(0);
  }, []);

  return (
    <section
      className="industries-carousel-section"
      style={{
        position: "relative",
        padding: "5rem 0 6rem 0",
        overflow: "hidden",
      }}
    >
      {/* Background radial glow tailored to active card's accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "450px",
          background: `radial-gradient(ellipse at center, rgba(${activeIndustry.accentRgb}, 0.12) 0%, rgba(${activeIndustry.accentRgb}, 0.02) 50%, transparent 75%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
          transition: "background 0.8s ease",
        }}
      />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto 3.5rem auto",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "999px",
              backgroundColor: isLight
                ? "rgba(14, 165, 233, 0.1)"
                : "rgba(14, 165, 233, 0.15)",
              border: `1px solid ${
                isLight ? "rgba(14, 165, 233, 0.25)" : "rgba(14, 165, 233, 0.3)"
              }`,
              color: isLight ? "#0284c7" : "#38bdf8",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              marginBottom: "1.2rem",
            }}
          >
            <Sparkles size={14} />
            <span>Interactive Domain Architecture</span>
          </div>

          <h2 className="heading-section" style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}>
            Industries We Specialize In
          </h2>
          <p className="subhead-lead" style={{ marginTop: "1rem" }}>
            Over 8+ years delivering mission-critical, enterprise-grade software
            tailored to stringent regulatory, security, and high-concurrency benchmarks.
          </p>
        </div>

        {/* ============================================================== */}
        {/* THE INTERACTIVE CAROUSEL PLAYER CONSOLE (Matching Screenshot)   */}
        {/* ============================================================== */}
        <div
          className="carousel-player-console"
          style={{
            position: "relative",
            borderRadius: "28px",
            background: isLight
              ? "rgba(255, 255, 255, 0.88)"
              : "rgba(10, 16, 28, 0.85)",
            border: isLight
              ? "1px solid rgba(226, 232, 240, 0.9)"
              : "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: isLight
              ? "0 20px 45px -15px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.03)"
              : "0 25px 60px -15px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            padding: "1.75rem 2rem 2.25rem 2rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Top Video Scrubber Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              paddingBottom: "1.25rem",
              borderBottom: isLight
                ? "1px solid rgba(0, 0, 0, 0.06)"
                : "1px solid rgba(255, 255, 255, 0.06)",
              marginBottom: "1.25rem",
            }}
          >
            {/* Left Controls: Play/Pause + Timecode + Duration badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              {/* Play/Pause Button */}
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                title={isPlaying ? "Pause automated timeline" : "Resume automated timeline"}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  border: isLight
                    ? "1px solid rgba(0, 0, 0, 0.12)"
                    : "1px solid rgba(255, 255, 255, 0.12)",
                  background: isLight
                    ? "rgba(241, 245, 249, 0.8)"
                    : "rgba(255, 255, 255, 0.06)",
                  color: isLight ? "#0f172a" : "#f8fafc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {isPlaying ? <Pause size={15} /> : <Play size={15} style={{ marginLeft: "2px" }} />}
              </button>

              {/* Running Timecode */}
              <div
                className="carousel-timecode"
                style={{
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: isLight ? "#0f172a" : "#e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: isPlaying ? "#10b981" : "#f59e0b",
                    boxShadow: isPlaying ? "0 0 8px #10b981" : "none",
                  }}
                />
                <span style={{ color: activeIndustry.accent }}>{formattedTime}</span>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ opacity: 0.55 }}>{totalDurationStr}</span>
              </div>

              {/* Dur badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "0.78rem",
                  color: isLight ? "#64748b" : "#94a3b8",
                  fontWeight: 500,
                }}
              >
                <span>Dur</span>
                <span
                  className="carousel-dur-badge"
                  style={{
                    padding: "2px 7px",
                    borderRadius: "6px",
                    backgroundColor: isLight
                      ? "rgba(0, 0, 0, 0.06)"
                      : "rgba(255, 255, 255, 0.08)",
                    border: isLight
                      ? "1px solid rgba(0, 0, 0, 0.08)"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                    fontWeight: 700,
                    fontFamily: "monospace",
                    color: isLight ? "#0f172a" : "#f1f5f9",
                  }}
                >
                  3.8s
                </span>
                <span>sec</span>
              </div>
            </div>

            {/* Right: Prev & Next Manual Navigation */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: isLight ? "#64748b" : "#94a3b8",
                  marginRight: "6px",
                }}
              >
                Sector <strong style={{ color: isLight ? "#0f172a" : "#fff" }}>{activeIndex + 1}</strong> of {CAROUSEL_INDUSTRIES.length}
              </span>
              <button
                type="button"
                className="carousel-nav-btn"
                onClick={handlePrev}
                title="Previous industry"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  border: isLight
                    ? "1px solid rgba(0, 0, 0, 0.1)"
                    : "1px solid rgba(255, 255, 255, 0.12)",
                  background: isLight ? "#fff" : "rgba(255, 255, 255, 0.05)",
                  color: isLight ? "#1e293b" : "#f8fafc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                className="carousel-nav-btn"
                onClick={handleNext}
                title="Next industry"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  border: isLight
                    ? "1px solid rgba(0, 0, 0, 0.1)"
                    : "1px solid rgba(255, 255, 255, 0.12)",
                  background: isLight ? "#fff" : "rgba(255, 255, 255, 0.05)",
                  color: isLight ? "#1e293b" : "#f8fafc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Timeline Marks Bar (0s | 1s | 2s | 3s ... exactly like screenshot) */}
          <div
            className="carousel-timeline-track"
            style={{
              position: "relative",
              width: "100%",
              marginBottom: "1.75rem",
              padding: "4px 0",
            }}
          >
            {/* Background rail */}
            <div
              style={{
                width: "100%",
                height: "3px",
                borderRadius: "3px",
                backgroundColor: isLight
                  ? "rgba(0, 0, 0, 0.07)"
                  : "rgba(255, 255, 255, 0.08)",
                position: "relative",
                overflow: "hidden",
                marginBottom: "10px",
              }}
            >
              {/* Progress fill */}
              <div
                style={{
                  height: "100%",
                  width: `${((activeIndex + elapsedMs / CARD_DURATION_MS) / CAROUSEL_INDUSTRIES.length) * 100}%`,
                  backgroundColor: activeIndustry.accent,
                  boxShadow: `0 0 12px ${activeIndustry.accent}`,
                  transition: isPlaying ? "width 50ms linear" : "none",
                }}
              />
            </div>

            {/* Tick markers */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${CAROUSEL_INDUSTRIES.length}, 1fr)`,
                gap: "4px",
              }}
            >
              {CAROUSEL_INDUSTRIES.map((item, idx) => {
                const isItemActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectCard(idx)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: "4px 2px",
                      cursor: "pointer",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <div
                      style={{
                        width: isItemActive ? "16px" : "4px",
                        height: "4px",
                        borderRadius: "2px",
                        backgroundColor: isItemActive
                          ? item.accent
                          : isLight
                          ? "rgba(0, 0, 0, 0.18)"
                          : "rgba(255, 255, 255, 0.2)",
                        transition: "all 0.3s ease",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "0.72rem",
                        fontWeight: isItemActive ? 700 : 500,
                        color: isItemActive
                          ? item.accent
                          : isLight
                          ? "#94a3b8"
                          : "#64748b",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {item.timeMark}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ============================================================== */}
          {/* HORIZONTAL CAROUSEL CARDS TRACK (With Neon Glows)             */}
          {/* ============================================================== */}
          <div
            ref={carouselTrackRef}
            className="carousel-track-container"
            style={{
              display: "flex",
              gap: "1.25rem",
              overflowX: "auto",
              padding: "0.75rem 0.5rem 1.5rem 0.5rem",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              cursor: "grab",
            }}
          >
            {CAROUSEL_INDUSTRIES.map((industry, index) => {
              const isSelected = index === activeIndex;
              return (
                <button
                  key={industry.id}
                  type="button"
                  onClick={() => handleSelectCard(index)}
                  className={`carousel-card-item ${isSelected ? "is-active" : ""}`}
                  style={{
                    flex: "0 0 190px",
                    scrollSnapAlign: "center",
                    textAlign: "center",
                    padding: "1.75rem 1.25rem 1.5rem 1.25rem",
                    borderRadius: "22px",
                    background: isSelected
                      ? isLight
                        ? "rgba(255, 255, 255, 0.98)"
                        : "rgba(18, 25, 42, 0.95)"
                      : isLight
                      ? "rgba(248, 250, 252, 0.65)"
                      : "rgba(15, 23, 42, 0.45)",
                    border: isSelected
                      ? `2px solid ${industry.accent}`
                      : isLight
                      ? "1px solid rgba(226, 232, 240, 0.8)"
                      : "1px solid rgba(255, 255, 255, 0.06)",
                    boxShadow: isSelected
                      ? `0 14px 35px -8px rgba(${industry.accentRgb}, 0.35), inset 0 0 20px rgba(${industry.accentRgb}, 0.08)`
                      : "none",
                    transform: isSelected ? "translateY(-6px) scale(1.04)" : "scale(0.97)",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minHeight: "210px",
                    position: "relative",
                  }}
                >
                  {/* Active Card Glow Crown */}
                  {isSelected && (
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: "-1px",
                        left: "20%",
                        right: "20%",
                        height: "2px",
                        background: `linear-gradient(90deg, transparent, ${industry.accent}, transparent)`,
                        boxShadow: `0 0 10px ${industry.accent}`,
                      }}
                    />
                  )}

                  {/* Neon Glow Icon Pod */}
                  <div
                    style={{
                      width: "68px",
                      height: "68px",
                      borderRadius: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isLight
                        ? `radial-gradient(circle, rgba(${industry.accentRgb}, 0.15) 0%, rgba(${industry.accentRgb}, 0.03) 70%, transparent 100%)`
                        : `radial-gradient(circle, rgba(${industry.accentRgb}, 0.22) 0%, rgba(${industry.accentRgb}, 0.04) 70%, transparent 100%)`,
                      border: `1px solid rgba(${industry.accentRgb}, ${isSelected ? 0.4 : 0.15})`,
                      marginBottom: "1rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <IndustryNeonIcon type={industry.iconType} accent={industry.accent} />
                  </div>

                  {/* Industry Title */}
                  <div style={{ marginBottom: "0.75rem" }}>
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: isSelected
                          ? isLight
                            ? "#0f172a"
                            : "#ffffff"
                          : isLight
                          ? "#475569"
                          : "#94a3b8",
                        letterSpacing: "-0.01em",
                        margin: 0,
                        transition: "color 0.2s ease",
                      }}
                    >
                      {industry.name}
                    </h3>
                  </div>

                  {/* Underline neon accent strip (matching screenshot) */}
                  <div
                    style={{
                      width: isSelected ? "48px" : "24px",
                      height: "3px",
                      borderRadius: "3px",
                      backgroundColor: industry.accent,
                      boxShadow: isSelected
                        ? `0 0 10px ${industry.accent}`
                        : `0 0 4px ${industry.accent}66`,
                      transition: "all 0.3s ease",
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* ============================================================== */}
          {/* ANIMATED TYPEWRITER CONSOLE ("Typer" Component for Active Card) */}
          {/* ============================================================== */}
          <div
            className="carousel-typer-console"
            style={{
              marginTop: "1.25rem",
              borderRadius: "20px",
              padding: "1.5rem 1.75rem",
              background: isLight
                ? "rgba(241, 245, 249, 0.75)"
                : "rgba(15, 23, 42, 0.7)",
              border: isLight
                ? "1px solid rgba(203, 213, 225, 0.6)"
                : "1px solid rgba(255, 255, 255, 0.08)",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.8fr) minmax(220px, 1fr)",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            {/* Left Column: Live Typewriter details */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "0.6rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: activeIndustry.accent,
                    boxShadow: `0 0 10px ${activeIndustry.accent}`,
                  }}
                />
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: activeIndustry.accent,
                  }}
                >
                  LIVE TELEMETRY // {activeIndustry.name}
                </span>
              </div>

              {/* Headline with Typewriter */}
              <h4
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: isLight ? "#0f172a" : "#f8fafc",
                  marginBottom: "0.6rem",
                  minHeight: "1.6em",
                }}
              >
                <TypewriterConsole
                  key={`headline-${activeIndustry.id}`}
                  text={activeIndustry.headline}
                  speed={22}
                  accent={activeIndustry.accent}
                />
              </h4>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.6,
                  color: isLight ? "#475569" : "#94a3b8",
                  marginBottom: "1rem",
                }}
              >
                {activeIndustry.description}
              </p>

              {/* Architecture Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {activeIndustry.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: "6px",
                      background: isLight
                        ? "rgba(255, 255, 255, 0.9)"
                        : "rgba(255, 255, 255, 0.05)",
                      border: isLight
                        ? "1px solid rgba(203, 213, 225, 0.8)"
                        : "1px solid rgba(255, 255, 255, 0.08)",
                      color: isLight ? "#334155" : "#cbd5e1",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Verified Stat Pod + Link */}
            <div
              className="carousel-stat-card"
              style={{
                borderRadius: "16px",
                padding: "1.25rem 1.5rem",
                background: isLight
                  ? "rgba(255, 255, 255, 0.9)"
                  : "rgba(2, 6, 23, 0.6)",
                border: `1px solid rgba(${activeIndustry.accentRgb}, 0.25)`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1.25rem",
              }}
            >
              <div>
                <div
                  className="stat-label"
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: isLight ? "#64748b" : "#94a3b8",
                    marginBottom: "4px",
                  }}
                >
                  {activeIndustry.statLabel}
                </div>
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    fontFamily: "monospace",
                    letterSpacing: "-0.02em",
                    color: activeIndustry.accent,
                    textShadow: `0 0 15px rgba(${activeIndustry.accentRgb}, 0.4)`,
                  }}
                >
                  {activeIndustry.stat}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "0.75rem",
                  borderTop: isLight
                    ? "1px solid rgba(0, 0, 0, 0.06)"
                    : "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.78rem",
                    color: isLight ? "#475569" : "#cbd5e1",
                  }}
                >
                  <ShieldCheck size={14} color={activeIndustry.accent} />
                  <span>Production Tested</span>
                </div>

                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: activeIndustry.accent,
                    textDecoration: "none",
                  }}
                >
                  <span>Build Solution</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
