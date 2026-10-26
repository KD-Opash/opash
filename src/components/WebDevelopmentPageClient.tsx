"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Globe2,
  Code2,
  Server,
  Layers,
  Database,
  Cloud,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  RefreshCw,
  Lock,
  Network,
  Activity,
  Award,
  ChevronDown,
  Workflow,
  Search,
  Compass,
  Rocket,
  Shield,
  CreditCard,
  ShoppingBag,
  GraduationCap,
  Building2,
  HeartPulse,
  Plane,
  Factory,
  Settings,
  Send,
  MessageCircle,
  FileCode,
  Sliders,
  ExternalLink,
  Laptop,
  Check,
  Radio,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { ServiceDetail } from "@/data/services";
import { companyData } from "@/data/company";

interface WebDevelopmentPageClientProps {
  service: ServiceDetail;
}

// -----------------------------------------------------------------------------
// 1. DATA: What Web Development Includes (Exact 6 Items from Live Site)
// -----------------------------------------------------------------------------
const INCLUDES_DATA = [
  {
    icon: Laptop,
    title: "Frontend Development",
    desc: "We build intuitive, responsive, and visually appealing interfaces that ensure smooth user experiences across devices and browsers.",
    badge: "UI / UX Focus",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "We create robust, secure, and scalable server logic, database connections, and API layers that power your web application.",
    badge: "Core Logic",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    desc: "Interactive, dynamic platforms like dashboards, CRMs, e-commerce sites, and portals.",
    badge: "End-to-End",
  },
  {
    icon: FileCode,
    title: "CMS Development",
    desc: "Headless CMS (Strapi, Sanity), or custom solutions for easy content management.",
    badge: "Headless & Custom",
  },
  {
    icon: Network,
    title: "Third-party Integrations",
    desc: "APIs, payment gateways, analytics tools, social media, and CRM systems.",
    badge: "Connected Fabric",
  },
  {
    icon: Zap,
    title: "SEO Optimization & Performance Tuning",
    desc: "On-page SEO, loading speed optimization, and accessibility improvements.",
    badge: "Sub-Second Speed",
  },
];

// -----------------------------------------------------------------------------
// 2. DATA: Technologies (Exact from Live Site)
// -----------------------------------------------------------------------------
interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Databases" | "CMS" | "Cloud & DevOps";
}

const ALL_TECHNOLOGIES: TechItem[] = [
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "Next", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  // Backend
  { name: "Node", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "Python", category: "Backend" },
  // Databases
  { name: "PostgreSQL", category: "Databases" },
  { name: "MS SQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  { name: "Firebase", category: "Databases" },
  { name: "Supabase", category: "Databases" },
  // Headless CMS
  { name: "Strapi", category: "CMS" },
  { name: "Sanity", category: "CMS" },
  { name: "Contentful", category: "CMS" },
  // Cloud & DevOps
  { name: "aws", category: "Cloud & DevOps" },
  { name: "googleCloud", category: "Cloud & DevOps" },
  { name: "microsoft-azure", category: "Cloud & DevOps" },
  { name: "Netlify", category: "Cloud & DevOps" },
  { name: "Vercel", category: "Cloud & DevOps" },
  { name: "Docker", category: "Cloud & DevOps" },
  { name: "Git", category: "Cloud & DevOps" },
  { name: "GitLab", category: "Cloud & DevOps" },
];

// -----------------------------------------------------------------------------
// 3. DATA: Web Development Process (Exact from Live Site)
// -----------------------------------------------------------------------------
const PROCESS_STEPS_LIVE = [
  {
    step: "01",
    phase: "Discovery & Planning",
    desc: "We start with a thorough discovery and planning phase to understand your business goals, target users, and content needs.",
    icon: Search,
  },
  {
    step: "02",
    phase: "Sitemap & UI/UX Design",
    desc: "Based on this, we create a sitemap, wireframes, and high-fidelity UI/UX designs that bring clarity to the user journey and functionality.",
    icon: Compass,
  },
  {
    step: "03",
    phase: "Agile Sprint Development",
    desc: "Our developers follow agile development practices to build both frontend and backend features in sprints, allowing for real-time feedback and transparency.",
    icon: Code2,
  },
  {
    step: "04",
    phase: "Comprehensive Testing & QA",
    desc: "We conduct comprehensive testing across devices and browsers before deploying the website on your preferred cloud or hosting platform.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    phase: "Cloud Deployment & Launch",
    desc: "Seamlessly launched on your preferred cloud or hosting platform (Vercel, Netlify, AWS, Azure, Google Cloud).",
    icon: Rocket,
  },
  {
    step: "06",
    phase: "Monitoring & Maintenance",
    desc: "Post-launch, we offer continuous monitoring, maintenance, and performance enhancements to ensure long-term value and growth.",
    icon: RefreshCw,
  },
];

// -----------------------------------------------------------------------------
// 4. DATA: Industries We Specialize In (Exact 10 Industries from Live Site)
// -----------------------------------------------------------------------------
const INDUSTRIES_LIVE = [
  { id: "travel", name: "Travel & Hospitality", icon: Plane },
  { id: "telecom", name: "Telecommunication", icon: Radio },
  { id: "industrial", name: "Industrial Tech", icon: Factory },
  { id: "ngo", name: "NGOs", icon: Globe2 },
  { id: "insuretech", name: "InsureTech", icon: Shield },
  { id: "healthcare", name: "Health Care", icon: HeartPulse },
  { id: "fintech", name: "Fintech", icon: CreditCard },
  { id: "ecommerce", name: "Ecommerce", icon: ShoppingBag },
  { id: "education", name: "Education", icon: GraduationCap },
  { id: "realestate", name: "Real Estate", icon: Building2 },
];

const COUNTRIES_LIST = [
  "United States",
  "India",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "United Arab Emirates",
  "Singapore",
  "Netherlands",
  "Switzerland",
  "France",
  "New Zealand",
  "Saudi Arabia",
  "South Africa",
  "Ireland",
  "Other",
];

export default function WebDevelopmentPageClient({ service }: WebDevelopmentPageClientProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Brand Color Tokens
  const mintColor = isLight ? "#00A88F" : "#5EC098";
  const slateColor = isLight ? "#102033" : "#476D9A";

  // State: Tech Filter Tab
  const [selectedTechCat, setSelectedTechCat] = useState<string>("All");

  // State: Active Industry Selection
  const [activeIndustryIdx, setActiveIndustryIdx] = useState<number>(7); // Ecommerce default

  // State: Quote Form
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Full Time",
    country: "United States",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formLoading, setFormLoading] = useState<boolean>(false);

  // Filtered Techs
  const displayedTechs = useMemo(() => {
    if (selectedTechCat === "All") return ALL_TECHNOLOGIES;
    return ALL_TECHNOLOGIES.filter((t) => t.category === selectedTechCat);
  }, [selectedTechCat]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 700);
  };

  return (
    <div
      className="web-development-page-wrapper"
      style={{
        position: "relative",
        overflowX: "clip",
        backgroundColor: isLight ? "#f8fafc" : "#020712",
        color: isLight ? "#0f172a" : "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* ===================================================================== */}
      {/* 1. HERO SECTION: SAME TO SAME DATA, UNIQUE MODERN DESIGN              */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "7.5rem 1.5rem 5rem 1.5rem",
          overflow: "hidden",
        }}
      >
        {/* Ambient Radial Spotlight */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            background: isLight
              ? `
                radial-gradient(circle 600px at 50% 15%, rgba(0, 168, 143, 0.12) 0%, transparent 70%),
                radial-gradient(circle 450px at 85% 35%, rgba(71, 109, 154, 0.08) 0%, transparent 65%),
                linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%)
              `
              : `
                radial-gradient(circle 600px at 50% 15%, rgba(94, 192, 152, 0.18) 0%, transparent 70%),
                radial-gradient(circle 450px at 85% 35%, rgba(71, 109, 154, 0.15) 0%, transparent 65%),
                linear-gradient(to bottom, #020712 0%, #060c18 100%)
              `,
          }}
        />

        <div className="container-custom" style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
          {/* Eyebrow Pill */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: mintColor,
              }}
            >
              <Sparkles size={16} />
              <span>Opash Software · End-to-End Web Solutions</span>
            </div>
          </div>

          {/* Heading (Exact from Live Site) */}
          <div style={{ textAlign: "center", maxWidth: "1000px", margin: "0 auto" }}>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "1.75rem",
              }}
            >
              Web <span style={{ color: mintColor }}>Development</span>
            </h1>

            {/* Exact Lead Text Paragraph 1 from Live Page */}
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                color: isLight ? "#334155" : "#e2e8f0",
                lineHeight: 1.65,
                maxWidth: "880px",
                margin: "0 auto 1.5rem auto",
                fontWeight: 500,
              }}
            >
              We offer end-to-end web development services that turn your ideas into high-performing, secure, and scalable web solutions.
              Whether you’re launching a marketing website, a custom business portal, or a full-fledged web application, our team focuses
              on building intuitive, visually compelling, and highly functional websites tailored to your business goals.
            </p>

            {/* Exact Text Paragraph 2 from Live Page */}
            <div
              style={{
                maxWidth: "840px",
                margin: "0 auto 2.5rem auto",
                padding: "1.25rem 1.5rem",
                borderRadius: "16px",
                background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.65)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: isLight ? "0 4px 14px rgba(0,0,0,0.03)" : "none",
              }}
            >
              <p
                style={{
                  fontSize: "0.98rem",
                  color: isLight ? "#64748b" : "#94a3b8",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                From startups to large enterprises, we craft digital experiences that are fast, mobile-responsive, and SEO-optimized.
                With an agile and client-centric approach, we ensure seamless integration of the front-end and back-end, resulting in
                efficient workflows and superior user experiences. Our websites are not only beautiful but also built for performance,
                accessibility, and long-term maintainability.
              </p>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                marginBottom: "3.5rem",
              }}
            >
              <a
                href="#quote-section"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.95rem 2rem",
                  borderRadius: "12px",
                  background: `linear-gradient(135deg, ${mintColor} 0%, #0284c7 100%)`,
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "1rem",
                  boxShadow: `0 8px 24px -4px ${isLight ? "rgba(0, 168, 143, 0.4)" : "rgba(94, 192, 152, 0.4)"}`,
                  textDecoration: "none",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <span>Get Your Free Quote Today</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="#what-includes"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.95rem 1.85rem",
                  borderRadius: "12px",
                  background: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                  color: isLight ? "#0f172a" : "#f8fafc",
                  border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.12)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                }}
              >
                <Code2 size={17} style={{ color: mintColor }} />
                <span>Our Services</span>
              </a>

              <a
                href="#process"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.95rem 1.85rem",
                  borderRadius: "12px",
                  background: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                  color: isLight ? "#0f172a" : "#f8fafc",
                  border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.12)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                }}
              >
                <Workflow size={17} style={{ color: mintColor }} />
                <span>Web Process</span>
              </a>
            </div>

            {/* Metrics Strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.25rem",
                maxWidth: "1080px",
                margin: "0 auto",
              }}
            >
              {[
                { value: "8+ Years", label: "Industry Expertise" },
                { value: "100%", label: "Mobile-Responsive" },
                { value: "<1.2s", label: "Average Page Load Time" },
                { value: "SEO", label: "Optimized From Day 1" },
              ].map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "1.25rem 1rem",
                    borderRadius: "14px",
                    background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.65)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isLight ? "0 4px 12px rgba(0, 0, 0, 0.04)" : "none",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: mintColor,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                      marginBottom: "0.35rem",
                    }}
                  >
                    {m.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: isLight ? "#64748b" : "#94a3b8",
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. BENEFITS OF INVESTING IN WEB DEVELOPMENT (EXACT LIVE SITE DATA)    */}
      {/* ===================================================================== */}
      <section
        id="benefits"
        style={{
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#ffffff" : "rgba(4, 10, 22, 0.9)",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3.5rem auto" }}>
            <span
              style={{
                display: "inline-block",
                color: mintColor,
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Strategic Value
            </span>

            {/* Exact Heading from live page */}
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}
            >
              Benefits of Investing in Web Development
            </h2>

            {/* Exact Paragraph 1 from live page */}
            <p
              style={{
                color: isLight ? "#334155" : "#e2e8f0",
                fontSize: "1.08rem",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
                fontWeight: 500,
              }}
            >
              Your website is often the first impression customers have of your business—it’s your digital storefront.
              A well-designed and developed website builds trust, drives engagement, and converts visitors into loyal customers.
              In today’s digital-first world, having a responsive, fast, and secure website is crucial for visibility, credibility, and business growth.
            </p>

            {/* Exact Paragraph 2 from live page */}
            <p
              style={{
                color: isLight ? "#64748b" : "#94a3b8",
                fontSize: "1.02rem",
                lineHeight: 1.7,
              }}
            >
              Custom web development gives you flexibility and control that templates can’t match. It allows seamless integration
              with CRMs, ERPs, APIs, payment gateways, and more. Plus, modern web technologies provide opportunities for automation,
              analytics, personalization, and continuous optimization.
            </p>
          </div>

          {/* 4 Modern Benefit Feature Highlights */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                icon: Globe2,
                title: "Your Digital Storefront",
                tagline: "Builds Trust & Credibility",
                desc: "First impressions matter. A fast, accessible website converts one-time visitors into high-value repeat customers.",
              },
              {
                icon: Settings,
                title: "Flexibility & Control",
                tagline: "Beyond Cookie-Cutter Templates",
                desc: "Custom web development gives you total ownership over features, performance, and UI styling without template limits.",
              },
              {
                icon: Network,
                title: "Seamless System Integrations",
                tagline: "Connected Workflows",
                desc: "Integrate smoothly with CRMs, ERPs, custom APIs, third-party services, and secure payment switches.",
              },
              {
                icon: Zap,
                title: "Continuous Optimization",
                tagline: "Analytics & Automation",
                desc: "Harness modern web analytics, automated conversion funnels, and real-time user personalization for measurable ROI.",
              },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    padding: "2rem 1.75rem",
                    borderRadius: "18px",
                    background: isLight ? "#f8fafc" : "rgba(10, 20, 36, 0.7)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "14px",
                        background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.15)",
                        border: isLight ? "1px solid rgba(0, 168, 143, 0.25)" : "1px solid rgba(94, 192, 152, 0.35)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: mintColor,
                        marginBottom: "1.25rem",
                      }}
                    >
                      <IconComp size={24} />
                    </div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: mintColor, marginBottom: "0.35rem" }}>
                      {item.tagline}
                    </div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                      {item.title}
                    </h3>
                    <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.92rem", lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. OUR WEB DEVELOPMENT SERVICE INCLUDES (EXACT 6 ITEMS FROM LIVE SITE) */}
      {/* ===================================================================== */}
      <section
        id="what-includes"
        style={{
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f8fafc" : "#020712",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 3.5rem auto" }}>
            <span
              style={{
                display: "inline-block",
                color: mintColor,
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Core Offerings
            </span>

            {/* Exact Heading from live page */}
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Our Web Development Service Includes
            </h2>

            {/* Exact Conclusion / Subhead from live page */}
            <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.05rem", lineHeight: 1.6 }}>
              We align each deliverable with your business objectives to make your website a strategic growth asset—not just an online presence.
            </p>
          </div>

          {/* 6 Exact Items from Live Site */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {INCLUDES_DATA.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    padding: "2.25rem 2rem",
                    borderRadius: "18px",
                    background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.65)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isLight ? "0 4px 16px rgba(0,0,0,0.03)" : "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: "12px",
                          background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.15)",
                          border: isLight ? "1px solid rgba(0, 168, 143, 0.25)" : "1px solid rgba(94, 192, 152, 0.35)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: mintColor,
                        }}
                      >
                        <IconComp size={24} />
                      </div>

                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          padding: "0.25rem 0.65rem",
                          borderRadius: "6px",
                          background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.05)",
                          color: mintColor,
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.28rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                      {item.title}
                    </h3>

                    <p style={{ color: isLight ? "#475569" : "#cbd5e1", fontSize: "0.98rem", lineHeight: 1.65, fontWeight: 500 }}>
                      {item.desc}
                    </p>
                  </div>

                  <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: isLight ? "1px solid #f1f5f9" : "1px solid rgba(255, 255, 255, 0.06)" }}>
                    <span style={{ fontSize: "0.82rem", fontWeight: 700, color: mintColor, display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                      <span>Production Ready</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. TECHNOLOGIES (EXACT TECHNOLOGIES FROM LIVE SITE)                   */}
      {/* ===================================================================== */}
      <section
        id="technologies"
        style={{
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#ffffff" : "rgba(4, 10, 22, 0.95)",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem auto" }}>
            <span
              style={{
                display: "inline-block",
                color: mintColor,
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Technology Arsenal
            </span>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Technologies We Deploy
            </h2>

            <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.05rem", lineHeight: 1.6 }}>
              The exact technologies powering our web engineering projects—optimized for responsiveness, SEO, and lightning speed.
            </p>

            {/* Category Filter Tabs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.5rem",
                marginTop: "2rem",
              }}
            >
              {["All", "Frontend", "Backend", "Databases", "CMS", "Cloud & DevOps"].map((cat) => {
                const isActive = selectedTechCat === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedTechCat(cat)}
                    style={{
                      padding: "0.55rem 1.15rem",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontSize: "0.88rem",
                      fontWeight: isActive ? 700 : 500,
                      background: isActive
                        ? mintColor
                        : isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.05)",
                      color: isActive ? "#ffffff" : isLight ? "#475569" : "#94a3b8",
                      border: isActive
                        ? `1px solid ${mintColor}`
                        : isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Tech Badge Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "1rem",
            }}
          >
            {displayedTechs.map((tech, idx) => (
              <div
                key={idx}
                style={{
                  padding: "1.25rem 1rem",
                  borderRadius: "14px",
                  background: isLight ? "#f8fafc" : "rgba(10, 20, 36, 0.7)",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  textAlign: "center",
                  transition: "transform 0.2s ease, border-color 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                  {tech.name}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: mintColor,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. WEB DEVELOPMENT PROCESS (EXACT FROM LIVE SITE)                     */}
      {/* ===================================================================== */}
      <section
        id="process"
        style={{
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f8fafc" : "#020712",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3.5rem auto" }}>
            <span
              style={{
                display: "inline-block",
                color: mintColor,
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Proven Delivery Cycle
            </span>

            {/* Exact Heading from live page */}
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}
            >
              Web Development Process
            </h2>

            {/* Exact Lead from live page */}
            <p
              style={{
                color: isLight ? "#334155" : "#e2e8f0",
                fontSize: "1.08rem",
                lineHeight: 1.7,
                marginBottom: "1rem",
                fontWeight: 500,
              }}
            >
              We start with a thorough discovery and planning phase to understand your business goals, target users, and content needs.
              Based on this, we create a sitemap, wireframes, and high-fidelity UI/UX designs that bring clarity to the user journey and functionality.
            </p>
          </div>

          {/* 6 Process Steps (Exact data from live site in a modern numbered roadmap UI) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "1.75rem",
              marginBottom: "3rem",
            }}
          >
            {PROCESS_STEPS_LIVE.map((step, sIdx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={sIdx}
                  style={{
                    padding: "2.25rem 2rem",
                    borderRadius: "18px",
                    background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.65)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1.25rem",
                      fontSize: "2.5rem",
                      fontWeight: 900,
                      color: isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)",
                      lineHeight: 1,
                    }}
                  >
                    {step.step}
                  </div>

                  <div>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.15)",
                        border: isLight ? "1px solid rgba(0, 168, 143, 0.25)" : "1px solid rgba(94, 192, 152, 0.35)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: mintColor,
                        marginBottom: "1.25rem",
                      }}
                    >
                      <StepIcon size={22} />
                    </div>

                    <div style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: mintColor, marginBottom: "0.35rem" }}>
                      Phase {step.step}
                    </div>

                    <h3 style={{ fontSize: "1.28rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                      {step.phase}
                    </h3>

                    <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.95rem", lineHeight: 1.65 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Exact Concluding Copy from Live Site */}
          <div
            style={{
              padding: "1.75rem 2rem",
              borderRadius: "16px",
              background: isLight ? "rgba(0, 168, 143, 0.05)" : "rgba(94, 192, 152, 0.08)",
              border: isLight ? "1px solid rgba(0, 168, 143, 0.2)" : "1px solid rgba(94, 192, 152, 0.25)",
              textAlign: "center",
              maxWidth: "960px",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                color: isLight ? "#102033" : "#f8fafc",
                lineHeight: 1.65,
                fontWeight: 600,
                margin: 0,
              }}
            >
              Post-launch, we offer continuous monitoring, maintenance, and performance enhancements to ensure long-term value and growth.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. INDUSTRIES WE SPECIALIZE IN (EXACT 10 INDUSTRIES FROM LIVE SITE)   */}
      {/* ===================================================================== */}
      <section
        id="industries"
        style={{
          padding: "5.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#ffffff" : "rgba(4, 10, 22, 0.95)",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3.5rem auto" }}>
            <span
              style={{
                display: "inline-block",
                color: mintColor,
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Industry Focus
            </span>

            {/* Exact Heading from live page */}
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Industries We Specialize In
            </h2>

            {/* Exact Lead from live page */}
            <p style={{ color: isLight ? "#475569" : "#94a3b8", fontSize: "1.06rem", lineHeight: 1.7 }}>
              Opash Software brings over 8 years of expertise in delivering tailored digital solutions for Insurance, Fintech, eCommerce,
              Education, and Real Estate — helping businesses overcome industry challenges and scale confidently.
            </p>
          </div>

          {/* 10 Industries from live page presented in an attractive modern card deck */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {INDUSTRIES_LIVE.map((ind, idx) => {
              const IndIcon = ind.icon;
              const isSelected = idx === activeIndustryIdx;
              return (
                <div
                  key={ind.id}
                  onClick={() => setActiveIndustryIdx(idx)}
                  style={{
                    padding: "1.6rem 1.4rem",
                    borderRadius: "16px",
                    background: isSelected
                      ? isLight ? "rgba(0, 168, 143, 0.08)" : "rgba(94, 192, 152, 0.14)"
                      : isLight ? "#f8fafc" : "rgba(10, 20, 36, 0.7)",
                    border: isSelected
                      ? `1.5px solid ${mintColor}`
                      : isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "12px",
                      background: isLight ? "rgba(0, 168, 143, 0.12)" : "rgba(94, 192, 152, 0.16)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: mintColor,
                      flexShrink: 0,
                    }}
                  >
                    <IndIcon size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: 0 }}>
                      {ind.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 7. CONNECT WITH OPASH / GET YOUR FREE QUOTE TODAY (EXACT LIVE FORM)   */}
      {/* ===================================================================== */}
      <section
        id="quote-section"
        style={{
          padding: "6rem 1.5rem",
          position: "relative",
          overflow: "hidden",
          background: isLight ? "#f8fafc" : "#020712",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ position: "relative", zIndex: 1, maxWidth: "980px", margin: "0 auto" }}>
          {/* Exact Tagline from Live Page */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span
              style={{
                display: "inline-block",
                color: mintColor,
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Turn Your Ideas into Scalable Digital Solutions
            </span>

            {/* Exact Heading from Live Page */}
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Connect with <span style={{ color: mintColor }}>Opash Software</span>’s Expert Development Team Today.
            </h2>
          </div>

          {/* Form Card (Exact title: "Get Your Free Quote Today") */}
          <div
            style={{
              borderRadius: "24px",
              padding: "clamp(2rem, 4vw, 3.25rem)",
              background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.8)",
              border: isLight ? "1px solid #e2e8f0" : `1px solid rgba(94, 192, 152, 0.25)`,
              boxShadow: isLight ? "0 10px 40px rgba(0,0,0,0.04)" : "0 20px 60px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                Get Your Free Quote Today
              </h3>
              <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.95rem" }}>
                Fill out the details below and our team will get back to you with a tailored technical estimate within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div style={{ textAlign: "center", padding: "3rem 1.5rem" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "rgba(16, 185, 129, 0.15)",
                    color: "#10b981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem auto",
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h4 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                  Quote Request Received!
                </h4>
                <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.98rem", maxWidth: "520px", margin: "0 auto 2rem auto" }}>
                  Thank you, <strong>{formData.name}</strong>. Our web development engineering team will review your specifications and get in touch shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", phone: "", email: "", projectType: "Full Time", country: "United States", message: "" });
                  }}
                  style={{
                    padding: "0.75rem 1.5rem",
                    borderRadius: "10px",
                    background: mintColor,
                    color: "#ffffff",
                    border: "none",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", marginBottom: "1.5rem" }}>
                  {/* Name */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.85rem 1rem",
                        borderRadius: "10px",
                        background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
                        border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.1)",
                        color: isLight ? "#0f172a" : "#ffffff",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.85rem 1rem",
                        borderRadius: "10px",
                        background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
                        border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.1)",
                        color: isLight ? "#0f172a" : "#ffffff",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.85rem 1rem",
                        borderRadius: "10px",
                        background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
                        border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.1)",
                        color: isLight ? "#0f172a" : "#ffffff",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Your Country */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                      Your Country *
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.85rem 1rem",
                        borderRadius: "10px",
                        background: isLight ? "#f8fafc" : "rgba(10, 20, 36, 0.95)",
                        border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.1)",
                        color: isLight ? "#0f172a" : "#ffffff",
                        fontSize: "0.95rem",
                        outline: "none",
                        cursor: "pointer",
                      }}
                    >
                      {COUNTRIES_LIST.map((c) => (
                        <option key={c} value={c} style={{ background: isLight ? "#ffffff" : "#0a1424", color: isLight ? "#0f172a" : "#ffffff" }}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Type */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                    Project Type *
                  </label>
                  <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                    {["Hourly", "Part Time", "Full Time"].map((pType) => {
                      const isSelected = formData.projectType === pType;
                      return (
                        <button
                          key={pType}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: pType })}
                          style={{
                            padding: "0.65rem 1.4rem",
                            borderRadius: "10px",
                            fontSize: "0.9rem",
                            fontWeight: isSelected ? 700 : 500,
                            cursor: "pointer",
                            background: isSelected
                              ? mintColor
                              : isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.05)",
                            color: isSelected ? "#ffffff" : isLight ? "#475569" : "#94a3b8",
                            border: isSelected
                              ? `1px solid ${mintColor}`
                              : isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.1)",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {pType}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "2rem" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your web project, requirements, target goals, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
                      border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.1)",
                      color: isLight ? "#0f172a" : "#ffffff",
                      fontSize: "0.95rem",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formLoading}
                  style={{
                    width: "100%",
                    padding: "1rem",
                    borderRadius: "12px",
                    background: `linear-gradient(135deg, ${mintColor} 0%, #0284c7 100%)`,
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    border: "none",
                    cursor: formLoading ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    boxShadow: `0 8px 24px -4px ${isLight ? "rgba(0, 168, 143, 0.4)" : "rgba(94, 192, 152, 0.4)"}`,
                  }}
                >
                  <Send size={18} />
                  <span>{formLoading ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
