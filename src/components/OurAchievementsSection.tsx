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
  gradientTextLight: string;
  gradientTextDark: string;
  accentGradient: string;
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
    accentColor: "#FF3366",
    glowColor: "rgba(255, 51, 102, 0.32)",
    gradientTextLight: "linear-gradient(135deg, #E11D48 0%, #FF3366 50%, #FF6B8B 100%)",
    gradientTextDark: "linear-gradient(135deg, #FFFFFF 15%, #FDA4AF 60%, #FF4D79 100%)",
    accentGradient: "linear-gradient(90deg, #E11D48 0%, #FF3366 50%, #FF6B8B 100%)",
    accentRgb: "255, 51, 102",
    specPill: "Vetted Top 1% Engineers",
    detail: "Full-Stack, Mobile & AI Solutions Specialists",
  },
  {
    icon: "/images/achievements/projects-completed.svg",
    count: "70+",
    label: "Custom Software Projects Delivered",
    pillarNum: "02",
    pillarTag: "PRODUCTION PLATFORMS",
    accentColor: "#0088FF",
    glowColor: "rgba(0, 136, 255, 0.32)",
    gradientTextLight: "linear-gradient(135deg, #0284C7 0%, #0088FF 50%, #38BDF8 100%)",
    gradientTextDark: "linear-gradient(135deg, #FFFFFF 15%, #7DD3FC 60%, #00A3FF 100%)",
    accentGradient: "linear-gradient(90deg, #0284C7 0%, #0088FF 50%, #38BDF8 100%)",
    accentRgb: "0, 136, 255",
    specPill: "100% On-Time Sprints",
    detail: "Global Startups, Scale-ups & Enterprises",
  },
  {
    icon: "/images/achievements/freelance-hours.svg",
    count: "12,000+",
    label: "Hours of Project Execution",
    pillarNum: "03",
    pillarTag: "SPRINT VELOCITY",
    accentColor: "#9333EA",
    glowColor: "rgba(147, 51, 234, 0.32)",
    gradientTextLight: "linear-gradient(135deg, #7E22CE 0%, #9333EA 50%, #C084FC 100%)",
    gradientTextDark: "linear-gradient(135deg, #FFFFFF 15%, #E9D5FF 60%, #A855F7 100%)",
    accentGradient: "linear-gradient(90deg, #7E22CE 0%, #9333EA 50%, #C084FC 100%)",
    accentRgb: "147, 51, 234",
    specPill: "Agile CI/CD Cadence",
    detail: "Zero-Downtime Deployment Lifecycle",
  },
  {
    icon: "/images/achievements/years-experience.svg",
    count: "8+",
    label: "Years of Industry Experience in IT",
    pillarNum: "04",
    pillarTag: "ENTERPRISE MATURITY",
    accentColor: "#059669",
    glowColor: "rgba(5, 150, 105, 0.32)",
    gradientTextLight: "linear-gradient(135deg, #047857 0%, #059669 50%, #34D399 100%)",
    gradientTextDark: "linear-gradient(135deg, #FFFFFF 15%, #A7F3D0 60%, #10B981 100%)",
    accentGradient: "linear-gradient(90deg, #047857 0%, #059669 50%, #34D399 100%)",
    accentRgb: "5, 150, 105",
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
                  borderRadius: "26px",
                  padding: "2.35rem 1.6rem 2rem 1.6rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  background: isLight
                    ? isHovered
                      ? "linear-gradient(180deg, #ffffff 0%, #f8faff 100%)"
                      : "linear-gradient(180deg, #ffffff 0%, #f4f8fd 100%)"
                    : isHovered
                      ? "linear-gradient(180deg, rgba(16, 26, 48, 0.95) 0%, rgba(10, 18, 36, 0.98) 100%)"
                      : "linear-gradient(180deg, rgba(13, 21, 38, 0.85) 0%, rgba(8, 14, 28, 0.92) 100%)",
                  border: isLight
                    ? isHovered
                      ? `1.5px solid ${stat.accentColor}`
                      : "1px solid rgba(226, 232, 240, 0.9)"
                    : isHovered
                      ? `1.5px solid ${stat.accentColor}`
                      : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isLight
                    ? isHovered
                      ? `0 24px 50px -12px ${stat.glowColor}, 0 4px 16px rgba(0,0,0,0.04)`
                      : "0 10px 30px -4px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0,0,0,0.02)"
                    : isHovered
                      ? `0 24px 60px -10px ${stat.glowColor}, inset 0 1px 1px rgba(255, 255, 255, 0.15)`
                      : "0 14px 40px -8px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
                  transform: isHovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  overflow: "hidden",
                  cursor: "default",
                }}
              >
                {/* Top Glowing Laser Accent Beam */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: isHovered ? "3px" : "2px",
                    background: stat.accentGradient,
                    boxShadow: isHovered ? `0 0 16px ${stat.accentColor}, 0 0 6px ${stat.accentColor}` : "none",
                    transition: "all 0.35s ease",
                    zIndex: 3,
                  }}
                />

                {/* 1. Ambient Spotlight Glow within Card */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "-20%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "250px",
                    height: "230px",
                    background: `radial-gradient(circle, rgba(${stat.accentRgb}, ${isHovered ? 0.22 : 0.1}) 0%, transparent 70%)`,
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
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: isLight ? "#64748b" : "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    {idx + 1}
                  </span>

                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 750,
                      letterSpacing: "0.08em",
                      color: stat.accentColor,
                      padding: "4px 11px",
                      borderRadius: "9999px",
                      background: `rgba(${stat.accentRgb}, ${isLight ? 0.08 : 0.16})`,
                      border: `1px solid rgba(${stat.accentRgb}, 0.28)`,
                    }}
                  >
                    {stat.pillarTag}
                  </span>
                </div>

                {/* 3. Modern Glassmorphic Icon Pod */}
                <div
                  style={{
                    position: "relative",
                    width: "84px",
                    height: "84px",
                    marginTop: "0.25rem",
                    marginBottom: "1.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                  }}
                >
                  {/* Soft Ambient Radial Backlight Glow */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: "-16px",
                      borderRadius: "50%",
                      background: `radial-gradient(circle, rgba(${stat.accentRgb}, ${isHovered ? 0.35 : (isLight ? 0.14 : 0.22)}) 0%, transparent 70%)`,
                      filter: "blur(14px)",
                      opacity: isHovered ? 1 : 0.7,
                      transition: "opacity 0.4s ease, transform 0.4s ease",
                      transform: isHovered ? "scale(1.2)" : "scale(1)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Frosted Glass Squircle Pod */}
                  <div
                    style={{
                      position: "relative",
                      width: "80px",
                      height: "80px",
                      borderRadius: "22px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isLight
                        ? isHovered
                          ? `linear-gradient(145deg, #ffffff 0%, rgba(${stat.accentRgb}, 0.08) 100%)`
                          : "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)"
                        : isHovered
                          ? `linear-gradient(145deg, rgba(30, 41, 59, 0.9) 0%, rgba(${stat.accentRgb}, 0.18) 100%)`
                          : "linear-gradient(145deg, rgba(15, 23, 42, 0.85) 0%, rgba(10, 18, 34, 0.95) 100%)",
                      border: `1.5px solid rgba(${stat.accentRgb}, ${isHovered ? (isLight ? 0.45 : 0.55) : (isLight ? 0.2 : 0.18)})`,
                      boxShadow: isHovered
                        ? `0 14px 28px -4px rgba(${stat.accentRgb}, ${isLight ? 0.22 : 0.35}), 0 4px 12px rgba(0, 0, 0, ${isLight ? 0.04 : 0.4}), inset 0 1px 1px rgba(255, 255, 255, ${isLight ? 0.8 : 0.15})`
                        : `0 6px 18px -2px rgba(0, 0, 0, ${isLight ? 0.05 : 0.3}), inset 0 1px 1px rgba(255, 255, 255, ${isLight ? 0.6 : 0.08})`,
                      transform: isHovered ? "translateY(-4px) scale(1.05)" : "translateY(0) scale(1)",
                      transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {/* SVG Icon */}
                    <div
                      style={{
                        position: "relative",
                        width: "44px",
                        height: "44px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease",
                        transform: isHovered ? "scale(1.1)" : "scale(1)",
                        filter: isHovered
                          ? `drop-shadow(0 4px 10px rgba(${stat.accentRgb}, 0.4))`
                          : "none",
                      }}
                    >
                      <Image
                        src={stat.icon}
                        alt=""
                        width={44}
                        height={44}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Display Counter Number */}
                <div
                  style={{
                    fontSize: "clamp(2.5rem, 3.4vw, 3.1rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.05,
                    marginBottom: "0.55rem",
                    color: isLight ? "#0f172a" : "#ffffff",
                    position: "relative",
                    zIndex: 2,
                    transition: "color 0.3s ease",
                  }}
                >
                  {stat.count}
                </div>

                {/* 5. Stat Title Label */}
                <div
                  style={{
                    fontSize: "1.05rem",
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
                    fontSize: "0.85rem",
                    fontWeight: 450,
                    color: isLight ? "#64748b" : "#94a3b8",
                    lineHeight: 1.5,
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
                    padding: "0.55rem 0.85rem",
                    borderRadius: "12px",
                    background: isLight
                      ? isHovered
                        ? `rgba(${stat.accentRgb}, 0.08)`
                        : "rgba(241, 245, 249, 0.85)"
                      : isHovered
                        ? `rgba(${stat.accentRgb}, 0.16)`
                        : "rgba(10, 18, 34, 0.6)",
                    border: `1px solid rgba(${stat.accentRgb}, ${isHovered ? 0.35 : (isLight ? 0.14 : 0.08)})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "7px",
                    position: "relative",
                    zIndex: 2,
                    transition: "all 0.3s ease",
                  }}
                >
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: stat.accentColor,
                      boxShadow: `0 0 8px ${stat.accentColor}`,
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      color: isLight
                        ? isHovered
                          ? stat.accentColor
                          : "#334155"
                        : isHovered
                          ? "#ffffff"
                          : "#cbd5e1",
                      letterSpacing: "0.02em",
                      transition: "color 0.25s ease",
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
