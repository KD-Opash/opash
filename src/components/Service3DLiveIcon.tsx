"use client";

import React from "react";

interface Service3DLiveIconProps {
  id: string;
  image?: string;
  title?: string;
  accent: string;
  accentRgb: string;
}

const SERVICE_IMAGES: Record<string, string> = {
  "custom-software": "/images/services/custom_software_3d.jpg",
  "web-development": "/images/services/web_dev_3d.jpg",
  "mobile-development": "/images/services/mobile_dev_3d.jpg",
  "ai-ml-solutions": "/images/services/ai_ml_3d.jpg",
  "api-integration": "/images/services/api_integ_3d.jpg",
  "hire-developers": "/images/services/hire_devs_3d.jpg",
};

export function Service3DLiveIcon({
  id,
  image,
  title,
  accent,
  accentRgb,
}: Service3DLiveIconProps) {
  const imageSrc = image || SERVICE_IMAGES[id] || "/images/services/web_dev_3d.jpg";

  return (
    <div
      className="relative mb-5 mx-auto flex items-center justify-center shrink-0 group/icon select-none"
      style={{ width: "136px", height: "136px" }}
    >
      {/* 1. Ambient Pulsing Neon Glow Beneath Pedestal Base */}
      <div
        className="absolute -bottom-1 w-28 h-8 rounded-full blur-xl pointer-events-none transition-all duration-300 opacity-80 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse, rgba(${accentRgb}, 0.8) 0%, rgba(${accentRgb}, 0.25) 50%, transparent 75%)`,
        }}
      />

      {/* 2. Floating 3D Animated Object (Blends seamlessly with no box, screen blend mode) */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-2 animate-float-3d"
        style={{
          filter: `drop-shadow(0 14px 28px rgba(0, 0, 0, 0.7)) drop-shadow(0 0 18px rgba(${accentRgb}, 0.45))`,
        }}
      >
        <img
          src={imageSrc}
          alt={title || id}
          width={136}
          height={136}
          loading="eager"
          className="w-full h-full object-contain pointer-events-none"
          style={{
            mixBlendMode: "screen",
          }}
        />
      </div>
    </div>
  );
}
