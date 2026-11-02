"use client";

import React, { useEffect, useRef } from "react";

interface CyberCurvedArcsCanvasProps {
  isLightMode?: boolean;
}

interface ArcFilament {
  x: number;
  y: number;
  depth: number; // 0.25 (far) to 1.0 (near)
  radius: number;
  arcLength: number; // in radians
  angle: number; // current orientation angle
  baseRotationSpeed: number;
  driftX: number;
  driftY: number;
  pulsePhase: number;
  pulseSpeed: number;
  lineWidth: number;
  colorType: number; // 0: mint, 1: cyan, 2: slate/indigo, 3: ice lavender, 4: crisp white
}

/**
 * 60FPS High-Performance Interactive Canvas Animation.
 * Curved arc filaments dynamically swivel and rotate ("ghoomte hain") towards the user's cursor.
 * Features organic magnetic flow-field orientation, inertial tracking, and zero sparkles.
 */
export default function CyberCurvedArcsCanvas({
  isLightMode = false,
}: CyberCurvedArcsCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let isVisible = true;

    // Window-level mouse tracking so pointer-events: none doesn't block it
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isActive: false,
    };

    let filaments: ArcFilament[] = [];

    const initScene = (w: number, h: number) => {
      if (w <= 0 || h <= 0) return;

      const count = Math.min(Math.floor((w * h) / 30000), 36);
      filaments = [];

      for (let i = 0; i < count; i++) {
        const depth = 0.35 + Math.random() * 0.65;
        filaments.push({
          x: Math.random() * w,
          y: Math.random() * h,
          depth,
          radius: (18 + Math.random() * 28) * depth,
          arcLength: 0.45 + Math.random() * 0.75,
          angle: Math.random() * Math.PI * 2,
          baseRotationSpeed: (Math.random() - 0.5) * 0.005,
          driftX: (Math.random() - 0.5) * 0.18 * depth,
          driftY: (Math.random() - 0.5) * 0.18 * depth,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.015,
          lineWidth: (1.0 + Math.random() * 1.2) * depth,
          colorType: Math.floor(Math.random() * 5),
        });
      }
    };

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = 1; // 1:1 pixel ratio eliminates 75% of pixel rasterization on Retina displays
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      initScene(width, height);
    };

    // Global cursor tracking on window ensures mouse tracking always responds
    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();

      // Check if mouse is near or inside canvas bounds
      if (
        e.clientY >= rect.top - 120 &&
        e.clientY <= rect.bottom + 120 &&
        e.clientX >= rect.left - 80 &&
        e.clientX <= rect.right + 80
      ) {
        mouse.targetX = e.clientX - rect.left;
        mouse.targetY = e.clientY - rect.top;
        mouse.isActive = true;
      } else {
        mouse.isActive = false;
      }
    };

    const handleWindowMouseLeave = () => {
      mouse.isActive = false;
    };

    let isIntersecting = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleWindowMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleWindowMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    handleResize();

    // Color palettes tuned to Opash brand
    const getStrokeColor = (type: number, alpha: number) => {
      if (isLightMode) {
        switch (type) {
          case 0:
            return `rgba(0, 168, 143, ${alpha * 0.95})`; // Opash Mint/Teal
          case 1:
            return `rgba(2, 132, 199, ${alpha * 0.9})`; // Sky / Cyan
          case 2:
            return `rgba(71, 109, 154, ${alpha * 0.85})`; // Slate Blue
          case 3:
            return `rgba(124, 58, 237, ${alpha * 0.75})`; // Indigo/Purple
          default:
            return `rgba(15, 23, 42, ${alpha * 0.75})`; // Deep Slate
        }
      } else {
        switch (type) {
          case 0:
            return `rgba(94, 192, 152, ${alpha * 0.95})`; // Vibrant Opash Mint
          case 1:
            return `rgba(45, 212, 191, ${alpha * 0.92})`; // Electric Cyan
          case 2:
            return `rgba(98, 137, 184, ${alpha * 0.78})`; // Opash Slate
          case 3:
            return `rgba(167, 139, 250, ${alpha * 0.72})`; // Soft Indigo/Lavender
          default:
            return `rgba(240, 253, 250, ${alpha * 0.88})`; // Crisp White
        }
      }
    };

    // Render loop throttled to 30 FPS for ultra-low CPU/GPU usage
    let lastFrameTime = 0;
    const fpsInterval = 1000 / 30;

    const render = (currentTime: number) => {
      animId = requestAnimationFrame(render);
      if (!isVisible || !isIntersecting) {
        return;
      }

      const elapsed = currentTime - lastFrameTime;
      if (elapsed < fpsInterval) {
        return;
      }
      lastFrameTime = currentTime - (elapsed % fpsInterval);

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp inertia
      if (mouse.isActive) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
      }

      const influenceRadius = 420;

      // Draw and Animate Curved Arc Filaments
      for (let i = 0; i < filaments.length; i++) {
        const f = filaments[i];

        // Base organic drift
        f.x += f.driftX;
        f.y += f.driftY;
        f.pulsePhase += f.pulseSpeed;

        // Wrap around boundaries
        if (f.x < -60) f.x = width + 50;
        if (f.x > width + 60) f.x = -50;
        if (f.y < -60) f.y = height + 50;
        if (f.y > height + 60) f.y = -50;

        // Dynamic Cursor Rotation ("cursor jaha jaye vese ghume")
        if (mouse.isActive) {
          const dx = mouse.x - f.x;
          const dy = mouse.y - f.y;
          const dist = Math.hypot(dx, dy);

          if (dist < influenceRadius && dist > 8) {
            // Force factor: strongest near cursor (0 to 1)
            const factor = Math.pow(1 - dist / influenceRadius, 1.25);

            // Flow-field target angle pointing toward cursor with aesthetic curvature offset
            const targetAngle = Math.atan2(dy, dx) + 0.35;

            // Shortest rotational distance between current angle and targetAngle
            let angleDiff = targetAngle - f.angle;
            angleDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));

            // Rotate toward cursor (swivel speed proportional to proximity & depth)
            f.angle += angleDiff * (0.075 * factor + 0.01) * f.depth;

            // Subtle magnetic pull toward cursor flow
            f.x += (dx / dist) * (0.75 * factor * f.depth);
            f.y += (dy / dist) * (0.75 * factor * f.depth);
          } else {
            // Ambient natural rotation outside cursor zone
            f.angle += f.baseRotationSpeed;
          }
        } else {
          // Ambient natural rotation when cursor is idle
          f.angle += f.baseRotationSpeed;
        }

        // Parallax depth offset
        let px = f.x;
        let py = f.y;
        if (mouse.isActive) {
          const centerOffsetX = (mouse.x - width / 2) / (width / 2);
          const centerOffsetY = (mouse.y - height / 2) / (height / 2);
          px += centerOffsetX * (18 * f.depth);
          py += centerOffsetY * (14 * f.depth);
        }

        // Pulsing luminosity
        const pulse = 0.5 + Math.sin(f.pulsePhase) * 0.5;
        const alpha = Math.max(0.14, Math.min(0.95, (0.3 + pulse * 0.65) * f.depth));

        ctx.strokeStyle = getStrokeColor(f.colorType, alpha);
        ctx.lineWidth = f.lineWidth;
        ctx.lineCap = "round";

        ctx.beginPath();
        // Render crescent arc segment oriented at current angle
        ctx.arc(px, py, f.radius, f.angle, f.angle + f.arcLength, false);
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("mouseleave", handleWindowMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isLightMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}
