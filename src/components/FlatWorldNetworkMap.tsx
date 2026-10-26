"use client";

import React, { useState } from "react";
import { WORLD_MAP_PATH } from "./worldMapPath";

export interface NetworkLocation {
  id: string;
  name: string;
  label: string;
  flag: string;
  city: string;
  specialty: string;
  squads: string;
  ping: string;
  x: number;
  y: number;
  textOffsetX?: number;
  textOffsetY?: number;
  textAnchor?: "start" | "middle" | "end";
  isHQ?: boolean;
}

export const NETWORK_LOCATIONS: NetworkLocation[] = [
  {
    id: "india",
    name: "India (Global Headquarters)",
    label: "India",
    flag: "🇮🇳",
    city: "Surat, Gujarat",
    specialty: "Core Architecture & Generative AI",
    squads: "Dedicated In-House Squads",
    ping: "2ms (Local)",
    x: 702,
    y: 218,
    textOffsetX: 0,
    textOffsetY: 18,
    isHQ: true,
  },
  {
    id: "canada",
    name: "Canada Hub",
    label: "Canada",
    flag: "🇨🇦",
    city: "Toronto / Vancouver",
    specialty: "HealthTech & Cloud Modernization",
    squads: "5 Dedicated Squads",
    ping: "124ms",
    x: 206,
    y: 97,
    textOffsetX: 0,
    textOffsetY: 18,
  },
  {
    id: "usa",
    name: "USA Hub",
    label: "USA",
    flag: "🇺🇸",
    city: "San Francisco / New York",
    specialty: "Enterprise SaaS & AI Agents",
    squads: "9 Dedicated Squads",
    ping: "118ms",
    x: 228,
    y: 156,
    textOffsetX: 0,
    textOffsetY: 18,
  },
  {
    id: "brazil",
    name: "Brazil Hub",
    label: "Brazil",
    flag: "🇧🇷",
    city: "São Paulo",
    specialty: "FinTech & Cross-Platform Mobile",
    squads: "3 Dedicated Squads",
    ping: "142ms",
    x: 356,
    y: 340,
    textOffsetX: 0,
    textOffsetY: 18,
  },
  {
    id: "uk",
    name: "UK Hub",
    label: "UK",
    flag: "🇬🇧",
    city: "London",
    specialty: "Open Banking & Microservices",
    squads: "7 Dedicated Squads",
    ping: "78ms",
    x: 493,
    y: 104,
    textOffsetX: 0,
    textOffsetY: 17,
  },
  {
    id: "europe",
    name: "Europe Hub",
    label: "Europe",
    flag: "🇪🇺",
    city: "Berlin / Frankfurt",
    specialty: "Automated QA & Cloud Security",
    squads: "6 Dedicated Squads",
    ping: "84ms",
    x: 528,
    y: 115,
    textOffsetX: 0,
    textOffsetY: 17,
  },
  {
    id: "uae",
    name: "UAE Hub",
    label: "UAE",
    flag: "🇦🇪",
    city: "Dubai",
    specialty: "GovTech & Logistics Platforms",
    squads: "8 Dedicated Squads",
    ping: "38ms",
    x: 651,
    y: 207,
    textOffsetX: 0,
    textOffsetY: 17,
  },
  {
    id: "australia",
    name: "Australia Hub",
    label: "Australia",
    flag: "🇦🇺",
    city: "Sydney / Melbourne",
    specialty: "E-Commerce & Serverless APIs",
    squads: "4 Dedicated Squads",
    ping: "92ms",
    x: 872,
    y: 382,
    textOffsetX: 0,
    textOffsetY: 18,
  },
];

// 7 Curved laser flight paths originating from India (702, 218)
export const NETWORK_ARCS = [
  {
    id: "arc-canada",
    targetId: "canada",
    d: "M 702 218 C 550 20, 340 30, 206 97",
    dur: "2.8s",
    delay: "0s",
  },
  {
    id: "arc-uk",
    targetId: "uk",
    d: "M 702 218 C 610 95, 540 85, 493 104",
    dur: "2.2s",
    delay: "0.4s",
  },
  {
    id: "arc-europe",
    targetId: "europe",
    d: "M 702 218 C 625 125, 570 110, 528 115",
    dur: "2.4s",
    delay: "0.2s",
  },
  {
    id: "arc-uae",
    targetId: "uae",
    d: "M 702 218 Q 675 200, 651 207",
    dur: "1.8s",
    delay: "0.1s",
  },
  {
    id: "arc-usa",
    targetId: "usa",
    d: "M 702 218 C 580 255, 360 240, 228 156",
    dur: "2.9s",
    delay: "0.6s",
  },
  {
    id: "arc-brazil",
    targetId: "brazil",
    d: "M 702 218 C 580 275, 440 335, 356 340",
    dur: "3.2s",
    delay: "0.8s",
  },
  {
    id: "arc-australia",
    targetId: "australia",
    d: "M 702 218 C 760 245, 825 305, 872 382",
    dur: "2.6s",
    delay: "0.3s",
  },
];

interface FlatWorldNetworkMapProps {
  className?: string;
}

export default function FlatWorldNetworkMap({
  className = "",
}: FlatWorldNetworkMapProps) {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const activeNode = NETWORK_LOCATIONS.find((l) => l.id === hoveredNodeId);

  return (
    <div
      className={`flat-world-network-container ${className}`}
      style={{
        position: "relative",
        width: "100%",
        background: "transparent",
        overflow: "visible",
      }}
    >
      {/* Main Vector SVG Stage - Seamlessly floating on the base background */}
      <svg
        viewBox="0 0 1000 500"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          userSelect: "none",
          overflow: "visible",
        }}
      >
        <defs>
          {/* Subtle neon glow for active paths */}
          <filter id="laserNeonGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Comet high energy core glow */}
          <filter id="cometSparkleGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.2" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Linear gradient for sweeping wave accent in bottom right */}
          <linearGradient id="waveCurveStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.75" />
          </linearGradient>

          {/* Glowing radial gradient for India HQ epicenter */}
          <radialGradient id="hqEpicenterGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ================================================================= */}
        {/* 1. DECORATIVE ACCENTS (Floating seamlessly on the base background) */}
        {/* ================================================================= */}

        {/* Top-Left Decorative Blue Plus Crosses (2x2 Grid) */}
        <g fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" opacity="0.55">
          {/* Row 1, Col 1: (19, 28) */}
          <line x1="12" y1="28" x2="26" y2="28" />
          <line x1="19" y1="21" x2="19" y2="35" />

          {/* Row 1, Col 2: (46, 28) */}
          <line x1="39" y1="28" x2="53" y2="28" />
          <line x1="46" y1="21" x2="46" y2="35" />

          {/* Row 2, Col 1: (19, 54) */}
          <line x1="12" y1="54" x2="26" y2="54" />
          <line x1="19" y1="47" x2="19" y2="61" />

          {/* Row 2, Col 2: (46, 54) */}
          <line x1="39" y1="54" x2="53" y2="54" />
          <line x1="46" y1="47" x2="46" y2="61" />
        </g>

        {/* Bottom-Right Sweeping Accent Wave Line */}
        <path
          d="M 540 500 C 650 430, 800 450, 1000 380"
          fill="none"
          stroke="url(#waveCurveStroke)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* ================================================================= */}
        {/* 2. PRISTINE CONTINENTS SILHOUETTE (Adapts cleanly to dark/light)   */}
        {/* ================================================================= */}
        <path
          d={WORLD_MAP_PATH}
          className="network-map-continents"
          strokeLinejoin="round"
        />

        {/* ================================================================= */}
        {/* 3. FLIGHT / NETWORK ARCS RADIATING FROM INDIA                     */}
        {/* ================================================================= */}
        <g fill="none">
          {NETWORK_ARCS.map((arc) => {
            const isHovered = hoveredNodeId === arc.targetId;
            return (
              <g key={arc.id}>
                {/* 3A. Ambient Glow Layer under the curve */}
                <path
                  d={arc.d}
                  stroke={isHovered ? "rgba(56, 189, 248, 0.55)" : "rgba(56, 189, 248, 0.2)"}
                  strokeWidth={isHovered ? "7" : "4.5"}
                  strokeLinecap="round"
                  filter={isHovered ? "url(#laserNeonGlow)" : undefined}
                  style={{
                    transition: "stroke-width 0.25s, stroke 0.25s",
                  }}
                />

                {/* 3B. Main Cyan/Blue Solid Laser Line */}
                <path
                  d={arc.d}
                  className="network-map-arc-main"
                  strokeWidth={isHovered ? "2.6" : "1.85"}
                  strokeLinecap="round"
                  style={{
                    transition: "stroke-width 0.25s, stroke 0.25s",
                  }}
                />

                {/* 3C. Flowing Fiber-Optic Energy Stream Pulse (Dash stream) */}
                <path
                  d={arc.d}
                  stroke="#ffffff"
                  strokeWidth={isHovered ? "2.2" : "1.5"}
                  strokeDasharray="6 14"
                  strokeLinecap="round"
                  opacity={isHovered ? "0.95" : "0.7"}
                  style={{
                    animation: `opashArcDashStream ${arc.dur} linear infinite`,
                  }}
                />

                {/* 3D. Primary Shooting Light Comet (White Core + Cyan Sparkle) */}
                <circle r="3.2" fill="#ffffff" stroke="#38bdf8" strokeWidth="1.2" filter="url(#cometSparkleGlow)">
                  <animateMotion
                    path={arc.d}
                    dur={arc.dur}
                    begin={arc.delay}
                    repeatCount="indefinite"
                  />
                </circle>

                {/* 3E. Trailing Energy Particle (Light Cyan Tail trailing behind) */}
                <circle r="2.2" fill="#38bdf8" opacity="0.8">
                  <animateMotion
                    path={arc.d}
                    dur={arc.dur}
                    begin={`${parseFloat(arc.delay) + 0.08}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </g>

        {/* ================================================================= */}
        {/* 4. COUNTRY / REGION NODES & ANIMATED RADAR BEACONS                */}
        {/* ================================================================= */}
        {NETWORK_LOCATIONS.map((loc) => {
          const isHovered = hoveredNodeId === loc.id;
          const isHQ = loc.isHQ;

          return (
            <g
              key={loc.id}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHoveredNodeId(loc.id)}
              onMouseLeave={() => setHoveredNodeId(null)}
            >
              {/* SURAT HQ 3-STAGE CONCENTRIC EXPANDING RADAR RIPPLE RINGS */}
              {isHQ && (
                <g>
                  {/* Ripple 1 */}
                  <circle cx={loc.x} cy={loc.y} r="6" fill="none" stroke="#38bdf8" strokeWidth="1.4">
                    <animate attributeName="r" values="5; 26" dur="2.8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8; 0" dur="2.8s" repeatCount="indefinite" />
                  </circle>
                  {/* Ripple 2 (Staggered 0.9s) */}
                  <circle cx={loc.x} cy={loc.y} r="6" fill="none" stroke="#38bdf8" strokeWidth="1.2">
                    <animate attributeName="r" values="5; 26" dur="2.8s" begin="0.9s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8; 0" dur="2.8s" begin="0.9s" repeatCount="indefinite" />
                  </circle>
                  {/* Ripple 3 (Staggered 1.8s) */}
                  <circle cx={loc.x} cy={loc.y} r="6" fill="none" stroke="#7dd3fc" strokeWidth="1">
                    <animate attributeName="r" values="5; 26" dur="2.8s" begin="1.8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.7; 0" dur="2.8s" begin="1.8s" repeatCount="indefinite" />
                  </circle>
                  {/* Ambient Soft HQ Halo */}
                  <circle cx={loc.x} cy={loc.y} r="18" fill="url(#hqEpicenterGlow)" pointerEvents="none" />
                </g>
              )}

              {/* Destination Arrival Pulse for Active Nodes */}
              {!isHQ && (
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r="7"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.2"
                  opacity={isHovered ? "0.9" : "0.4"}
                >
                  <animate
                    attributeName="r"
                    values="6; 16"
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values={isHovered ? "0.95; 0" : "0.5; 0"}
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}

              {/* Outer Translucent Ring with Hover Elevation */}
              <circle
                cx={loc.x}
                cy={loc.y}
                r={isHovered ? "11" : "8"}
                fill={isHovered ? "rgba(56, 189, 248, 0.35)" : "rgba(56, 189, 248, 0.2)"}
                stroke={isHovered ? "#38bdf8" : "rgba(56, 189, 248, 0.6)"}
                strokeWidth={isHovered ? "1.6" : "1.2"}
                style={{
                  transition: "r 0.25s cubic-bezier(0.16, 1, 0.3, 1), fill 0.2s, stroke 0.2s",
                }}
              />

              {/* Inner Core Solid Dot with Crisp White Border */}
              <circle
                cx={loc.x}
                cy={loc.y}
                r={isHovered ? "4.5" : "3.4"}
                fill={isHovered ? "#38bdf8" : "#0284c7"}
                stroke="#ffffff"
                strokeWidth="1.2"
                style={{
                  transition: "r 0.25s cubic-bezier(0.16, 1, 0.3, 1), fill 0.2s",
                }}
              />

              {/* Clean Typography Label */}
              <text
                x={loc.x + (loc.textOffsetX || 0)}
                y={loc.y + (loc.textOffsetY || 18)}
                textAnchor={loc.textAnchor || "middle"}
                className="network-map-label"
              >
                {loc.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* ================================================================= */}
      {/* 5. INTERACTIVE GLASSMORPHIC HUD CARD ON HOVER                     */}
      {/* ================================================================= */}
      {activeNode && (
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "10px",
            zIndex: 20,
            background: "rgba(6, 18, 38, 0.88)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderRadius: "14px",
            padding: "10px 16px",
            border: "1px solid rgba(56, 189, 248, 0.45)",
            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.45), 0 0 16px rgba(56, 189, 248, 0.25)",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            animation: "opashHudFadeIn 0.2s ease-out",
            pointerEvents: "none",
          }}
        >
          <span style={{ fontSize: "1.75rem", lineHeight: 1 }}>{activeNode.flag}</span>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontWeight: 800, color: "#ffffff", fontSize: "0.92rem" }}>
                {activeNode.name}
              </span>
              <span
                style={{
                  background: activeNode.isHQ ? "rgba(16, 185, 129, 0.2)" : "rgba(56, 189, 248, 0.18)",
                  color: activeNode.isHQ ? "#34d399" : "#38bdf8",
                  fontWeight: 700,
                  fontSize: "0.68rem",
                  padding: "1px 6px",
                  borderRadius: "9999px",
                  border: activeNode.isHQ ? "1px solid rgba(52, 211, 153, 0.3)" : "1px solid rgba(56, 189, 248, 0.3)",
                }}
              >
                {activeNode.ping}
              </span>
            </div>
            <div style={{ fontSize: "0.78rem", color: "#94a3b8", marginTop: "2px" }}>
              <strong style={{ color: "#38bdf8" }}>{activeNode.squads}</strong> • {activeNode.specialty}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
