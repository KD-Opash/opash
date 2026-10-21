'use client';

import React from 'react';

interface TestimonialsCreativeBackdropProps {
  isLightMode?: boolean;
  accent?: string;
  accentRgb?: string;
}

/**
 * TestimonialsCreativeBackdrop:
 * Delivers a vibrant, multi-color executive aurora and sleek vector light-rays
 * inspired by high-end tech aesthetics, 100% pure CSS & SVG (zero 3D, zero GPU).
 * Uses continuous alpha mask-image for mathematically seamless melting without any horizontal cut-lines.
 */
export default function TestimonialsCreativeBackdrop({
  isLightMode = false,
  accent = '#00bbab',
  accentRgb = '0, 187, 171',
}: TestimonialsCreativeBackdropProps) {
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
        maskImage:
          'linear-gradient(to bottom, transparent 0%, black 160px, black calc(100% - 160px), transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent 0%, black 160px, black calc(100% - 160px), transparent 100%)',
      }}
    >
      {/* 1. Multi-Tone Ambient Radiant Auroras (Cyan, Royal Indigo, Sky Blue, Violet) */}
      {/* Upper Center: Royal Indigo & Electric Violet Wash */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '30%',
          width: '780px',
          height: '480px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 72%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(139, 92, 246, 0.10) 50%, transparent 72%)',
          filter: 'blur(85px)',
          pointerEvents: 'none',
        }}
      />

      {/* Main Center: Luminous Electric Cyan & Teal Core (Wide, seamless diffusion) */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '1200px',
          height: '560px',
          background: isLightMode
            ? 'radial-gradient(ellipse at center, rgba(0, 187, 171, 0.18) 0%, rgba(14, 165, 233, 0.06) 45%, transparent 72%)'
            : 'radial-gradient(ellipse at center, rgba(0, 255, 209, 0.22) 0%, rgba(14, 165, 233, 0.12) 45%, transparent 74%)',
          filter: 'blur(95px)',
          pointerEvents: 'none',
        }}
      />

      {/* Lower Right: Sky Blue & Sapphire Ambient Flare */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '680px',
          height: '450px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(14, 165, 233, 0.14) 0%, transparent 68%)'
            : 'radial-gradient(circle, rgba(56, 189, 248, 0.20) 0%, rgba(2, 132, 199, 0.10) 48%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      {/* Lower Left: Emerald Mint Accent */}
      <div
        style={{
          position: 'absolute',
          bottom: '12%',
          left: '5%',
          width: '620px',
          height: '420px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 68%)'
            : 'radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, rgba(52, 211, 153, 0.08) 45%, transparent 70%)',
          filter: 'blur(85px)',
          pointerEvents: 'none',
        }}
      />

      {/* 2. Sleek Vector Executive Light-Streams (Softened with minor blur for crystal-clear text readability) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isLightMode ? 0.35 : 0.48,
          filter: 'blur(5px)',
          WebkitFilter: 'blur(5px)',
          pointerEvents: 'none',
        }}
      >
        <svg
          viewBox="0 0 1440 750"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <defs>
            <linearGradient id="testiGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
              <stop offset="25%" stopColor="#6366f1" stopOpacity="0.75" />
              <stop offset="55%" stopColor="#0ea5e9" stopOpacity="0.9" />
              <stop offset="85%" stopColor="#00bbab" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="testiGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00bbab" stopOpacity="0" />
              <stop offset="30%" stopColor="#00ffd1" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Graceful Flowing Light Arcs */}
          <path
            d="M -100 240 C 320 340, 680 160, 1060 260 C 1240 310, 1420 220, 1540 250"
            stroke="url(#testiGrad1)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M -100 300 C 260 210, 720 370, 1100 280 C 1280 230, 1420 330, 1540 290"
            stroke="url(#testiGrad2)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="8 6"
          />
          <path
            d="M -100 370 C 350 430, 750 310, 1020 400 C 1200 450, 1380 360, 1540 390"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeOpacity="0.4"
          />
        </svg>
      </div>

      {/* 3. Executive Precision Tech Dot Matrix Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isLightMode ? 0.32 : 0.2,
          backgroundImage: isLightMode
            ? 'radial-gradient(rgba(100, 116, 139, 0.4) 1px, transparent 1px)'
            : 'radial-gradient(rgba(148, 163, 184, 0.5) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse 82% 70% at 50% 48%, black 30%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 82% 70% at 50% 48%, black 30%, transparent 80%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
