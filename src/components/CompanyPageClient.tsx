"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Layers,
  Globe,
  ShieldCheck,
  Zap,
  ArrowRight,
  ArrowUpRight,
  Star,
  Quote,
  Target,
  Rocket,
  Lightbulb,
  Handshake,
  Code2,
  Cpu,
  Smartphone,
  BrainCircuit,
  Cloud,
  Users,
  Check,
  Award,
  Lock,
  Clock,
  Terminal,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  Mail,
  Play,
  Pause,
} from "lucide-react";
import { companyData } from "@/data/company";
import ContactForm from "@/components/ContactForm";
import { useTheme } from "./ThemeProvider";
import AboutCreativeBackdrop from "./AboutCreativeBackdrop";
import TestimonialsSlider from "./TestimonialsSlider";
import TestimonialsCreativeBackdrop from "./TestimonialsCreativeBackdrop";
import OuiWillHeadline, { OuiWillWord, OuiWillDot } from "@/components/OuiWillHeadline";

// 1. Five Verified Milestones From Live Site (2021 to 2025)
interface ProgressMilestone {
  year: string;
  badge: string;
  title: string;
  description: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties; strokeWidth?: number }>;
  accentColor: string;
  glowColor: string;
  accentRgb: string;
  metrics: string[];
  kpi: string;
}

const PROGRESS_MILESTONES: ProgressMilestone[] = [
  {
    year: "2021",
    badge: "Inception",
    title: "Laying The Foundation",
    description:
      "Opash Software was established in Surat with a core mission: to deliver tailored, high-performance software solutions to startups and SMEs globally. Founded by elite engineers dedicated to zero-bloat architecture and full-stack engineering rigor.",
    category: "Business Start",
    icon: Compass,
    accentColor: "#00A88F",
    glowColor: "rgba(0, 168, 143, 0.45)",
    accentRgb: "0, 168, 143",
    metrics: ["Surat HQ Established", "100% IP Ownership", "Top 1% Senior Engineers"],
    kpi: "Surat HQ Launch",
  },
  {
    year: "2022",
    badge: "Expansion",
    title: "Expanding Our Service Offerings",
    description:
      "We diversified into full-stack development, cloud infrastructure, and mobile app solutions—helping clients scale with robust digital products across React, Node.js, Python, and AWS multi-region setups.",
    category: "Punctuality",
    icon: Layers,
    accentColor: "#0284C7",
    glowColor: "rgba(2, 132, 199, 0.45)",
    accentRgb: "2, 132, 199",
    metrics: ["2-Week Agile Sprints", "Cloud-Native Deployments", "Cross-Platform Mobile"],
    kpi: "100% On-Time Sprints",
  },
  {
    year: "2023",
    badge: "Global Growth",
    title: "Strategic Growth & Global Clients",
    description:
      "Expanded our dedicated engineering squads and delivered 75+ projects for clients across the US, Europe, and Asia—spanning logistics, healthcare, finance, and enterprise SaaS platforms with 96% client retention.",
    category: "Experience",
    icon: Globe,
    accentColor: "#9333EA",
    glowColor: "rgba(147, 51, 234, 0.45)",
    accentRgb: "147, 51, 234",
    metrics: ["Dedicated Engineering Squads", "75+ Global Projects", "US, UK & EU Corridors"],
    kpi: "Global Delivery Scale",
  },
  {
    year: "2024",
    badge: "Transformation",
    title: "Driving Digital Transformation Across Industries",
    description:
      "Empowered businesses across healthcare, fintech, and logistics with end-to-end digital solutions—combining UI/UX excellence, performance-driven code, and cloud-native deployment to accelerate growth and efficiency.",
    category: "Growth",
    icon: ShieldCheck,
    accentColor: "#16A34A",
    glowColor: "rgba(22, 163, 74, 0.45)",
    accentRgb: "22, 163, 74",
    metrics: ["99.99% Uptime SLAs", "FinTech & HealthTech", "Sub-15m Critical Response"],
    kpi: "99.99% SLA Uptime",
  },
  {
    year: "2025",
    badge: "Next-Gen AI",
    title: "Future-Ready Vision & Leadership",
    description:
      "Focusing on AI-driven applications, DevOps automation, and enterprise-grade security. Positioned as a trusted digital partner for global innovation, LLM orchestration, and cloud-first scale.",
    category: "Achievement",
    icon: Zap,
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.45)",
    accentRgb: "245, 158, 11",
    metrics: ["Enterprise AI Agents", "Multi-Cloud DevOps", "Zero-Downtime Releases"],
    kpi: "Enterprise AI & Scale",
  },
];

// 2. Six Verified Differentiators From Live Site
const UNIQUE_DIFFERENTIATORS = [
  {
    title: "Custom Solutions",
    description: "Tailor-made software architectures engineered specifically for your domain, audience, and operational goals.",
    icon: Code2,
    accent: "#00A88F",
  },
  {
    title: "Fast + Reliable Delivery",
    description: "Agile 2-week sprint cadences with predictable milestones, CI/CD pipelines, and zero-downtime rollouts.",
    icon: Clock,
    accent: "#0284C7",
  },
  {
    title: "Full-Cycle Development",
    description: "From concept discovery, wireframing, and UI/UX design to backend development, QA, and cloud scaling.",
    icon: Layers,
    accent: "#9333EA",
  },
  {
    title: "Agile & Transparent",
    description: "Real-time Slack/Teams collaboration, shared Jira dashboards, and daily progress standups with senior architects.",
    icon: Target,
    accent: "#10B981",
  },
  {
    title: "Scalable Codebase",
    description: "Cloud-native architectures built with modern frameworks (React, Next.js, Node.js, Python, AWS) ready for multi-region scale.",
    icon: Cpu,
    accent: "#F59E0B",
  },
  {
    title: "Global Experience",
    description: "Trusted track record across US, UK, European, Middle East, and Australian markets across FinTech, HealthTech & Logistics.",
    icon: Globe,
    accent: "#EC4899",
  },
];

// 3. Six Verified Services From Live Site
const CORE_SERVICES = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    href: "/custom-software",
    icon: Code2,
    accent: "#00A88F",
    description:
      "Opash Software builds scalable custom software tailored to your business needs — from enterprise platforms to niche solutions. Our agile approach, combined with DevOps automation, ensures faster delivery and long-term performance.",
  },
  {
    id: "web-development",
    title: "Web Development",
    href: "/web-development",
    icon: Globe,
    accent: "#0284C7",
    description:
      "Get modern, responsive, and SEO-friendly websites with Opash Software’s web development services. We build high-performance platforms using cutting-edge technologies for startups and enterprises.",
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    href: "/mobile-development",
    icon: Smartphone,
    accent: "#8B5CF6",
    description:
      "We design and develop feature-rich mobile apps for iOS and Android that are fast, secure, and scalable. Opash Software helps you deliver exceptional user experiences with cross-platform and native apps.",
  },
  {
    id: "ai-ml-solutions",
    title: "AI & ML Solutions",
    href: "/ai-ml-solutions",
    icon: BrainCircuit,
    accent: "#10B981",
    description:
      "Leverage Artificial Intelligence and Machine Learning to automate workflows, enhance decision-making, and personalize user experiences. Opash Software delivers AI-driven solutions tailored to your business goals.",
  },
  {
    id: "api-integration",
    title: "API Integration & Microservices",
    href: "/api-integration",
    icon: Cloud,
    accent: "#F59E0B",
    description:
      "Enhance system efficiency with seamless API integration and microservices architecture. Opash Software enables rapid scalability, modular development, and faster time-to-market for your digital products.",
  },
  {
    id: "hire-developers",
    title: "Hire Dedicated Developers",
    href: "/hire-developers",
    icon: Users,
    accent: "#EC4899",
    description:
      "Hire vetted and skilled developers from Opash Software for your custom projects. Scale your tech team on-demand with flexible engagement models and domain expertise.",
  },
];

// Rolling Digit Reel Component for 60fps GPU Counter Animation
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

const COMPANY_STATS = [
  {
    count: "50+",
    label: "Experienced Software Developers",
    detail: "Top 1% senior full-stack, cloud & AI developers",
    accentColor: "#00a88f",
    gradientColor: "#2dd4bf",
    lightColor: "#008a75",
    glowBorder: "rgba(45, 212, 191, 0.25)",
  },
  {
    count: "70+",
    label: "Custom Software Projects Delivered",
    detail: "SaaS, FinTech, Healthcare & Logistics platforms",
    accentColor: "#0284c7",
    gradientColor: "#38bdf8",
    lightColor: "#0284c7",
    glowBorder: "rgba(56, 189, 248, 0.25)",
  },
  {
    count: "12,000+",
    label: "Hours of Project Execution",
    detail: "Agile sprints & 96% client retention",
    accentColor: "#8b5cf6",
    gradientColor: "#818cf8",
    lightColor: "#4f46e5",
    glowBorder: "rgba(99, 102, 241, 0.25)",
  },
  {
    count: "8+",
    label: "Years of Industry Experience in IT Solutions",
    detail: "Proven digital transformation track record",
    accentColor: "#10b981",
    gradientColor: "#2dd4bf",
    lightColor: "#0d9488",
    glowBorder: "rgba(20, 184, 166, 0.25)",
  },
];

function Freestanding3DIcon({
  icon: Icon,
  accent,
  size = 46,
  style,
}: {
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties; strokeWidth?: number }>;
  accent: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        width: size + 16,
        height: size + 16,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: "600px",
        cursor: "pointer",
        marginBottom: "1.25rem",
        userSelect: "none",
        flexShrink: 0,
        ...style,
      }}
    >
      {/* 1. Dynamic 3D Ambient Aura Glow (Pulsing / Blooming behind icon) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "15%",
          left: "15%",
          width: "70%",
          height: "70%",
          borderRadius: "50%",
          background: accent,
          filter: "blur(18px)",
          opacity: isHovered ? (isLight ? 0.45 : 0.8) : isLight ? 0.12 : 0.28,
          transform: isHovered ? "scale(1.45)" : "scale(1)",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* 2. 3D Extruded Deep Shadow Silhouette Layer */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: accent,
          opacity: isLight ? 0.15 : 0.35,
          transform: isHovered
            ? "translateY(5px) translateZ(-6px) scale(0.96)"
            : "translateY(2px) translateZ(-2px) scale(0.98)",
          filter: isLight ? "none" : "blur(1px)",
          transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <Icon size={size} strokeWidth={2.4} />
      </div>

      {/* 3. Main Foreground 3D Floating Icon Layer */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          color: accent,
          transformStyle: "preserve-3d",
          transform: isHovered
            ? "translateY(-6px) translateZ(16px) rotateX(12deg) rotateY(-10deg) scale(1.14)"
            : "translateY(0) translateZ(0) rotateX(0) rotateY(0) scale(1)",
          filter: isHovered
            ? isLight
              ? `drop-shadow(0 6px 14px ${accent}60)`
              : `drop-shadow(0 10px 22px ${accent}85) drop-shadow(0 2px 4px rgba(0,0,0,0.6))`
            : isLight
            ? `drop-shadow(0 2px 6px ${accent}35)`
            : `drop-shadow(0 4px 10px ${accent}45)`,
          transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={size} strokeWidth={2.2} />
      </div>
    </div>
  );
}

export default function CompanyPageClient() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // State
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);
  const [isTimelinePaused, setIsTimelinePaused] = useState(false);

  // Counter Scroll Trigger
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === statsRef.current && entry.isIntersecting) {
            setStatsInView(true);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Continuous auto-advance timeline milestones (2021 -> 2022 -> 2023 -> 2024 -> 2025 -> 2021)
  useEffect(() => {
    if (isTimelinePaused) return;
    const interval = setInterval(() => {
      setActiveMilestoneIndex((prev) => (prev + 1) % PROGRESS_MILESTONES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isTimelinePaused, activeMilestoneIndex]);

  return (
    <div
      style={{
        position: "relative",
        background: isLight ? "#f8fafc" : "#020712",
        color: isLight ? "#102033" : "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* ===================================================================== */}
      {/* 1. CINEMATIC HERO SECTION (100VH FULL WINDOW)                         */}
      {/* ===================================================================== */}
      <section
        className="company-hero-section"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "7.5rem 1.5rem 4rem 1.5rem",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <AboutCreativeBackdrop isLightMode={isLight} />

        <div className="container-custom" style={{ position: "relative", zIndex: 2, maxWidth: "1320px", margin: "0 auto", width: "100%" }}>
          <div style={{ textAlign: "center", maxWidth: "1280px", margin: "0 auto" }}>
            <OuiWillHeadline
              style={{
                fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.8vw, 54px)",
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                marginBottom: "1.75rem",
                display: "block",
              }}
            >
              <span className="headline-nowrap-desktop" style={{ display: "inline-block" }}>
                <OuiWillWord index={1}>Not</OuiWillWord>{" "}
                <OuiWillWord index={2}>Just</OuiWillWord>{" "}
                <OuiWillWord index={3}>Another</OuiWillWord>{" "}
                <OuiWillWord index={4}>IT</OuiWillWord>{" "}
                <OuiWillWord index={5}>Company.</OuiWillWord>
                <OuiWillDot />
              </span>
              <span style={{ display: "block", width: "100%", marginTop: "0.5rem" }}>
                <OuiWillWord index={6} isGradient>
                  We Are A Dedicated Team Of Tech Experts.
                </OuiWillWord>
              </span>
            </OuiWillHeadline>

            {/* Narrative Paragraph from Live Site to Fill Blank Spacing */}
            <div
              style={{
                maxWidth: "920px",
                margin: "0 auto 2.25rem auto",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1.05rem, 1.4vw, 1.18rem)",
                  lineHeight: 1.7,
                  color: isLight ? "#475569" : "#cbd5e1",
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                At Opash Software, we’re not just another IT company — we’re a passionate family of over 50+ tech experts dedicated to turning digital dreams into reality. Based in Surat, Gujarat, a rising tech hub ideal for IT nearshoring due to its strategic location and time zone advantages, we serve businesses globally — from startups to MNCs.
              </p>
              <p
                style={{
                  fontSize: "clamp(1.02rem, 1.35vw, 1.12rem)",
                  lineHeight: 1.7,
                  color: isLight ? "#64748b" : "#94a3b8",
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                With 8+ years of experience in full-stack development, cloud services, mobile apps, AI/ML, and digital marketing, we specialize in delivering tailor-made, scalable IT solutions that align perfectly with your business goals.
              </p>
            </div>

            {/* CTAs with Home Page Rolling Text on Hover */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "2.5rem",
              }}
            >
              <Link
                href="/get-a-quote"
                className="hero-brand-primary-btn opash-roll-btn"
              >
                <span className="opash-roll-track">
                  <span className="opash-roll-item">
                    <span>Get Free Consultation</span>
                    <ArrowRight size={15} className="hero-btn-arrow" />
                  </span>
                  <span className="opash-roll-item" aria-hidden="true">
                    <span>Get Free Consultation</span>
                    <ArrowRight size={15} className="hero-btn-arrow" />
                  </span>
                </span>
              </Link>

              <a
                href="#services"
                className="hero-brand-secondary-btn opash-roll-btn"
              >
                <span className="opash-roll-track">
                  <span className="opash-roll-item">
                    <Terminal size={15} className="hero-wa-icon" />
                    <span>Explore Technologies</span>
                  </span>
                  <span className="opash-roll-item" aria-hidden="true">
                    <Terminal size={15} className="hero-wa-icon" />
                    <span>Explore Technologies</span>
                  </span>
                </span>
              </a>
            </div>

            {/* Trust Signals Strip */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1.25rem",
                fontSize: "0.86rem",
                color: isLight ? "#64748b" : "#94a3b8",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <Star size={14} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
                <span style={{ fontWeight: 700, color: isLight ? "#0f172a" : "#f8fafc" }}>4.9/5 Clutch Rating</span>
              </div>
              <span style={{ opacity: 0.4 }}>&bull;</span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <Award size={14} style={{ color: "#00a88f" }} />
                <span>100% Upwork Job Success</span>
              </div>
              <span style={{ opacity: 0.4 }}>&bull;</span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <Lock size={14} style={{ color: "#38bdf8" }} />
                <span>100% Day-One IP Ownership</span>
              </div>
              <span style={{ opacity: 0.4 }}>&bull;</span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <Clock size={14} style={{ color: "#818cf8" }} />
                <span>2-Week Agile Sprints</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated "Scroll to Explore" Indicator (Pinned to bottom like Portfolio) */}
        <a
          href="#company-stats"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById("company-stats");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="hero-scroll-indicator"
          style={{
            position: "absolute",
            bottom: "clamp(2.5rem, 5vh, 3.5rem)",
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
            <span>Scroll to explore</span>
            <span className="hero-scroll-arrow">↓</span>
          </div>
        </a>
      </section>

      {/* ===================================================================== */}
      {/* 2. DEDICATED TELEMETRY STATS SECTION (OUTSIDE HERO WITH ROLLING TICKER) */}
      {/* ===================================================================== */}
      <section
        id="company-stats"
        ref={statsRef}
        style={{
          position: "relative",
          padding: "5rem 1.5rem",
          background: isLight
            ? "linear-gradient(180deg, rgba(248, 250, 252, 0.7) 0%, #ffffff 30%, #ffffff 70%, rgba(248, 250, 252, 0.7) 100%)"
            : "linear-gradient(180deg, rgba(10, 18, 34, 0.6) 0%, rgba(6, 14, 30, 0.95) 30%, rgba(8, 17, 36, 0.95) 70%, rgba(10, 18, 34, 0.6) 100%)",
          borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
          overflow: "hidden",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1320px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
              width: "100%",
            }}
          >
            {COMPANY_STATS.map((stat, idx) => {
              const delays = [0.05, 0.15, 0.25, 0.35];
              return (
                <div
                  key={idx}
                  style={{
                    padding: "2rem 1.6rem",
                    borderRadius: "20px",
                    background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.82)",
                    border: isLight ? "1px solid #e2e8f0" : `1px solid ${stat.glowBorder}`,
                    boxShadow: isLight
                      ? "0 4px 20px rgba(0, 0, 0, 0.04)"
                      : "0 10px 30px rgba(0, 0, 0, 0.4)",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                    transform: statsInView ? "translate3d(0, 0, 0)" : "translate3d(0, 32px, 0)",
                    opacity: statsInView ? 1 : 0,
                    transition: `transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delays[idx]}s, opacity 0.65s ease ${delays[idx]}s, border-color 0.25s ease`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate3d(0, -6px, 0)";
                    e.currentTarget.style.borderColor = stat.accentColor;
                    e.currentTarget.style.boxShadow = isLight
                      ? "0 14px 34px -8px rgba(0, 168, 143, 0.18)"
                      : "0 16px 40px -10px rgba(0, 255, 209, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate3d(0, 0, 0)";
                    e.currentTarget.style.borderColor = isLight ? "#e2e8f0" : stat.glowBorder;
                    e.currentTarget.style.boxShadow = isLight
                      ? "0 4px 20px rgba(0, 0, 0, 0.04)"
                      : "0 10px 30px rgba(0, 0, 0, 0.4)";
                  }}
                >
                  {/* Top glowing laser line on card */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: `linear-gradient(90deg, transparent, ${stat.accentColor}, transparent)`,
                    }}
                  />

                  {/* Rolling Number Ticker with 60fps GPU Acceleration */}
                  <div
                    style={{
                      fontSize: "clamp(2.4rem, 3.5vw, 3.1rem)",
                      fontWeight: 800,
                      color: isLight ? stat.lightColor : stat.gradientColor,
                      lineHeight: 1.15,
                      marginBottom: "0.5rem",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    <RollingNumberTicker text={stat.count} start={statsInView} />
                  </div>

                  {/* Label */}
                  <div
                    style={{
                      fontSize: "1.02rem",
                      fontWeight: 750,
                      color: isLight ? "#0f172a" : "#f8fafc",
                      lineHeight: 1.4,
                      margin: 0,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. OPASH SOFTWARE – OUR JOURNEY (MILESTONES & VISION/MISSION/VALUES)   */}
      {/* ===================================================================== */}
      <section
        id="journey"
        style={{
          padding: "6.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#ffffff" : "rgba(8, 16, 28, 0.6)",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* ============================================================= */}
          {/* 1. PROGRESS BAR TRACK & STEPPER NODES                        */}
          {/* ============================================================= */}
          <div
            style={{
              width: "100%",
              maxWidth: "1020px",
              margin: "0 auto 1.5rem auto",
              padding: "1.5rem clamp(1rem, 4vw, 3.5rem) 5.5rem clamp(1rem, 4vw, 3.5rem)",
              position: "relative",
              boxSizing: "border-box",
            }}
          >
            {/* Base Track Rail */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "5px",
                borderRadius: "9999px",
                background: isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.12)",
              }}
            >
              {/* Active Filled Progress Line */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: `${(activeMilestoneIndex / (PROGRESS_MILESTONES.length - 1)) * 100}%`,
                  background: "linear-gradient(90deg, #00A88F 0%, #00BFA5 50%, #2DD4BF 100%)",
                  borderRadius: "9999px",
                  boxShadow: "0 0 14px rgba(45, 212, 191, 0.6)",
                  transition: "width 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />

              {/* Stepper Nodes */}
              {PROGRESS_MILESTONES.map((milestone, idx) => {
                const isCompleted = idx < activeMilestoneIndex;
                const isActive = idx === activeMilestoneIndex;
                const percentage = (idx / (PROGRESS_MILESTONES.length - 1)) * 100;
                const IconNode = milestone.icon;

                return (
                  <div
                    key={milestone.year}
                    onClick={() => {
                      setActiveMilestoneIndex(idx);
                    }}
                    style={{
                      position: "absolute",
                      left: `${percentage}%`,
                      top: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      cursor: "pointer",
                      zIndex: 5,
                    }}
                  >
                    {/* Circle Node Container */}
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        marginTop: "-24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        type="button"
                        style={{
                          width: isActive ? "44px" : "32px",
                          height: isActive ? "44px" : "32px",
                          borderRadius: "50%",
                          border: isActive
                            ? `3px solid ${isLight ? "#ffffff" : "#0A1424"}`
                            : isCompleted
                              ? `2px solid ${isLight ? "#ffffff" : "#0A1424"}`
                              : `2px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.2)"}`,
                          background: isActive
                            ? "#00A88F"
                            : isCompleted
                              ? "#00A88F"
                              : isLight
                                ? "#ffffff"
                                : "#152136",
                          color: isActive || isCompleted ? "#ffffff" : isLight ? "#64748b" : "#94a3b8",
                          boxShadow: isActive
                            ? "0 0 24px rgba(45, 212, 191, 0.75), 0 4px 12px rgba(0,0,0,0.3)"
                            : isCompleted
                              ? "0 0 10px rgba(0, 168, 143, 0.35)"
                              : "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                        aria-label={`Jump to milestone ${milestone.year}`}
                      >
                        {isCompleted ? (
                          <Check size={16} strokeWidth={2.8} />
                        ) : isActive ? (
                          <IconNode size={22} strokeWidth={2.2} />
                        ) : (
                          <IconNode size={14} strokeWidth={2} style={{ opacity: 0.65 }} />
                        )}
                      </button>
                    </div>

                    {/* Year & Badge Labels */}
                    <div
                      style={{
                        marginTop: "12px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        whiteSpace: "nowrap",
                        userSelect: "none",
                      }}
                    >
                      <span
                        style={{
                          fontSize: isActive ? "1rem" : "0.86rem",
                          fontWeight: isActive ? 800 : 600,
                          color: isActive
                            ? isLight ? "#008a75" : "#2dd4bf"
                            : isCompleted
                              ? isLight ? "#0f172a" : "#f1f5f9"
                              : isLight ? "#64748b" : "#94a3b8",
                          transition: "all 0.25s ease",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {milestone.year}
                      </span>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          padding: "3px 9px",
                          borderRadius: "9999px",
                          background: isActive
                            ? isLight ? "rgba(0, 168, 143, 0.14)" : "rgba(45, 212, 191, 0.16)"
                            : isLight ? "rgba(241, 245, 249, 0.9)" : "rgba(255, 255, 255, 0.05)",
                          color: isActive
                            ? isLight ? "#008a75" : "#2dd4bf"
                            : isLight ? "#64748b" : "#94a3b8",
                          marginTop: "4px",
                          border: isActive
                            ? `1px solid ${isLight ? "rgba(0, 168, 143, 0.35)" : "rgba(45, 212, 191, 0.4)"}`
                            : isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                          transition: "all 0.25s ease",
                        }}
                      >
                        {milestone.badge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ============================================================= */}
          {/* 2. ACTIVE MILESTONE SHOWCASE CARD                           */}
          {/* ============================================================= */}
          {(() => {
            const current = PROGRESS_MILESTONES[activeMilestoneIndex];
            const IconComp = current.icon;

            return (
              <div
                onMouseEnter={() => setIsTimelinePaused(true)}
                onMouseLeave={() => setIsTimelinePaused(false)}
                style={{
                  maxWidth: "1020px",
                  margin: "0 auto 4.5rem auto",
                  padding: "clamp(2rem, 4vw, 3.25rem) clamp(1.5rem, 4vw, 3.25rem)",
                  borderRadius: "28px",
                  background: isLight
                    ? "#ffffff"
                    : "linear-gradient(135deg, rgba(15, 23, 42, 0.88) 0%, rgba(10, 18, 34, 0.96) 100%)",
                  border: `1.5px solid ${isLight ? "rgba(0, 168, 143, 0.25)" : "rgba(45, 212, 191, 0.28)"}`,
                  boxShadow: isLight
                    ? "0 16px 48px rgba(0, 168, 143, 0.1), 0 4px 16px rgba(0, 0, 0, 0.04)"
                    : "0 24px 60px rgba(0, 0, 0, 0.5), 0 0 35px rgba(0, 168, 143, 0.18)",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "2.5rem",
                  flexWrap: "wrap",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                }}
              >
                {/* Ambient Corner Glow Accent */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "220px",
                    height: "220px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, rgba(0, 168, 143, ${isLight ? 0.12 : 0.22}) 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Left Content Column */}
                <div
                  key={`content-${activeMilestoneIndex}`}
                  style={{
                    flex: "1 1 520px",
                    minWidth: "280px",
                    position: "relative",
                    zIndex: 2,
                    animation: "milestoneSlideIn 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Top Badge & Stage Progress */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      flexWrap: "wrap",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "2.5rem",
                        fontWeight: 900,
                        fontFamily: "var(--font-heading), sans-serif",
                        color: isLight ? "#008a75" : "#2dd4bf",
                        lineHeight: 1,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {current.year}
                    </span>

                    <span
                      style={{
                        padding: "0.35rem 0.95rem",
                        borderRadius: "9999px",
                        background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(45, 212, 191, 0.16)",
                        color: isLight ? "#008a75" : "#2dd4bf",
                        fontWeight: 750,
                        fontSize: "0.82rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        border: `1px solid ${isLight ? "rgba(0, 168, 143, 0.3)" : "rgba(45, 212, 191, 0.35)"}`,
                      }}
                    >
                      {current.badge}
                    </span>

                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: isLight ? "#64748b" : "#94a3b8",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      • Milestone {activeMilestoneIndex + 1} of {PROGRESS_MILESTONES.length}
                    </span>
                  </div>

                  {/* Milestone Title */}
                  <h3
                    style={{
                      fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                      fontWeight: 850,
                      marginBottom: "1rem",
                      lineHeight: 1.25,
                      color: isLight ? "#0f172a" : "#ffffff",
                    }}
                  >
                    {current.title}
                  </h3>

                  {/* Description Paragraph */}
                  <p
                    style={{
                      color: isLight ? "#475569" : "#cbd5e1",
                      fontSize: "1.05rem",
                      lineHeight: 1.7,
                      marginBottom: "1.5rem",
                      maxWidth: "680px",
                    }}
                  >
                    {current.description}
                  </p>

                  {/* Metrics & Deliverables */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.25rem",
                      flexWrap: "wrap",
                      margin: 0,
                    }}
                  >
                    {current.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          color: isLight ? "#334155" : "#e2e8f0",
                          fontSize: "0.88rem",
                          fontWeight: 650,
                        }}
                      >
                        <CheckCircle2 size={17} style={{ color: isLight ? "#008a75" : "#2dd4bf", flexShrink: 0 }} />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side Visual Icon Pod (Set on the right side next to 2025) */}
                <div
                  key={`icon-${activeMilestoneIndex}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 2,
                    animation: "milestoneSlideIn 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div
                    style={{
                      width: "130px",
                      height: "130px",
                      borderRadius: "26px",
                      background: isLight
                        ? "linear-gradient(135deg, #ffffff 0%, rgba(0, 168, 143, 0.08) 100%)"
                        : "linear-gradient(135deg, rgba(30, 41, 59, 0.85) 0%, rgba(0, 168, 143, 0.2) 100%)",
                      border: `1.5px solid ${isLight ? "rgba(0, 168, 143, 0.3)" : "rgba(45, 212, 191, 0.35)"}`,
                      boxShadow: `0 14px 32px rgba(0, 168, 143, ${isLight ? 0.15 : 0.25})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isLight ? "#008a75" : "#2dd4bf",
                      transition: "all 0.4s ease",
                    }}
                  >
                    <IconComp size={58} strokeWidth={1.8} />
                  </div>

                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 750,
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(45, 212, 191, 0.16)",
                      color: isLight ? "#008a75" : "#2dd4bf",
                      border: `1px solid ${isLight ? "rgba(0, 168, 143, 0.25)" : "rgba(45, 212, 191, 0.3)"}`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {current.kpi}
                  </span>
                </div>
              </div>
            );
          })()}

          {/* 3 Foundational Cards: Vision, Mission & Core Values */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: "2rem",
            }}
          >
            {/* Vision Card */}
            <div
              style={{
                padding: "2.5rem 2rem",
                borderRadius: "22px",
                background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.75)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(0, 168, 143, 0.25)",
                boxShadow: isLight ? "0 6px 25px rgba(0, 0, 0, 0.04)" : "0 10px 35px rgba(0, 0, 0, 0.35)",
              }}
            >
              <Freestanding3DIcon
                icon={Lightbulb}
                accent={isLight ? "#008a75" : "#00ffd1"}
                size={44}
                style={{ marginBottom: "1.25rem" }}
              />
              <h3 style={{ fontSize: "1.45rem", fontWeight: 800, marginTop: 0, marginBottom: "1rem", color: isLight ? "#0f172a" : "#ffffff" }}>
                Empowering Ideas. Transforming Futures.
              </h3>
              <p style={{ color: isLight ? "#475569" : "#94a3b8", lineHeight: 1.7, fontSize: "0.98rem" }}>
                At Opash Software, our vision is to empower innovators, startups, and enterprises by blending cutting-edge technology with bold ideas. We strive to be a catalyst for digital transformation, helping businesses create meaningful change in the world through impactful, scalable software solutions.
              </p>
            </div>

            {/* Mission Card */}
            <div
              style={{
                padding: "2.5rem 2rem",
                borderRadius: "22px",
                background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.75)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(2, 132, 199, 0.25)",
                boxShadow: isLight ? "0 6px 25px rgba(0, 0, 0, 0.04)" : "0 10px 35px rgba(0, 0, 0, 0.35)",
              }}
            >
              <Freestanding3DIcon
                icon={Rocket}
                accent={isLight ? "#7c3aed" : "#c084fc"}
                size={44}
                style={{ marginBottom: "1.25rem" }}
              />
              <h3 style={{ fontSize: "1.45rem", fontWeight: 800, marginTop: 0, marginBottom: "1rem", color: isLight ? "#0f172a" : "#ffffff" }}>
                Delivering Innovation with Precision & Passion.
              </h3>
              <p style={{ color: isLight ? "#475569" : "#94a3b8", lineHeight: 1.7, fontSize: "0.98rem" }}>
                Our mission is to provide tailor-made, high-performance IT solutions that deliver measurable business value. We are committed to achieving client satisfaction through quality, transparency, and timely delivery, ensuring every project we undertake exceeds expectations and drives growth.
              </p>
            </div>

            {/* Core Values Card */}
            <div
              style={{
                padding: "2.5rem 2rem",
                borderRadius: "22px",
                background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.75)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(16, 185, 129, 0.25)",
                boxShadow: isLight ? "0 6px 25px rgba(0, 0, 0, 0.04)" : "0 10px 35px rgba(0, 0, 0, 0.35)",
              }}
            >
              <Freestanding3DIcon
                icon={Handshake}
                accent={isLight ? "#059669" : "#10b981"}
                size={44}
                style={{ marginBottom: "1.25rem" }}
              />
              <h3 style={{ fontSize: "1.45rem", fontWeight: 800, marginTop: 0, marginBottom: "1rem", color: isLight ? "#0f172a" : "#ffffff" }}>
                Principles That Guide Every Sprint
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {[
                  { title: "Integrity First:", desc: "Honesty and transparency in all we do." },
                  { title: "Innovation-Driven:", desc: "Continuously pushing boundaries with new ideas." },
                  { title: "Client-Centric Approach:", desc: "We build solutions around your goals." },
                  { title: "On-Time, Every Time:", desc: "We respect your time and timelines." },
                  { title: "Collaboration Culture:", desc: "Great results come from great teamwork." },
                ].map((val, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.92rem", lineHeight: 1.5 }}>
                    <Check size={16} style={{ color: "#10b981", flexShrink: 0, marginTop: "0.2rem" }} />
                    <span>
                      <strong style={{ color: isLight ? "#0f172a" : "#ffffff" }}>{val.title}</strong>{" "}
                      <span style={{ color: isLight ? "#64748b" : "#94a3b8" }}>{val.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. WHAT MAKES OPASH SOFTWARE UNIQUE (WHY CHOOSE US)                   */}
      {/* ===================================================================== */}
      <section
        id="why-choose-us"
        style={{
          padding: "6.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f8fafc" : "#020712",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 4rem auto" }}>
            <h2
              className="heading-section"
              style={{
                fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', serif",
                fontSize: "clamp(2.4rem, 4.5vw, 52px)",
                color: isLight ? "#102033" : "#ffffff",
                marginBottom: "1rem",
              }}
            >
              What Makes Opash Software <span className="opash-hero-gradient-text">Unique</span>
            </h2>
            <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "1.05rem", lineHeight: 1.65 }}>
              Engineered for velocity, scalability, and predictable quality across every product milestone.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: "1.75rem",
            }}
          >
            {UNIQUE_DIFFERENTIATORS.map((diff, idx) => (
              <div
                key={idx}
                style={{
                  padding: "2rem 1.75rem",
                  borderRadius: "20px",
                  background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.75)",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                {/* Header row: Icon on the left, Heading on the right */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Freestanding3DIcon
                    icon={diff.icon}
                    accent={diff.accent}
                    size={38}
                    style={{ marginBottom: 0 }}
                  />
                  <h3
                    style={{
                      fontSize: "1.32rem",
                      fontWeight: 700,
                      margin: 0,
                      color: isLight ? "#0f172a" : "#ffffff",
                      lineHeight: 1.25,
                    }}
                  >
                    {diff.title}
                  </h3>
                </div>
                <p style={{ color: isLight ? "#475569" : "#94a3b8", lineHeight: 1.65, fontSize: "0.96rem", margin: 0 }}>
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. MEET OUR CEO – HIREN DANECHA                                       */}
      {/* ===================================================================== */}
      <section
        id="leadership"
        style={{
          padding: "6.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#ffffff" : "rgba(8, 16, 28, 0.6)",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          {/* Executive Founder Bento Container */}
          <div
            style={{
              position: "relative",
              padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.75rem, 4.5vw, 3.5rem)",
              borderRadius: "28px",
              background: isLight
                ? "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)"
                : "linear-gradient(145deg, rgba(13, 23, 42, 0.85) 0%, rgba(8, 14, 28, 0.95) 100%)",
              border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(0, 255, 209, 0.22)",
              boxShadow: isLight
                ? "0 20px 50px -15px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 168, 143, 0.08)"
                : "0 30px 80px -20px rgba(0, 0, 0, 0.8), 0 0 40px -10px rgba(0, 255, 209, 0.12)",
              overflow: "hidden",
            }}
          >
            {/* Top Laser Accent Beam */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "8%",
                right: "8%",
                height: "2px",
                background: isLight
                  ? "linear-gradient(90deg, transparent, #00a88f 50%, transparent)"
                  : "linear-gradient(90deg, transparent, #00ffd1 50%, transparent)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
                gap: "clamp(2.5rem, 4vw, 4rem)",
                alignItems: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Left Column: Vision, Bio & Direct Action */}
              <div>
                <h2
                  className="heading-section"
                  style={{
                    fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', serif",
                    fontSize: "clamp(2.1rem, 3.8vw, 44px)",
                    color: isLight ? "#102033" : "#ffffff",
                    marginBottom: "0.5rem",
                    lineHeight: 1.18,
                  }}
                >
                  Meet Our CEO <span className="opash-hero-gradient-text">– Hiren Danecha</span>
                </h2>

                <div
                  style={{
                    color: isLight ? "#008a75" : "#2dd4bf",
                    fontSize: "1.02rem",
                    fontWeight: 700,
                    marginBottom: "1.75rem",
                  }}
                >
                  Founder &amp; CEO &bull; 10+ Years in Full-Stack Development &amp; Product Strategy
                </div>

                {/* Luxury Glassmorphic Quote Box */}
                <div
                  style={{
                    padding: "1.5rem 1.75rem",
                    borderRadius: "18px",
                    background: isLight ? "rgba(241, 245, 249, 0.85)" : "rgba(15, 23, 42, 0.65)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(0, 255, 209, 0.2)",
                    borderLeft: `4px solid ${isLight ? "#00a88f" : "#00ffd1"}`,
                    marginBottom: "1.75rem",
                    position: "relative",
                  }}
                >
                  <Quote
                    size={28}
                    style={{
                      position: "absolute",
                      top: "14px",
                      right: "16px",
                      opacity: isLight ? 0.15 : 0.2,
                      color: isLight ? "#00a88f" : "#00ffd1",
                      pointerEvents: "none",
                    }}
                  />
                  <p
                    style={{
                      fontStyle: "italic",
                      fontSize: "1.04rem",
                      lineHeight: 1.65,
                      color: isLight ? "#1e293b" : "#f1f5f9",
                      margin: "0 0 0.5rem 0",
                      fontWeight: 500,
                    }}
                  >
                    &ldquo;We don’t just build software—we build long-term partnerships powered by innovation, reliability, and mutual growth.&rdquo;
                  </p>
                  <div
                    style={{
                      fontSize: "0.86rem",
                      fontWeight: 750,
                      color: isLight ? "#008a75" : "#00ffd1",
                      letterSpacing: "0.02em",
                    }}
                  >
                    — Hiren Danecha, CEO
                  </div>
                </div>

                {/* Narrative Paragraphs */}
                <p
                  style={{
                    color: isLight ? "#475569" : "#cbd5e1",
                    lineHeight: 1.72,
                    fontSize: "0.98rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  With a passion for innovation and a deep-rooted belief in the power of technology, Hiren Danecha founded Opash Software to help startups and enterprises turn bold ideas into scalable digital solutions. Backed by 10+ years of experience in full-stack development and product strategy, Hiren leads the company with a clear vision: to deliver high-performance, custom-built software that creates real business impact.
                </p>

                <p
                  style={{
                    color: isLight ? "#64748b" : "#94a3b8",
                    lineHeight: 1.72,
                    fontSize: "0.98rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  Under his leadership, Opash Software has grown into a trusted tech partner for clients across the US, Europe, and Asia—known for its transparency, agility, and results-driven approach.
                </p>

                {/* Executive Competency Badges */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.65rem",
                    marginBottom: "2rem",
                  }}
                >
                  {[
                    { label: "Tech Strategist", icon: <Code2 size={13} /> },
                    { label: "Startup Mentor", icon: <Rocket size={13} /> },
                    { label: "Product Builder", icon: <Layers size={13} /> },
                  ].map((item) => (
                    <span
                      key={item.label}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "0.45rem 0.95rem",
                        borderRadius: "9999px",
                        background: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                        color: isLight ? "#334155" : "#cbd5e1",
                        fontSize: "0.82rem",
                        fontWeight: 650,
                        border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <span style={{ color: isLight ? "#008a75" : "#00ffd1" }}>{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                  ))}
                </div>

                {/* Dual Action CTAs */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                >
                  <Link
                    href="/get-a-quote"
                    className="hero-brand-primary-btn opash-roll-btn"
                  >
                    <span className="opash-roll-track">
                      <span className="opash-roll-item">
                        <span>Schedule Intro Call with CEO</span>
                        <ArrowRight size={15} className="hero-btn-arrow" />
                      </span>
                      <span className="opash-roll-item" aria-hidden="true">
                        <span>Schedule Intro Call with CEO</span>
                        <ArrowRight size={15} className="hero-btn-arrow" />
                      </span>
                    </span>
                  </Link>

                  <a
                    href={companyData.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-brand-secondary-btn opash-roll-btn"
                  >
                    <span className="opash-roll-track">
                      <span className="opash-roll-item">
                        <MessageCircle size={15} className="hero-wa-icon" />
                        <span>WhatsApp Direct</span>
                      </span>
                      <span className="opash-roll-item" aria-hidden="true">
                        <MessageCircle size={15} className="hero-wa-icon" />
                        <span>WhatsApp Direct</span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              {/* Right Column: High-End CEO Portrait Showcase */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Soft Radiant Ambient Glow behind Portrait */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "420px",
                    height: "480px",
                    borderRadius: "50%",
                    background: isLight
                      ? "radial-gradient(circle, rgba(0, 168, 143, 0.25) 0%, rgba(14, 165, 233, 0.16) 45%, transparent 70%)"
                      : "radial-gradient(circle, rgba(0, 255, 209, 0.22) 0%, transparent 70%)",
                    filter: isLight ? "blur(40px)" : "blur(50px)",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />



                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    borderRadius: "26px",
                    overflow: "hidden",
                    border: isLight
                      ? "2px solid rgba(0, 168, 143, 0.3)"
                      : "1px solid rgba(0, 255, 209, 0.35)",
                    boxShadow: isLight
                      ? "0 25px 60px -12px rgba(0, 168, 143, 0.18), 0 10px 25px -5px rgba(0, 0, 0, 0.08)"
                      : "0 30px 70px -15px rgba(0, 0, 0, 0.8), 0 0 35px -5px rgba(0, 255, 209, 0.2)",
                    maxWidth: "380px",
                    width: "100%",
                    background: isLight
                      ? "linear-gradient(160deg, #f0fdfa 0%, #ffffff 40%, #f1f5f9 100%)"
                      : "#020712",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  {/* Floating Verified Founder Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      right: "14px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 12px",
                      borderRadius: "9999px",
                      background: isLight ? "rgba(255, 255, 255, 0.92)" : "rgba(2, 7, 18, 0.8)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: isLight
                        ? "1px solid rgba(0, 168, 143, 0.35)"
                        : "1px solid rgba(0, 255, 209, 0.4)",
                      color: isLight ? "#008a75" : "#00ffd1",
                      fontSize: "0.76rem",
                      fontWeight: 750,
                      zIndex: 3,
                      boxShadow: isLight ? "0 4px 12px rgba(0, 168, 143, 0.15)" : "none",
                    }}
                  >
                    <CheckCircle2 size={13} />
                    <span>Verified Founder</span>
                  </div>

                  {/* CEO Photo */}
                  <div style={{ position: "relative", width: "100%", height: "420px" }}>
                    <Image
                      src={isLight ? "/images/image-light.webp" : "/images/image-dark.webp"}
                      alt="Hiren Danecha - Founder & CEO"
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      style={{
                        objectFit: "cover",
                        objectPosition: "top center",
                      }}
                      priority
                    />
                  </div>

                  {/* Gradient Card Footer with LinkedIn action */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "1.75rem 1.5rem 1.25rem 1.5rem",
                      background: isLight
                        ? "linear-gradient(to top, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.88) 60%, transparent 100%)"
                        : "linear-gradient(to top, rgba(2, 7, 18, 0.98) 0%, rgba(2, 7, 18, 0.8) 65%, transparent 100%)",
                      color: isLight ? "#0f172a" : "#ffffff",
                      textAlign: "left",
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: "1.35rem",
                        letterSpacing: "-0.015em",
                        marginBottom: "2px",
                        color: isLight ? "#0f172a" : "#ffffff",
                      }}
                    >
                      Hiren Danecha
                    </div>
                    <div
                      style={{
                        fontSize: "0.86rem",
                        color: isLight ? "#008a75" : "#00ffd1",
                        fontWeight: 650,
                        marginBottom: "1rem",
                      }}
                    >
                      Founder &amp; CEO, Opash Software
                    </div>

                    {/* Quick Direct Actions on Card */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.65rem",
                      }}
                    >
                      <a
                        href="https://in.linkedin.com/company/opash-software"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                          padding: "7px 12px",
                          borderRadius: "10px",
                          background: isLight ? "rgba(2, 132, 199, 0.12)" : "rgba(14, 165, 233, 0.18)",
                          border: isLight
                            ? "1px solid rgba(2, 132, 199, 0.35)"
                            : "1px solid rgba(56, 189, 248, 0.4)",
                          color: isLight ? "#0284c7" : "#38bdf8",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          textDecoration: "none",
                        }}
                      >
                        <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63Z" />
                        </svg>
                        <span>Connect on LinkedIn</span>
                      </a>

                      <a
                        href="mailto:hiren@opashsoftware.com"
                        aria-label="Email Hiren Danecha"
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: "10px",
                          background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.1)",
                          border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: isLight ? "#334155" : "#ffffff",
                          textDecoration: "none",
                        }}
                      >
                        <Mail size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. OUR SERVICES (VERIFIED 6 SERVICES FROM LIVE SITE)                  */}
      {/* ===================================================================== */}
      <section
        id="services"
        style={{
          padding: "6.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f8fafc" : "#020712",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "840px", margin: "0 auto 4rem auto" }}>
            <h2
              className="heading-section"
              style={{
                fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 39px)",
                color: isLight ? "#102033" : "#ffffff",
                marginBottom: "1rem",
              }}
            >
              Our <span className="opash-hero-gradient-text">Services</span>
            </h2>
            <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "1.05rem", lineHeight: 1.65 }}>
              We create highly responsive applications with the remarkable aesthetics that deliver a spectrum of result oriented digital experience.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: "2rem",
            }}
          >
            {CORE_SERVICES.map((srv) => (
              <div
                key={srv.id}
                style={{
                  padding: "2.5rem 2.25rem",
                  borderRadius: "22px",
                  background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.75)",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 30px rgba(0, 0, 0, 0.35)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "14px",
                      background: isLight ? "rgba(0, 168, 143, 0.08)" : "rgba(45, 212, 191, 0.12)",
                      color: srv.accent,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.35rem",
                    }}
                  >
                    <srv.icon size={26} />
                  </div>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.85rem", color: isLight ? "#0f172a" : "#ffffff" }}>
                    {srv.title}
                  </h3>
                  <p style={{ color: isLight ? "#475569" : "#94a3b8", lineHeight: 1.7, fontSize: "0.96rem", marginBottom: "1.5rem" }}>
                    {srv.description}
                  </p>
                </div>
                <Link
                  href={srv.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: isLight ? "#008a75" : "#2dd4bf",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    textDecoration: "none",
                  }}
                >
                  <span>Explore Service</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. WHAT OUR CLIENTS SAY ABOUT US (TESTIMONIALS SLIDER - HOME STYLE)   */}
      {/* ===================================================================== */}
      <section
        id="testimonials"
        className="section-alt"
        style={{
          padding: "7.5rem 1.5rem 6.5rem 1.5rem",
          position: "relative",
          overflow: "hidden",
          scrollMarginTop: "100px",
        }}
      >
        {/* Unified Ambient Backdrop with Seamless Feather Melts */}
        <TestimonialsCreativeBackdrop isLightMode={isLight} />

        <div className="container-custom" style={{ maxWidth: "1320px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: "840px", margin: "0 auto 3.5rem auto" }}>
            <h2
              className="heading-section"
              style={{
                fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 39px)",
                color: isLight ? "#102033" : "#ffffff",
                marginBottom: "1rem",
              }}
            >
              What Our Clients Say <span className="opash-hero-gradient-text">About Us</span>
            </h2>
            <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "1.05rem", lineHeight: 1.65 }}>
              Genuine testimonials from founders, CTOs, and global innovators who trust Opash Software.
            </p>
          </div>

          <TestimonialsSlider />
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 7. CONNECT WITH OPASH SOFTWARE / GET A QUOTE                          */}
      {/* ===================================================================== */}
      <section
        id="contact"
        style={{
          padding: "6.5rem 1.5rem",
          position: "relative",
          background: isLight ? "#f8fafc" : "#020712",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "980px", margin: "0 auto 4rem auto" }}>
            <OuiWillHeadline
              as="h2"
              className="heading-section"
              style={{
                fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', serif",
                fontSize: "clamp(2.1rem, 3.8vw, 44px)",
                lineHeight: 1.22,
                color: isLight ? "#102033" : "#ffffff",
                marginBottom: "1.25rem",
                textAlign: "center",
              }}
            >
              <span style={{ display: "block" }}>
                <OuiWillWord index={0}>Connect</OuiWillWord>{" "}
                <OuiWillWord index={1}>with</OuiWillWord>{" "}
                <OuiWillWord index={2}>Opash</OuiWillWord>{" "}
                <OuiWillWord index={3}>Software’s</OuiWillWord>
              </span>
              <span
                style={{
                  display: "block",
                  marginTop: "0.35rem",
                }}
              >
                <OuiWillWord index={4} isGradient>
                  Expert Development Team
                </OuiWillWord>{" "}
                <OuiWillWord index={5}>Today</OuiWillWord>
                <OuiWillDot />
              </span>
            </OuiWillHeadline>

            <p
              style={{
                color: isLight ? "#64748b" : "#94a3b8",
                fontSize: "clamp(1rem, 1.4vw, 1.12rem)",
                lineHeight: 1.65,
                maxWidth: "680px",
                margin: "0 auto",
              }}
            >
              From trends to transformations — we deliver what’s next in tech, directly to you.
            </p>
          </div>

          <div
            style={{
              maxWidth: "960px",
              margin: "0 auto",
              background: isLight ? "#ffffff" : "rgba(10, 20, 36, 0.8)",
              borderRadius: "28px",
              padding: "3rem 2.5rem",
              border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: isLight ? "0 10px 40px rgba(0, 0, 0, 0.04)" : "0 20px 60px rgba(0, 0, 0, 0.45)",
            }}
          >
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
