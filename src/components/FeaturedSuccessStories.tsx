"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Star,
  Activity,
  Award,
  FileCheck2,
  Lock,
  Search,
} from "lucide-react";
import { caseStudiesData } from "@/data/case-studies";
import { useTheme } from "./ThemeProvider";

interface ClientBrandMeta {
  accent: string;
  secondaryAccent: string;
  accentRgb: string;
  category: "all" | "health" | "industrial" | "fintech";
  avatarText: string;
  badgeLabel: string;
  domainUrl: string;
}

const BRAND_META: Record<string, ClientBrandMeta> = {
  ucarehq: {
    accent: "#7df9ff", // Electric Cyan (requested by user)
    secondaryAccent: "#38bdf8",
    accentRgb: "125, 249, 255",
    category: "health",
    avatarText: "UC",
    badgeLabel: "HealthTech & Care Management",
    domainUrl: "portal.ucarehq.com/ehr-live",
  },
  "iko-intl": {
    accent: "#34d399", // Luminous Mint Emerald
    secondaryAccent: "#6ee7b7",
    accentRgb: "52, 211, 153",
    category: "industrial",
    avatarText: "IKO",
    badgeLabel: "Industrial Tech & Supply Chain",
    domainUrl: "catalog.ikointl.com/cad-mesh",
  },
  esanad: {
    accent: "#c084fc", // Luminous Soft Violet / Lavender
    secondaryAccent: "#e9d5ff",
    accentRgb: "192, 132, 252",
    category: "fintech",
    avatarText: "ES",
    badgeLabel: "FinTech & Legal Verification",
    domainUrl: "verify.esanad.com/notary-live",
  },
};

const CATEGORIES = [
  { id: "all", label: "All Success Stories" },
  { id: "health", label: "HealthTech" },
  { id: "industrial", label: "Industrial IoT" },
  { id: "fintech", label: "FinTech & Legal" },
];

/* ========================================================================= */
/* 1. COMPACT ANIMATED LIVE SYSTEM VIEWPORT MOCKUPS                          */
/* ========================================================================= */

// UCareHQ: Live Telehealth & ECG Waveform Telemetry Monitor (Compact)
function UCareHQVisualMockup() {
  return (
    <div className="client-mockup-viewport compact-mockup">
      <div className="client-mockup-bar">
        <div className="mockup-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="mockup-url">
          <Lock size={10} color="#0ea5e9" />
          <span>ucarehq.com/ehr-live</span>
        </div>
        <span className="mockup-status-live">
          <span className="live-ping-dot" style={{ backgroundColor: "#0ea5e9" }} />
          <span>HIPAA 256-bit</span>
        </span>
      </div>

      <div className="client-mockup-screen healthcare-screen compact-screen">
        <div className="ecg-wave-wrapper">
          <svg viewBox="0 0 400 45" className="ecg-svg" preserveAspectRatio="none">
            <path
              d="M 0 22 L 80 22 L 95 8 L 110 36 L 125 12 L 140 28 L 155 22 L 230 22 L 245 7 L 260 38 L 275 12 L 290 30 L 305 22 L 400 22"
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="2.2"
              className="ecg-path"
            />
          </svg>
        </div>
        <div className="screen-telemetry-row">
          <div className="telemetry-badge">
            <Activity size={11} color="#0ea5e9" />
            <span>Caregiver Sync: <strong>Active</strong></span>
          </div>
          <div className="telemetry-badge">
            <span>SLA: <strong style={{ color: "#0ea5e9" }}>99.99%</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}

// IKO International: Industrial Mechanical Engine & High-Speed Search (Compact)
function IkoVisualMockup() {
  return (
    <div className="client-mockup-viewport compact-mockup">
      <div className="client-mockup-bar">
        <div className="mockup-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="mockup-url">
          <Search size={10} color="#10b981" />
          <span>ikointl.com/cad-mesh</span>
        </div>
        <span className="mockup-status-live">
          <span className="live-ping-dot" style={{ backgroundColor: "#10b981" }} />
          <span>3x Fast Query</span>
        </span>
      </div>

      <div className="client-mockup-screen industrial-screen compact-screen">
        <div className="industrial-gear-scene compact-gear-scene">
          <svg viewBox="0 0 60 60" className="rotating-gear-svg compact-gear">
            <circle cx="30" cy="30" r="12" fill="none" stroke="#10b981" strokeWidth="2.2" />
            <circle cx="30" cy="30" r="5" fill="#10b981" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <line
                key={deg}
                x1="30"
                y1="8"
                x2="30"
                y2="15"
                stroke="#10b981"
                strokeWidth="3"
                strokeLinecap="round"
                transform={`rotate(${deg} 30 30)`}
              />
            ))}
          </svg>

          <div className="industrial-telemetry">
            <div className="industrial-code-line">
              <span className="code-accent">INDEX:</span> 14,280 CAD Components
            </div>
            <div className="industrial-progress-rail">
              <div className="industrial-progress-bar" />
            </div>
            <div className="industrial-status-sub">
              <span>Velocity: 100%</span>
              <span style={{ color: "#10b981", fontWeight: 700 }}>2 Years Retained</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// eSanad: Cryptographic Legal Document Notary & Laser Scanner (Compact)
function EsanadVisualMockup() {
  return (
    <div className="client-mockup-viewport compact-mockup">
      <div className="client-mockup-bar">
        <div className="mockup-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="mockup-url">
          <ShieldCheck size={10} color="#8b5cf6" />
          <span>esanad.com/notary-live</span>
        </div>
        <span className="mockup-status-live">
          <span className="live-ping-dot" style={{ backgroundColor: "#8b5cf6" }} />
          <span>&lt; 1.5s Verify</span>
        </span>
      </div>

      <div className="client-mockup-screen notary-screen compact-screen">
        <div className="notary-laser-beam" />
        <div className="notary-cert-card compact-cert-card">
          <div className="notary-cert-header">
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <FileCheck2 size={13} color="#8b5cf6" />
              <span>Certificate #ES-94281</span>
            </div>
            <span className="notary-verified-badge">VERIFIED</span>
          </div>
          <div className="notary-cert-hash">
            SHA-256: 8f42…b91a • Dual-Language Arabic/EN
          </div>
          <div className="notary-metrics-row">
            <span>Audit: <strong style={{ color: "#8b5cf6" }}>100% Anti-Tamper</strong></span>
            <span>Latency: <strong>0.82s</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 2. MAIN COMPACT & EFFECTIVE SUCCESS STORIES WITH FRAME BORDER             */
/* ========================================================================= */

export function FeaturedSuccessStories() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [activeTab, setActiveTab] = useState("all");

  const filteredStudies = caseStudiesData.slice(0, 3).filter((cs) => {
    if (activeTab === "all") return true;
    const meta = BRAND_META[cs.id];
    return meta?.category === activeTab;
  });

  return (
    <section
      className="featured-stories-section"
      style={{
        position: "relative",
        padding: "5rem 0 5.5rem 0",
        overflow: "hidden",
      }}
    >
      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "2.75rem",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 13px",
                borderRadius: "999px",
                backgroundColor: isLight
                  ? "rgba(139, 92, 246, 0.1)"
                  : "rgba(139, 92, 246, 0.15)",
                border: `1px solid ${
                  isLight ? "rgba(139, 92, 246, 0.25)" : "rgba(139, 92, 246, 0.3)"
                }`,
                color: isLight ? "#7c3aed" : "#c084fc",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "0.85rem",
              }}
            >
              <Award size={13} />
              <span>Verified Enterprise Case Deployments</span>
            </div>

            <h2 className="heading-section" style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.9rem)" }}>
              Featured Client Success Stories
            </h2>

            <p className="subhead-lead" style={{ marginTop: "0.65rem", fontSize: "1rem" }}>
              Explore how Opash Software engineers high-concurrency cloud systems,
              compliant architectures, and multi-year dedicated partnerships for global brands.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link
              href="/portfolio"
              className="btn-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.65rem 1.3rem",
                borderRadius: "999px",
                fontWeight: 600,
                fontSize: "0.88rem",
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
            >
              <span>Explore All Case Studies</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Category Pill Filter Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "2.25rem",
          }}
        >
          {CATEGORIES.map((cat) => {
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                style={{
                  padding: "6px 16px",
                  borderRadius: "999px",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  border: isSelected
                    ? "1px solid #00bbab"
                    : isLight
                    ? "1px solid #e2e8f0"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  backgroundColor: isSelected
                    ? isLight
                      ? "#ffffff"
                      : "rgba(0, 187, 171, 0.15)"
                    : isLight
                    ? "rgba(255, 255, 255, 0.7)"
                    : "rgba(255, 255, 255, 0.04)",
                  color: isSelected
                    ? isLight
                      ? "#008775"
                      : "#2dd4bf"
                    : isLight
                    ? "#64748b"
                    : "#94a3b8",
                  boxShadow: isSelected
                    ? isLight
                      ? "0 4px 12px rgba(0, 187, 171, 0.15)"
                      : "0 0 16px rgba(0, 187, 171, 0.25)"
                    : "none",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Compact & Effective Cards Grid with FrameBorder */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "1.75rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((cs) => {
              const meta = BRAND_META[cs.id] || {
                accent: "#8b5cf6",
                secondaryAccent: "#c084fc",
                accentRgb: "139, 92, 246",
                avatarText: "CL",
                badgeLabel: cs.domain,
                domainUrl: cs.website,
              };

              return (
                <motion.div
                  key={cs.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div
                    className="electric-story-card"
                    style={{
                      position: "relative",
                      borderRadius: "24px",
                      background: isLight ? "#ffffff" : "#0f172a",
                      border: isLight
                        ? `1px solid ${meta.accent}40`
                        : `1px solid ${meta.accent}50`,
                      boxShadow: isLight
                        ? "0 8px 24px -6px rgba(15, 23, 42, 0.06)"
                        : "0 12px 30px -8px rgba(0, 0, 0, 0.6)",
                      padding: "1.35rem 1.4rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      gap: "1rem",
                      overflow: "hidden",
                    }}
                  >
                      {/* 1. Header: Client Info + Domain Badge */}
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "0.75rem",
                            marginBottom: "0.85rem",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div
                              style={{
                                width: "38px",
                                height: "38px",
                                borderRadius: "11px",
                                backgroundColor: `rgba(${meta.accentRgb}, 0.12)`,
                                border: `1.5px solid rgba(${meta.accentRgb}, 0.35)`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: meta.accent,
                                fontWeight: 800,
                                fontFamily: "var(--font-display), sans-serif",
                                fontSize: "0.88rem",
                                letterSpacing: "0.02em",
                              }}
                            >
                              {meta.avatarText}
                            </div>

                            <div>
                              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <h4
                                  style={{
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    color: isLight ? "#0f172a" : "#ffffff",
                                    margin: 0,
                                  }}
                                >
                                  {cs.client}
                                </h4>
                                <CheckCircle2 size={14} color={meta.accent} />
                              </div>
                              <span
                                style={{
                                  fontSize: "0.7rem",
                                  fontWeight: 600,
                                  color: isLight ? "#64748b" : "#94a3b8",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.03em",
                                }}
                              >
                                Enterprise Engagement
                              </span>
                            </div>
                          </div>

                          <a
                            href={cs.website}
                            target="_blank"
                            rel="noreferrer"
                            title={`Visit ${cs.client}`}
                            style={{
                              width: "32px",
                              height: "32px",
                              borderRadius: "8px",
                              backgroundColor: isLight
                                ? "rgba(241, 245, 249, 0.85)"
                                : "rgba(255, 255, 255, 0.05)",
                              border: isLight
                                ? "1px solid #e2e8f0"
                                : "1px solid rgba(255, 255, 255, 0.1)",
                              color: isLight ? "#475569" : "#cbd5e1",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              textDecoration: "none",
                              transition: "all 0.2s ease",
                            }}
                          >
                            <ExternalLink size={13} />
                          </a>
                        </div>

                        {/* 2. Compact Live System Mockup Viewport */}
                        <div style={{ marginBottom: "0.85rem" }}>
                          {cs.id === "ucarehq" && <UCareHQVisualMockup />}
                          {cs.id === "iko-intl" && <IkoVisualMockup />}
                          {cs.id === "esanad" && <EsanadVisualMockup />}
                        </div>

                        {/* 3. Headline & Summary */}
                        <h3
                          style={{
                            fontSize: "1.02rem",
                            fontWeight: 700,
                            lineHeight: 1.38,
                            color: isLight ? "#0f172a" : "#f8fafc",
                            marginBottom: "0.45rem",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {cs.headline}
                        </h3>

                        <p
                          style={{
                            fontSize: "0.82rem",
                            lineHeight: 1.5,
                            color: isLight ? "#475569" : "#94a3b8",
                            margin: 0,
                          }}
                        >
                          {cs.summary}
                        </p>
                      </div>

                      {/* 4. Bottom Section: Compact Metrics + Tech Badges + CTA */}
                      <div>
                        {/* Compact Dual Metric Chips */}
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "8px",
                            marginBottom: "0.85rem",
                          }}
                        >
                          {cs.results.slice(0, 2).map((res, rIdx) => (
                            <div
                              key={rIdx}
                              style={{
                                borderRadius: "10px",
                                padding: "0.65rem 0.85rem",
                                background: isLight
                                  ? "rgba(248, 250, 252, 0.95)"
                                  : "rgba(28, 41, 64, 0.7)",
                                borderTop: isLight
                                  ? "1px solid #e2e8f0"
                                  : "1px solid rgba(255, 255, 255, 0.12)",
                                borderRight: isLight
                                  ? "1px solid #e2e8f0"
                                  : "1px solid rgba(255, 255, 255, 0.12)",
                                borderBottom: isLight
                                  ? "1px solid #e2e8f0"
                                  : "1px solid rgba(255, 255, 255, 0.12)",
                                borderLeft: `3px solid ${rIdx === 0 ? meta.accent : "#10b981"}`,
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "1.25rem",
                                  fontWeight: 800,
                                  fontFamily: "var(--font-display), monospace",
                                  color: rIdx === 0 ? meta.accent : isLight ? "#059669" : "#34d399",
                                  lineHeight: 1.15,
                                  marginBottom: "2px",
                                }}
                              >
                                {res.metric}
                              </div>
                              <div
                                style={{
                                  fontSize: "0.68rem",
                                  fontWeight: 600,
                                  color: isLight ? "#64748b" : "#94a3b8",
                                  lineHeight: 1.25,
                                }}
                              >
                                {res.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Tech Badges + Link Row */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "8px",
                            paddingTop: "0.65rem",
                            borderTop: isLight
                              ? "1px solid rgba(226, 232, 240, 0.8)"
                              : "1px solid rgba(255, 255, 255, 0.07)",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "4px",
                            }}
                          >
                            {cs.technologies.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                style={{
                                  fontSize: "0.68rem",
                                  fontWeight: 600,
                                  padding: "2px 7px",
                                  borderRadius: "5px",
                                  background: isLight
                                    ? "rgba(241, 245, 249, 0.9)"
                                    : "rgba(255, 255, 255, 0.05)",
                                  border: isLight
                                    ? "1px solid #e2e8f0"
                                    : "1px solid rgba(255, 255, 255, 0.08)",
                                  color: isLight ? "#475569" : "#cbd5e1",
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <Link
                            href={`/portfolio/${cs.slug}`}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              fontSize: "0.78rem",
                              fontWeight: 700,
                              color: meta.accent,
                              textDecoration: "none",
                              padding: "4px 8px",
                              borderRadius: "6px",
                              backgroundColor: `rgba(${meta.accentRgb}, 0.08)`,
                              transition: "all 0.2s ease",
                            }}
                          >
                            <span>Case Study</span>
                            <ArrowUpRight size={13} />
                          </Link>
                        </div>
                      </div>
                    </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
