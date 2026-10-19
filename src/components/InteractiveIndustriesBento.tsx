"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Search,
  X,
  ArrowUpRight,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

export interface IndustryItem {
  id: string;
  name: string;
  category: "finance" | "health" | "commerce" | "enterprise";
  headline: string;
  description: string;
  stat: string;
  statLabel: string;
  tags: string[];
  accent: string;
  accentRgb: string;
  customIconType: string;
  featured?: boolean;
}

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: "fintech",
    name: "FinTech & Banking",
    category: "finance",
    headline: "High-Frequency Financial Engines",
    description:
      "Enterprise transaction rails, real-time fraud mitigation, micro-ledger architectures, and PCI-DSS Level 1 compliant open-banking integrations.",
    stat: "99.999% SLA",
    statLabel: "System Reliability",
    tags: ["Open Banking", "Micro-Ledgers", "PCI-DSS Level 1", "Real-Time Clearing"],
    accent: "#8b5cf6",
    accentRgb: "139, 92, 246",
    customIconType: "fintech",
    featured: true,
  },
  {
    id: "healthcare",
    name: "Health Care & Life Sciences",
    category: "health",
    headline: "Connected Medical Systems",
    description:
      "Secure patient portal architectures, low-latency WebRTC telehealth video feeds, and interoperable HL7 / FHIR data pipelines.",
    stat: "HIPAA & HL7",
    statLabel: "Regulatory Compliance",
    tags: ["Telehealth WebRTC", "FHIR / HL7 APIs", "EHR Interop", "Clinical AI"],
    accent: "#0ea5e9",
    accentRgb: "14, 165, 233",
    customIconType: "health",
    featured: true,
  },
  {
    id: "ecommerce",
    name: "eCommerce & Omnichannel",
    category: "commerce",
    headline: "High-Scale Composable Commerce",
    description:
      "Modern headless storefronts, sub-second checkout pipelines, dynamic AI merchandising, and multi-warehouse inventory sync.",
    stat: "100k+ Peak TPS",
    statLabel: "Throughput Capacity",
    tags: ["Headless Commerce", "Omnichannel ERP", "AI Merchandising", "Multi-Currency"],
    accent: "#f59e0b",
    accentRgb: "245, 158, 11",
    customIconType: "ecommerce",
    featured: true,
  },
  {
    id: "insurtech",
    name: "InsureTech & Underwriting",
    category: "finance",
    headline: "Automated Policy Lifecycles",
    description:
      "Automated risk rating engines, biometric identity verification, and straight-through automated claims settlement systems.",
    stat: "4.2x Faster",
    statLabel: "Claims Processing",
    tags: ["Risk AI Modeling", "Automated Claims", "Underwriting APIs", "Telematics"],
    accent: "#f43f5e",
    accentRgb: "244, 63, 94",
    customIconType: "shield",
  },
  {
    id: "education",
    name: "EdTech & Learning Platforms",
    category: "enterprise",
    headline: "Adaptive Digital Academies",
    description:
      "Interactive virtual classrooms, automated AI-proctoring suites, gamified knowledge pathways, and SCORM/xAPI compliant engines.",
    stat: "500k+ Active",
    statLabel: "Concurrent Learners",
    tags: ["LMS Platforms", "AI Proctoring", "Adaptive Learning", "SCORM / xAPI"],
    accent: "#10b981",
    accentRgb: "16, 185, 129",
    customIconType: "education",
  },
  {
    id: "realestate",
    name: "Real Estate & PropTech",
    category: "commerce",
    headline: "Spatial & Asset Intelligence",
    description:
      "Immersive 3D digital twins, tenant lifecycle ERPs, automated escrow smart contracts, and IoT facility monitoring systems.",
    stat: "3D Virtual Tours",
    statLabel: "Spatial Visualization",
    tags: ["Digital Twins", "Smart Lease ERP", "Automated Escrow", "Facility IoT"],
    accent: "#ec4899",
    accentRgb: "236, 72, 153",
    customIconType: "realestate",
  },
  {
    id: "travel",
    name: "Travel & Hospitality",
    category: "commerce",
    headline: "Dynamic Global Booking",
    description:
      "Unified flight & hotel distribution, AI dynamic pricing matrices, real-time itinerary feeds, and cross-carrier loyalty rewards.",
    stat: "Global GDS",
    statLabel: "Live Inventory Sync",
    tags: ["GDS Integration", "Dynamic Pricing", "PNR Sync", "Loyalty Engines"],
    accent: "#eab308",
    accentRgb: "234, 179, 8",
    customIconType: "travel",
  },
  {
    id: "telecom",
    name: "Telecommunication & 5G",
    category: "enterprise",
    headline: "Carrier-Grade Mesh Systems",
    description:
      "High-concurrency OSS/BSS platforms, 5G network slicing controllers, and distributed self-healing VoIP infrastructure.",
    stat: "< 5ms Latency",
    statLabel: "Mesh Telemetry",
    tags: ["5G Core Routing", "OSS / BSS Systems", "VoIP Mesh", "Carrier Billing"],
    accent: "#a855f7",
    accentRgb: "168, 85, 247",
    customIconType: "telecom",
  },
  {
    id: "industrial",
    name: "Industrial Tech & IoT",
    category: "enterprise",
    headline: "Smart Factory Automation",
    description:
      "Industrial edge computing, predictive machinery maintenance AI, and real-time SCADA sensor monitoring architectures.",
    stat: "Industry 4.0",
    statLabel: "Edge Standard",
    tags: ["SCADA Telemetry", "Predictive AI", "Edge Computing", "Digital Sensors"],
    accent: "#06b6d4",
    accentRgb: "6, 182, 212",
    customIconType: "industrial",
  },
  {
    id: "ngos",
    name: "NGOs & Public Sector",
    category: "enterprise",
    headline: "Transparent Global Aid",
    description:
      "Grant disbursement tracking, multi-region donor engagement portals, and WCAG AAA compliant accessibility platforms.",
    stat: "100% Audit",
    statLabel: "Aid Traceability",
    tags: ["Grant Tracking", "Donor Portals", "WCAG AAA", "Impact Analytics"],
    accent: "#2dd4bf",
    accentRgb: "45, 212, 191",
    customIconType: "ngos",
  },
];

const CATEGORY_TABS = [
  { id: "all", label: "All Sectors" },
  { id: "finance", label: "FinTech & Insurance" },
  { id: "health", label: "Healthcare & Life" },
  { id: "commerce", label: "Commerce & Travel" },
  { id: "enterprise", label: "Enterprise & IoT" },
];

export function InteractiveIndustriesBento() {
  const { theme } = useTheme();
  const isLightMode = theme === "light";

  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIndustries = useMemo(() => {
    let list = INDUSTRIES_LIST;
    if (activeTab !== "all") {
      list = list.filter((item) => item.category === activeTab);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.headline.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeTab, searchQuery]);

  return (
    <section
      id="industries-section"
      className="industries-bento-section relative w-full overflow-hidden select-none"
      aria-label="Industries We Specialize In"
    >
      {/* Dynamic Ambient Glow */}
      <div className="industries-bento-ambient" aria-hidden="true" />

      <div className="container-custom relative z-10">
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="industries-bento-header text-center">
          <div className="industries-bento-badge">
            <Sparkles size={13} />
            <span>INDUSTRY SPECIALIZATIONS</span>
          </div>

          <h2 className="industries-bento-title">
            Industries{" "}
            <span className="industries-bento-gradient">We Specialize In</span>
          </h2>

          <p className="industries-bento-desc">
            Over 8 years of specialized engineering experience architecting enterprise-grade digital platforms for FinTech, Healthcare, eCommerce, and Industry 4.0 ecosystems.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. FILTER & SEARCH CONTROLS                                               */}
        {/* ========================================================================= */}
        <div className="industries-bento-controls">
          {/* Category Tabs */}
          <div className="industries-bento-tabs">
            {CATEGORY_TABS.map((tab) => {
              const count =
                tab.id === "all"
                  ? INDUSTRIES_LIST.length
                  : INDUSTRIES_LIST.filter((i) => i.category === tab.id).length;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`industries-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                >
                  <span>{tab.label}</span>
                  <span className="industries-tab-count">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="industries-search-box">
            <Search size={15} className="industries-search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search industries, capabilities, tags..."
              className="industries-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="industries-search-clear"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. MODERN INTERACTIVE BENTO GRID                                          */}
        {/* ========================================================================= */}
        <div className="industries-bento-grid">
          <AnimatePresence mode="popLayout">
            {filteredIndustries.map((item, idx) => {
              const isHero = item.featured && activeTab === "all" && !searchQuery;

              return (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 14 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 10 }}
                  transition={{ duration: 0.24, delay: idx * 0.03 }}
                  className={`industries-bento-card ${isHero ? "hero-card" : ""}`}
                  style={
                    {
                      "--ind-accent": item.accent,
                      "--ind-accent-rgb": item.accentRgb,
                    } as React.CSSProperties
                  }
                >
                  {/* Card Glowing Ambient Background */}
                  <div className="industries-card-ambient" />

                  {/* Card Header: 3D Hologram Icon + Stat Pill */}
                  <div className="industries-card-top">
                    <div className="industries-icon-pod">
                      {renderCustomIcon(item.customIconType, item.accent, item.accentRgb)}
                    </div>

                    <div className="industries-stat-pill">
                      <span className="stat-value">{item.stat}</span>
                      <span className="stat-label">{item.statLabel}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="industries-card-body">
                    <div className="industries-card-meta">
                      <h3 className="industries-card-title">{item.name}</h3>
                      <p className="industries-card-headline">{item.headline}</p>
                    </div>

                    <p className="industries-card-desc">{item.description}</p>
                  </div>

                  {/* Card Footer: Capabilities Tags + Action Indicator */}
                  <div className="industries-card-footer">
                    <div className="industries-tags-cluster">
                      {item.tags.map((tag) => (
                        <span key={tag} className="industries-tag-badge">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="industries-card-link">
                      <span>Explore Platform</span>
                      <ArrowUpRight size={14} className="link-arrow" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredIndustries.length === 0 && (
          <div className="industries-empty-state">
            <p>No industries found matching &ldquo;{searchQuery}&rdquo;</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveTab("all");
              }}
              className="industries-reset-btn"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. BOTTOM ENTERPRISE TRUST HIGHLIGHTS                                     */}
        {/* ========================================================================= */}
        <div className="industries-bento-footer">
          <div className="industries-trust-pill">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span>Enterprise Compliance (HIPAA, PCI-DSS, SOC2)</span>
          </div>
          <div className="industries-trust-pill">
            <Cpu size={16} className="text-cyan-400" />
            <span>Dedicated Domain Solutions Architects</span>
          </div>
          <div className="industries-trust-pill">
            <Layers size={16} className="text-violet-400" />
            <span>Microservices & Event-Driven Pipelines</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * High-definition 3D neon vector icon renderer
 */
function renderCustomIcon(type: string, accent: string, accentRgb: string) {
  switch (type) {
    case "shield": // InsureTech
      return (
        <svg viewBox="0 0 70 70" width="46" height="46" fill="none">
          <path
            d="M 35 12 L 54 20 V 36 C 54 48 35 58 35 58 C 35 58 16 48 16 36 V 20 Z"
            fill={`rgba(${accentRgb}, 0.22)`}
            stroke={accent}
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          <path
            d="M 27 34 L 33 40 L 45 28"
            stroke="#ffffff"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="35" cy="35" r="16" stroke={accent} strokeWidth="1.2" opacity="0.4" />
        </svg>
      );

    case "health": // Health Care
      return (
        <svg viewBox="0 0 70 70" width="46" height="46" fill="none">
          <path
            d="M 35 18 C 35 18 25 10 18 17 C 11 24 12 36 21 44 L 35 57 L 49 44 C 58 36 59 24 52 17 C 45 10 35 18 35 18 Z"
            fill={`rgba(${accentRgb}, 0.24)`}
            stroke={accent}
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path
            d="M 24 35 H 30 L 33 28 L 37 42 L 40 35 H 46"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "fintech": // FinTech
      return (
        <svg viewBox="0 0 70 70" width="46" height="46" fill="none">
          <path
            d="M 14 26 L 35 12 L 56 26 Z"
            fill={`rgba(${accentRgb}, 0.25)`}
            stroke={accent}
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <rect x="18" y="26" width="34" height="4" fill="#ffffff" />
          <rect x="20" y="30" width="6" height="20" rx="1.5" fill={accent} />
          <rect x="32" y="30" width="6" height="20" rx="1.5" fill="#ffffff" />
          <rect x="44" y="30" width="6" height="20" rx="1.5" fill={accent} />
          <rect x="14" y="50" width="42" height="6" rx="2" fill={`rgba(${accentRgb}, 0.65)`} stroke={accent} strokeWidth="1.8" />
          <circle cx="35" cy="20" r="3.5" fill="#ffffff" />
        </svg>
      );

    case "ecommerce": // Ecommerce
      return (
        <svg viewBox="0 0 70 70" width="46" height="46" fill="none">
          <path
            d="M 14 16 H 22 L 28 44 H 52 L 58 22 H 24"
            stroke={accent}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={`rgba(${accentRgb}, 0.22)`}
          />
          <circle cx="30" cy="53" r="4.5" fill="#ffffff" stroke={accent} strokeWidth="2.2" />
          <circle cx="49" cy="53" r="4.5" fill="#ffffff" stroke={accent} strokeWidth="2.2" />
          <path d="M 32 30 H 48 M 36 36 H 44" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case "education": // Education
      return (
        <svg viewBox="0 0 70 70" width="46" height="46" fill="none">
          <path
            d="M 12 26 L 35 13 L 58 26 L 35 39 Z"
            fill={`rgba(${accentRgb}, 0.3)`}
            stroke={accent}
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path
            d="M 20 32 V 46 C 20 51 35 56 35 56 C 35 56 50 51 50 46 V 32"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M 54 29 V 48" stroke={accent} strokeWidth="2.8" strokeLinecap="round" />
          <circle cx="54" cy="50" r="3" fill="#ffffff" />
        </svg>
      );

    case "realestate": // Real Estate
      return (
        <svg viewBox="0 0 70 70" width="46" height="46" fill="none">
          <path
            d="M 23 27 L 35 15 L 47 27 V 39 H 23 Z"
            fill={`rgba(${accentRgb}, 0.26)`}
            stroke={accent}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <rect x="31" y="29" width="8" height="10" rx="1.5" fill="#ffffff" />
          <path
            d="M 12 51 C 18 45 28 44 38 46 C 48 48 56 42 58 40"
            stroke="#ffffff"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M 12 51 L 19 59 L 34 53"
            stroke={accent}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "travel": // Travel
      return (
        <svg viewBox="0 0 70 70" width="46" height="46" fill="none">
          <rect x="15" y="18" width="40" height="36" rx="6" fill={`rgba(${accentRgb}, 0.16)`} stroke={accent} strokeWidth="2.4" />
          <line x1="15" y1="27" x2="55" y2="27" stroke="#ffffff" strokeWidth="2.2" />
          <circle cx="24" cy="18" r="2.8" fill="#ffffff" />
          <circle cx="46" cy="18" r="2.8" fill="#ffffff" />
          <path
            d="M 35 32 L 35 48 M 26 38 L 44 38"
            stroke={accent}
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          <circle cx="35" cy="40" r="9" stroke="#ffffff" strokeWidth="1.6" strokeDasharray="3 3" />
        </svg>
      );

    case "telecom": // Telecom
      return (
        <svg viewBox="0 0 70 70" width="46" height="46" fill="none">
          <rect x="16" y="16" width="38" height="30" rx="5" fill={`rgba(${accentRgb}, 0.22)`} stroke={accent} strokeWidth="2.6" />
          <line x1="35" y1="46" x2="35" y2="54" stroke="#ffffff" strokeWidth="3.2" />
          <line x1="25" y1="54" x2="45" y2="54" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="35" cy="31" r="8" stroke={accent} strokeWidth="2" />
          <circle cx="35" cy="31" r="3" fill="#ffffff" />
        </svg>
      );

    case "industrial": // Industrial
      return (
        <svg viewBox="0 0 70 70" width="46" height="46" fill="none">
          <g transform="translate(26, 26)">
            <circle r="12" fill={`rgba(${accentRgb}, 0.28)`} stroke={accent} strokeWidth="2.6" />
            <circle r="4.5" fill="#ffffff" />
            <line x1="0" y1="-14" x2="0" y2="14" stroke={accent} strokeWidth="3.2" />
            <line x1="-14" y1="0" x2="14" y2="0" stroke={accent} strokeWidth="3.2" />
          </g>
          <g transform="translate(46, 42)">
            <circle r="9" fill={`rgba(${accentRgb}, 0.22)`} stroke="#ffffff" strokeWidth="2.2" />
            <circle r="3" fill={accent} />
          </g>
        </svg>
      );

    case "ngos": // NGOs
    default:
      return (
        <svg viewBox="0 0 70 70" width="46" height="46" fill="none">
          <path
            d="M 35 34 C 35 21 47 21 47 27 C 47 35 35 44 35 44 C 35 44 23 35 23 27 C 23 21 35 21 35 34 Z"
            fill={`rgba(${accentRgb}, 0.35)`}
            stroke={accent}
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path
            d="M 15 48 C 23 44 31 46 38 48 C 46 50 53 46 55 44"
            stroke="#ffffff"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export default InteractiveIndustriesBento;
