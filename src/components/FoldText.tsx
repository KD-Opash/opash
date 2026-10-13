"use client";

import React, { useEffect, useRef, useState } from "react";

export interface FoldTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "span" | "div";
  splitBy?: "char" | "word";
  hinge?: "top" | "bottom" | "left" | "right";
  trigger?: "scroll" | "load" | "hover";
  duration?: number;
  stagger?: number;
  ease?: string;
  perspective?: number;
  creaseShading?: number;
  fontSize?: string;
  fontWeight?: number | string;
  color?: string;
  className?: string;
  gradient?: boolean;
  gradientClass?: string;
}

export default function FoldText({
  text,
  as: Component = "span",
  splitBy = "char",
  hinge = "top",
  trigger = "scroll",
  duration = 0.65,
  stagger = 0.045,
  ease = "cubic-bezier(0.16, 1, 0.3, 1)",
  perspective = 700,
  creaseShading = 0.55,
  fontSize,
  fontWeight,
  color,
  className = "",
  gradient = false,
  gradientClass = "hero-valerio-gradient-text",
}: FoldTextProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(trigger === "load");
  const [isHovered, setIsHovered] = useState(false);

  // Scroll or load trigger observer
  useEffect(() => {
    if (trigger === "load") {
      setIsVisible(true);
      return;
    }

    if (trigger === "scroll") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        { threshold: 0.15 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }
  }, [trigger]);

  const items = splitBy === "word" ? text.split(" ") : Array.from(text);

  // Transform origins for hinges
  const hingeOrigins: Record<string, string> = {
    top: "center top",
    bottom: "center bottom",
    left: "left center",
    right: "right center",
  };

  // Initial folded transforms
  const foldedTransforms: Record<string, string> = {
    top: "rotateX(-92deg) translate3d(0, -10px, 0)",
    bottom: "rotateX(92deg) translate3d(0, 10px, 0)",
    left: "rotateY(-92deg) translate3d(-10px, 0, 0)",
    right: "rotateY(92deg) translate3d(10px, 0, 0)",
  };

  const unfoldedTransform = "rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)";
  const shouldAnimate = trigger === "hover" ? isHovered : isVisible;

  // Normalizing custom ease like 'power3.out' to standard css bezier
  const resolveEase = (easeStr: string) => {
    if (easeStr.includes("power") || easeStr.includes("out")) {
      return "cubic-bezier(0.215, 0.61, 0.355, 1)";
    }
    return easeStr;
  };

  return (
    <Component
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={`fold-text-container ${className}`}
      onMouseEnter={() => trigger === "hover" && setIsHovered(true)}
      onMouseLeave={() => trigger === "hover" && setIsHovered(false)}
      style={{
        display: "inline-flex",
        flexWrap: "wrap",
        perspective: `${perspective}px`,
        WebkitPerspective: `${perspective}px`,
        perspectiveOrigin: "50% 50%",
        fontSize,
        fontWeight,
        color,
        lineHeight: 1.1,
      }}
      aria-label={text}
    >
      {items.map((item, index) => {
        const isSpace = item === " ";
        const delay = index * stagger;

        return (
          <span
            key={index}
            className={`fold-item-wrapper ${gradient ? gradientClass : ""}`}
            style={{
              display: "inline-block",
              position: "relative",
              transformOrigin: hingeOrigins[hinge] || "center top",
              transformStyle: "preserve-3d",
              WebkitTransformStyle: "preserve-3d",
              transform: shouldAnimate ? unfoldedTransform : foldedTransforms[hinge] || foldedTransforms.top,
              opacity: shouldAnimate ? 1 : 0.05,
              transition: `transform ${duration}s ${resolveEase(ease)} ${delay}s, opacity ${duration * 0.8}s ease ${delay}s`,
              willChange: "transform, opacity",
              whiteSpace: isSpace ? "pre" : "normal",
              marginRight: splitBy === "word" ? "0.3em" : "0",
            }}
          >
            {isSpace ? "\u00A0" : item}

            {/* Crease Shading Overlay during fold transition */}
            <span
              className="fold-crease-shadow"
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  hinge === "top"
                    ? `linear-gradient(to bottom, rgba(0,0,0,${creaseShading}) 0%, transparent 80%)`
                    : hinge === "bottom"
                    ? `linear-gradient(to top, rgba(0,0,0,${creaseShading}) 0%, transparent 80%)`
                    : `linear-gradient(to right, rgba(0,0,0,${creaseShading}) 0%, transparent 80%)`,
                opacity: shouldAnimate ? 0 : creaseShading,
                transition: `opacity ${duration}s ease ${delay}s`,
              }}
            />
          </span>
        );
      })}
    </Component>
  );
}
