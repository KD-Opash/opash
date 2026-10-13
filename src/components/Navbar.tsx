"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Globe, 
  Smartphone, 
  BrainCircuit, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  UserCheck,
  PhoneCall,
  Briefcase
} from "lucide-react";
import { companyData } from "@/data/company";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesList = [
    { title: "Custom Software", href: "/custom-software-development", icon: Code2, desc: "Bespoke enterprise systems" },
    { title: "Web Development", href: "/web-development", icon: Globe, desc: "Ultra-fast Next.js & React apps" },
    { title: "Mobile Apps", href: "/mobile-development", icon: Smartphone, desc: "Native & React Native/Flutter" },
    { title: "AI & ML Solutions", href: "/ai-ml-solutions", icon: BrainCircuit, desc: "Generative AI, RAG & LLMs" },
    { title: "SaaS Development", href: "/saas-development", icon: Cloud, desc: "Multi-tenant cloud platforms" },
    { title: "API & Microservices", href: "/api-integration", icon: Cpu, desc: "High-throughput integrations" },
    { title: "QA & Testing", href: "/qa-testing", icon: ShieldCheck, desc: "Automated test suites & security" },
    { title: "Hire Developers", href: "/hire-developers", icon: UserCheck, desc: "Vetted top 3% senior engineers" },
  ];

  return (
    <>
      <header
        className={scrolled ? "site-header scrolled" : "site-header"}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          width: "100%",
          transition: "all 0.3s ease",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      >
        {/* Top Mini Bar with phone & hours */}
        <div
          style={{
            borderBottom: "1px solid var(--border-subtle)",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            padding: "0.4rem 0",
            backgroundColor: "rgba(0, 0, 0, 0.02)",
          }}
        >
          <div className="container-custom flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block", boxShadow: "0 0 8px #10b981" }} />
                <span>Available for new projects worldwide</span>
              </span>
              <span style={{ opacity: 0.4 }}>|</span>
              <span className="flex items-center gap-1">
                <span>Surat HQ: {companyData.contact.phone}</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={companyData.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#25D366", textDecoration: "none", fontWeight: 500 }}
              >
                Direct WhatsApp
              </a>
              <span style={{ opacity: 0.4 }}>|</span>
              <a
                href={`mailto:${companyData.contact.email}`}
                style={{ color: "var(--text-secondary)", textDecoration: "none" }}
              >
                {companyData.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container-custom" style={{ padding: "0.9rem 1.5rem" }}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <div
                style={{
                  position: "relative",
                  height: 42,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Opash.png"
                  alt="Opash Software"
                  style={{ maxHeight: 38, width: "auto", objectFit: "contain" }}
                  onError={(e) => {
                    // Fallback to text brand if image fails
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </Link>

            {/* Desktop Floating Pill Navigation */}
            <nav className="desktop-nav nav-pill-container">
              <Link
                href="/"
                className="nav-pill-link"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                style={{ position: "relative" }}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="nav-pill-link"
                  style={{
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Services
                  <ChevronDown
                    size={14}
                    style={{
                      transform: servicesDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>

                {/* Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div
                    className="services-dropdown"
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: "-120px",
                      width: "600px",
                      backgroundColor: "var(--bg-card)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid var(--border-medium)",
                      borderRadius: "var(--radius-lg)",
                      boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.4), 0 0 30px rgba(71, 109, 154, 0.15)",
                      padding: "1.25rem",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.75rem",
                      zIndex: 110,
                      animation: "fadeIn 0.2s ease-out",
                    }}
                  >
                    {servicesList.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.75rem",
                            padding: "0.65rem 0.85rem",
                            borderRadius: "var(--radius-md)",
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                            backgroundColor: "rgba(255, 255, 255, 0.02)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(71, 109, 154, 0.15)";
                            e.currentTarget.style.borderColor = "var(--border-accent)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.02)";
                          }}
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          <div
                            style={{
                              width: 36,
                              height: 36,
                              borderRadius: "8px",
                              backgroundColor: "rgba(71, 109, 154, 0.2)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "var(--color-cyan)",
                              flexShrink: 0,
                            }}
                          >
                            <Icon size={18} />
                          </div>
                          <div>
                            <div style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "0.9rem" }}>{s.title}</div>
                            <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: 2 }}>
                              {s.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/company"
                className="nav-pill-link"
              >
                About
              </Link>

              <Link
                href="/portfolio"
                className="nav-pill-link"
              >
                Case Studies
              </Link>

              <Link
                href="/blogs"
                className="nav-pill-link"
              >
                Insights
              </Link>

              <Link
                href="/career"
                className="nav-pill-link"
              >
                Careers
                <span
                  style={{
                    fontSize: "0.62rem",
                    padding: "0.1rem 0.35rem",
                    borderRadius: "999px",
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    color: "#10b981",
                    fontWeight: 700,
                  }}
                >
                  HIRING
                </span>
              </Link>

              <Link
                href="/contact"
                className="nav-pill-link"
              >
                Contact
              </Link>
            </nav>

            {/* CTA Buttons & Theme Toggle */}
            <div className="flex items-center gap-3">
              <ThemeToggle />

              <Link href="/get-a-quote" className="btn-primary" style={{ padding: "0.7rem 1.4rem", fontSize: "0.9rem" }}>
                <Sparkles size={16} />
                <span>Get a Quote</span>
              </Link>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  display: "none",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-primary)",
                  padding: "0.55rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                className="mobile-hamburger-btn"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="mobile-nav-drawer"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderBottom: "1px solid var(--border-medium)",
              padding: "1.5rem",
            }}
          >
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "1.1rem", fontWeight: 600 }}
              >
                Home
              </Link>
              <div style={{ color: "var(--color-cyan)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", marginTop: "0.5rem" }}>
                Services
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                {servicesList.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.9rem", padding: "0.3rem 0" }}
                  >
                    • {s.title}
                  </Link>
                ))}
              </div>
              <Link
                href="/company"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "1.1rem", fontWeight: 600 }}
              >
                Company
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "1.1rem", fontWeight: 600 }}
              >
                Case Studies
              </Link>
              <Link
                href="/blogs"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "1.1rem", fontWeight: 600 }}
              >
                Tech Insights
              </Link>
              <Link
                href="/career"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "1.1rem", fontWeight: 600 }}
              >
                Career
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "1.1rem", fontWeight: 600 }}
              >
                Contact
              </Link>
              <div className="flex items-center justify-between" style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "1rem", marginTop: "0.5rem" }}>
                <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem", fontWeight: 500 }}>Color Theme:</span>
                <ThemeToggle />
              </div>
              <Link
                href="/get-a-quote"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ textAlign: "center", marginTop: "0.5rem" }}
              >
                Estimate Project Cost
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
