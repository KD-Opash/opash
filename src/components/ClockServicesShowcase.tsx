"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe2,
  Smartphone,
  Cpu,
  Network,
  Users2,
} from "lucide-react";
import { CoverflowCreativeBackdrop } from "@/components/CoverflowCreativeBackdrop";
import { useTheme } from "@/components/ThemeProvider";

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  url: string;
  slug: string;
  badge: string;
  accent: string;
  accentRgb: string;
  image: string;
  tags: string[];
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  shortLabel: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    shortLabel: "Custom Software",
    desc: "Opash Software builds scalable custom software tailored to your business needs — from enterprise platforms to niche solutions. Our agile approach ensures faster delivery and long-term performance.",
    url: "https://www.opashsoftware.com/custom-software-development/",
    slug: "custom-software-development",
    badge: "Enterprise Grade",
    accent: "#0ea5e9", // Sky Blue
    accentRgb: "14, 165, 233",
    image: "",
    tags: ["Enterprise Architecture", "DevOps & CI/CD", "Cloud-Native"],
    icon: Code2,
  },
  {
    id: "web-development",
    title: "Web Development",
    shortLabel: "Web Apps",
    desc: "Get modern, responsive, and SEO-friendly websites with Opash Software’s web development services. We build high-performance platforms using cutting-edge technologies.",
    url: "https://www.opashsoftware.com/web-development/",
    slug: "web-development",
    badge: "Lightning Fast",
    accent: "#10b981", // Emerald Green
    accentRgb: "16, 185, 129",
    image: "",
    tags: ["Next.js & React", "High Performance", "SEO Ready"],
    icon: Globe2,
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    shortLabel: "Mobile Apps",
    desc: "We design and develop feature-rich mobile apps for iOS and Android that are fast, secure, and scalable. Deliver exceptional user experiences with cross-platform and native apps.",
    url: "https://www.opashsoftware.com/mobile-development/",
    slug: "mobile-development",
    badge: "Cross-Platform",
    accent: "#3b82f6", // Royal Blue
    accentRgb: "59, 130, 246",
    image: "",
    tags: ["iOS & Android", "React Native", "Native UX"],
    icon: Smartphone,
  },
  {
    id: "ai-ml-solutions",
    title: "AI & ML Solutions",
    shortLabel: "AI & ML",
    desc: "Leverage Artificial Intelligence and Machine Learning to automate workflows, enhance decision-making, and personalize experiences tailored to your business goals.",
    url: "https://www.opashsoftware.com/ai-ml-solutions/",
    slug: "ai-ml-solutions",
    badge: "AI Systems",
    accent: "#00bbab", // Teal
    accentRgb: "0, 187, 171",
    image: "",
    tags: ["LLMs & GenAI", "Neural Models", "AutoML"],
    icon: Cpu,
  },
  {
    id: "api-integration",
    title: "API Integration & Microservices",
    shortLabel: "API & Microservices",
    desc: "Enhance system efficiency with seamless API integration and microservices architecture. Enable rapid scalability, modular development, and faster time-to-market.",
    url: "https://www.opashsoftware.com/api-integration/",
    slug: "api-integration",
    badge: "Microservices",
    accent: "#0284c7", // Ocean Blue
    accentRgb: "2, 132, 199",
    image: "",
    tags: ["Microservices", "REST & GraphQL", "Low Latency"],
    icon: Network,
  },
  {
    id: "hire-developers",
    title: "Hire Dedicated Developers",
    shortLabel: "Dedicated Team",
    desc: "Hire vetted and skilled developers from Opash Software for your custom projects. Scale your tech team on-demand with flexible engagement models and domain expertise.",
    url: "https://www.opashsoftware.com/hire-developers/",
    slug: "hire-developers",
    badge: "Dedicated Team",
    accent: "#10b981", // Emerald
    accentRgb: "16, 185, 129",
    image: "",
    tags: ["Top 1% Talent", "Zero Overhead", "Flexible Scale"],
    icon: Users2,
  },
];

export function ClockServicesShowcase() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const displayedServices =
    selectedFilter === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.id === selectedFilter);

  return (
    <section
      id="services"
      className="coverflow-services-section relative w-full"
      style={{
        position: "relative",
        padding: "6rem 0 6.5rem 0",
        overflow: "hidden",
      }}
      aria-label="Opash Software Services and Capabilities"
    >
      {/* Lightweight, zero-GPU static ambient backdrop */}
      <CoverflowCreativeBackdrop
        accent="#0ea5e9"
        accentRgb="14, 165, 233"
      />

      <div className="container-custom relative z-10">
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="coverflow-header-wrapper" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="coverflow-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <span
              className="coverflow-eyebrow-dot"
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#00bbab",
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              FULL-SPECTRUM CAPABILITIES &bull; BESPOKE ARCHITECTURE
            </span>
          </div>

          <h2
            className="heading-section"
            style={{ fontSize: "clamp(2rem, 4vw, 2.85rem)", fontWeight: 850, margin: "0.75rem 0 1rem 0" }}
          >
            Our <span className="opash-hero-gradient-text">Services</span>
          </h2>

          <p
            className="subhead-lead"
            style={{
              margin: "0 auto 2rem auto",
              maxWidth: "680px",
              color: isLight ? "#475569" : "#94a3b8",
              fontSize: "1.05rem",
              lineHeight: 1.6,
            }}
          >
            We engineer high-performance digital platforms with remarkable aesthetics, delivering a full spectrum of result-oriented enterprise solutions.
          </p>

          {/* Quick-Jump Category / Service Pills */}
          <div
            className="coverflow-pill-tabs"
            role="tablist"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <button
              onClick={() => setSelectedFilter("all")}
              className={`coverflow-tab-btn ${selectedFilter === "all" ? "active" : ""}`}
              role="tab"
              aria-selected={selectedFilter === "all"}
              style={{
                padding: "0.45rem 1rem",
                borderRadius: "9999px",
                fontSize: "0.82rem",
                fontWeight: 650,
                border: selectedFilter === "all"
                  ? "1px solid #00bbab"
                  : `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
                background: selectedFilter === "all"
                  ? isLight ? "rgba(0, 187, 171, 0.12)" : "rgba(0, 187, 171, 0.2)"
                  : isLight ? "#ffffff" : "rgba(15, 23, 42, 0.6)",
                color: selectedFilter === "all" ? (isLight ? "#0f766e" : "#00ffd1") : isLight ? "#64748b" : "#94a3b8",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              All Services
            </button>
            {SERVICES_DATA.map((srv) => {
              const isActive = selectedFilter === srv.id;
              const Icon = srv.icon;
              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedFilter(srv.id)}
                  className={`coverflow-tab-btn ${isActive ? "active" : ""}`}
                  role="tab"
                  aria-selected={isActive}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    padding: "0.45rem 1rem",
                    borderRadius: "9999px",
                    fontSize: "0.82rem",
                    fontWeight: 650,
                    border: isActive
                      ? `1px solid ${srv.accent}`
                      : `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
                    background: isActive
                      ? `rgba(${srv.accentRgb}, ${isLight ? 0.12 : 0.2})`
                      : isLight ? "#ffffff" : "rgba(15, 23, 42, 0.6)",
                    color: isActive ? srv.accent : isLight ? "#64748b" : "#94a3b8",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Icon size={14} />
                  <span>{srv.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. HIGH-PERFORMANCE STATIC RESPONSIVE 6-CARD GRID (0% GPU/CPU OVERHEAD)   */}
        {/* ========================================================================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 350px), 1fr))",
            gap: "1.75rem",
            alignItems: "stretch",
          }}
        >
          {displayedServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Link
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    padding: "2rem",
                    borderRadius: "22px",
                    background: isLight ? "#ffffff" : "rgba(10, 18, 36, 0.75)",
                    border: isLight
                      ? `1px solid #e2e8f0`
                      : `1px solid rgba(255, 255, 255, 0.08)`,
                    textDecoration: "none",
                    color: "inherit",
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.borderColor = service.accent;
                    e.currentTarget.style.boxShadow = isLight
                      ? `0 14px 30px -10px rgba(${service.accentRgb}, 0.2)`
                      : `0 16px 36px -12px rgba(${service.accentRgb}, 0.35)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.borderColor = isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Subtle Top Accent Line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
                    }}
                  />

                  {/* Card Header: Badge + Arrow */}
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          padding: "0.3rem 0.8rem",
                          borderRadius: "9999px",
                          fontSize: "0.74rem",
                          fontWeight: 750,
                          backgroundColor: `rgba(${service.accentRgb}, 0.12)`,
                          color: service.accent,
                          border: `1px solid rgba(${service.accentRgb}, 0.3)`,
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: service.accent,
                          }}
                        />
                        {service.badge}
                      </span>

                      <div
                        style={{
                          width: "34px",
                          height: "34px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: `1px solid rgba(${service.accentRgb}, 0.3)`,
                          color: service.accent,
                          background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
                        }}
                      >
                        <ArrowUpRight size={16} />
                      </div>
                    </div>

                    {/* Service Icon Badge */}
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "16px",
                        backgroundColor: `rgba(${service.accentRgb}, 0.12)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: service.accent,
                        marginBottom: "1.25rem",
                        border: `1px solid rgba(${service.accentRgb}, 0.25)`,
                      }}
                    >
                      <Icon size={28} />
                    </div>

                    {/* Card Content */}
                    <h3
                      style={{
                        fontSize: "1.35rem",
                        fontWeight: 800,
                        margin: "0 0 0.75rem 0",
                        letterSpacing: "-0.01em",
                        color: isLight ? "#0f172a" : "#f8fafc",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.92rem",
                        lineHeight: 1.6,
                        color: isLight ? "#64748b" : "#94a3b8",
                        margin: "0 0 1.5rem 0",
                      }}
                    >
                      {service.desc}
                    </p>

                    {/* Feature Chips */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.45rem",
                        marginBottom: "1.75rem",
                      }}
                    >
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 650,
                            padding: "0.22rem 0.65rem",
                            borderRadius: "6px",
                            background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.05)",
                            color: isLight ? "#475569" : "#cbd5e1",
                            border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)"}`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "1.2rem",
                      borderTop: `1px solid ${isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.06)"}`,
                    }}
                  >
                    <span
                      style={{
                        color: service.accent,
                        fontSize: "0.88rem",
                        fontWeight: 750,
                      }}
                    >
                      Explore Service
                    </span>
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: `rgba(${service.accentRgb}, 0.15)`,
                        color: service.accent,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ClockServicesShowcase;
