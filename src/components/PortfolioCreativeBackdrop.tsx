'use client';

import React from 'react';

interface PortfolioCreativeBackdropProps {
  isLightMode?: boolean;
}

export default function PortfolioCreativeBackdrop({ isLightMode = false }: PortfolioCreativeBackdropProps) {
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
      {/* 1. Dynamic Dual-Tone Aurora Ambient Glows (Electric Cyan & Royal Sapphire) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isLightMode
            ? `
              radial-gradient(ellipse 80% 55% at 50% 15%, rgba(14, 165, 233, 0.14) 0%, transparent 65%),
              radial-gradient(ellipse 65% 50% at 80% 28%, rgba(99, 102, 241, 0.12) 0%, transparent 65%),
              radial-gradient(ellipse 60% 45% at 20% 30%, rgba(0, 168, 143, 0.12) 0%, transparent 60%),
              radial-gradient(circle 600px at 50% 8%, #f8fafc 0%, #f1f5f9 100%)
            `
            : `
              radial-gradient(ellipse 85% 60% at 50% 15%, rgba(56, 189, 248, 0.22) 0%, transparent 70%),
              radial-gradient(ellipse 65% 55% at 85% 28%, rgba(129, 140, 248, 0.18) 0%, transparent 65%),
              radial-gradient(ellipse 60% 50% at 15% 30%, rgba(45, 212, 191, 0.18) 0%, transparent 65%),
              radial-gradient(circle 750px at 50% 5%, #050d24 0%, #020712 100%)
            `,
          transition: 'background 0.5s ease',
        }}
      />

      {/* 2. High-Tech Enterprise API Architecture Backdrop (Different from About's Sculpture!) */}
      <img
        src="/images/services/api_integration_3d.jpg"
        alt=""
        style={{
          position: 'absolute',
          top: '-8%',
          left: '50%',
          transform: 'translateX(-50%) scale(1.05)',
          width: '100%',
          maxWidth: '1500px',
          height: '115%',
          objectFit: 'cover',
          objectPosition: 'center 24%',
          opacity: isLightMode ? 0.12 : 0.26,
          filter: isLightMode ? 'saturate(1.2) contrast(1.1)' : 'saturate(1.3) brightness(0.92)',
          maskImage: 'radial-gradient(ellipse 85% 65% at 50% 36%, black 30%, rgba(0, 0, 0, 0.25) 68%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 36%, black 30%, rgba(0, 0, 0, 0.25) 68%, transparent 95%)',
        }}
      />

      {/* 3. 3D Perspective Digital Runway Grid (Gives a sense of speed and infinite delivery scale) */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-20%',
          right: '-20%',
          height: '500px',
          transform: 'perspective(600px) rotateX(68deg)',
          transformOrigin: 'bottom center',
          backgroundImage: isLightMode
            ? `
              linear-gradient(to right, rgba(14, 165, 233, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(14, 165, 233, 0.2) 1px, transparent 1px)
            `
            : `
              linear-gradient(to right, rgba(56, 189, 248, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56, 189, 248, 0.25) 1px, transparent 1px)
            `,
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(to top, black 20%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent 90%)',
          opacity: isLightMode ? 0.45 : 0.55,
        }}
      />

      {/* 4. Vertical Light Beams / Showcase Spotlights */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '25%',
          width: '2px',
          height: '65%',
          background: isLightMode
            ? 'linear-gradient(to bottom, transparent, rgba(14, 165, 233, 0.4), transparent)'
            : 'linear-gradient(to bottom, transparent, rgba(56, 189, 248, 0.5), transparent)',
          filter: 'blur(1px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: '25%',
          width: '2px',
          height: '65%',
          background: isLightMode
            ? 'linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.35), transparent)'
            : 'linear-gradient(to bottom, transparent, rgba(129, 140, 248, 0.45), transparent)',
          filter: 'blur(1px)',
        }}
      />

      {/* 5. Production Telemetry Badges (Bespoke to Portfolio & Case Studies) */}
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
        <span>PRODUCTION SLA: 99.99% VERIFIED</span>
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
        <span>DELIVERED: 75+ SCALE PLATFORMS</span>
      </div>

      {/* 6. Hexagonal Network Blueprint Texture */}
      <svg
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '3%',
          width: '320px',
          height: '240px',
          opacity: isLightMode ? 0.25 : 0.35,
        }}
        viewBox="0 0 320 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="160,20 200,45 200,95 160,120 120,95 120,45" stroke={isLightMode ? "#0284c7" : "#38bdf8"} strokeWidth="1" strokeDasharray="3 3" />
        <polygon points="240,65 280,90 280,140 240,165 200,140 200,90" stroke={isLightMode ? "#00a88f" : "#2dd4bf"} strokeWidth="1" strokeDasharray="4 4" />
        <polygon points="80,65 120,90 120,140 80,165 40,140 40,90" stroke={isLightMode ? "#6366f1" : "#818cf8"} strokeWidth="1" strokeDasharray="2 4" />
        <line x1="160" y1="120" x2="200" y2="140" stroke={isLightMode ? "#0284c7" : "#38bdf8"} strokeWidth="1" />
        <line x1="120" y1="140" x2="80" y2="140" stroke={isLightMode ? "#00a88f" : "#2dd4bf"} strokeWidth="1" />
      </svg>

      {/* 7. Bottom Gradient Blender for Seamless Transition to Case Studies Grid */}
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
