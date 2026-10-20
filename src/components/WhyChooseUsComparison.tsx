"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Zap,
  Award,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Layers,
  Crown,
  FileCode2,
  Gauge,
  HeartHandshake,
  Check,
  X,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface MetricRow {
  id: string;
  metric: string;
  category: string;
  categoryTag: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  opash: string;
  opashDetail: string;
  opashStat: string;
  opashKpi: string;
  agency: string;
  agencyDetail: string;
  agencyTag: string;
  freelancers: string;
  freelancersDetail: string;
  freelancersTag: string;
  scoreOpash: number; // 0-100 for visual meter
  scoreAgency: number;
  scoreFreelancers: number;
}

const COMPARISON_DATA: MetricRow[] = [
  {
    id: "ip-ownership",
    metric: "Code & IP Rights Ownership",
    category: "Legal & Governance",
    categoryTag: "LEGAL",
    icon: ShieldCheck,
    opash: "100% Yours from Day 1",
    opashDetail: "Instant, irrevocable ownership transfer of GitHub repos, architectural diagrams, patents, and production keys upon creation.",
    opashStat: "100% IP Ownership",
    opashKpi: "Zero IP Lock-in",
    agency: "Often restricted or licensed",
    agencyDetail: "Proprietary IP lock-in clauses and punitive buy-out licensing fees required after deployment.",
    agencyTag: "Vendor Lock-in Risk",
    freelancers: "Unclear ownership / disputed",
    freelancersDetail: "Ambiguous contracts, code re-use across rival client projects, and legal copyright exposure.",
    freelancersTag: "Copyright Risk",
    scoreOpash: 100,
    scoreAgency: 35,
    scoreFreelancers: 20,
  },
  {
    id: "vetting-standard",
    metric: "Seniority & Vetting Standard",
    category: "Talent Quality",
    categoryTag: "TALENT",
    icon: Users,
    opash: "Top 3% Pre-Screened Senior Devs",
    opashDetail: "Multi-round live coding audits, system architecture simulations, and domain-specialist technical screening.",
    opashStat: "Top 3% Talent Only",
    opashKpi: "Staff+ Engineers",
    agency: "Junior devs with senior markups",
    agencyDetail: "Bait-and-switch staffing model where inexperienced junior devs learn on your live production budget.",
    agencyTag: "Bait & Switch",
    freelancers: "Inconsistent quality & ghosting",
    freelancersDetail: "Self-proclaimed credentials, unverified code quality, zero testing culture, and frequent mid-sprint dropouts.",
    freelancersTag: "Ghosting Risk",
    scoreOpash: 98,
    scoreAgency: 42,
    scoreFreelancers: 28,
  },
  {
    id: "delivery-velocity",
    metric: "Delivery Velocity & Cadence",
    category: "Execution Speed",
    categoryTag: "VELOCITY",
    icon: Zap,
    opash: "2-Week Agile Sprints + Live Demos",
    opashDetail: "Continuous CI/CD deployment pipelines, bi-weekly clickable staging releases, and transparent burndown telemetry.",
    opashStat: "2-Week Sprints",
    opashKpi: "Bi-Weekly Demos",
    agency: "Monthly slow waterfall reviews",
    agencyDetail: "Opaque development silos, quarterly delays, scope creep disputes, and unexpected change-request charges.",
    agencyTag: "Waterfall Slippage",
    freelancers: "Unpredictable hours & availability",
    freelancersDetail: "Juggling multiple client projects simultaneously with erratic milestone deliveries and zero accountability.",
    freelancersTag: "Erratic Milestones",
    scoreOpash: 96,
    scoreAgency: 48,
    scoreFreelancers: 32,
  },
  {
    id: "post-launch-sla",
    metric: "Post-Launch Warranty & SLA",
    category: "Reliability & Uptime",
    categoryTag: "WARRANTY",
    icon: Award,
    opash: "30-Day Free Warranty + 24/7 SLA",
    opashDetail: "Comprehensive zero-cost bug coverage, guaranteed production uptime commitments, and an immediate rapid hotfix team.",
    opashStat: "30-Day Guarantee",
    opashKpi: "< 15m Critical SLA",
    agency: "High billable hourly support",
    agencyDetail: "Punitive retainer contracts and expensive minimum hourly billing gates just to address regression bugs.",
    agencyTag: "Expensive Retainers",
    freelancers: "Zero post-project support",
    freelancersDetail: "Completely unavailable once final invoices are settled, leaving internal teams with undocumented legacy code.",
    freelancersTag: "Zero Support",
    scoreOpash: 99,
    scoreAgency: 50,
    scoreFreelancers: 12,
  },
  {
    id: "timezone-alignment",
    metric: "Timezone Alignment & Sync",
    category: "Collaboration",
    categoryTag: "SYNC",
    icon: Clock,
    opash: "4+ Hours Synchronous US/EU Overlap",
    opashDetail: "Live pair programming, real-time shared Slack/Teams channels, and instant daily unblocking during your working day.",
    opashStat: "4+ Hours Sync Overlap",
    opashKpi: "Real-time Slack/Teams",
    agency: "Rigid local hours only",
    agencyDetail: "24-hour delayed back-and-forth email communications that stall daily sprint progress and blocker resolution.",
    agencyTag: "24h Latency",
    freelancers: "Disjointed & delayed replies",
    freelancersDetail: "Erratic reply windows, major timezone disconnects, missed standups, and lack of real-time collaboration.",
    freelancersTag: "Disconnected",
    scoreOpash: 97,
    scoreAgency: 40,
    scoreFreelancers: 25,
  },
];

export function WhyChooseUsComparison() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [activeMetricId, setActiveMetricId] = useState<string>("ip-ownership");
  const [activeTab, setActiveTab] = useState<"matrix" | "cards">("matrix");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const filteredData =
    filterCategory === "all"
      ? COMPARISON_DATA
      : COMPARISON_DATA.filter((row) => row.categoryTag.toLowerCase() === filterCategory.toLowerCase());

  const activeRow =
    COMPARISON_DATA.find((r) => r.id === activeMetricId) || COMPARISON_DATA[0];

  return (
    <section
      id="why-choose-us"
      className="why-choose-us-section"
      aria-label="Why Global Brands Choose Opash Software"
      style={{
        position: "relative",
        padding: "7rem 0 7.5rem 0",
        overflow: "hidden",
        backgroundColor: isLight ? "#f8fafc" : "#030814",
        color: isLight ? "#0f172a" : "#f8fafc",
        transition: "background-color 0.4s ease, color 0.4s ease",
      }}
    >
      {/* ========================================================================= */}
      {/* 1. COLORBENDS DYNAMIC SHADER BACKGROUND                                  */}
      {/* ========================================================================= */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "20%",
            width: "60%",
            height: "500px",
            background: isLight
              ? "radial-gradient(ellipse at center, rgba(0, 168, 143, 0.12) 0%, transparent 70%)"
              : "radial-gradient(ellipse at center, rgba(0, 187, 171, 0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "10%",
            width: "55%",
            height: "550px",
            background: isLight
              ? "radial-gradient(ellipse at center, rgba(14, 165, 233, 0.1) 0%, transparent 70%)"
              : "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "15%",
            width: "50%",
            height: "450px",
            background: isLight
              ? "radial-gradient(ellipse at center, rgba(138, 92, 255, 0.08) 0%, transparent 70%)"
              : "radial-gradient(ellipse at center, rgba(129, 140, 248, 0.14) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Atmospheric Frosted Glass & Vignette Depth Overlays */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: isLight
            ? "radial-gradient(ellipse at 50% 25%, rgba(248, 250, 252, 0.75) 0%, rgba(248, 250, 252, 0.92) 65%, #f8fafc 100%)"
            : "radial-gradient(ellipse at 50% 25%, rgba(3, 8, 20, 0.62) 0%, rgba(3, 8, 20, 0.88) 65%, #030814 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 255, 209, 0.12) 0%, rgba(138, 92, 255, 0.08) 50%, transparent 75%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* ========================================================================= */}
      {/* 2. SECTION CONTENT CONTAINER                                             */}
      {/* ========================================================================= */}
      <div className="container-custom" style={{ position: "relative", zIndex: 2 }}>
        
        {/* HEADER BLOCK */}
        <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3.25rem auto" }}>
          
          {/* Cyber Holographic Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.45rem 1.15rem",
              borderRadius: "9999px",
              background: isLight
                ? "linear-gradient(135deg, rgba(255, 92, 122, 0.08) 0%, rgba(138, 92, 255, 0.08) 50%, rgba(0, 255, 209, 0.08) 100%)"
                : "linear-gradient(135deg, rgba(255, 92, 122, 0.16) 0%, rgba(138, 92, 255, 0.16) 50%, rgba(0, 255, 209, 0.16) 100%)",
              border: `1px solid ${isLight ? "rgba(138, 92, 255, 0.3)" : "rgba(0, 255, 209, 0.35)"}`,
              backdropFilter: "blur(12px)",
              color: isLight ? "#7c3aed" : "#00ffd1",
              fontSize: "0.82rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              boxShadow: isLight
                ? "0 4px 16px rgba(138, 92, 255, 0.1)"
                : "0 4px 20px rgba(0, 255, 209, 0.15)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#00ffd1",
                boxShadow: "0 0 10px #00ffd1",
                display: "inline-block",
              }}
            />
            <span>2026 Engineering Architecture Audit</span>
            <Sparkles size={14} style={{ color: "#ff5c7a" }} />
          </div>

          <h2
            className="heading-section"
            style={{
              fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)",
              fontWeight: 850,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              margin: "0 0 1.25rem 0",
            }}
          >
            Why Global Brands{" "}
            <span className="opash-hero-gradient-text">
              Choose Us
            </span>
          </h2>

          <p
            className="subhead-lead"
            style={{
              fontSize: "clamp(1.02rem, 1.8vw, 1.18rem)",
              color: isLight ? "#475569" : "#94a3b8",
              maxWidth: "720px",
              margin: "0 auto 2rem auto",
              lineHeight: 1.65,
            }}
          >
            A direct, transparent benchmark of Opash’s dedicated agile squad model against traditional waterfall outsourcing shops and fragmented freelance platforms.
          </p>

          {/* Interactive Controls & View Mode Selector */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            {/* View Switcher: Executive Matrix vs Interactive Battlecards */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "4px",
                borderRadius: "14px",
                background: isLight ? "rgba(226, 232, 240, 0.7)" : "rgba(15, 23, 42, 0.75)",
                border: `1px solid ${isLight ? "rgba(203, 213, 225, 0.8)" : "rgba(255, 255, 255, 0.1)"}`,
                backdropFilter: "blur(14px)",
                gap: "4px",
              }}
            >
              <button
                onClick={() => setActiveTab("matrix")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "10px",
                  fontSize: "0.86rem",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  background:
                    activeTab === "matrix"
                      ? isLight
                        ? "#ffffff"
                        : "linear-gradient(135deg, rgba(0, 255, 209, 0.2) 0%, rgba(138, 92, 255, 0.25) 100%)"
                      : "transparent",
                  color:
                    activeTab === "matrix"
                      ? isLight
                        ? "#0f172a"
                        : "#00ffd1"
                      : isLight
                      ? "#64748b"
                      : "#94a3b8",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor:
                    activeTab === "matrix"
                      ? isLight
                        ? "rgba(0,0,0,0.08)"
                        : "rgba(0, 255, 209, 0.4)"
                      : "transparent",
                  boxShadow:
                    activeTab === "matrix"
                      ? isLight
                        ? "0 4px 12px rgba(0,0,0,0.06)"
                        : "0 4px 20px rgba(0, 255, 209, 0.2)"
                      : "none",
                }}
              >
                <Layers size={15} />
                <span>Executive Matrix</span>
              </button>

              <button
                onClick={() => setActiveTab("cards")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "10px",
                  fontSize: "0.86rem",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  background:
                    activeTab === "cards"
                      ? isLight
                        ? "#ffffff"
                        : "linear-gradient(135deg, rgba(0, 255, 209, 0.2) 0%, rgba(138, 92, 255, 0.25) 100%)"
                      : "transparent",
                  color:
                    activeTab === "cards"
                      ? isLight
                        ? "#0f172a"
                        : "#00ffd1"
                      : isLight
                      ? "#64748b"
                      : "#94a3b8",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor:
                    activeTab === "cards"
                      ? isLight
                        ? "rgba(0,0,0,0.08)"
                        : "rgba(0, 255, 209, 0.4)"
                      : "transparent",
                  boxShadow:
                    activeTab === "cards"
                      ? isLight
                        ? "0 4px 12px rgba(0,0,0,0.06)"
                        : "0 4px 20px rgba(0, 255, 209, 0.2)"
                      : "none",
                }}
              >
                <Gauge size={15} />
                <span>Interactive Battlecards</span>
              </button>
            </div>

            {/* Quick Filter Pills (All, Legal, Talent, Velocity, Warranty, Sync) */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                flexWrap: "wrap",
                padding: "3px 8px",
                borderRadius: "12px",
                background: isLight ? "rgba(241, 245, 249, 0.6)" : "rgba(255, 255, 255, 0.04)",
                border: `1px solid ${isLight ? "rgba(226, 232, 240, 0.7)" : "rgba(255, 255, 255, 0.06)"}`,
              }}
            >
              {[
                { id: "all", label: "All Dimensions" },
                { id: "legal", label: "IP Ownership" },
                { id: "talent", label: "Seniority" },
                { id: "velocity", label: "Sprint Speed" },
                { id: "warranty", label: "SLA" },
                { id: "sync", label: "Timezone" },
              ].map((pill) => {
                const isSelected = filterCategory === pill.id;
                return (
                  <button
                    key={pill.id}
                    onClick={() => setFilterCategory(pill.id)}
                    style={{
                      border: "none",
                      background: isSelected
                        ? isLight
                          ? "#0f172a"
                          : "#00ffd1"
                        : "transparent",
                      color: isSelected
                        ? isLight
                          ? "#ffffff"
                          : "#030814"
                        : isLight
                        ? "#64748b"
                        : "#94a3b8",
                      fontWeight: isSelected ? 700 : 500,
                      fontSize: "0.78rem",
                      padding: "0.3rem 0.7rem",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {pill.label}
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. VIEW 1: ELEVATED ARCHITECTURAL COMPARISON MATRIX                      */}
        {/* ========================================================================= */}
        {activeTab === "matrix" && (
          <div
            style={{
              position: "relative",
              borderRadius: "28px",
              background: isLight
                ? "rgba(255, 255, 255, 0.85)"
                : "rgba(8, 14, 28, 0.78)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: `1px solid ${isLight ? "rgba(226, 232, 240, 0.85)" : "rgba(255, 255, 255, 0.08)"}`,
              boxShadow: isLight
                ? "0 25px 60px -15px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.9)"
                : "0 30px 80px -20px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.06)",
              overflow: "hidden",
            }}
          >
            {/* Luminous Top Accent Rail */}
            <div
              style={{
                height: "3px",
                width: "100%",
                background: "linear-gradient(90deg, #ff5c7a 0%, #8a5cff 35%, #00ffd1 70%, #10b981 100%)",
              }}
            />

            {/* Matrix Header Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.3fr 1.6fr 1.15fr 1.15fr",
                alignItems: "stretch",
                borderBottom: `1px solid ${isLight ? "rgba(226, 232, 240, 0.9)" : "rgba(255, 255, 255, 0.08)"}`,
                background: isLight ? "rgba(248, 250, 252, 0.75)" : "rgba(10, 18, 34, 0.65)",
              }}
            >
              {/* Column 1 Title */}
              <div style={{ padding: "1.75rem 1.6rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: isLight ? "#64748b" : "#94a3b8",
                  }}
                >
                  Key Engineering Dimension
                </span>
                <span style={{ fontSize: "0.75rem", color: isLight ? "#94a3b8" : "#64748b", marginTop: "2px" }}>
                  Verified SLA & Execution Standards
                </span>
              </div>

              {/* OPASH CHAMPION COLUMN HEADER */}
              <div
                style={{
                  padding: "1.75rem 1.6rem",
                  background: isLight
                    ? "linear-gradient(180deg, rgba(0, 255, 209, 0.12) 0%, rgba(16, 185, 129, 0.05) 100%)"
                    : "linear-gradient(180deg, rgba(0, 255, 209, 0.15) 0%, rgba(138, 92, 255, 0.06) 100%)",
                  borderLeft: `1px solid ${isLight ? "rgba(0, 255, 209, 0.45)" : "rgba(0, 255, 209, 0.35)"}`,
                  borderRight: `1px solid ${isLight ? "rgba(0, 255, 209, 0.45)" : "rgba(0, 255, 209, 0.35)"}`,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                  boxShadow: isLight
                    ? "inset 0 1px 0 rgba(0, 255, 209, 0.4)"
                    : "inset 0 1px 0 rgba(0, 255, 209, 0.5)",
                }}
              >
                {/* Glowing Champion Pill Badge */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      fontSize: "1.12rem",
                      fontWeight: 850,
                      color: isLight ? "#0f766e" : "#00ffd1",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        padding: "4px",
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #00ffd1 0%, #10b981 100%)",
                        color: "#030814",
                      }}
                    >
                      <Zap size={13} fill="#030814" />
                    </span>
                    Opash Software Squad
                  </div>

                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      fontSize: "0.68rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      background: "linear-gradient(135deg, #00ffd1 0%, #10b981 100%)",
                      color: "#030814",
                      padding: "3px 10px",
                      borderRadius: "9999px",
                      boxShadow: "0 2px 10px rgba(0, 255, 209, 0.4)",
                    }}
                  >
                    <Crown size={11} />
                    <span>Leader</span>
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "0.78rem", color: isLight ? "#475569" : "#cbd5e1", fontWeight: 500 }}>
                    Dedicated Full-Stack Agile Squad
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      padding: "1px 6px",
                      borderRadius: "6px",
                      background: isLight ? "rgba(16, 185, 129, 0.15)" : "rgba(0, 255, 209, 0.15)",
                      color: isLight ? "#047857" : "#00ffd1",
                      fontWeight: 700,
                    }}
                  >
                    Zero Overhead
                  </span>
                </div>
              </div>

              {/* Traditional Agency Header */}
              <div
                style={{
                  padding: "1.75rem 1.4rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "0.25rem",
                  borderRight: `1px solid ${isLight ? "rgba(226, 232, 240, 0.9)" : "rgba(255, 255, 255, 0.08)"}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <span style={{ fontSize: "0.98rem", fontWeight: 700, color: isLight ? "#334155" : "#cbd5e1" }}>
                    Traditional Agency
                  </span>
                </div>
                <span style={{ fontSize: "0.76rem", color: isLight ? "#94a3b8" : "#64748b" }}>
                  Waterfall Outsourcing Shop
                </span>
              </div>

              {/* Freelance Portals Header */}
              <div
                style={{
                  padding: "1.75rem 1.4rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "0.25rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <span style={{ fontSize: "0.98rem", fontWeight: 700, color: isLight ? "#334155" : "#cbd5e1" }}>
                    Freelance Portals
                  </span>
                </div>
                <span style={{ fontSize: "0.76rem", color: isLight ? "#94a3b8" : "#64748b" }}>
                  Fragmented Gig Marketplaces
                </span>
              </div>
            </div>

            {/* Matrix Data Rows */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {filteredData.map((row, idx) => {
                const isHovered = activeMetricId === row.id;
                const IconComponent = row.icon;

                return (
                  <div
                    key={row.id}
                    onMouseEnter={() => setActiveMetricId(row.id)}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.3fr 1.6fr 1.15fr 1.15fr",
                      alignItems: "center",
                      borderBottom:
                        idx === filteredData.length - 1
                          ? "none"
                          : `1px solid ${isLight ? "rgba(241, 245, 249, 0.95)" : "rgba(255, 255, 255, 0.05)"}`,
                      background: isHovered
                        ? isLight
                          ? "rgba(248, 250, 252, 0.95)"
                          : "rgba(255, 255, 255, 0.03)"
                        : "transparent",
                      transition: "all 0.25s ease",
                      cursor: "pointer",
                      position: "relative",
                    }}
                  >
                    {/* Active Row Side Accent Indicator */}
                    {isHovered && (
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: "4px",
                          background: "linear-gradient(180deg, #00ffd1 0%, #8a5cff 100%)",
                          boxShadow: "0 0 12px #00ffd1",
                        }}
                      />
                    )}

                    {/* Column 1: Dimension Pillar */}
                    <div
                      style={{
                        padding: "1.5rem 1.6rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.95rem",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: isHovered
                            ? isLight
                              ? "rgba(138, 92, 255, 0.12)"
                              : "rgba(0, 255, 209, 0.18)"
                            : isLight
                            ? "#f1f5f9"
                            : "rgba(255, 255, 255, 0.05)",
                          color: isHovered
                            ? isLight
                              ? "#7c3aed"
                              : "#00ffd1"
                            : isLight
                            ? "#64748b"
                            : "#94a3b8",
                          border: `1px solid ${
                            isHovered
                              ? isLight
                                ? "rgba(138, 92, 255, 0.3)"
                                : "rgba(0, 255, 209, 0.35)"
                              : "transparent"
                          }`,
                          transition: "all 0.25s ease",
                          flexShrink: 0,
                        }}
                      >
                        <IconComponent size={20} />
                      </div>

                      <div>
                        <div
                          style={{
                            fontSize: "0.96rem",
                            fontWeight: 750,
                            color: isLight ? "#0f172a" : "#f1f5f9",
                            lineHeight: 1.3,
                          }}
                        >
                          {row.metric}
                        </div>
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            marginTop: "3px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.04em",
                              textTransform: "uppercase",
                              padding: "1px 6px",
                              borderRadius: "4px",
                              background: isLight ? "rgba(100, 116, 139, 0.1)" : "rgba(255, 255, 255, 0.08)",
                              color: isLight ? "#64748b" : "#94a3b8",
                            }}
                          >
                            {row.categoryTag}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: OPASH SQUAD (THE CHAMPION) */}
                    <div
                      style={{
                        padding: "1.5rem 1.6rem",
                        background: isHovered
                          ? isLight
                            ? "linear-gradient(180deg, rgba(0, 255, 209, 0.14) 0%, rgba(16, 185, 129, 0.08) 100%)"
                            : "linear-gradient(180deg, rgba(0, 255, 209, 0.18) 0%, rgba(138, 92, 255, 0.08) 100%)"
                          : isLight
                          ? "rgba(0, 255, 209, 0.05)"
                          : "rgba(0, 255, 209, 0.07)",
                        borderLeft: `1px solid ${isLight ? "rgba(0, 255, 209, 0.45)" : "rgba(0, 255, 209, 0.35)"}`,
                        borderRight: `1px solid ${isLight ? "rgba(0, 255, 209, 0.45)" : "rgba(0, 255, 209, 0.35)"}`,
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.8rem",
                        transition: "all 0.25s ease",
                        boxShadow: isHovered
                          ? isLight
                            ? "inset 0 0 20px rgba(0, 255, 209, 0.12)"
                            : "inset 0 0 25px rgba(0, 255, 209, 0.15)"
                          : "none",
                      }}
                    >
                      <div
                        style={{
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          background: "#00ffd1",
                          color: "#030814",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "2px",
                          boxShadow: "0 0 10px rgba(0, 255, 209, 0.4)",
                        }}
                      >
                        <Check size={14} strokeWidth={3} />
                      </div>

                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            flexWrap: "wrap",
                            marginBottom: "3px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.98rem",
                              fontWeight: 800,
                              color: isLight ? "#0f766e" : "#00ffd1",
                              lineHeight: 1.3,
                            }}
                          >
                            {row.opash}
                          </span>
                          <span
                            style={{
                              fontSize: "0.68rem",
                              fontWeight: 700,
                              padding: "1px 7px",
                              borderRadius: "9999px",
                              background: isLight ? "#ccfbf1" : "rgba(0, 255, 209, 0.18)",
                              color: isLight ? "#0f766e" : "#00ffd1",
                              border: `1px solid ${isLight ? "#5eead4" : "rgba(0, 255, 209, 0.3)"}`,
                            }}
                          >
                            {row.opashKpi}
                          </span>
                        </div>

                        <div
                          style={{
                            fontSize: "0.8rem",
                            color: isLight ? "#334155" : "#cbd5e1",
                            lineHeight: 1.45,
                            marginTop: "3px",
                          }}
                        >
                          {row.opashDetail}
                        </div>
                      </div>
                    </div>

                    {/* Column 3: TRADITIONAL AGENCY */}
                    <div
                      style={{
                        padding: "1.5rem 1.4rem",
                        borderRight: `1px solid ${isLight ? "rgba(241, 245, 249, 0.95)" : "rgba(255, 255, 255, 0.05)"}`,
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                      }}
                    >
                      <AlertTriangle
                        size={17}
                        style={{
                          color: isLight ? "#d97706" : "#fbbf24",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontSize: "0.88rem",
                            fontWeight: 700,
                            color: isLight ? "#334155" : "#e2e8f0",
                            marginBottom: "2px",
                          }}
                        >
                          {row.agency}
                        </div>
                        <div
                          style={{
                            fontSize: "0.77rem",
                            color: isLight ? "#64748b" : "#94a3b8",
                            lineHeight: 1.45,
                            marginBottom: "4px",
                          }}
                        >
                          {row.agencyDetail}
                        </div>
                        <span
                          style={{
                            display: "inline-block",
                            fontSize: "0.68rem",
                            fontWeight: 600,
                            color: isLight ? "#b45309" : "#f59e0b",
                            background: isLight ? "rgba(245, 158, 11, 0.1)" : "rgba(245, 158, 11, 0.12)",
                            padding: "1px 6px",
                            borderRadius: "4px",
                          }}
                        >
                          {row.agencyTag}
                        </span>
                      </div>
                    </div>

                    {/* Column 4: FREELANCE PORTALS */}
                    <div
                      style={{
                        padding: "1.5rem 1.4rem",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                      }}
                    >
                      <XCircle
                        size={17}
                        style={{
                          color: isLight ? "#dc2626" : "#f87171",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontSize: "0.88rem",
                            fontWeight: 700,
                            color: isLight ? "#334155" : "#e2e8f0",
                            marginBottom: "2px",
                          }}
                        >
                          {row.freelancers}
                        </div>
                        <div
                          style={{
                            fontSize: "0.77rem",
                            color: isLight ? "#64748b" : "#94a3b8",
                            lineHeight: 1.45,
                            marginBottom: "4px",
                          }}
                        >
                          {row.freelancersDetail}
                        </div>
                        <span
                          style={{
                            display: "inline-block",
                            fontSize: "0.68rem",
                            fontWeight: 600,
                            color: isLight ? "#b91c1c" : "#f87171",
                            background: isLight ? "rgba(239, 68, 68, 0.1)" : "rgba(239, 68, 68, 0.12)",
                            padding: "1px 6px",
                            borderRadius: "4px",
                          }}
                        >
                          {row.freelancersTag}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. VIEW 2: INTERACTIVE BATTLECARDS (DEEP DRILLDOWN ARCHITECTURE)          */}
        {/* ========================================================================= */}
        {activeTab === "cards" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.6fr",
              gap: "2rem",
              alignItems: "start",
            }}
          >
            {/* Left Nav List of Dimensions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {COMPARISON_DATA.map((row) => {
                const isSelected = activeMetricId === row.id;
                const IconComponent = row.icon;

                return (
                  <button
                    key={row.id}
                    onClick={() => setActiveMetricId(row.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1.2rem 1.4rem",
                      borderRadius: "18px",
                      border: `1px solid ${
                        isSelected
                          ? isLight
                            ? "#7c3aed"
                            : "#00ffd1"
                          : isLight
                          ? "rgba(226, 232, 240, 0.9)"
                          : "rgba(255, 255, 255, 0.08)"
                      }`,
                      background: isSelected
                        ? isLight
                          ? "linear-gradient(135deg, rgba(138, 92, 255, 0.1) 0%, rgba(0, 255, 209, 0.08) 100%)"
                          : "linear-gradient(135deg, rgba(0, 255, 209, 0.15) 0%, rgba(138, 92, 255, 0.12) 100%)"
                        : isLight
                        ? "#ffffff"
                        : "rgba(10, 18, 34, 0.65)",
                      backdropFilter: "blur(14px)",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.25s ease",
                      boxShadow: isSelected
                        ? isLight
                          ? "0 8px 24px rgba(138, 92, 255, 0.15)"
                          : "0 8px 25px rgba(0, 255, 209, 0.2)"
                        : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.95rem" }}>
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: isSelected
                            ? isLight
                              ? "#7c3aed"
                              : "#00ffd1"
                            : isLight
                            ? "#f1f5f9"
                            : "rgba(255, 255, 255, 0.06)",
                          color: isSelected
                            ? isLight
                              ? "#ffffff"
                              : "#030814"
                            : isLight
                            ? "#64748b"
                            : "#94a3b8",
                          fontWeight: 700,
                        }}
                      >
                        <IconComponent size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.96rem", fontWeight: 750, color: isLight ? "#0f172a" : "#f8fafc" }}>
                          {row.metric}
                        </div>
                        <div
                          style={{
                            fontSize: "0.78rem",
                            color: isSelected
                              ? isLight
                                ? "#059669"
                                : "#00ffd1"
                              : isLight
                              ? "#64748b"
                              : "#94a3b8",
                            fontWeight: 600,
                            marginTop: "2px",
                          }}
                        >
                          {row.opashStat}
                        </div>
                      </div>
                    </div>

                    <ChevronRight
                      size={18}
                      style={{
                        color: isSelected ? (isLight ? "#7c3aed" : "#00ffd1") : isLight ? "#cbd5e1" : "#475569",
                        transform: isSelected ? "translateX(4px)" : "none",
                        transition: "transform 0.2s ease",
                      }}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Card: Focused Head-to-Head Battlecard */}
            <div
              style={{
                borderRadius: "26px",
                background: isLight ? "rgba(255, 255, 255, 0.9)" : "rgba(8, 14, 28, 0.8)",
                backdropFilter: "blur(24px)",
                border: `1px solid ${isLight ? "rgba(226, 232, 240, 0.9)" : "rgba(255, 255, 255, 0.1)"}`,
                padding: "2.4rem",
                boxShadow: isLight
                  ? "0 25px 50px -15px rgba(15, 23, 42, 0.1)"
                  : "0 25px 60px -15px rgba(0, 0, 0, 0.7)",
              }}
            >
              {/* Header Badge & Title */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span
                    style={{
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      background: isLight ? "rgba(138, 92, 255, 0.12)" : "rgba(0, 255, 209, 0.15)",
                      color: isLight ? "#7c3aed" : "#00ffd1",
                    }}
                  >
                    {activeRow.category}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                    Dimension Benchmark
                  </span>
                </div>

                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: isLight ? "#059669" : "#00ffd1",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <Crown size={14} />
                  <span>Opash Winner</span>
                </span>
              </div>

              <h3 style={{ fontSize: "1.5rem", fontWeight: 850, margin: "0 0 1.5rem 0", letterSpacing: "-0.02em" }}>
                {activeRow.metric}
              </h3>

              {/* OPASH WINNER SHOWCASE PANEL */}
              <div
                style={{
                  borderRadius: "20px",
                  padding: "1.75rem",
                  background: isLight
                    ? "linear-gradient(135deg, rgba(0, 255, 209, 0.12) 0%, rgba(16, 185, 129, 0.08) 100%)"
                    : "linear-gradient(135deg, rgba(0, 255, 209, 0.2) 0%, rgba(138, 92, 255, 0.12) 100%)",
                  border: `1px solid ${isLight ? "rgba(0, 255, 209, 0.5)" : "rgba(0, 255, 209, 0.45)"}`,
                  boxShadow: isLight
                    ? "0 10px 30px -10px rgba(0, 255, 209, 0.3)"
                    : "0 10px 35px -10px rgba(0, 255, 209, 0.25)",
                  marginBottom: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.85rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div
                      style={{
                        width: "26px",
                        height: "26px",
                        borderRadius: "50%",
                        background: "#00ffd1",
                        color: "#030814",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: "1.15rem", fontWeight: 850, color: isLight ? "#0f766e" : "#00ffd1" }}>
                      Opash Software Squad
                    </span>
                  </div>

                  <span
                    style={{
                      fontSize: "0.76rem",
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #00ffd1 0%, #10b981 100%)",
                      color: "#030814",
                      padding: "3px 12px",
                      borderRadius: "9999px",
                      boxShadow: "0 2px 8px rgba(0, 255, 209, 0.3)",
                    }}
                  >
                    {activeRow.opashStat}
                  </span>
                </div>

                <div style={{ fontSize: "1.1rem", fontWeight: 750, marginBottom: "0.5rem" }}>
                  {activeRow.opash}
                </div>

                <p style={{ fontSize: "0.9rem", color: isLight ? "#334155" : "#cbd5e1", lineHeight: 1.6, margin: "0 0 1rem 0" }}>
                  {activeRow.opashDetail}
                </p>

                {/* Visual Comparative Capability Bar */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontWeight: 700, marginBottom: "4px" }}>
                    <span>Efficiency & Guarantee Score</span>
                    <span style={{ color: isLight ? "#059669" : "#00ffd1" }}>{activeRow.scoreOpash}% Benchmark Score</span>
                  </div>
                  <div
                    style={{
                      height: "8px",
                      borderRadius: "9999px",
                      background: isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${activeRow.scoreOpash}%`,
                        background: "linear-gradient(90deg, #00ffd1, #10b981)",
                        borderRadius: "9999px",
                        boxShadow: "0 0 10px #00ffd1",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* DUAL ALTERNATIVES COMPARISON GRID */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                {/* Traditional Agency Card */}
                <div
                  style={{
                    padding: "1.4rem",
                    borderRadius: "16px",
                    background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.03)",
                    border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)"}`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.6rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                      <AlertTriangle size={16} color={isLight ? "#d97706" : "#fbbf24"} />
                      <span style={{ fontSize: "0.88rem", fontWeight: 700, color: isLight ? "#475569" : "#cbd5e1" }}>
                        Traditional Agency
                      </span>
                    </div>
                    <span style={{ fontSize: "0.7rem", fontWeight: 700, color: isLight ? "#d97706" : "#fbbf24" }}>
                      {activeRow.scoreAgency}%
                    </span>
                  </div>

                  <div style={{ fontSize: "0.94rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                    {activeRow.agency}
                  </div>
                  <p style={{ fontSize: "0.82rem", color: isLight ? "#64748b" : "#94a3b8", lineHeight: 1.5, margin: "0 0 0.75rem 0" }}>
                    {activeRow.agencyDetail}
                  </p>

                  <div
                    style={{
                      height: "5px",
                      borderRadius: "9999px",
                      background: isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${activeRow.scoreAgency}%`,
                        background: "#f59e0b",
                        borderRadius: "9999px",
                      }}
                    />
                  </div>
                </div>

                {/* Freelance Portals Card */}
                <div
                  style={{
                    padding: "1.4rem",
                    borderRadius: "16px",
                    background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.03)",
                    border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)"}`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.6rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                      <XCircle size={16} color={isLight ? "#dc2626" : "#f87171"} />
                      <span style={{ fontSize: "0.88rem", fontWeight: 700, color: isLight ? "#475569" : "#cbd5e1" }}>
                        Freelance Portals
                      </span>
                    </div>
                    <span style={{ fontSize: "0.7rem", fontWeight: 700, color: isLight ? "#dc2626" : "#f87171" }}>
                      {activeRow.scoreFreelancers}%
                    </span>
                  </div>

                  <div style={{ fontSize: "0.94rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                    {activeRow.freelancers}
                  </div>
                  <p style={{ fontSize: "0.82rem", color: isLight ? "#64748b" : "#94a3b8", lineHeight: 1.5, margin: "0 0 0.75rem 0" }}>
                    {activeRow.freelancersDetail}
                  </p>

                  <div
                    style={{
                      height: "5px",
                      borderRadius: "9999px",
                      background: isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${activeRow.scoreFreelancers}%`,
                        background: "#ef4444",
                        borderRadius: "9999px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 5. BOTTOM TELEMETRY BAR & SQUAD DEPLOYMENT CTA                            */}
        {/* ========================================================================= */}
        <div
          style={{
            marginTop: "3.5rem",
            padding: "1.75rem 2.25rem",
            borderRadius: "22px",
            background: isLight
              ? "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)"
              : "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(8, 14, 28, 0.92) 100%)",
            border: `1px solid ${isLight ? "rgba(138, 92, 255, 0.25)" : "rgba(0, 255, 209, 0.25)"}`,
            backdropFilter: "blur(20px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.75rem",
            boxShadow: isLight
              ? "0 20px 45px -12px rgba(138, 92, 255, 0.12)"
              : "0 20px 50px -15px rgba(0, 255, 209, 0.15)",
          }}
        >
          {/* Telemetry Metrics */}
          <div style={{ display: "flex", alignItems: "center", gap: "2.75rem", flexWrap: "wrap" }}>
            
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: isLight ? "rgba(0, 255, 209, 0.15)" : "rgba(0, 255, 209, 0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isLight ? "#0f766e" : "#00ffd1",
                }}
              >
                <TrendingUp size={20} />
              </div>
              <div>
                <div style={{ fontSize: "1.05rem", fontWeight: 850 }}>48 Hours</div>
                <div style={{ fontSize: "0.76rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                  Squad Matching to First Git Commit
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: isLight ? "rgba(138, 92, 255, 0.12)" : "rgba(138, 92, 255, 0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isLight ? "#7c3aed" : "#a78bfa",
                }}
              >
                <ShieldCheck size={20} />
              </div>
              <div>
                <div style={{ fontSize: "1.05rem", fontWeight: 850 }}>0% Lock-in</div>
                <div style={{ fontSize: "0.76rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                  100% IP & Source Code Transfer
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: isLight ? "rgba(255, 92, 122, 0.12)" : "rgba(255, 92, 122, 0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isLight ? "#e11d48" : "#ff5c7a",
                }}
              >
                <Clock size={20} />
              </div>
              <div>
                <div style={{ fontSize: "1.05rem", fontWeight: 850 }}>4+ Hours</div>
                <div style={{ fontSize: "0.76rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                  Live US & European Synchronous Overlap
                </div>
              </div>
            </div>

          </div>

          {/* Action CTA */}
          <Link
            href="/get-a-quote"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.65rem",
              padding: "0.95rem 1.85rem",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #00ffd1 0%, #8a5cff 50%, #ff5c7a 100%)",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "0.95rem",
              textDecoration: "none",
              boxShadow: "0 4px 22px rgba(138, 92, 255, 0.4)",
              transition: "all 0.25s ease",
            }}
          >
            <span>Deploy Your Dedicated Squad</span>
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUsComparison;
