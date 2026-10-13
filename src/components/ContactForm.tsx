"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Clock, Phone, Mail } from "lucide-react";
import { companyData } from "@/data/company";

export default function ContactForm() {
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
        className="glass-panel"
        style={{
          padding: "3.5rem 2.5rem",
          textAlign: "center",
          border: "1px solid rgba(30, 148, 101, 0.4)",
        }}
      >
        <div
          style={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            backgroundColor: "rgba(30, 148, 101, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem auto",
            color: "var(--color-cyan)",
          }}
        >
          <CheckCircle2 size={40} />
        </div>
        <h3 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--text-primary)" }}>
          Thank You, {formData.name || "Partner"}!
        </h3>
        <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", fontSize: "1.05rem", maxWidth: "480px", margin: "0.75rem auto 2rem auto" }}>
          Your project details have been dispatched to <strong>Hiren Danecha</strong> and the Opash engineering team. We typically review requirements and reply within <strong>2 to 4 hours</strong>.
        </p>
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "1rem 1.5rem",
            borderRadius: "var(--radius-md)",
            backgroundColor: "var(--bg-elevated)",
            border: "1px solid var(--border-subtle)",
            fontSize: "0.9rem",
            color: "var(--text-muted)",
          }}
        >
          <span>Need immediate assistance?</span>
          <a
            href={companyData.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#25D366", fontWeight: 600, textDecoration: "none" }}
          >
            Chat directly with us on WhatsApp: {companyData.contact.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel"
      style={{
        padding: "3rem 2.5rem",
      }}
    >
      <div style={{ marginBottom: "2rem" }}>
        <span className="badge-glow" style={{ marginBottom: "0.5rem" }}>
          Direct Engineering Inquiry
        </span>
        <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginTop: "0.4rem" }}>
          Get In Touch With Our Tech Leads
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
          Fill out this form or email us at{" "}
          <a href={`mailto:${companyData.contact.email}`} style={{ color: "var(--color-cyan)", textDecoration: "none" }}>
            {companyData.contact.email}
          </a>
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }} className="form-two-col">
        <div>
          <label className="input-label">Your Name *</label>
          <input
            type="text"
            required
            className="input-field"
            placeholder="e.g. John Miller"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="input-label">Work Email *</label>
          <input
            type="email"
            required
            className="input-field"
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }} className="form-two-col">
        <div>
          <label className="input-label">Phone / WhatsApp</label>
          <input
            type="tel"
            className="input-field"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div>
          <label className="input-label">Primary Service</label>
          <select
            className="input-field"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          >
            <option value="Custom Software Development">Custom Software Development</option>
            <option value="Web Development">Web App Development (React/Next.js)</option>
            <option value="Mobile App Development">Mobile App (iOS/Android)</option>
            <option value="AI & ML Solutions">AI & ML Solutions / RAG</option>
            <option value="SaaS Development">Multi-Tenant SaaS Engineering</option>
            <option value="API Integration">API Integration & Microservices</option>
            <option value="QA & Testing">QA & Automated Testing</option>
            <option value="Hire Dedicated Developers">Hire Dedicated Developers</option>
          </select>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }} className="form-two-col">
        <div>
          <label className="input-label">Estimated Budget</label>
          <select
            className="input-field"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          >
            <option value="< $10k">&lt; $10,000</option>
            <option value="$10k - $25k">$10,000 - $25,000</option>
            <option value="$25k - $50k">$25,000 - $50,000</option>
            <option value="$50k+">$50,000+ (Enterprise)</option>
          </select>
        </div>
        <div>
          <label className="input-label">Target Timeline</label>
          <select
            className="input-field"
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
          >
            <option value="Urgent (< 1 month)">Urgent (&lt; 1 month)</option>
            <option value="1 - 3 Months">1 - 3 Months</option>
            <option value="3 - 6 Months">3 - 6 Months</option>
            <option value="Flexible / Ongoing">Flexible / Ongoing Squad</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: "1.75rem" }}>
        <label className="input-label">Project Overview / Goals *</label>
        <textarea
          required
          rows={4}
          className="input-field"
          placeholder="Briefly describe what you're looking to build, key pain points, or existing stack..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          style={{ resize: "vertical" }}
        />
      </div>

      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2" style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
          <ShieldCheck size={16} color="#10b981" />
          <span>Strict NDA & 100% Data Confidentiality</span>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="btn-primary"
          style={{ padding: "0.85rem 2.2rem" }}
        >
          {loading ? (
            <span>Sending Inquiry...</span>
          ) : (
            <>
              <span>Send Message</span>
              <Send size={16} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
