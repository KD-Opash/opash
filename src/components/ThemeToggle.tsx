"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        }}
      />
    );
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
      aria-label="Toggle color theme"
      style={{
        width: 38,
        height: 38,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isLight ? "rgba(71, 109, 154, 0.1)" : "rgba(255, 255, 255, 0.06)",
        border: isLight ? "1px solid rgba(71, 109, 154, 0.25)" : "1px solid rgba(255, 255, 255, 0.1)",
        color: isLight ? "#35567D" : "#5EC098",
        cursor: "pointer",
        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.08)";
        e.currentTarget.style.borderColor = isLight ? "#35567D" : "#5EC098";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.borderColor = isLight ? "rgba(71, 109, 154, 0.25)" : "rgba(255, 255, 255, 0.1)";
      }}
    >
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
