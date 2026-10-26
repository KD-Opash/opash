'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';
import QuoteCreativeBackdrop from '@/components/QuoteCreativeBackdrop';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  Layers, 
  Globe, 
  Smartphone, 
  Database, 
  Bot, 
  Workflow, 
  FileText, 
  ChevronDown, 
  Star, 
  Lock, 
  Code2, 
  Zap, 
  Award, 
  HelpCircle,
  TrendingUp,
  Cpu,
  RefreshCw,
  PhoneCall,
  Calendar
} from 'lucide-react';
import { companyData } from '@/data/company';

interface ProjectType {
  id: string;
  label: string;
  icon: React.ElementType;
  baseWeeks: number;
  basePrice: number;
  desc: string;
  tech: string[];
  badge: string;
}

interface FeatureItem {
  id: string;
  label: string;
  icon: React.ElementType;
  weeks: number;
  price: number;
  desc: string;
  category: 'core' | 'intelligence' | 'enterprise';
}

export default function GetAQuotePageClient() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Configurator state
  const [projectType, setProjectType] = useState<string>('saas-platform');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'auth',
    'billing',
    'api-mesh',
    'qa-cicd',
  ]);
  const [engagementModel, setEngagementModel] = useState<string>('dedicated');
  const [timelineUrgency, setTimelineUrgency] = useState<'standard' | 'accelerated'>('standard');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form submission state
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
  });

  // Archetypes
  const projectTypes: ProjectType[] = [
    {
      id: 'saas-platform',
      label: 'Multi-Tenant SaaS Engine',
      icon: Layers,
      baseWeeks: 8,
      basePrice: 7500,
      desc: 'Scalable cloud infrastructure with multi-tenancy, granular RBAC, and automated billing workflows.',
      tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Docker'],
      badge: 'MOST POPULAR',
    },
    {
      id: 'ai-system',
      label: 'AI & Autonomous Agents / RAG',
      icon: Bot,
      baseWeeks: 6,
      basePrice: 6500,
      desc: 'Private LLM orchestrations, semantic vector search, autonomous workflow agents, and telemetry.',
      tech: ['Python', 'LangChain', 'Pinecone', 'FastAPI'],
      badge: 'HIGH DEMAND',
    },
    {
      id: 'web-app',
      label: 'Custom Web Platform & Portal',
      icon: Globe,
      baseWeeks: 6,
      basePrice: 5000,
      desc: 'High-performance interactive web apps, enterprise client portals, and administrative backends.',
      tech: ['React', 'Next.js', 'Node.js', 'GraphQL'],
      badge: 'ENTERPRISE READY',
    },
    {
      id: 'mobile-app',
      label: 'Cross-Platform Mobile Ecosystem',
      icon: Smartphone,
      baseWeeks: 8,
      basePrice: 7000,
      desc: 'Fluid native iOS & Android applications with offline sync, biometric security, and push engine.',
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      badge: 'APP STORE SLA',
    },
    {
      id: 'enterprise-custom',
      label: 'Enterprise Modernization & ERP',
      icon: Workflow,
      baseWeeks: 12,
      basePrice: 11000,
      desc: 'Legacy monolith refactoring into decoupled microservices, ERP sync, and compliance architecture.',
      tech: ['Go', 'Kubernetes', 'AWS', 'Microservices'],
      badge: 'MISSION CRITICAL',
    },
  ];

  // Features
  const featuresList: FeatureItem[] = [
    {
      id: 'auth',
      label: 'Enterprise SSO & Granular RBAC',
      icon: Lock,
      weeks: 1,
      price: 900,
      desc: 'Auth0 / Okta / Cognito integration with role hierarchies, 2FA, and session token rotation.',
      category: 'core',
    },
    {
      id: 'billing',
      label: 'Global Subscriptions & Invoicing',
      icon: TrendingUp,
      weeks: 1.5,
      price: 1300,
      desc: 'Stripe Billing / LemonSqueezy multi-currency recurring plans, webhook listener, and tax compliance.',
      category: 'core',
    },
    {
      id: 'ai-rag',
      label: 'Private RAG Search & AI Co-Pilot',
      icon: Bot,
      weeks: 2,
      price: 1900,
      desc: 'Custom embeddings pipeline, hybrid vector retrieval, and context-aware conversational assistant.',
      category: 'intelligence',
    },
    {
      id: 'realtime',
      label: 'Realtime WebSockets & Live Feeds',
      icon: Zap,
      weeks: 1,
      price: 950,
      desc: 'Sub-50ms duplex streaming, presence detection, collaborative canvas, and notification dispatcher.',
      category: 'core',
    },
    {
      id: 'api-mesh',
      label: 'Enterprise API Gateway & Sync',
      icon: Database,
      weeks: 1.5,
      price: 1200,
      desc: 'Unified GraphQL/REST facade linking external ERP, Salesforce, HubSpot, or legacy database nodes.',
      category: 'enterprise',
    },
    {
      id: 'qa-cicd',
      label: 'Playwright E2E & GitHub CI/CD',
      icon: Code2,
      weeks: 1,
      price: 850,
      desc: 'Automated regression test matrix, Docker build automation, and preview environments on every PR.',
      category: 'enterprise',
    },
    {
      id: 'cloud-infra',
      label: 'Terraform IaC & AWS Multi-AZ',
      icon: Cpu,
      weeks: 1.5,
      price: 1400,
      desc: 'Infrastructure as Code deployment on AWS/GCP with auto-scaling, VPC security, and zero downtime.',
      category: 'enterprise',
    },
    {
      id: 'compliance',
      label: 'SOC2 / HIPAA Compliance Hardening',
      icon: ShieldCheck,
      weeks: 1.5,
      price: 1500,
      desc: 'Encrypted storage at rest/in-transit, comprehensive audit logs, and security policy verification.',
      category: 'enterprise',
    },
  ];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Calculations
  const currentArchetype = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
  const featureWeeks = selectedFeatures.reduce((acc, featId) => {
    const feat = featuresList.find((f) => f.id === featId);
    return acc + (feat ? feat.weeks : 0);
  }, 0);
  const featurePrice = selectedFeatures.reduce((acc, featId) => {
    const feat = featuresList.find((f) => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const urgencyMultiplier = timelineUrgency === 'accelerated' ? 1.25 : 1.0;
  const rawWeeks = currentArchetype.baseWeeks + featureWeeks;
  const calculatedWeeks = timelineUrgency === 'accelerated' 
    ? Math.max(4, Math.round(rawWeeks * 0.75)) 
    : Math.round(rawWeeks);

  const baseTotal = currentArchetype.basePrice + featurePrice;
  const estimatedMin = Math.round(baseTotal * urgencyMultiplier);
  const estimatedMax = Math.round(estimatedMin * 1.32);
  const estimatedSprints = Math.ceil(calculatedWeeks / 2);

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
      q: 'How accurate is this interactive estimate?',
      a: 'Our estimator is calibrated against 75+ completed production deliveries. It reflects our transparent pricing with senior tech leads based in Surat, India. The calculated range is typically accurate within ±10% following our initial 30-minute architectural scoping review.',
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
      {/* 1. CINEMATIC HERO SECTION: TRANSPARENT SCOPING & ESTIMATION HUD       */}
      {/* ===================================================================== */}
      <section
        style={{
          position: 'relative',
          padding: '7.5rem 1.5rem 3.5rem 1.5rem',
          overflow: 'hidden',
        }}
      >
        {/* Opash Mint (#5EC098) & Slate Blue (#476D9A) Brand Backdrop */}
        <QuoteCreativeBackdrop isLightMode={isLight} />

        <div className="container-custom" style={{ position: 'relative', zIndex: 2, maxWidth: '1240px', margin: '0 auto' }}>
          {/* Eyebrow Status Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontSize: '0.86rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: isLight ? '#008a75' : '#2dd4bf',
              }}
            >
              <Sparkles size={16} />
              <span>Transparent Sprint Pricing &bull; 0% Surprise Fees &bull; 100% IP Ownership</span>
            </div>
          </div>

          {/* Main Headline */}
          <div style={{ textAlign: 'center', maxWidth: '980px', margin: '0 auto 1.5rem auto' }}>
            <h1
              style={{
                fontSize: 'clamp(2.35rem, 5.2vw, 3.85rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '1rem',
              }}
            >
              Interactive Project Scope & <br />
              <span className="opash-brand-gradient-text">
                Guaranteed Investment Estimator
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
              Configure your system archetype, technical modules, and dedicated squad cadence to generate an instant, 
              verifiable delivery timeline and realistic budget estimate calibrated across 75+ enterprise deployments.
            </p>
          </div>

          {/* Quick Value Guarantees Ribbon */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              marginTop: '1.5rem',
            }}
          >
            {[
              { icon: ShieldCheck, text: '2-Week Risk-Free Trial' },
              { icon: Clock, text: 'Guaranteed Bi-Weekly Sprints' },
              { icon: Lock, text: 'Strict Mutual NDA Before Kickoff' },
              { icon: Award, text: '100% IP Transfer On Day 1' },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: isLight ? '#334155' : '#cbd5e1',
                  background: isLight ? 'rgba(255, 255, 255, 0.7)' : 'rgba(4, 15, 36, 0.6)',
                  padding: '0.4rem 0.95rem',
                  borderRadius: '9999px',
                  border: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <item.icon size={14} style={{ color: isLight ? '#008a75' : '#5EC098' }} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. THE INTERACTIVE CONFIGURATOR ENGINE: TWO-COLUMN LAYOUT             */}
      {/* ===================================================================== */}
      <section style={{ position: 'relative', padding: '1rem 1.5rem 5rem 1.5rem', zIndex: 10 }}>
        <div className="container-custom" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.35fr 1fr',
              gap: '2.5rem',
              alignItems: 'start',
            }}
            className="estimator-interactive-layout"
          >
            {/* LEFT COLUMN: SELECTION STEPS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>

              {/* STEP 1: Core System Archetype */}
              <div
                style={{
                  background: isLight ? '#ffffff' : 'rgba(4, 15, 36, 0.65)',
                  border: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.09)',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: isLight ? '0 10px 30px rgba(15, 23, 42, 0.04)' : '0 20px 40px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '10px',
                        background: isLight ? '#008a75' : '#5EC098',
                        color: isLight ? '#ffffff' : '#01040a',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                      }}
                    >
                      1
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>
                        Choose Primary System Archetype
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: isLight ? '#64748b' : '#94a3b8', margin: 0 }}>
                        Select the primary architectural framework that defines your product.
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
                  {projectTypes.map((type) => {
                    const isSelected = type.id === projectType;
                    const IconComponent = type.icon;
                    return (
                      <div
                        key={type.id}
                        onClick={() => setProjectType(type.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '1rem',
                          padding: '1.15rem 1.35rem',
                          borderRadius: '14px',
                          cursor: 'pointer',
                          background: isSelected
                            ? isLight ? 'rgba(0, 168, 143, 0.08)' : 'rgba(94, 192, 152, 0.12)'
                            : isLight ? 'rgba(241, 245, 249, 0.6)' : 'rgba(255, 255, 255, 0.02)',
                          border: isSelected
                            ? isLight ? '2px solid #008a75' : '2px solid #5EC098'
                            : isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.06)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                          <div
                            style={{
                              width: '42px',
                              height: '42px',
                              borderRadius: '12px',
                              background: isSelected
                                ? isLight ? '#008a75' : '#5EC098'
                                : isLight ? 'rgba(15, 23, 42, 0.06)' : 'rgba(255, 255, 255, 0.06)',
                              color: isSelected
                                ? isLight ? '#ffffff' : '#01040a'
                                : isLight ? '#475569' : '#94a3b8',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              transition: 'all 0.2s ease',
                            }}
                          >
                            <IconComponent size={20} />
                          </div>

                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                              <span style={{ fontWeight: 700, fontSize: '1rem', color: isSelected ? (isLight ? '#008a75' : '#5EC098') : 'inherit' }}>
                                {type.label}
                              </span>
                              <span
                                style={{
                                  fontSize: '0.68rem',
                                  fontWeight: 700,
                                  letterSpacing: '0.04em',
                                  padding: '0.2rem 0.55rem',
                                  borderRadius: '6px',
                                  background: isSelected
                                    ? isLight ? 'rgba(0, 168, 143, 0.15)' : 'rgba(94, 192, 152, 0.22)'
                                    : isLight ? 'rgba(15, 23, 42, 0.06)' : 'rgba(255, 255, 255, 0.06)',
                                  color: isSelected
                                    ? isLight ? '#008a75' : '#2dd4bf'
                                    : isLight ? '#64748b' : '#94a3b8',
                                }}
                              >
                                {type.badge}
                              </span>
                            </div>

                            <p style={{ fontSize: '0.84rem', color: isLight ? '#64748b' : '#94a3b8', margin: '0.25rem 0 0 0', lineHeight: 1.45 }}>
                              {type.desc}
                            </p>

                            <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.45rem', flexWrap: 'wrap' }}>
                              {type.tech.map((t, idx) => (
                                <span
                                  key={idx}
                                  style={{
                                    fontSize: '0.72rem',
                                    fontWeight: 600,
                                    padding: '0.15rem 0.45rem',
                                    borderRadius: '4px',
                                    background: isLight ? '#e2e8f0' : 'rgba(255, 255, 255, 0.05)',
                                    color: isLight ? '#475569' : '#cbd5e1',
                                  }}
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div style={{ textAlign: 'right', flexShrink: 0 }}>
                          <div style={{ fontSize: '1.05rem', fontWeight: 800, color: isLight ? '#0f172a' : '#f8fafc' }}>
                            ${type.basePrice.toLocaleString()}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: isLight ? '#64748b' : '#94a3b8' }}>
                            Base ~{type.baseWeeks}w
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* STEP 2: Technical Pillars & Enterprise Modules */}
              <div
                style={{
                  background: isLight ? '#ffffff' : 'rgba(4, 15, 36, 0.65)',
                  border: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.09)',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: isLight ? '0 10px 30px rgba(15, 23, 42, 0.04)' : '0 20px 40px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '10px',
                        background: isLight ? '#008a75' : '#5EC098',
                        color: isLight ? '#ffffff' : '#01040a',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                      }}
                    >
                      2
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>
                        Select Architectural Modules & Integrations
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: isLight ? '#64748b' : '#94a3b8', margin: 0 }}>
                        Click to toggle engineering capabilities required for your build.
                      </p>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: isLight ? '#008a75' : '#5EC098' }}>
                    {selectedFeatures.length} Selected
                  </span>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '0.75rem',
                  }}
                >
                  {featuresList.map((feat) => {
                    const isChecked = selectedFeatures.includes(feat.id);
                    const FeatIcon = feat.icon;
                    return (
                      <div
                        key={feat.id}
                        onClick={() => toggleFeature(feat.id)}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          padding: '1.05rem',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          background: isChecked
                            ? isLight ? 'rgba(0, 168, 143, 0.08)' : 'rgba(94, 192, 152, 0.12)'
                            : isLight ? 'rgba(241, 245, 249, 0.5)' : 'rgba(255, 255, 255, 0.02)',
                          border: isChecked
                            ? isLight ? '1.5px solid #008a75' : '1.5px solid #5EC098'
                            : isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.06)',
                          transition: 'all 0.18s ease',
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                              <FeatIcon size={16} style={{ color: isChecked ? (isLight ? '#008a75' : '#5EC098') : (isLight ? '#64748b' : '#94a3b8') }} />
                              <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>
                                {feat.label}
                              </span>
                            </div>

                            <div
                              style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '6px',
                                border: isChecked
                                  ? 'none'
                                  : isLight ? '1.5px solid rgba(15, 23, 42, 0.25)' : '1.5px solid rgba(255, 255, 255, 0.25)',
                                background: isChecked ? (isLight ? '#008a75' : '#5EC098') : 'transparent',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: isLight ? '#ffffff' : '#01040a',
                                flexShrink: 0,
                              }}
                            >
                              {isChecked && <Check size={14} strokeWidth={3} />}
                            </div>
                          </div>

                          <p style={{ fontSize: '0.8rem', color: isLight ? '#64748b' : '#94a3b8', margin: 0, lineHeight: 1.45 }}>
                            {feat.desc}
                          </p>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', paddingTop: '0.65rem', borderTop: isLight ? '1px solid rgba(15, 23, 42, 0.06)' : '1px solid rgba(255, 255, 255, 0.06)' }}>
                          <span style={{ fontSize: '0.75rem', color: isLight ? '#64748b' : '#94a3b8' }}>
                            +{feat.weeks} {feat.weeks === 1 ? 'week' : 'weeks'}
                          </span>
                          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: isChecked ? (isLight ? '#008a75' : '#2dd4bf') : 'inherit' }}>
                            +${feat.price.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* STEP 3: Engagement Model & Velocity Cadence */}
              <div
                style={{
                  background: isLight ? '#ffffff' : 'rgba(4, 15, 36, 0.65)',
                  border: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.09)',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: isLight ? '0 10px 30px rgba(15, 23, 42, 0.04)' : '0 20px 40px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '10px',
                      background: isLight ? '#008a75' : '#5EC098',
                      color: isLight ? '#ffffff' : '#01040a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.9rem',
                    }}
                  >
                    3
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>
                      Squad Deployment Model & Speed
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: isLight ? '#64748b' : '#94a3b8', margin: 0 }}>
                      Choose your team integration structure and delivery speed cadence.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem', marginBottom: '1.25rem' }}>
                  {[
                    {
                      id: 'dedicated',
                      title: 'Dedicated Agile Squad',
                      sub: 'Senior Lead + 2 Devs + QA',
                      desc: 'Full-time dedicated team immersed in your daily standups, Jira, and Slack.',
                      badge: 'RECOMMENDED',
                    },
                    {
                      id: 'fixed-milestone',
                      title: 'Fixed-Scope Milestone',
                      sub: 'Turnkey Sprint Signoffs',
                      desc: 'Guaranteed budgets with bi-weekly deliverable demos before sprint payments.',
                      badge: 'PREDICTABLE',
                    },
                    {
                      id: 'mvp-fast',
                      title: 'Rapid MVP Accelerator',
                      sub: 'Target 30-Day Launch',
                      desc: 'Double-velocity squad assembled to push your initial production build live fast.',
                      badge: 'FASTEST',
                    },
                  ].map((model) => {
                    const isCurrent = engagementModel === model.id;
                    return (
                      <div
                        key={model.id}
                        onClick={() => setEngagementModel(model.id)}
                        style={{
                          padding: '1.15rem',
                          borderRadius: '14px',
                          cursor: 'pointer',
                          background: isCurrent
                            ? isLight ? 'rgba(0, 168, 143, 0.08)' : 'rgba(94, 192, 152, 0.12)'
                            : isLight ? 'rgba(241, 245, 249, 0.5)' : 'rgba(255, 255, 255, 0.02)',
                          border: isCurrent
                            ? isLight ? '2px solid #008a75' : '2px solid #5EC098'
                            : isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.06)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                          <span style={{ fontSize: '0.68rem', fontWeight: 800, color: isCurrent ? (isLight ? '#008a75' : '#2dd4bf') : (isLight ? '#64748b' : '#94a3b8') }}>
                            {model.badge}
                          </span>
                          {isCurrent && <CheckCircle2 size={16} color={isLight ? '#008a75' : '#5EC098'} />}
                        </div>
                        <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                          {model.title}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: isLight ? '#008a75' : '#2dd4bf', fontWeight: 600, marginBottom: '0.45rem' }}>
                          {model.sub}
                        </div>
                        <p style={{ fontSize: '0.78rem', color: isLight ? '#64748b' : '#94a3b8', margin: 0, lineHeight: 1.4 }}>
                          {model.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Timeline Urgency Switch */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.9rem 1.25rem',
                    borderRadius: '12px',
                    background: isLight ? 'rgba(241, 245, 249, 0.6)' : 'rgba(255, 255, 255, 0.03)',
                    border: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Zap size={18} style={{ color: isLight ? '#008a75' : '#5EC098' }} />
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700 }}>Accelerated Delivery Cadence</div>
                      <div style={{ fontSize: '0.78rem', color: isLight ? '#64748b' : '#94a3b8' }}>
                        Compress schedule by ~25% using dedicated twin-sprint engineers (+25% capacity)
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.35rem', background: isLight ? '#e2e8f0' : 'rgba(0, 0, 0, 0.35)', padding: '3px', borderRadius: '8px' }}>
                    <button
                      type="button"
                      onClick={() => setTimelineUrgency('standard')}
                      style={{
                        padding: '0.35rem 0.75rem',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        background: timelineUrgency === 'standard' ? (isLight ? '#ffffff' : '#476D9A') : 'transparent',
                        color: timelineUrgency === 'standard' ? (isLight ? '#0f172a' : '#ffffff') : (isLight ? '#64748b' : '#94a3b8'),
                      }}
                    >
                      Standard
                    </button>
                    <button
                      type="button"
                      onClick={() => setTimelineUrgency('accelerated')}
                      style={{
                        padding: '0.35rem 0.75rem',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        background: timelineUrgency === 'accelerated' ? (isLight ? '#008a75' : '#5EC098') : 'transparent',
                        color: timelineUrgency === 'accelerated' ? (isLight ? '#ffffff' : '#01040a') : (isLight ? '#64748b' : '#94a3b8'),
                      }}
                    >
                      Accelerated
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: LIVE INVESTMENT & DELIVERY BLUEPRINT HUD */}
            <div
              style={{
                position: 'sticky',
                top: '6.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div
                style={{
                  background: isLight ? '#ffffff' : 'rgba(4, 15, 36, 0.85)',
                  border: isLight ? '2px solid rgba(0, 168, 143, 0.25)' : '2px solid rgba(94, 192, 152, 0.35)',
                  borderRadius: '24px',
                  padding: '2.25rem',
                  boxShadow: isLight
                    ? '0 20px 50px rgba(0, 168, 143, 0.08), 0 1px 3px rgba(15, 23, 42, 0.05)'
                    : '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(94, 192, 152, 0.08)',
                  backdropFilter: 'blur(20px)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Luminous Top Rail */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: isLight
                      ? 'linear-gradient(90deg, #476D9A, #00A88F)'
                      : 'linear-gradient(90deg, #476D9A, #5EC098, #6289B8)',
                  }}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: isLight ? '#008a75' : '#5EC098',
                    }}
                  >
                    Live Scoping Blueprint
                  </span>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: isLight ? '#64748b' : '#94a3b8',
                    }}
                  >
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: '#10b981',
                        boxShadow: '0 0 8px #10b981',
                      }}
                    />
                    <span>SLA Guaranteed</span>
                  </div>
                </div>

                {/* Investment Estimate Display */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.85rem', color: isLight ? '#64748b' : '#94a3b8', marginBottom: '0.25rem' }}>
                    Estimated Investment Scope:
                  </div>
                  <div
                    style={{
                      fontSize: 'clamp(2.1rem, 3.2vw, 2.75rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                      color: isLight ? '#0f172a' : '#f8fafc',
                    }}
                  >
                    ${estimatedMin.toLocaleString()} &ndash; ${estimatedMax.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: isLight ? '#008a75' : '#2dd4bf', fontWeight: 600, marginTop: '0.35rem' }}>
                    Transparent engineering scope &bull; No surprise billings
                  </div>
                </div>

                {/* Key Deliverable Metrics */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.75rem',
                    padding: '1.1rem',
                    borderRadius: '14px',
                    background: isLight ? 'rgba(241, 245, 249, 0.65)' : 'rgba(255, 255, 255, 0.03)',
                    border: isLight ? '1px solid rgba(15, 23, 42, 0.06)' : '1px solid rgba(255, 255, 255, 0.06)',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.76rem', color: isLight ? '#64748b' : '#94a3b8' }}>
                      <Clock size={13} style={{ color: isLight ? '#008a75' : '#5EC098' }} />
                      <span>Timeline:</span>
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, marginTop: '0.15rem' }}>
                      ~{calculatedWeeks} Weeks
                    </div>
                    <div style={{ fontSize: '0.72rem', color: isLight ? '#008a75' : '#2dd4bf', fontWeight: 600 }}>
                      {estimatedSprints} Agile Sprints
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.76rem', color: isLight ? '#64748b' : '#94a3b8' }}>
                      <Users size={13} style={{ color: isLight ? '#008a75' : '#5EC098' }} />
                      <span>Squad Size:</span>
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, marginTop: '0.15rem' }}>
                      3&ndash;4 Engineers
                    </div>
                    <div style={{ fontSize: '0.72rem', color: isLight ? '#64748b' : '#94a3b8' }}>
                      Lead + Devs + QA
                    </div>
                  </div>
                </div>

                {/* Selected Spec Summary List */}
                <div style={{ marginBottom: '1.5rem', fontSize: '0.84rem' }}>
                  <div style={{ fontWeight: 700, marginBottom: '0.65rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Configured Architecture:</span>
                    <span style={{ color: isLight ? '#008a75' : '#5EC098' }}>{currentArchetype.label}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', color: isLight ? '#475569' : '#94a3b8', fontSize: '0.8rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Check size={14} style={{ color: isLight ? '#008a75' : '#5EC098' }} />
                      <span>{selectedFeatures.length} Modular Microservices & Integrations</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Check size={14} style={{ color: isLight ? '#008a75' : '#5EC098' }} />
                      <span>100% Client IP Assignment & Git Source Ownership</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Check size={14} style={{ color: isLight ? '#008a75' : '#5EC098' }} />
                      <span>2-Week Risk-Free Evaluation Period Included</span>
                    </div>
                  </div>
                </div>

                {/* Consultation & Lock-In Form */}
                {!submitted ? (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>
                      Lock In This Estimate & Get Full Architecture Plan:
                    </div>

                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: isLight ? '1px solid rgba(15, 23, 42, 0.15)' : '1px solid rgba(255, 255, 255, 0.12)',
                        background: isLight ? '#ffffff' : 'rgba(0, 0, 0, 0.25)',
                        color: 'inherit',
                        fontSize: '0.88rem',
                        outline: 'none',
                      }}
                    />

                    <input
                      type="email"
                      required
                      placeholder="Work Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: isLight ? '1px solid rgba(15, 23, 42, 0.15)' : '1px solid rgba(255, 255, 255, 0.12)',
                        background: isLight ? '#ffffff' : 'rgba(0, 0, 0, 0.25)',
                        color: 'inherit',
                        fontSize: '0.88rem',
                        outline: 'none',
                      }}
                    />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <input
                        type="tel"
                        placeholder="Phone / WhatsApp"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          padding: '0.75rem 1rem',
                          borderRadius: '10px',
                          border: isLight ? '1px solid rgba(15, 23, 42, 0.15)' : '1px solid rgba(255, 255, 255, 0.12)',
                          background: isLight ? '#ffffff' : 'rgba(0, 0, 0, 0.25)',
                          color: 'inherit',
                          fontSize: '0.88rem',
                          outline: 'none',
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          padding: '0.75rem 1rem',
                          borderRadius: '10px',
                          border: isLight ? '1px solid rgba(15, 23, 42, 0.15)' : '1px solid rgba(255, 255, 255, 0.12)',
                          background: isLight ? '#ffffff' : 'rgba(0, 0, 0, 0.25)',
                          color: 'inherit',
                          fontSize: '0.88rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.65rem',
                        padding: '0.95rem 1.5rem',
                        borderRadius: '12px',
                        background: isLight
                          ? 'linear-gradient(135deg, #008a75 0%, #476D9A 100%)'
                          : 'linear-gradient(135deg, #5EC098 0%, #476D9A 100%)',
                        color: '#ffffff',
                        border: 'none',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        boxShadow: '0 4px 20px rgba(94, 192, 152, 0.25)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        marginTop: '0.35rem',
                      }}
                    >
                      <span>{isSubmitting ? 'Generating Roadmap...' : 'Lock In Estimate & Get Full Plan'}</span>
                      <ArrowRight size={16} />
                    </button>

                    <div style={{ textAlign: 'center', fontSize: '0.72rem', color: isLight ? '#64748b' : '#94a3b8', marginTop: '0.25rem' }}>
                      Protected by strict mutual NDA &bull; 4-hour direct response SLA
                    </div>
                  </form>
                ) : (
                  <div
                    style={{
                      padding: '1.75rem 1.25rem',
                      borderRadius: '14px',
                      background: isLight ? 'rgba(0, 168, 143, 0.12)' : 'rgba(94, 192, 152, 0.15)',
                      border: isLight ? '1.5px solid rgba(0, 168, 143, 0.35)' : '1.5px solid rgba(94, 192, 152, 0.45)',
                      textAlign: 'center',
                    }}
                  >
                    <CheckCircle2 size={42} style={{ color: isLight ? '#008a75' : '#5EC098', margin: '0 auto 0.75rem auto' }} />
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                      Estimate Confirmed, {formData.name || 'Partner'}!
                    </div>
                    <p style={{ fontSize: '0.85rem', color: isLight ? '#475569' : '#cbd5e1', lineHeight: 1.5, marginBottom: '1.1rem' }}>
                      Our solutions architect is preparing your comprehensive sprint decomposition and milestone roadmap. 
                      You will receive the PDF & strategy calendar link at <strong>{formData.email}</strong> within 4 business hours.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <a
                        href={companyData.contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          padding: '0.75rem 1rem',
                          borderRadius: '10px',
                          background: '#25D366',
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          textDecoration: 'none',
                        }}
                      >
                        <PhoneCall size={15} />
                        <span>Instant WhatsApp Direct Chat</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: isLight ? '#64748b' : '#94a3b8',
                          fontSize: '0.78rem',
                          cursor: 'pointer',
                          padding: '0.4rem',
                        }}
                      >
                        Modify Configuration Specs
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. AGILE MILESTONE DELIVERY ROADMAP: 4-PHASE SPRINT MATRIX            */}
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
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: isLight ? '#008a75' : '#2dd4bf',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '0.85rem',
              }}
            >
              <Workflow size={16} />
              <span>Predictable Engineering Cadence</span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.95rem, 3.8vw, 2.75rem)', fontWeight: 800, margin: '0 0 1rem 0' }}>
              How We Turn Scopes Into Production Deployments
            </h2>
            <p style={{ color: isLight ? '#64748b' : '#94a3b8', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
              Every Opash build follows our battle-tested 4-phase agile delivery pipeline with zero ambiguity, 
              strict bi-weekly sprint deliverables, and live staging demonstrations.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                step: '01',
                title: 'Architecture Blueprint & Sprint Decomposition',
                time: 'Days 1 &ndash; 5',
                desc: 'Detailed schema models, API contracts, third-party dependency mapping, and Jira sprint backlog setup.',
                deliverable: 'Complete Technical Architecture Specification & Backlog',
              },
              {
                step: '02',
                title: 'Iterative Bi-Weekly Sprints & Staging Demos',
                time: 'Weeks 2 &ndash; 6',
                desc: 'Continuous code pushes to private Git repo, daily Slack standups, and deployable working demos every 14 days.',
                deliverable: 'Working Demo URL & Bi-Weekly Sprint Sign-Off',
              },
              {
                step: '03',
                title: 'Playwright Automated QA & Security Audits',
                time: 'Weeks 7 &ndash; 8',
                desc: 'End-to-end automated test suites, OWASP Top 10 security pen-testing, load testing, and edge-case hardening.',
                deliverable: 'Zero Critical Defects & Verified Test Matrix',
              },
              {
                step: '04',
                title: 'Production Cutover & 30-Day Warranty',
                time: 'Launch & Post-Go-Live',
                desc: 'Zero-downtime deployment to your AWS/GCP cloud, full DNS configuration, documentation handover, and free warranty.',
                deliverable: 'Production System Live + 30-Day Support Warranty',
              },
            ].map((phase, idx) => (
              <div
                key={idx}
                style={{
                  background: isLight ? '#ffffff' : 'rgba(3, 10, 24, 0.75)',
                  border: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '18px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isLight ? '0 4px 20px rgba(15, 23, 42, 0.04)' : '0 10px 30px rgba(0, 0, 0, 0.3)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span
                      style={{
                        fontSize: '2.25rem',
                        fontWeight: 900,
                        color: isLight ? '#008a75' : '#5EC098',
                        lineHeight: 1,
                      }}
                    >
                      {phase.step}
                    </span>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        background: isLight ? 'rgba(0, 168, 143, 0.1)' : 'rgba(94, 192, 152, 0.15)',
                        color: isLight ? '#008a75' : '#2dd4bf',
                      }}
                    >
                      {phase.time}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.65rem' }}>
                    {phase.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: isLight ? '#64748b' : '#94a3b8', lineHeight: 1.55, margin: 0 }}>
                    {phase.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: isLight ? '1px solid rgba(15, 23, 42, 0.06)' : '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '0.78rem',
                  }}
                >
                  <span style={{ color: isLight ? '#008a75' : '#5EC098', fontWeight: 700 }}>Key Deliverable: </span>
                  <span style={{ color: isLight ? '#475569' : '#cbd5e1' }}>{phase.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. TRANSPARENT ENGAGEMENT COMPARISON TABLE                            */}
      {/* ===================================================================== */}
      <section style={{ position: 'relative', padding: '5.5rem 1.5rem' }}>
        <div className="container-custom" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            <h2 style={{ fontSize: 'clamp(1.95rem, 3.8vw, 2.75rem)', fontWeight: 800, margin: '0 0 1rem 0' }}>
              Why Global Founders Choose Opash
            </h2>
            <p style={{ color: isLight ? '#64748b' : '#94a3b8', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
              Compare how our dedicated Surat engineering team performs against traditional in-house hiring and legacy agencies.
            </p>
          </div>

          <div
            style={{
              overflowX: 'auto',
              borderRadius: '20px',
              border: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)',
              background: isLight ? '#ffffff' : 'rgba(4, 15, 36, 0.65)',
              boxShadow: isLight ? '0 10px 40px rgba(15, 23, 42, 0.04)' : '0 20px 50px rgba(0, 0, 0, 0.4)',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '650px' }}>
              <thead>
                <tr style={{ borderBottom: isLight ? '2px solid rgba(15, 23, 42, 0.08)' : '2px solid rgba(255, 255, 255, 0.08)' }}>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.9rem', fontWeight: 700 }}>Comparison Criteria</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.95rem', fontWeight: 800, color: isLight ? '#008a75' : '#5EC098', background: isLight ? 'rgba(0, 168, 143, 0.06)' : 'rgba(94, 192, 152, 0.1)' }}>
                    Opash Dedicated Squad
                  </th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.9rem', fontWeight: 600, color: isLight ? '#64748b' : '#94a3b8' }}>In-House Western Hiring</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.9rem', fontWeight: 600, color: isLight ? '#64748b' : '#94a3b8' }}>Traditional Agency</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    metric: 'Kickoff Speed',
                    opash: '48 – 72 Hours',
                    inhouse: '60 – 90 Days',
                    agency: '3 – 6 Weeks',
                  },
                  {
                    metric: 'Cost Structure',
                    opash: '60%–70% More Capital Efficient',
                    inhouse: '$180k+/yr + Equity & Benefits',
                    agency: '$175–$250/hr with markups',
                  },
                  {
                    metric: 'Risk Guarantee',
                    opash: '2-Week Risk-Free Trial Period',
                    inhouse: 'Severance & recruiter lock-in',
                    agency: 'Strict non-refundable retainers',
                  },
                  {
                    metric: 'IP & Code Ownership',
                    opash: '100% Yours from Day 1',
                    inhouse: '100% Yours',
                    agency: 'Often retained until full settlement',
                  },
                  {
                    metric: 'Team Flexibility',
                    opash: 'Scale squad up/down with 14-day notice',
                    inhouse: 'Rigid long-term commitments',
                    agency: 'Fixed resource minimums',
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: isLight ? '1px solid rgba(15, 23, 42, 0.05)' : '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <td style={{ padding: '1.1rem 1.5rem', fontWeight: 600, fontSize: '0.88rem' }}>{row.metric}</td>
                    <td style={{ padding: '1.1rem 1.5rem', fontWeight: 700, fontSize: '0.88rem', color: isLight ? '#008a75' : '#2dd4bf', background: isLight ? 'rgba(0, 168, 143, 0.03)' : 'rgba(94, 192, 152, 0.05)' }}>
                      {row.opash}
                    </td>
                    <td style={{ padding: '1.1rem 1.5rem', fontSize: '0.85rem', color: isLight ? '#64748b' : '#94a3b8' }}>{row.inhouse}</td>
                    <td style={{ padding: '1.1rem 1.5rem', fontSize: '0.85rem', color: isLight ? '#64748b' : '#94a3b8' }}>{row.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. FREQUENTLY ASKED QUESTIONS (ACCORDION)                             */}
      {/* ===================================================================== */}
      <section
        style={{
          position: 'relative',
          padding: '5rem 1.5rem 6.5rem 1.5rem',
          background: isLight ? '#f8fafc' : '#020712',
        }}
      >
        <div className="container-custom" style={{ maxWidth: '860px', margin: '0 auto' }}>
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
            <h2 style={{ fontSize: 'clamp(1.95rem, 3.5vw, 2.6rem)', fontWeight: 800, margin: '0.5rem 0 0 0' }}>
              Common Questions About Project Scoping
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

          {/* Bottom Direct Architect Call CTA */}
          <div
            style={{
              marginTop: '4rem',
              padding: '2.5rem',
              borderRadius: '20px',
              background: isLight
                ? 'linear-gradient(135deg, rgba(0, 168, 143, 0.08) 0%, rgba(71, 109, 154, 0.08) 100%)'
                : 'linear-gradient(135deg, rgba(94, 192, 152, 0.12) 0%, rgba(71, 109, 154, 0.18) 100%)',
              border: isLight ? '1px solid rgba(0, 168, 143, 0.25)' : '1px solid rgba(94, 192, 152, 0.35)',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Prefer A Direct Technical Discussion?
            </h3>
            <p style={{ color: isLight ? '#64748b' : '#94a3b8', maxWidth: '600px', margin: '0 auto 1.5rem auto', fontSize: '0.95rem' }}>
              Schedule a 30-minute feasibility session directly with our Lead Architect to review existing codebases, 
              API specs, and sprint timelines.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.65rem',
                  borderRadius: '12px',
                  background: isLight ? '#008a75' : '#5EC098',
                  color: isLight ? '#ffffff' : '#01040a',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(94, 192, 152, 0.3)',
                }}
              >
                <Calendar size={16} />
                <span>Book Architecture Call</span>
              </Link>
              <a
                href={companyData.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.65rem',
                  borderRadius: '12px',
                  background: isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.06)',
                  color: isLight ? '#0f172a' : '#f8fafc',
                  border: isLight ? '1px solid rgba(15, 23, 42, 0.15)' : '1px solid rgba(255, 255, 255, 0.15)',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                }}
              >
                <PhoneCall size={16} />
                <span>Instant WhatsApp Query</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
