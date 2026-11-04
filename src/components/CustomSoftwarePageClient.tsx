"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Layers, ShieldCheck, Zap, Cpu, Server, Database, Cloud, Terminal, ArrowRight, CheckCircle2, Check, X, Clock, Users, RefreshCw, Lock, Network, Activity, Award, ChevronDown, Globe2, Radio, Workflow, Search, CheckSquare, ChevronRight, Calculator, Rocket, FileText, Compass, Shield, CreditCard, ShoppingBag, GraduationCap, Building2, HeartPulse, Plane, Factory, Settings, Smartphone, SlidersHorizontal, Send, MessageCircle, Play, } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { ServiceDetail } from "@/data/services";
import { companyData } from "@/data/company";
import OuiWillHeadline, { OuiWillWord, OuiWillDot } from "@/components/OuiWillHeadline";
import { TechStackShowcase } from "@/components/TechStackShowcase";
import { AnimatedIndustriesCarousel } from "@/components/AnimatedIndustriesCarousel";
import AnimatedRollingMetric from "@/components/AnimatedRollingMetric";

interface CustomSoftwarePageClientProps {
  service: ServiceDetail;
}

// -----------------------------------------------------------------------------
// 1. DATA: What Custom Software Development Includes (Same to Same from Live Site)
// -----------------------------------------------------------------------------
const INCLUDES_DATA = [
  {
    code: "01",
    tag: "APPLICATIONS",
    icon: Code2,
    title: "Custom Web & Mobile Applications",
    desc: "Frontend, backend, APIs—built just for your use case",
  },
  {
    code: "02",
    tag: "INTEGRATION",
    icon: Network,
    title: "Third-party Integrations",
    desc: "CRM, ERP, payment gateways, AI tools, and more",
  },
  {
    code: "03",
    tag: "REALTIME_OPS",
    icon: Activity,
    title: "Real-time Features",
    desc: "Live data updates, dashboards, notifications, chat, tracking",
  },
  {
    code: "04",
    tag: "AUTOMATION",
    icon: Workflow,
    title: "Automation Tools",
    desc: "Task automation, report generation, workflow management",
  },
  {
    code: "05",
    tag: "GOVERNANCE",
    icon: ShieldCheck,
    title: "Security & Compliance",
    desc: "Custom data protection, audit logs, compliance with GDPR/HIPAA/etc.",
  },
  {
    code: "06",
    tag: "MODERNIZATION",
    icon: RefreshCw,
    title: "Legacy System Modernization",
    desc: "Upgrade or rebuild old systems with new technology",
  },
];

// -----------------------------------------------------------------------------
// 2. DATA: Technologies (Exact 31 Technologies from Live Site)
// -----------------------------------------------------------------------------
interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Mobile" | "Databases" | "Cloud & DevOps" | "QA & Testing";
}

const ALL_TECHNOLOGIES: TechItem[] = [
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "Material UI", category: "Frontend" },
  // Backend & APIs
  { name: "Node", category: "Backend" },
  { name: "Nest.js", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Restful API", category: "Backend" },
  { name: "graphQL", category: "Backend" },
  { name: "Webhooks", category: "Backend" },
  // Mobile
  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  // Databases
  { name: "PostgreSQL", category: "Databases" },
  { name: "MS SQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  { name: "Firebase", category: "Databases" },
  // Cloud & DevOps
  { name: "aws", category: "Cloud & DevOps" },
  { name: "googleCloud", category: "Cloud & DevOps" },
  { name: "microsoft-azure", category: "Cloud & DevOps" },
  { name: "DigitalOcean", category: "Cloud & DevOps" },
  { name: "Docker", category: "Cloud & DevOps" },
  { name: "GitHub Actions", category: "Cloud & DevOps" },
  { name: "Jenkins", category: "Cloud & DevOps" },
  { name: "Kubernetes", category: "Cloud & DevOps" },
  { name: "Terraform", category: "Cloud & DevOps" },
  // QA & Testing
  { name: "Cypress", category: "QA & Testing" },
  { name: "Selenium", category: "QA & Testing" },
  { name: "Jest", category: "QA & Testing" },
  { name: "Postman", category: "QA & Testing" },
];

// -----------------------------------------------------------------------------
// 3. DATA: Custom Software Development Process (Same to Same from Live Site)
// -----------------------------------------------------------------------------
const PROCESS_STEPS_LIVE = [
  {
    step: "01",
    phase: "Discovery & Requirement Analysis",
    desc: "Where we dive deep into your goals, user journeys, and workflows to define clear success metrics.",
    icon: Search,
    tags: ["User Journeys", "SRS Spec & KPIs"],
    sla: "Sprint Zero",
  },
  {
    step: "02",
    phase: "Planning & Design",
    desc: "We create wireframes, system architecture, and intuitive UI/UX prototypes, laying out a strategic tech roadmap.",
    icon: Compass,
    tags: ["System Architecture", "Interactive UI/UX"],
    sla: "Design Approved",
  },
  {
    step: "03",
    phase: "Development in Agile Sprints",
    desc: "Executed in Agile sprints, using clean, modular code and an API-first approach to ensure flexibility and fast iterations.",
    icon: Code2,
    tags: ["2-Week Agile Sprints", "API-First Codebase"],
    sla: "Bi-Weekly Demos",
  },
  {
    step: "04",
    phase: "Testing & QA",
    desc: "Involves both manual and automated methods to guarantee security, speed, and performance.",
    icon: ShieldCheck,
    tags: ["Automated E2E", "Security Audits"],
    sla: "Zero Critical Bugs",
  },
  {
    step: "05",
    phase: "CI/CD-Driven Deployment",
    desc: "Your software is seamlessly launched on cloud or on-premise environments with automated pipelines.",
    icon: Rocket,
    tags: ["Automated CI/CD", "Zero-Downtime Rollout"],
    sla: "Production Ready",
  },
  {
    step: "06",
    phase: "Support & Maintenance",
    desc: "Includes performance optimization, bug fixes, upgrades, and continuous feature enhancement.",
    icon: RefreshCw,
    tags: ["24/7 Monitoring", "Continuous Optimization"],
    sla: "99.99% Uptime SLA",
  },
];

// -----------------------------------------------------------------------------
// 4. DATA: Industries We Specialize In (Same to Same from Live Site)
// -----------------------------------------------------------------------------
const INDUSTRIES_LIVE = [
  { id: "travel", name: "Travel & Hospitality", icon: Plane },
  { id: "telecom", name: "Telecommunication", icon: Radio },
  { id: "industrial", name: "Industrial Tech", icon: Factory },
  { id: "ngo", name: "NGOs", icon: Globe2 },
  { id: "insuretech", name: "InsureTech", icon: Shield },
  { id: "healthcare", name: "Health Care", icon: HeartPulse },
  { id: "fintech", name: "Fintech", icon: CreditCard },
  { id: "ecommerce", name: "Ecommerce", icon: ShoppingBag },
  { id: "education", name: "Education", icon: GraduationCap },
  { id: "realestate", name: "Real Estate", icon: Building2 },
];

// -----------------------------------------------------------------------------
// Common Countries for Quote Form
// -----------------------------------------------------------------------------
const COUNTRIES_LIST = [
  "United States",
  "India",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "United Arab Emirates",
  "Singapore",
  "Netherlands",
  "Switzerland",
  "France",
  "New Zealand",
  "Saudi Arabia",
  "South Africa",
  "Ireland",
  "Other",
];

export default function CustomSoftwarePageClient({ service }: CustomSoftwarePageClientProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Brand Colors
  const mintColor = isLight ? "#00A88F" : "#5EC098";
  const slateColor = isLight ? "#102033" : "#476D9A";

  // State: Quote Form
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Full Time",
    country: "United States",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formLoading, setFormLoading] = useState<boolean>(false);
  const [heroConsoleTab, setHeroConsoleTab] = useState<"architecture" | "telemetry" | "devops">("architecture");
  const [activeTier, setActiveTier] = useState<number>(0);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 700);
  };

  return (
    <div
      className="custom-software-page-wrapper"
      style={{
        position: "relative",
        overflowX: "clip",
        backgroundColor: isLight ? "#f8fafc" : "#020712",
        color: isLight ? "#0f172a" : "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* ===================================================================== */}
      {/* ===================================================================== */}
      {/* 1. HERO SECTION: SLEEK, ULTRA-PERFORMANT MODERN HERO                   */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "7.5rem 1.5rem 3.5rem 1.5rem",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: isLight ? "#f8fafc" : "#020712",
        }}
      >
        {/* Scoped Keyframe Animations & Responsive Layout Styles */}
        <style>{`
          .custom-software-hero-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.75rem;
            align-items: center;
            margin-bottom: 0;
          }
          @media (min-width: 1024px) {
            .custom-software-hero-grid {
              grid-template-columns: 1.15fr 0.85fr;
              gap: 3.5rem;
            }
          }
        `}</style>

        {/* Static Ultra-Lightweight CSS Ambient Grid & Radial Aura (Zero CPU Overhead) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: isLight
              ? "radial-gradient(rgba(0, 168, 143, 0.12) 1px, transparent 1px)"
              : "radial-gradient(rgba(94, 192, 152, 0.12) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse 80% 65% at 50% 35%, black 40%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 65% at 50% 35%, black 40%, transparent 85%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Cinematic Hero Video Background */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              minWidth: "100%",
              minHeight: "100%",
              width: "auto",
              height: "auto",
              objectFit: "cover",
              opacity: isLight ? 0.35 : 0.45,
            }}
          >
            <source src="/videos/herovideo.mp4" type="video/mp4" />
          </video>
          {/* Subtle gradient overlay to ensure text contrast and bottom fade */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: isLight
                ? "linear-gradient(180deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.85) 60%, #ffffff 100%)"
                : "linear-gradient(180deg, rgba(2, 7, 18, 0.65) 0%, rgba(2, 7, 18, 0.85) 60%, #020712 100%)",
            }}
          />
        </div>

        {/* Soft Ambient Radial Bloom (Pure Static CSS) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "1100px",
            height: "460px",
            background: isLight
              ? "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0, 168, 143, 0.12) 0%, rgba(2, 132, 199, 0.05) 45%, transparent 75%)"
              : "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(94, 192, 152, 0.15) 0%, rgba(56, 189, 248, 0.06) 45%, transparent 75%)",
            filter: "blur(60px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Top Subtle Horizon Border Highlight */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            maxWidth: "1000px",
            height: "1px",
            background: isLight
              ? "linear-gradient(90deg, transparent 0%, rgba(0, 168, 143, 0.6) 50%, transparent 100%)"
              : "linear-gradient(90deg, transparent 0%, rgba(94, 192, 152, 0.7) 50%, transparent 100%)",
            boxShadow: isLight
              ? "0 0 15px rgba(0, 168, 143, 0.3)"
              : "0 0 20px rgba(94, 192, 152, 0.4)",
            zIndex: 1,
          }}
        />

        <div
          className="container-custom"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1320px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* ================================================================= */}
          {/* NEW HERO SPLIT-COLUMN LAYOUT (Not Centered)                       */}
          {/* ================================================================= */}
          <div className="custom-software-hero-grid">
            {/* ── LEFT COLUMN: Headline, Positioning, CTAs & Trust Badges ─── */}
            <div style={{ textAlign: "left" }}>
              {/* Monumental Headline */}
              <div style={{ margin: "0 0 1.25rem 0" }}>
                <OuiWillHeadline
                  style={{
                    fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', serif",
                    fontSize: "clamp(2rem, 3.4vw, 3.1rem)",
                    fontWeight: 400,
                    lineHeight: 1.14,
                    letterSpacing: "-0.015em",
                    margin: 0,
                    textAlign: "left",
                    display: "block",
                  }}
                >
                  <OuiWillWord index={1}>Custom</OuiWillWord>
                  <OuiWillWord index={2}>Software</OuiWillWord>
                  <OuiWillDot />
                  <span style={{ display: "block", width: "100%", marginTop: "0.2rem" }}>
                    <OuiWillWord index={3} isGradient>
                      Development
                    </OuiWillWord>
                  </span>
                </OuiWillHeadline>
              </div>

              {/* Lead Paragraph 1 (Exact Content Preserved) */}
              <p
                style={{
                  fontSize: "clamp(1rem, 1.15vw, 1.125rem)",
                  lineHeight: 1.68,
                  color: isLight ? "#334155" : "#cbd5e1",
                  maxWidth: "640px",
                  margin: "0 0 1rem 0",
                  fontWeight: 400,
                  textAlign: "left",
                }}
              >
                We offer custom software development services tailored precisely to your business needs,
                industry workflows, and growth goals. Whether you&apos;re building internal tools,
                client-facing portals, or enterprise-grade systems, our team delivers scalable,
                secure, and fully personalized solutions—built from the ground up.
              </p>

              {/* Lead Paragraph 2 (Exact Content Preserved) */}
              <p
                style={{
                  fontSize: "clamp(0.9rem, 1vw, 0.98rem)",
                  lineHeight: 1.62,
                  color: isLight ? "#64748b" : "#94a3b8",
                  maxWidth: "600px",
                  margin: "0 0 2rem 0",
                  fontWeight: 400,
                  textAlign: "left",
                }}
              >
                Unlike off-the-shelf products, custom software is designed around your processes, not the other way around.
                We craft intelligent, performance-optimized applications that integrate with your existing infrastructure,
                deliver superior UX, and scale effortlessly as your business evolves.
              </p>

              {/* Action Buttons (Left-Aligned) */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1.1rem",
                  flexWrap: "wrap",
                  marginBottom: "2.25rem",
                }}
              >
                {/* Primary Button */}
                <a
                  href="#quote-section"
                  className="hero-brand-primary-btn opash-roll-btn"
                  style={{
                    padding: "0.95rem 2.1rem",
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <span className="opash-roll-track">
                    <span className="opash-roll-item">
                      <span>ESTIMATE PROJECT</span>
                      <ArrowRight size={18} className="hero-btn-arrow" />
                    </span>
                    <span className="opash-roll-item" aria-hidden="true">
                      <span>ESTIMATE PROJECT</span>
                      <ArrowRight size={18} className="hero-btn-arrow" />
                    </span>
                  </span>
                </a>

                {/* Secondary Button */}
                <a
                  href="#tech-stack"
                  className="hero-brand-secondary-btn opash-roll-btn"
                  style={{
                    padding: "0.95rem 1.9rem",
                    borderRadius: "12px",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    letterSpacing: "0.02em",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <span className="opash-roll-track">
                    <span className="opash-roll-item">
                      <span>Explore Technologies</span>
                      <Terminal size={17} className="hero-btn-arrow" />
                    </span>
                    <span className="opash-roll-item" aria-hidden="true">
                      <span>Explore Technologies</span>
                      <Terminal size={17} className="hero-btn-arrow" />
                    </span>
                  </span>
                </a>
              </div>

              {/* Trust Highlights Inline Strip */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "1.35rem",
                  color: isLight ? "#475569" : "#94a3b8",
                  fontSize: "0.86rem",
                  fontWeight: 500,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                  <CheckCircle2 size={16} color={mintColor} />
                  <span>100% Code & IP Ownership</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                  <CheckCircle2 size={16} color={mintColor} />
                  <span>Zero Vendor Lock-In</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                  <CheckCircle2 size={16} color={mintColor} />
                  <span>Agile Sprints & Bi-Weekly Releases</span>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Interactive Live Architecture & Engine Console ── */}
            <div style={{ position: "relative" }}>
              {/* Main Interactive Glass Console Box */}
              <div
                style={{
                  position: "relative",
                  borderRadius: "24px",
                  background: isLight
                    ? "linear-gradient(155deg, rgba(255, 255, 255, 0.94) 0%, rgba(248, 250, 252, 0.90) 100%)"
                    : "linear-gradient(155deg, rgba(15, 23, 42, 0.85) 0%, rgba(8, 14, 28, 0.92) 100%)",
                  border: isLight
                    ? "1px solid rgba(0, 168, 143, 0.22)"
                    : "1px solid rgba(94, 192, 152, 0.25)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: isLight
                    ? "0 25px 60px -15px rgba(0, 168, 143, 0.16), 0 0 1px 1px rgba(255, 255, 255, 0.9)"
                    : "0 30px 70px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(94, 192, 152, 0.12)",
                  overflow: "hidden",
                  padding: "1.5rem",
                }}
              >
                {/* Console Top Header Bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: "1.1rem",
                    borderBottom: isLight
                      ? "1px solid rgba(0, 0, 0, 0.08)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
                    <span
                      style={{
                        marginLeft: "0.5rem",
                        fontFamily: "monospace",
                        fontSize: "0.78rem",
                        color: isLight ? "#64748b" : "#94a3b8",
                        fontWeight: 600,
                      }}
                    >
                      opash.engine // custom-core.v3
                    </span>
                  </div>

                  {/* Active Cluster Status */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "9999px",
                      background: isLight ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0.16)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: isLight ? "#059669" : "#34d399",
                      letterSpacing: "0.04em",
                    }}
                  >
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} className="animate-pulse" />
                    <span>SYSTEM OPTIMAL</span>
                  </div>
                </div>

                {/* Interactive Console Tabs */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "0.5rem",
                    background: isLight ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.04)",
                    padding: "0.3rem",
                    borderRadius: "12px",
                    marginBottom: "1.25rem",
                  }}
                >
                  {[
                    { id: "architecture", label: "Architecture", icon: Layers },
                    { id: "telemetry", label: "Live Telemetry", icon: Activity },
                    { id: "devops", label: "Delivery Pipeline", icon: Workflow },
                  ].map((tab) => {
                    const isActive = heroConsoleTab === tab.id;
                    const TabIcon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setHeroConsoleTab(tab.id as any)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.4rem",
                          padding: "0.55rem 0.5rem",
                          borderRadius: "9px",
                          border: "none",
                          background: isActive
                            ? isLight
                              ? "#ffffff"
                              : "rgba(255, 255, 255, 0.12)"
                            : "transparent",
                          color: isActive
                            ? isLight
                              ? "#00A88F"
                              : "#5EC098"
                            : isLight
                            ? "#64748b"
                            : "#94a3b8",
                          fontWeight: isActive ? 700 : 500,
                          fontSize: "0.76rem",
                          boxShadow: isActive
                            ? isLight
                              ? "0 2px 8px rgba(0, 0, 0, 0.06)"
                              : "0 2px 10px rgba(0, 0, 0, 0.4)"
                            : "none",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <TabIcon size={13} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab 1: Architecture Stack (Default) */}
                {heroConsoleTab === "architecture" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {[
                      {
                        tier: "01",
                        name: "Frontend & Omnichannel Portals",
                        stack: "Next.js 15, React 19, Flutter, TypeScript",
                        metric: "Sub-Second TTI",
                        desc: "Micro-frontends, responsive client portals, fluid UI/UX",
                        icon: Globe2,
                        color: mintColor,
                      },
                      {
                        tier: "02",
                        name: "Distributed Microservices & APIs",
                        stack: "Nest.js, Node.js, Python, REST & GraphQL",
                        metric: "< 14ms Latency",
                        desc: "Event bus, message queues, domain-driven business logic",
                        icon: Cpu,
                        color: isLight ? "#0284c7" : "#38bdf8",
                      },
                      {
                        tier: "03",
                        name: "Cloud & Resilient Enterprise Data Lake",
                        stack: "PostgreSQL, Redis, AWS / Azure, Docker, K8s",
                        metric: "100% IP Ownership",
                        desc: "Automated failover, HIPAA & GDPR compliance vault",
                        icon: Database,
                        color: isLight ? "#7c3aed" : "#a78bfa",
                      },
                    ].map((layer, idx) => {
                      const LayerIcon = layer.icon;
                      const isSelected = activeTier === idx;
                      return (
                        <div
                          key={idx}
                          onClick={() => setActiveTier(idx)}
                          style={{
                            padding: "0.95rem 1.1rem",
                            borderRadius: "14px",
                            background: isSelected
                              ? isLight
                                ? "rgba(0, 168, 143, 0.08)"
                                : "rgba(94, 192, 152, 0.12)"
                              : isLight
                              ? "rgba(0, 0, 0, 0.02)"
                              : "rgba(255, 255, 255, 0.03)",
                            border: isSelected
                              ? isLight
                                ? "1px solid rgba(0, 168, 143, 0.35)"
                                : "1px solid rgba(94, 192, 152, 0.45)"
                              : isLight
                              ? "1px solid rgba(0, 0, 0, 0.05)"
                              : "1px solid rgba(255, 255, 255, 0.06)",
                            transition: "all 0.2s ease",
                            cursor: "pointer",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                              <div
                                style={{
                                  width: "28px",
                                  height: "28px",
                                  borderRadius: "8px",
                                  background: `${layer.color}20`,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: layer.color,
                                }}
                              >
                                <LayerIcon size={15} />
                              </div>
                              <span style={{ fontSize: "0.86rem", fontWeight: 700, color: isLight ? "#0f172a" : "#ffffff" }}>
                                {layer.name}
                              </span>
                            </div>
                            <span
                              style={{
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                padding: "0.2rem 0.55rem",
                                borderRadius: "9999px",
                                background: `${layer.color}18`,
                                color: layer.color,
                                border: `1px solid ${layer.color}35`,
                              }}
                            >
                              {layer.metric}
                            </span>
                          </div>

                          <div style={{ fontSize: "0.75rem", color: isLight ? "#64748b" : "#94a3b8", marginLeft: "2.35rem" }}>
                            <strong style={{ color: isLight ? "#334155" : "#cbd5e1" }}>Stack:</strong> {layer.stack}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Tab 2: Live Telemetry */}
                {heroConsoleTab === "telemetry" && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.85rem",
                    }}
                  >
                    {[
                      { label: "Request Throughput", val: "14,850 ops/s", sub: "Distributed Load", color: mintColor, icon: Zap },
                      { label: "Availability SLA", val: "99.99%", sub: "Zero-Downtime Rolling Deploys", color: isLight ? "#0284c7" : "#38bdf8", icon: Server },
                      { label: "Code & IP Rights", val: "100%", sub: "Full Client Ownership", color: isLight ? "#7c3aed" : "#a78bfa", icon: ShieldCheck },
                      { label: "Sprint Cadence", val: "14-Day Delivery", sub: "Continuous CI/CD Shipping", color: isLight ? "#f59e0b" : "#fbbf24", icon: Clock },
                    ].map((metric, idx) => {
                      const MetricIcon = metric.icon;
                      return (
                        <div
                          key={idx}
                          style={{
                            padding: "1rem",
                            borderRadius: "14px",
                            background: isLight ? "rgba(0, 0, 0, 0.02)" : "rgba(255, 255, 255, 0.03)",
                            border: isLight ? "1px solid rgba(0, 0, 0, 0.06)" : "1px solid rgba(255, 255, 255, 0.08)",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                            <span style={{ fontSize: "0.72rem", color: isLight ? "#64748b" : "#94a3b8", fontWeight: 600 }}>
                              {metric.label}
                            </span>
                            <MetricIcon size={14} color={metric.color} />
                          </div>
                          <div style={{ fontSize: "1.35rem", fontWeight: 800, color: metric.color, letterSpacing: "-0.02em" }}>
                            {metric.val}
                          </div>
                          <div style={{ fontSize: "0.7rem", color: isLight ? "#64748b" : "#94a3b8", marginTop: "0.2rem" }}>
                            {metric.sub}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Tab 3: DevOps & Delivery Pipeline */}
                {heroConsoleTab === "devops" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    {[
                      { step: "01", title: "Domain Mapping & Architecture Spec", status: "Completed", icon: FileText },
                      { step: "02", title: "Agile Sprints & Bi-Weekly Deliveries", status: "Active Sprint", icon: RefreshCw },
                      { step: "03", title: "Automated QA & Security Hardening", status: "Continuous", icon: Shield },
                      { step: "04", title: "High-Availability Multi-Cloud Launch", status: "Ready", icon: Rocket },
                    ].map((item, idx) => {
                      const StepIcon = item.icon;
                      return (
                        <div
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "0.75rem 1rem",
                            borderRadius: "12px",
                            background: isLight ? "rgba(0, 0, 0, 0.02)" : "rgba(255, 255, 255, 0.03)",
                            border: isLight ? "1px solid rgba(0, 0, 0, 0.06)" : "1px solid rgba(255, 255, 255, 0.07)",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                            <span style={{ fontFamily: "monospace", fontSize: "0.72rem", color: mintColor, fontWeight: 700 }}>
                              {item.step}
                            </span>
                            <span style={{ fontSize: "0.78rem", fontWeight: 600, color: isLight ? "#0f172a" : "#ffffff" }}>
                              {item.title}
                            </span>
                          </div>
                          <span
                            style={{
                              fontSize: "0.68rem",
                              fontWeight: 700,
                              padding: "0.18rem 0.55rem",
                              borderRadius: "9999px",
                              background: idx === 1 ? `${mintColor}20` : "rgba(255, 255, 255, 0.08)",
                              color: idx === 1 ? mintColor : isLight ? "#64748b" : "#94a3b8",
                            }}
                          >
                            {item.status}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Console Bottom Action Bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "1.1rem",
                    borderTop: isLight
                      ? "1px solid rgba(0, 0, 0, 0.08)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    marginTop: "1.25rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.72rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                    <span>Latency: <strong style={{ color: mintColor }}>12ms</strong></span>
                    <span>•</span>
                    <span>Uptime: <strong style={{ color: isLight ? "#0284c7" : "#38bdf8" }}>99.99%</strong></span>
                  </div>

                  <a
                    href="#technologies"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      color: mintColor,
                      textDecoration: "none",
                    }}
                  >
                    <span>Explore 31 Techs</span>
                    <ChevronRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 1.5 PROVEN TRACK RECORD & ENTERPRISE METRICS                          */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "3.5rem 1.5rem 3.75rem 1.5rem",
          background: isLight ? "#ffffff" : "#020712",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div
          className="container-custom"
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
              alignItems: "stretch",
            }}
          >
              {[
                {
                  value: "8+ Years",
                  label: "Industry Expertise",
                  sub: "75+ Global Projects",
                  icon: Award,
                },
                {
                  value: "100%",
                  label: "Custom Architecture",
                  sub: "Tailored to Your Core",
                  icon: Cpu,
                },
                {
                  value: "0",
                  label: "Off-the-Shelf Limits",
                  sub: "Unrestricted Scalability",
                  icon: Zap,
                },
                {
                  value: "Full",
                  label: "Code & IP Ownership",
                  sub: "100% Client Intellectual Property",
                  icon: ShieldCheck,
                },
              ].map((m, idx) => {
                const IconComponent = m.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      position: "relative",
                      borderRadius: "18px",
                      padding: "1.75rem 1.5rem",
                      background: isLight
                        ? "linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)"
                        : "linear-gradient(145deg, rgba(15, 23, 42, 0.75) 0%, rgba(7, 16, 30, 0.85) 100%)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: isLight
                        ? "1px solid rgba(0, 168, 143, 0.18)"
                        : "1px solid rgba(94, 192, 152, 0.18)",
                      boxShadow: isLight
                        ? "0 10px 30px -8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9)"
                        : "0 14px 35px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
                      transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.borderColor = isLight ? "rgba(0, 168, 143, 0.45)" : "rgba(94, 192, 152, 0.45)";
                      e.currentTarget.style.boxShadow = isLight
                        ? "0 20px 40px -10px rgba(0, 168, 143, 0.18), inset 0 1px 0 rgba(255, 255, 255, 1)"
                        : "0 22px 45px -10px rgba(0, 0, 0, 0.7), 0 0 25px -5px rgba(94, 192, 152, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = isLight ? "rgba(0, 168, 143, 0.18)" : "rgba(94, 192, 152, 0.18)";
                      e.currentTarget.style.boxShadow = isLight
                        ? "0 10px 30px -8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9)"
                        : "0 14px 35px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)";
                    }}
                  >
                    {/* Top Subtle Card Highlight Line */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "15%",
                        right: "15%",
                        height: "1px",
                        background: isLight
                          ? "linear-gradient(90deg, transparent 0%, rgba(0, 168, 143, 0.5) 50%, transparent 100%)"
                          : "linear-gradient(90deg, transparent 0%, rgba(94, 192, 152, 0.6) 50%, transparent 100%)",
                      }}
                    />

                    {/* Header Row: Metric Value + Icon */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.85rem",
                      }}
                    >
                      <AnimatedRollingMetric
                        value={m.value}
                        color={mintColor}
                        isLight={isLight}
                      />

                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: isLight ? "rgba(0, 168, 143, 0.08)" : "rgba(94, 192, 152, 0.1)",
                          border: `1px solid ${isLight ? "rgba(0, 168, 143, 0.2)" : "rgba(94, 192, 152, 0.2)"}`,
                          color: mintColor,
                        }}
                      >
                        <IconComponent size={20} />
                      </div>
                    </div>

                    {/* Content: Label & Subtitle */}
                    <div>
                      <div
                        style={{
                          fontSize: "1.02rem",
                          fontWeight: 700,
                          color: isLight ? "#0f172a" : "#ffffff",
                          marginBottom: "0.35rem",
                          lineHeight: 1.3,
                        }}
                      >
                        {m.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.84rem",
                          fontWeight: 500,
                          color: isLight ? "#64748b" : "#94a3b8",
                          lineHeight: 1.4,
                        }}
                      >
                        {m.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      {/* ===================================================================== */}
      {/* 2. WHY CUSTOM SOFTWARE DEVELOPMENT? (SAME TO SAME DATA)              */}
      {/* ===================================================================== */}
      <section
        id="why-custom"
        style={{
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#ffffff" : "rgba(4, 10, 22, 0.9)",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3.5rem auto" }}>
            <span
              style={{
                display: "inline-block",
                color: mintColor,
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Strategic Advantage
            </span>

            {/* Exact Heading from live page */}
            <h2
              className="heading-section"
              style={{
                fontSize: "clamp(1.45rem, 2.1vw, 1.95rem)",
                fontWeight: 850,
                letterSpacing: "-0.025em",
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              Why Custom Software <span className="opash-hero-gradient-text">Development?</span>
            </h2>

            {/* Exact Paragraph 1 from live page */}
            <p
              style={{
                color: isLight ? "#334155" : "#e2e8f0",
                fontSize: "1.08rem",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
                fontWeight: 500,
              }}
            >
              Every business is unique—your software should be too. Off-the-shelf products often come with limitations, unused features, or poor alignment with your operations.
              With custom software, you get a solution tailored to your exact requirements, giving you total control over features, security, user experience, and integrations.
            </p>

            {/* Exact Paragraph 2 from live page */}
            <p
              style={{
                color: isLight ? "#64748b" : "#94a3b8",
                fontSize: "1.02rem",
                lineHeight: 1.7,
              }}
            >
              Custom software is future-proof, flexible, and cost-efficient in the long run. It adapts as your organization grows, provides a competitive edge,
              and ensures higher productivity, stronger customer satisfaction, and complete ownership over your tech stack.
            </p>
          </div>

          {/* Scoped CSS for 4-Pillar Modern Bento Cards (100% GPU Composited, Zero CPU Cost) */}
          <style>{`
            .benefit-pillar-card {
              position: relative;
              overflow: hidden;
              border-radius: 20px;
              transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                          box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                          border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                          background 0.35s ease;
              will-change: transform;
              cursor: pointer;
              backdrop-filter: blur(12px);
              -webkit-backdrop-filter: blur(12px);
            }
            .benefit-pillar-card:hover {
              transform: translateY(-8px);
            }
            .benefit-pillar-card .pillar-spotlight {
              position: absolute;
              inset: 0;
              pointer-events: none;
              opacity: 0;
              transition: opacity 0.35s ease;
              border-radius: inherit;
              z-index: 1;
            }
            .benefit-pillar-card:hover .pillar-spotlight {
              opacity: 1;
            }
            .benefit-pillar-card .pillar-laser-beam {
              position: absolute;
              top: 0;
              left: 12%;
              right: 12%;
              height: 2px;
              background: linear-gradient(90deg, transparent, #5EC098, #38bdf8, transparent);
              opacity: 0;
              transform: scaleX(0.2);
              transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
              pointer-events: none;
              z-index: 3;
            }
            .benefit-pillar-card:hover .pillar-laser-beam {
              opacity: 1;
              transform: scaleX(1);
            }
            .benefit-pillar-card .pillar-icon-box {
              transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                          background 0.3s ease,
                          box-shadow 0.3s ease,
                          border-color 0.3s ease;
            }
            .benefit-pillar-card:hover .pillar-icon-box {
              transform: translateY(-3px) scale(1.1) rotate(4deg);
              background: rgba(94, 192, 152, 0.25) !important;
              box-shadow: 0 0 24px rgba(94, 192, 152, 0.45) !important;
              border-color: rgba(94, 192, 152, 0.6) !important;
            }
            .benefit-pillar-card .pillar-title {
              transition: color 0.25s ease;
            }
            .benefit-pillar-card:hover .pillar-title {
              color: #5EC098 !important;
            }
            .benefit-pillar-card .pillar-arrow-btn {
              transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .benefit-pillar-card:hover .pillar-arrow-btn {
              background: rgba(94, 192, 152, 0.25) !important;
              border-color: rgba(94, 192, 152, 0.55) !important;
              box-shadow: 0 0 16px rgba(94, 192, 152, 0.35);
            }
            .benefit-pillar-card .pillar-arrow {
              transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .benefit-pillar-card:hover .pillar-arrow {
              transform: translateX(3px);
            }
            .benefit-pillar-card .pillar-divider {
              transition: border-color 0.3s ease;
            }
            .benefit-pillar-card:hover .pillar-divider {
              border-color: rgba(94, 192, 152, 0.35) !important;
            }
          `}</style>

          {/* Dynamic 4-Pillar Modern Glass Bento Cards with Interactive Animations */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                code: "01",
                tag: "BESPOKE",
                icon: Settings,
                title: "Tailored to Your Operations",
                sub: "No generic constraints",
                desc: "Designed around your processes, not the other way around. Zero unused features or forced workflows.",
              },
              {
                code: "02",
                tag: "ELASTIC",
                icon: RefreshCw,
                title: "Future-Proof & Flexible",
                sub: "Scales as you grow",
                desc: "Adapts effortlessly as your organization evolves, user traffic surges, and new integrations emerge.",
              },
              {
                code: "03",
                tag: "ZERO_TAX",
                icon: ShieldCheck,
                title: "Cost-Efficient in Long Run",
                sub: "Zero recurring SaaS tax",
                desc: "Eliminates escalating per-user subscription fees and licensing inflation with total code ownership.",
              },
              {
                code: "04",
                tag: "PROPRIETARY",
                icon: Zap,
                title: "Competitive Edge & Ownership",
                sub: "Higher productivity & satisfaction",
                desc: "Proprietary features and custom automated workflows that your competitors cannot purchase off-the-shelf.",
              },
            ].map((card, cIdx) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={cIdx}
                  className="benefit-pillar-card"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.removeProperty("--mouse-x");
                    e.currentTarget.style.removeProperty("--mouse-y");
                  }}
                  style={{
                    padding: "2.25rem 1.85rem",
                    background: isLight
                      ? "linear-gradient(165deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.94) 100%)"
                      : "linear-gradient(165deg, rgba(13, 23, 42, 0.72) 0%, rgba(7, 13, 27, 0.82) 100%)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isLight
                      ? "0 4px 16px rgba(0,0,0,0.03)"
                      : "0 10px 30px -10px rgba(0,0,0,0.5)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Top Glowing Laser Accent Beam */}
                  <div className="pillar-laser-beam" />

                  {/* GPU-Accelerated Dynamic Torchlight Spotlight */}
                  <div
                    className="pillar-spotlight"
                    style={{
                      background: isLight
                        ? "radial-gradient(380px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), rgba(0, 168, 143, 0.09), transparent 65%)"
                        : "radial-gradient(380px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), rgba(94, 192, 152, 0.14), transparent 65%)",
                    }}
                  />

                  {/* Main Card Content */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    {/* Top Header Row with Animated Icon */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "1.35rem",
                      }}
                    >
                      <div
                        className="pillar-icon-box"
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: "14px",
                          background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.14)",
                          border: isLight ? "1px solid rgba(0, 168, 143, 0.28)" : "1px solid rgba(94, 192, 152, 0.35)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: mintColor,
                        }}
                      >
                        <IconComponent size={24} />
                      </div>
                    </div>

                    <div
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: mintColor,
                        marginBottom: "0.45rem",
                      }}
                    >
                      {card.sub}
                    </div>

                    <h3
                      className="pillar-title"
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        marginBottom: "0.75rem",
                        color: isLight ? "#0f172a" : "#ffffff",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {card.title}
                    </h3>

                    <p
                      style={{
                        color: isLight ? "#475569" : "#cbd5e1",
                        fontSize: "0.94rem",
                        lineHeight: 1.65,
                        fontWeight: 500,
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>

                  {/* Interactive Action Bar with Animated Sliding Arrow Button */}
                  <div
                    className="pillar-divider"
                    style={{
                      position: "relative",
                      zIndex: 2,
                      marginTop: "1.75rem",
                      paddingTop: "1.1rem",
                      borderTop: isLight ? "1px solid #f1f5f9" : "1px solid rgba(255, 255, 255, 0.07)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: mintColor,
                        letterSpacing: "0.01em",
                      }}
                    >
                      Architectural Advantage
                    </span>

                    <div
                      className="pillar-arrow-btn"
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: isLight ? "rgba(0, 168, 143, 0.08)" : "rgba(94, 192, 152, 0.1)",
                        border: isLight ? "1px solid rgba(0, 168, 143, 0.2)" : "1px solid rgba(94, 192, 152, 0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: mintColor,
                      }}
                    >
                      <ArrowRight size={14} className="pillar-arrow" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. WHAT CUSTOM SOFTWARE DEVELOPMENT INCLUDES (SAME TO SAME DATA)      */}
      {/* ===================================================================== */}
      <section
        id="what-includes"
        style={{
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f8fafc" : "#020712",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
          overflow: "hidden",
        }}
      >
        {/* Scoped CSS for Ultra-Lightweight 60/120fps GPU Animations (Zero CPU Overhead) */}
        <style>{`
          .custom-scope-card {
            position: relative;
            overflow: hidden;
            border-radius: 20px;
            transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                        box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                        border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                        background 0.35s ease;
            will-change: transform;
            cursor: pointer;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }
          .custom-scope-card:hover {
            transform: translateY(-8px);
          }
          .custom-scope-card .card-spotlight {
            position: absolute;
            inset: 0;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.35s ease;
            border-radius: inherit;
            z-index: 1;
          }
          .custom-scope-card:hover .card-spotlight {
            opacity: 1;
          }
          .custom-scope-card .card-laser-beam {
            position: absolute;
            top: 0;
            left: 12%;
            right: 12%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #5EC098, #38bdf8, transparent);
            opacity: 0;
            transform: scaleX(0.2);
            transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
            pointer-events: none;
            z-index: 3;
          }
          .custom-scope-card:hover .card-laser-beam {
            opacity: 1;
            transform: scaleX(1);
          }
          .custom-scope-card .card-icon-wrapper {
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                        background 0.3s ease,
                        box-shadow 0.3s ease,
                        border-color 0.3s ease;
          }
          .custom-scope-card:hover .card-icon-wrapper {
            transform: translateY(-3px) scale(1.1) rotate(4deg);
          }
          .custom-scope-card .card-badge {
            transition: all 0.3s ease;
          }
          .custom-scope-card:hover .card-badge {
            border-color: rgba(94, 192, 152, 0.45) !important;
            background: rgba(94, 192, 152, 0.12) !important;
            color: #5EC098 !important;
          }
          .custom-scope-card .card-title {
            transition: color 0.25s ease;
          }
          .custom-scope-card:hover .card-title {
            color: #5EC098 !important;
          }
          .custom-scope-card .card-arrow-icon {
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
          }
          .custom-scope-card:hover .card-arrow-icon {
            transform: translateX(6px);
          }
          .custom-scope-card .card-bottom-divider {
            transition: border-color 0.3s ease;
          }
          .custom-scope-card:hover .card-bottom-divider {
            border-color: rgba(94, 192, 152, 0.35) !important;
          }
        `}</style>

        {/* Static Background Ambient Grid (0 CPU Cost) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: isLight
              ? "radial-gradient(rgba(0, 168, 143, 0.08) 1px, transparent 1px)"
              : "radial-gradient(rgba(94, 192, 152, 0.07) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div className="container-custom" style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.5rem auto" }}>
            <span
              style={{
                display: "inline-block",
                color: mintColor,
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Full-Spectrum Scope
            </span>

            {/* Exact Heading from live page */}
            <h2
              className="heading-section"
              style={{
                fontSize: "clamp(1.45rem, 2.1vw, 1.95rem)",
                fontWeight: 850,
                letterSpacing: "-0.025em",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              What Custom Software Development <span className="opash-hero-gradient-text">Includes</span>
            </h2>
            <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.05rem", lineHeight: 1.6 }}>
              Explore the core modules and functional capabilities engineered from the ground up for your specific operational use case.
            </p>
          </div>

          {/* 6 Exact Items in a High-Performance Interactive Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {INCLUDES_DATA.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="custom-scope-card"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.removeProperty("--mouse-x");
                    e.currentTarget.style.removeProperty("--mouse-y");
                  }}
                  style={{
                    padding: "2.25rem 2rem",
                    background: isLight
                      ? "linear-gradient(165deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.94) 100%)"
                      : "linear-gradient(165deg, rgba(13, 23, 42, 0.72) 0%, rgba(7, 13, 27, 0.82) 100%)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isLight
                      ? "0 4px 16px rgba(0,0,0,0.03)"
                      : "0 10px 30px -10px rgba(0,0,0,0.5)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Top Glowing Laser Accent Beam */}
                  <div className="card-laser-beam" />

                  {/* GPU-Accelerated Dynamic Torchlight Spotlight */}
                  <div
                    className="card-spotlight"
                    style={{
                      background: isLight
                        ? "radial-gradient(420px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), rgba(0, 168, 143, 0.09), transparent 65%)"
                        : "radial-gradient(420px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), rgba(94, 192, 152, 0.14), transparent 65%)",
                    }}
                  />

                  {/* Card Content */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    {/* Top Header Row with Animated Icon & Tech Spec Pill */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "1.35rem",
                      }}
                    >
                      {/* Icon Box with Spring Hover Transformation */}
                      <div
                        className="card-icon-wrapper"
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: "14px",
                          background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.14)",
                          border: isLight ? "1px solid rgba(0, 168, 143, 0.28)" : "1px solid rgba(94, 192, 152, 0.35)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: mintColor,
                        }}
                      >
                        <IconComp size={24} />
                      </div>

                      {/* Micro-Architectural Code Pill with Live Indicator */}
                      <div
                        className="card-badge"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          padding: "0.28rem 0.65rem",
                          borderRadius: "9999px",
                          fontFamily: "monospace",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                          color: isLight ? "#64748b" : "#94a3b8",
                          background: isLight ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.04)",
                          border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#10b981",
                            boxShadow: "0 0 8px #10b981",
                          }}
                        />
                        <span>{item.code} // {item.tag}</span>
                      </div>
                    </div>

                    <h3
                      className="card-title"
                      style={{
                        fontSize: "1.28rem",
                        fontWeight: 700,
                        marginBottom: "0.75rem",
                        color: isLight ? "#0f172a" : "#ffffff",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        color: isLight ? "#475569" : "#cbd5e1",
                        fontSize: "0.98rem",
                        lineHeight: 1.65,
                        fontWeight: 500,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>

                  {/* Interactive Action Bar with Animated Sliding Arrow */}
                  <div
                    className="card-bottom-divider"
                    style={{
                      position: "relative",
                      zIndex: 2,
                      marginTop: "1.75rem",
                      paddingTop: "1.1rem",
                      borderTop: isLight ? "1px solid #f1f5f9" : "1px solid rgba(255, 255, 255, 0.07)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.84rem",
                        fontWeight: 700,
                        color: mintColor,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.45rem",
                      }}
                    >
                      <span>Engineered For Scale</span>
                      <ArrowRight size={14} className="card-arrow-icon" />
                    </span>

                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        fontFamily: "monospace",
                        color: isLight ? "#94a3b8" : "#64748b",
                        letterSpacing: "0.04em",
                      }}
                    >
                      ENTERPRISE SLA
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. TECHNOLOGIES & PLATFORMS SHOWCASE (SAME TO SAME AS HOME PAGE)       */}
      {/* ===================================================================== */}
      <TechStackShowcase />

      {/* ===================================================================== */}
      {/* 5. CUSTOM SOFTWARE DEVELOPMENT PROCESS (SAME TO SAME DATA)            */}
      {/* ===================================================================== */}
      <section
        id="process"
        style={{
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f8fafc" : "#020712",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3.5rem auto" }}>
            <span
              style={{
                display: "inline-block",
                color: mintColor,
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Methodology
            </span>

            {/* Exact Heading from live page */}
            <h2
              className="heading-section"
              style={{
                fontSize: "clamp(1.45rem, 2.1vw, 1.95rem)",
                fontWeight: 850,
                letterSpacing: "-0.025em",
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              Custom Software Development <span className="opash-hero-gradient-text">Process</span>
            </h2>

            {/* Exact Lead from live page */}
            <p
              style={{
                color: isLight ? "#334155" : "#e2e8f0",
                fontSize: "1.08rem",
                lineHeight: 1.7,
                marginBottom: "1rem",
                fontWeight: 500,
              }}
            >
              Our Custom Software Development Process is designed to deliver high-quality, scalable solutions tailored to your business needs.
            </p>
          </div>

          {/* Scoped CSS for Process Roadmap Animation (Zero CPU Overhead, Pure GPU Composited) */}
          <style>{`
            .process-phase-card {
              position: relative;
              overflow: hidden;
              border-radius: 20px;
              transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1),
                          box-shadow 0.38s cubic-bezier(0.16, 1, 0.3, 1),
                          border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                          background 0.35s ease;
              will-change: transform;
              cursor: pointer;
              backdrop-filter: blur(12px);
              -webkit-backdrop-filter: blur(12px);
            }
            .process-phase-card:hover {
              transform: translateY(-8px);
            }
            .process-phase-card .phase-watermark-num {
              position: absolute;
              top: 0.75rem;
              right: 1.25rem;
              font-size: 3.75rem;
              font-weight: 900;
              font-family: var(--font-space-grotesk), monospace, sans-serif;
              line-height: 1;
              pointer-events: none;
              transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease, color 0.35s ease;
              user-select: none;
            }
            .process-phase-card:hover .phase-watermark-num {
              transform: scale(1.12) translate(-4px, -2px);
              opacity: 0.28 !important;
              color: #5EC098 !important;
            }
            .process-phase-card .phase-bottom-progress {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 3px;
              background: linear-gradient(90deg, #00A88F, #5EC098, #38bdf8);
              transform: scaleX(0);
              transform-origin: left;
              transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
              pointer-events: none;
              z-index: 4;
            }
            .process-phase-card:hover .phase-bottom-progress {
              transform: scaleX(1);
            }
            .process-phase-card .phase-icon-box {
              position: relative;
              transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                          background 0.3s ease,
                          box-shadow 0.3s ease,
                          border-color 0.3s ease;
            }
            .process-phase-card:hover .phase-icon-box {
              transform: translateY(-3px) scale(1.1) rotate(4deg);
              background: rgba(94, 192, 152, 0.25) !important;
              box-shadow: 0 0 24px rgba(94, 192, 152, 0.45) !important;
              border-color: rgba(94, 192, 152, 0.6) !important;
            }
            .process-phase-card .phase-tag-chip {
              transition: all 0.3s ease;
            }
            .process-phase-card:hover .phase-tag-chip {
              border-color: rgba(94, 192, 152, 0.4) !important;
              background: rgba(94, 192, 152, 0.12) !important;
              color: #5EC098 !important;
            }
            .process-phase-card .phase-title {
              transition: color 0.25s ease;
            }
            .process-phase-card:hover .phase-title {
              color: #5EC098 !important;
            }
            .process-pipeline-strip {
              display: none;
            }
            @media (min-width: 900px) {
              .process-pipeline-strip {
                display: flex;
                align-items: center;
                justify-content: space-between;
                position: relative;
                max-width: 1040px;
                margin: 0 auto 3.25rem auto;
                padding: 1rem 1.5rem;
                border-radius: 16px;
              }
            }
          `}</style>

          {/* Interactive Horizontal Pipeline Tracker (Desktop) */}
          <div
            className="process-pipeline-strip"
            style={{
              background: isLight ? "rgba(0, 0, 0, 0.02)" : "rgba(255, 255, 255, 0.02)",
              border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            {PROCESS_STEPS_LIVE.map((step, idx) => (
              <React.Fragment key={idx}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      background: isLight ? "rgba(0, 168, 143, 0.12)" : "rgba(94, 192, 152, 0.15)",
                      border: isLight ? "1px solid rgba(0, 168, 143, 0.4)" : "1px solid rgba(94, 192, 152, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      fontFamily: "monospace",
                      color: mintColor,
                    }}
                  >
                    {step.step}
                  </div>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: isLight ? "#475569" : "#cbd5e1",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {step.phase.split(" ")[0]}
                  </span>
                </div>
                {idx < PROCESS_STEPS_LIVE.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      height: "2px",
                      margin: "0 0.85rem",
                      background: isLight
                        ? "linear-gradient(90deg, rgba(0, 168, 143, 0.2), rgba(0, 168, 143, 0.5))"
                        : "linear-gradient(90deg, rgba(94, 192, 152, 0.2), rgba(94, 192, 152, 0.6))",
                      position: "relative",
                      borderRadius: "9999px",
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* 6 Process Steps in Interactive Animated Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "1.75rem",
              marginBottom: "3rem",
            }}
          >
            {PROCESS_STEPS_LIVE.map((step, sIdx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={sIdx}
                  className="process-phase-card"
                  style={{
                    padding: "2.25rem 2rem",
                    background: isLight
                      ? "linear-gradient(165deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.94) 100%)"
                      : "linear-gradient(165deg, rgba(13, 23, 42, 0.72) 0%, rgba(7, 13, 27, 0.82) 100%)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isLight
                      ? "0 4px 16px rgba(0,0,0,0.03)"
                      : "0 10px 30px -10px rgba(0,0,0,0.5)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Giant Watermark Step Number that glows on hover */}
                  <div
                    className="phase-watermark-num"
                    style={{
                      color: isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)",
                    }}
                  >
                    {step.step}
                  </div>

                  {/* Progressive Bottom Milestone Charging Line */}
                  <div className="phase-bottom-progress" />

                  {/* Main Content */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    {/* Top Header Row with Icon */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "1.35rem",
                      }}
                    >
                      {/* Icon Box with Spring Hover Transformation */}
                      <div
                        className="phase-icon-box"
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: "14px",
                          background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.14)",
                          border: isLight ? "1px solid rgba(0, 168, 143, 0.28)" : "1px solid rgba(94, 192, 152, 0.35)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: mintColor,
                        }}
                      >
                        <StepIcon size={24} />
                      </div>
                    </div>

                    <div
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: mintColor,
                        marginBottom: "0.45rem",
                      }}
                    >
                      Phase {step.step}
                    </div>

                    <h3
                      className="phase-title"
                      style={{
                        fontSize: "1.28rem",
                        fontWeight: 700,
                        marginBottom: "0.75rem",
                        color: isLight ? "#0f172a" : "#ffffff",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {step.phase}
                    </h3>

                    <p
                      style={{
                        color: isLight ? "#475569" : "#cbd5e1",
                        fontSize: "0.96rem",
                        lineHeight: 1.65,
                        fontWeight: 500,
                        marginBottom: "1.35rem",
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>

                  {/* Deliverable Micro-Checklist Chips */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      marginTop: "auto",
                      paddingTop: "1.1rem",
                      borderTop: isLight ? "1px solid #f1f5f9" : "1px solid rgba(255, 255, 255, 0.07)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.55rem",
                      flexWrap: "wrap",
                    }}
                  >
                    {step.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="phase-tag-chip"
                        style={{
                          fontSize: "0.74rem",
                          fontWeight: 600,
                          padding: "0.22rem 0.55rem",
                          borderRadius: "7px",
                          background: isLight ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.04)",
                          border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.07)",
                          color: isLight ? "#64748b" : "#94a3b8",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                        }}
                      >
                        <CheckCircle2 size={12} color={mintColor} />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Exact Conclusion from Live Site */}
          <div
            style={{
              padding: "1.75rem 2rem",
              borderRadius: "16px",
              background: isLight ? "rgba(0, 168, 143, 0.05)" : "rgba(94, 192, 152, 0.08)",
              border: isLight ? "1px solid rgba(0, 168, 143, 0.2)" : "1px solid rgba(94, 192, 152, 0.25)",
              textAlign: "center",
              maxWidth: "960px",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                color: isLight ? "#102033" : "#f8fafc",
                lineHeight: 1.65,
                fontWeight: 600,
                margin: 0,
              }}
            >
              This end-to-end development lifecycle is fully adaptable to your timeline, budget, and technology stack—ensuring a future-ready, ROI-driven custom software solution.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. INDUSTRIES WE SPECIALIZE IN (ANIMATED CAROUSEL AS ON HOME PAGE)    */}
      {/* ===================================================================== */}
      <AnimatedIndustriesCarousel />

      {/* ===================================================================== */}
      {/* 7. CONNECT WITH OPASH / GET YOUR FREE QUOTE TODAY (SAME TO SAME FORM) */}
      {/* ===================================================================== */}
      <section
        id="quote-section"
        style={{
          padding: "6rem 1.5rem",
          position: "relative",
          overflow: "hidden",
          background: isLight ? "#f8fafc" : "#020712",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ position: "relative", zIndex: 1, maxWidth: "980px", margin: "0 auto" }}>
          {/* Exact Eyebrow from Live Page */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span
              style={{
                display: "inline-block",
                color: mintColor,
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Turn Your Ideas into Scalable Digital Solutions
            </span>

            {/* Exact Heading from Live Page */}
            <h2
              className="heading-section"
              style={{
                fontSize: "clamp(1.45rem, 2.1vw, 1.95rem)",
                fontWeight: 850,
                letterSpacing: "-0.025em",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Connect with <span className="opash-hero-gradient-text">Opash Software’s</span> Expert Development Team Today.
            </h2>
          </div>

          {/* Form Card (Exact title: "Get Your Free Quote Today") */}
          <div
            style={{
              borderRadius: "24px",
              padding: "clamp(2rem, 4vw, 3.25rem)",
              background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.8)",
              border: isLight ? "1px solid #e2e8f0" : `1px solid rgba(94, 192, 152, 0.25)`,
              boxShadow: isLight ? "0 10px 40px rgba(0,0,0,0.04)" : "0 20px 60px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h3 style={{ fontSize: "1.45rem", fontWeight: 850, letterSpacing: "-0.025em", marginBottom: "0.5rem" }}>
                Get Your Free <span className="opash-hero-gradient-text">Quote Today</span>
              </h3>
              <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.95rem" }}>
                Fill out the details below and our team will get back to you with a tailored technical estimate within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div style={{ textAlign: "center", padding: "3rem 1.5rem" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "rgba(16, 185, 129, 0.15)",
                    color: "#10b981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem auto",
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h4 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                  Quote Request Received!
                </h4>
                <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.98rem", maxWidth: "520px", margin: "0 auto 2rem auto" }}>
                  Thank you, <strong>{formData.name}</strong>. Our custom software development specialists will review your project scope and connect shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", phone: "", email: "", projectType: "Full Time", country: "United States", message: "" });
                  }}
                  style={{
                    padding: "0.75rem 1.5rem",
                    borderRadius: "10px",
                    background: mintColor,
                    color: "#ffffff",
                    border: "none",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", marginBottom: "1.5rem" }}>
                  {/* Name */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.85rem 1rem",
                        borderRadius: "10px",
                        background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
                        border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.1)",
                        color: isLight ? "#0f172a" : "#ffffff",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.85rem 1rem",
                        borderRadius: "10px",
                        background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
                        border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.1)",
                        color: isLight ? "#0f172a" : "#ffffff",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.85rem 1rem",
                        borderRadius: "10px",
                        background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
                        border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.1)",
                        color: isLight ? "#0f172a" : "#ffffff",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Your Country */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                      Your Country *
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.85rem 1rem",
                        borderRadius: "10px",
                        background: isLight ? "#f8fafc" : "rgba(10, 20, 36, 0.95)",
                        border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.1)",
                        color: isLight ? "#0f172a" : "#ffffff",
                        fontSize: "0.95rem",
                        outline: "none",
                        cursor: "pointer",
                      }}
                    >
                      {COUNTRIES_LIST.map((c) => (
                        <option key={c} value={c} style={{ background: isLight ? "#ffffff" : "#0a1424", color: isLight ? "#0f172a" : "#ffffff" }}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Type (Hourly / Part Time / Full Time from live page) */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                    Project Type *
                  </label>
                  <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                    {["Hourly", "Part Time", "Full Time"].map((pType) => {
                      const isSelected = formData.projectType === pType;
                      return (
                        <button
                          key={pType}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: pType })}
                          style={{
                            padding: "0.65rem 1.4rem",
                            borderRadius: "10px",
                            fontSize: "0.9rem",
                            fontWeight: isSelected ? 700 : 500,
                            cursor: "pointer",
                            background: isSelected
                              ? mintColor
                              : isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.05)",
                            color: isSelected ? "#ffffff" : isLight ? "#475569" : "#94a3b8",
                            border: isSelected
                              ? `1px solid ${mintColor}`
                              : isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.1)",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {pType}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "2rem" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project requirements, target goals, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
                      border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.1)",
                      color: isLight ? "#0f172a" : "#ffffff",
                      fontSize: "0.95rem",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formLoading}
                  style={{
                    width: "100%",
                    padding: "1rem",
                    borderRadius: "12px",
                    background: `linear-gradient(135deg, ${mintColor} 0%, #0284c7 100%)`,
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    border: "none",
                    cursor: formLoading ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    boxShadow: `0 8px 24px -4px ${isLight ? "rgba(0, 168, 143, 0.4)" : "rgba(94, 192, 152, 0.4)"}`,
                  }}
                >
                  <Send size={18} />
                  <span>{formLoading ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
