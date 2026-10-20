"use client";

import React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

function StatCounter({
  value,
  suffix = "",
  duration = 1600,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "100px 0px" });

  React.useEffect(() => {
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

import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Star,
  Award,
  Code2,
  Globe,
  Smartphone,
  BrainCircuit,
  Cloud,
  Cpu,
  Zap,
  Users,
  Clock,
  Puzzle,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Building2,
  Lock,
  Headphones,
  Check,
  X,
} from "lucide-react";
import { companyData } from "@/data/company";
import DigitalPillarHero from "@/components/DigitalPillarHero";
import { servicesData } from "@/data/services";
import { caseStudiesData } from "@/data/case-studies";
import { industriesData } from "@/data/industries";
import { blogsData } from "@/data/blogs";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import ContactForm from "@/components/ContactForm";
import { Boxes } from "@/components/ui/background-boxes";
import CinematicImpactSection from "@/components/CinematicImpactSection";
import { ClockServicesShowcase } from "@/components/ClockServicesShowcase";
import { AnimatedIndustriesCarousel } from "@/components/AnimatedIndustriesCarousel";
import { TechStackShowcase } from "@/components/TechStackShowcase";
import { FeaturedSuccessStories } from "@/components/FeaturedSuccessStories";
import { WhyChooseUsComparison } from "@/components/WhyChooseUsComparison";
import { GlobalDeliveryMesh } from "@/components/GlobalDeliveryMesh";
import GradientWaves from "@/components/GradientWaves";
import { FounderShowcase } from "@/components/FounderShowcase";
import { TechInsightsShowcase } from "@/components/TechInsightsShowcase";
import SoftAurora from "@/components/SoftAurora";
import { useTheme } from "@/components/ThemeProvider";

export default function HomePage() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const serviceIcons = {
    "custom-software": Code2,
    "web-development": Globe,
    "mobile-development": Smartphone,
    "ai-ml-solutions": BrainCircuit,
    "saas-development": Cloud,
    "api-integration": Cpu,
    "qa-testing": ShieldCheck,
    "hire-developers": Users,
  };

  return (
    <div
      className="bg-grid-pattern"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background Ambient Orbs */}
      <div
        className="ambient-glow-orb"
        style={{
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, #476D9A 0%, transparent 70%)",
        }}
      />
      <div
        className="ambient-glow-orb"
        style={{
          top: "800px",
          right: "-100px",
          background: "radial-gradient(circle, #5EC098 0%, transparent 70%)",
          opacity: 0.15,
        }}
      />

      {/* ========================================================= */}
      {/* SECTION 1: 3D DIGITAL PILLAR HERO (Title, Buttons, 3D Earth) */}
      {/* ========================================================= */}
      <DigitalPillarHero />

      {/* ========================================================= */}
      {/* SECTION 2: CINEMATIC ANIMATED IMPACT & STATISTICS         */}
      {/* ========================================================= */}
      <CinematicImpactSection />

      {/* ========================================================= */}
      {/* SECTION 3: SERVICES SHOWCASE */}
      {/* ========================================================= */}
      <ClockServicesShowcase />

      {/* ========================================================= */}
      {/* SECTION 4: INDUSTRIES WE SPECIALIZE IN (ANIMATED CAROUSEL)*/}
      {/* ========================================================= */}
      <AnimatedIndustriesCarousel />

      {/* ========================================================= */}
      {/* SECTION 5: TECHNOLOGIES & PLATFORMS WE WORK WITH          */}
      {/* ========================================================= */}
      <TechStackShowcase />


      {/* ========================================================= */}
      {/* SECTION 6: VERIFIED CLIENT WORK & CASE STORIES (REDESIGNED)*/}
      {/* ========================================================= */}
      <FeaturedSuccessStories />


      {/* ========================================================= */}
      {/* SECTION 7: WHY CHOOSE OPASH - COMPARISON MATRIX */}
      {/* ========================================================= */}
      {/* ========================================================= */}
      {/* SECTION 8: WHY GLOBAL BRANDS CHOOSE US (COMPARISON MATRIX) */}
      {/* ========================================================= */}
      <WhyChooseUsComparison />

      {/* ========================================================= */}
      {/* SECTION 8.5: WORLDWIDE DELIVERY MESH & TELEMETRY RADAR    */}
      {/* ========================================================= */}
      <GlobalDeliveryMesh />



      {/* ========================================================= */}
      {/* SECTION 9: CLIENT TESTIMONIALS SLIDER */}
      {/* ========================================================= */}
      <section
        id="testimonials"
        className="section-alt"
        style={{
          padding: "6rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated GradientWaves Canvas Backdrop */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <GradientWaves
            horizonColor="#5227FF"
            waveColor="#FF9FFC"
            crestColor="#FFFFFF"
            speed={0.25}
            amplitude={2.0}
            relief={0.8}
            lightAngle={120}
            mouseInteraction={false}
            swellOnClick={false}
            lightMode={isLight}
            opacity={isLight ? 0.35 : 0.75}
            quality="low"
            dpr={1}
          />
          {/* Ambient Vignette for enhanced card readability */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: isLight
                ? "linear-gradient(180deg, rgba(241, 245, 249, 0.65) 0%, rgba(241, 245, 249, 0.15) 35%, rgba(241, 245, 249, 0.7) 100%)"
                : "linear-gradient(180deg, rgba(3, 8, 20, 0.65) 0%, rgba(3, 8, 20, 0.2) 35%, rgba(3, 8, 20, 0.7) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>

        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              textAlign: "center",
              maxWidth: "760px",
              margin: "0 auto 3rem auto",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.38rem 0.95rem",
                borderRadius: "9999px",
                background: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                color: "#10b981",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
              }}
            >
              <Sparkles size={14} />
              <span>Real World Client Proof</span>
            </div>

            <h2 className="heading-section" style={{ margin: "0 0 1rem 0" }}>
              Verified Feedback From{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Founders & CTOs
              </span>
            </h2>

            <p className="subhead-lead" style={{ margin: "0 auto", maxWidth: "620px" }}>
              Direct feedback from technical leaders and founders who scaled mission-critical platforms with Opash dedicated engineering squads.
            </p>
          </div>

          <TestimonialsSlider />
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 10: LEADERSHIP & FOUNDER'S NOTE                    */}
      {/* ========================================================= */}
      <FounderShowcase />

      {/* ========================================================= */}
      {/* SECTION 11: TECH INSIGHTS / BLOGS                          */}
      {/* ========================================================= */}
      <TechInsightsShowcase />

      {/* ========================================================= */}
      {/* SECTION 12: CONTACT & PROPOSAL HUB                         */}
      {/* ========================================================= */}
      <section
        id="contact-section"
        style={{
          padding: "7.5rem 0",
          position: "relative",
          overflow: "hidden",
          backgroundColor: isLight ? "#f8fafc" : "#030814",
          transition: "background-color 0.4s ease",
        }}
      >
        {/* SoftAurora Dynamic Background Shader */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 0,
            opacity: isLight ? 0.38 : 0.75,
          }}
        >
          <SoftAurora
            speed={0.35}
            scale={1.5}
            brightness={1.0}
            color1="#00ffd1"
            color2="#8a5cff"
            bandHeight={0.5}
            bandSpread={1}
            enableMouseInteraction={false}
            lightMode={isLight}
          />
        </div>

        {/* Ambient Vignette Overlay for maximum form readability */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: isLight
              ? "radial-gradient(circle at 50% 50%, rgba(248, 250, 252, 0.72) 0%, rgba(248, 250, 252, 0.9) 75%, #f8fafc 100%)"
              : "radial-gradient(circle at 50% 50%, rgba(3, 8, 20, 0.6) 0%, rgba(3, 8, 20, 0.85) 75%, #030814 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        <div className="container-custom" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "920px", margin: "0 auto" }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
