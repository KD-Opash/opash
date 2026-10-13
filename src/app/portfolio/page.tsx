"use client";

import React, { useState } from "react";
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
  FolderOpen
} from "lucide-react";
import AtmosphericHero from "@/components/AtmosphericHero";
import Folder, { FolderItem } from "@/components/Folder";

export default function PortfolioPage() {
  const [selectedDomain, setSelectedDomain] = useState("All");

  const domains = ["All", "Creative Media", "HealthTech", "FinTech", "Industrial Tech"];

  const filtered = selectedDomain === "All"
    ? caseStudiesData
    : caseStudiesData.filter((c) => c.domain.toLowerCase().includes(selectedDomain.toLowerCase()));

  // 4 Core Production Domain Folders with verified deliverable KPIs
  const domainFolders = [
    {
      id: "Creative Media",
      label: "Creative Media",
      color: "#5EC098",
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

  // Specific Project Deliverable Dossiers
  const deliverablesByStudy: Record<string, FolderItem[]> = {
    stickyframe: [
      { title: "Brand guidelines & UI system", desc: "Typography tokens & interaction specs", badge: "Figma" },
      { title: "Next.js video architecture", desc: "Sub-second 4K preview streaming", badge: "Code" },
      { title: "Lighthouse 95+ audit report", desc: "Accessibility & Core Web Vitals", badge: "Audit" },
      { title: "Client launch plan", desc: "CDN routing & analytics setup", badge: "Plan" },
    ],
    ucarehq: [
      { title: "HIPAA compliance audit", desc: "Encrypted patient data scheme", badge: "Security" },
      { title: "Care coordination board", desc: "Practitioner task management UI", badge: "Frontend" },
      { title: "PostgreSQL schema & APIs", desc: "Role-based access control endpoints", badge: "Backend" },
      { title: "AWS HIPAA deployment log", desc: "Hardened VPC & automated backups", badge: "DevOps" },
    ],
    "iko-intl": [
      { title: "2-Year dedicated sprint log", desc: "Daily agile standups & deliverables", badge: "Contract" },
      { title: "Angular CAD search engine", desc: "Thousands of industrial parts catalog", badge: "UI" },
      { title: "Express/MongoDB microservices", desc: "High-concurrency quoting engine", badge: "API" },
      { title: "Zero-downtime migration plan", desc: "Seamless legacy data transfer", badge: "Architecture" },
    ],
    esanad: [
      { title: "MENA notarization protocol", desc: "Legally binding electronic signature", badge: "Legal" },
      { title: "Tamper-proof hash pipeline", desc: "Instant PDF authenticity checks", badge: "Security" },
      { title: "GovTech API gateway", desc: "Government portal integration spec", badge: "API" },
    ],
  };

  const defaultDeliverables: FolderItem[] = [
    { title: "Architecture blueprint", desc: "High-throughput cloud diagram", badge: "Design" },
    { title: "Production sprint backlog", desc: "Agile 2-week milestones & deliverables", badge: "Agile" },
    { title: "QA automated test report", desc: "100% test pass rate across devices", badge: "QA" },
  ];

  return (
    <div className="bg-grid-pattern" style={{ minHeight: "100vh", position: "relative" }}>
      {/* Background Glow */}
      <div
        className="ambient-glow-orb"
        style={{
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, #476D9A 0%, transparent 70%)",
        }}
      />

      {/* Atmospheric Hero Section */}
      <AtmosphericHero
        badge="VERIFIED PRODUCTION IMPACT"
        titleTop="Proven software architectures"
        titleAccent="delivered at scale"
        subheadline="Explore how Opash Software partners with international founders and CTOs to modernize legacy systems, scale high-traffic portals, and launch breakthrough platforms."
        primaryCta={{ label: "Scope Your Solution", href: "/get-a-quote" }}
        secondaryCta={{ label: "Explore Case Studies", href: "#case-studies" }}
        leftCard={{
          tag: "SCALE & CONCURRENCY",
          title: "High-Throughput SaaS",
          description: "Architected for 120M+ monthly transactions, sub-80ms p95 latency, and zero data loss across distributed microservices.",
          graphType: "arc",
          metric: "120M+ Requests / Month",
        }}
        rightCard={{
          tag: "CROSS-PLATFORM REACH",
          title: "Mobile & AI Systems",
          description: "Native performance, 4.9★ rating across iOS and Android, and autonomous vector database retrieval pipelines.",
          graphType: "cycle",
          metric: "4.9★ User Satisfaction",
        }}
        bottomChildren={
          <div id="case-studies">
            <div
              style={{
                color: "var(--text-muted)",
                fontSize: "0.82rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.85rem",
              }}
            >
              Filter by Industry Domain
            </div>

            {/* Quick Domain Filter Buttons */}
            <div className="flex justify-center items-center gap-2 flex-wrap" style={{ marginBottom: "2.5rem" }}>
              {domains.map((dom) => {
                const isSelected = selectedDomain.toLowerCase() === dom.toLowerCase();
                return (
                  <button
                    key={dom}
                    type="button"
                    onClick={() => setSelectedDomain(dom)}
                    style={{
                      padding: "0.55rem 1.35rem",
                      borderRadius: "var(--radius-full)",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      border: isSelected
                        ? "1px solid var(--color-mint, #5EC098)"
                        : "1px solid var(--border-subtle)",
                      background: isSelected
                        ? "linear-gradient(135deg, #476D9A 0%, #5EC098 100%)"
                        : "var(--bg-elevated)",
                      color: isSelected ? "#ffffff" : "var(--text-secondary)",
                      transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      boxShadow: isSelected
                        ? "0 4px 18px rgba(94, 192, 152, 0.35)"
                        : "none",
                    }}
                  >
                    {dom}
                  </button>
                );
              })}
            </div>

            {/* ========================================================================= */}
            {/* REACT BITS 3D GLASS FOLDERS SHOWCASE (Interactive Domain Archives) */}
            {/* ========================================================================= */}
            <div style={{ marginTop: "1rem", textAlign: "left" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <div className="flex items-center gap-2">
                  <FolderOpen size={18} style={{ color: "var(--color-mint, #5EC098)" }} />
                  <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--text-primary)" }}>
                    Interactive Project Folders & Deliverables
                  </span>
                </div>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 600 }}>
                  Hover or click folders to peek internal dossiers
                </span>
              </div>

              {/* Grid of 4 Physical Domain Deliverable Folders */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(255px, 1fr))",
                  gap: "1.35rem",
                }}
              >
                {domainFolders.map((folder) => {
                  const isActive = selectedDomain.toLowerCase() === folder.id.toLowerCase();
                  return (
                    <Folder
                      key={folder.id}
                      mode="folder"
                      variant="glass"
                      color={folder.color}
                      label={folder.label}
                      items={folder.items}
                      active={isActive}
                      theme="auto"
                      onClick={() => setSelectedDomain(folder.id)}
                      onItemClick={(item) => setSelectedDomain(folder.id)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        }
      />

      {/* ========================================================================= */}
      {/* CASE STUDIES CARDS WITH INTEGRATED FOLDER DELIVERABLES */}
      {/* ========================================================================= */}
      <section className="section-padding" style={{ paddingTop: "3rem" }}>
        <div className="container-custom">
          <div className="flex flex-col gap-14">
            {filtered.map((study) => {
              const deliverables = deliverablesByStudy[study.id] || defaultDeliverables;
              return (
                <div
                  key={study.id}
                  className="glass-panel cta-banner-box"
                  style={{
                    padding: "3.25rem 3rem",
                    borderRadius: "28px",
                    border: "1px solid var(--border-medium)",
                    boxShadow: "0 25px 65px -15px rgba(0, 0, 0, 0.45)",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.25fr 1fr",
                      gap: "3.5rem",
                    }}
                    className="study-grid"
                  >
                    {/* Left: Challenge, Solution, Story */}
                    <div>
                      <div className="flex justify-between items-center" style={{ marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
                        <span className="badge-glow">
                          {study.domain}
                        </span>
                        <a
                          href={study.website}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5"
                          style={{
                            color: "var(--color-mint, #5EC098)",
                            fontSize: "0.85rem",
                            textDecoration: "none",
                            fontWeight: 700,
                          }}
                        >
                          <span>{study.website.replace("https://", "").replace("/", "")}</span>
                          <ExternalLink size={14} />
                        </a>
                      </div>

                      <h2
                        style={{
                          fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                          fontWeight: 850,
                          marginTop: "0.5rem",
                          marginBottom: "1.1rem",
                          lineHeight: 1.25,
                          color: "var(--text-primary)",
                        }}
                      >
                        {study.headline}
                      </h2>

                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "1.02rem",
                          lineHeight: 1.7,
                          marginBottom: "1.85rem",
                        }}
                      >
                        {study.summary}
                      </p>

                      <div style={{ marginBottom: "1.5rem" }}>
                        <div
                          style={{
                            color: "var(--color-primary-light, #6289B8)",
                            fontWeight: 800,
                            fontSize: "0.88rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            marginBottom: "0.4rem",
                          }}
                        >
                          The Challenge
                        </div>
                        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                          {study.challenge}
                        </p>
                      </div>

                      <div style={{ marginBottom: "1.85rem" }}>
                        <div
                          style={{
                            color: "var(--color-mint, #5EC098)",
                            fontWeight: 800,
                            fontSize: "0.88rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            marginBottom: "0.4rem",
                          }}
                        >
                          Our Solution
                        </div>
                        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                          {study.solution}
                        </p>
                      </div>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((t) => (
                          <span
                            key={t}
                            style={{
                              padding: "0.3rem 0.8rem",
                              borderRadius: "var(--radius-sm)",
                              backgroundColor: "var(--bg-elevated)",
                              border: "1px solid var(--border-subtle)",
                              color: "var(--text-muted)",
                              fontSize: "0.78rem",
                              fontWeight: 700,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Metrics, 3D Folder Deliverables & Testimonial */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.75rem",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Metrics 2x2 Grid */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "1rem",
                        }}
                      >
                        {study.results.map((res, i) => (
                          <div
                            key={i}
                            style={{
                              padding: "1.25rem",
                              borderRadius: "18px",
                              backgroundColor: "var(--bg-card)",
                              border: "1px solid var(--border-subtle)",
                              textAlign: "center",
                            }}
                          >
                            <div
                              style={{
                                fontSize: "1.85rem",
                                fontWeight: 850,
                                color: "var(--color-mint, #5EC098)",
                                letterSpacing: "-0.02em",
                              }}
                            >
                              {res.metric}
                            </div>
                            <div
                              style={{
                                color: "var(--text-secondary)",
                                fontSize: "0.78rem",
                                fontWeight: 600,
                                marginTop: "0.25rem",
                              }}
                            >
                              {res.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* ========================================================================= */}
                      {/* INTEGRATED FOLDER COMPONENT: Project Deliverables & Specs */}
                      {/* ========================================================================= */}
                      <div>
                        <Folder
                          mode="book"
                          variant="glass"
                          color={
                            study.id === "stickyframe"
                              ? "#5EC098"
                              : study.id === "ucarehq"
                              ? "#38bdf8"
                              : study.id === "iko-intl"
                              ? "#f59e0b"
                              : "#476D9A"
                          }
                          label={`${study.client} Deliverables`}
                          items={deliverables}
                          theme="auto"
                          onItemClick={(item, index) => {
                            // Interactive item click handler
                            console.log(`Clicked deliverable for ${study.client}:`, item.title, index);
                          }}
                        />
                      </div>

                      {/* Verified Quote Box */}
                      <div
                        style={{
                          padding: "1.5rem",
                          borderRadius: "18px",
                          backgroundColor: "rgba(71, 109, 154, 0.12)",
                          border: "1px solid var(--border-accent)",
                          position: "relative",
                        }}
                      >
                        <div className="flex items-center gap-1" style={{ marginBottom: "0.75rem" }}>
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                          ))}
                          <span
                            style={{
                              fontSize: "0.74rem",
                              color: "#10b981",
                              marginLeft: "0.45rem",
                              fontWeight: 700,
                            }}
                          >
                            Verified Client
                          </span>
                        </div>

                        <p
                          style={{
                            color: "var(--text-primary)",
                            fontStyle: "italic",
                            fontSize: "0.92rem",
                            lineHeight: 1.6,
                            marginBottom: "1rem",
                          }}
                        >
                          &ldquo;{study.testimonial.quote}&rdquo;
                        </p>

                        <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "0.65rem" }}>
                          <div style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "0.92rem" }}>
                            {study.testimonial.author}
                          </div>
                          <div style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
                            {study.testimonial.role}, <strong>{study.testimonial.company}</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            className="glass-panel"
            style={{
              padding: "4.5rem 2rem",
              borderRadius: "32px",
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(71, 109, 154, 0.25) 0%, rgba(94, 192, 152, 0.15) 100%)",
              border: "1px solid var(--border-medium)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 900,
                color: "#ffffff",
                marginBottom: "1rem",
              }}
            >
              Have a Similar Architecture to Build?
            </h2>
            <p
              style={{
                maxWidth: "650px",
                margin: "0 auto 2.5rem auto",
                color: "var(--text-secondary)",
                fontSize: "1.08rem",
                lineHeight: 1.65,
              }}
            >
              Partner with dedicated engineers who take full ownership of your roadmap. From Surat HQ to your timezone, we scale with zero friction.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/get-a-quote"
                className="hero-valerio-primary-btn"
              >
                <Sparkles size={18} />
                <span>Schedule Architecture Call</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
