'use client';

import React, { useEffect, useRef } from 'react';

interface TechShowcaseBackdropProps {
  isLightMode?: boolean;
}

interface AuroraPoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  colorDark: string;
  colorLight: string;
  phase: number;
  speed: number;
}

export function TechShowcaseBackdrop({ isLightMode = false }: TechShowcaseBackdropProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 800);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // 5 Organic Floating Aurora Points (Emerald, Indigo, Cyan, Violet, Deep Teal)
    const points: AuroraPoint[] = [
      {
        x: width * 0.2,
        y: height * 0.25,
        vx: 0.35,
        vy: 0.25,
        radius: Math.max(width, height) * 0.45,
        baseRadius: Math.max(width, height) * 0.45,
        colorDark: 'rgba(0, 187, 171, 0.26)', // Electric Emerald/Teal
        colorLight: 'rgba(0, 168, 143, 0.14)',
        phase: 0,
        speed: 0.0008,
      },
      {
        x: width * 0.8,
        y: height * 0.3,
        vx: -0.3,
        vy: 0.28,
        radius: Math.max(width, height) * 0.5,
        baseRadius: Math.max(width, height) * 0.5,
        colorDark: 'rgba(99, 102, 241, 0.24)', // Royal Indigo/Violet
        colorLight: 'rgba(99, 102, 241, 0.12)',
        phase: Math.PI * 0.5,
        speed: 0.0007,
      },
      {
        x: width * 0.5,
        y: height * 0.65,
        vx: 0.25,
        vy: -0.32,
        radius: Math.max(width, height) * 0.48,
        baseRadius: Math.max(width, height) * 0.48,
        colorDark: 'rgba(14, 165, 233, 0.22)', // Sky Cyan
        colorLight: 'rgba(14, 165, 233, 0.12)',
        phase: Math.PI,
        speed: 0.0009,
      },
      {
        x: width * 0.15,
        y: height * 0.8,
        vx: 0.28,
        vy: -0.22,
        radius: Math.max(width, height) * 0.42,
        baseRadius: Math.max(width, height) * 0.42,
        colorDark: 'rgba(16, 185, 129, 0.2)', // Vivid Mint
        colorLight: 'rgba(16, 185, 129, 0.1)',
        phase: Math.PI * 1.5,
        speed: 0.00075,
      },
      {
        x: width * 0.85,
        y: height * 0.75,
        vx: -0.22,
        vy: -0.26,
        radius: Math.max(width, height) * 0.44,
        baseRadius: Math.max(width, height) * 0.44,
        colorDark: 'rgba(139, 92, 246, 0.22)', // Violet Silk
        colorLight: 'rgba(139, 92, 246, 0.1)',
        phase: Math.PI * 0.25,
        speed: 0.00085,
      },
    ];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (e.clientY < rect.top || e.clientY > rect.bottom) {
        mouseRef.current.active = false;
        return;
      }
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Smoothly update each organic liquid node
      points.forEach((p, idx) => {
        // Natural Lissajous fluid undulation
        const oscillationX = Math.sin(time * p.speed + p.phase) * (width * 0.08);
        const oscillationY = Math.cos(time * p.speed * 0.85 + p.phase) * (height * 0.08);

        let targetX = p.x + oscillationX;
        let targetY = p.y + oscillationY;

        // Subtle interactive mouse repulsion / fluid push
        if (mouseRef.current.active) {
          const dx = targetX - mouseRef.current.x;
          const dy = targetY - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 380;
          if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * 45;
            targetX += (dx / dist) * force;
            targetY += (dy / dist) * force;
          }
        }

        // Breathing radius pulsation
        const pulse = Math.sin(time * 0.0012 + idx) * 0.08;
        const currentRadius = p.baseRadius * (1 + pulse);

        // Draw soft radial aura
        const grad = ctx.createRadialGradient(
          targetX,
          targetY,
          0,
          targetX,
          targetY,
          currentRadius
        );

        const color = isLightMode ? p.colorLight : p.colorDark;
        grad.addColorStop(0, color);
        grad.addColorStop(0.5, color.replace(/[\d.]+\)$/, (match) => `${(parseFloat(match) * 0.45).toFixed(3)})`));
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(targetX, targetY, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Optional: Mouse spotlight highlight point
      if (mouseRef.current.active) {
        const mouseGrad = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          260
        );
        const mouseGlowColor = isLightMode
          ? 'rgba(0, 168, 143, 0.12)'
          : 'rgba(0, 187, 171, 0.18)';
        mouseGrad.addColorStop(0, mouseGlowColor);
        mouseGrad.addColorStop(0.5, mouseGlowColor.replace(/[\d.]+\)$/, (m) => `${(parseFloat(m) * 0.35).toFixed(3)})`));
        mouseGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = mouseGrad;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 260, 0, Math.PI * 2);
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isLightMode]);

  return (
    <div
      className="liquid-aurora-wrapper pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Underlying Liquid Silk Flow Canvas */}
      <canvas
        ref={canvasRef}
        className="liquid-aurora-canvas absolute inset-0 h-full w-full pointer-events-none"
      />

      {/* 2. Frosted Liquid Diffusion Layer */}
      <div className="liquid-aurora-blur-screen" />

      {/* 3. Top & Bottom Seamless Edge Blenders */}
      <div className="liquid-aurora-vignette-top" />
      <div className="liquid-aurora-vignette-bottom" />
    </div>
  );
}

export default TechShowcaseBackdrop;
