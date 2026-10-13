"use client";

import React, { useRef, useState, useEffect, useCallback, useMemo } from "react";

export interface ElasticLetteringProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "span" | "div";
  className?: string;
  fontSize?: string;
  fontWeight?: number | string;
  color?: string;
  gradient?: boolean;
  gradientColors?: string[];
  tension?: number; // resistance strength (higher = stiffer, 0.1 - 0.9)
  stiffness?: number; // spring stiffness for bounce (0.05 - 0.3)
  damping?: number; // bounce decay (0.7 - 0.95)
  bounce?: number; // multiplier for fling rebound
  reach?: number; // max pixels a letter can stretch
  pluckStrength?: number; // click vibration strength
  discoveryTug?: boolean; // initial hint animation
}

interface LetterPhysics {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

// Seamless gradient interpolation for individual elastic letters
// Adapts dynamically to light and dark themes for high contrast and brand vibrancy
function getInterpolatedColor(ratio: number, isLight: boolean): string {
  if (isLight) {
    // Light Mode: High-contrast WCAG AAA Opash Royal Blue -> Deep Slate -> Deep Emerald Mint
    if (ratio <= 0.45) {
      const t = ratio / 0.45;
      const r = Math.round(29 + (48 - 29) * t); // #1d4ed8 to #304E74
      const g = Math.round(78 + (78 - 78) * t);
      const b = Math.round(216 + (116 - 216) * t);
      return `rgb(${r}, ${g}, ${b})`;
    } else {
      const t = (ratio - 0.45) / 0.55;
      const r = Math.round(48 + (5 - 48) * t); // #304E74 to #059669
      const g = Math.round(78 + (150 - 78) * t);
      const b = Math.round(116 + (105 - 116) * t);
      return `rgb(${r}, ${g}, ${b})`;
    }
  } else {
    // Dark Mode: Luminous Sky Blue -> Opash Slate -> Opash Mint
    if (ratio <= 0.45) {
      const t = ratio / 0.45;
      const r = Math.round(123 + (71 - 123) * t);
      const g = Math.round(179 + (109 - 179) * t);
      const b = Math.round(230 + (154 - 230) * t);
      return `rgb(${r}, ${g}, ${b})`;
    } else {
      const t = (ratio - 0.45) / 0.55;
      const r = Math.round(71 + (94 - 71) * t);
      const g = Math.round(109 + (192 - 109) * t);
      const b = Math.round(154 + (152 - 154) * t);
      return `rgb(${r}, ${g}, ${b})`;
    }
  }
}

export default function ElasticLettering({
  text,
  as: Component = "span",
  className = "",
  fontSize,
  fontWeight,
  color,
  gradient = false,
  tension = 0.55,
  stiffness = 0.16,
  damping = 0.82,
  bounce = 1.3,
  reach = 140,
  pluckStrength = 36,
  discoveryTug = true,
}: ElasticLetteringProps) {
  const characters = useMemo(() => Array.from(text), [text]);
  const containerRef = useRef<HTMLElement | null>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [isLightMode, setIsLightMode] = useState<boolean>(false);

  // Monitor document theme for instant real-time color recalculation
  useEffect(() => {
    const checkTheme = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setIsLightMode(currentTheme === "light");
    };

    checkTheme();

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes" && m.attributeName === "data-theme") {
          checkTheme();
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  // Physics state per letter
  const physicsRef = useRef<LetterPhysics[]>(
    characters.map(() => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      targetX: 0,
      targetY: 0,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
    }))
  );

  const activeGrabRef = useRef<{
    index: number;
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
    lastTime: number;
    velocityX: number;
    velocityY: number;
  } | null>(null);

  const isDraggingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const [isGrabbing, setIsGrabbing] = useState(false);

  // Resize physics array if text changes
  useEffect(() => {
    physicsRef.current = characters.map(() => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      targetX: 0,
      targetY: 0,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
    }));
  }, [characters]);

  // Main Physics Simulation Loop
  const updatePhysics = useCallback(() => {
    let hasMotion = false;
    const physics = physicsRef.current;
    const count = physics.length;
    const grab = activeGrabRef.current;

    for (let i = 0; i < count; i++) {
      const p = physics[i];

      if (grab && grab.index === i) {
        // Direct pointer tracking with spring lag
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        p.vx = (p.vx + dx * 0.45) * 0.65;
        p.vy = (p.vy + dy * 0.45) * 0.65;
        p.x += p.vx;
        p.y += p.vy;

        // Dynamic rotation & stretch along drag vector
        const stretchDist = Math.hypot(p.x, p.y);
        const stretchFactor = Math.min(stretchDist / 85, 0.55);
        p.scaleX = 1 - stretchFactor * 0.25;
        p.scaleY = 1 + stretchFactor * 0.5;
        p.rotation = Math.max(-25, Math.min(25, (p.x * 0.15) - (p.y * 0.08)));
        hasMotion = true;
      } else if (grab) {
        // Adjacent letters elastic band chain reaction
        const distFromGrab = Math.abs(i - grab.index);
        const influence = Math.exp(-0.42 * distFromGrab);

        const targetX = grab.lastX * influence * 0.48;
        const targetY = grab.lastY * influence * 0.48;

        const ax = (targetX - p.x) * stiffness;
        const ay = (targetY - p.y) * stiffness;
        p.vx = (p.vx + ax) * damping;
        p.vy = (p.vy + ay) * damping;
        p.x += p.vx;
        p.y += p.vy;

        p.rotation = (targetX - p.x) * 0.09;
        p.scaleX = 1 + Math.abs(p.vx) * 0.02;
        p.scaleY = 1 + Math.abs(p.vy) * 0.02;

        if (
          Math.abs(p.vx) > 0.02 ||
          Math.abs(p.vy) > 0.02 ||
          Math.abs(p.x) > 0.1 ||
          Math.abs(p.y) > 0.1
        ) {
          hasMotion = true;
        }
      } else {
        // Free release spring bounce oscillation
        const ax = -stiffness * p.x;
        const ay = -stiffness * p.y;
        p.vx = (p.vx + ax) * damping;
        p.vy = (p.vy + ay) * damping;
        p.x += p.vx;
        p.y += p.vy;

        p.rotation += -p.rotation * 0.22;
        p.scaleX += (1 - p.scaleX) * 0.26;
        p.scaleY += (1 - p.scaleY) * 0.26;

        if (
          Math.abs(p.vx) > 0.015 ||
          Math.abs(p.vy) > 0.015 ||
          Math.abs(p.x) > 0.05 ||
          Math.abs(p.y) > 0.05 ||
          Math.abs(p.rotation) > 0.05 ||
          Math.abs(p.scaleX - 1) > 0.01
        ) {
          hasMotion = true;
        } else {
          p.x = 0;
          p.y = 0;
          p.vx = 0;
          p.vy = 0;
          p.rotation = 0;
          p.scaleX = 1;
          p.scaleY = 1;
        }
      }

      // Apply transform directly to DOM element
      const el = lettersRef.current[i];
      if (el) {
        if (p.x === 0 && p.y === 0 && p.rotation === 0 && p.scaleX === 1 && p.scaleY === 1) {
          el.style.transform = "";
          el.style.filter = "";
        } else {
          el.style.transform = `translate3d(${p.x.toFixed(2)}px, ${p.y.toFixed(2)}px, 0) rotate(${p.rotation.toFixed(2)}deg) scale(${p.scaleX.toFixed(3)}, ${p.scaleY.toFixed(3)})`;

          const tensionAmt = Math.min(1, Math.hypot(p.x, p.y) / 65);
          if (tensionAmt > 0.1) {
            el.style.filter = `drop-shadow(0 0 ${Math.round(tensionAmt * 14)}px rgba(94, 192, 152, ${0.45 * tensionAmt}))`;
          } else {
            el.style.filter = "";
          }
        }
      }
    }

    if (hasMotion || grab) {
      animationFrameRef.current = requestAnimationFrame(updatePhysics);
    } else {
      animationFrameRef.current = null;
    }
  }, [stiffness, damping]);

  const startLoop = useCallback(() => {
    if (!animationFrameRef.current) {
      animationFrameRef.current = requestAnimationFrame(updatePhysics);
    }
  }, [updatePhysics]);

  // Handle Pointer Interactions
  const handlePointerDown = (index: number, e: React.PointerEvent) => {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);

    const now = performance.now();
    activeGrabRef.current = {
      index,
      startX: e.clientX,
      startY: e.clientY,
      lastX: 0,
      lastY: 0,
      lastTime: now,
      velocityX: 0,
      velocityY: 0,
    };
    isDraggingRef.current = true;
    setIsGrabbing(true);
    startLoop();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const grab = activeGrabRef.current;
    if (!grab || !isDraggingRef.current) return;

    const rawDx = e.clientX - grab.startX;
    const rawDy = e.clientY - grab.startY;

    const rawDist = Math.hypot(rawDx, rawDy);
    const scaledDist = reach * Math.tanh(rawDist / (reach * (1 - tension * 0.4)));
    const angle = Math.atan2(rawDy, rawDx);

    const targetX = Math.cos(angle) * scaledDist;
    const targetY = Math.sin(angle) * scaledDist;

    const now = performance.now();
    const dt = Math.max(1, now - grab.lastTime);
    grab.velocityX = ((targetX - grab.lastX) / dt) * 16;
    grab.velocityY = ((targetY - grab.lastY) / dt) * 16;
    grab.lastX = targetX;
    grab.lastY = targetY;
    grab.lastTime = now;

    const p = physicsRef.current[grab.index];
    if (p) {
      p.targetX = targetX;
      p.targetY = targetY;
    }

    startLoop();
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const grab = activeGrabRef.current;
    if (grab) {
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }

      const p = physicsRef.current[grab.index];
      if (p) {
        p.vx = (grab.velocityX || 0) * bounce;
        p.vy = (grab.velocityY || 0) * bounce;
      }

      const now = performance.now();
      if (now - grab.lastTime < 180 && Math.hypot(grab.lastX, grab.lastY) < 12) {
        if (p) {
          p.vy = (Math.random() > 0.5 ? 1 : -1) * pluckStrength;
          p.vx = (Math.random() - 0.5) * (pluckStrength * 0.6);
        }
      }

      activeGrabRef.current = null;
      isDraggingRef.current = false;
      setIsGrabbing(false);
      startLoop();
    }
  };

  // Subtle Discovery Tug on Mount
  useEffect(() => {
    if (!discoveryTug) return;
    const timer = setTimeout(() => {
      const mid = Math.floor(characters.length / 2);
      if (physicsRef.current[mid]) {
        physicsRef.current[mid].vy = 24;
        physicsRef.current[mid].vx = -8;
        if (mid > 0 && physicsRef.current[mid - 1]) physicsRef.current[mid - 1].vy = 16;
        if (mid < characters.length - 1 && physicsRef.current[mid + 1]) physicsRef.current[mid + 1].vy = 16;
        startLoop();
      }
    }, 900);
    return () => clearTimeout(timer);
  }, [discoveryTug, characters.length, startLoop]);

  // Clean up animation on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Split into words so letters within a word NEVER wrap or break across lines
  const words = useMemo(() => text.split(" "), [text]);

  // Pre-calculate running starting indices for each word
  const wordStartIndices = useMemo(() => {
    const indices: number[] = [];
    let currentIdx = 0;
    for (let i = 0; i < words.length; i++) {
      indices.push(currentIdx);
      currentIdx += Array.from(words[i]).length + 1; // +1 for the space
    }
    return indices;
  }, [words]);

  return (
    <Component
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={`elastic-lettering-container ${isGrabbing ? "is-grabbing" : ""} ${className}`}
      style={{
        display: "inline-flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "baseline",
        fontSize,
        fontWeight,
        color,
        userSelect: "none",
        WebkitUserSelect: "none",
        touchAction: "none",
        cursor: isGrabbing ? "grabbing" : "grab",
        rowGap: "0.2em",
      }}
      aria-label={text}
    >
      {words.map((word, wordIdx) => {
        const wordChars = Array.from(word);
        const wordStartIndex = wordStartIndices[wordIdx];

        return (
          <span
            key={wordIdx}
            className="elastic-word"
            style={{
              display: "inline-flex",
              whiteSpace: "nowrap",
              margin: "0 0.16em",
              verticalAlign: "baseline",
            }}
          >
            {wordChars.map((char, charOffset) => {
              const globalIndex = wordStartIndex + charOffset;
              const ratio = characters.length > 1 ? globalIndex / (characters.length - 1) : 0;
              const defaultColor = color || "var(--text-primary)";
              const letterColor = gradient ? getInterpolatedColor(ratio, isLightMode) : defaultColor;

              return (
                <span
                  key={globalIndex}
                  ref={(el) => {
                    lettersRef.current[globalIndex] = el;
                  }}
                  onPointerDown={(e) => handlePointerDown(globalIndex, e)}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                  className={`elastic-letter ${gradient ? "has-gradient" : ""}`}
                  style={{
                    display: "inline-block",
                    position: "relative",
                    transformOrigin: "center center",
                    willChange: "transform, filter",
                    pointerEvents: "auto",
                    padding: "0 0.015em",
                    color: letterColor,
                    transition: isDraggingRef.current ? "none" : "color 0.2s ease",
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </Component>
  );
}
