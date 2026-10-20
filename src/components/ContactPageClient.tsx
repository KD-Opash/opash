'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { companyData } from '@/data/company';
import ContactCreativeBackdrop from '@/components/ContactCreativeBackdrop';
import ContactForm from '@/components/ContactForm';
import { useTheme } from '@/components/ThemeProvider';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Globe,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Send,
  Building2,
  Calendar,
  Layers,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Cpu,
  Laptop,
  MessageCircle,
} from 'lucide-react';

function LiveIstClock({ isLight }: { isLight: boolean }) {
  const [istTime, setIstTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        };
        setIstTime(new Intl.DateTimeFormat('en-US', options).format(now));
      } catch {
        setIstTime('9:30 AM IST');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontSize: '0.82rem', fontFamily: 'monospace', color: isLight ? '#008a75' : '#00ffd1', fontWeight: 700 }}>
      {istTime || '9:30 AM IST'}
    </div>
  );
}

export default function ContactPageClient() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How quickly can an Opash engineering squad deploy?',
      a: 'For dedicated engineering squads, we can assemble and onboard vetted senior engineers within 5 to 7 business days. For fixed-scope projects, architecture blueprints and sprint milestones are finalized within 48 to 72 hours of PRD review.',
    },
    {
      q: 'Who owns the intellectual property and code repositories?',
      a: 'You do. 100% of all source code, architecture diagrams, database schemas, and AI prompts are the exclusive property of your organization from Day 1. We execute a mutual NDA and IP assignment agreement prior to sprint kickoff.',
    },
    {
      q: 'How do you handle collaboration across US, European, and Gulf timezones?',
      a: 'Our engineering teams work in calibrated overlap windows. We maintain 4 to 6 hours of daily real-time overlap with North America (PST / EST), Europe (GMT / CET), and Middle East (GST) business hours for daily standups, sprint reviews, and Slack/Teams communications.',
    },
    {
      q: 'What engagement models do you support?',
      a: 'We offer flexible engagement structures tailored to your stage: (1) Dedicated Engineering Squads for fast-scaling products, (2) Milestone-Based Fixed Scope for well-defined deliverables, and (3) Dedicated AI / Architecture Advisory on a retainer model.',
    },
    {
      q: 'Can we start with a small pilot or proof-of-concept (PoC)?',
      a: 'Yes, absolutely. Many of our enterprise partners begin with a 2-to-4 week PoC or architectural feasibility sprint to validate performance, user experience, and technical viability before committing to large-scale development.',
    },
  ];

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
          1. BESPOKE CREATIVE HERO SECTION
      ======================================================== */}
      <section
        style={{
          position: 'relative',
          paddingTop: 'clamp(7rem, 12vw, 10rem)',
          paddingBottom: 'clamp(4rem, 8vw, 6rem)',
          overflow: 'hidden',
        }}
      >
        <ContactCreativeBackdrop isLightMode={isLight} />

        <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* Live Response Beacon */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 18px',
                borderRadius: '9999px',
                background: isLight ? 'rgba(0, 168, 143, 0.08)' : 'rgba(0, 255, 209, 0.08)',
                border: isLight ? '1px solid rgba(0, 168, 143, 0.25)' : '1px solid rgba(0, 255, 209, 0.3)',
                boxShadow: isLight
                  ? '0 2px 10px rgba(0, 168, 143, 0.1)'
                  : '0 0 24px rgba(0, 255, 209, 0.15)',
                marginBottom: '1.75rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: isLight ? '#00a88f' : '#00ffd1',
                  boxShadow: isLight ? '0 0 8px #00a88f' : '0 0 12px #00ffd1',
                  animation: 'pulse 2s infinite',
                }}
              />
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: isLight ? '#008a75' : '#00ffd1',
                }}
              >
                DIRECT LEAD ACCESS &bull; SAME-DAY TECHNICAL RESPONSE
              </span>
            </div>

            {/* Main Gradient Headline */}
            <h1
              className="opash-hero-gradient-text"
              style={{
                fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
              }}
            >
              Let&apos;s architect something extraordinary together
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                lineHeight: 1.65,
                color: isLight ? '#475569' : '#94a3b8',
                maxWidth: '740px',
                margin: '0 auto 2.5rem auto',
                fontWeight: 400,
              }}
            >
              Skip the sales pipeline. Connect directly with our Principal Architects and Technical Directors
              to evaluate feasibility, estimate sprints, and receive an actionable roadmap.
            </p>

            {/* Trust Assurances Pill Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
              }}
            >
              {[
                { icon: <ShieldCheck size={16} className="text-emerald-400" />, label: '100% Mutual NDA from Day 1' },
                { icon: <Clock size={16} className="text-cyan-400" />, label: 'Guaranteed < 4h Initial Response' },
                { icon: <Cpu size={16} className="text-sky-400" />, label: 'Direct Senior Tech Leads' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    background: isLight ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 23, 42, 0.6)',
                    border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    fontSize: '0.84rem',
                    fontWeight: 650,
                    color: isLight ? '#334155' : '#cbd5e1',
                  }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. DUAL-COLUMN COMMAND CONSOLE & INQUIRY FORM
      ======================================================== */}
      <section id="inquiry-form" style={{ paddingBottom: '6rem', position: 'relative' }}>
        <div className="container-custom">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2.5rem',
              alignItems: 'start',
            }}
          >
            {/* LEFT COLUMN: Global HQ & Communication Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              
              {/* Surat Headquarters Card */}
              <div
                style={{
                  padding: '2.25rem',
                  borderRadius: '24px',
                  background: isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.65)',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isLight ? '0 10px 30px -5px rgba(0, 0, 0, 0.04)' : 'none',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Header Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, #00ffd1 0%, #0284c7 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#020712',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0 }}>
                      Global Headquarters
                    </h3>
                    <div style={{ fontSize: '0.85rem', color: isLight ? '#008a75' : '#00ffd1', fontWeight: 650 }}>
                      Surat, Gujarat, India &bull; Innovation Campus
                    </div>
                  </div>
                </div>

                {/* Address Description */}
                <p
                  style={{
                    color: isLight ? '#475569' : '#94a3b8',
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {companyData.contact.address}
                </p>

                {/* Live IST Clock & Status */}
                <div
                  style={{
                    padding: '0.85rem 1.15rem',
                    borderRadius: '12px',
                    background: isLight ? '#f1f5f9' : 'rgba(255, 255, 255, 0.04)',
                    border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#10b981',
                        boxShadow: '0 0 8px #10b981',
                      }}
                    />
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: isLight ? '#1e293b' : '#f8fafc' }}>
                      LAB STATUS: ACTIVE
                    </span>
                  </div>
                  <LiveIstClock isLight={isLight} />
                </div>

                {/* Google Maps External Action */}
                <a
                  href={companyData.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: isLight ? '#0284c7' : '#38bdf8',
                    textDecoration: 'none',
                    transition: 'gap 0.2s ease',
                  }}
                >
                  <span>Open in Google Maps &amp; Directions</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Instant Communication Rails */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                }}
              >
                {/* WhatsApp Instant */}
                <a
                  href={companyData.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '1.25rem',
                    borderRadius: '16px',
                    background: isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.65)',
                    border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'border-color 0.2s ease, transform 0.2s ease',
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: '10px',
                      background: 'rgba(37, 211, 102, 0.15)',
                      color: '#25D366',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#25D366', textTransform: 'uppercase' }}>
                      Instant Chat
                    </div>
                    <div style={{ fontSize: '0.94rem', fontWeight: 750 }}>
                      WhatsApp
                    </div>
                  </div>
                </a>

                {/* Direct Phone */}
                <a
                  href={`tel:${companyData.contact.phoneClean}`}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '16px',
                    background: isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.65)',
                    border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'border-color 0.2s ease, transform 0.2s ease',
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: '10px',
                      background: isLight ? 'rgba(2, 132, 199, 0.12)' : 'rgba(56, 189, 248, 0.15)',
                      color: isLight ? '#0284c7' : '#38bdf8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', fontWeight: 700, color: isLight ? '#0284c7' : '#38bdf8', textTransform: 'uppercase' }}>
                      Voice Hotline
                    </div>
                    <div style={{ fontSize: '0.94rem', fontWeight: 750 }}>
                      {companyData.contact.phone}
                    </div>
                  </div>
                </a>
              </div>

              {/* Direct Architecture Email */}
              <a
                href={`mailto:${companyData.contact.email}`}
                style={{
                  padding: '1.25rem',
                  borderRadius: '16px',
                  background: isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.65)',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: '10px',
                    background: isLight ? 'rgba(0, 168, 143, 0.12)' : 'rgba(0, 255, 209, 0.15)',
                    color: isLight ? '#008a75' : '#00ffd1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', fontWeight: 700, color: isLight ? '#008a75' : '#00ffd1', textTransform: 'uppercase' }}>
                    Principal Architect Direct
                  </div>
                  <div style={{ fontSize: '0.94rem', fontWeight: 750 }}>
                    {companyData.contact.email}
                  </div>
                </div>
              </a>

              {/* Global Timezone Synchronizer */}
              <div
                style={{
                  padding: '1.75rem',
                  borderRadius: '20px',
                  background: isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.65)',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                  <Globe size={18} className="text-cyan-400" />
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 750, margin: 0 }}>
                    Active Sprint Overlap Windows
                  </h4>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {[
                    { region: 'Surat HQ (India)', tz: 'IST (UTC+5:30)', overlap: 'Primary Command Center & Lab', active: true },
                    { region: 'North America (West)', tz: 'PST / PDT', overlap: '4 Hours Daily Overlap', active: true },
                    { region: 'North America (East)', tz: 'EST / EDT', overlap: '5 Hours Daily Overlap', active: true },
                    { region: 'United Kingdom & Europe', tz: 'GMT / CET', overlap: '6 Hours Daily Overlap', active: true },
                    { region: 'UAE & Middle East', tz: 'GST (UTC+4)', overlap: '8 Hours Full Overlap', active: true },
                  ].map((row, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '10px',
                        background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.03)',
                        fontSize: '0.84rem',
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 700, color: isLight ? '#1e293b' : '#f8fafc' }}>{row.region}</div>
                        <div style={{ fontSize: '0.74rem', color: isLight ? '#64748b' : '#94a3b8' }}>{row.tz}</div>
                      </div>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 650,
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: isLight ? 'rgba(0, 168, 143, 0.1)' : 'rgba(0, 255, 209, 0.1)',
                          color: isLight ? '#008a75' : '#00ffd1',
                        }}
                      >
                        {row.overlap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Direct Technical Inquiry Console */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. EXECUTIVE FAQ ACCORDION
      ======================================================== */}
      <section
        style={{
          padding: '5rem 0',
          position: 'relative',
          background: isLight ? 'rgba(241, 245, 249, 0.5)' : 'rgba(10, 18, 34, 0.5)',
          borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div className="container-custom">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem auto' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '4px 14px',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                background: isLight ? 'rgba(0, 168, 143, 0.1)' : 'rgba(0, 255, 209, 0.1)',
                color: isLight ? '#008a75' : '#00ffd1',
                marginBottom: '0.75rem',
              }}
            >
              Frequently Asked Questions
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                fontWeight: 850,
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem',
              }}
            >
              Everything You Need To Know Before Kickoff
            </h2>
            <p style={{ color: isLight ? '#64748b' : '#94a3b8', fontSize: '0.98rem' }}>
              Clear answers regarding timeline, intellectual property, sprint cadence, and engineering contracts.
            </p>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  style={{
                    borderRadius: '16px',
                    background: isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.65)',
                    border: isOpen
                      ? isLight
                        ? '1px solid #00a88f'
                        : '1px solid rgba(0, 255, 209, 0.4)'
                      : isLight
                      ? '1px solid #e2e8f0'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      color: isLight ? '#0f172a' : '#f8fafc',
                    }}
                  >
                    <span style={{ fontSize: '1.05rem', fontWeight: 750 }}>
                      {faq.q}
                    </span>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        background: isLight ? '#f1f5f9' : 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isLight ? '#475569' : '#94a3b8',
                        flexShrink: 0,
                      }}
                    >
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.75rem 1.5rem 1.75rem',
                        color: isLight ? '#475569' : '#94a3b8',
                        fontSize: '0.94rem',
                        lineHeight: 1.65,
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
