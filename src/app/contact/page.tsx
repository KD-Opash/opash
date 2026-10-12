"use client";

import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import ContactForm from "@/components/ContactForm";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUpRight, 
  Globe, 
  ShieldCheck, 
  MessageSquare,
  Sparkles
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-grid-pattern" style={{ minHeight: "100vh", position: "relative" }}>
      {/* Background glow */}
      <div
        className="ambient-glow-orb"
        style={{
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, #0e50d7 0%, transparent 70%)",
        }}
      />

      {/* Hero */}
      <section
        style={{
          paddingTop: "6rem",
          paddingBottom: "4.5rem",
          position: "relative",
          zIndex: 1,
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="container-custom" style={{ textAlign: "center" }}>
          <div className="flex items-center justify-center gap-2" style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
            <Link href="/" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "var(--color-cyan)" }}>Contact Us</span>
          </div>

          <span className="badge-glow" style={{ marginBottom: "1rem" }}>
            Let’s Connect
          </span>

          <h1 className="heading-display" style={{ maxWidth: "860px", margin: "0.75rem auto 1.5rem auto", color: "#ffffff" }}>
            Start Your Next Software Initiative with <span className="gradient-text">Opash Software</span>
          </h1>

          <p className="subhead-lead" style={{ maxWidth: "720px", margin: "0 auto 2rem auto" }}>
            Whether you have a fully documented technical specification or an early-stage concept, our engineering team is here to scope, evaluate feasibility, and guide your roadmap.
          </p>
        </div>
      </section>

      {/* Main Content: Info Cards & Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.35fr", gap: "3rem" }} className="contact-grid">
            {/* Left: Contact Info & Office */}
            <div className="flex flex-col gap-6">
              {/* Headquarters Box */}
              <div
                className="glass-panel"
                style={{
                  padding: "2.5rem",
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  border: "1px solid rgba(14, 80, 215, 0.35)",
                }}
              >
                <div className="flex items-center gap-3" style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "10px",
                      background: "linear-gradient(135deg, #0e50d7, #00d2ff)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                    }}
                  >
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#ffffff" }}>
                      Global Headquarters
                    </h3>
                    <div style={{ color: "var(--color-cyan)", fontSize: "0.85rem", fontWeight: 600 }}>
                      Surat, Gujarat, India
                    </div>
                  </div>
                </div>

                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.95rem", marginBottom: "1.25rem" }}>
                  {companyData.contact.address}
                </p>

                <a
                  href={companyData.contact.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ display: "inline-flex", padding: "0.65rem 1.25rem", fontSize: "0.85rem" }}
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Direct Communication Channels */}
              <div
                className="glass-panel"
                style={{
                  padding: "2.5rem",
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <h4 style={{ color: "#ffffff", fontSize: "1.15rem", fontWeight: 700, marginBottom: "1.5rem" }}>
                  Direct Contact Channels
                </h4>

                <div className="flex flex-col gap-4">
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "8px",
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-cyan)",
                      }}
                    >
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>Direct Phone:</div>
                      <a href={`tel:${companyData.contact.phoneClean}`} style={{ color: "#ffffff", fontWeight: 600, textDecoration: "none" }}>
                        {companyData.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "8px",
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-cyan)",
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>Executive Email:</div>
                      <a href={`mailto:${companyData.contact.email}`} style={{ color: "#ffffff", fontWeight: 600, textDecoration: "none" }}>
                        {companyData.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center gap-3">
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "8px",
                        backgroundColor: "rgba(37, 211, 102, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#25D366",
                      }}
                    >
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>Instant WhatsApp Chat:</div>
                      <a href={companyData.contact.whatsapp} target="_blank" rel="noreferrer" style={{ color: "#25D366", fontWeight: 600, textDecoration: "none" }}>
                        Chat with our technical team now
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-center gap-3">
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "8px",
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-cyan)",
                      }}
                    >
                      <Clock size={18} />
                    </div>
                    <div>
                      <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>Office Hours:</div>
                      <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                        {companyData.contact.workingHours}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Timezone Coverage Strip */}
              <div
                className="glass-panel"
                style={{
                  padding: "1.75rem",
                  backgroundColor: "rgba(15, 23, 42, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div className="flex items-center gap-2" style={{ color: "var(--color-cyan)", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  <Globe size={16} /> Global Timezone Overlap
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.5 }}>
                  Our distributed squads synchronize with North America (PST / EST), Europe (GMT / CET), the Middle East (GST), and APAC daily.
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
