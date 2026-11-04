"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedRollingMetricProps {
  value: string;
  color?: string;
  isLight?: boolean;
  className?: string;
}

function RollingDigit({
  target,
  start,
  delay = 0,
  duration = 1.6,
}: {
  target: number;
  start: boolean;
  delay?: number;
  duration?: number;
}) {
  // 20-digit loop reel: 0..9 then 0..9 for authentic vertical roll-up from bottom
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const targetIndex = 10 + target;

  return (
    <span
      style={{
        display: "inline-block",
        height: "1.15em",
        lineHeight: "1.15em",
        overflow: "hidden",
        verticalAlign: "baseline",
        position: "relative",
      }}
    >
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          transform: start
            ? `translate3d(0, -${targetIndex * 5}%, 0)`
            : "translate3d(0, 0%, 0)",
          transition: start
            ? `transform ${duration}s cubic-bezier(0.12, 1, 0.25, 1) ${delay}s`
            : "none",
          willChange: "transform",
        }}
      >
        {digits.map((d, idx) => (
          <span
            key={idx}
            style={{
              height: "1.15em",
              lineHeight: "1.15em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}

export default function AnimatedRollingMetric({
  value,
  color,
  isLight = false,
  className,
}: AnimatedRollingMetricProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Detect when user actually scrolls to this section
    // rootMargin: -40px ensures it will NEVER fire if it only touches the bottom edge on page load
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            // When user scrolls away, reset so it animates each time the user comes to this section
            setIsInView(false);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "-40px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  let digitIndex = 0;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        fontSize: "clamp(2.1rem, 2.5vw, 2.6rem)",
        fontWeight: 800,
        lineHeight: 1,
        letterSpacing: "-0.03em",
        color: color || "#5EC098",
        textShadow: isLight ? "none" : "0 0 24px rgba(94, 192, 152, 0.25)",
        transform: isInView ? "translate3d(0, 0, 0)" : "translate3d(0, 18px, 0)",
        opacity: isInView ? 1 : 0,
        transition: isInView
          ? "transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.75s ease"
          : "none",
        willChange: "transform, opacity",
      }}
    >
      {value.split("").map((char, index) => {
        const isDigit = /\d/.test(char);

        if (isDigit) {
          const num = parseInt(char, 10);
          const delay = digitIndex * 0.09 + 0.1;
          digitIndex++;

          return (
            <RollingDigit
              key={index}
              target={num}
              start={isInView}
              delay={delay}
              duration={1.5}
            />
          );
        }

        return (
          <span
            key={index}
            style={{
              display: "inline-block",
              transform: isInView ? "translate3d(0, 0, 0)" : "translate3d(0, 12px, 0)",
              opacity: isInView ? 1 : 0,
              transition: isInView
                ? `transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${0.12 + index * 0.03}s, opacity 0.65s ease ${0.12 + index * 0.03}s`
                : "none",
              whiteSpace: "pre",
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}
