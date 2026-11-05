"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe2,
  Smartphone,
  Cpu,
  Network,
  Users2,
  Cloud,
  ShieldCheck,
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
    url: "/custom-software-development",
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
    url: "/web-development",
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
    url: "/mobile-development",
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
    url: "/ai-ml-solutions",
    slug: "ai-ml-solutions",
    badge: "AI Systems",
    accent: "#00bbab", // Teal
    accentRgb: "0, 187, 171",
    image: "",
    tags: ["LLMs & GenAI", "Neural Models", "AutoML"],
    icon: Cpu,
  },
  {
    id: "saas-development",
    title: "SaaS Development",
    shortLabel: "SaaS Engine",
    desc: "Architect multi-tenant cloud platforms with automated recurring billing, granular role permissions, high availability, and horizontal elasticity.",
    url: "/saas-development",
    slug: "saas-development",
    badge: "Multi-Tenant",
    accent: "#6366f1", // Indigo
    accentRgb: "99, 102, 241",
    image: "",
    tags: ["Multi-Tenancy", "Stripe Subscriptions", "AWS Cloud"],
    icon: Cloud,
  },
  {
    id: "api-integration",
    title: "API Integration & Microservices",
    shortLabel: "API & Microservices",
    desc: "Enhance system efficiency with seamless API integration and microservices architecture. Enable rapid scalability, modular development, and faster time-to-market.",
    url: "/api-integration",
    slug: "api-integration",
    badge: "Microservices",
    accent: "#0284c7", // Ocean Blue
    accentRgb: "2, 132, 199",
    image: "",
    tags: ["Microservices", "REST & GraphQL", "Low Latency"],
    icon: Network,
  },
  {
    id: "qa-testing",
    title: "QA & Software Testing",
    shortLabel: "QA & Testing",
    desc: "Eliminate defects with comprehensive automated Playwright and manual testing suites, verifying reliability, security, and edge performance.",
    url: "/qa-testing",
    slug: "qa-testing",
    badge: "Zero Defects",
    accent: "#f43f5e", // Rose
    accentRgb: "244, 63, 94",
    image: "",
    tags: ["Playwright E2E", "Security Audits", "Load Testing"],
    icon: ShieldCheck,
  },
  {
    id: "hire-developers",
    title: "Hire Dedicated Developers",
    shortLabel: "Dedicated Team",
    desc: "Hire vetted and skilled developers from Opash Software for your custom projects. Scale your tech team on-demand with flexible engagement models and domain expertise.",
    url: "/hire-developers",
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
        padding: "5rem 0 6.5rem 0",
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
        <motion.div
          className="coverflow-header-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <h2
            className="heading-section"
            style={{ margin: "0 0 1rem 0" }}
          >
            Our <span className="opash-hero-gradient-text">Services</span>
          </h2>

          <p
            className="subhead-lead"
            style={{
              margin: "0 auto",
              maxWidth: "680px",
              color: isLight ? "#475569" : "#94a3b8",
              fontSize: "1.05rem",
              lineHeight: 1.6,
            }}
          >
            We engineer high-performance digital platforms with remarkable aesthetics, delivering a full spectrum of result-oriented enterprise solutions.
          </p>
        </motion.div>

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
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.12 }}
                transition={{
                  type: "spring",
                  stiffness: 110,
                  damping: 18,
                  mass: 0.8,
                  delay: (index + 1) * 0.06,
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Link
                  href={service.url}
                  className="opash-service-showcase-card group"
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
                    ["--card-accent" as string]: service.accent,
                    ["--card-accent-rgb" as string]: service.accentRgb,
                  }}
                >
                  {/* Subtle Top Accent Line */}
                  <div
                    className="opash-service-top-line"
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

                      {/* Top-Right Circle Arrow (Diagonally Micro-Jumps on Hover) */}
                      <div
                        className="opash-service-arrow-circle"
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

                    {/* Service Icon Badge (Smoothly Scales 1.08 & Glows on Hover) */}
                    <div
                      className="opash-service-icon-box"
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
                      className="opash-service-footer-arrow"
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ClockServicesShowcase;
