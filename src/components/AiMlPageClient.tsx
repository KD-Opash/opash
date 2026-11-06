"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  BrainCircuit,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Server,
  Database,
  Cloud,
  Terminal,
  ArrowRight,
  CheckCircle2,
  Check,
  Clock,
  RefreshCw,
  Lock,
  Network,
  Activity,
  Award,
  ChevronDown,
  ChevronRight,
  Globe2,
  Radio,
  Workflow,
  Search,
  Compass,
  Rocket,
  Shield,
  CreditCard,
  ShoppingBag,
  GraduationCap,
  Building2,
  HeartPulse,
  Plane,
  Factory,
  Settings,
  Send,
  MessageCircle,
  FileCode,
  Sliders,
  ExternalLink,
  Laptop,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { ServiceDetail } from "@/data/services";
import { companyData } from "@/data/company";
import WhyChooseUsCards from "@/components/WhyChooseUsCards";
import RecognisedBy from "@/components/RecognisedBy";
import { motion } from "framer-motion";
import OuiWillHeadline, { OuiWillWord, OuiWillDot } from "@/components/OuiWillHeadline";
import { TechStackShowcase } from "@/components/TechStackShowcase";
import { AnimatedIndustriesCarousel } from "@/components/AnimatedIndustriesCarousel";
import AnimatedRollingMetric from "@/components/AnimatedRollingMetric";
import ServiceCardsCarousel from "@/components/ServiceCardsCarousel";
import CustomSelect from "@/components/CustomSelect";

interface AiMlPageClientProps {
  service: ServiceDetail;
}

// -----------------------------------------------------------------------------
// 1. DATA: What AI/ML Development Includes (Exact Live Data)
// -----------------------------------------------------------------------------
const INCLUDES_DATA = [
  {
    icon: Database,
    title: "Data Strategy & Engineering",
    desc: "Collection, cleaning, transformation, and scalable ETL pipeline architecture to prepare your data for machine learning models.",
    badge: "ETL & Feature Store",
  },
  {
    icon: BrainCircuit,
    title: "Model Development & Training",
    desc: "Classification, regression, clustering, transformers, and deep neural networks trained and fine-tuned on your domain data.",
    badge: "Deep Learning & LLMs",
  },
  {
    icon: MessageCircle,
    title: "Natural Language Processing (NLP)",
    desc: "Intelligent conversational agents, automated summarization, sentiment analysis, entity extraction, and multi-lingual translation.",
    badge: "GenAI & RAG",
  },
  {
    icon: Activity,
    title: "Predictive & Prescriptive Analytics",
    desc: "Sales forecasting, churn prediction, recommendation engines, and automated risk scoring that turn historical data into foresight.",
    badge: "Predictive Engines",
  },
  {
    icon: Zap,
    title: "AI-Powered Automation",
    desc: "Intelligent process automation and robotic workflow optimization that eliminate repetitive manual business operations.",
    badge: "Workflow Automation",
  },
  {
    icon: Cloud,
    title: "Model Deployment & Integration",
    desc: "Containerized, high-throughput REST and gRPC model inference serving deployed across AWS, Azure, GCP, or on-premise VPCs.",
    badge: "Sub-150ms Serving",
  },
];

// -----------------------------------------------------------------------------
// 2. DATA: AI/ML Technologies
// -----------------------------------------------------------------------------
interface TechItem {
  name: string;
  category: "Frameworks & Libs" | "Cloud AI Platforms" | "Languages & APIs" | "Data & Storage" | "DevOps & MLOps";
}

const ALL_TECHNOLOGIES: TechItem[] = [
  // Frameworks & Libs
  { name: "TensorFlow", category: "Frameworks & Libs" },
  { name: "PyTorch", category: "Frameworks & Libs" },
  { name: "Keras", category: "Frameworks & Libs" },
  { name: "HuggingFace", category: "Frameworks & Libs" },
  { name: "Scikit-Learn", category: "Frameworks & Libs" },
  { name: "OpenCV", category: "Frameworks & Libs" },

  // Cloud AI Platforms
  { name: "Amazon SageMaker", category: "Cloud AI Platforms" },
  { name: "Google Vertex AI", category: "Cloud AI Platforms" },
  { name: "Azure ML", category: "Cloud AI Platforms" },
  { name: "Databricks", category: "Cloud AI Platforms" },
  { name: "OpenAI API", category: "Cloud AI Platforms" },

  // Languages & APIs
  { name: "Python", category: "Languages & APIs" },
  { name: "FastAPI", category: "Languages & APIs" },
  { name: "Flask", category: "Languages & APIs" },
  { name: "Django", category: "Languages & APIs" },
  { name: "REST & gRPC", category: "Languages & APIs" },

  // Data & Storage
  { name: "PostgreSQL", category: "Data & Storage" },
  { name: "Snowflake", category: "Data & Storage" },
  { name: "BigQuery", category: "Data & Storage" },
  { name: "MongoDB", category: "Data & Storage" },
  { name: "Pinecone / Chroma", category: "Data & Storage" },

  // DevOps & MLOps
  { name: "Docker", category: "DevOps & MLOps" },
  { name: "Kubernetes", category: "DevOps & MLOps" },
  { name: "MLflow", category: "DevOps & MLOps" },
  { name: "Git", category: "DevOps & MLOps" },
  { name: "GitLab", category: "DevOps & MLOps" },
];

// -----------------------------------------------------------------------------
// 3. DATA: AI/ML Development Process (Exact Live Site Data)
// -----------------------------------------------------------------------------
const PROCESS_STEPS_LIVE = [
  {
    step: "01",
    phase: "Problem & Goal Definition",
    desc: "The AI/ML process begins with Problem & Goal Definition, where we work closely with you to understand the use case, data availability, and business KPIs.",
    icon: Search,
    tags: ["KPI Definition", "Feasibility Audit"],
  },
  {
    step: "02",
    phase: "Data Collection & Preprocessing",
    desc: "Raw data is cleaned, transformed, normalized, and enriched to prepare robust feature sets for training high-accuracy machine learning pipelines.",
    icon: Database,
    tags: ["Feature Engineering", "ETL Pipelines"],
  },
  {
    step: "03",
    phase: "Model Design & Training",
    desc: "We select the most suitable algorithms—from deep neural networks to transformer architectures—and iteratively train models for peak performance.",
    icon: BrainCircuit,
    tags: ["Model Training", "Transformer Architectures"],
  },
  {
    step: "04",
    phase: "Validation & Testing",
    desc: "We rigorously evaluate model accuracy, precision, recall, F1-score, and latency benchmarks across rigorous holdout datasets.",
    icon: ShieldCheck,
    tags: ["Accuracy & F1 Scoring", "Latency Benchmarks"],
  },
  {
    step: "05",
    phase: "Deployment & Integration",
    desc: "Once validated, models are deployed as containerized microservices into your web, mobile, or enterprise cloud infrastructure for real-time inference.",
    icon: Rocket,
    tags: ["Containerized Microservices", "Real-Time Serving"],
  },
  {
    step: "06",
    phase: "Monitoring & Retraining",
    desc: "Post-deployment, we track model drift, log inference telemetry, and establish automated retraining loops to guarantee long-term accuracy and value.",
    icon: RefreshCw,
    tags: ["Drift Telemetry", "Automated Retraining"],
  },
];

// -----------------------------------------------------------------------------
// 4. DATA: Industries We Specialize In
// -----------------------------------------------------------------------------
const INDUSTRIES_LIVE = [
  { id: "fintech", name: "Fintech & Fraud Detection", icon: CreditCard },
  { id: "healthcare", name: "Health & Diagnostic AI", icon: HeartPulse },
  { id: "ecommerce", name: "Ecommerce & Recommendations", icon: ShoppingBag },
  { id: "industrial", name: "Industrial & Predictive Maintenance", icon: Factory },
  { id: "insuretech", name: "InsureTech & Risk Scoring", icon: Shield },
  { id: "education", name: "EdTech & Adaptive Learning", icon: GraduationCap },
  { id: "realestate", name: "Real Estate & Automated Valuation", icon: Building2 },
  { id: "travel", name: "Travel & Dynamic Pricing", icon: Plane },
  { id: "telecom", name: "Telecommunication & Churn AI", icon: Radio },
  { id: "logistics", name: "Logistics & Route Optimization", icon: Globe2 },
];

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

export default function AiMlPageClient({ service }: AiMlPageClientProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Brand Color Tokens
  const mintColor = isLight ? "#00A88F" : "#5EC098";
  const slateColor = isLight ? "#102033" : "#476D9A";

  // State: Tech Filter Tab
  const [selectedTechCat, setSelectedTechCat] = useState<string>("All");

  // State: Active Industry Selection
  const [activeIndustryIdx, setActiveIndustryIdx] = useState<number>(0);

  // State: FAQ Accordion
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // State: Quote Form
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "AI / ML Solution Development",
    country: "United States",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formLoading, setFormLoading] = useState<boolean>(false);
  const [heroConsoleTab, setHeroConsoleTab] = useState<"architecture" | "telemetry" | "devops">("architecture");
  const [activeTier, setActiveTier] = useState<number>(0);

  // Filtered Techs
  const displayedTechs = useMemo(() => {
    if (selectedTechCat === "All") return ALL_TECHNOLOGIES;
    return ALL_TECHNOLOGIES.filter((t) => t.category === selectedTechCat);
  }, [selectedTechCat]);

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
      className="aiml-development-page-wrapper"
      style={{
        position: "relative",
        overflowX: "clip",
        backgroundColor: isLight ? "#f8fafc" : "#020712",
        color: isLight ? "#0f172a" : "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* ===================================================================== */}
      {/* 1. HERO SECTION: SAME TO SAME DATA, UNIQUE AI/ML DESIGN               */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "clamp(5rem, 8vw, 7.5rem) clamp(1rem, 3vw, 1.5rem) clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Static Ultra-Lightweight CSS Ambient Grid (Zero CPU/GPU Overhead) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: isLight
              ? "radial-gradient(rgba(0, 168, 143, 0.12) 1px, transparent 1px)"
              : "radial-gradient(rgba(94, 192, 152, 0.12) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage:
              "radial-gradient(ellipse 80% 65% at 50% 35%, black 40%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 65% at 50% 35%, black 40%, transparent 85%)",
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
            <source src="/videos/video4.mp4" type="video/mp4" />
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

        {/* Responsive CSS for Split Hero */}
        <style jsx>{`
          .aiml-hero-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.75rem;
            align-items: center;
            margin-bottom: 0;
          }
          @media (min-width: 1024px) {
            .aiml-hero-grid {
              grid-template-columns: 1.15fr 0.85fr;
              gap: 3.5rem;
            }
          }
        `}</style>

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
          <div className="aiml-hero-grid">
            {/* ── LEFT COLUMN: Headline, Positioning, CTAs & Trust Badges ─── */}
            <div style={{ textAlign: "left" }}>
              {/* Monumental Headline */}
              <div style={{ margin: "0 0 1.25rem 0" }}>
                <OuiWillHeadline
                  style={{
                    fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', serif",
                    fontSize: "clamp(2rem, 5vw, 60px)",
                    fontWeight: 400,
                    lineHeight: 1.18,
                    letterSpacing: "-0.015em",
                    margin: 0,
                    textAlign: "left",
                    display: "block",
                  }}
                >
                  <span style={{ display: "inline-flex", alignItems: "baseline", flexWrap: "wrap" }}>
                    <OuiWillWord index={1}>AI &amp; ML</OuiWillWord>
                    <span style={{ display: "inline-flex", alignItems: "baseline", whiteSpace: "nowrap" }}>
                      <OuiWillWord index={2}>Solutions</OuiWillWord>
                      <OuiWillDot />
                    </span>
                  </span>
                  <span style={{ display: "block", width: "100%", marginTop: "0.25rem" }}>
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
                We provide end-to-end AI & Machine Learning development services that empower businesses to unlock insights, automate decisions,
                and drive innovation. Whether you&apos;re starting with raw data or looking to scale an existing model, our team of data scientists,
                ML engineers, and software developers will design intelligent systems tailored to your goals.
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
                From predictive analytics and intelligent automation to recommendation engines and computer vision, our AI/ML solutions
                are designed to be scalable, efficient, and easy to integrate into your digital ecosystem—be it a web app, mobile platform,
                or enterprise system.
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
                  <span>100% Private VPC Isolation</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                  <CheckCircle2 size={16} color={mintColor} />
                  <span>Sub-150ms Low-Latency Inference</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                  <CheckCircle2 size={16} color={mintColor} />
                  <span>Custom Fine-Tuned Models</span>
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
                      opash.engine // aiml-core.v3
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
                        name: "Generative AI, RAG & LLMs",
                        stack: "LangChain, LlamaIndex, OpenAI, Anthropic, HuggingFace",
                        metric: "< 25ms Stream",
                        desc: "Hybrid semantic search, dense vector embeddings, guardrailed agents",
                        icon: BrainCircuit,
                        color: mintColor,
                      },
                      {
                        tier: "02",
                        name: "Vector Knowledge Bases & Storage",
                        stack: "Pinecone, Qdrant, Milvus, Chroma, Pgvector",
                        metric: "99.8% Precision",
                        desc: "High-dimensional similarity indexing, metadata filtering, chunking",
                        icon: Database,
                        color: isLight ? "#0284c7" : "#38bdf8",
                      },
                      {
                        tier: "03",
                        name: "Model Training & Quantized Serving",
                        stack: "PyTorch, TensorFlow, vLLM, Triton, AWS SageMaker",
                        metric: "100% Private VPC",
                        desc: "LoRA fine-tuning, automated quantization, zero external data leakage",
                        icon: Cpu,
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
                      { label: "Prediction Accuracy", val: "94%+", sub: "Enterprise Precision Benchmarks", color: mintColor, icon: Zap },
                      { label: "Inference Query Latency", val: "< 150ms", sub: "Quantized Ultra-Low Latency", color: isLight ? "#0284c7" : "#38bdf8", icon: Server },
                      { label: "Data Confidentiality", val: "100%", sub: "Zero-Leakage Private VPC", color: isLight ? "#7c3aed" : "#a78bfa", icon: ShieldCheck },
                      { label: "Automation Multiplier", val: "10x", sub: "Autonomous Agentic Pipelines", color: isLight ? "#f59e0b" : "#fbbf24", icon: Clock },
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
                      { step: "01", title: "Data Ingestion & Sanitization Pipeline", status: "Completed", icon: Database },
                      { step: "02", title: "Model Fine-Tuning & Prompt Engineering", status: "Active Sprint", icon: RefreshCw },
                      { step: "03", title: "Validation, Red-Teaming & Bias Testing", status: "Continuous", icon: Shield },
                      { step: "04", title: "High-Throughput VPC Serving Endpoint", status: "Ready", icon: Rocket },
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
                    <span>Latency: <strong style={{ color: mintColor }}>14ms</strong></span>
                    <span>•</span>
                    <span>Precision: <strong style={{ color: isLight ? "#0284c7" : "#38bdf8" }}>94%+</strong></span>
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
                    <span>Explore 25+ Techs</span>
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
          padding: "clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)",
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
                  value: "10x",
                  label: "Automation Speed",
                  sub: "High-Throughput Model Inference",
                  icon: Zap,
                },
                {
                  value: "94%+",
                  label: "Prediction Accuracy",
                  sub: "Enterprise Precision Benchmarks",
                  icon: Cpu,
                },
                {
                  value: "<150ms",
                  label: "Inference Query Latency",
                  sub: "Ultra-Low Latency Cloud & Edge",
                  icon: Award,
                },
                {
                  value: "100%",
                  label: "Data Privacy & Compliance",
                  sub: "Zero-Leakage Enterprise VPC",
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
                      transition:
                        "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.borderColor = isLight
                        ? "rgba(0, 168, 143, 0.45)"
                        : "rgba(94, 192, 152, 0.45)";
                      e.currentTarget.style.boxShadow = isLight
                        ? "0 20px 40px -10px rgba(0, 168, 143, 0.18), inset 0 1px 0 rgba(255, 255, 255, 1)"
                        : "0 22px 45px -10px rgba(0, 0, 0, 0.7), 0 0 25px -5px rgba(94, 192, 152, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = isLight
                        ? "rgba(0, 168, 143, 0.18)"
                        : "rgba(94, 192, 152, 0.18)";
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
                          backgroundColor: isLight
                            ? "rgba(0, 168, 143, 0.08)"
                            : "rgba(94, 192, 152, 0.1)",
                          border: `1px solid ${
                            isLight ? "rgba(0, 168, 143, 0.2)" : "rgba(94, 192, 152, 0.2)"
                          }`,
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
      {/* 2. WHY AI/ML SOLUTION DEVELOPMENT? (LIVE DATA)                       */}
      {/* ===================================================================== */}
      <section
        id="benefits"
        style={{
          padding: "clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)",
          position: "relative",
          background: isLight ? "#ffffff" : "rgba(4, 10, 22, 0.9)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3.5rem auto" }}>
            <h2
              className="heading-section"
              style={{
                marginBottom: "1.25rem",
              }}
            >
              Why AI/ML Solution <span className="opash-hero-gradient-text">Development?</span>
            </h2>

            <p
              style={{
                color: isLight ? "#334155" : "#e2e8f0",
                fontSize: "1.08rem",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
                fontWeight: 500,
              }}
            >
              AI and ML technologies are revolutionizing industries by enabling systems to learn, adapt, and make data-driven decisions—without
              explicit programming. This leads to increased accuracy, automation, and competitive edge. Businesses that adopt AI/ML can better
              predict trends, personalize user experiences, optimize processes, and uncover hidden patterns in data.
            </p>

            <p
              style={{
                color: isLight ? "#64748b" : "#94a3b8",
                fontSize: "1.02rem",
                lineHeight: 1.7,
              }}
            >
              Whether you want to automate customer support, detect fraud, forecast demand, or analyze user behavior, AI/ML can help you
              move from reactive to proactive decision-making. Custom model development ensures that the solution fits your unique data,
              objectives, and industry needs.
            </p>
          </div>

          {/* Scoped CSS for Benefit Pillar Cards (Zero CPU Overhead, Pure GPU Composited) */}
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

          {/* 4 Benefit Feature Highlights (Carousel Slider) */}
          <ServiceCardsCarousel id="aiml-benefits" desktopCards={3} autoScrollInterval={3800}>
            {[
              {
                icon: BrainCircuit,
                title: "Adaptive Intelligence",
                tagline: "Autonomous Decisioning",
                desc: "Models that continuously learn from new transactions, telemetry, and customer feedback to improve accuracy over time.",
              },
              {
                icon: Zap,
                title: "10x Workflow Acceleration",
                tagline: "Automate Repetitive Ops",
                desc: "Replace manual, error-prone data entry and document analysis with high-speed automated machine perception pipelines.",
              },
              {
                icon: ShieldCheck,
                title: "Private VPC Deployment",
                tagline: "100% Data Sovereignty",
                desc: "Zero data leakage. Models run inside your private cloud infrastructure on AWS, Azure, or on-prem with strict enterprise security.",
              },
              {
                icon: Activity,
                title: "Predictive Forecasting",
                tagline: "Proactive Business Agility",
                desc: "Anticipate customer churn, market demand shifts, and equipment maintenance needs well before they impact your balance sheet.",
              },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
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
                        <IconComp size={24} />
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
                      {item.tagline}
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
                      {item.title}
                    </h3>

                    <p
                      style={{
                        color: isLight ? "#475569" : "#cbd5e1",
                        fontSize: "0.94rem",
                        lineHeight: 1.65,
                        fontWeight: 500,
                      }}
                    >
                      {item.desc}
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
                      Strategic Advantage
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
          </ServiceCardsCarousel>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. OUR AI/ML SOLUTION DEVELOPMENT INCLUDES (LIVE DATA)                */}
      {/* ===================================================================== */}
      <section
        id="what-includes"
        style={{
          padding: "clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)",
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
            transform: translateX(4px);
          }
          .custom-scope-card .card-arrow-btn {
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .custom-scope-card:hover .card-arrow-btn {
            background: rgba(94, 192, 152, 0.22) !important;
            border-color: rgba(94, 192, 152, 0.5) !important;
            transform: translateX(3px);
            box-shadow: 0 0 12px rgba(94, 192, 152, 0.3);
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
          <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 3.5rem auto" }}>
            <h2
              className="heading-section"
              style={{
                marginBottom: "1rem",
              }}
            >
              Our AI/ML Solution Development Services <span className="opash-hero-gradient-text">Include</span>
            </h2>

            <p
              style={{
                color: isLight ? "#64748b" : "#94a3b8",
                fontSize: "1.05rem",
                lineHeight: 1.65,
              }}
            >
              Comprehensive end-to-end capabilities tailored to meet your unique business objectives, user expectations, and compliance standards.
            </p>
          </div>

          {/* 6 Capabilities Cards in Interactive Carousel */}
          <ServiceCardsCarousel id="aiml-includes" desktopCards={3} autoScrollInterval={4200}>
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
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
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
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </ServiceCardsCarousel>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. TECHNOLOGIES & PLATFORMS SHOWCASE (SAME AS HOME PAGE)               */}
      {/* ===================================================================== */}
      <TechStackShowcase />

      {/* ===================================================================== */}
      {/* 5. PROCESS: 6-STEP AGILE AI/ML LIFECYCLE (LIVE DATA)                  */}
      {/* ===================================================================== */}
      <section
        id="process"
        style={{
          padding: "clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)",
          position: "relative",
          background: isLight ? "#f8fafc" : "#020712",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.5rem auto" }}>
            <h2
              className="heading-section"
              style={{
                marginBottom: "1rem",
              }}
            >
              Our AI/ML Solution Development <span className="opash-hero-gradient-text">Process</span>
            </h2>

            <p
              style={{
                color: isLight ? "#64748b" : "#94a3b8",
                fontSize: "1.05rem",
                lineHeight: 1.65,
              }}
            >
              From discovery to production monitoring, our 6-phase engineering lifecycle ensures measurable accuracy, explainability, and enterprise ROI.
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

          {/* 6 Process Cards in Interactive Carousel */}
          <ServiceCardsCarousel id="aiml-process" desktopCards={3} autoScrollInterval={4500}>
            {PROCESS_STEPS_LIVE.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
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
          </ServiceCardsCarousel>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. DELIVERABLES & GUARANTEES                                          */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)",
          position: "relative",
          background: isLight ? "#ffffff" : "#040b17",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              padding: "3.5rem 2.5rem",
              borderRadius: "24px",
              background: isLight
                ? "#f8fafc"
                : "rgba(10, 20, 36, 0.5)",
              border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 2.5rem auto" }}>
              <h2
                className="heading-section"
              >
                What You Receive With <span className="opash-hero-gradient-text">Opash AI/ML</span>
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {[
                "Production-Grade Trained AI/ML Model Weights & Pipelines",
                "High-Performance RESTful / gRPC Model Inference API",
                "Data Cleaning, ETL, and Feature Engineering Scripts",
                "Model Accuracy, Precision, Recall & F1-Score Validation Report",
                "Real-Time Telemetry, Hallucination Guardrails & Retraining Pipeline",
                "100% Full IP Ownership & Source Code Repositories",
              ].map((deliv, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.9rem",
                    padding: "1.1rem 1.25rem",
                    borderRadius: "14px",
                    background: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.03)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <CheckCircle2 size={20} color={mintColor} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 7. INDUSTRIES WE SPECIALIZE IN (ANIMATED CAROUSEL AS ON HOME PAGE)    */}
      {/* ===================================================================== */}
      <AnimatedIndustriesCarousel />

      {/* ===================================================================== */}
      {/* 8. RECOGNISED BY & WHY CHOOSE US                                      */}
      {/* ===================================================================== */}
      <RecognisedBy />
      <WhyChooseUsCards />

      {/* ===================================================================== */}
      {/* 9. FREQUENTLY ASKED QUESTIONS                                         */}
      {/* ===================================================================== */}
      <section
        id="faqs"
        style={{
          padding: "clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)",
          position: "relative",
          background: isLight ? "#ffffff" : "#020712",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2
              className="heading-section"
            >
              AI/ML Solution Development <span className="opash-hero-gradient-text">FAQs</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                q: "How do you protect our proprietary business data during AI training?",
                a: "We ensure 100% data confidentiality. We sign strict NDAs and deploy open-source models inside your own virtual private cloud (VPC) on AWS or Azure so your data never leaves your enterprise perimeter.",
              },
              {
                q: "Can your AI solutions integrate with our existing ERP or web applications?",
                a: "Yes, our team packages models into containerized FastAPI microservices that connect seamlessly with your web platforms, mobile apps, databases, or third-party enterprise tools via REST and WebSockets.",
              },
              {
                q: "How do you measure and prevent AI model hallucination or drift?",
                a: "We build automated validation harnesses with RAG guardrails, confidence score thresholds, and continuous evaluation pipelines to ensure factual, deterministic model outputs.",
              },
              {
                q: "Who owns the trained model weights and code?",
                a: "You retain 100% full intellectual property ownership from Day 1. All trained weights, dataset cleaning scripts, training pipelines, and architecture code are owned entirely by your business.",
              },
            ].map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderRadius: "16px",
                    background: isLight ? "#f8fafc" : "rgba(8, 16, 30, 0.6)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    style={{
                      width: "100%",
                      padding: "1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      color: "inherit",
                    }}
                  >
                    <span style={{ fontSize: "1.08rem", fontWeight: 700 }}>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                        color: mintColor,
                        flexShrink: 0,
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 1.5rem 1.5rem 1.5rem", color: isLight ? "#475569" : "#94a3b8", fontSize: "0.98rem", lineHeight: 1.65 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 10. QUOTE SECTION / CONSULTATION FORM                                 */}
      {/* ===================================================================== */}
      <section
        id="quote-section"
        style={{
          padding: "clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)",
          position: "relative",
          background: isLight ? "#ffffff" : "#040b17",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              padding: "clamp(1.5rem, 3.5vw, 3rem) clamp(0.85rem, 2.5vw, 2.5rem)",
              borderRadius: "28px",
              background: isLight
                ? "linear-gradient(145deg, #f8fafc 0%, #ffffff 100%)"
                : "linear-gradient(145deg, rgba(14, 27, 45, 0.95) 0%, rgba(7, 16, 28, 0.98) 100%)",
              border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(94, 192, 152, 0.25)",
              boxShadow: isLight
                ? "0 20px 45px -15px rgba(0, 0, 0, 0.07)"
                : "0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 35px -10px rgba(94, 192, 152, 0.2)",
            }}
          >
            <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3rem auto" }}>
              <h2
                className="heading-section"
                style={{
                  marginBottom: "1rem",
                }}
              >
                Ready to Deploy <span className="opash-hero-gradient-text">Enterprise AI?</span>
              </h2>
              <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "1.05rem", lineHeight: 1.6 }}>
                Share your AI/ML requirements with our senior machine learning architects for an accuracy feasibility estimate and technical roadmap.
              </p>
            </div>

            {formSubmitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "3rem 2rem",
                  borderRadius: "16px",
                  background: isLight ? "rgba(0, 168, 143, 0.08)" : "rgba(94, 192, 152, 0.12)",
                  border: isLight ? "1px solid rgba(0, 168, 143, 0.25)" : "1px solid rgba(94, 192, 152, 0.35)",
                }}
              >
                <CheckCircle2 size={48} color={mintColor} style={{ margin: "0 auto 1.25rem auto" }} />
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                  AI Consultation Request Received!
                </h3>
                <p style={{ color: isLight ? "#475569" : "#cbd5e1", maxWidth: "500px", margin: "0 auto" }}>
                  Our lead AI/ML solutions architect will review your dataset and connect with you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ maxWidth: "800px", margin: "0 auto" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div>
                    <label style={{ display: "block", fontSize: "0.88rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      style={{
                        width: "100%",
                        padding: "0.9rem 1.1rem",
                        borderRadius: "10px",
                        background: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                        border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                        color: "inherit",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.88rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena@enterprise.com"
                      style={{
                        width: "100%",
                        padding: "0.9rem 1.1rem",
                        borderRadius: "10px",
                        background: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                        border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                        color: "inherit",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.88rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      style={{
                        width: "100%",
                        padding: "0.9rem 1.1rem",
                        borderRadius: "10px",
                        background: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                        border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                        color: "inherit",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.88rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                      Country
                    </label>
                    <CustomSelect
                      value={formData.country}
                      onChange={(val) => setFormData({ ...formData, country: val })}
                      options={COUNTRIES_LIST}
                      placeholder="Select country"
                      required
                      style={{
                        padding: "0.85rem 1.1rem",
                        borderRadius: "10px",
                        background: isLight ? "#ffffff" : "rgba(14, 27, 45, 0.95)",
                        border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                        color: "inherit",
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <label style={{ display: "block", fontSize: "0.88rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                    Project Details & Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your AI/ML vision, dataset type, accuracy goals, and target cloud platform..."
                    style={{
                      width: "100%",
                      padding: "0.9rem 1.1rem",
                      borderRadius: "10px",
                      background: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                      border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                      color: "inherit",
                      fontSize: "0.95rem",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                <div style={{ textAlign: "center" }}>
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="btn-shimmer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "1.05rem 2.8rem",
                      borderRadius: "12px",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      color: "#ffffff",
                      background: isLight
                        ? "linear-gradient(135deg, #00A88F 0%, #0284c7 100%)"
                        : "linear-gradient(135deg, #5EC098 0%, #00A88F 100%)",
                      border: "none",
                      cursor: formLoading ? "not-allowed" : "pointer",
                      boxShadow: isLight
                        ? "0 10px 25px -5px rgba(0, 168, 143, 0.4)"
                        : "0 10px 25px -5px rgba(94, 192, 152, 0.45)",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <span>{formLoading ? "Sending..." : "Request AI Scoping & Consultation"}</span>
                    <Send size={18} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
