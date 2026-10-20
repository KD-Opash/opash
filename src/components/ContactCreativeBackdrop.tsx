'use client';

import React from 'react';

interface ContactCreativeBackdropProps {
  isLightMode?: boolean;
}

export default function ContactCreativeBackdrop({ isLightMode = false }: ContactCreativeBackdropProps) {
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
      {/* 1. Multi-Stop Vibrant Signal Aura (Electric Cyan, Sky & Deep Indigo) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isLightMode
            ? `
              radial-gradient(ellipse 75% 55% at 50% 10%, rgba(14, 165, 233, 0.15) 0%, transparent 65%),
              radial-gradient(ellipse 65% 50% at 85% 25%, rgba(0, 168, 143, 0.12) 0%, transparent 65%),
              radial-gradient(ellipse 60% 45% at 15% 30%, rgba(99, 102, 241, 0.10) 0%, transparent 60%),
              radial-gradient(circle 600px at 50% 5%, #f8fafc 0%, #f1f5f9 100%)
            `
            : `
              radial-gradient(ellipse 80% 55% at 50% 10%, rgba(0, 255, 209, 0.20) 0%, transparent 70%),
              radial-gradient(ellipse 65% 50% at 85% 25%, rgba(56, 189, 248, 0.18) 0%, transparent 65%),
              radial-gradient(ellipse 60% 45% at 15% 30%, rgba(99, 102, 241, 0.16) 0%, transparent 65%),
              radial-gradient(circle 750px at 50% 5%, #051026 0%, #020712 100%)
            `,
          transition: 'background 0.5s ease',
        }}
      />

      {/* 2. 3D Architectural Tech Backdrop Texture */}
      <img
        src="/images/hero-sculpture-tech.jpg"
        alt=""
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%) scale(1.08)',
          width: '100%',
          maxWidth: '1450px',
          height: '115%',
          objectFit: 'cover',
          objectPosition: 'center 20%',
          opacity: isLightMode ? 0.12 : 0.22,
          filter: isLightMode ? 'saturate(1.2) contrast(1.15)' : 'saturate(1.3) brightness(0.9)',
          maskImage: 'radial-gradient(ellipse 85% 65% at 50% 36%, black 25%, rgba(0, 0, 0, 0.2) 65%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 36%, black 25%, rgba(0, 0, 0, 0.2) 65%, transparent 95%)',
        }}
      />

      {/* 3. Global Telemetry & Signal Beacon SVG */}
      <svg
        style={{
          position: 'absolute',
          top: '48%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1240px',
          height: '760px',
          opacity: isLightMode ? 0.35 : 0.45,
        }}
        viewBox="0 0 1240 760"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="contactSignalBeam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isLightMode ? "#0284c7" : "#38bdf8"} stopOpacity="0.7" />
            <stop offset="100%" stopColor={isLightMode ? "#00a88f" : "#00ffd1"} stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Global Connection Arcs radiating from Surat HQ Center (620, 380) */}
        <path d="M 620 380 Q 320 220 180 320" stroke="url(#contactSignalBeam)" strokeWidth="1.5" strokeDasharray="6 6" />
        <path d="M 620 380 Q 420 140 320 180" stroke={isLightMode ? "rgba(99, 102, 241, 0.3)" : "rgba(129, 140, 248, 0.4)"} strokeWidth="1" strokeDasharray="4 8" />
        <path d="M 620 380 Q 820 180 1020 280" stroke="url(#contactSignalBeam)" strokeWidth="1.5" strokeDasharray="6 6" />
        <path d="M 620 380 Q 900 480 1120 420" stroke={isLightMode ? "rgba(0, 168, 143, 0.3)" : "rgba(0, 255, 209, 0.4)"} strokeWidth="1" strokeDasharray="5 7" />

        {/* Concentric Radar Beacon Rings */}
        <ellipse cx="620" cy="380" rx="140" ry="70" stroke={isLightMode ? "rgba(2, 132, 199, 0.25)" : "rgba(56, 189, 248, 0.35)"} strokeWidth="1.5" strokeDasharray="6 6" />
        <ellipse cx="620" cy="380" rx="280" ry="140" stroke={isLightMode ? "rgba(0, 168, 143, 0.18)" : "rgba(0, 255, 209, 0.22)"} strokeWidth="1" strokeDasharray="4 8" />
        <ellipse cx="620" cy="380" rx="460" ry="230" stroke={isLightMode ? "rgba(99, 102, 241, 0.12)" : "rgba(129, 140, 248, 0.15)"} strokeWidth="1" strokeDasharray="3 10" />
        <ellipse cx="620" cy="380" rx="600" ry="300" stroke={isLightMode ? "rgba(2, 132, 199, 0.08)" : "rgba(56, 189, 248, 0.1)"} strokeWidth="1" strokeDasharray="2 12" />

        {/* Central Surat HQ Beacon Node */}
        <circle cx="620" cy="380" r="7" fill={isLightMode ? "#00a88f" : "#00ffd1"} />
        <circle cx="620" cy="380" r="16" stroke={isLightMode ? "#00a88f" : "#00ffd1"} strokeWidth="1.5" opacity="0.6" />

        {/* Global Node Endpoint Circles */}
        <circle cx="180" cy="320" r="5" fill={isLightMode ? "#0284c7" : "#38bdf8"} />
        <circle cx="320" cy="180" r="4" fill={isLightMode ? "#6366f1" : "#818cf8"} />
        <circle cx="1020" cy="280" r="5" fill={isLightMode ? "#0284c7" : "#38bdf8"} />
        <circle cx="1120" cy="420" r="4" fill={isLightMode ? "#00a88f" : "#00ffd1"} />
      </svg>

      {/* 4. Fine Matrix Coordinate Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isLightMode ? 0.32 : 0.2,
          backgroundImage: isLightMode
            ? 'radial-gradient(#94a3b8 1px, transparent 1px)'
            : 'radial-gradient(#38bdf8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 35%, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 35%, black 40%, transparent 80%)',
        }}
      />

      {/* 5. Floating Telemetry Badges */}
      <div
        className="hidden xl:flex"
        style={{
          position: 'absolute',
          top: '12%',
          left: '4%',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: '9999px',
          background: isLightMode ? 'rgba(255, 255, 255, 0.75)' : 'rgba(15, 23, 42, 0.65)',
          border: isLightMode ? '1px solid rgba(0, 168, 143, 0.2)' : '1px solid rgba(0, 255, 209, 0.25)',
          backdropFilter: 'blur(10px)',
          fontSize: '0.74rem',
          fontFamily: 'monospace',
          letterSpacing: '0.04em',
          color: isLightMode ? '#008a75' : '#00ffd1',
          boxShadow: isLightMode ? '0 4px 16px rgba(0, 168, 143, 0.08)' : '0 4px 20px rgba(0, 0, 0, 0.4)',
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: isLightMode ? '#00a88f' : '#00ffd1',
            boxShadow: '0 0 8px #00ffd1',
          }}
        />
        <span>SURAT HQ &bull; LAT 21.1855&deg; N, LON 72.7831&deg; E</span>
      </div>

      <div
        className="hidden xl:flex"
        style={{
          position: 'absolute',
          top: '12%',
          right: '4%',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: '9999px',
          background: isLightMode ? 'rgba(255, 255, 255, 0.75)' : 'rgba(15, 23, 42, 0.65)',
          border: isLightMode ? '1px solid rgba(14, 165, 233, 0.2)' : '1px solid rgba(56, 189, 248, 0.25)',
          backdropFilter: 'blur(10px)',
          fontSize: '0.74rem',
          fontFamily: 'monospace',
          letterSpacing: '0.04em',
          color: isLightMode ? '#0284c7' : '#38bdf8',
          boxShadow: isLightMode ? '0 4px 16px rgba(14, 165, 233, 0.08)' : '0 4px 20px rgba(0, 0, 0, 0.4)',
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
        <span>SLA: &lt; 4 HOURS &bull; 100% NDA PROTECTED</span>
      </div>

      {/* 6. Bottom Feather Blender */}
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
