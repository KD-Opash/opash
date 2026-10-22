"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { caseStudiesData, CaseStudy } from "@/data/case-studies";
import { 
  Sparkles, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Quote, 
  Star, 
  ShieldCheck,
  Building,
  TrendingUp,
  FolderOpen,
  Search,
  Code2,
  Cpu,
  Layers,
  Database,
  Globe,
  SlidersHorizontal,
  ChevronRight,
  Award
} from "lucide-react";
import Folder, { FolderItem } from "@/components/Folder";
import { useTheme } from "./ThemeProvider";
import PortfolioCreativeBackdrop from "./PortfolioCreativeBackdrop";

export default function PortfolioPageClient() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Filter & Search states
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTabs, setActiveTabs] = useState<Record<string, "impact" | "solution" | "stack" | "testimonial">>({});

  // 4 Core Production Domain Folders with verified deliverable KPIs
  const domainFolders = [
    {
      id: "Creative Media",
      label: "Creative Media",
      color: "#00a88f",
      items: [
        { 
          title: "4K Media Streaming Architecture", 
          metric: "95+ Lighthouse", 
          badge: "Next.js 15", 
          desc: "Sub-second 4K video previews & CDN edge caching", 
          tags: ["Next.js", "Edge CDN"] 
        },
        { 
          title: "Design System & Micro-Animations", 
          metric: "2x Inquiries", 
          badge: "UI/UX", 
          desc: "Figma design tokens & fluid 60fps cursor physics", 
          tags: ["Framer", "CSS3"] 
        },
        { 
          title: "Production Global Launch Plan", 
          metric: "100% Retained", 
          badge: "DevOps", 
          desc: "Multi-region CDN routing & zero-downtime deploy", 
          tags: ["Vercel", "Cloudinary"] 
        },
      ],
    },
    {
      id: "HealthTech",
      label: "HealthTech",
      color: "#38bdf8",
      items: [
        { 
          title: "HIPAA Security & Care Vault", 
          metric: "99.99% Uptime", 
          badge: "HIPAA Cloud", 
          desc: "End-to-end encrypted records & audited RBAC", 
          tags: ["AWS HIPAA", "Next.js"] 
        },
        { 
          title: "Practitioner Care Board", 
          metric: "65% Less Overhead", 
          badge: "SaaS UI", 
          desc: "Real-time medical task queue & schedule board", 
          tags: ["React", "PostgreSQL"] 
        },
        { 
          title: "Automated Clinical Telemetry", 
          metric: "4.9/5 CSAT", 
          badge: "Zero-Downtime", 
          desc: "Microservices sync with automated critical alerts", 
          tags: ["Node.js", "Docker"] 
        },
      ],
    },
    {
      id: "FinTech",
      label: "FinTech & Legal",
      color: "#6366f1",
      items: [
        { 
          title: "Cryptographic Verification API", 
          metric: "<1.5s Verify", 
          badge: "Security", 
          desc: "Tamper-proof digital notary & signature pipeline", 
          tags: ["FastAPI", "Python"] 
        },
        { 
          title: "Multi-API Mortgage Engine", 
          metric: "4x Throughput", 
          badge: "FinTech Cloud", 
          desc: "Automated loan calculation & credit check APIs", 
          tags: ["AWS Lambda", "DynamoDB"] 
        },
        { 
          title: "Bilingual MENA Compliance", 
          metric: "250k+ Processed", 
          badge: "Localization", 
          desc: "Arabic & English real-time certificate auth", 
          tags: ["React", "PostgreSQL"] 
        },
      ],
    },
    {
      id: "Industrial Tech",
      label: "Industrial Tech",
      color: "#f59e0b",
      items: [
        { 
          title: "2-Year Dedicated Engineering", 
          metric: "2-Year Retained", 
          badge: "Dedicated", 
          desc: "Daily agile standups, CI/CD releases & architecture", 
          tags: ["MEAN Stack", "Angular"] 
        },
        { 
          title: "CAD Catalog Search Engine", 
          metric: "3x Faster Search", 
          badge: "Performance", 
          desc: "Filtering thousands of precision mechanical parts", 
          tags: ["MongoDB", "Express"] 
        },
        { 
          title: "Zero-Downtime Microservices", 
          metric: "0 Outages", 
          badge: "Reliability", 
          desc: "Seamless legacy database migration & live sync", 
          tags: ["Node.js", "Docker"] 
        },
      ],
    },
  ];

  const domains = [
    { label: "All Projects", count: caseStudiesData.length, value: "All" },
    { label: "HealthTech & Care", count: 1, value: "HealthTech" },
    { label: "Industrial & Supply Chain", count: 1, value: "Industrial" },
    { label: "FinTech & Legal", count: 2, value: "FinTech" },
    { label: "Creative Media", count: 1, value: "Creative" },
  ];

  const filteredCaseStudies = useMemo(() => {
    return caseStudiesData.filter((cs) => {
      const matchesDomain =
        selectedDomain === "All" ||
        cs.domain.toLowerCase().includes(selectedDomain.toLowerCase());
      
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesDomain;

      const matchesSearch =
        cs.client.toLowerCase().includes(query) ||
        cs.domain.toLowerCase().includes(query) ||
        cs.headline.toLowerCase().includes(query) ||
        cs.summary.toLowerCase().includes(query) ||
        cs.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesDomain && matchesSearch;
    });
  }, [selectedDomain, searchQuery]);

  const setCardTab = (cardId: string, tab: "impact" | "solution" | "stack" | "testimonial") => {
    setActiveTabs((prev) => ({ ...prev, [cardId]: tab }));
  };

  const getCardTab = (cardId: string): "impact" | "solution" | "stack" | "testimonial" => {
    return activeTabs[cardId] || "impact";
  };

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
      {/* 1. CINEMATIC HERO SECTION: PROVEN SOFTWARE ARCHITECTURES              */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "7.5rem 1.5rem 4.5rem 1.5rem",
          overflow: "hidden",
        }}
      >
        {/* Bespoke Creative Exhibition Runway Backdrop (0% GPU/CPU) */}
        <PortfolioCreativeBackdrop isLightMode={isLight} />

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
                background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.12)",
                border: isLight ? "1px solid rgba(0, 168, 143, 0.25)" : "1px solid rgba(0, 187, 171, 0.35)",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: isLight ? "#008a75" : "#2dd4bf",
              }}
            >
              <Sparkles size={14} />
              <span>VERIFIED ENTERPRISE DELIVERABLES &bull; 75+ PRODUCTION PLATFORMS</span>
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
              Proven Software Architectures{" "}
              <span className="opash-hero-gradient-text">
                Delivered At Scale
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                lineHeight: 1.65,
                color: isLight ? "#475569" : "#94a3b8",
                maxWidth: "840px",
                margin: "0 auto 2.5rem auto",
              }}
            >
              Explore how Opash Software partners with international tech founders, healthcare innovators, and enterprise CTOs to modernize legacy architectures, launch resilient microservices, and scale mission-critical cloud portals.
            </p>

            {/* Live Flagship Deployments Ticker Ribbon */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                flexWrap: "wrap",
                marginBottom: "2.25rem",
              }}
            >
              {[
                { name: "UCareHQ", sector: "Healthcare Telehealth", stat: "1.2M Patient Records", color: "#00ffd1" },
                { name: "IKO International", sector: "Industrial CAD IoT", stat: "3x Query Acceleration", color: "#38bdf8" },
                { name: "eSanad", sector: "GovTech & FinTech", stat: "0.82s Latency SLA", color: "#818cf8" },
                { name: "Taygo", sector: "Mortgage Lending SaaS", stat: "6x Lead Velocity", color: "#10b981" },
              ].map((pill, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.4rem 0.95rem",
                    borderRadius: "9999px",
                    background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.78)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    fontSize: "0.8rem",
                    fontWeight: 650,
                    boxShadow: isLight ? "0 2px 8px rgba(0, 0, 0, 0.04)" : "0 4px 14px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: pill.color, display: "inline-block" }} />
                  <span style={{ color: isLight ? "#0f172a" : "#f8fafc", fontWeight: 750 }}>{pill.name}</span>
                  <span style={{ opacity: 0.35 }}>&bull;</span>
                  <span style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.76rem" }}>{pill.stat}</span>
                </div>
              ))}
            </div>

            {/* Quick CTAs */}
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "3.5rem" }}>
              <a
                href="#case-studies-grid"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 1.85rem",
                  borderRadius: "12px",
                  background: isLight
                    ? "linear-gradient(135deg, #008a75 0%, #00a88f 100%)"
                    : "linear-gradient(135deg, #00a88f 0%, #2dd4bf 100%)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  boxShadow: "0 4px 20px rgba(0, 168, 143, 0.3)",
                  textDecoration: "none",
                }}
              >
                <FolderOpen size={16} />
                <span>Explore Featured Case Studies</span>
                <ArrowRight size={16} />
              </a>

              <Link
                href="/get-a-quote"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 1.65rem",
                  borderRadius: "12px",
                  background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.65)",
                  border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.12)",
                  color: isLight ? "#0f172a" : "#f8fafc",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                }}
              >
                <span>Scope Your Project</span>
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
                borderRadius: "18px",
                background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.78)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(45, 212, 191, 0.22)",
                boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #00ffd1, #38bdf8)" }} />
              <div style={{ fontSize: "2.6rem", fontWeight: 800, color: isLight ? "#008a75" : "#2dd4bf", lineHeight: 1.1, marginBottom: "0.35rem" }}>
                75+
              </div>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, color: isLight ? "#1e293b" : "#f8fafc", marginBottom: "0.2rem" }}>
                Production Platforms Shipped
              </div>
              <div style={{ fontSize: "0.74rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                100% On-Time Enterprise Cadence
              </div>
            </div>

            <div
              style={{
                padding: "1.6rem 1.25rem",
                borderRadius: "18px",
                background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.78)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(56, 189, 248, 0.22)",
                boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #38bdf8, #818cf8)" }} />
              <div style={{ fontSize: "2.6rem", fontWeight: 800, color: isLight ? "#0284c7" : "#38bdf8", lineHeight: 1.1, marginBottom: "0.35rem" }}>
                99.99%
              </div>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, color: isLight ? "#1e293b" : "#f8fafc", marginBottom: "0.2rem" }}>
                Verified Production Uptime
              </div>
              <div style={{ fontSize: "0.74rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                Zero Mission-Critical Outages
              </div>
            </div>

            <div
              style={{
                padding: "1.6rem 1.25rem",
                borderRadius: "18px",
                background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.78)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(129, 140, 248, 0.22)",
                boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #818cf8, #a855f7)" }} />
              <div style={{ fontSize: "2.6rem", fontWeight: 800, color: isLight ? "#4f46e5" : "#818cf8", lineHeight: 1.1, marginBottom: "0.35rem" }}>
                $40M+
              </div>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, color: isLight ? "#1e293b" : "#f8fafc", marginBottom: "0.2rem" }}>
                Client Valuations Powered
              </div>
              <div style={{ fontSize: "0.74rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                Scalable Multi-Tenant Architecture
              </div>
            </div>

            <div
              style={{
                padding: "1.6rem 1.25rem",
                borderRadius: "18px",
                background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.78)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(45, 212, 191, 0.22)",
                boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #00ffd1, #10b981)" }} />
              <div style={{ fontSize: "2.6rem", fontWeight: 800, color: isLight ? "#0d9488" : "#2dd4bf", lineHeight: 1.1, marginBottom: "0.35rem" }}>
                96%
              </div>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, color: isLight ? "#1e293b" : "#f8fafc", marginBottom: "0.2rem" }}>
                Long-Term Retention Rate
              </div>
              <div style={{ fontSize: "0.74rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                Dedicated Multi-Year Engagements
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. INTERACTIVE PRODUCTION BLUEPRINTS VAULT (The 3D Folders System)    */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "5rem 1.5rem 4rem 1.5rem",
          position: "relative",
          background: isLight ? "#f1f5f9" : "rgba(6, 12, 24, 0.6)",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
          borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
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
              Production Blueprints Vault
            </span>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.7rem)", fontWeight: 800, lineHeight: 1.2 }}>
              Interactive Domain Deliverable Schematics
            </h2>
            <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "1.05rem", marginTop: "0.75rem" }}>
              Click open each domain vault below to inspect verified architectural deliverables, performance telemetry, and engineering stack details.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
              gap: "2rem",
              alignItems: "start",
            }}
          >
            {domainFolders.map((df) => (
              <div key={df.id} style={{ display: "flex", justifyContent: "center" }}>
                <Folder
                  label={df.label}
                  color={df.color}
                  items={df.items}
                  variant="glass"
                  mode="folder"
                  theme={isLight ? "light" : "dark"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. CASE STUDIES GRID WITH DOMAIN FILTERS & SEARCH                     */}
      {/* ===================================================================== */}
      <section id="case-studies-grid" style={{ padding: "6rem 1.5rem", position: "relative" }}>
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          {/* Header & Controls */}
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
              Engineering Case Studies
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 800, lineHeight: 1.2 }}>
              Detailed Client Architectures & Impact
            </h2>
            <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "1.05rem", marginTop: "0.75rem" }}>
              Filter by industry domain or search for specific technologies to inspect our production track record.
            </p>
          </div>

          {/* Search & Domain Filter Bar */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              marginBottom: "3.5rem",
              maxWidth: "1050px",
              margin: "0 auto 3.5rem auto",
            }}
          >
            {/* Search Input */}
            <div
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <Search
                size={18}
                style={{
                  position: "absolute",
                  left: "1.25rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: isLight ? "#94a3b8" : "#64748b",
                }}
              />
              <input
                type="text"
                placeholder="Search by client, industry, or tech (e.g. Next.js, AWS, Python, Angular)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.95rem 1.25rem 0.95rem 3.25rem",
                  borderRadius: "14px",
                  background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.75)",
                  border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.12)",
                  color: isLight ? "#0f172a" : "#f8fafc",
                  fontSize: "0.95rem",
                  outline: "none",
                  boxShadow: isLight ? "0 2px 10px rgba(0, 0, 0, 0.03)" : "none",
                }}
              />
            </div>

            {/* Filter Pills */}
            <div
              style={{
                display: "flex",
                gap: "0.6rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {domains.map((dom) => {
                const isSelected = selectedDomain === dom.value;
                return (
                  <button
                    key={dom.value}
                    onClick={() => setSelectedDomain(dom.value)}
                    style={{
                      padding: "0.55rem 1.15rem",
                      borderRadius: "9999px",
                      background: isSelected
                        ? isLight ? "#008a75" : "#2dd4bf"
                        : isLight ? "#ffffff" : "rgba(15, 23, 42, 0.6)",
                      color: isSelected
                        ? isLight ? "#ffffff" : "#020712"
                        : isLight ? "#475569" : "#94a3b8",
                      border: isSelected
                        ? "none"
                        : isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.08)",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      transition: "all 0.2s ease",
                      boxShadow: isSelected
                        ? isLight ? "0 4px 15px rgba(0, 168, 143, 0.25)" : "0 4px 15px rgba(45, 212, 191, 0.25)"
                        : "none",
                    }}
                  >
                    <span>{dom.label}</span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        padding: "0.1rem 0.4rem",
                        borderRadius: "9999px",
                        background: isSelected
                          ? isLight ? "rgba(255, 255, 255, 0.25)" : "rgba(2, 7, 18, 0.2)"
                          : isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      {dom.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Case Studies Bento Grid */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
            }}
          >
            {filteredCaseStudies.map((cs) => {
              const currentTab = getCardTab(cs.id);
              return (
                <div
                  key={cs.id}
                  style={{
                    borderRadius: "24px",
                    background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.75)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isLight ? "0 8px 30px rgba(0, 0, 0, 0.04)" : "0 15px 45px rgba(0, 0, 0, 0.35)",
                    padding: "2.5rem",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  {/* Top Header: Client & Domain Badges + Live Link */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "1.5rem",
                      flexWrap: "wrap",
                      marginBottom: "1.5rem",
                      paddingBottom: "1.25rem",
                      borderBottom: isLight ? "1px solid #f1f5f9" : "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                        <span
                          style={{
                            padding: "0.3rem 0.8rem",
                            borderRadius: "9999px",
                            background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.15)",
                            color: isLight ? "#008a75" : "#2dd4bf",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                          }}
                        >
                          {cs.domain}
                        </span>
                        <span style={{ fontSize: "1.3rem", fontWeight: 800, color: isLight ? "#0f172a" : "#f8fafc" }}>
                          {cs.client}
                        </span>
                      </div>
                      <h3 style={{ fontSize: "1.5rem", fontWeight: 800, lineHeight: 1.3, maxWidth: "850px" }}>
                        {cs.headline}
                      </h3>
                    </div>

                    <a
                      href={cs.website}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        padding: "0.6rem 1.2rem",
                        borderRadius: "10px",
                        background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.06)",
                        border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.1)",
                        color: isLight ? "#008a75" : "#2dd4bf",
                        fontWeight: 700,
                        fontSize: "0.88rem",
                        textDecoration: "none",
                        flexShrink: 0,
                      }}
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  {/* Quantitative Telemetry Metrics Bar */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                      gap: "1rem",
                      padding: "1.25rem",
                      borderRadius: "16px",
                      background: isLight ? "#f8fafc" : "rgba(15, 23, 42, 0.6)",
                      border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.05)",
                      marginBottom: "1.75rem",
                    }}
                  >
                    {cs.results.map((res, rIdx) => (
                      <div key={rIdx} style={{ textAlign: "center" }}>
                        <div
                          style={{
                            fontSize: "1.8rem",
                            fontWeight: 800,
                            color: isLight ? "#008a75" : "#2dd4bf",
                            lineHeight: 1.1,
                            marginBottom: "0.2rem",
                          }}
                        >
                          {res.metric}
                        </div>
                        <div style={{ fontSize: "0.8rem", fontWeight: 600, color: isLight ? "#64748b" : "#94a3b8" }}>
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Tab Switcher */}
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                      paddingBottom: "0.75rem",
                      marginBottom: "1.5rem",
                      flexWrap: "wrap",
                    }}
                  >
                    {[
                      { key: "impact", label: "Executive Summary" },
                      { key: "solution", label: "Challenge & Architectural Solution" },
                      { key: "stack", label: "Production Tech Stack" },
                      { key: "testimonial", label: "Verified Client Endorsement" },
                    ].map((t) => {
                      const isActive = currentTab === t.key;
                      return (
                        <button
                          key={t.key}
                          onClick={() => setCardTab(cs.id, t.key as any)}
                          style={{
                            padding: "0.45rem 1rem",
                            borderRadius: "8px",
                            background: isActive
                              ? isLight ? "rgba(0, 168, 143, 0.12)" : "rgba(0, 187, 171, 0.15)"
                              : "transparent",
                            color: isActive
                              ? isLight ? "#008a75" : "#2dd4bf"
                              : isLight ? "#64748b" : "#94a3b8",
                            border: "none",
                            fontWeight: 700,
                            fontSize: "0.88rem",
                            cursor: "pointer",
                            transition: "all 0.15s ease",
                          }}
                        >
                          {t.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Tab Panel Content */}
                  <div>
                    {currentTab === "impact" && (
                      <div>
                        <p style={{ color: isLight ? "#334155" : "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
                          {cs.summary}
                        </p>
                      </div>
                    )}

                    {currentTab === "solution" && (
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                        <div
                          style={{
                            padding: "1.25rem",
                            borderRadius: "12px",
                            background: isLight ? "rgba(239, 68, 68, 0.05)" : "rgba(239, 68, 68, 0.08)",
                            borderLeft: "4px solid #ef4444",
                          }}
                        >
                          <div style={{ fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", color: "#ef4444", marginBottom: "0.4rem" }}>
                            The Architectural Challenge
                          </div>
                          <p style={{ color: isLight ? "#334155" : "#cbd5e1", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                            {cs.challenge}
                          </p>
                        </div>

                        <div
                          style={{
                            padding: "1.25rem",
                            borderRadius: "12px",
                            background: isLight ? "rgba(0, 168, 143, 0.06)" : "rgba(0, 187, 171, 0.08)",
                            borderLeft: `4px solid ${isLight ? "#008a75" : "#2dd4bf"}`,
                          }}
                        >
                          <div style={{ fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", color: isLight ? "#008a75" : "#2dd4bf", marginBottom: "0.4rem" }}>
                            The Opash Solution
                          </div>
                          <p style={{ color: isLight ? "#334155" : "#cbd5e1", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                            {cs.solution}
                          </p>
                        </div>
                      </div>
                    )}

                    {currentTab === "stack" && (
                      <div>
                        <div style={{ fontSize: "0.88rem", fontWeight: 700, color: isLight ? "#64748b" : "#94a3b8", marginBottom: "0.75rem" }}>
                          Technologies & Cloud Services Used in Production:
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
                          {cs.technologies.map((tech) => (
                            <span
                              key={tech}
                              style={{
                                padding: "0.4rem 0.85rem",
                                borderRadius: "8px",
                                background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.06)",
                                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                                color: isLight ? "#0f172a" : "#f8fafc",
                                fontSize: "0.85rem",
                                fontWeight: 600,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentTab === "testimonial" && (
                      <div
                        style={{
                          padding: "1.5rem",
                          borderRadius: "16px",
                          background: isLight ? "rgba(0, 168, 143, 0.05)" : "rgba(0, 187, 171, 0.06)",
                          border: isLight ? "1px solid rgba(0, 168, 143, 0.15)" : "1px solid rgba(0, 187, 171, 0.2)",
                        }}
                      >
                        <div style={{ display: "flex", gap: "0.25rem", color: "#f59e0b", marginBottom: "0.6rem" }}>
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={15} fill="#f59e0b" />
                          ))}
                        </div>
                        <p style={{ fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.6, color: isLight ? "#1e293b" : "#f1f5f9", marginBottom: "0.75rem" }}>
                          &ldquo;{cs.testimonial.quote}&rdquo;
                        </p>
                        <div style={{ fontWeight: 800, fontSize: "0.95rem", color: isLight ? "#008a75" : "#2dd4bf" }}>
                          {cs.testimonial.author} &bull; <span style={{ fontWeight: 600, color: isLight ? "#64748b" : "#94a3b8" }}>{cs.testimonial.role}, {cs.testimonial.company}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. VERIFIED CLIENT VOICE & EXECUTIVE ENDORSEMENTS                     */}
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
              Executive Testimonials
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 800, lineHeight: 1.2 }}>
              What International Founders Say
            </h2>
            <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "1.05rem", marginTop: "0.75rem" }}>
              Direct feedback from technical leaders who partnered with Opash Software to build their core products.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {caseStudiesData.map((cs) => (
              <div
                key={cs.id}
                style={{
                  padding: "2.25rem 2rem",
                  borderRadius: "20px",
                  background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.75)",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.03)" : "0 8px 30px rgba(0, 0, 0, 0.25)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <div style={{ display: "flex", gap: "0.2rem", color: "#f59e0b" }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} fill="#f59e0b" />
                      ))}
                    </div>
                    <span
                      style={{
                        padding: "0.2rem 0.6rem",
                        borderRadius: "9999px",
                        background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.12)",
                        color: isLight ? "#008a75" : "#2dd4bf",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                      }}
                    >
                      {cs.client}
                    </span>
                  </div>

                  <p style={{ color: isLight ? "#334155" : "#cbd5e1", fontSize: "0.98rem", lineHeight: 1.65, fontStyle: "italic", marginBottom: "1.5rem" }}>
                    &ldquo;{cs.testimonial.quote}&rdquo;
                  </p>
                </div>

                <div style={{ borderTop: isLight ? "1px solid #f1f5f9" : "1px solid rgba(255, 255, 255, 0.06)", paddingTop: "1rem" }}>
                  <div style={{ fontWeight: 800, fontSize: "0.95rem" }}>
                    {cs.testimonial.author}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                    {cs.testimonial.role} &bull; {cs.testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. READY TO ARCHITECT YOUR SOLUTION (Interactive Scoper CTA)          */}
      {/* ===================================================================== */}
      <section style={{ padding: "6rem 1.5rem", position: "relative" }}>
        <div className="container-custom" style={{ maxWidth: "1050px", margin: "0 auto" }}>
          <div
            style={{
              padding: "4rem 3rem",
              borderRadius: "28px",
              background: isLight
                ? "linear-gradient(135deg, rgba(0, 168, 143, 0.08) 0%, rgba(14, 165, 233, 0.08) 100%)"
                : "linear-gradient(135deg, rgba(0, 187, 171, 0.15) 0%, rgba(56, 189, 248, 0.1) 100%)",
              border: isLight ? "1px solid rgba(0, 168, 143, 0.2)" : "1px solid rgba(0, 187, 171, 0.25)",
              boxShadow: isLight ? "0 10px 40px rgba(0, 0, 0, 0.04)" : "0 15px 50px rgba(0, 0, 0, 0.35)",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "0.35rem 0.95rem",
                borderRadius: "9999px",
                background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.15)",
                color: isLight ? "#008a75" : "#2dd4bf",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Start Your Project
            </span>

            <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
              Ready To Build Something Extraordinary?
            </h2>

            <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.1rem", lineHeight: 1.65, maxWidth: "700px", margin: "0 auto 2.5rem auto" }}>
              Whether you need to architect an MVP from scratch or scale an existing enterprise platform with dedicated senior engineers, our team delivers within your runway and timelines.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                href="/get-a-quote"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  padding: "0.95rem 2rem",
                  borderRadius: "14px",
                  background: isLight
                    ? "linear-gradient(135deg, #008a75 0%, #00a88f 100%)"
                    : "linear-gradient(135deg, #00a88f 0%, #2dd4bf 100%)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "1rem",
                  boxShadow: "0 4px 20px rgba(0, 168, 143, 0.35)",
                  textDecoration: "none",
                }}
              >
                <span>Scope Your Project Now</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/company"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.95rem 1.85rem",
                  borderRadius: "14px",
                  background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.7)",
                  border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.12)",
                  color: isLight ? "#0f172a" : "#f8fafc",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                }}
              >
                <span>Learn About Our Studio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
