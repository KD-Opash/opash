"use client";

import React, { useState, useEffect } from "react";
import { WORLD_MAP_PATH } from "./worldMapPath";

interface NodeLocation {
  id: string;
  name: string;
  label: string;
  flag: string;
  region: "americas" | "europe" | "middle-east" | "apac";
  x: number;
  y: number;
  country: string;
  city: string;
  timezone: string;
  detail: string;
  focus: string;
  ping: string;
  activeSquads: string;
  badgeOffset: { x: number; y: number };
  isHQ?: boolean;
  cometDur: string;
  cometDelay: string;
}

const locations: NodeLocation[] = [
  {
    id: "india",
    name: "India (Global HQ)",
    label: "India HQ",
    flag: "🇮🇳",
    region: "apac",
    x: 702,
    y: 218,
    country: "India",
    city: "Surat, Gujarat",
    timezone: "IST (UTC+5:30)",
    detail: "Global Engineering Command Center • 50+ In-House Developers",
    focus: "Core Architecture, Full-Stack SaaS & Generative AI",
    ping: "2ms (Local)",
    activeSquads: "14 Core Squads",
    badgeOffset: { x: 0, y: 32 },
    isHQ: true,
    cometDur: "2.4s",
    cometDelay: "0s",
  },
  {
    id: "usa",
    name: "USA (Silicon Valley & NY)",
    label: "USA",
    flag: "🇺🇸",
    region: "americas",
    x: 228,
    y: 156,
    country: "United States",
    city: "San Francisco / New York",
    timezone: "PST / EST",
    detail: "Enterprise Cloud & AI Solutions • Direct Client Overlap",
    focus: "Next.js SaaS, Multi-Tenant Platforms & AI Agents",
    ping: "118ms",
    activeSquads: "9 Client Squads",
    badgeOffset: { x: -8, y: -24 },
    cometDur: "2.6s",
    cometDelay: "0.4s",
  },
  {
    id: "canada",
    name: "Canada",
    label: "Canada",
    flag: "🇨🇦",
    region: "americas",
    x: 206,
    y: 97,
    country: "Canada",
    city: "Toronto / Vancouver",
    timezone: "EST (UTC-5)",
    detail: "HealthTech Platforms & Cloud Modernization",
    focus: "HIPAA Compliant Infrastructure & React Native",
    ping: "124ms",
    activeSquads: "5 Client Squads",
    badgeOffset: { x: 0, y: -22 },
    cometDur: "2.8s",
    cometDelay: "0.2s",
  },
  {
    id: "uk",
    name: "UK (London)",
    label: "UK",
    flag: "🇬🇧",
    region: "europe",
    x: 493,
    y: 104,
    country: "United Kingdom",
    city: "London",
    timezone: "GMT (UTC+0)",
    detail: "FinTech, Open Banking & Microservices",
    focus: "High-Throughput APIs & Secure Banking Web Apps",
    ping: "78ms",
    activeSquads: "7 Client Squads",
    badgeOffset: { x: -28, y: -20 },
    cometDur: "2.2s",
    cometDelay: "0.5s",
  },
  {
    id: "europe",
    name: "Europe",
    label: "Europe",
    flag: "🇪🇺",
    region: "europe",
    x: 528,
    y: 115,
    country: "Germany / Netherlands",
    city: "Berlin / Amsterdam",
    timezone: "CET (UTC+1)",
    detail: "Enterprise Systems & Dedicated Engineering Teams",
    focus: "Automated QA, GDPR-Compliant Cloud & Node.js",
    ping: "84ms",
    activeSquads: "6 Client Squads",
    badgeOffset: { x: 26, y: -20 },
    cometDur: "2.3s",
    cometDelay: "0.8s",
  },
  {
    id: "uae",
    name: "UAE (Dubai)",
    label: "UAE",
    flag: "🇦🇪",
    region: "middle-east",
    x: 651,
    y: 207,
    country: "United Arab Emirates",
    city: "Dubai",
    timezone: "GST (UTC+4)",
    detail: "Smart Logistics & GovTech Enterprise Mobility",
    focus: "Real-Time Tracking, Flutter Apps & Cloud Portals",
    ping: "38ms",
    activeSquads: "8 Client Squads",
    badgeOffset: { x: -32, y: 16 },
    cometDur: "1.9s",
    cometDelay: "0.1s",
  },
  {
    id: "australia",
    name: "Australia",
    label: "Australia",
    flag: "🇦🇺",
    region: "apac",
    x: 872,
    y: 382,
    country: "Australia",
    city: "Sydney / Melbourne",
    timezone: "AEST (UTC+10)",
    detail: "E-Commerce Platforms & On-Demand Dashboards",
    focus: "AEST Overlap, Next.js & Serverless Microservices",
    ping: "92ms",
    activeSquads: "4 Client Squads",
    badgeOffset: { x: 0, y: 26 },
    cometDur: "2.9s",
    cometDelay: "0.9s",
  },
  {
    id: "brazil",
    name: "Brazil",
    label: "Brazil",
    flag: "🇧🇷",
    region: "americas",
    x: 356,
    y: 340,
    country: "Brazil",
    city: "São Paulo",
    timezone: "BRT (UTC-3)",
    detail: "Mobile Applications & Distributed Squads",
    focus: "Cross-Platform Flutter & Marketplace Backend",
    ping: "142ms",
    activeSquads: "3 Client Squads",
    badgeOffset: { x: 0, y: 26 },
    cometDur: "3.2s",
    cometDelay: "1.1s",
  },
];

interface GlobalNetworkMapProps {
  hideTopHud?: boolean;
}

export default function GlobalNetworkMap({ hideTopHud = false }: GlobalNetworkMapProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [hoveredNode, setHoveredNode] = useState<NodeLocation | null>(null);
  const [radarActive, setRadarActive] = useState<boolean>(true);

  const hq = locations.find((l) => l.isHQ)!;
  const targetNodes = locations.filter((l) => !l.isHQ);

  const activeNode = hoveredNode;

  const regions = [
    { id: "all", label: "🌐 All Corridors (8)" },
    { id: "americas", label: "🇺🇸 Americas (3)" },
    { id: "europe", label: "🇬🇧 UK & Europe (2)" },
    { id: "middle-east", label: "🇦🇪 Middle East (1)" },
    { id: "apac", label: "🌏 Asia-Pacific (2)" },
  ];

  return (
    <div
      className="global-network-map-wrapper"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        margin: "0 auto",
      }}
    >
      {/* ========================================================================= */}
      {/* 1. TOP INTERACTIVE REGION SELECTOR DOCK */}
      {/* ========================================================================= */}
      <div
        className="network-map-dock-header"
        style={{
          display: "flex",
          justifyContent: hideTopHud ? "center" : "space-between",
          alignItems: "center",
          marginBottom: "1rem",
          padding: "0 0.25rem",
          flexWrap: "wrap",
          gap: "0.65rem",
        }}
      >
        {/* Left Status Tag - Only show when NOT embedded in window header */}
        {!hideTopHud && (
          <div className="flex items-center gap-2">
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#10b981",
                display: "inline-block",
                boxShadow: "0 0 10px #10b981",
              }}
            />
            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: 800,
                letterSpacing: "0.04em",
                color: "var(--text-primary)",
                textTransform: "uppercase",
              }}
            >
              GLOBAL DELIVERY RADAR • SURAT HQ ⇄ 8 ACTIVE HUBS
            </span>
          </div>
        )}

        {/* Region Filter Buttons */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {regions.map((reg) => {
            const isActive = selectedRegion === reg.id;
            return (
              <button
                key={reg.id}
                type="button"
                onClick={() => setSelectedRegion(reg.id)}
                className={`network-region-btn ${isActive ? "active" : ""}`}
              >
                {reg.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN HOLOGRAPHIC SVG COMMAND CANVAS */}
      {/* ========================================================================= */}
      <div
        className="network-map-hologram-stage"
        style={{
          position: "relative",
          borderRadius: "22px",
          padding: "1rem 0.75rem",
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(71, 109, 154, 0.14) 0%, rgba(6, 11, 19, 0.85) 65%, rgba(6, 11, 19, 0.98) 100%)",
          border: "1px solid var(--border-medium)",
          boxShadow:
            "0 25px 60px -15px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(71, 109, 154, 0.1)",
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 1000 500"
          style={{
            width: "100%",
            height: "auto",
            overflow: "visible",
            display: "block",
            filter: "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.35))",
          }}
        >
          <defs>
            {/* Luminous Cyber Ocean Dot Grid Pattern */}
            <pattern
              id="holographicOceanGrid"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="0.75" fill="rgba(71, 109, 154, 0.28)" />
            </pattern>

            {/* Glowing Laser Gradient for Outbound Arcs */}
            <linearGradient id="outboundLaserArc" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5EC098" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#476D9A" stopOpacity="0.95" />
            </linearGradient>

            {/* Glowing Laser Gradient for Inbound Response Packets */}
            <linearGradient id="inboundLaserArc" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#476D9A" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#5EC098" stopOpacity="0.95" />
            </linearGradient>

            {/* Continent Glow Filter */}
            <filter id="continentCyberGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* High-Energy Comet Particle Glow */}
            <filter id="highEnergyCometGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3.8" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Surat HQ Super-Beacon Filter */}
            <filter id="hqSuperBeaconGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Rotating Holographic Radar Sweep Gradient */}
            <linearGradient id="radarSweepGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(94, 192, 152, 0.28)" />
              <stop offset="40%" stopColor="rgba(71, 109, 154, 0.12)" />
              <stop offset="100%" stopColor="rgba(6, 11, 19, 0)" />
            </linearGradient>

            {/* Landmass Shading Gradient */}
            <linearGradient id="landmassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#142136" />
              <stop offset="50%" stopColor="#0f192b" />
              <stop offset="100%" stopColor="#0b1322" />
            </linearGradient>
          </defs>

          {/* ========================================================================= */}
          {/* A. DIGITAL OCEAN BACKGROUND GRID & COORDINATE AXES */}
          {/* ========================================================================= */}
          <rect width="1000" height="500" fill="url(#holographicOceanGrid)" opacity="0.85" />

          {/* Subtle Latitude & Longitude Coordinate Lines */}
          <g stroke="rgba(71, 109, 154, 0.18)" strokeWidth="0.75" strokeDasharray="3 7">
            {/* Equator */}
            <line x1="0" y1="240" x2="1000" y2="240" stroke="rgba(94, 192, 152, 0.3)" strokeWidth="1" strokeDasharray="5 7" />
            {/* Tropic of Cancer */}
            <line x1="0" y1="170" x2="1000" y2="170" />
            {/* Tropic of Capricorn */}
            <line x1="0" y1="310" x2="1000" y2="310" />
            {/* Meridians */}
            <line x1="250" y1="0" x2="250" y2="500" />
            <line x1="500" y1="0" x2="500" y2="500" stroke="rgba(71, 109, 154, 0.3)" />
            <line x1="750" y1="0" x2="750" y2="500" />
          </g>

          {/* Equator & Meridian Coordinate Badges */}
          <text x="18" y="236" fill="rgba(94, 192, 152, 0.6)" fontSize="8.5" fontWeight="700" letterSpacing="0.1em">
            EQUATOR • 0°00' LATITUDE
          </text>
          <text x="702" y="16" fill="rgba(71, 109, 154, 0.75)" fontSize="8.5" fontWeight="700" textAnchor="middle" letterSpacing="0.08em">
            72.83°E SURAT HQ MERIDIAN
          </text>

          {/* ========================================================================= */}
          {/* B. LUMINOUS CONTINENTS SILHOUETTE (With Neon Edge Contours) */}
          {/* ========================================================================= */}
          <g className="world-continents-group">
            {/* Underglow continent shadow */}
            <path
              d={WORLD_MAP_PATH}
              fill="rgba(71, 109, 154, 0.15)"
              transform="translate(1, 2)"
            />
            {/* Main Landmass Path with Cyber Edge Contour */}
            <path
              d={WORLD_MAP_PATH}
              fill="url(#landmassGradient)"
              stroke="rgba(71, 109, 154, 0.55)"
              strokeWidth="0.85"
              filter="url(#continentCyberGlow)"
              style={{
                transition: "all 0.3s ease",
              }}
            />
          </g>

          {/* ========================================================================= */}
          {/* C. 360° ROTATING HOLOGRAPHIC RADAR SCANNER SWEEP (Surat HQ Centered) */}
          {/* ========================================================================= */}
          {radarActive && (
            <g>
              <g>
                <path
                  d={`M ${hq.x} ${hq.y} L ${hq.x + 420} ${hq.y - 140} A 440 440 0 0 1 ${hq.x + 360} ${hq.y + 240} Z`}
                  fill="url(#radarSweepGradient)"
                  opacity="0.55"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from={`0 ${hq.x} ${hq.y}`}
                    to={`360 ${hq.x} ${hq.y}`}
                    dur="9s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
              {/* Outer Radar Range Boundary Circle */}
              <circle
                cx={hq.x}
                cy={hq.y}
                r="380"
                fill="none"
                stroke="rgba(71, 109, 154, 0.2)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
            </g>
          )}

          {/* ========================================================================= */}
          {/* D. DYNAMIC BI-DIRECTIONAL LASER ARCS & SHOOTING COMET PULSES */}
          {/* ========================================================================= */}
          <g className="network-arcs" fill="none" strokeLinecap="round">
            {targetNodes.map((node) => {
              const isRegionMatch =
                selectedRegion === "all" || selectedRegion === node.region;
              const isHovered = activeNode?.id === node.id;

              // Arc curvature calculation
              const midX = (hq.x + node.x) / 2;
              let midY = Math.min(hq.y, node.y) - Math.abs(hq.x - node.x) * 0.17;
              if (node.id === "australia") {
                midY = Math.min(hq.y, node.y) + 32;
              } else if (node.id === "uae") {
                midY = Math.min(hq.y, node.y) - 18;
              } else if (node.id === "brazil") {
                midY = Math.min(hq.y, node.y) - 35;
              }

              const pathData = `M ${hq.x} ${hq.y} Q ${midX} ${midY}, ${node.x} ${node.y}`;
              const pathId = `flightPath-${node.id}`;

              const arcOpacity = isRegionMatch ? (isHovered ? 1 : 0.85) : 0.15;

              return (
                <g
                  key={node.id}
                  opacity={arcOpacity}
                  style={{ transition: "opacity 0.35s ease" }}
                >
                  {/* Invisible base path for animateMotion */}
                  <path id={pathId} d={pathData} stroke="none" fill="none" />

                  {/* 1. Ambient Glow Underlay */}
                  <path
                    d={pathData}
                    stroke={isHovered ? "#5EC098" : "#38bdf8"}
                    strokeOpacity={isHovered ? 0.6 : 0.25}
                    strokeWidth={isHovered ? 4.5 : 2.5}
                    filter="url(#highEnergyCometGlow)"
                  />

                  {/* 2. Core High-Precision Laser Arc Line */}
                  <path
                    d={pathData}
                    stroke="url(#outboundLaserArc)"
                    strokeWidth={isHovered ? 2.5 : 1.6}
                  />

                  {/* 3. High-Speed Dash Stream (Simulates Live Optical Fiber Packets) */}
                  <path
                    d={pathData}
                    stroke="#ffffff"
                    strokeWidth={isHovered ? 2.2 : 1.4}
                    strokeDasharray="5 14"
                    strokeOpacity={isHovered ? 0.95 : 0.65}
                    className="radiating-flight-arc"
                  />

                  {/* 4. OUTBOUND PACKET COMET (Surat HQ -> Global Hub) */}
                  <circle r={isHovered ? 5.5 : 4} fill="#5EC098" filter="url(#highEnergyCometGlow)">
                    <animateMotion
                      dur={node.cometDur}
                      repeatCount="indefinite"
                      keyPoints="0;1"
                      keyTimes="0;1"
                    >
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;0.9;1;0.7;0"
                      dur={node.cometDur}
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Trailing Outbound White Core Particle */}
                  <circle r={isHovered ? 3.5 : 2.2} fill="#ffffff">
                    <animateMotion
                      dur={node.cometDur}
                      begin="0.08s"
                      repeatCount="indefinite"
                      keyPoints="0;1"
                      keyTimes="0;1"
                    >
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;1;0.9;0.3;0"
                      dur={node.cometDur}
                      begin="0.08s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* 5. INBOUND RESPONSE COMET (Global Hub -> Surat HQ, 2-Way Sync!) */}
                  <circle r={isHovered ? 4 : 3} fill="#38bdf8" filter="url(#highEnergyCometGlow)">
                    <animateMotion
                      dur={node.cometDur}
                      begin={node.cometDelay}
                      repeatCount="indefinite"
                      keyPoints="1;0"
                      keyTimes="0;1"
                    >
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;0.85;1;0.6;0"
                      dur={node.cometDur}
                      begin={node.cometDelay}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}
          </g>

          {/* ========================================================================= */}
          {/* E. SURAT INDIA GLOBAL HQ MULTI-SONAR BEACON */}
          {/* ========================================================================= */}
          <g transform={`translate(${hq.x}, ${hq.y})`}>
            {/* Sonar Ring 1 - Opash Mint Green */}
            <circle r={10} fill="none" stroke="#5EC098" strokeWidth={2.2} filter="url(#hqSuperBeaconGlow)">
              <animate attributeName="r" values="10;48" dur="2.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0" dur="2.8s" repeatCount="indefinite" />
            </circle>

            {/* Sonar Ring 2 - Electric Cyan */}
            <circle r={10} fill="none" stroke="#38bdf8" strokeWidth={1.8}>
              <animate attributeName="r" values="10;48" dur="2.8s" begin="0.9s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.85;0" dur="2.8s" begin="0.9s" repeatCount="indefinite" />
            </circle>

            {/* Sonar Ring 3 - Slate Blue */}
            <circle r={10} fill="none" stroke="#476D9A" strokeWidth={1.4}>
              <animate attributeName="r" values="10;48" dur="2.8s" begin="1.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0" dur="2.8s" begin="1.8s" repeatCount="indefinite" />
            </circle>

            {/* HQ Ambient Base Glow */}
            <circle r={22} fill="rgba(94, 192, 152, 0.28)" filter="url(#hqSuperBeaconGlow)" />
            <circle r={13} fill="#5EC098" fillOpacity="0.45" />

            {/* HQ Core Outer Ring */}
            <circle r={9} fill="#476D9A" stroke="#ffffff" strokeWidth={2.5} />
            {/* Center Golden Core */}
            <circle r={4.5} fill="#5EC098" />
            <circle r={2} fill="#ffffff" />
          </g>

          {/* ========================================================================= */}
          {/* F. HOLOGRAPHIC HUB NODES, PINS & FLOATING CAPSULE BADGES */}
          {/* ========================================================================= */}
          <g className="network-nodes">
            {locations.map((node) => {
              const isRegionMatch =
                selectedRegion === "all" || selectedRegion === node.region;
              const isHovered = activeNode?.id === node.id;
              const isHQ = node.isHQ;

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  style={{
                    cursor: "pointer",
                    opacity: isRegionMatch ? 1 : 0.35,
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Subtle Node Halo */}
                  {!isHQ && (
                    <>
                      <circle
                        r={isHovered ? 18 : 12}
                        fill="rgba(56, 189, 248, 0.2)"
                        className="animate-pulse"
                      />
                      <circle
                        r={isHovered ? 9 : 6.5}
                        fill="#38bdf8"
                        fillOpacity="0.6"
                        filter="url(#highEnergyCometGlow)"
                      />
                      {/* Crisp Node Center Pin */}
                      <circle
                        r={isHovered ? 6 : 4.5}
                        fill="#476D9A"
                        stroke="#ffffff"
                        strokeWidth={2}
                        style={{
                          transform: isHovered ? "scale(1.4)" : "scale(1)",
                          transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      />
                      <circle r={2} fill="#ffffff" />
                    </>
                  )}

                  {/* ========================================================================= */}
                  {/* HOLOGRAPHIC CAPSULE BADGE (Flag + Name + Live Ping Indicator) */}
                  {/* ========================================================================= */}
                  <g
                    transform={`translate(${node.badgeOffset.x}, ${node.badgeOffset.y})`}
                    style={{
                      transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      filter: isHovered
                        ? "drop-shadow(0 6px 14px rgba(94, 192, 152, 0.4))"
                        : "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5))",
                    }}
                  >
                    {/* Badge Glass Pill Background */}
                    <rect
                      x={isHQ ? -78 : -46}
                      y="-12"
                      width={isHQ ? 156 : 92}
                      height="24"
                      rx="12"
                      fill={
                        isHQ
                          ? "rgba(14, 25, 41, 0.94)"
                          : isHovered
                          ? "rgba(18, 33, 55, 0.96)"
                          : "rgba(10, 18, 30, 0.88)"
                      }
                      stroke={
                        isHQ
                          ? "rgba(94, 192, 152, 0.85)"
                          : isHovered
                          ? "#38bdf8"
                          : "rgba(71, 109, 154, 0.45)"
                      }
                      strokeWidth={isHQ || isHovered ? "1.4" : "1"}
                    />

                    {/* Live Beacon Dot inside badge */}
                    <circle
                      cx={isHQ ? -64 : -34}
                      cy="0"
                      r="3"
                      fill={isHQ ? "#10b981" : "#38bdf8"}
                      style={{
                        boxShadow: `0 0 6px ${isHQ ? "#10b981" : "#38bdf8"}`,
                      }}
                    />

                    {/* Capsule Text Label */}
                    <text
                      x={isHQ ? -52 : -24}
                      y="3.5"
                      fill="#ffffff"
                      fontSize={isHQ ? "10.5" : "9.5"}
                      fontWeight={isHQ ? "850" : "750"}
                      letterSpacing="0.02em"
                      style={{ userSelect: "none" }}
                    >
                      {node.flag} {node.label}
                      {isHQ && " ★ HQ"}
                    </text>
                  </g>
                </g>
              );
            })}
          </g>
        </svg>

        {/* ========================================================================= */}
        {/* G. FLOATING LIVE TELEMETRY HUD CARD (On Hover or Selection) */}
        {/* ========================================================================= */}
        {activeNode && (
          <div
            className="network-telemetry-hud"
            style={{
              position: "absolute",
              bottom: "18px",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "0.95rem 1.65rem",
              borderRadius: "16px",
              border: activeNode.isHQ
                ? "1px solid rgba(94, 192, 152, 0.65)"
                : "1px solid rgba(56, 189, 248, 0.55)",
              boxShadow: "0 25px 50px -10px rgba(0, 0, 0, 0.55), 0 0 30px rgba(71, 109, 154, 0.25)",
              zIndex: 20,
              pointerEvents: "none",
              minWidth: "320px",
              maxWidth: "92%",
              textAlign: "center",
              background: "rgba(10, 18, 30, 0.94)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              animation: "fadeIn 0.2s ease-out",
            }}
          >
            <div
              className="flex items-center justify-center gap-2"
              style={{ marginBottom: "0.3rem" }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: activeNode.isHQ ? "#10b981" : "#38bdf8",
                  display: "inline-block",
                  boxShadow: `0 0 10px ${activeNode.isHQ ? "#10b981" : "#38bdf8"}`,
                }}
              />
              <span
                style={{
                  fontWeight: 850,
                  fontSize: "1rem",
                  color: "#ffffff",
                }}
              >
                {activeNode.flag} {activeNode.country} • {activeNode.city}
              </span>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-mint, #5EC098)",
                  fontWeight: 750,
                }}
              >
                [{activeNode.timezone}]
              </span>
            </div>

            <div
              style={{
                fontSize: "0.84rem",
                color: "var(--text-secondary)",
                fontWeight: 600,
                marginBottom: "0.3rem",
              }}
            >
              {activeNode.detail}
            </div>

            <div
              className="flex items-center justify-center gap-3"
              style={{
                fontSize: "0.78rem",
                color: "#38bdf8",
                fontWeight: 700,
                flexWrap: "wrap",
              }}
            >
              <span>⚡ Focus: {activeNode.focus}</span>
              <span style={{ opacity: 0.4 }}>•</span>
              <span style={{ color: "var(--color-mint, #5EC098)" }}>
                📶 Latency: {activeNode.ping}
              </span>
              <span style={{ opacity: 0.4 }}>•</span>
              <span style={{ color: "#ffffff" }}>
                👥 {activeNode.activeSquads}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 3. BOTTOM LIVE METRIC COMMAND GAUGES */}
      {/* ========================================================================= */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "0.75rem",
          marginTop: "1.1rem",
        }}
      >
        <div className="network-metric-gauge">
          <span className="network-gauge-dot" style={{ backgroundColor: "#10b981", boxShadow: "0 0 8px #10b981" }} />
          <div>
            <div className="network-gauge-label">
              Surat HQ Core
            </div>
            <div className="network-gauge-value">
              50+ Senior Developers
            </div>
          </div>
        </div>

        <div className="network-metric-gauge">
          <span className="network-gauge-dot" style={{ backgroundColor: "#38bdf8", boxShadow: "0 0 8px #38bdf8" }} />
          <div>
            <div className="network-gauge-label">
              Live Telemetry
            </div>
            <div className="network-gauge-value">
              75+ Active Sprints
            </div>
          </div>
        </div>

        <div className="network-metric-gauge">
          <span className="network-gauge-dot" style={{ backgroundColor: "#476D9A", boxShadow: "0 0 8px #476D9A" }} />
          <div>
            <div className="network-gauge-label">
              Global Synchronization
            </div>
            <div className="network-gauge-value">
              18 Timezones Covered
            </div>
          </div>
        </div>

        <div className="network-metric-gauge">
          <span className="network-gauge-dot" style={{ backgroundColor: "#f59e0b", boxShadow: "0 0 8px #f59e0b" }} />
          <div>
            <div className="network-gauge-label">
              Client Trust
            </div>
            <div className="network-gauge-value">
              96% Long-Term Retention
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
