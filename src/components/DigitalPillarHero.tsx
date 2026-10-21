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
          {/* Eyebrow Label with Teal Pulse Indicator */}
          <div className="hero-brand-eyebrow">
            <span
              className="hero-brand-eyebrow-indicator"
              style={{ backgroundColor: activeDef.primaryColor, boxShadow: `0 0 10px ${activeDef.primaryColor}` }}
            />
            <span>OPASH SOFTWARE — ELEVATE YOUR DIGITAL PRESENCE</span>
          </div>

          {/* Core Kinetic Letters-in-Motion Headline */}
          <LettersInMotionHeadline
            heroRef={heroRef}
            currentIndex={currentIndex}
            onSelectIndex={handleSelectService}
            onPhraseChange={setActivePhrase}
          />

          {/* Supporting Subtitle Paragraph */}
          <p className="hero-brand-subtitle letters-hero-subtitle">
            With the help of Innovation and Technology, We give you the power to
            change the world with your ideas.
          </p>

          {/* Distinctive Connected Constellation: 9 Markets Connected by One Partner */}
          <ConnectedConstellation />

          {/* Refined Brand CTA Action Buttons */}
          <div className="hero-brand-cta-row">
            <Link href="/get-a-quote" className="hero-brand-primary-btn">
              <span>Build on Our Foundation</span>
              <ArrowRight size={15} className="hero-btn-arrow" />
            </Link>

            <a
              href={companyData.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hero-brand-secondary-btn"
            >
              <MessageSquare size={15} className="hero-wa-icon" />
              <span>WhatsApp Chief Architect</span>
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
    </section>
  );
}
