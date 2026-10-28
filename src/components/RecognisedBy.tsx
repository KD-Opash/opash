"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

export function RecognisedBy() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const PARTNERS = [
    {
      name: "GoodFirms",
      rating: "5.0 / 5.0",
      tag: "Top Software Agency",
      icon: (
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "6px",
            background: "#2563eb",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            fontSize: "1.05rem",
          }}
        >
          F
        </div>
      ),
    },
    {
      name: "Clutch",
      rating: "4.9 / 5.0",
      tag: "Top Developers",
      icon: (
        <div
          style={{
            background: isLight ? "#0f212d" : "#132836",
            color: "#ffffff",
            padding: "0.25rem 0.6rem",
            borderRadius: "6px",
            fontWeight: 850,
            fontSize: "0.85rem",
          }}
        >
          Clutch<span style={{ color: "#ef4444" }}>.</span>
        </div>
      ),
    },
    {
      name: "Google Rating",
      rating: "4.6 ★★★★½",
      tag: "Verified Reviews",
      icon: (
        <svg width="24" height="24" viewBox="0 0 48 48">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
        </svg>
      ),
    },
    {
      name: "Trustpilot",
      rating: "4.8 / 5.0",
      tag: "5-Star TrustScore",
      icon: (
        <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
          <path d="M18 2L22.9 12.1L34 13.7L26 21.5L27.9 32.5L18 27.3L8.1 32.5L10 21.5L2 13.7L13.1 12.1L18 2Z" fill="#00b67a" />
        </svg>
      ),
    },
    {
      name: "TopDevelopers",
      rating: "5-Star",
      tag: "Global IT Service",
      icon: (
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "5px",
            background: "#0d3b66",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            fontSize: "0.75rem",
          }}
        >
          TD
        </div>
      ),
    },
    {
      name: "techreviewer",
      rating: "Top 10",
      tag: "Web & Mobile Devs",
      icon: <span style={{ color: "#f43f5e", fontWeight: 900, fontSize: "1.2rem", lineHeight: 1 }}>’T</span>,
    },
    {
      name: "AmbitionBox",
      rating: "Top Rated",
      tag: "Engineering Culture",
      icon: (
        <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
          <path d="M18 3L32 11V25L18 33L4 25V11L18 3Z" fill="#2563eb" opacity="0.2" />
          <path d="M18 3L32 11L18 19L4 11L18 3Z" fill="#3b82f6" />
          <path d="M4 11L18 19V33L4 25V11Z" fill="#1d4ed8" />
          <path d="M32 11L18 19V33L32 25V11Z" fill="#2563eb" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="recognised-by"
      className="recognised-ticker-section"
      style={{
        padding: "2.75rem 0",
        position: "relative",
        overflow: "hidden",
        background: isLight ? "#f0f6ff" : "rgba(3, 10, 24, 0.95)",
        borderTop: isLight ? "1px solid #dbeafe" : "1px solid rgba(255, 255, 255, 0.06)",
        borderBottom: isLight ? "1px solid #dbeafe" : "1px solid rgba(255, 255, 255, 0.06)",
        contain: "paint",
      }}
    >
      {/* Edge Feather Masks */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "120px",
          background: isLight
            ? "linear-gradient(90deg, #f0f6ff 0%, transparent 100%)"
            : "linear-gradient(90deg, rgba(3, 10, 24, 0.95) 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "120px",
          background: isLight
            ? "linear-gradient(270deg, #f0f6ff 0%, transparent 100%)"
            : "linear-gradient(270deg, rgba(3, 10, 24, 0.95) 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Marquee Track (Double duplicate for seamless infinite loop) */}
      <div className="marquee-track">
        {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((item, idx) => (
          <div key={idx} className="marquee-item">
            {item.icon}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span style={{ fontSize: "0.92rem", fontWeight: 800, color: isLight ? "#0f172a" : "#f1f5f9" }}>
                  {item.name}
                </span>
                <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#2563eb" }}>
                  {item.rating}
                </span>
              </div>
              <span style={{ fontSize: "0.7rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 2rem;
          width: max-content;
          will-change: transform;
          animation: marqueeScroll 35s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 1.25rem;
          border-radius: 12px;
          background: ${isLight ? "#ffffff" : "rgba(255, 255, 255, 0.04)"};
          border: 1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"};
          box-shadow: ${isLight ? "0 2px 8px rgba(15, 23, 42, 0.04)" : "none"};
          white-space: nowrap;
          cursor: default;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .marquee-item:hover {
          transform: translateY(-2px);
          border-color: ${isLight ? "#2563eb" : "rgba(56, 189, 248, 0.4)"};
        }

        @keyframes marqueeScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}

export default RecognisedBy;
