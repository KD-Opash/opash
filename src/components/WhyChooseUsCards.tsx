"use client";

import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";
import {
  ShieldCheck,
  Zap,
  Clock,
  Headphones,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Code2,
  GitBranch,
  Terminal,
  Activity,
  Award,
  Globe2,
  Lock,
} from "lucide-react";

export function WhyChooseUsCards() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      id="why-choose-us-bento"
      className="why-choose-us-section"
      style={{
        padding: "6.5rem 1.5rem 5.5rem 1.5rem",
        position: "relative",
        background: isLight
          ? "linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)"
          : "linear-gradient(180deg, #020713 0%, #040d21 50%, #020614 100%)",
        contain: "paint",
      }}
    >
      {/* Subtle Ambient Radial Lighting (Low GPU overhead) */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          maxWidth: "1000px",
          height: "360px",
          background: isLight
            ? "radial-gradient(ellipse at top, rgba(37, 99, 235, 0.08) 0%, transparent 70%)"
            : "radial-gradient(ellipse at top, rgba(56, 189, 248, 0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-custom" style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* ===================================================================== */}
        {/* SECTION HEADER                                                        */}
        {/* ===================================================================== */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.38rem 0.95rem",
              borderRadius: "9999px",
              background: isLight ? "rgba(37, 99, 235, 0.08)" : "rgba(56, 189, 248, 0.1)",
              border: isLight ? "1px solid rgba(37, 99, 235, 0.2)" : "1px solid rgba(56, 189, 248, 0.25)",
              color: isLight ? "#2563eb" : "#38bdf8",
              fontSize: "0.8rem",
              fontWeight: 750,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            <Sparkles size={14} />
            <span>Why Leading Founders Partner With Us</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              fontWeight: 850,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              margin: "0 0 1rem 0",
            }}
          >
            <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>Why </span>
            <span
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Choose Us?
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.12rem)",
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
        {/* ASYMMETRIC BENTO GRID                                                 */}
        {/* ===================================================================== */}
        <div className="bento-grid">
          {/* =================================================================== */}
          {/* BENTO 1 (HERO CARD - SPAN 7): UPWORK TOP RATED PLUS PROOF           */}
          {/* =================================================================== */}
          <div className="bento-card bento-card-hero">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              {/* Upwork Official Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.6rem 1rem",
                  borderRadius: "14px",
                  background: isLight ? "rgba(20, 168, 0, 0.08)" : "rgba(20, 168, 0, 0.15)",
                  border: "1.5px solid rgba(20, 168, 0, 0.35)",
                }}
              >
                <span
                  style={{
                    color: "#14a800",
                    fontWeight: 900,
                    fontSize: "1.2rem",
                    letterSpacing: "-0.03em",
                    fontFamily: "system-ui, sans-serif",
                    lineHeight: 1,
                  }}
                >
                  upwork
                </span>
                <div style={{ height: "20px", width: "1px", background: "rgba(20, 168, 0, 0.3)" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <span style={{ fontSize: "0.75rem" }}>💖</span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: isLight ? "#0f172a" : "#f1f5f9",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    Top Rated Plus
                  </span>
                </div>
              </div>

              {/* Verified Pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#14a800",
                  background: "rgba(20, 168, 0, 0.1)",
                  padding: "0.35rem 0.75rem",
                  borderRadius: "9999px",
                }}
              >
                <CheckCircle2 size={13} />
                <span>Top 1% Global Talent</span>
              </div>
            </div>

            {/* Stat Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "1.25rem",
                margin: "1.5rem 0 2rem 0",
              }}
            >
              <div className="bento-metric-tile">
                <div style={{ fontSize: "2.3rem", fontWeight: 900, color: "#14a800", lineHeight: 1 }}>100%</div>
                <div style={{ fontSize: "0.82rem", fontWeight: 650, color: isLight ? "#475569" : "#94a3b8", marginTop: "0.35rem" }}>
                  Job Success Score
                </div>
              </div>

              <div className="bento-metric-tile">
                <div style={{ fontSize: "2.3rem", fontWeight: 900, color: "#f59e0b", lineHeight: 1 }}>5.0 ★</div>
                <div style={{ fontSize: "0.82rem", fontWeight: 650, color: isLight ? "#475569" : "#94a3b8", marginTop: "0.35rem" }}>
                  Enterprise Rating
                </div>
              </div>

              <div className="bento-metric-tile">
                <div style={{ fontSize: "2.3rem", fontWeight: 900, color: isLight ? "#0f172a" : "#ffffff", lineHeight: 1 }}>$1M+</div>
                <div style={{ fontSize: "0.82rem", fontWeight: 650, color: isLight ? "#475569" : "#94a3b8", marginTop: "0.35rem" }}>
                  Earned Deliveries
                </div>
              </div>
            </div>

            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.5rem", color: isLight ? "#0f172a" : "#ffffff" }}>
              Trusted Upwork Agency & Vetted Partner
            </h3>
            <p style={{ fontSize: "0.95rem", color: isLight ? "#475569" : "#94a3b8", lineHeight: 1.6, margin: 0 }}>
              Recognized in the elite tier of technology consultancies on Upwork with flawless execution, zero disputed milestones,
              and continuous enterprise rehires across North America and Europe.
            </p>
          </div>

          {/* =================================================================== */}
          {/* BENTO 2 (VELOCITY & CADENCE - SPAN 5)                              */}
          {/* =================================================================== */}
          <div className="bento-card bento-card-velocity">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: isLight ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0.15)",
                  color: "#10b981",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Zap size={24} />
              </div>

              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 750,
                  color: "#10b981",
                  background: "rgba(16, 185, 129, 0.1)",
                  padding: "0.3rem 0.7rem",
                  borderRadius: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                2-Week Sprints
              </span>
            </div>

            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.5rem", color: isLight ? "#0f172a" : "#ffffff" }}>
              Agile Approach & On-Time Delivery
            </h3>

            <p style={{ fontSize: "0.9rem", color: isLight ? "#475569" : "#94a3b8", lineHeight: 1.55, marginBottom: "1.5rem" }}>
              Predictable bi-weekly sprint cadence with clickable staging builds and automated GitHub PR reviews.
            </p>

            {/* Sprint Telemetry Bar */}
            <div
              style={{
                background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.04)",
                borderRadius: "12px",
                padding: "0.9rem 1rem",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                <span style={{ color: isLight ? "#334155" : "#e2e8f0" }}>Milestone SLA Velocity</span>
                <span style={{ color: "#10b981" }}>99.4% On-Time</span>
              </div>
              <div style={{ width: "100%", height: "7px", background: "rgba(16, 185, 129, 0.15)", borderRadius: "9999px", overflow: "hidden" }}>
                <div style={{ width: "99.4%", height: "100%", background: "#10b981", borderRadius: "9999px" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: isLight ? "#64748b" : "#94a3b8", marginTop: "0.4rem" }}>
                <span>Sprint Kickoff</span>
                <span>Live Staging Demo</span>
                <span>Production Release</span>
              </div>
            </div>
          </div>

          {/* =================================================================== */}
          {/* BENTO 3 (SUPPORT - SPAN 4)                                         */}
          {/* =================================================================== */}
          <div className="bento-card">
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: isLight ? "rgba(168, 85, 247, 0.1)" : "rgba(168, 85, 247, 0.15)",
                color: "#a855f7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}
            >
              <Headphones size={24} />
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.6rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 750, color: "#10b981", textTransform: "uppercase" }}>
                Always Online
              </span>
            </div>

            <h3 style={{ fontSize: "1.18rem", fontWeight: 800, marginBottom: "0.5rem", color: isLight ? "#0f172a" : "#ffffff" }}>
              24/7 Global Support & Overlap
            </h3>

            <p style={{ fontSize: "0.88rem", color: isLight ? "#475569" : "#94a3b8", lineHeight: 1.55, margin: 0 }}>
              4+ hours synchronous working overlap with US, UK, and EU timezones. Direct Slack channels with zero communication delay.
            </p>
          </div>

          {/* =================================================================== */}
          {/* BENTO 4 (TRANSPARENT PM - SPAN 4)                                   */}
          {/* =================================================================== */}
          <div className="bento-card">
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: isLight ? "rgba(6, 182, 212, 0.1)" : "rgba(6, 182, 212, 0.15)",
                color: "#06b6d4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}
            >
              <Terminal size={24} />
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.6rem" }}>
              <GitBranch size={13} color="#06b6d4" />
              <span style={{ fontSize: "0.75rem", fontWeight: 750, color: "#06b6d4", textTransform: "uppercase" }}>
                Direct Engineer Access
              </span>
            </div>

            <h3 style={{ fontSize: "1.18rem", fontWeight: 800, marginBottom: "0.5rem", color: isLight ? "#0f172a" : "#ffffff" }}>
              Transparent Project Management
            </h3>

            <p style={{ fontSize: "0.88rem", color: isLight ? "#475569" : "#94a3b8", lineHeight: 1.55, margin: 0 }}>
              No non-technical middle-men. Collaborate directly with senior architects and developers with real-time Jira & Git transparency.
            </p>
          </div>

          {/* =================================================================== */}
          {/* BENTO 5 (POST-LAUNCH WARRANTY & IP - SPAN 4)                        */}
          {/* =================================================================== */}
          <div className="bento-card">
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: isLight ? "rgba(56, 189, 248, 0.1)" : "rgba(56, 189, 248, 0.15)",
                color: "#38bdf8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}
            >
              <ShieldCheck size={24} />
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.6rem" }}>
              <Lock size={13} color="#38bdf8" />
              <span style={{ fontSize: "0.75rem", fontWeight: 750, color: "#38bdf8", textTransform: "uppercase" }}>
                100% IP Transferred
              </span>
            </div>

            <h3 style={{ fontSize: "1.18rem", fontWeight: 800, marginBottom: "0.5rem", color: isLight ? "#0f172a" : "#ffffff" }}>
              Post-Launch Support & Warranty
            </h3>

            <p style={{ fontSize: "0.88rem", color: isLight ? "#475569" : "#94a3b8", lineHeight: 1.55, margin: 0 }}>
              Full 30-day post-launch bug warranty included on every project. Complete ownership of all code, repositories, and secrets.
            </p>
          </div>

          {/* =================================================================== */}
          {/* BENTO 6 (ACCREDITATION SHELF - SPAN 12 / FULL WIDTH)                */}
          {/* =================================================================== */}
          <div className="bento-card bento-card-full">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "1.75rem",
                paddingBottom: "1.25rem",
                borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 750,
                    color: isLight ? "#2563eb" : "#38bdf8",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Global Industry Accreditations
                </span>
                <h3 style={{ fontSize: "1.45rem", fontWeight: 850, margin: "0.25rem 0 0 0", color: isLight ? "#0f172a" : "#ffffff" }}>
                  We Are <span style={{ color: "#2563eb" }}>Recognised By</span> Top Review Authorities
                </h3>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.82rem",
                  fontWeight: 650,
                  color: isLight ? "#64748b" : "#94a3b8",
                }}
              >
                <Award size={16} color="#f59e0b" />
                <span>Verified Independent Client Audits</span>
              </div>
            </div>

            {/* Accreditation Partner Badges */}
            <div className="accreditation-flex-row">
              {/* GoodFirms */}
              <div className="partner-badge">
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "6px",
                    background: "#2563eb",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: "1.1rem",
                    lineHeight: 1,
                  }}
                >
                  F
                </div>
                <div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "#2563eb", lineHeight: 1 }}>GoodFirms</div>
                  <div style={{ fontSize: "0.7rem", color: isLight ? "#64748b" : "#94a3b8", marginTop: "2px" }}>5.0 Top Agency</div>
                </div>
              </div>

              {/* Clutch */}
              <div className="partner-badge">
                <div
                  style={{
                    background: isLight ? "#0f212d" : "#132836",
                    color: "#ffffff",
                    padding: "0.35rem 0.75rem",
                    borderRadius: "8px",
                    fontWeight: 850,
                    fontSize: "0.95rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Clutch<span style={{ color: "#ef4444" }}>.</span>
                </div>
                <div>
                  <div style={{ fontSize: "0.78rem", fontWeight: 750, color: isLight ? "#0f172a" : "#f1f5f9" }}>4.9 / 5.0 Rating</div>
                  <div style={{ fontSize: "0.7rem", color: isLight ? "#64748b" : "#94a3b8" }}>Top Developers</div>
                </div>
              </div>

              {/* Google Rating */}
              <div className="partner-badge">
                <svg width="28" height="28" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <span style={{ fontSize: "1.05rem", fontWeight: 850, color: isLight ? "#0f172a" : "#ffffff", lineHeight: 1 }}>4.6</span>
                    <span style={{ color: "#ea580c", fontSize: "0.85rem" }}>★★★★½</span>
                  </div>
                  <div style={{ fontSize: "0.7rem", color: isLight ? "#64748b" : "#94a3b8" }}>Google Reviews</div>
                </div>
              </div>

              {/* Trustpilot */}
              <div className="partner-badge">
                <svg width="26" height="26" viewBox="0 0 36 36" fill="none">
                  <path d="M18 2L22.9 12.1L34 13.7L26 21.5L27.9 32.5L18 27.3L8.1 32.5L10 21.5L2 13.7L13.1 12.1L18 2Z" fill="#00b67a" />
                  <path d="M26 21.5L27.9 32.5L18 27.3V2L22.9 12.1L34 13.7L26 21.5Z" fill="#005128" opacity="0.22" />
                </svg>
                <div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 850, color: isLight ? "#111827" : "#f9fafb", lineHeight: 1 }}>Trustpilot</div>
                  <div style={{ fontSize: "0.7rem", color: isLight ? "#64748b" : "#94a3b8", marginTop: "2px" }}>Verified Client Rating</div>
                </div>
              </div>

              {/* TopDevelopers */}
              <div className="partner-badge">
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "6px",
                    background: "#0d3b66",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: "0.82rem",
                  }}
                >
                  TD
                </div>
                <div>
                  <div style={{ fontSize: "0.98rem", fontWeight: 750, color: isLight ? "#0d3b66" : "#f1f5f9", lineHeight: 1 }}>TopDevelopers</div>
                  <div style={{ fontSize: "0.7rem", color: isLight ? "#64748b" : "#94a3b8", marginTop: "2px" }}>Global IT Provider</div>
                </div>
              </div>

              {/* techreviewer */}
              <div className="partner-badge">
                <span style={{ color: "#f43f5e", fontWeight: 900, fontSize: "1.35rem", lineHeight: 1 }}>’T</span>
                <div>
                  <div style={{ fontSize: "0.98rem", fontWeight: 750, color: isLight ? "#1e293b" : "#f8fafc", lineHeight: 1 }}>techreviewer</div>
                  <div style={{ fontSize: "0.7rem", color: isLight ? "#64748b" : "#94a3b8", marginTop: "2px" }}>Top 10 Web Devs</div>
                </div>
              </div>

              {/* AmbitionBox */}
              <div className="partner-badge">
                <svg width="26" height="26" viewBox="0 0 36 36" fill="none">
                  <path d="M18 3L32 11V25L18 33L4 25V11L18 3Z" fill="#2563eb" opacity="0.2" />
                  <path d="M18 3L32 11L18 19L4 11L18 3Z" fill="#3b82f6" />
                  <path d="M4 11L18 19V33L4 25V11Z" fill="#1d4ed8" />
                  <path d="M32 11L18 19V33L32 25V11Z" fill="#2563eb" />
                </svg>
                <div>
                  <div style={{ fontSize: "0.98rem", fontWeight: 750, color: isLight ? "#1e293b" : "#f8fafc", lineHeight: 1 }}>AmbitionBox</div>
                  <div style={{ fontSize: "0.7rem", color: isLight ? "#64748b" : "#94a3b8", marginTop: "2px" }}>Top Culture Rating</div>
                </div>
              </div>

              {/* TECHIMPLY Badge */}
              <div className="partner-badge">
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    border: "2px solid #e11d48",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.45rem",
                    fontWeight: 900,
                    color: "#e11d48",
                  }}
                >
                  TI
                </div>
                <div>
                  <div style={{ fontSize: "0.92rem", fontWeight: 750, color: isLight ? "#0f172a" : "#f1f5f9", lineHeight: 1 }}>TECHIMPLY</div>
                  <div style={{ fontSize: "0.7rem", color: isLight ? "#64748b" : "#94a3b8", marginTop: "2px" }}>Top Software Dev</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Responsive Asymmetric Bento Grid */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1.5rem;
        }

        .bento-card {
          background: ${isLight ? "#ffffff" : "linear-gradient(180deg, rgba(16, 26, 46, 0.7) 0%, rgba(8, 15, 28, 0.85) 100%)"};
          border-radius: 24px;
          border: 1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"};
          box-shadow: ${isLight ? "0 10px 30px -8px rgba(15, 23, 42, 0.06)" : "inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 16px 36px -12px rgba(0, 0, 0, 0.5)"};
          padding: 2.25rem;
          position: relative;
          will-change: transform;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s ease,
                      box-shadow 0.25s ease;
        }

        .bento-card:hover {
          transform: translateY(-4px);
          border-color: ${isLight ? "#93c5fd" : "rgba(56, 189, 248, 0.35)"} !important;
          box-shadow: ${isLight ? "0 20px 40px -10px rgba(37, 99, 235, 0.14)" : "0 22px 45px -12px rgba(37, 99, 235, 0.25)"} !important;
        }

        .bento-card-hero {
          grid-column: span 7;
        }

        .bento-card-velocity {
          grid-column: span 5;
        }

        .bento-card-full {
          grid-column: span 12;
        }

        .bento-grid > div:not(.bento-card-hero):not(.bento-card-velocity):not(.bento-card-full) {
          grid-column: span 4;
        }

        @media (max-width: 1024px) {
          .bento-card-hero,
          .bento-card-velocity {
            grid-column: span 12 !important;
          }

          .bento-grid > div:not(.bento-card-hero):not(.bento-card-velocity):not(.bento-card-full) {
            grid-column: span 6 !important;
          }
        }

        @media (max-width: 680px) {
          .bento-grid > div {
            grid-column: span 12 !important;
          }
          .bento-card {
            padding: 1.5rem !important;
          }
        }

        .bento-metric-tile {
          background: ${isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.03)"};
          border: 1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)"};
          border-radius: 16px;
          padding: 1rem 1.15rem;
        }

        .accreditation-flex-row {
          display: flex;
          align-items: center;
          justifyContent: flex-start;
          flex-wrap: wrap;
          gap: 1.25rem;
        }

        .partner-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 1.1rem;
          border-radius: 14px;
          background: ${isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.03)"};
          border: 1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)"};
          will-change: transform;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .partner-badge:hover {
          transform: translateY(-2px);
          border-color: ${isLight ? "#2563eb" : "rgba(56, 189, 248, 0.35)"};
        }
      `}</style>
    </section>
  );
}

export default WhyChooseUsCards;
