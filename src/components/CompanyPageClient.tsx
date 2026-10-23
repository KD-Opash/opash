"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
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
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  TrendingUp,
  Server,
  FileCheck2,
  Terminal,
  FolderOpen,
  Quote,
  Target,
  Rocket,
  Lightbulb,
  Handshake,
  ArrowUpRight,
  AtSign
} from "lucide-react";
import { companyData } from "@/data/company";
import ContactForm from "@/components/ContactForm";
import { useTheme } from "./ThemeProvider";
import AboutCreativeBackdrop from "./AboutCreativeBackdrop";

function LiveSuratClock({ isLight }: { isLight: boolean }) {
  const [currentTime, setCurrentTime] = useState("");

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
        setCurrentTime("09:30:00 AM");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontSize: "1.4rem", fontWeight: 800, fontFamily: "monospace", color: isLight ? "#0f172a" : "#f8fafc", marginTop: "0.15rem" }}>
      {currentTime || "09:30:00 AM"} IST
    </div>
  );
}

interface ProgressMilestone {
  year: string;
  badge: string;
  title: string;
  description: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties; strokeWidth?: number }>;
  accentColor: string;
  glowColor: string;
  accentRgb: string;
  metrics: string[];
  kpi: string;
}

const PROGRESS_MILESTONES: ProgressMilestone[] = [
  {
    year: "2021",
    badge: "Inception",
    title: "Laying The Foundation",
    description:
      "Opash Software was established in Surat with a core mission: to deliver tailored, high-performance software solutions to startups and SMEs globally. Founded by elite engineers dedicated to zero-bloat architecture and full-stack engineering rigor.",
    category: "Business Start",
    icon: Compass,
    accentColor: "#00A88F",
    glowColor: "rgba(0, 168, 143, 0.45)",
    accentRgb: "0, 168, 143",
    metrics: ["Surat HQ Established", "100% IP Ownership", "Top 1% Senior Engineers"],
    kpi: "Surat HQ Launch",
  },
  {
    year: "2022",
    badge: "Expansion",
    title: "Expanding Our Service Offerings",
    description:
      "We diversified into full-stack development, cloud infrastructure, and mobile app solutions—helping clients scale with robust digital products across React, Node.js, Python, and AWS multi-region setups.",
    category: "Punctuality",
    icon: Layers,
    accentColor: "#0284C7",
    glowColor: "rgba(2, 132, 199, 0.45)",
    accentRgb: "2, 132, 199",
    metrics: ["2-Week Agile Sprints", "Cloud-Native Deployments", "Cross-Platform Mobile"],
    kpi: "100% On-Time Sprints",
  },
  {
    year: "2023",
    badge: "Global Growth",
    title: "Strategic Growth & Global Clients",
    description:
      "Grew to a team of 50+ experts. Successfully delivered 75+ projects for clients across the US, Europe, and Asia—spanning logistics, healthcare, finance, and enterprise SaaS platforms with 96% client retention.",
    category: "Experience",
    icon: Globe,
    accentColor: "#9333EA",
    glowColor: "rgba(147, 51, 234, 0.45)",
    accentRgb: "147, 51, 234",
    metrics: ["50+ Full-Time Engineers", "75+ Global Projects", "US, UK & EU Corridors"],
    kpi: "50+ Senior Devs",
  },
  {
    year: "2024",
    badge: "Transformation",
    title: "Driving Digital Transformation Across Industries",
    description:
      "Empowered businesses across healthcare, fintech, and logistics with end-to-end digital solutions—combining UI/UX excellence, performance-driven code, and cloud-native deployment to accelerate growth and efficiency.",
    category: "Growth",
    icon: ShieldCheck,
    accentColor: "#16A34A",
    glowColor: "rgba(22, 163, 74, 0.45)",
    accentRgb: "22, 163, 74",
    metrics: ["99.99% Uptime SLAs", "FinTech & HealthTech", "Sub-15m Critical Response"],
    kpi: "99.99% SLA Uptime",
  },
  {
    year: "2025 - 2026",
    badge: "Next-Gen AI",
    title: "Future-Ready Vision & Leadership",
    description:
      "Focusing on AI-driven applications, DevOps automation, and enterprise-grade security. Positioned as a trusted digital partner for global innovation, LLM orchestration, and cloud-first scale.",
    category: "Achievement",
    icon: Sparkles,
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.45)",
    accentRgb: "245, 158, 11",
    metrics: ["Enterprise AI Agents", "Multi-Cloud DevOps", "Zero-Downtime Releases"],
    kpi: "Enterprise AI & Scale",
  },
];

export default function CompanyPageClient() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // State
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedHubIndex, setSelectedHubIndex] = useState(0); // Default to Surat HQ
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activePillar, setActivePillar] = useState<number>(0);
  const [activeHeroValue, setActiveHeroValue] = useState<number>(0);

  // Auto-advance progress bar every 5.5 seconds (pauses on user interaction)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveMilestoneIndex((prev) => (prev + 1) % PROGRESS_MILESTONES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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

  const heroCoreValues = [
    {
      id: 0,
      title: "Integrity First",
      subtitle: "Radical Transparency & Code Honesty",
      desc: "Transparency, honesty, and accountability in every line of code, git commit, and business conversation. Zero hidden costs, zero proprietary hostage traps, and 100% Day-One IP ownership guaranteed.",
      icon: Shield,
      accent: "#00a88f",
      accentLight: "#008a75",
      tags: ["100% Day-One IP Ownership", "Direct Git Repository Access", "Honest Velocity Estimates"]
    },
    {
      id: 1,
      title: "Innovation-Driven",
      subtitle: "Cloud-Native & Enterprise AI",
      desc: "We don't rely on obsolete blueprints. We engineer forward-looking architectures using modern web frameworks, stateless microservices, distributed cloud backends, and intelligent AI/ML automation.",
      icon: Zap,
      accent: "#38bdf8",
      accentLight: "#0284c7",
      tags: ["Distributed Microservices", "Enterprise AI & LLM Systems", "Sub-Second Latency SLAs"]
    },
    {
      id: 2,
      title: "Client-Centric Approach",
      subtitle: "Solving Real Business Pain Points",
      desc: "Your runway, business metrics, and end-user adoption shape our technical roadmaps. We architect software as a high-leverage growth engine tailored precisely to your commercial goals.",
      icon: Users,
      accent: "#818cf8",
      accentLight: "#4f46e5",
      tags: ["KPI-Driven Engineering", "Real User Empathy", "Agile Roadmap Alignment"]
    },
    {
      id: 3,
      title: "On-Time Every Time",
      subtitle: "Predictable 2-Week Agile Cadence",
      desc: "Predictable velocity and agile project management ensuring milestone adherence with zero compromise on code quality. Automated CI/CD pipelines guarantee working software in every sprint.",
      icon: Clock,
      accent: "#fbbf24",
      accentLight: "#d97706",
      tags: ["2-Week Production Sprints", "Automated CI/CD Deploys", "Zero Regression Releases"]
    },
    {
      id: 4,
      title: "Collaboration Culture",
      subtitle: "Direct Senior Developer Access",
      desc: "High-touch communication, seamless timezone overlap, and direct access to senior developers with zero non-technical account management friction. You collaborate directly with lead engineers.",
      icon: Handshake,
      accent: "#c084fc",
      accentLight: "#9333ea",
      tags: ["Direct Slack & Zoom Pods", "Global Timezone Overlap", "Radical Co-Creation"]
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
      {/* 1. CINEMATIC HERO SECTION: INTERACTIVE BENTO STUDIO SHOWCASE          */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "7.5rem 1.5rem 5rem 1.5rem",
          overflow: "hidden",
        }}
      >
        {/* Bespoke Creative Architectural Studio Backdrop */}
        <AboutCreativeBackdrop isLightMode={isLight} />

        <div className="container-custom" style={{ position: "relative", zIndex: 2, maxWidth: "1320px", margin: "0 auto" }}>
          {/* Eyebrow Status Badges Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.85rem",
              marginBottom: "1.75rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                padding: "0.45rem 1.25rem",
                borderRadius: "9999px",
                backgroundColor: isLight ? "rgba(0, 168, 143, 0.08)" : "rgba(0, 187, 171, 0.12)",
                border: isLight ? "1px solid rgba(0, 168, 143, 0.25)" : "1px solid rgba(0, 187, 171, 0.35)",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: isLight ? "#008a75" : "#2dd4bf",
              }}
            >
              <MapPin size={14} />
              <span>SURAT HQ (21.1702° N, 72.8311° E) &bull; ESTABLISHED 2021 &bull; GLOBAL IT NEARSHORING HUB</span>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.45rem 1rem",
                borderRadius: "9999px",
                backgroundColor: isLight ? "rgba(16, 185, 129, 0.08)" : "rgba(16, 185, 129, 0.12)",
                border: isLight ? "1px solid rgba(16, 185, 129, 0.25)" : "1px solid rgba(16, 185, 129, 0.35)",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: isLight ? "#059669" : "#34d399",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 10px rgba(16, 185, 129, 0.8)",
                  display: "inline-block",
                }}
              />
              <span>50+ IN-HOUSE DEVELOPERS &bull; ACCEPTING GLOBAL ENGAGEMENTS</span>
            </div>
          </div>

          {/* Centered Majestic Headline & Narrative */}
          <div style={{ textAlign: "center", maxWidth: "1050px", margin: "0 auto 2.5rem auto" }}>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5.2vw, 4.3rem)",
                fontWeight: 800,
                lineHeight: 1.14,
                letterSpacing: "-0.035em",
                marginBottom: "1.25rem",
              }}
            >
              Not Just Another IT Company.{" "}
              <span className="opash-hero-gradient-text" style={{ display: "block", marginTop: "0.35rem" }}>
                We Are A Family Of 50+ Tech Experts.
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(1.05rem, 1.6vw, 1.22rem)",
                lineHeight: 1.7,
                color: isLight ? "#475569" : "#94a3b8",
                maxWidth: "880px",
                margin: "0 auto 2rem auto",
              }}
            >
              Founded with the ambition to bridge the gap between ideas and digital realities, Opash Software is a Surat-based IT solutions provider delivering cutting-edge software development services to businesses worldwide. From high-growth startups to enterprise leaders across the US, Europe, Middle East, and Asia, we engineer custom software, scalable SaaS, and AI-driven platforms that deliver enduring market dominance.
            </p>

            {/* Quick CTAs */}
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
              <a
                href="#pillars"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  padding: "0.9rem 1.85rem",
                  borderRadius: "14px",
                  backgroundImage: isLight
                    ? "linear-gradient(135deg, #008a75 0%, #00a88f 100%)"
                    : "linear-gradient(135deg, #00a88f 0%, #2dd4bf 100%)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  boxShadow: "0 6px 25px rgba(0, 168, 143, 0.35)",
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
                  gap: "0.55rem",
                  padding: "0.9rem 1.75rem",
                  borderRadius: "14px",
                  backgroundColor: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.7)",
                  border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.12)",
                  color: isLight ? "#0f172a" : "#f8fafc",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                }}
              >
                <Users size={16} />
                <span>Meet Leadership & Team</span>
              </a>

              <Link
                href="/get-a-quote"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.9rem 1.75rem",
                  borderRadius: "14px",
                  backgroundColor: isLight ? "rgba(2, 132, 199, 0.08)" : "rgba(56, 189, 248, 0.1)",
                  border: isLight ? "1px solid rgba(2, 132, 199, 0.25)" : "1px solid rgba(56, 189, 248, 0.3)",
                  color: isLight ? "#0284c7" : "#38bdf8",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                }}
              >
                <span>Request Project Estimate</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Trust Signals Strip */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1.25rem",
                padding: "0.55rem 1.4rem",
                borderRadius: "9999px",
                backgroundColor: isLight ? "rgba(255, 255, 255, 0.7)" : "rgba(10, 20, 36, 0.5)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
                fontSize: "0.82rem",
                color: isLight ? "#64748b" : "#94a3b8",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <Star size={14} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
                <span style={{ fontWeight: 700, color: isLight ? "#0f172a" : "#f8fafc" }}>4.9/5 Clutch Rating</span>
              </div>
              <span style={{ opacity: 0.4 }}>&bull;</span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <Award size={14} style={{ color: "#00a88f" }} />
                <span>100% Upwork Job Success</span>
              </div>
              <span style={{ opacity: 0.4 }}>&bull;</span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <Lock size={14} style={{ color: "#38bdf8" }} />
                <span>100% Day-One IP Ownership</span>
              </div>
              <span style={{ opacity: 0.4 }}>&bull;</span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <Clock size={14} style={{ color: "#818cf8" }} />
                <span>2-Week Agile Sprints</span>
              </div>
            </div>
          </div>

          {/* ================================================================= */}
          {/* THE HERO BENTO SHOWCASE GRID (4 MODULAR HIGH-IMPACT CARDS)        */}
          {/* ================================================================= */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 560px), 1fr))",
              gap: "1.5rem",
              marginBottom: "3.5rem",
            }}
          >
            {/* ------------------------------------------------------------- */}
            {/* Bento Card 1: Official 5 Core Values Interactive Vault        */}
            {/* ------------------------------------------------------------- */}
            <div
              style={{
                borderRadius: "22px",
                background: isLight ? "rgba(255, 255, 255, 0.9)" : "rgba(10, 20, 36, 0.72)",
                backdropFilter: "blur(20px)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(45, 212, 191, 0.22)",
                boxShadow: isLight ? "0 10px 30px rgba(0, 0, 0, 0.04)" : "0 20px 50px rgba(0, 0, 0, 0.4)",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Header with Selector Pills */}
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "10px",
                        backgroundColor: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(45, 212, 191, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: isLight ? "#008a75" : "#2dd4bf",
                      }}
                    >
                      <Shield size={16} />
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: isLight ? "#008a75" : "#2dd4bf",
                        }}
                      >
                        OFFICIAL 5 CORE VALUES
                      </span>
                      <div style={{ fontSize: "0.74rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                        Click to explore each guiding principle
                      </div>
                    </div>
                  </div>

                  {/* Micro indicator */}
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      color: isLight ? "#64748b" : "#94a3b8",
                      backgroundColor: isLight ? "#f1f5f9" : "rgba(15, 23, 42, 0.6)",
                      padding: "0.3rem 0.65rem",
                      borderRadius: "8px",
                    }}
                  >
                    VALUE {activeHeroValue + 1} OF 5
                  </div>
                </div>

                {/* Value Tabs Row */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {heroCoreValues.map((v, i) => {
                    const isSelected = activeHeroValue === i;
                    const VIcon = v.icon;
                    return (
                      <button
                        key={i}
                        onClick={() => setActiveHeroValue(i)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          padding: "0.45rem 0.85rem",
                          borderRadius: "10px",
                          border: isSelected
                            ? `1px solid ${isLight ? v.accentLight : v.accent}`
                            : isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                          backgroundColor: isSelected
                            ? isLight ? "rgba(0, 168, 143, 0.08)" : "rgba(45, 212, 191, 0.15)"
                            : isLight ? "#ffffff" : "rgba(15, 23, 42, 0.4)",
                          color: isSelected
                            ? isLight ? v.accentLight : v.accent
                            : isLight ? "#475569" : "#94a3b8",
                          fontSize: "0.78rem",
                          fontWeight: isSelected ? 700 : 500,
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <VIcon size={13} />
                        <span>{v.title}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Value Spotlight Content */}
                {(() => {
                  const curr = heroCoreValues[activeHeroValue];
                  const CurrIcon = curr.icon;
                  const accentColor = isLight ? curr.accentLight : curr.accent;

                  return (
                    <div
                      style={{
                        padding: "1.5rem",
                        borderRadius: "16px",
                        backgroundColor: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.6)",
                        border: isLight ? "1px solid #e2e8f0" : `1px solid ${accentColor}33`,
                        boxShadow: `0 4px 20px ${accentColor}15`,
                        marginBottom: "1.25rem",
                      }}
                    >
                      <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "0.85rem" }}>
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "14px",
                            backgroundColor: `${accentColor}18`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            color: accentColor,
                          }}
                        >
                          <CurrIcon size={24} />
                        </div>
                        <div>
                          <div style={{ fontSize: "1.25rem", fontWeight: 800, color: isLight ? "#0f172a" : "#f8fafc" }}>
                            {curr.title}
                          </div>
                          <div style={{ fontSize: "0.85rem", fontWeight: 600, color: accentColor }}>
                            {curr.subtitle}
                          </div>
                        </div>
                      </div>

                      <p
                        style={{
                          fontSize: "0.94rem",
                          lineHeight: 1.6,
                          color: isLight ? "#475569" : "#cbd5e1",
                          marginBottom: "1rem",
                        }}
                      >
                        {curr.desc}
                      </p>

                      {/* Proof Pills */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                        {curr.tags.map((t, idx) => (
                          <span
                            key={idx}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.3rem",
                              padding: "0.3rem 0.65rem",
                              borderRadius: "6px",
                              backgroundColor: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.05)",
                              fontSize: "0.76rem",
                              fontWeight: 600,
                              color: isLight ? "#334155" : "#e2e8f0",
                            }}
                          >
                            <CheckCircle2 size={12} style={{ color: accentColor }} />
                            <span>{t}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Bottom Discipline Row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "0.85rem",
                  borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "0.78rem",
                  color: isLight ? "#64748b" : "#94a3b8",
                }}
              >
                <span>50+ Full-Stack, Cloud & AI Specialists Under One Roof</span>
                <span style={{ fontWeight: 700, color: isLight ? "#008a75" : "#2dd4bf" }}>
                  Zero Outsourced Layers &rarr;
                </span>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* Bento Card 2: Surat HQ & Global Timezone Corridor             */}
            {/* ------------------------------------------------------------- */}
            <div
              style={{
                borderRadius: "22px",
                background: isLight ? "rgba(255, 255, 255, 0.9)" : "rgba(10, 20, 36, 0.72)",
                backdropFilter: "blur(20px)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(56, 189, 248, 0.22)",
                boxShadow: isLight ? "0 10px 30px rgba(0, 0, 0, 0.04)" : "0 20px 50px rgba(0, 0, 0, 0.4)",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "10px",
                        backgroundColor: isLight ? "rgba(2, 132, 199, 0.1)" : "rgba(56, 189, 248, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: isLight ? "#0284c7" : "#38bdf8",
                      }}
                    >
                      <Globe size={16} />
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: isLight ? "#0284c7" : "#38bdf8",
                        }}
                      >
                        STRATEGIC NEARSHORE HUB
                      </span>
                      <div style={{ fontSize: "0.74rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                        Surat HQ & Global Synchronized Desks
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#10b981",
                      boxShadow: "0 0 8px rgba(16, 185, 129, 0.8)",
                    }}
                  />
                </div>

                {/* 4 Timezone Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      padding: "0.85rem",
                      borderRadius: "12px",
                      backgroundColor: isLight ? "#f8fafc" : "rgba(15, 23, 42, 0.6)",
                      border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(45, 212, 191, 0.2)",
                    }}
                  >
                    <div style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", color: isLight ? "#008a75" : "#2dd4bf" }}>
                      🇮🇳 SURAT HQ (IST)
                    </div>
                    <LiveSuratClock isLight={isLight} />
                    <div style={{ fontSize: "0.72rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                      21.1702° N, 72.8311° E
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "0.85rem",
                      borderRadius: "12px",
                      backgroundColor: isLight ? "#f8fafc" : "rgba(15, 23, 42, 0.6)",
                      border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    <div style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", color: isLight ? "#0284c7" : "#38bdf8" }}>
                      🇺🇸 US OVERLAP
                    </div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, color: isLight ? "#0f172a" : "#f8fafc", marginTop: "0.2rem" }}>
                      PST / EST
                    </div>
                    <div style={{ fontSize: "0.72rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                      4-6 hrs live overlap daily
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "0.85rem",
                      borderRadius: "12px",
                      backgroundColor: isLight ? "#f8fafc" : "rgba(15, 23, 42, 0.6)",
                      border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    <div style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", color: isLight ? "#4f46e5" : "#818cf8" }}>
                      🇬🇧 UK & EUROPE
                    </div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, color: isLight ? "#0f172a" : "#f8fafc", marginTop: "0.2rem" }}>
                      GMT / CET
                    </div>
                    <div style={{ fontSize: "0.72rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                      Full afternoon coverage
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "0.85rem",
                      borderRadius: "12px",
                      backgroundColor: isLight ? "#f8fafc" : "rgba(15, 23, 42, 0.6)",
                      border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    <div style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", color: isLight ? "#d97706" : "#fbbf24" }}>
                      🇦🇪 MIDDLE EAST
                    </div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, color: isLight ? "#0f172a" : "#f8fafc", marginTop: "0.2rem" }}>
                      GST (UTC+4)
                    </div>
                    <div style={{ fontSize: "0.72rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                      Near identical business day
                    </div>
                  </div>
                </div>

                {/* Nearshore Perks List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                  {[
                    "40%–60% Capital Efficiency vs Western US/UK Agencies",
                    "Direct Slack / Zoom Collaboration with Lead Architects",
                    "Surat's Deep Engineering Talent Pool & Low Churn"
                  ].map((perk, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.55rem",
                        fontSize: "0.82rem",
                        color: isLight ? "#334155" : "#cbd5e1",
                      }}
                    >
                      <CheckCircle2 size={14} style={{ color: isLight ? "#008a75" : "#2dd4bf", flexShrink: 0 }} />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Nearshore Link */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "0.85rem",
                  marginTop: "1rem",
                  borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "0.78rem",
                  color: isLight ? "#64748b" : "#94a3b8",
                }}
              >
                <span>Operating from Pal, Adajan, Surat</span>
                <span style={{ fontWeight: 700, color: isLight ? "#0284c7" : "#38bdf8" }}>
                  Global Sprints &bull; 24/7 Coverage
                </span>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* Bento Card 3: Dual Vault — Vision & Mission                   */}
            {/* ------------------------------------------------------------- */}
            <div
              style={{
                borderRadius: "22px",
                background: isLight ? "rgba(255, 255, 255, 0.9)" : "rgba(10, 20, 36, 0.72)",
                backdropFilter: "blur(20px)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(99, 102, 241, 0.22)",
                boxShadow: isLight ? "0 10px 30px rgba(0, 0, 0, 0.04)" : "0 20px 50px rgba(0, 0, 0, 0.4)",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "10px",
                      backgroundColor: isLight ? "rgba(79, 70, 229, 0.1)" : "rgba(129, 140, 248, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isLight ? "#4f46e5" : "#818cf8",
                    }}
                  >
                    <Target size={16} />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: isLight ? "#4f46e5" : "#818cf8",
                      }}
                    >
                      THE OPASH MANDATE
                    </span>
                    <div style={{ fontSize: "0.74rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                      Our Official Vision & Mission
                    </div>
                  </div>
                </div>

                {/* Dual Chamber Sub-Cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {/* Vision Chamber */}
                  <div
                    style={{
                      padding: "1.15rem 1.25rem",
                      borderRadius: "14px",
                      backgroundColor: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.6)",
                      border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(0, 168, 143, 0.25)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginBottom: "0.35rem" }}>
                      <Target size={15} style={{ color: isLight ? "#008a75" : "#2dd4bf" }} />
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: isLight ? "#008a75" : "#2dd4bf", letterSpacing: "0.06em" }}>
                        OUR VISION
                      </span>
                    </div>
                    <div style={{ fontSize: "1.05rem", fontWeight: 800, color: isLight ? "#0f172a" : "#f8fafc", marginBottom: "0.35rem" }}>
                      Empowering Ideas. Transforming Futures.
                    </div>
                    <p style={{ fontSize: "0.84rem", lineHeight: 1.55, color: isLight ? "#475569" : "#94a3b8", margin: 0 }}>
                      To be globally recognized as a premier digital transformation partner, enabling businesses of all sizes to scale through secure, elegant, and resilient technology.
                    </p>
                  </div>

                  {/* Mission Chamber */}
                  <div
                    style={{
                      padding: "1.15rem 1.25rem",
                      borderRadius: "14px",
                      backgroundColor: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.6)",
                      border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(56, 189, 248, 0.25)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginBottom: "0.35rem" }}>
                      <Rocket size={15} style={{ color: isLight ? "#0284c7" : "#38bdf8" }} />
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: isLight ? "#0284c7" : "#38bdf8", letterSpacing: "0.06em" }}>
                        OUR MISSION
                      </span>
                    </div>
                    <div style={{ fontSize: "1.05rem", fontWeight: 800, color: isLight ? "#0f172a" : "#f8fafc", marginBottom: "0.35rem" }}>
                      Delivering Innovation with Precision & Passion.
                    </div>
                    <p style={{ fontSize: "0.84rem", lineHeight: 1.55, color: isLight ? "#475569" : "#94a3b8", margin: 0 }}>
                      To craft bespoke software, cloud platforms, and mobile experiences with zero technical debt, empowering enterprises and startups to accelerate time-to-market.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Tag */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "0.85rem",
                  marginTop: "1rem",
                  borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "0.78rem",
                  color: isLight ? "#64748b" : "#94a3b8",
                }}
              >
                <span>Zero Technical Debt Guarantee</span>
                <span style={{ fontWeight: 700, color: isLight ? "#4f46e5" : "#818cf8" }}>
                  Future-Proof Architecture &rarr;
                </span>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* Bento Card 4: CEO & Executive Founder Dispatch                */}
            {/* ------------------------------------------------------------- */}
            <div
              style={{
                borderRadius: "22px",
                background: isLight ? "rgba(255, 255, 255, 0.9)" : "rgba(10, 20, 36, 0.72)",
                backdropFilter: "blur(20px)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(0, 168, 143, 0.22)",
                boxShadow: isLight ? "0 10px 30px rgba(0, 0, 0, 0.04)" : "0 20px 50px rgba(0, 0, 0, 0.4)",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "10px",
                        backgroundColor: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(45, 212, 191, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: isLight ? "#008a75" : "#2dd4bf",
                      }}
                    >
                      <Quote size={16} />
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: isLight ? "#008a75" : "#2dd4bf",
                        }}
                      >
                        FOUNDER&apos;S DIRECT DISPATCH
                      </span>
                      <div style={{ fontSize: "0.74rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                        From the Desk of Hiren Danecha
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: isLight ? "#008a75" : "#2dd4bf",
                      backgroundColor: isLight ? "rgba(0, 168, 143, 0.08)" : "rgba(45, 212, 191, 0.12)",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "6px",
                    }}
                  >
                    EXECUTIVE VOICE
                  </span>
                </div>

                {/* Founder Identity Strip */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "16px",
                      backgroundImage: isLight
                        ? "linear-gradient(135deg, #008a75 0%, #0284c7 100%)"
                        : "linear-gradient(135deg, #00a88f 0%, #38bdf8 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      fontWeight: 800,
                      fontSize: "1.2rem",
                      flexShrink: 0,
                      boxShadow: "0 4px 15px rgba(0, 168, 143, 0.3)",
                    }}
                  >
                    HD
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <span style={{ fontSize: "1.1rem", fontWeight: 800, color: isLight ? "#0f172a" : "#f8fafc" }}>
                        Hiren Danecha
                      </span>
                      <CheckCircle2 size={16} style={{ color: isLight ? "#008a75" : "#2dd4bf" }} />
                    </div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 600, color: isLight ? "#008a75" : "#2dd4bf" }}>
                      Founder & Chief Executive Officer
                    </div>
                    <div style={{ fontSize: "0.75rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                      10+ Years in Software Architecture & Product Strategy
                    </div>
                  </div>
                </div>

                {/* Executive Quote Body */}
                <div
                  style={{
                    position: "relative",
                    padding: "1.25rem",
                    borderRadius: "14px",
                    backgroundColor: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.6)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.95rem",
                      fontStyle: "italic",
                      lineHeight: 1.65,
                      color: isLight ? "#1e293b" : "#e2e8f0",
                      margin: 0,
                    }}
                  >
                    &ldquo;We don&apos;t just build software — we build long-term partnerships powered by innovation, reliability, and mutual growth. From Surat to Silicon Valley, our mission is to empower visionaries with engineering that endures.&rdquo;
                  </p>
                </div>
              </div>

              {/* Founder Badges */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "0.85rem",
                  marginTop: "1rem",
                  borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "0.78rem",
                  color: isLight ? "#64748b" : "#94a3b8",
                }}
              >
                <span>Direct Access &bull; Founder Oversight</span>
                <a
                  href="#leadership"
                  style={{
                    fontWeight: 700,
                    color: isLight ? "#008a75" : "#2dd4bf",
                    textDecoration: "none",
                  }}
                >
                  Read Executive Bio &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* ================================================================= */}
          {/* BOTTOM TELEMETRY STRIP: 4 VERIFIED POWERS FROM OPASH OFFICIAL     */}
          {/* ================================================================= */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
              maxWidth: "1320px",
              margin: "0 auto",
            }}
          >
            {/* Metric 1: 50+ In-House Developers */}
            <div
              style={{
                padding: "1.75rem 1.4rem",
                borderRadius: "18px",
                background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.75)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(45, 212, 191, 0.25)",
                boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.9rem",
                  fontWeight: 800,
                  color: isLight ? "#008a75" : "#2dd4bf",
                  lineHeight: 1.1,
                  marginBottom: "0.35rem",
                }}
              >
                50+
              </div>
              <div style={{ fontSize: "0.98rem", fontWeight: 700, color: isLight ? "#0f172a" : "#f8fafc", marginBottom: "0.2rem" }}>
                In-House Tech Experts
              </div>
              <div style={{ fontSize: "0.8rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                Senior full-stack, cloud & AI developers
              </div>
            </div>

            {/* Metric 2: 8+ Years Experience */}
            <div
              style={{
                padding: "1.75rem 1.4rem",
                borderRadius: "18px",
                background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.75)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(56, 189, 248, 0.25)",
                boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.9rem",
                  fontWeight: 800,
                  color: isLight ? "#0284c7" : "#38bdf8",
                  lineHeight: 1.1,
                  marginBottom: "0.35rem",
                }}
              >
                8+
              </div>
              <div style={{ fontSize: "0.98rem", fontWeight: 700, color: isLight ? "#0f172a" : "#f8fafc", marginBottom: "0.2rem" }}>
                Years of Industry Experience
              </div>
              <div style={{ fontSize: "0.8rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                Proven digital transformation track record
              </div>
            </div>

            {/* Metric 3: 70+ Projects Delivered */}
            <div
              style={{
                padding: "1.75rem 1.4rem",
                borderRadius: "18px",
                background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.75)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(99, 102, 241, 0.25)",
                boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.9rem",
                  fontWeight: 800,
                  color: isLight ? "#4f46e5" : "#818cf8",
                  lineHeight: 1.1,
                  marginBottom: "0.35rem",
                }}
              >
                70+
              </div>
              <div style={{ fontSize: "0.98rem", fontWeight: 700, color: isLight ? "#0f172a" : "#f8fafc", marginBottom: "0.2rem" }}>
                Custom Projects Delivered
              </div>
              <div style={{ fontSize: "0.8rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                SaaS, FinTech, Healthcare & Logistics
              </div>
            </div>

            {/* Metric 4: 12,000+ Project Execution Hours */}
            <div
              style={{
                padding: "1.75rem 1.4rem",
                borderRadius: "18px",
                background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.75)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(20, 184, 166, 0.25)",
                boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.9rem",
                  fontWeight: 800,
                  color: isLight ? "#0d9488" : "#2dd4bf",
                  lineHeight: 1.1,
                  marginBottom: "0.35rem",
                }}
              >
                12,000+
              </div>
              <div style={{ fontSize: "0.98rem", fontWeight: 700, color: isLight ? "#0f172a" : "#f8fafc", marginBottom: "0.2rem" }}>
                Project Execution Hours
              </div>
              <div style={{ fontSize: "0.8rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                Agile sprints & 96% client retention
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
                <LiveSuratClock isLight={isLight} />
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
      {/* 3. CORE FOUNDATIONAL PILLARS: VISION, MISSION & VALUES                */}
      {/* ===================================================================== */}
      <section style={{ padding: "6rem 1.5rem", position: "relative" }}>
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 4rem auto" }}>
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
              Our guiding principles, strategic mission, and uncompromising core values shaping how we build and scale.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.75rem 2rem",
              alignItems: "stretch",
              paddingTop: "2rem",
            }}
          >
            {/* 1. OUR VISION CARD */}
            <div
              style={{
                position: "relative",
                filter: isLight
                  ? "drop-shadow(0 14px 28px rgba(0, 0, 0, 0.08))"
                  : "drop-shadow(0 18px 40px rgba(0, 0, 0, 0.45))",
                transition: "transform 0.3s ease",
              }}
            >
              {/* Ribbon Medallion Header */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                <svg width="176" height="70" viewBox="0 0 176 70" fill="none" style={{ overflow: "visible" }}>
                  <path d="M 54 20 L 8 20 L 22 35 L 8 50 L 54 50 Z" fill="#1D63ED" />
                  <path d="M 54 50 L 64 50 L 54 56 Z" fill="rgba(0,0,0,0.3)" />
                  <path d="M 122 20 L 168 20 L 154 35 L 168 50 L 122 50 Z" fill="#1D63ED" />
                  <path d="M 122 50 L 112 50 L 122 56 Z" fill="rgba(0,0,0,0.3)" />
                  <circle cx="88" cy="35" r="31" fill="rgba(29, 99, 237, 0.28)" />
                  <circle cx="88" cy="35" r="25" fill="#1D63ED" />
                  <circle cx="88" cy="35" r="21" fill="none" stroke="rgba(255, 255, 255, 0.55)" strokeWidth="1.5" />
                </svg>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Target size={24} strokeWidth={2.4} />
                </div>
              </div>

              {/* Pennant Card Body */}
              <div
                style={{
                  background: isLight ? "#EDF2F7" : "linear-gradient(180deg, #131E30 0%, #0D1624 100%)",
                  clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 50px), 50% 100%, 0 calc(100% - 50px))",
                  padding: "3.75rem 2.25rem 5.5rem 2.25rem",
                  height: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading), sans-serif",
                    fontSize: "1.65rem",
                    fontWeight: 800,
                    color: isLight ? "#1D4ED8" : "#60A5FA",
                    textAlign: "center",
                    marginBottom: "1.25rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Our Vision
                </h3>
                <h4
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: isLight ? "#1E293B" : "#F1F5F9",
                    marginBottom: "1rem",
                    lineHeight: 1.45,
                  }}
                >
                  Empowering Ideas. Transforming Futures.
                </h4>
                <p
                  style={{
                    color: isLight ? "#475569" : "#94A3B8",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  At Opash Software, our vision is to empower innovators, startups, and enterprises by blending cutting-edge technology with bold ideas. We strive to be a catalyst for digital transformation, helping businesses create meaningful change in the world through impactful, scalable software solutions.
                </p>
              </div>
            </div>

            {/* 2. OUR MISSION CARD */}
            <div
              style={{
                position: "relative",
                filter: isLight
                  ? "drop-shadow(0 14px 28px rgba(0, 0, 0, 0.08))"
                  : "drop-shadow(0 18px 40px rgba(0, 0, 0, 0.45))",
                transition: "transform 0.3s ease",
              }}
            >
              {/* Ribbon Medallion Header */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                <svg width="176" height="70" viewBox="0 0 176 70" fill="none" style={{ overflow: "visible" }}>
                  <path d="M 54 20 L 8 20 L 22 35 L 8 50 L 54 50 Z" fill="#D97706" />
                  <path d="M 54 50 L 64 50 L 54 56 Z" fill="rgba(0,0,0,0.3)" />
                  <path d="M 122 20 L 168 20 L 154 35 L 168 50 L 122 50 Z" fill="#D97706" />
                  <path d="M 122 50 L 112 50 L 122 56 Z" fill="rgba(0,0,0,0.3)" />
                  <circle cx="88" cy="35" r="31" fill="rgba(217, 119, 6, 0.28)" />
                  <circle cx="88" cy="35" r="25" fill="#D97706" />
                  <circle cx="88" cy="35" r="21" fill="none" stroke="rgba(255, 255, 255, 0.55)" strokeWidth="1.5" />
                </svg>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Star size={24} strokeWidth={2.4} />
                </div>
              </div>

              {/* Pennant Card Body */}
              <div
                style={{
                  background: isLight ? "#EDF2F7" : "linear-gradient(180deg, #131E30 0%, #0D1624 100%)",
                  clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 50px), 50% 100%, 0 calc(100% - 50px))",
                  padding: "3.75rem 2.25rem 5.5rem 2.25rem",
                  height: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading), sans-serif",
                    fontSize: "1.65rem",
                    fontWeight: 800,
                    color: isLight ? "#B45309" : "#FBBF24",
                    textAlign: "center",
                    marginBottom: "1.25rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Our Mission
                </h3>
                <h4
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: isLight ? "#1E293B" : "#F1F5F9",
                    marginBottom: "1rem",
                    lineHeight: 1.45,
                  }}
                >
                  Delivering Innovation with Precision & Passion.
                </h4>
                <p
                  style={{
                    color: isLight ? "#475569" : "#94A3B8",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Our mission is to provide tailor-made, high-performance IT solutions that deliver measurable business value. We are committed to achieving client satisfaction through quality, transparency, and timely delivery, ensuring every project we undertake exceeds expectations and drives growth.
                </p>
              </div>
            </div>

            {/* 3. OUR CORE VALUES CARD */}
            <div
              style={{
                position: "relative",
                filter: isLight
                  ? "drop-shadow(0 14px 28px rgba(0, 0, 0, 0.08))"
                  : "drop-shadow(0 18px 40px rgba(0, 0, 0, 0.45))",
                transition: "transform 0.3s ease",
              }}
            >
              {/* Ribbon Medallion Header */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                <svg width="176" height="70" viewBox="0 0 176 70" fill="none" style={{ overflow: "visible" }}>
                  <path d="M 54 20 L 8 20 L 22 35 L 8 50 L 54 50 Z" fill="#DC2626" />
                  <path d="M 54 50 L 64 50 L 54 56 Z" fill="rgba(0,0,0,0.3)" />
                  <path d="M 122 20 L 168 20 L 154 35 L 168 50 L 122 50 Z" fill="#DC2626" />
                  <path d="M 122 50 L 112 50 L 122 56 Z" fill="rgba(0,0,0,0.3)" />
                  <circle cx="88" cy="35" r="31" fill="rgba(220, 38, 38, 0.28)" />
                  <circle cx="88" cy="35" r="25" fill="#DC2626" />
                  <circle cx="88" cy="35" r="21" fill="none" stroke="rgba(255, 255, 255, 0.55)" strokeWidth="1.5" />
                </svg>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Award size={24} strokeWidth={2.4} />
                </div>
              </div>

              {/* Pennant Card Body */}
              <div
                style={{
                  background: isLight ? "#EDF2F7" : "linear-gradient(180deg, #131E30 0%, #0D1624 100%)",
                  clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 50px), 50% 100%, 0 calc(100% - 50px))",
                  padding: "3.75rem 2.25rem 5.5rem 2.25rem",
                  height: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading), sans-serif",
                    fontSize: "1.65rem",
                    fontWeight: 800,
                    color: isLight ? "#B91C1C" : "#F87171",
                    textAlign: "center",
                    marginBottom: "1.25rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Our Core Values
                </h3>
                <p
                  style={{
                    color: isLight ? "#475569" : "#94A3B8",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    marginBottom: "1.25rem",
                    margin: 0,
                  }}
                >
                  At the heart of Opash Software lies a set of core values that shape our work culture and define how we serve our clients:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.92rem", lineHeight: 1.5, color: isLight ? "#334155" : "#cbd5e1" }}>
                    <span style={{ fontSize: "1rem", flexShrink: 0 }}>🤝</span>
                    <span><strong style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>Integrity First:</strong> Honesty and transparency in all we do.</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.92rem", lineHeight: 1.5, color: isLight ? "#334155" : "#cbd5e1" }}>
                    <span style={{ fontSize: "1rem", flexShrink: 0 }}>💡</span>
                    <span><strong style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>Innovation-Driven:</strong> Continuously pushing boundaries with new ideas.</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.92rem", lineHeight: 1.5, color: isLight ? "#334155" : "#cbd5e1" }}>
                    <span style={{ fontSize: "1rem", flexShrink: 0 }}>🧠</span>
                    <span><strong style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>Client-Centric Approach:</strong> We build solutions around your goals.</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.92rem", lineHeight: 1.5, color: isLight ? "#334155" : "#cbd5e1" }}>
                    <span style={{ fontSize: "1rem", flexShrink: 0 }}>⏱️</span>
                    <span><strong style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>On-Time, Every Time:</strong> We respect your time and timelines.</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.92rem", lineHeight: 1.5, color: isLight ? "#334155" : "#cbd5e1" }}>
                    <span style={{ fontSize: "1rem", flexShrink: 0 }}>👥</span>
                    <span><strong style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>Collaboration Culture:</strong> Great results come from great teamwork.</span>
                  </div>
                </div>
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
      {/* 6. INTERACTIVE EVOLUTION PROGRESSBAR TIMELINE                         */}
      {/* ===================================================================== */}
      <section
        id="our-journey"
        aria-label="Our Journey Over The Years"
        style={{
          padding: "6rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1180px", margin: "0 auto" }}>
          {/* Section Header */}
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
              From our founding in Surat to partnering with global enterprises across North America, Europe, and Asia.
            </p>
          </div>

          {/* ============================================================= */}
          {/* 1. PROGRESS BAR TRACK & STEPPER NODES                        */}
          {/* ============================================================= */}
          {/* 1. INTERACTIVE MILESTONE PROGRESS TRACK BAR                 */}
          {/* ============================================================= */}
          <div
            style={{
              width: "100%",
              maxWidth: "1020px",
              margin: "0 auto 1.5rem auto",
              padding: "1.5rem 3.5rem 5rem 3.5rem",
              position: "relative",
              boxSizing: "border-box",
            }}
          >
            {/* Base Track Rail */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "5px",
                borderRadius: "9999px",
                background: isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.12)",
              }}
            >
              {/* Active Filled Progress Line */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: `${(activeMilestoneIndex / (PROGRESS_MILESTONES.length - 1)) * 100}%`,
                  background: "linear-gradient(90deg, #00A88F 0%, #00BFA5 50%, #2DD4BF 100%)",
                  borderRadius: "9999px",
                  boxShadow: "0 0 14px rgba(45, 212, 191, 0.6)",
                  transition: "width 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />

              {/* Stepper Nodes */}
              {PROGRESS_MILESTONES.map((milestone, idx) => {
                const isCompleted = idx < activeMilestoneIndex;
                const isActive = idx === activeMilestoneIndex;
                const percentage = (idx / (PROGRESS_MILESTONES.length - 1)) * 100;
                const IconNode = milestone.icon;

                return (
                  <div
                    key={milestone.year}
                    onClick={() => {
                      setActiveMilestoneIndex(idx);
                      setIsAutoPlaying(false);
                    }}
                    style={{
                      position: "absolute",
                      left: `${percentage}%`,
                      top: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      cursor: "pointer",
                      zIndex: 5,
                    }}
                  >
                    {/* Circle Node Container (Centered on the 5px track line) */}
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        marginTop: "-24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        style={{
                          width: isActive ? "44px" : "32px",
                          height: isActive ? "44px" : "32px",
                          borderRadius: "50%",
                          border: isActive
                            ? `3px solid ${isLight ? "#ffffff" : "#0A1424"}`
                            : isCompleted
                              ? `2px solid ${isLight ? "#ffffff" : "#0A1424"}`
                              : `2px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.2)"}`,
                          background: isActive
                            ? "#00A88F"
                            : isCompleted
                              ? "#00A88F"
                              : isLight
                                ? "#ffffff"
                                : "#152136",
                          color: isActive || isCompleted ? "#ffffff" : isLight ? "#64748b" : "#94a3b8",
                          boxShadow: isActive
                            ? "0 0 24px rgba(45, 212, 191, 0.75), 0 4px 12px rgba(0,0,0,0.3)"
                            : isCompleted
                              ? "0 0 10px rgba(0, 168, 143, 0.35)"
                              : "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                        aria-label={`Jump to milestone ${milestone.year}`}
                      >
                        {isCompleted ? (
                          <Check size={16} strokeWidth={2.8} />
                        ) : isActive ? (
                          <IconNode size={22} strokeWidth={2.2} />
                        ) : (
                          <IconNode size={14} strokeWidth={2} style={{ opacity: 0.65 }} />
                        )}
                      </button>
                    </div>

                    {/* Year & Badge Labels (Comfortably spaced below circle with no overlap) */}
                    <div
                      style={{
                        marginTop: "12px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        whiteSpace: "nowrap",
                        userSelect: "none",
                      }}
                    >
                      <span
                        style={{
                          fontSize: isActive ? "1rem" : "0.86rem",
                          fontWeight: isActive ? 800 : 600,
                          color: isActive
                            ? isLight ? "#008a75" : "#2dd4bf"
                            : isCompleted
                              ? isLight ? "#0f172a" : "#f1f5f9"
                              : isLight ? "#64748b" : "#94a3b8",
                          transition: "all 0.25s ease",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {milestone.year}
                      </span>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          padding: "3px 9px",
                          borderRadius: "9999px",
                          background: isActive
                            ? isLight ? "rgba(0, 168, 143, 0.14)" : "rgba(45, 212, 191, 0.16)"
                            : isLight ? "rgba(241, 245, 249, 0.9)" : "rgba(255, 255, 255, 0.05)",
                          color: isActive
                            ? isLight ? "#008a75" : "#2dd4bf"
                            : isLight ? "#64748b" : "#94a3b8",
                          marginTop: "4px",
                          border: isActive
                            ? `1px solid ${isLight ? "rgba(0, 168, 143, 0.35)" : "rgba(45, 212, 191, 0.4)"}`
                            : isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                          transition: "all 0.25s ease",
                        }}
                      >
                        {milestone.badge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ============================================================= */}
          {/* 2. ACTIVE MILESTONE SHOWCASE CARD                           */}
          {/* ============================================================= */}
          {(() => {
            const current = PROGRESS_MILESTONES[activeMilestoneIndex];
            const IconComp = current.icon;

            return (
              <div
                onMouseEnter={() => setIsAutoPlaying(false)}
                style={{
                  maxWidth: "1020px",
                  margin: "0 auto",
                  padding: "clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 4vw, 3.25rem)",
                  borderRadius: "28px",
                  background: isLight
                    ? "#ffffff"
                    : "linear-gradient(135deg, rgba(15, 23, 42, 0.88) 0%, rgba(10, 18, 34, 0.96) 100%)",
                  border: `1.5px solid ${isLight ? "rgba(0, 168, 143, 0.25)" : "rgba(45, 212, 191, 0.28)"}`,
                  boxShadow: isLight
                    ? "0 16px 48px rgba(0, 168, 143, 0.1), 0 4px 16px rgba(0, 0, 0, 0.04)"
                    : "0 24px 60px rgba(0, 0, 0, 0.5), 0 0 35px rgba(0, 168, 143, 0.18)",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "2.5rem",
                  alignItems: "center",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                }}
              >
                {/* Ambient Corner Glow Accent */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "220px",
                    height: "220px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, rgba(0, 168, 143, ${isLight ? 0.12 : 0.22}) 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Left Content Column */}
                <div style={{ position: "relative", zIndex: 2 }}>
                  {/* Top Badge & Stage Progress */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      flexWrap: "wrap",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "2.5rem",
                        fontWeight: 900,
                        fontFamily: "var(--font-heading), sans-serif",
                        color: isLight ? "#008a75" : "#2dd4bf",
                        lineHeight: 1,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {current.year}
                    </span>

                    <span
                      style={{
                        padding: "0.35rem 0.95rem",
                        borderRadius: "9999px",
                        background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(45, 212, 191, 0.16)",
                        color: isLight ? "#008a75" : "#2dd4bf",
                        fontWeight: 750,
                        fontSize: "0.82rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        border: `1px solid ${isLight ? "rgba(0, 168, 143, 0.3)" : "rgba(45, 212, 191, 0.35)"}`,
                      }}
                    >
                      {current.badge}
                    </span>

                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: isLight ? "#64748b" : "#94a3b8",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      • Milestone {activeMilestoneIndex + 1} of {PROGRESS_MILESTONES.length}
                    </span>
                  </div>

                  {/* Milestone Title */}
                  <h3
                    style={{
                      fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                      fontWeight: 850,
                      marginBottom: "1rem",
                      lineHeight: 1.25,
                      color: isLight ? "#0f172a" : "#ffffff",
                    }}
                  >
                    {current.title}
                  </h3>

                  {/* Description Paragraph */}
                  <p
                    style={{
                      color: isLight ? "#475569" : "#cbd5e1",
                      fontSize: "1.05rem",
                      lineHeight: 1.7,
                      marginBottom: "1.75rem",
                      maxWidth: "680px",
                    }}
                  >
                    {current.description}
                  </p>

                  {/* Metrics & Deliverables */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.25rem",
                      flexWrap: "wrap",
                      marginBottom: "2rem",
                    }}
                  >
                    {current.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          color: isLight ? "#334155" : "#e2e8f0",
                          fontSize: "0.88rem",
                          fontWeight: 650,
                        }}
                      >
                        <CheckCircle2 size={17} style={{ color: isLight ? "#008a75" : "#2dd4bf", flexShrink: 0 }} />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stepper Controls & Auto-Play */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      flexWrap: "wrap",
                      paddingTop: "1.25rem",
                      borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    {/* Prev Milestone */}
                    <button
                      onClick={() => {
                        setActiveMilestoneIndex((prev) => (prev - 1 + PROGRESS_MILESTONES.length) % PROGRESS_MILESTONES.length);
                        setIsAutoPlaying(false);
                      }}
                      style={{
                        padding: "0.55rem 1.1rem",
                        borderRadius: "12px",
                        background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.06)",
                        color: isLight ? "#334155" : "#cbd5e1",
                        border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.12)",
                        fontSize: "0.84rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <ChevronLeft size={16} />
                      <span>Previous Year</span>
                    </button>

                    {/* Auto-Play Toggle */}
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      style={{
                        padding: "0.55rem 1.1rem",
                        borderRadius: "12px",
                        background: isAutoPlaying
                          ? isLight ? "rgba(0, 168, 143, 0.12)" : "rgba(45, 212, 191, 0.18)"
                          : isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.06)",
                        color: isAutoPlaying
                          ? isLight ? "#008a75" : "#2dd4bf"
                          : isLight ? "#64748b" : "#94a3b8",
                        border: isAutoPlaying
                          ? `1px solid ${isLight ? "rgba(0, 168, 143, 0.35)" : "rgba(45, 212, 191, 0.4)"}`
                          : isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.12)",
                        fontSize: "0.84rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "all 0.25s ease",
                      }}
                    >
                      {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
                      <span>{isAutoPlaying ? "Auto-Play Active" : "Resume Auto-Play"}</span>
                    </button>

                    {/* Next Milestone */}
                    <button
                      onClick={() => {
                        setActiveMilestoneIndex((prev) => (prev + 1) % PROGRESS_MILESTONES.length);
                        setIsAutoPlaying(false);
                      }}
                      style={{
                        padding: "0.55rem 1.25rem",
                        borderRadius: "12px",
                        background: isLight ? "#008a75" : "#00A88F",
                        color: "#ffffff",
                        border: "none",
                        fontSize: "0.84rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        boxShadow: "0 4px 14px rgba(0, 168, 143, 0.35)",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <span>Next Year</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Right Side Visual Icon Pod */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      width: "130px",
                      height: "130px",
                      borderRadius: "26px",
                      background: isLight
                        ? "linear-gradient(135deg, #ffffff 0%, rgba(0, 168, 143, 0.08) 100%)"
                        : "linear-gradient(135deg, rgba(30, 41, 59, 0.85) 0%, rgba(0, 168, 143, 0.2) 100%)",
                      border: `1.5px solid ${isLight ? "rgba(0, 168, 143, 0.3)" : "rgba(45, 212, 191, 0.35)"}`,
                      boxShadow: `0 14px 32px rgba(0, 168, 143, ${isLight ? 0.15 : 0.25})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isLight ? "#008a75" : "#2dd4bf",
                      transition: "all 0.4s ease",
                    }}
                  >
                    <IconComp size={58} strokeWidth={1.8} />
                  </div>

                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 750,
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(45, 212, 191, 0.16)",
                      color: isLight ? "#008a75" : "#2dd4bf",
                      border: `1px solid ${isLight ? "rgba(0, 168, 143, 0.25)" : "rgba(45, 212, 191, 0.3)"}`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {current.kpi}
                  </span>
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
                    position: "relative",
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid #00ffd1",
                    boxShadow: "0 10px 35px rgba(0, 168, 143, 0.45)",
                    marginBottom: "1.75rem",
                    background: isLight ? "#0f172a" : "#060d1d",
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
