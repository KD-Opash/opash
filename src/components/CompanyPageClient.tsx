"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { 
  Shield, 
  Zap, 
  Users, 
  Clock, 
  Lock, 
  Headphones, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Compass, 
  Layers, 
  Globe, 
  ShieldCheck,
  Star,
  ExternalLink,
  Code2,
  Cpu,
  Mail,
  Copy,
  Check,
  MapPin,
  Calendar,
  Award,
  ChevronRight,
  TrendingUp,
  Server,
  FileCheck2,
  Terminal,
  FolderOpen
} from "lucide-react";
import { companyData } from "@/data/company";
import ContactForm from "@/components/ContactForm";
import { useTheme } from "./ThemeProvider";
import AboutCreativeBackdrop from "./AboutCreativeBackdrop";

export default function CompanyPageClient() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // State
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState(4); // Default to latest 2025-2026
  const [selectedHubIndex, setSelectedHubIndex] = useState(0); // Default to Surat HQ
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activePillar, setActivePillar] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState("");

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
    navigator.clipboard.writeText(companyData.ceo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const milestoneIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    Compass: Compass,
    Layers: Layers,
    Globe: Globe,
    ShieldCheck: ShieldCheck,
    Sparkles: Sparkles,
  };

  const valueIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    Shield: Shield,
    Zap: Zap,
    Users: Users,
    Clock: Clock,
    Lock: Lock,
    Headphones: Headphones,
  };

  const pillars = [
    {
      number: "01",
      title: "Zero-Bloat Digital Foundations",
      tagline: "Engineered for 10x Scalability & Sub-Second Latency",
      desc: "We avoid brittle prototypes and throwaway code. Every application architecture is designed with modular microservices or structured modular monoliths, automated CI/CD pipelines, and clean abstractions that scale seamlessly to millions of users.",
      metric: "99.99% Uptime SLAs",
      icon: Layers,
      accent: "#00a88f",
      features: [
        "Domain-Driven Architecture & Clean Code Standards",
        "Automated Unit, Integration & End-to-End Test Suites",
        "Stateless Edge Caching & Distributed Microservices"
      ]
    },
    {
      number: "02",
      title: "Direct Senior Engineering Rigor",
      tagline: "Specialist Devs Without Non-Technical Account Layers",
      desc: "Legacy agencies sandwich non-technical project handlers between clients and developers. At Opash, you collaborate directly with domain-specialist senior software architects through shared Slack channels, daily standups, and transparent GitHub commits.",
      metric: "Top 3% Vetted Talent",
      icon: Cpu,
      accent: "#38bdf8",
      features: [
        "Direct Slack & Zoom Access with Lead Engineers",
        "Daily Git Commits & 2-Week Predictable Sprints",
        "Real-Time Telemetry & Sprint Burn-Down Visibility"
      ]
    },
    {
      number: "03",
      title: "100% Day-One IP Ownership",
      tagline: "Your Code, Your Repositories, Your Infrastructure",
      desc: "We establish partnerships rooted in mutual trust and transparency. You retain absolute ownership of all GitHub repositories, architectural schematics, Docker configurations, and intellectual property from the first commit—zero vendor lock-in.",
      metric: "100% IP Transferred",
      icon: ShieldCheck,
      accent: "#6366f1",
      features: [
        "Direct Ownership of Private GitHub Repositories",
        "Zero Proprietary Framework Hostage Fees",
        "Comprehensive Architectural Documentation & Schematics"
      ]
    }
  ];

  const agencyComparison = [
    {
      criteria: "Engineering Talent",
      traditional: "Outsourced junior coders with high churn rate",
      opash: "In-house senior full-stack & AI architects with 5+ yrs experience",
      highlight: true
    },
    {
      criteria: "Communication Channel",
      traditional: "Layers of account managers and ticket delays",
      opash: "Direct Slack channel with senior devs & founder oversight",
      highlight: false
    },
    {
      criteria: "Code & IP Ownership",
      traditional: "Vendor lock-in, proprietary runtime licensing fees",
      opash: "100% Client IP ownership & clean Git repo access day 1",
      highlight: true
    },
    {
      criteria: "Delivery Velocity",
      traditional: "Unpredictable 6-month waterfall with budget creeps",
      opash: "Agile 2-week production sprints with live test environments",
      highlight: false
    },
    {
      criteria: "Code Quality & Testing",
      traditional: "Manual ad-hoc testing prone to regressions",
      opash: "Automated CI/CD pipelines, static analysis & 90%+ test coverage",
      highlight: true
    }
  ];

  return (
    <div
      style={{
        position: "relative",
        overflowX: "clip",
        backgroundColor: isLight ? "#f8fafc" : "#020712",
        color: isLight ? "#0f172a" : "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* ===================================================================== */}
      {/* 1. CINEMATIC HERO SECTION: ENGINEERING STUDIO & CULTURE VANGUARD      */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "7.5rem 1.5rem 4.5rem 1.5rem",
          overflow: "hidden",
        }}
      >
        {/* Bespoke Creative Architectural Studio Backdrop (0% GPU/CPU) */}
        <AboutCreativeBackdrop isLightMode={isLight} />

        <div className="container-custom" style={{ position: "relative", zIndex: 2, maxWidth: "1240px", margin: "0 auto" }}>
          {/* Eyebrow Status Badge */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.45rem 1.25rem",
                borderRadius: "9999px",
                backgroundColor: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.12)",
                border: isLight ? "1px solid rgba(0, 168, 143, 0.25)" : "1px solid rgba(0, 187, 171, 0.35)",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: isLight ? "#008a75" : "#2dd4bf",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: isLight ? "#00a88f" : "#2dd4bf",
                  boxShadow: isLight
                    ? "0 0 10px rgba(0, 168, 143, 0.6)"
                    : "0 0 12px rgba(45, 212, 191, 0.8)",
                  display: "inline-block",
                }}
              />
              <span>SURAT HQ &bull; ESTABLISHED 2021 &bull; GLOBAL CLIENT DELIVERY</span>
            </div>
          </div>

          {/* Main Headline */}
          <div style={{ textAlign: "center", maxWidth: "980px", margin: "0 auto" }}>
            <h1
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4.3rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
              }}
            >
              Engineering Excellence Built For{" "}
              <span className="opash-hero-gradient-text">
                Enduring Market Dominance
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                lineHeight: 1.65,
                color: isLight ? "#475569" : "#94a3b8",
                maxWidth: "840px",
                margin: "0 auto 2.25rem auto",
              }}
            >
              At Opash Software, we are an elite engineering studio of 50+ in-house full-stack, cloud, and AI specialists. Founded in Surat, India, we architect bespoke digital solutions for visionary founders and enterprises across North America, Europe, Middle East, and Asia.
            </p>

            {/* Quick Action CTAs */}
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "3.5rem" }}>
              <a
                href="#pillars"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 1.85rem",
                  borderRadius: "12px",
                  backgroundImage: isLight
                    ? "linear-gradient(135deg, #008a75 0%, #00a88f 100%)"
                    : "linear-gradient(135deg, #00a88f 0%, #2dd4bf 100%)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  boxShadow: "0 4px 20px rgba(0, 168, 143, 0.3)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  textDecoration: "none",
                }}
              >
                <Sparkles size={16} />
                <span>Our Engineering DNA</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#leadership"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 1.65rem",
                  borderRadius: "12px",
                  backgroundColor: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.65)",
                  border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.12)",
                  color: isLight ? "#0f172a" : "#f8fafc",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "background 0.2s ease",
                }}
              >
                <Users size={16} />
                <span>Meet Leadership</span>
              </a>

              <Link
                href="/portfolio"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 1.65rem",
                  borderRadius: "12px",
                  backgroundColor: isLight ? "rgba(2, 132, 199, 0.08)" : "rgba(56, 189, 248, 0.1)",
                  border: isLight ? "1px solid rgba(2, 132, 199, 0.2)" : "1px solid rgba(56, 189, 248, 0.25)",
                  color: isLight ? "#0284c7" : "#38bdf8",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                }}
              >
                <FolderOpen size={16} />
                <span>View Portfolio Showcase</span>
              </Link>
            </div>
          </div>

          {/* Telemetry Strip (4 Verified Stats) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
              maxWidth: "1140px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                padding: "1.6rem 1.25rem",
                borderRadius: "16px",
                background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.7)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.6rem",
                  fontWeight: 800,
                  color: isLight ? "#008a75" : "#2dd4bf",
                  lineHeight: 1.1,
                  marginBottom: "0.35rem",
                }}
              >
                {companyData.stats.developers}
              </div>
              <div style={{ fontSize: "0.88rem", fontWeight: 600, color: isLight ? "#475569" : "#94a3b8" }}>
                In-House Senior Engineers
              </div>
            </div>

            <div
              style={{
                padding: "1.6rem 1.25rem",
                borderRadius: "16px",
                background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.7)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.6rem",
                  fontWeight: 800,
                  color: isLight ? "#0284c7" : "#38bdf8",
                  lineHeight: 1.1,
                  marginBottom: "0.35rem",
                }}
              >
                {companyData.stats.projectsDelivered}
              </div>
              <div style={{ fontSize: "0.88rem", fontWeight: 600, color: isLight ? "#475569" : "#94a3b8" }}>
                Global Projects Delivered
              </div>
            </div>

            <div
              style={{
                padding: "1.6rem 1.25rem",
                borderRadius: "16px",
                background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.7)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.6rem",
                  fontWeight: 800,
                  color: isLight ? "#4f46e5" : "#818cf8",
                  lineHeight: 1.1,
                  marginBottom: "0.35rem",
                }}
              >
                {companyData.stats.clientRetentionRate}
              </div>
              <div style={{ fontSize: "0.88rem", fontWeight: 600, color: isLight ? "#475569" : "#94a3b8" }}>
                Long-Term Client Retention
              </div>
            </div>

            <div
              style={{
                padding: "1.6rem 1.25rem",
                borderRadius: "16px",
                background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.7)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.6rem",
                  fontWeight: 800,
                  color: isLight ? "#0d9488" : "#2dd4bf",
                  lineHeight: 1.1,
                  marginBottom: "0.35rem",
                }}
              >
                {companyData.stats.hoursExecuted}
              </div>
              <div style={{ fontSize: "0.88rem", fontWeight: 600, color: isLight ? "#475569" : "#94a3b8" }}>
                Production Hours Executed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. LIVE HEADQUARTERS COMMAND & TIMEZONE SYNCHRONIZATION BAR           */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "3.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f1f5f9" : "rgba(8, 16, 32, 0.5)",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
          borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              alignItems: "center",
            }}
          >
            {/* Live HQ Clock Card */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                padding: "1.25rem 1.5rem",
                borderRadius: "16px",
                background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.7)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "14px",
                  background: isLight ? "rgba(0, 168, 143, 0.12)" : "rgba(0, 187, 171, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isLight ? "#008a75" : "#2dd4bf",
                  flexShrink: 0,
                }}
              >
                <Clock size={24} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.05em", color: isLight ? "#008a75" : "#2dd4bf", textTransform: "uppercase" }}>
                    Live Surat HQ Time
                  </span>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#10b981",
                      display: "inline-block",
                    }}
                  />
                </div>
                <div style={{ fontSize: "1.4rem", fontWeight: 800, fontFamily: "monospace", color: isLight ? "#0f172a" : "#f8fafc", marginTop: "0.15rem" }}>
                  {currentTime || "09:30:00 AM"} IST
                </div>
              </div>
            </div>

            {/* Global Sprints Overlap */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                padding: "1.25rem 1.5rem",
                borderRadius: "16px",
                background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.7)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "14px",
                  background: isLight ? "rgba(2, 132, 199, 0.12)" : "rgba(56, 189, 248, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isLight ? "#0284c7" : "#38bdf8",
                  flexShrink: 0,
                }}
              >
                <Globe size={24} />
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.05em", color: isLight ? "#0284c7" : "#38bdf8", textTransform: "uppercase" }}>
                  Global Sprints Overlap
                </div>
                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: isLight ? "#0f172a" : "#f8fafc", marginTop: "0.15rem" }}>
                  18 Timezones Synchronized (US, UK, UAE, EU)
                </div>
              </div>
            </div>

            {/* Quality Commitment */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                padding: "1.25rem 1.5rem",
                borderRadius: "16px",
                background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.7)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "14px",
                  background: isLight ? "rgba(99, 102, 241, 0.12)" : "rgba(129, 140, 248, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isLight ? "#4f46e5" : "#818cf8",
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={24} />
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.05em", color: isLight ? "#4f46e5" : "#818cf8", textTransform: "uppercase" }}>
                  Engineering Assurance
                </div>
                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: isLight ? "#0f172a" : "#f8fafc", marginTop: "0.15rem" }}>
                  Zero Vendor Lock-In & 100% IP Ownership
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. DUAL CORE CARDS: VISION & MISSION                                  */}
      {/* ===================================================================== */}
      <section style={{ padding: "6rem 1.5rem", position: "relative" }}>
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 3.5rem auto" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.35rem 0.95rem",
                borderRadius: "9999px",
                background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.12)",
                color: isLight ? "#008a75" : "#2dd4bf",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Purpose & Direction
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 800, lineHeight: 1.2 }}>
              The Conviction That Drives Opash
            </h2>
            <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "1.05rem", marginTop: "0.75rem" }}>
              How our founders and engineering team approach software creation, partnerships, and impact.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "2rem" }}>
            {/* Vision */}
            <div
              style={{
                padding: "3rem 2.5rem",
                borderRadius: "24px",
                background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.6)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                position: "relative",
                overflow: "hidden",
                boxShadow: isLight ? "0 10px 30px rgba(0, 0, 0, 0.04)" : "0 10px 30px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, #00a88f, #38bdf8)",
                }}
              />
              <span
                style={{
                  display: "inline-block",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "9999px",
                  background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.15)",
                  color: isLight ? "#008a75" : "#2dd4bf",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  marginBottom: "1.25rem",
                  textTransform: "uppercase",
                }}
              >
                Our Vision 2030
              </span>
              <h3 style={{ fontSize: "1.85rem", fontWeight: 800, lineHeight: 1.25, marginBottom: "1rem" }}>
                Empowering Ideas. Transforming Futures.
              </h3>
              <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                At Opash Software, our vision is to empower global innovators, ambitious startups, and established enterprises by fusing cutting-edge software architecture with bold product ideas. We strive to be the definitive global catalyst for digital transformation, helping businesses build enduring digital assets that scale cleanly.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: isLight ? "#008a75" : "#2dd4bf", fontWeight: 700, fontSize: "0.95rem" }}>
                <CheckCircle2 size={18} />
                <span>Zero Technical Debt Architecture</span>
              </div>
            </div>

            {/* Mission */}
            <div
              style={{
                padding: "3rem 2.5rem",
                borderRadius: "24px",
                background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.6)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                position: "relative",
                overflow: "hidden",
                boxShadow: isLight ? "0 10px 30px rgba(0, 0, 0, 0.04)" : "0 10px 30px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, #38bdf8, #6366f1)",
                }}
              />
              <span
                style={{
                  display: "inline-block",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "9999px",
                  background: isLight ? "rgba(2, 132, 199, 0.1)" : "rgba(56, 189, 248, 0.15)",
                  color: isLight ? "#0284c7" : "#38bdf8",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  marginBottom: "1.25rem",
                  textTransform: "uppercase",
                }}
              >
                Our Daily Mission
              </span>
              <h3 style={{ fontSize: "1.85rem", fontWeight: 800, lineHeight: 1.25, marginBottom: "1rem" }}>
                Delivering Innovation with Precision & Passion.
              </h3>
              <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Our mission is to engineer high-velocity, tailor-made digital systems that produce tangible, measurable business metrics. We commit to unwavering client satisfaction through clean code, total transparency, predictable sprint release dates, and long-term architectural stewardship.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: isLight ? "#0284c7" : "#38bdf8", fontWeight: 700, fontSize: "0.95rem" }}>
                <CheckCircle2 size={18} />
                <span>Predictable 2-Week Agile Delivery Cycles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. STRATEGIC ARCHITECTURAL PILLARS (Interactive Tabs)                 */}
      {/* ===================================================================== */}
      <section
        id="pillars"
        style={{
          padding: "6rem 1.5rem",
          position: "relative",
          background: isLight ? "#f8fafc" : "#020712",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 3.5rem auto" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.35rem 0.95rem",
                borderRadius: "9999px",
                background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.12)",
                color: isLight ? "#008a75" : "#2dd4bf",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Engineering DNA
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 800, lineHeight: 1.2 }}>
              Our 3 Architectural Pillars
            </h2>
            <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "1.05rem", marginTop: "0.75rem" }}>
              Why international tech companies, healthcare pioneers, and FinTech platforms choose Opash.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              const isSelected = activePillar === idx;
              return (
                <div
                  key={pillar.number}
                  onClick={() => setActivePillar(idx)}
                  style={{
                    padding: "2.5rem 2rem",
                    borderRadius: "20px",
                    background: isLight
                      ? isSelected ? "#ffffff" : "#f1f5f9"
                      : isSelected ? "rgba(15, 23, 42, 0.9)" : "rgba(10, 20, 36, 0.4)",
                    border: isSelected
                      ? `2px solid ${pillar.accent}`
                      : isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isSelected
                      ? `0 12px 35px ${pillar.accent}25`
                      : "none",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "14px",
                        background: `${pillar.accent}20`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: pillar.accent,
                      }}
                    >
                      <IconComp size={24} />
                    </div>
                    <span style={{ fontSize: "1.4rem", fontWeight: 800, fontFamily: "monospace", color: isLight ? "#94a3b8" : "#475569" }}>
                      {pillar.number}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.4rem" }}>
                    {pillar.title}
                  </h3>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: pillar.accent, marginBottom: "1rem" }}>
                    {pillar.tagline}
                  </div>
                  <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    {pillar.desc}
                  </p>

                  <div style={{ borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "1.25rem" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                      {pillar.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.55rem", fontSize: "0.86rem", color: isLight ? "#334155" : "#cbd5e1" }}>
                          <CheckCircle2 size={15} style={{ color: pillar.accent, flexShrink: 0, marginTop: "2px" }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. OPASH VS TRADITIONAL AGENCIES (The Clarity Matrix)                 */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "6rem 1.5rem",
          position: "relative",
          background: isLight ? "#f1f5f9" : "rgba(6, 12, 24, 0.6)",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
          borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 3.5rem auto" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.35rem 0.95rem",
                borderRadius: "9999px",
                background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.12)",
                color: isLight ? "#008a75" : "#2dd4bf",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Why Founders Partner With Us
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 800, lineHeight: 1.2 }}>
              The Opash Difference
            </h2>
            <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "1.05rem", marginTop: "0.75rem" }}>
              How our engineering-first culture eliminates the friction of traditional outsourced software development.
            </p>
          </div>

          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
              background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.7)",
              boxShadow: isLight ? "0 8px 30px rgba(0, 0, 0, 0.04)" : "0 10px 40px rgba(0, 0, 0, 0.35)",
            }}
          >
            {/* Table Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1.4fr 1.6fr",
                padding: "1.25rem 2rem",
                background: isLight ? "#f8fafc" : "rgba(15, 23, 42, 0.8)",
                borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                fontWeight: 700,
                fontSize: "0.92rem",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
              }}
            >
              <div style={{ color: isLight ? "#64748b" : "#94a3b8" }}>Operational Aspect</div>
              <div style={{ color: "#ef4444" }}>Traditional Agency Model</div>
              <div style={{ color: isLight ? "#008a75" : "#2dd4bf" }}>Opash Software Model</div>
            </div>

            {/* Table Rows */}
            {agencyComparison.map((row, idx) => (
              <div
                key={idx}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 1.4fr 1.6fr",
                  padding: "1.4rem 2rem",
                  borderBottom: idx < agencyComparison.length - 1
                    ? isLight ? "1px solid #f1f5f9" : "1px solid rgba(255, 255, 255, 0.05)"
                    : "none",
                  alignItems: "center",
                  fontSize: "0.95rem",
                  background: row.highlight
                    ? isLight ? "rgba(0, 168, 143, 0.03)" : "rgba(0, 187, 171, 0.03)"
                    : "transparent",
                }}
              >
                <div style={{ fontWeight: 700, color: isLight ? "#0f172a" : "#f8fafc" }}>
                  {row.criteria}
                </div>
                <div style={{ color: isLight ? "#64748b" : "#94a3b8", display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                  <span style={{ color: "#ef4444", fontWeight: 800 }}>&times;</span>
                  <span>{row.traditional}</span>
                </div>
                <div style={{ color: isLight ? "#0f172a" : "#f8fafc", fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                  <CheckCircle2 size={18} style={{ color: isLight ? "#008a75" : "#2dd4bf", flexShrink: 0, marginTop: "2px" }} />
                  <span>{row.opash}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. INTERACTIVE EVOLUTION TIMELINE (2021 – 2026)                       */}
      {/* ===================================================================== */}
      <section style={{ padding: "6rem 1.5rem", position: "relative" }}>
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 3.5rem auto" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.35rem 0.95rem",
                borderRadius: "9999px",
                background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.12)",
                color: isLight ? "#008a75" : "#2dd4bf",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              The Opash Evolution
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 800, lineHeight: 1.2 }}>
              Our Journey Over The Years
            </h2>
            <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "1.05rem", marginTop: "0.75rem" }}>
              From our founding in Surat to partnering with brands across North America, Europe, and Asia.
            </p>
          </div>

          {/* Interactive Year Selector Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
              marginBottom: "3rem",
            }}
          >
            {companyData.milestones.map((m, idx) => {
              const isSelected = selectedMilestoneIndex === idx;
              return (
                <button
                  key={m.year}
                  onClick={() => setSelectedMilestoneIndex(idx)}
                  style={{
                    padding: "0.75rem 1.5rem",
                    borderRadius: "14px",
                    background: isSelected
                      ? isLight ? "#008a75" : "#2dd4bf"
                      : isLight ? "#ffffff" : "rgba(15, 23, 42, 0.7)",
                    color: isSelected
                      ? isLight ? "#ffffff" : "#020712"
                      : isLight ? "#475569" : "#cbd5e1",
                    border: isSelected
                      ? "none"
                      : isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.1)",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    boxShadow: isSelected
                      ? isLight ? "0 4px 15px rgba(0, 168, 143, 0.3)" : "0 4px 20px rgba(45, 212, 191, 0.3)"
                      : "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>{m.year}</span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      padding: "0.15rem 0.45rem",
                      borderRadius: "9999px",
                      background: isSelected
                        ? isLight ? "rgba(255, 255, 255, 0.25)" : "rgba(2, 7, 18, 0.2)"
                        : isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.15)",
                      color: isSelected
                        ? "inherit"
                        : isLight ? "#008a75" : "#2dd4bf",
                    }}
                  >
                    {m.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Highlight Card */}
          {(() => {
            const activeMilestone = companyData.milestones[selectedMilestoneIndex];
            const IconComp = milestoneIcons[activeMilestone.iconName] || Sparkles;
            return (
              <div
                style={{
                  maxWidth: "960px",
                  margin: "0 auto",
                  padding: "3.5rem 3rem",
                  borderRadius: "24px",
                  background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.75)",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: isLight ? "0 10px 40px rgba(0, 0, 0, 0.05)" : "0 15px 50px rgba(0, 0, 0, 0.4)",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "2.5rem",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <span
                      style={{
                        fontSize: "2.4rem",
                        fontWeight: 900,
                        fontFamily: "monospace",
                        color: isLight ? "#008a75" : "#2dd4bf",
                      }}
                    >
                      {activeMilestone.year}
                    </span>
                    <span
                      style={{
                        padding: "0.35rem 0.85rem",
                        borderRadius: "9999px",
                        background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.15)",
                        color: isLight ? "#008a75" : "#2dd4bf",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        textTransform: "uppercase",
                      }}
                    >
                      {activeMilestone.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.25 }}>
                    {activeMilestone.title}
                  </h3>

                  <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                    {activeMilestone.description}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: isLight ? "#008a75" : "#2dd4bf", fontWeight: 700 }}>
                      <CheckCircle2 size={18} />
                      <span>Verified Production Deliverable</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: isLight ? "#0284c7" : "#38bdf8", fontWeight: 700 }}>
                      <Users size={18} />
                      <span>Surat HQ Core Squad</span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "24px",
                    background: isLight
                      ? "linear-gradient(135deg, rgba(0, 168, 143, 0.15), rgba(14, 165, 233, 0.1))"
                      : "linear-gradient(135deg, rgba(0, 187, 171, 0.25), rgba(56, 189, 248, 0.15))",
                    border: isLight ? "1px solid rgba(0, 168, 143, 0.2)" : "1px solid rgba(0, 187, 171, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isLight ? "#008a75" : "#2dd4bf",
                    flexShrink: 0,
                  }}
                >
                  <IconComp size={56} />
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 7. CORE CULTURAL VALUES (6 Interactive Cards)                         */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "6rem 1.5rem",
          position: "relative",
          background: isLight ? "#f1f5f9" : "rgba(6, 12, 24, 0.6)",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
          borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 3.5rem auto" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.35rem 0.95rem",
                borderRadius: "9999px",
                background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.12)",
                color: isLight ? "#008a75" : "#2dd4bf",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Guiding Principles
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 800, lineHeight: 1.2 }}>
              Our Core Cultural Values
            </h2>
            <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "1.05rem", marginTop: "0.75rem" }}>
              How we work, maintain trust, and foster engineering mastery every day.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {companyData.coreValues.map((v) => {
              const IconComp = valueIcons[v.icon] || Shield;
              return (
                <div
                  key={v.title}
                  style={{
                    padding: "2.25rem 2rem",
                    borderRadius: "20px",
                    background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.7)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.25)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isLight ? "#008a75" : "#2dd4bf",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <IconComp size={22} />
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.6rem" }}>
                    {v.title}
                  </h3>
                  <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "0.95rem", lineHeight: 1.65 }}>
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 8. LEADERSHIP PROFILE: HIREN DANECHA (FOUNDER & CEO)                  */}
      {/* ===================================================================== */}
      <section id="leadership" style={{ padding: "6rem 1.5rem", position: "relative" }}>
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div
            style={{
              padding: "4rem 3.5rem",
              borderRadius: "28px",
              background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.8)",
              border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: isLight ? "0 10px 40px rgba(0, 0, 0, 0.05)" : "0 20px 60px rgba(0, 0, 0, 0.45)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 1fr",
                gap: "3.5rem",
                alignItems: "center",
              }}
              className="founder-grid"
            >
              <div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.35rem 0.95rem",
                    borderRadius: "9999px",
                    background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.12)",
                    color: isLight ? "#008a75" : "#2dd4bf",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                  }}
                >
                  Visionary Leadership
                </span>

                <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "0.5rem" }}>
                  {companyData.ceo.name}
                </h2>

                <div
                  style={{
                    color: isLight ? "#008a75" : "#2dd4bf",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    marginBottom: "1.5rem",
                  }}
                >
                  Founder & CEO &bull; 10+ Years in Distributed Architecture & Scaling Products
                </div>

                <div
                  style={{
                    padding: "1.25rem 1.5rem",
                    borderRadius: "16px",
                    background: isLight ? "rgba(0, 168, 143, 0.05)" : "rgba(0, 187, 171, 0.06)",
                    borderLeft: `4px solid ${isLight ? "#008a75" : "#2dd4bf"}`,
                    marginBottom: "1.75rem",
                  }}
                >
                  <p style={{ fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.6, color: isLight ? "#1e293b" : "#f1f5f9", margin: 0 }}>
                    &ldquo;{companyData.ceo.quote}&rdquo;
                  </p>
                </div>

                <p style={{ color: isLight ? "#475569" : "#94a3b8", lineHeight: 1.7, fontSize: "1.02rem", marginBottom: "1.75rem" }}>
                  {companyData.ceo.bio}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.25rem" }}>
                  {companyData.ceo.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.35rem 0.85rem",
                        borderRadius: "9999px",
                        background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.06)",
                        color: isLight ? "#475569" : "#cbd5e1",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <a
                    href={`mailto:${companyData.ceo.email}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.55rem",
                      padding: "0.85rem 1.75rem",
                      borderRadius: "12px",
                      background: isLight
                        ? "linear-gradient(135deg, #008a75 0%, #00a88f 100%)"
                        : "linear-gradient(135deg, #00a88f 0%, #2dd4bf 100%)",
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      textDecoration: "none",
                      boxShadow: "0 4px 15px rgba(0, 168, 143, 0.3)",
                    }}
                  >
                    <span>Schedule Call with Hiren</span>
                    <ArrowRight size={16} />
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.85rem 1.4rem",
                      borderRadius: "12px",
                      background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.06)",
                      border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.12)",
                      color: isLight ? "#0f172a" : "#f8fafc",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      cursor: "pointer",
                    }}
                  >
                    {copiedEmail ? <Check size={16} style={{ color: "#10b981" }} /> : <Copy size={16} />}
                    <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
                  </button>

                  <a
                    href={companyData.ceo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      padding: "0.85rem 1.4rem",
                      borderRadius: "12px",
                      background: isLight ? "#0a66c215" : "rgba(10, 102, 194, 0.15)",
                      border: "1px solid rgba(10, 102, 194, 0.3)",
                      color: "#0a66c2",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      textDecoration: "none",
                    }}
                  >
                    <ExternalLink size={15} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Graphic Card */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "3rem 2rem",
                  borderRadius: "24px",
                  background: isLight
                    ? "linear-gradient(135deg, rgba(0, 168, 143, 0.06) 0%, rgba(14, 165, 233, 0.06) 100%)"
                    : "linear-gradient(135deg, rgba(0, 187, 171, 0.12) 0%, rgba(56, 189, 248, 0.08) 100%)",
                  border: isLight ? "1px solid rgba(0, 168, 143, 0.2)" : "1px solid rgba(0, 187, 171, 0.25)",
                }}
              >
                <div
                  style={{
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #008a75 0%, #0284c7 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: "2.8rem",
                    fontWeight: 900,
                    marginBottom: "1.75rem",
                    boxShadow: "0 10px 35px rgba(0, 168, 143, 0.4)",
                    letterSpacing: "-0.05em",
                  }}
                >
                  HD
                </div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800 }}>
                  {companyData.ceo.name}
                </h3>
                <div style={{ color: isLight ? "#008a75" : "#2dd4bf", fontSize: "0.95rem", fontWeight: 700, marginTop: "0.25rem" }}>
                  Founder & Chief Executive Officer
                </div>
                <div style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.85rem", marginTop: "0.4rem" }}>
                  Opash Software &bull; Surat, India
                </div>
                <div
                  style={{
                    marginTop: "1.75rem",
                    padding: "0.6rem 1.25rem",
                    borderRadius: "9999px",
                    background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.7)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: isLight ? "#008a75" : "#2dd4bf",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                  }}
                >
                  <Award size={14} />
                  <span>Clutch Top Developer 4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 9. GLOBAL HUBS & TIMEZONE OVERVIEW                                    */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f8fafc" : "#020712",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 3rem auto" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.35rem 0.95rem",
                borderRadius: "9999px",
                background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.12)",
                color: isLight ? "#008a75" : "#2dd4bf",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Distributed Velocity
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.7rem)", fontWeight: 800, lineHeight: 1.2 }}>
              Active Client Delivery Corridors
            </h2>
            <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "1.05rem", marginTop: "0.75rem" }}>
              Our Surat headquarters provides seamless, dedicated sprint overlap across international business hours.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {companyData.globalPresence.map((hub, idx) => (
              <div
                key={hub.country}
                style={{
                  padding: "1.5rem",
                  borderRadius: "16px",
                  background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.7)",
                  border: hub.country.includes("HQ")
                    ? isLight ? "2px solid #00a88f" : "2px solid #2dd4bf"
                    : isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isLight ? "0 4px 15px rgba(0, 0, 0, 0.03)" : "none",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 800, fontSize: "1.1rem" }}>
                    {hub.country}
                  </div>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#10b981",
                      marginTop: "5px",
                    }}
                  />
                </div>
                <div style={{ fontSize: "0.95rem", color: isLight ? "#008a75" : "#2dd4bf", fontWeight: 700, marginBottom: "0.25rem" }}>
                  {hub.city}
                </div>
                <div style={{ fontSize: "0.82rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                  {hub.timezone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 10. INQUIRY & STRATEGY CONSULTATION FORM                              */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "6rem 1.5rem",
          position: "relative",
          background: isLight ? "#f1f5f9" : "rgba(6, 12, 24, 0.6)",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "880px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.35rem 0.95rem",
                borderRadius: "9999px",
                background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.12)",
                color: isLight ? "#008a75" : "#2dd4bf",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Direct Architecture Consultation
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2 }}>
              Speak Directly with Senior Architects
            </h2>
            <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "1.05rem", marginTop: "0.75rem" }}>
              Share your project vision, timeline, and tech stack. We respond within 4 hours with an actionable roadmap.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
