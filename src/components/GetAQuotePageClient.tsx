'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';
import QuoteCreativeBackdrop from '@/components/QuoteCreativeBackdrop';
import OuiWillHeadline, { OuiWillWord, OuiWillDot } from '@/components/OuiWillHeadline';
import { 
  Check, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Star, 
  ChevronDown, 
  PhoneCall, 
  Calendar, 
  MessageCircle, 
  Mail 
} from 'lucide-react';
import { companyData } from '@/data/company';
import CustomSelect from '@/components/CustomSelect';

const PROJECT_TYPES = [
  'Hourly',
  'Part Time',
  'Full Time',
  'Custom Software Development',
  'Web Development',
  'Mobile App Development',
  'Multi-Tenant SaaS Platform',
  'AI & Autonomous Agents',
  'QA & Testing Automation',
];

const COUNTRIES_LIST = [
  'United States',
  'India',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'United Arab Emirates',
  'Singapore',
  'Netherlands',
  'Switzerland',
  'France',
  'New Zealand',
  'Saudi Arabia',
  'South Africa',
  'Ireland',
  'Other',
];

export default function GetAQuotePageClient() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Keep browser address bar URL pure and clean (strip any anchor hash like #quote-form-section)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: 'United States',
    engagementType: 'Hourly',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const faqs = [
    {
      q: 'How accurate is your project quote estimation?',
      a: 'Our estimation is calibrated against 75+ completed production deliveries. It reflects transparent pricing with senior tech leads based in Surat, India. The calculated range is typically accurate within ±10% following our initial 30-minute architectural scoping review.',
    },
    {
      q: 'What is included in the 2-Week Risk-Free Trial?',
      a: 'You can kick off your project or squad with zero upfront long-term commitment. If within the first 14 calendar days you are not completely satisfied with our sprint velocity, code quality, or engineering communication, you can walk away with zero invoice obligations.',
    },
    {
      q: 'Who owns the intellectual property and source code?',
      a: 'You own 100% of all intellectual property, source code, database architectures, and design files from Day 1. Everything is pushed directly to your own private GitHub, GitLab, or AWS repository with signed assignment warranties.',
    },
    {
      q: 'Can we switch between Dedicated Squad and Fixed-Milestone models?',
      a: 'Yes. Many tech founders start with a Fixed-Scope Milestone sprint to launch their MVP in 4–8 weeks, and then seamlessly transition into a Dedicated Agile Squad for ongoing feature velocity and platform scale.',
    },
    {
      q: 'What payment schedules and currency options do you support?',
      a: 'We accept wire transfers and ACH in USD, EUR, GBP, and AED. Engagements are typically invoiced on transparent bi-weekly sprint milestones against verifiable working software demos on staging.',
    },
  ];

  const inputStyles: React.CSSProperties = {
    width: '100%',
    padding: '0.85rem 1.15rem',
    borderRadius: '12px',
    background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.05)',
    border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.12)',
    color: isLight ? '#0f172a' : '#ffffff',
    fontSize: '0.95rem',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  };

  return (
    <div
      style={{
        position: 'relative',
        overflowX: 'clip',
        backgroundColor: isLight ? '#f8fafc' : '#020712',
        color: isLight ? '#0f172a' : '#f8fafc',
        minHeight: '100vh',
      }}
    >
      {/* ===================================================================== */}
      {/* 1. CINEMATIC HERO & QUOTE INTAKE SECTION (PORTFOLIO PAGE STYLE)       */}
      {/* ===================================================================== */}
      <section
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 'clamp(5.5rem, 8vw, 7.5rem) clamp(1rem, 3vw, 1.5rem) clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/* Opash Creative Blueprint Backdrop */}
        <QuoteCreativeBackdrop isLightMode={isLight} />

        <div
          className="container-custom"
          style={{ position: 'relative', zIndex: 10, maxWidth: '1240px', margin: '0 auto', width: '100%' }}
        >
          {/* Centered Main Headline & Content (Matching Portfolio Page Hero) */}
          <div style={{ textAlign: 'center', maxWidth: '980px', margin: '0 auto' }}>
            {/* Main Headline with Oui Will Kinetic Typographic Animation */}
            <OuiWillHeadline
              style={{
                fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', serif",
                fontSize: 'clamp(2.1rem, 5.5vw, 62px)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.015em',
                marginBottom: '1.5rem',
                display: 'block',
              }}
            >
              <OuiWillWord index={1}>Get</OuiWillWord>{' '}
              <OuiWillWord index={2}>A</OuiWillWord>{' '}
              <OuiWillWord index={3}>Quote</OuiWillWord>
              <OuiWillDot />
              <span style={{ display: 'block', width: '100%', marginTop: '0.35rem' }}>
                <OuiWillWord index={4} isGradient>
                  For Your Project
                </OuiWillWord>
              </span>
            </OuiWillHeadline>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                lineHeight: 1.68,
                color: isLight ? '#475569' : '#94a3b8',
                maxWidth: '840px',
                margin: '0 auto 2.5rem auto',
                fontWeight: 400,
              }}
            >
              We are a team of talented IT Experts. We Analyzed your requirements; Part them into phase and tasks; give you an hourly or fixed price estimation of each phase and task. It&apos;s simply started by filling the form below.
            </p>

            {/* Quick Action CTAs with Kinetic Rolling Text on Hover (Portfolio Page Style) */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2.75rem',
              }}
            >
              <a
                href="#quote-form-section"
                className="opash-roll-btn quote-hero-btn quote-hero-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.85rem 2rem',
                  borderRadius: '12px',
                  background: isLight
                    ? 'linear-gradient(135deg, #008a75 0%, #00a88f 100%)'
                    : 'linear-gradient(135deg, #00a88f 0%, #2dd4bf 100%)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 20px rgba(0, 168, 143, 0.3)',
                  textDecoration: 'none',
                }}
              >
                <span className="opash-roll-track">
                  <span className="opash-roll-item">
                    <span>Fill Form Below</span>
                    <ArrowRight size={16} />
                  </span>
                  <span className="opash-roll-item" aria-hidden="true">
                    <span>Fill Form Below</span>
                    <ArrowRight size={16} />
                  </span>
                </span>
              </a>

              <a
                href={companyData.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="opash-roll-btn quote-hero-btn quote-hero-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  background: isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.05)',
                  border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.15)',
                  color: isLight ? '#0f172a' : '#f8fafc',
                  boxShadow: isLight ? '0 2px 10px rgba(0, 0, 0, 0.04)' : 'none',
                }}
              >
                <span className="opash-roll-track">
                  <span className="opash-roll-item">
                    <MessageCircle size={16} className="hero-wa-icon" />
                    <span>WhatsApp Direct</span>
                  </span>
                  <span className="opash-roll-item" aria-hidden="true">
                    <MessageCircle size={16} className="hero-wa-icon" />
                    <span>WhatsApp Direct</span>
                  </span>
                </span>
              </a>
            </div>

            {/* Genuine Trust Badges / Stats (Centered) */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1.75rem',
                fontSize: '0.88rem',
                color: isLight ? '#64748b' : '#94a3b8',
                marginBottom: '3.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Star size={15} style={{ fill: '#f59e0b', color: '#f59e0b' }} />
                <span style={{ fontWeight: 700, color: isLight ? '#0f172a' : '#f8fafc' }}>4.9/5 Clutch Rating</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={15} style={{ color: isLight ? '#008a75' : '#00ffd1' }} />
                <span>100% Upwork Job Success</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={15} style={{ color: isLight ? '#008a75' : '#00ffd1' }} />
                <span>Hourly &amp; Fixed-Price</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={15} style={{ color: isLight ? '#008a75' : '#00ffd1' }} />
                <span>Strict Mutual NDA Included</span>
              </div>
            </div>
          </div>

          {/* Centered Dashed Circle Mail Connector Badge */}
          <div
            id="quote-form-section"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2.5rem auto',
              maxWidth: '920px',
              width: '100%',
              scrollMarginTop: '100px',
            }}
          >
            {/* Dashed Horizontal Connector Line */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: '50%',
                height: '1px',
                borderTop: isLight ? '1.5px dashed #cbd5e1' : '1.5px dashed rgba(255, 255, 255, 0.15)',
                zIndex: 0,
              }}
            />

            {/* Circular Mail Icon Badge */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: isLight ? '#ffffff' : '#0a1628',
                border: isLight ? '2px dashed #008a75' : '2px dashed #00ffd1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isLight
                  ? '0 10px 25px rgba(0, 138, 117, 0.15)'
                  : '0 10px 30px rgba(0, 255, 209, 0.25)',
              }}
            >
              <Mail
                size={26}
                style={{
                  color: isLight ? '#008a75' : '#00ffd1',
                }}
              />
            </div>
          </div>

          {/* ================================================================= */}
          {/* THE CLEAN 2-COLUMN QUOTE INTAKE FORM                              */}
          {/* ================================================================= */}
          <div
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              width: '100%',
              background: isLight ? '#ffffff' : 'rgba(10, 20, 36, 0.75)',
              borderRadius: '24px',
              border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
              padding: 'clamp(1.5rem, 3.5vw, 3rem) clamp(0.85rem, 2.5vw, 2.5rem)',
              boxShadow: isLight
                ? '0 20px 45px -10px rgba(0, 0, 0, 0.06)'
                : '0 25px 60px -15px rgba(0, 0, 0, 0.5)',
              position: 'relative',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3
                  style={{
                    fontSize: '1.65rem',
                    fontWeight: 800,
                    marginBottom: '0.75rem',
                    color: isLight ? '#0f172a' : '#f8fafc',
                  }}
                >
                  Quote Request Received!
                </h3>
                <p
                  style={{
                    color: isLight ? '#64748b' : '#94a3b8',
                    fontSize: '1rem',
                    maxWidth: '540px',
                    margin: '0 auto 2rem auto',
                    lineHeight: 1.6,
                  }}
                >
                  Thank you, <strong>{formData.name}</strong>. Our senior solutions architect has received your project inquiry and will reach out with a detailed estimate within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                      country: 'United States',
                      engagementType: 'Hourly',
                      notes: '',
                    });
                  }}
                  style={{
                    padding: '0.85rem 1.75rem',
                    borderRadius: '12px',
                    background: isLight ? '#008a75' : '#00ffd1',
                    color: isLight ? '#ffffff' : '#040914',
                    border: 'none',
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {/* Name */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        marginBottom: '0.5rem',
                        color: isLight ? '#1e293b' : '#f1f5f9',
                      }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyles}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        marginBottom: '0.5rem',
                        color: isLight ? '#1e293b' : '#f1f5f9',
                      }}
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter your phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={inputStyles}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        marginBottom: '0.5rem',
                        color: isLight ? '#1e293b' : '#f1f5f9',
                      }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyles}
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        marginBottom: '0.5rem',
                        color: isLight ? '#1e293b' : '#f1f5f9',
                      }}
                    >
                      Project Type *
                    </label>
                    <CustomSelect
                      value={formData.engagementType}
                      onChange={(val) => setFormData({ ...formData, engagementType: val })}
                      options={PROJECT_TYPES}
                      placeholder="Select project type"
                      required
                      style={{
                        ...inputStyles,
                        background: isLight ? '#f8fafc' : '#0a1424',
                      }}
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        marginBottom: '0.5rem',
                        color: isLight ? '#1e293b' : '#f1f5f9',
                      }}
                    >
                      Your Country *
                    </label>
                    <CustomSelect
                      value={formData.country}
                      onChange={(val) => setFormData({ ...formData, country: val })}
                      options={COUNTRIES_LIST}
                      placeholder="Select country"
                      required
                      style={{
                        ...inputStyles,
                        background: isLight ? '#f8fafc' : '#0a1424',
                      }}
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        marginBottom: '0.5rem',
                        color: isLight ? '#1e293b' : '#f1f5f9',
                      }}
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter company name (optional)"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={inputStyles}
                    />
                  </div>
                </div>

                {/* Message / Requirements */}
                <div style={{ marginBottom: '2rem' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      marginBottom: '0.5rem',
                      color: isLight ? '#1e293b' : '#f1f5f9',
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project requirements, scope, goals, or target launch timeline..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{
                      ...inputStyles,
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Scoped Button Hover Effects */}
                <style>{`
                  .quote-submit-btn {
                    position: relative;
                    overflow: hidden !important;
                    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                                box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                                filter 0.3s ease !important;
                    will-change: transform, box-shadow;
                  }
                  .quote-submit-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -130%;
                    width: 70%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
                    transform: skewX(-25deg);
                    transition: none;
                    pointer-events: none;
                    z-index: 2;
                  }
                  .quote-submit-btn:hover::before {
                    left: 230%;
                    transition: left 0.8s ease-in-out;
                  }
                  .quote-submit-btn:hover {
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: ${isLight
                      ? '0 16px 36px rgba(0, 138, 117, 0.45), 0 0 16px rgba(0, 168, 143, 0.3)'
                      : '0 18px 42px rgba(0, 168, 143, 0.6), 0 0 25px rgba(45, 212, 191, 0.45)'} !important;
                    filter: brightness(1.06);
                  }
                  .quote-submit-btn:active {
                    transform: translateY(-1px) scale(0.99);
                  }
                  .quote-submit-arrow {
                    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                  }
                  .quote-submit-btn:hover .quote-submit-arrow {
                    transform: translateX(5px);
                  }
                  .quote-hero-btn {
                    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease !important;
                  }
                  .quote-hero-btn:hover {
                    transform: translateY(-2px);
                  }
                  .quote-hero-primary:hover {
                    box-shadow: 0 8px 28px rgba(0, 168, 143, 0.45) !important;
                  }
                  .quote-hero-secondary:hover {
                    border-color: ${isLight ? '#008a75' : '#2dd4bf'} !important;
                    color: ${isLight ? '#008a75' : '#2dd4bf'} !important;
                  }
                `}</style>

                {/* Submit Action with Rolling Text & Shimmer Glow */}
                <div style={{ textAlign: 'center' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="quote-submit-btn opash-roll-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1.05rem 3.5rem',
                      borderRadius: '14px',
                      border: 'none',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      background: isLight
                        ? 'linear-gradient(135deg, #008a75 0%, #00a88f 100%)'
                        : 'linear-gradient(135deg, #00a88f 0%, #2dd4bf 100%)',
                      color: '#ffffff',
                      fontWeight: 750,
                      fontSize: '1.05rem',
                      letterSpacing: '0.02em',
                      boxShadow: isLight
                        ? '0 10px 25px rgba(0, 168, 143, 0.35)'
                        : '0 10px 28px rgba(0, 168, 143, 0.45)',
                      textDecoration: 'none',
                    }}
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <span className="opash-roll-track">
                        <span className="opash-roll-item">
                          <span>Send Message</span>
                          <ArrowRight size={18} className="quote-submit-arrow" />
                        </span>
                        <span className="opash-roll-item" aria-hidden="true">
                          <span>Send Message</span>
                          <ArrowRight size={18} className="quote-submit-arrow" />
                        </span>
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. FREQUENTLY ASKED QUESTIONS & TABLET-LOOK CTA BANNER                */}
      {/* ===================================================================== */}
      <section
        style={{
          position: 'relative',
          padding: 'clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)',
          background: isLight ? '#f8fafc' : '#020712',
          borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div className="container-custom" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span
              style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: isLight ? '#008a75' : '#5EC098',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Executive FAQ
            </span>
            <h2 className="heading-section" style={{ margin: '0.5rem 0 0 0' }}>
              Common Questions About <span className="opash-hero-gradient-text">Project Scoping</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: isLight ? '#ffffff' : 'rgba(4, 15, 36, 0.65)',
                    border: isOpen
                      ? isLight ? '1.5px solid #008a75' : '1.5px solid #5EC098'
                      : isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'transparent',
                      border: 'none',
                      color: 'inherit',
                      textAlign: 'left',
                      fontSize: '1rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        color: isLight ? '#008a75' : '#5EC098',
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.5rem 1.35rem 1.5rem',
                        fontSize: '0.92rem',
                        lineHeight: 1.65,
                        color: isLight ? '#475569' : '#94a3b8',
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ================================================================= */}
          {/* TABLET-LOOK DIRECT ARCHITECT CALL CTA BANNER                      */}
          {/* ================================================================= */}
          <div
            className="tablet-cta-device"
            style={{
              marginTop: '5rem',
              maxWidth: '880px',
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: '34px',
              padding: '14px',
              background: isLight
                ? 'linear-gradient(145deg, #e2e8f0 0%, #cbd5e1 100%)'
                : 'linear-gradient(145deg, #1e293b 0%, #0f172a 100%)',
              border: isLight ? '1.5px solid #cbd5e1' : '1.5px solid rgba(255, 255, 255, 0.15)',
              boxShadow: isLight
                ? '0 25px 60px -15px rgba(15, 23, 42, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.8)'
                : '0 30px 80px -15px rgba(0, 0, 0, 0.85), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
              position: 'relative',
            }}
          >
            {/* Top Tablet Camera / Sensor Dot */}
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: isLight ? '#94a3b8' : '#475569',
                margin: '0 auto 12px auto',
                boxShadow: isLight ? 'inset 0 1px 2px rgba(0,0,0,0.2)' : 'inset 0 1px 2px rgba(0,0,0,0.6)',
              }}
            />

            {/* Inner Tablet Display Screen */}
            <div
              style={{
                borderRadius: '22px',
                padding: 'clamp(2.5rem, 5vw, 3.75rem) clamp(1.5rem, 4vw, 3rem)',
                background: isLight
                  ? 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)'
                  : 'linear-gradient(145deg, #0d1b2e 0%, #040a14 100%)',
                border: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Tablet Screen Subtle Status Pill */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  background: isLight ? 'rgba(0, 168, 143, 0.1)' : 'rgba(0, 255, 209, 0.12)',
                  border: isLight ? '1px solid rgba(0, 168, 143, 0.25)' : '1px solid rgba(0, 255, 209, 0.25)',
                  fontSize: '0.74rem',
                  fontWeight: 750,
                  color: isLight ? '#008a75' : '#00ffd1',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: isLight ? '#008a75' : '#00ffd1' }} className="animate-pulse" />
                <span>Direct Architecture Session</span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  marginBottom: '0.85rem',
                  color: isLight ? '#0f172a' : '#f8fafc',
                }}
              >
                Prefer A Direct Technical Discussion?
              </h3>

              <p
                style={{
                  color: isLight ? '#64748b' : '#94a3b8',
                  maxWidth: '580px',
                  margin: '0 auto 2.25rem auto',
                  fontSize: '1rem',
                  lineHeight: 1.65,
                }}
              >
                Schedule a 30-minute feasibility session directly with our Lead Architect to review existing codebases, 
                API specs, and sprint timelines.
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}
              >
                <Link
                  href="/contact"
                  className="hero-brand-primary-btn opash-roll-btn"
                  style={{
                    padding: '13px 28px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                  }}
                >
                  <span className="opash-roll-track">
                    <span className="opash-roll-item">
                      <Calendar size={16} className="hero-btn-arrow" />
                      <span>Book Architecture Call</span>
                    </span>
                    <span className="opash-roll-item" aria-hidden="true">
                      <Calendar size={16} className="hero-btn-arrow" />
                      <span>Book Architecture Call</span>
                    </span>
                  </span>
                </Link>

                <a
                  href={companyData.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-brand-secondary-btn opash-roll-btn"
                  style={{
                    padding: '13px 26px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                  }}
                >
                  <span className="opash-roll-track">
                    <span className="opash-roll-item">
                      <PhoneCall size={16} className="hero-wa-icon" />
                      <span>Instant WhatsApp Query</span>
                    </span>
                    <span className="opash-roll-item" aria-hidden="true">
                      <PhoneCall size={16} className="hero-wa-icon" />
                      <span>Instant WhatsApp Query</span>
                    </span>
                  </span>
                </a>
              </div>

              {/* Bottom Tablet Home Indicator Bar */}
              <div
                style={{
                  width: '130px',
                  height: '4px',
                  borderRadius: '2px',
                  background: isLight ? 'rgba(15, 23, 42, 0.2)' : 'rgba(255, 255, 255, 0.25)',
                  margin: '2.5rem auto 0 auto',
                }}
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
