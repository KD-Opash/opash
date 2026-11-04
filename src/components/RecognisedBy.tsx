"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

export function RecognisedBy() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // The 9 Verified Review Authorities from Client Image
  const REVIEW_AUTHORITIES = [
    // 1. GoodFirms
    {
      id: "goodfirms",
      name: "GoodFirms",
      rating: "5.0 / 5.0",
      tag: "Top Software Agency",
      icon: (
        <img
          src="/images/authorities/goodfirms_icon.png"
          alt="GoodFirms"
          width={30}
          height={30}
          style={{ objectFit: "contain", display: "block" }}
        />
      ),
    },

    // 2. TopDevelopers
    {
      id: "topdevelopers",
      name: "TopDevelopers",
      rating: "5-Star Rated",
      tag: "Global IT Service",
      icon: (
        <img
          src="/images/authorities/topdevelopers_icon.png"
          alt="TopDevelopers"
          width={30}
          height={30}
          style={{ objectFit: "contain", display: "block" }}
        />
      ),
    },

    // 3. techreviewer
    {
      id: "techreviewer",
      name: "techreviewer",
      rating: "Top 10",
      tag: "Web & Mobile Devs",
      icon: (
        <img
          src="/images/authorities/techreviewer_icon.png"
          alt="techreviewer"
          width={26}
          height={26}
          style={{ objectFit: "contain", display: "block" }}
        />
      ),
    },

    // 4. Clutch
    {
      id: "clutch",
      name: "Clutch",
      rating: "4.9 / 5.0",
      tag: "Top Developers",
      icon: (
        <img
          src="/images/authorities/clutch.png"
          alt="Clutch"
          width={32}
          height={32}
          style={{ objectFit: "contain", borderRadius: "6px", display: "block" }}
        />
      ),
    },

    // 5. AmbitionBox
    {
      id: "ambitionbox",
      name: "AmbitionBox",
      rating: "Top Rated",
      tag: "Engineering Culture",
      icon: (
        <img
          src="/images/authorities/ambitionbox_icon.png"
          alt="AmbitionBox"
          width={28}
          height={28}
          style={{ objectFit: "contain", display: "block" }}
        />
      ),
    },

    // 6. Google Rating
    {
      id: "googlerating",
      name: "Google Rating",
      rating: "4.6 ★★★★★",
      tag: "Verified Reviews",
      icon: (
        <img
          src="/images/authorities/googlerating_icon.png"
          alt="Google Rating"
          width={28}
          height={28}
          style={{ objectFit: "contain", display: "block" }}
        />
      ),
    },

    // 7. TECHIMPLY
    {
      id: "techimply",
      name: "TECHIMPLY",
      rating: "Top Software Dev",
      tag: "Top Company Award",
      icon: (
        <img
          src="/images/authorities/techimply.png"
          alt="TECHIMPLY"
          width={34}
          height={32}
          style={{ objectFit: "contain", display: "block" }}
        />
      ),
    },

    // 8. DesignRush
    {
      id: "designrush",
      name: "DesignRush",
      rating: "Top Mobile Dev",
      tag: "Top Agency Recognition",
      icon: (
        <img
          src="/images/authorities/designrush.png"
          alt="DesignRush"
          width={26}
          height={34}
          style={{ objectFit: "contain", display: "block" }}
        />
      ),
    },

    // 9. Trustpilot
    {
      id: "trustpilot",
      name: "Trustpilot",
      rating: "4.8 / 5.0",
      tag: "5-Star TrustScore",
      icon: (
        <img
          src="/images/authorities/trustpilot_icon.png"
          alt="Trustpilot"
          width={30}
          height={30}
          style={{ objectFit: "contain", display: "block" }}
        />
      ),
    },
  ];

  // Seamless repeating items for 100% infinite horizontal marquee
  const MARQUEE_ITEMS = [
    ...REVIEW_AUTHORITIES,
    ...REVIEW_AUTHORITIES,
    ...REVIEW_AUTHORITIES,
    ...REVIEW_AUTHORITIES,
  ];

  return (
    <section
      id="recognised-by"
      className="recognised-ticker-section"
      style={{
        padding: "2.5rem 0",
        position: "relative",
        overflow: "hidden",
        background: "transparent",
        border: "none",
        outline: "none",
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
          width: "140px",
          background: isLight
            ? "linear-gradient(90deg, #f8fafc 0%, transparent 100%)"
            : "linear-gradient(90deg, #060b13 0%, transparent 100%)",
          zIndex: 4,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "140px",
          background: isLight
            ? "linear-gradient(270deg, #f8fafc 0%, transparent 100%)"
            : "linear-gradient(270deg, #060b13 0%, transparent 100%)",
          zIndex: 4,
          pointerEvents: "none",
        }}
      />

      {/* Single Clean Horizontal Marquee Track */}
      <div className="marquee-track">
        {MARQUEE_ITEMS.map((item, idx) => (
          <div key={`badge-${item.id}-${idx}`} className="horizontal-badge">
            {item.icon}
            <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <span style={{ fontSize: "0.92rem", fontWeight: 800, color: isLight ? "#0f172a" : "#f1f5f9" }}>
                  {item.name}
                </span>
                <span style={{ fontSize: "0.78rem", fontWeight: 750, color: isLight ? "#0284c7" : "#00ffd1" }}>
                  {item.rating}
                </span>
              </div>
              <span style={{ fontSize: "0.68rem", color: isLight ? "#64748b" : "#94a3b8" }}>
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
          gap: 1.5rem;
          width: max-content;
          will-change: transform;
          animation: marqueeHorizontalScroll 85s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .horizontal-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 1.35rem;
          border-radius: 14px;
          white-space: nowrap;
          cursor: default;
          background: ${isLight ? "#ffffff" : "rgba(255, 255, 255, 0.04)"};
          border: 1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"};
          box-shadow: ${isLight ? "0 4px 14px rgba(15, 23, 42, 0.05)" : "0 4px 18px rgba(0, 0, 0, 0.4)"};
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .horizontal-badge:hover {
          transform: translateY(-2px);
          border-color: ${isLight ? "#38bdf8" : "rgba(0, 255, 209, 0.35)"};
          box-shadow: ${isLight
            ? "0 8px 24px rgba(15, 23, 42, 0.1)"
            : "0 8px 24px rgba(0, 255, 209, 0.15)"};
        }

        @keyframes marqueeHorizontalScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(calc(-100% / 2), 0, 0);
          }
        }
      `}</style>
    </section>
  );
}

export default RecognisedBy;
