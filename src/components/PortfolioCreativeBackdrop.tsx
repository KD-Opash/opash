'use client';

import React from 'react';

interface PortfolioCreativeBackdropProps {
  isLightMode?: boolean;
}

/**
 * Unique, 0% GPU High-Tech Enterprise Delivery & Infrastructure Runway Backdrop.
 * Distinct from Blogs and Careers: Features an infinite perspective architectural runway,
 * royal sapphire & cyber cyan ambient lighting, and enterprise delivery network vectors.
 */
export default function PortfolioCreativeBackdrop({ isLightMode = false }: PortfolioCreativeBackdropProps) {
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
      {/* 1. Opash Slate Blue & Mint Green Signature Ambient Aura (0% GPU Filter Passes) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isLightMode
            ? `
              radial-gradient(ellipse 130% 90% at 50% -20%, rgba(0, 168, 143, 0.16) 0%, rgba(71, 109, 154, 0.12) 35%, rgba(98, 137, 184, 0.05) 65%, transparent 85%),
              radial-gradient(ellipse 75% 65% at 0% 35%, rgba(71, 109, 154, 0.14) 0%, transparent 70%),
              radial-gradient(ellipse 75% 65% at 100% 35%, rgba(0, 168, 143, 0.14) 0%, transparent 70%),
              radial-gradient(ellipse 90% 50% at 50% 100%, rgba(71, 109, 154, 0.08) 0%, transparent 75%)
            `
            : `
              radial-gradient(ellipse 140% 90% at 50% -20%, rgba(94, 192, 152, 0.22) 0%, rgba(71, 109, 154, 0.20) 35%, rgba(98, 137, 184, 0.08) 65%, transparent 85%),
              radial-gradient(ellipse 75% 65% at 0% 35%, rgba(71, 109, 154, 0.22) 0%, transparent 70%),
              radial-gradient(ellipse 75% 65% at 100% 35%, rgba(94, 192, 152, 0.18) 0%, transparent 70%),
              radial-gradient(ellipse 90% 50% at 50% 100%, rgba(71, 109, 154, 0.12) 0%, transparent 75%)
            `,
          transition: 'background 0.5s ease',
        }}
      />

      {/* 2. Top Laser Horizon Accent Beam (Opash Mint & Slate) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '1360px',
          height: '1px',
          background: isLightMode
            ? 'linear-gradient(90deg, transparent 0%, rgba(71, 109, 154, 0.3) 20%, rgba(0, 168, 143, 0.8) 50%, rgba(71, 109, 154, 0.3) 80%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(71, 109, 154, 0.4) 15%, rgba(94, 192, 152, 0.95) 50%, rgba(98, 137, 184, 0.5) 85%, transparent 100%)',
          boxShadow: isLightMode
            ? '0 0 20px rgba(0, 168, 143, 0.35)'
            : '0 0 24px rgba(94, 192, 152, 0.5), 0 0 10px rgba(71, 109, 154, 0.4)',
        }}
      />

      {/* 3. 3D Perspective Digital Infrastructure Runway (Opash Logo Palette) */}
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-20%',
          right: '-20%',
          height: '620px',
          transform: 'perspective(750px) rotateX(66deg)',
          transformOrigin: 'bottom center',
          backgroundImage: isLightMode
            ? `
              linear-gradient(to right, rgba(71, 109, 154, 0.18) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 168, 143, 0.18) 1px, transparent 1px)
            `
            : `
              linear-gradient(to right, rgba(94, 192, 152, 0.22) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(71, 109, 154, 0.25) 1px, transparent 1px)
            `,
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(to top, black 25%, transparent 85%)',
          WebkitMaskImage: 'linear-gradient(to top, black 25%, transparent 85%)',
          opacity: isLightMode ? 0.45 : 0.55,
        }}
      />

      {/* 4. Global Architecture Delivery Topology Vectors (Opash Brand Vectors) */}
      <svg
        style={{
          position: 'absolute',
          top: '46%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '1320px',
          height: '750px',
          opacity: isLightMode ? 0.38 : 0.48,
          maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
        }}
        viewBox="0 0 1200 750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="deliveryFlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={isLightMode ? "#476D9A" : "#476D9A"} stopOpacity="0.2" />
            <stop offset="50%" stopColor={isLightMode ? "#00A88F" : "#5EC098"} stopOpacity="0.7" />
            <stop offset="100%" stopColor={isLightMode ? "#1e3a5f" : "#6289B8"} stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Global Delivery Arcs connecting Enterprise Platforms */}
        <path d="M 120 540 Q 600 380 1080 200" stroke="url(#deliveryFlow)" strokeWidth="1.8" strokeDasharray="6 6" />
        <path d="M 180 240 Q 600 420 1020 560" stroke={isLightMode ? "rgba(71, 109, 154, 0.3)" : "rgba(98, 137, 184, 0.35)"} strokeWidth="1.2" strokeDasharray="4 8" />
        <path d="M 300 620 Q 600 480 900 620" stroke={isLightMode ? "rgba(0, 168, 143, 0.25)" : "rgba(94, 192, 152, 0.3)"} strokeWidth="1" strokeDasharray="3 6" />

        {/* Concentric Infrastructure Radar Rings */}
        <ellipse cx="600" cy="380" rx="340" ry="170" stroke={isLightMode ? "rgba(71, 109, 154, 0.18)" : "rgba(98, 137, 184, 0.22)"} strokeWidth="1.2" strokeDasharray="5 7" />
        <ellipse cx="600" cy="380" rx="520" ry="260" stroke={isLightMode ? "rgba(0, 168, 143, 0.12)" : "rgba(94, 192, 152, 0.16)"} strokeWidth="1" strokeDasharray="3 9" />

        {/* Architectural Server Prism Nodes */}
        {/* Left Node */}
        <g transform="translate(180, 240)">
          <polygon points="0,-16 14,-8 14,8 0,16 -14,8 -14,-8" fill="none" stroke={isLightMode ? "#476D9A" : "#6289B8"} strokeWidth="1.5" />
          <circle cx="0" cy="0" r="3.5" fill={isLightMode ? "#00A88F" : "#5EC098"} />
        </g>
        {/* Center Node */}
        <g transform="translate(600, 380)">
          <circle cx="0" cy="0" r="16" stroke={isLightMode ? "#00A88F" : "#5EC098"} strokeWidth="1.2" strokeDasharray="3 3" />
          <circle cx="0" cy="0" r="6" fill={isLightMode ? "#00A88F" : "#5EC098"} />
        </g>
        {/* Right Node */}
        <g transform="translate(1080, 200)">
          <polygon points="0,-18 16,-9 16,9 0,18 -16,9 -16,-9" fill="none" stroke={isLightMode ? "#476D9A" : "#476D9A"} strokeWidth="1.5" />
          <circle cx="0" cy="0" r="4" fill={isLightMode ? "#00A88F" : "#5EC098"} />
        </g>
      </svg>

      {/* 5. Fine Architectural Dot Lattice (Edge-to-Edge Spread) */}
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
