"use client";

import React from "react";
import Link from "next/link";
import ProjectEstimator from "@/components/ProjectEstimator";
import { 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Layers, 
  Lock,
  ArrowRight
} from "lucide-react";
import { companyData } from "@/data/company";

export default function GetAQuotePage() {
  return (
    <div className="bg-grid-pattern" style={{ minHeight: "100vh", position: "relative" }}>
      {/* Background glow */}
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
          paddingBottom: "4.5rem",
          position: "relative",
          zIndex: 1,
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="container-custom" style={{ textAlign: "center" }}>
          <div className="flex items-center justify-center gap-2" style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
            <Link href="/" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "var(--color-cyan)" }}>Get a Quote</span>
          </div>

          <span className="badge-glow" style={{ marginBottom: "1rem" }}>
            Transparent Project Scoping
          </span>

          <h1 className="heading-display" style={{ maxWidth: "880px", margin: "0.75rem auto 1.5rem auto", color: "#ffffff" }}>
            Get an Accurate, <span className="gradient-text">Zero-Obligation Estimate</span> in Minutes
          </h1>

          <p className="subhead-lead" style={{ maxWidth: "750px", margin: "0 auto 2.5rem auto" }}>
            We analyze your requirements, divide them into actionable milestones, and deliver clear fixed-price or dedicated team sprint estimates with zero surprise fees.
          </p>
        </div>
      </section>

      {/* The Interactive Estimator Tool */}
      <section className="section-padding">
        <div className="container-custom">
          <ProjectEstimator />
        </div>
      </section>

      {/* How Our Estimation Process Works */}
      <section
        style={{
          padding: "5rem 0",
          backgroundColor: "rgba(11, 17, 32, 0.7)",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem auto" }}>
            <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
              Estimation Framework
            </span>
            <h2 className="heading-section" style={{ color: "#ffffff", marginTop: "0.5rem" }}>
              How We Turn Ideas Into Predictable Roadmaps
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                step: "01",
                title: "Requirement Deep Dive",
                desc: "We dissect user flows, third-party API dependencies, database models, and performance benchmarks.",
              },
              {
                step: "02",
                title: "Sprint & Phase Breakdown",
                desc: "We partition deliverables into clear 2-week agile sprints with concrete verifiable milestones.",
              },
              {
                step: "03",
                title: "Guaranteed Budget Scope",
                desc: "Choose between dedicated squad or fixed milestone pricing with 100% intellectual property ownership.",
              },
              {
                step: "04",
                title: "Kickoff & 2-Week Trial",
                desc: "Start development with our risk-free 2-week trial period ensuring total satisfaction before commitment.",
              },
            ].map((st) => (
              <div
                key={st.step}
                className="glass-panel"
                style={{ padding: "2rem", backgroundColor: "rgba(15, 23, 42, 0.8)" }}
              >
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--color-cyan)", marginBottom: "0.75rem" }}>
                  {st.step}
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>
                  {st.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
