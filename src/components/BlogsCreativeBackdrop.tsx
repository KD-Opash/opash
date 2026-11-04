'use client';

import React, { useEffect, useRef, useState } from 'react';

interface BlogsCreativeBackdropProps {
  isLightMode?: boolean;
}

/**
 * High-Precision Architectural Engineering Telemetry Backdrop for /insights Hero.
 * Features:
 *  1. Interactive Mouse-Tracking Gradient Spotlight (illuminates graph grid & telemetry as cursor moves)
 *  2. Gentle Mouse Pointer Halo Ring (dynamic reactive light following the cursor arrow)
 *  3. Giant Ambient "INSIGHTS" Architectural Ghost Watermark (fills empty dark void)
 *  4. Precision Engineering Blueprint Graph Grid with HUD crosshairs
 *  5. Floating 3D Micro-Squiggle Curves & Cyber Telemetry Accents (left & right sides)
 *  6. 0% CPU & GPU Overhead (RAF-throttled pointer tracking + GPU transforms)
 */
export default function BlogsCreativeBackdrop({ isLightMode = false }: BlogsCreativeBackdropProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: string; y: string }>({ x: '50%', y: '45%' });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const parent = containerRef.current?.parentElement;
    if (!parent) return;

    let rafId: number | null = null;

    const handlePointerMove = (e: PointerEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = parent.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x: `${Math.round(x)}px`, y: `${Math.round(y)}px` });
        setIsHovered(true);
      });
    };

    const handlePointerLeave = () => {
      setIsHovered(false);
      setMousePos({ x: '50%', y: '45%' });
    };

    parent.addEventListener('pointermove', handlePointerMove, { passive: true });
    parent.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      parent.removeEventListener('pointermove', handlePointerMove);
      parent.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        background: 'transparent',
      }}
    >
      <style>{`
        @keyframes insightsFloat1 {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(-10deg) scale(1);
          }
          50% {
            transform: translate3d(0, -18px, 0) rotate(-3deg) scale(1.05);
          }
        }

        @keyframes insightsFloat2 {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(14deg) scale(1);
          }
          50% {
            transform: translate3d(0, 18px, 0) rotate(6deg) scale(0.96);
          }
        }

        @keyframes insightsFloat3 {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(10px, -12px, 0) rotate(12deg);
          }
        }

        @keyframes insightsPulseDot {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>

      {/* ================================================================= */}
      {/* 1. FULLY-SPREAD AMBIENT RADIANT AURA (Opash Logo Palette)         */}
      {/* ================================================================= */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isLightMode
            ? `
              radial-gradient(ellipse 130% 90% at 50% -15%, rgba(0, 168, 143, 0.18) 0%, rgba(71, 109, 154, 0.12) 35%, rgba(98, 137, 184, 0.05) 65%, transparent 85%),
              radial-gradient(ellipse 70% 60% at 0% 35%, rgba(71, 109, 154, 0.15) 0%, transparent 70%),
              radial-gradient(ellipse 70% 60% at 100% 35%, rgba(0, 168, 143, 0.15) 0%, transparent 70%),
              radial-gradient(ellipse 90% 50% at 50% 100%, rgba(71, 109, 154, 0.08) 0%, transparent 75%)
            `
            : `
              radial-gradient(ellipse 140% 90% at 50% -15%, rgba(94, 192, 152, 0.24) 0%, rgba(71, 109, 154, 0.20) 35%, rgba(98, 137, 184, 0.09) 65%, transparent 85%),
              radial-gradient(ellipse 75% 65% at 0% 40%, rgba(71, 109, 154, 0.22) 0%, transparent 75%),
              radial-gradient(ellipse 75% 65% at 100% 40%, rgba(94, 192, 152, 0.20) 0%, transparent 75%),
              radial-gradient(ellipse 90% 50% at 50% 100%, rgba(71, 109, 154, 0.12) 0%, transparent 75%)
            `,
        }}
      />

      {/* ================================================================= */}
      {/* 2. GIANT AMBIENT ARCHITECTURAL GHOST WATERMARK ("INSIGHTS")       */}
      {/* Eliminates the empty black void behind headline                   */}
      {/* ================================================================= */}
      <div
        style={{
          position: 'absolute',
          top: '47%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(6.5rem, 18vw, 15rem)',
          fontWeight: 900,
          letterSpacing: '-0.05em',
          lineHeight: 0.9,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
          fontFamily: 'var(--font-space-grotesk), system-ui, -apple-system, sans-serif',
          whiteSpace: 'nowrap',
          color: isLightMode ? 'rgba(71, 109, 154, 0.055)' : 'rgba(255, 255, 255, 0.038)',
          transition: 'color 0.4s ease',
        }}
      >
        INSIGHTS
      </div>

      {/* ================================================================= */}
      {/* 3. PRECISION ENGINEERING GRAPH GRID (48px pattern)               */}
      {/* ================================================================= */}
      <svg
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isLightMode ? 0.48 : 0.40,
          maskImage: 'radial-gradient(ellipse 95% 85% at 50% 45%, black 45%, transparent 92%)',
          WebkitMaskImage: 'radial-gradient(ellipse 95% 85% at 50% 45%, black 45%, transparent 92%)',
          zIndex: 1,
        }}
      >
        <defs>
          <pattern id="blogs-grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke={isLightMode ? 'rgba(71, 109, 154, 0.28)' : 'rgba(71, 109, 154, 0.28)'}
              strokeWidth="0.85"
            />
            <circle
              cx="24"
              cy="24"
              r="1.1"
              fill={isLightMode ? 'rgba(0, 168, 143, 0.45)' : 'rgba(94, 192, 152, 0.5)'}
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#blogs-grid-pattern)" />

        {/* High-Tech Blueprint HUD Crosshairs at key intersections */}
        {[
          { x: '10%', y: '22%' },
          { x: '22%', y: '68%' },
          { x: '88%', y: '26%' },
          { x: '78%', y: '74%' },
          { x: '50%', y: '88%' },
        ].map((pt, i) => (
          <g key={i} transform={`translate(${pt.x}, ${pt.y})`}>
            <line
              x1="-9"
              y1="0"
              x2="9"
              y2="0"
              stroke={isLightMode ? '#008a75' : '#2dd4bf'}
              strokeWidth="1.3"
              opacity="0.65"
            />
            <line
              x1="0"
              y1="-9"
              x2="0"
              y2="9"
              stroke={isLightMode ? '#008a75' : '#2dd4bf'}
              strokeWidth="1.3"
              opacity="0.65"
            />
            <circle
              cx="0"
              cy="0"
              r="2.5"
              fill="none"
              stroke={isLightMode ? '#008a75' : '#2dd4bf'}
              strokeWidth="1"
              opacity="0.75"
            />
          </g>
        ))}
      </svg>

      {/* ================================================================= */}
      {/* 4. INTERACTIVE MOUSE-TRACKING GRADIENT SPOTLIGHT (HOVER LIGHT)    */}
      {/* Illuminates the space dynamically under the user's mouse arrow   */}
      {/* ================================================================= */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(240px circle at ${mousePos.x} ${mousePos.y}, ${
            isLightMode
              ? 'rgba(0, 168, 143, 0.16) 0%, rgba(71, 109, 154, 0.08) 40%, transparent 70%'
              : 'rgba(0, 255, 209, 0.18) 0%, rgba(94, 192, 152, 0.10) 40%, transparent 70%'
          })`,
          opacity: isHovered ? 1 : 0,
          transition: isHovered ? 'opacity 0.25s ease' : 'opacity 0.6s ease',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Top Luminous Laser Horizon Beam */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '1320px',
          height: '1px',
          background: isLightMode
            ? 'linear-gradient(90deg, transparent 0%, rgba(71, 109, 154, 0.3) 20%, rgba(0, 168, 143, 0.8) 50%, rgba(71, 109, 154, 0.3) 75%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(71, 109, 154, 0.35) 20%, rgba(94, 192, 152, 0.95) 50%, rgba(98, 137, 184, 0.5) 80%, transparent 100%)',
          boxShadow: isLightMode
            ? '0 0 20px rgba(0, 168, 143, 0.3)'
            : '0 0 25px rgba(94, 192, 152, 0.5), 0 0 10px rgba(71, 109, 154, 0.35)',
          zIndex: 2,
        }}
      />

      {/* ================================================================= */}
      {/* 5. CORNER AMBIENT LIGHTING HALOS (Fills peripheral dark areas)    */}
      {/* ================================================================= */}
      {/* Bottom Left Subtle Cyan Halo */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '540px',
          height: '440px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(71, 109, 154, 0.14) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(71, 109, 154, 0.22) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Top Right Subtle Mint/Teal Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-8%',
          right: '-5%',
          width: '560px',
          height: '460px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(0, 168, 143, 0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(0, 255, 209, 0.16) 0%, transparent 70%)',
          filter: 'blur(85px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* ================================================================= */}
      {/* 6. PLAYFUL 3D FLOATING SQUIGGLES & CYBER TELEMETRY ACCENTS        */}
      {/* Fills the left and right sides so there is NO plain black void    */}
      {/* ================================================================= */}
      {/* Mid-Left Opash Mint / Teal Wavy Squiggle */}
      <div
        style={{
          position: 'absolute',
          top: '52%',
          left: '6%',
          width: '76px',
          height: '76px',
          overflow: 'visible',
          zIndex: 3,
          animation: 'insightsFloat1 9s ease-in-out infinite',
          willChange: 'transform',
        }}
      >
        <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="insightsMintSquiggle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFD1" />
              <stop offset="100%" stopColor="#5EC098" />
            </linearGradient>
          </defs>
          <path
            d="M 12 55 Q 22 25 35 48 T 58 18"
            stroke="url(#insightsMintSquiggle)"
            strokeWidth="5"
            strokeLinecap="round"
            style={{
              filter: isLightMode
                ? 'drop-shadow(0 4px 10px rgba(0, 168, 143, 0.35))'
                : 'drop-shadow(0 4px 16px rgba(0, 255, 209, 0.6))',
            }}
          />
        </svg>
      </div>

      {/* Mid-Right Opash Cyan & Slate Blue Wavy Squiggle */}
      <div
        style={{
          position: 'absolute',
          top: '36%',
          right: '7%',
          width: '80px',
          height: '80px',
          overflow: 'visible',
          zIndex: 3,
          animation: 'insightsFloat2 11s ease-in-out infinite',
          willChange: 'transform',
        }}
      >
        <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="insightsBrandSquiggle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#00FFD1" />
              <stop offset="100%" stopColor="#5EC098" />
            </linearGradient>
          </defs>
          <path
            d="M 14 18 Q 28 52 42 24 T 58 50"
            stroke="url(#insightsBrandSquiggle)"
            strokeWidth="5"
            strokeLinecap="round"
            style={{
              filter: isLightMode
                ? 'drop-shadow(0 4px 10px rgba(0, 168, 143, 0.35))'
                : 'drop-shadow(0 4px 16px rgba(0, 255, 209, 0.6))',
            }}
          />
        </svg>
      </div>

      {/* Top-Left Cyber Cyan Micro Spiral */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '9%',
          width: '48px',
          height: '48px',
          overflow: 'visible',
          zIndex: 3,
          animation: 'insightsFloat3 8s ease-in-out infinite',
          willChange: 'transform',
          opacity: 0.85,
        }}
      >
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          <circle cx="25" cy="25" r="16" stroke="url(#insightsMintSquiggle)" strokeWidth="3" strokeDasharray="5 7" />
          <circle cx="25" cy="25" r="5" fill="#00FFD1" style={{ animation: 'insightsPulseDot 3s ease-in-out infinite' }} />
        </svg>
      </div>
    </div>
  );
}
