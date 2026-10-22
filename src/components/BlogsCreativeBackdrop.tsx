'use client';

import React from 'react';

interface BlogsCreativeBackdropProps {
  isLightMode?: boolean;
}

/**
 * 0% GPU Ultra-Efficient Ambient Architectural Telemetry Backdrop.
 * Fully spread across the entire width and height without harsh boundaries,
 * cutoffs, or dark artificial bars. Uses native multi-stop CSS radial gradients
 * and crisp SVG telemetry vector lines for an authentic high-tech engineering feel.
 */
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
              radial-gradient(ellipse 130% 90% at 50% -15%, rgba(0, 168, 143, 0.16) 0%, rgba(71, 109, 154, 0.11) 35%, rgba(98, 137, 184, 0.04) 65%, transparent 85%),
              radial-gradient(ellipse 70% 60% at 0% 35%, rgba(71, 109, 154, 0.14) 0%, transparent 70%),
              radial-gradient(ellipse 70% 60% at 100% 35%, rgba(0, 168, 143, 0.13) 0%, transparent 70%),
              radial-gradient(ellipse 90% 50% at 50% 100%, rgba(71, 109, 154, 0.08) 0%, transparent 75%)
            `
            : `
              radial-gradient(ellipse 140% 90% at 50% -15%, rgba(94, 192, 152, 0.22) 0%, rgba(71, 109, 154, 0.18) 35%, rgba(98, 137, 184, 0.08) 65%, transparent 85%),
              radial-gradient(ellipse 75% 65% at 0% 40%, rgba(71, 109, 154, 0.20) 0%, transparent 75%),
              radial-gradient(ellipse 75% 65% at 100% 40%, rgba(94, 192, 152, 0.18) 0%, transparent 75%),
              radial-gradient(ellipse 90% 50% at 50% 100%, rgba(71, 109, 154, 0.10) 0%, transparent 75%)
            `,
        }}
      />

      {/* 2. Top Luminous Laser Horizon Beam (Opash Mint & Slate) */}
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
        }}
      />

      {/* 3. Architectural Telemetry SVG Vector Grid & Blueprint HUD (0% GPU) */}
      <svg
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isLightMode ? 0.45 : 0.35,
          maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
        }}
      >
        <defs>
          {/* Micro Grid Pattern */}
          <pattern id="blogs-grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke={isLightMode ? 'rgba(71, 109, 154, 0.25)' : 'rgba(71, 109, 154, 0.25)'}
              strokeWidth="0.8"
            />
            {/* Center dot in grid cell */}
            <circle
              cx="24"
              cy="24"
              r="0.9"
              fill={isLightMode ? 'rgba(0, 168, 143, 0.4)' : 'rgba(94, 192, 152, 0.45)'}
            />
          </pattern>
        </defs>

        {/* Base Grid Layer */}
        <rect width="100%" height="100%" fill="url(#blogs-grid-pattern)" />

        {/* High-Tech Blueprint Crosshairs at Intersections */}
        {[
          { x: '10%', y: '20%' },
          { x: '25%', y: '65%' },
          { x: '88%', y: '25%' },
          { x: '80%', y: '75%' },
          { x: '50%', y: '88%' },
        ].map((pt, i) => (
          <g key={i} transform={`translate(${pt.x}, ${pt.y})`}>
            <line
              x1="-8"
              y1="0"
              x2="8"
              y2="0"
              stroke={isLightMode ? '#008a75' : '#2dd4bf'}
              strokeWidth="1.2"
              opacity="0.6"
            />
            <line
              x1="0"
              y1="-8"
              x2="0"
              y2="8"
              stroke={isLightMode ? '#008a75' : '#2dd4bf'}
              strokeWidth="1.2"
              opacity="0.6"
            />
            <circle
              cx="0"
              cy="0"
              r="2"
              fill="none"
              stroke={isLightMode ? '#008a75' : '#2dd4bf'}
              strokeWidth="0.8"
              opacity="0.7"
            />
          </g>
        ))}

        {/* Subtle Micro-Telemetry Coordinate Tags in Margin */}
        <text
          x="3%"
          y="12%"
          fill={isLightMode ? '#64748b' : '#38bdf8'}
          fontSize="9"
          fontFamily="monospace"
          letterSpacing="0.1em"
          opacity="0.6"
        >
          // SYS_TELEMETRY: OPASH_KNOWLEDGE_NET
        </text>
        <text
          x="3%"
          y="15%"
          fill={isLightMode ? '#94a3b8' : '#2dd4bf'}
          fontSize="8"
          fontFamily="monospace"
          opacity="0.5"
        >
          NODE_LOC: [LAT: 37.77 / LON: -122.41]
        </text>

        <text
          x="84%"
          y="12%"
          fill={isLightMode ? '#64748b' : '#818cf8'}
          fontSize="9"
          fontFamily="monospace"
          letterSpacing="0.1em"
          opacity="0.6"
        >
          // WHITEPAPERS: ARCHITECTURE_LIVE
        </text>
        <text
          x="84%"
          y="15%"
          fill={isLightMode ? '#94a3b8' : '#38bdf8'}
          fontSize="8"
          fontFamily="monospace"
          opacity="0.5"
        >
          LATENCY: 0.18ms &bull; 99.999% SLA
        </text>
      </svg>
    </div>
  );
}
