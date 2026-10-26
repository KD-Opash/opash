'use client';

import React, { useState } from 'react';
import { 
  Compass, 
  Layers, 
  Terminal, 
  ShieldCheck, 
  Rocket, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  Lock,
  FileCheck2,
  Users2,
  Calendar,
  Zap,
  Activity
} from 'lucide-react';

export interface LifecycleStageData {
  step: string;
  phase: string;
  duration: string;
  title: string;
  tagline: string;
  desc: string;
  accent: string;
  iconName: 'Compass' | 'Layers' | 'Terminal' | 'ShieldCheck' | 'Rocket';
  leadRole: string;
  gate: string;
  deliverables: string[];
  clientTouchpoint: string;
}

export const LIFECYCLE_STAGES: LifecycleStageData[] = [
  {
    step: '01',
    phase: 'PHASE 01',
    duration: 'Weeks 1–2',
    title: 'Discovery & Blueprinting',
    tagline: 'First-principles domain modeling, tech feasibility & risk elimination',
    desc: 'We analyze your business logic, workflow dependencies, transaction loads, data privacy requirements, and compliance frameworks to engineer a deterministic architecture plan.',
    accent: '#00bbab',
    iconName: 'Compass',
    leadRole: 'Principal Enterprise Architect',
    gate: 'Architecture & SLA Sign-Off Gate',
    deliverables: [
      'Software Requirements Spec (SRS)',
      'Domain ER & Schema Blueprint',
      'SOC-2 / HIPAA Compliance Matrix',
      'Guaranteed Fixed-Sprint SLA',
    ],
    clientTouchpoint: 'Daily interactive workshops & shared Miro architecture whiteboard',
  },
  {
    step: '02',
    phase: 'PHASE 02',
    duration: 'Weeks 3–4',
    title: 'Architecture & UI/UX Prototyping',
    tagline: 'High-fidelity interactive prototypes & strict API contracts',
    desc: 'Crafting wireframes, micro-interaction systems, and schema contracts. We decouple frontend and backend teams using strict OpenAPI/GraphQL specifications from day one.',
    accent: '#38bdf8',
    iconName: 'Layers',
    leadRole: 'Staff Product Designer & API Architect',
    gate: 'Interactive Prototype Usability Gate',
    deliverables: [
      'Click-Through Figma Prototype',
      'OpenAPI 3.0 & Protobuf Contracts',
      'Microservice Boundary Auth Models',
      'Terraform Infrastructure Scaffolding',
    ],
    clientTouchpoint: 'Bi-weekly design review & recorded Figma prototype walkthrough',
  },
  {
    step: '03',
    phase: 'PHASE 03',
    duration: 'Weeks 5–10',
    title: 'Agile Sprint Execution',
    tagline: 'Bi-weekly working software releases with 100% Git visibility',
    desc: 'Two-week agile sprints where code is continuously written, peer-reviewed, and deployed to isolated staging environments. You inspect real software every 14 days.',
    accent: '#10b981',
    iconName: 'Terminal',
    leadRole: 'Senior Scrum Engineering Team',
    gate: 'Bi-Weekly Sprint Demo Acceptance',
    deliverables: [
      'Bi-Weekly Staging Releases with Demos',
      'Direct GitHub/GitLab PR Visibility',
      'Automated Unit & Integration Tests (>90%)',
      'Isolated Staging Sandbox for Client QA',
    ],
    clientTouchpoint: 'Live demo every other Thursday & direct shared Slack/Teams channel',
  },
  {
    step: '04',
    phase: 'PHASE 04',
    duration: 'Weeks 11–12',
    title: 'Automated QA & Security Audits',
    tagline: 'Chaos engineering, penetration tests & high-concurrency benchmarks',
    desc: 'We stress-test your system against 100,000+ simulated concurrent requests, execute OWASP Top 10 penetration audits, and verify zero critical vulnerabilities before production.',
    accent: '#818cf8',
    iconName: 'ShieldCheck',
    leadRole: 'Staff QA Engineer & Cyber Security Auditor',
    gate: 'Zero-Vulnerability Security Sign-Off',
    deliverables: [
      'OWASP Top 10 Pen-Test Audit Report',
      'Concurrency Stress Benchmark (100k+ RPS)',
      'Zero Critical Vulnerability Guarantee',
      'Disaster Recovery & Multi-Region Plan',
    ],
    clientTouchpoint: 'Detailed security report walkthrough & hardening executive debrief',
  },
  {
    step: '05',
    phase: 'PHASE 05',
    duration: 'Week 13+',
    title: 'Cloud Deployment & Handover',
    tagline: 'Zero-downtime blue-green rollout with 100% legal IP transfer',
    desc: 'Production launch with zero downtime, full observability dashboards, root Git repository handover, and comprehensive team runbooks with post-launch SLA coverage.',
    accent: '#f59e0b',
    iconName: 'Rocket',
    leadRole: 'DevOps Director & Client Solutions Architect',
    gate: 'Production Cutover & Full Legal IP Transfer',
    deliverables: [
      'Zero-Downtime Blue/Green Production Cutover',
      '100% Git Repository & License Handover',
      'Full Architectural Runbooks & Video Training',
      '24/7 Production SLA & Post-Launch Support',
    ],
    clientTouchpoint: 'Go-live war room coordination & engineering handover workshops',
  },
];

interface EnterpriseDeliveryLifecycleProps {
  isLightMode?: boolean;
}

export default function EnterpriseDeliveryLifecycle({ isLightMode = false }: EnterpriseDeliveryLifecycleProps) {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = LIFECYCLE_STAGES[activeStageIndex];

  const getStageIcon = (iconName: string, size = 20) => {
    switch (iconName) {
      case 'Compass':
        return <Compass size={size} />;
      case 'Layers':
        return <Layers size={size} />;
      case 'Terminal':
        return <Terminal size={size} />;
      case 'ShieldCheck':
        return <ShieldCheck size={size} />;
      case 'Rocket':
        return <Rocket size={size} />;
      default:
        return <Activity size={size} />;
    }
  };

  return (
    <section
      style={{
        position: 'relative',
        padding: '6rem 1.5rem',
        overflow: 'hidden',
        background: isLightMode
          ? 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 50%, #f8fafc 100%)'
          : 'linear-gradient(180deg, #020712 0%, #050e1f 50%, #020712 100%)',
        transition: 'background 0.3s ease',
      }}
    >
      {/* Subtle Background Circuit Glows */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '900px',
            height: '450px',
            background: isLightMode
              ? `radial-gradient(ellipse 60% 50% at 50% 50%, ${currentStage.accent}14 0%, transparent 70%)`
              : `radial-gradient(ellipse 65% 55% at 50% 50%, ${currentStage.accent}20 0%, transparent 70%)`,
            transition: 'background 0.5s ease',
            filter: 'blur(40px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: isLightMode
              ? 'radial-gradient(#cbd5e1 1px, transparent 1px)'
              : 'radial-gradient(#1e293b 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            opacity: isLightMode ? 0.4 : 0.25,
            maskImage: 'radial-gradient(ellipse 75% 65% at 50% 40%, black 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 40%, black 40%, transparent 80%)',
          }}
        />
      </div>

      <div className="container-custom" style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 3.5rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: isLightMode ? '#008a75' : '#2dd4bf',
              marginBottom: '0.85rem',
            }}
          >
            <Sparkles size={16} />
            <span>Verified Production Governance &bull; Fixed-Sprint Deliverables</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.18,
              marginBottom: '1.1rem',
              color: isLightMode ? '#0f172a' : '#f8fafc',
            }}
          >
            Deterministic Software Delivery,{' '}
            <span className="opash-hero-gradient-text">Engineered Stage by Stage</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.98rem, 1.4vw, 1.15rem)',
              lineHeight: 1.65,
              color: isLightMode ? '#475569' : '#94a3b8',
              margin: '0 auto',
            }}
          >
            From first-principles architecture to zero-downtime cutover, you receive direct GitHub visibility, isolated staging sandboxes, and verified production quality gates every 14 days.
          </p>
        </div>

        {/* ================================================================= */}
        {/* UNIFIED INTERACTIVE PIPELINE TRACK (Connected Progress Rail)      */}
        {/* ================================================================= */}
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto 3rem auto',
            padding: '1.25rem 1.75rem',
            borderRadius: '20px',
            background: isLightMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(10, 20, 36, 0.75)',
            border: isLightMode ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(16px)',
            boxShadow: isLightMode
              ? '0 10px 30px rgba(0, 0, 0, 0.04)'
              : '0 15px 40px rgba(0, 0, 0, 0.35)',
            position: 'relative',
            overflowX: 'auto',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              alignItems: 'center',
              position: 'relative',
              minWidth: '640px',
            }}
          >
            {/* Connecting Base Rail */}
            <div
              style={{
                position: 'absolute',
                left: '10%',
                right: '10%',
                top: '24px',
                height: '3px',
                background: isLightMode ? '#e2e8f0' : 'rgba(255, 255, 255, 0.1)',
                zIndex: 1,
              }}
            />

            {/* Glowing Active Progress Conduit */}
            <div
              style={{
                position: 'absolute',
                left: '10%',
                width: `${(activeStageIndex / 4) * 80}%`,
                top: '24px',
                height: '3px',
                background: `linear-gradient(90deg, #00bbab 0%, ${currentStage.accent} 100%)`,
                boxShadow: `0 0 14px ${currentStage.accent}99`,
                transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                zIndex: 2,
              }}
            />

            {LIFECYCLE_STAGES.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              const isPassed = activeStageIndex > idx;

              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStageIndex(idx)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 3,
                    padding: '0.35rem',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  {/* Step Node Circle */}
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: isActive
                        ? stage.accent
                        : isPassed
                        ? isLightMode ? '#008a75' : '#2dd4bf'
                        : isLightMode ? '#ffffff' : '#0c182c',
                      color: isActive || isPassed
                        ? '#ffffff'
                        : isLightMode ? '#64748b' : '#94a3b8',
                      border: isActive
                        ? `3px solid ${isLightMode ? '#ffffff' : '#020712'}`
                        : `2px solid ${isPassed ? (isLightMode ? '#008a75' : '#2dd4bf') : isLightMode ? '#cbd5e1' : 'rgba(255, 255, 255, 0.15)'}`,
                      boxShadow: isActive
                        ? `0 0 20px ${stage.accent}88, 0 0 0 4px ${stage.accent}33`
                        : 'none',
                      transition: 'all 0.3s ease',
                      fontWeight: 800,
                      fontSize: '0.88rem',
                    }}
                  >
                    {isPassed ? <CheckCircle2 size={20} /> : stage.step}
                  </div>

                  {/* Stage Phase Title & Duration */}
                  <span
                    style={{
                      marginTop: '0.65rem',
                      fontSize: '0.78rem',
                      fontWeight: isActive ? 800 : 600,
                      color: isActive
                        ? stage.accent
                        : isLightMode ? '#334155' : '#94a3b8',
                      textAlign: 'center',
                      whiteSpace: 'nowrap',
                      transition: 'color 0.25s ease',
                    }}
                  >
                    {stage.title.split(' ')[0]}
                  </span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontFamily: 'monospace',
                      fontWeight: 600,
                      color: isLightMode ? '#64748b' : '#64748b',
                    }}
                  >
                    {stage.duration}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================================= */}
        {/* 5-STAGE BENTO CARDS GRID (Redesigned with Luxury Proportions)      */}
        {/* ================================================================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          {LIFECYCLE_STAGES.map((stage, idx) => {
            const isActive = activeStageIndex === idx;

            return (
              <div
                key={stage.step}
                onClick={() => setActiveStageIndex(idx)}
                style={{
                  position: 'relative',
                  padding: '1.6rem 1.35rem',
                  borderRadius: '20px',
                  background: isActive
                    ? isLightMode
                      ? 'linear-gradient(180deg, #ffffff 0%, rgba(240, 253, 250, 0.8) 100%)'
                      : `linear-gradient(180deg, rgba(14, 28, 48, 0.95) 0%, rgba(8, 18, 34, 0.95) 100%)`
                    : isLightMode
                    ? 'rgba(255, 255, 255, 0.85)'
                    : 'rgba(10, 20, 36, 0.65)',
                  border: isActive
                    ? `2px solid ${stage.accent}`
                    : isLightMode
                    ? '1px solid #e2e8f0'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isActive
                    ? `0 14px 35px -8px ${stage.accent}40, 0 0 0 1px ${stage.accent}44`
                    : isLightMode
                    ? '0 4px 18px rgba(0, 0, 0, 0.03)'
                    : '0 6px 22px rgba(0, 0, 0, 0.28)',
                  backdropFilter: 'blur(14px)',
                  cursor: 'pointer',
                  transform: isActive ? 'translateY(-6px)' : 'translateY(0)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                }}
              >
                {/* Top Accent Strip */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: stage.accent,
                    boxShadow: isActive ? `0 0 16px ${stage.accent}` : 'none',
                  }}
                />

                {/* Subtle Background Watermark Number */}
                <div
                  style={{
                    position: 'absolute',
                    right: '-6px',
                    bottom: '-12px',
                    fontSize: '6.5rem',
                    fontWeight: 900,
                    fontFamily: 'monospace',
                    color: isActive
                      ? `${stage.accent}14`
                      : isLightMode
                      ? 'rgba(0, 0, 0, 0.03)'
                      : 'rgba(255, 255, 255, 0.03)',
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  {stage.step}
                </div>

                <div>
                  {/* Card Header: Icon & Duration Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: isActive
                          ? `${stage.accent}24`
                          : isLightMode ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.06)',
                        border: `1px solid ${isActive ? stage.accent : isLightMode ? '#cbd5e1' : 'rgba(255, 255, 255, 0.1)'}`,
                        color: stage.accent,
                        boxShadow: isActive ? `0 0 16px ${stage.accent}44` : 'none',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {getStageIcon(stage.iconName, 22)}
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          letterSpacing: '0.06em',
                          color: stage.accent,
                          textTransform: 'uppercase',
                        }}
                      >
                        STAGE {stage.step}
                      </div>
                      <div
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          color: isLightMode ? '#64748b' : '#94a3b8',
                          fontFamily: 'monospace',
                        }}
                      >
                        {stage.duration}
                      </div>
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h3
                    style={{
                      fontSize: '1.18rem',
                      fontWeight: 700,
                      marginBottom: '0.45rem',
                      lineHeight: 1.3,
                      color: isActive
                        ? isLightMode ? '#0f172a' : '#ffffff'
                        : isLightMode ? '#1e293b' : '#f1f5f9',
                    }}
                  >
                    {stage.title}
                  </h3>

                  {/* Tagline / Value Proposition */}
                  <p
                    style={{
                      color: isLightMode ? '#64748b' : '#94a3b8',
                      fontSize: '0.84rem',
                      lineHeight: 1.55,
                      marginBottom: '1.2rem',
                    }}
                  >
                    {stage.desc}
                  </p>
                </div>

                <div>
                  {/* Key Deliverables Pills (Sleek, Compact, High-Tech) */}
                  <div style={{ marginBottom: '1.15rem' }}>
                    <div
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: isLightMode ? '#94a3b8' : '#64748b',
                        marginBottom: '0.55rem',
                      }}
                    >
                      Key Deliverables:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {stage.deliverables.slice(0, 3).map((item, dIdx) => (
                        <div
                          key={dIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            fontSize: '0.79rem',
                            color: isLightMode ? '#334155' : '#cbd5e1',
                            lineHeight: 1.35,
                          }}
                        >
                          <CheckCircle2
                            size={14}
                            style={{
                              color: stage.accent,
                              flexShrink: 0,
                            }}
                          />
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quality Gate Footer Button */}
                  <div
                    style={{
                      padding: '0.5rem 0.8rem',
                      borderRadius: '10px',
                      background: isActive
                        ? `${stage.accent}14`
                        : isLightMode ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${isActive ? `${stage.accent}44` : isLightMode ? '#e2e8f0' : 'rgba(255, 255, 255, 0.07)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: stage.accent,
                    }}
                  >
                    <span>{stage.gate.split(' ')[0]} Gate</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================================================================= */}
        {/* INTERACTIVE STAGE DEEP-DIVE COMMAND HUD (Redesigned 3-Col Console) */}
        {/* ================================================================= */}
        <div
          style={{
            borderRadius: '24px',
            background: isLightMode ? '#ffffff' : 'rgba(8, 16, 30, 0.92)',
            border: isLightMode
              ? `1px solid ${currentStage.accent}44`
              : `1px solid ${currentStage.accent}55`,
            boxShadow: isLightMode
              ? `0 20px 50px -10px ${currentStage.accent}20`
              : `0 25px 60px -15px ${currentStage.accent}35`,
            backdropFilter: 'blur(20px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Console Header Bar */}
          <div
            style={{
              padding: '0.9rem 1.6rem',
              borderBottom: isLightMode ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: isLightMode ? '#f8fafc' : 'rgba(5, 11, 22, 0.95)',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
              </div>
              <span
                style={{
                  fontSize: '0.82rem',
                  fontFamily: 'monospace',
                  color: isLightMode ? '#64748b' : '#94a3b8',
                  marginLeft: '0.5rem',
                }}
              >
                gov://opash/stage-0{activeStageIndex + 1}/{currentStage.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.spec
              </span>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: currentStage.accent,
                background: `${currentStage.accent}14`,
                padding: '0.3rem 0.85rem',
                borderRadius: '9999px',
                border: `1px solid ${currentStage.accent}33`,
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: currentStage.accent,
                  boxShadow: `0 0 8px ${currentStage.accent}`,
                }}
              />
              <span>AUDITED GOVERNANCE PROTOCOL</span>
            </div>
          </div>

          {/* 3-Column Command Center Layout */}
          <div
            style={{
              padding: '2.5rem 2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {/* Column 1: Stage Identity & Client Touchpoints */}
            <div>
              <div
                style={{
                  display: 'inline-block',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  color: currentStage.accent,
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}
              >
                {currentStage.phase} &bull; {currentStage.duration}
              </div>

              <h3
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.22,
                  marginBottom: '0.75rem',
                  color: isLightMode ? '#0f172a' : '#ffffff',
                }}
              >
                {currentStage.title}
              </h3>

              <p
                style={{
                  fontSize: '0.94rem',
                  color: isLightMode ? '#475569' : '#94a3b8',
                  lineHeight: 1.6,
                  marginBottom: '1.75rem',
                }}
              >
                {currentStage.tagline}
              </p>

              <div
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '14px',
                  background: isLightMode ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.04)',
                  border: isLightMode ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: currentStage.accent,
                    marginBottom: '0.4rem',
                  }}
                >
                  <Users2 size={16} />
                  <span>Lead Engineering Role:</span>
                </div>
                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: isLightMode ? '#0f172a' : '#f8fafc',
                  }}
                >
                  {currentStage.leadRole}
                </div>
              </div>
            </div>

            {/* Column 2: Verified Artifacts & Contract Deliverables */}
            <div>
              <div
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: isLightMode ? '#64748b' : '#94a3b8',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <FileCheck2 size={16} style={{ color: currentStage.accent }} />
                <span>Verified Deliverable Artifacts:</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {currentStage.deliverables.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      background: isLightMode ? '#f8fafc' : 'rgba(15, 23, 42, 0.6)',
                      border: isLightMode ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} style={{ color: currentStage.accent, flexShrink: 0 }} />
                      <span
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: isLightMode ? '#1e293b' : '#e2e8f0',
                        }}
                      >
                        {item}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        fontFamily: 'monospace',
                        color: currentStage.accent,
                        background: `${currentStage.accent}14`,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '6px',
                        flexShrink: 0,
                      }}
                    >
                      VERIFIED
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Quality Gate Sign-Off & Stage Progression */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.5rem',
                borderRadius: '16px',
                background: isLightMode
                  ? 'rgba(0, 0, 0, 0.02)'
                  : 'rgba(255, 255, 255, 0.03)',
                border: isLightMode
                  ? '1px solid #e2e8f0'
                  : '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: currentStage.accent,
                    marginBottom: '0.85rem',
                  }}
                >
                  <Lock size={16} />
                  <span>Mandatory Quality Gate:</span>
                </div>

                <div
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    lineHeight: 1.4,
                    color: isLightMode ? '#0f172a' : '#f8fafc',
                    marginBottom: '1rem',
                  }}
                >
                  {currentStage.gate}
                </div>

                <p
                  style={{
                    fontSize: '0.84rem',
                    lineHeight: 1.55,
                    color: isLightMode ? '#64748b' : '#94a3b8',
                    marginBottom: '1.5rem',
                  }}
                >
                  Client Collaboration: {currentStage.clientTouchpoint}
                </p>
              </div>

              {/* Next Stage Navigation Button */}
              <button
                onClick={() =>
                  setActiveStageIndex((prev) => (prev + 1) % LIFECYCLE_STAGES.length)
                }
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  width: '100%',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '12px',
                  background: isLightMode
                    ? `linear-gradient(135deg, ${currentStage.accent} 0%, #0284c7 100%)`
                    : `linear-gradient(135deg, ${currentStage.accent} 0%, #38bdf8 100%)`,
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: `0 8px 24px -4px ${currentStage.accent}66`,
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <span>
                  {activeStageIndex === LIFECYCLE_STAGES.length - 1
                    ? 'Review Lifecycle from Stage 01'
                    : `Advance to Stage 0${activeStageIndex + 2} (${LIFECYCLE_STAGES[activeStageIndex + 1]?.title.split(' ')[0]})`}
                </span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
