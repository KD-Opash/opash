'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';
import ServicesCreativeBackdrop from '@/components/ServicesCreativeBackdrop';
import {
  Code2,
  Globe2,
  Smartphone,
  Cpu,
  Network,
  Users2,
  Cloud,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  CheckCircle2,
  Clock,
  Award,
  Terminal,
  Workflow,
  Check,
  PhoneCall,
  Calendar
} from 'lucide-react';
import { companyData } from '@/data/company';

interface ServiceCard {
  id: string;
  title: string;
  shortLabel: string;
  slug: string;
  badge: string;
  category: 'enterprise' | 'web-mobile' | 'ai-data' | 'squads';
  desc: string;
  accent: string;
  accentRgb: string;
  tags: string[];
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  metrics: string;
}

export default function ServicesPageClient() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const servicesList: ServiceCard[] = [
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      shortLabel: 'Custom Software',
      slug: 'custom-software-development',
      badge: 'Enterprise Grade',
      category: 'enterprise',
      desc: 'Opash Software builds scalable custom software tailored to your business needs — from enterprise platforms to niche solutions. Our agile approach ensures faster delivery and long-term performance.',
      accent: '#00bbab',
      accentRgb: '0, 187, 171',
      tags: ['Enterprise Architecture', 'DevOps & CI/CD', 'Cloud-Native'],
      icon: Code2,
      metrics: '40% Faster Time-To-Market',
    },
    {
      id: 'web-development',
      title: 'Web Development',
      shortLabel: 'Web Platforms',
      slug: 'web-development',
      badge: 'Lightning Fast',
      category: 'web-mobile',
      desc: 'Get modern, responsive, and SEO-friendly websites with Opash Software’s web development services. We build high-performance platforms using cutting-edge technologies.',
      accent: '#10b981',
      accentRgb: '16, 185, 129',
      tags: ['Next.js & React', 'High Performance', 'SEO Ready'],
      icon: Globe2,
      metrics: '99/100 Core Web Vitals',
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      shortLabel: 'Mobile Apps',
      slug: 'mobile-development',
      badge: 'Cross-Platform',
      category: 'web-mobile',
      desc: 'We design and develop feature-rich mobile apps for iOS and Android that are fast, secure, and scalable. Deliver exceptional user experiences with cross-platform and native apps.',
      accent: '#38bdf8',
      accentRgb: '56, 189, 248',
      tags: ['iOS & Android', 'React Native', 'Native UX'],
      icon: Smartphone,
      metrics: '4.9★ App Store Average',
    },
    {
      id: 'ai-ml-solutions',
      title: 'AI & ML Solutions',
      shortLabel: 'AI & Agents',
      slug: 'ai-ml-solutions',
      badge: 'AI Systems',
      category: 'ai-data',
      desc: 'Leverage Artificial Intelligence and Machine Learning to automate workflows, enhance decision-making, and personalize experiences tailored to your business goals.',
      accent: '#5EC098',
      accentRgb: '94, 192, 152',
      tags: ['LLMs & GenAI', 'Neural Models', 'Vector RAG'],
      icon: Cpu,
      metrics: 'Sub-200ms Inference SLAs',
    },
    {
      id: 'saas-development',
      title: 'Multi-Tenant SaaS Development',
      shortLabel: 'SaaS Platforms',
      slug: 'saas-development',
      badge: 'Multi-Tenant',
      category: 'enterprise',
      desc: 'Architect multi-tenant cloud platforms with automated recurring billing, granular role permissions, high availability, and horizontal elasticity.',
      accent: '#6366f1',
      accentRgb: '99, 102, 241',
      tags: ['Multi-Tenancy', 'Stripe Subscriptions', 'AWS Cloud'],
      icon: Cloud,
      metrics: '100% Horizontal Elasticity',
    },
    {
      id: 'api-integration',
      title: 'API Integration & Microservices',
      shortLabel: 'API Mesh',
      slug: 'api-integration',
      badge: 'Microservices',
      category: 'enterprise',
      desc: 'Enhance system efficiency with seamless API integration and microservices architecture. Enable rapid scalability, modular development, and faster time-to-market.',
      accent: '#476D9A',
      accentRgb: '71, 109, 154',
      tags: ['Microservices', 'REST & GraphQL', 'Low Latency'],
      icon: Network,
      metrics: '99.99% Integration Uptime',
    },
    {
      id: 'qa-testing',
      title: 'QA & Software Testing',
      shortLabel: 'Automated QA',
      slug: 'qa-testing',
      badge: 'Zero Defects',
      category: 'enterprise',
      desc: 'Eliminate defects with comprehensive automated Playwright and manual testing suites, verifying reliability, security, and edge performance.',
      accent: '#f43f5e',
      accentRgb: '244, 63, 94',
      tags: ['Playwright E2E', 'Security Audits', 'Load Testing'],
      icon: ShieldCheck,
      metrics: '95%+ Code Test Coverage',
    },
    {
      id: 'hire-developers',
      title: 'Hire Dedicated Developers',
      shortLabel: 'Dedicated Squads',
      slug: 'hire-developers',
      badge: 'Dedicated Team',
      category: 'squads',
      desc: 'Hire vetted and skilled developers from Opash Software for your custom projects. Scale your tech team on-demand with flexible engagement models and domain expertise.',
      accent: '#2dd4bf',
      accentRgb: '45, 212, 191',
      tags: ['Top 3% Talent', 'Zero Overhead', 'Flexible Scale'],
      icon: Users2,
      metrics: '48h Squad Kickoff SLA',
    },
  ];

  const displayedServices =
    activeCategory === 'all'
      ? servicesList
      : servicesList.filter((s) => s.category === activeCategory);

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
      {/* 1. CINEMATIC HERO SECTION: SERVICES OVERVIEW                          */}
      {/* ===================================================================== */}
      <section
        style={{
          position: 'relative',
          padding: '7.5rem 1.5rem 4rem 1.5rem',
          overflow: 'hidden',
        }}
      >
        <ServicesCreativeBackdrop isLightMode={isLight} />

        <div className="container-custom" style={{ position: 'relative', zIndex: 2, maxWidth: '1240px', margin: '0 auto' }}>
          {/* Eyebrow Status Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 1.25rem',
                borderRadius: '9999px',
                background: isLight ? 'rgba(0, 168, 143, 0.1)' : 'rgba(94, 192, 152, 0.12)',
                border: isLight ? '1px solid rgba(0, 168, 143, 0.25)' : '1px solid rgba(94, 192, 152, 0.35)',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: isLight ? '#008a75' : '#2dd4bf',
              }}
            >
              <Sparkles size={14} />
              <span>FULL-SPECTRUM CAPABILITIES &bull; BESPOKE ARCHITECTURE &bull; SURAT HQ</span>
            </div>
          </div>

          {/* Main Headline */}
          <div style={{ textAlign: 'center', maxWidth: '980px', margin: '0 auto 2rem auto' }}>
            <h1
              style={{
                fontSize: 'clamp(2.35rem, 5.2vw, 3.85rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '1rem',
              }}
            >
              Engineered For Unlimited Scale, <br />
              <span className="opash-brand-gradient-text">
                Tailored To Your Business DNA
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
                lineHeight: 1.65,
                color: isLight ? '#475569' : '#94a3b8',
                maxWidth: '820px',
                margin: '0 auto',
              }}
            >
              From distributed cloud platforms and autonomous AI orchestrations to bespoke enterprise backends 
              and cross-platform mobile apps, we turn complex technical roadmaps into resilient production deliverables.
            </p>
          </div>

          {/* Quick-Jump Category / Service Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              marginTop: '1.5rem',
            }}
          >
            {[
              { id: 'all', label: 'All Services (8)' },
              { id: 'enterprise', label: 'Enterprise & Cloud' },
              { id: 'web-mobile', label: 'Web & Mobile' },
              { id: 'ai-data', label: 'AI & Data Intelligence' },
              { id: 'squads', label: 'Dedicated Squads' },
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: '9999px',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: isActive
                      ? isLight ? '1.5px solid #008a75' : '1.5px solid #5EC098'
                      : isLight ? '1px solid rgba(15, 23, 42, 0.1)' : '1px solid rgba(255, 255, 255, 0.08)',
                    background: isActive
                      ? isLight ? 'rgba(0, 168, 143, 0.12)' : 'rgba(94, 192, 152, 0.2)'
                      : isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.6)',
                    color: isActive
                      ? isLight ? '#008a75' : '#2dd4bf'
                      : isLight ? '#64748b' : '#94a3b8',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. SERVICES SHOWCASE GRID: 8 BESPOKE CAPABILITY CARDS                 */}
      {/* ===================================================================== */}
      <section style={{ position: 'relative', padding: '1rem 1.5rem 6rem 1.5rem', zIndex: 10 }}>
        <div className="container-custom" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {displayedServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <Link
                    href={`/${service.slug}`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                      padding: '2.25rem',
                      borderRadius: '24px',
                      background: isLight ? '#ffffff' : 'rgba(4, 15, 36, 0.75)',
                      border: isLight
                        ? '1px solid rgba(15, 23, 42, 0.08)'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      textDecoration: 'none',
                      color: 'inherit',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                      boxShadow: isLight ? '0 10px 30px rgba(15, 23, 42, 0.04)' : '0 20px 40px rgba(0, 0, 0, 0.4)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.borderColor = service.accent;
                      e.currentTarget.style.boxShadow = isLight
                        ? `0 16px 36px -10px rgba(${service.accentRgb}, 0.22)`
                        : `0 20px 44px -10px rgba(${service.accentRgb}, 0.35)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.borderColor = isLight ? 'rgba(15, 23, 42, 0.08)' : 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.boxShadow = isLight ? '0 10px 30px rgba(15, 23, 42, 0.04)' : '0 20px 40px rgba(0, 0, 0, 0.4)';
                    }}
                  >
                    {/* Subtle Top Accent Line with Brand Color */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
                      }}
                    />

                    <div>
                      {/* Top Header Row: Badge & Arrow */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '1.5rem',
                        }}
                      >
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            padding: '0.35rem 0.85rem',
                            borderRadius: '9999px',
                            fontSize: '0.74rem',
                            fontWeight: 750,
                            backgroundColor: `rgba(${service.accentRgb}, 0.12)`,
                            color: service.accent,
                            border: `1px solid rgba(${service.accentRgb}, 0.3)`,
                          }}
                        >
                          <span
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              backgroundColor: service.accent,
                            }}
                          />
                          {service.badge}
                        </span>

                        <div
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: `1px solid rgba(${service.accentRgb}, 0.3)`,
                            color: service.accent,
                            background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.04)',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <ArrowUpRight size={17} />
                        </div>
                      </div>

                      {/* Service Icon Badge */}
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '16px',
                          backgroundColor: `rgba(${service.accentRgb}, 0.12)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: service.accent,
                          marginBottom: '1.25rem',
                          border: `1px solid rgba(${service.accentRgb}, 0.25)`,
                        }}
                      >
                        <Icon size={28} />
                      </div>

                      {/* Title & Description */}
                      <h3
                        style={{
                          fontSize: '1.35rem',
                          fontWeight: 800,
                          margin: '0 0 0.85rem 0',
                          letterSpacing: '-0.015em',
                          color: isLight ? '#0f172a' : '#f8fafc',
                        }}
                      >
                        {service.title}
                      </h3>

                      <p
                        style={{
                          fontSize: '0.92rem',
                          lineHeight: 1.6,
                          color: isLight ? '#64748b' : '#94a3b8',
                          margin: '0 0 1.5rem 0',
                        }}
                      >
                        {service.desc}
                      </p>

                      {/* Feature & Tech Tags */}
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.45rem',
                          marginBottom: '1.75rem',
                        }}
                      >
                        {service.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 650,
                              padding: '0.24rem 0.65rem',
                              borderRadius: '6px',
                              background: isLight ? '#f1f5f9' : 'rgba(255, 255, 255, 0.05)',
                              color: isLight ? '#475569' : '#cbd5e1',
                              border: `1px solid ${isLight ? '#e2e8f0' : 'rgba(255, 255, 255, 0.06)'}`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer CTA & Metric */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '1.25rem',
                        borderTop: isLight ? '1px solid rgba(15, 23, 42, 0.06)' : '1px solid rgba(255, 255, 255, 0.06)',
                      }}
                    >
                      <span
                        style={{
                          color: service.accent,
                          fontSize: '0.9rem',
                          fontWeight: 750,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                        }}
                      >
                        Explore Service
                      </span>
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          backgroundColor: `rgba(${service.accentRgb}, 0.15)`,
                          color: service.accent,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <ArrowRight size={15} />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. ENTERPRISE ENGINEERING PILLARS & TRUST GUARANTEES                  */}
      {/* ===================================================================== */}
      <section
        style={{
          position: 'relative',
          padding: '5.5rem 1.5rem',
          background: isLight ? '#f1f5f9' : 'rgba(4, 15, 36, 0.45)',
          borderTop: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.06)',
          borderBottom: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <span
              style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: isLight ? '#008a75' : '#5EC098',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Enterprise Engineering Standards
            </span>
            <h2 style={{ fontSize: 'clamp(1.95rem, 3.8vw, 2.75rem)', fontWeight: 800, margin: '0.65rem 0 1rem 0' }}>
              Why Leading Founders Partner With Opash
            </h2>
            <p style={{ color: isLight ? '#64748b' : '#94a3b8', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
              We eliminate traditional outsourcing friction with direct architect communication, rigorous automated testing, 
              and complete legal intellectual property transfer.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                icon: Award,
                title: '100% IP & Code Ownership',
                desc: 'You retain complete legal intellectual property rights, Git repositories, and documentation from Day 1.',
              },
              {
                icon: ShieldCheck,
                title: '2-Week Risk-Free Trial',
                desc: 'Evaluate sprint velocity, code elegance, and team communication before full milestone commitment.',
              },
              {
                icon: Users2,
                title: 'Top 3% Vetted Engineers',
                desc: 'Senior tech leads, architects, and full-stack builders operating out of our Surat Innovation Campus.',
              },
              {
                icon: Clock,
                title: 'Bi-Weekly Working Demos',
                desc: 'Verifiable working software delivered to your staging environments every 14 days without exception.',
              },
              {
                icon: Terminal,
                title: 'Automated CI/CD & QA Suites',
                desc: 'Playwright end-to-end regression suites and Docker preview pipelines on every single pull request.',
              },
              {
                icon: CheckCircle2,
                title: '30-Day Post-Launch Warranty',
                desc: 'Full post-deployment support and critical defect warranties included across all custom deliveries.',
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  background: isLight ? '#ffffff' : 'rgba(3, 10, 24, 0.75)',
                  border: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '18px',
                  padding: '2rem',
                  boxShadow: isLight ? '0 4px 20px rgba(15, 23, 42, 0.04)' : '0 10px 30px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: isLight ? 'rgba(0, 168, 143, 0.1)' : 'rgba(94, 192, 152, 0.15)',
                    color: isLight ? '#008a75' : '#5EC098',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  <pillar.icon size={22} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: isLight ? '#64748b' : '#94a3b8', lineHeight: 1.55, margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. BOTTOM ARCHITECTURAL CONSULTATION CALL-TO-ACTION                   */}
      {/* ===================================================================== */}
      <section style={{ position: 'relative', padding: '6rem 1.5rem' }}>
        <div className="container-custom" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div
            style={{
              padding: '3.5rem 2.5rem',
              borderRadius: '24px',
              background: isLight
                ? 'linear-gradient(135deg, rgba(0, 168, 143, 0.1) 0%, rgba(71, 109, 154, 0.12) 100%)'
                : 'linear-gradient(135deg, rgba(94, 192, 152, 0.14) 0%, rgba(71, 109, 154, 0.22) 100%)',
              border: isLight ? '1.5px solid rgba(0, 168, 143, 0.3)' : '1.5px solid rgba(94, 192, 152, 0.4)',
              textAlign: 'center',
              boxShadow: isLight ? '0 20px 50px rgba(0, 168, 143, 0.08)' : '0 25px 60px rgba(0, 0, 0, 0.5)',
            }}
          >
            <span
              style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: isLight ? '#008a75' : '#5EC098',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Start Your Technical Sprint
            </span>

            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                margin: '0.65rem 0 1rem 0',
              }}
            >
              Ready To Build Something Exceptional?
            </h2>

            <p
              style={{
                color: isLight ? '#475569' : '#94a3b8',
                maxWidth: '680px',
                margin: '0 auto 2rem auto',
                fontSize: '1.05rem',
                lineHeight: 1.6,
              }}
            >
              Schedule a 30-minute architectural consultation directly with our engineering team or scope your project 
              with our interactive investment estimator.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                href="/get-a-quote"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.95rem 1.85rem',
                  borderRadius: '12px',
                  background: isLight
                    ? 'linear-gradient(135deg, #008a75 0%, #476D9A 100%)'
                    : 'linear-gradient(135deg, #5EC098 0%, #476D9A 100%)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(94, 192, 152, 0.3)',
                }}
              >
                <span>Launch Project Estimator</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.95rem 1.85rem',
                  borderRadius: '12px',
                  background: isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.06)',
                  color: isLight ? '#0f172a' : '#f8fafc',
                  border: isLight ? '1px solid rgba(15, 23, 42, 0.15)' : '1px solid rgba(255, 255, 255, 0.15)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                }}
              >
                <Calendar size={16} />
                <span>Talk With Lead Architect</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
