"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  X,
  Clock,
  Users,
  Sparkles,
  RefreshCw,
  FileCode,
  Lock,
  Network,
  GitBranch,
  Activity,
  Award,
  ChevronDown,
  Globe2,
  HardDrive,
  Radio,
  Workflow,
  Search,
  CheckSquare,
  ChevronRight,
  Calculator,
  Rocket,
  FileText,
  Compass,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import ContactForm from "./ContactForm";
import { companyData } from "@/data/company";
import { ServiceDetail } from "@/data/services";

interface CustomSoftwarePageClientProps {
  service: ServiceDetail;
}

// -----------------------------------------------------------------------------
// Interactive Architectural Topology Definitions
// -----------------------------------------------------------------------------
interface ArchitectureNode {
  id: string;
  name: string;
  role: string;
  protocol: string;
  latency: string;
  specs: string[];
}

interface ArchitectureTopology {
  id: string;
  title: string;
  tagline: string;
  accent: string;
  nodes: ArchitectureNode[];
}

const ARCHITECTURE_TOPOLOGIES: ArchitectureTopology[] = [
  {
    id: "microservices",
    title: "Event-Driven Microservices",
    tagline: "Autonomous service domains powered by Kafka & gRPC with zero single point of failure",
    accent: "#00bbab",
    nodes: [
      {
        id: "gateway",
        name: "Cloud Edge API Gateway",
        role: "Kong / Envoy Edge Proxy",
        protocol: "HTTP/3 & TLS 1.3",
        latency: "sub-2ms",
        specs: ["Dynamic Rate-Limiting", "OAuth2 / JWT Token Verification", "Global Anycast Routing"],
      },
      {
        id: "eventbus",
        name: "Distributed Event Stream",
        role: "Apache Kafka / Redpanda Cluster",
        protocol: "Binary TCP Protocol",
        latency: "sub-5ms throughput",
        specs: ["Partitioned Pub/Sub Topics", "Strict Ordering Guarantee", "At-Least-Once Delivery SLA"],
      },
      {
        id: "core-service",
        name: "Core Domain Microservices",
        role: "Go / Nest.js Autonomous Pods",
        protocol: "Internal gRPC / Protobuf",
        latency: "sub-12ms p99",
        specs: ["Hexagonal Domain Architecture", "Independent CI/CD Lifecycles", "Horizontal Pod Auto-Scaling"],
      },
      {
        id: "data-tier",
        name: "Active-Active Sharded DB",
        role: "PostgreSQL Partitioned Cluster",
        protocol: "SSL Connection Pooling",
        latency: "sub-8ms query execution",
        specs: ["Zero-Downtime Read Replicas", "Automated Point-in-Time Recovery", "Transparent Row Encryption"],
      },
    ],
  },
  {
    id: "multi-tenant-saas",
    title: "Multi-Tenant Enterprise SaaS",
    tagline: "Bank-grade tenant data isolation, granular RBAC, and real-time elastic billing",
    accent: "#38bdf8",
    nodes: [
      {
        id: "auth-mesh",
        name: "Zero-Trust Identity Fabric",
        role: "OIDC & SAML 2.0 SSO Engine",
        protocol: "OAuth2 / OpenID Connect",
        latency: "sub-3ms token exchange",
        specs: ["SCIM Directory Sync", "Multi-Factor Biometric Enforcement", "Audited Role-Based Access"],
      },
      {
        id: "tenant-router",
        name: "Tenant Context Resolver",
        role: "Dynamic Multi-Tenant Router",
        protocol: "Fastify / Next.js Edge",
        latency: "sub-1ms resolution",
        specs: ["Custom Domain SSL Handshake", "Tenant-Level Feature Flags", "Isolated Rate Limiting"],
      },
      {
        id: "tenant-db",
        name: "Isolated Schema Storage",
        role: "PostgreSQL Schema-Per-Tenant",
        protocol: "Encrypted Wire & Disk",
        latency: "sub-6ms p95",
        specs: ["Hardware Tenant Sandboxing", "GDPR Automated Erasure", "Independent Backup Schedules"],
      },
      {
        id: "telemetry",
        name: "Tenant Audit & APM",
        role: "OpenTelemetry & ClickHouse",
        protocol: "gRPC Streaming Telemetry",
        latency: "Real-time sync",
        specs: ["Immutable Audit Logging", "Per-Tenant Usage Metering", "Anomaly Detection Alerts"],
      },
    ],
  },
  {
    id: "legacy-modernization",
    title: "Strangler-Fig Monolith Modernization",
    tagline: "Deconstruct legacy enterprise systems piece by piece with 100% operational uptime",
    accent: "#818cf8",
    nodes: [
      {
        id: "strangler-proxy",
        name: "Traffic Interceptor Proxy",
        role: "Intelligent Weighted Reverse Proxy",
        protocol: "HTTPS / WebSocket",
        latency: "sub-2ms proxy routing",
        specs: ["Shadow Traffic Duplication", "Canary Deployment Gates", "Automatic Instant Rollback"],
      },
      {
        id: "legacy-bridge",
        name: "Legacy Monolith Bridge",
        role: "Transactional Outbox & CDC Adapter",
        protocol: "Debezium / Kafka CDC",
        latency: "Near-instant replication",
        specs: ["Real-Time Change Data Capture", "Bi-Directional Schema Sync", "Zero Database Lock contention"],
      },
      {
        id: "modern-service",
        name: "New Cloud-Native Domain",
        role: "Containerized Microservice Pods",
        protocol: "REST & GraphQL APIs",
        latency: "400% throughput increase",
        specs: ["Clean Domain Models", "100% Automated Test Coverage", "Kubernetes Native Scalability"],
      },
      {
        id: "modern-storage",
        name: "Target Cloud Data Lake",
        role: "Cloud-Native Managed Database",
        protocol: "Direct Secure Connect",
        latency: "Sub-second analytical queries",
        specs: ["Automated Data Hygiene", "Columnar Analytics Engine", "Automated Multi-Region Failover"],
      },
    ],
  },
];

// -----------------------------------------------------------------------------
// Interactive Tech Stack Categories
// -----------------------------------------------------------------------------
const TECH_STACK_TABS = [
  {
    category: "Backend & Microservices",
    items: [
      { name: "Node.js / Nest.js", role: "High-concurrency enterprise microservices", tag: "Microservices", badge: "Primary" },
      { name: "Go (Golang)", role: "Ultra-low-latency distributed network engines", tag: "High Throughput", badge: "Engine" },
      { name: "Python / FastAPI", role: "High-performance asynchronous data APIs", tag: "Data & ML", badge: "Modern" },
      { name: "TypeScript", role: "End-to-end strict type-safety across stack", tag: "Standard", badge: "Strict" },
      { name: "gRPC & Protobuf", role: "Binary inter-service communication", tag: "Low Latency", badge: "Fast" },
    ],
  },
  {
    category: "Frontend & Web Edge",
    items: [
      { name: "Next.js & React", role: "Sub-second hybrid SSR/SSG web platforms", tag: "Web Edge", badge: "Tier 1" },
      { name: "TypeScript", role: "Strict compile-time UI state validation", tag: "Reliability", badge: "Typed" },
      { name: "Tailwind & Vanilla CSS", role: "Hardware-accelerated fluid interfaces", tag: "60 FPS UI", badge: "Fluid" },
      { name: "React Native", role: "Cross-platform mobile apps with native bridges", tag: "iOS & Android", badge: "Native" },
    ],
  },
  {
    category: "Databases & In-Memory",
    items: [
      { name: "PostgreSQL", role: "ACID-compliant partitioned relational data", tag: "Relational", badge: "Primary" },
      { name: "Redis Cluster", role: "Sub-millisecond caching & distributed locks", tag: "In-Memory", badge: "Cache" },
      { name: "ClickHouse", role: "Columnar analytical queries over billions of rows", tag: "Big Data", badge: "Analytics" },
      { name: "MongoDB", role: "Flexible document stores for polymorphic payloads", tag: "NoSQL", badge: "Flexible" },
    ],
  },
  {
    category: "Cloud, DevOps & Security",
    items: [
      { name: "Amazon Web Services (AWS)", role: "ECS, EKS, RDS, Lambda, SQS, CloudFront", tag: "Cloud Leader", badge: "Certified" },
      { name: "Google Cloud Platform (GCP)", role: "GKE, Cloud Run, BigQuery, IAM Security", tag: "Cloud Native", badge: "Cloud" },
      { name: "Docker & Kubernetes", role: "Container orchestration & auto-healing pods", tag: "Orchestration", badge: "DevOps" },
      { name: "GitHub Actions & ArgoCD", role: "Automated GitOps & zero-downtime rollouts", tag: "CI / CD", badge: "GitOps" },
    ],
  },
];

// -----------------------------------------------------------------------------
// Comparison Matrix Data
// -----------------------------------------------------------------------------
const COMPARISON_ROWS = [
  {
    feature: "Intellectual Property & Code Ownership",
    opash: "100% Client-Owned from Day 1. Full Git repos, docs, & patents.",
    offShelf: "Zero IP ownership. Locked inside proprietary cloud vendor.",
    freelance: "Vague contracts, unvetted IP, and frequent code disputes.",
  },
  {
    feature: "Architecture Scalability & Limits",
    opash: "Unlimited horizontal cloud scale built specifically for your domain.",
    offShelf: "Hard API rate-limits and exponential per-seat pricing penalties.",
    freelance: "Unstructured scripts that collapse under high concurrent traffic.",
  },
  {
    feature: "Workflow Tailoring & Precision",
    opash: "Modeled 100% around your exact internal operations and compliance.",
    offShelf: "Forces your enterprise to change its operational processes.",
    freelance: "Generic templates with minimal business logic understanding.",
  },
  {
    feature: "Security, SOC2 & Data Sovereignty",
    opash: "Bank-grade encryption, zero-trust RBAC, and dedicated DB instances.",
    offShelf: "Shared multitenancy with unknown co-hosted third-party data.",
    freelance: "Frequent security holes, unpatched dependencies, zero audits.",
  },
  {
    feature: "Post-Launch Warranty & Support SLA",
    opash: "Dedicated SLA guarantees, overlapping time zones, and CI/CD maintenance.",
    offShelf: "Standard ticket queue with generic tier-1 support desks.",
    freelance: "High abandonment risk once final milestone payment is cleared.",
  },
];

// -----------------------------------------------------------------------------
// Interactive 5-Stage Lifecycle Governance Definitions
// -----------------------------------------------------------------------------
interface LifecycleStageData {
  step: string;
  phase: string;
  duration: string;
  title: string;
  tagline: string;
  desc: string;
  accent: string;
  iconName: "Compass" | "Layers" | "Terminal" | "ShieldCheck" | "Rocket";
  leadRole: string;
  gate: string;
  deliverables: string[];
  keyActions: string[];
  clientTouchpoint: string;
}

const LIFECYCLE_STAGES: LifecycleStageData[] = [
  {
    step: "01",
    phase: "PHASE 01",
    duration: "Weeks 1–2",
    title: "Discovery & Blueprinting",
    tagline: "First-principles domain modeling, tech feasibility & risk elimination",
    desc: "We analyze your business logic, workflow dependencies, transaction loads, data privacy requirements, and compliance frameworks to engineer a deterministic architecture plan.",
    accent: "#00bbab",
    iconName: "Compass",
    leadRole: "Principal Enterprise Architect",
    gate: "Architecture & SLA Sign-Off Gate",
    deliverables: [
      "Software Requirements Spec (SRS)",
      "Domain ER & Schema Blueprint",
      "SOC-2 / HIPAA Compliance Matrix",
      "Guaranteed Fixed-Sprint SLA",
    ],
    keyActions: [
      "Interviews with core domain stakeholders",
      "Legacy dependency mapping & gap analysis",
      "Data ingestion & traffic concurrency modeling",
    ],
    clientTouchpoint: "Daily interactive workshops & shared Miro architecture whiteboard",
  },
  {
    step: "02",
    phase: "PHASE 02",
    duration: "Weeks 3–4",
    title: "Architecture & UI/UX Prototyping",
    tagline: "High-fidelity interactive prototypes & strict API contracts",
    desc: "Crafting wireframes, micro-interaction systems, and schema contracts. We decouple frontend and backend teams using strict OpenAPI/GraphQL specifications from day one.",
    accent: "#38bdf8",
    iconName: "Layers",
    leadRole: "Staff Product Designer & API Architect",
    gate: "Interactive Prototype Usability Gate",
    deliverables: [
      "Click-Through Figma Prototype",
      "OpenAPI 3.0 & Protobuf Contracts",
      "Microservice Boundary Auth Models",
      "Terraform Infrastructure Scaffolding",
    ],
    keyActions: [
      "Design system typography & dark/light tokens",
      "Component interaction states & user flows",
      "Mock API server generation for early testing",
    ],
    clientTouchpoint: "Bi-weekly design review & recorded Figma prototype walkthrough",
  },
  {
    step: "03",
    phase: "PHASE 03",
    duration: "Weeks 5–10",
    title: "Agile Sprint Execution",
    tagline: "Bi-weekly working software releases with 100% Git visibility",
    desc: "Two-week agile sprints where code is continuously written, peer-reviewed, and deployed to isolated staging environments. You inspect real software every 14 days.",
    accent: "#10b981",
    iconName: "Terminal",
    leadRole: "Senior Scrum Engineering Team",
    gate: "Bi-Weekly Sprint Demo Acceptance",
    deliverables: [
      "Bi-Weekly Staging Releases with Demos",
      "Direct GitHub/GitLab PR Visibility",
      "Automated Unit & Integration Tests (>90%)",
      "Isolated Staging Sandbox for Client QA",
    ],
    keyActions: [
      "Bi-weekly sprint planning & backlog grooming",
      "Automated CI/CD linting & regression checks",
      "Continuous peer code review by Staff Engineers",
    ],
    clientTouchpoint: "Live demo every other Thursday & direct shared Slack/Teams channel",
  },
  {
    step: "04",
    phase: "PHASE 04",
    duration: "Weeks 11–12",
    title: "Automated QA & Security Audits",
    tagline: "Chaos engineering, penetration tests & high-concurrency benchmarks",
    desc: "We stress-test your system against 100,000+ simulated concurrent requests, execute OWASP Top 10 penetration audits, and verify zero critical vulnerabilities before production.",
    accent: "#818cf8",
    iconName: "ShieldCheck",
    leadRole: "Staff QA Engineer & Cyber Security Auditor",
    gate: "Zero-Vulnerability Security Sign-Off",
    deliverables: [
      "OWASP Top 10 Pen-Test Audit Report",
      "Concurrency Stress Benchmark (100k+ RPS)",
      "Zero Critical Vulnerability Guarantee",
      "Disaster Recovery & Multi-Region Plan",
    ],
    keyActions: [
      "Static & dynamic code analysis (SonarQube)",
      "Automated load testing with k6 & Locust",
      "Role-based permission & data leakage validation",
    ],
    clientTouchpoint: "Detailed security report walkthrough & hardening executive debrief",
  },
  {
    step: "05",
    phase: "PHASE 05",
    duration: "Week 13+",
    title: "Cloud Deployment & Handover",
    tagline: "Zero-downtime blue-green rollout with 100% legal IP transfer",
    desc: "Production launch with zero downtime, full observability dashboards, root Git repository handover, and comprehensive team runbooks with post-launch SLA coverage.",
    accent: "#f59e0b",
    iconName: "Rocket",
    leadRole: "DevOps Director & Client Solutions Architect",
    gate: "Production Cutover & Full Legal IP Transfer",
    deliverables: [
      "Zero-Downtime Blue/Green Production Cutover",
      "100% Git Repository & License Handover",
      "Full Architectural Runbooks & Video Training",
      "24/7 Production SLA & Post-Launch Support",
    ],
    keyActions: [
      "Production DNS & SSL switchover with zero blip",
      "CloudWatch / DataDog monitoring & alerts setup",
      "Hands-on engineering transition sessions with your team",
    ],
    clientTouchpoint: "Go-live war room coordination & engineering handover workshops",
  },
];

export default function CustomSoftwarePageClient({ service }: CustomSoftwarePageClientProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // State: Delivery Lifecycle Stage Selection
  const [activeLifecycleStage, setActiveLifecycleStage] = useState<number>(0);

  // State: Interactive Architecture Explorer
  const [activeTopologyId, setActiveTopologyId] = useState<string>("microservices");
  const [selectedNodeId, setSelectedNodeId] = useState<string>("gateway");

  // State: Interactive Tech Stack Tab
  const [activeTechTab, setActiveTechTab] = useState<number>(0);

  // State: Interactive Scope & Timeline Estimator
  const [estimatorType, setEstimatorType] = useState<string>("enterprise");
  const [estimatorScale, setEstimatorScale] = useState<string>("medium");
  const [estimatorCompliance, setEstimatorCompliance] = useState<string>("soc2");

  // State: FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Active Topology
  const activeTopology = useMemo(
    () => ARCHITECTURE_TOPOLOGIES.find((t) => t.id === activeTopologyId) || ARCHITECTURE_TOPOLOGIES[0],
    [activeTopologyId]
  );

  const activeNode = useMemo(
    () => activeTopology.nodes.find((n) => n.id === selectedNodeId) || activeTopology.nodes[0],
    [activeTopology, selectedNodeId]
  );

  // Estimator Calculations
  const calculatedEstimate = useMemo(() => {
    let weeksBase = 8;
    let sprints = 4;
    let stack = "Next.js + Nest.js + PostgreSQL + Docker";

    if (estimatorType === "enterprise") {
      weeksBase += 4;
      sprints += 2;
      stack = "Microservices (Go / Nest.js) + Event-Bus + Sharded PostgreSQL + Kubernetes";
    } else if (estimatorType === "saas") {
      weeksBase += 2;
      sprints += 1;
      stack = "Next.js Edge + Multi-Tenant Node.js + Stripe Billing + Redis";
    } else if (estimatorType === "modernization") {
      weeksBase += 5;
      sprints += 3;
      stack = "Strangler-Fig Proxy + Microservices + Debezium CDC + Cloud Migration";
    }

    if (estimatorScale === "large") {
      weeksBase += 3;
      sprints += 2;
    } else if (estimatorScale === "small") {
      weeksBase = Math.max(6, weeksBase - 2);
      sprints = Math.max(3, sprints - 1);
    }

    if (estimatorCompliance === "soc2" || estimatorCompliance === "hipaa") {
      weeksBase += 1;
    }

    return {
      weeks: `${weeksBase}–${weeksBase + 3} Weeks`,
      sprints: `${sprints} Sprints (Bi-Weekly Demos)`,
      stack,
      deliverablesCount: "14 Key Production Artifacts",
    };
  }, [estimatorType, estimatorScale, estimatorCompliance]);

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
      {/* 1. HERO SECTION: BESPOKE ARCHITECTURE & ENTERPRISE VELOCITY           */}
      {/* ===================================================================== */}
      <section
        className="custom-software-hero"
        style={{
          position: "relative",
          padding: "7.5rem 1.5rem 5rem 1.5rem",
          overflow: "hidden",
        }}
      >
        {/* Hero Background Image with Atmospheric Gradient Mask */}
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
            src="/images/services/custom_software_3d.jpg"
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
          {/* Radial Spotlight & Vignette Fade Mask */}
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
          {/* Multi-stop Ambient Spotlights (Full bleed inset: 0, zero box-clipping lines) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: isLight
                ? `
                  radial-gradient(ellipse 70% 50% at 50% 15%, rgba(0, 168, 143, 0.12) 0%, transparent 65%),
                  radial-gradient(circle 450px at 85% 30%, rgba(14, 165, 233, 0.08) 0%, transparent 70%)
                `
                : `
                  radial-gradient(ellipse 70% 50% at 50% 15%, rgba(0, 187, 171, 0.22) 0%, transparent 65%),
                  radial-gradient(circle 450px at 85% 30%, rgba(56, 189, 248, 0.12) 0%, transparent 70%)
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
                padding: "0.45rem 1.15rem",
                borderRadius: "9999px",
                background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.12)",
                border: isLight ? "1px solid rgba(0, 168, 143, 0.25)" : "1px solid rgba(0, 187, 171, 0.35)",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: isLight ? "#008a75" : "#2dd4bf",
              }}
            >
              <Sparkles size={14} />
              <span>Bespoke Engineering · 100% IP Ownership · Zero Vendor Lock-In</span>
            </div>
          </div>

          {/* Main Headline */}
          <div style={{ textAlign: "center", maxWidth: "980px", margin: "0 auto" }}>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5.2vw, 4.4rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
              }}
            >
              Custom Software Engineered for{" "}
              <span
                style={{
                  color: isLight ? "#008a75" : "#2dd4bf",
                }}
              >
                Sub-Second Latency
              </span>{" "}
              & Enterprise Autonomy
            </h1>

            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                color: isLight ? "#475569" : "#94a3b8",
                lineHeight: 1.65,
                maxWidth: "820px",
                margin: "0 auto 2.5rem auto",
              }}
            >
              Eliminate the operational bottlenecks and recurring licensing penalties of generic off-the-shelf software. We engineer scalable microservices, multi-tenant SaaS engines, and bespoke business systems tailored precisely to your operational DNA.
            </p>

            {/* Hero Action CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                marginBottom: "3.5rem",
              }}
            >
              <Link
                href="/get-a-quote"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.95rem 2rem",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #00bbab 0%, #0284c7 100%)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "1rem",
                  boxShadow: "0 8px 24px -4px rgba(0, 187, 171, 0.4)",
                  textDecoration: "none",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <span>Schedule Architecture Review</span>
                <ArrowRight size={17} />
              </Link>

              <a
                href="#architecture-explorer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.95rem 1.85rem",
                  borderRadius: "12px",
                  background: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                  color: isLight ? "#0f172a" : "#f8fafc",
                  border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.12)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                }}
              >
                <Cpu size={17} style={{ color: isLight ? "#008a75" : "#2dd4bf" }} />
                <span>Explore Live Topologies</span>
              </a>
            </div>

            {/* Enterprise Trust Telemetry Strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.25rem",
                maxWidth: "1080px",
                margin: "0 auto",
              }}
            >
              {service.metrics.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "1.25rem 1rem",
                    borderRadius: "14px",
                    background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.65)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isLight ? "0 4px 12px rgba(0, 0, 0, 0.04)" : "none",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2.1rem",
                      fontWeight: 800,
                      color: isLight ? "#008a75" : "#2dd4bf",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                      marginBottom: "0.35rem",
                    }}
                  >
                    {m.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.86rem",
                      fontWeight: 600,
                      color: isLight ? "#64748b" : "#94a3b8",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. INTERACTIVE ARCHITECTURAL TOPOLOGY EXPLORER (The WOW Showcase)      */}
      {/* ===================================================================== */}
      <section
        id="architecture-explorer"
        style={{
          padding: "5rem 1.5rem",
          position: "relative",
          borderTop: "none",
          background: isLight ? "#f8fafc" : "#020712",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 3.5rem auto" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.35rem 0.95rem",
                borderRadius: "9999px",
                background: isLight ? "rgba(2, 132, 199, 0.1)" : "rgba(56, 189, 248, 0.12)",
                border: isLight ? "1px solid rgba(2, 132, 199, 0.25)" : "1px solid rgba(56, 189, 248, 0.3)",
                color: isLight ? "#0284c7" : "#38bdf8",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Interactive Topology Explorer
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Enterprise Systems We Architect & Deploy
            </h2>
            <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.05rem", lineHeight: 1.6 }}>
              Select an architectural blueprint below to inspect the data flow, protocols, security policies, and performance targets engineered into every layer.
            </p>

            {/* Topology Switcher Tabs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.6rem",
                marginTop: "2rem",
              }}
            >
              {ARCHITECTURE_TOPOLOGIES.map((topo) => {
                const isActive = topo.id === activeTopologyId;
                return (
                  <button
                    key={topo.id}
                    type="button"
                    onClick={() => {
                      setActiveTopologyId(topo.id);
                      setSelectedNodeId(topo.nodes[0].id);
                    }}
                    style={{
                      padding: "0.75rem 1.45rem",
                      borderRadius: "12px",
                      background: isActive
                        ? isLight
                          ? "#ffffff"
                          : "rgba(0, 187, 171, 0.18)"
                        : isLight
                        ? "rgba(255, 255, 255, 0.6)"
                        : "rgba(255, 255, 255, 0.04)",
                      border: isActive
                        ? `2px solid ${topo.accent}`
                        : isLight
                        ? "1px solid #cbd5e1"
                        : "1px solid rgba(255, 255, 255, 0.08)",
                      color: isActive ? (isLight ? "#0f172a" : "#ffffff") : isLight ? "#64748b" : "#94a3b8",
                      fontWeight: isActive ? 700 : 500,
                      fontSize: "0.95rem",
                      cursor: "pointer",
                      boxShadow: isActive ? `0 4px 16px ${topo.accent}25` : "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {topo.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Topology Interactive Stage */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.15fr",
              gap: "2.5rem",
              borderRadius: "20px",
              background: isLight ? "#ffffff" : "rgba(8, 18, 34, 0.75)",
              border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.1)",
              padding: "2.5rem",
              boxShadow: isLight ? "0 10px 30px rgba(0, 0, 0, 0.05)" : "0 20px 40px rgba(0, 0, 0, 0.4)",
            }}
            className="dual-grid"
          >
            {/* Left: Architecture Node Pipeline */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: activeTopology.accent,
                    boxShadow: `0 0 10px ${activeTopology.accent}`,
                  }}
                />
                <h3 style={{ fontSize: "1.45rem", fontWeight: 700 }}>{activeTopology.title}</h3>
              </div>
              <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.92rem", marginBottom: "1.75rem", lineHeight: 1.5 }}>
                {activeTopology.tagline}
              </p>

              {/* Connected Pipeline Nodes */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {activeTopology.nodes.map((node, idx) => {
                  const isNodeActive = node.id === selectedNodeId;
                  return (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      style={{
                        padding: "1rem 1.25rem",
                        borderRadius: "14px",
                        cursor: "pointer",
                        background: isNodeActive
                          ? isLight
                            ? "rgba(0, 168, 143, 0.08)"
                            : "rgba(0, 187, 171, 0.12)"
                          : isLight
                          ? "#f8fafc"
                          : "rgba(255, 255, 255, 0.02)",
                        border: isNodeActive
                          ? `1.5px solid ${activeTopology.accent}`
                          : isLight
                          ? "1px solid #e2e8f0"
                          : "1px solid rgba(255, 255, 255, 0.06)",
                        transition: "all 0.2s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: "8px",
                            background: isNodeActive ? activeTopology.accent : isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)",
                            color: isNodeActive ? "#ffffff" : isLight ? "#475569" : "#94a3b8",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.85rem",
                            fontWeight: 700,
                          }}
                        >
                          0{idx + 1}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: "0.98rem", color: isNodeActive ? (isLight ? "#0f172a" : "#ffffff") : undefined }}>
                            {node.name}
                          </div>
                          <div style={{ fontSize: "0.82rem", color: isLight ? "#64748b" : "#94a3b8" }}>{node.role}</div>
                        </div>
                      </div>

                      <div
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          padding: "0.25rem 0.65rem",
                          borderRadius: "9999px",
                          background: isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)",
                          color: isLight ? "#475569" : "#cbd5e1",
                        }}
                      >
                        {node.latency}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Node Technical Deep-Dive */}
            <div
              style={{
                padding: "2rem",
                borderRadius: "16px",
                background: isLight ? "#f8fafc" : "rgba(4, 10, 22, 0.95)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: activeTopology.accent,
                    }}
                  >
                    Architectural Telemetry Specification
                  </span>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      padding: "0.3rem 0.75rem",
                      borderRadius: "6px",
                      background: `${activeTopology.accent}18`,
                      border: `1px solid ${activeTopology.accent}35`,
                      color: activeTopology.accent,
                    }}
                  >
                    {activeNode.protocol}
                  </span>
                </div>

                <h4 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.4rem" }}>{activeNode.name}</h4>
                <div style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.95rem", marginBottom: "1.75rem" }}>
                  Component Role: <strong style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>{activeNode.role}</strong>
                </div>

                {/* Technical Specifications */}
                <div style={{ marginBottom: "2rem" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "0.85rem", color: isLight ? "#475569" : "#cbd5e1" }}>
                    Engineered Guarantees:
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {activeNode.specs.map((spec, sIdx) => (
                      <div key={sIdx} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <CheckCircle2 size={16} style={{ color: activeTopology.accent, flexShrink: 0 }} />
                        <span style={{ fontSize: "0.94rem", color: isLight ? "#334155" : "#e2e8f0" }}>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Quick-Action */}
              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: "12px",
                  background: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.03)",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.82rem", color: isLight ? "#64748b" : "#94a3b8" }}>Target Latency SLA</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: activeTopology.accent }}>{activeNode.latency}</div>
                </div>
                <Link
                  href="/get-a-quote"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: isLight ? "#0284c7" : "#38bdf8",
                    textDecoration: "none",
                  }}
                >
                  <span>Build This Stack</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. INTERACTIVE PROJECT SCOPE & SPRINT CALCULATOR                      */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "5rem 1.5rem",
          position: "relative",
          background: isLight ? "#ffffff" : "transparent",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              borderRadius: "24px",
              padding: "clamp(2rem, 4vw, 3.5rem)",
              background: isLight
                ? "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)"
                : "linear-gradient(135deg, rgba(10, 20, 36, 0.85) 0%, rgba(3, 8, 20, 0.95) 100%)",
              border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(0, 187, 171, 0.25)",
              boxShadow: isLight ? "0 10px 30px rgba(0,0,0,0.04)" : "0 20px 50px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "3rem" }} className="dual-grid">
              {/* Left Column: Scope Model Controls */}
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: isLight ? "#008a75" : "#2dd4bf", marginBottom: "0.75rem" }}>
                  <Calculator size={18} />
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Interactive Scope Modeler
                  </span>
                </div>
                <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem" }}>
                  Estimate Your Engineering Sprint Velocity
                </h3>
                <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "2rem" }}>
                  Configure your system specifications below to review estimated delivery milestones, sprint rhythm, and the recommended cloud stack.
                </p>

                {/* 1. Software Archetype */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.6rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                    1. System Archetype
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                    {[
                      { id: "enterprise", label: "Core Enterprise Platform" },
                      { id: "saas", label: "Multi-Tenant SaaS Engine" },
                      { id: "modernization", label: "Legacy Modernization" },
                      { id: "workflow", label: "Automated Ops Platform" },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setEstimatorType(opt.id)}
                        style={{
                          padding: "0.75rem 0.95rem",
                          borderRadius: "10px",
                          textAlign: "left",
                          cursor: "pointer",
                          fontSize: "0.88rem",
                          fontWeight: estimatorType === opt.id ? 700 : 500,
                          background: estimatorType === opt.id
                            ? isLight ? "#ffffff" : "rgba(0, 187, 171, 0.2)"
                            : isLight ? "rgba(255,255,255,0.5)" : "rgba(255, 255, 255, 0.04)",
                          border: estimatorType === opt.id
                            ? "1.5px solid #00bbab"
                            : isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.08)",
                          color: estimatorType === opt.id ? (isLight ? "#0f172a" : "#ffffff") : isLight ? "#64748b" : "#94a3b8",
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Expected Scale */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.6rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                    2. Concurrency & Data Volume
                  </label>
                  <div style={{ display: "flex", gap: "0.6rem" }}>
                    {[
                      { id: "small", label: "10k–50k DAU" },
                      { id: "medium", label: "50k–500k DAU" },
                      { id: "large", label: "1M+ Concurrent / Global" },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setEstimatorScale(opt.id)}
                        style={{
                          flex: 1,
                          padding: "0.7rem 0.5rem",
                          borderRadius: "10px",
                          textAlign: "center",
                          cursor: "pointer",
                          fontSize: "0.82rem",
                          fontWeight: estimatorScale === opt.id ? 700 : 500,
                          background: estimatorScale === opt.id
                            ? isLight ? "#ffffff" : "rgba(56, 189, 248, 0.2)"
                            : isLight ? "rgba(255,255,255,0.5)" : "rgba(255, 255, 255, 0.04)",
                          border: estimatorScale === opt.id
                            ? "1.5px solid #38bdf8"
                            : isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.08)",
                          color: estimatorScale === opt.id ? (isLight ? "#0f172a" : "#ffffff") : isLight ? "#64748b" : "#94a3b8",
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Compliance Framework */}
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.6rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                    3. Security & Governance Standards
                  </label>
                  <div style={{ display: "flex", gap: "0.6rem" }}>
                    {[
                      { id: "standard", label: "Standard Enterprise" },
                      { id: "soc2", label: "SOC-2 Type II Ready" },
                      { id: "hipaa", label: "HIPAA / FinTech PCI-DSS" },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setEstimatorCompliance(opt.id)}
                        style={{
                          flex: 1,
                          padding: "0.7rem 0.5rem",
                          borderRadius: "10px",
                          textAlign: "center",
                          cursor: "pointer",
                          fontSize: "0.82rem",
                          fontWeight: estimatorCompliance === opt.id ? 700 : 500,
                          background: estimatorCompliance === opt.id
                            ? isLight ? "#ffffff" : "rgba(129, 140, 248, 0.2)"
                            : isLight ? "rgba(255,255,255,0.5)" : "rgba(255, 255, 255, 0.04)",
                          border: estimatorCompliance === opt.id
                            ? "1.5px solid #818cf8"
                            : isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.08)",
                          color: estimatorCompliance === opt.id ? (isLight ? "#0f172a" : "#ffffff") : isLight ? "#64748b" : "#94a3b8",
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Output Card */}
              <div
                style={{
                  borderRadius: "18px",
                  background: isLight ? "#ffffff" : "rgba(4, 10, 22, 0.9)",
                  border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(0, 187, 171, 0.3)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: isLight ? "#008a75" : "#2dd4bf" }}>
                      Estimated Milestone Plan
                    </span>
                    <span style={{ fontSize: "0.8rem", color: isLight ? "#64748b" : "#94a3b8" }}>100% Dedicated Squad</span>
                  </div>

                  {/* Big Timeline Display */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <div style={{ fontSize: "2.4rem", fontWeight: 800, color: isLight ? "#008a75" : "#2dd4bf", letterSpacing: "-0.02em" }}>
                      {calculatedEstimate.weeks}
                    </div>
                    <div style={{ fontSize: "0.95rem", color: isLight ? "#475569" : "#cbd5e1", fontWeight: 600 }}>
                      {calculatedEstimate.sprints}
                    </div>
                  </div>

                  {/* Architecture Specification */}
                  <div style={{ padding: "1rem", borderRadius: "10px", background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.03)", border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)", marginBottom: "1.5rem" }}>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: isLight ? "#64748b" : "#94a3b8", marginBottom: "0.35rem" }}>
                      Recommended Architecture Stack
                    </div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 600, color: isLight ? "#0f172a" : "#f8fafc" }}>
                      {calculatedEstimate.stack}
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.88rem", color: isLight ? "#475569" : "#94a3b8" }}>
                      <CheckCircle2 size={16} color="#10b981" />
                      <span>Bi-weekly working demo builds on staging</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.88rem", color: isLight ? "#475569" : "#94a3b8" }}>
                      <CheckCircle2 size={16} color="#10b981" />
                      <span>Zero vendor lock-in with full IP code handover</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.88rem", color: isLight ? "#475569" : "#94a3b8" }}>
                      <CheckCircle2 size={16} color="#10b981" />
                      <span>Direct Slack / Teams access to Senior Tech Leads</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/get-a-quote"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    padding: "1rem",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #00bbab 0%, #0284c7 100%)",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "0.98rem",
                    textAlign: "center",
                    textDecoration: "none",
                    boxShadow: "0 6px 20px rgba(0, 187, 171, 0.35)",
                  }}
                >
                  <span>Lock in Architecture Blueprint</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. CORE ENGINEERING CAPABILITIES (Bento Grid)                         */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f8fafc" : "rgba(2, 6, 16, 0.95)",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 4rem auto" }}>
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
              Architectural Capabilities
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Engineered From First Principles
            </h2>
            <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.05rem", lineHeight: 1.6 }}>
              We apply battle-tested architectures, clean Domain-Driven Design (DDD), and automated deployment pipelines to eliminate technical debt before it starts.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {service.features.map((feature, fIdx) => {
              const icons = [Layers, RefreshCw, Workflow, Network, ShieldCheck, Cloud];
              const IconComp = icons[fIdx % icons.length];
              return (
                <div
                  key={fIdx}
                  style={{
                    padding: "2.2rem 1.85rem",
                    borderRadius: "18px",
                    background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.65)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isLight ? "0 4px 16px rgba(0,0,0,0.03)" : "none",
                    transition: "transform 0.25s ease, border-color 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.15)",
                      border: isLight ? "1px solid rgba(0, 168, 143, 0.25)" : "1px solid rgba(0, 187, 171, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isLight ? "#008a75" : "#2dd4bf",
                      marginBottom: "1.4rem",
                    }}
                  >
                    <IconComp size={24} />
                  </div>

                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                    {feature.title}
                  </h3>

                  <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.95rem", lineHeight: 1.65 }}>
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. TECHNOLOGY STACK MATRIX WITH FILTER TABS                          */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f1f5f9" : "rgba(4, 10, 22, 0.85)",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 3rem auto" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.35rem 0.95rem",
                borderRadius: "9999px",
                background: isLight ? "rgba(2, 132, 199, 0.1)" : "rgba(56, 189, 248, 0.12)",
                color: isLight ? "#0284c7" : "#38bdf8",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Enterprise Technology Fabric
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Battle-Tested Technologies We Deploy
            </h2>
            <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.05rem" }}>
              Every framework in our arsenal is evaluated for memory footprint, developer velocity, community stability, and horizontal scaling ceilings.
            </p>

            {/* Category Filter Tabs */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", marginTop: "2rem" }}>
              {TECH_STACK_TABS.map((tab, tIdx) => {
                const isActive = tIdx === activeTechTab;
                return (
                  <button
                    key={tIdx}
                    type="button"
                    onClick={() => setActiveTechTab(tIdx)}
                    style={{
                      padding: "0.65rem 1.35rem",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      fontWeight: isActive ? 700 : 500,
                      background: isActive
                        ? isLight ? "#ffffff" : "rgba(0, 187, 171, 0.2)"
                        : isLight ? "rgba(255, 255, 255, 0.6)" : "rgba(255, 255, 255, 0.04)",
                      border: isActive
                        ? "1.5px solid #00bbab"
                        : isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.08)",
                      color: isActive ? (isLight ? "#0f172a" : "#ffffff") : isLight ? "#64748b" : "#94a3b8",
                      boxShadow: isActive ? "0 4px 12px rgba(0, 187, 171, 0.2)" : "none",
                    }}
                  >
                    {tab.category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Tech Stack Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {TECH_STACK_TABS[activeTechTab].items.map((tech, idx) => (
              <div
                key={idx}
                style={{
                  padding: "1.5rem",
                  borderRadius: "14px",
                  background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.75)",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        padding: "0.2rem 0.55rem",
                        borderRadius: "4px",
                        background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.15)",
                        color: isLight ? "#008a75" : "#2dd4bf",
                      }}
                    >
                      {tech.badge}
                    </span>
                    <span style={{ fontSize: "0.78rem", color: isLight ? "#64748b" : "#94a3b8" }}>{tech.tag}</span>
                  </div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.4rem" }}>{tech.name}</h4>
                  <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.88rem", lineHeight: 1.5 }}>
                    {tech.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. TRANSPARENT 5-STEP DELIVERY METHODOLOGY TIMELINE                   */}
      {/* ===================================================================== */}
      <section
        id="delivery-lifecycle"
        style={{
          padding: "6.5rem 1.5rem 6rem 1.5rem",
          position: "relative",
          overflow: "hidden",
          background: isLight ? "#f8fafc" : "#040a17",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
          borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Effective High-Tech Architectural Background */}
        <div
          className="pointer-events-none select-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          {/* Multi-stop ambient radial spotlights */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: isLight
                ? `
                  radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0, 168, 143, 0.09) 0%, transparent 65%),
                  radial-gradient(ellipse 45% 45% at 10% 40%, rgba(2, 132, 199, 0.06) 0%, transparent 60%),
                  radial-gradient(ellipse 45% 45% at 90% 60%, rgba(99, 102, 241, 0.05) 0%, transparent 60%),
                  radial-gradient(ellipse 60% 40% at 50% 100%, rgba(16, 185, 129, 0.06) 0%, transparent 65%)
                `
                : `
                  radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0, 187, 171, 0.17) 0%, transparent 65%),
                  radial-gradient(ellipse 45% 45% at 10% 40%, rgba(56, 189, 248, 0.13) 0%, transparent 60%),
                  radial-gradient(ellipse 45% 45% at 90% 60%, rgba(99, 102, 241, 0.12) 0%, transparent 60%),
                  radial-gradient(ellipse 60% 40% at 50% 100%, rgba(16, 185, 129, 0.10) 0%, transparent 65%)
                `,
            }}
          />

          {/* Precision Architectural CAD / Blueprint Coordinate Grid (SVG Pattern) */}
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              opacity: isLight ? 0.38 : 0.22,
            }}
          >
            <defs>
              <pattern id="lifecycle-cad-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path
                  d="M 48 0 L 0 0 0 48"
                  fill="none"
                  stroke={isLight ? "#94a3b8" : "#38bdf8"}
                  strokeWidth="0.75"
                  strokeDasharray="2 3"
                />
                <circle cx="0" cy="0" r="1.5" fill={isLight ? "#00a88f" : "#2dd4bf"} opacity="0.6" />
                <circle cx="48" cy="48" r="1.5" fill={isLight ? "#00a88f" : "#2dd4bf"} opacity="0.6" />
              </pattern>
              <radialGradient id="lifecycle-vignette-mask" cx="50%" cy="50%" r="55%">
                <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                <stop offset="70%" stopColor="#fff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
              <mask id="lifecycle-mask">
                <rect width="100%" height="100%" fill="url(#lifecycle-vignette-mask)" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#lifecycle-cad-grid)" mask="url(#lifecycle-mask)" />
          </svg>

          {/* Horizontal Glowing Data Conduit Line */}
          <div
            style={{
              position: "absolute",
              top: "220px",
              left: "4%",
              right: "4%",
              height: "1px",
              background: isLight
                ? "linear-gradient(90deg, transparent 0%, rgba(0, 168, 143, 0.35) 20%, rgba(56, 189, 248, 0.4) 50%, rgba(99, 102, 241, 0.35) 80%, transparent 100%)"
                : "linear-gradient(90deg, transparent 0%, rgba(0, 187, 171, 0.45) 20%, rgba(56, 189, 248, 0.5) 50%, rgba(99, 102, 241, 0.45) 80%, transparent 100%)",
              opacity: 0.7,
            }}
          />

          {/* Soft Top & Bottom Seamless Edge Blenders */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "70px",
              background: isLight
                ? "linear-gradient(to bottom, #f8fafc 0%, transparent 100%)"
                : "linear-gradient(to bottom, #020712 0%, transparent 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "70px",
              background: isLight
                ? "linear-gradient(to top, #f1f5f9 0%, transparent 100%)"
                : "linear-gradient(to top, rgba(4, 10, 22, 0.8) 0%, transparent 100%)",
            }}
          />
        </div>

        <div className="container-custom" style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 3rem auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 1.1rem",
                borderRadius: "9999px",
                background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.12)",
                border: isLight ? "1px solid rgba(0, 168, 143, 0.25)" : "1px solid rgba(0, 187, 171, 0.3)",
                color: isLight ? "#008a75" : "#2dd4bf",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: isLight ? "#008a75" : "#2dd4bf",
                  boxShadow: isLight ? "0 0 8px #008a75" : "0 0 10px #2dd4bf",
                  display: "inline-block",
                }}
              />
              Delivery Governance &bull; Bi-Weekly Sprint Cadence &bull; Zero Black Boxes
            </div>

            <h2
              style={{
                fontSize: "clamp(2.1rem, 4vw, 3.2rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                marginBottom: "1.1rem",
                lineHeight: 1.18,
              }}
            >
              Structured, Transparent{" "}
              <span
                style={{
                  color: isLight ? "#008a75" : "#2dd4bf",
                }}
              >
                5-Stage Engineering Lifecycle
              </span>
            </h2>

            <p
              style={{
                color: isLight ? "#475569" : "#94a3b8",
                fontSize: "1.08rem",
                lineHeight: 1.65,
                maxWidth: "720px",
                margin: "0 auto",
              }}
            >
              From day one, you get direct GitHub pull request visibility, live staging sandbox environments, and bi-weekly working demonstrations with fixed-cost and timeline SLAs.
            </p>
          </div>

          {/* Interactive Stepper Progress Conduit Bar */}
          <div
            style={{
              maxWidth: "1060px",
              margin: "0 auto 3rem auto",
              padding: "1rem 1.5rem",
              borderRadius: "16px",
              background: isLight ? "rgba(255, 255, 255, 0.85)" : "rgba(10, 20, 36, 0.65)",
              border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(12px)",
              position: "relative",
              overflowX: "auto",
            }}
          >
            {/* Horizontal progress beam connecting milestones */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                alignItems: "center",
                position: "relative",
                minWidth: "560px",
              }}
            >
              {/* Connecting background track */}
              <div
                style={{
                  position: "absolute",
                  left: "10%",
                  right: "10%",
                  top: "20px",
                  height: "3px",
                  background: isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.1)",
                  zIndex: 1,
                }}
              />
              {/* Animated active fill beam */}
              <div
                style={{
                  position: "absolute",
                  left: "10%",
                  width: `${(activeLifecycleStage / 4) * 80}%`,
                  top: "20px",
                  height: "3px",
                  background: "linear-gradient(90deg, #00bbab 0%, #38bdf8 50%, #10b981 100%)",
                  boxShadow: "0 0 12px rgba(56, 189, 248, 0.6)",
                  transition: "width 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  zIndex: 2,
                }}
              />

              {LIFECYCLE_STAGES.map((stage, idx) => {
                const isActive = activeLifecycleStage === idx;
                const isPassed = activeLifecycleStage > idx;

                return (
                  <button
                    key={stage.step}
                    onClick={() => setActiveLifecycleStage(idx)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      position: "relative",
                      zIndex: 3,
                      padding: "0.25rem",
                    }}
                  >
                    {/* Glowing Node Button */}
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "0.85rem",
                        letterSpacing: "0.02em",
                        background: isActive
                          ? stage.accent
                          : isPassed
                          ? isLight
                            ? "#008a75"
                            : "#2dd4bf"
                          : isLight
                          ? "#f1f5f9"
                          : "#0a1322",
                        color: isActive || isPassed ? "#ffffff" : isLight ? "#64748b" : "#94a3b8",
                        border: isActive
                          ? `3px solid ${isLight ? "#ffffff" : "#020712"}`
                          : `2px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.15)"}`,
                        boxShadow: isActive
                          ? `0 0 20px ${stage.accent}88, 0 0 0 4px ${stage.accent}33`
                          : "none",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {stage.step}
                    </div>

                    {/* Step Name Label */}
                    <span
                      style={{
                        marginTop: "0.6rem",
                        fontSize: "0.76rem",
                        fontWeight: isActive ? 700 : 500,
                        color: isActive
                          ? stage.accent
                          : isLight
                          ? "#475569"
                          : "#94a3b8",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        transition: "color 0.25s ease",
                      }}
                    >
                      {stage.title.split(" ")[0]}
                    </span>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        color: isLight ? "#94a3b8" : "#64748b",
                      }}
                    >
                      {stage.duration}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5-Stage Lifecycle Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(225px, 1fr))",
              gap: "1.25rem",
              marginBottom: "3rem",
            }}
          >
            {LIFECYCLE_STAGES.map((stage, idx) => {
              const isActive = activeLifecycleStage === idx;

              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveLifecycleStage(idx)}
                  style={{
                    padding: "1.75rem 1.4rem",
                    borderRadius: "20px",
                    background: isActive
                      ? isLight
                        ? "#ffffff"
                        : "linear-gradient(180deg, rgba(14, 28, 48, 0.95) 0%, rgba(8, 18, 34, 0.95) 100%)"
                      : isLight
                      ? "rgba(255, 255, 255, 0.85)"
                      : "rgba(10, 20, 36, 0.65)",
                    border: isActive
                      ? `2px solid ${stage.accent}`
                      : isLight
                      ? "1px solid #e2e8f0"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isActive
                      ? `0 14px 34px -8px ${stage.accent}40, 0 0 0 1px ${stage.accent}`
                      : isLight
                      ? "0 4px 20px rgba(0, 0, 0, 0.04)"
                      : "0 6px 20px rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(14px)",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transform: isActive ? "translateY(-6px)" : "translateY(0)",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Top Glowing Color Edge Accent */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: stage.accent,
                      boxShadow: isActive ? `0 0 16px ${stage.accent}` : "none",
                    }}
                  />

                  {/* Watermark Numeral in Background */}
                  <div
                    style={{
                      position: "absolute",
                      right: "-8px",
                      bottom: "-15px",
                      fontSize: "6.5rem",
                      fontWeight: 900,
                      fontFamily: "monospace",
                      color: isActive
                        ? `${stage.accent}14`
                        : isLight
                        ? "rgba(0, 0, 0, 0.03)"
                        : "rgba(255, 255, 255, 0.03)",
                      lineHeight: 1,
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                  >
                    {stage.step}
                  </div>

                  {/* Card Header: Icon & Phase Tag */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {/* Stage Icon Medallion */}
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: isActive
                          ? `${stage.accent}22`
                          : isLight
                          ? "rgba(0, 0, 0, 0.04)"
                          : "rgba(255, 255, 255, 0.05)",
                        border: `1px solid ${isActive ? stage.accent : isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.1)"}`,
                        color: stage.accent,
                        boxShadow: isActive ? `0 0 16px ${stage.accent}44` : "none",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {stage.iconName === "Compass" && <Compass style={{ width: "22px", height: "22px" }} />}
                      {stage.iconName === "Layers" && <Layers style={{ width: "22px", height: "22px" }} />}
                      {stage.iconName === "Terminal" && <Terminal style={{ width: "22px", height: "22px" }} />}
                      {stage.iconName === "ShieldCheck" && <ShieldCheck style={{ width: "22px", height: "22px" }} />}
                      {stage.iconName === "Rocket" && <Rocket style={{ width: "22px", height: "22px" }} />}
                    </div>

                    {/* Stage Number & Duration Badge */}
                    <div style={{ textAlign: "right" }}>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 800,
                          letterSpacing: "0.06em",
                          color: stage.accent,
                          textTransform: "uppercase",
                        }}
                      >
                        STAGE {stage.step}
                      </div>
                      <div
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          color: isLight ? "#64748b" : "#94a3b8",
                        }}
                      >
                        {stage.duration}
                      </div>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                      lineHeight: 1.3,
                      color: isActive
                        ? isLight
                          ? "#0f172a"
                          : "#ffffff"
                        : isLight
                        ? "#1e293b"
                        : "#f1f5f9",
                    }}
                  >
                    {stage.title}
                  </h3>

                  <p
                    style={{
                      color: isLight ? "#64748b" : "#94a3b8",
                      fontSize: "0.86rem",
                      lineHeight: 1.55,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {stage.desc}
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      height: "1px",
                      background: isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)",
                      marginBottom: "1rem",
                    }}
                  />

                  {/* Verifiable Deliverables Bullet Checklist */}
                  <div style={{ marginBottom: "1.25rem" }}>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: isLight ? "#94a3b8" : "#64748b",
                        marginBottom: "0.6rem",
                      }}
                    >
                      Key Deliverables:
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                      {stage.deliverables.slice(0, 3).map((item, dIdx) => (
                        <li
                          key={dIdx}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.5rem",
                            fontSize: "0.8rem",
                            color: isLight ? "#334155" : "#cbd5e1",
                            lineHeight: 1.4,
                          }}
                        >
                          <CheckCircle2
                            style={{
                              width: "14px",
                              height: "14px",
                              color: stage.accent,
                              flexShrink: 0,
                              marginTop: "2px",
                            }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Governance Gate Badge */}
                  <div
                    style={{
                      padding: "0.45rem 0.75rem",
                      borderRadius: "8px",
                      background: isLight ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.04)",
                      border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.07)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "0.74rem",
                      fontWeight: 600,
                      color: stage.accent,
                    }}
                  >
                    <span>{stage.gate.split(" ")[0]} Gate</span>
                    <ChevronRight style={{ width: "14px", height: "14px" }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Stage Deep-Dive HUD Console */}
          {(() => {
            const currentStage = LIFECYCLE_STAGES[activeLifecycleStage];

            return (
              <div
                style={{
                  borderRadius: "24px",
                  background: isLight ? "#ffffff" : "rgba(8, 16, 30, 0.88)",
                  border: isLight
                    ? `1px solid ${currentStage.accent}44`
                    : `1px solid ${currentStage.accent}55`,
                  boxShadow: isLight
                    ? `0 20px 50px -10px ${currentStage.accent}20`
                    : `0 25px 60px -15px ${currentStage.accent}33`,
                  backdropFilter: "blur(20px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Terminal Console Header */}
                <div
                  style={{
                    padding: "0.9rem 1.5rem",
                    borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: isLight ? "#f8fafc" : "rgba(5, 11, 22, 0.95)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div style={{ display: "flex", gap: "6px" }}>
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
                    </div>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        fontFamily: "monospace",
                        color: isLight ? "#64748b" : "#94a3b8",
                        marginLeft: "0.5rem",
                      }}
                    >
                      STAGE_0{activeLifecycleStage + 1}_{currentStage.title.toUpperCase().replace(/\s+/g, "_")}.md
                    </span>
                  </div>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      color: currentStage.accent,
                      background: `${currentStage.accent}14`,
                      padding: "0.25rem 0.75rem",
                      borderRadius: "9999px",
                      border: `1px solid ${currentStage.accent}33`,
                    }}
                  >
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: currentStage.accent }} />
                    VERIFIED GOVERNANCE PROTOCOL
                  </div>
                </div>

                {/* Deep-Dive Content: Two Column HUD */}
                <div
                  style={{
                    padding: "2.5rem 2rem",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "2.5rem",
                  }}
                >
                  {/* Left Column: Scope & Touchpoints */}
                  <div>
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "0.8rem",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        color: currentStage.accent,
                        textTransform: "uppercase",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {currentStage.phase} &bull; {currentStage.duration}
                    </div>

                    <h3
                      style={{
                        fontSize: "1.8rem",
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        marginBottom: "0.75rem",
                        color: isLight ? "#0f172a" : "#ffffff",
                      }}
                    >
                      {currentStage.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "1.02rem",
                        color: currentStage.accent,
                        fontWeight: 600,
                        marginBottom: "1rem",
                        lineHeight: 1.5,
                      }}
                    >
                      &ldquo;{currentStage.tagline}&rdquo;
                    </p>

                    <p
                      style={{
                        color: isLight ? "#475569" : "#94a3b8",
                        fontSize: "0.95rem",
                        lineHeight: 1.65,
                        marginBottom: "1.75rem",
                      }}
                    >
                      {currentStage.desc}
                    </p>

                    {/* Lead Role & Client Touchpoints */}
                    <div
                      style={{
                        padding: "1.2rem 1.4rem",
                        borderRadius: "14px",
                        background: isLight ? "#f8fafc" : "rgba(10, 20, 36, 0.7)",
                        border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.85rem",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <Users style={{ width: "18px", height: "18px", color: currentStage.accent }} />
                        <div>
                          <div style={{ fontSize: "0.74rem", textTransform: "uppercase", color: isLight ? "#94a3b8" : "#64748b", fontWeight: 700 }}>
                            Stage Engineering Lead
                          </div>
                          <div style={{ fontSize: "0.92rem", fontWeight: 700, color: isLight ? "#0f172a" : "#f1f5f9" }}>
                            {currentStage.leadRole}
                          </div>
                        </div>
                      </div>

                      <div style={{ height: "1px", background: isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)" }} />

                      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                        <Clock style={{ width: "18px", height: "18px", color: currentStage.accent, marginTop: "2px", flexShrink: 0 }} />
                        <div>
                          <div style={{ fontSize: "0.74rem", textTransform: "uppercase", color: isLight ? "#94a3b8" : "#64748b", fontWeight: 700 }}>
                            Client Touchpoints & Weekly Cadence
                          </div>
                          <div style={{ fontSize: "0.88rem", color: isLight ? "#475569" : "#cbd5e1", lineHeight: 1.45 }}>
                            {currentStage.clientTouchpoint}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Verifiable Deliverables & Key Actions */}
                  <div>
                    <h4
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: isLight ? "#0f172a" : "#f8fafc",
                        marginBottom: "1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <FileText style={{ width: "18px", height: "18px", color: currentStage.accent }} />
                      Verifiable Engineering Deliverables
                    </h4>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.75rem" }}>
                      {currentStage.deliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          style={{
                            padding: "0.9rem 1.1rem",
                            borderRadius: "12px",
                            background: isLight ? "#f8fafc" : "rgba(10, 20, 36, 0.7)",
                            border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.85rem",
                          }}
                        >
                          <div
                            style={{
                              width: "28px",
                              height: "28px",
                              borderRadius: "8px",
                              background: `${currentStage.accent}20`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <CheckCircle2 style={{ width: "16px", height: "16px", color: currentStage.accent }} />
                          </div>
                          <span
                            style={{
                              fontSize: "0.92rem",
                              fontWeight: 600,
                              color: isLight ? "#1e293b" : "#e2e8f0",
                            }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Governance Gate Callout */}
                    <div
                      style={{
                        padding: "1rem 1.25rem",
                        borderRadius: "14px",
                        background: `${currentStage.accent}12`,
                        border: `1px solid ${currentStage.accent}33`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "0.75rem",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <ShieldCheck style={{ width: "20px", height: "20px", color: currentStage.accent }} />
                        <div>
                          <div style={{ fontSize: "0.72rem", textTransform: "uppercase", fontWeight: 700, color: currentStage.accent }}>
                            Mandatory Governance Gate
                          </div>
                          <div style={{ fontSize: "0.92rem", fontWeight: 700, color: isLight ? "#0f172a" : "#ffffff" }}>
                            {currentStage.gate}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <button
                          onClick={() => setActiveLifecycleStage((prev) => Math.max(0, prev - 1))}
                          disabled={activeLifecycleStage === 0}
                          style={{
                            padding: "0.45rem 0.9rem",
                            borderRadius: "8px",
                            background: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.1)",
                            border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            color: activeLifecycleStage === 0 ? "#94a3b8" : isLight ? "#0f172a" : "#ffffff",
                            cursor: activeLifecycleStage === 0 ? "not-allowed" : "pointer",
                            opacity: activeLifecycleStage === 0 ? 0.5 : 1,
                          }}
                        >
                          &larr; Prev
                        </button>
                        <button
                          onClick={() => setActiveLifecycleStage((prev) => Math.min(LIFECYCLE_STAGES.length - 1, prev + 1))}
                          disabled={activeLifecycleStage === LIFECYCLE_STAGES.length - 1}
                          style={{
                            padding: "0.45rem 0.9rem",
                            borderRadius: "8px",
                            background: currentStage.accent,
                            border: "none",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            color: "#ffffff",
                            cursor: activeLifecycleStage === LIFECYCLE_STAGES.length - 1 ? "not-allowed" : "pointer",
                            opacity: activeLifecycleStage === LIFECYCLE_STAGES.length - 1 ? 0.5 : 1,
                          }}
                        >
                          Next Stage &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 7. ENTERPRISE COMPARISON MATRIX: OPASH VS OFF-THE-SHELF VS FREELANCING */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f1f5f9" : "rgba(4, 10, 22, 0.8)",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 3.5rem auto" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.35rem 0.95rem",
                borderRadius: "9999px",
                background: isLight ? "rgba(2, 132, 199, 0.1)" : "rgba(56, 189, 248, 0.12)",
                color: isLight ? "#0284c7" : "#38bdf8",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Enterprise Decision Matrix
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Why Global Brands Choose Bespoke Over SaaS
            </h2>
            <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.05rem" }}>
              Off-the-shelf software incurs rising recurring licenses without delivering competitive advantages. Compare the structural differences:
            </p>
          </div>

          {/* Comparison Table */}
          <div
            style={{
              overflowX: "auto",
              borderRadius: "18px",
              background: isLight ? "#ffffff" : "rgba(8, 16, 32, 0.85)",
              border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: isLight ? "0 10px 30px rgba(0,0,0,0.05)" : "none",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", minWidth: "750px" }}>
              <thead>
                <tr style={{ borderBottom: isLight ? "2px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.12)" }}>
                  <th style={{ padding: "1.25rem 1.5rem", width: "28%", fontSize: "0.95rem", fontWeight: 700 }}>
                    Strategic Dimension
                  </th>
                  <th
                    style={{
                      padding: "1.25rem 1.5rem",
                      width: "36%",
                      fontSize: "1rem",
                      fontWeight: 800,
                      color: isLight ? "#008a75" : "#2dd4bf",
                      background: isLight ? "rgba(0, 168, 143, 0.05)" : "rgba(0, 187, 171, 0.1)",
                    }}
                  >
                    Opash Custom Software
                  </th>
                  <th style={{ padding: "1.25rem 1.5rem", width: "18%", fontSize: "0.92rem", fontWeight: 600, color: isLight ? "#64748b" : "#94a3b8" }}>
                    Off-the-Shelf SaaS
                  </th>
                  <th style={{ padding: "1.25rem 1.5rem", width: "18%", fontSize: "0.92rem", fontWeight: 600, color: isLight ? "#64748b" : "#94a3b8" }}>
                    Generic Freelancers
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    style={{
                      borderBottom: isLight ? "1px solid #f1f5f9" : "1px solid rgba(255, 255, 255, 0.06)",
                      backgroundColor: rIdx % 2 === 0 ? (isLight ? "#fafafa" : "rgba(255,255,255,0.01)") : "transparent",
                    }}
                  >
                    <td style={{ padding: "1.2rem 1.5rem", fontWeight: 700, fontSize: "0.92rem" }}>
                      {row.feature}
                    </td>
                    <td
                      style={{
                        padding: "1.2rem 1.5rem",
                        fontWeight: 600,
                        fontSize: "0.92rem",
                        color: isLight ? "#0f172a" : "#f8fafc",
                        background: isLight ? "rgba(0, 168, 143, 0.03)" : "rgba(0, 187, 171, 0.06)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                        <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                        <span>{row.opash}</span>
                      </div>
                    </td>
                    <td style={{ padding: "1.2rem 1.5rem", fontSize: "0.88rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                        <X size={16} color="#ef4444" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                        <span>{row.offShelf}</span>
                      </div>
                    </td>
                    <td style={{ padding: "1.2rem 1.5rem", fontSize: "0.88rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                        <X size={16} color="#ef4444" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                        <span>{row.freelance}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 8. WHAT YOU RECEIVE: 100% IP & PRODUCTION DELIVERABLES                */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "5rem 1.5rem",
          position: "relative",
          background: isLight ? "#ffffff" : "transparent",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem" }} className="dual-grid">
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
                  marginBottom: "0.75rem",
                }}
              >
                100% Client Ownership
              </span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
                Verifiable Production Deliverables
              </h2>
              <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1rem", lineHeight: 1.6, marginBottom: "2rem" }}>
                From day one, all repositories, cloud credentials, Docker images, and architectural documentation are provisioned inside your organization’s accounts.
              </p>

              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "14px",
                  background: isLight ? "#f8fafc" : "rgba(10, 20, 36, 0.65)",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  <ShieldCheck size={20} color="#10b981" />
                  <span>Permanent Legal IP Assignment</span>
                </div>
                <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.88rem", lineHeight: 1.5 }}>
                  Every line of code written by our engineers is legally assigned to your company. No shared licenses, no royalties, no hidden restrictions.
                </p>
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.1rem 1.35rem",
                    borderRadius: "12px",
                    background: isLight ? "#f8fafc" : "rgba(10, 20, 36, 0.75)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <CheckCircle2 size={19} color="#10b981" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, fontSize: "0.96rem" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 9. FREQUENTLY ASKED QUESTIONS ACCORDION                               */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f1f5f9" : "rgba(4, 10, 22, 0.8)",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "880px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
              Enterprise FAQs
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.7rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderRadius: "14px",
                    background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.75)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    overflow: "hidden",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: "100%",
                      padding: "1.4rem 1.6rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      color: isLight ? "#0f172a" : "#f8fafc",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                    }}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={20}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                        flexShrink: 0,
                        color: isLight ? "#008a75" : "#2dd4bf",
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 1.6rem 1.4rem 1.6rem",
                        color: isLight ? "#475569" : "#94a3b8",
                        fontSize: "0.96rem",
                        lineHeight: 1.65,
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 10. FINAL CONSULTATION & BRIEFING CTA SECTION                         */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "6rem 1.5rem",
          position: "relative",
          overflow: "hidden",
          background: isLight ? "#ffffff" : "#020712",
        }}
      >
        {/* Soft Ambient Radial Luminous Glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "500px",
            background: isLight
              ? "radial-gradient(circle, rgba(0, 168, 143, 0.12) 0%, rgba(14, 165, 233, 0.05) 50%, transparent 75%)"
              : "radial-gradient(circle, rgba(0, 187, 171, 0.2) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 75%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div className="container-custom" style={{ position: "relative", zIndex: 1, maxWidth: "980px", margin: "0 auto" }}>
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
              Direct Engineering Consultation
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Ready to Architect Your Custom Platform?
            </h2>
            <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.05rem", maxWidth: "680px", margin: "0 auto" }}>
              Submit your technical requirements or system scope below. A Senior Solutions Architect will analyze your specifications and respond within 24 business hours.
            </p>
          </div>

          <div
            style={{
              borderRadius: "24px",
              padding: "clamp(1.5rem, 3.5vw, 2.5rem)",
              background: isLight ? "#f8fafc" : "rgba(8, 18, 36, 0.85)",
              border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(0, 187, 171, 0.3)",
              boxShadow: isLight ? "0 10px 30px rgba(0,0,0,0.05)" : "0 25px 60px rgba(0, 0, 0, 0.6)",
            }}
          >
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
