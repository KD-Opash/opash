"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Zap,
  Globe,
  Quote,
  TrendingUp,
  Award,
  Terminal,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { companyData } from "@/data/company";

interface PhilosophyPillar {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  highlight: string;
}

const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    id: "digital-foundations",
    number: "01",
    title: "Zero-Bloat Digital Foundations",
    headline: "Engineered for 10x Scalability & Uptime",
    description:
      "We avoid brittle, throwaway prototypes. Every platform architecture is engineered with microservices or modular monolith patterns, automated CI/CD pipelines, and clean abstractions designed to scale effortlessly to millions of users.",
    icon: Layers,
    highlight: "99.99% Production Uptime",
  },
  {
    id: "engineering-rigor",
    number: "02",
    title: "Direct Engineering Rigor",
    headline: "Senior Devs Without Management Overhead",
    description:
      "Legacy agencies insert layers of non-technical account handlers between you and the code. At Opash, founders collaborate directly with domain-specialist senior architects through real-time Slack channels, live sprint demos, and daily code commits.",
    icon: Cpu,
    highlight: "Top 3% Vetted Talent",
  },
  {
    id: "partnership-ip",
    number: "03",
    title: "100% IP & Radical Transparency",
    headline: "Your Code, Your Repos, Day One",
    description:
      "We build partnerships anchored in mutual growth. You own all GitHub repositories, architectural schematics, deployment scripts, and intellectual property from the first commit—zero vendor lock-in, zero hostage licensing fees.",
    icon: ShieldCheck,
    highlight: "100% Day-1 IP Ownership",
  },
];

export function FounderShowcase() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [activePillarId, setActivePillarId] = useState<string>("digital-foundations");
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  // Live Surat (HQ) Clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        setCurrentTime(timeStr);
      } catch {
        setCurrentTime("IST (UTC+5:30)");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(companyData.ceo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const activePillar =
    PHILOSOPHY_PILLARS.find((p) => p.id === activePillarId) || PHILOSOPHY_PILLARS[0];

  return (
    <section
      id="founder-leadership"
      className="founder-leadership-section"
      aria-label="Meet Our Founder & Chief Architect"
      style={{
        position: "relative",
        padding: "7.5rem 0",
        overflow: "hidden",
        backgroundColor: isLight ? "#f8fafc" : "#030814",
        color: isLight ? "#0f172a" : "#f8fafc",
        transition: "background-color 0.4s ease, color 0.4s ease",
      }}
    >
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

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        
        {/* ========================================================================= */}
        {/* 1. SECTION BADGE & TITLE                                                 */}
        {/* ========================================================================= */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.5rem auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55rem",
              padding: "0.42rem 1.15rem",
              borderRadius: "9999px",
              background: isLight
                ? "linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)"
                : "linear-gradient(135deg, rgba(14, 165, 233, 0.18) 0%, rgba(16, 185, 129, 0.15) 100%)",
              border: `1px solid ${isLight ? "rgba(14, 165, 233, 0.3)" : "rgba(14, 165, 233, 0.4)"}`,
              color: isLight ? "#0284c7" : "#38bdf8",
              fontSize: "0.82rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1.2rem",
              boxShadow: isLight
                ? "0 4px 16px rgba(14, 165, 233, 0.12)"
                : "0 4px 20px rgba(14, 165, 233, 0.2)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 10px #10b981",
                display: "inline-block",
              }}
            />
            <span>Executive Leadership & Vision</span>
            <Sparkles size={14} style={{ color: "#10b981" }} />
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
            Meet Our{" "}
            <span className="opash-hero-gradient-text">
              Founder & Chief Architect
            </span>
          </h2>

          <p
            className="subhead-lead"
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
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
        {/* 2. MAIN LEADERSHIP STAGE: SPLIT DUAL PANELS                              */}
        {/* ========================================================================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.25fr 0.95fr",
            gap: "2.5rem",
            alignItems: "stretch",
          }}
          className="founder-showcase-grid"
        >
          {/* --------------------------------------------------------------------- */}
          {/* LEFT PANEL: ENGINEERING MANIFESTO & PHILOSOPHY DECK                    */}
          {/* --------------------------------------------------------------------- */}
          <div
            style={{
              borderRadius: "28px",
              background: isLight
                ? "rgba(255, 255, 255, 0.9)"
                : "rgba(10, 18, 34, 0.75)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: `1px solid ${isLight ? "rgba(226, 232, 240, 0.95)" : "rgba(255, 255, 255, 0.08)"}`,
              padding: "2.75rem 2.5rem",
              boxShadow: isLight
                ? "0 25px 60px -15px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.8)"
                : "0 30px 80px -20px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              {/* Founder Tagline & Experience */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    padding: "3px 10px",
                    borderRadius: "6px",
                    background: isLight ? "rgba(14, 165, 233, 0.12)" : "rgba(14, 165, 233, 0.2)",
                    color: isLight ? "#0284c7" : "#38bdf8",
                  }}
                >
                  Architectural Leadership
                </span>
                <span
                  style={{
                    fontSize: "0.85rem",
                    color: isLight ? "#64748b" : "#94a3b8",
                    fontWeight: 600,
                  }}
                >
                  10+ Years in Systems Architecture & Product Strategy
                </span>
              </div>

              {/* Founder's Signature Quote Callout */}
              <div
                style={{
                  position: "relative",
                  padding: "0.5rem 0 0.5rem 1.5rem",
                  borderLeft: `3px solid #10b981`,
                  marginBottom: "2rem",
                }}
              >
                <Quote
                  size={28}
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "18px",
                    color: "#10b981",
                    opacity: 0.25,
                  }}
                />
                <p
                  style={{
                    fontSize: "1.12rem",
                    fontStyle: "italic",
                    fontWeight: 600,
                    lineHeight: 1.6,
                    margin: "0 0 0.85rem 0",
                    color: isLight ? "#0f172a" : "#f1f5f9",
                  }}
                >
                  &ldquo;{companyData.ceo.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#10b981" }}>
                    — Hiren Danecha
                  </span>
                  <span style={{ fontSize: "0.78rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                    Founder & CEO, Opash Software
                  </span>
                </div>
              </div>

              {/* Founder Bio Paragraph */}
              <p
                style={{
                  fontSize: "0.96rem",
                  lineHeight: 1.7,
                  color: isLight ? "#334155" : "#cbd5e1",
                  margin: "0 0 2rem 0",
                }}
              >
                {companyData.ceo.bio}
              </p>

              {/* Interactive Philosophy Pillars */}
              <div style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: isLight ? "#64748b" : "#94a3b8",
                    marginBottom: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Terminal size={14} color="#0ea5e9" />
                  <span>Core Engineering Pillars</span>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "0.75rem",
                  }}
                >
                  {PHILOSOPHY_PILLARS.map((pillar) => {
                    const isSelected = activePillarId === pillar.id;
                    const IconComponent = pillar.icon;
                    return (
                      <button
                        key={pillar.id}
                        onClick={() => setActivePillarId(pillar.id)}
                        style={{
                          padding: "0.85rem",
                          borderRadius: "14px",
                          border: `1px solid ${
                            isSelected
                              ? isLight
                                ? "#0ea5e9"
                                : "#38bdf8"
                              : isLight
                              ? "rgba(226, 232, 240, 0.9)"
                              : "rgba(255, 255, 255, 0.07)"
                          }`,
                          background: isSelected
                            ? isLight
                              ? "rgba(14, 165, 233, 0.1)"
                              : "rgba(14, 165, 233, 0.18)"
                            : isLight
                            ? "#ffffff"
                            : "rgba(255, 255, 255, 0.03)",
                          cursor: "pointer",
                          textAlign: "left",
                          transition: "all 0.25s ease",
                          boxShadow: isSelected
                            ? "0 4px 16px rgba(14, 165, 233, 0.15)"
                            : "none",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: "0.4rem",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.72rem",
                              fontWeight: 800,
                              color: isSelected ? "#0ea5e9" : isLight ? "#94a3b8" : "#64748b",
                            }}
                          >
                            {pillar.number}
                          </span>
                          <IconComponent
                            size={16}
                            style={{
                              color: isSelected ? "#0ea5e9" : isLight ? "#64748b" : "#94a3b8",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            fontSize: "0.82rem",
                            fontWeight: 750,
                            color: isLight ? "#0f172a" : "#f8fafc",
                            lineHeight: 1.25,
                          }}
                        >
                          {pillar.title}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Active Pillar Detail Box */}
                <div
                  style={{
                    marginTop: "0.85rem",
                    padding: "1.1rem 1.35rem",
                    borderRadius: "14px",
                    background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.03)",
                    border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)"}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "0.35rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 800,
                        color: isLight ? "#0284c7" : "#38bdf8",
                      }}
                    >
                      {activePillar.headline}
                    </span>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "#10b981",
                        background: isLight ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.18)",
                        padding: "2px 8px",
                        borderRadius: "9999px",
                      }}
                    >
                      {activePillar.highlight}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.84rem",
                      color: isLight ? "#475569" : "#94a3b8",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {activePillar.description}
                  </p>
                </div>
              </div>

              {/* Competency Badges */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  marginBottom: "2.25rem",
                }}
              >
                {companyData.ceo.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "0.35rem 0.85rem",
                      borderRadius: "9999px",
                      background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.05)",
                      border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
                      color: isLight ? "#334155" : "#cbd5e1",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                    }}
                  >
                    ✦ {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
                paddingTop: "1.25rem",
                borderTop: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
              }}
            >
              <a
                href={`mailto:${companyData.ceo.email}?subject=Architecture%20Inquiry%20via%20Opash%20Software`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.85rem 1.75rem",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)",
                  color: "#ffffff",
                  fontWeight: 750,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 18px rgba(14, 165, 233, 0.35)",
                  transition: "all 0.25s ease",
                }}
              >
                <span>Schedule Architecture Review</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={companyData.ceo.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  padding: "0.85rem 1.5rem",
                  borderRadius: "14px",
                  background: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                  border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.12)"}`,
                  color: isLight ? "#0f172a" : "#f1f5f9",
                  fontWeight: 650,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
              >
                <span>LinkedIn Profile</span>
                <ExternalLink size={15} style={{ opacity: 0.7 }} />
              </a>
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* RIGHT PANEL: HOLOGRAPHIC EXECUTIVE ID PASS & METRICS DECK              */}
          {/* --------------------------------------------------------------------- */}
          <div
            style={{
              borderRadius: "28px",
              background: isLight
                ? "linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)"
                : "linear-gradient(180deg, rgba(15, 23, 42, 0.88) 0%, rgba(8, 14, 28, 0.95) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: `1px solid ${isLight ? "rgba(14, 165, 233, 0.3)" : "rgba(0, 255, 209, 0.3)"}`,
              padding: "2.75rem 2.25rem",
              boxShadow: isLight
                ? "0 25px 60px -15px rgba(14, 165, 233, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.9)"
                : "0 30px 80px -20px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 255, 209, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top Holographic Header Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "1.25rem",
                borderBottom: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
                marginBottom: "2rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#10b981",
                    boxShadow: "0 0 10px #10b981",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.74rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: isLight ? "#0f766e" : "#00ffd1",
                  }}
                >
                  ONLINE // SURAT HQ
                </span>
              </div>

              {/* Live Surat Clock */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: isLight ? "#64748b" : "#94a3b8",
                  padding: "2px 8px",
                  borderRadius: "6px",
                  background: isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.05)",
                }}
              >
                <Clock size={12} color="#0ea5e9" />
                <span>{currentTime || "IST (UTC+5:30)"}</span>
              </div>
            </div>

            {/* Avatar & Executive Identification Deck */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              {/* High-Tech Avatar Medallion with Concentric Orbital Rings */}
              <div
                style={{
                  position: "relative",
                  width: "140px",
                  height: "140px",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Outer Subtle Accent Ring */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: "-3px",
                    borderRadius: "50%",
                    border: "1px solid rgba(14, 165, 233, 0.4)",
                    opacity: isLight ? 0.6 : 0.8,
                  }}
                />

                {/* Inner Border Ring */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    padding: "3px",
                    background: "linear-gradient(135deg, #0ea5e9 0%, #10b981 50%, #00ffd1 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Central Avatar Core with Real Photo */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      overflow: "hidden",
                      background: isLight ? "#0f172a" : "#060d1d",
                      boxShadow: "inset 0 0 20px rgba(0, 255, 209, 0.2)",
                    }}
                  >
                    <Image
                      src="/images/image.webp"
                      alt={companyData.ceo.name}
                      fill
                      sizes="140px"
                      priority
                      style={{
                        objectFit: "cover",
                        objectPosition: "top center",
                      }}
                    />
                    {/* Subtle bottom vignette */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, transparent 65%, rgba(3, 8, 20, 0.45) 100%)",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Verified Founder Badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "2px",
                    right: "2px",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "#10b981",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 12px rgba(16, 185, 129, 0.6), 0 0 0 3px #030814",
                  }}
                  title="Verified Founder & CEO"
                >
                  <CheckCircle2 size={18} strokeWidth={2.5} />
                </div>
              </div>

              {/* Name & Credentials */}
              <h3
                style={{
                  fontSize: "1.65rem",
                  fontWeight: 850,
                  margin: "0 0 0.25rem 0",
                  letterSpacing: "-0.02em",
                }}
              >
                {companyData.ceo.name}
              </h3>
              
              <div
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 750,
                  color: isLight ? "#0284c7" : "#00ffd1",
                  marginBottom: "0.35rem",
                }}
              >
                Founder & Chief Executive Officer
              </div>

              <div
                style={{
                  fontSize: "0.82rem",
                  color: isLight ? "#64748b" : "#94a3b8",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <Globe size={13} color="#0ea5e9" />
                <span>Opash Software • Surat, India (Global Reach)</span>
              </div>
            </div>

            {/* Leadership Telemetry Grid (2x2 Metrics Deck) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.85rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  padding: "1rem",
                  borderRadius: "16px",
                  background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.04)",
                  border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)"}`,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "1.35rem", fontWeight: 850, color: isLight ? "#0284c7" : "#38bdf8" }}>
                  10+ Years
                </div>
                <div style={{ fontSize: "0.72rem", color: isLight ? "#64748b" : "#94a3b8", fontWeight: 600 }}>
                  Systems Architecture
                </div>
              </div>

              <div
                style={{
                  padding: "1rem",
                  borderRadius: "16px",
                  background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.04)",
                  border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)"}`,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "1.35rem", fontWeight: 850, color: "#10b981" }}>
                  75+ Shipped
                </div>
                <div style={{ fontSize: "0.72rem", color: isLight ? "#64748b" : "#94a3b8", fontWeight: 600 }}>
                  Global Deployments
                </div>
              </div>

              <div
                style={{
                  padding: "1rem",
                  borderRadius: "16px",
                  background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.04)",
                  border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)"}`,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "1.35rem", fontWeight: 850, color: isLight ? "#7c3aed" : "#a78bfa" }}>
                  96% Rate
                </div>
                <div style={{ fontSize: "0.72rem", color: isLight ? "#64748b" : "#94a3b8", fontWeight: 600 }}>
                  Client Retention
                </div>
              </div>

              <div
                style={{
                  padding: "1rem",
                  borderRadius: "16px",
                  background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.04)",
                  border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)"}`,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "1.35rem", fontWeight: 850, color: "#00ffd1" }}>
                  50+ Devs
                </div>
                <div style={{ fontSize: "0.72rem", color: isLight ? "#64748b" : "#94a3b8", fontWeight: 600 }}>
                  Engineers Mentored
                </div>
              </div>
            </div>

            {/* Direct Communication Terminal Channel */}
            <div
              style={{
                borderRadius: "18px",
                background: isLight ? "rgba(241, 245, 249, 0.85)" : "rgba(10, 18, 34, 0.8)",
                border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.1)"}`,
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: isLight ? "#64748b" : "#94a3b8",
                  marginBottom: "0.6rem",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <Mail size={13} color="#0ea5e9" />
                  <span>Direct Executive Channel:</span>
                </span>
                <span style={{ color: "#10b981", fontSize: "0.7rem", fontWeight: 800 }}>
                  P1 Priority
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                  padding: "0.65rem 0.95rem",
                  borderRadius: "10px",
                  background: isLight ? "#ffffff" : "rgba(0, 0, 0, 0.35)",
                  border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
                }}
              >
                <span
                  style={{
                    fontSize: "0.86rem",
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
                    gap: "0.35rem",
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
                    fontSize: "0.74rem",
                    fontWeight: 750,
                    transition: "all 0.2s ease",
                    flexShrink: 0,
                  }}
                >
                  {copiedEmail ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copiedEmail ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default FounderShowcase;
