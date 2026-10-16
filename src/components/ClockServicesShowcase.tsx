"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  Code2,
  Globe2,
  Smartphone,
  Cpu,
  Network,
  Users2,
} from "lucide-react";
import { Service3DLiveIcon } from "@/components/Service3DLiveIcon";

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
  icon: any;
  shortLabel: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    shortLabel: "Custom Software",
    desc: "Opash Software builds scalable custom software tailored to your business needs — from enterprise platforms to niche solutions. Our agile approach ensures faster delivery and long-term performance.",
    url: "https://www.opashsoftware.com/custom-software-development/",
    slug: "custom-software-development",
    badge: "Enterprise Grade",
    accent: "#0ea5e9", // Blue
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
    url: "https://www.opashsoftware.com/web-development/",
    slug: "web-development",
    badge: "Lightning Fast",
    accent: "#10b981", // Green
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
    url: "https://www.opashsoftware.com/mobile-development/",
    slug: "mobile-development",
    badge: "Cross-Platform",
    accent: "#3b82f6", // Blue
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
    url: "https://www.opashsoftware.com/ai-ml-solutions/",
    slug: "ai-ml-solutions",
    badge: "AI Systems",
    accent: "#00bbab", // Green
    accentRgb: "0, 187, 171",
    image: "",
    tags: ["LLMs & GenAI", "Neural Models", "AutoML"],
    icon: Cpu,
  },
  {
    id: "api-integration",
    title: "API Integration & Microservices",
    shortLabel: "API & Microservices",
    desc: "Enhance system efficiency with seamless API integration and microservices architecture. Enable rapid scalability, modular development, and faster time-to-market.",
    url: "https://www.opashsoftware.com/api-integration/",
    slug: "api-integration",
    badge: "Microservices",
    accent: "#0284c7", // Blue
    accentRgb: "2, 132, 199",
    image: "",
    tags: ["Microservices", "REST & GraphQL", "Low Latency"],
    icon: Network,
  },
  {
    id: "hire-developers",
    title: "Hire Dedicated Developers",
    shortLabel: "Dedicated Team",
    desc: "Hire vetted and skilled developers from Opash Software for your custom projects. Scale your tech team on-demand with flexible engagement models and domain expertise.",
    url: "https://www.opashsoftware.com/hire-developers/",
    slug: "hire-developers",
    badge: "Dedicated Team",
    accent: "#10b981", // Green
    accentRgb: "16, 185, 129",
    image: "",
    tags: ["Top 1% Talent", "Zero Overhead", "Flexible Scale"],
    icon: Users2,
  },
];

export function ClockServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mouseTilt, setMouseTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const total = SERVICES_DATA.length;

  // Listen for reduced motion preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + total) % total);
  }, [total]);

  const prevService = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const nextService = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  // Cinematic auto-rotation every 3.5 seconds (3-4 seconds as requested)
  useEffect(() => {
    if (isHovered || prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, prefersReducedMotion, total, activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevService();
      } else if (e.key === "ArrowRight") {
        nextService();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevService, nextService]);

  // Smooth pointer tilt calculation on active center card only
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setMouseTilt({
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (diff > 40) {
      prevService();
    } else if (diff < -40) {
      nextService();
    }
    setTouchStartX(null);
  };

  // Deterministic 3D slot resolution for 6 cards continuous rotation
  const getSlot = (index: number) => {
    let diff = (index - activeIndex) % total;
    if (diff < 0) diff += total;

    switch (diff) {
      case 0:
        return "center";
      case 1:
        return "right-1";
      case 2:
        return "right-2";
      case 3:
        return "back";
      case 4:
        return "left-2";
      case 5:
        return "left-1";
      default:
        return "back";
    }
  };

  const activeService = SERVICES_DATA[activeIndex];

  return (
    <section
      id="services"
      className="coverflow-services-section relative overflow-x-clip w-full select-none"
      aria-label="Opash Software Services and Capabilities"
    >
      {/* Dynamic Ambient Background Aura smoothly reacting to active card accent */}
      <div className="coverflow-stage-backdrop" aria-hidden="true">
        <div
          className="coverflow-ambient-spotlight"
          style={{
            backgroundColor: `rgba(${activeService.accentRgb}, 0.22)`,
            boxShadow: `0 0 160px 80px rgba(${activeService.accentRgb}, 0.25)`,
          }}
        />
        <div
          className="coverflow-secondary-glow"
          style={{
            backgroundColor: `rgba(6, 182, 212, 0.08)`,
            boxShadow: `0 0 220px 110px rgba(6, 182, 212, 0.12)`,
          }}
        />
        <div className="coverflow-grid-floor" />
      </div>

      <div className="container-custom relative z-10">
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="coverflow-header-wrapper">
          <h2 className="coverflow-headline">
            Our <span className="coverflow-headline-highlight">Services</span>
          </h2>

          <p className="coverflow-subhead">
            We engineer high-performance digital platforms with remarkable aesthetics, delivering a full spectrum of result-oriented enterprise solutions.
          </p>

          {/* Quick-Jump Category / Service Pills */}
          <div className="coverflow-pill-tabs" role="tablist">
            {SERVICES_DATA.map((srv, idx) => {
              const isActive = idx === activeIndex;
              const Icon = srv.icon;
              return (
                <button
                  key={srv.id}
                  onClick={() => goTo(idx)}
                  className={`coverflow-tab-btn ${isActive ? "active" : ""}`}
                  role="tab"
                  aria-selected={isActive}
                  style={
                    {
                      "--tab-accent": srv.accent,
                      "--tab-accent-rgb": srv.accentRgb,
                    } as React.CSSProperties
                  }
                >
                  <Icon size={13} className="coverflow-tab-icon" />
                  <span>{srv.shortLabel}</span>
                  {isActive && <span className="coverflow-tab-active-glow" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. 3D PERSPECTIVE COVERFLOW CAROUSEL STAGE                                */}
        {/* ========================================================================= */}
        <div
          ref={stageRef}
          className="coverflow-stage-container"
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Navigation Arrow */}
          <button
            onClick={prevService}
            aria-label="Previous service card"
            className="coverflow-stage-nav-btn prev-btn"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextService}
            aria-label="Next service card"
            className="coverflow-stage-nav-btn next-btn"
          >
            <ChevronRight size={22} />
          </button>

          {/* 3D Cards Carousel Deck with 6-Slot Continuous Orbit */}
          <div className="coverflow-deck-wrapper">
            {SERVICES_DATA.map((service, index) => {
              const slot = getSlot(index);
              const isCenter = slot === "center";
              const isBack = slot === "back";

              return (
                <div
                  key={service.id}
                  data-slot={slot}
                  onClick={(e) => {
                    if (!isCenter) {
                      e.preventDefault();
                      goTo(index);
                    }
                  }}
                  className={`coverflow-card-anchor ${isCenter ? "is-center" : ""} ${
                    slot === "right-1" || slot === "left-1" ? "is-adjacent" : ""
                  } ${slot === "right-2" || slot === "left-2" ? "is-far" : ""} ${
                    isBack ? "is-back" : ""
                  }`}
                  style={
                    {
                      "--service-accent": service.accent,
                      "--service-accent-rgb": service.accentRgb,
                    } as React.CSSProperties
                  }
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${service.title} (${index + 1} of ${total})`}
                  aria-hidden={isBack}
                >
                  <Link
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="coverflow-card-box"
                    tabIndex={isCenter ? 0 : -1}
                    onMouseEnter={() => isCenter && setIsHovered(true)}
                    onMouseLeave={() => isCenter && handleMouseLeave()}
                    style={
                      isCenter && isHovered && !prefersReducedMotion && (mouseTilt.x !== 0 || mouseTilt.y !== 0)
                        ? {
                            transform: `rotateX(${mouseTilt.y * -4}deg) rotateY(${mouseTilt.x * 4}deg)`,
                            transition: "transform 0.12s ease-out",
                          }
                        : undefined
                    }
                  >
                    {/* Active Laser Border Beam (spinning around card perimeter) */}
                    {isCenter && <div className="coverflow-laser-border" aria-hidden="true" />}

                    {/* Ambient Accent Radial Glow */}
                    <div
                      className="coverflow-card-halo"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, rgba(${service.accentRgb}, 0.55) 0%, transparent 65%)`,
                      }}
                    />

                    {/* Top Specular Sheen */}
                    <div
                      className="coverflow-card-top-sheen"
                      style={{
                        background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 25%, ${service.accent} 50%, rgba(255,255,255,0.2) 75%, transparent 100%)`,
                      }}
                    />

                    {/* Card Header: Badge + Arrow */}
                    <div className="coverflow-card-header">
                      <span
                        className="coverflow-badge"
                        style={{
                          backgroundColor: `rgba(${service.accentRgb}, 0.12)`,
                          color: service.accent,
                          border: `1px solid rgba(${service.accentRgb}, 0.35)`,
                        }}
                      >
                        <span
                          className="coverflow-badge-dot"
                          style={{
                            backgroundColor: service.accent,
                            boxShadow: `0 0 8px ${service.accent}`,
                          }}
                        />
                        {service.badge}
                      </span>

                      <div
                        className="coverflow-corner-btn"
                        style={{
                          borderColor: `rgba(${service.accentRgb}, 0.3)`,
                          color: service.accent,
                        }}
                      >
                        <ArrowUpRight size={15} />
                      </div>
                    </div>

                    {/* 3D Tech Icon Stage */}
                    <div className="coverflow-icon-stage">
                      <Service3DLiveIcon
                        id={service.id}
                        image={service.image}
                        title={service.title}
                        accent={service.accent}
                        accentRgb={service.accentRgb}
                      />
                    </div>

                    {/* Card Content */}
                    <div className="coverflow-card-body">
                      <h3 className="coverflow-card-title">{service.title}</h3>

                      <p className="coverflow-card-desc">{service.desc}</p>

                      {/* Feature Chips */}
                      <div className="coverflow-tags-row">
                        {service.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="coverflow-tag-chip">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="coverflow-card-footer">
                      <span className="coverflow-cta-text" style={{ color: service.accent }}>
                        Explore Service
                      </span>
                      <div
                        className="coverflow-cta-arrow"
                        style={{
                          backgroundColor: `rgba(${service.accentRgb}, 0.15)`,
                          color: service.accent,
                        }}
                      >
                        <ArrowRight size={14} />
                      </div>
                    </div>

                    {/* Corner Cyber Accents */}
                    <div className="coverflow-corner-bracket top-left" />
                    <div className="coverflow-corner-bracket top-right" />
                    <div className="coverflow-corner-bracket bottom-left" />
                    <div className="coverflow-corner-bracket bottom-right" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. SIX-STEP POSITION INDICATOR & PROGRESS DOCK                            */}
        {/* ========================================================================= */}
        <div className="coverflow-pagination-dock" role="navigation" aria-label="Carousel navigation">
          <div className="coverflow-dots-group">
            {SERVICES_DATA.map((srv, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={srv.id}
                  onClick={() => goTo(idx)}
                  className={`coverflow-dot-pill ${isActive ? "active" : ""}`}
                  aria-label={`Jump to ${srv.title} (${idx + 1} of ${total})`}
                  aria-current={isActive ? "true" : undefined}
                  style={{
                    backgroundColor: isActive ? srv.accent : undefined,
                    boxShadow: isActive ? `0 0 14px ${srv.accent}` : undefined,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
