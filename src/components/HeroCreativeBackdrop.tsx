'use client';

import React from 'react';

interface HeroCreativeBackdropProps {
  isLightMode?: boolean;
  currentIndex?: number;
  activePrimaryColor?: string;
  activeSecondaryColor?: string;
  activeTitle?: string;
  onSelectPhrase?: (index: number) => void;
}

/**
 * 0% GPU Ultra-Efficient Ambient Aurora & Engineering Dot Matrix Hero Backdrop.
 * Uses native CSS multi-stop radial gradients for smooth, zero-GPU ambient lighting
 * that spreads edge-to-edge across the entire hero.
 */
export default function HeroCreativeBackdrop({
  isLightMode = false,
  activePrimaryColor = '#00bbab',
  activeSecondaryColor = '#38bdf8',
}: HeroCreativeBackdropProps) {
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
      {/* 1. Fully-Spread Ambient Radiant Aura (0% GPU Filter Passes) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isLightMode
            ? `
              radial-gradient(ellipse 130% 90% at 50% -15%, ${activePrimaryColor}22 0%, ${activeSecondaryColor}12 35%, rgba(71, 109, 154, 0.06) 65%, transparent 85%),
              radial-gradient(ellipse 70% 60% at 15% 35%, ${activePrimaryColor}16 0%, transparent 70%),
              radial-gradient(ellipse 70% 60% at 85% 35%, rgba(71, 109, 154, 0.14) 0%, transparent 70%),
              radial-gradient(ellipse 90% 50% at 50% 100%, ${activePrimaryColor}08 0%, transparent 75%)
            `
            : `
              radial-gradient(ellipse 140% 90% at 50% -15%, ${activePrimaryColor}26 0%, ${activeSecondaryColor}18 35%, rgba(71, 109, 154, 0.12) 65%, transparent 85%),
              radial-gradient(ellipse 75% 65% at 15% 35%, ${activePrimaryColor}20 0%, transparent 70%),
              radial-gradient(ellipse 75% 65% at 85% 35%, rgba(71, 109, 154, 0.20) 0%, transparent 70%),
              radial-gradient(ellipse 90% 50% at 50% 100%, ${activePrimaryColor}10 0%, transparent 75%)
            `,
          transition: 'background 0.6s ease',
        }}
      />

      {/* 2. Top Luminous Horizon Laser Beam */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '88%',
          maxWidth: '1280px',
          height: '1px',
          background: `linear-gradient(90deg, transparent 0%, ${activePrimaryColor}60 30%, ${activeSecondaryColor} 50%, ${activePrimaryColor}60 70%, transparent 100%)`,
          boxShadow: `0 0 24px 2px ${activePrimaryColor}60`,
          transition: 'background 0.6s ease, box-shadow 0.6s ease',
          opacity: isLightMode ? 0.7 : 0.9,
        }}
      />

      {/* 3. Precision Engineering Dot Matrix (Seamless Edge-to-Edge Spread) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isLightMode ? 0.35 : 0.22,
          backgroundImage: isLightMode
            ? 'radial-gradient(rgba(71, 109, 154, 0.45) 1px, transparent 1px)'
            : 'radial-gradient(rgba(94, 192, 152, 0.5) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
