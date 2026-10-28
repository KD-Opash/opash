'use client';

import React from 'react';

interface LiquidGlassHeroBackdropProps {
  isLightMode?: boolean;
}

/**
 * 0% CPU & Low GPU Liquid Glass Ribbon Background Animation.
 * Inspired by high-end Dribbble 3D fluid glass sculptures.
 * Uses 100% hardware-accelerated CSS compositor transforms
 * (0 JS render loops, 0 layout reflows, 60fps smooth forever).
 */
export default function LiquidGlassHeroBackdrop({ isLightMode = false }: LiquidGlassHeroBackdropProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        backgroundColor: isLightMode ? '#f8fafc' : '#020712',
      }}
    >
      <style>{`
        @keyframes liquidFloat {
          0% {
            transform: translate3d(0, 0, 0) scale(1.04) rotate(0deg);
          }
          33% {
            transform: translate3d(-1.5%, -1.2%, 0) scale(1.08) rotate(1.2deg);
          }
          66% {
            transform: translate3d(1.2%, 1%, 0) scale(1.06) rotate(-1deg);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1.04) rotate(0deg);
          }
        }

        @keyframes causticSheen {
          0% {
            transform: translate3d(-40%, -20%, 0) rotate(-25deg);
            opacity: 0.25;
          }
          50% {
            transform: translate3d(20%, 15%, 0) rotate(-15deg);
            opacity: 0.65;
          }
          100% {
            transform: translate3d(60%, 40%, 0) rotate(-5deg);
            opacity: 0.25;
          }
        }

        @keyframes auraPulseMint {
          0%, 100% {
            opacity: 0.35;
            transform: scale(1) translate3d(0, 0, 0);
          }
          50% {
            opacity: 0.65;
            transform: scale(1.18) translate3d(-20px, 15px, 0);
          }
        }

        @keyframes auraPulseCyan {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1.15) translate3d(25px, -15px, 0);
          }
          50% {
            opacity: 0.7;
            transform: scale(0.95) translate3d(0, 0, 0);
          }
        }

        @keyframes refractiveRingDrift {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.05);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
      `}</style>

      {/* 1. Base 3D Liquid Glass Ribbon Layer with Organic Morphing Float */}
      <div
        style={{
          position: 'absolute',
          inset: '-8% -5% -8% -5%',
          animation: 'liquidFloat 22s ease-in-out infinite',
          willChange: 'transform',
        }}
      >
        <img
          src="/images/services/liquid_glass_custom_software.jpg"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 35%',
            opacity: isLightMode ? 0.22 : 0.48,
            filter: isLightMode
              ? 'saturate(1.2) contrast(1.1) brightness(1.05)'
              : 'saturate(1.35) contrast(1.15) brightness(1.02)',
            transform: 'translateZ(0)',
          }}
        />
      </div>

      {/* 2. Dynamic Caustic Light Beam / Refractive Shimmer (Simulates moving studio caustics) */}
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          left: '-30%',
          width: '160%',
          height: '160%',
          background: isLightMode
            ? 'linear-gradient(115deg, transparent 20%, rgba(0, 168, 143, 0.2) 45%, rgba(2, 132, 199, 0.28) 55%, transparent 75%)'
            : 'linear-gradient(115deg, transparent 25%, rgba(45, 212, 191, 0.22) 45%, rgba(56, 189, 248, 0.35) 55%, transparent 75%)',
          mixBlendMode: isLightMode ? 'multiply' : 'screen',
          animation: 'causticSheen 14s ease-in-out infinite alternate',
          pointerEvents: 'none',
          willChange: 'transform, opacity',
        }}
      />

      {/* 3. Infinite Breathing Opash Brand Aurora Orbs (Mint & Electric Cyan) */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '20%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(0, 168, 143, 0.22) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(94, 192, 152, 0.35) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'auraPulseMint 16s ease-in-out infinite',
          willChange: 'transform, opacity',
          mixBlendMode: isLightMode ? 'normal' : 'screen',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '25%',
          right: '15%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(circle, rgba(2, 132, 199, 0.20) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(56, 189, 248, 0.32) 0%, transparent 70%)',
          filter: 'blur(75px)',
          animation: 'auraPulseCyan 19s ease-in-out infinite alternate',
          willChange: 'transform, opacity',
          mixBlendMode: isLightMode ? 'normal' : 'screen',
        }}
      />

      {/* 4. Rotating Refractive Rings (Subtle geometric light diffraction) */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '780px',
          height: '780px',
          marginTop: '-390px',
          marginLeft: '-390px',
          borderRadius: '50%',
          border: isLightMode
            ? '1.5px solid rgba(0, 168, 143, 0.12)'
            : '1.5px solid rgba(94, 192, 152, 0.18)',
          boxShadow: isLightMode
            ? 'inset 0 0 40px rgba(0, 168, 143, 0.05), 0 0 40px rgba(2, 132, 199, 0.05)'
            : 'inset 0 0 60px rgba(94, 192, 152, 0.08), 0 0 60px rgba(56, 189, 248, 0.08)',
          animation: 'refractiveRingDrift 45s linear infinite',
          willChange: 'transform',
        }}
      />

      {/* 5. Center Radial Spotlight to make Text Crystal Clear */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isLightMode
            ? `
              radial-gradient(ellipse 75% 60% at 50% 38%, rgba(248, 250, 252, 0.72) 0%, rgba(248, 250, 252, 0.92) 65%, #f8fafc 100%),
              linear-gradient(to bottom, rgba(248, 250, 252, 0.2) 0%, rgba(248, 250, 252, 0.95) 85%, #f8fafc 100%)
            `
            : `
              radial-gradient(ellipse 75% 60% at 50% 38%, rgba(2, 7, 18, 0.55) 0%, rgba(2, 7, 18, 0.88) 65%, #020712 100%),
              linear-gradient(to bottom, rgba(2, 7, 18, 0.15) 0%, rgba(2, 7, 18, 0.96) 85%, #020712 100%)
            `,
        }}
      />

      {/* 6. Seamless Bottom Feather Blender into Content Below */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: isLightMode
            ? 'linear-gradient(to bottom, transparent 0%, rgba(248, 250, 252, 0.85) 60%, #f8fafc 100%)'
            : 'linear-gradient(to bottom, transparent 0%, rgba(2, 7, 18, 0.85) 60%, #020712 100%)',
        }}
      />
    </div>
  );
}
