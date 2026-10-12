"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  Award, 
  Code2, 
  Globe, 
  Smartphone, 
  BrainCircuit, 
  Cloud, 
  Cpu, 
  Zap, 
  Users, 
  Clock, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Building2,
  Lock,
  Headphones,
  Check,
  X
} from "lucide-react";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import { caseStudiesData } from "@/data/case-studies";
import { industriesData } from "@/data/industries";
import { blogsData } from "@/data/blogs";
import TechStackMatrix from "@/components/TechStackMatrix";
import ProjectEstimator from "@/components/ProjectEstimator";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  const serviceIcons = {
    "custom-software": Code2,
    "web-development": Globe,
    "mobile-development": Smartphone,
    "ai-ml-solutions": BrainCircuit,
    "saas-development": Cloud,
    "api-integration": Cpu,
    "qa-testing": ShieldCheck,
    "hire-developers": Users,
  };

  return (
    <div className="bg-grid-pattern" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background Ambient Orbs */}
      <div
        className="ambient-glow-orb"
        style={{
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, #0e50d7 0%, transparent 70%)",
        }}
      />
      <div
        className="ambient-glow-orb"
        style={{
          top: "800px",
          right: "-100px",
          background: "radial-gradient(circle, #00d2ff 0%, transparent 70%)",
          opacity: 0.15,
        }}
      />

      {/* ========================================================= */}
      {/* SECTION 1: HERO */}
      {/* ========================================================= */}
      <section
        style={{
          paddingTop: "5rem",
          paddingBottom: "5.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="container-custom" style={{ textAlign: "center" }}>
          {/* Top Pill */}
          <div style={{ display: "inline-block", marginBottom: "1.5rem" }}>
            <span className="badge-glow" style={{ fontSize: "0.85rem", padding: "0.45rem 1.25rem" }}>
              ⚡ Top Global Partner For Custom Software & AI Solutions
            </span>
          </div>

          {/* Kinetic Headline */}
          <h1
            className="heading-display"
            style={{
              maxWidth: "1050px",
              margin: "0 auto 1.5rem auto",
              color: "#ffffff",
            }}
          >
            Engineering Scalable{" "}
            <span className="gradient-text">Custom Software, Cloud SaaS</span> & Next-Gen AI
          </h1>

          {/* Subtitle */}
          <p
            className="subhead-lead"
            style={{
              maxWidth: "800px",
              margin: "0 auto 2.5rem auto",
            }}
          >
            We transform bold ideas into robust digital products. From high-concurrency web & mobile apps to private LLM agents, Opash Software empowers startups and enterprises with agile speed and zero technical debt.
          </p>

          {/* Action CTAs */}
          <div className="flex items-center justify-center gap-4 flex-wrap" style={{ marginBottom: "4rem" }}>
            <Link
              href="/get-a-quote"
              className="btn-primary"
              style={{ padding: "1.05rem 2.4rem", fontSize: "1.05rem" }}
            >
              <Sparkles size={18} />
              <span>Estimate Your Project</span>
            </Link>
            <Link
              href="/portfolio"
              className="btn-secondary"
              style={{ padding: "1.05rem 2.2rem", fontSize: "1.05rem" }}
            >
              <span>Explore Verified Work</span>
              <ArrowRight size={18} />
            </Link>
            <a
              href={companyData.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="glass-pill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.95rem 1.6rem",
                color: "#25D366",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>

          {/* Live Stats Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.25rem",
              maxWidth: "1150px",
              margin: "0 auto",
            }}
          >
            <div className="glass-panel" style={{ padding: "1.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "2.75rem", fontWeight: 800, color: "var(--color-cyan)" }}>
                {companyData.stats.developers}
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 500, marginTop: "0.25rem" }}>
                Experienced Developers
              </div>
            </div>

            <div className="glass-panel" style={{ padding: "1.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "2.75rem", fontWeight: 800, color: "#ffffff" }}>
                {companyData.stats.projectsDelivered}
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 500, marginTop: "0.25rem" }}>
                Global Projects Delivered
              </div>
            </div>

            <div className="glass-panel" style={{ padding: "1.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "2.75rem", fontWeight: 800, color: "var(--color-cyan)" }}>
                {companyData.stats.hoursExecuted}
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 500, marginTop: "0.25rem" }}>
                Hours of Project Execution
              </div>
            </div>

            <div className="glass-panel" style={{ padding: "1.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "2.75rem", fontWeight: 800, color: "#ffffff" }}>
                {companyData.stats.yearsExperience}
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 500, marginTop: "0.25rem" }}>
                Years Industry Excellence
              </div>
            </div>

            <div className="glass-panel" style={{ padding: "1.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "2.75rem", fontWeight: 800, color: "#10b981" }}>
                {companyData.stats.clientRetentionRate}
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 500, marginTop: "0.25rem" }}>
                Client Retention Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: VERIFIED RECOGNITIONS TICKER */}
      {/* ========================================================= */}
      <section
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          backgroundColor: "rgba(11, 17, 32, 0.7)",
          padding: "2rem 0",
        }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <span style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Recognized & Verified By:
            </span>
            <div className="flex items-center gap-8 flex-wrap">
              {companyData.recognitions.map((rec) => (
                <div key={rec.name} className="flex items-center gap-2">
                  <Star size={16} fill="#f59e0b" color="#f59e0b" />
                  <span style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem" }}>{rec.name}</span>
                  <span style={{ color: "var(--color-cyan)", fontSize: "0.85rem", fontWeight: 600 }}>({rec.rating})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: SERVICES SHOWCASE */}
      {/* ========================================================= */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 4rem auto" }}>
            <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
              Full-Spectrum Engineering
            </span>
            <h2 className="heading-section" style={{ color: "#ffffff", marginTop: "0.5rem" }}>
              Our Core Services & Solutions
            </h2>
            <p className="subhead-lead" style={{ marginTop: "0.75rem" }}>
              We build responsive, high-performance applications with remarkable aesthetics and enterprise stability to accelerate your market impact.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {servicesData.map((s) => {
              const IconComponent = (serviceIcons as any)[s.id] || Code2;
              return (
                <div
                  key={s.id}
                  className="interactive-card flex flex-col justify-between"
                  style={{
                    backgroundColor: "rgba(15, 23, 42, 0.75)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between" style={{ marginBottom: "1.25rem" }}>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: "12px",
                          backgroundColor: "rgba(14, 80, 215, 0.2)",
                          border: "1px solid rgba(0, 210, 255, 0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--color-cyan)",
                        }}
                      >
                        <IconComponent size={24} />
                      </div>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          padding: "0.25rem 0.65rem",
                          borderRadius: "999px",
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                          color: "var(--text-secondary)",
                          border: "1px solid var(--border-subtle)",
                        }}
                      >
                        {s.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
                      {s.title}
                    </h3>

                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                      {s.shortDesc}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2" style={{ marginBottom: "1.5rem" }}>
                      {s.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontSize: "0.75rem",
                            padding: "0.2rem 0.6rem",
                            borderRadius: "var(--radius-sm)",
                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                            color: "var(--text-muted)",
                            border: "1px solid rgba(255, 255, 255, 0.06)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/${s.slug}`}
                    className="flex items-center gap-2"
                    style={{
                      color: "var(--color-cyan)",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      textDecoration: "none",
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      paddingTop: "1rem",
                      transition: "gap 0.2s ease",
                    }}
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: INTERACTIVE PROJECT COST ESTIMATOR */}
      {/* ========================================================= */}
      <section
        style={{
          padding: "5rem 0",
          backgroundColor: "rgba(11, 17, 32, 0.5)",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom">
          <ProjectEstimator />
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: VERIFIED CLIENT WORK & CASE STUDIES */}
      {/* ========================================================= */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-end flex-wrap gap-4" style={{ marginBottom: "3.5rem" }}>
            <div>
              <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
                Proven Client Outcomes
              </span>
              <h2 className="heading-section" style={{ color: "#ffffff", marginTop: "0.5rem" }}>
                Featured Client Success Stories
              </h2>
            </div>
            <Link href="/portfolio" className="btn-secondary">
              <span>View All Case Studies</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
            }}
          >
            {caseStudiesData.slice(0, 3).map((cs) => (
              <div
                key={cs.id}
                className="interactive-card flex flex-col justify-between"
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.85)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div>
                  <div className="flex justify-between items-center" style={{ marginBottom: "1rem" }}>
                    <span
                      style={{
                        color: "var(--color-cyan)",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        textTransform: "uppercase",
                      }}
                    >
                      {cs.domain}
                    </span>
                    <a
                      href={cs.website}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "var(--text-muted)",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: "0.8rem",
                        textDecoration: "none",
                      }}
                    >
                      <span>{cs.client}</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
                    {cs.headline}
                  </h3>

                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    {cs.summary}
                  </p>

                  {/* Metrics Row */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.75rem",
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      padding: "1rem",
                      borderRadius: "var(--radius-md)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-cyan)" }}>
                        {cs.results[0].metric}
                      </div>
                      <div style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
                        {cs.results[0].label}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#10b981" }}>
                        {cs.results[1].metric}
                      </div>
                      <div style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
                        {cs.results[1].label}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "1rem" }}>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", fontStyle: "italic", marginBottom: "0.75rem" }}>
                    &ldquo;{cs.testimonial.quote.slice(0, 110)}...&rdquo;
                  </p>
                  <div style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.85rem" }}>
                    — {cs.testimonial.author}, {cs.testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: TECH STACK MATRIX EXPLORER */}
      {/* ========================================================= */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 3.5rem auto" }}>
            <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
              Our Architectural Stack
            </span>
            <h2 className="heading-section" style={{ color: "#ffffff", marginTop: "0.5rem" }}>
              Technologies & Platforms We Master
            </h2>
            <p className="subhead-lead" style={{ marginTop: "0.75rem" }}>
              Filter by engineering domain to discover our core frameworks, database engines, and cloud infrastructure capabilities.
            </p>
          </div>

          <TechStackMatrix />
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: WHY CHOOSE OPASH - COMPARISON MATRIX */}
      {/* ========================================================= */}
      <section
        style={{
          padding: "5.5rem 0",
          backgroundColor: "rgba(11, 17, 32, 0.6)",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 4rem auto" }}>
            <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
              The Opash Advantage
            </span>
            <h2 className="heading-section" style={{ color: "#ffffff", marginTop: "0.5rem" }}>
              Why Global Brands Choose Us
            </h2>
            <p className="subhead-lead" style={{ marginTop: "0.75rem" }}>
              How an Opash dedicated agile squad compares to traditional outsourcing agencies and fragmented freelance marketplaces.
            </p>
          </div>

          <div className="glass-panel" style={{ overflowX: "auto", padding: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "680px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.12)" }}>
                  <th style={{ padding: "1.25rem", textAlign: "left", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                    Key Engineering Metric
                  </th>
                  <th style={{ padding: "1.25rem", textAlign: "center", color: "var(--color-cyan)", fontSize: "1.1rem", fontWeight: 800 }}>
                    ⚡ Opash Software Squad
                  </th>
                  <th style={{ padding: "1.25rem", textAlign: "center", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                    Generic Outsourcing Agency
                  </th>
                  <th style={{ padding: "1.25rem", textAlign: "center", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                    Freelance Portals
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    metric: "Code & IP Rights Ownership",
                    opash: "100% Yours from Day 1",
                    agency: "Often restricted or licensed",
                    freelancers: "Unclear ownership / disputed",
                  },
                  {
                    metric: "Seniority & Vetting Standard",
                    opash: "Top 3% Pre-Screened Senior Devs",
                    agency: "Junior developers with senior markups",
                    freelancers: "Inconsistent quality / ghosting risk",
                  },
                  {
                    metric: "Delivery Velocity",
                    opash: "2-Week Agile Sprints with Live Demos",
                    agency: "Monthly slow waterfall reviews",
                    freelancers: "Unpredictable hours & availability",
                  },
                  {
                    metric: "Post-Launch Warranty & SLA",
                    opash: "30-Day Free Warranty + 24/7 SLA",
                    agency: "High billable hourly support",
                    freelancers: "Zero post-project support",
                  },
                  {
                    metric: "Timezone Alignment",
                    opash: "4+ Hours Synchronous US/EU Overlap",
                    agency: "Rigid local hours only",
                    freelancers: "Disjointed & delayed replies",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                      backgroundColor: idx % 2 === 0 ? "rgba(255, 255, 255, 0.01)" : "transparent",
                    }}
                  >
                    <td style={{ padding: "1.2rem", fontWeight: 600, color: "#ffffff", fontSize: "0.95rem" }}>
                      {row.metric}
                    </td>
                    <td style={{ padding: "1.2rem", textAlign: "center", color: "#10b981", fontWeight: 700, fontSize: "0.95rem", backgroundColor: "rgba(16, 185, 129, 0.06)" }}>
                      ✓ {row.opash}
                    </td>
                    <td style={{ padding: "1.2rem", textAlign: "center", color: "var(--text-muted)", fontSize: "0.85rem" }}>
                      {row.agency}
                    </td>
                    <td style={{ padding: "1.2rem", textAlign: "center", color: "var(--text-muted)", fontSize: "0.85rem" }}>
                      {row.freelancers}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: INDUSTRIES WE SPECIALIZE IN */}
      {/* ========================================================= */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 4rem auto" }}>
            <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
              Domain Specialization
            </span>
            <h2 className="heading-section" style={{ color: "#ffffff", marginTop: "0.5rem" }}>
              Industries We Specialize In
            </h2>
            <p className="subhead-lead" style={{ marginTop: "0.75rem" }}>
              Over 8+ years of deep domain experience delivering compliant, high-security software across regulated and high-growth markets.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {industriesData.slice(0, 6).map((ind) => (
              <div
                key={ind.id}
                className="glass-panel"
                style={{
                  padding: "1.75rem",
                  background: "rgba(15, 23, 42, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.07)",
                }}
              >
                <div className="flex justify-between items-center" style={{ marginBottom: "0.75rem" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff" }}>
                    {ind.name}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "var(--color-cyan)",
                      backgroundColor: "rgba(0, 210, 255, 0.1)",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "999px",
                    }}
                  >
                    {ind.metrics}
                  </span>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.5, marginBottom: "1rem" }}>
                  {ind.description}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {ind.solutions.slice(0, 3).map((sol, i) => (
                    <li key={i} className="flex items-center gap-2" style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                      <CheckCircle2 size={13} color="var(--color-cyan)" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 9: CLIENT TESTIMONIALS SLIDER */}
      {/* ========================================================= */}
      <section
        style={{
          padding: "5.5rem 0",
          backgroundColor: "rgba(11, 17, 32, 0.7)",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem auto" }}>
            <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
              What Clients Say
            </span>
            <h2 className="heading-section" style={{ color: "#ffffff", marginTop: "0.5rem" }}>
              Verified Feedback From Founders & CTOs
            </h2>
          </div>

          <TestimonialsSlider />
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 10: LEADERSHIP & FOUNDER'S NOTE */}
      {/* ========================================================= */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            className="glass-panel"
            style={{
              padding: "3.5rem",
              background: "linear-gradient(135deg, rgba(14, 80, 215, 0.15) 0%, rgba(15, 23, 42, 0.95) 100%)",
              border: "1px solid rgba(14, 80, 215, 0.35)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "3rem" }} className="founder-grid">
              <div>
                <span className="badge-glow" style={{ marginBottom: "1rem" }}>
                  Leadership Vision
                </span>
                <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                  Meet Our Founder & CEO
                </h2>
                <div style={{ color: "var(--color-cyan)", fontSize: "1.1rem", fontWeight: 600, marginBottom: "1.5rem" }}>
                  {companyData.ceo.name} — {companyData.ceo.experience}
                </div>

                <blockquote
                  style={{
                    borderLeft: "3px solid var(--color-cyan)",
                    paddingLeft: "1.25rem",
                    color: "#ffffff",
                    fontSize: "1.15rem",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                    marginBottom: "1.75rem",
                  }}
                >
                  &ldquo;{companyData.ceo.quote}&rdquo;
                </blockquote>

                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.75rem", fontSize: "0.95rem" }}>
                  {companyData.ceo.bio}
                </p>

                <div className="flex flex-wrap gap-2" style={{ marginBottom: "2rem" }}>
                  {companyData.ceo.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.3rem 0.8rem",
                        borderRadius: "var(--radius-full)",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        color: "var(--text-muted)",
                        fontSize: "0.8rem",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <a
                    href={`mailto:${companyData.ceo.email}`}
                    className="btn-primary"
                    style={{ padding: "0.85rem 1.75rem" }}
                  >
                    <span>Connect with Hiren</span>
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href={companyData.ceo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{ padding: "0.85rem 1.5rem" }}
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              {/* Founder Graphic Card */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "2.5rem",
                  borderRadius: "var(--radius-xl)",
                  backgroundColor: "rgba(11, 17, 32, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div
                  style={{
                    width: 130,
                    height: 130,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #0e50d7, #00d2ff)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    marginBottom: "1.5rem",
                    boxShadow: "0 0 35px rgba(14, 80, 215, 0.5)",
                  }}
                >
                  HD
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff" }}>
                  {companyData.ceo.name}
                </h3>
                <div style={{ color: "var(--color-cyan)", fontSize: "0.95rem", fontWeight: 600, marginTop: "0.25rem" }}>
                  Founder & CEO
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
                  Opash Software • Surat, India
                </div>

                <div
                  style={{
                    marginTop: "1.75rem",
                    padding: "1rem",
                    width: "100%",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-subtle)",
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  Direct Email: <br />
                  <strong style={{ color: "#ffffff" }}>{companyData.ceo.email}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 11: TECH INSIGHTS / BLOGS */}
      {/* ========================================================= */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-end flex-wrap gap-4" style={{ marginBottom: "3.5rem" }}>
            <div>
              <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
                Knowledge Sharing
              </span>
              <h2 className="heading-section" style={{ color: "#ffffff", marginTop: "0.5rem" }}>
                Tech Insights by Opash
              </h2>
            </div>
            <Link href="/blogs" className="btn-secondary">
              <span>View All Articles</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {blogsData.slice(0, 3).map((post) => (
              <div
                key={post.slug}
                className="interactive-card flex flex-col justify-between"
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div>
                  <div className="flex justify-between items-center" style={{ marginBottom: "1rem" }}>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-cyan)",
                        fontWeight: 700,
                        backgroundColor: "rgba(0, 210, 255, 0.1)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "999px",
                      }}
                    >
                      {post.category}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      {post.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem", lineHeight: 1.4 }}>
                    <Link
                      href={`/blogs/${post.slug}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex justify-between items-center" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "1rem" }}>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    By {post.author.name} • {post.date}
                  </div>
                  <Link
                    href={`/blogs/${post.slug}`}
                    style={{ color: "var(--color-cyan)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 3 }}
                  >
                    <span>Read Full</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 12: CONTACT & PROPOSAL HUB */}
      {/* ========================================================= */}
      <section
        id="contact-section"
        style={{
          padding: "6rem 0",
          backgroundColor: "rgba(11, 17, 32, 0.7)",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom">
          <div style={{ maxWidth: "880px", margin: "0 auto" }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
