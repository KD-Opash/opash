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
import AtmosphericHero from "@/components/AtmosphericHero";

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
          background: "radial-gradient(circle, #476D9A 0%, transparent 70%)",
        }}
      />

      {/* Atmospheric Hero Section */}
      <AtmosphericHero
        badge="TRANSPARENT PROJECT SCOPING"
        titleTop="Accurate project estimates"
        titleAccent="with zero surprise fees"
        subheadline="We analyze your requirements, divide them into actionable milestones, and deliver clear fixed-price or dedicated squad sprint estimates in minutes."
        primaryCta={{ label: "Launch Estimator Tool", href: "#estimator" }}
        secondaryCta={{ label: "Explore Methodology", href: "#methodology" }}
        leftCard={{
          tag: "BUDGET SCOPING",
          title: "Fixed Milestone Clarity",
          description: "Clear bi-weekly deliverables with guaranteed budgets and 100% client intellectual property ownership.",
          graphType: "arc",
          metric: "Zero Hidden Line Items",
        }}
        rightCard={{
          tag: "RISK-FREE TRIAL",
          title: "2-Week Trial Period",
          description: "Evaluate sprint velocity, team chemistry, and architectural rigor before full milestone commitment.",
          graphType: "cycle",
          metric: "100% Satisfaction Guarantee",
        }}
      />

      {/* The Interactive Estimator Tool */}
      <section className="section-padding">
        <div className="container-custom">
          <ProjectEstimator />
        </div>
      </section>

      {/* How Our Estimation Process Works */}
      <section
        className="section-alt"
        style={{
          padding: "5rem 0",
        }}
      >
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem auto" }}>
            <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
              Estimation Framework
            </span>
            <h2 className="heading-section" style={{ color: "var(--text-primary)", marginTop: "0.5rem" }}>
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
                style={{ padding: "2rem" }}
              >
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--color-cyan)", marginBottom: "0.75rem" }}>
                  {st.step}
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
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
