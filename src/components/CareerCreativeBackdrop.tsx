'use client';

import React from 'react';

interface CareerCreativeBackdropProps {
  isLightMode?: boolean;
}

/**
 * 0% GPU Ultra-Efficient Ambient Career Backdrop.
 * Removes heavy 3D sculpture images, corner clutter, and harsh oval masks.
 * Features an expansive edge-to-edge radiant gradient aura, top horizon beam,
 * precision micro-grid, and crisp career growth trajectory vectors.
 */
export default function CareerCreativeBackdrop({ isLightMode = false }: CareerCreativeBackdropProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        background: 'transparent',
      }}
    >
      {/* 1. Fully-Spread Ambient Radiant Aura (Opash Logo Palette) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isLightMode
            ? `
              radial-gradient(ellipse 130% 90% at 50% -15%, rgba(0, 168, 143, 0.16) 0%, rgba(71, 109, 154, 0.11) 35%, rgba(98, 137, 184, 0.05) 65%, transparent 85%),
              radial-gradient(ellipse 70% 60% at 0% 35%, rgba(71, 109, 154, 0.14) 0%, transparent 70%),
              radial-gradient(ellipse 70% 60% at 100% 35%, rgba(0, 168, 143, 0.13) 0%, transparent 70%),
              radial-gradient(ellipse 90% 50% at 50% 100%, rgba(71, 109, 154, 0.08) 0%, transparent 75%)
            `
            : `
              radial-gradient(ellipse 140% 90% at 50% -15%, rgba(94, 192, 152, 0.22) 0%, rgba(71, 109, 154, 0.18) 35%, rgba(98, 137, 184, 0.08) 65%, transparent 85%),
              radial-gradient(ellipse 75% 65% at 0% 35%, rgba(71, 109, 154, 0.20) 0%, transparent 70%),
              radial-gradient(ellipse 75% 65% at 100% 35%, rgba(94, 192, 152, 0.18) 0%, transparent 70%),
              radial-gradient(ellipse 90% 50% at 50% 100%, rgba(71, 109, 154, 0.10) 0%, transparent 75%)
            `,
          transition: 'background 0.5s ease',
        }}
      />

      {/* 2. Top Luminous Horizon Accent Beam (Opash Mint & Slate) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '1320px',
          height: '1px',
          background: isLightMode
            ? 'linear-gradient(90deg, transparent 0%, rgba(71, 109, 154, 0.3) 20%, rgba(0, 168, 143, 0.8) 50%, rgba(71, 109, 154, 0.3) 75%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(71, 109, 154, 0.35) 20%, rgba(94, 192, 152, 0.95) 50%, rgba(98, 137, 184, 0.5) 80%, transparent 100%)',
          boxShadow: isLightMode
            ? '0 0 20px rgba(0, 168, 143, 0.3)'
            : '0 0 25px rgba(94, 192, 152, 0.5), 0 0 10px rgba(71, 109, 154, 0.35)',
        }}
      />

      {/* 3. Career Constellation & Growth Trajectory Orbit SVG (Opash Brand Vectors) */}
      <svg
        style={{
          position: 'absolute',
          top: '46%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '1300px',
          height: '750px',
          opacity: isLightMode ? 0.35 : 0.45,
          maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
        }}
        viewBox="0 0 1200 750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="careerTrajectory" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={isLightMode ? "#476D9A" : "#476D9A"} stopOpacity="0" />
            <stop offset="50%" stopColor={isLightMode ? "#00A88F" : "#5EC098"} stopOpacity="0.5" />
            <stop offset="100%" stopColor={isLightMode ? "#1e3a5f" : "#6289B8"} stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Parabolic Engineering Career Growth Curves */}
        <path d="M 80 620 Q 600 480 1120 160" stroke="url(#careerTrajectory)" strokeWidth="1.8" strokeDasharray="6 6" />
        <path d="M 220 660 Q 640 400 1060 210" stroke={isLightMode ? "rgba(71, 109, 154, 0.25)" : "rgba(98, 137, 184, 0.3)"} strokeWidth="1" strokeDasharray="3 8" />

        {/* Career Radar Orbit Rings */}
        <ellipse cx="600" cy="380" rx="380" ry="190" stroke={isLightMode ? "rgba(0, 168, 143, 0.16)" : "rgba(94, 192, 152, 0.2)"} strokeWidth="1" strokeDasharray="4 8" />
        <ellipse cx="600" cy="380" rx="540" ry="270" stroke={isLightMode ? "rgba(71, 109, 154, 0.12)" : "rgba(71, 109, 154, 0.15)"} strokeWidth="1" strokeDasharray="2 10" />

        {/* Glowing Trajectory Talent Nodes */}
        <circle cx="600" cy="460" r="4.5" fill={isLightMode ? "#00A88F" : "#5EC098"} />
        <circle cx="850" cy="325" r="5.5" fill={isLightMode ? "#476D9A" : "#6289B8"} />
        <circle cx="1120" cy="160" r="7" fill={isLightMode ? "#00A88F" : "#5EC098"} />

        {/* Pulse halos */}
        <circle cx="1120" cy="160" r="14" stroke={isLightMode ? "rgba(0, 168, 143, 0.4)" : "rgba(94, 192, 152, 0.4)"} strokeWidth="1" fill="none" />
      </svg>

      {/* 4. Full-Width Architectural Micro-Grid (Edge-to-Edge Spread) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isLightMode ? 0.35 : 0.22,
          backgroundImage: isLightMode
            ? 'radial-gradient(rgba(148, 163, 184, 0.5) 1px, transparent 1px)'
            : 'radial-gradient(rgba(45, 212, 191, 0.5) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
        }}
      />
    </div>
  );
}
