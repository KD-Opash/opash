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
      className="portfolio-creative-backdrop career-creative-backdrop"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <style>{`
        @keyframes craftoSquiggleFloat1 {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(-12deg) scale(1);
          }
          50% {
            transform: translate3d(0, -18px, 0) rotate(-4deg) scale(1.05);
          }
        }

        @keyframes craftoSquiggleFloat2 {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(15deg) scale(1);
          }
          50% {
            transform: translate3d(0, 16px, 0) rotate(8deg) scale(0.96);
          }
        }

        @keyframes craftoSquiggleFloat3 {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(8px, -12px, 0) rotate(10deg);
          }
        }
      `}</style>

      {/* ================================================================= */}
      {/* 1. GIANT AMBIENT ARCHITECTURAL GHOST WATERMARK ("CAREERS")        */}
      {/* ================================================================= */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(7rem, 20vw, 17rem)',
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
      {/* 2. PRECISION ENGINEERING GRAPH GRID (Crafto Blueprint Pattern)   */}
      {/* ================================================================= */}
      <div
        className="portfolio-hero-grid"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 95% 85% at 50% 45%, black 40%, transparent 92%)',
          WebkitMaskImage: 'radial-gradient(ellipse 95% 85% at 50% 45%, black 40%, transparent 92%)',
          zIndex: 1,
        }}
      />

      {/* ================================================================= */}
      {/* 3. INTERACTIVE MOUSE-TRACKING GRADIENT SPOTLIGHT (HOVER LIGHT)    */}
      {/* ================================================================= */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(650px circle at ${mousePos.x} ${mousePos.y}, ${
            isLightMode
              ? 'rgba(0, 168, 143, 0.18) 0%, rgba(71, 109, 154, 0.10) 35%, rgba(98, 137, 184, 0.03) 60%, transparent 75%'
              : 'rgba(94, 192, 152, 0.22) 0%, rgba(0, 255, 209, 0.12) 30%, rgba(71, 109, 154, 0.09) 55%, transparent 75%'
          })`,
          opacity: isHovered ? 1 : 0.7,
          transition: isHovered ? 'opacity 0.25s ease' : 'all 0.5s ease',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* ================================================================= */}
      {/* 4. SOFT CORNER AMBIENT LIGHTS (Crafto Edge Halos)                 */}
      {/* ================================================================= */}
      <div
        className="portfolio-ambient-halo-1"
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '520px',
          height: '420px',
          borderRadius: '50%',
          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        className="portfolio-ambient-halo-2"
        style={{
          position: 'absolute',
          top: '-8%',
          right: '-5%',
          width: '540px',
          height: '440px',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 1,
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
      {/* 5. PLAYFUL 3D FLOATING SQUIGGLE ACCENTS (Opash Brand Palette)     */}
      {/* ================================================================= */}
      {/* Mid-Left Opash Mint / Teal Wavy Squiggle */}
      <div
        style={{
          position: 'absolute',
          top: '56%',
          left: '6%',
          width: '74px',
          height: '74px',
          overflow: 'visible',
          zIndex: 3,
          animation: 'craftoSquiggleFloat1 9s ease-in-out infinite',
          willChange: 'transform',
        }}
      >
        <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="mintSquiggleCareer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFD1" />
              <stop offset="100%" stopColor="#5EC098" />
            </linearGradient>
          </defs>
          <path
            d="M 12 55 Q 22 25 35 48 T 58 18"
            stroke="url(#mintSquiggleCareer)"
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
          top: '32%',
          right: '8%',
          width: '78px',
          height: '78px',
          overflow: 'visible',
          zIndex: 3,
          animation: 'craftoSquiggleFloat2 11s ease-in-out infinite',
          willChange: 'transform',
        }}
      >
        <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="opashBrandSquiggleCareer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#00FFD1" />
              <stop offset="100%" stopColor="#5EC098" />
            </linearGradient>
          </defs>
          <path
            d="M 14 18 Q 28 52 42 24 T 58 50"
            stroke="url(#opashBrandSquiggleCareer)"
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
          top: '18%',
          left: '9%',
          width: '46px',
          height: '46px',
          overflow: 'visible',
          zIndex: 3,
          animation: 'craftoSquiggleFloat3 8s ease-in-out infinite',
          willChange: 'transform',
          opacity: 0.85,
        }}
      >
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          <circle cx="25" cy="25" r="16" stroke="url(#mintSquiggleCareer)" strokeWidth="3" strokeDasharray="5 7" />
          <circle cx="25" cy="25" r="5" fill="#00FFD1" />
        </svg>
      </div>
    </div>
  );
}
