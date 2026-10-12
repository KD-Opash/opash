"use client";

import React from "react";
import Link from "next/link";
import { 
  Shield, 
  Zap, 
  Users, 
  Clock, 
  Lock, 
  Headphones, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Compass, 
  Layers, 
  Globe, 
  ShieldCheck,
  Star,
  ExternalLink
} from "lucide-react";
import { companyData } from "@/data/company";
import ContactForm from "@/components/ContactForm";

export default function CompanyPage() {
  const milestoneIcons = {
    Compass: Compass,
    Layers: Layers,
    Globe: Globe,
    ShieldCheck: ShieldCheck,
    Sparkles: Sparkles,
  };

  const valueIcons = {
    Shield: Shield,
    Zap: Zap,
    Users: Users,
    Clock: Clock,
    Lock: Lock,
    Headphones: Headphones,
  };

  return (
    <div className="bg-grid-pattern" style={{ minHeight: "100vh", position: "relative" }}>
      {/* Background Orbs */}
      <div
        className="ambient-glow-orb"
        style={{
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, #0e50d7 0%, transparent 70%)",
        }}
      />

      {/* Hero Section */}
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
            <span style={{ color: "var(--color-cyan)" }}>Company</span>
          </div>

          <span className="badge-glow" style={{ marginBottom: "1rem" }}>
            About Opash Software
          </span>

          <h1 className="heading-display" style={{ maxWidth: "900px", margin: "0.75rem auto 1.5rem auto", color: "#ffffff" }}>
            Pioneering Digital Innovation with <span className="gradient-text">Precision & Engineering Rigor</span>
          </h1>

          <p className="subhead-lead" style={{ maxWidth: "780px", margin: "0 auto 3rem auto" }}>
            {companyData.aboutBrief}
          </p>

          {/* Stats Bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
              maxWidth: "1050px",
              margin: "0 auto",
            }}
          >
            <div className="glass-panel" style={{ padding: "1.75rem", textAlign: "center" }}>
              <div style={{ fontSize: "2.75rem", fontWeight: 800, color: "var(--color-cyan)" }}>
                {companyData.stats.developers}
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 500, marginTop: "0.25rem" }}>
                Experienced Developers
              </div>
            </div>
            <div className="glass-panel" style={{ padding: "1.75rem", textAlign: "center" }}>
              <div style={{ fontSize: "2.75rem", fontWeight: 800, color: "#ffffff" }}>
                {companyData.stats.projectsDelivered}
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 500, marginTop: "0.25rem" }}>
                Projects Delivered
              </div>
            </div>
            <div className="glass-panel" style={{ padding: "1.75rem", textAlign: "center" }}>
              <div style={{ fontSize: "2.75rem", fontWeight: 800, color: "var(--color-cyan)" }}>
                {companyData.stats.hoursExecuted}
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 500, marginTop: "0.25rem" }}>
                Execution Hours
              </div>
            </div>
            <div className="glass-panel" style={{ padding: "1.75rem", textAlign: "center" }}>
              <div style={{ fontSize: "2.75rem", fontWeight: 800, color: "#ffffff" }}>
                {companyData.stats.yearsExperience}
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 500, marginTop: "0.25rem" }}>
                Years Industry Legacy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Dual Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="dual-cards">
            {/* Vision */}
            <div
              className="glass-panel"
              style={{
                padding: "3rem",
                background: "linear-gradient(135deg, rgba(14, 80, 215, 0.2) 0%, rgba(15, 23, 42, 0.9) 100%)",
                border: "1px solid rgba(14, 80, 215, 0.35)",
              }}
            >
              <span className="badge-glow" style={{ marginBottom: "1rem" }}>
                Our Vision
              </span>
              <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#ffffff", marginTop: "0.5rem", marginBottom: "1rem" }}>
                Empowering Ideas. Transforming Futures.
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                At Opash Software, our vision is to empower innovators, startups, and enterprises by blending cutting-edge technology with bold ideas. We strive to be a catalyst for digital transformation, helping businesses create meaningful change in the world through impactful, scalable software solutions.
              </p>
            </div>

            {/* Mission */}
            <div
              className="glass-panel"
              style={{
                padding: "3rem",
                background: "linear-gradient(135deg, rgba(0, 210, 255, 0.15) 0%, rgba(15, 23, 42, 0.9) 100%)",
                border: "1px solid rgba(0, 210, 255, 0.3)",
              }}
            >
              <span className="badge-glow" style={{ marginBottom: "1rem" }}>
                Our Mission
              </span>
              <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#ffffff", marginTop: "0.5rem", marginBottom: "1rem" }}>
                Delivering Innovation with Precision & Passion.
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                Our mission is to provide tailor-made, high-performance IT solutions that deliver measurable business value. We are committed to achieving client satisfaction through quality, transparency, and timely delivery, ensuring every project we undertake exceeds expectations and accelerates long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey & Milestones (2021 - 2026) */}
      <section
        style={{
          padding: "5.5rem 0",
          backgroundColor: "rgba(11, 17, 32, 0.6)",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 4rem auto" }}>
            <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
              The Opash Evolution
            </span>
            <h2 className="heading-section" style={{ color: "#ffffff", marginTop: "0.5rem" }}>
              Our Journey Over The Years
            </h2>
            <p className="subhead-lead" style={{ marginTop: "0.75rem" }}>
              From our founding in Surat to partnering with brands across North America, Europe, and Asia.
            </p>
          </div>

          <div className="flex flex-col gap-6" style={{ maxWidth: "880px", margin: "0 auto" }}>
            {companyData.milestones.map((m, index) => {
              const IconComp = (milestoneIcons as any)[m.iconName] || Compass;
              return (
                <div
                  key={m.year}
                  className="glass-panel"
                  style={{
                    padding: "2rem 2.5rem",
                    display: "grid",
                    gridTemplateColumns: "100px 1fr",
                    gap: "2rem",
                    alignItems: "center",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <div style={{ textAlign: "center", borderRight: "1px solid rgba(255, 255, 255, 0.08)", paddingRight: "1.5rem" }}>
                    <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--color-cyan)" }}>
                      {m.year}
                    </div>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        padding: "0.2rem 0.5rem",
                        borderRadius: "999px",
                        backgroundColor: "rgba(14, 80, 215, 0.2)",
                        color: "#ffffff",
                        marginTop: "0.25rem",
                        display: "inline-block",
                      }}
                    >
                      {m.badge}
                    </span>
                  </div>

                  <div>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.4rem" }}>
                      {m.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                      {m.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 4rem auto" }}>
            <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
              Guiding Principles
            </span>
            <h2 className="heading-section" style={{ color: "#ffffff", marginTop: "0.5rem" }}>
              Our Core Cultural Values
            </h2>
            <p className="subhead-lead" style={{ marginTop: "0.75rem" }}>
              How we work, build trust, and maintain engineering excellence every day.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {companyData.coreValues.map((v) => {
              const IconComp = (valueIcons as any)[v.icon] || Shield;
              return (
                <div
                  key={v.title}
                  className="interactive-card"
                  style={{
                    backgroundColor: "rgba(15, 23, 42, 0.75)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "10px",
                      backgroundColor: "rgba(14, 80, 215, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-cyan)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <IconComp size={22} />
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.6rem" }}>
                    {v.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section
        style={{
          padding: "5rem 0",
          backgroundColor: "rgba(11, 17, 32, 0.7)",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
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
                  Visionary Leadership
                </span>
                <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                  Hiren Danecha
                </h2>
                <div style={{ color: "var(--color-cyan)", fontSize: "1.1rem", fontWeight: 600, marginBottom: "1.5rem" }}>
                  Founder & CEO — 10+ Years in Tech Architecture & Scaling Products
                </div>

                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.75rem", fontSize: "1rem" }}>
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
                    <span>Schedule Call with Hiren</span>
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

              {/* Graphic Card */}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding">
        <div className="container-custom" style={{ maxWidth: "800px" }}>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
