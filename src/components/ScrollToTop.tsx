'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ScrollToTop() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;

          setScrollProgress(progress);
          setIsVisible(scrollY > 280);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (isLaunching) return;
    setIsLaunching(true);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Reset rocket launch state after smooth glide completes
    setTimeout(() => {
      setIsLaunching(false);
    }, 700);
  };

  // Circular progress calculations (Radius 22, Circumference ~138.23)
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      <style>{`
        @keyframes scrollToTopPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 187, 171, 0.45);
          }
          70% {
            box-shadow: 0 0 0 16px rgba(0, 187, 171, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 187, 171, 0);
          }
        }

        @keyframes arrowLevitate {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes rocketLaunchUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          40% {
            transform: translateY(-28px) scale(1.15);
            opacity: 0;
          }
          45% {
            transform: translateY(28px) scale(0.7);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .scroll-top-btn {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.3s ease,
                      box-shadow 0.3s ease;
        }

        .scroll-top-btn:hover {
          transform: translateY(-5px) scale(1.08);
        }

        .scroll-top-btn:active {
          transform: translateY(-2px) scale(0.96);
        }

        .scroll-top-arrow-icon {
          animation: ${isLaunching ? 'rocketLaunchUp 0.65s cubic-bezier(0.16, 1, 0.3, 1)' : isHovered ? 'arrowLevitate 1.2s ease-in-out infinite' : 'none'};
        }
      `}</style>

      <div
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.8)',
          pointerEvents: isVisible ? 'auto' : 'none',
          transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Floating Circle Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top of page"
          className="scroll-top-btn"
          style={{
            position: 'relative',
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            background: isLight ? 'rgba(255, 255, 255, 0.92)' : 'rgba(9, 18, 34, 0.90)',
            border: `1px solid ${isLight ? 'rgba(0, 168, 143, 0.35)' : 'rgba(45, 212, 191, 0.38)'}`,
            backdropFilter: 'blur(14px)',
            boxShadow: isLaunching
              ? (isLight ? '0 0 25px rgba(0, 168, 143, 0.6)' : '0 0 35px rgba(0, 255, 209, 0.75)')
              : isHovered
              ? (isLight ? '0 12px 30px rgba(0, 168, 143, 0.25), 0 0 15px rgba(0, 168, 143, 0.2)' : '0 14px 40px rgba(0, 0, 0, 0.6), 0 0 22px rgba(45, 212, 191, 0.35)')
              : (isLight ? '0 8px 24px rgba(0, 0, 0, 0.08)' : '0 10px 30px rgba(0, 0, 0, 0.45)'),
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isLight ? '#008a75' : '#2dd4bf',
            outline: 'none',
            overflow: 'hidden',
          }}
        >
          {/* Circular SVG Scroll Progress Ring */}
          <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              transform: 'rotate(-90deg)',
              pointerEvents: 'none',
            }}
          >
            <defs>
              <linearGradient id="scrollTopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={isLight ? '#008a75' : '#00ffd1'} />
                <stop offset="100%" stopColor={isLight ? '#0284c7' : '#2dd4bf'} />
              </linearGradient>
            </defs>

            {/* Subtle Inactive Ring Background */}
            <circle
              cx="27"
              cy="27"
              r={radius}
              fill="none"
              stroke={isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.08)'}
              strokeWidth="2.5"
            />

            {/* Dynamic Active Progress Ring */}
            <circle
              cx="27"
              cy="27"
              r={radius}
              fill="none"
              stroke="url(#scrollTopGradient)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{
                transition: 'stroke-dashoffset 0.15s ease-out',
              }}
            />
          </svg>

          {/* Central Unique Animated Arrow */}
          <div
            className="scroll-top-arrow-icon"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <ArrowUp
              size={20}
              strokeWidth={2.6}
              style={{
                filter: isLight
                  ? 'drop-shadow(0 2px 4px rgba(0, 168, 143, 0.2))'
                  : 'drop-shadow(0 0 8px rgba(45, 212, 191, 0.5))',
              }}
            />
          </div>

          {/* Subtle Inner Glow on Hover / Launch */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: isLight
                ? 'radial-gradient(circle at 50% 50%, rgba(0, 168, 143, 0.12) 0%, transparent 70%)'
                : 'radial-gradient(circle at 50% 50%, rgba(0, 255, 209, 0.18) 0%, transparent 70%)',
              opacity: isHovered || isLaunching ? 1 : 0,
              transition: 'opacity 0.25s ease',
              pointerEvents: 'none',
            }}
          />
        </button>
      </div>
    </>
  );
}

