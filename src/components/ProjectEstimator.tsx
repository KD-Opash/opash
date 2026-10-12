"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Layers, 
  Clock, 
  Users, 
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function ProjectEstimator() {
  const [projectType, setProjectType] = useState("web-app");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "auth",
    "payments",
    "api"
  ]);
  const [engagementModel, setEngagementModel] = useState("dedicated");
  const [timeline, setTimeline] = useState("standard");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });

  const projectTypes = [
    { id: "web-app", label: "Custom Web Application", baseWeeks: 6, basePrice: 4500, desc: "React, Next.js, Node.js" },
    { id: "mobile-app", label: "Mobile App (iOS & Android)", baseWeeks: 8, basePrice: 6500, desc: "React Native or Flutter" },
    { id: "saas-platform", label: "Multi-Tenant SaaS Platform", baseWeeks: 10, basePrice: 8500, desc: "Billing, RBAC, Cloud Scalability" },
    { id: "ai-system", label: "AI & LLM Orchestration / RAG", baseWeeks: 6, basePrice: 6000, desc: "Private RAG, Agents, Vector DB" },
    { id: "enterprise-custom", label: "Enterprise Workflow / ERP", baseWeeks: 12, basePrice: 11000, desc: "Legacy refactoring & deep APIs" },
  ];

  const featuresList = [
    { id: "auth", label: "Enterprise Auth & RBAC (SSO/2FA)", weeks: 1, price: 900 },
    { id: "payments", label: "Stripe Subscriptions & Invoicing", weeks: 1.5, price: 1200 },
    { id: "ai", label: "Custom AI / LLM Co-Pilot & Search", weeks: 2, price: 1800 },
    { id: "realtime", label: "Real-Time WebSockets & Notifications", weeks: 1, price: 950 },
    { id: "api", label: "Third-Party ERP / CRM API Sync", weeks: 1.5, price: 1100 },
    { id: "qa", label: "Automated E2E Playwright QA Suite", weeks: 1, price: 800 },
  ];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Calculations
  const currentType = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
  const featureWeeks = selectedFeatures.reduce((acc, featId) => {
    const feat = featuresList.find((f) => f.id === featId);
    return acc + (feat ? feat.weeks : 0);
  }, 0);
  const featurePrice = selectedFeatures.reduce((acc, featId) => {
    const feat = featuresList.find((f) => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const totalWeeks = Math.round(currentType.baseWeeks + featureWeeks);
  const totalPrice = Math.round(currentType.basePrice + featurePrice);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="glass-panel" style={{ padding: "3rem 2.5rem", background: "rgba(11, 17, 32, 0.9)" }}>
      <div className="flex items-center gap-3" style={{ marginBottom: "0.75rem" }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "10px",
            background: "linear-gradient(135deg, #0e50d7, #00d2ff)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
          }}
        >
          <Calculator size={20} />
        </div>
        <div>
          <span className="badge-glow">Interactive Project Estimator</span>
          <h3 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#ffffff", marginTop: "0.25rem" }}>
            Scope Your Project & Get Instant Estimates
          </h3>
        </div>
      </div>
      <p style={{ color: "var(--text-secondary)", marginBottom: "2.5rem", fontSize: "1rem" }}>
        Select your project parameters to receive a transparent timeline and budget estimation.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "2.5rem" }} className="estimator-grid">
        {/* Left Form Selectors */}
        <div className="flex flex-col gap-6">
          {/* Step 1: Project Type */}
          <div>
            <label className="input-label" style={{ fontSize: "0.95rem", color: "#ffffff", marginBottom: "0.75rem" }}>
              1. Choose Core Project Type
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.6rem" }}>
              {projectTypes.map((type) => {
                const isSelected = type.id === projectType;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setProjectType(type.id)}
                    style={{
                      textAlign: "left",
                      padding: "0.9rem 1.25rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: isSelected ? "rgba(14, 80, 215, 0.2)" : "rgba(255, 255, 255, 0.02)",
                      border: isSelected ? "1px solid var(--color-cyan)" : "1px solid rgba(255, 255, 255, 0.08)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "all 0.2s",
                    }}
                  >
                    <div>
                      <div style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.95rem" }}>{type.label}</div>
                      <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{type.desc}</div>
                    </div>
                    {isSelected && <Check size={18} color="var(--color-cyan)" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Features to include */}
          <div>
            <label className="input-label" style={{ fontSize: "0.95rem", color: "#ffffff", marginBottom: "0.75rem" }}>
              2. Select Critical Features & Integrations
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
              {featuresList.map((feat) => {
                const isChecked = selectedFeatures.includes(feat.id);
                return (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => toggleFeature(feat.id)}
                    style={{
                      textAlign: "left",
                      padding: "0.8rem 1rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: isChecked ? "rgba(0, 210, 255, 0.12)" : "rgba(255, 255, 255, 0.02)",
                      border: isChecked ? "1px solid var(--color-cyan)" : "1px solid rgba(255, 255, 255, 0.06)",
                      color: isChecked ? "#ffffff" : "var(--text-secondary)",
                      cursor: "pointer",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      transition: "all 0.2s",
                    }}
                  >
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "4px",
                        backgroundColor: isChecked ? "var(--color-cyan)" : "rgba(255, 255, 255, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000000",
                        fontSize: "0.75rem",
                        flexShrink: 0,
                      }}
                    >
                      {isChecked && "✓"}
                    </div>
                    <span>{feat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Engagement Model */}
          <div>
            <label className="input-label" style={{ fontSize: "0.95rem", color: "#ffffff", marginBottom: "0.75rem" }}>
              3. Desired Engagement Model
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.6rem" }}>
              {[
                { id: "dedicated", label: "Dedicated Squad", sub: "Full-Time Team" },
                { id: "fixed", label: "Fixed-Scope Milestone", sub: "Clear Deliverables" },
                { id: "hourly", label: "Time & Material", sub: "Flexible Hours" }
              ].map((model) => (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setEngagementModel(model.id)}
                  style={{
                    padding: "0.8rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: engagementModel === model.id ? "rgba(14, 80, 215, 0.25)" : "rgba(255, 255, 255, 0.02)",
                    border: engagementModel === model.id ? "1px solid var(--color-primary-light)" : "1px solid rgba(255, 255, 255, 0.06)",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.85rem" }}>{model.label}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>{model.sub}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.95)",
            border: "1px solid rgba(14, 80, 215, 0.4)",
            borderRadius: "var(--radius-xl)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 30px rgba(14, 80, 215, 0.2)",
          }}
        >
          <div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>
              Estimated Investment Summary
            </div>

            {/* Estimated Price Range */}
            <div style={{ marginTop: "1.25rem", marginBottom: "1.5rem" }}>
              <div style={{ fontSize: "2.6rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }}>
                ${totalPrice.toLocaleString()} - ${(totalPrice * 1.35).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </div>
              <div style={{ color: "var(--color-cyan)", fontSize: "0.85rem", fontWeight: 600 }}>
                Transparent estimation • Zero hidden costs
              </div>
            </div>

            {/* Key Deliverable Specs */}
            <div className="flex flex-col gap-3" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "1.25rem", marginBottom: "1.5rem" }}>
              <div className="flex justify-between items-center" style={{ fontSize: "0.9rem" }}>
                <span className="flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
                  <Clock size={16} color="var(--color-cyan)" /> Estimated Timeline:
                </span>
                <span style={{ color: "#ffffff", fontWeight: 700 }}>
                  ~{totalWeeks} - {totalWeeks + 2} Weeks
                </span>
              </div>

              <div className="flex justify-between items-center" style={{ fontSize: "0.9rem" }}>
                <span className="flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
                  <Users size={16} color="var(--color-cyan)" /> Recommended Team:
                </span>
                <span style={{ color: "#ffffff", fontWeight: 700 }}>
                  2 Devs + 1 QA + 1 PM
                </span>
              </div>

              <div className="flex justify-between items-center" style={{ fontSize: "0.9rem" }}>
                <span className="flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
                  <ShieldCheck size={16} color="var(--color-cyan)" /> IP Ownership:
                </span>
                <span style={{ color: "#10b981", fontWeight: 700 }}>
                  100% Yours from Day 1
                </span>
              </div>
            </div>

            {/* Included in this quote */}
            <div style={{ backgroundColor: "rgba(255, 255, 255, 0.03)", padding: "1rem", borderRadius: "var(--radius-md)", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              <div style={{ color: "#ffffff", fontWeight: 600, marginBottom: "0.4rem" }}>Included in all Opash engagements:</div>
              <div>• Bi-weekly working demo sprints</div>
              <div>• Full Git source code access</div>
              <div>• Free 30-day post-launch warranty</div>
            </div>
          </div>

          {/* Quick submission form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="input-field"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                required
                placeholder="Work Email"
                className="input-field"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Phone / WhatsApp"
                className="input-field"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: "0.5rem" }}>
                <span>Lock In Estimate & Get Architecture Plan</span>
                <ArrowRight size={16} />
              </button>
            </form>
          ) : (
            <div
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                padding: "1.5rem",
                borderRadius: "var(--radius-md)",
                textAlign: "center",
              }}
            >
              <CheckCircle2 size={36} color="#10b981" style={{ margin: "0 auto 0.75rem auto" }} />
              <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "1.1rem" }}>Estimate Request Received!</div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginTop: "0.4rem" }}>
                Our solutions engineering lead will email you a tailored architectural breakdown and schedule a 30-min strategy call within 4 business hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
