"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { ChevronLeft, ChevronRight, X, Maximize2, Sparkles, HeartHandshake } from "lucide-react";

interface CulturePhoto {
  src: string;
  alt: string;
  title: string;
  tag: string;
}

const CULTURE_PHOTOS: CulturePhoto[] = [
  {
    src: "/images/culture/life-1.jpg",
    alt: "Opash Software Team Outdoor Retreat",
    title: "Outdoor Team Retreat",
    tag: "Workation & Bonding",
  },
  {
    src: "/images/culture/life-2.jpg",
    alt: "Opash Team Sports and Lawn Relay Activities",
    title: "Team Sports & Fun Relays",
    tag: "Energy & Teamwork",
  },
  {
    src: "/images/culture/life-3.jpg",
    alt: "Opash Software Traditional Festive Celebrations",
    title: "Festive Celebrations",
    tag: "Cultural Harmony",
  },
  {
    src: "/images/culture/life-4.jpg",
    alt: "Opash Software Team Gathering and Bonding",
    title: "Community & Leadership Meet",
    tag: "Shared Vision",
  },
  {
    src: "/images/culture/life-5.jpg",
    alt: "Opash Team Celebrations and Dinners",
    title: "Milestone Feasts & Dinners",
    tag: "Celebrating Wins",
  },
  {
    src: "/images/culture/life-6.jpg",
    alt: "Opash Software Festival Memories and Ethnic Day",
    title: "Ethnic Day & Festivities",
    tag: "Opash Family",
  },
];

export default function LifeAtOpashSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive visible count
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, CULTURE_PHOTOS.length - visibleCount);

  // Auto-slide
  useEffect(() => {
    if (isPaused || lightboxIndex !== null) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex, lightboxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section
      id="life-at-opash"
      aria-label="Life At Opash"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        position: "relative",
        padding: "6.5rem 0",
        background: isLight
          ? "linear-gradient(180deg, rgba(241, 245, 249, 0.6) 0%, rgba(255, 255, 255, 0.95) 25%, rgba(248, 250, 252, 0.95) 75%, rgba(241, 245, 249, 0.6) 100%)"
          : "linear-gradient(180deg, rgba(10, 18, 34, 0.6) 0%, rgba(6, 14, 30, 0.85) 25%, rgba(8, 17, 36, 0.85) 75%, rgba(10, 18, 34, 0.6) 100%)",
        overflow: "hidden",
        borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* 1. Luminous Horizon Accent Beam across the top (Connecting seamlessly) */}
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

      {/* 2. Full Edge-to-Edge Ambient Radiant Lighting (Zero black bands) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: isLight
            ? `
              radial-gradient(ellipse 90% 60% at 50% 0%, rgba(0, 168, 143, 0.12) 0%, rgba(71, 109, 154, 0.08) 35%, transparent 75%),
              radial-gradient(ellipse 70% 50% at 5% 40%, rgba(71, 109, 154, 0.08) 0%, transparent 65%),
              radial-gradient(ellipse 70% 50% at 95% 40%, rgba(0, 168, 143, 0.08) 0%, transparent 65%),
              radial-gradient(ellipse 80% 50% at 50% 100%, rgba(71, 109, 154, 0.08) 0%, transparent 70%)
            `
            : `
              radial-gradient(ellipse 100% 65% at 50% 0%, rgba(94, 192, 152, 0.18) 0%, rgba(71, 109, 154, 0.20) 35%, transparent 75%),
              radial-gradient(ellipse 75% 55% at 0% 40%, rgba(71, 109, 154, 0.22) 0%, transparent 65%),
              radial-gradient(ellipse 75% 55% at 100% 40%, rgba(94, 192, 152, 0.20) 0%, transparent 65%),
              radial-gradient(ellipse 80% 50% at 50% 100%, rgba(71, 109, 154, 0.12) 0%, transparent 70%)
            `,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* 3. High-Tech Blueprint Dot-Grid Matrix Texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: isLight
            ? "radial-gradient(rgba(71, 109, 154, 0.15) 1px, transparent 1px)"
            : "radial-gradient(rgba(94, 192, 152, 0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "center center",
          opacity: isLight ? 0.45 : 0.4,
          maskImage: "radial-gradient(ellipse 90% 75% at 50% 45%, black 25%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 75% at 50% 45%, black 25%, transparent 90%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* 4. Elegant Culture Connectivity Wave Arcs (SVG) */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1400px",
          height: "520px",
          pointerEvents: "none",
          zIndex: 0,
          opacity: isLight ? 0.35 : 0.45,
        }}
        viewBox="0 0 1400 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cultureWaveG1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={isLight ? "#476D9A" : "#476D9A"} stopOpacity="0" />
            <stop offset="35%" stopColor={isLight ? "#00A88F" : "#5EC098"} stopOpacity="0.4" />
            <stop offset="65%" stopColor={isLight ? "#476D9A" : "#6289B8"} stopOpacity="0.4" />
            <stop offset="100%" stopColor={isLight ? "#00A88F" : "#5EC098"} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cultureWaveG2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor={isLight ? "#00A88F" : "#5EC098"} stopOpacity="0" />
            <stop offset="50%" stopColor={isLight ? "#476D9A" : "#476D9A"} stopOpacity="0.3" />
            <stop offset="100%" stopColor={isLight ? "#6289B8" : "#6289B8"} stopOpacity="0" />
          </linearGradient>
        </defs>

        <path d="M 50 160 Q 400 60 700 160 T 1350 120" stroke="url(#cultureWaveG1)" strokeWidth="1.6" strokeDasharray="6 8" />
        <path d="M 100 230 Q 500 310 800 200 T 1300 240" stroke="url(#cultureWaveG2)" strokeWidth="1.2" strokeDasharray="4 6" />
        <path d="M 250 110 Q 700 10 1150 110" stroke={isLight ? "rgba(0, 168, 143, 0.25)" : "rgba(94, 192, 152, 0.3)"} strokeWidth="1" strokeDasharray="2 6" />

        <circle cx="400" cy="95" r="3.5" fill={isLight ? "#00A88F" : "#5EC098"} opacity="0.75" />
        <circle cx="400" cy="95" r="7" stroke={isLight ? "#00A88F" : "#5EC098"} strokeWidth="1" opacity="0.3" />

        <circle cx="700" cy="160" r="4" fill={isLight ? "#476D9A" : "#6289B8"} opacity="0.8" />
        <circle cx="700" cy="160" r="9" stroke={isLight ? "#476D9A" : "#6289B8"} strokeWidth="1" opacity="0.35" />

        <circle cx="1000" cy="115" r="3.5" fill={isLight ? "#00A88F" : "#5EC098"} opacity="0.75" />
        <circle cx="1000" cy="115" r="7" stroke={isLight ? "#00A88F" : "#5EC098"} strokeWidth="1" opacity="0.3" />
      </svg>

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Heading */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.25rem auto" }}>
          {/* Eyebrow badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: isLight ? "#00a88f" : "#5EC098",
                boxShadow: isLight ? "0 0 8px #00a88f" : "0 0 10px #5EC098",
              }}
            />
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: isLight ? "#008a75" : "#5EC098",
              }}
            >
              Culture & Team Spirit
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2.1rem, 4vw, 3.2rem)",
              fontWeight: 850,
              letterSpacing: "-0.025em",
              color: isLight ? "#03173C" : "#f8fafc",
              marginBottom: "1.15rem",
              lineHeight: 1.15,
            }}
          >
            Life At{" "}
            <span className="opash-brand-gradient-text">
              Opash
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(1.02rem, 1.3vw, 1.18rem)",
              lineHeight: 1.7,
              color: isLight ? "#535D6D" : "#94a3b8",
              margin: "0 auto",
              maxWidth: "740px",
            }}
          >
            life at Opash is a perfect mix of productivity and play. We believe great ideas grow in a relaxed, friendly, and flexible environment — and yes, deadlines are met without killing the vibe.
          </p>
        </div>

        {/* Carousel Container */}
        <div style={{ position: "relative", padding: "0 0.5rem" }}>
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            style={{
              position: "absolute",
              left: "-18px",
              top: "45%",
              transform: "translateY(-50%)",
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.8)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.15)",
              color: isLight ? "#0f172a" : "#f8fafc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              boxShadow: isLight ? "0 6px 20px rgba(0, 0, 0, 0.08)" : "0 8px 24px rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(12px)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
              e.currentTarget.style.borderColor = isLight ? "#00A88F" : "#5EC098";
              e.currentTarget.style.color = isLight ? "#00A88F" : "#5EC098";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              e.currentTarget.style.borderColor = isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.color = isLight ? "#0f172a" : "#f8fafc";
            }}
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next slide"
            style={{
              position: "absolute",
              right: "-18px",
              top: "45%",
              transform: "translateY(-50%)",
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.8)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.15)",
              color: isLight ? "#0f172a" : "#f8fafc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              boxShadow: isLight ? "0 6px 20px rgba(0, 0, 0, 0.08)" : "0 8px 24px rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(12px)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
              e.currentTarget.style.borderColor = isLight ? "#00A88F" : "#5EC098";
              e.currentTarget.style.color = isLight ? "#00A88F" : "#5EC098";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              e.currentTarget.style.borderColor = isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.color = isLight ? "#0f172a" : "#f8fafc";
            }}
          >
            <ChevronRight size={22} />
          </button>

          {/* Slider Window */}
          <div style={{ overflow: "hidden", borderRadius: "20px" }}>
            <div
              style={{
                display: "flex",
                transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {CULTURE_PHOTOS.map((photo, idx) => (
                <div
                  key={idx}
                  style={{
                    flex: `0 0 ${100 / visibleCount}%`,
                    padding: "0 10px",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    onClick={() => setLightboxIndex(idx)}
                    role="button"
                    tabIndex={0}
                    style={{
                      position: "relative",
                      height: "300px",
                      borderRadius: "18px",
                      overflow: "hidden",
                      cursor: "pointer",
                      background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.75)",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.1)",
                      boxShadow: isLight
                        ? "0 10px 25px -4px rgba(0, 0, 0, 0.06)"
                        : "0 14px 35px -6px rgba(0, 0, 0, 0.6)",
                      transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.borderColor = isLight ? "#00A88F" : "#5EC098";
                      e.currentTarget.style.boxShadow = isLight
                        ? "0 20px 40px -8px rgba(0, 168, 143, 0.15)"
                        : "0 20px 40px -8px rgba(94, 192, 152, 0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.boxShadow = isLight
                        ? "0 10px 25px -4px rgba(0, 0, 0, 0.06)"
                        : "0 14px 35px -6px rgba(0, 0, 0, 0.6)";
                    }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.6s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                      }}
                    />

                    {/* Gradient vignette for readability */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(2, 7, 18, 0.88) 0%, rgba(2, 7, 18, 0.25) 45%, transparent 75%)",
                        pointerEvents: "none",
                      }}
                    />

                    {/* Tag badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        padding: "5px 12px",
                        borderRadius: "9999px",
                        background: "rgba(2, 7, 18, 0.7)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                        color: "#5EC098",
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {photo.tag}
                    </div>

                    {/* Expand icon */}
                    <div
                      style={{
                        position: "absolute",
                        top: "14px",
                        right: "14px",
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        background: "rgba(2, 7, 18, 0.7)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Maximize2 size={14} />
                    </div>

                    {/* Bottom Caption */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "16px",
                        left: "18px",
                        right: "18px",
                        color: "#ffffff",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 750,
                          lineHeight: 1.3,
                          textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                        }}
                      >
                        {photo.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              marginTop: "2.25rem",
            }}
          >
            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => {
              const isActive = currentIndex === dotIdx;
              return (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  style={{
                    width: isActive ? "28px" : "8px",
                    height: "8px",
                    borderRadius: "9999px",
                    background: isActive
                      ? (isLight ? "#00A88F" : "#5EC098")
                      : (isLight ? "rgba(0, 168, 143, 0.25)" : "rgba(255, 255, 255, 0.2)"),
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    padding: 0,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 4, 12, 0.94)",
            backdropFilter: "blur(14px)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close photo preview"
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={22} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "1100px",
              maxHeight: "85vh",
              width: "100%",
              height: "70vh",
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8)",
            }}
          >
            <Image
              src={CULTURE_PHOTOS[lightboxIndex].src}
              alt={CULTURE_PHOTOS[lightboxIndex].alt}
              fill
              sizes="90vw"
              style={{ objectFit: "contain" }}
              priority
            />

            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1.25rem 1.75rem",
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                color: "#ffffff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                  {CULTURE_PHOTOS[lightboxIndex].title}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#5EC098", marginTop: "2px" }}>
                  {CULTURE_PHOTOS[lightboxIndex].tag}
                </div>
              </div>
              <div style={{ fontSize: "0.88rem", opacity: 0.75 }}>
                {lightboxIndex + 1} / {CULTURE_PHOTOS.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
