'use client';

import React, { useEffect, useRef, useState } from 'react';

interface OuiWillHeadlineProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'div';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * OuiWillHeadline - Kinetic Typographic Animation Engine.
 * Features:
 *  1. Smooth staggered word roll-up inside overflow-hidden masks.
 *  2. IntersectionObserver trigger: whenever the user enters or scrolls into this section,
 *     the animation automatically re-triggers!
 *  3. Interactive hover re-play capability.
 */
export default function OuiWillHeadline({
  children,
  as: Component = 'h1',
  className = '',
  style = {},
}: OuiWillHeadlineProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [animKey, setAnimKey] = useState(0);
  const wasVisibleRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!wasVisibleRef.current) {
              setAnimKey((prev) => prev + 1);
              wasVisibleRef.current = true;
            }
          } else {
            // When user scrolls away, reset so coming back will replay the animation!
            wasVisibleRef.current = false;
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const mergedStyle: React.CSSProperties = {
    fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', serif",
    fontSize: "clamp(1.9rem, 5.5vw, 76px)",
    fontWeight: 400,
    lineHeight: 1.12,
    letterSpacing: "-0.015em",
    ...style,
  };

  return (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={containerRef as any}
      key={animKey}
      className={`ouiwill-headline-wrap ${className}`}
      style={mergedStyle}
    >
      {children}
    </Component>
  );
}

/**
 * Helper component for each animated word inside the OuiWill headline.
 */
export function OuiWillWord({
  children,
  index = 1,
  isGradient = false,
  className = '',
  style = {},
  maskStyle = {},
  isBlock = false,
}: {
  children: React.ReactNode;
  index?: number;
  isGradient?: boolean;
  className?: string;
  style?: React.CSSProperties;
  maskStyle?: React.CSSProperties;
  isBlock?: boolean;
}) {
  return (
    <span
      className={isBlock ? 'ouiwill-mask-block' : 'ouiwill-mask'}
      style={maskStyle}
    >
      <span
        className={`ouiwill-word ouiwill-w-${index} ${
          isGradient ? 'opash-hero-gradient-text' : ''
        } ${className}`}
        style={style}
      >
        {children}
      </span>
    </span>
  );
}

/**
 * Signature glowing dot that drops down with kinetic bounce and shimmers.
 */
export function OuiWillDot({ style = {} }: { style?: React.CSSProperties }) {
  return <span className="ouiwill-dot" aria-hidden="true" style={style} />;
}
