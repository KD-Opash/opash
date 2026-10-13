"use client";

import React, { useState, useEffect } from "react";
import { Folder as FolderIcon, FileText, ChevronRight, Sparkles, Layers, ArrowUpRight } from "lucide-react";

export interface FolderItem {
  title: string;
  image?: string;
  desc?: string;
  badge?: string;
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

  const isBookMode = mode === "book";
  const accentColor = color || (isLightMode ? "#1d4ed8" : "#476D9A");

  // Palette tokens based on theme
  const styles = isLightMode
    ? {
        shellBg: "linear-gradient(150deg, #ffffff 0%, #f8fafc 55%, #edf2f7 100%)",
        shellBorder: active ? `2px solid ${accentColor}` : "1px solid rgba(15, 23, 42, 0.12)",
        shellShadow: active
          ? `0 20px 45px -10px ${accentColor}30, 0 4px 15px rgba(15, 23, 42, 0.08)`
          : "0 12px 32px -8px rgba(15, 23, 42, 0.08), 0 2px 6px rgba(15, 23, 42, 0.04)",
        tabBg: active
          ? "linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)"
          : "rgba(255, 255, 255, 0.95)",
        tabBorder: active ? `1.5px solid ${accentColor}` : "1px solid rgba(15, 23, 42, 0.12)",
        tabText: active ? accentColor : "#0f172a",
        tabCountBg: active ? accentColor : "rgba(15, 23, 42, 0.08)",
        tabCountText: active ? "#ffffff" : "#334155",
        flapBg: "linear-gradient(165deg, rgba(255, 255, 255, 0.94) 0%, rgba(241, 245, 249, 0.96) 100%)",
        flapBorder: active ? `1.5px solid ${accentColor}90` : "1px solid rgba(15, 23, 42, 0.13)",
        flapShadow: isExpanded
          ? "0 -15px 30px -5px rgba(15, 23, 42, 0.14)"
          : "0 -4px 14px rgba(15, 23, 42, 0.06)",
        flapClaspBg: "rgba(255, 255, 255, 0.9)",
        flapClaspBorder: "rgba(15, 23, 42, 0.12)",
        flapClaspText: "#334155",
        paperBg: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        paperBorder: "1px solid rgba(15, 23, 42, 0.1)",
        paperShadow: "0 4px 14px -2px rgba(15, 23, 42, 0.07)",
        paperTitle: "#0f172a",
        paperDesc: "#475569",
        badgeBg: `${accentColor}18`,
        badgeBorder: `${accentColor}40`,
        badgeText: accentColor,
        spineBg: `${accentColor}25`,
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
        flapBg: "linear-gradient(165deg, rgba(20, 35, 58, 0.9) 0%, rgba(10, 18, 30, 0.96) 100%)",
        flapBorder: active ? `1.5px solid ${accentColor}90` : "1px solid rgba(255, 255, 255, 0.14)",
        flapShadow: isExpanded
          ? "0 -15px 35px -5px rgba(0, 0, 0, 0.6)"
          : "0 -4px 16px rgba(0, 0, 0, 0.3)",
        flapClaspBg: "rgba(15, 25, 42, 0.85)",
        flapClaspBorder: "rgba(255, 255, 255, 0.15)",
        flapClaspText: "#cbd5e1",
        paperBg: "linear-gradient(135deg, rgba(22, 38, 62, 0.92) 0%, rgba(14, 25, 41, 0.96) 100%)",
        paperBorder: "1px solid rgba(255, 255, 255, 0.12)",
        paperShadow: "0 8px 24px rgba(0, 0, 0, 0.45)",
        paperTitle: "#ffffff",
        paperDesc: "#94a3b8",
        badgeBg: `${accentColor}30`,
        badgeBorder: `${accentColor}55`,
        badgeText: accentColor,
        spineBg: `${accentColor}35`,
        rivetColor: "rgba(255, 255, 255, 0.35)",
      };

  return (
    <div
      className={`reactbits-folder-container ${isBookMode ? "mode-book" : "mode-folder"} ${active ? "is-active" : ""} ${className}`}
      onMouseEnter={() => setInternalHover(true)}
      onMouseLeave={() => setInternalHover(false)}
      onClick={handleFolderClick}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "380px",
        cursor: "pointer",
        perspective: "1200px",
        WebkitPerspective: "1200px",
        userSelect: "none",
        transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: isExpanded ? "translateY(-8px)" : "translateY(0)",
      }}
      role="button"
      tabIndex={0}
      aria-label={`${label} folder archive`}
    >
      {/* ========================================================================= */}
      {/* 1. ARCHIVE TAB (Top Index Tab with Active Beacon) */}
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
              marginLeft: "0.15rem",
            }}
          />
        )}
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN FOLDER BODY SHELL (Holds stacked documents & front pocket) */}
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
          padding: "1.2rem",
          minHeight: "220px",
          height: isExpanded ? "auto" : "220px",
          overflow: isExpanded ? "visible" : "hidden",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
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
        {/* 3. PHYSICAL DOCUMENT STACK (Visible peeking sheets + expanded dossiers) */}
        {/* ========================================================================= */}
        <div
          className="folder-items-stack"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.65rem",
            position: "relative",
            zIndex: 2,
            paddingBottom: isExpanded ? "0.5rem" : "0",
          }}
        >
          {items.map((item, idx) => {
            // Dynamic 3D fan out transforms:
            // When closed: slight stagger so sheet edges peek out naturally
            // When expanded: documents lift up and spread out
            const closedOffset = idx * 6;
            const closedRotate = idx === 0 ? 0 : idx === 1 ? 1.5 : -1.5;
            const openOffset = (idx + 1) * -12;
            const openRotate = idx % 2 === 0 ? -1.8 : 1.8;

            const translateY = isExpanded ? openOffset : closedOffset;
            const rotate = isExpanded ? openRotate : closedRotate;

            return (
              <div
                key={idx}
                className="folder-file-item"
                onClick={(e) => handleItemClick(e, item, idx)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.75rem 0.95rem",
                  borderRadius: "14px",
                  background: styles.paperBg,
                  border: styles.paperBorder,
                  backdropFilter: "blur(16px)",
                  transition: "all 0.32s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: `translateY(${translateY}px) rotate(${rotate}deg)`,
                  boxShadow: styles.paperShadow,
                  cursor: "pointer",
                }}
              >
                <div className="flex items-center gap-2.5" style={{ minWidth: 0, flex: 1 }}>
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "8px",
                        objectFit: "cover",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        flexShrink: 0,
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "8px",
                        backgroundColor: `${accentColor}18`,
                        border: `1px solid ${accentColor}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: accentColor,
                        flexShrink: 0,
                      }}
                    >
                      <FileText size={16} />
                    </div>
                  )}

                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div
                      style={{
                        fontSize: "0.86rem",
                        fontWeight: 750,
                        color: styles.paperTitle,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </div>
                    {item.desc && (
                      <div
                        style={{
                          fontSize: "0.73rem",
                          color: styles.paperDesc,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          marginTop: "0.1rem",
                        }}
                      >
                        {item.desc}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2" style={{ flexShrink: 0, marginLeft: "0.5rem" }}>
                  {item.badge && (
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        padding: "0.18rem 0.55rem",
                        borderRadius: "999px",
                        backgroundColor: styles.badgeBg,
                        color: styles.badgeText,
                        border: `1px solid ${styles.badgeBorder}`,
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight size={14} style={{ color: styles.paperDesc }} />
                </div>
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
        {/* 4. 3D FRONT FOLDER FLAP (Clasp Pocket with Cutout Scoop & Rivets) */}
        {/* ========================================================================= */}
        <div
          className="folder-front-flap"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: isBookMode ? (isExpanded ? "68%" : "62%") : "58%",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            background: styles.flapBg,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderTop: isExpanded ? `1px solid ${accentColor}80` : styles.flapBorder,
            borderBottom: styles.flapBorder,
            borderLeft: styles.flapBorder,
            borderRight: styles.flapBorder,
            transformOrigin: isBookMode ? "left center" : "bottom center",
            transform: isExpanded
              ? isBookMode
                ? "rotateY(-42deg) translateZ(16px)"
                : "rotateX(-30deg) translateZ(12px)"
              : "rotateY(0deg) rotateX(0deg) translateZ(0)",
            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease",
            pointerEvents: isExpanded ? "none" : "auto",
            zIndex: 4,
            boxShadow: styles.flapShadow,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "0.95rem 1.15rem",
          }}
        >
          {/* Top Metallic Foil Rim Accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "15%",
              right: "15%",
              height: "2px",
              background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
              opacity: 0.85,
            }}
          />

          {/* Left Binder Spine Eyelets for Physical Realism */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              bottom: "12px",
              left: "10px",
              width: "12px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: styles.rivetColor,
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.4)",
              }}
            />
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: styles.rivetColor,
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.4)",
              }}
            />
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: styles.rivetColor,
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.4)",
              }}
            />
          </div>

          {/* Central Archive Seal / Folder Clasp Badge */}
          <div
            style={{
              marginLeft: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "calc(100% - 18px)",
            }}
          >
            <div className="flex items-center gap-1.5">
              <Sparkles size={13} style={{ color: accentColor }} />
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: styles.paperTitle,
                  letterSpacing: "0.01em",
                }}
              >
                {label} Archive
              </span>
            </div>

            <span
              style={{
                fontSize: "0.68rem",
                fontWeight: 750,
                padding: "0.15rem 0.55rem",
                borderRadius: "999px",
                backgroundColor: styles.flapClaspBg,
                border: `1px solid ${styles.flapClaspBorder}`,
                color: styles.flapClaspText,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.25rem",
              }}
            >
              <Layers size={11} style={{ color: accentColor }} />
              <span>{items.length} Files</span>
            </span>
          </div>

          {/* Bottom Interactive Prompt Tag */}
          <div
            style={{
              marginLeft: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: isLightMode
                ? "1px solid rgba(15, 23, 42, 0.07)"
                : "1px solid rgba(255, 255, 255, 0.08)",
              paddingTop: "0.55rem",
            }}
          >
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 650,
                color: isLightMode ? "#64748b" : "#94a3b8",
              }}
            >
              {isExpanded ? "Click file to open" : "Hover or click to peek"}
            </span>

            <span
              className="flex items-center gap-1"
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                color: accentColor,
              }}
            >
              <span>{isExpanded ? "Close" : "Open"}</span>
              <ArrowUpRight size={13} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
