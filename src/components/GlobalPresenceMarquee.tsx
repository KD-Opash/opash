"use client";

import React from "react";

export interface CountryPresence {
  name: string;
  flag: string;
  code: string;
}

const GLOBAL_PRESENCE: CountryPresence[] = [
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

export default function GlobalPresenceMarquee({
  className = "",
}: {
  className?: string;
}) {
  // Quadruple items to ensure completely seamless infinite scrolling on all screen widths
  const marqueeItems = [
    ...GLOBAL_PRESENCE,
    ...GLOBAL_PRESENCE,
    ...GLOBAL_PRESENCE,
    ...GLOBAL_PRESENCE,
  ];

  return (
    <div
      className={`header-subline-marquee ${className}`.trim()}
      aria-label="Opash Global Delivery Network Locations"
    >
      <div className="header-marquee-track">
        {marqueeItems.map((item, index) => (
          <div key={`${item.code}-${index}`} className="header-marquee-item">
            <span className="marquee-item-flag" role="img" aria-label={item.name}>
              {item.flag}
            </span>
            <span className="marquee-item-name">{item.name}</span>
            <span className="marquee-item-divider">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
