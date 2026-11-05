'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { companyData } from '@/data/company';
import ContactCreativeBackdrop from '@/components/ContactCreativeBackdrop';
import { useTheme } from '@/components/ThemeProvider';
import OuiWillHeadline, { OuiWillWord, OuiWillDot } from '@/components/OuiWillHeadline';
import { TechStackShowcase } from '@/components/TechStackShowcase';
import Interactive3DIcon from '@/components/Interactive3DIcon';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Building2,
  Sparkles,
  User,
  FileText,
  MessageSquare,
  Cpu,
  Layers,
  ChevronLeft,
  ChevronRight,
  Check,
} from 'lucide-react';

// Exact 10 Industries from live site: https://www.opashsoftware.com/contact/
const LIVE_INDUSTRIES = [
  { name: 'Travel & Hospitality', desc: 'Unified global booking engines, dynamic pricing matrices & live GDS inventory synchronization.' },
  { name: 'Telecommunication', desc: 'Carrier-grade OSS/BSS software, 5G telemetry routing & low-latency mesh communications.' },
  { name: 'Industrial Tech', desc: 'IoT sensor telematics, automated factory intelligence & digital twin process control.' },
  { name: 'NGOs', desc: 'Donation collection infrastructure, transparency ledgers & global community engagement platforms.' },
  { name: 'InsureTech', desc: 'Automated policy issuance, claims management pipelines & AI-driven risk underwriting engines.' },
  { name: 'Health Care', desc: 'HIPAA-compliant EHR integrations, telehealth video streaming & secure FHIR interoperability.' },
  { name: 'Fintech', desc: 'High-frequency transaction ledgers, payment gateway integrations & PCI-DSS banking rails.' },
  { name: 'Ecommerce', desc: 'Sub-second headless storefronts, multi-warehouse inventory & AI-driven product recommendations.' },
  { name: 'Education', desc: 'Adaptive learning academies, interactive virtual classrooms & SCORM-compliant student LMS.' },
  { name: 'Real Estate', desc: 'PropTech asset management, 3D interactive virtual tours & automated tenant lease workflows.' },
];

export default function ContactPageClient() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Form State (Exact fields from live site)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectTitle: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        background: isLight ? '#f8fafc' : '#020712',
        color: isLight ? '#0f172a' : '#f8fafc',
        transition: 'background 0.3s ease, color 0.3s ease',
      }}
    >
      {/* ========================================================
          1. BESPOKE CREATIVE HERO SECTION (100VH FULL WINDOW)
      ======================================================== */}
      <section
        className="contact-hero-section"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 'clamp(6rem, 10vh, 7.5rem) 1.5rem clamp(5rem, 8vh, 6.5rem) 1.5rem',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        <ContactCreativeBackdrop isLightMode={isLight} />

        <div
          className="container-custom"
          style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', width: '100%' }}
        >
          <div style={{ maxWidth: '1040px', margin: '0 auto', textAlign: 'center' }}>
            {/* Main Headline with Oui Will Kinetic Typographic Animation */}
            <OuiWillHeadline
              style={{
                fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', serif",
                fontSize: 'clamp(2.1rem, 6.5vw, 82px)',
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
                display: 'block',
              }}
            >
              <OuiWillWord index={1}>Get</OuiWillWord>
              <OuiWillWord index={2}>In</OuiWillWord>
              <OuiWillWord index={3}>Touch</OuiWillWord>
              <OuiWillDot />
              <span style={{ display: 'block', width: '100%', marginTop: '0.35rem' }}>
                <OuiWillWord index={4} isGradient>
                  With Us
                </OuiWillWord>
              </span>
            </OuiWillHeadline>

            {/* Exact Subtitle from Live Site */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                lineHeight: 1.68,
                color: isLight ? '#475569' : '#94a3b8',
                maxWidth: '820px',
                margin: '0 auto 2.25rem auto',
                fontWeight: 400,
              }}
            >
              See how your business can benefit with Opash Software on Your team. Connect directly with our team to evaluate feasibility, estimate sprints, and receive an actionable roadmap.
            </p>

            {/* CTAs with Home Page Rolling Text on Hover */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '2.5rem',
              }}
            >
              <a href="#contact-details-form" className="hero-brand-primary-btn opash-roll-btn">
                <span className="opash-roll-track">
                  <span className="opash-roll-item">
                    <span>Send Message</span>
                    <ArrowRight size={15} className="hero-btn-arrow" />
                  </span>
                  <span className="opash-roll-item" aria-hidden="true">
                    <span>Send Message</span>
                    <ArrowRight size={15} className="hero-btn-arrow" />
                  </span>
                </span>
              </a>

              <a
                href={companyData.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hero-brand-secondary-btn opash-roll-btn"
              >
                <span className="opash-roll-track">
                  <span className="opash-roll-item">
                    <MessageCircle size={15} className="hero-wa-icon" />
                    <span>WhatsApp Direct</span>
                  </span>
                  <span className="opash-roll-item" aria-hidden="true">
                    <MessageCircle size={15} className="hero-wa-icon" />
                    <span>WhatsApp Direct</span>
                  </span>
                </span>
              </a>
            </div>

            {/* Real Details Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  background: isLight ? 'rgba(255, 255, 255, 0.85)' : 'rgba(15, 23, 42, 0.65)',
                  border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(10px)',
                  fontSize: '0.86rem',
                  fontWeight: 650,
                  color: isLight ? '#334155' : '#cbd5e1',
                }}
              >
                <MapPin size={15} className="text-emerald-400" />
                <span>Surat, Gujarat, India</span>
              </div>

              <a
                href={`tel:${companyData.contact.phoneClean}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  background: isLight ? 'rgba(255, 255, 255, 0.85)' : 'rgba(15, 23, 42, 0.65)',
                  border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(10px)',
                  fontSize: '0.86rem',
                  fontWeight: 650,
                  color: isLight ? '#334155' : '#cbd5e1',
                  textDecoration: 'none',
                }}
              >
                <Phone size={15} className="text-cyan-400" />
                <span>+91 95372-22266</span>
              </a>

              <a
                href={`mailto:${companyData.contact.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  background: isLight ? 'rgba(255, 255, 255, 0.85)' : 'rgba(15, 23, 42, 0.65)',
                  border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(10px)',
                  fontSize: '0.86rem',
                  fontWeight: 650,
                  color: isLight ? '#334155' : '#cbd5e1',
                  textDecoration: 'none',
                }}
              >
                <Mail size={15} className="text-sky-400" />
                <span>hiren@opashsoftware.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Animated "Scroll to Explore" Indicator (Like About Us & Portfolio) */}
        <a
          href="#contact-details-form"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById('contact-details-form');
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="hero-scroll-indicator"
          style={{
            position: 'absolute',
            bottom: 'clamp(1.5rem, 3.5vh, 2.75rem)',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.55rem',
            textDecoration: 'none',
            zIndex: 10,
            cursor: 'pointer',
            transition: 'transform 0.25s ease, opacity 0.25s ease',
          }}
        >
          {/* Minimalist mouse pill with animated green glowing dot */}
          <div
            style={{
              width: '22px',
              height: '36px',
              borderRadius: '9999px',
              border: `1.5px solid ${isLight ? 'rgba(0, 138, 117, 0.45)' : 'rgba(0, 255, 209, 0.45)'}`,
              background: isLight ? 'rgba(255, 255, 255, 0.65)' : 'rgba(10, 20, 36, 0.65)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '6px',
              boxShadow: isLight
                ? '0 4px 14px rgba(0, 168, 143, 0.15)'
                : '0 4px 18px rgba(0, 255, 209, 0.2)',
            }}
          >
            <span
              className="hero-scroll-dot"
              style={{
                width: '4px',
                height: '7px',
                borderRadius: '9999px',
                background: isLight ? '#008a75' : '#00ffd1',
                boxShadow: isLight ? '0 0 8px #008a75' : '0 0 10px #00ffd1',
              }}
            />
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.72rem',
              fontWeight: 800,
              letterSpacing: '0.14em',
              color: isLight ? '#008a75' : '#00ffd1',
              textTransform: 'uppercase',
            }}
          >
            <span>SCROLL TO EXPLORE</span>
            <span style={{ fontSize: '0.85rem' }}>↓</span>
          </div>
        </a>
      </section>

      {/* ========================================================
          2. SECTION 1: CONTACT INFORMATION & GET IN TOUCH FORM
      ======================================================== */}
      <section
        id="contact-details-form"
        style={{
          paddingTop: 'clamp(4rem, 7vw, 6rem)',
          paddingBottom: 'clamp(4rem, 7vw, 6rem)',
          scrollMarginTop: '90px',
          position: 'relative',
          borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div className="container-custom">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '2.5rem',
              alignItems: 'start',
            }}
          >
            {/* LEFT COLUMN: Contact Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div
                style={{
                  padding: '2.5rem',
                  borderRadius: '24px',
                  background: isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.75)',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isLight ? '0 10px 30px -5px rgba(0, 0, 0, 0.04)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <Interactive3DIcon type="building" size={52} iconSize={26} />
                  <div>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, margin: 0 }}>
                      Contact Information
                    </h3>
                    <div style={{ fontSize: '0.88rem', color: isLight ? '#008a75' : '#00ffd1', fontWeight: 650 }}>
                      Opash Software Headquarters
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  {/* Location */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <Interactive3DIcon type="location" size={44} iconSize={22} style={{ marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 750, color: isLight ? '#64748b' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                        Location
                      </div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: '0.96rem',
                          lineHeight: 1.6,
                          fontWeight: 500,
                          color: isLight ? '#1e293b' : '#f1f5f9',
                        }}
                      >
                        129, The Galleria Shopping Hub, Nr. Sanjeev Kumar Auditorium, Opp. 3Seventy Kitchen Restaurant, Pal, Adajan, Surat - 395009
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <Interactive3DIcon type="phone" size={44} iconSize={22} style={{ marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 750, color: isLight ? '#64748b' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                        Phone
                      </div>
                      <a
                        href={`tel:${companyData.contact.phoneClean}`}
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: isLight ? '#0f172a' : '#ffffff',
                          textDecoration: 'none',
                        }}
                      >
                        +91 95372-22266
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <Interactive3DIcon type="mail" size={44} iconSize={22} style={{ marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 750, color: isLight ? '#64748b' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                        E-mail
                      </div>
                      <a
                        href={`mailto:${companyData.contact.email}`}
                        style={{
                          fontSize: '1.02rem',
                          fontWeight: 700,
                          color: isLight ? '#0f172a' : '#ffffff',
                          textDecoration: 'none',
                        }}
                      >
                        hiren@opashsoftware.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Google Maps Link */}
                <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <a
                    href={companyData.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      color: isLight ? '#0284c7' : '#38bdf8',
                      textDecoration: 'none',
                    }}
                  >
                    <span>Open in Google Maps &amp; Directions</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Instant WhatsApp Card */}
              <a
                href={companyData.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '1.5rem 2rem',
                  borderRadius: '20px',
                  background: isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.75)',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                }}
              >
                <Interactive3DIcon type="whatsapp" size={48} iconSize={26} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 750, color: '#25D366', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Instant Chat on WhatsApp
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800 }}>
                    +91 95372-22266
                  </div>
                </div>
                <ArrowRight size={18} style={{ color: '#25D366' }} />
              </a>
            </div>

            {/* RIGHT COLUMN: Get In Touch With Us Form (Exact Live Site Fields) */}
            <div
              style={{
                borderRadius: '24px',
                background: isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.85)',
                border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: isLight
                  ? '0 20px 50px -15px rgba(0, 0, 0, 0.06)'
                  : '0 25px 60px -20px rgba(0, 0, 0, 0.8)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                position: 'relative',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      background: 'rgba(0, 255, 209, 0.15)',
                      color: '#00ffd1',
                      border: '1px solid #00ffd1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem auto',
                    }}
                  >
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                    Message Dispatched!
                  </h3>
                  <p style={{ color: isLight ? '#64748b' : '#94a3b8', fontSize: '1rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 2rem auto' }}>
                    Thank you for reaching out. A Senior Technical Director will review your project and get back to you within 2-4 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', projectTitle: '', message: '' });
                    }}
                    className="hero-brand-primary-btn"
                    style={{ padding: '0.85rem 2rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 0.5rem 0' }}>
                      Get In Touch With Us
                    </h3>
                    <p style={{ color: isLight ? '#64748b' : '#94a3b8', fontSize: '0.94rem', margin: 0 }}>
                      See how your business can benefit with Opash Software on Your team.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Your Name */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Miller"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1.15rem',
                          borderRadius: '12px',
                          background: isLight ? '#f8fafc' : 'rgba(0, 0, 0, 0.35)',
                          border: `1px solid ${isLight ? '#cbd5e1' : 'rgba(255, 255, 255, 0.1)'}`,
                          color: isLight ? '#0f172a' : '#ffffff',
                          fontSize: '0.94rem',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    {/* Your Email */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1.15rem',
                          borderRadius: '12px',
                          background: isLight ? '#f8fafc' : 'rgba(0, 0, 0, 0.35)',
                          border: `1px solid ${isLight ? '#cbd5e1' : 'rgba(255, 255, 255, 0.1)'}`,
                          color: isLight ? '#0f172a' : '#ffffff',
                          fontSize: '0.94rem',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    {/* Phone & Project Title */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1.25rem',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <div>
                        <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.85rem 1.15rem',
                            borderRadius: '12px',
                            background: isLight ? '#f8fafc' : 'rgba(0, 0, 0, 0.35)',
                            border: `1px solid ${isLight ? '#cbd5e1' : 'rgba(255, 255, 255, 0.1)'}`,
                            color: isLight ? '#0f172a' : '#ffffff',
                            fontSize: '0.94rem',
                            outline: 'none',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                          Project Title *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Fintech Mobile App"
                          value={formData.projectTitle}
                          onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.85rem 1.15rem',
                            borderRadius: '12px',
                            background: isLight ? '#f8fafc' : 'rgba(0, 0, 0, 0.35)',
                            border: `1px solid ${isLight ? '#cbd5e1' : 'rgba(255, 255, 255, 0.1)'}`,
                            color: isLight ? '#0f172a' : '#ffffff',
                            fontSize: '0.94rem',
                            outline: 'none',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                    </div>

                    {/* Your Message */}
                    <div style={{ marginBottom: '1.75rem' }}>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                        Your Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your requirements, project scope, or goals..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1.15rem',
                          borderRadius: '12px',
                          background: isLight ? '#f8fafc' : 'rgba(0, 0, 0, 0.35)',
                          border: `1px solid ${isLight ? '#cbd5e1' : 'rgba(255, 255, 255, 0.1)'}`,
                          color: isLight ? '#0f172a' : '#ffffff',
                          fontSize: '0.94rem',
                          outline: 'none',
                          boxSizing: 'border-box',
                          resize: 'vertical',
                        }}
                      />
                    </div>

                    {/* Send Message Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="hero-brand-primary-btn opash-roll-btn"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        padding: '1rem',
                        fontSize: '1rem',
                      }}
                    >
                      <span className="opash-roll-track">
                        <span className="opash-roll-item">
                          <span>{loading ? 'Sending...' : 'Send Message'}</span>
                          <Send size={16} className="hero-btn-arrow" />
                        </span>
                        <span className="opash-roll-item" aria-hidden="true">
                          <span>{loading ? 'Sending...' : 'Send Message'}</span>
                          <Send size={16} className="hero-btn-arrow" />
                        </span>
                      </span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SECTION 2: TECHNOLOGIES & PLATFORMS WE WORK WITH (HOME STYLE)
      ======================================================== */}
      <TechStackShowcase
        badgeText="Technologies & Platforms"
        title={
          <>
            We Work <span className="tech-showcase-gradient-text">With</span>
          </>
        }
        subtitle="We architect scalable, high-performance web, mobile, and cloud solutions using cutting-edge enterprise stacks."
      />

      {/* ========================================================
          4. SECTION 3: INDUSTRIES WE SPECIALIZE IN
      ======================================================== */}
      <section
        id="industries"
        style={{
          paddingTop: 'clamp(4rem, 7vw, 6rem)',
          paddingBottom: 'clamp(5rem, 8vw, 7rem)',
          position: 'relative',
          borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div className="container-custom">
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 3.5rem auto' }}>
            <h2 className="heading-section" style={{ marginBottom: '1rem' }}>
              We <span className="opash-hero-gradient-text">Specialize In</span>
            </h2>
            <p style={{ color: isLight ? '#64748b' : '#94a3b8', fontSize: '1.05rem', lineHeight: 1.65 }}>
              Opash Software brings over 8 years of expertise in delivering tailored digital solutions for Insurance, Fintech, eCommerce, Education, and Real Estate — helping businesses overcome industry challenges and scale confidently.
            </p>
          </div>

          {/* 10 Verified Industries Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              maxWidth: '1240px',
              margin: '0 auto',
            }}
          >
            {LIVE_INDUSTRIES.map((ind, idx) => (
              <div
                key={ind.name}
                style={{
                  padding: '2rem 1.75rem',
                  borderRadius: '20px',
                  background: isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.75)',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isLight ? '0 4px 18px rgba(0, 0, 0, 0.03)' : '0 10px 30px rgba(0, 0, 0, 0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = isLight ? '#00a88f' : '#00ffd1';
                  e.currentTarget.style.boxShadow = isLight
                    ? '0 12px 28px -6px rgba(0, 168, 143, 0.15)'
                    : '0 16px 36px -10px rgba(0, 255, 209, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = isLight ? '#e2e8f0' : 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = isLight
                    ? '0 4px 18px rgba(0, 0, 0, 0.03)'
                    : '0 10px 30px rgba(0, 0, 0, 0.35)';
                }}
              >
                {/* Top Glowing Laser Accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #00ffd1, #38bdf8, transparent)',
                  }}
                />

                <div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 750,
                      color: isLight ? '#008a75' : '#00ffd1',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Domain {(idx + 1).toString().padStart(2, '0')}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.28rem',
                      fontWeight: 800,
                      color: isLight ? '#0f172a' : '#ffffff',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {ind.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: isLight ? '#64748b' : '#94a3b8',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {ind.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: isLight ? '1px solid #f1f5f9' : '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '0.82rem', fontWeight: 650, color: isLight ? '#0284c7' : '#38bdf8' }}>
                    Enterprise Grade
                  </span>
                  <ArrowRight size={16} color={isLight ? '#0284c7' : '#38bdf8'} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
