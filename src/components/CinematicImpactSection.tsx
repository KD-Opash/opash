"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import {
  Users,
  Briefcase,
  Clock,
  Award,
  Sparkles,
  Zap,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Radio,
  Cpu,
} from "lucide-react";

function StatCounter({
  value,
  suffix = "",
  duration = 1600,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "60px 0px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let animId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * value));

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// 4 Orbital Metric Quadrants
const HUD_QUADRANTS = [
  {
    id: 0,
    val: 50,
    suffix: "+",
    pos: "top-left",
    icon: Users,
    category: "ENGINEERING FORCE",
    title: "Experienced Software Developers",
    statName: "Senior Talent Pods",
    gaugeVal: 96,
    subtext: "Dedicated full-stack, cloud-native, and AI engineers delivering under senior technical leadership.",
    metricTag: "98% Senior Ratio",
  },
  {
    id: 1,
    val: 70,
    suffix: "+",
    pos: "top-right",
    icon: Briefcase,
    category: "GLOBAL REACH",
    title: "Custom Software Projects Delivered",
    statName: "Enterprise Deployments",
    gaugeVal: 99,
    subtext: "High-availability web applications, consumer mobile apps, and enterprise SaaS solutions worldwide.",
    metricTag: "99.4% On-Time SLA",
  },
  {
    id: 2,
    val: 12000,
    suffix: "+",
    pos: "bottom-left",
    icon: Clock,
    category: "PRODUCTION VELOCITY",
    title: "Hours of Project Execution",
    statName: "Sprint Output",
    gaugeVal: 98,
    subtext: "Continuous precision engineering, zero-downtime releases, and proven milestone execution.",
    metricTag: "48.6 Sprints / Mo",
  },
  {
    id: 3,
    val: 8,
    suffix: "+",
    pos: "bottom-right",
    icon: Award,
    category: "PROVEN LONGEVITY",
    title: "Years of Industry Experience in IT Solutions",
    statName: "Market Authority",
    gaugeVal: 100,
    subtext: "Deep domain authority established in 2016, delivering software across 9 connected international markets.",
    metricTag: "9 Connected Markets",
  },
];

export default function CinematicImpactSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [activeQuadrant, setActiveQuadrant] = useState<number>(0);
  const [isAutoCycling, setIsAutoCycling] = useState<boolean>(true);

  // Auto-cycle through the 4 quadrants when idle
  useEffect(() => {
    if (!isAutoCycling) return;
    const interval = setInterval(() => {
      setActiveQuadrant((prev) => (prev + 1) % 4);
    }, 4200);
    return () => clearInterval(interval);
  }, [isAutoCycling]);

  const activeData = HUD_QUADRANTS[activeQuadrant];

  return (
    <section
      id="achievements"
      ref={containerRef}
      className="hud-cockpit-section"
      aria-label="Opash Software Impact and Statistics"
    >
      {/* 1. AMBIENT DIGITAL RADAR BACKDROP */}
      <div className="hud-ambient-bg" aria-hidden="true">
        <div className="hud-radial-glow glow-teal" />
        <div className="hud-radial-glow glow-azure" />
        <div className="hud-grid-rings" />
      </div>

      <div className="container-custom relative z-10">
        {/* ========================================================================= */}
        {/* 2. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="hud-header-wrapper">
          <div className="hud-header-flex">
            <h2 className="hud-headline">
              Empowering your <br />
              <span className="hud-headline-highlight">success</span>{" "}
              <span className="hud-headline-muted">with our solutions</span>
            </h2>

            <p className="hud-header-desc">
              Real-time telemetry of Opash Software&apos;s global engineering operations. Explore our four operational pillars delivering mission-critical digital systems worldwide.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. RADIAL HUD COCKPIT STAGE                                               */}
        {/* ========================================================================= */}
        <div className="hud-cockpit-stage">
          {/* Active 360° Rotating Radar Scanner Beam */}
          <div className="hud-radar-sweep-disc" aria-hidden="true" />

          {/* Concentric Pulsing Sonar Waves radiating from center */}
          <div className="hud-sonar-wave wave-1" aria-hidden="true" />
          <div className="hud-sonar-wave wave-2" aria-hidden="true" />
          <div className="hud-sonar-wave wave-3" aria-hidden="true" />

          {/* SVG Vector Energy Conduits & Traveling Data Photons */}
          <svg className="hud-conduits-svg" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="conduitGlowActive" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00bbab" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
                <stop offset="100%" stopColor="#00bbab" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="conduitGlowBase" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00bbab" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
              </linearGradient>
              <filter id="photonGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Base Underlay Paths */}
            <path d="M 500 300 Q 340 240, 240 140" className="hud-conduit-base" />
            <path d="M 500 300 Q 660 240, 760 140" className="hud-conduit-base" />
            <path d="M 500 300 Q 340 360, 240 460" className="hud-conduit-base" />
            <path d="M 500 300 Q 660 360, 760 460" className="hud-conduit-base" />

            {/* Continuous Animated Streaming Energy Paths */}
            <path
              d="M 500 300 Q 340 240, 240 140"
              className={`hud-conduit-stream ${activeQuadrant === 0 ? "is-active" : ""}`}
            />
            <path
              d="M 500 300 Q 660 240, 760 140"
              className={`hud-conduit-stream ${activeQuadrant === 1 ? "is-active" : ""}`}
            />
            <path
              d="M 500 300 Q 340 360, 240 460"
              className={`hud-conduit-stream ${activeQuadrant === 2 ? "is-active" : ""}`}
            />
            <path
              d="M 500 300 Q 660 360, 760 460"
              className={`hud-conduit-stream ${activeQuadrant === 3 ? "is-active" : ""}`}
            />

            {/* Traveling Data Photons moving from Center to 4 Quadrants */}
            {/* Top-Left Photon */}
            <circle r={activeQuadrant === 0 ? "5.5" : "3.5"} fill="#00bbab" filter="url(#photonGlow)">
              <animateMotion
                dur={activeQuadrant === 0 ? "1.6s" : "3.2s"}
                repeatCount="indefinite"
                path="M 500 300 Q 340 240, 240 140"
              />
            </circle>
            {activeQuadrant === 0 && (
              <circle r="4" fill="#38bdf8" filter="url(#photonGlow)">
                <animateMotion
                  dur="1.6s"
                  begin="0.8s"
                  repeatCount="indefinite"
                  path="M 500 300 Q 340 240, 240 140"
                />
              </circle>
            )}

            {/* Top-Right Photon */}
            <circle r={activeQuadrant === 1 ? "5.5" : "3.5"} fill="#38bdf8" filter="url(#photonGlow)">
              <animateMotion
                dur={activeQuadrant === 1 ? "1.6s" : "3.2s"}
                repeatCount="indefinite"
                path="M 500 300 Q 660 240, 760 140"
              />
            </circle>
            {activeQuadrant === 1 && (
              <circle r="4" fill="#00bbab" filter="url(#photonGlow)">
                <animateMotion
                  dur="1.6s"
                  begin="0.8s"
                  repeatCount="indefinite"
                  path="M 500 300 Q 660 240, 760 140"
                />
              </circle>
            )}

            {/* Bottom-Left Photon */}
            <circle r={activeQuadrant === 2 ? "5.5" : "3.5"} fill="#00bbab" filter="url(#photonGlow)">
              <animateMotion
                dur={activeQuadrant === 2 ? "1.6s" : "3.2s"}
                repeatCount="indefinite"
                path="M 500 300 Q 340 360, 240 460"
              />
            </circle>
            {activeQuadrant === 2 && (
              <circle r="4" fill="#38bdf8" filter="url(#photonGlow)">
                <animateMotion
                  dur="1.6s"
                  begin="0.8s"
                  repeatCount="indefinite"
                  path="M 500 300 Q 340 360, 240 460"
                />
              </circle>
            )}

            {/* Bottom-Right Photon */}
            <circle r={activeQuadrant === 3 ? "5.5" : "3.5"} fill="#38bdf8" filter="url(#photonGlow)">
              <animateMotion
                dur={activeQuadrant === 3 ? "1.6s" : "3.2s"}
                repeatCount="indefinite"
                path="M 500 300 Q 660 360, 760 460"
              />
            </circle>
            {activeQuadrant === 3 && (
              <circle r="4" fill="#00bbab" filter="url(#photonGlow)">
                <animateMotion
                  dur="1.6s"
                  begin="0.8s"
                  repeatCount="indefinite"
                  path="M 500 300 Q 660 360, 760 460"
                />
              </circle>
            )}
          </svg>

          {/* --------------------------------------------------------------------- */}
          {/* CENTRAL HOLOGRAPHIC CORE & TELEMETRY DIAL                              */}
          {/* --------------------------------------------------------------------- */}
          <div className="hud-central-reactor">
            {/* Outer Compass Degree Ticks Ring */}
            <div className="hud-outer-dial-ring" />
            
            {/* Middle Rotating Segmented Reticle Ring */}
            <div className="hud-inner-orbital-ring" />

            {/* Pulsing Aura Behind Reactor Hub */}
            <div className="hud-reactor-pulse-aura" />

            {/* Core Reactor Hub Button */}
            <div
              className="hud-reactor-hub"
              onClick={() => {
                setIsAutoCycling(false);
                setActiveQuadrant((prev) => (prev + 1) % 4);
              }}
              title="Click to cycle active quadrant"
              role="button"
              tabIndex={0}
            >
              <div className="hud-reactor-glow-core" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  className="hud-reactor-center-content"
                  initial={{ opacity: 0, scale: 0.75, rotate: -8 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.75, rotate: 8 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  <activeData.icon size={22} className="hud-reactor-active-icon" />
                  <span className="hud-reactor-val">
                    {activeData.val >= 1000 ? `${(activeData.val / 1000).toFixed(0)}k` : activeData.val}
                    {activeData.suffix}
                  </span>
                  <span className="hud-reactor-label">{activeData.statName}</span>
                </motion.div>
              </AnimatePresence>

              <div className="hud-reactor-status-tag">
                <span className="hud-status-ping-dot" />
                <span>ONLINE · LIVE TELEMETRY</span>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* THE 4 ORBITAL QUADRANTS                                               */}
          {/* --------------------------------------------------------------------- */}
          <div className="hud-quadrants-grid">
            {HUD_QUADRANTS.map((quadrant) => {
              const isActive = activeQuadrant === quadrant.id;
              const Icon = quadrant.icon;

              return (
                <div
                  key={quadrant.id}
                  className={`hud-quadrant-card ${quadrant.pos} ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => {
                    setIsAutoCycling(false);
                    setActiveQuadrant(quadrant.id);
                  }}
                  onMouseLeave={() => setIsAutoCycling(true)}
                  onClick={() => {
                    setIsAutoCycling(false);
                    setActiveQuadrant(quadrant.id);
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {/* Active Laser Edge Indicator */}
                  <div className="hud-quadrant-laser-edge" />

                  {/* Top Bar with Icon & Arc Gauge */}
                  <div className="hud-quadrant-top">
                    <div className="hud-quadrant-icon-box">
                      <Icon size={17} />
                    </div>

                    <div className="hud-quadrant-meta">
                      <span className="hud-quadrant-cat">{quadrant.category}</span>
                      <span className="hud-quadrant-pill">{quadrant.metricTag}</span>
                    </div>
                  </div>

                  {/* Main Metric Value */}
                  <div className="hud-quadrant-metric">
                    <StatCounter value={quadrant.val} suffix={quadrant.suffix} />
                  </div>

                  {/* Descriptive Title */}
                  <h3 className="hud-quadrant-title">{quadrant.title}</h3>
                  <p className="hud-quadrant-subtext">{quadrant.subtext}</p>

                  {/* Bottom Operational Arc Telemetry Indicator */}
                  <div className="hud-quadrant-footer">
                    <div className="hud-gauge-bar-track">
                      <div
                        className="hud-gauge-bar-fill"
                        style={{ width: `${quadrant.gaugeVal}%` }}
                      >
                        <div className="hud-gauge-shimmer" />
                      </div>
                    </div>
                    
                    <div className="hud-telemetry-indicator">
                      {isActive && (
                        <div className="hud-live-eq" aria-hidden="true" title="Real-time signal active">
                          <span className="hud-eq-bar bar-1" />
                          <span className="hud-eq-bar bar-2" />
                          <span className="hud-eq-bar bar-3" />
                          <span className="hud-eq-bar bar-4" />
                        </div>
                      )}
                      <span className="hud-gauge-val">{quadrant.gaugeVal}% Verified</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. BOTTOM FULL-WIDTH SUMMARY PARAGRAPH                                    */}
        {/* ========================================================================= */}
        <div className="hud-bottom-summary">
          <p className="template-summary-text">
            As a leading custom software development company in India, Opash Software empowers
            startups, SMEs, and enterprises with scalable Web, Mobile, and AI solutions. Our
            proven agile methodologies, expert team, and client-first approach ensure quality
            results and long-term success.
          </p>
        </div>
      </div>
    </section>
  );
}
