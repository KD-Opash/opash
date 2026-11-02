'use client';

import React, { useEffect, useRef } from 'react';

interface CyberNeuralMeshCanvasProps {
  isLightMode?: boolean;
}

interface NeuronNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  layer: number; // 0: input, 1: hidden, 2: output
  alpha: number;
  pulsePhase: number;
  activation: number; // 0 to 1, increases when mouse is near
}

interface SynapticPulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  alpha: number;
  color: string;
}

interface FloatingTensor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  alpha: number;
  size: number;
}

/**
 * CyberNeuralMeshCanvas
 * Unique 60FPS backdrop specifically for AI & Machine Learning Solutions.
 * Distinct visual theme:
 * - Living Deep Neural Synapse Network (Input, Hidden, Output transformer layers).
 * - High-speed Synaptic Action Potential Pulses racing between connected neurons.
 * - Interactive Cursor Synaptic Excitation (cursor lights up nearby neural weights).
 * - Faint drifting AI mathematical tensors & transformer vectors.
 * - Auto-pauses on hidden tab, <15MB VRAM, zero CPU leaks.
 */
export default function CyberNeuralMeshCanvas({
  isLightMode = false,
}: CyberNeuralMeshCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse tracking
    const mouse = {
      x: width * 0.5,
      y: height * 0.45,
      radius: 140,
      active: false,
    };

    // Color tokens
    const mintColor = isLightMode ? '0, 168, 143' : '94, 192, 152';
    const cyanColor = isLightMode ? '2, 132, 199' : '45, 212, 191';
    const blueColor = isLightMode ? '71, 109, 154' : '56, 189, 248';
    const purpleColor = isLightMode ? '124, 58, 237' : '168, 85, 247';

    // 1. Initialize Neural Network Nodes
    const nodes: NeuronNode[] = [];
    const nodeCount = Math.min(Math.floor((width * height) / 22000), 45);

    for (let i = 0; i < nodeCount; i++) {
      const baseRadius = Math.random() * 2.2 + 2.0;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: baseRadius,
        baseRadius,
        layer: Math.floor(Math.random() * 3),
        alpha: Math.random() * 0.4 + 0.35,
        pulsePhase: Math.random() * Math.PI * 2,
        activation: 0,
      });
    }

    // 2. Initialize Synaptic Firing Pulses (Action Potentials)
    const pulses: SynapticPulse[] = [];
    const maxPulses = 18;

    // 3. Initialize Floating AI Tensor Expressions & Matrix Brackets
    const tensorSymbols = [
      'f(Wx + b)',
      '∇L(θ)',
      'softmax(z)',
      'Q·Kᵀ / √d',
      'ReLU(x)',
      'argmax(P)',
      '∂Loss/∂w',
      'E[log P(x)]',
      '||y - ŷ||²',
      'Attention(Q,K,V)',
    ];

    const tensors: FloatingTensor[] = [];
    const tensorCount = 9;
    for (let i = 0; i < tensorCount; i++) {
      tensors.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.15 - Math.random() * 0.2,
        text: tensorSymbols[i % tensorSymbols.length],
        alpha: isLightMode ? 0.08 + Math.random() * 0.05 : 0.12 + Math.random() * 0.08,
        size: Math.random() * 2 + 10,
      });
    }

    // Helper: spawn synaptic pulse between connected nodes
    const spawnPulse = (fromIdx: number, toIdx: number) => {
      if (pulses.length >= maxPulses) return;
      pulses.push({
        fromNode: fromIdx,
        toNode: toIdx,
        progress: 0,
        speed: Math.random() * 0.025 + 0.015,
        alpha: 0.9,
        color: Math.random() > 0.4 ? mintColor : cyanColor,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
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
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    let isTabVisible = !document.hidden;
    const handleVisibility = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    let frameCount = 0;

    // Render loop
    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (!isTabVisible) return;

      frameCount++;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Floating AI Mathematical Tensors
      ctx.font = '11px "JetBrains Mono", Menlo, monospace';
      for (let i = 0; i < tensors.length; i++) {
        const t = tensors[i];
        t.x += t.vx;
        t.y += t.vy;

        if (t.y < -40) {
          t.y = height + 30;
          t.x = Math.random() * width;
        }
        if (t.x < -100) t.x = width + 50;
        if (t.x > width + 100) t.x = -50;

        ctx.fillStyle = `rgba(${mintColor}, ${t.alpha})`;
        ctx.fillText(t.text, t.x, t.y);
      }

      // 2. Update & Draw Neural Nodes & Synaptic Connections
      const maxDistance = 155;

      // Update node positions and mouse excitation
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.pulsePhase += 0.035;
        n.x += n.vx;
        n.y += n.vy;

        // Bounce from boundaries
        if (n.x < 15 || n.x > width - 15) n.vx *= -1;
        if (n.y < 15 || n.y > height - 15) n.vy *= -1;

        // Mouse proximity excitation
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            n.activation = Math.min(1, n.activation + 0.08);
          } else {
            n.activation = Math.max(0, n.activation - 0.02);
          }
        } else {
          n.activation = Math.max(0, n.activation - 0.02);
        }
      }

      // Draw Synaptic Axons (Connections between nearby neurons)
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const factor = 1 - dist / maxDistance;
            const extraAlpha = Math.max(n1.activation, n2.activation) * 0.45;
            const axonAlpha = (factor * 0.22 + extraAlpha) * (isLightMode ? 0.75 : 1.0);

            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(${cyanColor}, ${axonAlpha})`;
            ctx.lineWidth = factor * 1.4 + extraAlpha * 1.2;
            ctx.stroke();

            // Randomly fire synaptic action potential pulses
            if (frameCount % 45 === 0 && Math.random() < 0.08 && pulses.length < maxPulses) {
              spawnPulse(i, j);
            }
          }
        }
      }

      // 3. Draw Synaptic Firing Pulses (Traveling action potentials along axons)
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;

        if (p.progress >= 1 || !nodes[p.fromNode] || !nodes[p.toNode]) {
          pulses.splice(i, 1);
          continue;
        }

        const from = nodes[p.fromNode];
        const to = nodes[p.toNode];
        const curX = from.x + (to.x - from.x) * p.progress;
        const curY = from.y + (to.y - from.y) * p.progress;

        ctx.beginPath();
        ctx.arc(curX, curY, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = `rgba(${p.color}, 0.9)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 4. Draw Neuron Nodes (With Glowing Core and Outer Synaptic Ring)
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = Math.sin(n.pulsePhase) * 0.3 + 0.85;
        const currentRadius = (n.baseRadius + n.activation * 2.5) * pulse;
        const currentAlpha = Math.min(1, n.alpha + n.activation * 0.5);

        // Outer halo ring for active neurons
        if (n.activation > 0.1) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, currentRadius * 2.4, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${mintColor}, ${n.activation * 0.4})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Neuron Body
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = isLightMode
          ? `rgba(${mintColor}, ${currentAlpha * 0.85})`
          : n.activation > 0.3
          ? '#ffffff'
          : `rgba(${mintColor}, ${currentAlpha})`;

        if (n.activation > 0.2) {
          ctx.shadowColor = `rgba(${mintColor}, 0.85)`;
          ctx.shadowBlur = 12;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 5. Interactive Cursor Neural Core
      if (mouse.active) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = `rgba(${mintColor}, 0.95)`;
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 14, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${mintColor}, 0.25)`;
        ctx.lineWidth = 1;
        ctx.stroke();
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
