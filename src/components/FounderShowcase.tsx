"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Globe,
  Quote,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { companyData } from "@/data/company";

export function FounderShowcase() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(companyData.ceo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  return (
    <section
      id="founder-leadership"
      className="founder-leadership-section"
      aria-label="Meet Our Founder & Chief Architect"
      style={{
        position: "relative",
        padding: "clamp(2.5rem, 5vw, 4.25rem) 0",
        overflow: "hidden",
        backgroundColor: isLight ? "#f8fafc" : "#030814",
        color: isLight ? "#0f172a" : "#f8fafc",
        transition: "background-color 0.4s ease, color 0.4s ease",
      }}
    >
      <style>{`
        .founder-unified-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .founder-card-body-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 2.5rem;
          align-items: stretch;
        }
        @media (max-width: 960px) {
          .founder-card-body-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 680px) {
          .founder-card-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1rem !important;
          }
          .founder-stats-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 0.6rem !important;
          }
        }
      `}</style>

      {/* Background Ambient Glows */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          left: "15%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: isLight
            ? "radial-gradient(circle, rgba(14, 165, 233, 0.06) 0%, rgba(16, 185, 129, 0.03) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, rgba(16, 185, 129, 0.04) 50%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: isLight
            ? "radial-gradient(circle, rgba(138, 92, 255, 0.05) 0%, rgba(0, 255, 209, 0.03) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(138, 92, 255, 0.08) 0%, rgba(0, 255, 209, 0.04) 50%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container-custom" style={{ position: "relative", zIndex: 1, maxWidth: "1160px" }}>
        
        {/* ========================================================================= */}
        {/* 1. SECTION TITLE & SUBTITLE                                              */}
        {/* ========================================================================= */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 2.5rem auto" }}>
          <h2
            className="heading-section"
            style={{
              margin: "0 0 0.85rem 0",
            }}
          >
            Meet Our{" "}
            <span className="opash-hero-gradient-text">
              Founder & Chief Architect
            </span>
          </h2>

          <p
            className="subhead-lead"
            style={{
              fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)",
              color: isLight ? "#475569" : "#94a3b8",
              maxWidth: "680px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Bridging senior software craftsmanship with strategic product vision to build lasting competitive moats for high-growth global teams.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. UNIFIED COMPACT EXECUTIVE SHOWCASE CARD (1 SINGLE COHESIVE CARD)       */}
        {/* ========================================================================= */}
        <div
          className="founder-unified-card"
          style={{
            borderRadius: "24px",
            background: isLight
              ? "linear-gradient(160deg, rgba(255, 255, 255, 0.96) 0%, rgba(248, 250, 252, 0.94) 100%)"
              : "linear-gradient(160deg, rgba(12, 20, 36, 0.88) 0%, rgba(7, 13, 26, 0.94) 100%)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: `1px solid ${isLight ? "rgba(14, 165, 233, 0.22)" : "rgba(0, 255, 209, 0.18)"}`,
            padding: "clamp(1.5rem, 3vw, 2.35rem)",
            boxShadow: isLight
              ? "0 20px 50px -15px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.9)"
              : "0 25px 70px -20px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.05)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle Top Accent Glow Line */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: "10%",
              right: "10%",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #0ea5e9, #10b981, transparent)",
              opacity: isLight ? 0.7 : 0.9,
            }}
          />

          {/* --------------------------------------------------------------------- */}
          {/* HEADER ROW: FOUNDER IDENTITY                                          */}
          {/* --------------------------------------------------------------------- */}
          <div
            className="founder-card-header"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "1.15rem",
              paddingBottom: "1.5rem",
              borderBottom: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
              marginBottom: "1.75rem",
            }}
          >
            {/* Avatar with Tech Ring and Verified Badge */}
            <div
              style={{
                position: "relative",
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                padding: "2.5px",
                background: "linear-gradient(135deg, #0ea5e9 0%, #10b981 50%, #00ffd1 100%)",
                boxShadow: "0 0 18px rgba(16, 185, 129, 0.3)",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: isLight ? "#0f172a" : "#060d1d",
                }}
              >
                <Image
                  src={isLight ? "/images/image-light.webp" : "/images/image-dark.webp"}
                  alt={companyData.ceo.name}
                  fill
                  sizes="72px"
                  priority
                  style={{
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                />
              </div>
              {/* Verified Founder Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  right: "-2px",
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background: "#10b981",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 8px rgba(16, 185, 129, 0.8), 0 0 0 2px #030814",
                }}
                title="Verified Founder & CEO"
              >
                <CheckCircle2 size={13} strokeWidth={2.8} />
              </div>
            </div>

            {/* Title & Organization Details */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.2rem" }}>
                <h3
                  style={{
                    fontSize: "1.38rem",
                    fontWeight: 850,
                    margin: 0,
                    letterSpacing: "-0.02em",
                    color: isLight ? "#0f172a" : "#ffffff",
                  }}
                >
                  {companyData.ceo.name}
                </h3>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    padding: "2px 8px",
                    borderRadius: "6px",
                    background: isLight ? "rgba(14, 165, 233, 0.12)" : "rgba(14, 165, 233, 0.2)",
                    color: isLight ? "#0284c7" : "#38bdf8",
                  }}
                >
                  Founder & CEO
                </span>
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: isLight ? "#64748b" : "#94a3b8",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  flexWrap: "wrap",
                }}
              >
                <Globe size={13} color="#0ea5e9" />
                <span>Opash Software • Surat, India (Global Reach)</span>
                <span style={{ opacity: 0.4 }}>•</span>
                <span style={{ color: isLight ? "#0284c7" : "#00ffd1", fontWeight: 650 }}>
                  10+ Years Systems Architecture
                </span>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* BODY ROW: STORY & QUOTE (LEFT) + METRICS & DIRECT CHANNEL (RIGHT)     */}
          {/* --------------------------------------------------------------------- */}
          <div className="founder-card-body-grid">
            {/* Left Side: Quote, Bio & Action Buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <div>
                {/* Leadership Tag */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.85rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: isLight ? "#0284c7" : "#38bdf8",
                    }}
                  >
                    Architectural Leadership
                  </span>
                  <span style={{ fontSize: "0.75rem", color: isLight ? "#94a3b8" : "#64748b" }}>•</span>
                  <span style={{ fontSize: "0.78rem", color: isLight ? "#64748b" : "#94a3b8", fontWeight: 600 }}>
                    Product Strategy & Distributed Systems
                  </span>
                </div>

                {/* Founder's Signature Quote Callout */}
                <div
                  style={{
                    position: "relative",
                    padding: "0.5rem 0 0.5rem 1.15rem",
                    borderLeft: "3px solid #10b981",
                    marginBottom: "1.15rem",
                  }}
                >
                  <Quote
                    size={24}
                    style={{
                      position: "absolute",
                      top: "4px",
                      right: "8px",
                      color: "#10b981",
                      opacity: 0.18,
                    }}
                  />
                  <p
                    style={{
                      fontSize: "1.04rem",
                      fontStyle: "italic",
                      fontWeight: 600,
                      lineHeight: 1.55,
                      margin: "0 0 0.45rem 0",
                      color: isLight ? "#0f172a" : "#f1f5f9",
                    }}
                  >
                    &ldquo;{companyData.ceo.quote}&rdquo;
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                    <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#10b981" }}>
                      — Hiren Danecha
                    </span>
                    <span style={{ fontSize: "0.74rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                      Founder & CEO, Opash Software
                    </span>
                  </div>
                </div>

                {/* Founder Bio Paragraph */}
                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.68,
                    color: isLight ? "#334155" : "#cbd5e1",
                    margin: "0 0 1.5rem 0",
                  }}
                >
                  {companyData.ceo.bio}
                </p>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  flexWrap: "wrap",
                  marginTop: "auto",
                  paddingTop: "0.5rem",
                }}
              >
                <a
                  href={`mailto:${companyData.ceo.email}?subject=Architecture%20Inquiry%20via%20Opash%20Software`}
                  className="hero-brand-primary-btn opash-roll-btn"
                >
                  <span className="opash-roll-track">
                    {/* Primary Content (slides up out of view on hover) */}
                    <span className="opash-roll-item">
                      <span>Schedule Architecture Review</span>
                      <ArrowRight size={15} className="hero-btn-arrow" />
                    </span>
                    {/* Clone Content (slides up from bottom into center on hover) */}
                    <span className="opash-roll-item" aria-hidden="true">
                      <span>Schedule Architecture Review</span>
                      <ArrowRight size={15} className="hero-btn-arrow" />
                    </span>
                  </span>
                </a>

                <a
                  href={companyData.ceo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-brand-secondary-btn opash-roll-btn"
                >
                  <span className="opash-roll-track">
                    {/* Primary Content (slides up out of view on hover) */}
                    <span className="opash-roll-item">
                      <span>LinkedIn Profile</span>
                      <ExternalLink size={14} style={{ opacity: 0.8 }} />
                    </span>
                    {/* Clone Content (slides up from bottom into center on hover) */}
                    <span className="opash-roll-item" aria-hidden="true">
                      <span>LinkedIn Profile</span>
                      <ExternalLink size={14} style={{ opacity: 0.8 }} />
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Side: 4 Telemetry Metrics Grid & Direct Executive Channel */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                gap: "0.85rem",
              }}
            >
              {/* 4 Stats Grid (2x2) */}
              <div
                className="founder-stats-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    padding: "1rem 0.85rem",
                    borderRadius: "14px",
                    background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.04)",
                    border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)"}`,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontSize: "1.32rem", fontWeight: 850, color: isLight ? "#0284c7" : "#38bdf8" }}>
                    10+ Years
                  </div>
                  <div style={{ fontSize: "0.72rem", color: isLight ? "#64748b" : "#94a3b8", fontWeight: 600 }}>
                    Systems Architecture
                  </div>
                </div>

                <div
                  style={{
                    padding: "1rem 0.85rem",
                    borderRadius: "14px",
                    background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.04)",
                    border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)"}`,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontSize: "1.32rem", fontWeight: 850, color: "#10b981" }}>
                    75+ Shipped
                  </div>
                  <div style={{ fontSize: "0.72rem", color: isLight ? "#64748b" : "#94a3b8", fontWeight: 600 }}>
                    Global Deployments
                  </div>
                </div>

                <div
                  style={{
                    padding: "1rem 0.85rem",
                    borderRadius: "14px",
                    background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.04)",
                    border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)"}`,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontSize: "1.32rem", fontWeight: 850, color: isLight ? "#7c3aed" : "#a78bfa" }}>
                    96% Rate
                  </div>
                  <div style={{ fontSize: "0.72rem", color: isLight ? "#64748b" : "#94a3b8", fontWeight: 600 }}>
                    Client Retention
                  </div>
                </div>

                <div
                  style={{
                    padding: "1rem 0.85rem",
                    borderRadius: "14px",
                    background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.04)",
                    border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)"}`,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontSize: "1.32rem", fontWeight: 850, color: "#00ffd1" }}>
                    100%
                  </div>
                  <div style={{ fontSize: "0.72rem", color: isLight ? "#64748b" : "#94a3b8", fontWeight: 600 }}>
                    Code Ownership
                  </div>
                </div>
              </div>

              {/* Direct Executive Channel */}
              <div
                style={{
                  borderRadius: "14px",
                  background: isLight ? "rgba(241, 245, 249, 0.85)" : "rgba(10, 18, 34, 0.8)",
                  border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.1)"}`,
                  padding: "0.85rem 1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "0.73rem",
                    fontWeight: 700,
                    color: isLight ? "#64748b" : "#94a3b8",
                    marginBottom: "0.45rem",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    <Mail size={13} color="#0ea5e9" />
                    <span>Direct Executive Channel:</span>
                  </span>
                  <span style={{ color: "#10b981", fontSize: "0.68rem", fontWeight: 800 }}>
                    P1 Priority
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                    padding: "0.5rem 0.85rem",
                    borderRadius: "10px",
                    background: isLight ? "#ffffff" : "rgba(0, 0, 0, 0.35)",
                    border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.84rem",
                      fontWeight: 750,
                      color: isLight ? "#0f172a" : "#f8fafc",
                      fontFamily: "monospace",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {companyData.ceo.email}
                  </span>

                  <button
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      border: "none",
                      background: copiedEmail
                        ? "#10b981"
                        : isLight
                        ? "rgba(14, 165, 233, 0.12)"
                        : "rgba(14, 165, 233, 0.2)",
                      color: copiedEmail ? "#ffffff" : isLight ? "#0284c7" : "#38bdf8",
                      padding: "0.35rem 0.65rem",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "0.72rem",
                      fontWeight: 750,
                      transition: "all 0.2s ease",
                      flexShrink: 0,
                    }}
                  >
                    {copiedEmail ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedEmail ? "Copied!" : "Copy"}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FounderShowcase;


