"use client";

import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  UploadCloud,
  LucideIcon,
} from "lucide-react";

export type Icon3DType =
  | "building"
  | "phone"
  | "mail"
  | "location"
  | "clock"
  | "whatsapp"
  | "upload"
  | "custom";

interface IconConfig {
  icon: LucideIcon;
  gradient: string;
  edgeColor: string;
  glowColor: string;
  textColor: string;
  lightBg: string;
  lightBorder: string;
  lightEdge: string;
  lightTextColor: string;
  lightGlow: string;
  hoverAnimClass: string;
}

const CONFIGS: Record<Icon3DType, IconConfig> = {
  building: {
    icon: Building2,
    gradient: "linear-gradient(135deg, #00ffd1 0%, #0284c7 100%)",
    edgeColor: "#0369a1",
    glowColor: "rgba(0, 255, 209, 0.5)",
    textColor: "#020712",
    lightBg: "linear-gradient(135deg, #008a75 0%, #0284c7 100%)",
    lightBorder: "rgba(0, 138, 117, 0.3)",
    lightEdge: "#075985",
    lightTextColor: "#ffffff",
    lightGlow: "rgba(0, 138, 117, 0.3)",
    hoverAnimClass: "animate-float-building",
  },
  phone: {
    icon: Phone,
    gradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.28) 0%, rgba(14, 165, 233, 0.45) 100%)",
    edgeColor: "#0284c7",
    glowColor: "rgba(56, 189, 248, 0.45)",
    textColor: "#38bdf8",
    lightBg: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
    lightBorder: "rgba(14, 165, 233, 0.35)",
    lightEdge: "#0284c7",
    lightTextColor: "#0284c7",
    lightGlow: "rgba(14, 165, 233, 0.28)",
    hoverAnimClass: "animate-wiggle-phone",
  },
  mail: {
    icon: Mail,
    gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.28) 0%, rgba(5, 150, 105, 0.45) 100%)",
    edgeColor: "#059669",
    glowColor: "rgba(16, 185, 129, 0.45)",
    textColor: "#10b981",
    lightBg: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
    lightBorder: "rgba(16, 185, 129, 0.35)",
    lightEdge: "#059669",
    lightTextColor: "#059669",
    lightGlow: "rgba(16, 185, 129, 0.28)",
    hoverAnimClass: "animate-bounce-mail",
  },
  location: {
    icon: MapPin,
    gradient: "linear-gradient(135deg, rgba(0, 255, 209, 0.25) 0%, rgba(13, 148, 136, 0.45) 100%)",
    edgeColor: "#0f766e",
    glowColor: "rgba(0, 255, 209, 0.45)",
    textColor: "#00ffd1",
    lightBg: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)",
    lightBorder: "rgba(0, 168, 143, 0.35)",
    lightEdge: "#008a75",
    lightTextColor: "#008a75",
    lightGlow: "rgba(0, 168, 143, 0.28)",
    hoverAnimClass: "animate-bounce-pin",
  },
  clock: {
    icon: Clock,
    gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.28) 0%, rgba(217, 119, 6, 0.45) 100%)",
    edgeColor: "#d97706",
    glowColor: "rgba(245, 158, 11, 0.45)",
    textColor: "#f59e0b",
    lightBg: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
    lightBorder: "rgba(245, 158, 11, 0.35)",
    lightEdge: "#d97706",
    lightTextColor: "#d97706",
    lightGlow: "rgba(245, 158, 11, 0.28)",
    hoverAnimClass: "animate-tick-clock",
  },
  whatsapp: {
    icon: MessageCircle,
    gradient: "linear-gradient(135deg, rgba(37, 211, 102, 0.3) 0%, rgba(18, 140, 126, 0.5) 100%)",
    edgeColor: "#128C7E",
    glowColor: "rgba(37, 211, 102, 0.5)",
    textColor: "#25D366",
    lightBg: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
    lightBorder: "rgba(37, 211, 102, 0.38)",
    lightEdge: "#16a34a",
    lightTextColor: "#15803d",
    lightGlow: "rgba(37, 211, 102, 0.28)",
    hoverAnimClass: "animate-pop-wa",
  },
  upload: {
    icon: UploadCloud,
    gradient: "linear-gradient(135deg, rgba(0, 255, 209, 0.28) 0%, rgba(56, 189, 248, 0.45) 100%)",
    edgeColor: "#0284c7",
    glowColor: "rgba(0, 255, 209, 0.45)",
    textColor: "#00ffd1",
    lightBg: "linear-gradient(135deg, #f0fdfa 0%, #e0f2fe 100%)",
    lightBorder: "rgba(0, 168, 143, 0.35)",
    lightEdge: "#008a75",
    lightTextColor: "#008a75",
    lightGlow: "rgba(0, 168, 143, 0.28)",
    hoverAnimClass: "animate-float-upload",
  },
  custom: {
    icon: Building2,
    gradient: "linear-gradient(135deg, #00ffd1 0%, #0284c7 100%)",
    edgeColor: "#0369a1",
    glowColor: "rgba(0, 255, 209, 0.45)",
    textColor: "#00ffd1",
    lightBg: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)",
    lightBorder: "rgba(0, 168, 143, 0.35)",
    lightEdge: "#008a75",
    lightTextColor: "#008a75",
    lightGlow: "rgba(0, 168, 143, 0.28)",
    hoverAnimClass: "animate-float-building",
  },
};

export interface Interactive3DIconProps {
  type?: Icon3DType;
  customIcon?: LucideIcon;
  size?: number; // Box dimensions: 44, 48, 52, etc.
  iconSize?: number; // Inner icon size
  strokeWidth?: number;
  gradient?: string;
  edgeColor?: string;
  glowColor?: string;
  textColor?: string;
  lightBg?: string;
  lightEdge?: string;
  lightTextColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Interactive3DIcon({
  type = "building",
  customIcon,
  size = 44,
  iconSize = 22,
  strokeWidth = 2.2,
  gradient,
  edgeColor,
  glowColor,
  textColor,
  lightBg,
  lightEdge,
  lightTextColor,
  className = "",
  style = {},
}: Interactive3DIconProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const config = CONFIGS[type] || CONFIGS.building;
  const IconComponent = customIcon || config.icon;

  // Responsive radius based on size
  const borderRadius = Math.round(size * 0.28);

  const currentBg = isLight ? (lightBg || config.lightBg) : (gradient || config.gradient);
  const currentEdge = isLight ? (lightEdge || config.lightEdge) : (edgeColor || config.edgeColor);
  const currentGlow = isLight ? config.lightGlow : (glowColor || config.glowColor);
  const currentTextColor = isLight
    ? (lightTextColor || textColor || config.lightTextColor)
    : (textColor || config.textColor);
  const isSolidType = !gradient && type === "building";

  const getBoxShadow = () => {
    if (isLight) {
      if (isPressed) {
        return "0 1px 2px rgba(0, 0, 0, 0.08), inset 0 2px 4px rgba(0, 0, 0, 0.06)";
      }
      if (isHovered) {
        return `0 8px 18px -2px ${currentGlow}, 0 2px 6px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 1)`;
      }
      return `0 2px 6px -1px rgba(0, 0, 0, 0.06), 0 4px 10px -2px ${currentGlow}, inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 2px rgba(0, 0, 0, 0.04)`;
    }

    if (isPressed) {
      return `0 2px 0 ${currentEdge}, 0 2px 4px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(0, 0, 0, 0.4)`;
    }
    if (isHovered) {
      return `0 6px 0 ${currentEdge}, 0 14px 28px -4px ${currentGlow}, inset 0 1px 2px rgba(255, 255, 255, 0.45), inset 0 -2px 4px rgba(0, 0, 0, 0.35)`;
    }
    return `0 3px 0 ${currentEdge}, 0 6px 14px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.3), inset 0 -1px 3px rgba(0, 0, 0, 0.2)`;
  };

  const getBorder = () => {
    if (isLight) {
      return `1px solid ${isHovered ? currentEdge : config.lightBorder}`;
    }
    return `1px solid ${isHovered ? "rgba(255, 255, 255, 0.45)" : "rgba(255, 255, 255, 0.16)"}`;
  };

  const getIconFilter = () => {
    if (isSolidType) {
      return isLight
        ? "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))"
        : "drop-shadow(0 2px 3px rgba(0, 0, 0, 0.25))";
    }
    if (isLight) {
      return isHovered ? `drop-shadow(0 2px 5px ${currentGlow})` : "none";
    }
    return `drop-shadow(0 2px 6px ${config.glowColor})`;
  };

  return (
    <div
      className={`opash-3d-icon-container ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      style={{
        position: "relative",
        width: size,
        height: size,
        perspective: "600px",
        flexShrink: 0,
        cursor: "pointer",
        userSelect: "none",
        ...style,
      }}
    >
      {/* 1. Dynamic Ambient Aura Backlight (Blooms on Hover) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "15%",
          left: "15%",
          width: "70%",
          height: "70%",
          borderRadius: "50%",
          background: currentGlow,
          filter: "blur(12px)",
          opacity: isHovered ? (isLight ? 0.45 : 0.95) : isLight ? 0 : 0.25,
          transform: isHovered ? "scale(1.4)" : "scale(1)",
          transition: "opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* 2. Main 3D Extruded Body */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: `${borderRadius}px`,
          background: currentBg,
          transformStyle: "preserve-3d",
          transform: isPressed
            ? "translateY(2px) scale(0.96)"
            : isHovered
            ? "translateY(-4px) translateZ(10px) rotateX(8deg) rotateY(-6deg) scale(1.06)"
            : "translateY(0) translateZ(0) rotateX(0deg) rotateY(0deg) scale(1)",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease",
          border: getBorder(),
          boxShadow: getBoxShadow(),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: currentTextColor,
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {/* 3. Specular Diagonal Light Flare on Hover */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 50%)",
            opacity: isHovered ? (isLight ? 0.3 : 1) : isLight ? 0.12 : 0.45,
            transition: "opacity 0.25s ease",
            pointerEvents: "none",
          }}
        />

        {/* 4. Top Rim Edge Light Reflection */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: "10%",
            right: "10%",
            height: "1px",
            background: isLight
              ? "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.95), transparent)"
              : "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.75), transparent)",
            pointerEvents: "none",
          }}
        />

        {/* 5. Floating 3D Icon Element */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: isHovered
              ? "translateZ(14px) scale(1.12)"
              : "translateZ(0) scale(1)",
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            filter: getIconFilter(),
          }}
        >
          <IconComponent
            size={iconSize}
            strokeWidth={strokeWidth}
            style={{
              transition: "transform 0.3s ease",
              transform: isHovered && type === "phone"
                ? "rotate(-12deg) scale(1.08)"
                : isHovered && type === "location"
                ? "translateY(-2px)"
                : isHovered && type === "upload"
                ? "translateY(-3px)"
                : "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}
