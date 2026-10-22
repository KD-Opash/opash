'use client';

import React from 'react';

interface TechShowcaseBackdropProps {
  isLightMode?: boolean;
}

/**
 * Vibrant Multi-Color Ambient Aurora Mesh for Technologies & Platforms section.
 * Features ultra-smooth Gaussian-diffused auroras (cyan, indigo, violet, sky blue, emerald, amber)
 * with a seamless vertical alpha mask so it melts cleanly into surrounding sections without harsh edges.
 */
export function TechShowcaseBackdrop({ isLightMode = false }: TechShowcaseBackdropProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
      style={{
        zIndex: 0,
        background: 'transparent',
        maskImage:
          'linear-gradient(to bottom, transparent 0%, black 140px, black calc(100% - 140px), transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent 0%, black 140px, black calc(100% - 140px), transparent 100%)',
      }}
    >
      {/* 1. Ultra-Smooth Multi-Color Radiant Aurora Glowing Orbs */}
      {/* Top Left: Electric Teal / Cyan Beacon */}
      <div
        style={{
          position: 'absolute',
          top: '-12%',
          left: '6%',
          width: '780px',
          height: '580px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(0, 168, 143, 0.16) 0%, rgba(0, 168, 143, 0.05) 45%, transparent 75%)'
            : 'radial-gradient(circle, rgba(0, 255, 209, 0.17) 0%, rgba(0, 187, 171, 0.08) 45%, transparent 75%)',
          filter: 'blur(110px)',
          transform: 'translate3d(0, 0, 0)',
          pointerEvents: 'none',
        }}
      />

      {/* Top Right: Royal Indigo & Violet Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-8%',
          right: '6%',
          width: '740px',
          height: '540px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, rgba(139, 92, 246, 0.04) 48%, transparent 75%)'
            : 'radial-gradient(circle, rgba(129, 140, 248, 0.16) 0%, rgba(99, 102, 241, 0.08) 48%, transparent 75%)',
          filter: 'blur(110px)',
          transform: 'translate3d(0, 0, 0)',
          pointerEvents: 'none',
        }}
      />

      {/* Center: Luminous Sky Blue & Cyan Wash behind Header & Filters */}
      <div
        style={{
          position: 'absolute',
          top: '32%',
          left: '50%',
          transform: 'translate(-50%, -50%) translate3d(0, 0, 0)',
          width: '980px',
          height: '620px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.12) 0%, rgba(56, 189, 248, 0.03) 50%, transparent 78%)'
            : 'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.15) 0%, rgba(56, 189, 248, 0.06) 50%, transparent 78%)',
          filter: 'blur(120px)',
          pointerEvents: 'none',
        }}
      />

      {/* Center Left: Emerald Mint Core */}
      <div
        style={{
          position: 'absolute',
          top: '48%',
          left: '-2%',
          width: '640px',
          height: '500px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 72%)'
            : 'radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, rgba(52, 211, 153, 0.05) 45%, transparent 75%)',
          filter: 'blur(105px)',
          transform: 'translate3d(0, 0, 0)',
          pointerEvents: 'none',
        }}
      />

      {/* Center Right: Deep Magenta & Purple Flare */}
      <div
        style={{
          position: 'absolute',
          top: '52%',
          right: '-2%',
          width: '660px',
          height: '520px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(168, 85, 247, 0.10) 0%, transparent 72%)'
            : 'radial-gradient(circle, rgba(192, 132, 252, 0.15) 0%, rgba(147, 51, 234, 0.06) 45%, transparent 75%)',
          filter: 'blur(110px)',
          transform: 'translate3d(0, 0, 0)',
          pointerEvents: 'none',
        }}
      />

      {/* Bottom Center: Warm Amber / Gold Sub-Aura */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '42%',
          width: '680px',
          height: '440px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(251, 191, 36, 0.12) 0%, rgba(245, 158, 11, 0.04) 50%, transparent 75%)',
          filter: 'blur(100px)',
          transform: 'translate3d(0, 0, 0)',
          pointerEvents: 'none',
        }}
      />

      {/* 2. Precision Tech Dot Grid (Illuminated smoothly across the section) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isLightMode ? 0.32 : 0.20,
          backgroundImage: isLightMode
            ? 'radial-gradient(rgba(100, 116, 139, 0.40) 1px, transparent 1px)'
            : 'radial-gradient(rgba(148, 163, 184, 0.50) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse 85% 75% at 50% 50%, black 40%, transparent 90%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 85% 75% at 50% 50%, black 40%, transparent 90%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

export default TechShowcaseBackdrop;
