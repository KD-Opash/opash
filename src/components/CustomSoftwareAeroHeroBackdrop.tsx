'use client';

import React, { useState } from 'react';
import AeroShards from '@/components/AeroShards';
import LiquidGlassHeroBackdrop from '@/components/LiquidGlassHeroBackdrop';

interface CustomSoftwareAeroHeroBackdropProps {
  isLightMode?: boolean;
}

/**
 * Custom Software Development Hero Backdrop.
 * Powered by React Bits <AeroShards /> using Opash brand colors (Mint #00A88F & Cyan #2dd4bf).
 * Optimized for low CPU/GPU footprint (count: 480, dpr: 1.5, transparent canvas).
 * Includes automatic graceful fallback to LiquidGlassHeroBackdrop if WebGPU is unavailable.
 */
export default function CustomSoftwareAeroHeroBackdrop({
  isLightMode = false,
}: CustomSoftwareAeroHeroBackdropProps) {
  const [hasWebGpuError, setHasWebGpuError] = useState(false);

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
      {/* 1. Primary Backdrop: AeroShards or Fallback */}
      {hasWebGpuError ? (
        <LiquidGlassHeroBackdrop isLightMode={isLightMode} />
      ) : (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'auto', // Allow mouse interaction, pulseOnClick, holdToGather
          }}
        >
          <AeroShards
            shardColor={isLightMode ? '#008a75' : '#00A88F'}
            accentColor={isLightMode ? '#0284c7' : '#2dd4bf'}
            backgroundColor="transparent"
            lightMode={isLightMode}
            placement="full"
            material="glass"
            markers="plus"
            count={480}
            shardSize={1.1}
            spread={1.1}
            twist={0.8}
            billow={0.9}
            speed={0.75}
            scale={1}
            depthOfField={0.45}
            glow={isLightMode ? 0.2 : 0.4}
            grain={0.03}
            vignette={0.4}
            mouseInteraction={true}
            mouseStrength={0.55}
            pulseOnClick={true}
            holdToGather={true}
            parallax={0.35}
            dpr={1.5}
            onError={() => {
              // Graceful fallback to CSS liquid glass backdrop if WebGPU is not supported
              setHasWebGpuError(true);
            }}
          />
        </div>
      )}

      {/* 2. Soft Center Radial Vignette (Ensures hero title & CTAs are 100% readable) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isLightMode
            ? `
              radial-gradient(ellipse 75% 60% at 50% 38%, rgba(248, 250, 252, 0.6) 0%, rgba(248, 250, 252, 0.88) 65%, #f8fafc 100%),
              linear-gradient(to bottom, rgba(248, 250, 252, 0.1) 0%, rgba(248, 250, 252, 0.95) 85%, #f8fafc 100%)
            `
            : `
              radial-gradient(ellipse 75% 60% at 50% 38%, rgba(2, 7, 18, 0.5) 0%, rgba(2, 7, 18, 0.85) 65%, #020712 100%),
              linear-gradient(to bottom, rgba(2, 7, 18, 0.1) 0%, rgba(2, 7, 18, 0.96) 85%, #020712 100%)
            `,
          pointerEvents: 'none',
        }}
      />

      {/* 3. Bottom Feather Blender into Content Below */}
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
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
