'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import {
  Trophy,
  Users,
  Rocket,
  Zap,
  Award,
  CheckCircle2,
} from 'lucide-react';

interface AchievementStat {
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number; color?: string }>;
  count: string;
  label: string;
  pillarNum: string;
  pillarTag: string;
  accentColor: string;
  accentRgb: string;
  gradientText: string;
  specPill: string;
  detail: string;
}

const STATS_DATA: AchievementStat[] = [
  {
    icon: Users,
    count: '100%',
    label: 'In-House Software Developers',
    pillarNum: '01',
    pillarTag: 'ENGINEERING TEAM',
    accentColor: '#00A88F',
    accentRgb: '0, 168, 143',
    gradientText: 'linear-gradient(135deg, #00ffd1 0%, #00A88F 100%)',
    specPill: 'Vetted Top 1% Engineers',
    detail: 'Full-Stack, Mobile & AI Solutions Specialists',
  },
  {
    icon: Rocket,
    count: '70+',
    label: 'Custom Software Projects Delivered',
    pillarNum: '02',
    pillarTag: 'PRODUCTION PLATFORMS',
    accentColor: '#2563EB',
    accentRgb: '37, 99, 235',
    gradientText: 'linear-gradient(135deg, #38bdf8 0%, #2563EB 100%)',
    specPill: '100% On-Time Sprints',
    detail: 'Global Startups, Scale-ups & Enterprises',
  },
  {
    icon: Zap,
    count: '12,000+',
    label: 'Hours of Project Execution',
    pillarNum: '03',
    pillarTag: 'SPRINT VELOCITY',
    accentColor: '#8B5CF6',
    accentRgb: '139, 92, 246',
    gradientText: 'linear-gradient(135deg, #c084fc 0%, #8B5CF6 100%)',
    specPill: 'Agile CI/CD Cadence',
    detail: 'Zero-Downtime Deployment Lifecycle',
  },
  {
    icon: Award,
    count: '8+',
    label: 'Years of Industry Experience in IT',
    pillarNum: '04',
    pillarTag: 'ENTERPRISE MATURITY',
    accentColor: '#F59E0B',
    accentRgb: '245, 158, 11',
    gradientText: 'linear-gradient(135deg, #fde047 0%, #F59E0B 100%)',
    specPill: 'ISO-Grade Reliability',
    detail: 'Established Global Technology Partner',
  },
];

export default function OurAchievementsSection() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="our-achievements"
      aria-label="Our Achievements"
      style={{
        position: 'relative',
        padding: '6.5rem 0 7rem 0',
        background: isLight
          ? 'linear-gradient(180deg, rgba(248, 250, 252, 0.7) 0%, #ffffff 30%, #ffffff 70%, rgba(248, 250, 252, 0.7) 100%)'
          : 'linear-gradient(180deg, rgba(10, 18, 34, 0.6) 0%, rgba(6, 14, 30, 0.95) 30%, rgba(8, 17, 36, 0.95) 70%, rgba(10, 18, 34, 0.6) 100%)',
        overflow: 'hidden',
        borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Horizon Accent Line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '85%',
          maxWidth: '1200px',
          height: '1px',
          background: isLight
            ? 'linear-gradient(90deg, transparent 0%, rgba(0, 168, 143, 0.6) 50%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(94, 192, 152, 0.8) 50%, transparent 100%)',
          boxShadow: isLight
            ? '0 0 12px rgba(0, 168, 143, 0.25)'
            : '0 0 20px rgba(94, 192, 152, 0.4)',
          zIndex: 1,
        }}
      />

      {/* Ambient Radial Backdrop Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: isLight
            ? 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 168, 143, 0.05) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(0, 168, 143, 0.12) 0%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Decorative Geometric Wireframes on Sides */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '420px',
          height: '420px',
          opacity: isLight ? 0.25 : 0.15,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <Image
          src="/images/achievements/achievement-bg1.png"
          alt=""
          fill
          sizes="420px"
          style={{ objectFit: 'contain', objectPosition: 'top left' }}
        />
      </div>

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '420px',
          height: '420px',
          opacity: isLight ? 0.25 : 0.15,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <Image
          src="/images/achievements/achievement-bg2.png"
          alt=""
          fill
          sizes="420px"
          style={{ objectFit: 'contain', objectPosition: 'bottom right' }}
        />
      </div>

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.75rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: isLight ? 'rgba(0, 168, 143, 0.08)' : 'rgba(0, 168, 143, 0.15)',
              border: isLight ? '1px solid rgba(0, 168, 143, 0.2)' : '1px solid rgba(0, 168, 143, 0.35)',
              marginBottom: '1rem',
            }}
          >
            <Trophy size={15} color={isLight ? '#008a75' : '#5EC098'} />
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 750,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: isLight ? '#008a75' : '#5EC098',
              }}
            >
              Enterprise Engineering Impact
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.1rem, 4vw, 3.1rem)',
              fontWeight: 850,
              letterSpacing: '-0.025em',
              color: isLight ? '#0f172a' : '#f8fafc',
              marginBottom: '0.9rem',
              lineHeight: 1.18,
            }}
          >
            Our{' '}
            <span className="opash-brand-gradient-text">
              Achievements
            </span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.25vw, 1.12rem)',
              lineHeight: 1.65,
              color: isLight ? '#64748b' : '#94a3b8',
              margin: '0 auto',
              maxWidth: '680px',
            }}
          >
            Verifiable milestones that reflect our passion for scalable software architecture, engineering discipline, and long-term client success.
          </p>
        </div>

        {/* 4 Modern Studio Bento Metric Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1240px',
            margin: '0 auto 3.75rem auto',
          }}
        >
          {STATS_DATA.map((stat, idx) => {
            const isHovered = hoveredIndex === idx;
            const IconComponent = stat.icon;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  padding: '2.25rem 1.85rem 1.85rem 1.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                  background: isLight
                    ? '#ffffff'
                    : isHovered
                      ? 'linear-gradient(180deg, rgba(20, 32, 58, 0.92) 0%, rgba(11, 20, 40, 0.98) 100%)'
                      : 'linear-gradient(180deg, rgba(14, 23, 44, 0.8) 0%, rgba(9, 16, 32, 0.9) 100%)',
                  border: isLight
                    ? isHovered
                      ? `1.5px solid ${stat.accentColor}`
                      : '1px solid #e2e8f0'
                    : isHovered
                      ? `1.5px solid ${stat.accentColor}`
                      : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isLight
                    ? isHovered
                      ? `0 20px 40px -12px rgba(${stat.accentRgb}, 0.2), 0 4px 16px rgba(0, 0, 0, 0.04)`
                      : '0 6px 24px -4px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)'
                    : isHovered
                      ? `0 20px 50px -10px rgba(${stat.accentRgb}, 0.32), inset 0 1px 1px rgba(255, 255, 255, 0.15)`
                      : '0 12px 35px -6px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.04)',
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  overflow: 'hidden',
                  cursor: 'default',
                }}
              >
                {/* Top Subtle Glowing Accent Beam */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: isHovered ? '3px' : '2px',
                    background: `linear-gradient(90deg, transparent 0%, ${stat.accentColor} 50%, transparent 100%)`,
                    opacity: isHovered ? 1 : 0.6,
                    boxShadow: isHovered ? `0 0 16px ${stat.accentColor}` : 'none',
                    transition: 'all 0.35s ease',
                    zIndex: 3,
                  }}
                />

                {/* Ambient Soft Glow on Hover */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '-20%',
                    left: '10%',
                    width: '180px',
                    height: '180px',
                    background: `radial-gradient(circle, rgba(${stat.accentRgb}, ${isHovered ? (isLight ? 0.14 : 0.22) : 0}) 0%, transparent 70%)`,
                    pointerEvents: 'none',
                    transition: 'background 0.35s ease',
                  }}
                />

                {/* 1. Top Row: Icon Capsule + Monospace Index */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginBottom: '1.5rem',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {/* Modern Sleek Squircle Icon Badge */}
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: isLight
                        ? isHovered
                          ? `linear-gradient(135deg, rgba(${stat.accentRgb}, 0.16) 0%, rgba(${stat.accentRgb}, 0.06) 100%)`
                          : `linear-gradient(135deg, rgba(${stat.accentRgb}, 0.1) 0%, rgba(${stat.accentRgb}, 0.03) 100%)`
                        : isHovered
                          ? `linear-gradient(135deg, rgba(${stat.accentRgb}, 0.28) 0%, rgba(${stat.accentRgb}, 0.12) 100%)`
                          : `linear-gradient(135deg, rgba(${stat.accentRgb}, 0.18) 0%, rgba(${stat.accentRgb}, 0.06) 100%)`,
                      border: `1.5px solid rgba(${stat.accentRgb}, ${isHovered ? 0.5 : (isLight ? 0.25 : 0.28)})`,
                      boxShadow: isHovered
                        ? `0 10px 22px -4px rgba(${stat.accentRgb}, 0.35)`
                        : 'none',
                      transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                      transition: 'all 0.32s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <IconComponent
                      size={24}
                      color={stat.accentColor}
                      strokeWidth={2.2}
                    />
                  </div>

                  {/* Sleek Monospace Numerical Badge */}
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                      color: isLight ? '#64748b' : 'rgba(255, 255, 255, 0.45)',
                      padding: '4px 9px',
                      borderRadius: '8px',
                      background: isLight ? '#f1f5f9' : 'rgba(255, 255, 255, 0.05)',
                      border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {stat.pillarNum}
                  </div>
                </div>

                {/* 2. Unwrapped Clean Pillar Eyebrow */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: stat.accentColor,
                    marginBottom: '0.65rem',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: stat.accentColor,
                      boxShadow: `0 0 8px ${stat.accentColor}`,
                      display: 'inline-block',
                      flexShrink: 0,
                    }}
                  />
                  <span>{stat.pillarTag}</span>
                </div>

                {/* 3. Hero Counter Number with Gradient */}
                <div
                  style={{
                    fontSize: 'clamp(2.7rem, 3.6vw, 3.3rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.035em',
                    lineHeight: 1.05,
                    marginBottom: '0.75rem',
                    position: 'relative',
                    zIndex: 2,
                    transition: 'all 0.3s ease',
                    ...(isLight
                      ? {
                          color: isHovered ? stat.accentColor : '#0f172a',
                          background: 'none',
                          WebkitBackgroundClip: 'unset',
                          backgroundClip: 'unset',
                          WebkitTextFillColor: isHovered ? stat.accentColor : '#0f172a',
                        }
                      : {
                          background: stat.gradientText,
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          color: stat.accentColor,
                        }),
                  }}
                >
                  {stat.count}
                </div>

                {/* 4. Stat Title Label */}
                <div
                  style={{
                    fontSize: '1.12rem',
                    fontWeight: 750,
                    color: isLight ? '#0f172a' : '#f8fafc',
                    lineHeight: 1.35,
                    marginBottom: '0.45rem',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {stat.label}
                </div>

                {/* 5. Context Detail Description */}
                <div
                  style={{
                    fontSize: '0.86rem',
                    fontWeight: 450,
                    color: isLight ? '#64748b' : '#94a3b8',
                    lineHeight: 1.55,
                    marginBottom: '1.75rem',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {stat.detail}
                </div>

                {/* 6. Clean Bottom Verification Row */}
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '1rem',
                    borderTop: isLight
                      ? '1px solid #f1f5f9'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <CheckCircle2
                    size={14}
                    color={stat.accentColor}
                    strokeWidth={2.5}
                    style={{ flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 650,
                      color: isLight ? '#475569' : '#cbd5e1',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {stat.specPill}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Executive Methodology Card Below */}
        <div
          style={{
            maxWidth: '980px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '2rem 2.5rem',
            borderRadius: '22px',
            background: isLight
              ? '#ffffff'
              : 'rgba(13, 21, 38, 0.7)',
            border: isLight
              ? '1px solid #e2e8f0'
              : '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: isLight
              ? '0 10px 30px -4px rgba(0, 0, 0, 0.04)'
              : '0 14px 40px -8px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.05)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '20%',
              right: '20%',
              height: '2px',
              background: isLight
                ? 'linear-gradient(90deg, transparent 0%, #00A88F 50%, transparent 100%)'
                : 'linear-gradient(90deg, transparent 0%, #5EC098 50%, transparent 100%)',
              opacity: 0.85,
            }}
          />

          <p
            style={{
              fontSize: 'clamp(1rem, 1.25vw, 1.12rem)',
              lineHeight: 1.75,
              color: isLight ? '#334155' : '#cbd5e1',
              margin: 0,
            }}
          >
            As a leading custom software development company in India, Opash Software empowers startups, SMEs, and enterprises with scalable Web, Mobile, and AI solutions. Our proven agile methodologies, expert team, and client-first approach ensure quality results and long-term success.
          </p>
        </div>
      </div>
    </section>
  );
}
