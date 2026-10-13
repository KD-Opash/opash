"use client";

import React, { useState } from "react";
import Link from "next/link";
import { careersData, JobOpening } from "@/data/careers";
import { companyData } from "@/data/company";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  UploadCloud, 
  HeartHandshake, 
  Laptop, 
  TrendingUp, 
  Coffee, 
  Shield, 
  Award,
  ChevronDown
} from "lucide-react";
import AtmosphericHero from "@/components/AtmosphericHero";

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(careersData.openings[0]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: careersData.openings[0].title,
    experience: "1 - 3 Years",
    portfolioUrl: "",
    message: "",
  });

  const perkIcons = {
    Laptop: Laptop,
    TrendingUp: TrendingUp,
    Coffee: Coffee,
    Shield: Shield,
    Clock: Clock,
    Award: Award,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-grid-pattern" style={{ minHeight: "100vh", position: "relative" }}>
      {/* Background Glow */}
      <div
        className="ambient-glow-orb"
        style={{
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, #476D9A 0%, transparent 70%)",
        }}
      />

      {/* Atmospheric Hero Section */}
      <AtmosphericHero
        badge="ELITE ENGINEERING CULTURE"
        titleTop="Let your software career"
        titleAccent="take flight"
        subheadline={careersData.subheadline}
        primaryCta={{ label: `Explore ${careersData.openings.length} Open Roles`, href: "#openings" }}
        secondaryCta={{ label: "Submit Application", href: "#apply-section" }}
        leftCard={{
          tag: "AUTONOMY & MASTERY",
          title: "Build at Global Scale",
          description: "Work directly on production systems serving millions of users with modern stacks: Next.js, Go, Python AI, and Kubernetes.",
          graphType: "arc",
          metric: "Zero Micro-Management",
        }}
        rightCard={{
          tag: "CULTURE & VELOCITY",
          title: "High Agency Team",
          description: "Work with passionate technologists in a supportive, friendly culture that values deep craftsmanship and rapid delivery.",
          graphType: "cycle",
          metric: "Top 1% Engineering Squad",
        }}
      />

      {/* Culture & Perks Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem auto" }}>
            <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
              Life at Opash
            </span>
            <h2 className="heading-section" style={{ marginTop: "0.5rem" }}>
              Why Engineers Love Building Here
            </h2>
            <p className="subhead-lead" style={{ marginTop: "0.75rem" }}>
              We believe great ideas grow in a relaxed, friendly, and flexible environment — where deadlines are met without killing the vibe.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {careersData.perks.map((p) => {
              const IconComp = (perkIcons as any)[p.icon] || Award;
              return (
                <div
                  key={p.title}
                  className="interactive-card"
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "10px",
                      backgroundColor: "rgba(71, 109, 154, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-cyan)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <IconComp size={22} />
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                    {p.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Job Openings Section */}
      <section
        id="openings"
        className="section-alt"
        style={{
          padding: "5.5rem 0",
        }}
      >
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem auto" }}>
            <span className="badge-glow" style={{ marginBottom: "0.75rem" }}>
              Current Openings
            </span>
            <h2 className="heading-section" style={{ marginTop: "0.5rem" }}>
              Explore Open Engineering Roles
            </h2>
            <p className="subhead-lead" style={{ marginTop: "0.75rem" }}>
              Find the opportunity that aligns with your ambition and technical mastery.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.8fr", gap: "2.5rem" }} className="jobs-grid">
            {/* Left: Job Openings List */}
            <div className="flex flex-col gap-3">
              {careersData.openings.map((job) => {
                const isSelected = selectedJob?.id === job.id;
                return (
                  <button
                    key={job.id}
                    type="button"
                    onClick={() => setSelectedJob(job)}
                    style={{
                      textAlign: "left",
                      padding: "1.25rem 1.5rem",
                      borderRadius: "var(--radius-lg)",
                      backgroundColor: isSelected ? "rgba(71, 109, 154, 0.2)" : "var(--bg-card)",
                      border: isSelected ? "1px solid var(--color-cyan)" : "1px solid var(--border-subtle)",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    <div className="flex justify-between items-center" style={{ marginBottom: "0.4rem" }}>
                      <span style={{ fontSize: "0.75rem", color: "var(--color-cyan)", fontWeight: 700, textTransform: "uppercase" }}>
                        {job.department}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        {job.type}
                      </span>
                    </div>
                    <div style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.4rem" }}>
                      {job.title}
                    </div>
                    <div className="flex items-center gap-4" style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} /> {job.location}
                      </span>
                      <span>•</span>
                      <span>Exp: {job.experience}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Selected Job Details View */}
            {selectedJob && (
              <div
                className="glass-panel"
                style={{
                  padding: "2.5rem",
                }}
              >
                <div className="flex justify-between items-start flex-wrap gap-4" style={{ marginBottom: "1.5rem" }}>
                  <div>
                    <span className="badge-glow" style={{ marginBottom: "0.5rem" }}>
                      {selectedJob.department}
                    </span>
                    <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginTop: "0.5rem" }}>
                      {selectedJob.title}
                    </h3>
                    <div className="flex items-center gap-4" style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "0.4rem" }}>
                      <span>Location: {selectedJob.location}</span>
                      <span>•</span>
                      <span>Exp: {selectedJob.experience}</span>
                    </div>
                  </div>
                  <a
                    href="#apply-section"
                    onClick={() => setFormData({ ...formData, position: selectedJob.title })}
                    className="btn-primary"
                    style={{ padding: "0.75rem 1.5rem", fontSize: "0.9rem" }}
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

                <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6, marginBottom: "2rem" }}>
                  {selectedJob.description}
                </p>

                {/* Responsibilities */}
                <div style={{ marginBottom: "2rem" }}>
                  <h4 style={{ color: "var(--text-primary)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                    Key Responsibilities:
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {selectedJob.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2" style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                        <CheckCircle2 size={16} color="var(--color-cyan)" style={{ flexShrink: 0, marginTop: 4 }} />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h4 style={{ color: "var(--text-primary)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                    Qualifications & Requirements:
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2" style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                        <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: 4 }} />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Direct Application & Resume Form */}
      <section id="apply-section" className="section-padding">
        <div className="container-custom" style={{ maxWidth: "800px" }}>
          {submitted ? (
            <div
              className="glass-panel"
              style={{
                padding: "3.5rem 2.5rem",
                textAlign: "center",
                border: "1px solid rgba(30, 148, 101, 0.4)",
              }}
            >
              <CheckCircle2 size={50} color="#10b981" style={{ margin: "0 auto 1.5rem auto" }} />
              <h3 style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--text-primary)" }}>
                Application Submitted Successfully!
              </h3>
              <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", fontSize: "1rem", maxWidth: "480px", margin: "0.75rem auto 2rem auto" }}>
                Thank you, <strong>{formData.name}</strong>. Our HR talent acquisition lead has received your application for the <strong>{formData.position}</strong> role and will review your profile within 48 hours.
              </p>
              <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                HR Contact: <strong style={{ color: "var(--color-cyan)" }}>{companyData.contact.hrEmail}</strong> | {companyData.contact.phone}
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass-panel"
              style={{
                padding: "3rem 2.5rem",
              }}
            >
              <div style={{ marginBottom: "2rem" }}>
                <span className="badge-glow" style={{ marginBottom: "0.5rem" }}>
                  Join Our Squad
                </span>
                <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginTop: "0.5rem" }}>
                  Send Your Resume Here!
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                  Connect with our talent acquisition team. We hire for hunger, engineering integrity, and craft.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }} className="apply-col">
                <div>
                  <label className="input-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="input-field"
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="input-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="input-field"
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }} className="apply-col">
                <div>
                  <label className="input-label">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    className="input-field"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="input-label">Position of Interest *</label>
                  <select
                    className="input-field"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  >
                    {careersData.openings.map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                    <option value="General Engineering Consideration">General Engineering Consideration</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }} className="apply-col">
                <div>
                  <label className="input-label">Total Experience</label>
                  <select
                    className="input-field"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  >
                    <option value="Fresher / Intern">Fresher / Intern</option>
                    <option value="1 - 3 Years">1 - 3 Years</option>
                    <option value="3 - 6 Years">3 - 6 Years</option>
                    <option value="6+ Years (Senior / Lead)">6+ Years (Senior / Lead)</option>
                  </select>
                </div>
                <div>
                  <label className="input-label">GitHub / Portfolio URL</label>
                  <input
                    type="url"
                    className="input-field"
                    placeholder="https://github.com/yourhandle"
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label className="input-label">Message / Why Opash Software?</label>
                <textarea
                  rows={3}
                  className="input-field"
                  placeholder="Share a project you're proud of or what excites you about this role..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ resize: "vertical" }}
                />
              </div>

              {/* Resume Upload Simulator */}
              <div
                style={{
                  padding: "1.75rem",
                  borderRadius: "var(--radius-md)",
                  border: "2px dashed var(--border-accent)",
                  backgroundColor: "var(--bg-elevated)",
                  textAlign: "center",
                  marginBottom: "2rem",
                  cursor: "pointer",
                }}
              >
                <UploadCloud size={32} color="var(--color-cyan)" style={{ margin: "0 auto 0.5rem auto" }} />
                <div style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "0.95rem" }}>
                  Upload Your Resume (PDF / DOCX)
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                  Drag & drop your file here, or click to browse (Max 10MB)
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%", padding: "0.95rem" }}>
                <Send size={16} />
                <span>Submit Job Application</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
