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
  TrendingUp
} from "lucide-react";

export default function PortfolioPage() {
  const [selectedDomain, setSelectedDomain] = useState("All");

  const domains = ["All", ...Array.from(new Set(caseStudiesData.map((c) => c.domain.split(" & ")[0])))];

  const filtered = selectedDomain === "All"
    ? caseStudiesData
    : caseStudiesData.filter((c) => c.domain.includes(selectedDomain));

  return (
    <div className="bg-grid-pattern" style={{ minHeight: "100vh", position: "relative" }}>
      {/* Background Glow */}
      <div
        className="ambient-glow-orb"
        style={{
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, #0e50d7 0%, transparent 70%)",
        }}
      />

      {/* Hero */}
      <section
        style={{
          paddingTop: "6rem",
          paddingBottom: "5rem",
          position: "relative",
          zIndex: 1,
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="container-custom" style={{ textAlign: "center" }}>
          <div className="flex items-center justify-center gap-2" style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
            <Link href="/" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "var(--color-cyan)" }}>Portfolio & Case Studies</span>
          </div>

          <span className="badge-glow" style={{ marginBottom: "1rem" }}>
            Proven Track Record
          </span>

          <h1 className="heading-display" style={{ maxWidth: "920px", margin: "0.75rem auto 1.5rem auto", color: "#ffffff" }}>
            Real Client Impact & <span className="gradient-text">Verified Engineering Outcomes</span>
          </h1>

          <p className="subhead-lead" style={{ maxWidth: "780px", margin: "0 auto 3rem auto" }}>
            Explore how Opash Software partners with international founders and CTOs to modernize enterprise systems, scale high-traffic portals, and launch breakthrough digital products.
          </p>

          {/* Domain Filter Tabs */}
          <div className="flex justify-center items-center gap-2 flex-wrap">
            {domains.map((dom) => (
              <button
                key={dom}
                type="button"
                onClick={() => setSelectedDomain(dom)}
                style={{
                  padding: "0.6rem 1.4rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: selectedDomain === dom ? "1px solid var(--color-cyan)" : "1px solid rgba(255, 255, 255, 0.08)",
                  background: selectedDomain === dom ? "linear-gradient(135deg, rgba(14, 80, 215, 0.4), rgba(0, 210, 255, 0.2))" : "rgba(255, 255, 255, 0.03)",
                  color: selectedDomain === dom ? "#ffffff" : "var(--text-secondary)",
                  transition: "all 0.2s",
                }}
              >
                {dom}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Deep Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col gap-12">
            {filtered.map((study, idx) => (
              <div
                key={study.id}
                className="glass-panel"
                style={{
                  padding: "3.5rem",
                  background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(14, 80, 215, 0.12) 100%)",
                  border: "1px solid rgba(14, 80, 215, 0.3)",
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "3.5rem" }} className="study-grid">
                  {/* Left: Challenge, Solution, Story */}
                  <div>
                    <div className="flex justify-between items-center" style={{ marginBottom: "1rem" }}>
                      <span className="badge-glow">
                        {study.domain}
                      </span>
                      <a
                        href={study.website}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1"
                        style={{ color: "var(--color-cyan)", fontSize: "0.85rem", textDecoration: "none", fontWeight: 600 }}
                      >
                        <span>{study.website.replace("https://", "").replace("/", "")}</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>

                    <h2 style={{ fontSize: "1.9rem", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem", marginBottom: "1.25rem", lineHeight: 1.3 }}>
                      {study.headline}
                    </h2>

                    <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                      {study.summary}
                    </p>

                    <div style={{ marginBottom: "1.75rem" }}>
                      <div style={{ color: "var(--color-cyan)", fontWeight: 700, fontSize: "0.95rem", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                        The Challenge
                      </div>
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                        {study.challenge}
                      </p>
                    </div>

                    <div style={{ marginBottom: "2rem" }}>
                      <div style={{ color: "#10b981", fontWeight: 700, fontSize: "0.95rem", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                        Our Solution
                      </div>
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                        {study.solution}
                      </p>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((t) => (
                        <span
                          key={t}
                          style={{
                            padding: "0.3rem 0.8rem",
                            borderRadius: "var(--radius-sm)",
                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            color: "var(--text-muted)",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Metrics Card & Testimonial */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: "2rem",
                    }}
                  >
                    {/* Metrics 2x2 Grid */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "1.25rem",
                      }}
                    >
                      {study.results.map((res, i) => (
                        <div
                          key={i}
                          style={{
                            padding: "1.5rem",
                            borderRadius: "var(--radius-lg)",
                            backgroundColor: "rgba(11, 17, 32, 0.8)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            textAlign: "center",
                          }}
                        >
                          <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--color-cyan)", letterSpacing: "-0.02em" }}>
                            {res.metric}
                          </div>
                          <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem", fontWeight: 500, marginTop: "0.25rem" }}>
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Verified Quote Box */}
                    <div
                      style={{
                        padding: "2rem",
                        borderRadius: "var(--radius-lg)",
                        backgroundColor: "rgba(14, 80, 215, 0.15)",
                        border: "1px solid rgba(14, 80, 215, 0.35)",
                        position: "relative",
                      }}
                    >
                      <div className="flex items-center gap-1" style={{ marginBottom: "1rem" }}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                        ))}
                        <span style={{ fontSize: "0.75rem", color: "#10b981", marginLeft: "0.5rem", fontWeight: 700 }}>
                          Verified Client
                        </span>
                      </div>

                      <p style={{ color: "#ffffff", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                        &ldquo;{study.testimonial.quote}&rdquo;
                      </p>

                      <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "0.75rem" }}>
                        <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem" }}>
                          {study.testimonial.author}
                        </div>
                        <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                          {study.testimonial.role}, <strong>{study.testimonial.company}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "5rem 0",
          backgroundColor: "rgba(11, 17, 32, 0.8)",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          textAlign: "center",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "720px" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>
            Ready to Build Your Success Story?
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", marginBottom: "2rem" }}>
            Connect with our solution architects to plan your MVP, enterprise modernization, or AI integration.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/get-a-quote" className="btn-primary" style={{ padding: "0.95rem 2.2rem" }}>
              <span>Request Architecture Proposal</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary" style={{ padding: "0.95rem 2rem" }}>
              Contact Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
