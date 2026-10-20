"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck, 
  Award, 
  Star,
  Send,
  Sparkles,
  ChevronRight,
  Globe,
  Clock,
  MessageCircle,
  ExternalLink,
  HeartHandshake
} from "lucide-react";
import { companyData } from "@/data/company";
import { useTheme } from "./ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: isLight ? "#f1f5f9" : "#030814",
        color: isLight ? "#0f172a" : "#f8fafc",
        borderTop: `1px solid ${isLight ? "rgba(203, 213, 225, 0.8)" : "rgba(255, 255, 255, 0.08)"}`,
        paddingTop: "5.5rem",
        paddingBottom: "3rem",
        transition: "background-color 0.4s ease, color 0.4s ease",
      }}
    >
      {/* Top Holographic Laser Accent Rail */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent 0%, #00ffd1 25%, #8a5cff 50%, #0ea5e9 75%, transparent 100%)",
          boxShadow: isLight
            ? "0 0 15px rgba(14, 165, 233, 0.3)"
            : "0 0 25px rgba(0, 255, 209, 0.4)",
        }}
      />

      {/* Atmospheric Background Ambient Orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "450px",
          borderRadius: "50%",
          background: isLight
            ? "radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, rgba(138, 92, 255, 0.04) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(0, 255, 209, 0.08) 0%, rgba(138, 92, 255, 0.06) 50%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        
        {/* ========================================================================= */}
        {/* 1. TOP CTA LAUNCHPAD CAPSULE                                             */}
        {/* ========================================================================= */}
        <div
          style={{
            position: "relative",
            borderRadius: "28px",
            background: isLight
              ? "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.98) 100%)"
              : "linear-gradient(135deg, rgba(15, 23, 42, 0.88) 0%, rgba(8, 14, 28, 0.95) 100%)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: `1px solid ${isLight ? "rgba(14, 165, 233, 0.35)" : "rgba(0, 255, 209, 0.3)"}`,
            padding: "3.5rem 3rem",
            marginBottom: "5rem",
            boxShadow: isLight
              ? "0 25px 60px -15px rgba(14, 165, 233, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.9)"
              : "0 30px 80px -20px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 255, 209, 0.1)",
            overflow: "hidden",
          }}
        >
          {/* Subtle Corner Ambient Mesh */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-50%",
              right: "-10%",
              width: "450px",
              height: "450px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0, 255, 209, 0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "2.5rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div style={{ maxWidth: "700px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  padding: "0.4rem 1.1rem",
                  borderRadius: "9999px",
                  background: isLight ? "rgba(14, 165, 233, 0.1)" : "rgba(0, 255, 209, 0.12)",
                  border: `1px solid ${isLight ? "rgba(14, 165, 233, 0.3)" : "rgba(0, 255, 209, 0.35)"}`,
                  color: isLight ? "#0284c7" : "#00ffd1",
                  fontSize: "0.82rem",
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "1.2rem",
                  boxShadow: isLight
                    ? "0 2px 10px rgba(14, 165, 233, 0.12)"
                    : "0 2px 14px rgba(0, 255, 209, 0.2)",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#10b981",
                    boxShadow: "0 0 8px #10b981",
                  }}
                />
                <span>Ready To Build Something Great?</span>
                <Sparkles size={13} />
              </div>

              <h3
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 850,
                  color: isLight ? "#0f172a" : "#ffffff",
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  margin: "0 0 1rem 0",
                }}
              >
                Transform Your Vision Into{" "}
                <span className="opash-hero-gradient-text">
                  High-Impact Software
                </span>
              </h3>

              <p
                style={{
                  color: isLight ? "#475569" : "#cbd5e1",
                  fontSize: "1.05rem",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                Schedule a 30-minute free technical architecture consultation with our engineering leads. No sales fluff — just pure technical feasibility and rapid roadmap planning.
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                href="/get-a-quote"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "1.05rem 2.25rem",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)",
                  color: "#ffffff",
                  fontSize: "1.02rem",
                  fontWeight: 800,
                  textDecoration: "none",
                  boxShadow: "0 6px 24px rgba(14, 165, 233, 0.4)",
                  transition: "all 0.25s ease",
                }}
              >
                <span>Start Your Project</span>
                <ArrowUpRight size={19} />
              </Link>

              <a
                href={companyData.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "1.05rem 2rem",
                  borderRadius: "14px",
                  background: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                  border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.14)"}`,
                  color: isLight ? "#0f172a" : "#f1f5f9",
                  fontSize: "1rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
              >
                <MessageCircle size={18} color="#25D366" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. 4-COLUMN FOOTER BENCHMARK GRID                                        */}
        {/* ========================================================================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.25fr 1fr 1fr 1.2fr",
            gap: "3.5rem",
            marginBottom: "4.5rem",
          }}
          className="footer-main-grid"
        >
          {/* Column 1: Brand Identity & Verified Awards */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: "1.5rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Opash.png"
                alt="Opash Software Logo"
                className="logo-light-theme"
                style={{ maxHeight: 46, width: "auto", objectFit: "contain" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Opash Dark Mode Logo.png"
                alt="Opash Software Logo"
                className="logo-dark-theme"
                style={{ maxHeight: 46, width: "auto", objectFit: "contain" }}
              />
            </Link>

            <p
              style={{
                color: isLight ? "#475569" : "#94a3b8",
                fontSize: "0.94rem",
                lineHeight: 1.7,
                marginBottom: "1.75rem",
              }}
            >
              {companyData.tagline}. Empowering startups, SMEs, and enterprises globally with scalable web, mobile, SaaS, and AI-driven platforms.
            </p>

            {/* Verified Recognitions Pills */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                padding: "1rem 1.25rem",
                borderRadius: "16px",
                background: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.03)",
                border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.07)"}`,
                marginBottom: "1.75rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#f59e0b", fontSize: "0.86rem", fontWeight: 700 }}>
                <Star size={15} fill="#f59e0b" />
                <span>Clutch 4.9/5 • Upwork Top Rated Plus</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: isLight ? "#0f766e" : "#00ffd1", fontSize: "0.85rem", fontWeight: 600 }}>
                <Award size={15} />
                <span>GoodFirms 5.0 • Trustpilot Verified</span>
              </div>
            </div>

            {/* Social Icons with Glowing Rings */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  backgroundColor: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                  border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.1)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isLight ? "#0f172a" : "#f1f5f9",
                  transition: "all 0.25s ease",
                }}
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                </svg>
              </a>

              <a
                href={companyData.socials.instagram}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  backgroundColor: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                  border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.1)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isLight ? "#0f172a" : "#f1f5f9",
                  transition: "all 0.25s ease",
                }}
                aria-label="Instagram"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              <a
                href={companyData.socials.facebook}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  backgroundColor: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                  border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.1)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isLight ? "#0f172a" : "#f1f5f9",
                  transition: "all 0.25s ease",
                }}
                aria-label="Facebook"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3V2h-3.999a5 5 0 0 0-5 5v2.51H5.198v3.98h3v8.01z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Core Engineering Services */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginBottom: "1.5rem" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0ea5e9" }} />
              <h4 style={{ color: isLight ? "#0f172a" : "#ffffff", fontSize: "1.08rem", fontWeight: 800, margin: 0, letterSpacing: "-0.01em" }}>
                Services
              </h4>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {[
                { href: "/custom-software-development", label: "Custom Software Development" },
                { href: "/web-development", label: "Web App Development" },
                { href: "/mobile-development", label: "Mobile App Development (iOS & Android)" },
                { href: "/ai-ml-solutions", label: "AI & ML Solutions (LLMs & RAG)" },
                { href: "/saas-development", label: "SaaS Multi-Tenant Engineering" },
                { href: "/api-integration", label: "API Integration & Microservices" },
                { href: "/qa-testing", label: "QA & Automated Testing" },
                { href: "/hire-developers", label: "Hire Dedicated Developers" },
              ].map((item) => {
                const isHovered = hoveredLink === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onMouseEnter={() => setHoveredLink(item.href)}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        color: isHovered
                          ? isLight
                            ? "#0284c7"
                            : "#00ffd1"
                          : isLight
                          ? "#475569"
                          : "#94a3b8",
                        textDecoration: "none",
                        fontSize: "0.93rem",
                        fontWeight: isHovered ? 650 : 500,
                        transform: isHovered ? "translateX(4px)" : "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <ChevronRight
                        size={13}
                        style={{
                          opacity: isHovered ? 1 : 0.4,
                          color: isHovered ? (isLight ? "#0284c7" : "#00ffd1") : "inherit",
                          transition: "opacity 0.2s ease",
                        }}
                      />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Company & Insights */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginBottom: "1.5rem" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
              <h4 style={{ color: isLight ? "#0f172a" : "#ffffff", fontSize: "1.08rem", fontWeight: 800, margin: 0, letterSpacing: "-0.01em" }}>
                Company
              </h4>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {[
                { href: "/company", label: "About Opash Software" },
                { href: "/portfolio", label: "Verified Case Studies" },
                { href: "/blogs", label: "Tech Insights & Architecture Guides" },
                { href: "/career", label: "Careers & Open Positions" },
                { href: "/get-a-quote", label: "Interactive Cost Estimator" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-and-conditions", label: "Terms & Conditions" },
              ].map((item) => {
                const isHovered = hoveredLink === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onMouseEnter={() => setHoveredLink(item.href)}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        color: isHovered
                          ? isLight
                            ? "#0284c7"
                            : "#00ffd1"
                          : isLight
                          ? "#475569"
                          : "#94a3b8",
                        textDecoration: "none",
                        fontSize: "0.93rem",
                        fontWeight: isHovered ? 650 : 500,
                        transform: isHovered ? "translateX(4px)" : "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <ChevronRight
                        size={13}
                        style={{
                          opacity: isHovered ? 1 : 0.4,
                          color: isHovered ? (isLight ? "#0284c7" : "#00ffd1") : "inherit",
                          transition: "opacity 0.2s ease",
                        }}
                      />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Global Headquarters & Direct Comm */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginBottom: "1.5rem" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00ffd1" }} />
              <h4 style={{ color: isLight ? "#0f172a" : "#ffffff", fontSize: "1.08rem", fontWeight: 800, margin: 0, letterSpacing: "-0.01em" }}>
                Global Headquarters
              </h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", fontSize: "0.93rem" }}>
              {/* Address with Map Link */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: isLight ? "rgba(14, 165, 233, 0.12)" : "rgba(0, 255, 209, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isLight ? "#0284c7" : "#00ffd1",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <MapPin size={16} />
                </div>
                <div>
                  <p style={{ lineHeight: 1.5, margin: "0 0 0.35rem 0", color: isLight ? "#475569" : "#cbd5e1" }}>
                    {companyData.contact.address}
                  </p>
                  <a
                    href={companyData.contact.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: isLight ? "#0284c7" : "#00ffd1",
                      fontSize: "0.84rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "3px",
                    }}
                  >
                    <span>View on Google Maps</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: isLight ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#10b981",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={15} />
                </div>
                <a
                  href={`tel:${companyData.contact.phoneClean}`}
                  style={{
                    color: isLight ? "#0f172a" : "#f1f5f9",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                  }}
                >
                  {companyData.contact.phone}
                </a>
              </div>

              {/* Email */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: isLight ? "rgba(14, 165, 233, 0.12)" : "rgba(14, 165, 233, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isLight ? "#0284c7" : "#38bdf8",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={15} />
                </div>
                <a
                  href={`mailto:${companyData.contact.email}`}
                  style={{
                    color: isLight ? "#0f172a" : "#f1f5f9",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "0.92rem",
                  }}
                >
                  {companyData.contact.email}
                </a>
              </div>

              {/* HR Priority Comm Channel Card */}
              <div
                style={{
                  marginTop: "0.5rem",
                  padding: "1rem 1.15rem",
                  borderRadius: "14px",
                  backgroundColor: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.7)",
                  border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.08)"}`,
                  boxShadow: isLight ? "0 4px 12px rgba(0,0,0,0.03)" : "none",
                }}
              >
                <div style={{ fontSize: "0.76rem", fontWeight: 700, color: isLight ? "#64748b" : "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "3px" }}>
                  HR & Careers:
                </div>
                <a
                  href={`mailto:${companyData.contact.hrEmail}`}
                  style={{
                    color: isLight ? "#0284c7" : "#00ffd1",
                    fontSize: "0.92rem",
                    textDecoration: "none",
                    fontWeight: 750,
                  }}
                >
                  {companyData.contact.hrEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. SERVING CLIENTS ACROSS GLOBAL HUBS (TELEMETRY RIBBON)                 */}
        {/* ========================================================================= */}
        <div
          style={{
            borderTop: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
            borderBottom: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
            padding: "1.4rem 0",
            marginBottom: "2.25rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.25rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Globe size={15} color="#0ea5e9" />
              <span
                style={{
                  fontSize: "0.82rem",
                  color: isLight ? "#64748b" : "#94a3b8",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontWeight: 800,
                }}
              >
                Serving Clients Across:
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                flexWrap: "wrap",
                fontSize: "0.88rem",
              }}
            >
              {companyData.globalPresence.map((loc) => (
                <span
                  key={loc.country}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#10b981",
                      boxShadow: "0 0 6px #10b981",
                    }}
                  />
                  <strong style={{ color: isLight ? "#0f172a" : "#f1f5f9", fontWeight: 700 }}>
                    {loc.country}
                  </strong>
                  <span style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.78rem" }}>
                    ({loc.timezone})
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. BOTTOM COPYRIGHT & LEGAL HUB                                           */}
        {/* ========================================================================= */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            color: isLight ? "#64748b" : "#94a3b8",
            fontSize: "0.86rem",
          }}
        >
          <div>
            © 2026 {companyData.name}. All Rights Reserved. Engineered with precision.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
            <Link
              href="/privacy-policy"
              style={{
                color: isLight ? "#64748b" : "#94a3b8",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              style={{
                color: isLight ? "#64748b" : "#94a3b8",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
            >
              Terms & Conditions
            </Link>
            <Link
              href="/get-a-quote"
              style={{
                color: isLight ? "#0284c7" : "#00ffd1",
                fontWeight: 750,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <span>Request Proposal</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
