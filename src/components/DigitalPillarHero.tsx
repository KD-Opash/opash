"use client";

import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  ChevronDown
} from "lucide-react";
import { companyData } from "@/data/company";
import { WORLD_MAP_PATH } from "./worldMapPath";

// Lazy load the 3D scene without SSR to avoid WebGL hydration mismatch
const DigitalPillarScene = dynamic(() => import("./DigitalPillarScene"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(6, 11, 19, 0.4)",
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: "2px solid rgba(94, 192, 152, 0.2)",
          borderTopColor: "#5EC098",
          animation: "spin 1s linear infinite",
        }}
      />
    </div>
  ),
});

interface CountryNode {
  id: string;
  name: string;
  label: string;
  flag: string;
  x: number;
  y: number;
  country: string;
  city: string;
  timezone: string;
  ping: string;
  squads: string;
  isHQ?: boolean;
  cometDur: string;
  cometDelay: string;
  badgeOffset: { x: number; y: number };
}

const countryNodes: CountryNode[] = [
  {
    id: "india",
    name: "India (Global HQ)",
    label: "Surat HQ",
    flag: "🇮🇳",
    x: 702,
    y: 218,
    country: "India",
    city: "Surat, Gujarat",
    timezone: "IST (UTC+5:30)",
    ping: "2ms",
    squads: "50+ In-House Engineers",
    isHQ: true,
    cometDur: "2.4s",
    cometDelay: "0s",
    badgeOffset: { x: 0, y: 28 },
  },
  {
    id: "usa",
    name: "USA (Silicon Valley & NY)",
    label: "USA",
    flag: "🇺🇸",
    x: 228,
    y: 156,
    country: "United States",
    city: "San Francisco / New York",
    timezone: "PST / EST",
    ping: "118ms",
    squads: "9 Client Squads",
    cometDur: "2.6s",
    cometDelay: "0.4s",
    badgeOffset: { x: -8, y: -22 },
  },
  {
    id: "canada",
    name: "Canada",
    label: "Canada",
    flag: "🇨🇦",
    x: 206,
    y: 97,
    country: "Canada",
    city: "Toronto / Vancouver",
    timezone: "EST (UTC-5)",
    ping: "124ms",
    squads: "5 Client Squads",
    cometDur: "2.8s",
    cometDelay: "0.2s",
    badgeOffset: { x: 0, y: -22 },
  },
  {
    id: "uk",
    name: "UK (London)",
    label: "UK",
    flag: "🇬🇧",
    x: 493,
    y: 104,
    country: "United Kingdom",
    city: "London",
    timezone: "GMT (UTC+0)",
    ping: "78ms",
    squads: "7 Client Squads",
    cometDur: "2.2s",
    cometDelay: "0.5s",
    badgeOffset: { x: -26, y: -20 },
  },
  {
    id: "europe",
    name: "Europe",
    label: "Europe",
    flag: "🇪🇺",
    x: 528,
    y: 115,
    country: "Germany / Netherlands",
    city: "Berlin / Amsterdam",
    timezone: "CET (UTC+1)",
    ping: "84ms",
    squads: "6 Client Squads",
    cometDur: "2.3s",
    cometDelay: "0.8s",
    badgeOffset: { x: 26, y: -20 },
  },
  {
    id: "uae",
    name: "UAE (Dubai)",
    label: "UAE",
    flag: "🇦🇪",
    x: 651,
    y: 207,
    country: "United Arab Emirates",
    city: "Dubai",
    timezone: "GST (UTC+4)",
    ping: "38ms",
    squads: "8 Client Squads",
    cometDur: "1.9s",
    cometDelay: "0.1s",
    badgeOffset: { x: -32, y: 16 },
  },
  {
    id: "australia",
    name: "Australia",
    label: "Australia",
    flag: "🇦🇺",
    x: 872,
    y: 382,
    country: "Australia",
    city: "Sydney / Melbourne",
    timezone: "AEST (UTC+10)",
    ping: "92ms",
    squads: "4 Client Squads",
    cometDur: "2.9s",
    cometDelay: "0.9s",
    badgeOffset: { x: 0, y: 26 },
  },
  {
    id: "brazil",
    name: "Brazil",
    label: "Brazil",
    flag: "🇧🇷",
    x: 356,
    y: 340,
    country: "Brazil",
    city: "São Paulo",
    timezone: "BRT (UTC-3)",
    ping: "142ms",
    squads: "3 Client Squads",
    cometDur: "3.2s",
    cometDelay: "1.1s",
    badgeOffset: { x: 0, y: 26 },
  },
];

export default function DigitalPillarHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredNode, setHoveredNode] = useState<CountryNode | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollProgress(latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Framer Motion transforms based on scroll
  const opacityText = useTransform(scrollYProgress, [0, 0.45], [1, 0.2]);
  const scalePillar = useTransform(scrollYProgress, [0, 0.5], [1, 0.94]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, 35]);

  const hq = countryNodes.find((n) => n.isHQ)!;
  const targetNodes = countryNodes.filter((n) => !n.isHQ);

  return (
    <section
      ref={containerRef}
      className="digital-pillar-hero-container"
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#060b13",
        color: "#f8fafc",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: "2.25rem",
        paddingBottom: "3rem",
      }}
    >
      {/* ========================================================================= */}
      {/* 1. CINEMATIC BACKGROUND WORLD COUNTRY NETWORK (Integrated Map Backdrop)   */}
      {/* ========================================================================= */}
      <div
        className="hero-global-network-backdrop"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        {/* Ambient Brand Radial Glows matching Opash Logo */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "5%",
            right: "15%",
            width: "900px",
            height: "650px",
            background: "radial-gradient(circle at 60% 40%, rgba(71, 109, 154, 0.25) 0%, rgba(94, 192, 152, 0.14) 45%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Dedicated Left Scrim: Guarantees zero text collision with background */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "58%",
            background: "radial-gradient(ellipse at 15% 45%, rgba(6, 11, 19, 0.96) 0%, rgba(6, 11, 19, 0.82) 55%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Full-Scale SVG World Map with Optical Mask */}
        <svg
          viewBox="0 0 1000 500"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <defs>
            {/* Horizontal Fade Mask: Fades out map on left so text stays 100% clear */}
            <linearGradient id="heroMapMaskGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="38%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="62%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
            </linearGradient>

            <mask id="heroWorldMapMask">
              <rect x="0" y="0" width="1000" height="500" fill="url(#heroMapMaskGrad)" />
            </mask>

            {/* Outbound Arc Gradient: Opash Steel Blue to Emerald Mint */}
            <linearGradient id="heroOutboundArc" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#476D9A" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#5EC098" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#6289B8" stopOpacity="0.75" />
            </linearGradient>

            {/* Glowing comet filter */}
            <filter id="heroCometGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* HQ Beacon glow filter */}
            <filter id="heroHqBeaconGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Masked Map Elements (Continents + Arcs + Grid) */}
          <g mask="url(#heroWorldMapMask)">
            {/* Radar coordinate grid overlay */}
            <g stroke="rgba(71, 109, 154, 0.1)" strokeWidth="0.6">
              <line x1="0" y1="125" x2="1000" y2="125" strokeDasharray="3 6" />
              <line x1="0" y1="250" x2="1000" y2="250" strokeDasharray="4 6" />
              <line x1="0" y1="375" x2="1000" y2="375" strokeDasharray="3 6" />
              <line x1="250" y1="0" x2="250" y2="500" strokeDasharray="3 6" />
              <line x1="500" y1="0" x2="500" y2="500" strokeDasharray="3 6" />
              <line x1="750" y1="0" x2="750" y2="500" strokeDasharray="3 6" />
            </g>

            {/* Simplified World Continents Silhouette */}
            <path
              d={WORLD_MAP_PATH}
              fill="#0f1c2b"
              stroke="rgba(71, 109, 154, 0.32)"
              strokeWidth="0.8"
              strokeLinejoin="round"
            />

            {/* Glowing Delivery Arcs between Surat HQ and Worldwide Client Hubs */}
            <g className="hero-laser-arcs">
              {targetNodes.map((node) => {
                const midX = (hq.x + node.x) / 2;
                let midY = Math.min(hq.y, node.y) - Math.abs(hq.x - node.x) * 0.17;
                if (node.id === "australia") midY = Math.min(hq.y, node.y) + 32;
                else if (node.id === "uae") midY = Math.min(hq.y, node.y) - 18;
                else if (node.id === "brazil") midY = Math.min(hq.y, node.y) - 35;

                const pathData = `M ${hq.x} ${hq.y} Q ${midX} ${midY}, ${node.x} ${node.y}`;
                const pathId = `heroArc-${node.id}`;
                const isHovered = hoveredNode?.id === node.id;

                return (
                  <g key={node.id}>
                    {/* Invisible baseline path for animateMotion */}
                    <path id={pathId} d={pathData} stroke="none" fill="none" />

                    {/* Base Glow Laser Line */}
                    <path
                      d={pathData}
                      stroke="url(#heroOutboundArc)"
                      strokeWidth={isHovered ? 2.5 : 1.4}
                      fill="none"
                      strokeOpacity={isHovered ? 1 : 0.65}
                    />

                    {/* High-Speed Optical Dash Stream */}
                    <path
                      d={pathData}
                      stroke="#ffffff"
                      strokeWidth={1.2}
                      fill="none"
                      strokeDasharray="4 12"
                      strokeOpacity={0.55}
                      className="radiating-flight-arc"
                    />

                    {/* Outbound Packet Comet: Mint #5EC098 */}
                    <circle r={isHovered ? 4.5 : 3.5} fill="#5EC098" filter="url(#heroCometGlow)">
                      <animateMotion
                        dur={node.cometDur}
                        repeatCount="indefinite"
                        keyPoints="0;1"
                        keyTimes="0;1"
                      >
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                    </circle>

                    {/* Inbound Response Comet: Steel Blue #6289B8 */}
                    <circle r={isHovered ? 3.8 : 2.8} fill="#6289B8" filter="url(#heroCometGlow)">
                      <animateMotion
                        dur={node.cometDur}
                        begin={node.cometDelay}
                        repeatCount="indefinite"
                        keyPoints="1;0"
                        keyTimes="0;1"
                      >
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                    </circle>
                  </g>
                );
              })}
            </g>
          </g>

          {/* Surat India Global Engineering HQ Sonar Multi-Ring Beacon (Fully visible) */}
          <g transform={`translate(${hq.x}, ${hq.y})`}>
            {/* Sonar Ring 1 - Opash Emerald Mint */}
            <circle r={8} fill="none" stroke="#5EC098" strokeWidth={2.2} filter="url(#heroHqBeaconGlow)">
              <animate attributeName="r" values="8;38" dur="2.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0" dur="2.8s" repeatCount="indefinite" />
            </circle>

            {/* Sonar Ring 2 - Opash Steel Blue */}
            <circle r={8} fill="none" stroke="#476D9A" strokeWidth={1.8}>
              <animate attributeName="r" values="8;38" dur="2.8s" begin="0.9s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.85;0" dur="2.8s" begin="0.9s" repeatCount="indefinite" />
            </circle>

            {/* Base Core Rings */}
            <circle r={14} fill="rgba(94, 192, 152, 0.25)" filter="url(#heroHqBeaconGlow)" />
            <circle r={8} fill="#476D9A" stroke="#ffffff" strokeWidth={2} />
            <circle r={4} fill="#5EC098" />
            <circle r={1.5} fill="#ffffff" />
          </g>

          {/* Country Hub Pins with Flag Badges (Subtle on left to protect text, bright on right) */}
          <g className="hero-country-pins" style={{ pointerEvents: "auto" }}>
            {countryNodes.map((node) => {
              const isHQ = node.isHQ;
              const isHovered = hoveredNode?.id === node.id;
              // Dim the west hemisphere pins (x < 400) slightly unless hovered so they don't clash with text
              const isWestSide = node.x < 420;
              const baseOpacity = isHQ ? 1.0 : isWestSide ? 0.35 : 0.85;

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  style={{
                    cursor: "pointer",
                    opacity: isHovered ? 1.0 : baseOpacity,
                    transition: "opacity 0.25s ease",
                  }}
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Client Country Node Pin */}
                  {!isHQ && (
                    <>
                      <circle
                        r={isHovered ? 12 : 7}
                        fill="rgba(94, 192, 152, 0.2)"
                        className="animate-pulse"
                      />
                      <circle
                        r={isHovered ? 5.5 : 3.8}
                        fill="#476D9A"
                        stroke="#ffffff"
                        strokeWidth={1.6}
                      />
                      <circle r={1.6} fill="#5EC098" />
                    </>
                  )}

                  {/* Holographic Flag Badge Capsule */}
                  <g
                    transform={`translate(${node.badgeOffset.x}, ${node.badgeOffset.y})`}
                    style={{
                      transition: "transform 0.2s ease",
                      filter: isHovered
                        ? "drop-shadow(0 4px 12px rgba(94, 192, 152, 0.5))"
                        : "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.6))",
                    }}
                  >
                    <rect
                      x={-40}
                      y={-11}
                      width={80}
                      height={22}
                      rx={11}
                      fill={isHQ ? "rgba(16, 28, 42, 0.95)" : "rgba(10, 18, 28, 0.85)"}
                      stroke={isHQ ? "#5EC098" : isHovered ? "#5EC098" : "rgba(71, 109, 154, 0.35)"}
                      strokeWidth={isHQ || isHovered ? 1.5 : 1}
                    />
                    <text
                      x={0}
                      y={4}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize={10}
                      fontWeight={600}
                      fontFamily="system-ui, -apple-system, sans-serif"
                    >
                      {node.flag} {node.label}
                    </text>
                  </g>
                </g>
              );
            })}
          </g>
        </svg>

        {/* Bottom Fade Gradient into Content */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "160px",
            background: "linear-gradient(to top, #060b13 20%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* 2. LIVE GLOBAL CORRIDORS TELEMETRY BAR (Top Status)                       */}
      {/* ========================================================================= */}
      <div
        className="container-custom"
        style={{
          position: "relative",
          zIndex: 4,
          marginBottom: "1rem",
        }}
      >
        <div className="hero-telemetry-pill">
          <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: "#5EC098",
                boxShadow: "0 0 10px #5EC098",
                display: "inline-block",
              }}
            />
            <span style={{ color: "#ffffff", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              Active Corridors: Surat HQ
            </span>
          </div>

          <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>•</span>

          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
            <span style={{ color: "#f8fafc" }}>🇺🇸 USA (Silicon Valley/NY)</span>
            <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>•</span>
            <span style={{ color: "#f8fafc" }}>🇨🇦 Canada</span>
            <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>•</span>
            <span style={{ color: "#f8fafc" }}>🇬🇧 UK</span>
            <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>•</span>
            <span style={{ color: "#f8fafc" }}>🇪🇺 Europe</span>
            <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>•</span>
            <span style={{ color: "#f8fafc" }}>🇦🇪 UAE</span>
            <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>•</span>
            <span style={{ color: "#f8fafc" }}>🇦🇺 Australia</span>
          </div>

          <span
            style={{
              padding: "0.15rem 0.55rem",
              borderRadius: "9999px",
              backgroundColor: "rgba(94, 192, 152, 0.15)",
              color: "#5EC098",
              fontWeight: 700,
              fontSize: "0.72rem",
            }}
          >
            50+ In-House Engineers
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. HERO CONTENT GRID (Left: Protected Card, Right: 3D Pillar Canvas)      */}
      {/* ========================================================================= */}
      <div
        className="container-custom"
        style={{
          position: "relative",
          zIndex: 4,
          flex: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="pillar-split-grid">
          {/* Left Column: Protected Glass Card guaranteeing 100% Text Readability */}
          <motion.div
            style={{ opacity: opacityText }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="hero-typography-card">
              {/* Architectural Foundation Pill matching Opash Logo */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.38rem 0.95rem",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(94, 192, 152, 0.12)",
                  border: "1px solid rgba(94, 192, 152, 0.3)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#5EC098",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "0.85rem",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: "#5EC098",
                    boxShadow: "0 0 10px #5EC098",
                    display: "inline-block",
                  }}
                />
                <span>OPASH • Meaning: Pillar & Foundation</span>
              </div>

              {/* Main Headline */}
              <h1
                style={{
                  fontSize: "clamp(2.2rem, 4.8vw, 3.8rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  marginBottom: "0.95rem",
                  textShadow: "0 4px 24px rgba(0, 0, 0, 0.8)",
                }}
              >
                <span style={{ display: "block", color: "#f8fafc" }}>
                  Your Digital Pillar.
                </span>
                <span
                  style={{
                    display: "block",
                    background: "linear-gradient(135deg, #476D9A 0%, #5EC098 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Building Stronger Solutions. Together.
                </span>
              </h1>

              {/* Subtitle explaining the Pillar concept & Global reach */}
              <p
                style={{
                  fontSize: "clamp(0.95rem, 1.25vw, 1.08rem)",
                  lineHeight: 1.6,
                  color: "#cbd5e1",
                  maxWidth: "580px",
                  marginBottom: "1.35rem",
                }}
              >
                In architecture and engineering, <strong style={{ color: "#ffffff" }}>OPASH</strong> represents the unshakeable pillar — the foundation that bears the structural load so your business can reach global scale. From our Surat Command Center to enterprise partners across the US, UK, Europe, UAE, and Australia, we engineer custom software and cloud systems built to stand the test of time.
              </p>

              {/* Call to Actions matching Opash Logo Gradient */}
              <div className="pillar-cta-row" style={{ marginBottom: "1.35rem" }}>
                <Link
                  href="/get-a-quote"
                  className="pillar-primary-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.9rem 1.85rem",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #476D9A 0%, #5EC098 100%)",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 4px 25px rgba(94, 192, 152, 0.4)",
                    transition: "all 0.25s ease",
                  }}
                >
                  <Sparkles size={18} />
                  <span>Build on Our Foundation</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href={companyData.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.55rem",
                    padding: "0.9rem 1.65rem",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    border: "1px solid rgba(71, 109, 154, 0.35)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(71, 109, 154, 0.18)";
                    e.currentTarget.style.borderColor = "rgba(94, 192, 152, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.borderColor = "rgba(71, 109, 154, 0.35)";
                  }}
                >
                  <MessageSquare size={17} style={{ color: "#25D366" }} />
                  <span>WhatsApp Chief Architect</span>
                </a>
              </div>

              {/* 4 Pillars of OPASH Foundation Stats */}
              <div className="pillar-stats-grid" style={{ paddingTop: "1rem" }}>
                <div>
                  <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "#ffffff" }}>
                    {companyData.stats.developers}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#94a3b8", marginTop: 2 }}>In-House Developers</div>
                </div>
                <div>
                  <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "#5EC098" }}>
                    {companyData.stats.projectsDelivered}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#94a3b8", marginTop: 2 }}>Platforms Delivered</div>
                </div>
                <div>
                  <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "#ffffff" }}>
                    {companyData.stats.clientRetentionRate}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#94a3b8", marginTop: 2 }}>Client Retention</div>
                </div>
                <div>
                  <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "#5EC098" }}>
                    100%
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#94a3b8", marginTop: 2 }}>Code IP Ownership</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Digital Pillar Structure */}
          <motion.div
            className="pillar-canvas-wrapper"
            style={{
              scale: scalePillar,
              y: translateY,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Three.js Interactive Canvas with Opash Logo Materials */}
            <DigitalPillarScene scrollYProgress={scrollProgress} />

            {/* Interactive Pillar Instruction Tag */}
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(6, 11, 19, 0.8)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(71, 109, 154, 0.35)",
                borderRadius: "9999px",
                padding: "0.35rem 0.85rem",
                fontSize: "0.74rem",
                color: "#94d8bc",
                display: "flex",
                alignItems: "center",
                gap: "0.45rem",
                pointerEvents: "none",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#5EC098",
                  animation: "ping 2s infinite",
                }}
              />
              <span>Interactive 3D Structure • Move cursor to inspect pillar</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <div
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: 4,
          paddingTop: "1rem",
        }}
      >
        <span
          style={{
            fontSize: "0.74rem",
            color: "#64748b",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.3rem",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          <span>Scroll to explore verified recognitions & services</span>
          <ChevronDown size={14} style={{ color: "#5EC098" }} />
        </span>
      </div>
    </section>
  );
}
