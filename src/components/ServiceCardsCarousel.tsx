'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface ServiceCardsCarouselProps {
  children: React.ReactNode;
  id?: string;
  autoScrollInterval?: number; // default: 3500ms
  desktopCards?: number; // default: 3
  tabletCards?: number; // default: 2
  mobileCardWidth?: string; // default: '86%'
  gap?: string; // default: '1.5rem'
  className?: string;
  showDots?: boolean;
}

export default function ServiceCardsCarousel({
  children,
  id,
  autoScrollInterval = 3500,
  desktopCards = 3,
  tabletCards = 2,
  mobileCardWidth = '86%',
  gap = '1.5rem',
  className = '',
  showDots = true,
}: ServiceCardsCarouselProps) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  // Synchronous ref to prevent race conditions & double-step bugs
  const activeIndexRef = useRef(0);
  const isProgrammaticScrollRef = useRef(false);

  // Count items from children
  const count = React.Children.count(children);

  useEffect(() => {
    setTotalItems(count);
  }, [count]);

  // Scroll to specific index exactly 1 card at a time
  const scrollToIndex = useCallback((index: number) => {
    const el = trackRef.current;
    if (!el || !el.children.length) return;
    const maxIdx = el.children.length - 1;
    const clampedIndex = Math.max(0, Math.min(index, maxIdx));
    const firstChild = el.firstElementChild as HTMLElement;
    const targetChild = el.children[clampedIndex] as HTMLElement;
    if (targetChild && firstChild) {
      isProgrammaticScrollRef.current = true;
      const targetScroll = targetChild.offsetLeft - firstChild.offsetLeft;
      el.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
      setActiveIndex(clampedIndex);
      activeIndexRef.current = clampedIndex;

      // Reset programmatic flag after smooth scroll completes
      setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 550);
    }
  }, []);

  // Next Slide: Exactly 1 card step
  const handleNext = useCallback(() => {
    const el = trackRef.current;
    if (!el || !el.children.length) return;
    const maxIdx = el.children.length - 1;
    const current = activeIndexRef.current;
    const next = current >= maxIdx ? 0 : current + 1;
    scrollToIndex(next);
  }, [scrollToIndex]);

  // Prev Slide: Exactly 1 card step
  const handlePrev = useCallback(() => {
    const el = trackRef.current;
    if (!el || !el.children.length) return;
    const maxIdx = el.children.length - 1;
    const current = activeIndexRef.current;
    const prev = current <= 0 ? maxIdx : current - 1;
    scrollToIndex(prev);
  }, [scrollToIndex]);

  // Update active index on manual swipe/scroll
  const handleScroll = useCallback(() => {
    if (isProgrammaticScrollRef.current) return;

    const el = trackRef.current;
    if (!el || !el.children.length) return;

    const firstChild = el.firstElementChild as HTMLElement;
    const baseOffset = firstChild ? firstChild.offsetLeft : 0;
    const scrollPos = el.scrollLeft;
    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(el.children).forEach((child, idx) => {
      const childEl = child as HTMLElement;
      const childOffset = childEl.offsetLeft - baseOffset;
      const distance = Math.abs(childOffset - scrollPos);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    setActiveIndex(closestIndex);
    activeIndexRef.current = closestIndex;
  }, []);

  // Auto scroll effect: Runs ONLY when content horizontally overflows (i.e. on mobile carousel view)
  useEffect(() => {
    if (isPaused || autoScrollInterval <= 0) return;

    const timer = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      // If cards fit without overflow (desktop grid mode), do not scroll
      if (el.scrollWidth <= el.clientWidth + 15) return;
      handleNext();
    }, autoScrollInterval);

    return () => clearInterval(timer);
  }, [isPaused, autoScrollInterval, handleNext]);

  const uniqueClass = `svc-carousel-${id || Math.random().toString(36).substring(2, 8)}`;

  return (
    <div
      className={`service-cards-carousel-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        margin: '0 auto',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => {
        setTimeout(() => setIsPaused(false), 2500);
      }}
    >
      <style>{`
        /* Large Screens / Desktop: Modern Responsive Grid with NO scrollbar or horizontal scroll */
        .${uniqueClass} {
          position: relative;
          display: grid;
          grid-template-columns: ${
            count === 4
              ? 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))'
              : count >= 8
              ? 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))'
              : `repeat(${desktopCards}, 1fr)`
          };
          gap: ${gap};
          overflow: visible;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          padding-left: 0;
          padding-right: 0;
          align-items: stretch;
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .${uniqueClass} {
            grid-template-columns: repeat(${tabletCards}, 1fr) !important;
          }
        }
        .${uniqueClass} > * {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          flex: none !important;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* Navigation Arrows: Hidden on Desktop / Large screens */
        .service-carousel-nav-btn {
          display: none;
          position: absolute;
          top: 48%;
          transform: translateY(-50%);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 25;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .service-carousel-nav-btn:hover {
          transform: translateY(-50%) scale(1.12);
        }
        .service-carousel-nav-btn:active {
          transform: translateY(-50%) scale(0.95);
        }

        /* Pagination Dots: Hidden on Desktop / Large screens */
        .service-carousel-dots {
          display: none;
        }

        /* Mobile Screens (<= 768px): Smooth Horizontal Swipeable Carousel */
        @media (max-width: 768px) {
          .${uniqueClass} {
            display: flex !important;
            flex-direction: row !important;
            gap: 1rem !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
            padding-top: 0.5rem !important;
            padding-bottom: 1.25rem !important;
            align-items: stretch !important;
          }
          .${uniqueClass}::-webkit-scrollbar {
            display: none !important;
          }
          .${uniqueClass} > * {
            flex: 0 0 ${mobileCardWidth} !important;
            max-width: ${mobileCardWidth} !important;
            min-width: 0 !important;
            scroll-snap-align: start !important;
          }
          .service-carousel-nav-btn {
            display: flex !important;
          }
          .service-carousel-nav-btn-prev {
            left: -6px !important;
          }
          .service-carousel-nav-btn-next {
            right: -6px !important;
          }
          .service-carousel-dots {
            display: flex !important;
          }
        }
      `}</style>

      {/* Left Navigation Arrow Button */}
      <button
        type="button"
        aria-label="Previous card"
        onClick={handlePrev}
        className="service-carousel-nav-btn service-carousel-nav-btn-prev"
        style={{
          left: '-18px',
          background: isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(10, 20, 38, 0.9)',
          border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.2)',
          color: isLight ? '#0f172a' : '#f8fafc',
          boxShadow: isLight
            ? '0 6px 20px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)'
            : '0 8px 25px rgba(0, 0, 0, 0.65), 0 0 12px rgba(94, 192, 152, 0.15)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = isLight ? '#008a75' : '#5EC098';
          e.currentTarget.style.color = isLight ? '#008a75' : '#5EC098';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = isLight ? '#cbd5e1' : 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.color = isLight ? '#0f172a' : '#f8fafc';
        }}
      >
        <ChevronLeft size={22} />
      </button>

      {/* Right Navigation Arrow Button */}
      <button
        type="button"
        aria-label="Next card"
        onClick={handleNext}
        className="service-carousel-nav-btn service-carousel-nav-btn-next"
        style={{
          right: '-18px',
          background: isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(10, 20, 38, 0.9)',
          border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.2)',
          color: isLight ? '#0f172a' : '#f8fafc',
          boxShadow: isLight
            ? '0 6px 20px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)'
            : '0 8px 25px rgba(0, 0, 0, 0.65), 0 0 12px rgba(94, 192, 152, 0.15)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = isLight ? '#008a75' : '#5EC098';
          e.currentTarget.style.color = isLight ? '#008a75' : '#5EC098';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = isLight ? '#cbd5e1' : 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.color = isLight ? '#0f172a' : '#f8fafc';
        }}
      >
        <ChevronRight size={22} />
      </button>

      {/* Scrolling Track */}
      <div
        ref={trackRef}
        className={uniqueClass}
        onScroll={handleScroll}
      >
        {children}
      </div>

      {/* Pagination Progress Dots (Rendered only on Mobile) */}
      {showDots && totalItems > 1 && (
        <div
          className="service-carousel-dots"
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '1rem',
            marginBottom: '0.5rem',
          }}
        >
          {Array.from({ length: totalItems }).map((_, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                aria-label={`Go to card ${idx + 1}`}
                onClick={() => scrollToIndex(idx)}
                style={{
                  height: '6px',
                  width: isActive ? '24px' : '8px',
                  borderRadius: '9999px',
                  background: isActive
                    ? isLight
                      ? '#008a75'
                      : '#5EC098'
                    : isLight
                    ? 'rgba(0, 0, 0, 0.16)'
                    : 'rgba(255, 255, 255, 0.22)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive
                    ? isLight
                      ? '0 0 8px rgba(0, 138, 117, 0.4)'
                      : '0 0 10px rgba(94, 192, 152, 0.6)'
                    : 'none',
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

