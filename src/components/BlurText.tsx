"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: {
    filter?: string;
    opacity?: number;
    transform?: string;
  };
  animationTo?: Array<{
    filter?: string;
    opacity?: number;
    transform?: string;
  }>;
  easing?: string | number[];
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
}

export default function BlurText({
  text = "",
  delay = 120,
  className = "",
  animateBy = "words",
  direction = "top",
  animationFrom,
  animationTo,
  easing = [0.2, 0.65, 0.3, 0.9],
  onAnimationComplete,
  style = {},
}: BlurTextProps) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInView(true);
  }, []);

  const defaultFrom = {
    filter: "blur(8px)",
    opacity: 0,
    y: direction === "top" ? -14 : 14,
  };

  const fromState = animationFrom || defaultFrom;

  return (
    <div
      ref={ref}
      className={`blur-text-wrapper ${className}`}
      style={{
        display: "inline-block",
        whiteSpace: "normal",
        fontFamily: "inherit",
        fontWeight: "inherit",
        letterSpacing: "inherit",
        color: "inherit",
        ...style,
      }}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={fromState}
          animate={
            inView
              ? {
                  filter: "blur(0px)",
                  opacity: 1,
                  y: 0,
                }
              : fromState
          }
          transition={{
            duration: 0.55,
            delay: (index * delay) / 1000,
            ease: [0.16, 1, 0.3, 1],
          }}
          onAnimationComplete={
            index === elements.length - 1 ? onAnimationComplete : undefined
          }
          style={{
            display: "inline-block",
            fontFamily: "inherit",
            fontWeight: "inherit",
            letterSpacing: "inherit",
            color: "inherit",
            willChange: "transform, filter, opacity",
          }}
        >
          {element}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </div>
  );
}
