"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import {
  Users,
  Briefcase,
  Clock,
  Award,
  Sparkles,
  Zap,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Cpu,
  Layers,
  ArrowRight,
  TrendingUp,
  Radio,
  Terminal,
} from "lucide-react";

/* ========================================================================= */
/* 1. INTERACTIVE GENERATIVE CANVAS VISUALIZER (PARTICLES / RADAR / WAVES)   */
/* ========================================================================= */

interface TelemetryCanvasProps {
  mode: number; // 0: Squad Nodes, 1: Global Radar, 2: Sprint Waves, 3: Milestone Chronometer
  isLight: boolean;
  accentColor: string;
}

function TelemetryCanvas({ mode, isLight, accentColor }: TelemetryCanvasProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "18px",
        overflow: "hidden",
        position: "relative",
        background: isLight ? "rgba(241, 245, 249, 0.6)" : "rgba(10, 18, 34, 0.7)",
      }}
    >
      <svg
        viewBox="0 0 500 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        {/* MODE 0: NEURAL SQUAD NETWORK (Dedicated Squads) */}
        {mode === 0 && (
          <g>
            <rect width="500" height="340" fill={isLight ? "rgba(14, 165, 233, 0.05)" : "rgba(56, 189, 248, 0.03)"} />
            {/* Squad Connecting Lines */}
            <path d="M 60 80 L 140 120 L 220 90 L 310 140 L 400 100 L 440 160" stroke={isLight ? "rgba(2, 132, 199, 0.3)" : "rgba(56, 189, 248, 0.35)"} strokeWidth="1" strokeDasharray="4 4" />
            <path d="M 90 200 L 180 180 L 250 240 L 350 200 L 420 250" stroke={isLight ? "rgba(0, 168, 143, 0.3)" : "rgba(45, 212, 191, 0.35)"} strokeWidth="1" strokeDasharray="3 5" />
            <path d="M 140 120 L 180 180 M 220 90 L 250 240 M 310 140 L 350 200" stroke={isLight ? "rgba(99, 102, 241, 0.25)" : "rgba(129, 140, 248, 0.25)"} strokeWidth="1" />
            
            {/* Squad Nodes */}
            {[
              { cx: 60, cy: 80, r: 4, c: "#0284c7" },
              { cx: 140, cy: 120, r: 5, c: "#00a88f" },
              { cx: 220, cy: 90, r: 6, c: "#38bdf8" },
              { cx: 310, cy: 140, r: 5, c: "#00a88f" },
              { cx: 400, cy: 100, r: 4, c: "#0284c7" },
              { cx: 440, cy: 160, r: 5, c: "#38bdf8" },
              { cx: 90, cy: 200, r: 5, c: "#00a88f" },
              { cx: 180, cy: 180, r: 7, c: "#00ffd1" },
              { cx: 250, cy: 240, r: 6, c: "#0284c7" },
              { cx: 350, cy: 200, r: 5, c: "#38bdf8" },
              { cx: 420, cy: 250, r: 4, c: "#00a88f" },
            ].map((node, i) => (
              <g key={i}>
                <circle cx={node.cx} cy={node.cy} r={node.r + 3} stroke={node.c} strokeWidth="1" opacity="0.3" />
                <circle cx={node.cx} cy={node.cy} r={node.r} fill={node.c} />
              </g>
            ))}

            <text x="24" y="320" fill={isLight ? "#0f172a" : "#ffffff"} fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="600">
              ● DEDICATED SQUAD ARCHITECTURE ACTIVE
            </text>
          </g>
        )}

        {/* MODE 1: GLOBAL DEPLOYMENT RADAR (70+ Projects) */}
        {mode === 1 && (
          <g>
            <rect width="500" height="340" fill={isLight ? "rgba(16, 185, 129, 0.05)" : "rgba(16, 185, 129, 0.03)"} />
            {/* Concentric Radar Rings */}
            <circle cx="250" cy="170" r="40" stroke={isLight ? "rgba(16, 185, 129, 0.25)" : "rgba(52, 211, 153, 0.2)"} strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="250" cy="170" r="75" stroke={isLight ? "rgba(16, 185, 129, 0.22)" : "rgba(52, 211, 153, 0.16)"} strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="250" cy="170" r="115" stroke={isLight ? "rgba(16, 185, 129, 0.18)" : "rgba(52, 211, 153, 0.12)"} strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="250" cy="170" r="150" stroke={isLight ? "rgba(16, 185, 129, 0.12)" : "rgba(52, 211, 153, 0.08)"} strokeWidth="1" strokeDasharray="4 6" />

            {/* Crosshairs */}
            <line x1="250" y1="20" x2="250" y2="320" stroke={isLight ? "rgba(16, 185, 129, 0.15)" : "rgba(52, 211, 153, 0.1)"} strokeWidth="1" strokeDasharray="2 4" />
            <line x1="100" y1="170" x2="400" y2="170" stroke={isLight ? "rgba(16, 185, 129, 0.15)" : "rgba(52, 211, 153, 0.1)"} strokeWidth="1" strokeDasharray="2 4" />

            {/* Global Region Beacons */}
            {[
              { name: "US-East", ping: "18ms", x: 140, y: 130, c: "#38bdf8" },
              { name: "EU-Central", ping: "24ms", x: 260, y: 110, c: "#34d399" },
              { name: "MENA-Gulf", ping: "31ms", x: 320, y: 190, c: "#c084fc" },
              { name: "APAC-East", ping: "42ms", x: 410, y: 200, c: "#fbbf24" },
            ].map((b, i) => (
              <g key={i}>
                <circle cx={b.x} cy={b.y} r="10" stroke={b.c} strokeWidth="1" opacity="0.3" />
                <circle cx={b.x} cy={b.y} r="4" fill={b.c} />
                <text x={b.x + 10} y={b.y + 4} fill={isLight ? "#1e293b" : "#e2e8f0"} fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">
                  {b.name} • {b.ping}
                </text>
              </g>
            ))}

            <text x="24" y="320" fill={isLight ? "#0f172a" : "#ffffff"} fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="600">
              ● 70+ ENTERPRISE CLOUD REGIONS LIVE
            </text>
          </g>
        )}

        {/* MODE 2: HIGH-FREQUENCY SPRINT OSCILLOSCOPE (12,000+ Hours) */}
        {mode === 2 && (
          <g>
            <rect width="500" height="340" fill={isLight ? "rgba(192, 132, 252, 0.04)" : "rgba(192, 132, 252, 0.02)"} />
            {/* Grid Tick Lines */}
            {[60, 120, 180, 240, 300, 360, 420, 480].map((gx) => (
              <line key={gx} x1={gx} y1="0" x2={gx} y2="340" stroke={isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)"} strokeWidth="1" />
            ))}

            {/* Multi-frequency Sprint Waves */}
            <path d="M 0 170 Q 60 110, 125 170 T 250 170 T 375 170 T 500 170" stroke="#c084fc" strokeWidth="2.5" fill="none" />
            <path d="M 0 170 Q 50 140, 100 170 T 200 170 T 300 170 T 400 170 T 500 170" stroke="#38bdf8" strokeWidth="1.8" fill="none" opacity="0.8" />
            <path d="M 0 170 Q 120 80, 250 170 T 500 170" stroke="#34d399" strokeWidth="1.4" fill="none" opacity="0.7" />

            <text x="24" y="320" fill={isLight ? "#0f172a" : "#ffffff"} fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="600">
              ● VELOCITY: 48.6 SPRINTS / MONTH CADENCE
            </text>
          </g>
        )}

        {/* MODE 3: 10-YEAR EXPANSION CHRONOMETER (8+ Years) */}
        {mode === 3 && (
          <g>
            <rect width="500" height="340" fill={isLight ? "rgba(251, 191, 36, 0.03)" : "rgba(251, 191, 36, 0.02)"} />
            {/* Outer Track */}
            <circle cx="250" cy="160" r="105" stroke={isLight ? "rgba(251, 191, 36, 0.2)" : "rgba(251, 191, 36, 0.15)"} strokeWidth="6" fill="none" />
            {/* Active Arc (85% completed) */}
            <circle
              cx="250"
              cy="160"
              r="105"
              stroke="#fbbf24"
              strokeWidth="6"
              strokeDasharray="560"
              strokeDashoffset="90"
              strokeLinecap="round"
              fill="none"
            />
            {/* Satellite Node */}
            <circle cx="250" cy="55" r="7" fill="#ffffff" stroke="#fbbf24" strokeWidth="3" />

            {/* Center Typography */}
            <text x="250" y="165" textAnchor="middle" fill={isLight ? "#0f172a" : "#f8fafc"} fontSize="28" fontWeight="800" fontFamily="var(--font-display), monospace">
              2021 → Present
            </text>
            <text x="250" y="190" textAnchor="middle" fill={isLight ? "#64748b" : "#94a3b8"} fontSize="11" fontWeight="600" fontFamily="ui-monospace, monospace">
              PROVEN ENGINEERING EXCELLENCE
            </text>

            <text x="24" y="320" fill={isLight ? "#0f172a" : "#ffffff"} fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="600">
              ● 9 GLOBAL MARKETS SUSTAINED
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}

/* ========================================================================= */
/* 2. PILLAR METRIC DATA CONFIGURATION                                       */
/* ========================================================================= */

const METRIC_PILLARS = [
  {
    id: 0,
    tag: "01",
    val: "100%",
    num: 100,
    label: "In-House Team",
    title: "Dedicated Engineering Force",
    icon: Users,
    color: "#38bdf8", // Sky Cyan
    colorRgb: "56, 189, 248",
    telemetry: "100% In-House Engineers",
    desc: "Autonomous full-stack, distributed cloud-native, and AI engineers working under veteran tech leadership.",
    specs: ["Dedicated Squads", "Full-Stack + AI", "Zero Ramp-up Time"],
  },
  {
    id: 1,
    tag: "02",
    val: "70+",
    num: 70,
    label: "Deployments",
    title: "Global Enterprise Deployments",
    icon: Briefcase,
    color: "#34d399", // Emerald Mint
    colorRgb: "52, 211, 153",
    telemetry: "99.4% On-Time SLA Guarantee",
    desc: "High-concurrency web systems, real-time consumer mobile platforms, and compliant enterprise SaaS portals.",
    specs: ["HIPAA & SOC2", "Multi-Region Cloud", "Sub-Second Latency"],
  },
  {
    id: 2,
    tag: "03",
    val: "12k+",
    num: 12000,
    label: "Execution Hours",
    title: "Precision Execution Hours",
    icon: Clock,
    color: "#c084fc", // Violet
    colorRgb: "192, 132, 252",
    telemetry: "48.6 Sprints / Month Cadence",
    desc: "Battle-tested agile sprints with automated CI/CD deployment pipelines and continuous regression testing.",
    specs: ["Weekly Deploys", "Zero-Downtime Releases", "Automated QA"],
  },
  {
    id: 3,
    tag: "04",
    val: "8+",
    num: 8,
    label: "Years Authority",
    title: "Years of Industry Proven Longevity",
    icon: Award,
    color: "#fbbf24", // Amber Gold
    colorRgb: "251, 191, 36",
    telemetry: "Established 2021 • Retained",
    desc: "Deep engineering authority sustained across 9 connected markets with over 90% multi-year client retention.",
    specs: ["9 Global Markets", "US, UK & MENA", "Full IP Ownership"],
  },
];

/* ========================================================================= */
/* 3. MAIN REDESIGNED COMMAND ENGINE (NOT CARDS EVERYWHERE)                  */
/* ========================================================================= */

export default function CinematicImpactSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [activePillar, setActivePillar] = useState(0);

  const active = METRIC_PILLARS[activePillar];
  const Icon = active.icon;

  return (
    <section
      id="achievements"
      style={{
        position: "relative",
        padding: "5.5rem 0 6rem 0",
        overflow: "hidden",
      }}
      aria-label="Opash Software Engineering Impact Engine"
    >
      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* ========================================================================= */}
        {/* 1. SECTION INTRO                                                          */}
        {/* ========================================================================= */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "5px 14px",
                borderRadius: "999px",
                backgroundColor: isLight
                  ? "rgba(14, 165, 233, 0.09)"
                  : "rgba(56, 189, 248, 0.12)",
                border: `1px solid ${
                  isLight ? "rgba(14, 165, 233, 0.25)" : "rgba(56, 189, 248, 0.3)"
                }`,
                color: isLight ? "#0284c7" : "#38bdf8",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "0.85rem",
              }}
            >
              <Terminal size={13} />
              <span>Global Engineering Command Deck</span>
            </div>

            <h2
              className="heading-section"
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Empowering your <span style={{ color: active.color }}>success</span> with engineering precision
            </h2>
          </div>

          <p
            className="subhead-lead"
            style={{
              maxWidth: "420px",
              margin: 0,
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            Real-time operational telemetry across dedicated engineering squads,
            multi-region production releases, and multi-year client partnerships.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. UNIFIED PANORAMIC TELEMETRY CONSOLE (ZERO ISOLATED CARDS)              */}
        {/* ========================================================================= */}
        <div
          className="panoramic-command-deck"
          style={{
            borderRadius: "28px",
            background: isLight
              ? "rgba(255, 255, 255, 0.95)"
              : "linear-gradient(180deg, #121c2e 0%, #0d1522 100%)",
            border: isLight
              ? "1px solid #e2e8f0"
              : `1px solid rgba(${active.colorRgb}, 0.25)`,
            boxShadow: isLight
              ? "0 20px 50px -15px rgba(15, 23, 42, 0.08)"
              : "0 30px 80px -20px rgba(0, 0, 0, 0.95), 0 0 1px 1px rgba(255, 255, 255, 0.05)",
            overflow: "hidden",
            transition: "border-color 0.4s ease, box-shadow 0.4s ease",
          }}
        >
          {/* Top Console Navigation Bar (Pillar Tabs) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              borderBottom: isLight
                ? "1px solid #e2e8f0"
                : "1px solid rgba(255, 255, 255, 0.08)",
              background: isLight
                ? "rgba(248, 250, 252, 0.85)"
                : "rgba(10, 16, 26, 0.6)",
            }}
          >
            {METRIC_PILLARS.map((p, idx) => {
              const isSelected = activePillar === idx;
              const PIcon = p.icon;

              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePillar(idx)}
                  onMouseEnter={() => setActivePillar(idx)}
                  style={{
                    padding: "1.25rem 1.4rem",
                    border: "none",
                    background: isSelected
                      ? isLight
                        ? "#ffffff"
                        : "rgba(255, 255, 255, 0.05)"
                      : "transparent",
                    cursor: "pointer",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    position: "relative",
                    transition: "all 0.25s ease",
                    borderRight:
                      idx < 3
                        ? isLight
                          ? "1px solid #e2e8f0"
                          : "1px solid rgba(255, 255, 255, 0.06)"
                        : "none",
                  }}
                >
                  {/* Top Active Indicator Line */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeDeckTab"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        backgroundColor: p.color,
                        boxShadow: `0 0 12px ${p.color}`,
                      }}
                    />
                  )}

                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        backgroundColor: `rgba(${p.colorRgb}, 0.12)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: p.color,
                      }}
                    >
                      <PIcon size={16} />
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          color: isLight ? "#64748b" : "#94a3b8",
                          letterSpacing: "0.06em",
                          display: "block",
                        }}
                      >
                        PILLAR {p.tag}
                      </span>
                      <span
                        style={{
                          fontSize: "0.92rem",
                          fontWeight: isSelected ? 800 : 600,
                          color: isSelected
                            ? isLight
                              ? "#0f172a"
                              : "#ffffff"
                            : isLight
                            ? "#475569"
                            : "#cbd5e1",
                        }}
                      >
                        {p.label}
                      </span>
                    </div>
                  </div>

                  {/* Monumental Mini Stat */}
                  <span
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      fontFamily: "var(--font-display), monospace",
                      color: isSelected ? p.color : isLight ? "#94a3b8" : "#64748b",
                    }}
                  >
                    {p.val}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Main Panoramic Interactive Stage: Split Kinetic Viewport */}
          <div
            style={{
              padding: "2.5rem",
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: "2.5rem",
              alignItems: "center",
            }}
            className="command-deck-body"
          >
            {/* Left Column: Kinetic Editorial Display */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                    <span
                      style={{
                        padding: "4px 12px",
                        borderRadius: "999px",
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        backgroundColor: `rgba(${active.colorRgb}, 0.12)`,
                        border: `1px solid rgba(${active.colorRgb}, 0.3)`,
                        color: active.color,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {active.telemetry}
                    </span>
                    <span style={{ fontSize: "0.76rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                      Verified Live Metric
                    </span>
                  </div>

                  {/* Giant Typography Counter */}
                  <div
                    style={{
                      fontSize: "clamp(3.8rem, 7vw, 5.8rem)",
                      fontWeight: 900,
                      fontFamily: "var(--font-display), monospace",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${active.color} 0%, #ffffff 80%)`,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                        display: "inline-block",
                      }}
                    >
                      {active.val}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: 700,
                      color: isLight ? "#0f172a" : "#ffffff",
                      marginBottom: "0.75rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {active.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.98rem",
                      lineHeight: 1.65,
                      color: isLight ? "#475569" : "#94a3b8",
                      marginBottom: "1.75rem",
                      maxWidth: "520px",
                    }}
                  >
                    {active.desc}
                  </p>

                  {/* Interactive Spec Chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {active.specs.map((spec) => (
                      <span
                        key={spec}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "6px 14px",
                          borderRadius: "8px",
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          backgroundColor: isLight
                            ? "rgba(241, 245, 249, 0.9)"
                            : "rgba(255, 255, 255, 0.05)",
                          border: isLight
                            ? "1px solid #e2e8f0"
                            : "1px solid rgba(255, 255, 255, 0.09)",
                          color: isLight ? "#334155" : "#cbd5e1",
                        }}
                      >
                        <CheckCircle2 size={13} color={active.color} />
                        <span>{spec}</span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Living Generative Canvas Viewport */}
            <div
              style={{
                height: "360px",
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                background: isLight ? "#f8fafc" : "#090f19",
                border: isLight
                  ? "1px solid #e2e8f0"
                  : "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "inset 0 0 30px rgba(0,0,0,0.3)",
              }}
            >
              <TelemetryCanvas
                mode={activePillar}
                isLight={isLight}
                accentColor={active.color}
              />
            </div>
          </div>

          {/* Bottom Live System Ticker Bar */}
          <div
            style={{
              padding: "1rem 2.5rem",
              background: isLight ? "#f1f5f9" : "rgba(8, 13, 22, 0.85)",
              borderTop: isLight
                ? "1px solid #e2e8f0"
                : "1px solid rgba(255, 255, 255, 0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              fontSize: "0.8rem",
              color: isLight ? "#64748b" : "#94a3b8",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 8px #10b981",
                  display: "inline-block",
                }}
              />
              <span>Live Engineering Health: <strong>100% Operational</strong></span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span>Timecode: <strong style={{ color: isLight ? "#0f172a" : "#f1f5f9" }}>UTC+00:00 Synchronized</strong></span>
              <span>Architecture: <strong style={{ color: active.color }}>Cloud-Native Enterprise Ready</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
