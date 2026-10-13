"use client";

import React, { useState, useEffect } from "react";
import { 
  Folder as FolderIcon, 
  FileText, 
  ChevronRight, 
  Sparkles, 
  Layers, 
  ArrowUpRight, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";

export interface FolderItem {
  title: string;
  image?: string;
  desc?: string;
  badge?: string;
  metric?: string;
  tags?: string[];
  meta?: string;
  href?: string;
  active?: boolean;
}

export interface FolderProps {
  label: string;
  items?: FolderItem[];
  mode?: "book" | "folder" | "card";
  variant?: "glass" | "solid" | "neon";
  color?: string; // e.g. "#476D9A", "#5EC098", "#7aa7ff"
  theme?: "dark" | "light" | "auto";
  active?: boolean;
  isOpen?: boolean;
  onItemClick?: (item: FolderItem, index: number) => void;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function Folder({
  label,
  items = [],
  mode = "folder",
  variant = "glass",
  color = "#476D9A",
  theme = "auto",
  active = false,
  isOpen: controlledIsOpen,
  onItemClick,
  onClick,
  className = "",
  children,
}: FolderProps) {
  const [internalHover, setInternalHover] = useState(false);
  const [internalOpen, setInternalOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState<boolean>(false);

  // Dynamic real-time theme observer
  useEffect(() => {
    const checkTheme = () => {
      if (theme === "light") {
        setIsLightMode(true);
      } else if (theme === "dark") {
        setIsLightMode(false);
      } else {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        setIsLightMode(currentTheme === "light");
      }
    };

    checkTheme();

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes" && m.attributeName === "data-theme") {
          checkTheme();
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, [theme]);

  const isExpanded = controlledIsOpen !== undefined ? controlledIsOpen : internalOpen || internalHover;

  const handleFolderClick = () => {
    if (onClick) onClick();
    if (controlledIsOpen === undefined) {
      setInternalOpen((prev) => !prev);
    }
  };

  const handleItemClick = (e: React.MouseEvent, item: FolderItem, idx: number) => {
    e.stopPropagation();
    if (onItemClick) {
      onItemClick(item, idx);
    }
  };

  const accentColor = color || (isLightMode ? "#1d4ed8" : "#476D9A");

  // Palette tokens based on theme
  const styles = isLightMode
    ? {
        shellBg: "linear-gradient(150deg, #ffffff 0%, #f8fafc 55%, #f1f5f9 100%)",
        shellBorder: active ? `2px solid ${accentColor}` : "1px solid rgba(15, 23, 42, 0.12)",
        shellShadow: active
          ? `0 20px 45px -10px ${accentColor}30, 0 4px 15px rgba(15, 23, 42, 0.08)`
          : "0 10px 30px -8px rgba(15, 23, 42, 0.07), 0 2px 6px rgba(15, 23, 42, 0.04)",
        tabBg: active
          ? "linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)"
          : "rgba(255, 255, 255, 0.95)",
        tabBorder: active ? `1.5px solid ${accentColor}` : "1px solid rgba(15, 23, 42, 0.12)",
        tabText: active ? accentColor : "#0f172a",
        tabCountBg: active ? accentColor : "rgba(15, 23, 42, 0.08)",
        tabCountText: active ? "#ffffff" : "#334155",
        paperBg: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        paperBorder: "1px solid rgba(15, 23, 42, 0.1)",
        paperShadow: "0 4px 14px -2px rgba(15, 23, 42, 0.06)",
        paperTitle: "#0f172a",
        paperDesc: "#475569",
        tagBg: "rgba(15, 23, 42, 0.05)",
        tagBorder: "rgba(15, 23, 42, 0.08)",
        tagText: "#475569",
        metricBg: `${accentColor}14`,
        metricBorder: `${accentColor}35`,
        metricText: accentColor,
        pocketBg: "linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(241, 245, 249, 0.98) 100%)",
        pocketBorder: "1px solid rgba(15, 23, 42, 0.1)",
        pocketText: "#334155",
        rivetColor: "rgba(15, 23, 42, 0.25)",
      }
    : {
        shellBg: "linear-gradient(150deg, rgba(14, 25, 41, 0.95) 0%, rgba(8, 14, 24, 0.98) 100%)",
        shellBorder: active ? `2px solid ${accentColor}` : "1px solid rgba(255, 255, 255, 0.1)",
        shellShadow: active
          ? `0 22px 55px -10px ${accentColor}40, 0 0 25px ${accentColor}25`
          : "0 15px 40px -10px rgba(0, 0, 0, 0.55)",
        tabBg: active ? "rgba(22, 38, 62, 0.96)" : "rgba(14, 25, 41, 0.92)",
        tabBorder: active ? `1.5px solid ${accentColor}` : "1px solid rgba(255, 255, 255, 0.12)",
        tabText: active ? "#ffffff" : "#f1f5f9",
        tabCountBg: active ? accentColor : "rgba(255, 255, 255, 0.12)",
        tabCountText: "#ffffff",
        paperBg: "linear-gradient(135deg, rgba(22, 38, 62, 0.92) 0%, rgba(14, 25, 41, 0.96) 100%)",
        paperBorder: "1px solid rgba(255, 255, 255, 0.12)",
        paperShadow: "0 6px 20px rgba(0, 0, 0, 0.45)",
        paperTitle: "#ffffff",
        paperDesc: "#94a3b8",
        tagBg: "rgba(255, 255, 255, 0.06)",
        tagBorder: "rgba(255, 255, 255, 0.1)",
        tagText: "#cbd5e1",
        metricBg: `${accentColor}25`,
        metricBorder: `${accentColor}45`,
        metricText: accentColor,
        pocketBg: "linear-gradient(180deg, rgba(18, 32, 54, 0.95) 0%, rgba(10, 18, 30, 0.98) 100%)",
        pocketBorder: "1px solid rgba(255, 255, 255, 0.12)",
        pocketText: "#cbd5e1",
        rivetColor: "rgba(255, 255, 255, 0.35)",
      };

  return (
    <div
      className={`reactbits-folder-container ${active ? "is-active" : ""} ${className}`}
      onMouseEnter={() => setInternalHover(true)}
      onMouseLeave={() => setInternalHover(false)}
      onClick={handleFolderClick}
      style={{
        position: "relative",
        width: "100%",
        cursor: "pointer",
        perspective: "1200px",
        WebkitPerspective: "1200px",
        userSelect: "none",
        transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: isExpanded ? "translateY(-6px)" : "translateY(0)",
      }}
      role="button"
      tabIndex={0}
      aria-label={`${label} folder archive`}
    >
      {/* ========================================================================= */}
      {/* 1. TOP ARCHIVE TAB (Folder Header Tab with Live Active Beacon) */}
      {/* ========================================================================= */}
      <div
        className="folder-tab-header"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.45rem 1.15rem 0.4rem 1rem",
          borderTopLeftRadius: "14px",
          borderTopRightRadius: "14px",
          backgroundColor: styles.tabBg,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: styles.tabBorder,
          borderLeft: styles.tabBorder,
          borderRight: styles.tabBorder,
          borderBottom: "none",
          fontSize: "0.84rem",
          fontWeight: 800,
          letterSpacing: "0.02em",
          color: styles.tabText,
          transform: "translateY(1px)",
          zIndex: 3,
          position: "relative",
          boxShadow: active ? `0 -4px 18px ${accentColor}35` : "none",
          transition: "all 0.25s ease",
        }}
      >
        <FolderIcon
          size={15}
          style={{
            color: accentColor,
            filter: `drop-shadow(0 0 6px ${accentColor})`,
          }}
        />
        <span>{label}</span>

        {items.length > 0 && (
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 800,
              padding: "0.12rem 0.5rem",
              borderRadius: "999px",
              backgroundColor: styles.tabCountBg,
              color: styles.tabCountText,
              marginLeft: "0.2rem",
            }}
          >
            {items.length}
          </span>
        )}

        {/* Live Active Pulsing Beacon */}
        {active && (
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              backgroundColor: "#10b981",
              boxShadow: "0 0 8px #10b981",
              marginLeft: "0.25rem",
            }}
          />
        )}
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN FOLDER BODY SHELL (Holds Interactive Dossiers & Base Bar) */}
      {/* ========================================================================= */}
      <div
        className="folder-body-shell"
        style={{
          position: "relative",
          borderRadius: "20px",
          borderTopLeftRadius: "0",
          background: styles.shellBg,
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: styles.shellBorder,
          boxShadow: styles.shellShadow,
          padding: "1rem 1rem 0.75rem 1rem",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          overflow: "hidden",
        }}
      >
        {/* Soft Ambient Internal Brand Glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${accentColor}25 0%, transparent 70%)`,
            pointerEvents: "none",
            filter: "blur(35px)",
          }}
        />

        {/* ========================================================================= */}
        {/* 3. PHYSICAL DOCUMENT DOSSIERS (Visible Live Data & Animated KPIs) */}
        {/* ========================================================================= */}
        <div
          className="folder-items-stack"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
            position: "relative",
            zIndex: 2,
            marginBottom: "0.75rem",
          }}
        >
          {items.map((item, idx) => {
            // Subtle 3D stagger when expanded
            const translateY = isExpanded ? (idx === 0 ? -2 : idx === 1 ? 0 : 2) : 0;
            const rotate = isExpanded ? (idx === 0 ? -0.8 : idx === 2 ? 0.8 : 0) : 0;

            return (
              <div
                key={idx}
                className="folder-file-item"
                onClick={(e) => handleItemClick(e, item, idx)}
                style={{
                  padding: "0.75rem 0.85rem",
                  borderRadius: "14px",
                  background: styles.paperBg,
                  border: styles.paperBorder,
                  backdropFilter: "blur(16px)",
                  transition: "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: `translateY(${translateY}px) rotate(${rotate}deg)`,
                  boxShadow: styles.paperShadow,
                  cursor: "pointer",
                }}
              >
                {/* Header Row: Icon + Title + KPI Metric Pill */}
                <div className="flex items-center justify-between gap-2" style={{ marginBottom: "0.3rem" }}>
                  <div className="flex items-center gap-2" style={{ minWidth: 0, flex: 1 }}>
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "7px",
                        backgroundColor: `${accentColor}18`,
                        border: `1px solid ${accentColor}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: accentColor,
                        flexShrink: 0,
                      }}
                    >
                      {idx === 0 ? <Zap size={14} /> : idx === 1 ? <TrendingUp size={14} /> : <ShieldCheck size={14} />}
                    </div>

                    <div
                      style={{
                        fontSize: "0.84rem",
                        fontWeight: 800,
                        color: styles.paperTitle,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </div>
                  </div>

                  {/* High-Impact Animated KPI Metric */}
                  {item.metric && (
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 850,
                        padding: "0.18rem 0.55rem",
                        borderRadius: "999px",
                        backgroundColor: styles.metricBg,
                        border: `1px solid ${styles.metricBorder}`,
                        color: styles.metricText,
                        flexShrink: 0,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.metric}
                    </span>
                  )}
                </div>

                {/* Subtitle / Description */}
                {item.desc && (
                  <div
                    style={{
                      fontSize: "0.74rem",
                      color: styles.paperDesc,
                      lineHeight: 1.35,
                      marginBottom: item.tags ? "0.35rem" : "0",
                      paddingLeft: "34px",
                    }}
                  >
                    {item.desc}
                  </div>
                )}

                {/* Tech Pills Footer */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex items-center gap-1.5" style={{ paddingLeft: "34px" }}>
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: "0.64rem",
                          fontWeight: 700,
                          padding: "0.1rem 0.4rem",
                          borderRadius: "4px",
                          backgroundColor: styles.tagBg,
                          border: `1px solid ${styles.tagBorder}`,
                          color: styles.tagText,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {item.badge && (
                      <span
                        style={{
                          fontSize: "0.64rem",
                          fontWeight: 750,
                          padding: "0.1rem 0.45rem",
                          borderRadius: "999px",
                          backgroundColor: `${accentColor}18`,
                          color: accentColor,
                          marginLeft: "auto",
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {children && (
            <div style={{ marginTop: "0.5rem" }}>
              {children}
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 4. SLEEK ARCHIVAL BASE POCKET BAR (Foil Rim, Rivets & Inspect Button) */}
        {/* ========================================================================= */}
        <div
          className="folder-base-pocket"
          style={{
            position: "relative",
            borderRadius: "14px",
            background: styles.pocketBg,
            border: styles.pocketBorder,
            padding: "0.55rem 0.85rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 3,
            overflow: "hidden",
          }}
        >
          {/* Top Foil Rim Highlight */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "10%",
              right: "10%",
              height: "2px",
              background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
              opacity: 0.8,
            }}
          />

          {/* Left: Rivets & Seal */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  backgroundColor: styles.rivetColor,
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  backgroundColor: styles.rivetColor,
                  display: "inline-block",
                }}
              />
            </div>

            <span
              style={{
                fontSize: "0.74rem",
                fontWeight: 800,
                color: styles.pocketText,
                letterSpacing: "0.01em",
              }}
            >
              {items.length} Production Deliverables
            </span>
          </div>

          {/* Right: Interactive Inspect Action */}
          <div
            className="flex items-center gap-1"
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              color: accentColor,
            }}
          >
            <span>{isExpanded ? "Active" : "Inspect"}</span>
            <ArrowUpRight size={13} />
          </div>
        </div>
      </div>
    </div>
  );
}
