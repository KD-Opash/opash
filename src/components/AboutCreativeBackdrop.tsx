'use client';

import React from 'react';

interface AboutCreativeBackdropProps {
  isLightMode?: boolean;
}

/**
 * Modern, 0% GPU Pristine Ambient Studio Backdrop for About / Company Hero.
 * Zero image clutter, zero heavy blur filters, zero harsh mask cutoffs.
 * Uses native CSS multi-stop radial gradients and a seamless micro-grid
 * that spreads edge-to-edge across the entire hero.
 */
export default function AboutCreativeBackdrop({ isLightMode = false }: AboutCreativeBackdropProps) {
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
              radial-gradient(ellipse 130% 90% at 50% -20%, rgba(0, 168, 143, 0.16) 0%, rgba(71, 109, 154, 0.10) 35%, rgba(98, 137, 184, 0.04) 65%, transparent 85%),
              radial-gradient(ellipse 70% 60% at 0% 30%, rgba(0, 168, 143, 0.12) 0%, transparent 70%),
              radial-gradient(ellipse 70% 60% at 100% 30%, rgba(71, 109, 154, 0.12) 0%, transparent 70%),
              radial-gradient(ellipse 90% 50% at 50% 100%, rgba(0, 168, 143, 0.08) 0%, transparent 75%)
            `
            : `
              radial-gradient(ellipse 140% 90% at 50% -20%, rgba(94, 192, 152, 0.22) 0%, rgba(71, 109, 154, 0.18) 35%, rgba(98, 137, 184, 0.06) 65%, transparent 85%),
              radial-gradient(ellipse 75% 65% at 0% 35%, rgba(94, 192, 152, 0.16) 0%, transparent 70%),
              radial-gradient(ellipse 75% 65% at 100% 35%, rgba(71, 109, 154, 0.18) 0%, transparent 70%),
              radial-gradient(ellipse 90% 50% at 50% 100%, rgba(94, 192, 152, 0.09) 0%, transparent 75%)
            `,
        }}
      />

      {/* 2. Top Horizon Laser Beam (Opash Mint & Slate) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '88%',
          maxWidth: '1280px',
          height: '1px',
          background: isLightMode
            ? 'linear-gradient(90deg, transparent 0%, rgba(71, 109, 154, 0.3) 20%, rgba(0, 168, 143, 0.8) 50%, rgba(71, 109, 154, 0.3) 80%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(71, 109, 154, 0.35) 20%, rgba(94, 192, 152, 0.95) 50%, rgba(98, 137, 184, 0.5) 80%, transparent 100%)',
          boxShadow: isLightMode
            ? '0 0 20px rgba(0, 168, 143, 0.35)'
            : '0 0 25px rgba(94, 192, 152, 0.5), 0 0 10px rgba(71, 109, 154, 0.35)',
        }}
      />

      {/* 3. Seamless Tech Dot Matrix (Edge-to-Edge Spread with Smooth Fade to Bottom) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isLightMode ? 0.35 : 0.22,
          backgroundImage: isLightMode
            ? 'radial-gradient(rgba(71, 109, 154, 0.45) 1px, transparent 1px)'
            : 'radial-gradient(rgba(94, 192, 152, 0.5) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
