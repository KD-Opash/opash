'use client';

import React from 'react';

interface AboutCreativeBackdropProps {
  isLightMode?: boolean;
}

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
      }}
    >
      {/* 1. Base Multi-Stop Atmospheric Aurora Glows (Opash Emerald & Deep Cyan) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isLightMode
            ? `
              radial-gradient(ellipse 70% 50% at 50% 18%, rgba(0, 168, 143, 0.12) 0%, transparent 65%),
              radial-gradient(ellipse 60% 45% at 85% 25%, rgba(14, 165, 233, 0.10) 0%, transparent 65%),
              radial-gradient(ellipse 55% 40% at 15% 35%, rgba(99, 102, 241, 0.08) 0%, transparent 60%),
              radial-gradient(circle 600px at 50% 10%, #f8fafc 0%, #f1f5f9 100%)
            `
            : `
              radial-gradient(ellipse 75% 55% at 50% 18%, rgba(0, 187, 171, 0.22) 0%, transparent 70%),
              radial-gradient(ellipse 60% 50% at 85% 25%, rgba(56, 189, 248, 0.16) 0%, transparent 65%),
              radial-gradient(ellipse 55% 45% at 15% 35%, rgba(129, 140, 248, 0.14) 0%, transparent 60%),
              radial-gradient(circle 700px at 50% 5%, #040c1e 0%, #020712 100%)
            `,
          transition: 'background 0.5s ease',
        }}
      />

      {/* 2. 3D Architectural Glass Sculpture Centerpiece (Low opacity for cinematic texture) */}
      <img
        src="/images/hero_home.jpg"
        alt=""
        style={{
          position: 'absolute',
          top: '-6%',
          left: '50%',
          transform: 'translateX(-50%) scale(1.08)',
          width: '100%',
          maxWidth: '1500px',
          height: '115%',
          objectFit: 'cover',
          objectPosition: 'center 28%',
          opacity: isLightMode ? 0.14 : 0.30,
          filter: isLightMode ? 'saturate(1.2) contrast(1.15)' : 'saturate(1.35) brightness(0.95)',
          maskImage: 'radial-gradient(ellipse 80% 65% at 50% 40%, black 35%, rgba(0, 0, 0, 0.2) 70%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 40%, black 35%, rgba(0, 0, 0, 0.2) 70%, transparent 95%)',
        }}
      />

      {/* 3. Unique Creative Architectural Schematics / Radar Rings & Coordinate Axis */}
      <svg
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1200px',
          height: '800px',
          opacity: isLightMode ? 0.35 : 0.45,
        }}
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="aboutRadarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={isLightMode ? "#00a88f" : "#2dd4bf"} stopOpacity="0.4" />
            <stop offset="70%" stopColor={isLightMode ? "#0284c7" : "#38bdf8"} stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="aboutAxisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isLightMode ? "#00a88f" : "#2dd4bf"} stopOpacity="0" />
            <stop offset="50%" stopColor={isLightMode ? "#00a88f" : "#2dd4bf"} stopOpacity="0.35" />
            <stop offset="100%" stopColor={isLightMode ? "#00a88f" : "#2dd4bf"} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Concentric Architectural Rings */}
        <circle cx="600" cy="400" r="140" stroke="url(#aboutAxisGrad)" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="600" cy="400" r="260" stroke={isLightMode ? "rgba(0, 168, 143, 0.18)" : "rgba(45, 212, 191, 0.2)"} strokeWidth="1" strokeDasharray="8 8" />
        <circle cx="600" cy="400" r="390" stroke={isLightMode ? "rgba(2, 132, 199, 0.14)" : "rgba(56, 189, 248, 0.16)"} strokeWidth="1" strokeDasharray="3 9" />
        <circle cx="600" cy="400" r="510" stroke={isLightMode ? "rgba(99, 102, 241, 0.1)" : "rgba(129, 140, 248, 0.12)"} strokeWidth="1" strokeDasharray="2 12" />

        {/* Axis Crosshairs */}
        <line x1="200" y1="400" x2="1000" y2="400" stroke="url(#aboutAxisGrad)" strokeWidth="1" />
        <line x1="600" y1="120" x2="600" y2="680" stroke="url(#aboutAxisGrad)" strokeWidth="1" />

        {/* Subtle Tech Coordinate Reticles */}
        <circle cx="600" cy="140" r="4" fill={isLightMode ? "#00a88f" : "#2dd4bf"} />
        <circle cx="600" cy="660" r="4" fill={isLightMode ? "#00a88f" : "#2dd4bf"} />
        <circle cx="340" cy="400" r="4" fill={isLightMode ? "#0284c7" : "#38bdf8"} />
        <circle cx="860" cy="400" r="4" fill={isLightMode ? "#0284c7" : "#38bdf8"} />
      </svg>

      {/* 4. Architectural Isometric Dot Matrix Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isLightMode ? 0.35 : 0.22,
          backgroundImage: isLightMode
            ? 'radial-gradient(#94a3b8 1.1px, transparent 1.1px)'
            : 'radial-gradient(#38bdf8 1.1px, transparent 1.1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 38%, black 35%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 38%, black 35%, transparent 80%)',
        }}
      />

      {/* 5. Floating Architectural Telemetry Chips (Bespoke to About / Company) */}
      <div
        className="hidden xl:flex"
        style={{
          position: 'absolute',
          top: '11%',
          left: '4%',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: '9999px',
          background: isLightMode ? 'rgba(255, 255, 255, 0.75)' : 'rgba(15, 23, 42, 0.65)',
          border: isLightMode ? '1px solid rgba(0, 168, 143, 0.2)' : '1px solid rgba(45, 212, 191, 0.25)',
          backdropFilter: 'blur(10px)',
          fontSize: '0.74rem',
          fontFamily: 'monospace',
          letterSpacing: '0.04em',
          color: isLightMode ? '#008a75' : '#2dd4bf',
          boxShadow: isLightMode ? '0 4px 16px rgba(0, 168, 143, 0.08)' : '0 4px 20px rgba(0, 0, 0, 0.4)',
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: isLightMode ? '#00a88f' : '#2dd4bf',
            boxShadow: '0 0 8px #2dd4bf',
          }}
        />
        <span>SURAT HQ: 21.1702° N, 72.8311° E</span>
      </div>

      <div
        className="hidden xl:flex"
        style={{
          position: 'absolute',
          top: '11%',
          right: '4%',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: '9999px',
          background: isLightMode ? 'rgba(255, 255, 255, 0.75)' : 'rgba(15, 23, 42, 0.65)',
          border: isLightMode ? '1px solid rgba(2, 132, 199, 0.2)' : '1px solid rgba(56, 189, 248, 0.25)',
          backdropFilter: 'blur(10px)',
          fontSize: '0.74rem',
          fontFamily: 'monospace',
          letterSpacing: '0.04em',
          color: isLightMode ? '#0284c7' : '#38bdf8',
          boxShadow: isLightMode ? '0 4px 16px rgba(2, 132, 199, 0.08)' : '0 4px 20px rgba(0, 0, 0, 0.4)',
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: isLightMode ? '#0284c7' : '#38bdf8',
            boxShadow: '0 0 8px #38bdf8',
          }}
        />
        <span>ISO/IEC 25010 &bull; 96% RETENTION</span>
      </div>

      {/* 6. Soft Opash Portal Watermark */}
      <img
        src="/images/opash-o-portal-dark.png"
        alt=""
        style={{
          position: 'absolute',
          top: '8%',
          right: '5%',
          width: '520px',
          height: '520px',
          opacity: isLightMode ? 0.035 : 0.055,
          transform: 'rotate(-10deg)',
          filter: 'blur(2px)',
        }}
      />

      {/* 7. Bottom Gradient Blender for Flawless Page Flow */}
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
        }}
      />
    </div>
  );
}
