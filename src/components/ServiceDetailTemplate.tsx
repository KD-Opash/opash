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
  Smartphone,
  Bot,
  TestTube2,
  UserCheck,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import ContactForm from "./ContactForm";
import EnterpriseDeliveryLifecycle from "./EnterpriseDeliveryLifecycle";
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

const SERVICE_TOPOLOGIES: Record<string, ArchitectureTopology[]> = {
  "web-development": [
    {
      id: "edge-ssr",
      title: "Edge SSR & Global CDN Mesh",
      tagline: "Sub-50ms First Contentful Paint delivered via globally distributed serverless edge runtime",
      accent: "#00bbab",
      nodes: [
        {
          id: "edge-gateway",
          name: "Anycast Edge Router",
          role: "Cloudflare Workers / Vercel Edge",
          protocol: "HTTP/3 & TLS 1.3",
          latency: "sub-15ms TTFB",
          specs: ["Zero-Cold-Start Edge Compute", "Smart Asset Routing", "DDoS Mitigation at Edge"],
        },
        {
          id: "isr-renderer",
          name: "Hybrid SSR / ISR Engine",
          role: "Next.js App Router Server Components",
          protocol: "React Server Actions",
          latency: "sub-30ms execution",
          specs: ["Streaming HTML with Suspense", "Granular Tag Revalidation", "Zero Client JS Overhead"],
        },
        {
          id: "graphql-bff",
          name: "GraphQL Backend-For-Frontend",
          role: "Apollo / Mercurius Fastify Federation",
          protocol: "GraphQL over HTTP/2",
          latency: "sub-12ms p99",
          specs: ["Batched Microservice Queries", "Schema Stitching & Subgraphs", "Strict TypeScript Type-Generation"],
        },
        {
          id: "edge-cache",
          name: "Distributed Key-Value Store",
          role: "Redis Cloud / Upstash Edge",
          protocol: "In-Memory TCP Mesh",
          latency: "sub-2ms lookup",
          specs: ["Stale-While-Revalidate Caching", "Tenant Session State", "Global Read Replicas"],
        },
      ],
    },
    {
      id: "micro-frontend",
      title: "Module Federation & Composable UI",
      tagline: "Decoupled domain frontends composed dynamically at runtime for large enterprise teams",
      accent: "#38bdf8",
      nodes: [
        {
          id: "federation-host",
          name: "Federation Shell Host",
          role: "Webpack 5 Module Federation Host",
          protocol: "Dynamic Remote Module Import",
          latency: "sub-5ms resolution",
          specs: ["Shared Dependency Singleton", "Unified Routing & Navigation", "Global Theme & Auth Context"],
        },
        {
          id: "catalog-pod",
          name: "Catalog & Search Micro-App",
          role: "Independent Next.js Pod",
          protocol: "Event Bus & Custom Events",
          latency: "sub-18ms hydration",
          specs: ["Algolia InstantSearch Bridge", "Isolated State Machine", "Independent Deployment Pipeline"],
        },
        {
          id: "checkout-pod",
          name: "Secure Checkout & Payment Pod",
          role: "Hardened React Micro-Frontend",
          protocol: "PCI-DSS Compliant Iframe/SDK",
          latency: "sub-20ms transaction",
          specs: ["Stripe / Adyen Tokenization", "Strict Sandbox Execution", "Zero Cross-App Leakage"],
        },
      ],
    },
    {
      id: "pwa-offline",
      title: "Offline-First Progressive Web App",
      tagline: "Full offline interactivity, background synchronization, and native-grade app capabilities",
      accent: "#10b981",
      nodes: [
        {
          id: "service-worker",
          name: "Service Worker Cache Core",
          role: "Workbox Custom Lifecycle Manager",
          protocol: "Browser Cache Storage API",
          latency: "instant (0ms offline)",
          specs: ["Cache-First Static Shell", "Stale-While-Revalidate Content", "Automatic Pre-caching"],
        },
        {
          id: "indexed-db",
          name: "Client IndexedDB Engine",
          role: "Dexie.js / RxDB Client Storage",
          protocol: "IndexedDB Local Engine",
          latency: "sub-1ms query",
          specs: ["Full ACID Local Database", "Document Indexing", "Binary Attachment Storage"],
        },
        {
          id: "sync-bus",
          name: "Background Sync Manager",
          role: "Service Worker Background Sync",
          protocol: "WebSocket / REST Reconnection",
          latency: "asynchronous",
          specs: ["Optimistic UI Updates", "Automatic Conflict Resolution", "Offline Mutation Queue"],
        },
      ],
    },
  ],
  "mobile-development": [
    {
      id: "native-bridge",
      title: "High-Performance Cross-Platform Mesh",
      tagline: "Native 60/120 FPS rendering powered by React Native Fabric & TurboModules JSI",
      accent: "#00bbab",
      nodes: [
        {
          id: "turbo-modules",
          name: "C++ JSI TurboModules Core",
          role: "Direct C++ Memory Bridge",
          protocol: "JavaScript Interface (JSI)",
          latency: "sub-0.5ms call",
          specs: ["Zero JSON Serialization Overhead", "Direct Synchronous Memory Access", "Near-Native Micro-Benchmarks"],
        },
        {
          id: "fabric-renderer",
          name: "Fabric Concurrent UI Renderer",
          role: "Native iOS / Android View Manager",
          protocol: "Yoga Layout C++ Engine",
          latency: "120 FPS V-Sync",
          specs: ["Multi-Threaded Layout Tree", "Background Pre-Rendering", "Native Gesture Handlers"],
        },
        {
          id: "offline-db",
          name: "Encrypted SQLite Engine",
          role: "WatermelonDB / SQLCipher",
          protocol: "SQLite Local Engine",
          latency: "sub-1ms query",
          specs: ["AES-256 Database Encryption", "Lazy Data Streaming", "Delta Cloud Sync"],
        },
        {
          id: "biometric-vault",
          name: "Hardware Security Enclave",
          role: "iOS Keychain / Android Keystore",
          protocol: "Hardware Cryptographic Bus",
          latency: "instant hardware",
          specs: ["FaceID / TouchID Biometric Auth", "Secure Key Storage", "Anti-Tamper & Jailbreak Guard"],
        },
      ],
    },
    {
      id: "mobile-offline-first",
      title: "CRDT Offline-First Synchronization",
      tagline: "Bi-directional collaborative sync guaranteeing zero data loss in flight or disconnected mode",
      accent: "#38bdf8",
      nodes: [
        {
          id: "crdt-resolver",
          name: "CRDT Conflict Resolver",
          role: "Yjs / Automerge Delta Engine",
          protocol: "Binary State Vector",
          latency: "sub-3ms merge",
          specs: ["Mathematical Convergence Guarantee", "Zero Locking Required", "Optimistic Local Commit"],
        },
        {
          id: "mobile-queue",
          name: "Persistent Mutation Journal",
          role: "Durable SQLite Transaction Log",
          protocol: "Local WAL Protocol",
          latency: "sub-1ms write",
          specs: ["Idempotent Request Retry", "Exponential Backoff Policy", "Battery-Aware Sync Scheduling"],
        },
      ],
    },
  ],
  "ai-ml-solutions": [
    {
      id: "rag-pipeline",
      title: "Enterprise RAG & Semantic Mesh",
      tagline: "Domain-specific grounding with sub-second vector search over millions of internal documents",
      accent: "#00bbab",
      nodes: [
        {
          id: "embeddings-pipe",
          name: "Streaming Ingestion & Chunking",
          role: "LangChain / LlamaIndex Pipeline",
          protocol: "gRPC Streaming",
          latency: "sub-25ms chunk",
          specs: ["Semantic Context Splitting", "Multi-Modal Document Parsing", "Automated Deduplication"],
        },
        {
          id: "vector-db",
          name: "High-Throughput Vector Database",
          role: "Pinecone / Qdrant / pgvector Cluster",
          protocol: "HNSW Approximate Nearest Neighbor",
          latency: "sub-8ms search",
          specs: ["Hybrid BM25 + Dense Vector Search", "Dynamic Metadata Filtering", "Multi-Tenant Index Isolation"],
        },
        {
          id: "reranker",
          name: "Cross-Encoder Re-Ranking Engine",
          role: "Cohere Rerank / FlashRank Pod",
          protocol: "In-Memory PyTorch Inference",
          latency: "sub-35ms top-k",
          specs: ["Hallucination Guardrails", "Confidence Score Thresholding", "Prompt Context Optimization"],
        },
        {
          id: "llm-runtime",
          name: "Orchestrated LLM Inference",
          role: "vLLM / TensorRT-LLM / Claude 3.5",
          protocol: "OpenAI-Compatible Streaming SSE",
          latency: "sub-250ms first-token",
          specs: ["Continuous Batching", "PagedAttention Memory Pool", "Strict JSON Schema Enforcer"],
        },
      ],
    },
    {
      id: "agentic-orchestration",
      title: "Autonomous Multi-Agent Task Graph",
      tagline: "Collaborative autonomous agents executing complex multi-step workflows with tool sandboxes",
      accent: "#38bdf8",
      nodes: [
        {
          id: "planner-agent",
          name: "Supervisory Planning Agent",
          role: "DAG Task Decomposition Engine",
          protocol: "Structured Planning State",
          latency: "sub-150ms plan",
          specs: ["Dynamic Dependency Scheduling", "Self-Reflection & Plan Revision", "Failure Fallback Policies"],
        },
        {
          id: "tool-sandbox",
          name: "Secure Tool Execution Sandbox",
          role: "Isolated Docker / Firecracker MicroVM",
          protocol: "gRPC Tool Protocol",
          latency: "sub-10ms boot",
          specs: ["SQL Query Sandbox", "REST API Caller", "Python Script Evaluator with Zero Host Access"],
        },
      ],
    },
  ],
  "saas-development": [
    {
      id: "multitenant-mesh",
      title: "Hardened Multi-Tenant SaaS Engine",
      tagline: "Zero data leakage across tenants with dynamic schema sharding and per-tenant rate governance",
      accent: "#00bbab",
      nodes: [
        {
          id: "tenant-router",
          name: "Dynamic Tenant Context Router",
          role: "Custom Envoy / Traefik Proxy",
          protocol: "HTTP/3 Header Decoupling",
          latency: "sub-1ms context",
          specs: ["Subdomain & JWT Tenant Resolution", "Tenant Level DDoS Throttling", "Custom Domain SSL Auto-Provision"],
        },
        {
          id: "rls-database",
          name: "Row-Level Security (RLS) PostgreSQL",
          role: "PostgreSQL 16 Multi-Tenant Cluster",
          protocol: "Postgres Wire Protocol with RLS",
          latency: "sub-5ms p99",
          specs: ["Strict Session Tenant ID Enforcement", "Zero-Leak Cross-Tenant Queries", "Dynamic Schema Migration Runner"],
        },
        {
          id: "billing-meter",
          name: "Usage-Based Metering & Stripe",
          role: "Redis Timeseries & Stripe Billing",
          protocol: "Asynchronous Webhook Queue",
          latency: "real-time events",
          specs: ["Sub-Second Concurrency Metering", "Overage Alerts & Soft Caps", "Automated Prorated Invoicing"],
        },
        {
          id: "enterprise-sso",
          name: "Enterprise SSO & Directory Sync",
          role: "SAML 2.0 / OIDC / SCIM Engine",
          protocol: "SAML 2.0 & SCIM 2.0",
          latency: "instant",
          specs: ["Okta, Azure AD, Google Workspace", "Automated User Provisioning", "Immutable Security Audit Logs"],
        },
      ],
    },
  ],
  "api-integration": [
    {
      id: "api-gateway",
      title: "High-Throughput Enterprise API Gateway",
      tagline: "Sub-2ms edge mediation, protocol translation, and military-grade zero-trust authentication",
      accent: "#00bbab",
      nodes: [
        {
          id: "edge-api-gateway",
          name: "Distributed API Gateway Core",
          role: "Kong Enterprise / Envoy Edge Proxy",
          protocol: "HTTP/3, gRPC & WebSocket",
          latency: "sub-2ms proxy",
          specs: ["Distributed Token Bucket Limiting", "Protobuf-to-JSON Transcoding", "Dynamic JWT/mTLS Verification"],
        },
        {
          id: "event-stream",
          name: "High-Volume Event Hub",
          role: "Apache Kafka / Redpanda Cluster",
          protocol: "Kafka Binary Protocol",
          latency: "sub-4ms throughput",
          specs: ["Partitioned Topic Architecture", "Strict Message Deduplication", "Dead-Letter Queue with Auto-Replay"],
        },
        {
          id: "legacy-adapter",
          name: "Enterprise Adapter & CDC Connector",
          role: "Debezium & Camel Integration Pods",
          protocol: "Bi-Directional Database CDC",
          latency: "sub-15ms replication",
          specs: ["SAP / Salesforce / Workday Sync", "Automated Data Normalization", "Zero-Downtime Data Migration"],
        },
      ],
    },
  ],
  "qa-testing": [
    {
      id: "parallel-qa-grid",
      title: "Cloud-Scale Automated QA Grid",
      tagline: "Thousands of parallel tests executed across headless browser clusters with instant trace replay",
      accent: "#00bbab",
      nodes: [
        {
          id: "test-orchestrator",
          name: "Parallel Sharding Orchestrator",
          role: "Playwright / Cypress Test Grid",
          protocol: "WebSocket DevTools Protocol",
          latency: "sub-10ms step",
          specs: ["100+ Concurrent Browser Containers", "Smart Flaky Test Detection", "Video & DOM Snapshot Recording"],
        },
        {
          id: "chaos-injector",
          name: "Chaos & Resilience Engine",
          role: "Chaos Mesh / Gremlin Pods",
          protocol: "Kubernetes Injection Agent",
          latency: "real-time chaos",
          specs: ["Network Latency Spike Simulation", "Pod Termination Stress Tests", "Database Failover Health Checks"],
        },
        {
          id: "security-scanner",
          name: "Automated SAST & DAST Scanner",
          role: "SonarQube & OWASP ZAP Suite",
          protocol: "CI/CD Pipeline Security Gate",
          latency: "continuous",
          specs: ["Static Code Vulnerability Analysis", "Dependency Supply-Chain CVE Scans", "Zero-Vulnerability PR Blockers"],
        },
      ],
    },
  ],
  "hire-developers": [
    {
      id: "dedicated-pod",
      title: "Autonomous Agile Engineering Pod",
      tagline: "Dedicated senior software engineers embedded directly into your GitHub repos and Slack channels",
      accent: "#00bbab",
      nodes: [
        {
          id: "pod-lead",
          name: "Principal Tech Lead & Scrum Master",
          role: "Technical Governance & Sprint Cadence",
          protocol: "Daily Agile / Jira / Linear",
          latency: "4+ hours timezone overlap",
          specs: ["Sprint Backlog Architecture", "Daily Async Standups", "Bi-Weekly Production Demos"],
        },
        {
          id: "fullstack-engineers",
          name: "Senior Full-Stack Engineers",
          role: "Feature Delivery & High-Velocity Code",
          protocol: "Direct GitHub / GitLab PRs",
          latency: "continuous commits",
          specs: ["Top 1% Vetted Talent", "Strict TypeScript & Clean Architecture", "Comprehensive Unit Tests Included"],
        },
        {
          id: "devops-engineer",
          name: "Embedded DevOps & QA Specialist",
          role: "CI/CD Pipelines & Cloud Stability",
          protocol: "Terraform / AWS / Docker",
          latency: "24/7 monitoring",
          specs: ["Zero-Downtime Deployment Automation", "Staging Sandboxes", "Performance Benchmark Profiling"],
        },
      ],
    },
  ],
};

// Default fallback topologies if service has no specific key
const DEFAULT_TOPOLOGY: ArchitectureTopology[] = [
  {
    id: "default-architecture",
    title: "Enterprise Cloud-Native Architecture",
    tagline: "High-performance distributed platform engineered for extreme scale, reliability, and security",
    accent: "#00bbab",
    nodes: [
      {
        id: "gateway-core",
        name: "Cloud Edge API Gateway",
        role: "Kong / Envoy Edge Proxy",
        protocol: "HTTP/3 & TLS 1.3",
        latency: "sub-2ms",
        specs: ["Dynamic Rate-Limiting", "OAuth2 / JWT Token Verification", "Global Anycast Routing"],
      },
      {
        id: "core-domain",
        name: "Core Business Logic Services",
        role: "Go / Nest.js Autonomous Pods",
        protocol: "Internal gRPC / Protobuf",
        latency: "sub-10ms p99",
        specs: ["Clean Architecture Pattern", "Independent CI/CD Lifecycle", "Horizontal Pod Auto-Scaling"],
      },
      {
        id: "data-tier",
        name: "Distributed High-Availability Database",
        role: "PostgreSQL 16 + Redis Cache",
        protocol: "ACID Relational Protocol",
        latency: "sub-3ms query",
        specs: ["Read-Replica Failover", "Automated Daily Backups", "End-to-End Encryption at Rest"],
      },
    ],
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
    clientTouchpoint: "Go-live war room coordination & engineering handover workshops",
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

export default function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Background Image for Hero Section
  const heroBgImage = SERVICE_HERO_IMAGES[service.slug] || "/images/services/custom_software_3d.jpg";

  // Topologies for this service
  const topologies = SERVICE_TOPOLOGIES[service.slug] || DEFAULT_TOPOLOGY;

  // State: Interactive Architecture Explorer
  const [activeTopologyId, setActiveTopologyId] = useState<string>(topologies[0]?.id || "default");
  const activeTopology = useMemo(
    () => topologies.find((t) => t.id === activeTopologyId) || topologies[0],
    [topologies, activeTopologyId]
  );

  const [selectedNodeId, setSelectedNodeId] = useState<string>(activeTopology?.nodes[0]?.id || "");
  const activeNode = useMemo(
    () => activeTopology?.nodes.find((n) => n.id === selectedNodeId) || activeTopology?.nodes[0],
    [activeTopology, selectedNodeId]
  );

  // State: Delivery Lifecycle Stage Selection
  const [activeLifecycleStage, setActiveLifecycleStage] = useState<number>(0);

  // State: Interactive Scope & Timeline Estimator
  const [estimatorType, setEstimatorType] = useState<string>("enterprise");
  const [estimatorScale, setEstimatorScale] = useState<string>("medium");
  const [estimatorCompliance, setEstimatorCompliance] = useState<string>("soc2");

  // State: FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Estimator Calculations
  const calculatedEstimate = useMemo(() => {
    let weeksBase = 8;
    let sprints = 4;
    let stack = `${service.technologies.slice(0, 4).join(" + ")}`;

    if (estimatorType === "enterprise") {
      weeksBase += 4;
      sprints += 2;
    } else if (estimatorType === "mvp") {
      weeksBase = Math.max(6, weeksBase - 2);
      sprints = Math.max(3, sprints - 1);
    } else if (estimatorType === "scale") {
      weeksBase += 6;
      sprints += 3;
    }

    if (estimatorScale === "large") {
      weeksBase += 3;
      sprints += 2;
    } else if (estimatorScale === "small") {
      weeksBase = Math.max(5, weeksBase - 2);
      sprints = Math.max(3, sprints - 1);
    }

    if (estimatorCompliance === "soc2" || estimatorCompliance === "hipaa") {
      weeksBase += 1;
    }

    return {
      weeks: `${weeksBase}–${weeksBase + 3} Weeks`,
      sprints: `${sprints} Sprints (Bi-Weekly Demos)`,
      stack,
      deliverablesCount: `${service.deliverables.length} Key Production Deliverables`,
    };
  }, [estimatorType, estimatorScale, estimatorCompliance, service.technologies, service.deliverables.length]);

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
        {/* Background Image Layer with Adaptive Gradient Masks (0% GPU) */}
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
          {/* Background 3D Image */}
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
              <span>{service.badge} &bull; 100% IP Ownership &bull; Zero Vendor Lock-In</span>
            </div>
          </div>

          {/* Main Headline */}
          <div style={{ textAlign: "center", maxWidth: "980px", margin: "0 auto" }}>
            <h1
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
              }}
            >
              {service.title} Engineered for{" "}
              <span
                style={{
                  color: isLight ? "#008a75" : "#2dd4bf",
                }}
              >
                Sub-Second Velocity
              </span>{" "}
              & Enterprise Scale
            </h1>

            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                lineHeight: 1.65,
                color: isLight ? "#475569" : "#94a3b8",
                maxWidth: "760px",
                margin: "0 auto 2.5rem auto",
              }}
            >
              {service.heroSubheadline || service.shortDesc}
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "4rem",
              }}
            >
              <Link
                href="#contact-briefing"
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
                  background: "linear-gradient(135deg, #00bbab 0%, #0284c7 100%)",
                  boxShadow: "0 10px 25px -5px rgba(0, 187, 171, 0.4)",
                  textDecoration: "none",
                }}
              >
                <span>Schedule Architecture Review</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#architecture-explorer"
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
                <span>Explore Interactive Topology</span>
                <Terminal size={17} />
              </Link>
            </div>
          </div>

          {/* Telemetry Strip (4 Metrics) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "1.25rem",
              maxWidth: "1160px",
              margin: "0 auto",
            }}
          >
            {service.metrics.map((metric, idx) => (
              <div
                key={idx}
                style={{
                  padding: "1.5rem 1.25rem",
                  borderRadius: "16px",
                  background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.65)",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                  backdropFilter: "blur(12px)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "2.4rem",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: isLight ? "#008a75" : "#2dd4bf",
                    lineHeight: 1.1,
                    marginBottom: "0.35rem",
                  }}
                >
                  {metric.value}
                </div>
                <div
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: isLight ? "#475569" : "#94a3b8",
                  }}
                >
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. INTERACTIVE ARCHITECTURAL TOPOLOGY EXPLORER                        */}
      {/* ===================================================================== */}
      <section
        id="architecture-explorer"
        style={{
          padding: "6rem 1.5rem",
          position: "relative",
          background: isLight ? "#f8fafc" : "#020712",
          borderTop: "none",
          borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
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
                background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.12)",
                color: isLight ? "#008a75" : "#2dd4bf",
                fontSize: "0.82rem",
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
                marginBottom: "1rem",
              }}
            >
              Battle-Tested {service.title} Architecture
            </h2>
            <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.05rem", lineHeight: 1.6 }}>
              Select a production pattern below and inspect its real-time telemetry, routing protocols, and latency SLAs.
            </p>
          </div>

          {/* Topology Selector Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginBottom: "2.5rem",
            }}
          >
            {topologies.map((topo) => {
              const isSelected = topo.id === activeTopology.id;
              return (
                <button
                  key={topo.id}
                  onClick={() => {
                    setActiveTopologyId(topo.id);
                    setSelectedNodeId(topo.nodes[0]?.id || "");
                  }}
                  style={{
                    padding: "0.75rem 1.4rem",
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    background: isSelected
                      ? isLight
                        ? "#008a75"
                        : "#2dd4bf"
                      : isLight
                      ? "#f1f5f9"
                      : "rgba(255, 255, 255, 0.05)",
                    color: isSelected ? (isLight ? "#ffffff" : "#020712") : isLight ? "#334155" : "#94a3b8",
                    border: isSelected
                      ? "none"
                      : isLight
                      ? "1px solid #e2e8f0"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  {topo.title}
                </button>
              );
            })}
          </div>

          {/* Topology Architecture HUD */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
              alignItems: "stretch",
            }}
          >
            {/* Left: Interactive Nodes Diagram */}
            <div
              style={{
                padding: "2rem",
                borderRadius: "20px",
                background: isLight ? "#f8fafc" : "rgba(10, 20, 36, 0.75)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 10px 30px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div style={{ marginBottom: "1.5rem" }}>
                <span
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: activeTopology.accent,
                  }}
                >
                  Live Architecture Nodes &bull; Click to Inspect
                </span>
                <p style={{ fontSize: "0.9rem", color: isLight ? "#64748b" : "#94a3b8", marginTop: "0.35rem" }}>
                  {activeTopology.tagline}
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {activeTopology.nodes.map((node, nIdx) => {
                  const isNodeActive = activeNode?.id === node.id;
                  return (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      style={{
                        padding: "1.1rem 1.25rem",
                        borderRadius: "14px",
                        cursor: "pointer",
                        background: isNodeActive
                          ? isLight
                            ? "#ffffff"
                            : "rgba(14, 28, 48, 0.95)"
                          : isLight
                          ? "#ffffff"
                          : "rgba(255, 255, 255, 0.03)",
                        border: isNodeActive
                          ? `2px solid ${activeTopology.accent}`
                          : isLight
                          ? "1px solid #e2e8f0"
                          : "1px solid rgba(255, 255, 255, 0.06)",
                        boxShadow: isNodeActive
                          ? `0 8px 24px -4px ${activeTopology.accent}33`
                          : "none",
                        transition: "all 0.25s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                        <div
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "10px",
                            background: `${activeTopology.accent}20`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: activeTopology.accent,
                            fontWeight: 800,
                            fontSize: "0.85rem",
                          }}
                        >
                          0{nIdx + 1}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{node.name}</div>
                          <div style={{ fontSize: "0.8rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                            {node.role}
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          padding: "0.3rem 0.65rem",
                          borderRadius: "9999px",
                          background: `${activeTopology.accent}14`,
                          color: activeTopology.accent,
                        }}
                      >
                        {node.latency}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Node Telemetry Inspector */}
            {activeNode && (
              <div
                style={{
                  padding: "2rem",
                  borderRadius: "20px",
                  background: isLight ? "#f8fafc" : "rgba(8, 16, 32, 0.85)",
                  border: isLight ? "1px solid #e2e8f0" : `1px solid ${activeTopology.accent}44`,
                  boxShadow: isLight
                    ? "0 4px 20px rgba(0, 0, 0, 0.04)"
                    : `0 12px 40px -10px ${activeTopology.accent}25`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <span
                      style={{
                        fontSize: "0.76rem",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        color: activeTopology.accent,
                        textTransform: "uppercase",
                      }}
                    >
                      Node Specifications & Telemetry
                    </span>
                    <span
                      style={{
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        padding: "0.25rem 0.65rem",
                        borderRadius: "6px",
                        background: isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.1)",
                        color: isLight ? "#334155" : "#cbd5e1",
                        fontFamily: "monospace",
                      }}
                    >
                      {activeNode.protocol}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                    {activeNode.name}
                  </h3>
                  <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.92rem", marginBottom: "1.5rem" }}>
                    {activeNode.role} &bull; Latency Guarantee:{" "}
                    <strong style={{ color: activeTopology.accent }}>{activeNode.latency}</strong>
                  </p>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: isLight ? "#94a3b8" : "#64748b",
                        marginBottom: "0.75rem",
                      }}
                    >
                      Technical Capabilities & SLAs:
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                      {activeNode.specs.map((spec, sIdx) => (
                        <div
                          key={sIdx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.65rem",
                            fontSize: "0.88rem",
                            color: isLight ? "#334155" : "#cbd5e1",
                          }}
                        >
                          <CheckCircle2 size={16} color={activeTopology.accent} style={{ flexShrink: 0 }} />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "1rem 1.25rem",
                    borderRadius: "12px",
                    background: `${activeTopology.accent}12`,
                    border: `1px solid ${activeTopology.accent}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ fontSize: "0.84rem", fontWeight: 600, color: activeTopology.accent }}>
                    Ready to deploy this architecture?
                  </div>
                  <Link
                    href="#contact-briefing"
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: isLight ? "#008a75" : "#2dd4bf",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    <span>Request Spec</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. INTERACTIVE PROJECT SCOPE & SPRINT CALCULATOR                      */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f8fafc" : "transparent",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1160px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 3rem auto" }}>
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
              Delivery Estimator
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Calculate Project Scope & Bi-Weekly Sprints
            </h2>
            <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.05rem" }}>
              Configure your system archetype, concurrency target, and security standards to generate an architecture timeline.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
              alignItems: "center",
              padding: "2.5rem",
              borderRadius: "24px",
              background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.75)",
              border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: isLight ? "0 10px 30px rgba(0, 0, 0, 0.05)" : "0 15px 40px rgba(0, 0, 0, 0.4)",
            }}
          >
            {/* Inputs */}
            <div>
              {/* Archetype */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", fontSize: "0.88rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  System Archetype & Scope:
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                  {[
                    { id: "enterprise", label: "Enterprise Platform" },
                    { id: "mvp", label: "High-Speed MVP" },
                    { id: "scale", label: "High-Scale Modernization" },
                  ].map((arch) => (
                    <button
                      key={arch.id}
                      onClick={() => setEstimatorType(arch.id)}
                      style={{
                        padding: "0.55rem 1rem",
                        borderRadius: "8px",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        background: estimatorType === arch.id
                          ? isLight ? "#008a75" : "#2dd4bf"
                          : isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.05)",
                        color: estimatorType === arch.id
                          ? isLight ? "#ffffff" : "#020712"
                          : isLight ? "#334155" : "#94a3b8",
                        border: "none",
                      }}
                    >
                      {arch.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Concurrency Scale */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", fontSize: "0.88rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Peak Concurrency Load:
                </label>
                <div style={{ display: "flex", gap: "0.6rem" }}>
                  {[
                    { id: "small", label: "<10k Users" },
                    { id: "medium", label: "10k–100k Users" },
                    { id: "large", label: "100k+ High Load" },
                  ].map((scale) => (
                    <button
                      key={scale.id}
                      onClick={() => setEstimatorScale(scale.id)}
                      style={{
                        padding: "0.55rem 0.9rem",
                        borderRadius: "8px",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        background: estimatorScale === scale.id
                          ? isLight ? "#008a75" : "#2dd4bf"
                          : isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.05)",
                        color: estimatorScale === scale.id
                          ? isLight ? "#ffffff" : "#020712"
                          : isLight ? "#334155" : "#94a3b8",
                        border: "none",
                      }}
                    >
                      {scale.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Compliance */}
              <div>
                <label style={{ display: "block", fontSize: "0.88rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Compliance & Security Framework:
                </label>
                <div style={{ display: "flex", gap: "0.6rem" }}>
                  {[
                    { id: "standard", label: "Standard Enterprise" },
                    { id: "soc2", label: "SOC-2 Type II" },
                    { id: "hipaa", label: "HIPAA / Healthcare" },
                  ].map((comp) => (
                    <button
                      key={comp.id}
                      onClick={() => setEstimatorCompliance(comp.id)}
                      style={{
                        padding: "0.55rem 0.9rem",
                        borderRadius: "8px",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        background: estimatorCompliance === comp.id
                          ? isLight ? "#008a75" : "#2dd4bf"
                          : isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.05)",
                        color: estimatorCompliance === comp.id
                          ? isLight ? "#ffffff" : "#020712"
                          : isLight ? "#334155" : "#94a3b8",
                        border: "none",
                      }}
                    >
                      {comp.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Card */}
            <div
              style={{
                padding: "2rem",
                borderRadius: "18px",
                background: isLight ? "#f8fafc" : "rgba(8, 16, 32, 0.9)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(0, 187, 171, 0.3)",
                boxShadow: isLight ? "0 4px 15px rgba(0, 0, 0, 0.03)" : "0 10px 30px rgba(0, 187, 171, 0.15)",
              }}
            >
              <div style={{ fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "#2dd4bf", marginBottom: "0.75rem" }}>
                Target Architecture Timeline
              </div>
              <div style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "0.25rem" }}>
                {calculatedEstimate.weeks}
              </div>
              <div style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "0.95rem", fontWeight: 600, marginBottom: "1.5rem" }}>
                {calculatedEstimate.sprints}
              </div>

              <div style={{ height: "1px", background: isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)", marginBottom: "1.25rem" }} />

              <div style={{ marginBottom: "1.25rem" }}>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", color: isLight ? "#94a3b8" : "#64748b", fontWeight: 700, marginBottom: "0.35rem" }}>
                  Recommended Technology Stack:
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 600, color: isLight ? "#0f172a" : "#f1f5f9" }}>
                  {calculatedEstimate.stack}
                </div>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", color: isLight ? "#94a3b8" : "#64748b", fontWeight: 700, marginBottom: "0.35rem" }}>
                  Included Deliverables:
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#2dd4bf" }}>
                  {calculatedEstimate.deliverablesCount}
                </div>
              </div>

              <Link
                href="#contact-briefing"
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  padding: "0.85rem",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #00bbab 0%, #0284c7 100%)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                }}
              >
                Lock in Architecture Blueprint &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. CORE CAPABILITIES BENTO GRID                                      */}
      {/* ===================================================================== */}
      <section
        id="capabilities"
        style={{
          padding: "6rem 1.5rem",
          position: "relative",
          background: isLight ? "#ffffff" : "rgba(4, 10, 22, 0.7)",
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
                background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.12)",
                color: isLight ? "#008a75" : "#2dd4bf",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Enterprise Engineering Pillars
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Core {service.title} Capabilities
            </h2>
            <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.05rem" }}>
              Engineered with clean architectural separation, strict typing, high throughput, and zero technical debt.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  padding: "2rem",
                  borderRadius: "18px",
                  background: isLight ? "#f8fafc" : "rgba(10, 20, 36, 0.65)",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.03)" : "0 8px 30px rgba(0, 0, 0, 0.3)",
                  backdropFilter: "blur(12px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, rgba(0, 187, 171, 0.2) 0%, rgba(2, 132, 199, 0.2) 100%)",
                      border: "1px solid rgba(0, 187, 171, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isLight ? "#008a75" : "#2dd4bf",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <Zap size={22} />
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                    {feat.title}
                  </h3>
                  <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.92rem", lineHeight: 1.6 }}>
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. FILTERABLE TECHNOLOGY FABRIC                                       */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f8fafc" : "transparent",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 3.5rem auto" }}>
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
              Enterprise Technology Fabric
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Battle-Tested Technologies & Toolchains
            </h2>
            <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.05rem" }}>
              We select frameworks based on developer productivity, long-term maintainability, and sub-second performance.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "center",
              maxWidth: "960px",
              margin: "0 auto",
            }}
          >
            {service.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "0.75rem 1.4rem",
                  borderRadius: "12px",
                  background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.75)",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isLight ? "0 2px 8px rgba(0, 0, 0, 0.04)" : "0 4px 15px rgba(0, 0, 0, 0.25)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: isLight ? "#0f172a" : "#f1f5f9",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Code2 size={16} color={isLight ? "#008a75" : "#2dd4bf"} />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. REDESIGNED ENTERPRISE DELIVERY LIFECYCLE (UNIFIED PIPELINE & BENTO) */}
      {/* ===================================================================== */}
      <EnterpriseDeliveryLifecycle isLightMode={isLight} />

      {/* ===================================================================== */}
      {/* 7. ENTERPRISE COMPARISON MATRIX                                       */}
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
              Why Global Brands Choose Opash Over Generic Solutions
            </h2>
            <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.05rem" }}>
              Compare how our engineering guarantees stack up against off-the-shelf software and unvetted freelancers.
            </p>
          </div>

          <div
            style={{
              overflowX: "auto",
              borderRadius: "20px",
              border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
              background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.75)",
              boxShadow: isLight ? "0 10px 30px rgba(0, 0, 0, 0.05)" : "0 15px 40px rgba(0, 0, 0, 0.4)",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", minWidth: "750px" }}>
              <thead>
                <tr style={{ borderBottom: isLight ? "2px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.12)" }}>
                  <th style={{ padding: "1.25rem 1.5rem", fontSize: "0.88rem", fontWeight: 700, color: isLight ? "#475569" : "#94a3b8" }}>
                    Strategic Dimension
                  </th>
                  <th style={{ padding: "1.25rem 1.5rem", fontSize: "0.95rem", fontWeight: 800, color: "#2dd4bf" }}>
                    Opash {service.title}
                  </th>
                  <th style={{ padding: "1.25rem 1.5rem", fontSize: "0.88rem", fontWeight: 600, color: isLight ? "#64748b" : "#94a3b8" }}>
                    Off-the-Shelf SaaS
                  </th>
                  <th style={{ padding: "1.25rem 1.5rem", fontSize: "0.88rem", fontWeight: 600, color: isLight ? "#64748b" : "#94a3b8" }}>
                    Generic Freelancers
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    style={{
                      borderBottom: isLight ? "1px solid #f1f5f9" : "1px solid rgba(255, 255, 255, 0.05)",
                      background: rIdx % 2 === 0 ? "transparent" : isLight ? "rgba(241, 245, 249, 0.5)" : "rgba(255, 255, 255, 0.015)",
                    }}
                  >
                    <td style={{ padding: "1.2rem 1.5rem", fontWeight: 700, fontSize: "0.92rem" }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: "1.2rem 1.5rem", fontSize: "0.9rem", color: isLight ? "#0f172a" : "#f1f5f9" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                        <CheckCircle2 size={16} color="#2dd4bf" style={{ flexShrink: 0, marginTop: "3px" }} />
                        <span style={{ fontWeight: 600 }}>{row.opash}</span>
                      </div>
                    </td>
                    <td style={{ padding: "1.2rem 1.5rem", fontSize: "0.88rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                        <X size={15} color="#ef4444" style={{ flexShrink: 0, marginTop: "3px" }} />
                        <span>{row.offShelf}</span>
                      </div>
                    </td>
                    <td style={{ padding: "1.2rem 1.5rem", fontSize: "0.88rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                        <X size={15} color="#ef4444" style={{ flexShrink: 0, marginTop: "3px" }} />
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
      {/* 8. VERIFIABLE PRODUCTION DELIVERABLES                                 */}
      {/* ===================================================================== */}
      <section style={{ padding: "5.5rem 1.5rem", position: "relative" }}>
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "center" }}>
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
              <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
                Verifiable Production Deliverables
              </h2>
              <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "2rem" }}>
                From day one, all repositories, cloud credentials, Docker images, and architectural documentation are provisioned inside your organization&apos;s accounts.
              </p>

              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "14px",
                  background: isLight ? "#f8fafc" : "rgba(10, 20, 36, 0.65)",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <ShieldCheck size={20} color="#2dd4bf" />
                  <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>Permanent Legal IP Assignment</span>
                </div>
                <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.85rem", lineHeight: 1.5 }}>
                  Every line of code written by our engineers is legally assigned to your company. No shared licenses, no royalties, no hidden restrictions.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "1.1rem 1.4rem",
                    borderRadius: "12px",
                    background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.65)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isLight ? "0 2px 8px rgba(0, 0, 0, 0.03)" : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.85rem",
                  }}
                >
                  <CheckCircle2 size={18} color="#2dd4bf" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 9. FAQ ACCORDION                                                      */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f8fafc" : "rgba(6, 12, 24, 0.6)",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "860px", margin: "0 auto" }}>
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
              Enterprise FAQs
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
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
                    transition: "all 0.25s ease",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: "100%",
                      padding: "1.4rem 1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      color: isLight ? "#0f172a" : "#f1f5f9",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                    }}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                        flexShrink: 0,
                        marginLeft: "1rem",
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 1.5rem 1.4rem 1.5rem",
                        color: isLight ? "#475569" : "#94a3b8",
                        fontSize: "0.95rem",
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
      {/* 10. DIRECT ARCHITECTURE REVIEW & BRIEFING FORM                        */}
      {/* ===================================================================== */}
      <section
        id="contact-briefing"
        style={{
          padding: "6.5rem 1.5rem 7rem 1.5rem",
          position: "relative",
          background: isLight ? "#ffffff" : "#020712",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "920px", margin: "0 auto" }}>
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
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: "1rem" }}>
              Ready to Architect Your {service.title}?
            </h2>
            <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.08rem", maxWidth: "680px", margin: "0 auto" }}>
              Submit your technical requirements or system scope below. A Senior Solutions Architect will analyze your specifications and respond within 24 business hours.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
