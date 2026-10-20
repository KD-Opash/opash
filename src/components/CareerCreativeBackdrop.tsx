'use client';

import React from 'react';

interface CareerCreativeBackdropProps {
  isLightMode?: boolean;
}

export default function CareerCreativeBackdrop({ isLightMode = false }: CareerCreativeBackdropProps) {
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
      {/* 1. Multi-Stop Vibrant Growth Aurora (Emerald & Cyan Energy) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isLightMode
            ? `
              radial-gradient(ellipse 75% 55% at 50% 12%, rgba(0, 168, 143, 0.14) 0%, transparent 65%),
              radial-gradient(ellipse 65% 50% at 85% 25%, rgba(14, 165, 233, 0.10) 0%, transparent 65%),
              radial-gradient(ellipse 60% 45% at 15% 30%, rgba(16, 185, 129, 0.10) 0%, transparent 60%),
              radial-gradient(circle 600px at 50% 8%, #f8fafc 0%, #f1f5f9 100%)
            `
            : `
              radial-gradient(ellipse 80% 55% at 50% 12%, rgba(0, 187, 171, 0.22) 0%, transparent 70%),
              radial-gradient(ellipse 65% 50% at 85% 25%, rgba(56, 189, 248, 0.16) 0%, transparent 65%),
              radial-gradient(ellipse 60% 45% at 15% 30%, rgba(16, 185, 129, 0.16) 0%, transparent 65%),
              radial-gradient(circle 750px at 50% 5%, #03141f 0%, #020712 100%)
            `,
          transition: 'background 0.5s ease',
        }}
      />

      {/* 2. 3D Engineering Craftsmanship Visual Texture */}
      <img
        src="/images/hero-sculpture-tech.jpg"
        alt=""
        style={{
          position: 'absolute',
          top: '-8%',
          left: '50%',
          transform: 'translateX(-50%) scale(1.05)',
          width: '100%',
          maxWidth: '1450px',
          height: '115%',
          objectFit: 'cover',
          objectPosition: 'center 25%',
          opacity: isLightMode ? 0.12 : 0.24,
          filter: isLightMode ? 'saturate(1.2) contrast(1.15)' : 'saturate(1.35) brightness(0.92)',
          maskImage: 'radial-gradient(ellipse 85% 65% at 50% 36%, black 25%, rgba(0, 0, 0, 0.2) 65%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 36%, black 25%, rgba(0, 0, 0, 0.2) 65%, transparent 95%)',
        }}
      />

      {/* 3. Career Constellation & Growth Trajectory Orbit SVG */}
      <svg
        style={{
          position: 'absolute',
          top: '48%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1200px',
          height: '750px',
          opacity: isLightMode ? 0.35 : 0.45,
        }}
        viewBox="0 0 1200 750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="careerTrajectory" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={isLightMode ? "#00a88f" : "#2dd4bf"} stopOpacity="0" />
            <stop offset="50%" stopColor={isLightMode ? "#00a88f" : "#2dd4bf"} stopOpacity="0.4" />
            <stop offset="100%" stopColor={isLightMode ? "#38bdf8" : "#38bdf8"} stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Parabolic Growth Curves */}
        <path d="M 100 650 Q 600 500 1100 150" stroke="url(#careerTrajectory)" strokeWidth="2" strokeDasharray="6 6" />
        <path d="M 250 680 Q 650 420 1050 220" stroke={isLightMode ? "rgba(14, 165, 233, 0.2)" : "rgba(56, 189, 248, 0.25)"} strokeWidth="1" strokeDasharray="3 8" />

        {/* Orbit Rings */}
        <ellipse cx="600" cy="380" rx="360" ry="180" stroke={isLightMode ? "rgba(0, 168, 143, 0.15)" : "rgba(45, 212, 191, 0.18)"} strokeWidth="1" strokeDasharray="4 8" />
        <ellipse cx="600" cy="380" rx="520" ry="260" stroke={isLightMode ? "rgba(2, 132, 199, 0.1)" : "rgba(56, 189, 248, 0.12)"} strokeWidth="1" strokeDasharray="2 10" />

        {/* Glowing Trajectory Nodes */}
        <circle cx="600" cy="460" r="4" fill={isLightMode ? "#00a88f" : "#2dd4bf"} />
        <circle cx="850" cy="325" r="5" fill={isLightMode ? "#0284c7" : "#38bdf8"} />
        <circle cx="1100" cy="150" r="7" fill={isLightMode ? "#00a88f" : "#2dd4bf"} />
      </svg>

      {/* 4. Precision Dot Matrix */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isLightMode ? 0.32 : 0.2,
          backgroundImage: isLightMode
            ? 'radial-gradient(#94a3b8 1px, transparent 1px)'
            : 'radial-gradient(#2dd4bf 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 35%, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 35%, black 40%, transparent 80%)',
        }}
      />

      {/* 5. Floating Career Telemetry Badges */}
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
        <span>SURAT HQ &bull; TOP 1% TECH TALENT</span>
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
        <span>ZERO MICRO-MANAGEMENT &bull; HIGH AGENCY</span>
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
