"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Code2,
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
  Users,
  Sparkles,
  RefreshCw,
  FileCode,
  Lock,
  Network,
  Activity,
  Award,
  ChevronDown,
  Globe2,
  Radio,
  Workflow,
  Search,
  CheckSquare,
  Rocket,
  Compass,
  Smartphone,
  Bot,
  TestTube2,
  UserCheck,
  Plane,
  Factory,
  Shield,
  CreditCard,
  ShoppingBag,
  GraduationCap,
  Building2,
  HeartPulse,
  Send,
  MessageCircle,
  ExternalLink,
  Laptop,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { ServiceDetail } from "@/data/services";

interface ServiceDetailTemplateProps {
  service: ServiceDetail;
}

// -----------------------------------------------------------------------------
// Service Hero Background Images Map
// -----------------------------------------------------------------------------
const SERVICE_HERO_IMAGES: Record<string, string> = {
  "custom-software-development": "/images/services/custom_software_3d.jpg",
  "web-development": "/images/services/web_dev_3d.jpg",
  "mobile-development": "/images/services/mobile_dev_3d.jpg",
  "ai-ml-solutions": "/images/services/ai_ml_3d.jpg",
  "saas-development": "/images/services/saas_dev_3d.jpg",
  "api-integration": "/images/services/api_integration_3d.jpg",
  "qa-testing": "/images/services/qa_testing_3d.jpg",
  "hire-developers": "/images/services/hire_dev_3d.jpg",
};

// -----------------------------------------------------------------------------
// Service Accent Configurations
// -----------------------------------------------------------------------------
interface ServiceThemeConfig {
  accent: string;
  accentSecondary: string;
  badgeText: string;
  primaryIcon: React.ElementType;
  whyPillars: {
    title: string;
    desc: string;
    metric: string;
    icon: React.ElementType;
  }[];
}

const SERVICE_THEMES: Record<string, ServiceThemeConfig> = {
  "mobile-development": {
    accent: "#00A88F",
    accentSecondary: "#38bdf8",
    badgeText: "iOS & Android Engineering",
    primaryIcon: Smartphone,
    whyPillars: [
      {
        title: "60 FPS Native Performance",
        desc: "Silky smooth user experiences across iOS and Android with optimized native rendering threads.",
        metric: "120Hz V-Sync",
        icon: Zap,
      },
      {
        title: "Offline-First Sync",
        desc: "Local database caching with background sync so users never face downtime or lost input.",
        metric: "Zero Latency",
        icon: Database,
      },
      {
        title: "App Store Approval SLA",
        desc: "Full guidance across Apple Human Interface and Google Play Developer policies with 100% approval rate.",
        metric: "100% Approved",
        icon: ShieldCheck,
      },
      {
        title: "Hardware Integration",
        desc: "Deep integration with cameras, biometric FaceID/TouchID, GPS sensors, Bluetooth, and push channels.",
        metric: "Deep Native",
        icon: Cpu,
      },
    ],
  },
  "ai-ml-solutions": {
    accent: "#6366f1",
    accentSecondary: "#00A88F",
    badgeText: "Intelligent AI Architectures",
    primaryIcon: Bot,
    whyPillars: [
      {
        title: "Predictive Precision",
        desc: "Custom trained ML models delivering verified accuracy in classification, demand forecasting, and churn detection.",
        metric: "94%+ Accuracy",
        icon: Activity,
      },
      {
        title: "100% Data Confidentiality",
        desc: "Private VPC model deployments ensuring your proprietary business data never leaks into public models.",
        metric: "Private VPC",
        icon: Lock,
      },
      {
        title: "Sub-150ms Inference",
        desc: "Optimized model quantization and GPU inference pipelines for instantaneous real-time query responses.",
        metric: "<150ms Latency",
        icon: Zap,
      },
      {
        title: "Autonomous Agentic Pipelines",
        desc: "Intelligent RPA and autonomous agents that orchestrate complex multi-step workflows without human intervention.",
        metric: "10x Automation",
        icon: Workflow,
      },
    ],
  },
  "saas-development": {
    accent: "#0284c7",
    accentSecondary: "#00A88F",
    badgeText: "Multi-Tenant Cloud SaaS",
    primaryIcon: Cloud,
    whyPillars: [
      {
        title: "Tenant Isolation Security",
        desc: "Row-Level Security (RLS) and schema-per-tenant architectures guaranteeing zero cross-tenant leakage.",
        metric: "100% Segregated",
        icon: Shield,
      },
      {
        title: "Automated Recurring Billing",
        desc: "Integrated Stripe & Lemon Squeezy subscription engines with tiered pricing, coupons, and automatic invoicing.",
        metric: "PCI-DSS Level 1",
        icon: CreditCard,
      },
      {
        title: "Elastic Auto-Scaling",
        desc: "Kubernetes & containerized workloads dynamically scaling from 10 to 1,000,000+ concurrent active users.",
        metric: "99.99% Uptime",
        icon: Rocket,
      },
      {
        title: "Real-Time Telemetry & RBAC",
        desc: "Super-admin portals with MRR cohort tracking, feature flag management, and enterprise SSO integration.",
        metric: "Role-Based ACL",
        icon: Users,
      },
    ],
  },
  "api-integration": {
    accent: "#8b5cf6",
    accentSecondary: "#00A88F",
    badgeText: "High-Throughput Gateway",
    primaryIcon: Cpu,
    whyPillars: [
      {
        title: "Sub-45ms API Latency",
        desc: "High-throughput API gateway routing with caching layers and connection pooling for instant responsiveness.",
        metric: "<45ms Median",
        icon: Zap,
      },
      {
        title: "Idempotent Webhooks",
        desc: "Dead-letter queues and exponential backoff retries guaranteeing zero lost transactions during partner outages.",
        metric: "Zero Data Loss",
        icon: RefreshCw,
      },
      {
        title: "OpenAPI & Swagger Specs",
        desc: "Interactive documentation, Postman collections, and automated SDK generators for seamless developer onboarding.",
        metric: "100% Documented",
        icon: FileCode,
      },
      {
        title: "Enterprise ERP/CRM Bridges",
        desc: "Bi-directional data synchronization with Salesforce, HubSpot, SAP, NetSuite, and custom internal systems.",
        metric: "Bi-Directional",
        icon: Network,
      },
    ],
  },
  "qa-testing": {
    accent: "#10b981",
    accentSecondary: "#00A88F",
    badgeText: "Zero-Defect Quality Engineering",
    primaryIcon: TestTube2,
    whyPillars: [
      {
        title: "99.4% Pre-Release Defect Capture",
        desc: "Multi-layered test coverage catching critical defects and regressions long before reaching production.",
        metric: "99.4% Catch Rate",
        icon: ShieldCheck,
      },
      {
        title: "85%+ Automated Coverage",
        desc: "Maintainable Cypress and Playwright test suites integrated into CI/CD for continuous quality gates on every PR.",
        metric: "85%+ Automated",
        icon: Workflow,
      },
      {
        title: "10,000+ Concurrent User Load",
        desc: "High-stress load benchmarking with JMeter and Gatling identifying database bottlenecks and memory leaks.",
        metric: "Stress Benchmarked",
        icon: Activity,
      },
      {
        title: "Cross-Device Real-Hardware Matrix",
        desc: "Testing across physical iOS, Android, macOS, and Windows configurations to ensure pixel-perfect fidelity.",
        metric: "Zero Visual Flaws",
        icon: Laptop,
      },
    ],
  },
  "hire-developers": {
    accent: "#00A88F",
    accentSecondary: "#476D9A",
    badgeText: "Vetted Senior Tech Squads",
    primaryIcon: UserCheck,
    whyPillars: [
      {
        title: "48-Hour Talent Matching",
        desc: "Immediate access to pre-vetted senior software engineers ready to onboard into your repositories in 48 hours.",
        metric: "48h Onboarding",
        icon: Clock,
      },
      {
        title: "Strict Top 3% Vetting",
        desc: "Multi-stage technical code assessments, architectural walkthroughs, and English communication screening.",
        metric: "Top 3% Vetted",
        icon: Award,
      },
      {
        title: "100% Timezone Overlap",
        desc: "Seamless synchronization with US, EU, and APAC business hours for daily standups, live pairing, and reviews.",
        metric: "Full Overlap",
        icon: Globe2,
      },
      {
        title: "2-Week Risk-Free Trial",
        desc: "Evaluate your dedicated engineer for two full weeks. If you are not completely satisfied, pay nothing.",
        metric: "100% Risk Free",
        icon: ShieldCheck,
      },
    ],
  },
};

// -----------------------------------------------------------------------------
// 10 Specialized Industries (Live Opash Standard)
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

// Helper to categorize technologies dynamically
function categorizeTech(name: string): string {
  const lower = name.toLowerCase();
  if (lower.includes("react native") || lower.includes("flutter") || lower.includes("ios") || lower.includes("android") || lower.includes("swift") || lower.includes("kotlin")) {
    return "Mobile";
  }
  if (lower.includes("react") || lower.includes("next") || lower.includes("angular") || lower.includes("html") || lower.includes("css") || lower.includes("tailwind") || lower.includes("bootstrap") || lower.includes("redux") || lower.includes("material") || lower.includes("svelte")) {
    return "Frontend";
  }
  if (lower.includes("node") || lower.includes("express") || lower.includes("django") || lower.includes("python") || lower.includes("fastapi") || lower.includes("flask") || lower.includes("nest") || lower.includes("rest") || lower.includes("graphql") || lower.includes("api") || lower.includes("swagger") || lower.includes("postman") || lower.includes("insomnia") || lower.includes("rapidapi")) {
    return "Backend & APIs";
  }
  if (lower.includes("sql") || lower.includes("postgres") || lower.includes("mongo") || lower.includes("firebase") || lower.includes("supabase") || lower.includes("snowflake") || lower.includes("bigquery") || lower.includes("redis") || lower.includes("database") || lower.includes("s3")) {
    return "Databases & Storage";
  }
  if (lower.includes("aws") || lower.includes("cloud") || lower.includes("azure") || lower.includes("docker") || lower.includes("kubernetes") || lower.includes("git") || lower.includes("terraform") || lower.includes("jenkins") || lower.includes("vercel") || lower.includes("netlify") || lower.includes("heroku") || lower.includes("actions")) {
    return "Cloud & DevOps";
  }
  if (lower.includes("jest") || lower.includes("cypress") || lower.includes("selenium") || lower.includes("playwright") || lower.includes("jmeter") || lower.includes("mocha") || lower.includes("junit") || lower.includes("pytest") || lower.includes("gatling")) {
    return "QA & Testing";
  }
  if (lower.includes("tensor") || lower.includes("keras") || lower.includes("sagemaker") || lower.includes("vertex") || lower.includes("databricks") || lower.includes("ai") || lower.includes("ml")) {
    return "AI & Machine Learning";
  }
  if (lower.includes("strapi") || lower.includes("sanity") || lower.includes("contentful")) {
    return "Headless CMS";
  }
  return "Engineering Tools";
}

export default function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Brand Color Tokens
  const mintColor = isLight ? "#00A88F" : "#5EC098";
  const slateColor = isLight ? "#102033" : "#476D9A";

  // Theme Config
  const themeConfig = SERVICE_THEMES[service.slug] || {
    accent: mintColor,
    accentSecondary: slateColor,
    badgeText: "Enterprise Technology",
    primaryIcon: Code2,
    whyPillars: [
      {
        title: "Tailored Architecture",
        desc: "Every line of code is engineered specifically to align with your business domain and workflows.",
        metric: "100% Bespoke",
        icon: Code2,
      },
      {
        title: "Enterprise Grade SLA",
        desc: "Rock-solid uptime, strict adherence to security compliance, and comprehensive code review gates.",
        metric: "99.98% Uptime",
        icon: ShieldCheck,
      },
      {
        title: "Sub-Second Velocity",
        desc: "Optimized pipelines, modern reactive state machines, and microsecond response latency.",
        metric: "<100ms Response",
        icon: Zap,
      },
      {
        title: "100% IP Ownership",
        desc: "You retain exclusive rights to source code, databases, design assets, and architectural blueprints.",
        metric: "Zero Lock-In",
        icon: Lock,
      },
    ],
  };

  const heroBgImage = SERVICE_HERO_IMAGES[service.slug] || "/images/services/custom_software_3d.jpg";

  // Categorize technologies
  const techCategories = useMemo(() => {
    const cats = new Set<string>();
    service.technologies.forEach((t) => cats.add(categorizeTech(t)));
    return ["All", ...Array.from(cats)];
  }, [service.technologies]);

  const [selectedTechCat, setSelectedTechCat] = useState<string>("All");
  const [activeIndustryIdx, setActiveIndustryIdx] = useState<number>(6); // Default Fintech

  // Filtered Techs
  const displayedTechs = useMemo(() => {
    if (selectedTechCat === "All") return service.technologies;
    return service.technologies.filter((t) => categorizeTech(t) === selectedTechCat);
  }, [selectedTechCat, service.technologies]);

  // Quote Form State
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
      className="service-detail-wrapper"
      style={{
        position: "relative",
        overflowX: "clip",
        backgroundColor: isLight ? "#f8fafc" : "#020712",
        color: isLight ? "#0f172a" : "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* ===================================================================== */}
      {/* 1. HERO SECTION WITH CINEMATIC BACKGROUND IMAGE & TELEMETRY STRIP    */}
      {/* ===================================================================== */}
      <section
        className="service-hero"
        style={{
          position: "relative",
          padding: "7.5rem 1.5rem 5rem 1.5rem",
          overflow: "hidden",
        }}
      >
        {/* Background Image Layer with Adaptive Gradient Masks */}
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
          <img
            src={heroBgImage}
            alt=""
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 25%",
              opacity: isLight ? 0.12 : 0.28,
              filter: isLight ? "saturate(1.15) contrast(1.05)" : "saturate(1.3) brightness(0.9)",
              transform: "scale(1.04)",
              maskImage: "linear-gradient(to bottom, black 0%, black 55%, rgba(0, 0, 0, 0.3) 85%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 55%, rgba(0, 0, 0, 0.3) 85%, transparent 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background: isLight
                ? `
                  radial-gradient(ellipse 80% 65% at 50% 30%, rgba(248, 250, 252, 0.45) 0%, rgba(248, 250, 252, 0.88) 60%, #f8fafc 100%),
                  linear-gradient(to bottom, rgba(248, 250, 252, 0.15) 0%, rgba(248, 250, 252, 0.95) 85%, #f8fafc 100%)
                `
                : `
                  radial-gradient(ellipse 80% 65% at 50% 30%, rgba(4, 10, 23, 0.35) 0%, rgba(4, 10, 23, 0.88) 60%, #020712 100%),
                  linear-gradient(to bottom, rgba(2, 7, 18, 0.15) 0%, rgba(2, 7, 18, 0.95) 85%, #020712 100%)
                `,
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background: isLight
                ? `
                  radial-gradient(ellipse 70% 50% at 50% 15%, rgba(0, 168, 143, 0.14) 0%, transparent 65%),
                  radial-gradient(circle 450px at 85% 30%, rgba(71, 109, 154, 0.10) 0%, transparent 70%)
                `
                : `
                  radial-gradient(ellipse 70% 50% at 50% 15%, rgba(94, 192, 152, 0.20) 0%, transparent 65%),
                  radial-gradient(circle 450px at 85% 30%, rgba(71, 109, 154, 0.15) 0%, transparent 70%)
                `,
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Seamless Hero Bottom Feather Blender */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "180px",
            background: isLight
              ? "linear-gradient(to bottom, transparent 0%, rgba(248, 250, 252, 0.85) 60%, #f8fafc 100%)"
              : "linear-gradient(to bottom, transparent 0%, rgba(2, 7, 18, 0.85) 60%, #020712 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        <div className="container-custom" style={{ position: "relative", zIndex: 1, maxWidth: "1240px", margin: "0 auto" }}>
          {/* Eyebrow Label */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: mintColor,
              }}
            >
              <Sparkles size={16} />
              <span>{service.badge} &bull; 8+ Years Expertise &bull; 100% IP Ownership</span>
            </div>
          </div>

          {/* Main Headline */}
          <div style={{ textAlign: "center", maxWidth: "980px", margin: "0 auto" }}>
            <h1
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
              }}
            >
              {service.heroHeadline || service.title}
            </h1>

            {/* Verbatim Lead Paragraph 1 */}
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                lineHeight: 1.65,
                color: isLight ? "#334155" : "#cbd5e1",
                maxWidth: "860px",
                margin: "0 auto 1.25rem auto",
                fontWeight: 450,
              }}
            >
              {service.heroSubheadline || service.shortDesc}
            </p>

            {/* Verbatim Lead Paragraph 2 */}
            {service.heroParagraph2 && (
              <p
                style={{
                  fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                  lineHeight: 1.65,
                  color: isLight ? "#64748b" : "#94a3b8",
                  maxWidth: "840px",
                  margin: "0 auto 2.5rem auto",
                }}
              >
                {service.heroParagraph2}
              </p>
            )}

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "3.5rem",
              }}
            >
              <Link
                href="#quote-section"
                className="btn-shimmer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.95rem 2rem",
                  borderRadius: "12px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#ffffff",
                  background: `linear-gradient(135deg, ${mintColor} 0%, #0284c7 100%)`,
                  boxShadow: isLight
                    ? "0 10px 25px -5px rgba(0, 168, 143, 0.4)"
                    : "0 10px 25px -5px rgba(94, 192, 152, 0.3)",
                  textDecoration: "none",
                }}
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#tech-stack"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.95rem 1.8rem",
                  borderRadius: "12px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: isLight ? "#0f172a" : "#ffffff",
                  background: isLight ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.05)",
                  border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(10px)",
                  textDecoration: "none",
                }}
              >
                <span>Explore Technologies</span>
                <Terminal size={17} />
              </Link>
            </div>

            {/* 4 Telemetry Metrics Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
                maxWidth: "960px",
                margin: "0 auto",
              }}
            >
              {service.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "1.25rem 1rem",
                    borderRadius: "14px",
                    background: isLight ? "rgba(255, 255, 255, 0.85)" : "rgba(16, 32, 51, 0.45)",
                    border: isLight ? "1px solid rgba(226, 232, 240, 0.8)" : "1px solid rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(8px)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)",
                      fontWeight: 800,
                      color: mintColor,
                      lineHeight: 1.1,
                      marginBottom: "0.35rem",
                    }}
                  >
                    {metric.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: isLight ? "#64748b" : "#94a3b8",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. WHY [SERVICE]? (Exact Live Headline & 2 Exact Live Paragraphs)     */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "5.5rem 1.5rem",
          background: isLight ? "#ffffff" : "#040b17",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
          borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "880px", margin: "0 auto 3.5rem auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: mintColor,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "0.85rem",
              }}
            >
              <Award size={16} />
              <span>Strategic Advantage</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.6vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              {service.whyTitle || `Why Choose ${service.title}?`}
            </h2>

            {/* Verbatim Why Paragraphs from Live Site */}
            {service.whyParagraphs && service.whyParagraphs.length > 0 ? (
              service.whyParagraphs.map((para, pIdx) => (
                <p
                  key={pIdx}
                  style={{
                    fontSize: "clamp(1.02rem, 1.6vw, 1.15rem)",
                    lineHeight: 1.7,
                    color: isLight ? "#475569" : "#94a3b8",
                    marginBottom: pIdx === 0 ? "1rem" : "0",
                  }}
                >
                  {para}
                </p>
              ))
            ) : (
              <p
                style={{
                  fontSize: "clamp(1.02rem, 1.6vw, 1.15rem)",
                  lineHeight: 1.7,
                  color: isLight ? "#475569" : "#94a3b8",
                }}
              >
                {service.shortDesc}
              </p>
            )}
          </div>

          {/* 4 Bento Architecture Highlights */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {themeConfig.whyPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  style={{
                    padding: "2rem 1.75rem",
                    borderRadius: "18px",
                    background: isLight ? "rgba(248, 250, 252, 0.85)" : "rgba(16, 32, 51, 0.35)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isLight ? "0 4px 12px rgba(0, 0, 0, 0.03)" : "none",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: mintColor,
                      marginBottom: "1.25rem",
                    }}
                  >
                    <PillarIcon size={24} />
                  </div>

                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: mintColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {pillar.metric}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      marginBottom: "0.75rem",
                      color: isLight ? "#0f172a" : "#f8fafc",
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      color: isLight ? "#64748b" : "#94a3b8",
                      flex: 1,
                    }}
                  >
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. WHAT [SERVICE] INCLUDES / WHO YOU CAN HIRE (Exact 6-7 Live Items)  */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "6rem 1.5rem",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3.5rem auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: mintColor,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "0.85rem",
              }}
            >
              <Layers size={16} />
              <span>Full-Spectrum Capabilities</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.6vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              {service.slug === "hire-developers"
                ? "Who You Can Hire"
                : `What ${service.title} Includes`}
            </h2>

            <p
              style={{
                fontSize: "clamp(1.02rem, 1.6vw, 1.15rem)",
                lineHeight: 1.65,
                color: isLight ? "#64748b" : "#94a3b8",
              }}
            >
              {service.slug === "hire-developers"
                ? "Access dedicated senior developers and engineering squads specialized across every tier of the modern technology stack."
                : `Comprehensive end-to-end capabilities tailored to meet your unique business objectives, user expectations, and compliance standards.`}
            </p>
          </div>

          {/* Features Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {service.features.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: "2rem",
                  borderRadius: "18px",
                  background: isLight ? "#ffffff" : "rgba(16, 32, 51, 0.4)",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isLight ? "0 4px 15px rgba(0, 0, 0, 0.03)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.25s ease, border-color 0.25s ease",
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
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.14)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: mintColor,
                      fontWeight: 800,
                      fontSize: "0.95rem",
                    }}
                  >
                    0{idx + 1}
                  </div>

                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "0.25rem 0.75rem",
                      borderRadius: "9999px",
                      background: isLight ? "rgba(71, 109, 154, 0.1)" : "rgba(71, 109, 154, 0.25)",
                      color: slateColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.badge || "Production Ready"}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                    color: isLight ? "#0f172a" : "#f8fafc",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    color: isLight ? "#64748b" : "#94a3b8",
                    flex: 1,
                  }}
                >
                  {item.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    marginTop: "1.5rem",
                    paddingTop: "1rem",
                    borderTop: isLight ? "1px solid #f1f5f9" : "1px solid rgba(255, 255, 255, 0.05)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: mintColor,
                  }}
                >
                  <CheckCircle2 size={16} />
                  <span>100% Quality Assurance Guarantee</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. TECHNOLOGIES WE DEPLOY (Tabbed Interactive Categories)              */}
      {/* ===================================================================== */}
      <section
        id="tech-stack"
        style={{
          position: "relative",
          padding: "5.5rem 1.5rem",
          background: isLight ? "#ffffff" : "#040b17",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
          borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3rem auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: mintColor,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "0.85rem",
              }}
            >
              <Cpu size={16} />
              <span>Technology Ecosystem</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.6vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              Technologies We Deploy
            </h2>

            <p
              style={{
                fontSize: "clamp(1.02rem, 1.6vw, 1.15rem)",
                lineHeight: 1.65,
                color: isLight ? "#64748b" : "#94a3b8",
              }}
            >
              Battle-tested frameworks, modern cloud infrastructure, and enterprise toolchains proven in high-concurrency production systems.
            </p>

            {/* Category Filter Tabs */}
            {techCategories.length > 2 && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "0.5rem",
                  marginTop: "2rem",
                }}
              >
                {techCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedTechCat(cat)}
                    style={{
                      padding: "0.55rem 1.25rem",
                      borderRadius: "9999px",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      border: "none",
                      background:
                        selectedTechCat === cat
                          ? mintColor
                          : isLight
                          ? "#f1f5f9"
                          : "rgba(255, 255, 255, 0.08)",
                      color:
                        selectedTechCat === cat
                          ? "#ffffff"
                          : isLight
                          ? "#475569"
                          : "#cbd5e1",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Technologies Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {displayedTechs.map((tech, idx) => (
              <div
                key={idx}
                style={{
                  padding: "1.25rem 1.1rem",
                  borderRadius: "14px",
                  background: isLight ? "#f8fafc" : "rgba(16, 32, 51, 0.35)",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: mintColor,
                  }}
                >
                  <Code2 size={18} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: isLight ? "#0f172a" : "#f8fafc",
                    }}
                  >
                    {tech}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: isLight ? "#94a3b8" : "#64748b",
                    }}
                  >
                    {categorizeTech(tech)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. [SERVICE] PROCESS (6 Chronological Sprints + Live SLA Note)        */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "6rem 1.5rem",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3.5rem auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: mintColor,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "0.85rem",
              }}
            >
              <Workflow size={16} />
              <span>Agile Execution Framework</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.6vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              {service.title} Process
            </h2>

            <p
              style={{
                fontSize: "clamp(1.02rem, 1.6vw, 1.15rem)",
                lineHeight: 1.65,
                color: isLight ? "#64748b" : "#94a3b8",
              }}
            >
              A proven, iterative roadmap delivering transparency, rigorous quality assurance, and continuous milestones from day one.
            </p>
          </div>

          {/* Process Timeline Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.75rem",
              marginBottom: "3rem",
            }}
          >
            {service.process.map((step, idx) => (
              <div
                key={idx}
                style={{
                  padding: "2rem",
                  borderRadius: "18px",
                  background: isLight ? "#ffffff" : "rgba(16, 32, 51, 0.4)",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  position: "relative",
                  boxShadow: isLight ? "0 4px 12px rgba(0, 0, 0, 0.03)" : "none",
                  display: "flex",
                  flexDirection: "column",
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
                  <span
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: mintColor,
                    }}
                  >
                    {step.step}
                  </span>

                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "0.25rem 0.65rem",
                      borderRadius: "6px",
                      background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.08)",
                      color: isLight ? "#475569" : "#cbd5e1",
                      textTransform: "uppercase",
                    }}
                  >
                    Phase 0{idx + 1}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                    color: isLight ? "#0f172a" : "#f8fafc",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    color: isLight ? "#64748b" : "#94a3b8",
                    flex: 1,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Verbatim SLA Note Card from Live Site */}
          {service.processSla && (
            <div
              style={{
                padding: "2rem 2.5rem",
                borderRadius: "16px",
                background: isLight
                  ? "linear-gradient(135deg, rgba(0, 168, 143, 0.08) 0%, rgba(71, 109, 154, 0.06) 100%)"
                  : "linear-gradient(135deg, rgba(94, 192, 152, 0.12) 0%, rgba(71, 109, 154, 0.15) 100%)",
                border: isLight ? "1px solid rgba(0, 168, 143, 0.25)" : "1px solid rgba(94, 192, 152, 0.3)",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: mintColor,
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={28} />
              </div>
              <div style={{ flex: 1, minWidth: "280px" }}>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: mintColor,
                    marginBottom: "0.25rem",
                  }}
                >
                  Opash Enterprise Delivery Guarantee
                </div>
                <div
                  style={{
                    fontSize: "0.98rem",
                    lineHeight: 1.6,
                    color: isLight ? "#334155" : "#cbd5e1",
                    fontWeight: 500,
                  }}
                >
                  {service.processSla}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. INDUSTRIES WE SPECIALIZE IN (10 Exact Live Industries)              */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "5.5rem 1.5rem",
          background: isLight ? "#ffffff" : "#040b17",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
          borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3.5rem auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: mintColor,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "0.85rem",
              }}
            >
              <Globe2 size={16} />
              <span>Domain Expertise</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.6vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                marginBottom: "1.25rem",
                lineHeight: 1.2,
              }}
            >
              Industries We Specialize In
            </h2>

            {/* Verbatim Opash 8+ Years Paragraph */}
            <p
              style={{
                fontSize: "clamp(1.02rem, 1.6vw, 1.15rem)",
                lineHeight: 1.7,
                color: isLight ? "#475569" : "#94a3b8",
              }}
            >
              Opash Software brings over 8 years of expertise in delivering tailored digital solutions for Insurance, Fintech, eCommerce, Education, and Real Estate — helping businesses overcome industry challenges and scale confidently.
            </p>
          </div>

          {/* 10 Industry Badges Grid */}
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
                  key={ind.id}
                  onClick={() => setActiveIndustryIdx(idx)}
                  style={{
                    padding: "1.5rem 1.25rem",
                    borderRadius: "16px",
                    background: isActive
                      ? isLight
                        ? "rgba(0, 168, 143, 0.1)"
                        : "rgba(94, 192, 152, 0.15)"
                      : isLight
                      ? "#f8fafc"
                      : "rgba(16, 32, 51, 0.35)",
                    border: isActive
                      ? `2px solid ${mintColor}`
                      : isLight
                      ? "1px solid #e2e8f0"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "0.85rem",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: isActive
                        ? mintColor
                        : isLight
                        ? "rgba(71, 109, 154, 0.1)"
                        : "rgba(255, 255, 255, 0.06)",
                      color: isActive ? "#ffffff" : mintColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <IndIcon size={24} />
                  </div>

                  <span
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: isActive
                        ? mintColor
                        : isLight
                        ? "#0f172a"
                        : "#f8fafc",
                    }}
                  >
                    {ind.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 7. GET YOUR FREE QUOTE TODAY (Verbatim Live Lead Generation Card)      */}
      {/* ===================================================================== */}
      <section
        id="quote-section"
        style={{
          position: "relative",
          padding: "6rem 1.5rem",
          overflow: "hidden",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div
            style={{
              borderRadius: "24px",
              background: isLight
                ? "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)"
                : "linear-gradient(135deg, #071529 0%, #0c203b 100%)",
              border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: isLight
                ? "0 20px 40px -15px rgba(0, 0, 0, 0.06)"
                : "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
              padding: "clamp(2rem, 5vw, 4rem)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              {/* Left Column: Verbatim Opash Copy */}
              <div>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: mintColor,
                    marginBottom: "1rem",
                  }}
                >
                  Turn Your Ideas into Scalable Digital Solutions
                </span>

                <h2
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    marginBottom: "1.5rem",
                    color: isLight ? "#0f172a" : "#ffffff",
                  }}
                >
                  Connect with{" "}
                  <span style={{ color: mintColor }}>Opash Software’s</span> Expert Development Team Today.
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                    color: isLight ? "#475569" : "#94a3b8",
                    marginBottom: "2rem",
                  }}
                >
                  Schedule an initial architectural review or discovery call. We provide transparent estimates, rapid developer onboarding, and NDA protection from day one.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: mintColor,
                      }}
                    >
                      <CheckCircle2 size={18} />
                    </div>
                    <span style={{ fontSize: "0.95rem", fontWeight: 600, color: isLight ? "#1e293b" : "#e2e8f0" }}>
                      Strict NDA & 100% Intellectual Property Ownership
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: mintColor,
                      }}
                    >
                      <Clock size={18} />
                    </div>
                    <span style={{ fontSize: "0.95rem", fontWeight: 600, color: isLight ? "#1e293b" : "#e2e8f0" }}>
                      Guaranteed Response Within 24 Business Hours
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: mintColor,
                      }}
                    >
                      <Users size={18} />
                    </div>
                    <span style={{ fontSize: "0.95rem", fontWeight: 600, color: isLight ? "#1e293b" : "#e2e8f0" }}>
                      Senior Full-Stack & Engineering Bench
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Lead Capture Form */}
              <div
                style={{
                  background: isLight ? "#ffffff" : "rgba(10, 24, 46, 0.8)",
                  borderRadius: "20px",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "2.25rem",
                  boxShadow: isLight ? "0 10px 25px rgba(0, 0, 0, 0.04)" : "none",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.45rem",
                    fontWeight: 700,
                    marginBottom: "1.5rem",
                    color: isLight ? "#0f172a" : "#ffffff",
                    textAlign: "center",
                  }}
                >
                  Get Your Free Quote Today
                </h3>

                {formSubmitted ? (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "2.5rem 1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.15)",
                        color: mintColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1.25rem auto",
                      }}
                    >
                      <CheckCircle2 size={32} />
                    </div>
                    <h4
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        marginBottom: "0.5rem",
                        color: isLight ? "#0f172a" : "#f8fafc",
                      }}
                    >
                      Quote Request Received!
                    </h4>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: isLight ? "#64748b" : "#94a3b8",
                        lineHeight: 1.6,
                      }}
                    >
                      Thank you for contacting Opash Software. One of our technical leads will reach out within 24 hours with scoping details.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          marginBottom: "0.35rem",
                          color: isLight ? "#334155" : "#cbd5e1",
                        }}
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Henderson"
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          borderRadius: "10px",
                          border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                          background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
                          color: isLight ? "#0f172a" : "#ffffff",
                          fontSize: "0.95rem",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            marginBottom: "0.35rem",
                            color: isLight ? "#334155" : "#cbd5e1",
                          }}
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          style={{
                            width: "100%",
                            padding: "0.75rem 1rem",
                            borderRadius: "10px",
                            border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                            background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
                            color: isLight ? "#0f172a" : "#ffffff",
                            fontSize: "0.95rem",
                            outline: "none",
                          }}
                        />
                      </div>

                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            marginBottom: "0.35rem",
                            color: isLight ? "#334155" : "#cbd5e1",
                          }}
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          style={{
                            width: "100%",
                            padding: "0.75rem 1rem",
                            borderRadius: "10px",
                            border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                            background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
                            color: isLight ? "#0f172a" : "#ffffff",
                            fontSize: "0.95rem",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            marginBottom: "0.35rem",
                            color: isLight ? "#334155" : "#cbd5e1",
                          }}
                        >
                          Project Engagement
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "0.75rem 1rem",
                            borderRadius: "10px",
                            border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                            background: isLight ? "#f8fafc" : "#0d1b2e",
                            color: isLight ? "#0f172a" : "#ffffff",
                            fontSize: "0.95rem",
                            outline: "none",
                          }}
                        >
                          <option value="Hourly">Hourly</option>
                          <option value="Part Time">Part Time</option>
                          <option value="Full Time">Full Time</option>
                        </select>
                      </div>

                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            marginBottom: "0.35rem",
                            color: isLight ? "#334155" : "#cbd5e1",
                          }}
                        >
                          Country
                        </label>
                        <select
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "0.75rem 1rem",
                            borderRadius: "10px",
                            border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                            background: isLight ? "#f8fafc" : "#0d1b2e",
                            color: isLight ? "#0f172a" : "#ffffff",
                            fontSize: "0.95rem",
                            outline: "none",
                          }}
                        >
                          {COUNTRIES_LIST.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          marginBottom: "0.35rem",
                          color: isLight ? "#334155" : "#cbd5e1",
                        }}
                      >
                        Project Details / Message *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project requirements, timeline, and goals..."
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          borderRadius: "10px",
                          border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                          background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
                          color: isLight ? "#0f172a" : "#ffffff",
                          fontSize: "0.95rem",
                          outline: "none",
                          resize: "vertical",
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formLoading}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.6rem",
                        padding: "0.95rem",
                        borderRadius: "10px",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "#ffffff",
                        background: `linear-gradient(135deg, ${mintColor} 0%, #0284c7 100%)`,
                        border: "none",
                        cursor: formLoading ? "not-allowed" : "pointer",
                        boxShadow: "0 8px 20px -4px rgba(0, 168, 143, 0.35)",
                        marginTop: "0.5rem",
                      }}
                    >
                      {formLoading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={17} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
