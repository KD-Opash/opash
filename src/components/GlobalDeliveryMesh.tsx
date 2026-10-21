"use client";

import React, { useState, useEffect, useId } from "react";
import Link from "next/link";
import {
  Radio,
  Wifi,
  ShieldCheck,
  Zap,
  ArrowRight,
  Clock,
  Activity,
  Layers,
  Sparkles,
  Server,
  Lock,
  ChevronRight,
  MapPin,
  ExternalLink,
  RotateCcw,
  Compass,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import worldDotsData from "@/data/worldDots.json";

export interface GlobalHub {
  id: string;
  country: string;
  flag: string;
  category: string;
  headline: string;
  cities: string;
  deployments: string;
  latency: string;
  latencyMs: number;
  timeZone: string;
  timeZoneLabel: string;
  region: "americas" | "europe" | "mena" | "apac";
  squadFocus: string;
  overlap: string;
  overlapHours: number;
  accent: string;
  accentRgb: string;
  x: number; // SVG viewBox coordinates (1000 width)
  y: number; // SVG viewBox coordinates (500 height)
  curveControl: { cx: number; cy: number };
  labelOffset: { x: number; y: number };
  tagWidth: number;
  isHQ?: boolean;
}

export const GLOBAL_HUBS: GlobalHub[] = [
  {
    id: "india",
    country: "India (HQ)",
    flag: "🇮🇳",
    category: "R&D Core",
    headline: "50+ Devs Active",
    cities: "Surat & Nationwide",
    deployments: "Global Command Center",
    latency: "< 5ms Core",
    latencyMs: 4,
    timeZone: "Asia/Kolkata",
    timeZoneLabel: "IST (UTC+5:30)",
    region: "apac",
    squadFocus: "Core Architecture, Full-Stack SaaS & Generative AI Squads",
    overlap: "HQ Epicenter",
    overlapHours: 9,
    accent: "#10b981",
    accentRgb: "16, 185, 129",
    x: 702,
    y: 228,
    curveControl: { cx: 702, cy: 228 },
    labelOffset: { x: 0, y: 0 },
    tagWidth: 145,
    isHQ: true,
  },
  {
    id: "usa",
    country: "United States",
    flag: "🇺🇸",
    category: "Enterprise",
    headline: "25+ Deployments",
    cities: "New York, California, Texas",
    deployments: "25+ Enterprise Systems",
    latency: "118ms Edge",
    latencyMs: 118,
    timeZone: "America/New_York",
    timeZoneLabel: "EST / PST (UTC-5)",
    region: "americas",
    squadFocus: "Next.js Multi-Tenant SaaS, Cloud Infrastructure & GenAI",
    overlap: "4.5h Sync Daily",
    overlapHours: 4.5,
    accent: "#0ea5e9",
    accentRgb: "14, 165, 233",
    x: 294,
    y: 175,
    curveControl: { cx: 498, cy: 40 },
    labelOffset: { x: 10, y: 8 },
    tagWidth: 148,
  },
  {
    id: "uk",
    country: "United Kingdom",
    flag: "🇬🇧",
    category: "European",
    headline: "15+ Deployments",
    cities: "London & Ecosystems",
    deployments: "15+ Production Apps",
    latency: "86ms Edge",
    latencyMs: 86,
    timeZone: "Europe/London",
    timeZoneLabel: "GMT / BST (UTC+0)",
    region: "europe",
    squadFocus: "FinTech Compliance, MEAN/MERN Stack & Web Platforms",
    overlap: "5.5h Sync Daily",
    overlapHours: 5.5,
    accent: "#38bdf8",
    accentRgb: "56, 189, 248",
    x: 485,
    y: 110,
    curveControl: { cx: 600, cy: 75 },
    labelOffset: { x: -160, y: -28 },
    tagWidth: 152,
  },
  {
    id: "uae",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    category: "MENA",
    headline: "10+ Projects",
    cities: "Dubai & Abu Dhabi",
    deployments: "10+ Enterprise Hubs",
    latency: "28ms Edge",
    latencyMs: 28,
    timeZone: "Asia/Dubai",
    timeZoneLabel: "GST (UTC+4)",
    region: "mena",
    squadFocus: "High-Traffic Portals, Real Estate CRM & Mobile Apps",
    overlap: "6.5h Sync Daily",
    overlapHours: 6.5,
    accent: "#f59e0b",
    accentRgb: "245, 158, 11",
    x: 654,
    y: 214,
    curveControl: { cx: 678, cy: 175 },
    labelOffset: { x: 12, y: -26 },
    tagWidth: 182,
  },
  {
    id: "canada",
    country: "Canada",
    flag: "🇨🇦",
    category: "Scaleup",
    headline: "12+ Projects",
    cities: "Toronto & Vancouver",
    deployments: "12+ Scaled Platforms",
    latency: "125ms Edge",
    latencyMs: 125,
    timeZone: "America/Toronto",
    timeZoneLabel: "EST (UTC-5)",
    region: "americas",
    squadFocus: "Telemedicine, HIPAA Cloud & High-Performance UI",
    overlap: "4.5h Sync Daily",
    overlapHours: 4.5,
    accent: "#f43f5e",
    accentRgb: "244, 63, 94",
    x: 279,
    y: 135,
    curveControl: { cx: 490, cy: 25 },
    labelOffset: { x: -125, y: -28 },
    tagWidth: 120,
  },
  {
    id: "europe",
    country: "Europe (EU)",
    flag: "🇪🇺",
    category: "Regulated",
    headline: "14+ Projects",
    cities: "Frankfurt, Amsterdam, Paris",
    deployments: "14+ Regulated Deployments",
    latency: "92ms Edge",
    latencyMs: 92,
    timeZone: "Europe/Berlin",
    timeZoneLabel: "CET (UTC+1)",
    region: "europe",
    squadFocus: "GDPR SaaS, Enterprise Integrations & Microservices",
    overlap: "5h Sync Daily",
    overlapHours: 5,
    accent: "#a855f7",
    accentRgb: "168, 85, 247",
    x: 524,
    y: 135,
    curveControl: { cx: 610, cy: 85 },
    labelOffset: { x: 12, y: 6 },
    tagWidth: 136,
  },
  {
    id: "australia",
    country: "Australia",
    flag: "🇦🇺",
    category: "Oceania",
    headline: "8+ Projects",
    cities: "Sydney & Melbourne",
    deployments: "8+ Cloud Architectures",
    latency: "135ms Edge",
    latencyMs: 135,
    timeZone: "Australia/Sydney",
    timeZoneLabel: "AEST (UTC+10)",
    region: "apac",
    squadFocus: "E-Commerce Engines, Logistics APIs & Serverless",
    overlap: "4h Sync Daily",
    overlapHours: 4,
    accent: "#eab308",
    accentRgb: "234, 179, 8",
    x: 885,
    y: 415,
    curveControl: { cx: 835, cy: 370 },
    labelOffset: { x: -135, y: -12 },
    tagWidth: 130,
  },
  {
    id: "brazil",
    country: "Brazil",
    flag: "🇧🇷",
    category: "LATAM",
    headline: "6+ Projects",
    cities: "São Paulo & Rio",
    deployments: "6+ Digital Systems",
    latency: "185ms Edge",
    latencyMs: 185,
    timeZone: "America/Sao_Paulo",
    timeZoneLabel: "BRT (UTC-3)",
    region: "americas",
    squadFocus: "AgriTech Platforms, Multi-Currency Billing & AWS",
    overlap: "3.5h Sync Daily",
    overlapHours: 3.5,
    accent: "#22c55e",
    accentRgb: "34, 197, 94",
    x: 370,
    y: 388,
    curveControl: { cx: 536, cy: 410 },
    labelOffset: { x: 12, y: -12 },
    tagWidth: 114,
  },
];

export function GlobalDeliveryMesh() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const uniqueId = useId().replace(/:/g, "");

  const [activeHubId, setActiveHubId] = useState<string>("usa");
  const [regionFilter, setRegionFilter] = useState<string>("all");
  const [isolateRoute, setIsolateRoute] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<Record<string, string>>({});
  const [hoveredHubId, setHoveredHubId] = useState<string | null>(null);

  const activeHub = GLOBAL_HUBS.find((h) => h.id === activeHubId) || GLOBAL_HUBS[1];
  const hqHub = GLOBAL_HUBS[0]; // Surat HQ

  // Live Clocks
  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      const times: Record<string, string> = {};
      GLOBAL_HUBS.forEach((hub) => {
        try {
          times[hub.id] = new Intl.DateTimeFormat("en-US", {
            timeZone: hub.timeZone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          }).format(now);
        } catch {
          times[hub.id] = "--:--";
        }
      });
      setCurrentTime(times);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSelectRoute = (hubId: string) => {
    setActiveHubId(hubId);
    setIsolateRoute(true);
  };

  const showAllRoutes = () => {
    setIsolateRoute(false);
  };

  const filteredHubs = GLOBAL_HUBS.filter((h) => {
    if (regionFilter === "all") return true;
    return h.region === regionFilter;
  });

  const destinationHubs = GLOBAL_HUBS.filter((h) => !h.isHQ);

  return (
    <section
      id="global-network"
      className="global-delivery-mesh-section"
      aria-label="Delivering Software Worldwide Across 8 Key Global Markets"
      style={{
        position: "relative",
        padding: "6.5rem 0 5.5rem 0",
        overflow: "hidden",
        backgroundColor: "transparent",
        color: isLight ? "#0f172a" : "#f8fafc",
        transition: "color 0.4s ease",
      }}
    >
      {/* Top & Bottom Seamless Feather Melts */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "140px",
          background: isLight
            ? "linear-gradient(180deg, #f8fafc 0%, transparent 100%)"
            : "linear-gradient(180deg, #01040a 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "140px",
          background: isLight
            ? "linear-gradient(0deg, #f8fafc 0%, transparent 100%)"
            : "linear-gradient(0deg, #01040a 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      {/* Background Holographic Atmospheric Radiance */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1200px",
          height: "600px",
          borderRadius: "50%",
          background: isLight
            ? "radial-gradient(ellipse at center, rgba(14, 165, 233, 0.08) 0%, rgba(16, 185, 129, 0.04) 50%, transparent 70%)"
            : "radial-gradient(ellipse at center, rgba(14, 165, 233, 0.12) 0%, rgba(16, 185, 129, 0.06) 50%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* ========================================================================= */}
        {/* 1. SECTION HEADLINE & REGION FILTER BAR                                   */}
        {/* ========================================================================= */}
        <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 2.5rem auto" }}>
          {/* Active Beacon Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem",
              borderRadius: "9999px",
              background: isLight ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0.15)",
              border: `1px solid ${isLight ? "rgba(16, 185, 129, 0.3)" : "rgba(16, 185, 129, 0.45)"}`,
              color: isLight ? "#059669" : "#10b981",
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "1.2rem",
            }}
          >
            <Radio size={14} className="animate-pulse" />
            <span>LIVE TRAJECTORY // SURAT HQ ACTIVE BEACON [21.17° N, 72.83° E]</span>
          </div>

          <h2 className="heading-section" style={{ margin: "0 0 1rem 0" }}>
            Delivering Software Worldwide Across{" "}
            <span className="opash-hero-gradient-text">
              8 Key Global Markets
            </span>
          </h2>

          <p className="subhead-lead" style={{ margin: "0 auto 1.8rem auto", maxWidth: "680px" }}>
            Opash Software collaborates seamlessly across international timezones with founders, venture-backed startups, and enterprise product directors.
          </p>

          {/* Regional Quick Filter Tabs */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.4rem",
              padding: "0.35rem 0.5rem",
              borderRadius: "14px",
              background: isLight ? "#e2e8f0" : "rgba(15, 23, 42, 0.75)",
              border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.08)"}`,
            }}
          >
            {[
              { id: "all", label: "All 8 Markets" },
              { id: "americas", label: "Americas (USA, CA, BR)" },
              { id: "europe", label: "Europe & UK" },
              { id: "mena", label: "MENA (UAE)" },
              { id: "apac", label: "APAC & Oceania (IN, AU)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setRegionFilter(tab.id)}
                style={{
                  padding: "0.35rem 0.9rem",
                  borderRadius: "8px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  background:
                    regionFilter === tab.id
                      ? isLight
                        ? "#ffffff"
                        : "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)"
                      : "transparent",
                  color:
                    regionFilter === tab.id
                      ? isLight
                        ? "#0ea5e9"
                        : "#ffffff"
                      : isLight
                      ? "#64748b"
                      : "#94a3b8",
                  boxShadow:
                    regionFilter === tab.id
                      ? isLight
                        ? "0 2px 8px rgba(0,0,0,0.06)"
                        : "0 4px 14px rgba(14, 165, 233, 0.35)"
                      : "none",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. INTERACTIVE DOT-MATRIX CYBER WORLD MAP (FULL 100% VISIBILITY)          */}
        {/* ========================================================================= */}
        <div
          style={{
            position: "relative",
            borderRadius: "24px",
            background: isLight
              ? "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)"
              : "linear-gradient(180deg, rgba(8, 15, 30, 0.96) 0%, rgba(4, 9, 20, 0.99) 100%)",
            border: `1px solid ${
              isLight ? "rgba(14, 165, 233, 0.3)" : `rgba(${activeHub.accentRgb}, 0.35)`
            }`,
            boxShadow: isLight
              ? "0 20px 45px -15px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.02)"
              : `0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(${activeHub.accentRgb}, 0.12)`,
            overflow: "hidden",
            marginBottom: "2rem",
            transition: "border-color 0.4s ease, box-shadow 0.4s ease",
          }}
        >
          {/* Top Control Bar of Map Canvas */}
          <div
            style={{
              padding: "1rem 1.6rem",
              background: isLight ? "#f8fafc" : "rgba(15, 23, 42, 0.8)",
              borderBottom: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 8px #10b981",
                }}
              />
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: isLight ? "#334155" : "#cbd5e1",
                }}
              >
                GLOBAL TELEMETRY MATRIX // 8 ACTIVE HUBS
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <button
                onClick={showAllRoutes}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.35rem 0.8rem",
                  borderRadius: "8px",
                  fontSize: "0.76rem",
                  fontWeight: 700,
                  border: `1px solid ${!isolateRoute ? "#0ea5e9" : isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.12)"}`,
                  background: !isolateRoute
                    ? isLight
                      ? "rgba(14, 165, 233, 0.12)"
                      : "rgba(14, 165, 233, 0.25)"
                    : isLight
                    ? "#ffffff"
                    : "rgba(15, 23, 42, 0.7)",
                  color: !isolateRoute ? "#0ea5e9" : isLight ? "#64748b" : "#94a3b8",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <Globe size={13} color="#0ea5e9" />
                <span>Show All 8 Trajectories</span>
              </button>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.74rem",
                  fontWeight: 600,
                  color: isLight ? "#059669" : "#34d399",
                  padding: "0.35rem 0.65rem",
                  borderRadius: "6px",
                  background: isLight ? "rgba(16, 185, 129, 0.08)" : "rgba(16, 185, 129, 0.12)",
                }}
              >
                <ShieldCheck size={13} />
                <span>TLS 1.3 WireGuard Mesh</span>
              </div>
            </div>
          </div>

          {/* SVG Map Canvas Viewport */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1000 / 500",
              minHeight: "420px",
              padding: "1rem",
            }}
          >
            <svg
              viewBox="0 0 1000 500"
              style={{ width: "100%", height: "100%", display: "block" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* 1. Neon Glow Filter for Arcs & Reticles */}
                <filter id={`arc-glow-${uniqueId}`} x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* 2. Intense Core Glow Filter */}
                <filter id={`reticle-glow-${uniqueId}`} x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* 3. Rotating Radar Sweep Gradient */}
                <linearGradient id={`radar-wedge-grad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="80%">
                  <stop offset="0%" stopColor="#00ffd1" stopOpacity={isLight ? "0.35" : "0.5"} />
                  <stop offset="50%" stopColor="#10b981" stopOpacity={isLight ? "0.15" : "0.22"} />
                  <stop offset="100%" stopColor="#00ffd1" stopOpacity="0" />
                </linearGradient>

                {/* 4. Fine Cyber Matrix Grid Pattern */}
                <pattern id={`cyber-matrix-${uniqueId}`} width="50" height="50" patternUnits="userSpaceOnUse">
                  <path
                    d="M 50 0 L 0 0 0 50"
                    fill="none"
                    stroke={isLight ? "rgba(15, 23, 42, 0.04)" : "rgba(0, 255, 209, 0.04)"}
                    strokeWidth="1"
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r="1"
                    fill={isLight ? "rgba(15, 23, 42, 0.15)" : "rgba(0, 255, 209, 0.25)"}
                  />
                </pattern>

                {/* 5. Trajectory Linear Gradients from Surat HQ to Destination Hubs */}
                {destinationHubs.map((hub) => (
                  <linearGradient
                    key={hub.id}
                    id={`route-grad-${hub.id}-${uniqueId}`}
                    x1={hqHub.x}
                    y1={hqHub.y}
                    x2={hub.x}
                    y2={hub.y}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.95" />
                    <stop offset="65%" stopColor={hub.accent} stopOpacity="1" />
                    <stop offset="100%" stopColor={hub.accent} stopOpacity="0.85" />
                  </linearGradient>
                ))}
              </defs>

              {/* ------------------------------------------------------------- */}
              {/* LAYER 0: Background Holographic Cyber Matrix                  */}
              {/* ------------------------------------------------------------- */}
              <rect width="1000" height="500" fill={`url(#cyber-matrix-${uniqueId})`} />

              {/* HUD Corner Precision Reticles */}
              <g stroke={isLight ? "rgba(14, 165, 233, 0.5)" : "rgba(0, 255, 209, 0.65)"} strokeWidth="1.75" fill="none">
                {/* Top-Left Bracket */}
                <path d="M 22 42 L 22 22 L 42 22" />
                <circle cx="22" cy="22" r="1.5" fill="#00ffd1" />
                {/* Top-Right Bracket */}
                <path d="M 978 42 L 978 22 L 958 22" />
                <circle cx="978" cy="22" r="1.5" fill="#00ffd1" />
                {/* Bottom-Left Bracket */}
                <path d="M 22 458 L 22 478 L 42 478" />
                <circle cx="22" cy="478" r="1.5" fill="#00ffd1" />
                {/* Bottom-Right Bracket */}
                <path d="M 978 458 L 978 478 L 958 478" />
                <circle cx="978" cy="478" r="1.5" fill="#00ffd1" />
              </g>

              {/* HUD Coordinate & Telemetry Header Readouts */}
              <g fontSize="8.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">
                <text x="50" y="32" fill={isLight ? "#0284c7" : "#00ffd1"}>
                  SYS.STATUS: OPERATIONAL // PROTOCOL: WG-MESH-01 // LATENCY ENGINE: ACTIVE
                </text>
                <text x="950" y="32" fill={isLight ? "#64748b" : "#38bdf8"} textAnchor="end">
                  PACKET INTEGRITY: 100% // LOSS: 0.00% // 24/7 ENCRYPTED
                </text>
                <text x="50" y="474" fill={isLight ? "#64748b" : "#64748b"}>
                  SURAT HQ: 21.1702° N, 72.8311° E // R&amp;D EPICENTER
                </text>
                <text x="950" y="474" fill={isLight ? "#0f766e" : "#10b981"} textAnchor="end">
                  TOTAL DISTRIBUTED CAPACITY: 50+ SENIOR SPECIALISTS
                </text>
              </g>

              {/* Coordinate Grid Lines */}
              <g stroke={isLight ? "rgba(15, 23, 42, 0.06)" : "rgba(255, 255, 255, 0.05)"} strokeWidth="1">
                {/* Latitudes */}
                <line x1="0" y1="125" x2="1000" y2="125" strokeDasharray="4 6" />
                <line x1="0" y1="250" x2="1000" y2="250" />
                <line x1="0" y1="375" x2="1000" y2="375" strokeDasharray="4 6" />
                {/* Longitudes */}
                <line x1="250" y1="0" x2="250" y2="500" strokeDasharray="4 6" />
                <line x1="500" y1="0" x2="500" y2="500" />
                <line x1="750" y1="0" x2="750" y2="500" strokeDasharray="4 6" />
              </g>

              {/* Equator & Meridian Telemetry Labels */}
              <text x="14" y="246" fill={isLight ? "#94a3b8" : "#475569"} fontSize="8" fontWeight="700" fontFamily="monospace">
                0° EQUATOR
              </text>
              <text x="496" y="16" fill={isLight ? "#94a3b8" : "#475569"} fontSize="8" fontWeight="700" fontFamily="monospace" textAnchor="end">
                0° GMT MERIDIAN
              </text>

              {/* ------------------------------------------------------------- */}
              {/* LAYER 1: SURAT HQ RADAR TELEMETRY RANGE RINGS & SCANNER       */}
              {/* ------------------------------------------------------------- */}
              <g>
                {/* Concentric Telemetry Radar Range Rings centered at Surat HQ */}
                {[
                  { r: 90, label: "2,500 KM" },
                  { r: 195, label: "5,000 KM" },
                  { r: 320, label: "8,500 KM" },
                  { r: 470, label: "12,000 KM" },
                ].map((ring, idx) => (
                  <g key={idx}>
                    <circle
                      cx={hqHub.x}
                      cy={hqHub.y}
                      r={ring.r}
                      fill="none"
                      stroke={isLight ? "rgba(16, 185, 129, 0.22)" : "rgba(0, 255, 209, 0.2)"}
                      strokeWidth="1"
                      strokeDasharray="4 7"
                    />
                    <text
                      x={hqHub.x + ring.r + 4}
                      y={hqHub.y - 4}
                      fill={isLight ? "#059669" : "#10b981"}
                      fontSize="7.5"
                      fontFamily="monospace"
                      fontWeight="700"
                      opacity="0.75"
                    >
                      {ring.label}
                    </text>
                  </g>
                ))}

                {/* Azimuth Crosshair Rays from Surat HQ */}
                <g stroke={isLight ? "rgba(16, 185, 129, 0.15)" : "rgba(0, 255, 209, 0.15)"} strokeWidth="1" strokeDasharray="2 4">
                  <line x1={hqHub.x - 470} y1={hqHub.y} x2={hqHub.x + 470} y2={hqHub.y} />
                  <line x1={hqHub.x} y1={hqHub.y - 470} x2={hqHub.x} y2={hqHub.y + 470} />
                </g>

                {/* 360° Rotating Cyber Radar Sweep Beam */}
                <g>
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from={`0 ${hqHub.x} ${hqHub.y}`}
                      to={`360 ${hqHub.x} ${hqHub.y}`}
                      dur="8.5s"
                      repeatCount="indefinite"
                    />
                    {/* Sweeping Conic Wedge (approx 36° sector) */}
                    <path
                      d={`M ${hqHub.x} ${hqHub.y} L ${hqHub.x + 470} ${hqHub.y} A 470 470 0 0 0 ${hqHub.x + 440} ${hqHub.y - 160} Z`}
                      fill={`url(#radar-wedge-grad-${uniqueId})`}
                    />
                    {/* Leading Scanner Ray with Neon Edge */}
                    <line
                      x1={hqHub.x}
                      y1={hqHub.y}
                      x2={hqHub.x + 470}
                      y2={hqHub.y}
                      stroke="#00ffd1"
                      strokeWidth="1.8"
                      strokeOpacity="0.85"
                      filter={`url(#reticle-glow-${uniqueId})`}
                    />
                  </g>
                </g>
              </g>

              {/* ------------------------------------------------------------- */}
              {/* LAYER 2: BIOLUMINESCENT CONTINENT NODE MATRIX                 */}
              {/* ------------------------------------------------------------- */}
              <g>
                {(worldDotsData as [number, number][]).map(([px, py], idx) => {
                  const cx = (px / 100) * 1000;
                  const cy = (py / 100) * 500;

                  // Identify tactical cluster nodes near major delivery regions
                  const isNearHQ = Math.hypot(cx - hqHub.x, cy - hqHub.y) < 110;
                  const isStrategicNode = idx % 19 === 0;

                  return (
                    <circle
                      key={idx}
                      cx={cx}
                      cy={cy}
                      r={isNearHQ ? 2.5 : isStrategicNode ? 2.3 : 1.9}
                      fill={
                        isNearHQ
                          ? "#00ffd1"
                          : isStrategicNode
                          ? isLight
                            ? "#0ea5e9"
                            : "#38bdf8"
                          : isLight
                          ? "#64748b"
                          : "#38bdf8"
                      }
                      opacity={
                        isNearHQ
                          ? 0.85
                          : isStrategicNode
                          ? isLight
                            ? 0.65
                            : 0.7
                          : isLight
                          ? 0.35
                          : 0.38
                      }
                    />
                  );
                })}

                {/* Tactical Blinking Sensor Nodes (Pulsing Bioluminescent Beacons) */}
                {[
                  { x: 310, y: 165 }, // US East
                  { x: 260, y: 190 }, // US West
                  { x: 505, y: 120 }, // Western Europe
                  { x: 540, y: 145 }, // Central Europe
                  { x: 670, y: 220 }, // Middle East
                  { x: 730, y: 250 }, // South Asia
                  { x: 800, y: 290 }, // Southeast Asia
                  { x: 875, y: 400 }, // Australia
                  { x: 370, y: 360 }, // South America
                ].map((beacon, bIdx) => (
                  <circle
                    key={`sensor-${bIdx}`}
                    cx={beacon.x}
                    cy={beacon.y}
                    r="2.5"
                    fill="#00ffd1"
                    filter={`url(#reticle-glow-${uniqueId})`}
                  >
                    <animate
                      attributeName="opacity"
                      values="0.2;1;0.2"
                      dur={`${2.2 + (bIdx % 3) * 0.7}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="r"
                      values="1.8;3.4;1.8"
                      dur={`${2.2 + (bIdx % 3) * 0.7}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </g>

              {/* ------------------------------------------------------------- */}
              {/* LAYER 3: FLIGHT TRAJECTORY ARCS & DUAL PHOTON COMETS          */}
              {/* ------------------------------------------------------------- */}
              {destinationHubs.map((hub) => {
                const isSelected = hub.id === activeHubId;
                const isHighlighted = isSelected || !isolateRoute;
                const pathD = `M ${hqHub.x} ${hqHub.y} Q ${hub.curveControl.cx} ${hub.curveControl.cy} ${hub.x} ${hub.y}`;
                const cometDuration = `${Math.max(2.2, (hub.latencyMs / 40) * 0.9)}s`;

                return (
                  <g key={hub.id}>
                    {/* Background Laser Glow Conduit */}
                    {isHighlighted && (
                      <path
                        d={pathD}
                        fill="none"
                        stroke={hub.accent}
                        strokeWidth={isSelected ? "5" : "3"}
                        opacity={isSelected ? "0.45" : "0.18"}
                        filter={`url(#arc-glow-${uniqueId})`}
                      />
                    )}

                    {/* Main Cyber Trajectory Flow Line */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke={
                        isHighlighted
                          ? `url(#route-grad-${hub.id}-${uniqueId})`
                          : isLight
                          ? "rgba(148, 163, 184, 0.15)"
                          : "rgba(255, 255, 255, 0.08)"
                      }
                      strokeWidth={isSelected ? "2.8" : isHighlighted ? "1.8" : "1"}
                      strokeDasharray={isSelected ? "8 4" : "5 5"}
                      opacity={isSelected ? 1 : isHighlighted ? 0.85 : 0.25}
                      style={{ transition: "stroke-width 0.3s ease, opacity 0.3s ease" }}
                    />

                    {/* DUAL PHOTON PACKET 1 (Lead White Comet) */}
                    {isHighlighted && (
                      <circle r={isSelected ? "4.5" : "3.2"} fill="#ffffff" filter={`url(#arc-glow-${uniqueId})`}>
                        <animateMotion
                          dur={cometDuration}
                          repeatCount="indefinite"
                          path={pathD}
                        />
                      </circle>
                    )}

                    {/* DUAL PHOTON PACKET 2 (Trailing Neon Comet - 50% Cycle Offset) */}
                    {isHighlighted && (
                      <circle
                        r={isSelected ? "3.5" : "2.4"}
                        fill={hub.accent}
                        filter={`url(#reticle-glow-${uniqueId})`}
                      >
                        <animateMotion
                          dur={cometDuration}
                          begin={`-${Math.max(1.1, (hub.latencyMs / 80) * 0.9)}s`}
                          repeatCount="indefinite"
                          path={pathD}
                        />
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* ------------------------------------------------------------- */}
              {/* LAYER 4: DESTINATION RETICLE PINS & GLASSMORPHIC HUD TAGS     */}
              {/* ------------------------------------------------------------- */}
              {destinationHubs.map((hub) => {
                const isSelected = hub.id === activeHubId;
                const isHovered = hub.id === hoveredHubId;

                return (
                  <g
                    key={hub.id}
                    onClick={() => handleSelectRoute(hub.id)}
                    onMouseEnter={() => setHoveredHubId(hub.id)}
                    onMouseLeave={() => setHoveredHubId(null)}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Rotating Targeting Reticle on Selected Hub */}
                    {isSelected && (
                      <>
                        {/* Outer Rotating Dash Bracket Ring */}
                        <circle
                          cx={hub.x}
                          cy={hub.y}
                          r="19"
                          fill="none"
                          stroke={hub.accent}
                          strokeWidth="1.5"
                          strokeDasharray="6 4"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from={`0 ${hub.x} ${hub.y}`}
                            to={`360 ${hub.x} ${hub.y}`}
                            dur="5s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* Outward Sonar Pulse Ring */}
                        <circle
                          cx={hub.x}
                          cy={hub.y}
                          r="10"
                          fill="none"
                          stroke={hub.accent}
                          strokeWidth="1.5"
                          opacity="0.8"
                        >
                          <animate
                            attributeName="r"
                            from="8"
                            to="26"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            from="0.9"
                            to="0"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      </>
                    )}

                    {/* Hub Anchor Reticle Pin */}
                    <circle
                      cx={hub.x}
                      cy={hub.y}
                      r={isSelected ? "6" : "4.5"}
                      fill={hub.accent}
                      stroke="#ffffff"
                      strokeWidth={isSelected ? "2" : "1.2"}
                      filter={`url(#reticle-glow-${uniqueId})`}
                    />

                    {/* Floating Aeronautical Telemetry Tag */}
                    <g
                      transform={`translate(${hub.x + hub.labelOffset.x}, ${hub.y + hub.labelOffset.y})`}
                      style={{ transition: "transform 0.2s ease" }}
                    >
                      {/* Background Pill Frame */}
                      <rect
                        x="0"
                        y="0"
                        width={hub.tagWidth}
                        height="24"
                        rx="7"
                        fill={
                          isSelected
                            ? isLight
                              ? "#ffffff"
                              : "#081326"
                            : isLight
                            ? "rgba(255, 255, 255, 0.94)"
                            : "rgba(8, 14, 28, 0.88)"
                        }
                        stroke={
                          isSelected
                            ? hub.accent
                            : isHovered
                            ? "#38bdf8"
                            : isLight
                            ? "#cbd5e1"
                            : "rgba(255, 255, 255, 0.16)"
                        }
                        strokeWidth={isSelected ? "1.8" : "1"}
                        style={{
                          filter: isSelected
                            ? `drop-shadow(0 4px 14px rgba(${hub.accentRgb}, 0.5))`
                            : "drop-shadow(0 2px 6px rgba(0,0,0,0.2))",
                        }}
                      />

                      {/* Status Indicator Dot */}
                      <circle
                        cx="10"
                        cy="12"
                        r="3"
                        fill={hub.accent}
                        filter={`url(#reticle-glow-${uniqueId})`}
                      />

                      {/* Flag + Country Text */}
                      <text
                        x="18"
                        y="16"
                        fontSize="10.5"
                        fill={isLight ? "#0f172a" : "#f8fafc"}
                        fontWeight="800"
                      >
                        {hub.flag} {hub.country}
                      </text>

                      {/* Edge Latency Metric */}
                      <text
                        x={hub.tagWidth - 8}
                        y="16"
                        fontSize="9.5"
                        fill={hub.accent}
                        fontWeight="800"
                        fontFamily="monospace"
                        textAnchor="end"
                      >
                        {hub.latency.split(" ")[0]}
                      </text>
                    </g>
                  </g>
                );
              })}

              {/* ------------------------------------------------------------- */}
              {/* LAYER 5: SURAT HQ GLOBAL COMMAND EPICENTER (702, 228)         */}
              {/* ------------------------------------------------------------- */}
              <g
                onClick={() => handleSelectRoute("india")}
                style={{ cursor: "pointer" }}
              >
                {/* Outer Gyroscopic Rotating Compass Ring (Counter-clockwise) */}
                <circle
                  cx={hqHub.x}
                  cy={hqHub.y}
                  r="28"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="1.2"
                  strokeDasharray="6 3"
                  opacity="0.6"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from={`360 ${hqHub.x} ${hqHub.y}`}
                    to={`0 ${hqHub.x} ${hqHub.y}`}
                    dur="12s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Triple Concentric Sonar Pulse Waves */}
                <circle cx={hqHub.x} cy={hqHub.y} r="18" fill="none" stroke="#00ffd1" strokeWidth="1.5">
                  <animate
                    attributeName="r"
                    from="8"
                    to="36"
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.9"
                    to="0"
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* HQ Center Glowing Core */}
                <circle
                  cx={hqHub.x}
                  cy={hqHub.y}
                  r="9"
                  fill="#10b981"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  filter={`url(#arc-glow-${uniqueId})`}
                />
                <circle cx={hqHub.x} cy={hqHub.y} r="3.5" fill="#ffffff" />

                {/* Surat HQ Command HUD Badge */}
                <g transform={`translate(${hqHub.x - 85}, ${hqHub.y + 16})`}>
                  <rect
                    x="0"
                    y="0"
                    width="170"
                    height="26"
                    rx="8"
                    fill={isLight ? "#ffffff" : "#041a12"}
                    stroke="#10b981"
                    strokeWidth="1.8"
                    style={{ filter: "drop-shadow(0 4px 16px rgba(16, 185, 129, 0.5))" }}
                  />
                  <circle cx="12" cy="13" r="3.5" fill="#10b981" className="animate-ping" />
                  <circle cx="12" cy="13" r="2.5" fill="#10b981" />
                  <text x="22" y="17" fontSize="10.5" fill={isLight ? "#047857" : "#00ffd1"} fontWeight="850">
                    SURAT HQ (50+ Devs Active)
                  </text>
                </g>
              </g>
            </svg>
          </div>

          {/* Bottom Map Interactive Tip */}
          <div
            style={{
              padding: "0.8rem 1.6rem",
              background: isLight ? "#f1f5f9" : "rgba(10, 18, 36, 0.75)",
              borderTop: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "0.78rem",
              color: isLight ? "#64748b" : "#94a3b8",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Compass size={14} color="#0ea5e9" />
              <span>
                <strong>Click any beacon or path</strong> on the map to lock telemetry and examine synchronous overlap.
              </span>
            </div>

            <span style={{ fontWeight: 600, color: isLight ? "#0f172a" : "#cbd5e1" }}>
              Origin: Surat HQ [21.17° N, 72.83° E]
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. ACTIVE ROUTE TELEMETRY COCKPIT & OVERLAP DIAL (AERONAUTICAL HUD)       */}
        {/* ========================================================================= */}
        <div
          style={{
            borderRadius: "20px",
            background: isLight
              ? "#ffffff"
              : "linear-gradient(145deg, rgba(10, 18, 36, 0.95) 0%, rgba(6, 12, 26, 0.98) 100%)",
            border: `1px solid ${
              isLight ? `rgba(${activeHub.accentRgb}, 0.35)` : `rgba(${activeHub.accentRgb}, 0.4)`
            }`,
            boxShadow: isLight
              ? `0 15px 35px -10px rgba(${activeHub.accentRgb}, 0.12)`
              : `0 20px 45px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(${activeHub.accentRgb}, 0.12)`,
            padding: "1.8rem 2.2rem",
            marginBottom: "2rem",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: "2.5rem",
            alignItems: "center",
            transition: "all 0.35s ease",
          }}
          className="telemetry-summary-cockpit"
        >
          {/* Left: Route Spec & Squad Focus */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem" }}>
              <span
                style={{
                  fontSize: "0.74rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  padding: "3px 8px",
                  borderRadius: "6px",
                  background: `rgba(${activeHub.accentRgb}, 0.15)`,
                  color: activeHub.accent,
                }}
              >
                {activeHub.category}
              </span>
              <span style={{ fontSize: "0.78rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                Dedicated Deployments: <strong>{activeHub.deployments}</strong>
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "2rem" }}>{activeHub.flag}</span>
              <div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    margin: 0,
                    color: isLight ? "#0f172a" : "#f8fafc",
                  }}
                >
                  Surat HQ ⇄ {activeHub.country}
                </h3>
                <div style={{ fontSize: "0.85rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                  Primary Edge Hubs: <strong style={{ color: activeHub.accent }}>{activeHub.cities}</strong>
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: "0.92rem",
                color: isLight ? "#334155" : "#cbd5e1",
                lineHeight: 1.5,
                margin: "0.8rem 0 1.2rem 0",
              }}
            >
              {activeHub.squadFocus}
            </p>

            {/* SLA Checkmarks */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", fontSize: "0.8rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: isLight ? "#334155" : "#cbd5e1" }}>
                <CheckCircle2 size={14} color="#10b981" />
                <span>
                  Guaranteed <strong>{activeHub.overlap}</strong> daily synchronous overlap
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: isLight ? "#334155" : "#cbd5e1" }}>
                <CheckCircle2 size={14} color="#10b981" />
                <span>Round-trip network latency: <strong>{activeHub.latency}</strong></span>
              </div>
            </div>
          </div>

          {/* Right: Live Clock & Overlap Bar & Action */}
          <div
            style={{
              padding: "1.4rem",
              borderRadius: "16px",
              background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
              border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.4rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.78rem", fontWeight: 700, color: isLight ? "#64748b" : "#94a3b8" }}>
                <Clock size={14} color={activeHub.accent} />
                <span>{activeHub.timeZoneLabel}</span>
              </div>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  padding: "2px 6px",
                  borderRadius: "4px",
                  background: "rgba(16, 185, 129, 0.15)",
                  color: "#10b981",
                }}
              >
                LIVE TICK
              </span>
            </div>

            <div
              style={{
                fontSize: "1.9rem",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                fontVariantNumeric: "tabular-nums",
                color: isLight ? "#0f172a" : "#ffffff",
                marginBottom: "0.8rem",
              }}
            >
              {currentTime[activeHub.id] || "07:00:00 AM"}
            </div>

            {/* Overlap Progress */}
            <div style={{ marginBottom: "1.2rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.74rem", marginBottom: "0.35rem" }}>
                <span style={{ color: isLight ? "#64748b" : "#94a3b8" }}>Daily Live Overlap Window</span>
                <strong style={{ color: "#10b981" }}>{activeHub.overlap}</strong>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "8px",
                  borderRadius: "9999px",
                  background: isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "25%",
                    width: `${Math.min(100, (activeHub.overlapHours / 9) * 65)}%`,
                    height: "100%",
                    borderRadius: "9999px",
                    background: "linear-gradient(90deg, #10b981 0%, #0ea5e9 100%)",
                    boxShadow: "0 0 8px rgba(16, 185, 129, 0.5)",
                  }}
                />
              </div>
            </div>

            <Link
              href="/contact"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                width: "100%",
                padding: "0.85rem 1.4rem",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.88rem",
                textDecoration: "none",
                boxShadow: "0 8px 20px -6px rgba(14, 165, 233, 0.5)",
                transition: "all 0.25s ease",
              }}
            >
              <span>Connect with {activeHub.country} Squad</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. STREAMLINED FLIGHT CORRIDOR FLEET BAR (NO Chunky Cards)                */}
        {/* ========================================================================= */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "0.8rem",
              padding: "0 0.2rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Radio size={14} color="#0ea5e9" className="animate-pulse" />
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: isLight ? "#475569" : "#94a3b8",
                }}
              >
                Active Flight Corridors // Quick Select
              </span>
            </div>

            <span style={{ fontSize: "0.74rem", color: isLight ? "#94a3b8" : "#64748b" }}>
              Click to isolate route trajectory
            </span>
          </div>

          {/* Horizontal Corridor Fleet Pills */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(235px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {filteredHubs.map((hub) => {
              const isSelected = hub.id === activeHubId && isolateRoute;

              return (
                <div
                  key={hub.id}
                  onClick={() => handleSelectRoute(hub.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") handleSelectRoute(hub.id);
                  }}
                  style={{
                    borderRadius: "14px",
                    padding: "0.85rem 1.05rem",
                    background: isSelected
                      ? isLight
                        ? `rgba(${hub.accentRgb}, 0.12)`
                        : `rgba(${hub.accentRgb}, 0.2)`
                      : isLight
                      ? "#ffffff"
                      : "rgba(15, 23, 42, 0.65)",
                    border: `1px solid ${
                      isSelected
                        ? hub.accent
                        : isLight
                        ? "rgba(226, 232, 240, 0.9)"
                        : "rgba(255, 255, 255, 0.08)"
                    }`,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    transform: isSelected ? "translateY(-2px)" : "none",
                    boxShadow: isSelected
                      ? `0 10px 22px -6px rgba(${hub.accentRgb}, 0.35)`
                      : isLight
                      ? "0 2px 8px rgba(0,0,0,0.03)"
                      : "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", minWidth: 0 }}>
                    <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{hub.flag}</span>
                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: "0.86rem",
                          fontWeight: 800,
                          color: isLight ? "#0f172a" : "#ffffff",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {hub.country}
                      </div>
                      <div
                        style={{
                          fontSize: "0.7rem",
                          color: isLight ? "#64748b" : "#94a3b8",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {hub.cities}
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontSize: "0.74rem", fontWeight: 800, color: hub.accent }}>
                      {hub.latency}
                    </div>
                    <div style={{ fontSize: "0.68rem", color: isLight ? "#94a3b8" : "#64748b" }}>
                      {currentTime[hub.id] ? currentTime[hub.id].slice(0, 5) + " " + currentTime[hub.id].slice(-2) : "--:--"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default GlobalDeliveryMesh;
