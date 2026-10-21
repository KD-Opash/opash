"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Clock,
  Layers,
  Cpu,
  Bot,
  TrendingUp,
  Tag,
  Check,
  Mail,
  Bookmark,
  Share2,
  Terminal,
  Code2,
} from "lucide-react";
import { blogsData, BlogPost } from "@/data/blogs";
import { useTheme } from "./ThemeProvider";

export function TechInsightsShowcase() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  // Category filter items
  const categories = [
    { id: "all", label: "All Dispatches" },
    { id: "full-stack", label: "Full-Stack Architecture", match: "Full-Stack Architecture" },
    { id: "ai", label: "AI & Innovation", match: "AI & Innovation" },
    { id: "saas", label: "SaaS Engineering", match: "SaaS Engineering" },
    { id: "business", label: "Strategy & ROI", match: "Business & Strategy" },
  ];

  const filteredPosts =
    activeCategory === "all"
      ? blogsData
      : blogsData.filter((post) => {
          const cat = categories.find((c) => c.id === activeCategory);
          return cat ? post.category === cat.match : true;
        });

  // Feature Hero Post (first of filtered or default)
  const heroPost = filteredPosts[0] || blogsData[0];
  // Secondary posts (up to 3)
  const secondaryPosts = filteredPosts.slice(1).length > 0 
    ? filteredPosts.slice(1) 
    : blogsData.filter((p) => p.slug !== heroPost.slug).slice(0, 2);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setNewsletterEmail("");
      }, 3500);
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "AI & Innovation":
        return {
          bg: isLight ? "rgba(138, 92, 255, 0.1)" : "rgba(138, 92, 255, 0.16)",
          border: isLight ? "rgba(138, 92, 255, 0.3)" : "rgba(138, 92, 255, 0.4)",
          text: isLight ? "#7c3aed" : "#a78bfa",
          glow: "rgba(138, 92, 255, 0.25)",
        };
      case "SaaS Engineering":
        return {
          bg: isLight ? "rgba(14, 165, 233, 0.1)" : "rgba(14, 165, 233, 0.16)",
          border: isLight ? "rgba(14, 165, 233, 0.3)" : "rgba(14, 165, 233, 0.4)",
          text: isLight ? "#0284c7" : "#38bdf8",
          glow: "rgba(14, 165, 233, 0.25)",
        };
      case "Business & Strategy":
        return {
          bg: isLight ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0.16)",
          border: isLight ? "rgba(16, 185, 129, 0.3)" : "rgba(16, 185, 129, 0.4)",
          text: isLight ? "#059669" : "#34d399",
          glow: "rgba(16, 185, 129, 0.25)",
        };
      default:
        return {
          bg: isLight ? "rgba(0, 255, 209, 0.1)" : "rgba(0, 255, 209, 0.15)",
          border: isLight ? "rgba(16, 185, 129, 0.3)" : "rgba(0, 255, 209, 0.35)",
          text: isLight ? "#0f766e" : "#00ffd1",
          glow: "rgba(0, 255, 209, 0.25)",
        };
    }
  };

  return (
    <section
      id="tech-insights"
      className="tech-insights-section"
      aria-label="Tech Insights by Opash Software"
      style={{
        position: "relative",
        padding: "7.5rem 0",
        overflow: "hidden",
        backgroundColor: isLight ? "#f8fafc" : "#030814",
        color: isLight ? "#0f172a" : "#f8fafc",
        transition: "background-color 0.4s ease, color 0.4s ease",
      }}
    >
      {/* Dynamic Ambient Background Highlights */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: isLight
            ? "radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, rgba(138, 92, 255, 0.04) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(138, 92, 255, 0.08) 50%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: isLight
            ? "radial-gradient(circle, rgba(16, 185, 129, 0.07) 0%, rgba(0, 255, 209, 0.03) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(0, 255, 209, 0.05) 50%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER WITH CONTROLS                                          */}
        {/* ========================================================================= */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 1rem",
                borderRadius: "9999px",
                background: isLight ? "rgba(14, 165, 233, 0.1)" : "rgba(14, 165, 233, 0.16)",
                border: `1px solid ${isLight ? "rgba(14, 165, 233, 0.25)" : "rgba(14, 165, 233, 0.35)"}`,
                color: isLight ? "#0284c7" : "#38bdf8",
                fontSize: "0.8rem",
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
                boxShadow: isLight
                  ? "0 4px 16px rgba(14, 165, 233, 0.1)"
                  : "0 4px 20px rgba(14, 165, 233, 0.15)",
              }}
            >
              <BookOpen size={14} />
              <span>Engineering Dispatch // 2026 Vault</span>
            </div>

            <h2
              className="heading-section"
              style={{
                fontSize: "clamp(2.1rem, 4vw, 3.2rem)",
                fontWeight: 850,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                margin: "0 0 1rem 0",
              }}
            >
              Tech Insights by{" "}
              <span className="opash-hero-gradient-text">
                Opash
              </span>
            </h2>

            <p
              className="subhead-lead"
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                color: isLight ? "#64748b" : "#94a3b8",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Tactical engineering breakdowns, system design teardowns, and modern architectural playbooks authored by our senior engineering squad.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/blogs"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.85rem 1.6rem",
                borderRadius: "14px",
                background: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.12)"}`,
                color: isLight ? "#0f172a" : "#f1f5f9",
                fontWeight: 700,
                fontSize: "0.92rem",
                textDecoration: "none",
                boxShadow: isLight
                  ? "0 4px 14px rgba(0,0,0,0.04)"
                  : "0 4px 20px rgba(0,0,0,0.4)",
                transition: "all 0.25s ease",
              }}
            >
              <span>View All Articles</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "2.75rem",
          }}
        >
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: "0.45rem 1.1rem",
                  borderRadius: "10px",
                  fontSize: "0.82rem",
                  fontWeight: isSelected ? 750 : 600,
                  border: `1px solid ${
                    isSelected
                      ? isLight
                        ? "#0ea5e9"
                        : "#00ffd1"
                      : isLight
                      ? "rgba(226, 232, 240, 0.9)"
                      : "rgba(255, 255, 255, 0.08)"
                  }`,
                  background: isSelected
                    ? isLight
                      ? "#0f172a"
                      : "linear-gradient(135deg, rgba(0, 255, 209, 0.2) 0%, rgba(14, 165, 233, 0.25) 100%)"
                    : isLight
                    ? "#ffffff"
                    : "rgba(10, 18, 34, 0.5)",
                  color: isSelected
                    ? isLight
                      ? "#ffffff"
                      : "#00ffd1"
                    : isLight
                    ? "#64748b"
                    : "#94a3b8",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: isSelected
                    ? isLight
                      ? "0 4px 12px rgba(15, 23, 42, 0.15)"
                      : "0 4px 16px rgba(0, 255, 209, 0.2)"
                    : "none",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 2. ASYMMETRICAL EDITORIAL BENTO GRID                                      */}
        {/* ========================================================================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.25fr 1fr",
            gap: "2rem",
            alignItems: "stretch",
          }}
          className="insights-bento-grid"
        >
          {/* --------------------------------------------------------------------- */}
          {/* HERO LEAD ARTICLE (LEFT STAGE)                                         */}
          {/* --------------------------------------------------------------------- */}
          {heroPost && (
            <div
              onMouseEnter={() => setHoveredSlug(heroPost.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
              style={{
                borderRadius: "26px",
                background: isLight
                  ? "rgba(255, 255, 255, 0.92)"
                  : "rgba(10, 18, 34, 0.8)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: `1px solid ${
                  hoveredSlug === heroPost.slug
                    ? isLight
                      ? "#0ea5e9"
                      : "#00ffd1"
                    : isLight
                    ? "rgba(226, 232, 240, 0.9)"
                    : "rgba(255, 255, 255, 0.08)"
                }`,
                padding: "2.5rem",
                boxShadow:
                  hoveredSlug === heroPost.slug
                    ? isLight
                      ? "0 25px 60px -15px rgba(14, 165, 233, 0.2)"
                      : "0 25px 60px -15px rgba(0, 255, 209, 0.25)"
                    : isLight
                    ? "0 20px 45px -15px rgba(15, 23, 42, 0.06)"
                    : "0 20px 50px -15px rgba(0, 0, 0, 0.6)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Luminous Top Header Pill */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.5rem",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        padding: "3px 10px",
                        borderRadius: "9999px",
                        background: getCategoryColor(heroPost.category).bg,
                        border: `1px solid ${getCategoryColor(heroPost.category).border}`,
                        color: getCategoryColor(heroPost.category).text,
                      }}
                    >
                      {heroPost.category}
                    </span>

                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        background: "linear-gradient(135deg, #00ffd1 0%, #10b981 100%)",
                        color: "#030814",
                        padding: "3px 9px",
                        borderRadius: "9999px",
                        boxShadow: "0 2px 8px rgba(0, 255, 209, 0.3)",
                      }}
                    >
                      <Sparkles size={11} />
                      <span>Featured Paper</span>
                    </span>
                  </div>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.78rem",
                      color: isLight ? "#64748b" : "#94a3b8",
                      fontWeight: 600,
                    }}
                  >
                    <Clock size={13} color="#0ea5e9" />
                    <span>{heroPost.readTime}</span>
                  </div>
                </div>

                {/* Abstract Interactive Code / Architecture Wireframe Preview */}
                <div
                  style={{
                    borderRadius: "16px",
                    padding: "1.25rem 1.5rem",
                    background: isLight ? "#f1f5f9" : "rgba(0, 0, 0, 0.4)",
                    border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)"}`,
                    marginBottom: "1.75rem",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
                      paddingBottom: "0.6rem",
                      marginBottom: "0.85rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ff5f56" }} />
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ffbd2e" }} />
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#27c93f" }} />
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontFamily: "monospace",
                          color: isLight ? "#64748b" : "#94a3b8",
                          marginLeft: "0.5rem",
                        }}
                      >
                        architecture/spec-{heroPost.slug.slice(0, 16)}.ts
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "#10b981",
                        background: isLight ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.18)",
                        padding: "1px 6px",
                        borderRadius: "4px",
                      }}
                    >
                      v2.4 Production Ready
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontFamily: "monospace",
                      lineHeight: 1.6,
                      color: isLight ? "#334155" : "#cbd5e1",
                    }}
                  >
                    <span style={{ color: isLight ? "#7c3aed" : "#a78bfa" }}>export const</span>{" "}
                    <span style={{ color: isLight ? "#0284c7" : "#38bdf8" }}>systemPipeline</span> = {"{"}
                    <br />
                    &nbsp;&nbsp;orchestration: <span style={{ color: "#10b981" }}>&quot;Edge Cloudflare + AWS EKS&quot;</span>,
                    <br />
                    &nbsp;&nbsp;telemetry: <span style={{ color: "#10b981" }}>&quot;OpenTelemetry + Prometheus&quot;</span>,
                    <br />
                    &nbsp;&nbsp;slaGuarantee: <span style={{ color: "#10b981" }}>&quot;99.99% Uptime&quot;</span>
                    <br />
                    {"}"};
                  </div>
                </div>

                {/* Main Article Title */}
                <h3
                  style={{
                    fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)",
                    fontWeight: 850,
                    lineHeight: 1.3,
                    letterSpacing: "-0.02em",
                    marginBottom: "1rem",
                  }}
                >
                  <Link
                    href={`/blogs/${heroPost.slug}`}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {heroPost.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: isLight ? "#475569" : "#94a3b8",
                    lineHeight: 1.65,
                    marginBottom: "1.5rem",
                  }}
                >
                  {heroPost.excerpt}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
                  {heroPost.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.72rem",
                        padding: "2px 8px",
                        borderRadius: "6px",
                        background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.05)",
                        border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
                        color: isLight ? "#64748b" : "#cbd5e1",
                        fontWeight: 600,
                      }}
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author & Action Footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "1.5rem",
                  borderTop: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      background: "linear-gradient(135deg, #0ea5e9, #10b981)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      fontSize: "0.9rem",
                      fontWeight: 800,
                      boxShadow: "0 2px 10px rgba(14, 165, 233, 0.3)",
                      flexShrink: 0,
                    }}
                  >
                    {heroPost.author.avatar.startsWith("/") ? (
                      <Image
                        src={heroPost.author.avatar}
                        alt={heroPost.author.name}
                        fill
                        sizes="40px"
                        style={{ objectFit: "cover", objectPosition: "top" }}
                      />
                    ) : (
                      heroPost.author.avatar
                    )}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 750, color: isLight ? "#0f172a" : "#f1f5f9" }}>
                      {heroPost.author.name}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                      {heroPost.author.role} • {heroPost.date}
                    </div>
                  </div>
                </div>

                <Link
                  href={`/blogs/${heroPost.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.75rem 1.4rem",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)",
                    color: "#ffffff",
                    fontSize: "0.88rem",
                    fontWeight: 750,
                    textDecoration: "none",
                    boxShadow: "0 4px 16px rgba(14, 165, 233, 0.3)",
                    transition: "all 0.25s ease",
                  }}
                >
                  <span>Read Full Paper</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          )}

          {/* --------------------------------------------------------------------- */}
          {/* COMPLEMENTARY EDITORIAL DISPATCH STACK (RIGHT COLUMN)                  */}
          {/* --------------------------------------------------------------------- */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {secondaryPosts.map((post) => {
              const isHovered = hoveredSlug === post.slug;
              const catColor = getCategoryColor(post.category);

              return (
                <div
                  key={post.slug}
                  onMouseEnter={() => setHoveredSlug(post.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  style={{
                    borderRadius: "22px",
                    background: isLight
                      ? "rgba(255, 255, 255, 0.9)"
                      : "rgba(10, 18, 34, 0.7)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: `1px solid ${
                      isHovered
                        ? isLight
                          ? "#0ea5e9"
                          : "#00ffd1"
                        : isLight
                        ? "rgba(226, 232, 240, 0.9)"
                        : "rgba(255, 255, 255, 0.08)"
                    }`,
                    padding: "1.75rem",
                    boxShadow: isHovered
                      ? isLight
                        ? "0 20px 40px -12px rgba(14, 165, 233, 0.15)"
                        : "0 20px 45px -12px rgba(0, 255, 209, 0.2)"
                      : isLight
                      ? "0 15px 35px -15px rgba(15, 23, 42, 0.05)"
                      : "0 15px 35px -15px rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: isHovered ? "translateY(-3px)" : "none",
                  }}
                >
                  <div>
                    {/* Category & Read Time */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.85rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          padding: "3px 9px",
                          borderRadius: "9999px",
                          background: catColor.bg,
                          border: `1px solid ${catColor.border}`,
                          color: catColor.text,
                        }}
                      >
                        {post.category}
                      </span>

                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          fontSize: "0.75rem",
                          color: isLight ? "#64748b" : "#94a3b8",
                          fontWeight: 600,
                        }}
                      >
                        <Clock size={12} color="#0ea5e9" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h4
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 800,
                        lineHeight: 1.35,
                        letterSpacing: "-0.01em",
                        margin: "0 0 0.65rem 0",
                      }}
                    >
                      <Link
                        href={`/blogs/${post.slug}`}
                        style={{
                          color: isHovered ? (isLight ? "#0284c7" : "#00ffd1") : "inherit",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {post.title}
                      </Link>
                    </h4>

                    {/* Excerpt */}
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: isLight ? "#475569" : "#94a3b8",
                        lineHeight: 1.55,
                        margin: "0 0 1rem 0",
                      }}
                    >
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer Meta & Direct Link */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "1rem",
                      borderTop: `1px solid ${isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.05)"}`,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <div
                        style={{
                          position: "relative",
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          overflow: "hidden",
                          background: isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          color: isLight ? "#0f172a" : "#ffffff",
                          flexShrink: 0,
                        }}
                      >
                        {post.author.avatar.startsWith("/") ? (
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            sizes="28px"
                            style={{ objectFit: "cover", objectPosition: "top" }}
                          />
                        ) : (
                          post.author.avatar
                        )}
                      </div>
                      <span style={{ fontSize: "0.78rem", color: isLight ? "#64748b" : "#94a3b8", fontWeight: 600 }}>
                        {post.author.name} • {post.date}
                      </span>
                    </div>

                    <Link
                      href={`/blogs/${post.slug}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        fontSize: "0.82rem",
                        fontWeight: 750,
                        color: isLight ? "#0284c7" : "#00ffd1",
                        textDecoration: "none",
                      }}
                    >
                      <span>Read Brief</span>
                      <ArrowUpRight
                        size={15}
                        style={{
                          transform: isHovered ? "translate(2px, -2px)" : "none",
                          transition: "transform 0.2s ease",
                        }}
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. ENGINEERING DIGEST NEWSLETTER BAR                                      */}
        {/* ========================================================================= */}
        <div
          style={{
            marginTop: "3.5rem",
            padding: "2rem 2.5rem",
            borderRadius: "24px",
            background: isLight
              ? "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)"
              : "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(8, 14, 28, 0.95) 100%)",
            border: `1px solid ${isLight ? "rgba(14, 165, 233, 0.25)" : "rgba(0, 255, 209, 0.25)"}`,
            backdropFilter: "blur(20px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            boxShadow: isLight
              ? "0 20px 45px -12px rgba(14, 165, 233, 0.1)"
              : "0 20px 50px -15px rgba(0, 255, 209, 0.12)",
          }}
        >
          <div style={{ maxWidth: "560px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
              <Terminal size={17} color="#0ea5e9" />
              <span style={{ fontSize: "0.82rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: isLight ? "#0284c7" : "#00ffd1" }}>
                Monthly Engineering Dispatch
              </span>
            </div>
            <h4 style={{ fontSize: "1.25rem", fontWeight: 850, margin: "0 0 0.35rem 0" }}>
              Architectural Deep-Dives Delivered Direct to Your Inbox
            </h4>
            <p style={{ fontSize: "0.85rem", color: isLight ? "#64748b" : "#94a3b8", margin: 0, lineHeight: 1.5 }}>
              Join 1,200+ CTOs, engineering directors, and product founders receiving zero-spam monthly system architecture teardowns.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              flexWrap: "wrap",
              minWidth: "320px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1rem",
                borderRadius: "12px",
                background: isLight ? "#ffffff" : "rgba(0, 0, 0, 0.4)",
                border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.1)"}`,
                flex: 1,
                minWidth: "220px",
              }}
            >
              <Mail size={16} color={isLight ? "#94a3b8" : "#64748b"} />
              <input
                type="email"
                required
                placeholder="founder@company.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  color: isLight ? "#0f172a" : "#f8fafc",
                  fontSize: "0.88rem",
                  width: "100%",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.75rem 1.4rem",
                borderRadius: "12px",
                background: isSubscribed
                  ? "#10b981"
                  : "linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)",
                color: "#ffffff",
                border: "none",
                fontWeight: 750,
                fontSize: "0.88rem",
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: "0 4px 16px rgba(14, 165, 233, 0.3)",
              }}
            >
              {isSubscribed ? <Check size={16} /> : <ArrowRight size={16} />}
              <span>{isSubscribed ? "Subscribed!" : "Subscribe"}</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default TechInsightsShowcase;
