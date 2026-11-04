"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Layers, Cpu, Cloud, Smartphone, Network } from "lucide-react";
import { ActivePhraseState } from "./LettersInMotionVisual";

export interface ServicePhraseDefinition {
  id: string;
  title: string;
  headlinePhrase: string;
  subtitle: string;
  tagline: string;
  badge: string;
  slug: string;
  primaryColor: string;
  secondaryColor: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export const OPASH_SERVICES_PHRASES: ServicePhraseDefinition[] = [
  {
    id: "custom-software",
    title: "Custom Software",
    headlinePhrase: "Custom Software Development",
    subtitle: "Bespoke Enterprise Systems",
    tagline: "Scalable Architecture · Zero Lock-In",
    badge: "Enterprise Grade",
    slug: "/custom-software-development",
    primaryColor: "#00bbab",
    secondaryColor: "#38bdf8",
    icon: Layers,
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    headlinePhrase: "Enterprise AI Solutions",
    subtitle: "Enterprise LLMs & Autonomous Agents",
    tagline: "RAG & Vector Pipelines · Real-Time Intelligence",
    badge: "Neural Workflows",
    slug: "/ai-ml-solutions",
    primaryColor: "#2dd4bf",
    secondaryColor: "#60a5fa",
    icon: Cpu,
  },
  {
    id: "web-applications",
    title: "Web Applications",
    headlinePhrase: "Scalable Web Applications",
    subtitle: "Sub-Second Latency Cloud Applications",
    tagline: "Next.js Edge Architecture · Reactive UI",
    badge: "Cloud Native",
    slug: "/web-development",
    primaryColor: "#38bdf8",
    secondaryColor: "#00bbab",
    icon: Cloud,
  },
  {
    id: "mobile-ecosystems",
    title: "Mobile Ecosystems",
    headlinePhrase: "Mobile App Ecosystems",
    subtitle: "High-Performance iOS & Android Apps",
    tagline: "60 FPS Fluidity · Real-Time Sync",
    badge: "Cross Platform",
    slug: "/mobile-development",
    primaryColor: "#5EC098",
    secondaryColor: "#0284c7",
    icon: Smartphone,
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    headlinePhrase: "Digital Transformation",
    subtitle: "Legacy Refactoring & Microservices Modernization",
    tagline: "Modern API Fabrics · High-Throughput Security",
    badge: "Modernization",
    slug: "/saas-development",
    primaryColor: "#00bbab",
    secondaryColor: "#818cf8",
    icon: Network,
  },
];

interface CleanHeadlineHeadingProps {
  text: string;
  primaryColor: string;
  secondaryColor: string;
}

function CleanHeadlineHeading({ text, primaryColor, secondaryColor }: CleanHeadlineHeadingProps) {
  return (
    <span
      className="letters-active-phrase"
      style={{
        fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', 'Prime Serif', serif",
        fontSize: "clamp(1.875rem, 2.75vw, 2.875rem)",
        fontWeight: 400,
        lineHeight: 1.2,
        letterSpacing: "-0.015em",
        display: "inline-block",
        textAlign: "center",
        wordBreak: "keep-all",
        maxWidth: "100%",
        ["--phrase-primary" as string]: primaryColor,
        ["--phrase-secondary" as string]: secondaryColor,
      }}
    >
      {text}
    </span>
  );
}

interface LettersInMotionHeadlineProps {
  onPhraseChange: (state: ActivePhraseState) => void;
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  heroRef: React.RefObject<HTMLDivElement | null>;
}

export default function LettersInMotionHeadline({
  onPhraseChange,
  currentIndex,
  onSelectIndex,
  heroRef,
}: LettersInMotionHeadlineProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const phraseWrapRef = useRef<HTMLDivElement>(null);

  const activeDef = OPASH_SERVICES_PHRASES[currentIndex];
  const IconComponent = activeDef.icon;

  // Track hero visibility so we never cycle or re-render when offscreen
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(heroEl);

    const handleVisibility = () => {
      setIsVisible(!document.hidden && (heroRef.current ? true : false));
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [heroRef]);

  // Measure word coordinates and push to visual engine
  const measureAndUpdate = useCallback(
    (progress = 1.0, isTransitioning = false) => {
      const phraseEl = phraseWrapRef.current;
      const heroEl = heroRef.current;

      if (!phraseEl || !heroEl) return;

      const pRect = phraseEl.getBoundingClientRect();
      const hRect = heroEl.getBoundingClientRect();

      const centerX = pRect.left + pRect.width / 2;
      const centerY = pRect.top + pRect.height / 2;

      // Normalize to NDC (-1 to 1) relative to hero container
      const normX = ((centerX - hRect.left) / hRect.width) * 2 - 1;
      const normY = -(((centerY - hRect.top) / hRect.height) * 2 - 1);

      onPhraseChange({
        index: currentIndex,
        id: activeDef.id,
        title: activeDef.title,
        slug: activeDef.slug,
        primaryColor: activeDef.primaryColor,
        secondaryColor: activeDef.secondaryColor,
        rect: {
          left: pRect.left - hRect.left,
          top: pRect.top - hRect.top,
          width: pRect.width,
          height: pRect.height,
          centerX: centerX - hRect.left,
          centerY: centerY - hRect.top,
          normX,
          normY,
          widthNorm: pRect.width / hRect.width,
          heightNorm: pRect.height / hRect.height,
        },
        transitionProgress: progress,
        isTransitioning,
      });
    },
    [currentIndex, activeDef, heroRef, onPhraseChange]
  );

  // Auto-rotate capability phrases every 3.8s when visible and not hovered
  useEffect(() => {
    if (!isVisible || isPaused) return;

    const timer = setInterval(() => {
      onSelectIndex((currentIndex + 1) % OPASH_SERVICES_PHRASES.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [currentIndex, isVisible, isPaused, onSelectIndex]);


  // Measure whenever the active index changes or window resizes
  useEffect(() => {
    measureAndUpdate(0.0, true);
    const settleTimer = setTimeout(() => {
      measureAndUpdate(1.0, false);
    }, 700);

    return () => clearTimeout(settleTimer);
  }, [currentIndex, measureAndUpdate]);

  useEffect(() => {
    const handleResize = () => measureAndUpdate(1.0, false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [measureAndUpdate]);

  return (
    <div
      className="letters-headline-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      {/* Line 1: Static Authority Lead-In */}
      <div
        className="letters-headline-lead"
        style={{
          fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', 'Prime Serif', serif",
          fontSize: "clamp(1.275rem, 1.7vw, 1.625rem)",
          fontWeight: 400,
          lineHeight: 1.25,
          letterSpacing: "-0.01em",
          textAlign: "center",
          width: "100%",
          marginBottom: "0.35rem",
        }}
      >
        <span>Top Global Partner for</span>
      </div>

      {/* Line 2: Crystal-Clear Cybernetic Kinetic Typography */}
      <div
        className="letters-headline-phrase-row"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          ref={phraseWrapRef}
          className="letters-headline-phrase-wrap"
          style={{
            display: "inline-block",
            position: "relative",
            maxWidth: "100%",
            textAlign: "center",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDef.id}
              className="letters-cyber-phrase-box"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "inline-block",
                position: "relative",
                maxWidth: "100%",
                textAlign: "center",
              }}
            >
              <CleanHeadlineHeading
                text={activeDef.headlinePhrase}
                primaryColor={activeDef.primaryColor}
                secondaryColor={activeDef.secondaryColor}
              />
            </motion.div>
          </AnimatePresence>

          {/* Letter-Reactive Subtle Underline Accent */}
          <span
            className="letters-glow-underline"
            style={{
              background: `linear-gradient(90deg, transparent, ${activeDef.primaryColor}80, ${activeDef.secondaryColor}80, transparent)`,
              boxShadow: `0 0 8px ${activeDef.primaryColor}50`,
            }}
          />

          {/* Luminous High-Speed Laser Particle Tracer */}
          <AnimatePresence mode="wait">
            <motion.span
              key={`laser-${activeDef.id}`}
              className="letters-laser-runner"
              initial={{ left: "0%", opacity: 0, scaleX: 0.2 }}
              animate={{
                left: ["0%", "50%", "100%"],
                opacity: [0, 1, 0],
                scaleX: [0.3, 1.4, 0.3],
              }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: `linear-gradient(90deg, transparent, #ffffff, ${activeDef.primaryColor}, transparent)`,
                boxShadow: `0 0 14px #ffffff, 0 0 22px ${activeDef.primaryColor}`,
              }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Clean Minimal Capability Indicators (Shows Active Section & Total Sections) */}
      <div
        className="letters-nav-dots-row"
        role="tablist"
        aria-label="Capability Indicators"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          marginTop: "1.1rem",
          marginBottom: "0.5rem",
        }}
      >
        {OPASH_SERVICES_PHRASES.map((phrase, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={phrase.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectIndex(idx)}
              title={phrase.title}
              className="letters-nav-dot-btn"
              style={{
                background: "transparent",
                border: "none",
                padding: "6px 3px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                className="letters-nav-dot-pill"
                style={{
                  width: isActive ? "22px" : "6px",
                  height: "6px",
                  borderRadius: "999px",
                  backgroundColor: isActive ? phrase.primaryColor : undefined,
                  boxShadow: isActive ? `0 0 10px ${phrase.primaryColor}` : undefined,
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
