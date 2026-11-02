'use client';

import React from 'react';
import CyberCurvedArcsCanvas from '@/components/CyberCurvedArcsCanvas';

interface CustomSoftwareAeroHeroBackdropProps {
  isLightMode?: boolean;
}

/**
 * Custom Software Development Hero Backdrop.
 * Matches Image 3 reference exactly:
 * - Dynamic field of glowing curved arc filaments & stellar diamond sparkle nodes.
 * - Deep midnight cyber ambience (#020712).
 * - Soft ambient radiant lighting in Opash mint (#5EC098) & slate blue (#476D9A).
 * - Zero intrusive wireframes, no cubes, no concentric rings.
 */
export default function CustomSoftwareAeroHeroBackdrop({
  isLightMode = false,
}: CustomSoftwareAeroHeroBackdropProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        backgroundColor: isLightMode ? '#f8fafc' : '#020712',
      }}
    >
      {/* 1. Curved Arc Filaments & Diamond Sparkle Canvas (Image 3 Reference) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isLightMode ? 0.65 : 0.88,
          zIndex: 1,
        }}
      >
        <CyberCurvedArcsCanvas isLightMode={isLightMode} />
      </div>

      {/* 2. Ambient Radiant Aura (Opash Mint Green & Slate Blue) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isLightMode
            ? `
              radial-gradient(ellipse 130% 90% at 50% -10%, rgba(0, 168, 143, 0.14) 0%, rgba(71, 109, 154, 0.08) 40%, transparent 80%),
              radial-gradient(ellipse 70% 60% at 15% 45%, rgba(0, 168, 143, 0.09) 0%, transparent 70%),
              radial-gradient(ellipse 70% 60% at 85% 45%, rgba(71, 109, 154, 0.10) 0%, transparent 70%),
              radial-gradient(ellipse 90% 50% at 50% 100%, rgba(0, 168, 143, 0.05) 0%, transparent 75%)
            `
            : `
              radial-gradient(ellipse 140% 90% at 50% -10%, rgba(94, 192, 152, 0.22) 0%, rgba(71, 109, 154, 0.15) 40%, transparent 80%),
              radial-gradient(ellipse 75% 65% at 15% 45%, rgba(94, 192, 152, 0.16) 0%, transparent 70%),
              radial-gradient(ellipse 75% 65% at 85% 45%, rgba(71, 109, 154, 0.16) 0%, transparent 70%),
              radial-gradient(ellipse 90% 50% at 50% 100%, rgba(94, 192, 152, 0.08) 0%, transparent 75%)
            `,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* 3. Luminous Horizon Accent Beam */}
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
            ? 'linear-gradient(90deg, transparent 0%, rgba(71, 109, 154, 0.3) 20%, rgba(0, 168, 143, 0.85) 50%, rgba(71, 109, 154, 0.3) 80%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(71, 109, 154, 0.35) 20%, rgba(94, 192, 152, 0.95) 50%, rgba(45, 212, 191, 0.6) 80%, transparent 100%)',
          boxShadow: isLightMode
            ? '0 0 20px rgba(0, 168, 143, 0.3)'
            : '0 0 28px rgba(94, 192, 152, 0.6), 0 0 10px rgba(45, 212, 191, 0.4)',
          zIndex: 2,
        }}
      />

      {/* 4. Subtle Vignette For Perfect Headline Legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isLightMode
            ? 'radial-gradient(ellipse 80% 60% at 50% 45%, rgba(248, 250, 252, 0.2) 0%, rgba(248, 250, 252, 0.65) 75%, #f8fafc 100%)'
            : 'radial-gradient(ellipse 80% 60% at 50% 45%, rgba(2, 7, 18, 0.2) 0%, rgba(2, 7, 18, 0.65) 75%, #020712 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* 5. Bottom Blend into Metrics Strip */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '180px',
          background: isLightMode
            ? 'linear-gradient(to bottom, transparent 0%, rgba(248, 250, 252, 0.85) 60%, #f8fafc 100%)'
            : 'linear-gradient(to bottom, transparent 0%, rgba(2, 7, 18, 0.85) 60%, #020712 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
    </div>
  );
}
