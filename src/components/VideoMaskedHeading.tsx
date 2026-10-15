"use client";

import React, { useRef, useEffect, useState } from "react";

export default function VideoMaskedHeading() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [, setVideoLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const updateDimensions = () => {
      const parent = canvas.parentElement;
      const isMobile = window.innerWidth < 992;
      const width = parent && parent.clientWidth > 0 ? parent.clientWidth : Math.min(window.innerWidth - 48, 560);
      
      // Calculate font size dynamically based on available width
      const fontSize = isMobile 
        ? Math.min(Math.max(width * 0.088, 26), 36)
        : Math.min(Math.max(width * 0.084, 34), 48);
      
      const lineHeight = fontSize * 1.18;
      const height = Math.ceil(lineHeight * 3 + 16);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    const lines = [
      "Your Digital Pillar.",
      "Built to Scale.",
      "Engineered to Endure."
    ];

    const render = () => {
      animId = requestAnimationFrame(render);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const isMobile = window.innerWidth < 992;
      const isLight = document.documentElement.getAttribute("data-theme") === "light";

      ctx.clearRect(0, 0, w, h);

      const fontSize = isMobile 
        ? Math.min(Math.max(w * 0.088, 26), 36)
        : Math.min(Math.max(w * 0.084, 34), 48);
      const lineHeight = fontSize * 1.18;

      ctx.save();
      ctx.textAlign = isMobile ? "center" : "left";
      ctx.textBaseline = "top";

      // 1. Draw bold text as the masking shape
      ctx.font = `800 ${fontSize}px "Space Grotesk", -apple-system, BlinkMacSystemFont, sans-serif`;
      ctx.fillStyle = "#ffffff";
      lines.forEach((line, i) => {
        const x = isMobile ? w / 2 : 0;
        const y = i * lineHeight + 4;
        ctx.fillText(line, x, y);
      });

      // 2. Base Luminous Radiant Gradient inside text glyphs
      // Ensures letters are ALWAYS bright, readable, and never dark/hollow!
      ctx.globalCompositeOperation = "source-in";
      const grad = ctx.createLinearGradient(0, 0, w, h);
      if (isLight) {
        grad.addColorStop(0, "#0f172a");
        grad.addColorStop(0.48, "#1e3a8a");
        grad.addColorStop(1, "#0d9488");
      } else {
        grad.addColorStop(0, "#ffffff");
        grad.addColorStop(0.35, "#a7f3d0");
        grad.addColorStop(0.7, "#5EC098");
        grad.addColorStop(1, "#38bdf8");
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // 3. Composite Video Animation over the Radiant Letters
      // "screen" mode in dark theme guarantees moving space & atmospheric video sparkles
      // across letters WITHOUT darkening or turning them black!
      if (video.readyState >= 2 && !video.paused) {
        ctx.globalCompositeOperation = isLight ? "overlay" : "screen";
        ctx.drawImage(video, 0, 0, w, h);
      }

      // 4. Subtle luminous stroke for razor-sharp edge definition
      ctx.globalCompositeOperation = "source-over";
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = isLight 
        ? "rgba(15, 23, 42, 0.25)" 
        : "rgba(167, 243, 208, 0.45)";
      ctx.font = `800 ${fontSize}px "Space Grotesk", -apple-system, BlinkMacSystemFont, sans-serif`;
      lines.forEach((line, i) => {
        const x = isMobile ? w / 2 : 0;
        const y = i * lineHeight + 4;
        ctx.strokeText(line, x, y);
      });

      ctx.restore();
    };

    animId = requestAnimationFrame(render);

    // Ensure video starts playing immediately
    video.play().catch(() => {});

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div className="hero-video-heading-wrapper" style={{ position: "relative", width: "100%", maxWidth: "560px" }}>
      {/* Semantic Accessible H1 for SEO and Screen Readers */}
      <h1 className="sr-only">Your Digital Pillar. Built to Scale. Engineered to Endure.</h1>

      {/* Hidden Source Video from /videos/earth-banner.mp4 */}
      <video
        ref={videoRef}
        src="/videos/earth-banner.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setVideoLoaded(true)}
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          opacity: 0,
          pointerEvents: "none",
        }}
      />

      {/* Hardware-Accelerated Canvas Rendering Radiant Video Inside the Text */}
      <canvas
        ref={canvasRef}
        className="hero-video-canvas"
        style={{
          display: "block",
          userSelect: "none",
          pointerEvents: "none",
          filter: "drop-shadow(0 2px 14px rgba(0, 0, 0, 0.45))",
        }}
      />
    </div>
  );
}
