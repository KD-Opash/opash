"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  ExternalLink,
  ShieldCheck,
  Building,
  CheckCircle2,
  Sparkles,
  Award,
  TrendingUp,
  MapPin,
  Calendar,
  Layers,
  LayoutGrid,
  Maximize2,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  website: string;
  relationship: string;
  rating: number;
  quote: string;
  avatarText: string;
  metric: string;
  metricLabel: string;
  industry: string;
  location: string;
  duration: string;
  accent: string;
  accentRgb: string;
  techStack: string[];
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "ucarehq",
    author: "Brad Jeffery",
    role: "Founder & Product Lead",
    company: "UCareHQ",
    website: "https://ucarehq.com/",
    relationship: "Custom Healthcare Platform",
    rating: 5,
    quote:
      "Opash Software delivered a seamless and intuitive platform for UCareHQ, combining modern design with robust functionality to enhance user experience and operational efficiency.",
    avatarText: "BJ",
    metric: "65%",
    metricLabel: "Faster Care Workflows",
    industry: "Digital Health & Telemedicine",
    location: "Austin, TX 🇺🇸",
    duration: "14-Month Dedicated Squad",
    accent: "#00bbab",
    accentRgb: "0, 187, 171",
    techStack: ["Next.js", "TypeScript", "HIPAA Compliant", "Node.js"],
  },
  {
    id: "iko",
    author: "Fred Bene",
    role: "Engineering Director",
    company: "IKO International",
    website: "https://next.ikointl.com/",
    relationship: "2-Year Full-Time Engagement",
    rating: 5,
    quote:
      "We worked with Hiren (Opash Software) for 2 years on a full-time basis as a full stack developer (MEAN) working mostly on the frontend in Angular. They are true professionals — communication was fantastic, and their level of commitment to the project was unmatched.",
    avatarText: "FB",
    metric: "2 Years",
    metricLabel: "Full-Time Retained Engagement",
    industry: "Industrial Manufacturing",
    location: "Milton, ON 🇨🇦",
    duration: "24-Month Retained Contract",
    accent: "#0ea5e9",
    accentRgb: "14, 165, 233",
    techStack: ["Angular", "MEAN Stack", "Enterprise Cloud", "REST APIs"],
  },
  {
    id: "esanad",
    author: "Anas M",
    role: "Co-Founder & CTO",
    company: "eSanad",
    website: "https://www.esanad.com/",
    relationship: "Digital Legal Verification Portal",
    rating: 5,
    quote:
      "We partnered with Opash Software to bring our vision for eSanad.com to life, and they delivered beyond expectations. From secure document verification to a seamless user interface, the platform is fast, intuitive, and scalable.",
    avatarText: "AM",
    metric: "250K+",
    metricLabel: "Documents Verified Securely",
    industry: "GovTech & Legal Verification",
    location: "Dubai, UAE 🇦🇪",
    duration: "18-Month Continuous Evolution",
    accent: "#10b981",
    accentRgb: "16, 185, 129",
    techStack: ["FastAPI", "React", "PostgreSQL", "Cryptographic Signatures"],
  },
  {
    id: "taygo",
    author: "Sepi G.",
    role: "VP of Product",
    company: "Taygo",
    website: "https://www.taygo.com/",
    relationship: "FinTech & AWS Architecture",
    rating: 5,
    quote:
      "It was great working with Opash Software. They developed excellent products for me and provided the best support — great knowledge of AWS setup and API management. It is highly recommended to Hire.",
    avatarText: "SG",
    metric: "4x",
    metricLabel: "Lead Velocity Acceleration",
    industry: "FinTech & Mortgage SaaS",
    location: "San Francisco, CA 🇺🇸",
    duration: "10-Month Architecture Sprint",
    accent: "#f59e0b",
    accentRgb: "245, 158, 11",
    techStack: ["AWS Lambda", "Serverless", "API Gateway", "DynamoDB"],
  },
  {
    id: "opinionpoll",
    author: "Anthony F",
    role: "Founder",
    company: "OpinionPoll",
    website: "https://www.opinionpoll.org/",
    relationship: "High-Concurrency Polling Engine",
    rating: 5,
    quote:
      "Thank you Hiren, for your hard work and dedication! Your expertise has been invaluable, and we truly appreciate the effort you've put into delivering exceptional results. Looking forward to collaborating with you again in the future!",
    avatarText: "AF",
    metric: "50K+",
    metricLabel: "Concurrent Live Voters",
    industry: "High-Traffic Consumer Web",
    location: "London, UK 🇬🇧",
    duration: "12-Month Product Build",
    accent: "#8b5cf6",
    accentRgb: "139, 92, 246",
    techStack: ["Redis", "WebSockets", "Node.js", "Next.js"],
  },
  {
    id: "stickyframe",
    author: "Austin Rogers",
    role: "Creative Director",
    company: "StickyFrame",
    website: "https://www.stickyframe.com/",
    relationship: "Creative Production Platform",
    rating: 5,
    quote:
      "It was great working with him and we are going to work on a next project again. Super responsive, proactive problem solving, and delivered ahead of deadline.",
    avatarText: "AR",
    metric: "100%",
    metricLabel: "On-Time Sprint Completion",
    industry: "Creative Video & Production",
    location: "New York, NY 🇺🇸",
    duration: "8-Month Iterative Sprints",
    accent: "#ec4899",
    accentRgb: "236, 72, 153",
    techStack: ["Next.js", "WebGL / Canvas", "Tailwind CSS", "Vercel"],
  },
];

export default function TestimonialsSlider() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"spotlight" | "grid">("spotlight");
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = TESTIMONIALS_DATA.length;
  const current = TESTIMONIALS_DATA[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Static by default: slides advance on user interaction (arrows or tab selection)

  return (
    <div
      className="testimonials-creative-wrapper"
      style={{
        position: "relative",
        width: "100%",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ========================================================================= */}
      {/* 1. TOP CONTROLS & VIEW SWITCHER                                           */}
      {/* ========================================================================= */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        {/* Company Quick-Jump Tabs (Spotlight Mode) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            overflowX: "auto",
            paddingBottom: "4px",
            maxWidth: "100%",
          }}
          role="tablist"
        >
          {TESTIMONIALS_DATA.map((item, idx) => {
            const isActive = idx === currentIndex && viewMode === "spotlight";
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setCurrentIndex(idx);
                  setViewMode("spotlight");
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.45rem 0.95rem",
                  borderRadius: "9999px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  border: `1px solid ${
                    isActive
                      ? item.accent
                      : isLight
                      ? "rgba(226, 232, 240, 0.9)"
                      : "rgba(255, 255, 255, 0.08)"
                  }`,
                  background: isActive
                    ? isLight
                      ? `rgba(${item.accentRgb}, 0.12)`
                      : `rgba(${item.accentRgb}, 0.22)`
                    : isLight
                    ? "rgba(255, 255, 255, 0.85)"
                    : "rgba(10, 18, 34, 0.75)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  color: isActive
                    ? item.accent
                    : isLight
                    ? "#475569"
                    : "#94a3b8",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  whiteSpace: "nowrap",
                  boxShadow: isActive
                    ? `0 4px 14px rgba(${item.accentRgb}, 0.25)`
                    : "none",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: isActive ? item.accent : isLight ? "#94a3b8" : "#475569",
                    boxShadow: isActive ? `0 0 8px ${item.accent}` : "none",
                  }}
                />
                <span>{item.company}</span>
              </button>
            );
          })}
        </div>

        {/* View Mode Toggle: Spotlight vs All Reviews */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "3px",
            borderRadius: "10px",
            background: isLight ? "rgba(226, 232, 240, 0.85)" : "rgba(10, 18, 34, 0.8)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.08)"}`,
            gap: "2px",
          }}
        >
          <button
            onClick={() => setViewMode("spotlight")}
            aria-label="Spotlight view"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.35rem 0.8rem",
              borderRadius: "7px",
              fontSize: "0.8rem",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              background:
                viewMode === "spotlight"
                  ? isLight
                    ? "#ffffff"
                    : "rgba(14, 165, 233, 0.2)"
                  : "transparent",
              color:
                viewMode === "spotlight"
                  ? "#0ea5e9"
                  : isLight
                  ? "#64748b"
                  : "#94a3b8",
              transition: "all 0.2s ease",
            }}
          >
            <Maximize2 size={13} />
            <span>Spotlight</span>
          </button>
          <button
            onClick={() => setViewMode("grid")}
            aria-label="Grid view of all reviews"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.35rem 0.8rem",
              borderRadius: "7px",
              fontSize: "0.8rem",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              background:
                viewMode === "grid"
                  ? isLight
                    ? "#ffffff"
                    : "rgba(14, 165, 233, 0.2)"
                  : "transparent",
              color:
                viewMode === "grid"
                  ? "#0ea5e9"
                  : isLight
                  ? "#64748b"
                  : "#94a3b8",
              transition: "all 0.2s ease",
            }}
          >
            <LayoutGrid size={13} />
            <span>All 6 Reviews</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MODE A: SPOTLIGHT EXECUTIVE HERO STAGE                                 */}
      {/* ========================================================================= */}
      {viewMode === "spotlight" && (
        <div
          style={{
            position: "relative",
            borderRadius: "28px",
            background: isLight
              ? "#ffffff"
              : "linear-gradient(180deg, rgba(10, 18, 36, 0.95) 0%, rgba(6, 12, 26, 0.98) 100%)",
            border: `1px solid ${
              isLight
                ? `rgba(${current.accentRgb}, 0.35)`
                : `rgba(${current.accentRgb}, 0.4)`
            }`,
            boxShadow: isLight
              ? `0 24px 50px -15px rgba(${current.accentRgb}, 0.12), 0 0 0 1px rgba(0,0,0,0.02)`
              : `0 30px 60px -15px rgba(0, 0, 0, 0.75), 0 0 35px rgba(${current.accentRgb}, 0.12)`,
            overflow: "hidden",
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Ambient Corner Mesh Accent */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(${current.accentRgb}, ${isLight ? 0.12 : 0.22}) 0%, transparent 70%)`,
              filter: "blur(50px)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.55fr 1fr",
              alignItems: "stretch",
            }}
            className="testimonial-spotlight-grid"
          >
            {/* LEFT COLUMN: THE EXECUTIVE STATEMENT */}
            <div
              style={{
                padding: "3.5rem 3.2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div>
                {/* Header Metadata Pill Bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                    marginBottom: "2rem",
                  }}
                >
                  {/* Star Rating */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2px",
                      padding: "0.28rem 0.65rem",
                      borderRadius: "9999px",
                      background: isLight ? "rgba(245, 158, 11, 0.1)" : "rgba(245, 158, 11, 0.16)",
                    }}
                  >
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                    ))}
                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        color: "#f59e0b",
                        marginLeft: "4px",
                      }}
                    >
                      5.0
                    </span>
                  </div>

                  {/* Verified Seal */}
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "0.28rem 0.75rem",
                      borderRadius: "9999px",
                      background: "rgba(16, 185, 129, 0.12)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      color: isLight ? "#059669" : "#34d399",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                    }}
                  >
                    <ShieldCheck size={14} />
                    Verified Client Contract
                  </span>

                  {/* Industry Badge */}
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "0.28rem 0.75rem",
                      borderRadius: "9999px",
                      background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.06)",
                      color: isLight ? "#64748b" : "#94a3b8",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                    }}
                  >
                    <Building size={13} />
                    {current.industry}
                  </span>
                </div>

                {/* THE QUOTE TEXT */}
                <div style={{ position: "relative", marginBottom: "2.2rem" }}>
                  <Quote
                    size={64}
                    style={{
                      position: "absolute",
                      top: "-25px",
                      left: "-20px",
                      color: `rgba(${current.accentRgb}, 0.15)`,
                      pointerEvents: "none",
                      transform: "scaleX(-1)",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
                      lineHeight: 1.6,
                      fontWeight: 600,
                      color: isLight ? "#0f172a" : "#f8fafc",
                      letterSpacing: "-0.015em",
                      margin: 0,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* AUTHOR FOOTER & ACTION ROW */}
              <div>
                {/* Tech Stack Pills */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    marginBottom: "1.8rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: isLight ? "#94a3b8" : "#64748b",
                      marginRight: "4px",
                      fontWeight: 600,
                    }}
                  >
                    Stack:
                  </span>
                  {current.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: "0.2rem 0.55rem",
                        borderRadius: "6px",
                        fontSize: "0.74rem",
                        fontWeight: 600,
                        background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.05)",
                        border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
                        color: isLight ? "#334155" : "#cbd5e1",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1.2rem",
                    borderTop: `1px solid ${isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.06)"}`,
                    paddingTop: "1.4rem",
                  }}
                >
                  {/* Author Bio */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div
                      style={{
                        width: "54px",
                        height: "54px",
                        borderRadius: "16px",
                        background: `linear-gradient(135deg, ${current.accent}, #0284c7)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                        fontWeight: 800,
                        fontSize: "1.25rem",
                        boxShadow: `0 4px 18px rgba(${current.accentRgb}, 0.4)`,
                        flexShrink: 0,
                      }}
                    >
                      {current.avatarText}
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "1.12rem",
                          fontWeight: 800,
                          color: isLight ? "#0f172a" : "#ffffff",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {current.author}
                      </div>
                      <div
                        style={{
                          fontSize: "0.86rem",
                          color: isLight ? "#64748b" : "#94a3b8",
                          marginTop: "2px",
                        }}
                      >
                        {current.role} •{" "}
                        <strong style={{ color: current.accent, fontWeight: 700 }}>
                          {current.company}
                        </strong>
                      </div>
                    </div>
                  </div>

                  {/* External Verified Link */}
                  <a
                    href={current.website}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.6rem 1.15rem",
                      borderRadius: "10px",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.05)",
                      border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.1)"}`,
                      color: isLight ? "#0f172a" : "#f1f5f9",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span>Visit {current.company}</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: PROVEN IMPACT RADAR */}
            <div
              style={{
                padding: "3.2rem 2.8rem",
                background: isLight
                  ? "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)"
                  : "linear-gradient(180deg, rgba(15, 23, 42, 0.65) 0%, rgba(10, 16, 32, 0.95) 100%)",
                borderLeft: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: current.accent,
                    marginBottom: "1.4rem",
                  }}
                >
                  <TrendingUp size={14} />
                  <span>Verified Project Impact</span>
                </div>

                {/* Big Metric Callout (Clean single-card layout, no nested inner box) */}
                <div
                  style={{
                    marginBottom: "2rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(2.5rem, 3.8vw, 3.6rem)",
                      fontWeight: 900,
                      color: current.accent,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {current.metric}
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: isLight ? "#1e293b" : "#f1f5f9",
                    }}
                  >
                    {current.metricLabel}
                  </div>
                </div>

                {/* Engagement Facts List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.95rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                    <MapPin size={16} color={current.accent} />
                    <span style={{ fontSize: "0.85rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                      Headquarters: <strong style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>{current.location}</strong>
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                    <Calendar size={16} color={current.accent} />
                    <span style={{ fontSize: "0.85rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                      Duration: <strong style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>{current.duration}</strong>
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                    <Layers size={16} color={current.accent} />
                    <span style={{ fontSize: "0.85rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                      Scope: <strong style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>{current.relationship}</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Slider Controls Inside Right Column */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "2rem",
                  borderTop: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
                }}
              >
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: isLight ? "#94a3b8" : "#64748b" }}>
                  <span style={{ color: current.accent, fontSize: "1.1rem" }}>{currentIndex + 1}</span> / {total}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous testimonial"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.06)",
                      border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.1)"}`,
                      color: isLight ? "#0f172a" : "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next testimonial"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: current.accent,
                      border: "none",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      boxShadow: `0 4px 14px rgba(${current.accentRgb}, 0.35)`,
                    }}
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. MODE B: FULL MASONRY WALL OF TRUST (ALL 6 REVIEWS VISIBLE)             */}
      {/* ========================================================================= */}
      {viewMode === "grid" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={item.id}
              style={{
                borderRadius: "20px",
                padding: "2rem",
                background: isLight
                  ? "#ffffff"
                  : "linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(10, 16, 32, 0.9) 100%)",
                border: `1px solid ${
                  isLight
                    ? `rgba(${item.accentRgb}, 0.25)`
                    : `rgba(${item.accentRgb}, 0.3)`
                }`,
                boxShadow: isLight
                  ? "0 10px 25px -10px rgba(0,0,0,0.05)"
                  : "0 12px 30px -10px rgba(0,0,0,0.5)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              <div>
                {/* Header: Stars & Metric Pill */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.2rem",
                  }}
                >
                  <div style={{ display: "flex", gap: "2px" }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>

                  <span
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 800,
                      padding: "2px 8px",
                      borderRadius: "9999px",
                      background: `rgba(${item.accentRgb}, 0.15)`,
                      color: item.accent,
                      border: `1px solid rgba(${item.accentRgb}, 0.3)`,
                    }}
                  >
                    {item.metric} {item.metricLabel}
                  </span>
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    color: isLight ? "#334155" : "#e2e8f0",
                    fontWeight: 500,
                    marginBottom: "1.5rem",
                  }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: `1px solid ${isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.06)"}`,
                  paddingTop: "1.1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: `linear-gradient(135deg, ${item.accent}, #0284c7)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      fontWeight: 800,
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.avatarText}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700 }}>{item.author}</div>
                    <div style={{ fontSize: "0.78rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                      {item.role} • <strong style={{ color: item.accent }}>{item.company}</strong>
                    </div>
                  </div>
                </div>

                <a
                  href={item.website}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${item.company}`}
                  style={{
                    color: isLight ? "#64748b" : "#94a3b8",
                    padding: "6px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Progress Bar in Spotlight Mode */}
      {viewMode === "spotlight" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            marginTop: "1.75rem",
          }}
        >
          {TESTIMONIALS_DATA.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                style={{
                  width: isActive ? "34px" : "8px",
                  height: "8px",
                  borderRadius: "9999px",
                  background: isActive ? current.accent : isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.15)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: isActive ? `0 0 10px rgba(${current.accentRgb}, 0.5)` : "none",
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
