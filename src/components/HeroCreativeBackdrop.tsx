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
 * Modern, Zero-GPU Aurora Ambient Glow & Tech Grid Hero Backdrop
 * Inspired by Linear & Vercel design systems.
 * Pure hardware-accelerated CSS, zero WebGL, zero 3D models, zero extra text pills.
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
        backgroundColor: isLightMode ? '#f8fafc' : '#01040a',
        transition: 'background-color 0.5s ease',
      }}
    >
      {/* 1. Sleek Horizon Accent Ray (Subtle luminous top beam) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '75%',
          maxWidth: '1200px',
          height: '1px',
          background: `linear-gradient(90deg, transparent 0%, ${activePrimaryColor}80 35%, ${activeSecondaryColor} 50%, ${activePrimaryColor}80 65%, transparent 100%)`,
          boxShadow: `0 0 28px 2px ${activePrimaryColor}50`,
          transition: 'background 0.6s ease, box-shadow 0.6s ease',
          opacity: isLightMode ? 0.7 : 0.9,
        }}
      />

      {/* 2. Sleek Multi-Stop Aurora Ambient Glows (Smooth color morphing with active capability) */}
      {/* Central primary glow */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '30%',
          width: '850px',
          height: '650px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${activePrimaryColor}${isLightMode ? '18' : '22'} 0%, ${activePrimaryColor}08 45%, transparent 70%)`,
          transition: 'background 0.7s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Right capability card aura */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: '650px',
          height: '550px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${activeSecondaryColor}${isLightMode ? '10' : '18'} 0%, ${activeSecondaryColor}05 45%, transparent 70%)`,
          transition: 'background 0.7s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Deep indigo depth wash (left/center) */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '5%',
          width: '550px',
          height: '450px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* 3. Minimal Tech Dot Grid (Clean precision grid with elliptical fade) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isLightMode ? 0.45 : 0.28,
          backgroundImage: isLightMode
            ? 'radial-gradient(rgba(100, 116, 139, 0.4) 1px, transparent 1px)'
            : `radial-gradient(rgba(148, 163, 184, 0.5) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(ellipse 75% 60% at 50% 32%, black 25%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 75% 60% at 50% 32%, black 25%, transparent 75%)',
          pointerEvents: 'none',
        }}
      />

      {/* 4. Fine Atmospheric Radial Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isLightMode
            ? 'radial-gradient(ellipse 85% 70% at 50% 40%, transparent 40%, rgba(248, 250, 252, 0.75) 100%)'
            : 'radial-gradient(ellipse 85% 70% at 50% 40%, transparent 40%, rgba(1, 4, 10, 0.8) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* 5. Bottom Feather Blender (Ensures 100% seamless transition into subsequent section) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '140px',
          background: isLightMode
            ? 'linear-gradient(to bottom, transparent 0%, #f8fafc 100%)'
            : 'linear-gradient(to bottom, transparent 0%, #01040a 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
