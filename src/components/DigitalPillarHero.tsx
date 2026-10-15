"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  MessageSquare
} from "lucide-react";
import { companyData } from "@/data/company";
import { CloudShader } from "@/components/ui/cloud-shader";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

const GLOBAL_PRESENCE = [
  { name: "India", flag: "🇮🇳", code: "IND" },
  { name: "United States", flag: "🇺🇸", code: "USA" },
  { name: "United Kingdom", flag: "🇬🇧", code: "GBR" },
  { name: "Canada", flag: "🇨🇦", code: "CAN" },
  { name: "Germany", flag: "🇩🇪", code: "DEU" },
  { name: "UAE", flag: "🇦🇪", code: "ARE" },
  { name: "Australia", flag: "🇦🇺", code: "AUS" },
  { name: "Brazil", flag: "🇧🇷", code: "BRA" },
  { name: "Singapore", flag: "🇸🇬", code: "SGP" },
];

export default function DigitalPillarHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const updateTheme = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      setTheme(isLight ? "light" : "dark");
    };
    updateTheme();

    const observer = new MutationObserver(() => {
      updateTheme();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="cinema-earth-hero-section"
    >
      {/* ========================================================================= */}
      {/* 1. OPASH BRANDED AMBIENT BACKGROUND STAGE                                 */}
      {/* ========================================================================= */}
      <div className="hero-opash-brand-bg-stage" aria-hidden="true">
        {/* Base cosmic space background */}
        <div className="hero-cosmic-space-bg" />

        {/* Aceternity UI Cloud Shader with crisp procedural drifting clouds */}
        <div className="hero-cloud-shader-stage" aria-hidden="true">
          <CloudShader
            className="w-full h-full"
            speed={0.8}
            count={5}
            cloudColor="#ffffff"
            skyTopColor={theme === "light" ? "#3174b8" : "#030814"}
            skyBottomColor={theme === "light" ? "#88beea" : "#0c2b64"}
          />
        </div>

        {/* Opash Mint Ambient Glow */}
        <div className="hero-opash-glow-mint" />

        {/* Opash Royal Blue Ambient Glow */}
        <div className="hero-opash-glow-blue" />
      </div>

      {/* ========================================================================= */}
      {/* 2. FOREGROUND CENTERED CONTENT LAYER                                      */}
      {/* ========================================================================= */}
      <div className="hero-split-foreground-layer hero-centered-foreground">
        <div className="hero-split-container hero-centered-container" style={{ position: "relative" }}>
          {/* Centered Column: Grand Typography & Action Row */}
          <motion.div
            className="hero-clean-text-content hero-centered-text-content"
            style={{ position: "relative", zIndex: 10 }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow Pill - Opash Brand Text without green background */}
            <div className="hero-cinema-badge">
              <span>Opash Software – Elevate Your Digital Presence</span>
            </div>

            {/* Main H1 Title: Opash Official Heading in exactly 2 lines with Aceternity UI LayoutTextFlip */}
            <h1 className="hero-cinema-h1">
              <span className="hero-cinema-h1-white hero-cinema-h1-line hero-cinema-h1-line-1">
                Top Global Partner for Custom Software
              </span>
              <span className="hero-cinema-h1-white hero-cinema-h1-line hero-cinema-h1-line-2 hero-cinema-h1-subline">
                <span>Development in</span>
                <LayoutTextFlip
                  words={[
                    "Travel",
                    "FinTech",
                    "Health Care",
                    "E-Commerce",
                    "Real Estate",
                    "Insurance",
                  ]}
                  duration={2400}
                  className="hero-layout-flip-badge"
                  textClassName="hero-layout-flip-text"
                />
              </span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="hero-clean-subtitle">
              With the help of Innovation and Technology, We give you the power to change the world with your ideas.
            </p>

            {/* Global Presence Box (Slides in smoothly from the left on initial view) */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="hero-global-presence-card"
            >
              <div className="hero-presence-inner">
                {GLOBAL_PRESENCE.map((item, idx) => (
                  <div key={item.code} className="hero-presence-chip">
                    <span className="hero-presence-name">{item.name}</span>
                    {idx < GLOBAL_PRESENCE.length - 1 && (
                      <span className="hero-presence-dot">✦</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons Center Aligned */}
            <div className="hero-earth-cta-row">
              <Link
                href="/get-a-quote"
                className="pillar-primary-btn"
              >
                <Sparkles size={16} />
                <span>Build on Our Foundation</span>
                <ArrowRight size={16} className="btn-arrow-icon" />
              </Link>

              <a
                href={companyData.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="pillar-whatsapp-btn"
              >
                <MessageSquare size={17} style={{ color: "#25D366" }} />
                <span>WhatsApp Chief Architect</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
