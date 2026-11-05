"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  ChevronDown
} from "lucide-react";
import { companyData } from "@/data/company";
import { useTheme } from "./ThemeProvider";
import Interactive3DIcon from "./Interactive3DIcon";

export default function Footer() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    navigation: false,
    services: false,
    contact: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: isLight ? "#f1f5f9" : "#030814",
        color: isLight ? "#0f172a" : "#f8fafc",
        borderTop: `1px solid ${isLight ? "rgba(203, 213, 225, 0.8)" : "rgba(255, 255, 255, 0.08)"}`,
        paddingTop: "4.5rem",
        paddingBottom: "2rem",
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

      {/* ============================================================= */}
      {/* ANIMATED FLOATING PARTICLES BACKGROUND                        */}
      {/* ============================================================= */}
      <div aria-hidden="true" className="footer-particles-container">
        <div className="footer-particle fp-1" />
        <div className="footer-particle fp-2" />
        <div className="footer-particle fp-3" />
        <div className="footer-particle fp-4" />
        <div className="footer-particle fp-5" />
        <div className="footer-particle fp-6" />
        <div className="footer-particle fp-7" />
        <div className="footer-particle fp-8" />
        <div className="footer-particle fp-9" />
        <div className="footer-particle fp-10" />
        <div className="footer-particle fp-11" />
        <div className="footer-particle fp-12" />
      </div>

      {/* Animated Gradient Mesh Orbs */}
      <div
        aria-hidden="true"
        className="footer-orb footer-orb-1"
        style={{
          background: isLight
            ? "radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(0, 255, 209, 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="footer-orb footer-orb-2"
        style={{
          background: isLight
            ? "radial-gradient(circle, rgba(138, 92, 255, 0.08) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(138, 92, 255, 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Animated Grid Lines */}
      <div
        aria-hidden="true"
        className="footer-grid-lines"
        style={{
          backgroundImage: isLight
            ? `linear-gradient(rgba(14, 165, 233, 0.04) 1px, transparent 1px),
               linear-gradient(90deg, rgba(14, 165, 233, 0.04) 1px, transparent 1px)`
            : `linear-gradient(rgba(0, 255, 209, 0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0, 255, 209, 0.03) 1px, transparent 1px)`,
        }}
      />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* ============================================================= */}
        {/* 1. 4-COLUMN FOOTER GRID                                        */}
        {/* ============================================================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.25fr 1fr 1.15fr 1.2fr",
            gap: "3.5rem",
            marginBottom: "3.5rem",
          }}
          className="footer-main-grid"
        >
          {/* Column 1: Brand Identity & Social Icons */}
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
                marginBottom: "2rem",
                maxWidth: "320px",
              }}
            >
              Engineering digital excellence since 2018. We architect, build, and scale software that powers businesses across the globe.
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <a
                href={companyData.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn footer-social-facebook"
                aria-label="Facebook"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="footer-social-svg">
                  <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3V2h-3.999a5 5 0 0 0-5 5v2.51H5.198v3.98h3v8.01z"/>
                </svg>
              </a>

              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn footer-social-linkedin"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="footer-social-svg">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                </svg>
              </a>

              <a
                href={companyData.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn footer-social-instagram"
                aria-label="Instagram"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="footer-social-svg">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              <a
                href={companyData.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn footer-social-whatsapp"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="footer-social-svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation — Blogs & Career REMOVED */}
          <div className="footer-col-group">
            {/* Desktop Static Title (Clean typography, no box, no arrow) */}
            <h4
              className="footer-desktop-title"
              style={{
                color: isLight ? "#0f172a" : "#ffffff",
              }}
            >
              Navigation
            </h4>

            {/* Mobile Collapsible Accordion Button */}
            <button
              type="button"
              onClick={() => toggleSection("navigation")}
              className="footer-mobile-accordion-btn"
              aria-expanded={openSections.navigation}
              style={{
                color: isLight ? "#0f172a" : "#ffffff",
              }}
            >
              <span>Navigation</span>
              <ChevronDown
                size={18}
                className={`footer-accordion-arrow ${openSections.navigation ? "is-open" : ""}`}
              />
            </button>

            <div className={`footer-accordion-content ${openSections.navigation ? "is-open" : ""}`}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {[
                  { href: "/", label: "Home" },
                  { href: "/company", label: "Company" },
                  { href: "/services", label: "Services" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/get-a-quote", label: "Get a Quote" },
                  { href: "/contact", label: "Contact Us" },
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
                          gap: "0.55rem",
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
                          size={14}
                          style={{
                            opacity: isHovered ? 1 : 0.45,
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
          </div>

          {/* Column 3: Services */}
          <div className="footer-col-group">
            {/* Desktop Static Title */}
            <h4
              className="footer-desktop-title"
              style={{
                color: isLight ? "#0f172a" : "#ffffff",
              }}
            >
              Services
            </h4>

            {/* Mobile Collapsible Accordion Button */}
            <button
              type="button"
              onClick={() => toggleSection("services")}
              className="footer-mobile-accordion-btn"
              aria-expanded={openSections.services}
              style={{
                color: isLight ? "#0f172a" : "#ffffff",
              }}
            >
              <span>Services</span>
              <ChevronDown
                size={18}
                className={`footer-accordion-arrow ${openSections.services ? "is-open" : ""}`}
              />
            </button>

            <div className={`footer-accordion-content ${openSections.services ? "is-open" : ""}`}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {[
                  { href: "/custom-software-development", label: "Custom Software Development" },
                  { href: "/web-development", label: "Web Development" },
                  { href: "/mobile-development", label: "Mobile App Development" },
                  { href: "/ai-ml-solutions", label: "AI & ML Solutions" },
                  { href: "/saas-development", label: "SaaS Development" },
                  { href: "/api-integration", label: "API Integration & Micro Services" },
                  { href: "/qa-testing", label: "QA / Testing" },
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
                          gap: "0.55rem",
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
                          size={14}
                          style={{
                            opacity: isHovered ? 1 : 0.45,
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
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col-group">
            {/* Desktop Static Title */}
            <h4
              className="footer-desktop-title"
              style={{
                color: isLight ? "#0f172a" : "#ffffff",
              }}
            >
              Contact
            </h4>

            {/* Mobile Collapsible Accordion Button */}
            <button
              type="button"
              onClick={() => toggleSection("contact")}
              className="footer-mobile-accordion-btn"
              aria-expanded={openSections.contact}
              style={{
                color: isLight ? "#0f172a" : "#ffffff",
              }}
            >
              <span>Contact</span>
              <ChevronDown
                size={18}
                className={`footer-accordion-arrow ${openSections.contact ? "is-open" : ""}`}
              />
            </button>

            <div className={`footer-accordion-content ${openSections.contact ? "is-open" : ""}`}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", fontSize: "0.93rem" }}>
                {/* Phone */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Interactive3DIcon type="phone" size={34} iconSize={16} />
                  <a
                    href={`tel:${companyData.contact.phoneClean}`}
                    style={{
                      color: isLight ? "#0f172a" : "#f1f5f9",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: "0.94rem",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {companyData.contact.phone}
                  </a>
                </div>

                {/* Email */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Interactive3DIcon type="mail" size={34} iconSize={16} />
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    style={{
                      color: isLight ? "#0f172a" : "#f1f5f9",
                      textDecoration: "none",
                      fontWeight: 500,
                      fontSize: "0.92rem",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {companyData.contact.email}
                  </a>
                </div>

                {/* Address */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <Interactive3DIcon type="location" size={34} iconSize={16} style={{ marginTop: "2px" }} />
                  <a
                    href={companyData.contact.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      lineHeight: 1.6,
                      margin: 0,
                      color: isLight ? "#475569" : "#cbd5e1",
                      textDecoration: "none",
                      fontSize: "0.92rem",
                    }}
                  >
                    129, The Galleria Shopping Hub, Nr. Sanjeev Kumar Auditorium, Opp. 3Seventy Kitchen Restaurant, Pal, Adajan, Surat - 395009
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================= */}
        {/* 2. BOTTOM COPYRIGHT BAR (CENTERED)                             */}
        {/* ============================================================= */}
        <div
          style={{
            borderTop: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
            paddingTop: "2rem",
            paddingBottom: "1.5rem",
            textAlign: "center",
            color: isLight ? "#64748b" : "#94a3b8",
            fontSize: "0.92rem",
          }}
        >
          <span>© 2026 All rights reserved by </span>
          <span style={{ color: isLight ? "#0284c7" : "#00ffd1", fontWeight: 700 }}>
            Opash Software
          </span>
          <span>.</span>
        </div>
      </div>

      <style jsx>{`
        /* ========================================================================= */
        /* ANIMATED FLOATING PARTICLES                                               */
        /* ========================================================================= */
        .footer-particles-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .footer-particle {
          position: absolute;
          border-radius: 50%;
          will-change: transform, opacity;
        }

        .fp-1 {
          width: 4px; height: 4px;
          background: ${isLight ? "#0ea5e9" : "#00ffd1"};
          top: 12%; left: 8%;
          animation: footerFloat1 8s ease-in-out infinite;
          opacity: ${isLight ? "0.25" : "0.35"};
        }
        .fp-2 {
          width: 3px; height: 3px;
          background: ${isLight ? "#8a5cff" : "#8a5cff"};
          top: 25%; left: 18%;
          animation: footerFloat2 10s ease-in-out infinite;
          opacity: ${isLight ? "0.2" : "0.3"};
        }
        .fp-3 {
          width: 5px; height: 5px;
          background: ${isLight ? "#0ea5e9" : "#38bdf8"};
          top: 8%; left: 35%;
          animation: footerFloat3 12s ease-in-out infinite;
          opacity: ${isLight ? "0.2" : "0.3"};
        }
        .fp-4 {
          width: 3px; height: 3px;
          background: ${isLight ? "#10b981" : "#00ffd1"};
          top: 45%; left: 52%;
          animation: footerFloat1 9s ease-in-out infinite reverse;
          opacity: ${isLight ? "0.25" : "0.35"};
        }
        .fp-5 {
          width: 4px; height: 4px;
          background: ${isLight ? "#8a5cff" : "#a78bfa"};
          top: 18%; left: 65%;
          animation: footerFloat2 11s ease-in-out infinite;
          opacity: ${isLight ? "0.2" : "0.3"};
        }
        .fp-6 {
          width: 6px; height: 6px;
          background: ${isLight ? "#0ea5e9" : "#00ffd1"};
          top: 55%; left: 80%;
          animation: footerFloat3 8.5s ease-in-out infinite;
          opacity: ${isLight ? "0.2" : "0.3"};
        }
        .fp-7 {
          width: 3px; height: 3px;
          background: ${isLight ? "#10b981" : "#38bdf8"};
          top: 70%; left: 12%;
          animation: footerFloat2 10.5s ease-in-out infinite reverse;
          opacity: ${isLight ? "0.2" : "0.3"};
        }
        .fp-8 {
          width: 5px; height: 5px;
          background: ${isLight ? "#0ea5e9" : "#00ffd1"};
          top: 35%; left: 90%;
          animation: footerFloat1 7.5s ease-in-out infinite;
          opacity: ${isLight ? "0.25" : "0.35"};
        }
        .fp-9 {
          width: 4px; height: 4px;
          background: ${isLight ? "#8a5cff" : "#8a5cff"};
          top: 80%; left: 45%;
          animation: footerFloat3 9.5s ease-in-out infinite reverse;
          opacity: ${isLight ? "0.2" : "0.3"};
        }
        .fp-10 {
          width: 3px; height: 3px;
          background: ${isLight ? "#0ea5e9" : "#38bdf8"};
          top: 60%; left: 30%;
          animation: footerFloat1 11s ease-in-out infinite;
          opacity: ${isLight ? "0.2" : "0.3"};
        }
        .fp-11 {
          width: 5px; height: 5px;
          background: ${isLight ? "#10b981" : "#00ffd1"};
          top: 15%; left: 78%;
          animation: footerFloat2 8s ease-in-out infinite reverse;
          opacity: ${isLight ? "0.25" : "0.35"};
        }
        .fp-12 {
          width: 3px; height: 3px;
          background: ${isLight ? "#8a5cff" : "#a78bfa"};
          top: 75%; left: 70%;
          animation: footerFloat3 10s ease-in-out infinite;
          opacity: ${isLight ? "0.2" : "0.3"};
        }

        @keyframes footerFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
          25% { transform: translate(18px, -22px) scale(1.3); opacity: 0.45; }
          50% { transform: translate(-12px, -35px) scale(0.9); opacity: 0.3; }
          75% { transform: translate(22px, -15px) scale(1.15); opacity: 0.4; }
        }

        @keyframes footerFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
          33% { transform: translate(-20px, -28px) scale(1.25); opacity: 0.45; }
          66% { transform: translate(15px, -18px) scale(0.85); opacity: 0.25; }
        }

        @keyframes footerFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.15; }
          20% { transform: translate(25px, -15px) scale(1.2); opacity: 0.4; }
          40% { transform: translate(-8px, -40px) scale(0.9); opacity: 0.25; }
          60% { transform: translate(20px, -25px) scale(1.1); opacity: 0.45; }
          80% { transform: translate(-15px, -10px) scale(1.05); opacity: 0.3; }
        }

        /* ========================================================================= */
        /* ANIMATED GRADIENT ORBS                                                     */
        /* ========================================================================= */
        .footer-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
          will-change: transform;
        }
        .footer-orb-1 {
          width: 600px; height: 400px;
          top: 5%; left: 20%;
          animation: footerOrbFloat 15s ease-in-out infinite alternate;
        }
        .footer-orb-2 {
          width: 500px; height: 350px;
          bottom: 10%; right: 15%;
          animation: footerOrbFloat 12s ease-in-out infinite alternate-reverse;
        }

        @keyframes footerOrbFloat {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.08); }
          100% { transform: translate(-20px, 15px) scale(0.95); }
        }

        /* ========================================================================= */
        /* ANIMATED GRID LINES                                                        */
        /* ========================================================================= */
        .footer-grid-lines {
          position: absolute;
          inset: 0;
          background-size: 80px 80px;
          pointer-events: none;
          z-index: 0;
          animation: footerGridPulse 6s ease-in-out infinite alternate;
          mask-image: radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, transparent 70%);
        }

        @keyframes footerGridPulse {
          0% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }

        /* ========================================================================= */
        /* SOCIAL MEDIA BUTTONS SPRING ANIMATION & BRAND GLOW HOVERS                 */
        /* ========================================================================= */
        .footer-social-btn {
          width: 44px;
          height: 44px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          background: ${isLight ? "#ffffff" : "rgba(255, 255, 255, 0.05)"};
          border: 1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.12)"};
          color: ${isLight ? "#0f172a" : "#f1f5f9"};
          box-shadow: ${isLight ? "0 2px 6px rgba(15, 23, 42, 0.05)" : "0 4px 14px rgba(0, 0, 0, 0.3)"};
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                      background 0.3s ease,
                      border-color 0.3s ease,
                      box-shadow 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                      color 0.25s ease;
          will-change: transform;
        }

        .footer-social-svg {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform;
        }

        /* 1. LinkedIn: Authentic Brand Blue + 3D Lift + Soft Electric Glow */
        .footer-social-linkedin:hover {
          transform: translateY(-5px) scale(1.12);
          background: #0a66c2 !important;
          border-color: #0a66c2 !important;
          color: #ffffff !important;
          box-shadow: 0 12px 24px -4px rgba(10, 102, 194, 0.65), 0 0 16px rgba(10, 102, 194, 0.45) !important;
        }
        .footer-social-linkedin:hover .footer-social-svg {
          transform: scale(1.18) rotate(5deg);
        }

        /* 2. Instagram: Signature Radiant Sunset Gradient + 3D Lift + Coral Glow */
        .footer-social-instagram:hover {
          transform: translateY(-5px) scale(1.12);
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%) !important;
          border-color: rgba(220, 39, 67, 0.8) !important;
          color: #ffffff !important;
          box-shadow: 0 12px 24px -4px rgba(220, 39, 67, 0.65), 0 0 18px rgba(220, 39, 67, 0.45) !important;
        }
        .footer-social-instagram:hover .footer-social-svg {
          transform: scale(1.18) rotate(-6deg);
        }

        /* 3. Facebook: Classic Meta Blue + 3D Lift + Blue Glow */
        .footer-social-facebook:hover {
          transform: translateY(-5px) scale(1.12);
          background: #1877f2 !important;
          border-color: #1877f2 !important;
          color: #ffffff !important;
          box-shadow: 0 12px 24px -4px rgba(24, 119, 242, 0.65), 0 0 16px rgba(24, 119, 242, 0.45) !important;
        }
        .footer-social-facebook:hover .footer-social-svg {
          transform: scale(1.18) rotate(5deg);
        }

        /* 4. WhatsApp: Signature Emerald Green + 3D Lift + Glow */
        .footer-social-whatsapp:hover {
          transform: translateY(-5px) scale(1.12);
          background: #25d366 !important;
          border-color: #25d366 !important;
          color: #ffffff !important;
          box-shadow: 0 12px 24px -4px rgba(37, 211, 102, 0.65), 0 0 16px rgba(37, 211, 102, 0.45) !important;
        }
        .footer-social-whatsapp:hover .footer-social-svg {
          transform: scale(1.18) rotate(5deg);
        }

        /* Active Press Feedback */
        .footer-social-btn:active {
          transform: translateY(-2px) scale(0.97);
        }

        /* ========================================================================= */
        /* CONTACT ICONS HOVER REACTION                                              */
        /* ========================================================================= */
        .footer-contact-icon {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.3s ease;
          will-change: transform;
        }
        .footer-contact-icon:hover {
          transform: scale(1.15) translateY(-2px);
          box-shadow: 0 6px 16px -2px rgba(14, 165, 233, 0.35);
        }
      `}</style>
    </footer>
  );
}
