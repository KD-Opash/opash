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
import AtmosphericHero from "./AtmosphericHero";

interface Props {
  service: ServiceDetail;
}

export default function ServiceDetailTemplate({ service }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-grid-pattern" style={{ minHeight: "100vh", position: "relative" }}>
      {/* Atmospheric Hero Section */}
      <AtmosphericHero
        badge={service.badge}
        titleTop={service.heroHeadline}
        titleAccent="engineered for scale"
        subheadline={service.heroSubheadline}
        primaryCta={{ label: "Get a Fast Project Estimate", href: "/get-a-quote" }}
        secondaryCta={{ label: "Explore Capabilities", href: "#capabilities" }}
        leftCard={{
          tag: "ENGINEERED CAPABILITY",
          title: service.features[0]?.title || "Architectural Excellence",
          description: service.features[0]?.desc || "Battle-tested architectural patterns delivering extreme throughput.",
          graphType: "arc",
          metric: service.metrics[0] ? `${service.metrics[0].value} ${service.metrics[0].label}` : undefined,
        }}
        rightCard={{
          tag: "PRODUCTION GUARANTEE",
          title: service.features[1]?.title || "Cloud-First Velocity",
          description: service.features[1]?.desc || "Multi-tenant cloud infrastructure designed for high concurrency.",
          graphType: "cycle",
          metric: service.metrics[1] ? `${service.metrics[1].value} ${service.metrics[1].label}` : undefined,
        }}
        bottomChildren={
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
              maxWidth: "1050px",
              margin: "0 auto",
            }}
          >
            {service.metrics.map((m, i) => (
              <div
                key={i}
                className="glass-panel"
                style={{
                  padding: "1.5rem",
                  textAlign: "center",
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
        }
      />

      {/* Capabilities / Deep Features */}
      <section id="capabilities" className="section-padding">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 4rem auto" }}>
            <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
              Engineered for Excellence
            </span>
            <h2 className="heading-section" style={{ marginTop: "0.5rem" }}>
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
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, rgba(71, 109, 154, 0.35), rgba(94, 192, 152, 0.25))",
                    border: "1px solid rgba(94, 192, 152, 0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-cyan)",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Zap size={22} />
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>
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
        className="section-alt"
        style={{
          padding: "5rem 0",
        }}
      >
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem" }} className="dual-grid">
            {/* Left: Tech stack */}
            <div>
              <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
                Technology Stack
              </span>
              <h3 style={{ fontSize: "2rem", fontWeight: 700, marginTop: "0.5rem", marginBottom: "1rem" }}>
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
                      backgroundColor: "rgba(71, 109, 154, 0.15)",
                      border: "1px solid rgba(71, 109, 154, 0.35)",
                      color: "var(--text-primary)",
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
              <h3 style={{ fontSize: "2rem", fontWeight: 700, marginTop: "0.5rem", marginBottom: "1rem" }}>
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
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
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
            <h2 className="heading-section" style={{ marginTop: "0.5rem" }}>
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
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: 900,
                    color: "rgba(71, 109, 154, 0.6)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {p.step}
                </div>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem" }}>
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
          className="section-alt"
          style={{
            padding: "5rem 0",
          }}
        >
          <div className="container-custom" style={{ maxWidth: "880px" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
                Got Questions?
              </span>
              <h2 className="heading-section" style={{ marginTop: "0.5rem" }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {service.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className="glass-panel"
                    style={{
                      borderRadius: "var(--radius-md)",
                      border: isOpen ? "1px solid var(--border-accent)" : "1px solid var(--border-subtle)",
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
                        color: "var(--text-primary)",
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
