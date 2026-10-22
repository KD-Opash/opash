"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { Trophy, Sparkles, ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";

interface AchievementStat {
  icon: string;
  count: string;
  label: string;
  pillarNum: string;
  pillarTag: string;
  accentColor: string;
  glowColor: string;
  gradientText: string;
  accentRgb: string;
  specPill: string;
  detail: string;
}

const STATS_DATA: AchievementStat[] = [
  {
    icon: "/images/achievements/it-professionals.svg",
    count: "50+",
    label: "Experienced Software Developers",
    pillarNum: "01",
    pillarTag: "ENGINEERING BENCH",
    accentColor: "#FF4D79",
    glowColor: "rgba(255, 77, 121, 0.3)",
    gradientText: "linear-gradient(135deg, #FFFFFF 20%, #FF8FA3 100%)",
    accentRgb: "255, 77, 121",
    specPill: "Vetted Top 1% Engineers",
    detail: "Full-Stack, Mobile & AI Solutions Specialists",
  },
  {
    icon: "/images/achievements/projects-completed.svg",
    count: "70+",
    label: "Custom Software Projects Delivered",
    pillarNum: "02",
    pillarTag: "PRODUCTION PLATFORMS",
    accentColor: "#00A3FF",
    glowColor: "rgba(0, 163, 255, 0.3)",
    gradientText: "linear-gradient(135deg, #FFFFFF 20%, #70C9FF 100%)",
    accentRgb: "0, 163, 255",
    specPill: "100% On-Time Sprints",
    detail: "Global Startups, Scale-ups & Enterprises",
  },
  {
    icon: "/images/achievements/freelance-hours.svg",
    count: "12,000+",
    label: "Hours of Project Execution",
    pillarNum: "03",
    pillarTag: "SPRINT VELOCITY",
    accentColor: "#A855F7",
    glowColor: "rgba(168, 85, 247, 0.3)",
    gradientText: "linear-gradient(135deg, #FFFFFF 20%, #D8B4FE 100%)",
    accentRgb: "168, 85, 247",
    specPill: "Agile CI/CD Cadence",
    detail: "Zero-Downtime Deployment Lifecycle",
  },
  {
    icon: "/images/achievements/years-experience.svg",
    count: "8+",
    label: "Years of Industry Experience in IT",
    pillarNum: "04",
    pillarTag: "ENTERPRISE MATURITY",
    accentColor: "#5EC098",
    glowColor: "rgba(94, 192, 152, 0.3)",
    gradientText: "linear-gradient(135deg, #FFFFFF 20%, #A7F3D0 100%)",
    accentRgb: "94, 192, 152",
    specPill: "ISO-Grade Reliability",
    detail: "Established Global Technology Partner",
  },
];

export default function OurAchievementsSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="our-achievements"
      aria-label="Our Achievements"
      style={{
        position: "relative",
        padding: "7rem 0 7.5rem 0",
        background: isLight
          ? "linear-gradient(180deg, rgba(241, 245, 249, 0.6) 0%, rgba(255, 255, 255, 0.98) 25%, rgba(248, 250, 252, 0.98) 75%, rgba(241, 245, 249, 0.6) 100%)"
          : "linear-gradient(180deg, rgba(10, 18, 34, 0.6) 0%, rgba(6, 14, 30, 0.9) 25%, rgba(8, 17, 36, 0.9) 75%, rgba(10, 18, 34, 0.6) 100%)",
        overflow: "hidden",
        borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* 1. Luminous Horizon Accent Beam across the top */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "1320px",
          height: "1px",
          background: isLight
            ? "linear-gradient(90deg, transparent 0%, rgba(71, 109, 154, 0.25) 20%, rgba(0, 168, 143, 0.85) 50%, rgba(71, 109, 154, 0.25) 80%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(71, 109, 154, 0.35) 20%, rgba(94, 192, 152, 0.95) 50%, rgba(98, 137, 184, 0.4) 80%, transparent 100%)",
          boxShadow: isLight
            ? "0 0 16px rgba(0, 168, 143, 0.3)"
            : "0 0 25px rgba(94, 192, 152, 0.5), 0 0 10px rgba(71, 109, 154, 0.35)",
          zIndex: 1,
        }}
      />

      {/* 2. Full Edge-to-Edge Ambient Radiant Lighting */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: isLight
            ? `
              radial-gradient(ellipse 90% 60% at 50% 0%, rgba(71, 109, 154, 0.08) 0%, transparent 75%),
              radial-gradient(ellipse 70% 50% at 5% 45%, rgba(0, 168, 143, 0.07) 0%, transparent 65%),
              radial-gradient(ellipse 70% 50% at 95% 45%, rgba(71, 109, 154, 0.07) 0%, transparent 65%)
            `
            : `
              radial-gradient(ellipse 100% 65% at 50% 0%, rgba(71, 109, 154, 0.22) 0%, rgba(94, 192, 152, 0.16) 40%, transparent 75%),
              radial-gradient(ellipse 75% 55% at 0% 45%, rgba(94, 192, 152, 0.18) 0%, transparent 65%),
              radial-gradient(ellipse 75% 55% at 100% 45%, rgba(71, 109, 154, 0.20) 0%, transparent 65%)
            `,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Decorative Geometric Wireframes on Sides */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "440px",
          height: "440px",
          opacity: isLight ? 0.35 : 0.2,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <Image
          src="/images/achievements/achievement-bg1.png"
          alt=""
          fill
          sizes="440px"
          style={{ objectFit: "contain", objectPosition: "top left" }}
        />
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "460px",
          height: "460px",
          opacity: isLight ? 0.35 : 0.2,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <Image
          src="/images/achievements/achievement-bg2.png"
          alt=""
          fill
          sizes="460px"
          style={{ objectFit: "contain", objectPosition: "bottom right" }}
        />
      </div>

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Heading */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.75rem auto" }}>
          {/* Eyebrow badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "9999px",
              background: isLight ? "rgba(0, 168, 143, 0.08)" : "rgba(94, 192, 152, 0.12)",
              border: isLight ? "1px solid rgba(0, 168, 143, 0.25)" : "1px solid rgba(94, 192, 152, 0.3)",
              boxShadow: isLight
                ? "0 2px 10px rgba(0, 168, 143, 0.1)"
                : "0 0 20px rgba(94, 192, 152, 0.15)",
              marginBottom: "1.25rem",
            }}
          >
            <Trophy size={14} color={isLight ? "#00a88f" : "#5EC098"} />
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: isLight ? "#008a75" : "#5EC098",
              }}
            >
              Enterprise Engineering Impact
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2.1rem, 4vw, 3.2rem)",
              fontWeight: 850,
              letterSpacing: "-0.025em",
              color: isLight ? "#03173C" : "#f8fafc",
              marginBottom: "1rem",
              lineHeight: 1.15,
            }}
          >
            Our{" "}
            <span className="opash-brand-gradient-text">
              Achievements
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(1.02rem, 1.3vw, 1.18rem)",
              lineHeight: 1.7,
              color: isLight ? "#535D6D" : "#94a3b8",
              margin: "0 auto",
              maxWidth: "700px",
            }}
          >
            Verifiable milestones that reflect our passion for scalable software architecture and long-term client success.
          </p>
        </div>

        {/* 4 Redesigned Attractive High-Tech Metric Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "1.75rem",
            maxWidth: "1280px",
            margin: "0 auto 4rem auto",
          }}
        >
          {STATS_DATA.map((stat, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: "relative",
                  borderRadius: "24px",
                  padding: "2.25rem 1.6rem 2rem 1.6rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  background: isLight
                    ? "#ffffff"
                    : "rgba(13, 21, 38, 0.78)",
                  border: isLight
                    ? isHovered
                      ? `1.5px solid ${stat.accentColor}`
                      : "1px solid #e2e8f0"
                    : isHovered
                      ? `1.5px solid ${stat.accentColor}`
                      : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isLight
                    ? isHovered
                      ? `0 24px 50px -12px ${stat.glowColor}`
                      : "0 10px 30px -4px rgba(0, 0, 0, 0.05)"
                    : isHovered
                      ? `0 24px 60px -10px ${stat.glowColor}, inset 0 1px 1px rgba(255, 255, 255, 0.15)`
                      : "0 14px 40px -8px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
                  transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  overflow: "hidden",
                  cursor: "default",
                }}
              >
                {/* 1. Ambient Spotlight Glow within Card */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "-20%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "240px",
                    height: "220px",
                    background: `radial-gradient(circle, rgba(${stat.accentRgb}, ${isHovered ? 0.22 : 0.12}) 0%, transparent 70%)`,
                    pointerEvents: "none",
                    transition: "background 0.35s ease",
                  }}
                />

                {/* 2. Top Precision Header Pill */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "1.75rem",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      fontFamily: "ui-monospace, monospace",
                      color: isLight ? "#94a3b8" : "rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    // {stat.pillarNum}
                  </span>

                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 750,
                      letterSpacing: "0.08em",
                      color: stat.accentColor,
                      padding: "3px 10px",
                      borderRadius: "9999px",
                      background: `rgba(${stat.accentRgb}, ${isLight ? 0.08 : 0.14})`,
                      border: `1px solid rgba(${stat.accentRgb}, 0.25)`,
                    }}
                  >
                    {stat.pillarTag}
                  </span>
                </div>

                {/* 3. High-Tech Holographic Orbital Core (Centerpiece) */}
                <div
                  style={{
                    position: "relative",
                    width: "148px",
                    height: "148px",
                    marginBottom: "1.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                  }}
                >
                  {/* Outer Dashed Radar Dial */}
                  <svg
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      transform: isHovered ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                      pointerEvents: "none",
                    }}
                    viewBox="0 0 148 148"
                  >
                    <circle
                      cx="74"
                      cy="74"
                      r="70"
                      stroke={`rgba(${stat.accentRgb}, ${isHovered ? 0.45 : 0.2})`}
                      strokeWidth="1.2"
                      strokeDasharray="4 6"
                      fill="none"
                    />
                    {/* 4 Precision Vernier Tick Marks */}
                    <line x1="74" y1="2" x2="74" y2="7" stroke={stat.accentColor} strokeWidth="1.5" />
                    <line x1="74" y1="141" x2="74" y2="146" stroke={stat.accentColor} strokeWidth="1.5" />
                    <line x1="2" y1="74" x2="7" y2="74" stroke={stat.accentColor} strokeWidth="1.5" />
                    <line x1="141" y1="74" x2="146" y2="74" stroke={stat.accentColor} strokeWidth="1.5" />
                  </svg>

                  {/* Inner Lens Capsule */}
                  <div
                    style={{
                      position: "relative",
                      width: "112px",
                      height: "112px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isLight
                        ? (isHovered ? "#ffffff" : "rgba(241, 245, 249, 0.9)")
                        : (isHovered ? "rgba(10, 18, 34, 0.95)" : "rgba(15, 23, 42, 0.75)"),
                      border: isLight
                        ? `1.5px solid ${isHovered ? stat.accentColor : "#e2e8f0"}`
                        : `1.5px solid ${isHovered ? stat.accentColor : "rgba(255, 255, 255, 0.12)"}`,
                      boxShadow: isHovered
                        ? `0 0 24px rgba(${stat.accentRgb}, 0.3), inset 0 0 12px rgba(${stat.accentRgb}, 0.15)`
                        : "0 8px 20px rgba(0, 0, 0, 0.25)",
                      transition: "all 0.35s ease",
                    }}
                  >
                    {/* Orbiting Satellite Particle 1 */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: stat.accentColor,
                        boxShadow: `0 0 12px ${stat.accentColor}, 0 0 4px #ffffff`,
                        top: isHovered ? "80%" : "6%",
                        left: isHovered ? "80%" : "6%",
                        transition: "top 0.65s cubic-bezier(0.16, 1, 0.3, 1), left 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
                        zIndex: 4,
                      }}
                    />

                    {/* Orbiting Satellite Particle 2 */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: stat.accentColor,
                        boxShadow: `0 0 12px ${stat.accentColor}, 0 0 4px #ffffff`,
                        bottom: isHovered ? "80%" : "6%",
                        right: isHovered ? "80%" : "6%",
                        transition: "bottom 0.65s cubic-bezier(0.16, 1, 0.3, 1), right 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
                        zIndex: 4,
                      }}
                    />

                    {/* SVG Icon */}
                    <div
                      style={{
                        position: "relative",
                        width: "46px",
                        height: "46px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.35s ease",
                        transform: isHovered ? "scale(1.16)" : "scale(1)",
                        filter: isHovered ? `drop-shadow(0 0 8px rgba(${stat.accentRgb}, 0.5))` : "none",
                      }}
                    >
                      <Image
                        src={stat.icon}
                        alt=""
                        width={46}
                        height={46}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Display Counter Number (Futuristic Typography) */}
                <div
                  style={{
                    fontSize: "clamp(2.4rem, 3.2vw, 2.9rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    lineHeight: 1.05,
                    marginBottom: "0.6rem",
                    color: isLight ? "#03173C" : "#ffffff",
                    textShadow: isLight
                      ? "none"
                      : isHovered
                        ? `0 0 20px rgba(${stat.accentRgb}, 0.5)`
                        : `0 0 12px rgba(${stat.accentRgb}, 0.25)`,
                    transition: "text-shadow 0.3s ease",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {stat.count}
                </div>

                {/* 5. Stat Title Label */}
                <div
                  style={{
                    fontSize: "1.02rem",
                    fontWeight: 750,
                    color: isLight ? "#0f172a" : "#f1f5f9",
                    lineHeight: 1.35,
                    marginBottom: "0.5rem",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {stat.label}
                </div>

                {/* 6. Context Description */}
                <div
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: isLight ? "#64748b" : "#94a3b8",
                    lineHeight: 1.45,
                    marginBottom: "1.5rem",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {stat.detail}
                </div>

                {/* 7. Bottom Verification Telemetry Chip */}
                <div
                  style={{
                    marginTop: "auto",
                    width: "100%",
                    padding: "0.5rem 0.8rem",
                    borderRadius: "12px",
                    background: isLight
                      ? "rgba(241, 245, 249, 0.8)"
                      : "rgba(10, 18, 34, 0.6)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: isHovered
                      ? `rgba(${stat.accentRgb}, 0.3)`
                      : isLight
                      ? "#e2e8f0"
                      : "rgba(255, 255, 255, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    position: "relative",
                    zIndex: 2,
                    transition: "all 0.3s ease",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: stat.accentColor,
                      boxShadow: `0 0 6px ${stat.accentColor}`,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      color: isLight ? "#334155" : "#cbd5e1",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {stat.specPill}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Executive Methodology Card Below */}
        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            textAlign: "center",
            padding: "2rem 2.5rem",
            borderRadius: "22px",
            background: isLight
              ? "#ffffff"
              : "rgba(13, 21, 38, 0.7)",
            border: isLight
              ? "1px solid #e2e8f0"
              : "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: isLight
              ? "0 10px 30px -4px rgba(0, 0, 0, 0.05)"
              : "0 14px 40px -8px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top glowing laser line inside the card */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "20%",
              right: "20%",
              height: "2px",
              background: isLight
                ? "linear-gradient(90deg, transparent 0%, #00A88F 50%, transparent 100%)"
                : "linear-gradient(90deg, transparent 0%, #5EC098 50%, transparent 100%)",
              opacity: 0.85,
            }}
          />

          <p
            style={{
              fontSize: "clamp(1rem, 1.25vw, 1.12rem)",
              lineHeight: 1.75,
              color: isLight ? "#334155" : "#cbd5e1",
              margin: 0,
            }}
          >
            As a leading custom software development company in India, Opash Software empowers startups, SMEs, and enterprises with scalable Web, Mobile, and AI solutions. Our proven agile methodologies, expert team, and client-first approach ensure quality results and long-term success.
          </p>
        </div>
      </div>
    </section>
  );
}
