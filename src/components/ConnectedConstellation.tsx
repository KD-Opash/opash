"use client";

import React, { useState, useEffect, useMemo } from "react";

export interface MarketNode {
  id: string;
  name: string;
  code: string;
  flag: string;
  region: string;
  role: string;
  tz: string;
  x: number; // ViewBox X (0 - 1000)
  y: number; // ViewBox Y (0 - 480)
  isHQ?: boolean;
}

// 9 Connected Global Markets
export const GLOBAL_MARKETS: MarketNode[] = [
  {
    id: "ind",
    name: "India",
    code: "IND",
    flag: "🇮🇳",
    region: "Asia HQ",
    role: "Global Engineering & Innovation Engine",
    tz: "UTC+5:30",
    x: 690,
    y: 245,
    isHQ: true,
  },
  {
    id: "usa",
    name: "United States",
    code: "USA",
    flag: "🇺🇸",
    region: "North America",
    role: "Enterprise & High-Growth Startups",
    tz: "UTC-5 / UTC-8",
    x: 230,
    y: 185,
  },
  {
    id: "can",
    name: "Canada",
    code: "CAN",
    flag: "🇨🇦",
    region: "North America",
    role: "FinTech & Cloud Systems",
    tz: "UTC-5",
    x: 210,
    y: 125,
  },
  {
    id: "gbr",
    name: "United Kingdom",
    code: "GBR",
    flag: "🇬🇧",
    region: "Europe",
    role: "SaaS Platforms & Next-Gen Web",
    tz: "UTC+0",
    x: 485,
    y: 135,
  },
  {
    id: "deu",
    name: "Germany",
    code: "DEU",
    flag: "🇩🇪",
    region: "Europe",
    role: "Industrial IoT & Mobile Architecture",
    tz: "UTC+1",
    x: 525,
    y: 145,
  },
  {
    id: "are",
    name: "UAE",
    code: "ARE",
    flag: "🇦🇪",
    region: "Middle East",
    role: "Digital Transformation & GovTech",
    tz: "UTC+4",
    x: 625,
    y: 225,
  },
  {
    id: "sgp",
    name: "Singapore",
    code: "SGP",
    flag: "🇸🇬",
    region: "Southeast Asia",
    role: "Cross-Border FinTech & AI Pipelines",
    tz: "UTC+8",
    x: 780,
    y: 300,
  },
  {
    id: "aus",
    name: "Australia",
    code: "AUS",
    flag: "🇦🇺",
    region: "Oceania",
    role: "Enterprise Cloud & Mobile Ecosystems",
    tz: "UTC+10",
    x: 880,
    y: 370,
  },
  {
    id: "bra",
    name: "Brazil",
    code: "BRA",
    flag: "🇧🇷",
    region: "South America",
    role: "Consumer Apps & Scale-Up Engineering",
    tz: "UTC-3",
    x: 330,
    y: 335,
  },
];

// Arcs radiating from India HQ to the 8 international markets
interface FlightArc {
  targetId: string;
  d: string;
  pulseDelay: string;
  pulseDuration: string;
}

const HQ_FLIGHT_ARCS: FlightArc[] = [
  { targetId: "usa", d: "M 690 245 Q 450 65, 230 185", pulseDelay: "0s", pulseDuration: "4.8s" },
  { targetId: "can", d: "M 690 245 Q 440 40, 210 125", pulseDelay: "0.6s", pulseDuration: "5.0s" },
  { targetId: "gbr", d: "M 690 245 Q 580 135, 485 135", pulseDelay: "1.2s", pulseDuration: "4.4s" },
  { targetId: "deu", d: "M 690 245 Q 600 155, 525 145", pulseDelay: "1.8s", pulseDuration: "4.2s" },
  { targetId: "are", d: "M 690 245 Q 655 210, 625 225", pulseDelay: "2.4s", pulseDuration: "3.6s" },
  { targetId: "sgp", d: "M 690 245 Q 735 295, 780 300", pulseDelay: "3.0s", pulseDuration: "3.8s" },
  { targetId: "aus", d: "M 690 245 Q 795 345, 880 370", pulseDelay: "3.6s", pulseDuration: "4.6s" },
  { targetId: "bra", d: "M 690 245 Q 510 380, 330 335", pulseDelay: "4.2s", pulseDuration: "5.4s" },
];

// Procedural world landmass dot matrix points (1000 x 480 grid space)
const CONTINENT_DOTS: [number, number][] = [
  // North America
  [150, 95], [175, 95], [200, 95], [225, 90], [250, 95],
  [130, 120], [155, 120], [180, 120], [205, 120], [230, 120], [255, 120], [280, 115],
  [140, 145], [165, 145], [190, 145], [215, 145], [240, 145], [265, 145], [290, 145],
  [160, 170], [185, 170], [210, 170], [235, 170], [260, 170], [285, 170], [305, 170],
  [180, 195], [205, 195], [230, 195], [255, 195], [280, 195],
  [195, 220], [220, 220], [245, 220], [265, 220],
  [210, 245], [230, 245], [250, 250],
  [225, 275], [240, 280],

  // South America
  [290, 290], [315, 295],
  [280, 320], [305, 320], [330, 320], [355, 325],
  [290, 345], [315, 345], [340, 345], [365, 350],
  [300, 370], [325, 370], [350, 370],
  [310, 395], [335, 395],
  [320, 420], [335, 420],
  [325, 445],

  // Europe
  [470, 110], [495, 110], [520, 100], [545, 95],
  [460, 135], [485, 135], [510, 130], [535, 130], [560, 130],
  [475, 160], [500, 160], [525, 160], [550, 160], [575, 160],
  [465, 185], [490, 185], [515, 185], [540, 185], [565, 185],

  // Africa
  [465, 215], [490, 215], [515, 215], [540, 215], [565, 215], [590, 220],
  [455, 245], [480, 245], [505, 245], [530, 245], [555, 245], [580, 250],
  [470, 275], [495, 275], [520, 275], [545, 275], [570, 280],
  [485, 305], [510, 305], [535, 305], [560, 310],
  [500, 335], [525, 335], [550, 340],
  [510, 365], [535, 370],
  [520, 395],

  // Asia / Middle East / India
  [615, 150], [640, 145], [665, 140], [690, 135], [715, 130], [740, 130], [765, 135], [790, 140], [815, 145],
  [605, 175], [630, 175], [655, 170], [680, 170], [705, 165], [730, 165], [755, 165], [780, 170], [805, 175], [830, 180],
  [600, 205], [625, 205], [650, 200], [675, 200], [700, 195], [725, 195], [750, 195], [775, 200], [800, 205], [825, 210],
  [610, 230], [635, 230], [660, 230], [685, 230], [710, 230], [735, 230], [760, 230], [785, 235], [810, 240],
  [670, 260], [695, 260], [720, 260], [750, 265], [775, 270],
  [685, 285], [710, 285], [765, 295], [790, 300],
  [700, 310], [775, 325], [800, 330],

  // Australia & New Zealand
  [840, 340], [865, 335], [890, 340],
  [830, 365], [855, 365], [880, 365], [905, 370],
  [845, 395], [870, 395], [895, 395],
  [860, 420], [885, 420], [925, 430]
];

export default function ConnectedConstellation() {
  const [activeMarketId, setActiveMarketId] = useState<string>("usa");
  const [hoveredMarketId, setHoveredMarketId] = useState<string | null>(null);

  // Auto-cycle through the 8 international markets when user is not actively hovering
  useEffect(() => {
    if (hoveredMarketId !== null) return;

    const marketIds = ["usa", "can", "gbr", "deu", "are", "sgp", "aus", "bra"];
    let idx = marketIds.indexOf(activeMarketId);
    if (idx === -1) idx = 0;

    const timer = setInterval(() => {
      idx = (idx + 1) % marketIds.length;
      setActiveMarketId(marketIds[idx]);
    }, 3800);

    return () => clearInterval(timer);
  }, [hoveredMarketId, activeMarketId]);

  const currentFocusId = hoveredMarketId || activeMarketId;
  const currentMarket = useMemo(
    () => GLOBAL_MARKETS.find((m) => m.id === currentFocusId) || GLOBAL_MARKETS[1],
    [currentFocusId]
  );

  return (
    <div
      className="global-radar-wrapper"
      role="region"
      aria-label="Interactive Global Delivery Network: 9 Connected Markets"
    >
      {/* 1. Header Bar: Title, Live Status Indicator, and Active Market Meta */}
      <div className="global-radar-header">
        <div className="global-radar-title-group">
          <span className="global-radar-badge">GLOBAL NETWORK</span>
          <span className="global-radar-title">9 Connected International Markets</span>
        </div>

        <div className="global-radar-status-badge">
          <span className="global-radar-status-ping" />
          <span className="global-radar-status-text">
            HQ &rarr; {currentMarket.flag} {currentMarket.name}
          </span>
        </div>
      </div>

      {/* 2. Interactive SVG Dot-Matrix World Radar Stage */}
      <div className="global-radar-stage">
        <svg
          className="global-radar-svg"
          viewBox="0 0 1000 480"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            {/* Travelling Photon Pulse Gradient */}
            <linearGradient id="radarPulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00A88F" stopOpacity="0" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#00A88F" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Background Dot-Matrix World Landmasses */}
          <g className="global-radar-landmass-dots">
            {CONTINENT_DOTS.map(([cx, cy], i) => (
              <circle
                key={`dot-${i}`}
                cx={cx}
                cy={cy}
                r="1.8"
                className="global-radar-map-dot"
              />
            ))}
          </g>

          {/* Dynamic Flight Arcs from HQ to the 8 International Markets */}
          <g className="global-radar-flight-arcs">
            {HQ_FLIGHT_ARCS.map((arc) => {
              const isActive = currentFocusId === arc.targetId;
              return (
                <g key={`arc-group-${arc.targetId}`}>
                  {/* Base trajectory line */}
                  <path
                    d={arc.d}
                    className={`global-radar-arc-base ${isActive ? "active" : ""}`}
                  />
                  {/* Energy photon beam travelling along the trajectory */}
                  <path
                    d={arc.d}
                    className={`global-radar-arc-pulse ${isActive ? "active" : ""}`}
                    style={{
                      animationDuration: arc.pulseDuration,
                      animationDelay: arc.pulseDelay,
                    }}
                  />
                </g>
              );
            })}
          </g>

          {/* Interactive Market Pins & HQ Radar Node */}
          {GLOBAL_MARKETS.map((market) => {
            const isHQ = !!market.isHQ;
            const isFocused = currentFocusId === market.id;

            return (
              <g
                key={`market-pin-${market.id}`}
                className={`global-radar-pin-group ${isHQ ? "is-hq" : ""} ${isFocused ? "focused" : ""}`}
                transform={`translate(${market.x}, ${market.y})`}
                onMouseEnter={() => setHoveredMarketId(market.id)}
                onMouseLeave={() => setHoveredMarketId(null)}
                onClick={() => setActiveMarketId(market.id)}
                style={{ cursor: "pointer" }}
              >
                {/* Expanding Radar Halo Rings for HQ and Focused Pin */}
                {(isHQ || isFocused) && (
                  <>
                    <circle cx="0" cy="0" r="14" className="global-radar-halo-1" />
                    <circle cx="0" cy="0" r="24" className="global-radar-halo-2" />
                  </>
                )}

                {/* Outer Target Ring */}
                <circle
                  cx="0"
                  cy="0"
                  r={isHQ ? "7" : isFocused ? "6" : "4.5"}
                  className="global-radar-pin-ring"
                />

                {/* Core Radiant Beacon Dot */}
                <circle
                  cx="0"
                  cy="0"
                  r={isHQ ? "4.2" : isFocused ? "3.6" : "2.5"}
                  className="global-radar-pin-core"
                />

                {/* Pin Text Label */}
                <text
                  x="0"
                  y={market.y > 320 ? -14 : 18}
                  textAnchor="middle"
                  className={`global-radar-pin-label ${isFocused ? "focused" : ""}`}
                >
                  {market.name}
                  {isHQ ? " (HQ)" : ""}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating Context Info Panel for Focused Market */}
        <div className="global-radar-focus-card">
          <div className="global-radar-focus-header">
            <span className="global-radar-focus-flag">{currentMarket.flag}</span>
            <div className="global-radar-focus-titles">
              <span className="global-radar-focus-name">{currentMarket.name}</span>
              <span className="global-radar-focus-region">{currentMarket.region}</span>
            </div>
            <span className="global-radar-focus-tz">{currentMarket.tz}</span>
          </div>
          <div className="global-radar-focus-role">
            <span className="global-radar-focus-dot" />
            <span>{currentMarket.role}</span>
          </div>
        </div>
      </div>

      {/* 3. Bottom Compact Quick-Selection Rail */}
      <div className="global-radar-pills-rail">
        {GLOBAL_MARKETS.map((market) => {
          const isSelected = currentFocusId === market.id;
          return (
            <button
              key={`pill-${market.id}`}
              type="button"
              className={`global-radar-pill-chip ${isSelected ? "selected" : ""} ${market.isHQ ? "is-hq" : ""}`}
              onClick={() => setActiveMarketId(market.id)}
              onMouseEnter={() => setHoveredMarketId(market.id)}
              onMouseLeave={() => setHoveredMarketId(null)}
              aria-label={`Select ${market.name} Market`}
            >
              <span className="global-radar-pill-flag">{market.flag}</span>
              <span className="global-radar-pill-code">{market.code}</span>
              {market.isHQ && <span className="global-radar-pill-hq">HQ</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
