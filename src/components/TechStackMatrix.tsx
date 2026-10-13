"use client";

import React, { useState } from "react";
import { techStackData } from "@/data/technologies";
import { CheckCircle2, Sparkles, Terminal } from "lucide-react";

export default function TechStackMatrix() {
  const [activeTab, setActiveTab] = useState(techStackData[0].id);

  const activeCategory = techStackData.find((t) => t.id === activeTab) || techStackData[0];

  return (
    <div className="glass-panel" style={{ padding: "2.5rem 2rem" }}>
      {/* Category Tabs */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          overflowX: "auto",
          paddingBottom: "1rem",
          marginBottom: "2rem",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        {techStackData.map((cat) => {
          const isActive = cat.id === activeTab;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                padding: "0.65rem 1.4rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
                border: isActive ? "1px solid var(--color-cyan)" : "1px solid var(--border-subtle)",
                background: isActive ? "var(--gradient-brand)" : "var(--bg-elevated)",
                color: isActive ? "#ffffff" : "var(--text-secondary)",
                boxShadow: isActive ? "0 4px 14px rgba(71, 109, 154, 0.3)" : "none",
                transition: "all 0.2s ease",
              }}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Category Header */}
      <div style={{ marginBottom: "2rem" }}>
        <div className="flex items-center gap-2" style={{ color: "var(--color-cyan)", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase" }}>
          <Sparkles size={16} />
          <span>{activeCategory.name} Capabilities</span>
        </div>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", marginTop: "0.4rem" }}>
          {activeCategory.description}
        </p>
      </div>

      {/* Tech Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {activeCategory.items.map((item) => (
          <div
            key={item.name}
            className="tech-matrix-card"
            style={{
              padding: "1.25rem",
              borderRadius: "var(--radius-md)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-accent)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-subtle)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div className="flex items-center justify-between" style={{ marginBottom: "0.5rem" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                {item.name}
              </div>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  padding: "0.2rem 0.5rem",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "rgba(71, 109, 154, 0.2)",
                  color: "var(--color-cyan)",
                  border: "1px solid rgba(94, 192, 152, 0.35)",
                }}
              >
                {item.badge}
              </span>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.5 }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
