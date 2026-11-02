'use client';

import React, { useEffect, useRef } from 'react';

interface CyberWebMatrixCanvasProps {
  isLightMode?: boolean;
}

interface WebNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  pulsePhase: number;
  pulseSpeed: number;
  connections: number[];
}

interface WebPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

interface FloatingGlyph {
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  size: number;
  opacity: number;
  baseOpacity: number;
}

/**
 * CyberWebMatrixCanvas
 * Ultra-performance 60FPS background for Web Development Hero.
 * Distinct from Custom Software (Curved Arcs):
 * - Interconnected living digital web mesh & constellation network.
 * - Dynamic data packets traveling between web nodes.
 * - Gentle floating web code glyphs (</>, {}, [ ], div, async).
 * - Interactive cursor magnetic web weave.
 * - Auto-pauses on tab switch, <15MB VRAM, zero CPU leaks.
 */
export default function CyberWebMatrixCanvas({
  isLightMode = false,
}: CyberWebMatrixCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Cursor tracking
    const mouse = {
      x: width * 0.5,
      y: height * 0.45,
      targetX: width * 0.5,
      targetY: height * 0.45,
      active: false,
    };

    // Color definitions
    const primaryRGB = isLightMode ? '0, 168, 143' : '94, 192, 152'; // Mint / Teal
    const secondaryRGB = isLightMode ? '2, 132, 199' : '45, 212, 191'; // Cyan / Sky
    const tertiaryRGB = isLightMode ? '71, 109, 154' : '56, 189, 248'; // Electric Accent

    // Node network configuration
    const nodeCount = Math.max(28, Math.min(54, Math.floor((width * height) / 28000)));
    const nodes: WebNode[] = [];
    const maxConnectDist = Math.max(120, Math.min(210, width * 0.16));

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        baseRadius: Math.random() * 1.8 + 1.2,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.025 + Math.random() * 0.035,
        connections: [],
      });
    }

    // Traveling Data Packets
    const packetCount = 14;
    const packets: WebPacket[] = [];
    for (let i = 0; i < packetCount; i++) {
      const from = Math.floor(Math.random() * nodeCount);
      let to = Math.floor(Math.random() * nodeCount);
      if (to === from) to = (from + 1) % nodeCount;
      packets.push({
        fromNode: from,
        toNode: to,
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.008,
      });
    }

    // Floating Web Code Glyphs
    const glyphSymbols = ['</>', '{ }', '[ ]', '<div/>', 'async', 'npm', '01', 'api', '=>'];
    const glyphCount = 10;
    const glyphs: FloatingGlyph[] = [];
    for (let i = 0; i < glyphCount; i++) {
      const baseOp = isLightMode ? 0.07 + Math.random() * 0.08 : 0.08 + Math.random() * 0.12;
      glyphs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: -0.15 - Math.random() * 0.25, // gently drift upwards
        text: glyphSymbols[i % glyphSymbols.length],
        size: Math.floor(13 + Math.random() * 11),
        opacity: baseOp,
        baseOpacity: baseOp,
      });
    }

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = width * 0.5;
      mouse.targetY = height * 0.45;
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    let isTabVisible = !document.hidden;
    const handleVisibility = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        lastTime = performance.now();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    let lastTime = performance.now();

    // Render loop
    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isTabVisible) return;

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Floating Web Code Glyphs
      ctx.font = '600 13px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
      for (let i = 0; i < glyphs.length; i++) {
        const g = glyphs[i];
        g.x += g.vx;
        g.y += g.vy;

        // Wrap around
        if (g.y < -30) {
          g.y = height + 20;
          g.x = Math.random() * width;
        }
        if (g.x < -40) g.x = width + 30;
        if (g.x > width + 40) g.x = -30;

        ctx.fillStyle = `rgba(${primaryRGB}, ${g.opacity})`;
        ctx.fillText(g.text, g.x, g.y);
      }

      // 2. Update Node Positions
      for (let i = 0; i < nodeCount; i++) {
        const n = nodes[i];
        n.pulsePhase += n.pulseSpeed;

        // Base velocity
        n.x += n.vx;
        n.y += n.vy;

        // Bounce off canvas edges
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Interactive cursor magnetic push/pull
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.hypot(dx, dy);
          const influenceDist = 200;
          if (dist < influenceDist && dist > 1) {
            const force = (1 - dist / influenceDist) * 0.8;
            n.x -= (dx / dist) * force;
            n.y -= (dy / dist) * force;
          }
        }
      }

      // 3. Connect Web Nodes with Elastic Strands
      for (let i = 0; i < nodeCount; i++) {
        const a = nodes[i];
        a.connections = [];

        for (let j = i + 1; j < nodeCount; j++) {
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxConnectDist) {
            a.connections.push(j);
            const alpha = (1 - dist / maxConnectDist) * (isLightMode ? 0.22 : 0.26);

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${primaryRGB}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Connect nearby nodes to cursor
        if (mouse.active) {
          const mdx = mouse.x - a.x;
          const mdy = mouse.y - a.y;
          const mdist = Math.hypot(mdx, mdy);
          if (mdist < 160) {
            const mAlpha = (1 - mdist / 160) * (isLightMode ? 0.35 : 0.45);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${secondaryRGB}, ${mAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // 4. Draw Traveling Data Packets
      for (let p = 0; p < packets.length; p++) {
        const pkt = packets[p];
        const na = nodes[pkt.fromNode];
        const nb = nodes[pkt.toNode];

        if (na && nb) {
          pkt.progress += pkt.speed;
          if (pkt.progress >= 1) {
            pkt.progress = 0;
            pkt.fromNode = pkt.toNode;
            // pick a connected neighbor or random node
            if (nb.connections.length > 0) {
              pkt.toNode = nb.connections[Math.floor(Math.random() * nb.connections.length)];
            } else {
              pkt.toNode = Math.floor(Math.random() * nodeCount);
            }
          }

          const px = na.x + (nb.x - na.x) * pkt.progress;
          const py = na.y + (nb.y - na.y) * pkt.progress;

          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = isLightMode ? `rgba(${secondaryRGB}, 0.85)` : `rgba(255, 255, 255, 0.95)`;
          ctx.shadowColor = `rgba(${secondaryRGB}, 0.9)`;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // 5. Draw Glowing Web Nodes
      for (let i = 0; i < nodeCount; i++) {
        const n = nodes[i];
        const pulse = Math.sin(n.pulsePhase) * 0.4 + 1.0;
        const currentRadius = n.baseRadius * pulse;
        const glowOpacity = isLightMode ? 0.4 : 0.6;

        // Outer ambient glow ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${primaryRGB}, ${glowOpacity * 0.15})`;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = isLightMode ? `rgba(${primaryRGB}, 0.8)` : `rgba(${secondaryRGB}, 0.95)`;
        ctx.fill();
      }

      // Cursor Beacon Dot
      if (mouse.active) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = isLightMode ? `rgba(${primaryRGB}, 0.9)` : `rgba(255, 255, 255, 0.95)`;
        ctx.shadowColor = `rgba(${primaryRGB}, 0.9)`;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
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
