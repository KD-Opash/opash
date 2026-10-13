"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  MessageSquare
} from "lucide-react";
import { companyData } from "@/data/company";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const handleServicesEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 220);
  };

  const servicesList = [
    { 
      title: "Custom Software", 
      href: "/custom-software-development", 
      icon: Code2, 
      desc: "Bespoke enterprise architectures",
      color: "#00BBAB",
    },
    { 
      title: "Web Development", 
      href: "/web-development", 
      icon: Globe, 
      desc: "Ultra-fast Next.js & React platforms",
      color: "#38bdf8",
    },
    { 
      title: "Mobile Apps", 
      href: "/mobile-development", 
      icon: Smartphone, 
      desc: "iOS, Android & Flutter/React Native",
      color: "#a78bfa",
    },
    { 
      title: "AI & ML Solutions", 
      href: "/ai-ml-solutions", 
      icon: BrainCircuit, 
      desc: "Generative AI, RAG & LLMs",
      badge: "HOT",
      color: "#10b981",
    },
    { 
      title: "SaaS Development", 
      href: "/saas-development", 
      icon: Cloud, 
      desc: "Multi-tenant cloud platforms",
      color: "#60a5fa",
    },
    { 
      title: "API & Microservices", 
      href: "/api-integration", 
      icon: Cpu, 
      desc: "High-throughput integrations",
      color: "#fbbf24",
    },
    { 
      title: "QA & Testing", 
      href: "/qa-testing", 
      icon: ShieldCheck, 
      desc: "Automated test suites & security",
      color: "#f43f5e",
    },
    { 
      title: "Hire Developers", 
      href: "/hire-developers", 
      icon: UserCheck, 
      desc: "Vetted top 3% senior engineers",
      badge: "TOP 3%",
      color: "#2dd4bf",
    },
  ];

  const isServicesActive = servicesList.some((s) => pathname === s.href);

  return (
    <header className={`corporate-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="corporate-nav-container">
        {/* Brand Logo */}
        <Link href="/" className="corporate-nav-brand" aria-label="Opash Software Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Opash.png"
            alt="Opash Software"
            style={{ maxHeight: 36, width: "auto", objectFit: "contain" }}
          />
        </Link>

        {/* Desktop Clean Navigation (No busy lines or enclosing pill borders) */}
        <nav className="desktop-nav corporate-nav-links">
          <Link
            href="/"
            className={`corporate-link ${pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>

          {/* Services Dropdown Trigger */}
          <div
            className="corporate-services-trigger"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button
              type="button"
              className={`corporate-link ${isServicesActive || servicesDropdownOpen ? "active" : ""}`}
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              aria-expanded={servicesDropdownOpen}
            >
              Services
              <ChevronDown
                size={14}
                style={{
                  transform: servicesDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </button>

            {/* Clean Professional Services Dropdown */}
            {servicesDropdownOpen && (
              <div
                className="corporate-services-dropdown"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <div className="corporate-services-grid">
                  {servicesList.map((s) => {
                    const Icon = s.icon;
                    const isCurrent = pathname === s.href;
                    return (
                      <Link
                        key={s.href}
                        href={s.href}
                        className={`corporate-service-item ${isCurrent ? "active" : ""}`}
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        <div
                          className="corporate-service-icon"
                          style={{ color: s.color }}
                        >
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="corporate-service-title">
                            <span>{s.title}</span>
                            {s.badge && (
                              <span className="corporate-service-badge">
                                {s.badge}
                              </span>
                            )}
                          </div>
                          <div className="corporate-service-desc">{s.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Consultation Card */}
                <div className="corporate-dropdown-footer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text-primary)" }}>
                        Need a custom technical roadmap?
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "2px" }}>
                        Talk directly with our solutions architects.
                      </div>
                    </div>
                    <Link
                      href="/get-a-quote"
                      className="corporate-footer-cta"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <span>Free Architecture Call</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/company"
            className={`corporate-link ${pathname === "/company" ? "active" : ""}`}
          >
            About
          </Link>

          <Link
            href="/portfolio"
            className={`corporate-link ${pathname === "/portfolio" ? "active" : ""}`}
          >
            Case Studies
          </Link>

          <Link
            href="/blogs"
            className={`corporate-link ${pathname === "/blogs" ? "active" : ""}`}
          >
            Insights
          </Link>

          <Link
            href="/career"
            className={`corporate-link ${pathname === "/career" ? "active" : ""}`}
          >
            <span>Careers</span>
            <span className="corporate-hiring-tag">HIRING</span>
          </Link>

          <Link
            href="/contact"
            className={`corporate-link ${pathname === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link href="/get-a-quote" className="corporate-cta-btn">
            <Sparkles size={15} />
            <span>Get a Quote</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="corporate-mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Sheet */}
      {mobileMenuOpen && (
        <div className="corporate-mobile-sheet">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="corporate-mobile-link"
            >
              Home
            </Link>

            <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "0.5rem" }}>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  color: isServicesActive ? "#00BBAB" : "var(--text-primary)",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  padding: "0.5rem 0",
                  cursor: "pointer",
                }}
              >
                <span>Services ({servicesList.length})</span>
                <ChevronDown
                  size={16}
                  style={{
                    transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </button>

              {mobileServicesOpen && (
                <div style={{ display: "grid", gap: "0.4rem", padding: "0.5rem 0 0.5rem 0.5rem" }}>
                  {servicesList.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.6rem",
                          padding: "0.45rem",
                          borderRadius: "8px",
                          color: pathname === s.href ? "#00BBAB" : "var(--text-secondary)",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                        }}
                      >
                        <Icon size={16} style={{ color: s.color }} />
                        <span>{s.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/company"
              onClick={() => setMobileMenuOpen(false)}
              className="corporate-mobile-link"
            >
              About
            </Link>

            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="corporate-mobile-link"
            >
              Case Studies
            </Link>

            <Link
              href="/blogs"
              onClick={() => setMobileMenuOpen(false)}
              className="corporate-mobile-link"
            >
              Insights
            </Link>

            <Link
              href="/career"
              onClick={() => setMobileMenuOpen(false)}
              className="corporate-mobile-link"
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
              <span>Careers</span>
              <span className="corporate-hiring-tag">HIRING</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="corporate-mobile-link"
            >
              Contact
            </Link>

            <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "1rem", marginTop: "0.5rem" }}>
              <Link
                href="/get-a-quote"
                onClick={() => setMobileMenuOpen(false)}
                className="corporate-cta-btn"
                style={{ width: "100%", justifyContent: "center", padding: "0.85rem" }}
              >
                <Sparkles size={16} />
                <span>Estimate Project Cost</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
