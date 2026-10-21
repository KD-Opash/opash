'use client';

import React, { useEffect, useLayoutEffect, useRef, type CSSProperties, type ReactNode } from 'react';

export interface ChromaItem {
  image?: string;
  icon?: ReactNode;
  title?: string;
  subtitle?: string;
  accent?: string;
  url?: string;
  alt?: string;
  borderColor?: string;
  badge?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  columns?: number;
  minCardWidth?: number;
  gap?: number;
  radius?: number;
  softness?: number;
  damping?: number;
  fadeOut?: number;
  grayscale?: number;
  dim?: number;
  glow?: number;
  borderGlow?: number;
  reveal?: 'spotlight' | 'card';
  aspectRatio?: string;
  cardRadius?: number;
  showInfo?: boolean;
  frame?: boolean;
  theme?: 'dark' | 'light';
  className?: string;
}

const THEMES: Record<'dark' | 'light', Record<string, string>> = {
  dark: {
    '--chroma-frame': 'rgba(14, 25, 41, 0.7)',
    '--chroma-frame-edge': 'rgba(255, 255, 255, 0.08)',
    '--chroma-frame-highlight': 'rgba(255, 255, 255, 0.07)',
    '--chroma-frame-shadow': '0 22px 44px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)',
    '--chroma-tile': 'rgba(10, 20, 36, 0.65)',
    '--chroma-tile-edge': 'rgba(255, 255, 255, 0.08)',
    '--chroma-tile-highlight': 'rgba(255, 255, 255, 0.12)',
    '--chroma-tile-shadow': '0 10px 24px -6px rgba(0, 0, 0, 0.55)',
    '--chroma-media-edge': 'rgba(255, 255, 255, 0.06)',
    '--chroma-well': 'rgba(255, 255, 255, 0.04)',
    '--chroma-ink': '#f8fafc',
    '--chroma-muted': 'rgba(148, 163, 184, 0.85)',
    '--chroma-hover': 'brightness(1.08)',
    '--chroma-press': 'brightness(0.92)'
  },
  light: {
    '--chroma-frame': 'rgba(241, 245, 249, 0.85)',
    '--chroma-frame-edge': 'rgba(15, 23, 42, 0.08)',
    '--chroma-frame-highlight': 'rgba(255, 255, 255, 0.95)',
    '--chroma-frame-shadow': '0 20px 40px -20px rgba(15, 23, 42, 0.12), 0 6px 16px -10px rgba(15, 23, 42, 0.06)',
    '--chroma-tile': '#ffffff',
    '--chroma-tile-edge': 'rgba(226, 232, 240, 1)',
    '--chroma-tile-highlight': 'rgba(255, 255, 255, 1)',
    '--chroma-tile-shadow': '0 10px 24px -6px rgba(15, 23, 42, 0.06), 0 2px 6px rgba(15, 23, 42, 0.03)',
    '--chroma-media-edge': 'rgba(226, 232, 240, 0.8)',
    '--chroma-well': '#f8fafc',
    '--chroma-ink': '#0f172a',
    '--chroma-muted': '#64748b',
    '--chroma-hover': 'brightness(0.98)',
    '--chroma-press': 'brightness(0.94)'
  }
};

const DEFAULT_ITEMS: ChromaItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1514519334989-3d5c8b1a9f91?w=800&q=80&auto=format&fit=crop',
    title: 'Canola Field',
    subtitle: 'Midday',
    accent: '#ffd23f'
  },
  {
    image: 'https://images.unsplash.com/photo-1520930528075-4ea5ead759f5?w=800&q=80&auto=format&fit=crop',
    title: 'The Pier',
    subtitle: 'Clear sky',
    accent: '#3fb8ff',
    url: 'https://example.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?w=800&q=80&auto=format&fit=crop',
    title: 'Black Beach',
    subtitle: 'Landscape',
    accent: '#a98bff'
  },
  {
    image: 'https://images.unsplash.com/photo-1524400968894-6e997a66e03f?w=800&q=80&auto=format&fit=crop',
    title: 'Cloud Front',
    subtitle: 'Weather',
    accent: '#ffb27a'
  },
  {
    image: 'https://images.unsplash.com/photo-1778849097774-0ab2a873a858?w=800&q=80&auto=format&fit=crop',
    title: 'Pink Drift',
    subtitle: 'Sky study',
    accent: '#ff7eb6'
  },
  {
    image: 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=800&q=80&auto=format&fit=crop',
    title: 'Cumulus',
    subtitle: 'Weather',
    accent: '#7cc4ff'
  }
];

const SPOT_MASK =
  'radial-gradient(circle var(--chroma-r) at calc(var(--chroma-x, -9999px) - var(--chroma-ox, 0px)) calc(var(--chroma-y, -9999px) - var(--chroma-oy, 0px)), var(--chroma-stops))';
const WASH = 'radial-gradient(130% 70% at 50% 100%, var(--chroma-accent), transparent 72%)';
const TILE_RIM = 'inset 0 0 0 1px var(--chroma-tile-edge), inset 0 1px 0 var(--chroma-tile-highlight)';
const GLOW_RIM = 'inset 0 0 0 1px var(--chroma-accent), inset 0 0 24px -4px var(--chroma-accent)';
const FRAME_RIM = 'inset 0 0 0 1px var(--chroma-frame-edge), inset 0 1px 0 var(--chroma-frame-highlight)';
const IMAGE_CLASS = 'chroma-card-img';

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const falloffStops = (softness: number) => {
  const core = clamp(1 - softness, 0, 0.95);
  const stops = [];
  for (let i = 0; i <= 12; i++) {
    const t = i / 12;
    const u = clamp((t - core) / Math.max(0.0001, 1 - core), 0, 1);
    const alpha = 1 - u * u * u * (u * (u * 6 - 15) + 10);
    stops.push(`rgba(0, 0, 0, ${alpha.toFixed(3)}) ${(t * 100).toFixed(1)}%`);
  }
  return stops.join(', ');
};

export const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  columns = 3,
  minCardWidth = 175,
  gap = 16,
  radius = 260,
  softness = 0.6,
  damping = 0.45,
  fadeOut = 0.6,
  grayscale = 1,
  dim = 0.1,
  glow = 0.65,
  borderGlow = 1,
  reveal = 'spotlight',
  aspectRatio = '1 / 1',
  cardRadius = 20,
  showInfo = true,
  frame = false,
  theme = 'dark',
  className = ''
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<{ damping: number; fadeOut: number; spotlight: boolean } | null>(null);
  const placeRef = useRef<(() => void) | null>(null);
  const data = items?.length ? items : DEFAULT_ITEMS;
  settingsRef.current = { damping, fadeOut, spotlight: reveal !== 'card' };

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const state = { x: 0, y: 0, tx: 0, ty: 0, power: 0, target: 0, primed: false };
    let raf = 0;
    let last = 0;

    const place = () => {
      const box = root.getBoundingClientRect();
      root.querySelectorAll<HTMLElement>('[data-chroma-area]').forEach(node => {
        const rect = node.getBoundingClientRect();
        node.style.setProperty('--chroma-ox', `${rect.left - box.left}px`);
        node.style.setProperty('--chroma-oy', `${rect.top - box.top}px`);
      });
    };
    placeRef.current = place;

    const frame = (now: number) => {
      raf = 0;
      const s = settingsRef.current;
      if (!s) return;
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
      last = now;
      const follow = reduce ? 1 : 1 - Math.exp(-dt / Math.max(0.01, s.damping * 0.32));
      state.x += (state.tx - state.x) * follow;
      state.y += (state.ty - state.y) * follow;
      const span = state.target > state.power ? 0.1 : Math.max(0.02, s.fadeOut * 0.35);
      state.power += (state.target - state.power) * (reduce ? 1 : 1 - Math.exp(-dt / span));
      root.style.setProperty('--chroma-x', `${state.x.toFixed(2)}px`);
      root.style.setProperty('--chroma-y', `${state.y.toFixed(2)}px`);
      root.style.setProperty('--chroma-power', state.power.toFixed(4));
      const settled =
        Math.abs(state.tx - state.x) < 0.1 &&
        Math.abs(state.ty - state.y) < 0.1 &&
        Math.abs(state.target - state.power) < 0.002;
      if (settled) {
        state.power = state.target;
        root.style.setProperty('--chroma-power', state.power.toFixed(4));
        last = 0;
      } else {
        raf = requestAnimationFrame(frame);
      }
    };

    const wake = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const onMove = (event: PointerEvent) => {
      if (!settingsRef.current?.spotlight) return;
      const box = root.getBoundingClientRect();
      state.tx = event.clientX - box.left;
      state.ty = event.clientY - box.top;
      if (!state.primed || state.power < 0.02) {
        state.x = state.tx;
        state.y = state.ty;
        state.primed = true;
      }
      state.target = 1;
      wake();
    };

    const onLeave = () => {
      state.target = 0;
      wake();
    };

    const resizeObserver = new ResizeObserver(place);
    resizeObserver.observe(root);
    root.addEventListener('pointermove', onMove);
    root.addEventListener('pointerdown', onMove);
    root.addEventListener('pointerleave', onLeave);
    root.addEventListener('pointercancel', onLeave);
    place();

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerdown', onMove);
      root.removeEventListener('pointerleave', onLeave);
      root.removeEventListener('pointercancel', onLeave);
      placeRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    placeRef.current?.();
  });

  const spotlight = reveal !== 'card';
  const rootStyle = {
    ...(THEMES[theme] ?? THEMES.dark),
    '--chroma-cols': Math.max(1, Math.round(columns)),
    '--chroma-min': `${Math.max(80, minCardWidth)}px`,
    '--chroma-gap': `${Math.max(0, gap)}px`,
    '--chroma-r': `${Math.max(20, radius)}px`,
    '--chroma-stops': falloffStops(clamp(softness, 0, 1)),
    '--chroma-gray': clamp(grayscale, 0, 1),
    '--chroma-dim': clamp(dim, 0, 0.9),
    '--chroma-glow': clamp(glow, 0, 1),
    '--chroma-border': clamp(borderGlow, 0, 1),
    '--chroma-fade': `${Math.max(0, fadeOut)}s`,
    '--chroma-ratio': aspectRatio,
    '--chroma-radius': `${Math.max(0, cardRadius)}px`,
    ...(frame
      ? {
          padding: 10,
          borderRadius: 'calc(var(--chroma-radius) + 10px)',
          background: 'var(--chroma-frame)',
          boxShadow: 'var(--chroma-frame-shadow)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.6)',
          backdropFilter: 'blur(20px) saturate(1.6)'
        }
      : {})
  } as CSSProperties;

  const washStyle: CSSProperties = spotlight
    ? {
        background: WASH,
        opacity: 'calc(var(--chroma-glow) * var(--chroma-power, 0) * 0.45)',
        WebkitMaskImage: SPOT_MASK,
        maskImage: SPOT_MASK
      }
    : { background: WASH };

  const colorStyle: CSSProperties = spotlight
    ? { opacity: 'var(--chroma-power, 0)', WebkitMaskImage: SPOT_MASK, maskImage: SPOT_MASK }
    : {};

  const glowStyle: CSSProperties = spotlight
    ? {
        boxShadow: GLOW_RIM,
        opacity: 'calc(var(--chroma-border) * var(--chroma-power, 0))',
        WebkitMaskImage: SPOT_MASK,
        maskImage: SPOT_MASK
      }
    : { boxShadow: GLOW_RIM };

  const fadeClass = 'chroma-fade-layer';

  return (
    <div
      ref={rootRef}
      className={`chroma-grid-root relative box-border w-full select-none ${className}`.trim()}
      style={rootStyle}
    >
      <div
        className="chroma-grid-container"
        style={{
          display: 'grid',
          width: '100%',
          gap: `${gap}px`,
          gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, ${minCardWidth}px), 1fr))`,
          boxSizing: 'border-box'
        }}
      >
        {data.map((item, index) => {
          const accent = item.accent ?? item.borderColor ?? '#00A88F';
          const key = `${item.title || 'item'}-${index}`;
          const cardStyle = {
            '--chroma-accent': accent,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px 14px 16px 14px',
            borderRadius: 'var(--chroma-radius)',
            background: 'var(--chroma-tile)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: 'var(--chroma-tile-shadow)',
            color: 'var(--chroma-ink)',
            overflow: 'hidden',
            boxSizing: 'border-box',
            cursor: item.url ? 'pointer' : 'default',
            textDecoration: 'none',
            transition: 'transform 0.26s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.26s ease'
          } as CSSProperties;

          const body = (
            <>
              {/* Wash Ambient Layer */}
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 z-0 ${fadeClass}`}
                style={washStyle}
              />

              {/* Media Container: Either Image or Custom Icon */}
              <div
                data-chroma-area=""
                className="relative z-[1] flex items-center justify-center"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  aspectRatio: item.image ? 'var(--chroma-ratio)' : 'auto',
                  minHeight: item.icon ? '52px' : 'auto',
                  borderRadius: item.image ? 'max(0px, calc(var(--chroma-radius) - 6px))' : '0px',
                  background: item.image ? 'var(--chroma-well)' : 'transparent',
                  marginBottom: '8px',
                  overflow: item.image ? 'hidden' : 'visible'
                }}
              >
                {item.image && (
                  <>
                    <img
                      className={IMAGE_CLASS}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(var(--chroma-gray)) brightness(calc(1 - var(--chroma-dim)))'
                      }}
                      src={item.image}
                      alt={item.alt ?? item.title ?? ''}
                      loading="lazy"
                    />
                    <img
                      className={`${IMAGE_CLASS} ${fadeClass}`}
                      style={{
                        ...colorStyle,
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      src={item.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                    />
                    <span
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        pointerEvents: 'none',
                        borderRadius: 'inherit',
                        boxShadow: 'inset 0 0 0 1px var(--chroma-media-edge)'
                      }}
                    />
                  </>
                )}

                {item.icon && (
                  <div
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '2px',
                      transition: 'transform 0.24s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    <div
                      style={{
                        opacity: 1,
                        transition: 'transform 0.24s ease'
                      }}
                    >
                      {item.icon}
                    </div>
                  </div>
                )}
              </div>

              {/* Info Container */}
              {showInfo && (item.title || item.subtitle || item.badge) && (
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    textAlign: 'center',
                    maxWidth: '100%'
                  }}
                >
                  {item.title && (
                    <span
                      style={{
                        fontFamily: 'var(--font-heading), "Plus Jakarta Sans", sans-serif',
                        fontSize: '0.94rem',
                        fontWeight: 700,
                        letterSpacing: '-0.01em',
                        color: 'inherit',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%'
                      }}
                    >
                      {item.title}
                    </span>
                  )}
                  {item.subtitle && (
                    <span
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--chroma-muted)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%'
                      }}
                    >
                      {item.subtitle}
                    </span>
                  )}
                  {item.badge && (
                    <span
                      style={{
                        fontFamily: 'ui-monospace, monospace',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        color: accent,
                        backgroundColor: `color-mix(in srgb, ${accent} 12%, transparent)`,
                        border: `1px solid color-mix(in srgb, ${accent} 30%, transparent)`,
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        letterSpacing: '0.02em',
                        marginTop: '2px'
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
              )}

              {/* Tile Edge Rim */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 2,
                  pointerEvents: 'none',
                  borderRadius: 'inherit',
                  boxShadow: TILE_RIM
                }}
              />

              {/* Dynamic Chroma Spotlight Glow Rim */}
              <span
                aria-hidden="true"
                className={fadeClass}
                style={{
                  ...glowStyle,
                  position: 'absolute',
                  inset: 0,
                  zIndex: 2,
                  pointerEvents: 'none',
                  borderRadius: 'inherit'
                }}
              />
            </>
          );

          return item.url ? (
            <a key={key} data-chroma-area="" className="chroma-card-interactive" style={cardStyle} href={item.url} target="_blank" rel="noopener noreferrer">
              {body}
            </a>
          ) : (
            <article key={key} data-chroma-area="" className="chroma-card-interactive" style={cardStyle}>
              {body}
            </article>
          );
        })}
      </div>

      {frame && (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            borderRadius: 'inherit',
            boxShadow: FRAME_RIM
          }}
        />
      )}
    </div>
  );
};

export default ChromaGrid;
