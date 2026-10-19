"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Phone,
  Mail,
  Sparkles,
  MessageSquare,
  ArrowRight,
  User,
  Layers,
  DollarSign,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { companyData } from "@/data/company";
import { useTheme } from "./ThemeProvider";

export default function ContactForm() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Custom Software Development",
    budget: "$10k - $25k",
    timeline: "1 - 3 Months",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div
        style={{
          borderRadius: "28px",
          background: isLight
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(10, 18, 34, 0.85)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(0, 255, 209, 0.4)",
          padding: "4rem 3rem",
          textAlign: "center",
          boxShadow: isLight
            ? "0 25px 60px -15px rgba(16, 185, 129, 0.2)"
            : "0 30px 80px -20px rgba(0, 255, 209, 0.25)",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(0, 255, 209, 0.2) 0%, rgba(16, 185, 129, 0.3) 100%)",
            border: "1px solid #00ffd1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.75rem auto",
            color: "#00ffd1",
            boxShadow: "0 0 30px rgba(0, 255, 209, 0.4)",
          }}
        >
          <CheckCircle2 size={46} strokeWidth={2.5} />
        </div>

        <h3
          style={{
            fontSize: "2.1rem",
            fontWeight: 850,
            letterSpacing: "-0.02em",
            margin: "0 0 0.85rem 0",
          }}
        >
          Inquiry Dispatched!
        </h3>

        <p
          style={{
            color: isLight ? "#475569" : "#cbd5e1",
            fontSize: "1.1rem",
            lineHeight: 1.65,
            maxWidth: "520px",
            margin: "0 auto 2.25rem auto",
          }}
        >
          Thank you, <strong>{formData.name || "Partner"}</strong>. Your technical scope has been delivered directly to <strong>Hiren Danecha</strong> and our lead systems architects. We typically review and respond within <strong>2 to 4 hours</strong>.
        </p>

        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.6rem",
            padding: "1.25rem 2rem",
            borderRadius: "18px",
            background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
            border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
          }}
        >
          <span style={{ fontSize: "0.85rem", color: isLight ? "#64748b" : "#94a3b8" }}>
            Need an urgent response or immediate kickoff?
          </span>
          <a
            href={companyData.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#25D366",
              fontWeight: 750,
              fontSize: "0.98rem",
              textDecoration: "none",
            }}
          >
            <MessageCircle size={18} />
            <span>Chat Directly on WhatsApp: {companyData.contact.phone}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        borderRadius: "32px",
        background: isLight
          ? "rgba(255, 255, 255, 0.92)"
          : "rgba(8, 14, 28, 0.82)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        border: `1px solid ${isLight ? "rgba(14, 165, 233, 0.3)" : "rgba(0, 255, 209, 0.3)"}`,
        boxShadow: isLight
          ? "0 30px 70px -15px rgba(14, 165, 233, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.9)"
          : "0 35px 90px -20px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 255, 209, 0.12)",
        overflow: "hidden",
      }}
    >
      {/* Top Holographic Accent Rail */}
      <div
        style={{
          height: "3px",
          width: "100%",
          background: "linear-gradient(90deg, #00ffd1 0%, #8a5cff 50%, #0ea5e9 100%)",
        }}
      />

      <div style={{ padding: "3rem 3rem" }}>
        
        {/* Header & Direct Channels */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "2.5rem",
            paddingBottom: "1.75rem",
            borderBottom: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.38rem 0.95rem",
                borderRadius: "9999px",
                background: isLight ? "rgba(14, 165, 233, 0.1)" : "rgba(0, 255, 209, 0.12)",
                border: `1px solid ${isLight ? "rgba(14, 165, 233, 0.3)" : "rgba(0, 255, 209, 0.35)"}`,
                color: isLight ? "#0284c7" : "#00ffd1",
                fontSize: "0.8rem",
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "0.85rem",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 8px #10b981",
                }}
              />
              <span>Direct Engineering Channel</span>
              <Sparkles size={13} />
            </div>

            <h3
              style={{
                fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)",
                fontWeight: 850,
                letterSpacing: "-0.02em",
                margin: "0 0 0.5rem 0",
              }}
            >
              Get In Touch With Our{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #0ea5e9 0%, #10b981 50%, #00ffd1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Lead Architects
              </span>
            </h3>

            <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "0.95rem", margin: 0 }}>
              Connect directly with our senior engineering team to scope feasibility, tech stack, and sprint cadence.
            </p>
          </div>

          {/* Quick Response Telemetry Pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              padding: "0.75rem 1.25rem",
              borderRadius: "14px",
              background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
              border: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontWeight: 700, color: "#10b981" }}>
              <Clock size={15} />
              <span>&lt; 2-4h Response SLA</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontWeight: 700, color: isLight ? "#0284c7" : "#00ffd1" }}>
              <ShieldCheck size={15} />
              <span>Strict NDA</span>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit}>
          {/* Row 1: Name & Email */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
            className="form-two-col"
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.84rem",
                  fontWeight: 750,
                  marginBottom: "0.5rem",
                  color: isLight ? "#0f172a" : "#f1f5f9",
                }}
              >
                Your Full Name *
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.85rem 1.15rem",
                  borderRadius: "14px",
                  background: isLight ? "#ffffff" : "rgba(0, 0, 0, 0.35)",
                  border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.1)"}`,
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <User size={16} color={isLight ? "#94a3b8" : "#64748b"} style={{ marginRight: "0.65rem", flexShrink: 0 }} />
                <input
                  type="text"
                  required
                  placeholder="e.g. John Miller"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    fontSize: "0.92rem",
                    color: isLight ? "#0f172a" : "#ffffff",
                  }}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.84rem",
                  fontWeight: 750,
                  marginBottom: "0.5rem",
                  color: isLight ? "#0f172a" : "#f1f5f9",
                }}
              >
                Work Email *
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.85rem 1.15rem",
                  borderRadius: "14px",
                  background: isLight ? "#ffffff" : "rgba(0, 0, 0, 0.35)",
                  border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.1)"}`,
                }}
              >
                <Mail size={16} color={isLight ? "#94a3b8" : "#64748b"} style={{ marginRight: "0.65rem", flexShrink: 0 }} />
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    fontSize: "0.92rem",
                    color: isLight ? "#0f172a" : "#ffffff",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Row 2: Phone & Primary Service */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
            className="form-two-col"
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.84rem",
                  fontWeight: 750,
                  marginBottom: "0.5rem",
                  color: isLight ? "#0f172a" : "#f1f5f9",
                }}
              >
                Phone / WhatsApp (Optional)
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.85rem 1.15rem",
                  borderRadius: "14px",
                  background: isLight ? "#ffffff" : "rgba(0, 0, 0, 0.35)",
                  border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.1)"}`,
                }}
              >
                <Phone size={16} color={isLight ? "#94a3b8" : "#64748b"} style={{ marginRight: "0.65rem", flexShrink: 0 }} />
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    fontSize: "0.92rem",
                    color: isLight ? "#0f172a" : "#ffffff",
                  }}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.84rem",
                  fontWeight: 750,
                  marginBottom: "0.5rem",
                  color: isLight ? "#0f172a" : "#f1f5f9",
                }}
              >
                Primary Service Needed
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.85rem 1.15rem",
                  borderRadius: "14px",
                  background: isLight ? "#ffffff" : "rgba(0, 0, 0, 0.35)",
                  border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.1)"}`,
                }}
              >
                <Layers size={16} color={isLight ? "#94a3b8" : "#64748b"} style={{ marginRight: "0.65rem", flexShrink: 0 }} />
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    fontSize: "0.92rem",
                    color: isLight ? "#0f172a" : "#ffffff",
                    cursor: "pointer",
                  }}
                >
                  <option value="Custom Software Development" style={{ background: isLight ? "#fff" : "#0f172a", color: isLight ? "#000" : "#fff" }}>Custom Software Development</option>
                  <option value="Web Development" style={{ background: isLight ? "#fff" : "#0f172a", color: isLight ? "#000" : "#fff" }}>Web App Development (React / Next.js)</option>
                  <option value="Mobile App Development" style={{ background: isLight ? "#fff" : "#0f172a", color: isLight ? "#000" : "#fff" }}>Mobile App (iOS & Android)</option>
                  <option value="AI & ML Solutions" style={{ background: isLight ? "#fff" : "#0f172a", color: isLight ? "#000" : "#fff" }}>AI & ML Solutions / RAG</option>
                  <option value="SaaS Development" style={{ background: isLight ? "#fff" : "#0f172a", color: isLight ? "#000" : "#fff" }}>Multi-Tenant SaaS Engineering</option>
                  <option value="API Integration" style={{ background: isLight ? "#fff" : "#0f172a", color: isLight ? "#000" : "#fff" }}>API Integration & Microservices</option>
                  <option value="QA & Testing" style={{ background: isLight ? "#fff" : "#0f172a", color: isLight ? "#000" : "#fff" }}>QA & Automated Testing</option>
                  <option value="Hire Dedicated Developers" style={{ background: isLight ? "#fff" : "#0f172a", color: isLight ? "#000" : "#fff" }}>Hire Dedicated Developers</option>
                </select>
              </div>
            </div>
          </div>

          {/* Row 3: Budget & Timeline */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
            className="form-two-col"
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.84rem",
                  fontWeight: 750,
                  marginBottom: "0.5rem",
                  color: isLight ? "#0f172a" : "#f1f5f9",
                }}
              >
                Estimated Budget Range
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.85rem 1.15rem",
                  borderRadius: "14px",
                  background: isLight ? "#ffffff" : "rgba(0, 0, 0, 0.35)",
                  border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.1)"}`,
                }}
              >
                <DollarSign size={16} color={isLight ? "#94a3b8" : "#64748b"} style={{ marginRight: "0.65rem", flexShrink: 0 }} />
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    fontSize: "0.92rem",
                    color: isLight ? "#0f172a" : "#ffffff",
                    cursor: "pointer",
                  }}
                >
                  <option value="< $10k" style={{ background: isLight ? "#fff" : "#0f172a", color: isLight ? "#000" : "#fff" }}>&lt; $10,000</option>
                  <option value="$10k - $25k" style={{ background: isLight ? "#fff" : "#0f172a", color: isLight ? "#000" : "#fff" }}>$10,000 - $25,000</option>
                  <option value="$25k - $50k" style={{ background: isLight ? "#fff" : "#0f172a", color: isLight ? "#000" : "#fff" }}>$25,000 - $50,000</option>
                  <option value="$50k+" style={{ background: isLight ? "#fff" : "#0f172a", color: isLight ? "#000" : "#fff" }}>$50,000+ (Enterprise)</option>
                </select>
              </div>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.84rem",
                  fontWeight: 750,
                  marginBottom: "0.5rem",
                  color: isLight ? "#0f172a" : "#f1f5f9",
                }}
              >
                Target Timeline
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.85rem 1.15rem",
                  borderRadius: "14px",
                  background: isLight ? "#ffffff" : "rgba(0, 0, 0, 0.35)",
                  border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.1)"}`,
                }}
              >
                <Calendar size={16} color={isLight ? "#94a3b8" : "#64748b"} style={{ marginRight: "0.65rem", flexShrink: 0 }} />
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    fontSize: "0.92rem",
                    color: isLight ? "#0f172a" : "#ffffff",
                    cursor: "pointer",
                  }}
                >
                  <option value="Urgent (< 1 month)" style={{ background: isLight ? "#fff" : "#0f172a", color: isLight ? "#000" : "#fff" }}>Urgent (&lt; 1 month)</option>
                  <option value="1 - 3 Months" style={{ background: isLight ? "#fff" : "#0f172a", color: isLight ? "#000" : "#fff" }}>1 - 3 Months</option>
                  <option value="3 - 6 Months" style={{ background: isLight ? "#fff" : "#0f172a", color: isLight ? "#000" : "#fff" }}>3 - 6 Months</option>
                  <option value="Flexible / Ongoing" style={{ background: isLight ? "#fff" : "#0f172a", color: isLight ? "#000" : "#fff" }}>Flexible / Dedicated Squad</option>
                </select>
              </div>
            </div>
          </div>

          {/* Row 4: Project Scope */}
          <div style={{ marginBottom: "2rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.84rem",
                fontWeight: 750,
                marginBottom: "0.5rem",
                color: isLight ? "#0f172a" : "#f1f5f9",
              }}
            >
              Project Overview / Scope Goals *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Briefly describe what you're looking to engineer, key challenges, or existing stack..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                width: "100%",
                padding: "1rem 1.25rem",
                borderRadius: "14px",
                background: isLight ? "#ffffff" : "rgba(0, 0, 0, 0.35)",
                border: `1px solid ${isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.1)"}`,
                outline: "none",
                fontSize: "0.92rem",
                color: isLight ? "#0f172a" : "#ffffff",
                resize: "vertical",
                lineHeight: 1.6,
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Action Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.25rem",
              paddingTop: "1rem",
              borderTop: `1px solid ${isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)"}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.84rem", color: isLight ? "#64748b" : "#94a3b8" }}>
              <ShieldCheck size={17} color="#10b981" />
              <span>Strict NDA & 100% Data Confidentiality</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.95rem 2.4rem",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)",
                color: "#ffffff",
                fontSize: "0.96rem",
                fontWeight: 800,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 6px 24px rgba(14, 165, 233, 0.4)",
                transition: "all 0.25s ease",
              }}
            >
              {loading ? (
                <span>Dispatching Inquiry...</span>
              ) : (
                <>
                  <span>Send Direct Inquiry</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
