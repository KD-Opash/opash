'use client';

import React, { useState, useId } from 'react';
import Link from 'next/link';
import { careersData, JobOpening } from '@/data/careers';
import { companyData } from '@/data/company';
import CareerCreativeBackdrop from '@/components/CareerCreativeBackdrop';
import { useTheme } from '@/components/ThemeProvider';
import LifeAtOpashSection from '@/components/LifeAtOpashSection';
import OurAchievementsSection from '@/components/OurAchievementsSection';
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
  ChevronDown,
  ChevronUp,
  Code2,
  Cpu,
  Layers,
  Terminal,
  Zap,
  Target,
  Users2,
  Check,
  Building2,
  Globe2,
  ExternalLink,
} from 'lucide-react';

export default function CareerPageClient() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Department filter
  const departments = ['All Roles', 'Engineering', 'AI Innovation Lab', 'Mobile Engineering', 'Quality Assurance', 'Early Careers'];
  const [activeDept, setActiveDept] = useState('All Roles');

  // Expanded job accordion
  const [expandedJobId, setExpandedJobId] = useState<string | null>(careersData.openings[0]?.id || null);

  // Application form state
  const [selectedRole, setSelectedRole] = useState(careersData.openings[0]?.title || 'Senior Full-Stack Engineer (React / Node.js)');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: careersData.openings[0]?.title || '',
    experience: '3 - 5 Years',
    portfolioUrl: '',
    resumeLink: '',
    message: '',
  });

  const filteredOpenings = activeDept === 'All Roles'
    ? careersData.openings
    : careersData.openings.filter((job) => job.department.toLowerCase().includes(activeDept.toLowerCase()));

  const handleApplyClick = (jobTitle: string) => {
    setSelectedRole(jobTitle);
    setFormData((prev) => ({ ...prev, position: jobTitle }));
    const applyEl = document.getElementById('apply-section');
    if (applyEl) {
      applyEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const perkIcons: Record<string, React.ReactNode> = {
    Laptop: <Laptop size={22} className="text-cyan-400" />,
    TrendingUp: <TrendingUp size={22} className="text-emerald-400" />,
    Coffee: <Coffee size={22} className="text-amber-400" />,
    Shield: <Shield size={22} className="text-blue-400" />,
    Clock: <Clock size={22} className="text-purple-400" />,
    Award: <Award size={22} className="text-rose-400" />,
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
          1. BESPOKE CREATIVE HERO SECTION
      ======================================================== */}
      <section
        style={{
          position: 'relative',
          paddingTop: 'clamp(7rem, 12vw, 10rem)',
          paddingBottom: 'clamp(4rem, 8vw, 6.5rem)',
          overflow: 'hidden',
        }}
      >
        <CareerCreativeBackdrop isLightMode={isLight} />

        <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* Live Talent Beacon Eyebrow */}
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
                WE ARE HIRING &bull; 5 OPEN ROLES AT SURAT HQ & HYBRID
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
              Where elite engineering craft meets global impact
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
              Join a high-agency squad of 50+ engineers, architects, and innovators building mission-critical
              cloud systems, AI agent pipelines, and enterprise platforms for global leaders.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                marginBottom: '3.5rem',
              }}
            >
              <a
                href="#openings"
                className="btn-primary"
                style={{
                  padding: '0.9rem 2.2rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>Explore Open Roles ({careersData.openings.length})</span>
                <ChevronDown size={18} />
              </a>

              <a
                href="#life-at-opash"
                style={{
                  padding: '0.9rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '12px',
                  color: isLight ? '#0f172a' : '#f8fafc',
                  background: isLight ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.05)',
                  border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(12px)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>Life at Opash</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Floating Telemetry Stats Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                maxWidth: '920px',
                margin: '0 auto',
              }}
            >
              {[
                { number: '50+', label: 'Global Technologists', sub: 'Surat HQ & Global' },
                { number: '4.9 ★', label: 'Glassdoor Rating', sub: 'Top Employee CSAT' },
                { number: '0%', label: 'Micro-Management', sub: 'High Agency Autonomy' },
                { number: '100%', label: 'Modern AI & Cloud', sub: 'Next.js, Go, PyTorch' },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    padding: '1.25rem 1rem',
                    borderRadius: '16px',
                    background: isLight ? 'rgba(255, 255, 255, 0.7)' : 'rgba(15, 23, 42, 0.55)',
                    border: isLight ? '1px solid rgba(226, 232, 240, 0.9)' : '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: isLight
                      ? '0 4px 20px -2px rgba(0, 0, 0, 0.04)'
                      : '0 4px 24px -2px rgba(0, 0, 0, 0.4)',
                    textAlign: 'center',
                  }}
                >
                  <div
                    className="opash-hero-gradient-text"
                    style={{
                      fontSize: '1.85rem',
                      fontWeight: 850,
                      letterSpacing: '-0.02em',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      color: isLight ? '#1e293b' : '#f1f5f9',
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: '0.74rem',
                      color: isLight ? '#64748b' : '#94a3b8',
                      marginTop: '0.15rem',
                    }}
                  >
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. OUR CRAFT MANIFESTO (3 Engineering Pillars)
      ======================================================== */}
      <section
        id="culture"
        style={{
          padding: '5rem 0',
          position: 'relative',
          background: isLight ? 'rgba(241, 245, 249, 0.5)' : 'rgba(10, 18, 34, 0.4)',
          borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.06)',
          borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div className="container-custom">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
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
              The Opash Engineering Manifesto
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.9rem, 3.4vw, 2.7rem)',
                fontWeight: 850,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              We Build Software With Uncompromising Standards
            </h2>
            <p style={{ color: isLight ? '#64748b' : '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6 }}>
              We are not a ticket-moving sweatshop. We are product engineers who respect clean architecture,
              type safety, zero bloat, and extreme ownership.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {[
              {
                icon: <Code2 size={28} className="text-cyan-400" />,
                title: 'Clean Architecture First',
                desc: 'Strict TypeScript, modular components, and decoupled microservices. We choose battle-tested primitives over fragile dependencies that create tech debt.',
                highlight: 'Zero Bloat Philosophy',
              },
              {
                icon: <Cpu size={28} className="text-emerald-400" />,
                title: 'AI-Augmented Velocity',
                desc: 'We pioneer production LLM agent pipelines, automated test synthesis, and vector search in everyday client products and internal workflows.',
                highlight: 'Modern AI Native Stacks',
              },
              {
                icon: <Target size={28} className="text-amber-400" />,
                title: 'Extreme Ownership & Impact',
                desc: 'Engineers participate in architectural calls directly with founders and CTOs across the US and Europe. No middlemen twisting requirements.',
                highlight: 'Direct Global Exposure',
              },
            ].map((pillar, i) => (
              <div
                key={i}
                style={{
                  padding: '2.25rem 2rem',
                  borderRadius: '20px',
                  background: isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.65)',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isLight ? '0 10px 30px -5px rgba(0, 0, 0, 0.05)' : '0 10px 40px -10px rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '14px',
                    background: isLight ? '#f1f5f9' : 'rgba(255, 255, 255, 0.05)',
                    border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {pillar.icon}
                </div>

                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: isLight ? '#008a75' : '#00ffd1',
                  }}
                >
                  {pillar.highlight}
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-0.01em', margin: 0 }}>
                  {pillar.title}
                </h3>

                <p style={{ color: isLight ? '#64748b' : '#94a3b8', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. LIFE AT OPASH (Real Photos Carousel & Lightbox)
      ======================================================== */}
      <LifeAtOpashSection />

      {/* ========================================================
          4. BENEFITS & CULTURE PERKS BENTO GRID
      ======================================================== */}
      <section
        style={{
          padding: '6rem 0',
          position: 'relative',
          background: isLight ? 'rgba(241, 245, 249, 0.45)' : 'rgba(10, 18, 34, 0.45)',
          borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container-custom">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem auto' }}>
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
              Benefits & Culture
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.9rem, 3.4vw, 2.7rem)',
                fontWeight: 850,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              Engineered For High Growth & Low Burnout
            </h2>
            <p style={{ color: isLight ? '#64748b' : '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Great software is built by well-rested, highly appreciated engineers with the best tools on earth.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {careersData.perks.map((perk, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  borderRadius: '20px',
                  background: isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.5)',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isLight ? '0 4px 20px -2px rgba(0, 0, 0, 0.03)' : 'none',
                  transition: 'transform 0.25s ease, border-color 0.25s ease',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '12px',
                    background: isLight ? 'rgba(0, 168, 143, 0.08)' : 'rgba(0, 255, 209, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  {perkIcons[perk.icon] || <Sparkles size={20} className="text-cyan-400" />}
                </div>

                <h3
                  style={{
                    fontSize: '1.18rem',
                    fontWeight: 750,
                    letterSpacing: '-0.01em',
                    marginBottom: '0.5rem',
                  }}
                >
                  {perk.title}
                </h3>

                <p
                  style={{
                    color: isLight ? '#64748b' : '#94a3b8',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. OUR ACHIEVEMENTS (Milestones & Orbiting Counters)
      ======================================================== */}
      <OurAchievementsSection />

      {/* ========================================================
          6. INTERACTIVE OPEN POSITIONS CONSOLE
      ======================================================== */}
      <section
        id="openings"
        style={{
          padding: '6rem 0',
          position: 'relative',
          background: isLight ? 'rgba(241, 245, 249, 0.4)' : 'rgba(10, 18, 34, 0.5)',
          borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div className="container-custom">
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
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
              Current Openings ({filteredOpenings.length})
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.9rem, 3.4vw, 2.7rem)',
                fontWeight: 850,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              Find Your Next Career Milestone
            </h2>
            <p style={{ color: isLight ? '#64748b' : '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Review our live openings below. Click any role to view detailed responsibilities,
              prerequisites, and launch your application directly.
            </p>
          </div>

          {/* Department Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center',
              marginBottom: '3rem',
            }}
          >
            {departments.map((dept) => {
              const active = activeDept === dept;
              return (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: 650,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: active
                      ? '1px solid #00ffd1'
                      : isLight
                      ? '1px solid #cbd5e1'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    background: active
                      ? isLight
                        ? '#00a88f'
                        : 'rgba(0, 255, 209, 0.15)'
                      : isLight
                      ? '#ffffff'
                      : 'rgba(255, 255, 255, 0.04)',
                    color: active
                      ? isLight
                        ? '#ffffff'
                        : '#00ffd1'
                      : isLight
                      ? '#475569'
                      : '#cbd5e1',
                    boxShadow: active
                      ? isLight
                        ? '0 2px 10px rgba(0, 168, 143, 0.2)'
                        : '0 0 16px rgba(0, 255, 209, 0.2)'
                      : 'none',
                  }}
                >
                  {dept}
                </button>
              );
            })}
          </div>

          {/* Openings Bento List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '1000px', margin: '0 auto' }}>
            {filteredOpenings.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div
                  key={job.id}
                  style={{
                    borderRadius: '20px',
                    background: isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.65)',
                    border: isExpanded
                      ? isLight
                        ? '1px solid #00a88f'
                        : '1px solid rgba(0, 255, 209, 0.5)'
                      : isLight
                      ? '1px solid #e2e8f0'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: isExpanded
                      ? isLight
                        ? '0 8px 30px rgba(0, 168, 143, 0.12)'
                        : '0 8px 30px rgba(0, 255, 209, 0.12)'
                      : 'none',
                    overflow: 'hidden',
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  }}
                >
                  {/* Card Main Row (Always Visible) */}
                  <div
                    style={{
                      padding: '1.75rem 2rem',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1.25rem',
                      cursor: 'pointer',
                    }}
                    onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                  >
                    <div style={{ flex: '1 1 500px' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '0.6rem' }}>
                        <span
                          style={{
                            fontSize: '0.74rem',
                            fontWeight: 700,
                            padding: '3px 10px',
                            borderRadius: '6px',
                            background: isLight ? 'rgba(0, 168, 143, 0.1)' : 'rgba(0, 255, 209, 0.1)',
                            color: isLight ? '#008a75' : '#00ffd1',
                          }}
                        >
                          {job.department}
                        </span>
                        <span
                          style={{
                            fontSize: '0.74rem',
                            fontWeight: 600,
                            padding: '3px 10px',
                            borderRadius: '6px',
                            background: isLight ? '#f1f5f9' : 'rgba(255, 255, 255, 0.06)',
                            color: isLight ? '#64748b' : '#94a3b8',
                          }}
                        >
                          {job.type}
                        </span>
                        <span
                          style={{
                            fontSize: '0.74rem',
                            fontWeight: 600,
                            padding: '3px 10px',
                            borderRadius: '6px',
                            background: isLight ? '#f1f5f9' : 'rgba(255, 255, 255, 0.06)',
                            color: isLight ? '#64748b' : '#94a3b8',
                          }}
                        >
                          {job.experience}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: '1.35rem',
                          fontWeight: 800,
                          letterSpacing: '-0.01em',
                          marginBottom: '0.4rem',
                        }}
                      >
                        {job.title}
                      </h3>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: isLight ? '#64748b' : '#94a3b8',
                          fontSize: '0.86rem',
                        }}
                      >
                        <MapPin size={15} className="text-cyan-400" />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApplyClick(job.title);
                        }}
                        className="btn-primary"
                        style={{
                          padding: '0.65rem 1.4rem',
                          fontSize: '0.88rem',
                          fontWeight: 700,
                          borderRadius: '10px',
                        }}
                      >
                        Apply Now
                      </button>

                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: '50%',
                          background: isLight ? '#f1f5f9' : 'rgba(255, 255, 255, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: isLight ? '#475569' : '#94a3b8',
                        }}
                      >
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Details Drawer */}
                  {isExpanded && (
                    <div
                      style={{
                        padding: '0 2rem 2rem 2rem',
                        borderTop: isLight ? '1px solid #f1f5f9' : '1px solid rgba(255, 255, 255, 0.06)',
                        marginTop: '0.5rem',
                        paddingTop: '1.5rem',
                      }}
                    >
                      <p
                        style={{
                          color: isLight ? '#334155' : '#cbd5e1',
                          fontSize: '0.98rem',
                          lineHeight: 1.65,
                          marginBottom: '1.75rem',
                        }}
                      >
                        {job.description}
                      </p>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                          gap: '2rem',
                          marginBottom: '2rem',
                        }}
                      >
                        {/* Responsibilities */}
                        <div>
                          <h4
                            style={{
                              fontSize: '0.95rem',
                              fontWeight: 750,
                              textTransform: 'uppercase',
                              letterSpacing: '0.04em',
                              marginBottom: '0.85rem',
                              color: isLight ? '#008a75' : '#00ffd1',
                            }}
                          >
                            Key Responsibilities
                          </h4>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            {job.responsibilities.map((resp, idx) => (
                              <li
                                key={idx}
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '10px',
                                  fontSize: '0.9rem',
                                  lineHeight: 1.5,
                                  color: isLight ? '#475569' : '#94a3b8',
                                }}
                              >
                                <span
                                  style={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: '50%',
                                    background: isLight ? 'rgba(0, 168, 143, 0.12)' : 'rgba(0, 255, 209, 0.12)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: isLight ? '#008a75' : '#00ffd1',
                                    flexShrink: 0,
                                    marginTop: 2,
                                  }}
                                >
                                  <Check size={12} strokeWidth={3} />
                                </span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div>
                          <h4
                            style={{
                              fontSize: '0.95rem',
                              fontWeight: 750,
                              textTransform: 'uppercase',
                              letterSpacing: '0.04em',
                              marginBottom: '0.85rem',
                              color: isLight ? '#0284c7' : '#38bdf8',
                            }}
                          >
                            Qualifications & Mastery
                          </h4>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            {job.requirements.map((req, idx) => (
                              <li
                                key={idx}
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '10px',
                                  fontSize: '0.9rem',
                                  lineHeight: 1.5,
                                  color: isLight ? '#475569' : '#94a3b8',
                                }}
                              >
                                <span
                                  style={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: '50%',
                                    background: isLight ? 'rgba(14, 165, 233, 0.12)' : 'rgba(56, 189, 248, 0.12)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: isLight ? '#0284c7' : '#38bdf8',
                                    flexShrink: 0,
                                    marginTop: 2,
                                  }}
                                >
                                  <Check size={12} strokeWidth={3} />
                                </span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Fast Launch Apply Bar */}
                      <div
                        style={{
                          padding: '1.25rem',
                          borderRadius: '12px',
                          background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.03)',
                          border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.06)',
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ fontSize: '0.9rem', color: isLight ? '#475569' : '#94a3b8' }}>
                          Ready to interview? Submit your profile to skip HR gatekeepers.
                        </div>
                        <button
                          onClick={() => handleApplyClick(job.title)}
                          className="btn-primary"
                          style={{
                            padding: '0.6rem 1.5rem',
                            fontSize: '0.88rem',
                            fontWeight: 700,
                            borderRadius: '8px',
                          }}
                        >
                          Fill Application For This Role &rarr;
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. DIRECT APPLICATION TERMINAL
      ======================================================== */}
      <section
        id="apply-section"
        style={{
          padding: '6rem 0',
          position: 'relative',
        }}
      >
        <div className="container-custom">
          <div
            style={{
              maxWidth: '840px',
              margin: '0 auto',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              borderRadius: '28px',
              background: isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.85)',
              border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(0, 255, 209, 0.25)',
              boxShadow: isLight
                ? '0 25px 60px -15px rgba(0, 168, 143, 0.12)'
                : '0 30px 80px -20px rgba(0, 255, 209, 0.15)',
              backdropFilter: 'blur(20px)',
              position: 'relative',
            }}
          >
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: 'rgba(0, 255, 209, 0.15)',
                    border: '1px solid #00ffd1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                    color: '#00ffd1',
                  }}
                >
                  <CheckCircle2 size={40} />
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 850, marginBottom: '0.75rem' }}>
                  Application Dispatched to Engineering!
                </h3>
                <p
                  style={{
                    color: isLight ? '#475569' : '#94a3b8',
                    fontSize: '1.05rem',
                    lineHeight: 1.6,
                    maxWidth: '520px',
                    margin: '0 auto 2rem auto',
                  }}
                >
                  Thank you, <strong>{formData.name || 'Candidate'}</strong>. Our technical talent lead and
                  engineering director review all candidate submissions within 2 business days.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-primary"
                  style={{ padding: '0.8rem 2rem', borderRadius: '10px', fontSize: '0.95rem' }}
                >
                  Submit Another Profile
                </button>
              </div>
            ) : (
              <>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
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
                    Direct Candidate Fast-Track
                  </span>
                  <h3
                    style={{
                      fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
                      fontWeight: 850,
                      letterSpacing: '-0.02em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Send Your Profile Directly to Engineering
                  </h3>
                  <p style={{ color: isLight ? '#64748b' : '#94a3b8', fontSize: '0.98rem' }}>
                    No automated keyword-parsing filters. Real engineering leads read every portfolio and codebase.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* Position Select */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.86rem',
                        fontWeight: 700,
                        marginBottom: '0.5rem',
                        color: isLight ? '#334155' : '#cbd5e1',
                      }}
                    >
                      Target Role / Opportunity *
                    </label>
                    <select
                      value={selectedRole}
                      onChange={(e) => {
                        setSelectedRole(e.target.value);
                        setFormData((prev) => ({ ...prev, position: e.target.value }));
                      }}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.05)',
                        border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.12)',
                        color: isLight ? '#0f172a' : '#f8fafc',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    >
                      {careersData.openings.map((j) => (
                        <option key={j.id} value={j.title} style={{ background: isLight ? '#ffffff' : '#0a1222' }}>
                          {j.title} ({j.experience})
                        </option>
                      ))}
                      <option value="General Engineering Consideration" style={{ background: isLight ? '#ffffff' : '#0a1222' }}>
                        General Engineering Consideration (Future Openings)
                      </option>
                    </select>
                  </div>

                  {/* Name & Email Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '0.86rem',
                          fontWeight: 700,
                          marginBottom: '0.5rem',
                          color: isLight ? '#334155' : '#cbd5e1',
                        }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1rem',
                          borderRadius: '12px',
                          background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.05)',
                          border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.12)',
                          color: isLight ? '#0f172a' : '#f8fafc',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '0.86rem',
                          fontWeight: 700,
                          marginBottom: '0.5rem',
                          color: isLight ? '#334155' : '#cbd5e1',
                        }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1rem',
                          borderRadius: '12px',
                          background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.05)',
                          border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.12)',
                          color: isLight ? '#0f172a' : '#f8fafc',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Phone & Experience Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '0.86rem',
                          fontWeight: 700,
                          marginBottom: '0.5rem',
                          color: isLight ? '#334155' : '#cbd5e1',
                        }}
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1rem',
                          borderRadius: '12px',
                          background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.05)',
                          border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.12)',
                          color: isLight ? '#0f172a' : '#f8fafc',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '0.86rem',
                          fontWeight: 700,
                          marginBottom: '0.5rem',
                          color: isLight ? '#334155' : '#cbd5e1',
                        }}
                      >
                        Total Professional Experience
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1rem',
                          borderRadius: '12px',
                          background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.05)',
                          border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.12)',
                          color: isLight ? '#0f172a' : '#f8fafc',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      >
                        <option value="Fresher / Intern">Fresher / Intern (0 - 1 Years)</option>
                        <option value="1 - 3 Years">Junior Engineer (1 - 3 Years)</option>
                        <option value="3 - 5 Years">Mid-Senior Engineer (3 - 5 Years)</option>
                        <option value="5+ Years">Senior / Lead Architect (5+ Years)</option>
                      </select>
                    </div>
                  </div>

                  {/* GitHub & Resume Links Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '0.86rem',
                          fontWeight: 700,
                          marginBottom: '0.5rem',
                          color: isLight ? '#334155' : '#cbd5e1',
                        }}
                      >
                        GitHub / Portfolio / LinkedIn URL *
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://github.com/yourhandle"
                        value={formData.portfolioUrl}
                        onChange={(e) => setFormData((prev) => ({ ...prev, portfolioUrl: e.target.value }))}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1rem',
                          borderRadius: '12px',
                          background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.05)',
                          border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.12)',
                          color: isLight ? '#0f172a' : '#f8fafc',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '0.86rem',
                          fontWeight: 700,
                          marginBottom: '0.5rem',
                          color: isLight ? '#334155' : '#cbd5e1',
                        }}
                      >
                        Resume Link (Google Drive / Dropbox / Cloud)
                      </label>
                      <input
                        type="url"
                        placeholder="https://drive.google.com/..."
                        value={formData.resumeLink}
                        onChange={(e) => setFormData((prev) => ({ ...prev, resumeLink: e.target.value }))}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1rem',
                          borderRadius: '12px',
                          background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.05)',
                          border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.12)',
                          color: isLight ? '#0f172a' : '#f8fafc',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Message / Cover Note */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.86rem',
                        fontWeight: 700,
                        marginBottom: '0.5rem',
                        color: isLight ? '#334155' : '#cbd5e1',
                      }}
                    >
                      Why Opash Software? (Optional Note)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about the toughest engineering challenge you solved recently..."
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.05)',
                        border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.12)',
                        color: isLight ? '#0f172a' : '#f8fafc',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary"
                    style={{
                      padding: '1rem 2.5rem',
                      borderRadius: '12px',
                      fontSize: '1.05rem',
                      fontWeight: 750,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      marginTop: '0.5rem',
                      cursor: submitting ? 'wait' : 'pointer',
                    }}
                  >
                    {submitting ? (
                      <span>Transmitting Profile...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Submit Direct Application</span>
                      </>
                    )}
                  </button>

                  <div
                    style={{
                      textAlign: 'center',
                      fontSize: '0.82rem',
                      color: isLight ? '#64748b' : '#94a3b8',
                      marginTop: '0.5rem',
                    }}
                  >
                    Prefer direct email? You can also send your resume directly to{' '}
                    <a
                      href={`mailto:${companyData.contact.hrEmail}`}
                      style={{ color: isLight ? '#008a75' : '#00ffd1', fontWeight: 600, textDecoration: 'underline' }}
                    >
                      {companyData.contact.hrEmail}
                    </a>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. THE 4-STEP TRANSPARENT HIRING JOURNEY
      ======================================================== */}
      <section
        style={{
          padding: '5rem 0',
          position: 'relative',
          background: isLight ? 'rgba(241, 245, 249, 0.5)' : 'rgba(10, 18, 34, 0.4)',
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
              Speed & Respect
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                fontWeight: 850,
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem',
              }}
            >
              Our 4-Stage Fast-Track Hiring Process
            </h2>
            <p style={{ color: isLight ? '#64748b' : '#94a3b8', fontSize: '0.98rem' }}>
              We value your time. The entire interview journey typically completes in under 10 business days.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              {
                step: '01',
                title: 'Culture & Tech Sync',
                time: '30 Mins (Google Meet)',
                desc: 'Informal discussion covering your career goals, past projects, and culture alignment with Opash leadership.',
              },
              {
                step: '02',
                title: 'Practical Code Teardown',
                time: '60 Mins (Live Pairing)',
                desc: 'Real-world problem solving and code review with a senior engineer. No reverse-binary-tree whiteboard trivia.',
              },
              {
                step: '03',
                title: 'System Design & Arch',
                time: '45 Mins (Architecture)',
                desc: 'High-level scalability dialogue on databases, caching, API design, and asynchronous event streaming.',
              },
              {
                step: '04',
                title: 'Executive Offer & Welcome',
                time: 'Fast Same-Week Decision',
                desc: 'Transparent compensation breakdown, joining bonuses, equipment provisioning, and start date alignment.',
              },
            ].map((stage, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.75rem',
                  borderRadius: '16px',
                  background: isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.65)',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    color: isLight ? '#00a88f' : '#00ffd1',
                    marginBottom: '0.5rem',
                  }}
                >
                  {stage.step}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.25rem' }}>{stage.title}</h4>
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 650,
                    color: isLight ? '#0284c7' : '#38bdf8',
                    marginBottom: '0.75rem',
                  }}
                >
                  {stage.time}
                </div>
                <p style={{ color: isLight ? '#64748b' : '#94a3b8', fontSize: '0.88rem', lineHeight: 1.55, margin: 0 }}>
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
