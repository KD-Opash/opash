"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { Star, Quote } from "lucide-react";
import { CaseStudy } from "@/data/case-studies";

interface CurvedTestimonialsCarouselProps {
  isLight: boolean;
  items: CaseStudy[];
}

export default function CurvedTestimonialsCarousel({
  isLight,
  items,
}: CurvedTestimonialsCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // We repeat items 4 times to ensure seamless infinite looping on all screen sizes
  const repeatedItems = [...items, ...items, ...items, ...items];
  const totalCards = repeatedItems.length;

  const offsetRef = useRef(0);
  const isHovered = useRef(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const lastDragX = useRef(0);
  const animFrameId = useRef<number | null>(null);

  // Responsive card dimension configs
  const [dimensions, setDimensions] = useState({
    cardWidth: 350,
    cardHeight: 390,
    stepX: 378,
    curveHeight: 70,
    perspective: 1250,
  });

  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setDimensions({
          cardWidth: 285,
          cardHeight: 360,
          stepX: 305,
          curveHeight: 42,
          perspective: 900,
        });
      } else if (w < 1024) {
        setDimensions({
          cardWidth: 320,
          cardHeight: 375,
          stepX: 345,
          curveHeight: 56,
          perspective: 1100,
        });
      } else {
        setDimensions({
          cardWidth: 350,
          cardHeight: 390,
          stepX: 378,
          curveHeight: 70,
          perspective: 1250,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const { cardWidth, cardHeight, stepX, curveHeight, perspective } = dimensions;
  const cycleWidth = items.length * stepX;
  const totalTrackWidth = totalCards * stepX;

  // 60fps GPU animation loop
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      const container = containerRef.current;
      if (container) {
        const width = container.clientWidth;
        const cx = width / 2;

        // Auto-scroll speed: ~45px per second when not hovered and not dragging
        if (!isHovered.current && !isDragging.current) {
          offsetRef.current += 45 * dt;
        }

        // Keep offset wrapped inside the cycle width for infinite seamless looping
        if (offsetRef.current >= cycleWidth) {
          offsetRef.current -= cycleWidth;
        } else if (offsetRef.current < 0) {
          offsetRef.current += cycleWidth;
        }

        // Update each card's 3D curved coordinates directly on GPU
        for (let i = 0; i < totalCards; i++) {
          const el = cardRefs.current[i];
          if (!el) continue;

          // Compute raw horizontal position along the infinite belt
          let cardX = (i * stepX) - offsetRef.current;

          // Wrap into the visible sliding window
          while (cardX < -stepX * 2) {
            cardX += totalTrackWidth;
          }
          while (cardX > totalTrackWidth - stepX * 2) {
            cardX -= totalTrackWidth;
          }

          // Distance from screen center: -1.0 (left edge) to 0 (center) to +1.0 (right edge)
          const cardCenterX = cardX + cardWidth / 2;
          const dist = cx > 0 ? (cardCenterX - cx) / cx : 0;

          // Only render visible cards with margin for smooth entry/exit
          if (cardX > -stepX * 2 && cardX < width + stepX) {
            el.style.display = "flex";

            // PARABOLIC ARCH: Center card at y=0, side cards curve downward along a parabolic arc
            const translateY = Math.pow(dist, 2) * curveHeight;

            // TANGENT TILT: Tilts along the slope of the curve (left tilts counter-clockwise, right clockwise)
            const rotateZ = dist * 9.5;

            // 3D PERSPECTIVE: Turns inward towards the viewer (amphitheater curvature)
            const rotateY = -dist * 18;

            // DEPTH SCALE & ELEVATION
            const scale = Math.max(0.85, 1 - Math.abs(dist) * 0.08);
            const zIndex = Math.round(20 - Math.abs(dist) * 12);
            const opacity = Math.max(0.35, 1 - Math.abs(dist) * 0.42);

            el.style.transform = `translate3d(${cardX}px, ${translateY}px, 0) rotateZ(${rotateZ}deg) rotateY(${rotateY}deg) scale(${scale})`;
            el.style.zIndex = `${zIndex}`;
            el.style.opacity = `${opacity}`;
          } else {
            el.style.display = "none";
          }
        }
      }

      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [cardWidth, stepX, curveHeight, cycleWidth, totalTrackWidth, totalCards]);

  // Mouse Drag Scrubbing
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    lastDragX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const delta = e.clientX - lastDragX.current;
    lastDragX.current = e.clientX;
    offsetRef.current -= delta * 1.25;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Touch Swipe Scrubbing
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    dragStartX.current = e.touches[0].clientX;
    lastDragX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const delta = e.touches[0].clientX - lastDragX.current;
    lastDragX.current = e.touches[0].clientX;
    offsetRef.current -= delta * 1.35;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        userSelect: "none",
        cursor: "grab",
        padding: "1rem 0 0.75rem 0",
      }}
      onMouseEnter={() => {
        isHovered.current = true;
      }}
      onMouseLeave={() => {
        isHovered.current = false;
        isDragging.current = false;
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Perspective Curved Ribbon Stage */}
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          height: `${cardHeight + curveHeight + 35}px`,
          perspective: `${perspective}px`,
          perspectiveOrigin: "center center",
          transformStyle: "preserve-3d",
        }}
      >
        {repeatedItems.map((cs, idx) => (
          <div
            key={`${cs.id}-${idx}`}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
            style={{
              position: "absolute",
              top: "10px",
              left: 0,
              width: `${cardWidth}px`,
              height: `${cardHeight}px`,
              borderRadius: "24px",
              background: isLight ? "rgba(255, 255, 255, 0.94)" : "rgba(10, 20, 36, 0.88)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: isLight
                ? "1px solid rgba(0, 138, 117, 0.28)"
                : "1px solid rgba(0, 255, 209, 0.28)",
              boxShadow: isLight
                ? "0 18px 40px -10px rgba(0, 0, 0, 0.08), 0 0 25px rgba(0, 168, 143, 0.12)"
                : "0 25px 60px -10px rgba(0, 0, 0, 0.75), 0 0 30px rgba(0, 255, 209, 0.15)",
              padding: "2rem 1.85rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              willChange: "transform, opacity",
              transformOrigin: "center center",
              transition: "border-color 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            {/* Card Header: 5 Stars & Client Badge */}
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <div style={{ display: "flex", gap: "0.25rem", color: "#f59e0b" }}>
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} size={15} fill="#f59e0b" />
                  ))}
                </div>

                <span
                  style={{
                    padding: "0.25rem 0.65rem",
                    borderRadius: "9999px",
                    background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(0, 255, 209, 0.12)",
                    border: isLight
                      ? "1px solid rgba(0, 168, 143, 0.25)"
                      : "1px solid rgba(0, 255, 209, 0.25)",
                    color: isLight ? "#008a75" : "#00ffd1",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                  }}
                >
                  {cs.client}
                </span>
              </div>

              {/* Quote text with watermark quotation mark */}
              <div style={{ position: "relative" }}>
                <Quote
                  size={28}
                  style={{
                    position: "absolute",
                    top: "-8px",
                    left: "-6px",
                    opacity: isLight ? 0.08 : 0.12,
                    color: isLight ? "#008a75" : "#00ffd1",
                    pointerEvents: "none",
                  }}
                />
                <p
                  style={{
                    color: isLight ? "#1e293b" : "#f1f5f9",
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    fontStyle: "italic",
                    margin: 0,
                    position: "relative",
                    zIndex: 1,
                    display: "-webkit-box",
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  &ldquo;{cs.testimonial.quote}&rdquo;
                </p>
              </div>
            </div>

            {/* Card Footer: Author & Title */}
            <div
              style={{
                borderTop: isLight ? "1px solid #f1f5f9" : "1px solid rgba(255, 255, 255, 0.08)",
                paddingTop: "1rem",
                marginTop: "1.25rem",
              }}
            >
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "0.98rem",
                  color: isLight ? "#008a75" : "#00ffd1",
                  marginBottom: "0.2rem",
                }}
              >
                {cs.testimonial.author}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: isLight ? "#64748b" : "#94a3b8",
                  fontWeight: 500,
                }}
              >
                {cs.testimonial.role} &bull; {cs.testimonial.company}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
