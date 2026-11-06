'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { companyData } from '@/data/company';
import CareerCreativeBackdrop from '@/components/CareerCreativeBackdrop';
import LifeAtOpashSection from '@/components/LifeAtOpashSection';
import OurAchievementsSection from '@/components/OurAchievementsSection';
import { useTheme } from '@/components/ThemeProvider';
import OuiWillHeadline, { OuiWillWord, OuiWillDot } from '@/components/OuiWillHeadline';
import Interactive3DIcon from '@/components/Interactive3DIcon';
import CustomSelect from '@/components/CustomSelect';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  UploadCloud,
  FileText,
  X,
  MessageCircle,
  Building2,
  Briefcase,
  Sparkles,
  User,
  Layers,
} from 'lucide-react';

export default function CareerPageClient() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Resume Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    expertise: '',
    message: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setResumeFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 850);
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
        className="career-hero-section"
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
        <CareerCreativeBackdrop isLightMode={isLight} />

        <div
          className="container-custom"
          style={{ position: 'relative', zIndex: 10, maxWidth: '1100px', margin: '0 auto', width: '100%' }}
        >
          <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
            {/* Main Headline with Oui Will Kinetic Typographic Animation */}
            <OuiWillHeadline
              style={{
                fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', serif",
                fontSize: 'clamp(1.9rem, 4.8vw, 62px)',
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
                display: 'block',
              }}
            >
              <OuiWillWord index={1}>Let</OuiWillWord>
              <OuiWillWord index={2}>Your</OuiWillWord>
              <OuiWillWord index={3}>Career</OuiWillWord>
              <OuiWillDot />
              <span style={{ display: 'block', width: '100%', marginTop: '0.35rem' }}>
                <OuiWillWord index={4} isGradient>
                  Take Flight
                </OuiWillWord>
              </span>
            </OuiWillHeadline>

            {/* Subtitle from Official Site */}
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
              Ignite Your Future with Opash Software. Join a team that thrives on innovation, collaboration, and continuous growth. If you&apos;re driven by learning, creativity, and teamwork, your next big opportunity starts here.
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
              <a href="#resume-form" className="hero-brand-primary-btn opash-roll-btn">
                <span className="opash-roll-track">
                  <span className="opash-roll-item">
                    <span>Send Resume Here</span>
                    <ArrowRight size={15} className="hero-btn-arrow" />
                  </span>
                  <span className="opash-roll-item" aria-hidden="true">
                    <span>Send Resume Here</span>
                    <ArrowRight size={15} className="hero-btn-arrow" />
                  </span>
                </span>
              </a>

              <a href="#life-at-opash" className="hero-brand-secondary-btn opash-roll-btn">
                <span className="opash-roll-track">
                  <span className="opash-roll-item">
                    <Briefcase size={15} className="hero-wa-icon" />
                    <span>Life at Opash</span>
                  </span>
                  <span className="opash-roll-item" aria-hidden="true">
                    <Briefcase size={15} className="hero-wa-icon" />
                    <span>Life at Opash</span>
                  </span>
                </span>
              </a>
            </div>

            {/* Genuine Contact Quick Pills */}
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
                <span>Surat HQ, Gujarat, India</span>
              </div>

              <a
                href="tel:+919537222266"
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
                href="mailto:opash.hr@gmail.com"
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
                <span>opash.hr@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Animated "Scroll to Explore" Indicator (like Portfolio & About Us) */}
        <a
          href="#life-at-opash"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById('life-at-opash');
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
          {/* Minimalist mouse pill with animated glowing dot */}
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
          2. SECTION 1: LIFE AT OPASH (PHOTOS & CULTURE)
      ======================================================== */}
      <LifeAtOpashSection />

      {/* ========================================================
          3. SECTION 2: OUR ACHIEVEMENTS
      ======================================================== */}
      <OurAchievementsSection />

      {/* ========================================================
          4. SECTION 3: SEND YOUR RESUME HERE!
      ======================================================== */}
      <section
        id="resume-form"
        style={{
          padding: 'clamp(2.5rem, 5vw, 4.25rem) 0',
          scrollMarginTop: '90px',
          position: 'relative',
          borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div className="container-custom">
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <h2 className="heading-section" style={{ marginBottom: '1rem' }}>
              Send your <span className="opash-hero-gradient-text">Resume here!</span>
            </h2>
            <p style={{ color: isLight ? '#64748b' : '#94a3b8', fontSize: '1.05rem', lineHeight: 1.65 }}>
              Join a fast-growing IT company where your skills shape the digital future.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '2.5rem',
              alignItems: 'start',
            }}
          >
            {/* LEFT COLUMN: HR & Office Details */}
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
                {/* HR Information Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <Interactive3DIcon type="building" size={52} iconSize={26} />
                  <div>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, margin: 0 }}>
                      HR Contact Information
                    </h3>
                    <div style={{ fontSize: '0.88rem', color: isLight ? '#008a75' : '#00ffd1', fontWeight: 650 }}>
                      Opash Talent Acquisition Team
                    </div>
                  </div>
                </div>

                {/* Contact List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  {/* Phone */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <Interactive3DIcon type="phone" size={44} iconSize={22} style={{ marginTop: '2px' }} />
                    <div>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 750,
                          color: isLight ? '#64748b' : '#94a3b8',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          marginBottom: '4px',
                        }}
                      >
                        HR Phone Hotline
                      </div>
                      <a
                        href="tel:+919537222266"
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
                      <div
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 750,
                          color: isLight ? '#64748b' : '#94a3b8',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          marginBottom: '4px',
                        }}
                      >
                        HR Email Address
                      </div>
                      <a
                        href="mailto:opash.hr@gmail.com"
                        style={{
                          fontSize: '1.02rem',
                          fontWeight: 700,
                          color: isLight ? '#0f172a' : '#ffffff',
                          textDecoration: 'none',
                        }}
                      >
                        opash.hr@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Office Address */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <Interactive3DIcon type="location" size={44} iconSize={22} style={{ marginTop: '2px' }} />
                    <div>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 750,
                          color: isLight ? '#64748b' : '#94a3b8',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          marginBottom: '4px',
                        }}
                      >
                        Office Address
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

                  {/* Timing */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <Interactive3DIcon type="clock" size={44} iconSize={22} style={{ marginTop: '2px' }} />
                    <div>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 750,
                          color: isLight ? '#64748b' : '#94a3b8',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          marginBottom: '4px',
                        }}
                      >
                        Working Timing
                      </div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: '0.96rem',
                          lineHeight: 1.6,
                          fontWeight: 650,
                          color: isLight ? '#1e293b' : '#f1f5f9',
                        }}
                      >
                        Monday - Friday : 9:30 AM to 6:30 PM IST
                      </p>
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

              {/* Direct WhatsApp HR Inquiry */}
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
                    Chat Directly with HR
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800 }}>
                    +91 95372-22266
                  </div>
                </div>
                <ArrowRight size={18} style={{ color: '#25D366' }} />
              </a>
            </div>

            {/* RIGHT COLUMN: Application Form */}
            <div
              style={{
                borderRadius: '24px',
                background: isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.85)',
                border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: isLight
                  ? '0 20px 50px -15px rgba(0, 0, 0, 0.06)'
                  : '0 25px 60px -20px rgba(0, 0, 0, 0.8)',
                padding: 'clamp(1.5rem, 3.5vw, 3rem) clamp(0.85rem, 2.5vw, 2.5rem)',
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
                    Application Submitted!
                  </h3>
                  <p style={{ color: isLight ? '#64748b' : '#94a3b8', fontSize: '1rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 2rem auto' }}>
                    Thank you for applying to Opash Software. Our HR team will review your profile and reach out within 24-48 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', position: '', expertise: '', message: '' });
                      setResumeFile(null);
                    }}
                    className="hero-brand-primary-btn"
                    style={{ padding: '0.85rem 2rem' }}
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, margin: '0 0 0.5rem 0' }}>
                      Love What You Do? Do It with Us.
                    </h3>
                    <p style={{ color: isLight ? '#008a75' : '#00ffd1', fontSize: '0.92rem', fontWeight: 650, margin: 0 }}>
                      Connect with our HR today.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
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

                    {/* Email & Phone Grid */}
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
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="your.email@example.com"
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

                      <div>
                        <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 00000-00000"
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
                    </div>

                    {/* Position & Area of Expertise */}
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
                          Position *
                        </label>
                        <CustomSelect
                          value={formData.position}
                          onChange={(val) => setFormData({ ...formData, position: val })}
                          options={[
                            'Intern',
                            'Fresher',
                            'Software engineer',
                            'QA engineer',
                            'DevOps engineer',
                            'Mobile App developer',
                          ]}
                          placeholder="Select position"
                          required
                          style={{
                            padding: '0.85rem 1.15rem',
                            borderRadius: '12px',
                            background: isLight ? '#f8fafc' : 'rgba(0, 0, 0, 0.35)',
                            border: `1px solid ${isLight ? '#cbd5e1' : 'rgba(255, 255, 255, 0.1)'}`,
                            color: isLight ? '#0f172a' : '#ffffff',
                            fontSize: '0.94rem',
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                          Area of Expertise
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. React, Node.js, Flutter"
                          value={formData.expertise}
                          onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
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

                    {/* Message */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                        Message
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about yourself, your projects, or what you're passionate about..."
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

                    {/* Resume Upload Area */}
                    <div style={{ marginBottom: '1.75rem' }}>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                        Resume (PDF / DOCX) *
                      </label>
                      {resumeFile ? (
                        <div
                          style={{
                            padding: '1rem 1.25rem',
                            borderRadius: '12px',
                            background: isLight ? 'rgba(0, 168, 143, 0.08)' : 'rgba(0, 255, 209, 0.08)',
                            border: isLight ? '1px solid rgba(0, 168, 143, 0.3)' : '1px solid rgba(0, 255, 209, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <FileText size={20} color={isLight ? '#008a75' : '#00ffd1'} />
                            <div>
                              <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>{resumeFile.name}</div>
                              <div style={{ fontSize: '0.76rem', color: isLight ? '#64748b' : '#94a3b8' }}>
                                {(resumeFile.size / 1024).toFixed(1)} KB
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => setResumeFile(null)}
                            style={{
                              background: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              color: isLight ? '#64748b' : '#94a3b8',
                              padding: '4px',
                            }}
                          >
                            <X size={18} />
                          </button>
                        </div>
                      ) : (
                        <div
                          onDragOver={(e) => {
                            e.preventDefault();
                            setIsDragging(true);
                          }}
                          onDragLeave={() => setIsDragging(false)}
                          onDrop={handleDrop}
                          style={{
                            border: `2px dashed ${
                              isDragging
                                ? '#00ffd1'
                                : isLight
                                ? '#cbd5e1'
                                : 'rgba(255, 255, 255, 0.15)'
                            }`,
                            borderRadius: '12px',
                            padding: '1.75rem 1.5rem',
                            textAlign: 'center',
                            background: isDragging
                              ? 'rgba(0, 255, 209, 0.05)'
                              : isLight
                              ? '#f8fafc'
                              : 'rgba(0, 0, 0, 0.2)',
                            transition: 'all 0.2s ease',
                            cursor: 'pointer',
                            position: 'relative',
                          }}
                        >
                          <input
                            type="file"
                            required
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            style={{
                              position: 'absolute',
                              inset: 0,
                              opacity: 0,
                              cursor: 'pointer',
                            }}
                          />
                          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                            <Interactive3DIcon type="upload" size={48} iconSize={24} />
                          </div>
                          <div style={{ fontSize: '0.94rem', fontWeight: 700, marginBottom: '2px' }}>
                            Drag &amp; drop Files here or <span style={{ color: isLight ? '#0284c7' : '#38bdf8' }}>Browse Files</span>
                          </div>
                          <div style={{ fontSize: '0.78rem', color: isLight ? '#64748b' : '#94a3b8' }}>
                            Supported format: PDF, DOCX (Max 10MB)
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
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
                          <span>{loading ? 'Submitting...' : 'Send Message'}</span>
                          <Send size={16} className="hero-btn-arrow" />
                        </span>
                        <span className="opash-roll-item" aria-hidden="true">
                          <span>{loading ? 'Submitting...' : 'Send Message'}</span>
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
    </div>
  );
}
