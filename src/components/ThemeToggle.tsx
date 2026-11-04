"use client";

import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        }}
      />
    );
  }

  const isLight = theme === "light";

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Trigger button haptic pulse
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 1100);

    const btn = buttonRef.current || e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Check if View Transition API is supported
    const isViewTransitionSupported =
      typeof document !== "undefined" &&
      typeof (document as any).startViewTransition === "function" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isViewTransitionSupported) {
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = (document as any).startViewTransition(() => {
        toggleTheme();
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];
        document.documentElement.animate(
          {
            clipPath: clipPath,
          },
          {
            duration: 1100, // Luxurious, slow and silky circular reveal animation (1.1s)
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
      return;
    }

    // Fallback: smooth cross-fade transition
    document.documentElement.classList.add("theme-switching");
    toggleTheme();
    setTimeout(() => {
      document.documentElement.classList.remove("theme-switching");
    }, 1000);
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleToggle}
      title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
      aria-label="Toggle color theme"
      className={isPulsing ? "theme-toggle-active-pulse" : ""}
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isLight ? "rgba(71, 109, 154, 0.12)" : "rgba(255, 255, 255, 0.08)",
        border: isLight ? "1.5px solid rgba(71, 109, 154, 0.3)" : "1.5px solid rgba(255, 255, 255, 0.15)",
        color: isLight ? "#2d4d73" : "#5EC098",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        outline: "none",
        boxShadow: isLight
          ? "0 2px 10px rgba(71, 109, 154, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.8)"
          : "0 2px 14px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
        transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.borderColor = isLight ? "#2d4d73" : "#5EC098";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.borderColor = isLight ? "rgba(71, 109, 154, 0.3)" : "rgba(255, 255, 255, 0.15)";
      }}
    >
      {/* Animated Moon Icon (Visible in Light Mode, inviting switch to Dark) */}
      <span
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: isLight ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0)",
          opacity: isLight ? 1 : 0,
          transition: "transform 0.75s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease",
          color: "#2d4d73",
        }}
      >
        <Moon size={18} strokeWidth={2.2} />
      </span>

      {/* Animated Sun Icon (Visible in Dark Mode, inviting switch to Light) */}
      <span
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: isLight ? "rotate(90deg) scale(0)" : "rotate(0deg) scale(1)",
          opacity: isLight ? 0 : 1,
          transition: "transform 0.75s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease",
          color: "#5EC098",
        }}
      >
        <Sun size={19} strokeWidth={2.2} />
      </span>
    </button>
  );
}
