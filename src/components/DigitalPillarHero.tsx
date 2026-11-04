"use client";

import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageSquare, CheckCircle2, ShieldCheck } from "lucide-react";
import { companyData } from "@/data/company";
import { ActivePhraseState } from "@/components/LettersInMotionVisual";
import LettersInMotionHeadline, { OPASH_SERVICES_PHRASES } from "@/components/LettersInMotionHeadline";
import ConnectedConstellation from "@/components/ConnectedConstellation";
import HeroCreativeBackdrop from "@/components/HeroCreativeBackdrop";
import { useTheme } from "@/components/ThemeProvider";

export default function DigitalPillarHero() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [activePhrase, setActivePhrase] = useState<ActivePhraseState>({
    index: 0,
    id: OPASH_SERVICES_PHRASES[0].id,
    title: OPASH_SERVICES_PHRASES[0].title,
    slug: OPASH_SERVICES_PHRASES[0].slug,
    primaryColor: OPASH_SERVICES_PHRASES[0].primaryColor,
    secondaryColor: OPASH_SERVICES_PHRASES[0].secondaryColor,
    rect: {
      left: 100,
      top: 180,
      width: 320,
      height: 60,
      centerX: 260,
      centerY: 210,
      normX: -0.4,
      normY: 0.15,
      widthNorm: 0.28,
      heightNorm: 0.09,
    },
    transitionProgress: 1.0,
    isTransitioning: false,
  });

  // Centralized selection handler guaranteeing instantaneous lockstep across 3D background & text
  const handleSelectService = useCallback((idx: number) => {
    setCurrentIndex(idx);
    const def = OPASH_SERVICES_PHRASES[idx];
    setActivePhrase((prev) => ({
      ...prev,
      index: idx,
      id: def.id,
      title: def.title,
      slug: def.slug,
      primaryColor: def.primaryColor,
      secondaryColor: def.secondaryColor,
      transitionProgress: 0.0,
      isTransitioning: true,
    }));
  }, []);

  const activeDef = OPASH_SERVICES_PHRASES[currentIndex];
  const IconComponent = activeDef.icon;

  return (
    <section className="hero-brand-section letters-motion-hero-section" ref={heroRef}>
      {/* ========================================================================= */}
      {/* 1. 3D WEBGL STAGE: "OPASH — LETTERS IN MOTION"                            */}
      {/* Dynamic Luminous Ribbon + Ambient Reactive Glows + Coordinated Color Morph */}
      {/* ========================================================================= */}
      <HeroCreativeBackdrop
        isLightMode={isLight}
        currentIndex={currentIndex}
        activePrimaryColor={activeDef.primaryColor}
        activeSecondaryColor={activeDef.secondaryColor}
        activeTitle={activeDef.title}
        onSelectPhrase={handleSelectService}
      />

      {/* ========================================================================= */}
      {/* 2. TWO-COLUMN HERO FOREGROUND CONTAINER                                   */}
      {/* ========================================================================= */}
      <div className="hero-brand-container letters-motion-container">
        {/* LEFT COLUMN: Brand Eyebrow, Kinetic Letter Headline, Presences, CTAs */}
        <motion.div
          className="hero-brand-left"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Core Kinetic Letters-in-Motion Headline */}
          <LettersInMotionHeadline
            heroRef={heroRef}
            currentIndex={currentIndex}
            onSelectIndex={handleSelectService}
            onPhraseChange={setActivePhrase}
          />

          {/* Supporting Subtitle Paragraph */}
          <p
            className="hero-brand-subtitle letters-hero-subtitle"
            style={{
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "1.5rem",
            }}
          >
            With the help of Innovation and Technology, We give you the power to
            change the world with your ideas.
          </p>

          {/* Distinctive Connected Constellation: 9 Markets Connected by One Partner */}
          <ConnectedConstellation />

          {/* Refined Brand CTA Action Buttons */}
          <div className="hero-brand-cta-row">
            <Link href="/get-a-quote" className="hero-brand-primary-btn opash-roll-btn">
              <span className="opash-roll-track">
                {/* Primary Content (slides up out of view on hover) */}
                <span className="opash-roll-item">
                  <span>Build on Our Foundation</span>
                  <ArrowRight size={15} className="hero-btn-arrow" />
                </span>
                {/* Clone Content (slides up from bottom into center on hover) */}
                <span className="opash-roll-item" aria-hidden="true">
                  <span>Build on Our Foundation</span>
                  <ArrowRight size={15} className="hero-btn-arrow" />
                </span>
              </span>
            </Link>

            <a
              href={companyData.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hero-brand-secondary-btn opash-roll-btn"
            >
              <span className="opash-roll-track">
                {/* Primary Content (slides up out of view on hover) */}
                <span className="opash-roll-item">
                  <MessageSquare size={15} className="hero-wa-icon" />
                  <span>WhatsApp Chief Architect</span>
                </span>
                {/* Clone Content (slides up from bottom into center on hover) */}
                <span className="opash-roll-item" aria-hidden="true">
                  <MessageSquare size={15} className="hero-wa-icon" />
                  <span>WhatsApp Chief Architect</span>
                </span>
              </span>
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive Capability Nexus Card & Live Architecture */}
        <motion.div
          className="hero-brand-right letters-motion-right"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.95, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="letters-right-card">
            {/* Header with Active Capability Badge */}
            <div className="letters-right-card-header">
              <div
                className="letters-right-icon-box"
                style={{
                  color: activeDef.primaryColor,
                  borderColor: `${activeDef.primaryColor}50`,
                  background: `${activeDef.primaryColor}16`,
                }}
              >
                <IconComponent size={20} />
              </div>
              <div className="letters-right-card-meta">
                <span className="letters-right-card-label">Active Solution Area</span>
                <span
                  className="letters-right-card-badge"
                  style={{ color: activeDef.primaryColor }}
                >
                  {activeDef.badge}
                </span>
              </div>
            </div>

            {/* Dynamic Title and Subtitle */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDef.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
              >
                <h3 className="letters-right-card-title">{activeDef.title}</h3>
                <p className="letters-right-card-desc">{activeDef.subtitle}</p>

                {/* Metric Features */}
                <div className="letters-right-metrics-grid">
                  <div className="letters-right-metric-item">
                    <CheckCircle2 size={13} style={{ color: activeDef.primaryColor }} />
                    <span>{activeDef.tagline}</span>
                  </div>
                  <div className="letters-right-metric-item">
                    <ShieldCheck size={13} style={{ color: activeDef.secondaryColor }} />
                    <span>Enterprise SLA · End-to-End Delivery</span>
                  </div>
                </div>

                {/* Action Link to Full Service Page */}
                <Link
                  href={activeDef.slug}
                  className="letters-right-action-btn"
                  style={{
                    background: `${activeDef.primaryColor}18`,
                    borderColor: `${activeDef.primaryColor}45`,
                  }}
                >
                  <span>View Engineering Specifications</span>
                  <ArrowRight size={13} />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Live Synchronized Status Footer */}
            <div className="letters-right-footer">
              <div className="letters-right-pulse-indicator">
                <span
                  className="letters-right-pulse-dot"
                  style={{
                    backgroundColor: activeDef.primaryColor,
                    boxShadow: `0 0 10px ${activeDef.primaryColor}`,
                  }}
                />
                <span className="letters-right-status-text">
                  Synchronized with Headline Letters
                </span>
              </div>
              <span className="letters-right-index-text">
                0{currentIndex + 1} / 0{OPASH_SERVICES_PHRASES.length}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated "Scroll to explore" Indicator (Matching Portfolio Style) */}
      <a
        href="#achievements"
        onClick={(e) => {
          e.preventDefault();
          const target = document.getElementById("achievements") || document.getElementById("services");
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="hero-scroll-indicator"
        style={{
          position: "absolute",
          bottom: "clamp(1.1rem, 2.6vh, 2.2rem)",
          left: "50%",
          transform: "translateX(-50%)",
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.45rem",
          textDecoration: "none",
          zIndex: 30,
          cursor: "pointer",
          transition: "transform 0.25s ease, opacity 0.25s ease",
        }}
        aria-label="Scroll to explore"
      >
        {/* Minimalist mouse pill with animated glowing dot */}
        <div
          style={{
            width: "20px",
            height: "32px",
            borderRadius: "9999px",
            border: `1.5px solid ${isLight ? "rgba(0, 138, 117, 0.45)" : "rgba(0, 255, 209, 0.45)"}`,
            background: isLight ? "rgba(255, 255, 255, 0.65)" : "rgba(10, 20, 36, 0.65)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            display: "flex",
            justifyContent: "center",
            paddingTop: "5px",
            boxShadow: isLight
              ? "0 4px 14px rgba(0, 168, 143, 0.15)"
              : "0 4px 18px rgba(0, 255, 209, 0.2)",
          }}
        >
          <span
            className="hero-scroll-dot"
            style={{
              width: "4px",
              height: "6px",
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
            fontSize: "0.75rem",
            fontWeight: 750,
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
  );
}
