'use client';

import React from 'react';

interface TechShowcaseBackdropProps {
  isLightMode?: boolean;
}

export function TechShowcaseBackdrop({ isLightMode = false }: TechShowcaseBackdropProps) {
  return (
    <div
      className="liquid-aurora-wrapper pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Underlying Liquid Silk Multi-Stop Gradient Orbs (Hardware-accelerated CSS) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isLightMode
            ? `
              radial-gradient(ellipse 55% 45% at 20% 25%, rgba(0, 168, 143, 0.12) 0%, transparent 65%),
              radial-gradient(ellipse 50% 45% at 80% 30%, rgba(99, 102, 241, 0.10) 0%, transparent 65%),
              radial-gradient(ellipse 55% 45% at 50% 65%, rgba(14, 165, 233, 0.10) 0%, transparent 65%),
              radial-gradient(ellipse 50% 40% at 15% 82%, rgba(16, 185, 129, 0.08) 0%, transparent 60%),
              radial-gradient(ellipse 50% 42% at 85% 78%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)
            `
            : `
              radial-gradient(ellipse 55% 45% at 20% 25%, rgba(0, 187, 171, 0.22) 0%, transparent 65%),
              radial-gradient(ellipse 50% 45% at 80% 30%, rgba(99, 102, 241, 0.20) 0%, transparent 65%),
              radial-gradient(ellipse 55% 45% at 50% 65%, rgba(14, 165, 233, 0.18) 0%, transparent 65%),
              radial-gradient(ellipse 50% 40% at 15% 82%, rgba(16, 185, 129, 0.16) 0%, transparent 60%),
              radial-gradient(ellipse 50% 42% at 85% 78%, rgba(139, 92, 246, 0.18) 0%, transparent 60%)
            `,
          opacity: 0.95,
        }}
      />

      {/* 2. Top & Bottom Seamless Edge Blenders */}
      <div className="liquid-aurora-vignette-top" />
      <div className="liquid-aurora-vignette-bottom" />
    </div>
  );
}

export default TechShowcaseBackdrop;
