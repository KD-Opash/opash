"use client";

import React from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck, 
  Award, 
  Star,
  Send
} from "lucide-react";
import { companyData } from "@/data/company";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "5rem",
        paddingBottom: "3rem",
      }}
    >
      {/* Ambient background glow orb */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 350,
          background: "radial-gradient(circle, rgba(71, 109, 154, 0.2) 0%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Top CTA Banner */}
        <div
          className="glass-panel cta-banner-box"
          style={{
            padding: "3rem 2.5rem",
            marginBottom: "4.5rem",
          }}
        >
          <div className="flex justify-between items-center flex-wrap gap-6">
            <div style={{ maxWidth: "680px" }}>
              <span className="badge-glow" style={{ marginBottom: "1rem" }}>
                Ready To Build Something Great?
              </span>
              <h3 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginTop: "0.5rem", lineHeight: 1.2 }}>
                Transform Your Vision Into High-Impact Software
              </h3>
              <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", fontSize: "1.05rem" }}>
                Schedule a 30-minute free technical architecture consultation with our engineering leads. No sales fluff — just pure technical feasibility and rapid roadmap planning.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <Link href="/get-a-quote" className="btn-primary" style={{ padding: "1rem 2.2rem", fontSize: "1.05rem" }}>
                <span>Start Your Project</span>
                <ArrowUpRight size={18} />
              </Link>
              <a
                href={companyData.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: "1rem 2rem", fontSize: "1rem" }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Column 1: Brand Info */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: "1.25rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Opash.png"
                alt="Opash Software Logo"
                className="logo-light-theme"
                style={{ maxHeight: 44, width: "auto", objectFit: "contain" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Opash Dark Mode Logo.png"
                alt="Opash Software Logo"
                className="logo-dark-theme"
                style={{ maxHeight: 44, width: "auto", objectFit: "contain" }}
              />
            </Link>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              {companyData.tagline}. Empowering startups, SMEs, and enterprises globally with scalable web, mobile, SaaS, and AI-driven platforms.
            </p>

            {/* Recognitions mini pills */}
            <div className="flex flex-col gap-2" style={{ marginTop: "1rem" }}>
              <div className="flex items-center gap-2" style={{ color: "#f59e0b", fontSize: "0.85rem", fontWeight: 600 }}>
                <Star size={16} fill="#f59e0b" />
                <span>Clutch 4.9/5 • Upwork Top Rated Plus</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                <Award size={16} color="var(--color-cyan)" />
                <span>GoodFirms 5.0 • Trustpilot Verified</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3" style={{ marginTop: "1.75rem" }}>
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  backgroundColor: "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-primary)",
                  transition: "all 0.2s",
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
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  backgroundColor: "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-primary)",
                  transition: "all 0.2s",
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
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  backgroundColor: "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-primary)",
                  transition: "all 0.2s",
                }}
                aria-label="Facebook"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3V2h-3.999a5 5 0 0 0-5 5v2.51H5.198v3.98h3v8.01z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 style={{ color: "var(--text-primary)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>
              Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li>
                <Link href="/custom-software-development" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cyan)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/web-development" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cyan)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
                  Web App Development
                </Link>
              </li>
              <li>
                <Link href="/mobile-development" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cyan)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
                  Mobile App Development (iOS & Android)
                </Link>
              </li>
              <li>
                <Link href="/ai-ml-solutions" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cyan)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
                  AI & ML Solutions (LLMs & RAG)
                </Link>
              </li>
              <li>
                <Link href="/saas-development" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cyan)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
                  SaaS Multi-Tenant Engineering
                </Link>
              </li>
              <li>
                <Link href="/api-integration" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cyan)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
                  API Integration & Microservices
                </Link>
              </li>
              <li>
                <Link href="/qa-testing" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cyan)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
                  QA & Automated Testing
                </Link>
              </li>
              <li>
                <Link href="/hire-developers" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cyan)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
                  Hire Dedicated Developers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Insights */}
          <div>
            <h4 style={{ color: "var(--text-primary)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li>
                <Link href="/company" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.95rem" }}>
                  About Opash Software
                </Link>
              </li>
              <li>
                <Link href="/portfolio" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.95rem" }}>
                  Verified Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blogs" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.95rem" }}>
                  Tech Insights & Architecture Guides
                </Link>
              </li>
              <li>
                <Link href="/career" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.95rem" }}>
                  Careers & Open Positions
                </Link>
              </li>
              <li>
                <Link href="/get-a-quote" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.95rem" }}>
                  Interactive Cost Estimator
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.95rem" }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.95rem" }}>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 style={{ color: "var(--text-primary)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>
              Global Headquarters
            </h4>
            <div className="flex flex-col gap-4" style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
              <div className="flex items-start gap-3">
                <MapPin size={20} color="var(--color-cyan)" style={{ flexShrink: 0, marginTop: 4 }} />
                <div>
                  <p style={{ lineHeight: 1.5 }}>{companyData.contact.address}</p>
                  <a
                    href={companyData.contact.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--color-cyan)", fontSize: "0.85rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 3, marginTop: 4 }}
                  >
                    <span>View on Google Maps</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} color="var(--color-cyan)" style={{ flexShrink: 0 }} />
                <a href={`tel:${companyData.contact.phoneClean}`} style={{ color: "var(--text-primary)", textDecoration: "none", fontWeight: 600 }}>
                  {companyData.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} color="var(--color-cyan)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${companyData.contact.email}`} style={{ color: "var(--text-primary)", textDecoration: "none" }}>
                  {companyData.contact.email}
                </a>
              </div>

              <div
                style={{
                  marginTop: "0.75rem",
                  padding: "0.85rem 1rem",
                  backgroundColor: "var(--bg-elevated)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>HR & Careers:</div>
                <a href={`mailto:${companyData.contact.hrEmail}`} style={{ color: "var(--color-cyan)", fontSize: "0.9rem", textDecoration: "none", fontWeight: 500 }}>
                  {companyData.contact.hrEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Global Hubs Marquee */}
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "1.25rem 0",
            marginBottom: "2rem",
          }}
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
              Serving Clients Across:
            </span>
            <div className="flex items-center gap-6 flex-wrap" style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              {companyData.globalPresence.map((loc) => (
                <span key={loc.country} className="flex items-center gap-2">
                  <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--color-cyan)" }} />
                  <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>{loc.country}</strong>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>({loc.timezone})</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex justify-between items-center flex-wrap gap-4" style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
          <div>
            © 2026 {companyData.name}. All Rights Reserved. Engineered with precision.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
              Terms & Conditions
            </Link>
            <Link href="/get-a-quote" style={{ color: "var(--color-cyan)", textDecoration: "none" }}>
              Request Proposal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
