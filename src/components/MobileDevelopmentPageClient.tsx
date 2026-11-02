"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Smartphone,
  Layers,
  ShieldCheck,
  Zap,
  Cpu,
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

interface MobileDevelopmentPageClientProps {
  service: ServiceDetail;
}

// -----------------------------------------------------------------------------
// 1. DATA: What Mobile App Development Includes (Exact Live Data)
// -----------------------------------------------------------------------------
const INCLUDES_DATA = [
  {
    icon: Smartphone,
    title: "Native App Development",
    desc: "High-performance apps built specifically for iOS (Swift) and Android (Kotlin) platforms with platform-native responsiveness.",
    badge: "Swift & Kotlin",
  },
  {
    icon: Layers,
    title: "Cross-Platform App Development",
    desc: "Unified codebase using frameworks like Flutter or React Native for faster deployment and reduced development cost.",
    badge: "Flutter & React Native",
  },
  {
    icon: Laptop,
    title: "UI/UX Design for Mobile",
    desc: "Intuitive, modern, and responsive touch interfaces that provide a frictionless mobile user experience and high retention.",
    badge: "Figma & Micro-Interactions",
  },
  {
    icon: Network,
    title: "API & Backend Integration",
    desc: "Seamless connection with cloud backends, payment gateways, push notifications, and third-party enterprise tools.",
    badge: "Secure REST & GraphQL",
  },
  {
    icon: Rocket,
    title: "App Store & Play Store Deployment",
    desc: "Full end-to-end publishing support for Apple App Store and Google Play Store, including compliance, privacy, and approval.",
    badge: "100% Launch Guarantee",
  },
  {
    icon: RefreshCw,
    title: "Post-Launch Support & Optimization",
    desc: "Continuous performance monitoring, OS compatibility updates, security patches, and feature upgrades.",
    badge: "SLA-Backed Support",
  },
];

// -----------------------------------------------------------------------------
// 2. DATA: Mobile Technologies
// -----------------------------------------------------------------------------
interface TechItem {
  name: string;
  category:
    | "Native iOS & Android"
    | "Cross-Platform"
    | "Backend & APIs"
    | "Cloud & DB"
    | "DevOps & Tools";
}

const ALL_TECHNOLOGIES: TechItem[] = [
  // Native iOS & Android
  { name: "IOS", category: "Native iOS & Android" },
  { name: "Android", category: "Native iOS & Android" },
  { name: "Swift", category: "Native iOS & Android" },
  { name: "Kotlin", category: "Native iOS & Android" },
  { name: "SwiftUI", category: "Native iOS & Android" },
  { name: "Jetpack Compose", category: "Native iOS & Android" },

  // Cross-Platform
  { name: "React Native", category: "Cross-Platform" },
  { name: "Flutter", category: "Cross-Platform" },
  { name: "Dart", category: "Cross-Platform" },
  { name: "Expo", category: "Cross-Platform" },

  // Backend & APIs
  { name: "Node", category: "Backend & APIs" },
  { name: "Express", category: "Backend & APIs" },
  { name: "Django", category: "Backend & APIs" },
  { name: "Python", category: "Backend & APIs" },
  { name: "REST API", category: "Backend & APIs" },
  { name: "GraphQL", category: "Backend & APIs" },

  // Cloud & Databases
  { name: "Firebase", category: "Cloud & DB" },
  { name: "Supabase", category: "Cloud & DB" },
  { name: "PostgreSQL", category: "Cloud & DB" },
  { name: "MongoDB", category: "Cloud & DB" },
  { name: "aws", category: "Cloud & DB" },
  { name: "googleCloud", category: "Cloud & DB" },

  // DevOps & Tools
  { name: "Git", category: "DevOps & Tools" },
  { name: "GitLab", category: "DevOps & Tools" },
  { name: "BitBucket", category: "DevOps & Tools" },
  { name: "Docker", category: "DevOps & Tools" },
  { name: "Fastlane", category: "DevOps & Tools" },
  { name: "Xcode", category: "DevOps & Tools" },
];

// -----------------------------------------------------------------------------
// 3. DATA: Mobile Development Process (Exact Live Site Data)
// -----------------------------------------------------------------------------
const PROCESS_STEPS_LIVE = [
  {
    step: "01",
    phase: "Requirement Analysis & Scoping",
    desc: "Our mobile app development process begins with in-depth requirement analysis, where we define your app's goals, user personas, and functionality.",
    icon: Search,
  },
  {
    step: "02",
    phase: "UI/UX Wireframing & Prototyping",
    desc: "Creating intuitive, responsive wireframes and interactive prototypes that ensure frictionless user navigation and brand alignment.",
    icon: Compass,
  },
  {
    step: "03",
    phase: "Agile Iterative Development",
    desc: "Building native or cross-platform codebases in iterative Agile sprints with continuous client feedback loops and code reviews.",
    icon: Smartphone,
  },
  {
    step: "04",
    phase: "Rigorous QA & Device Matrix Testing",
    desc: "Conducting rigorous functional, automated, and regression tests across a matrix of real iOS and Android devices for 60FPS fluid touch.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    phase: "App Store & Google Play Deployment",
    desc: "Full publishing support including compliance checks, privacy manifests, metadata optimization, and app store guideline approval.",
    icon: Rocket,
  },
  {
    step: "06",
    phase: "Ongoing Maintenance & Feature Updates",
    desc: "Continuous performance monitoring, OS compatibility updates, and feature upgrades to keep your app secure and competitive.",
    icon: RefreshCw,
  },
];

// -----------------------------------------------------------------------------
// 4. DATA: Industries We Specialize In
// -----------------------------------------------------------------------------
const INDUSTRIES_LIVE = [
  { id: "fintech", name: "Fintech & Banking", icon: CreditCard },
  { id: "healthcare", name: "Health & Telemedicine", icon: HeartPulse },
  { id: "ecommerce", name: "Ecommerce & Retail", icon: ShoppingBag },
  { id: "travel", name: "Travel & Hospitality", icon: Plane },
  { id: "telecom", name: "Telecommunication", icon: Radio },
  { id: "industrial", name: "Industrial & IoT", icon: Factory },
  { id: "education", name: "EdTech & Learning", icon: GraduationCap },
  { id: "realestate", name: "Real Estate & PropTech", icon: Building2 },
  { id: "insuretech", name: "InsureTech", icon: Shield },
  { id: "social", name: "Social & Community", icon: Globe2 },
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

export default function MobileDevelopmentPageClient({
  service,
}: MobileDevelopmentPageClientProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Brand Color Tokens
  const mintColor = isLight ? "#00A88F" : "#5EC098";
  const slateColor = isLight ? "#102033" : "#476D9A";

  // State: Tech Filter Tab
  const [selectedTechCat, setSelectedTechCat] = useState<string>("All");

  // State: Active Industry Selection
  const [activeIndustryIdx, setActiveIndustryIdx] = useState<number>(0); // Fintech default

  // State: FAQ Accordion
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // State: Quote Form
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Mobile App Development",
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
      className="mobile-development-page-wrapper"
      style={{
        position: "relative",
        overflowX: "clip",
        backgroundColor: isLight ? "#f8fafc" : "#020712",
        color: isLight ? "#0f172a" : "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* ===================================================================== */}
      {/* 1. HERO SECTION: SAME TO SAME DATA, UNIQUE MOBILE DESIGN              */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "8.5rem 1.5rem 4.75rem 1.5rem",
          overflow: "hidden",
          minHeight: "88vh",
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
            <source src="/videos/video3.mp4" type="video/mp4" />
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
          .mobile-dev-hero-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.75rem;
            align-items: center;
            margin-bottom: 4rem;
          }
          @media (min-width: 1024px) {
            .mobile-dev-hero-grid {
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
          <div className="mobile-dev-hero-grid">
            {/* ── LEFT COLUMN: Headline, Positioning, CTAs & Trust Badges ─── */}
            <div style={{ textAlign: "left" }}>
              {/* Monumental Headline */}
              <div style={{ margin: "0 0 1.35rem 0" }}>
                <h1
                  style={{
                    fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', serif",
                    fontSize: "clamp(2.75rem, 5vw, 4.65rem)",
                    fontWeight: 400,
                    lineHeight: 1.08,
                    letterSpacing: "-0.015em",
                    margin: 0,
                    color: isLight ? "#0f172a" : "#ffffff",
                    textAlign: "left",
                  }}
                >
                  <span>Mobile Apps</span><br />
                  <span
                    style={{
                      display: "inline-block",
                      background: isLight
                        ? "linear-gradient(135deg, #00A88F 0%, #0284c7 100%)"
                        : "linear-gradient(135deg, #5EC098 0%, #38bdf8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: isLight
                        ? "none"
                        : "0 0 45px rgba(94, 192, 152, 0.35)",
                    }}
                  >
                    Development
                  </span>
                </h1>
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
                We build powerful, user-centric mobile applications tailored to
                meet your business needs and engage your target audience. From
                concept to deployment, our mobile app solutions are crafted to
                offer seamless performance, intuitive user experiences, and robust
                functionality.
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
                Whether you need a native iOS/Android app or a cross-platform
                solution, our team combines cutting-edge technology with
                thoughtful design to create apps that not only function flawlessly
                but also deliver value to your business and users. We ensure
                smooth integrations with third-party tools, APIs, and enterprise
                systems.
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
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    whiteSpace: "nowrap",
                    gap: "0.6rem",
                    padding: "0.95rem 2.1rem",
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                    color: "#ffffff",
                    background: isLight
                      ? "linear-gradient(135deg, #00A88F 0%, #0284c7 100%)"
                      : "linear-gradient(135deg, #5EC098 0%, #00A88F 100%)",
                    border: "none",
                    boxShadow: isLight
                      ? "0 10px 24px -4px rgba(0, 168, 143, 0.38)"
                      : "0 10px 28px -4px rgba(94, 192, 152, 0.45)",
                    textDecoration: "none",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = isLight
                      ? "0 14px 32px -4px rgba(0, 168, 143, 0.5)"
                      : "0 14px 35px -4px rgba(94, 192, 152, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = isLight
                      ? "0 10px 24px -4px rgba(0, 168, 143, 0.38)"
                      : "0 10px 28px -4px rgba(94, 192, 152, 0.45)";
                  }}
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight size={18} />
                </a>

                {/* Secondary Button */}
                <a
                  href="#technologies"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    whiteSpace: "nowrap",
                    gap: "0.6rem",
                    padding: "0.95rem 1.9rem",
                    borderRadius: "12px",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    letterSpacing: "0.02em",
                    color: isLight ? "#0f172a" : "#f1f5f9",
                    background: isLight ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.05)",
                    border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.16)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.borderColor = isLight ? "#00A88F" : "#5EC098";
                    e.currentTarget.style.background = isLight ? "#ffffff" : "rgba(255, 255, 255, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.16)";
                    e.currentTarget.style.background = isLight ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.05)";
                  }}
                >
                  <span>Explore Technologies</span>
                  <Terminal size={17} />
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
                  <span>60-120 FPS Native Performance</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                  <CheckCircle2 size={16} color={mintColor} />
                  <span>Offline-First Architecture</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                  <CheckCircle2 size={16} color={mintColor} />
                  <span>App Store & Play Store SLA</span>
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
                      opash.engine // mobile-core.v3
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
                        name: "Cross-Platform & Native Frameworks",
                        stack: "Flutter, React Native, Swift (iOS), Kotlin (Android)",
                        metric: "60-120 FPS Native",
                        desc: "Silky 120Hz gestures, unified codebases, zero frame drops",
                        icon: Smartphone,
                        color: mintColor,
                      },
                      {
                        tier: "02",
                        name: "Real-Time Sync & Mobile Backend",
                        stack: "Firebase, GraphQL, Supabase, Node.js Microservices",
                        metric: "< 15ms Latency",
                        desc: "Bi-directional WebSocket sync, push notification dispatchers",
                        icon: Zap,
                        color: isLight ? "#0284c7" : "#38bdf8",
                      },
                      {
                        tier: "03",
                        name: "Offline Storage & Native Hardware APIs",
                        stack: "SQLite, WatermelonDB, Biometrics, BLE, Push Channels",
                        metric: "100% Offline-First",
                        desc: "Zero-latency local cache, automated background conflict resolution",
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
                      { label: "Rendering Velocity", val: "120 FPS", sub: "Jank-Free Native Threading", color: mintColor, icon: Zap },
                      { label: "App Store Approval SLA", val: "100%", sub: "Apple HIG & Google Play SLA", color: isLight ? "#0284c7" : "#38bdf8", icon: Server },
                      { label: "Offline Resiliency", val: "100%", sub: "Instant Background Cloud Sync", color: isLight ? "#7c3aed" : "#a78bfa", icon: ShieldCheck },
                      { label: "Memory Footprint", val: "< 45MB", sub: "Ultra-Lightweight Native Base", color: isLight ? "#f59e0b" : "#fbbf24", icon: Clock },
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
                      { step: "01", title: "UX Wireframing & Interactive Prototypes", status: "Completed", icon: Smartphone },
                      { step: "02", title: "Native & Hybrid Sprint Development", status: "Active Sprint", icon: RefreshCw },
                      { step: "03", title: "Real Device Lab & Automated CI/CD", status: "Continuous", icon: Shield },
                      { step: "04", title: "App Store & Play Store Submissions", status: "Ready", icon: Rocket },
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
                    <span>Latency: <strong style={{ color: mintColor }}>11ms</strong></span>
                    <span>•</span>
                    <span>Frame Rate: <strong style={{ color: isLight ? "#0284c7" : "#38bdf8" }}>120 FPS</strong></span>
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
                    <span>Explore 28+ Techs</span>
                    <ChevronRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================================= */}
          {/* LUXURY BENTO METRIC DECK (Image 3 Style - Replaces Hanging Cords) */}
          {/* ================================================================= */}
          <div
            style={{
              maxWidth: "1200px",
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
                  value: "60 FPS",
                  label: "Silky Smooth Rendering",
                  sub: "Zero-Lag Native Touch Performance",
                  icon: Zap,
                },
                {
                  value: "50%",
                  label: "Code Sharing Savings",
                  sub: "Unified Flutter & React Native",
                  icon: Cpu,
                },
                {
                  value: "4.8★",
                  label: "Average Store Rating",
                  sub: "High User Retention & Satisfaction",
                  icon: Award,
                },
                {
                  value: "100%",
                  label: "App Store Approval",
                  sub: "Guaranteed Apple & Play Launch",
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
                      <div
                        style={{
                          fontSize: "clamp(2.1rem, 2.5vw, 2.6rem)",
                          fontWeight: 800,
                          lineHeight: 1,
                          letterSpacing: "-0.03em",
                          color: mintColor,
                          textShadow: isLight
                            ? "none"
                            : "0 0 24px rgba(94, 192, 152, 0.25)",
                        }}
                      >
                        {m.value}
                      </div>

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
                            isLight
                              ? "rgba(0, 168, 143, 0.2)"
                              : "rgba(94, 192, 152, 0.2)"
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
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. BENEFITS OF INVESTING IN MOBILE APP DEVELOPMENT (LIVE DATA)        */}
      {/* ===================================================================== */}
      <section
        id="benefits"
        style={{
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#ffffff" : "rgba(4, 10, 22, 0.9)",
          borderTop: isLight
            ? "1px solid #e2e8f0"
            : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div
          className="container-custom"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: "860px",
              margin: "0 auto 3.5rem auto",
            }}
          >
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

            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}
            >
              Benefits of Investing in Mobile App Development
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
              Mobile apps offer unmatched convenience, personalization, and
              direct access to customers. With billions of active smartphone
              users globally, mobile platforms are no longer optional—they’re
              essential. A well-built app enhances customer engagement,
              increases brand loyalty, and provides real-time value through
              features like push notifications, location-based services, and
              offline capabilities.
            </p>

            <p
              style={{
                color: isLight ? "#64748b" : "#94a3b8",
                fontSize: "1.02rem",
                lineHeight: 1.7,
              }}
            >
              Unlike mobile websites, apps offer superior performance, smoother
              user experiences, and direct hardware access to device features
              like cameras, GPS, haptics, and biometric security. Businesses
              that invest in dedicated mobile apps leverage deep user data
              analytics to drive higher conversion rates and superior ROI.
            </p>
          </div>

          {/* 4 Benefit Feature Highlights */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                icon: Smartphone,
                title: "Direct Customer Channel",
                tagline: "Unmatched Accessibility",
                desc: "Stay right on your customer's home screen with personalized push notifications, instant access, and offline data sync.",
              },
              {
                icon: Zap,
                title: "Hardware-Accelerated Speed",
                tagline: "Sub-Second Fluid Touch",
                desc: "Native 60FPS fluid touch gestures, biometric authentication, GPS routing, and high-performance camera integration.",
              },
              {
                icon: ShieldCheck,
                title: "Enterprise Grade Security",
                tagline: "Zero-Trust Architecture",
                desc: "End-to-end data encryption, keychain storage, OAuth2 authentication, and strict compliance with GDPR and HIPAA.",
              },
              {
                icon: Activity,
                title: "High Retention & Revenue",
                tagline: "3x Higher Conversion Rates",
                desc: "Mobile apps consistently achieve 3x higher average order values and repeat engagement compared to standard mobile web.",
              },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    padding: "2rem 1.75rem",
                    borderRadius: "18px",
                    background: isLight ? "#f8fafc" : "rgba(10, 20, 36, 0.7)",
                    border: isLight
                      ? "1px solid #e2e8f0"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "14px",
                        background: isLight
                          ? "rgba(0, 168, 143, 0.1)"
                          : "rgba(94, 192, 152, 0.15)",
                        border: isLight
                          ? "1px solid rgba(0, 168, 143, 0.25)"
                          : "1px solid rgba(94, 192, 152, 0.35)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: mintColor,
                        marginBottom: "1.25rem",
                      }}
                    >
                      <IconComp size={24} />
                    </div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        color: mintColor,
                        marginBottom: "0.35rem",
                      }}
                    >
                      {item.tagline}
                    </div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        marginBottom: "0.75rem",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: isLight ? "#64748b" : "#94a3b8",
                        fontSize: "0.92rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. OUR MOBILE APP DEVELOPMENT INCLUDES (EXACT LIVE DATA)              */}
      {/* ===================================================================== */}
      <section
        id="what-includes"
        style={{
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f8fafc" : "#020712",
          borderTop: isLight
            ? "1px solid #e2e8f0"
            : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div
          className="container-custom"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: "820px",
              margin: "0 auto 3.5rem auto",
            }}
          >
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
              Full Lifecycle Capabilities
            </span>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Our Mobile App Development Services Include
            </h2>

            <p
              style={{
                color: isLight ? "#64748b" : "#94a3b8",
                fontSize: "1.05rem",
                lineHeight: 1.65,
              }}
            >
              From native Swift/Kotlin applications to high-performance Flutter
              and React Native cross-platform apps, we deliver end-to-end
              engineering tailored to your product vision and budget.
            </p>
          </div>

          {/* 6 Capabilities Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {INCLUDES_DATA.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    padding: "2rem",
                    borderRadius: "18px",
                    background: isLight ? "#ffffff" : "rgba(8, 16, 30, 0.6)",
                    border: isLight
                      ? "1px solid #e2e8f0"
                      : "1px solid rgba(255, 255, 255, 0.07)",
                    boxShadow: isLight
                      ? "0 4px 16px rgba(0, 0, 0, 0.04)"
                      : "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.2s ease, border-color 0.2s ease",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "1.25rem",
                      }}
                    >
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          borderRadius: "12px",
                          background: isLight
                            ? "rgba(0, 168, 143, 0.1)"
                            : "rgba(94, 192, 152, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: mintColor,
                        }}
                      >
                        <IconComp size={22} />
                      </div>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          padding: "0.3rem 0.65rem",
                          borderRadius: "6px",
                          background: isLight
                            ? "rgba(0, 168, 143, 0.08)"
                            : "rgba(94, 192, 152, 0.12)",
                          color: mintColor,
                          border: isLight
                            ? "1px solid rgba(0, 168, 143, 0.2)"
                            : "1px solid rgba(94, 192, 152, 0.25)",
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 750,
                        marginBottom: "0.65rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        color: isLight ? "#64748b" : "#94a3b8",
                        fontSize: "0.93rem",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. TECHNOLOGIES WE USE (EXACT LIVE DATA)                               */}
      {/* ===================================================================== */}
      <section
        id="technologies"
        style={{
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#ffffff" : "#040a17",
          borderTop: isLight
            ? "1px solid #e2e8f0"
            : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div
          className="container-custom"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 3rem auto",
            }}
          >
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
              Technology Stack
            </span>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Technologies We Master
            </h2>

            <p
              style={{
                color: isLight ? "#64748b" : "#94a3b8",
                fontSize: "1.05rem",
                lineHeight: 1.65,
              }}
            >
              We leverage battle-tested mobile development frameworks, modern
              languages, and cloud native architectures to ensure your mobile
              apps are blazing fast, reliable, and secure.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.6rem",
              justifyContent: "center",
              marginBottom: "3rem",
            }}
          >
            {[
              "All",
              "Native iOS & Android",
              "Cross-Platform",
              "Backend & APIs",
              "Cloud & DB",
              "DevOps & Tools",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTechCat(cat)}
                style={{
                  padding: "0.55rem 1.25rem",
                  borderRadius: "30px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  background:
                    selectedTechCat === cat
                      ? isLight
                        ? "#00A88F"
                        : "#5EC098"
                      : isLight
                        ? "#f1f5f9"
                        : "rgba(255, 255, 255, 0.06)",
                  color:
                    selectedTechCat === cat
                      ? "#ffffff"
                      : isLight
                        ? "#475569"
                        : "#94a3b8",
                  transition: "all 0.2s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tech Badges Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "1rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {displayedTechs.map((tech, idx) => (
              <div
                key={idx}
                style={{
                  padding: "1.2rem 1.1rem",
                  borderRadius: "14px",
                  background: isLight ? "#f8fafc" : "rgba(10, 20, 36, 0.55)",
                  border: isLight
                    ? "1px solid #e2e8f0"
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: "all 0.2s ease",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: isLight ? "#0f172a" : "#ffffff",
                    }}
                  >
                    {tech.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: isLight ? "#64748b" : "#94a3b8",
                      marginTop: "0.15rem",
                    }}
                  >
                    {tech.category}
                  </div>
                </div>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: mintColor,
                    boxShadow: `0 0 8px ${mintColor}`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. PROCESS: 6-STEP AGILE MOBILE LIFECYCLE (EXACT LIVE DATA)            */}
      {/* ===================================================================== */}
      <section
        id="process"
        style={{
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f8fafc" : "#020712",
          borderTop: isLight
            ? "1px solid #e2e8f0"
            : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div
          className="container-custom"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 3.5rem auto",
            }}
          >
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
              Engineered Delivery
            </span>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Our Mobile App Development Process
            </h2>

            <p
              style={{
                color: isLight ? "#64748b" : "#94a3b8",
                fontSize: "1.05rem",
                lineHeight: 1.65,
              }}
            >
              We follow Agile development cycles with bi-weekly sprint
              deliverables, automated regression testing, and 99.9% uptime
              deployment readiness.
            </p>
          </div>

          {/* 6 Process Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {PROCESS_STEPS_LIVE.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  style={{
                    padding: "2.25rem 2rem",
                    borderRadius: "18px",
                    background: isLight ? "#ffffff" : "rgba(8, 16, 30, 0.6)",
                    border: isLight
                      ? "1px solid #e2e8f0"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        background: isLight
                          ? "rgba(0, 168, 143, 0.1)"
                          : "rgba(94, 192, 152, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: mintColor,
                      }}
                    >
                      <StepIcon size={22} />
                    </div>

                    <span
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: 900,
                        color: isLight
                          ? "rgba(0, 168, 143, 0.35)"
                          : "rgba(94, 192, 152, 0.35)",
                        fontFamily: "monospace",
                      }}
                    >
                      {step.step}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 750,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step.phase}
                  </h3>

                  <p
                    style={{
                      color: isLight ? "#64748b" : "#94a3b8",
                      fontSize: "0.93rem",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. DELIVERABLES & GUARANTEES                                          */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "5rem 1.5rem",
          position: "relative",
          background: isLight ? "#ffffff" : "#040b17",
          borderTop: isLight
            ? "1px solid #e2e8f0"
            : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div
          className="container-custom"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <div
            style={{
              padding: "3.5rem 2.5rem",
              borderRadius: "24px",
              background: isLight
                ? "linear-gradient(135deg, rgba(0, 168, 143, 0.06) 0%, rgba(2, 132, 199, 0.04) 100%)"
                : "linear-gradient(135deg, rgba(94, 192, 152, 0.08) 0%, rgba(45, 212, 191, 0.04) 100%)",
              border: isLight
                ? "1px solid rgba(0, 168, 143, 0.2)"
                : "1px solid rgba(94, 192, 152, 0.25)",
            }}
          >
            <div
              style={{
                textAlign: "center",
                maxWidth: "760px",
                margin: "0 auto 2.5rem auto",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  color: mintColor,
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Clear Tangibles
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)",
                  fontWeight: 800,
                }}
              >
                What You Receive With Opash
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
                "Native iOS (Swift) & Android (Kotlin) Builds",
                "Unified Flutter / React Native Codebase",
                "Figma Mobile UI/UX Design System & Assets",
                "Apple App Store & Google Play Store Submission",
                "Push Notification & Deep Linking Infrastructure",
                "Crashlytics & SLA Post-Launch Support",
              ].map((deliv, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.9rem",
                    padding: "1.1rem 1.25rem",
                    borderRadius: "14px",
                    background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.6)",
                    border: isLight
                      ? "1px solid #e2e8f0"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <CheckCircle2
                    size={20}
                    color={mintColor}
                    style={{ flexShrink: 0 }}
                  />
                  <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>
                    {deliv}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 7. INDUSTRIES WE SPECIALIZE IN                                        */}
      {/* ===================================================================== */}
      <section
        id="industries"
        style={{
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f8fafc" : "#020712",
          borderTop: isLight
            ? "1px solid #e2e8f0"
            : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div
          className="container-custom"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 3rem auto",
            }}
          >
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
              Domain Specialization
            </span>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Industries We Build Apps For
            </h2>

            <p
              style={{
                color: isLight ? "#64748b" : "#94a3b8",
                fontSize: "1.05rem",
                lineHeight: 1.65,
              }}
            >
              We bring proven sector-specific domain experience, handling
              specialized mobile compliance and unique customer workflows.
            </p>
          </div>

          {/* Industry Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {INDUSTRIES_LIVE.map((ind, idx) => {
              const IndIcon = ind.icon;
              const isActive = activeIndustryIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveIndustryIdx(idx)}
                  style={{
                    padding: "1.75rem 1.25rem",
                    borderRadius: "16px",
                    background: isActive
                      ? isLight
                        ? "rgba(0, 168, 143, 0.1)"
                        : "rgba(94, 192, 152, 0.15)"
                      : isLight
                        ? "#ffffff"
                        : "rgba(8, 16, 30, 0.6)",
                    border: isActive
                      ? isLight
                        ? "1.5px solid #00A88F"
                        : "1.5px solid #5EC098"
                      : isLight
                        ? "1px solid #e2e8f0"
                        : "1px solid rgba(255, 255, 255, 0.08)",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      margin: "0 auto 1rem auto",
                      borderRadius: "12px",
                      background: isLight
                        ? "rgba(0, 168, 143, 0.1)"
                        : "rgba(94, 192, 152, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: mintColor,
                    }}
                  >
                    <IndIcon size={24} />
                  </div>
                  <div style={{ fontSize: "1rem", fontWeight: 700 }}>
                    {ind.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#ffffff" : "#020712",
          borderTop: isLight
            ? "1px solid #e2e8f0"
            : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div
          className="container-custom"
          style={{ maxWidth: "860px", margin: "0 auto" }}
        >
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
              Got Questions?
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              Mobile App Development FAQs
            </h2>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {[
              {
                q: "Should we build with React Native/Flutter or pure Native?",
                a: "For most business, marketplace, and SaaS apps, React Native or Flutter is the superior choice because it shares 80-90% of code between iOS and Android, dramatically reducing initial cost and time-to-market. We recommend pure native (Swift / Kotlin) when you need low-level hardware or intensive compute tasks.",
              },
              {
                q: "Do you handle the Apple App Store and Google Play Store submission?",
                a: "Yes, our team handles all provisioning profiles, certificates, privacy manifests, compliance checklists, and communication with Apple and Google reviewers until your app is approved and live.",
              },
              {
                q: "How do you ensure our mobile application maintains 60 FPS performance?",
                a: "We profile memory allocations, eliminate unnecessary re-renders, leverage native bridge optimizations, compress assets, and test against a matrix of low-end and high-end devices before signing production builds.",
              },
              {
                q: "Who owns the code and intellectual property (IP)?",
                a: "You retain 100% full intellectual property ownership from Day 1. Complete Git repository access, design assets, and app store credentials are provided directly to your team.",
              },
            ].map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderRadius: "16px",
                    background: isLight ? "#f8fafc" : "rgba(8, 16, 30, 0.6)",
                    border: isLight
                      ? "1px solid #e2e8f0"
                      : "1px solid rgba(255, 255, 255, 0.08)",
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
                    <span style={{ fontSize: "1.08rem", fontWeight: 700 }}>
                      {faq.q}
                    </span>
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
                    <div
                      style={{
                        padding: "0 1.5rem 1.5rem 1.5rem",
                        color: isLight ? "#475569" : "#94a3b8",
                        fontSize: "0.98rem",
                        lineHeight: 1.65,
                      }}
                    >
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
          padding: "6rem 1.5rem",
          position: "relative",
          background: isLight ? "#ffffff" : "#040b17",
          borderTop: isLight
            ? "1px solid #e2e8f0"
            : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div
          className="container-custom"
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          <div
            style={{
              padding: "4rem 2.5rem",
              borderRadius: "28px",
              background: isLight
                ? "linear-gradient(145deg, #f8fafc 0%, #ffffff 100%)"
                : "linear-gradient(145deg, rgba(14, 27, 45, 0.95) 0%, rgba(7, 16, 28, 0.98) 100%)",
              border: isLight
                ? "1px solid #e2e8f0"
                : "1px solid rgba(94, 192, 152, 0.25)",
              boxShadow: isLight
                ? "0 20px 45px -15px rgba(0, 0, 0, 0.07)"
                : "0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 35px -10px rgba(94, 192, 152, 0.2)",
            }}
          >
            <div
              style={{
                textAlign: "center",
                maxWidth: "700px",
                margin: "0 auto 3rem auto",
              }}
            >
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
                Let&apos;s Build Together
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  marginBottom: "1rem",
                }}
              >
                Ready to Launch Your Mobile App?
              </h2>
              <p
                style={{
                  color: isLight ? "#64748b" : "#94a3b8",
                  fontSize: "1.05rem",
                  lineHeight: 1.6,
                }}
              >
                Share your mobile project requirements with our engineering team
                for an architectural estimate and 30-minute scoping roadmap.
              </p>
            </div>

            {formSubmitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "3rem 2rem",
                  borderRadius: "16px",
                  background: isLight
                    ? "rgba(0, 168, 143, 0.08)"
                    : "rgba(94, 192, 152, 0.12)",
                  border: isLight
                    ? "1px solid rgba(0, 168, 143, 0.25)"
                    : "1px solid rgba(94, 192, 152, 0.35)",
                }}
              >
                <CheckCircle2
                  size={48}
                  color={mintColor}
                  style={{ margin: "0 auto 1.25rem auto" }}
                />
                <h3
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    marginBottom: "0.5rem",
                  }}
                >
                  Consultation Request Received!
                </h3>
                <p
                  style={{
                    color: isLight ? "#475569" : "#cbd5e1",
                    maxWidth: "500px",
                    margin: "0 auto",
                  }}
                >
                  Our senior mobile solutions architect will review your project
                  and connect with you within 24 business hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleFormSubmit}
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        marginBottom: "0.5rem",
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Morgan"
                      style={{
                        width: "100%",
                        padding: "0.9rem 1.1rem",
                        borderRadius: "10px",
                        background: isLight
                          ? "#ffffff"
                          : "rgba(255, 255, 255, 0.05)",
                        border: isLight
                          ? "1px solid #cbd5e1"
                          : "1px solid rgba(255, 255, 255, 0.15)",
                        color: "inherit",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        marginBottom: "0.5rem",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@company.com"
                      style={{
                        width: "100%",
                        padding: "0.9rem 1.1rem",
                        borderRadius: "10px",
                        background: isLight
                          ? "#ffffff"
                          : "rgba(255, 255, 255, 0.05)",
                        border: isLight
                          ? "1px solid #cbd5e1"
                          : "1px solid rgba(255, 255, 255, 0.15)",
                        color: "inherit",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        marginBottom: "0.5rem",
                      }}
                    >
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+1 (555) 000-0000"
                      style={{
                        width: "100%",
                        padding: "0.9rem 1.1rem",
                        borderRadius: "10px",
                        background: isLight
                          ? "#ffffff"
                          : "rgba(255, 255, 255, 0.05)",
                        border: isLight
                          ? "1px solid #cbd5e1"
                          : "1px solid rgba(255, 255, 255, 0.15)",
                        color: "inherit",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        marginBottom: "0.5rem",
                      }}
                    >
                      Country
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "0.9rem 1.1rem",
                        borderRadius: "10px",
                        background: isLight
                          ? "#ffffff"
                          : "rgba(14, 27, 45, 0.95)",
                        border: isLight
                          ? "1px solid #cbd5e1"
                          : "1px solid rgba(255, 255, 255, 0.15)",
                        color: "inherit",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    >
                      {COUNTRIES_LIST.map((c) => (
                        <option
                          key={c}
                          value={c}
                          style={{
                            background: isLight ? "#ffffff" : "#0a1424",
                          }}
                        >
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Project Details & Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your mobile app concept, target users, desired platforms (iOS/Android/both), and timeline..."
                    style={{
                      width: "100%",
                      padding: "0.9rem 1.1rem",
                      borderRadius: "10px",
                      background: isLight
                        ? "#ffffff"
                        : "rgba(255, 255, 255, 0.05)",
                      border: isLight
                        ? "1px solid #cbd5e1"
                        : "1px solid rgba(255, 255, 255, 0.15)",
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
                    <span>
                      {formLoading
                        ? "Sending..."
                        : "Request Scoping & Consultation"}
                    </span>
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
