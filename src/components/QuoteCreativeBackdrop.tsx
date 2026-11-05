'use client';

import React, { useEffect, useRef, useState } from 'react';

interface QuoteCreativeBackdropProps {
  isLightMode?: boolean;
}

/**
 * Bespoke Creative Studio Backdrop for Get A Quote Hero.
 * Matches Portfolio, Career, Contact & About pages:
 *  1. Interactive Mouse-Tracking Gradient Spotlight
 *  2. Precision Blueprint Graph Grid (Crafto Pattern)
 *  3. Giant Ambient Architectural Ghost Watermark ("QUOTE")
 *  4. Floating 3D Micro-Squiggle Accents (Mint, Teal & Cyan)
 *  5. Cyber Rotating Dashed Target Ring
 *  6. Top Laser Horizon Beam
 *  7. 0% CPU Overhead (RAF-throttled pointer tracking + GPU transforms)
 */
export default function QuoteCreativeBackdrop({ isLightMode = false }: QuoteCreativeBackdropProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: string; y: string }>({ x: '50%', y: '40%' });
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
      setMousePos({ x: '50%', y: '40%' });
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
      className="portfolio-creative-backdrop quote-creative-backdrop"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        background: 'transparent',
      }}
    >
      {/* 1. Fully-Spread Ambient Radiant Aura (Opash Logo Palette) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isLightMode
            ? `
              radial-gradient(ellipse 130% 90% at 50% -15%, rgba(0, 168, 143, 0.16) 0%, rgba(71, 109, 154, 0.12) 35%, rgba(98, 137, 184, 0.05) 65%, transparent 85%),
              radial-gradient(ellipse 70% 60% at 0% 35%, rgba(71, 109, 154, 0.14) 0%, transparent 70%),
              radial-gradient(ellipse 70% 60% at 100% 35%, rgba(0, 168, 143, 0.14) 0%, transparent 70%),
              radial-gradient(ellipse 90% 50% at 50% 100%, rgba(71, 109, 154, 0.08) 0%, transparent 75%)
            `
            : `
              radial-gradient(ellipse 140% 90% at 50% -15%, rgba(94, 192, 152, 0.22) 0%, rgba(71, 109, 154, 0.18) 35%, rgba(98, 137, 184, 0.08) 65%, transparent 85%),
              radial-gradient(ellipse 75% 65% at 0% 35%, rgba(71, 109, 154, 0.20) 0%, transparent 70%),
              radial-gradient(ellipse 75% 65% at 100% 35%, rgba(94, 192, 152, 0.18) 0%, transparent 70%),
              radial-gradient(ellipse 90% 50% at 50% 100%, rgba(71, 109, 154, 0.10) 0%, transparent 75%)
            `,
          pointerEvents: 'none',
        }}
      />

      {/* 2. Top Horizon Laser Beam */}
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
          zIndex: 1,
        }}
      />

      {/* 3. Giant Ambient Architectural Ghost Watermark ("QUOTE") */}
      <div
        style={{
          position: 'absolute',
          top: '48%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(6rem, 20vw, 17rem)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 0.9,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
          fontFamily: 'var(--font-space-grotesk), system-ui, -apple-system, sans-serif',
          whiteSpace: 'nowrap',
          color: isLightMode ? 'rgba(71, 109, 154, 0.04)' : 'rgba(255, 255, 255, 0.025)',
          transition: 'color 0.4s ease',
        }}
      >
        QUOTE
      </div>

      {/* 4. Precision Engineering Blueprint Graph Grid */}
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

      {/* 5. Interactive Mouse-Tracking Gradient Spotlight */}
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

      {/* 6. Soft Corner Ambient Lights */}
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

        @keyframes craftoRingRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* 7. PLAYFUL 3D FLOATING SQUIGGLE ACCENTS (Opash Brand Palette) */}
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
            <linearGradient id="mintSquiggleQuote" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFD1" />
              <stop offset="100%" stopColor="#5EC098" />
            </linearGradient>
          </defs>
          <path
            d="M 12 55 Q 22 25 35 48 T 58 18"
            stroke="url(#mintSquiggleQuote)"
            strokeWidth="3.2"
            strokeLinecap="round"
            style={{
              filter: isLightMode
                ? 'drop-shadow(0 4px 8px rgba(0, 168, 143, 0.45))'
                : 'drop-shadow(0 0 10px rgba(0, 255, 209, 0.75))',
            }}
          />
        </svg>
      </div>

      {/* Mid-Right Cyan & Mint S-Squiggle */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '8%',
          width: '68px',
          height: '68px',
          overflow: 'visible',
          zIndex: 3,
          animation: 'craftoSquiggleFloat2 8.5s ease-in-out infinite',
          willChange: 'transform',
        }}
      >
        <svg viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="cyanSquiggleQuote" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFD1" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
          <path
            d="M 15 18 Q 32 8 36 28 T 52 50"
            stroke="url(#cyanSquiggleQuote)"
            strokeWidth="3.2"
            strokeLinecap="round"
            style={{
              filter: isLightMode
                ? 'drop-shadow(0 4px 8px rgba(2, 132, 199, 0.45))'
                : 'drop-shadow(0 0 10px rgba(56, 189, 248, 0.75))',
            }}
          />
        </svg>
      </div>

      {/* Top Left Rotating Dashed Target Ring */}
      <div
        style={{
          position: 'absolute',
          top: '18%',
          left: '8%',
          width: '46px',
          height: '46px',
          zIndex: 3,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: isLightMode ? '2px dashed rgba(0, 168, 143, 0.55)' : '2px dashed rgba(0, 255, 209, 0.65)',
            animation: 'craftoRingRotate 18s linear infinite',
            boxShadow: isLightMode ? 'none' : '0 0 10px rgba(0, 255, 209, 0.3)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: isLightMode ? '#008a75' : '#00ffd1',
            boxShadow: isLightMode ? '0 0 6px rgba(0, 168, 143, 0.6)' : '0 0 10px rgba(0, 255, 209, 0.85)',
          }}
        />
      </div>
    </div>
  );
}
