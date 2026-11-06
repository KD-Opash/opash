"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { caseStudiesData, CaseStudy } from "@/data/case-studies";
import { companyData } from "@/data/company";
import { 
  ExternalLink, 
  ArrowRight, 
  ArrowUpRight,
  MessageCircle,
  CheckCircle2, 
  Quote, 
  Star, 
  ShieldCheck,
  Building,
  TrendingUp,
  FolderOpen,
  Search,
  Code2,
  Cpu,
  Layers,
  Database,
  Globe,
  SlidersHorizontal,
  ChevronRight,
  Award,
  RefreshCw,
  Zap
} from "lucide-react";
import Folder, { FolderItem } from "@/components/Folder";
import { useTheme } from "./ThemeProvider";
import PortfolioCreativeBackdrop from "./PortfolioCreativeBackdrop";
import OuiWillHeadline, { OuiWillWord, OuiWillDot } from "./OuiWillHeadline";
import CurvedTestimonialsCarousel from "./CurvedTestimonialsCarousel";

// Unique Rolling Digit Reel Component (Odometer / Slot-Machine Vertical Roll-Up)
function RollingDigit({
  target,
  start,
  delay = 0,
  duration = 1.6,
}: {
  target: number;
  start: boolean;
  delay?: number;
  duration?: number;
}) {
  // 20-digit loop reel: 0..9 then 0..9 for authentic vertical roll-up from bottom
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const targetIndex = 10 + target;

  return (
    <span
      style={{
        display: "inline-block",
        height: "1.15em",
        lineHeight: "1.15em",
        overflow: "hidden",
        verticalAlign: "baseline",
        position: "relative",
      }}
    >
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          transform: start
            ? `translate3d(0, -${targetIndex * 5}%, 0)`
            : "translate3d(0, 0%, 0)",
          transition: `transform ${duration}s cubic-bezier(0.12, 1, 0.25, 1) ${delay}s`,
          willChange: "transform",
        }}
      >
        {digits.map((d, idx) => (
          <span
            key={idx}
            style={{
              height: "1.15em",
              lineHeight: "1.15em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}

function RollingNumberTicker({
  text,
  start,
  duration = 1.6,
}: {
  text: string;
  start: boolean;
  duration?: number;
}) {
  let digitIndex = 0;

  return (
    <span style={{ display: "inline-flex", alignItems: "baseline", justifyContent: "center" }}>
      {text.split("").map((char, index) => {
        const isDigit = /\d/.test(char);
        if (isDigit) {
          const num = parseInt(char, 10);
          const delay = digitIndex * 0.08;
          digitIndex++;
          return (
            <RollingDigit
              key={index}
              target={num}
              start={start}
              delay={delay}
              duration={duration}
            />
          );
        }

        return (
          <span
            key={index}
            style={{
              display: "inline-block",
              lineHeight: "1.15em",
            }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}

export default function PortfolioPageClient() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Dynamic portfolio items from Admin Panel / NextHRMS API
  const [portfolioList, setPortfolioList] = useState<CaseStudy[]>(caseStudiesData);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<"admin" | "fallback">("fallback");

  // Filter & Search states
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTabs, setActiveTabs] = useState<Record<string, "impact" | "solution" | "stack" | "testimonial">>({});
  const [activeDomainFolder, setActiveDomainFolder] = useState<string>("Creative Media");

  // Scroll entrance animation & counter triggers
  const schematicsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const [schematicsInView, setSchematicsInView] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const [caseStudiesInView, setCaseStudiesInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === schematicsRef.current && entry.isIntersecting) {
            setSchematicsInView(true);
          }
          if (entry.target === statsRef.current && entry.isIntersecting) {
            setStatsInView(true);
          }
          if (entry.target === caseStudiesRef.current && entry.isIntersecting) {
            setCaseStudiesInView(true);
          }
        });
      },
      { threshold: 0.12 }
    );

    if (schematicsRef.current) observer.observe(schematicsRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    if (caseStudiesRef.current) observer.observe(caseStudiesRef.current);

    return () => observer.disconnect();
  }, []);

  // Fetch dynamic portfolio data from Admin API on mount
  useEffect(() => {
    let isSubscribed = true;
    const fetchPortfolio = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/portfolio/public");
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0 && isSubscribed) {
            setPortfolioList(json.data);
            if (json.source === "admin") {
              setDataSource("admin");
            }
          }
        }
      } catch {
        // Keeps high-fidelity fallback dataset cleanly
      } finally {
        if (isSubscribed) setLoading(false);
      }
    };

    fetchPortfolio();
    return () => {
      isSubscribed = false;
    };
  }, []);

  // 4 Core Production Domain Folders with verified deliverable KPIs
  const domainFolders = [
    {
      id: "Creative Media",
      label: "Creative Media",
      filterKey: "Creative",
      color: "#00ffd1",
      lightColor: "#008a75",
      icon: Layers,
      items: [
        { 
          title: "4K Media Streaming Architecture", 
          metric: "95+ Lighthouse", 
          badge: "Next.js 15", 
          desc: "Sub-second 4K video previews & CDN edge caching", 
          tags: ["Next.js", "Edge CDN", "Next.js 15"] 
        },
        { 
          title: "Design System & Micro-Animations", 
          metric: "2x Inquiries", 
          badge: "UI/UX", 
          desc: "Figma design tokens & fluid 60fps cursor physics", 
          tags: ["Framer", "CSS3", "UI/UX"] 
        },
        { 
          title: "Production Global Launch Plan", 
          metric: "100% Retained", 
          badge: "DevOps", 
          desc: "Multi-region CDN routing & zero-downtime deploy", 
          tags: ["Vercel", "Cloudinary", "DevOps"] 
        },
      ],
    },
    {
      id: "HealthTech",
      label: "HealthTech",
      filterKey: "HealthTech",
      color: "#00ffd1",
      lightColor: "#008a75",
      icon: ShieldCheck,
      items: [
        { 
          title: "HIPAA Security & Care Vault", 
          metric: "99.99% Uptime", 
          badge: "HIPAA Cloud", 
          desc: "End-to-end encrypted records & audited RBAC", 
          tags: ["AWS HIPAA", "Next.js", "Cloud"] 
        },
        { 
          title: "Practitioner Care Board", 
          metric: "65% Less Overhead", 
          badge: "SaaS UI", 
          desc: "Real-time medical task queue & schedule board", 
          tags: ["React", "PostgreSQL", "SaaS UI"] 
        },
        { 
          title: "Automated Clinical Telemetry", 
          metric: "4.9/5 CSAT", 
          badge: "Zero-Downtime", 
          desc: "Microservices sync with automated critical alerts", 
          tags: ["Node.js", "Docker", "Zero-Downtime"] 
        },
      ],
    },
    {
      id: "FinTech & Legal",
      label: "FinTech & Legal",
      filterKey: "FinTech",
      color: "#00ffd1",
      lightColor: "#008a75",
      icon: TrendingUp,
      items: [
        { 
          title: "Cryptographic Verification API", 
          metric: "<1.5s Verify", 
          badge: "Security", 
          desc: "Tamper-proof digital notary & signature pipeline", 
          tags: ["FastAPI", "Python", "Security"] 
        },
        { 
          title: "Multi-API Mortgage Engine", 
          metric: "4x Throughput", 
          badge: "FinTech Cloud", 
          desc: "Automated loan calculation & credit check APIs", 
          tags: ["AWS Lambda", "DynamoDB", "Cloud"] 
        },
        { 
          title: "Bilingual MENA Compliance", 
          metric: "250k+ Processed", 
          badge: "Localization", 
          desc: "Arabic & English real-time certificate auth", 
          tags: ["React", "PostgreSQL", "Localization"] 
        },
      ],
    },
    {
      id: "Industrial Tech",
      label: "Industrial Tech",
      filterKey: "Industrial",
      color: "#00ffd1",
      lightColor: "#008a75",
      icon: Cpu,
      items: [
        { 
          title: "2-Year Dedicated Engineering", 
          metric: "2-Year Retained", 
          badge: "Dedicated", 
          desc: "Daily agile standups, CI/CD releases & architecture", 
          tags: ["MEAN Stack", "Angular", "Dedicated"] 
        },
        { 
          title: "CAD Catalog Search Engine", 
          metric: "3x Faster Search", 
          badge: "Performance", 
          desc: "Filtering thousands of precision mechanical parts", 
          tags: ["MongoDB", "Express", "Performance"] 
        },
        { 
          title: "Zero-Downtime Microservices", 
          metric: "0 Outages", 
          badge: "Reliability", 
          desc: "Seamless legacy database migration & live sync", 
          tags: ["Node.js", "Docker", "Reliability"] 
        },
      ],
    },
  ];

  const domains = useMemo(() => {
    // Collect all primary domains
    const baseCats = [
      { label: "All Projects", value: "All" },
      { label: "HealthTech & Care", value: "HealthTech" },
      { label: "Industrial & Supply Chain", value: "Industrial" },
      { label: "FinTech & Legal", value: "FinTech" },
      { label: "Creative Media", value: "Creative" },
      { label: "Civic & WebTech", value: "Civic" },
    ];

    return baseCats.map((cat) => {
      if (cat.value === "All") {
        return { ...cat, count: portfolioList.length };
      }
      const count = portfolioList.filter((item) =>
        item.domain.toLowerCase().includes(cat.value.toLowerCase())
      ).length;
      return { ...cat, count };
    });
  }, [portfolioList]);

  const filteredCaseStudies = useMemo(() => {
    return portfolioList.filter((cs) => {
      const matchesDomain =
        selectedDomain === "All" ||
        cs.domain.toLowerCase().includes(selectedDomain.toLowerCase());
      
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesDomain;

      const matchesSearch =
        cs.client.toLowerCase().includes(query) ||
        cs.domain.toLowerCase().includes(query) ||
        cs.headline.toLowerCase().includes(query) ||
        cs.summary.toLowerCase().includes(query) ||
        cs.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesDomain && matchesSearch;
    });
  }, [portfolioList, selectedDomain, searchQuery]);

  const setCardTab = (cardId: string, tab: "impact" | "solution" | "stack" | "testimonial") => {
    setActiveTabs((prev) => ({ ...prev, [cardId]: tab }));
  };

  const getCardTab = (cardId: string): "impact" | "solution" | "stack" | "testimonial" => {
    return activeTabs[cardId] || "impact";
  };

  return (
    <div
      className="portfolio-main-wrapper"
      style={{
        position: "relative",
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
        minHeight: "100vh",
      }}
    >
      {/* ===================================================================== */}
      {/* 1. CINEMATIC HERO SECTION: PROVEN SOFTWARE ARCHITECTURES              */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "7rem 1.5rem 4rem 1.5rem",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* Bespoke Creative Exhibition Runway Backdrop (0% GPU/CPU) */}
        <PortfolioCreativeBackdrop isLightMode={isLight} />

        <div className="container-custom" style={{ position: "relative", zIndex: 2, maxWidth: "1240px", margin: "0 auto" }}>
          {/* Main Headline */}
          <div style={{ textAlign: "center", maxWidth: "980px", margin: "0 auto" }}>
            {/* Main Headline with Oui Will Kinetic Typographic Animation */}
            <OuiWillHeadline
              style={{
                fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', serif",
                fontSize: "clamp(1.85rem, 4.5vw, 60px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                marginBottom: "1.5rem",
                display: "block",
              }}
            >
              <OuiWillWord index={1}>Proven</OuiWillWord>
              <OuiWillWord index={2}>Software</OuiWillWord>
              <OuiWillWord index={3}>Architectures</OuiWillWord>
              <OuiWillDot />
              <OuiWillWord index={4} isGradient>
                Delivered At Scale
              </OuiWillWord>
            </OuiWillHeadline>

            <p
              className="portfolio-hero-subtitle"
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                lineHeight: 1.65,
                maxWidth: "840px",
                margin: "0 auto 2.5rem auto",
              }}
            >
              Explore how Opash Software partners with international tech founders, healthcare innovators, and enterprise CTOs to modernize legacy architectures, launch resilient microservices, and scale mission-critical cloud portals.
            </p>

            {/* Quick CTAs with Kinetic Rolling Text on Hover */}
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "3.5rem" }}>
              <a
                href="#case-studies-grid"
                className="opash-roll-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.85rem 1.85rem",
                  borderRadius: "12px",
                  background: isLight
                    ? "linear-gradient(135deg, #008a75 0%, #00a88f 100%)"
                    : "linear-gradient(135deg, #00a88f 0%, #2dd4bf 100%)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  boxShadow: "0 4px 20px rgba(0, 168, 143, 0.3)",
                  textDecoration: "none",
                }}
              >
                <span className="opash-roll-track">
                  {/* Primary Content (slides up out of view and fades on hover) */}
                  <span className="opash-roll-item">
                    <FolderOpen size={16} />
                    <span>Explore Featured Case Studies</span>
                    <ArrowRight size={16} />
                  </span>

                  {/* Clone Content (slides up from bottom into center on hover) */}
                  <span className="opash-roll-item" aria-hidden="true">
                    <FolderOpen size={16} />
                    <span>Explore Featured Case Studies</span>
                    <ArrowRight size={16} />
                  </span>
                </span>
              </a>

              <Link
                href="/get-a-quote"
                className="opash-roll-btn portfolio-scope-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.85rem 1.65rem",
                  borderRadius: "12px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                }}
              >
                <span className="opash-roll-track">
                  {/* Primary Content (slides up out of view and fades on hover) */}
                  <span className="opash-roll-item">
                    <span>Scope Your Project</span>
                  </span>

                  {/* Clone Content (slides up from bottom into center on hover) */}
                  <span className="opash-roll-item" aria-hidden="true">
                    <span>Scope Your Project</span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Option 1: Animated "Scroll to Explore" Indicator */}
        <a
          href="#schematics-vault"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById("schematics-vault");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="hero-scroll-indicator"
          style={{
            position: "absolute",
            bottom: "clamp(3.25rem, 6vh, 4.25rem)",
            left: "50%",
            transform: "translateX(-50%)",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.55rem",
            textDecoration: "none",
            zIndex: 3,
            cursor: "pointer",
            transition: "transform 0.25s ease, opacity 0.25s ease",
          }}
        >
          {/* Minimalist mouse pill with animated green glowing dot */}
          <div
            style={{
              width: "22px",
              height: "36px",
              borderRadius: "9999px",
              border: `1.5px solid ${isLight ? "rgba(0, 138, 117, 0.45)" : "rgba(0, 255, 209, 0.45)"}`,
              background: isLight ? "rgba(255, 255, 255, 0.65)" : "rgba(10, 20, 36, 0.65)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              display: "flex",
              justifyContent: "center",
              paddingTop: "6px",
              boxShadow: isLight
                ? "0 4px 14px rgba(0, 168, 143, 0.15)"
                : "0 4px 18px rgba(0, 255, 209, 0.2)",
            }}
          >
            <span
              className="hero-scroll-dot"
              style={{
                width: "4px",
                height: "7px",
                borderRadius: "9999px",
                background: isLight ? "#008a75" : "#00ffd1",
                boxShadow: isLight ? "0 0 8px #008a75" : "0 0 10px #00ffd1",
              }}
            />
          </div>

          {/* Subtle helper text with animated bouncing arrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: isLight ? "#008a75" : "#2dd4bf",
              whiteSpace: "nowrap",
            }}
          >
            <span>Scroll to explore blueprints</span>
            <span className="hero-scroll-arrow">↓</span>
          </div>
        </a>
      </section>

      {/* ===================================================================== */}
      {/* 2. INTERACTIVE PRODUCTION BLUEPRINTS VAULT (The 3D Folders System)    */}
      {/* ===================================================================== */}
      <section
        id="schematics-vault"
        style={{
          padding: "clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)",
          position: "relative",
          background: isLight ? "#f8fafc" : "rgba(6, 12, 24, 0.65)",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
          borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            ref={schematicsRef}
            className="domain-section-grid"
            style={{
              marginBottom: "4.5rem",
              alignItems: "center",
            }}
          >
            {/* LEFT COLUMN: Eyebrow, Animated Heading & 2-line Description vertically centered */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transform: schematicsInView ? "translate3d(0, 0, 0)" : "translate3d(-40px, 0, 0)",
                opacity: schematicsInView ? 1 : 0,
                transition: "transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.85s ease",
              }}
            >
              {/* Animated Heading with Mask Reveal & Gradient Flow */}
              <h2
                className="heading-section"
                style={{
                  marginBottom: "1.25rem",
                }}
              >
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span
                    className="domain-heading-gradient"
                    style={{
                      display: "inline-block",
                      transform: schematicsInView ? "translate3d(0, 0, 0)" : "translate3d(0, 110%, 0)",
                      opacity: schematicsInView ? 1 : 0,
                      transition: "transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.85s ease",
                    }}
                  >
                    Interactive Domain
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span
                    className="domain-heading-gradient"
                    style={{
                      display: "inline-block",
                      transform: schematicsInView ? "translate3d(0, 0, 0)" : "translate3d(0, 110%, 0)",
                      opacity: schematicsInView ? 1 : 0,
                      transition: "transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.12s, opacity 0.85s ease 0.12s",
                    }}
                  >
                    Deliverable Schematics
                  </span>
                </span>
              </h2>

              <p
                style={{
                  color: isLight ? "#334155" : "#94a3b8",
                  fontSize: "1.08rem",
                  lineHeight: 1.7,
                  maxWidth: "480px",
                  margin: 0,
                }}
              >
                Click open each domain vault below to inspect verified architectural deliverables, performance telemetry, and engineering stack details.
              </p>
            </div>

            {/* RIGHT COLUMN: Horizontal expanding accordion cards */}
            <div
              className="domain-accordion-wrapper"
              style={{
                transform: schematicsInView ? "translate3d(0, 0, 0)" : "translate3d(40px, 0, 0)",
                opacity: schematicsInView ? 1 : 0,
                transition: "transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.12s, opacity 0.85s ease 0.12s",
              }}
            >
              {domainFolders.map((df) => {
                const isExpanded = activeDomainFolder === df.id;
                const IconComp = df.icon || FolderOpen;
                const activeColor = isLight ? (df.lightColor || df.color) : df.color;

                return (
                  <div
                    key={df.id}
                    className={`domain-accordion-card ${isExpanded ? "is-expanded" : ""}`}
                    onMouseEnter={() => setActiveDomainFolder(df.id)}
                    onClick={() => setActiveDomainFolder(df.id)}
                    style={{
                      background: isExpanded
                        ? isLight
                          ? "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)"
                          : `linear-gradient(180deg, ${df.color}16 0%, rgba(10, 18, 30, 0.95) 100%)`
                        : isLight
                        ? "#ffffff"
                        : "rgba(10, 18, 30, 0.65)",
                      border: isExpanded
                        ? `1px solid ${activeColor}66`
                        : isLight
                        ? "1px solid #cbd5e1"
                        : "1px solid rgba(255, 255, 255, 0.08)",
                      boxShadow: isExpanded
                        ? isLight
                          ? `0 20px 40px -10px rgba(0, 0, 0, 0.08), 0 0 25px -5px ${activeColor}30`
                          : `0 20px 45px -10px rgba(0, 0, 0, 0.6), 0 0 30px -5px ${activeColor}35`
                        : isLight
                        ? "0 4px 16px rgba(0, 0, 0, 0.04)"
                        : "none",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    {!isExpanded ? (
                      /* Collapsed State: Narrow vertical strip with icon and centered vertical title (no bottom number) */
                      <div className="domain-collapsed-strip">
                        <div
                          style={{
                            width: "38px",
                            height: "38px",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: `${activeColor}18`,
                            border: `1px solid ${activeColor}44`,
                            color: activeColor,
                          }}
                        >
                          <IconComp size={18} />
                        </div>

                        <div
                          className="domain-vertical-text"
                          style={{
                            color: isLight ? "#0f172a" : "#cbd5e1",
                            fontWeight: 700,
                          }}
                        >
                          {df.label}
                        </div>
                      </div>
                    ) : (
                      /* Expanded State: Full schematic details with enhanced light/dark theme contrast */
                      <div className="domain-expanded-content">
                        {/* Domain Card Header */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingBottom: "1.1rem",
                            borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                            marginBottom: "1rem",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                            <div
                              style={{
                                width: "42px",
                                height: "42px",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: `${activeColor}22`,
                                border: `1px solid ${activeColor}66`,
                                color: activeColor,
                                boxShadow: `0 0 15px ${activeColor}33`,
                              }}
                            >
                              <IconComp size={20} />
                            </div>
                            <div>
                              <h3
                                style={{
                                  fontSize: "1.25rem",
                                  fontWeight: 800,
                                  color: isLight ? "#0f172a" : "#ffffff",
                                  margin: 0,
                                  lineHeight: 1.2,
                                }}
                              >
                                {df.label}
                              </h3>
                              <span style={{ fontSize: "0.75rem", color: isLight ? "#475569" : "#94a3b8", fontWeight: 500 }}>
                                Verified Production Deliverables
                              </span>
                            </div>
                          </div>

                          <div
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.4rem",
                              padding: "0.32rem 0.75rem",
                              borderRadius: "9999px",
                              background: `${activeColor}18`,
                              border: `1px solid ${activeColor}44`,
                              fontSize: "0.74rem",
                              fontWeight: 700,
                              color: activeColor,
                            }}
                          >
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: activeColor }} />
                            3 Schematics
                          </div>
                        </div>

                        {/* 3 Deliverable Items */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1, justifyContent: "center" }}>
                          {df.items.map((item, idx) => (
                            <div
                              key={idx}
                              style={{
                                padding: "0.85rem 1.05rem",
                                borderRadius: "0.85rem",
                                background: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.03)",
                                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
                                boxShadow: isLight ? "0 2px 8px rgba(0, 0, 0, 0.03)" : "none",
                                transition: "background 0.2s ease, border-color 0.2s ease",
                              }}
                            >
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.35rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                  <Zap size={14} style={{ color: activeColor, flexShrink: 0 }} />
                                  <span style={{ fontSize: "0.88rem", fontWeight: 700, color: isLight ? "#0f172a" : "#f1f5f9" }}>
                                    {item.title}
                                  </span>
                                </div>
                                <span
                                  style={{
                                    fontSize: "0.72rem",
                                    fontWeight: 700,
                                    padding: "0.18rem 0.55rem",
                                    borderRadius: "9999px",
                                    background: `${activeColor}18`,
                                    color: activeColor,
                                    border: `1px solid ${activeColor}44`,
                                    whiteSpace: "nowrap",
                                    flexShrink: 0,
                                  }}
                                >
                                  {item.metric}
                                </span>
                              </div>

                              <p style={{ fontSize: "0.76rem", color: isLight ? "#334155" : "#94a3b8", margin: "0 0 0.45rem 0", lineHeight: 1.45 }}>
                                {item.desc}
                              </p>

                              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                                {item.tags.map((t, ti) => (
                                  <span
                                    key={ti}
                                    style={{
                                      fontSize: "0.68rem",
                                      fontWeight: 600,
                                      padding: "0.15rem 0.45rem",
                                      borderRadius: "0.35rem",
                                      background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.06)",
                                      border: isLight ? "1px solid #cbd5e1" : "none",
                                      color: isLight ? "#0f172a" : "#cbd5e1",
                                    }}
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Footer inspect CTA */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingTop: "0.85rem",
                            marginTop: "0.75rem",
                            borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
                          }}
                        >
                          <span style={{ fontSize: "0.75rem", color: isLight ? "#475569" : "#64748b", fontWeight: 500 }}>
                            •• 3 Production Deliverables
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedDomain(df.filterKey || "All");
                              const el = document.getElementById("case-studies-grid");
                              if (el) el.scrollIntoView({ behavior: "smooth" });
                            }}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.35rem",
                              background: "transparent",
                              border: "none",
                              color: activeColor,
                              fontSize: "0.82rem",
                              fontWeight: 700,
                              cursor: "pointer",
                              padding: "0.25rem 0.5rem",
                              borderRadius: "0.5rem",
                              transition: "gap 0.2s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.gap = "0.55rem")}
                            onMouseLeave={(e) => (e.currentTarget.style.gap = "0.35rem")}
                          >
                            Inspect Vault Blueprints
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================================================================= */}
          {/* TELEMETRY METRICS STRIP (4 Verified Production Numbers Counter)    */}
          {/* ================================================================= */}
          <div
            ref={statsRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "1.25rem",
              paddingTop: "2rem",
            }}
          >
            {/* 1. Platforms Shipped */}
            <div
              style={{
                padding: "1.75rem 1.35rem",
                borderRadius: "18px",
                background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.82)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(45, 212, 191, 0.22)",
                boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                transform: statsInView ? "translate3d(0, 0, 0)" : "translate3d(0, 32px, 0)",
                opacity: statsInView ? 1 : 0,
                transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.05s, opacity 0.65s ease 0.05s",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #00ffd1, #00a88f)" }} />
              <div style={{ fontSize: "2.65rem", fontWeight: 800, color: isLight ? "#008a75" : "#2dd4bf", lineHeight: 1.15, marginBottom: "0.4rem", letterSpacing: "-0.02em" }}>
                <RollingNumberTicker text="75+" start={statsInView} />
              </div>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, color: isLight ? "#1e293b" : "#f8fafc", marginBottom: "0.2rem" }}>
                Production Platforms Shipped
              </div>
              <div style={{ fontSize: "0.74rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                100% On-Time Enterprise Cadence
              </div>
            </div>

            {/* 2. Production Uptime */}
            <div
              style={{
                padding: "1.75rem 1.35rem",
                borderRadius: "18px",
                background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.82)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(45, 212, 191, 0.22)",
                boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                transform: statsInView ? "translate3d(0, 0, 0)" : "translate3d(0, 32px, 0)",
                opacity: statsInView ? 1 : 0,
                transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, opacity 0.65s ease 0.15s",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #00ffd1, #00a88f)" }} />
              <div style={{ fontSize: "2.65rem", fontWeight: 800, color: isLight ? "#008a75" : "#2dd4bf", lineHeight: 1.15, marginBottom: "0.4rem", letterSpacing: "-0.02em" }}>
                <RollingNumberTicker text="99.99%" start={statsInView} />
              </div>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, color: isLight ? "#1e293b" : "#f8fafc", marginBottom: "0.2rem" }}>
                Verified Production Uptime
              </div>
              <div style={{ fontSize: "0.74rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                Zero Mission-Critical Outages
              </div>
            </div>

            {/* 3. Client Valuations Powered */}
            <div
              style={{
                padding: "1.75rem 1.35rem",
                borderRadius: "18px",
                background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.82)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(45, 212, 191, 0.22)",
                boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                transform: statsInView ? "translate3d(0, 0, 0)" : "translate3d(0, 32px, 0)",
                opacity: statsInView ? 1 : 0,
                transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.25s, opacity 0.65s ease 0.25s",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #00ffd1, #00a88f)" }} />
              <div style={{ fontSize: "2.65rem", fontWeight: 800, color: isLight ? "#008a75" : "#2dd4bf", lineHeight: 1.15, marginBottom: "0.4rem", letterSpacing: "-0.02em" }}>
                <RollingNumberTicker text="$40M+" start={statsInView} />
              </div>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, color: isLight ? "#1e293b" : "#f8fafc", marginBottom: "0.2rem" }}>
                Client Valuations Powered
              </div>
              <div style={{ fontSize: "0.74rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                Scalable Multi-Tenant Architecture
              </div>
            </div>

            {/* 4. Long-Term Retention Rate */}
            <div
              style={{
                padding: "1.75rem 1.35rem",
                borderRadius: "18px",
                background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.82)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(45, 212, 191, 0.22)",
                boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                transform: statsInView ? "translate3d(0, 0, 0)" : "translate3d(0, 32px, 0)",
                opacity: statsInView ? 1 : 0,
                transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.35s, opacity 0.65s ease 0.35s",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #00ffd1, #00a88f)" }} />
              <div style={{ fontSize: "2.65rem", fontWeight: 800, color: isLight ? "#008a75" : "#2dd4bf", lineHeight: 1.15, marginBottom: "0.4rem", letterSpacing: "-0.02em" }}>
                <RollingNumberTicker text="96%" start={statsInView} />
              </div>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, color: isLight ? "#1e293b" : "#f8fafc", marginBottom: "0.2rem" }}>
                Long-Term Retention Rate
              </div>
              <div style={{ fontSize: "0.74rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                Dedicated Multi-Year Engagements
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. CASE STUDIES GRID WITH DOMAIN FILTERS & SEARCH                     */}
      {/* ===================================================================== */}
      <section id="case-studies-grid" style={{ padding: "clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)", position: "relative" }}>
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          {/* Header & Controls */}
          <div
            ref={caseStudiesRef}
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "0 auto 2.5rem auto",
            }}
          >
            {/* Animated Title with stylish Mask Reveal & Gradient Flow */}
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.9rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              <span style={{ display: "block", overflow: "hidden" }}>
                <span
                  className="case-studies-heading-gradient"
                  style={{
                    display: "inline-block",
                    transform: caseStudiesInView ? "translate3d(0, 0, 0)" : "translate3d(0, 110%, 0)",
                    opacity: caseStudiesInView ? 1 : 0,
                    transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s ease",
                  }}
                >
                  Detailed Client Architectures & Impact
                </span>
              </span>
            </h2>
            <p
              style={{
                color: isLight ? "#64748b" : "#94a3b8",
                fontSize: "1.05rem",
                marginTop: "0.85rem",
                transform: caseStudiesInView ? "translate3d(0, 0, 0)" : "translate3d(0, 24px, 0)",
                opacity: caseStudiesInView ? 1 : 0,
                transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.12s, opacity 0.9s ease 0.12s",
              }}
            >
              Filter by industry domain to inspect our verified production track record.
            </p>
          </div>

          {/* Domain Filter Bar in Single Clean Line */}
          <div
            style={{
              maxWidth: "1150px",
              margin: "0 auto 3.5rem auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="case-studies-filter-scroll"
              style={{
                display: "inline-flex",
                gap: "0.6rem",
                flexWrap: "nowrap",
                overflowX: "auto",
                padding: "0.35rem 0.5rem",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {domains.map((dom) => {
                const isSelected = selectedDomain === dom.value;
                return (
                  <button
                    key={dom.value}
                    onClick={() => setSelectedDomain(dom.value)}
                    style={{
                      padding: "0.55rem 1.15rem",
                      borderRadius: "9999px",
                      background: isSelected
                        ? isLight ? "#008a75" : "#2dd4bf"
                        : isLight ? "#ffffff" : "rgba(15, 23, 42, 0.6)",
                      color: isSelected
                        ? isLight ? "#ffffff" : "#020712"
                        : isLight ? "#475569" : "#94a3b8",
                      border: isSelected
                        ? "none"
                        : isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.08)",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      transition: "all 0.2s ease",
                      boxShadow: isSelected
                        ? isLight ? "0 4px 15px rgba(0, 168, 143, 0.25)" : "0 4px 15px rgba(45, 212, 191, 0.25)"
                        : "none",
                    }}
                  >
                    <span>{dom.label}</span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        padding: "0.1rem 0.45rem",
                        borderRadius: "9999px",
                        background: isSelected
                          ? isLight ? "rgba(255, 255, 255, 0.25)" : "rgba(2, 7, 18, 0.2)"
                          : isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.08)",
                        fontWeight: 700,
                      }}
                    >
                      {dom.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Case Studies Stacking Cards Deck */}
          <div
            className="case-study-stack-container"
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              paddingBottom: "3rem",
            }}
          >
            {filteredCaseStudies.map((cs, idx) => {
              const currentTab = getCardTab(cs.id);
              const stackTop = 88 + Math.min(idx, 6) * 14;

              return (
                <div
                  key={cs.id}
                  className="case-study-stack-card"
                  style={{
                    position: "sticky",
                    top: `${stackTop}px`,
                    zIndex: 10 + idx,
                    marginBottom: "3.5rem",
                    borderRadius: "24px",
                    background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.96)",
                    border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(45, 212, 191, 0.22)",
                    boxShadow: isLight
                      ? "0 -10px 30px -5px rgba(0, 0, 0, 0.06), 0 20px 45px -10px rgba(0, 0, 0, 0.08)"
                      : "0 -14px 40px -5px rgba(0, 0, 0, 0.85), 0 25px 60px -10px rgba(0, 0, 0, 0.7)",
                    padding: "2.5rem",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  {/* Top Header: Client & Domain Badges + Live Link */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "1.5rem",
                      flexWrap: "wrap",
                      marginBottom: "1.5rem",
                      paddingBottom: "1.25rem",
                      borderBottom: isLight ? "1px solid #f1f5f9" : "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                        <span
                          style={{
                            padding: "0.3rem 0.8rem",
                            borderRadius: "9999px",
                            background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 187, 171, 0.15)",
                            color: isLight ? "#008a75" : "#2dd4bf",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                          }}
                        >
                          {cs.domain}
                        </span>
                        <span style={{ fontSize: "1.3rem", fontWeight: 800, color: isLight ? "#0f172a" : "#f8fafc" }}>
                          {cs.client}
                        </span>
                      </div>
                      <h3 style={{ fontSize: "1.5rem", fontWeight: 800, lineHeight: 1.3, maxWidth: "850px" }}>
                        {cs.headline}
                      </h3>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
                      <Link
                        href={`/portfolio/${cs.slug}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          padding: "0.6rem 1.2rem",
                          borderRadius: "10px",
                          background: isLight
                            ? "linear-gradient(135deg, rgba(0, 168, 143, 0.12) 0%, rgba(0, 187, 171, 0.18) 100%)"
                            : "linear-gradient(135deg, rgba(0, 187, 171, 0.18) 0%, rgba(45, 212, 191, 0.22) 100%)",
                          border: `1px solid ${isLight ? "rgba(0, 168, 143, 0.3)" : "rgba(45, 212, 191, 0.35)"}`,
                          color: isLight ? "#008a75" : "#2dd4bf",
                          fontWeight: 700,
                          fontSize: "0.88rem",
                          textDecoration: "none",
                          flexShrink: 0,
                          transition: "all 0.2s ease",
                        }}
                      >
                        <span>Deep-Dive Case Study</span>
                        <ArrowRight size={14} />
                      </Link>

                      <a
                        href={cs.website}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          padding: "0.6rem 1.1rem",
                          borderRadius: "10px",
                          background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.06)",
                          border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.1)",
                          color: isLight ? "#475569" : "#cbd5e1",
                          fontWeight: 600,
                          fontSize: "0.88rem",
                          textDecoration: "none",
                          flexShrink: 0,
                        }}
                      >
                        <span>Live Site</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Optional Featured Image from Admin */}
                  {cs.image && (
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "260px",
                        borderRadius: "16px",
                        overflow: "hidden",
                        marginBottom: "1.75rem",
                        border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                        backgroundColor: isLight ? "#f8fafc" : "#020712",
                      }}
                    >
                      <img
                        src={cs.image.startsWith("/uploads/") ? `${process.env.NEXT_PUBLIC_HRMS_API_URL || 'http://localhost:3001'}${cs.image}` : cs.image}
                        alt={cs.headline}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  )}

                  {/* Quantitative Telemetry Metrics Bar */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                      gap: "1rem",
                      padding: "1.25rem",
                      borderRadius: "16px",
                      background: isLight ? "#f8fafc" : "rgba(15, 23, 42, 0.6)",
                      border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.05)",
                      marginBottom: "1.75rem",
                    }}
                  >
                    {cs.results.map((res, rIdx) => (
                      <div key={rIdx} style={{ textAlign: "center" }}>
                        <div
                          style={{
                            fontSize: "1.8rem",
                            fontWeight: 800,
                            color: isLight ? "#008a75" : "#2dd4bf",
                            lineHeight: 1.1,
                            marginBottom: "0.2rem",
                          }}
                        >
                          {res.metric}
                        </div>
                        <div style={{ fontSize: "0.8rem", fontWeight: 600, color: isLight ? "#64748b" : "#94a3b8" }}>
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Tab Switcher */}
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                      paddingBottom: "0.75rem",
                      marginBottom: "1.5rem",
                      flexWrap: "wrap",
                    }}
                  >
                    {[
                      { key: "impact", label: "Executive Summary" },
                      { key: "solution", label: "Challenge & Architectural Solution" },
                      { key: "stack", label: "Production Tech Stack" },
                      { key: "testimonial", label: "Verified Client Endorsement" },
                    ].map((t) => {
                      const isActive = currentTab === t.key;
                      return (
                        <button
                          key={t.key}
                          onClick={() => setCardTab(cs.id, t.key as any)}
                          style={{
                            padding: "0.45rem 1rem",
                            borderRadius: "8px",
                            background: isActive
                              ? isLight ? "rgba(0, 168, 143, 0.12)" : "rgba(0, 187, 171, 0.15)"
                              : "transparent",
                            color: isActive
                              ? isLight ? "#008a75" : "#2dd4bf"
                              : isLight ? "#64748b" : "#94a3b8",
                            border: "none",
                            fontWeight: 700,
                            fontSize: "0.88rem",
                            cursor: "pointer",
                            transition: "all 0.15s ease",
                          }}
                        >
                          {t.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Tab Panel Content */}
                  <div>
                    {currentTab === "impact" && (
                      <div>
                        <p style={{ color: isLight ? "#334155" : "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
                          {cs.summary}
                        </p>
                      </div>
                    )}

                    {currentTab === "solution" && (
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "1.5rem" }}>
                        <div
                          style={{
                            padding: "1.25rem",
                            borderRadius: "12px",
                            background: isLight ? "rgba(239, 68, 68, 0.05)" : "rgba(239, 68, 68, 0.08)",
                            borderLeft: "4px solid #ef4444",
                          }}
                        >
                          <div style={{ fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", color: "#ef4444", marginBottom: "0.4rem" }}>
                            The Architectural Challenge
                          </div>
                          <p style={{ color: isLight ? "#334155" : "#cbd5e1", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                            {cs.challenge}
                          </p>
                        </div>

                        <div
                          style={{
                            padding: "1.25rem",
                            borderRadius: "12px",
                            background: isLight ? "rgba(0, 168, 143, 0.06)" : "rgba(0, 187, 171, 0.08)",
                            borderLeft: `4px solid ${isLight ? "#008a75" : "#2dd4bf"}`,
                          }}
                        >
                          <div style={{ fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", color: isLight ? "#008a75" : "#2dd4bf", marginBottom: "0.4rem" }}>
                            The Opash Solution
                          </div>
                          <p style={{ color: isLight ? "#334155" : "#cbd5e1", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                            {cs.solution}
                          </p>
                        </div>
                      </div>
                    )}

                    {currentTab === "stack" && (
                      <div>
                        <div style={{ fontSize: "0.88rem", fontWeight: 700, color: isLight ? "#64748b" : "#94a3b8", marginBottom: "0.75rem" }}>
                          Technologies & Cloud Services Used in Production:
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
                          {cs.technologies.map((tech) => (
                            <span
                              key={tech}
                              style={{
                                padding: "0.4rem 0.85rem",
                                borderRadius: "8px",
                                background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.06)",
                                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                                color: isLight ? "#0f172a" : "#f8fafc",
                                fontSize: "0.85rem",
                                fontWeight: 600,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentTab === "testimonial" && (
                      <div
                        style={{
                          padding: "1.5rem",
                          borderRadius: "16px",
                          background: isLight ? "rgba(0, 168, 143, 0.05)" : "rgba(0, 187, 171, 0.06)",
                          border: isLight ? "1px solid rgba(0, 168, 143, 0.15)" : "1px solid rgba(0, 187, 171, 0.2)",
                        }}
                      >
                        <div style={{ display: "flex", gap: "0.25rem", color: "#f59e0b", marginBottom: "0.6rem" }}>
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={15} fill="#f59e0b" />
                          ))}
                        </div>
                        <p style={{ fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.6, color: isLight ? "#1e293b" : "#f1f5f9", marginBottom: "0.75rem" }}>
                          &ldquo;{cs.testimonial.quote}&rdquo;
                        </p>
                        <div style={{ fontWeight: 800, fontSize: "0.95rem", color: isLight ? "#008a75" : "#2dd4bf" }}>
                          {cs.testimonial.author} &bull; <span style={{ fontWeight: 600, color: isLight ? "#64748b" : "#94a3b8" }}>{cs.testimonial.role}, {cs.testimonial.company}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. VERIFIED CLIENT VOICE & EXECUTIVE ENDORSEMENTS                     */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "5rem 0 0.5rem 0",
          position: "relative",
          background: "transparent",
          border: "none",
          overflow: "hidden",
          width: "100%",
        }}
      >
        {/* 3D Iridescent Liquid Glass Ribbon Background (with smooth fade-out to remove hard partition) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 0,
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "-15%",
              width: "130%",
              height: "130%",
              backgroundImage: "url('/images/testimonial-ribbon-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
              opacity: isLight ? 0.22 : 0.45,
              filter: "blur(28px) saturate(135%)",
              transform: "scale(1.06)",
              transition: "opacity 0.4s ease",
            }}
          />
          {/* Ambient Vignette Overlay for maximum contrast and readable glass cards */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: isLight
                ? "radial-gradient(ellipse at 50% 50%, rgba(248, 250, 252, 0.6) 0%, rgba(241, 245, 249, 0.94) 85%)"
                : "radial-gradient(ellipse at 50% 50%, rgba(6, 12, 24, 0.45) 0%, rgba(6, 12, 24, 0.94) 85%)",
            }}
          />
        </div>

        {/* Heading Container */}
        <div style={{ maxWidth: "820px", margin: "0 auto 2.5rem auto", textAlign: "center", position: "relative", zIndex: 1, padding: "0 1.5rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 800, lineHeight: 1.2, margin: "0 0 0.85rem 0" }}>
            <span className="case-studies-heading-gradient">What International Founders Say</span>
          </h2>
          <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.05rem", margin: 0 }}>
            Direct feedback from technical leaders who partnered with Opash Software to build their core products.
          </p>
        </div>

        {/* 100% Full-Width Curved 3D Panoramic Ribbon Carousel (Edge to Edge) */}
        <div style={{ width: "100%", position: "relative", zIndex: 1, overflow: "hidden" }}>
          <CurvedTestimonialsCarousel isLight={isLight} items={caseStudiesData} />
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. READY TO ARCHITECT YOUR SOLUTION (Laptop Workstation CTA)         */}
      {/* ===================================================================== */}
      <section
        style={{
          padding: "0.5rem clamp(1rem, 3vw, 1.5rem) clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)",
          position: "relative",
          overflow: "hidden",
          background: "transparent",
          border: "none",
        }}
      >
        {/* Clean Ambient Radial Glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "850px",
              height: "450px",
              background: isLight
                ? "radial-gradient(circle, rgba(0, 168, 143, 0.08) 0%, rgba(248, 250, 252, 0) 70%)"
                : "radial-gradient(circle, rgba(0, 255, 209, 0.08) 0%, rgba(3, 8, 20, 0) 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        <div className="container-custom" style={{ maxWidth: "1080px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* REALISTIC LAPTOP CHASSIS FRAME */}
          <div
            style={{
              position: "relative",
            }}
          >
            {/* Laptop Screen */}
            <div
              style={{
                borderRadius: "16px 16px 0 0",
                padding: "clamp(10px, 1.5vw, 16px)",
                background: isLight
                  ? "linear-gradient(145deg, #1e293b 0%, #0f172a 100%)"
                  : "linear-gradient(145deg, #1e293b 0%, #050b17 100%)",
                borderTop: isLight
                  ? "2px solid #94a3b8"
                  : "2px solid rgba(255, 255, 255, 0.18)",
                borderLeft: isLight
                  ? "2px solid #94a3b8"
                  : "2px solid rgba(255, 255, 255, 0.18)",
                borderRight: isLight
                  ? "2px solid #94a3b8"
                  : "2px solid rgba(255, 255, 255, 0.18)",
                borderBottom: "none",
                boxShadow: isLight
                  ? "0 0 0 1px rgba(0, 0, 0, 0.12), 0 -10px 40px -15px rgba(0, 0, 0, 0.15)"
                  : "0 0 0 1px rgba(0, 0, 0, 0.6), 0 -10px 40px -15px rgba(0, 0, 0, 0.5), 0 0 45px -10px rgba(0, 255, 209, 0.1)",
              }}
            >
              {/* Laptop Camera Dot */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#1a1a2e",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "inset 0 0 2px rgba(45, 212, 191, 0.4)",
                  }}
                />
              </div>

              {/* LAPTOP INNER DISPLAY SCREEN */}
              <div
                style={{
                  borderRadius: "8px",
                  background: isLight
                    ? "#ffffff"
                    : "linear-gradient(145deg, rgba(10, 18, 34, 0.98) 0%, rgba(4, 9, 20, 0.99) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  padding: "clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 4vw, 3.5rem)",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                {/* Heading */}
                <h2
                  className="heading-section"
                  style={{
                    color: isLight ? "#0f172a" : "#ffffff",
                    margin: "0 auto 1.15rem auto",
                    maxWidth: "760px",
                  }}
                >
                  Transform Your Vision Into{" "}
                  <span className="case-studies-heading-gradient">
                    High-Impact Software
                  </span>
                </h2>

                {/* Description */}
                <p
                  style={{
                    color: isLight ? "#475569" : "#cbd5e1",
                    fontSize: "clamp(0.98rem, 1.2vw, 1.08rem)",
                    lineHeight: 1.65,
                    maxWidth: "680px",
                    margin: "0 auto 2.5rem auto",
                  }}
                >
                  Schedule a 30-minute free technical architecture consultation with our engineering leads. No sales fluff — just pure technical feasibility and rapid roadmap planning.
                </p>

                {/* Buttons */}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <Link
                    href="/get-a-quote"
                    className="opash-roll-btn"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "1rem 2.35rem",
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
                    <span className="opash-roll-track">
                      <span className="opash-roll-item">
                        <span>Start Your Project</span>
                        <ArrowUpRight size={19} />
                      </span>
                      <span className="opash-roll-item" aria-hidden="true">
                        <span>Start Your Project</span>
                        <ArrowUpRight size={19} />
                      </span>
                    </span>
                  </Link>

                  <a
                    href={companyData.contact.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      padding: "1rem 2.15rem",
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
                    <MessageCircle size={19} color="#25D366" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Laptop Base / Keyboard Deck */}
            <div
              style={{
                position: "relative",
                height: "clamp(18px, 2.5vw, 28px)",
                background: isLight
                  ? "linear-gradient(180deg, #334155 0%, #475569 100%)"
                  : "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
                borderRadius: "0 0 10px 10px",
                border: isLight
                  ? "2px solid #94a3b8"
                  : "2px solid rgba(255, 255, 255, 0.18)",
                borderTop: isLight
                  ? "1px solid #64748b"
                  : "1px solid rgba(255, 255, 255, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Trackpad indicator */}
              <div
                style={{
                  width: "clamp(60px, 10vw, 100px)",
                  height: "4px",
                  borderRadius: "9999px",
                  background: isLight ? "rgba(148, 163, 184, 0.6)" : "rgba(255, 255, 255, 0.2)",
                }}
              />
            </div>

            {/* Laptop Stand Shadow */}
            <div
              style={{
                width: "110%",
                height: "8px",
                margin: "0 auto",
                marginLeft: "-5%",
                background: isLight
                  ? "radial-gradient(ellipse, rgba(0, 0, 0, 0.1) 0%, transparent 70%)"
                  : "radial-gradient(ellipse, rgba(0, 0, 0, 0.4) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
