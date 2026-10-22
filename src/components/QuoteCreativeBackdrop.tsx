'use client';

import React from 'react';

interface QuoteCreativeBackdropProps {
  isLightMode?: boolean;
}

/**
 * 0% GPU Ultra-Efficient Ambient Scoping & Architecture Telemetry Backdrop for Get A Quote page.
 * Uses Opash signature logo palette:
 * - Opash Mint Green (#5EC098 / #00A88F)
 * - Opash Slate Blue (#476D9A / #6289B8)
 * - Deep Midnight Obsidian (#020712)
 */
export default function QuoteCreativeBackdrop({ isLightMode = false }: QuoteCreativeBackdropProps) {
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

      {/* 2. Top Luminous Horizon Accent Beam (Opash Mint & Slate) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '1340px',
          height: '1px',
          background: isLightMode
            ? 'linear-gradient(90deg, transparent 0%, rgba(71, 109, 154, 0.3) 20%, rgba(0, 168, 143, 0.8) 50%, rgba(71, 109, 154, 0.3) 75%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(71, 109, 154, 0.35) 20%, rgba(94, 192, 152, 0.95) 50%, rgba(98, 137, 184, 0.5) 80%, transparent 100%)',
          boxShadow: isLightMode
            ? '0 0 20px rgba(0, 168, 143, 0.3)'
            : '0 0 25px rgba(94, 192, 152, 0.5), 0 0 10px rgba(71, 109, 154, 0.35)',
        }}
      />

      {/* 3. Scoping & Milestone Telemetry SVG Vectors (0% GPU) */}
      <svg
        style={{
          position: 'absolute',
          top: '46%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '1320px',
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
          <linearGradient id="scopingFlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={isLightMode ? "#476D9A" : "#476D9A"} stopOpacity="0.2" />
            <stop offset="50%" stopColor={isLightMode ? "#00A88F" : "#5EC098"} stopOpacity="0.65" />
            <stop offset="100%" stopColor={isLightMode ? "#1e3a5f" : "#6289B8"} stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Milestone trajectory arcs */}
        <path d="M 120 540 Q 600 360 1080 180" stroke="url(#scopingFlow)" strokeWidth="1.6" strokeDasharray="6 6" />
        <path d="M 160 220 Q 600 420 1040 560" stroke={isLightMode ? "rgba(71, 109, 154, 0.25)" : "rgba(98, 137, 184, 0.3)"} strokeWidth="1.2" strokeDasharray="4 8" />

        {/* Concentric Scoping Rings */}
        <ellipse cx="600" cy="380" rx="360" ry="180" stroke={isLightMode ? "rgba(71, 109, 154, 0.16)" : "rgba(98, 137, 184, 0.2)"} strokeWidth="1.2" strokeDasharray="5 7" />
        <ellipse cx="600" cy="380" rx="540" ry="270" stroke={isLightMode ? "rgba(0, 168, 143, 0.12)" : "rgba(94, 192, 152, 0.16)"} strokeWidth="1" strokeDasharray="3 9" />

        {/* Estimation Milestone Nodes */}
        <g transform="translate(160, 220)">
          <polygon points="0,-14 12,-7 12,7 0,14 -12,7 -12,-7" fill="none" stroke={isLightMode ? "#476D9A" : "#6289B8"} strokeWidth="1.5" />
          <circle cx="0" cy="0" r="3.5" fill={isLightMode ? "#00A88F" : "#5EC098"} />
        </g>
        <g transform="translate(600, 380)">
          <circle cx="0" cy="0" r="14" stroke={isLightMode ? "#00A88F" : "#5EC098"} strokeWidth="1.2" strokeDasharray="3 3" />
          <circle cx="0" cy="0" r="5" fill={isLightMode ? "#00A88F" : "#5EC098"} />
        </g>
        <g transform="translate(1080, 180)">
          <polygon points="0,-16 14,-8 14,8 0,16 -14,8 -14,-8" fill="none" stroke={isLightMode ? "#476D9A" : "#476D9A"} strokeWidth="1.5" />
          <circle cx="0" cy="0" r="4" fill={isLightMode ? "#00A88F" : "#5EC098"} />
        </g>
      </svg>

      {/* 4. Precision Engineering Coordinate Matrix (0% GPU) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isLightMode ? 0.32 : 0.2,
          backgroundImage: isLightMode
            ? 'radial-gradient(rgba(71, 109, 154, 0.4) 1px, transparent 1px)'
            : 'radial-gradient(rgba(94, 192, 152, 0.45) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
        }}
      />
    </div>
  );
}
