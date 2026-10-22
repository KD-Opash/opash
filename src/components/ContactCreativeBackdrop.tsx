'use client';

import React from 'react';

interface ContactCreativeBackdropProps {
  isLightMode?: boolean;
}

/**
 * 0% GPU Ultra-Efficient Ambient Contact Backdrop.
 * Removes 3D sculpture clutter, floating corner badges, and harsh oval masks.
 * Spreads edge-to-edge with multi-stop radial gradient lighting,
 * laser horizon beam, and global network connection arcs.
 */
export default function ContactCreativeBackdrop({ isLightMode = false }: ContactCreativeBackdropProps) {
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
      {/* 1. Fully-Spread Ambient Radiant Signal Aura (Opash Logo Palette) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isLightMode
            ? `
              radial-gradient(ellipse 130% 90% at 50% -15%, rgba(0, 168, 143, 0.16) 0%, rgba(71, 109, 154, 0.12) 35%, rgba(98, 137, 184, 0.05) 65%, transparent 85%),
              radial-gradient(ellipse 70% 60% at 0% 35%, rgba(71, 109, 154, 0.14) 0%, transparent 70%),
              radial-gradient(ellipse 70% 60% at 100% 35%, rgba(0, 168, 143, 0.14) 0%, transparent 70%),
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

      {/* 2. Top Horizon Laser Beam (Opash Mint & Slate) */}
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

      {/* 3. Global Telemetry & Signal Beacon SVG (Opash Brand Vectors) */}
      <svg
        style={{
          position: 'absolute',
          top: '46%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '1300px',
          height: '760px',
          opacity: isLightMode ? 0.35 : 0.45,
          maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
        }}
        viewBox="0 0 1240 760"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="contactSignalBeam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isLightMode ? "#476D9A" : "#6289B8"} stopOpacity="0.7" />
            <stop offset="100%" stopColor={isLightMode ? "#00A88F" : "#5EC098"} stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Global Connection Arcs radiating from Surat HQ Center (620, 380) */}
        <path d="M 620 380 Q 320 220 180 320" stroke="url(#contactSignalBeam)" strokeWidth="1.5" strokeDasharray="6 6" />
        <path d="M 620 380 Q 420 140 320 180" stroke={isLightMode ? "rgba(71, 109, 154, 0.3)" : "rgba(98, 137, 184, 0.35)"} strokeWidth="1" strokeDasharray="4 8" />
        <path d="M 620 380 Q 820 180 1020 280" stroke="url(#contactSignalBeam)" strokeWidth="1.5" strokeDasharray="6 6" />
        <path d="M 620 380 Q 900 480 1120 420" stroke={isLightMode ? "rgba(0, 168, 143, 0.3)" : "rgba(94, 192, 152, 0.35)"} strokeWidth="1" strokeDasharray="5 7" />

        {/* Concentric Radar Beacon Rings */}
        <ellipse cx="620" cy="380" rx="140" ry="70" stroke={isLightMode ? "rgba(71, 109, 154, 0.22)" : "rgba(98, 137, 184, 0.3)"} strokeWidth="1.2" strokeDasharray="6 6" />
        <ellipse cx="620" cy="380" rx="280" ry="140" stroke={isLightMode ? "rgba(0, 168, 143, 0.16)" : "rgba(94, 192, 152, 0.2)"} strokeWidth="1" strokeDasharray="4 8" />
        <ellipse cx="620" cy="380" rx="460" ry="230" stroke={isLightMode ? "rgba(71, 109, 154, 0.10)" : "rgba(71, 109, 154, 0.14)"} strokeWidth="1" strokeDasharray="3 10" />
        <ellipse cx="620" cy="380" rx="600" ry="300" stroke={isLightMode ? "rgba(71, 109, 154, 0.06)" : "rgba(71, 109, 154, 0.08)"} strokeWidth="1" strokeDasharray="2 12" />

        {/* Central Surat HQ Beacon Node */}
        <circle cx="620" cy="380" r="6" fill={isLightMode ? "#00A88F" : "#5EC098"} />
        <circle cx="620" cy="380" r="14" stroke={isLightMode ? "#00A88F" : "#5EC098"} strokeWidth="1.2" opacity="0.6" />

        {/* Global Node Endpoint Circles */}
        <circle cx="180" cy="320" r="4.5" fill={isLightMode ? "#476D9A" : "#6289B8"} />
        <circle cx="320" cy="180" r="4" fill={isLightMode ? "#00A88F" : "#5EC098"} />
        <circle cx="1020" cy="280" r="4.5" fill={isLightMode ? "#476D9A" : "#6289B8"} />
        <circle cx="1120" cy="420" r="4" fill={isLightMode ? "#00A88F" : "#5EC098"} />
      </svg>

      {/* 4. Fine Matrix Coordinate Grid (Edge-to-Edge Spread) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isLightMode ? 0.32 : 0.2,
          backgroundImage: isLightMode
            ? 'radial-gradient(rgba(148, 163, 184, 0.5) 1px, transparent 1px)'
            : 'radial-gradient(rgba(56, 189, 248, 0.5) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
        }}
      />
    </div>
  );
}
