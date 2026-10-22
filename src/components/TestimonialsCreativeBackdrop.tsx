'use client';

import React from 'react';

interface TestimonialsCreativeBackdropProps {
  isLightMode?: boolean;
  accent?: string;
  accentRgb?: string;
}

/**
 * TestimonialsCreativeBackdrop:
 * Clean, subtle, seamless ambient depth for Verified Feedback section.
 * Eliminates distracting vector light-stream lines and harsh mask edges.
 */
export default function TestimonialsCreativeBackdrop({
  isLightMode = false,
  accent = '#00bbab',
  accentRgb = '0, 187, 171',
}: TestimonialsCreativeBackdropProps) {
  return (
    <div
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
      {/* Subtle, ultra-soft central ambient wash behind testimonials card */}
      <div
        style={{
          position: 'absolute',
          top: '32%',
          left: '50%',
          transform: 'translate(-50%, -50%) translate3d(0, 0, 0)',
          width: '100%',
          maxWidth: '1200px',
          height: '550px',
          borderRadius: '50%',
          background: isLightMode
            ? 'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.05) 0%, transparent 75%)'
            : 'radial-gradient(ellipse at center, rgba(0, 187, 171, 0.07) 0%, rgba(14, 165, 233, 0.03) 45%, transparent 75%)',
          filter: 'blur(110px)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

