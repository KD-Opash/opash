'use client';

import React from 'react';

interface BlogsCreativeBackdropProps {
  isLightMode?: boolean;
}

export default function BlogsCreativeBackdrop({ isLightMode = false }: BlogsCreativeBackdropProps) {
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
      {/* 1. Multi-Stop Atmospheric Gradients (Knowledge Matrix Glow) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isLightMode
            ? `
              radial-gradient(ellipse 75% 55% at 50% 12%, rgba(0, 168, 143, 0.12) 0%, transparent 65%),
              radial-gradient(ellipse 65% 50% at 85% 25%, rgba(99, 102, 241, 0.10) 0%, transparent 65%),
              radial-gradient(ellipse 60% 45% at 15% 30%, rgba(14, 165, 233, 0.10) 0%, transparent 60%),
              radial-gradient(circle 600px at 50% 8%, #f8fafc 0%, #f1f5f9 100%)
            `
            : `
              radial-gradient(ellipse 80% 55% at 50% 12%, rgba(0, 187, 171, 0.20) 0%, transparent 70%),
              radial-gradient(ellipse 65% 50% at 85% 25%, rgba(129, 140, 248, 0.16) 0%, transparent 65%),
              radial-gradient(ellipse 60% 45% at 15% 30%, rgba(56, 189, 248, 0.16) 0%, transparent 65%),
              radial-gradient(circle 750px at 50% 5%, #050d22 0%, #020712 100%)
            `,
          transition: 'background 0.5s ease',
        }}
      />

      {/* 2. Bespoke 3D AI & Engineering Innovation Backdrop */}
      <img
        src="/images/services/ai_ml_3d.jpg"
        alt=""
        style={{
          position: 'absolute',
          top: '-12%',
          left: '50%',
          transform: 'translateX(-50%) scale(1.04)',
          width: '100%',
          maxWidth: '1400px',
          height: '120%',
          objectFit: 'cover',
          objectPosition: 'center 20%',
          opacity: isLightMode ? 0.08 : 0.20,
          filter: isLightMode ? 'saturate(1.2) contrast(1.1)' : 'saturate(1.3) brightness(0.9)',
          maskImage: 'radial-gradient(ellipse 85% 65% at 50% 36%, black 25%, rgba(0, 0, 0, 0.2) 65%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 36%, black 25%, rgba(0, 0, 0, 0.2) 65%, transparent 95%)',
        }}
      />

      {/* 3. Knowledge Graph Neural Constellation SVG */}
      <svg
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1200px',
          height: '700px',
          opacity: isLightMode ? 0.35 : 0.45,
        }}
        viewBox="0 0 1200 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="blogLineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isLightMode ? "#00a88f" : "#2dd4bf"} stopOpacity="0.4" />
            <stop offset="100%" stopColor={isLightMode ? "#0284c7" : "#38bdf8"} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="blogLineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isLightMode ? "#6366f1" : "#818cf8"} stopOpacity="0.4" />
            <stop offset="100%" stopColor={isLightMode ? "#00a88f" : "#2dd4bf"} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Neural connection vectors */}
        <line x1="200" y1="200" x2="450" y2="350" stroke="url(#blogLineGrad1)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="450" y1="350" x2="750" y2="350" stroke="url(#blogLineGrad1)" strokeWidth="1" />
        <line x1="750" y1="350" x2="1000" y2="220" stroke="url(#blogLineGrad2)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="450" y1="350" x2="600" y2="520" stroke="url(#blogLineGrad2)" strokeWidth="1" strokeDasharray="2 6" />
        <line x1="750" y1="350" x2="600" y2="520" stroke="url(#blogLineGrad1)" strokeWidth="1" />

        {/* Constellation Nodes */}
        <circle cx="200" cy="200" r="4" fill={isLightMode ? "#00a88f" : "#2dd4bf"} />
        <circle cx="450" cy="350" r="6" fill={isLightMode ? "#0284c7" : "#38bdf8"} />
        <circle cx="750" cy="350" r="6" fill={isLightMode ? "#6366f1" : "#818cf8"} />
        <circle cx="1000" cy="220" r="4" fill={isLightMode ? "#00a88f" : "#2dd4bf"} />
        <circle cx="600" cy="520" r="5" fill={isLightMode ? "#0284c7" : "#38bdf8"} />

        {/* Surrounding concentric orbits */}
        <circle cx="600" cy="350" r="280" stroke={isLightMode ? "rgba(0, 168, 143, 0.12)" : "rgba(45, 212, 191, 0.15)"} strokeWidth="1" strokeDasharray="6 8" />
        <circle cx="600" cy="350" r="440" stroke={isLightMode ? "rgba(2, 132, 199, 0.08)" : "rgba(56, 189, 248, 0.10)"} strokeWidth="1" strokeDasharray="3 10" />
      </svg>

      {/* 4. Architectural Dot Matrix Grid */}
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

      {/* 5. Floating Knowledge Telemetry Badges */}
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
        <span>PEER-REVIEWED ARCHITECTURE WHITEPAPERS</span>
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
          border: isLightMode ? '1px solid rgba(99, 102, 241, 0.2)' : '1px solid rgba(129, 140, 248, 0.25)',
          backdropFilter: 'blur(10px)',
          fontSize: '0.74rem',
          fontFamily: 'monospace',
          letterSpacing: '0.04em',
          color: isLightMode ? '#6366f1' : '#818cf8',
          boxShadow: isLightMode ? '0 4px 16px rgba(99, 102, 241, 0.08)' : '0 4px 20px rgba(0, 0, 0, 0.4)',
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: isLightMode ? '#6366f1' : '#818cf8',
            boxShadow: '0 0 8px #818cf8',
          }}
        />
        <span>PRODUCTION TELEMETRY &bull; 0% VENDOR BIAS</span>
      </div>

      {/* 6. Bottom Transition Feather Blender */}
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
