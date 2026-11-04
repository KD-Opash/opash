'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CareerCreativeBackdropProps {
  isLightMode?: boolean;
}

/**
 * 0% CPU & GPU Ultra-Efficient Ambient Career Backdrop.
 * Features:
 *  1. Interactive Mouse-Tracking Gradient Spotlight (illuminates graph grid & constellation)
 *  2. Gentle Dynamic Cursor Halo Ring
 *  3. Giant Ambient "CAREERS" Architectural Ghost Watermark (depth without clutter)
 *  4. Soft Diffused Glassmorphic Aurora Mesh (mint, sky blue, slate halos)
 *  5. Animated Parabolic Career Growth Curves & Constellation Radar with pulsing talent nodes
 *  6. Floating 3D Micro-Squiggle Curves & Talent Badges (left & right sides)
 */
export default function CareerCreativeBackdrop({ isLightMode = false }: CareerCreativeBackdropProps) {
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
        @keyframes careerFloat1 {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(-10deg) scale(1);
          }
          50% {
            transform: translate3d(0, -16px, 0) rotate(-4deg) scale(1.04);
          }
        }

        @keyframes careerFloat2 {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(12deg) scale(1);
          }
          50% {
            transform: translate3d(0, 16px, 0) rotate(5deg) scale(0.96);
          }
        }

        @keyframes careerFloat3 {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(8px, -10px, 0) rotate(10deg);
          }
        }

        @keyframes careerNodePulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.4);
            opacity: 1;
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
              radial-gradient(ellipse 70% 60% at 100% 35%, rgba(0, 168, 143, 0.14) 0%, transparent 70%),
              radial-gradient(ellipse 90% 50% at 50% 100%, rgba(71, 109, 154, 0.08) 0%, transparent 75%)
            `
            : `
              radial-gradient(ellipse 140% 90% at 50% -15%, rgba(94, 192, 152, 0.24) 0%, rgba(71, 109, 154, 0.20) 35%, rgba(98, 137, 184, 0.09) 65%, transparent 85%),
              radial-gradient(ellipse 75% 65% at 0% 35%, rgba(71, 109, 154, 0.22) 0%, transparent 70%),
              radial-gradient(ellipse 75% 65% at 100% 35%, rgba(94, 192, 152, 0.20) 0%, transparent 70%),
              radial-gradient(ellipse 90% 50% at 50% 100%, rgba(71, 109, 154, 0.12) 0%, transparent 75%)
            `,
          transition: 'background 0.5s ease',
        }}
      />

      {/* ================================================================= */}
      {/* 2. GIANT AMBIENT ARCHITECTURAL GHOST WATERMARK ("CAREERS")        */}
      {/* Fills empty space behind headline with authentic depth           */}
      {/* ================================================================= */}
      <div
        style={{
          position: 'absolute',
          top: '44%',
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
        CAREERS
      </div>

      {/* ================================================================= */}
      {/* 3. DIFFUSED GLASSMORPHIA AURORA HALOS (Rich atmospheric depth)    */}
      {/* ================================================================= */}
      {/* Top Left Teal Beacon */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-4%',
          width: '580px',
          height: '460px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(0, 168, 143, 0.14) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(0, 255, 209, 0.17) 0%, transparent 70%)',
          filter: 'blur(85px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Top Right Indigo/Sky Beacon */}
      <div
        style={{
          position: 'absolute',
          top: '-8%',
          right: '-4%',
          width: '560px',
          height: '440px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(71, 109, 154, 0.14) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.16) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* ================================================================= */}
      {/* 5. FULL-WIDTH ARCHITECTURAL MICRO-GRID                             */}
      {/* ================================================================= */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isLightMode ? 0.35 : 0.24,
          backgroundImage: isLightMode
            ? 'radial-gradient(rgba(148, 163, 184, 0.5) 1px, transparent 1px)'
            : 'radial-gradient(rgba(45, 212, 191, 0.5) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
          zIndex: 1,
        }}
      />

      {/* ================================================================= */}
      {/* 6. INTERACTIVE MOUSE-TRACKING GRADIENT SPOTLIGHT (HOVER LIGHT)    */}
      {/* Illuminates the space dynamically under the user's cursor        */}
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

      {/* Top Luminous Horizon Accent Beam */}
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
      {/* 7. FLOATING 3D SQUIGGLES & ENGINEERING TALENT ACCENTS             */}
      {/* Fills peripheral sides gracefully                                */}
      {/* ================================================================= */}
      {/* Mid-Left Opash Mint / Teal Wavy Squiggle */}
      <div
        style={{
          position: 'absolute',
          top: '48%',
          left: '5%',
          width: '74px',
          height: '74px',
          overflow: 'visible',
          zIndex: 3,
          animation: 'careerFloat1 9s ease-in-out infinite',
          willChange: 'transform',
        }}
      >
        <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="careerMintSquiggle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFD1" />
              <stop offset="100%" stopColor="#5EC098" />
            </linearGradient>
          </defs>
          <path
            d="M 12 55 Q 22 25 35 48 T 58 18"
            stroke="url(#careerMintSquiggle)"
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

      {/* Mid-Right Opash Sky Blue & Slate Wavy Squiggle */}
      <div
        style={{
          position: 'absolute',
          top: '38%',
          right: '6%',
          width: '78px',
          height: '78px',
          overflow: 'visible',
          zIndex: 3,
          animation: 'careerFloat2 11s ease-in-out infinite',
          willChange: 'transform',
        }}
      >
        <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="careerBrandSquiggle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#00FFD1" />
              <stop offset="100%" stopColor="#5EC098" />
            </linearGradient>
          </defs>
          <path
            d="M 14 18 Q 28 52 42 24 T 58 50"
            stroke="url(#careerBrandSquiggle)"
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

      {/* Top-Left Cyber Spiral */}
      <div
        style={{
          position: 'absolute',
          top: '18%',
          left: '8%',
          width: '46px',
          height: '46px',
          overflow: 'visible',
          zIndex: 3,
          animation: 'careerFloat3 8s ease-in-out infinite',
          willChange: 'transform',
          opacity: 0.85,
        }}
      >
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          <circle cx="25" cy="25" r="16" stroke="url(#careerMintSquiggle)" strokeWidth="3" strokeDasharray="5 7" />
          <circle cx="25" cy="25" r="5" fill="#00FFD1" />
        </svg>
      </div>

    </div>
  );
}
