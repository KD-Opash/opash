'use client';

import React from 'react';

interface TechShowcaseBackdropProps {
  isLightMode?: boolean;
}

/**
 * Vibrant Multi-Color Ambient Aurora Mesh for Technologies & Platforms section.
 * Zero-3D, zero-WebGL, pure hardware-accelerated CSS.
 * Delivers rich, colorful radiant glows (cyan, electric indigo, violet, sky blue, emerald, amber).
 */
export function TechShowcaseBackdrop({ isLightMode = false }: TechShowcaseBackdropProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
      style={{
        zIndex: 0,
        backgroundColor: isLightMode ? '#f8fafc' : '#01040a',
        transition: 'background-color 0.4s ease',
      }}
    >
      {/* 1. Multi-Color Radiant Aurora Glowing Orbs */}
      {/* Top Left: Electric Teal / Cyan Beacon */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '10%',
          width: '720px',
          height: '560px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(0, 168, 143, 0.22) 0%, rgba(0, 168, 143, 0.08) 45%, transparent 72%)'
            : 'radial-gradient(circle, rgba(0, 255, 209, 0.28) 0%, rgba(0, 187, 171, 0.16) 45%, transparent 75%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
        }}
      />

      {/* Top Right: Royal Indigo & Violet Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-5%',
          right: '8%',
          width: '680px',
          height: '520px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.20) 0%, rgba(139, 92, 246, 0.08) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(129, 140, 248, 0.26) 0%, rgba(99, 102, 241, 0.18) 45%, transparent 72%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      {/* Center: Luminous Sky Blue & Cyan Wash */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '620px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.18) 0%, rgba(56, 189, 248, 0.06) 50%, transparent 75%)'
            : 'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.25) 0%, rgba(56, 189, 248, 0.12) 50%, transparent 75%)',
          filter: 'blur(95px)',
          pointerEvents: 'none',
        }}
      />

      {/* Center Left: Emerald Mint Core */}
      <div
        style={{
          position: 'absolute',
          top: '48%',
          left: '2%',
          width: '580px',
          height: '480px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(52, 211, 153, 0.1) 45%, transparent 72%)',
          filter: 'blur(85px)',
          pointerEvents: 'none',
        }}
      />

      {/* Center Right: Deep Magenta & Purple Flare */}
      <div
        style={{
          position: 'absolute',
          top: '52%',
          right: '3%',
          width: '620px',
          height: '500px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(168, 85, 247, 0.16) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(192, 132, 252, 0.24) 0%, rgba(147, 51, 234, 0.14) 45%, transparent 72%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
        }}
      />

      {/* Bottom Center: Warm Amber / Gold Sub-Aura */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '42%',
          width: '640px',
          height: '420px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(245, 158, 11, 0.14) 0%, transparent 68%)'
            : 'radial-gradient(circle, rgba(251, 191, 36, 0.18) 0%, rgba(245, 158, 11, 0.08) 50%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      {/* 2. Precision Tech Dot Grid (Illuminated by the colorful auroras) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isLightMode ? 0.35 : 0.22,
          backgroundImage: isLightMode
            ? 'radial-gradient(rgba(100, 116, 139, 0.45) 1px, transparent 1px)'
            : 'radial-gradient(rgba(148, 163, 184, 0.55) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse 85% 75% at 50% 50%, black 35%, transparent 85%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 85% 75% at 50% 50%, black 35%, transparent 85%)',
          pointerEvents: 'none',
        }}
      />

      {/* 3. Top Melt / Feather Blender into preceding section */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '160px',
          background: isLightMode
            ? 'linear-gradient(180deg, #f8fafc 0%, transparent 100%)'
            : 'linear-gradient(180deg, #01040a 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* 4. Bottom Melt / Feather Blender into succeeding section */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '160px',
          background: isLightMode
            ? 'linear-gradient(0deg, #f8fafc 0%, transparent 100%)'
            : 'linear-gradient(0deg, #01040a 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

export default TechShowcaseBackdrop;
