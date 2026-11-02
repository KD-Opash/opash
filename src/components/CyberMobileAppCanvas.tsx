'use client';

import React, { useEffect, useRef } from 'react';

interface CyberMobileAppCanvasProps {
  isLightMode?: boolean;
}

interface TouchRipple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
  color: string;
}

interface FloatingAppWidget {
  x: number;
  y: number;
  w: number;
  h: number;
  vx: number;
  vy: number;
  angle: number;
  vAngle: number;
  type: 'phone' | 'analytics' | 'matrix' | 'chip';
  alpha: number;
  pulsePhase: number;
}

interface SignalSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  pulsePhase: number;
}

/**
 * CyberMobileAppCanvas
 * Professional 60FPS backdrop specifically for Mobile App Development.
 * Distinct professional visual theme:
 * - Interactive Haptic Touch Ripples (expanding multi-ring waves reacting to cursor).
 * - High-end Mobile Device Frames, App Analytics Sparklines, Modular Micro-App Grids & Bionic SoC Chips.
 * - Drifting mobile signal sparks (5G / WiFi / Bluetooth wireless energy pulses).
 * - Subtle ecosystem interconnect laser lines between neighboring nodes.
 * - Auto-pauses on hidden tab, <15MB VRAM, zero CPU leaks.
 */
export default function CyberMobileAppCanvas({
  isLightMode = false,
}: CyberMobileAppCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse tracking & touch ripple manager
    const mouse = {
      x: width * 0.5,
      y: height * 0.45,
      lastX: width * 0.5,
      lastY: height * 0.45,
      speed: 0,
      active: false,
    };

    const ripples: TouchRipple[] = [];
    const maxRipples = 8;

    // Color tokens
    const mintColor = isLightMode ? '0, 168, 143' : '94, 192, 152';
    const cyanColor = isLightMode ? '2, 132, 199' : '45, 212, 191';
    const blueColor = isLightMode ? '71, 109, 154' : '56, 189, 248';

    // 1. Initialize Professional Mobile Architecture Widgets (Phones, Analytics, Matrix & Chips)
    const widgets: FloatingAppWidget[] = [];
    const widgetCount = 7;
    const types: FloatingAppWidget['type'][] = ['phone', 'analytics', 'matrix', 'chip'];

    for (let i = 0; i < widgetCount; i++) {
      const type = types[i % types.length];
      let w = 84;
      let h = 56;
      if (type === 'phone') { w = 48; h = 90; }
      if (type === 'analytics') { w = 84; h = 56; }
      if (type === 'matrix') { w = 78; h = 54; }
      if (type === 'chip') { w = 52; h = 52; }

      widgets.push({
        x: Math.random() * width,
        y: Math.random() * height,
        w,
        h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: -0.18 - Math.random() * 0.25,
        angle: (Math.random() - 0.5) * 0.12,
        vAngle: (Math.random() - 0.5) * 0.002,
        type,
        alpha: isLightMode ? 0.09 + Math.random() * 0.06 : 0.11 + Math.random() * 0.08,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // 2. Initialize Signal Energy Sparks
    const sparks: SignalSpark[] = [];
    const sparkCount = 26;
    for (let i = 0; i < sparkCount; i++) {
      sparks.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.45 + 0.2,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Spawn touch ripple helper
    const addRipple = (x: number, y: number, isStrong = false) => {
      if (ripples.length >= maxRipples) ripples.shift();
      ripples.push({
        x,
        y,
        radius: 4,
        maxRadius: isStrong ? 120 : 80,
        alpha: isLightMode ? 0.35 : 0.45,
        speed: isStrong ? 2.4 : 1.6,
        color: Math.random() > 0.5 ? mintColor : cyanColor,
      });
    };

    let lastRippleTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      const dist = Math.hypot(currentX - mouse.lastX, currentY - mouse.lastY);
      mouse.speed = dist;
      mouse.x = currentX;
      mouse.y = currentY;
      mouse.active = true;

      const now = performance.now();
      if (dist > 25 && now - lastRippleTime > 140) {
        addRipple(currentX, currentY, false);
        lastRippleTime = now;
      }

      mouse.lastX = currentX;
      mouse.lastY = currentY;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      addRipple(e.clientX - rect.left, e.clientY - rect.top, true);
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    let isTabVisible = !document.hidden;
    const handleVisibility = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Render loop
    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (!isTabVisible) return;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Haptic Touch Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.alpha *= 0.965;

        if (r.alpha <= 0.01 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        // Outer ring
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r.color}, ${r.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Inner secondary ring
        if (r.radius > 16) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius * 0.62, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${r.color}, ${r.alpha * 0.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // 2. Interconnecting Micro-Links Between Nearby Widgets (< 150px)
      for (let i = 0; i < widgets.length; i++) {
        for (let j = i + 1; j < widgets.length; j++) {
          const dx = widgets[i].x - widgets[j].x;
          const dy = widgets[i].y - widgets[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            const lineAlpha = (1 - dist / 150) * 0.15;
            ctx.beginPath();
            ctx.moveTo(widgets[i].x, widgets[i].y);
            ctx.lineTo(widgets[j].x, widgets[j].y);
            ctx.strokeStyle = `rgba(${cyanColor}, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.setLineDash([3, 4]);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }

      // 3. Draw Professional Floating Mobile Architecture Widgets
      for (let i = 0; i < widgets.length; i++) {
        const w = widgets[i];
        w.x += w.vx;
        w.y += w.vy;
        w.angle += w.vAngle;
        w.pulsePhase += 0.03;

        // Wrap around screen edges
        if (w.y < -100) {
          w.y = height + 80;
          w.x = Math.random() * width;
        }
        if (w.x < -100) w.x = width + 60;
        if (w.x > width + 100) w.x = -60;

        ctx.save();
        ctx.translate(w.x, w.y);
        ctx.rotate(w.angle);

        const currentAlpha = w.alpha * (0.85 + Math.sin(w.pulsePhase) * 0.15);

        // -------------------------------------------------------------
        // TYPE 1: Miniature Modern Smartphone Frame (Dynamic Island + UI)
        // -------------------------------------------------------------
        if (w.type === 'phone') {
          const radius = 11;
          // Outer phone chassis
          ctx.beginPath();
          ctx.roundRect(-w.w * 0.5, -w.h * 0.5, w.w, w.h, radius);
          ctx.fillStyle = `rgba(${cyanColor}, ${currentAlpha * 0.22})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(${mintColor}, ${currentAlpha * 1.5})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Screen bezel inner line
          ctx.beginPath();
          ctx.roundRect(-w.w * 0.5 + 2.5, -w.h * 0.5 + 2.5, w.w - 5, w.h - 5, radius - 2);
          ctx.strokeStyle = `rgba(${cyanColor}, ${currentAlpha * 0.5})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();

          // Top Dynamic Island sensor pill
          ctx.beginPath();
          ctx.roundRect(-7, -w.h * 0.5 + 6, 14, 3.5, 2);
          ctx.fillStyle = `rgba(${mintColor}, ${currentAlpha * 2})`;
          ctx.fill();

          // Header nav bar
          ctx.beginPath();
          ctx.moveTo(-w.w * 0.32, -w.h * 0.5 + 16);
          ctx.lineTo(w.w * 0.1, -w.h * 0.5 + 16);
          ctx.strokeStyle = `rgba(${mintColor}, ${currentAlpha * 1.2})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Mini app hero card inside screen
          ctx.beginPath();
          ctx.roundRect(-w.w * 0.35, -w.h * 0.5 + 22, w.w * 0.7, 28, 4);
          ctx.fillStyle = `rgba(${mintColor}, ${currentAlpha * 0.35})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(${mintColor}, ${currentAlpha * 0.9})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();

          // Waveform line inside app card
          ctx.beginPath();
          ctx.moveTo(-w.w * 0.28, -w.h * 0.5 + 36);
          ctx.lineTo(-w.w * 0.12, -w.h * 0.5 + 30);
          ctx.lineTo(0, -w.h * 0.5 + 38);
          ctx.lineTo(w.w * 0.15, -w.h * 0.5 + 32);
          ctx.lineTo(w.w * 0.28, -w.h * 0.5 + 34);
          ctx.strokeStyle = `rgba(${cyanColor}, ${currentAlpha * 1.8})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Secondary content lines
          ctx.beginPath();
          ctx.moveTo(-w.w * 0.35, -w.h * 0.5 + 57);
          ctx.lineTo(w.w * 0.35, -w.h * 0.5 + 57);
          ctx.moveTo(-w.w * 0.35, -w.h * 0.5 + 63);
          ctx.lineTo(w.w * 0.15, -w.h * 0.5 + 63);
          ctx.strokeStyle = `rgba(${cyanColor}, ${currentAlpha * 0.6})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Bottom Home Bar
          ctx.beginPath();
          ctx.roundRect(-10, w.h * 0.5 - 6, 20, 1.8, 1);
          ctx.fillStyle = `rgba(${mintColor}, ${currentAlpha * 1.8})`;
          ctx.fill();
        }

        // -------------------------------------------------------------
        // TYPE 2: App Analytics & Conversion Sparkline Card
        // -------------------------------------------------------------
        else if (w.type === 'analytics') {
          const radius = 10;
          ctx.beginPath();
          ctx.roundRect(-w.w * 0.5, -w.h * 0.5, w.w, w.h, radius);
          ctx.fillStyle = `rgba(${cyanColor}, ${currentAlpha * 0.2})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(${mintColor}, ${currentAlpha * 1.4})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Header title line + status dot
          ctx.beginPath();
          ctx.moveTo(-w.w * 0.36, -w.h * 0.25);
          ctx.lineTo(-w.w * 0.05, -w.h * 0.25);
          ctx.strokeStyle = `rgba(${mintColor}, ${currentAlpha * 1.4})`;
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(w.w * 0.32, -w.h * 0.25, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${mintColor}, ${currentAlpha * 2})`;
          ctx.fill();

          // Smooth Bezier Sparkline Chart
          ctx.beginPath();
          ctx.moveTo(-w.w * 0.36, w.h * 0.24);
          ctx.bezierCurveTo(-w.w * 0.18, w.h * 0.02, -w.w * 0.05, w.h * 0.28, w.w * 0.14, w.h * 0.02);
          ctx.bezierCurveTo(w.w * 0.22, -w.h * 0.08, w.w * 0.28, -w.h * 0.12, w.w * 0.36, -w.h * 0.16);
          ctx.strokeStyle = `rgba(${mintColor}, ${currentAlpha * 2.2})`;
          ctx.lineWidth = 1.6;
          ctx.stroke();

          // Sparkline glowing endpoint
          ctx.beginPath();
          ctx.arc(w.w * 0.36, -w.h * 0.16, 2.8, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = `rgba(${mintColor}, 0.8)`;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // -------------------------------------------------------------
        // TYPE 3: Modular Micro-Apps / Architecture Grid
        // -------------------------------------------------------------
        else if (w.type === 'matrix') {
          const radius = 10;
          ctx.beginPath();
          ctx.roundRect(-w.w * 0.5, -w.h * 0.5, w.w, w.h, radius);
          ctx.fillStyle = `rgba(${cyanColor}, ${currentAlpha * 0.2})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(${mintColor}, ${currentAlpha * 1.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // 4 Mini App Module Icons (2x2 grid)
          const offsets = [
            { x: -w.w * 0.24, y: -w.h * 0.2 },
            { x: w.w * 0.24, y: -w.h * 0.2 },
            { x: -w.w * 0.24, y: w.h * 0.2 },
            { x: w.w * 0.24, y: w.h * 0.2 },
          ];

          offsets.forEach((pos, idx) => {
            ctx.beginPath();
            ctx.roundRect(pos.x - 9, pos.y - 9, 18, 18, 4);
            ctx.fillStyle = idx === 0
              ? `rgba(${mintColor}, ${currentAlpha * 0.9})`
              : `rgba(${cyanColor}, ${currentAlpha * 0.45})`;
            ctx.fill();
            ctx.strokeStyle = `rgba(${mintColor}, ${currentAlpha * 1.2})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Inner icon dot
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${mintColor}, ${currentAlpha * 2})`;
            ctx.fill();
          });

          // Connecting cross bus line
          ctx.beginPath();
          ctx.moveTo(-w.w * 0.12, -w.h * 0.2);
          ctx.lineTo(w.w * 0.12, -w.h * 0.2);
          ctx.moveTo(-w.w * 0.12, w.h * 0.2);
          ctx.lineTo(w.w * 0.12, w.h * 0.2);
          ctx.moveTo(0, -w.h * 0.2);
          ctx.lineTo(0, w.h * 0.2);
          ctx.strokeStyle = `rgba(${cyanColor}, ${currentAlpha * 0.7})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // -------------------------------------------------------------
        // TYPE 4: Mobile SoC / Bionic Neural Engine Processor
        // -------------------------------------------------------------
        else if (w.type === 'chip') {
          const radius = 8;
          // Outer Package
          ctx.beginPath();
          ctx.roundRect(-w.w * 0.5, -w.h * 0.5, w.w, w.h, radius);
          ctx.fillStyle = `rgba(${cyanColor}, ${currentAlpha * 0.22})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(${mintColor}, ${currentAlpha * 1.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // 12 Micro Pin Connectors (3 on each side)
          const pinLen = 3.5;
          const pinOffsets = [-12, 0, 12];
          ctx.strokeStyle = `rgba(${mintColor}, ${currentAlpha * 1.6})`;
          ctx.lineWidth = 1;

          // Top & Bottom pins
          pinOffsets.forEach((px) => {
            ctx.beginPath();
            ctx.moveTo(px, -w.h * 0.5);
            ctx.lineTo(px, -w.h * 0.5 - pinLen);
            ctx.moveTo(px, w.h * 0.5);
            ctx.lineTo(px, w.h * 0.5 + pinLen);
            ctx.stroke();
          });

          // Left & Right pins
          pinOffsets.forEach((py) => {
            ctx.beginPath();
            ctx.moveTo(-w.w * 0.5, py);
            ctx.lineTo(-w.w * 0.5 - pinLen, py);
            ctx.moveTo(w.w * 0.5, py);
            ctx.lineTo(w.w * 0.5 + pinLen, py);
            ctx.stroke();
          });

          // Inner Silicon Core Die
          ctx.beginPath();
          ctx.roundRect(-14, -14, 28, 28, 4);
          ctx.fillStyle = `rgba(${mintColor}, ${currentAlpha * 0.4})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(${mintColor}, ${currentAlpha * 1.2})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();

          // Central Neural Core Dot
          ctx.beginPath();
          ctx.arc(0, 0, 3, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = `rgba(${mintColor}, 0.9)`;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        ctx.restore();
      }

      // 4. Draw Mobile Signal Sparks (5G/WiFi particle weave)
      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i];
        s.pulsePhase += 0.04;
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0 || s.x > width) s.vx *= -1;
        if (s.y < 0 || s.y > height) s.vy *= -1;

        const pulse = Math.sin(s.pulsePhase) * 0.4 + 0.8;
        const currentSize = s.size * pulse;

        ctx.beginPath();
        ctx.arc(s.x, s.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = isLightMode
          ? `rgba(${blueColor}, ${s.alpha * 0.7})`
          : `rgba(${mintColor}, ${s.alpha * 0.85})`;
        ctx.fill();
      }

      // 5. Cursor Touch Dot / Beacon
      if (mouse.active) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = isLightMode ? `rgba(${mintColor}, 0.85)` : '#ffffff';
        ctx.shadowColor = `rgba(${mintColor}, 0.8)`;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [isLightMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}
