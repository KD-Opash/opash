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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 340);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Initialize 40 interactive nodes for Mode 0 (Squad Network)
    const nodes = Array.from({ length: 36 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.9,
      vy: (Math.random() - 0.5) * 0.9,
      radius: Math.random() * 2.5 + 2,
    }));

    // Radar beacons for Mode 1 (Global Reach)
    const beacons = [
      { name: "US-East", x: 0.28, y: 0.42, ping: 18, color: "#38bdf8" },
      { name: "EU-Central", x: 0.52, y: 0.36, ping: 24, color: "#34d399" },
      { name: "MENA-Gulf", x: 0.64, y: 0.54, ping: 31, color: "#c084fc" },
      { name: "APAC-East", x: 0.82, y: 0.58, ping: 42, color: "#fbbf24" },
    ];

    let t = 0;

    const render = () => {
      t += 0.025;
      ctx.clearRect(0, 0, width, height);

      // MODE 0: NEURAL SQUAD NETWORK (50+ Developers)
      if (mode === 0) {
        ctx.fillStyle = isLight ? "rgba(14, 165, 233, 0.08)" : "rgba(56, 189, 248, 0.06)";
        ctx.fillRect(0, 0, width, height);

        // Update and draw nodes
        nodes.forEach((node, i) => {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          // Mouse attraction
          if (mouseRef.current.active) {
            const dx = mouseRef.current.x - node.x;
            const dy = mouseRef.current.y - node.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 120) {
              node.x += (dx / dist) * 1.2;
              node.y += (dy / dist) * 1.2;
            }
          }

          // Draw node
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = isLight ? "#0284c7" : "#38bdf8";
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = isLight ? 0 : 8;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Connect nearby nodes
          for (let j = i + 1; j < nodes.length; j++) {
            const other = nodes[j];
            const dist = Math.hypot(node.x - other.x, node.y - other.y);
            if (dist < 85) {
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = isLight
                ? `rgba(2, 132, 199, ${0.45 * (1 - dist / 85)})`
                : `rgba(56, 189, 248, ${0.45 * (1 - dist / 85)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });

        // Center telemetry badge
        ctx.fillStyle = isLight ? "#0f172a" : "#ffffff";
        ctx.font = "600 12px ui-monospace, monospace";
        ctx.fillText("● 50 SENIOR ARCHITECT NODES SYNCED", 20, height - 20);
      }

      // MODE 1: GLOBAL DEPLOYMENT RADAR (70+ Projects)
      else if (mode === 1) {
        const cx = width * 0.5;
        const cy = height * 0.5;

        // Concentric radar rings
        for (let r = 40; r < Math.min(width, height) * 0.45; r += 35) {
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.strokeStyle = isLight ? "rgba(16, 185, 129, 0.18)" : "rgba(52, 211, 153, 0.14)";
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 6]);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Sweeping radar beam
        const sweepAngle = t * 1.5;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(sweepAngle);
        const grad = ctx.createRadialGradient(0, 0, 10, 0, 0, Math.min(width, height) * 0.45);
        grad.addColorStop(0, "rgba(52, 211, 153, 0.35)");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, Math.min(width, height) * 0.45, -0.35, 0);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // Draw global beacons
        beacons.forEach((b) => {
          const bx = b.x * width;
          const by = b.y * height;
          const pulse = (Math.sin(t * 3 + b.ping) + 1) * 0.5;

          // Pulse wave
          ctx.beginPath();
          ctx.arc(bx, by, 8 + pulse * 14, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(52, 211, 153, ${0.6 - pulse * 0.5})`;
          ctx.stroke();

          // Core point
          ctx.beginPath();
          ctx.arc(bx, by, 4, 0, Math.PI * 2);
          ctx.fillStyle = b.color;
          ctx.fill();

          // Label
          ctx.fillStyle = isLight ? "#1e293b" : "#e2e8f0";
          ctx.font = "700 11px ui-monospace, monospace";
          ctx.fillText(`${b.name} • ${b.ping}ms`, bx + 10, by + 4);
        });

        ctx.fillStyle = isLight ? "#0f172a" : "#ffffff";
        ctx.font = "600 12px ui-monospace, monospace";
        ctx.fillText("● 70+ ENTERPRISE CLOUD REGIONS LIVE", 20, height - 20);
      }

      // MODE 2: HIGH-FREQUENCY SPRINT OSCILLOSCOPE (12,000+ Hours)
      else if (mode === 2) {
        ctx.fillStyle = isLight ? "rgba(192, 132, 252, 0.05)" : "rgba(192, 132, 252, 0.04)";
        ctx.fillRect(0, 0, width, height);

        // Multiple overlapping sine waves
        const waves = [
          { freq: 0.015, amp: 45, speed: 2.2, color: "#c084fc", width: 2.5 },
          { freq: 0.022, amp: 30, speed: 1.6, color: "#38bdf8", width: 1.8 },
          { freq: 0.008, amp: 55, speed: 1.0, color: "#34d399", width: 1.2 },
        ];

        waves.forEach((w) => {
          ctx.beginPath();
          ctx.strokeStyle = w.color;
          ctx.lineWidth = w.width;
          ctx.shadowColor = w.color;
          ctx.shadowBlur = isLight ? 0 : 8;

          for (let x = 0; x < width; x += 4) {
            const y =
              height * 0.5 +
              Math.sin(x * w.freq + t * w.speed) * w.amp * Math.sin((x / width) * Math.PI);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
          ctx.shadowBlur = 0;
        });

        // Live grid tick lines
        ctx.strokeStyle = isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)";
        ctx.lineWidth = 1;
        for (let x = 0; x < width; x += 60) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }

        ctx.fillStyle = isLight ? "#0f172a" : "#ffffff";
        ctx.font = "600 12px ui-monospace, monospace";
        ctx.fillText("● VELOCITY: 48.6 SPRINTS / MONTH CADENCE", 20, height - 20);
      }

      // MODE 3: 10-YEAR EXPANSION CHRONOMETER (8+ Years)
      else {
        const cx = width * 0.5;
        const cy = height * 0.5;
        const radius = Math.min(width, height) * 0.38;

        // Outer progress track
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = isLight ? "rgba(251, 191, 36, 0.2)" : "rgba(251, 191, 36, 0.15)";
        ctx.lineWidth = 6;
        ctx.stroke();

        // Active glowing arc (2016 -> 2026)
        const progress = 0.85; // 8.5 years
        ctx.beginPath();
        ctx.arc(cx, cy, radius, -Math.PI * 0.5, -Math.PI * 0.5 + Math.PI * 2 * progress);
        ctx.strokeStyle = "#fbbf24";
        ctx.lineWidth = 6;
        ctx.shadowColor = "#fbbf24";
        ctx.shadowBlur = isLight ? 0 : 12;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Orbiting satellite dot
        const satAngle = -Math.PI * 0.5 + Math.PI * 2 * progress;
        const sx = cx + Math.cos(satAngle) * radius;
        const sy = cy + Math.sin(satAngle) * radius;
        ctx.beginPath();
        ctx.arc(sx, sy, 8, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#fbbf24";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Center typography
        ctx.textAlign = "center";
        ctx.fillStyle = isLight ? "#0f172a" : "#f8fafc";
        ctx.font = "800 28px var(--font-display), monospace";
        ctx.fillText("2016 → 2026", cx, cy + 6);

        ctx.fillStyle = isLight ? "#64748b" : "#94a3b8";
        ctx.font = "600 12px ui-monospace, monospace";
        ctx.fillText("DECADE OF ARCHITECTURAL EXCELLENCE", cx, cy + 28);
        ctx.textAlign = "start";

        ctx.fillStyle = isLight ? "#0f172a" : "#ffffff";
        ctx.font = "600 12px ui-monospace, monospace";
        ctx.fillText("● 9 GLOBAL MARKETS SUSTAINED", 20, height - 20);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };
    const handlePointerLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener("mousemove", handlePointerMove);
    canvas.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handlePointerMove);
      canvas.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [mode, isLight, accentColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        borderRadius: "18px",
      }}
    />
  );
}

/* ========================================================================= */
/* 2. PILLAR METRIC DATA CONFIGURATION                                       */
/* ========================================================================= */

const METRIC_PILLARS = [
  {
    id: 0,
    tag: "01",
    val: "50+",
    num: 50,
    label: "Engineers",
    title: "Senior Engineering Force",
    icon: Users,
    color: "#38bdf8", // Sky Cyan
    colorRgb: "56, 189, 248",
    telemetry: "98% Senior Talent Ratio",
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
    telemetry: "Established 2016 • Retained",
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
      {/* Ambient Radial Spotlight */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1200px",
          height: "450px",
          borderRadius: "50%",
          background: isLight
            ? "radial-gradient(circle, rgba(14, 165, 233, 0.06) 0%, transparent 70%)"
            : `radial-gradient(circle, rgba(${active.colorRgb}, 0.08) 0%, transparent 75%)`,
          filter: "blur(90px)",
          pointerEvents: "none",
          transition: "background 0.5s ease",
          zIndex: 0,
        }}
      />

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
              : `0 30px 80px -20px rgba(0, 0, 0, 0.95), 0 0 50px -15px rgba(${active.colorRgb}, 0.15)`,
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
                        background: `linear-gradient(135deg, ${active.color} 0%, #ffffff 80%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
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
