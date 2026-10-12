"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ServiceDetail } from "@/data/services";
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  ChevronDown, 
  ShieldCheck, 
  Code2, 
  Zap, 
  HelpCircle 
} from "lucide-react";
import ContactForm from "./ContactForm";

interface Props {
  service: ServiceDetail;
}

export default function ServiceDetailTemplate({ service }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-grid-pattern" style={{ minHeight: "100vh", position: "relative" }}>
      {/* Hero Section */}
      <section
        style={{
          paddingTop: "6rem",
          paddingBottom: "5rem",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "10%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(14, 80, 215, 0.22) 0%, transparent 70%)",
            filter: "blur(90px)",
            pointerEvents: "none",
          }}
        />

        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2" style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
            <Link href="/" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "var(--text-secondary)" }}>Services</span>
            <span>/</span>
            <span style={{ color: "var(--color-cyan)" }}>{service.title}</span>
          </div>

          <div style={{ maxWidth: "860px" }}>
            <span className="badge-glow" style={{ marginBottom: "1rem" }}>
              {service.badge}
            </span>
            <h1 className="heading-display" style={{ color: "#ffffff", marginTop: "0.75rem", marginBottom: "1.25rem" }}>
              {service.heroHeadline}
            </h1>
            <p className="subhead-lead" style={{ marginBottom: "2rem" }}>
              {service.heroSubheadline}
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Link href="/get-a-quote" className="btn-primary" style={{ padding: "0.95rem 2rem" }}>
                <Sparkles size={18} />
                <span>Get a Fast Project Estimate</span>
              </Link>
              <a href="#capabilities" className="btn-secondary" style={{ padding: "0.95rem 1.75rem" }}>
                <span>Explore Capabilities</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
              marginTop: "4rem",
            }}
          >
            {service.metrics.map((m, i) => (
              <div
                key={i}
                className="glass-panel"
                style={{
                  padding: "1.5rem",
                  background: "rgba(15, 23, 42, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--color-cyan)", letterSpacing: "-0.02em" }}>
                  {m.value}
                </div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 500, marginTop: "0.25rem" }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities / Deep Features */}
      <section id="capabilities" className="section-padding">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 4rem auto" }}>
            <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
              Engineered for Excellence
            </span>
            <h2 className="heading-section" style={{ color: "#ffffff", marginTop: "0.5rem" }}>
              Core {service.title} Capabilities
            </h2>
            <p className="subhead-lead" style={{ marginTop: "0.75rem" }}>
              We apply battle-tested architectures, clean design patterns, and agile engineering principles to deliver software that outperforms.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {service.features.map((f, i) => (
              <div
                key={i}
                className="interactive-card"
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.07)",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, rgba(14, 80, 215, 0.3), rgba(0, 210, 255, 0.2))",
                    border: "1px solid rgba(0, 210, 255, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-cyan)",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Zap size={22} />
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
                  {f.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack & Deliverables Dual Section */}
      <section
        style={{
          padding: "5rem 0",
          backgroundColor: "rgba(11, 17, 32, 0.6)",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem" }} className="dual-grid">
            {/* Left: Tech stack */}
            <div>
              <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
                Technology Stack
              </span>
              <h3 style={{ fontSize: "2rem", fontWeight: 700, color: "#ffffff", marginTop: "0.5rem", marginBottom: "1rem" }}>
                Tools & Frameworks We Employ
              </h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
                We choose the optimal stack based on throughput targets, developer productivity, and long-term maintainability.
              </p>

              <div className="flex flex-wrap gap-2">
                {service.technologies.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "0.55rem 1.15rem",
                      borderRadius: "var(--radius-full)",
                      backgroundColor: "rgba(14, 80, 215, 0.15)",
                      border: "1px solid rgba(14, 80, 215, 0.35)",
                      color: "#ffffff",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: What You Receive (Deliverables) */}
            <div>
              <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
                Deliverables
              </span>
              <h3 style={{ fontSize: "2rem", fontWeight: 700, color: "#ffffff", marginTop: "0.5rem", marginBottom: "1rem" }}>
                What You Receive (100% IP)
              </h3>
              <div className="flex flex-col gap-3">
                {service.deliverables.map((d, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.85rem 1.25rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0 }} />
                    <span style={{ color: "var(--text-primary)", fontSize: "0.95rem", fontWeight: 500 }}>
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem auto" }}>
            <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
              Our Methodology
            </span>
            <h2 className="heading-section" style={{ color: "#ffffff", marginTop: "0.5rem" }}>
              How We Deliver Success
            </h2>
            <p className="subhead-lead" style={{ marginTop: "0.75rem" }}>
              Structured, predictable, and transparent 5-step development lifecycle from scoping to cloud deployment.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {service.process.map((p) => (
              <div
                key={p.step}
                className="glass-panel"
                style={{
                  padding: "1.75rem 1.5rem",
                  background: "rgba(15, 23, 42, 0.8)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: 900,
                    color: "rgba(14, 80, 215, 0.5)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {p.step}
                </div>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>
                  {p.title}
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      {service.faqs && service.faqs.length > 0 && (
        <section
          style={{
            padding: "5rem 0",
            backgroundColor: "rgba(11, 17, 32, 0.7)",
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          <div className="container-custom" style={{ maxWidth: "880px" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
                Got Questions?
              </span>
              <h2 className="heading-section" style={{ color: "#ffffff", marginTop: "0.5rem" }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {service.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    style={{
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "rgba(15, 23, 42, 0.8)",
                      border: isOpen ? "1px solid var(--border-accent)" : "1px solid rgba(255, 255, 255, 0.08)",
                      overflow: "hidden",
                      transition: "all 0.2s",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      style={{
                        width: "100%",
                        padding: "1.25rem 1.5rem",
                        textAlign: "left",
                        background: "none",
                        border: "none",
                        color: "#ffffff",
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={18}
                        color="var(--color-cyan)"
                        style={{
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s",
                          flexShrink: 0,
                        }}
                      />
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: "0 1.5rem 1.25rem 1.5rem",
                          color: "var(--text-secondary)",
                          fontSize: "0.95rem",
                          lineHeight: 1.6,
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
      )}

      {/* Bottom Contact / Proposal Form */}
      <section className="section-padding">
        <div className="container-custom" style={{ maxWidth: "800px" }}>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
