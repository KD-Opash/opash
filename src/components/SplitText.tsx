"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number; // Delay between characters in ms (default: 45)
  duration?: number; // Animation duration in seconds (default: 0.6)
  animationFrom?: {
    opacity?: number;
    y?: number;
    transform?: string;
    filter?: string;
  };
  animationTo?: {
    opacity?: number;
    y?: number;
    transform?: string;
    filter?: string;
  };
  easing?: number[] | string;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  splitBy?: "chars" | "words";
  onLetterAnimationComplete?: () => void;
  style?: React.CSSProperties;
}

export default function SplitText({
  text = "",
  className = "",
  delay = 45,
  duration = 0.6,
  animationFrom = { opacity: 0, y: 38 },
  animationTo = { opacity: 1, y: 0 },
  easing = [0.22, 1, 0.36, 1], // easeOutCubic
  threshold = 0.1,
  rootMargin = "-50px",
  textAlign,
  tag: Tag = "span",
  splitBy = "chars",
  onLetterAnimationComplete,
  style = {},
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: threshold,
    margin: (rootMargin as any) || "-50px",
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldAnimate = mounted && isInView;

  // Helper to ensure ReactBits transform: "translate3d(0, 40px, 0)" maps smoothly to GPU transform
  const parseMotionState = (state?: any) => {
    if (!state) return {};
    const res = { ...state };
    if (state.transform && res.y === undefined) {
      const match = /translate3d\([^,]+,\s*(-?\d+(?:\.\d+)?(?:px)?)\s*,/i.exec(state.transform);
      if (match) {
        res.y = parseFloat(match[1]);
        delete res.transform;
      }
    }
    return res;
  };

  const initialAnim = parseMotionState(animationFrom);
  const targetAnim = parseMotionState(animationTo);

  // Split text into words to prevent word-break awkwardness
  const words = text.split(" ");
  let globalIndex = 0;
  const totalLetters = text.replace(/\s+/g, "").length;

  return (
    <Tag
      ref={containerRef as any}
      className={`split-parent ${className}`}
      style={{
        display: "block",
        width: "100%",
        textAlign: textAlign || "center",
        overflow: "visible",
        whiteSpace: "normal",
        wordWrap: "break-word",
        fontFamily: "inherit",
        fontWeight: "inherit",
        letterSpacing: "inherit",
        lineHeight: "inherit",
        color: "inherit",
        textShadow: "none",
        ...style,
      }}
    >
      {words.map((word, wordIndex) => {
        const isLastWord = wordIndex === words.length - 1;

        if (splitBy === "words") {
          const currentIdx = wordIndex;
          return (
            <React.Fragment key={wordIndex}>
              <span
                style={{
                  display: "inline-block",
                  overflow: "visible",
                  verticalAlign: "top",
                }}
              >
                <motion.span
                  initial={initialAnim}
                  animate={shouldAnimate ? targetAnim : initialAnim}
                  transition={{
                    duration,
                    delay: (currentIdx * delay) / 1000,
                    ease: easing as any,
                  }}
                  onAnimationComplete={
                    isLastWord ? onLetterAnimationComplete : undefined
                  }
                  style={{
                    display: "inline-block",
                    willChange: "transform, opacity",
                    fontFamily: "inherit",
                    fontWeight: "inherit",
                    letterSpacing: "inherit",
                    color: "inherit",
                    textShadow: "none",
                  }}
                >
                  {word}
                </motion.span>
              </span>
              {!isLastWord && (
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    fontFamily: "inherit",
                  }}
                >
                  {" "}
                </span>
              )}
            </React.Fragment>
          );
        }

        // Default: Split by Characters ('chars')
        const chars = word.split("");
        return (
          <React.Fragment key={wordIndex}>
            <span
              className="split-word-wrapper"
              style={{
                display: "inline-block",
                whiteSpace: "nowrap",
                overflow: "visible",
                verticalAlign: "top",
              }}
            >
              {chars.map((char, charIndex) => {
                const charGlobalIdx = globalIndex++;
                const isLastCharInText =
                  isLastWord && charIndex === chars.length - 1;

                return (
                  <motion.span
                    key={charIndex}
                    className="split-char-item"
                    initial={initialAnim}
                    animate={shouldAnimate ? targetAnim : initialAnim}
                    transition={{
                      duration,
                      delay: (charGlobalIdx * delay) / 1000,
                      ease: easing as any,
                    }}
                    onAnimationComplete={
                      isLastCharInText ? onLetterAnimationComplete : undefined
                    }
                    style={{
                      display: "inline-block",
                      willChange: "transform, opacity",
                      fontFamily: "inherit",
                      fontWeight: "inherit",
                      letterSpacing: "inherit",
                      color: "inherit",
                      textShadow: "none",
                    }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
            {!isLastWord && (
              <span
                className="split-space-item"
                style={{
                  display: "inline-block",
                  whiteSpace: "pre",
                  fontFamily: "inherit",
                }}
              >
                {" "}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </Tag>
  );
}
