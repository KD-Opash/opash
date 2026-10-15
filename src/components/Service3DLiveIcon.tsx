"use client";

import React from "react";

interface Service3DLiveIconProps {
  id: string;
  image?: string;
  title?: string;
  accent: string;
  accentRgb: string;
}

export function Service3DLiveIcon({
  id,
  title,
  accent,
  accentRgb,
}: Service3DLiveIconProps) {
  // Unique ID for SVG definitions to prevent conflicts
  const uid = id.replace(/[^a-zA-Z0-9]/g, "");

  return (
    <div
      className="relative mb-6 mx-auto flex items-center justify-center shrink-0 group/icon select-none"
      style={{ width: "150px", height: "140px" }}
      aria-label={title || id}
    >
      {/* 1. Ambient Floor Glow */}
      <div
        className="absolute -bottom-1 w-32 h-10 rounded-full blur-xl pointer-events-none transition-all duration-500 opacity-80 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse, rgba(${accentRgb}, 0.9) 0%, rgba(${accentRgb}, 0.3) 50%, transparent 75%)`,
        }}
      />

      {/* 2. Floating 3D Device / Object + 3D Pedestal Stage */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 animate-float-3d"
        style={{
          filter: `drop-shadow(0 14px 22px rgba(0, 0, 0, 0.7)) drop-shadow(0 0 14px rgba(${accentRgb}, 0.4))`,
        }}
      >
        <svg
          viewBox="0 0 160 150"
          width="150"
          height="140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          <defs>
            {/* White Porcelain Clay & Silver Metal Materials */}
            <linearGradient id={`porcelain-${uid}`} x1="0" y1="0" x2="0.3" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>

            <linearGradient id={`silver-metal-${uid}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            {/* 3D Side Depth & Shadow Extrusions */}
            <linearGradient id={`depth-${uid}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>

            <linearGradient id={`bottom-depth-${uid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>

            {/* Glossy Specular Glass Reflection */}
            <linearGradient id={`gloss-${uid}`} x1="0" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Pedestal Platform Materials */}
            <linearGradient id={`pedestal-top-${uid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2a3547" />
              <stop offset="60%" stopColor="#1a2230" />
              <stop offset="100%" stopColor="#0e131d" />
            </linearGradient>

            <linearGradient id={`pedestal-bevel-${uid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#151b26" />
              <stop offset="100%" stopColor="#080b10" />
            </linearGradient>

            {/* Neon Glow Disc */}
            <radialGradient id={`glow-${uid}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={accent} stopOpacity="1" />
              <stop offset="50%" stopColor={accent} stopOpacity="0.45" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ======================================================== */}
          {/* 1. 3D CONCENTRIC NEON PEDESTAL (Stage Base)             */}
          {/* ======================================================== */}
          <g className="pedestal-stage" transform="translate(0, 10)">
            {/* Outer Stage Drop Shadow */}
            <ellipse cx="80" cy="122" rx="64" ry="16" fill="rgba(0,0,0,0.6)" />

            {/* Base Platform Outer Rim (3D Cylinder Depth) */}
            <path
              d="M 16 116 C 16 125 45 132 80 132 C 115 132 144 125 144 116 L 144 121 C 144 130 115 137 80 137 C 45 137 16 130 16 121 Z"
              fill={`url(#pedestal-bevel-${uid})`}
            />

            {/* Base Platform Top Surface */}
            <ellipse
              cx="80"
              cy="116"
              rx="64"
              ry="15.5"
              fill={`url(#pedestal-top-${uid})`}
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1.2"
            />

            {/* Middle Segmented Neon Ring Track */}
            <ellipse
              cx="80"
              cy="114"
              rx="50"
              ry="12"
              fill="none"
              stroke={`rgba(${accentRgb}, 0.25)`}
              strokeWidth="5"
            />

            {/* Segmented Glowing Neon Arc 1 (Front Left) */}
            <path
              d="M 40 117 C 50 123 70 125 84 125"
              stroke={accent}
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <path
              d="M 40 117 C 50 123 70 125 84 125"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            {/* Segmented Glowing Neon Arc 2 (Front Right) */}
            <path
              d="M 96 125 C 112 124 124 120 128 116"
              stroke={accent}
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <path
              d="M 96 125 C 112 124 124 120 128 116"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            {/* Segmented Neon Arc 3 (Back) */}
            <path
              d="M 46 111 C 58 106 94 106 114 110"
              stroke={accent}
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeOpacity="0.75"
            />

            {/* Inner Core Disc */}
            <ellipse
              cx="80"
              cy="113.5"
              rx="38"
              ry="9"
              fill="#0f1520"
              stroke={accent}
              strokeWidth="1.5"
            />

            {/* Inner Radiant Center Light */}
            <ellipse
              cx="80"
              cy="113.5"
              rx="26"
              ry="6"
              fill={`url(#glow-${uid})`}
            />

            {/* Contact Shadow Cast by Floating Device */}
            <ellipse
              cx="80"
              cy="112.5"
              rx="22"
              ry="5"
              fill="rgba(0, 0, 0, 0.75)"
            />
          </g>

          {/* ======================================================== */}
          {/* 2. SPECIFIC 3D HARDWARE / TECH OBJECT (No Locks!)       */}
          {/* ======================================================== */}
          <g transform="translate(0, 0)">
            {renderSpecificDeviceModel(id, uid, accent, accentRgb)}
          </g>
        </svg>
      </div>
    </div>
  );
}

/**
 * Render distinct, authentic 3D devices tailored strictly to each service title
 * 1. Custom Software: 3D Glossy Desktop Workstation / Computer Monitor
 * 2. Web Development: 3D Glossy Open MacBook / Laptop
 * 3. Mobile Development: 3D Glossy Smartphone (iPhone Pro style)
 * 4. AI & ML Solutions: 3D Glossy Neural Brain & Hologram Quantum Chip
 * 5. API Integration: 3D Glossy Modular Server Tower & Data Conduits
 * 6. Hire Dedicated Developers: 3D Glossy Developer Persona & Coding Terminal
 */
function renderSpecificDeviceModel(
  id: string,
  uid: string,
  accent: string,
  accentRgb: string
) {
  switch (id) {
    case "custom-software":
      return <DesktopComputerModel uid={uid} accent={accent} accentRgb={accentRgb} />;
    case "web-development":
      return <LaptopNotebookModel uid={uid} accent={accent} accentRgb={accentRgb} />;
    case "mobile-development":
      return <SmartphoneModel uid={uid} accent={accent} accentRgb={accentRgb} />;
    case "ai-ml-solutions":
      return <AiNeuralBrainModel uid={uid} accent={accent} accentRgb={accentRgb} />;
    case "api-integration":
      return <ServerClusterModel uid={uid} accent={accent} accentRgb={accentRgb} />;
    case "hire-developers":
    default:
      return <DeveloperWorkstationModel uid={uid} accent={accent} accentRgb={accentRgb} />;
  }
}

/* ========================================================================= */
/* 1. CUSTOM SOFTWARE: 3D GLOSSY DESKTOP COMPUTER / WORKSTATION MONITOR      */
/* ========================================================================= */
function DesktopComputerModel({
  uid,
  accent,
  accentRgb,
}: {
  uid: string;
  accent: string;
  accentRgb: string;
}) {
  return (
    <g transform="translate(0, 4)">
      {/* 3D Monitor Stand Base (Resting above pedestal) */}
      <ellipse cx="80" cy="100" rx="20" ry="5" fill={`url(#silver-metal-${uid})`} stroke="#ffffff" strokeWidth="1" />
      {/* 3D Stand Neck */}
      <polygon points="76,82 84,82 83,100 77,100" fill={`url(#depth-${uid})`} />
      <line x1="80" y1="82" x2="80" y2="100" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.6" />

      {/* 3D Monitor Body Depth (Extrusion on right & bottom) */}
      <path
        d="M 122 32 L 128 36 L 128 86 L 122 82 Z"
        fill={`url(#depth-${uid})`}
      />
      <path
        d="M 38 82 L 44 86 L 128 86 L 122 82 Z"
        fill={`url(#bottom-depth-${uid})`}
      />

      {/* Front Monitor Frame (Glossy White Porcelain / Titanium) */}
      <rect
        x="38"
        y="28"
        width="84"
        height="54"
        rx="8"
        fill={`url(#porcelain-${uid})`}
        stroke="#ffffff"
        strokeWidth="1.2"
      />

      {/* Inner Screen Bezel */}
      <rect
        x="42"
        y="32"
        width="76"
        height="44"
        rx="5"
        fill="#0b1120"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
      />

      {/* Screen Code Window Header */}
      <rect x="42" y="32" width="76" height="7" rx="3" fill="#131c2e" />
      <circle cx="47" cy="35.5" r="1.5" fill="#f43f5e" />
      <circle cx="52" cy="35.5" r="1.5" fill="#eab308" />
      <circle cx="57" cy="35.5" r="1.5" fill="#10b981" />

      {/* Glossy Diagonal Reflection across Screen */}
      <path
        d="M 43 33 C 55 33 85 36 108 52 C 113 55 110 62 104 62 C 86 61 60 48 43 38 Z"
        fill={`url(#gloss-${uid})`}
      />

      {/* Glowing Central 3D Code Brackets </> on Display */}
      <g transform="translate(80, 56)">
        <circle r="13" fill={`url(#glow-${uid})`} />
        {/* Left Bracket < */}
        <path
          d="M -7 -6 L -13 0 L -7 6"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Center Slash / */}
        <path
          d="M 3 -7.5 L -3 7.5"
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Right Bracket > */}
        <path
          d="M 7 -6 L 13 0 L 7 6"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Bottom Chin Logo Glow Accent */}
      <circle cx="80" cy="79" r="1.8" fill={accent} />
    </g>
  );
}

/* ========================================================================= */
/* 2. WEB DEVELOPMENT: 3D GLOSSY OPEN MACBOOK / LAPTOP                       */
/* ========================================================================= */
function LaptopNotebookModel({
  uid,
  accent,
  accentRgb,
}: {
  uid: string;
  accent: string;
  accentRgb: string;
}) {
  return (
    <g transform="translate(0, 4)">
      {/* 1. Tilted Display Screen Lid (Glossy White / Silver Aluminum) */}
      <g>
        {/* Screen Bevel Depth */}
        <path
          d="M 120 28 L 125 32 L 125 78 L 120 74 Z"
          fill={`url(#depth-${uid})`}
        />
        {/* Screen Outer Lid */}
        <rect
          x="40"
          y="24"
          width="80"
          height="50"
          rx="6"
          fill={`url(#porcelain-${uid})`}
          stroke="#ffffff"
          strokeWidth="1.2"
        />
        {/* Inner Glass Display */}
        <rect
          x="44"
          y="28"
          width="72"
          height="42"
          rx="4"
          fill="#090e1a"
          stroke={`rgba(${accentRgb}, 0.5)`}
          strokeWidth="1"
        />
        {/* Top Browser Header Bar */}
        <rect x="44" y="28" width="72" height="7" rx="2" fill="#131d2e" />
        <circle cx="49" cy="31.5" r="1.3" fill="#f43f5e" />
        <circle cx="54" cy="31.5" r="1.3" fill="#eab308" />
        <circle cx="59" cy="31.5" r="1.3" fill="#10b981" />
        {/* Browser URL Pill */}
        <rect x="65" y="29.5" width="34" height="4" rx="2" fill="#1e293b" />
        <line x1="68" y1="31.5" x2="86" y2="31.5" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />

        {/* Diagonal Screen Gloss */}
        <path
          d="M 45 29 C 55 29 82 32 108 47 C 111 49 108 55 102 54 C 84 53 62 43 45 34 Z"
          fill={`url(#gloss-${uid})`}
        />

        {/* Glowing Web Coding Interface */}
        <g transform="translate(80, 50)">
          <circle r="12" fill={`url(#glow-${uid})`} />
          <path
            d="M -7 -5 L -12 0 L -7 5"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 2.5 -6 L -2.5 6"
            fill="none"
            stroke={accent}
            strokeWidth="2.3"
            strokeLinecap="round"
          />
          <path
            d="M 7 -5 L 12 0 L 7 5"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>

      {/* 2. Lower Keyboard Base (Perspective Wedge) */}
      <g>
        {/* Base Front Thickness Edge */}
        <polygon
          points="22,96 138,96 142,101 18,101"
          fill={`url(#bottom-depth-${uid})`}
        />
        {/* Base Top Surface (Perspective Trapezoid) */}
        <polygon
          points="36,74 124,74 138,96 22,96"
          fill={`url(#silver-metal-${uid})`}
          stroke="#ffffff"
          strokeWidth="1.2"
        />

        {/* Keyboard Recessed Tray */}
        <polygon
          points="46,76 114,76 126,88 34,88"
          fill="#0f172a"
        />
        {/* Keyboard Key Grids Glow */}
        <line x1="50" y1="80" x2="110" y2="80" stroke={`rgba(${accentRgb}, 0.7)`} strokeWidth="1.2" />
        <line x1="44" y1="84" x2="116" y2="84" stroke={`rgba(${accentRgb}, 0.7)`} strokeWidth="1.2" />

        {/* Trackpad */}
        <polygon
          points="68,90 92,90 95,95 65,95"
          fill="#e2e8f0"
          stroke="#94a3b8"
          strokeWidth="0.8"
        />
        {/* Front Opening Notch */}
        <rect x="74" y="96" width="12" height="1.8" rx="0.9" fill="#64748b" />
      </g>
    </g>
  );
}

/* ========================================================================= */
/* 3. MOBILE APP: 3D GLOSSY SMARTPHONE (iPhone Pro style)                    */
/* ========================================================================= */
function SmartphoneModel({
  uid,
  accent,
  accentRgb,
}: {
  uid: string;
  accent: string;
  accentRgb: string;
}) {
  return (
    <g transform="translate(0, 4)">
      {/* 3D Side Depth (Volume & Thickness) */}
      <path
        d="M 112 26 L 118 31 L 118 97 L 112 92 Z"
        fill={`url(#depth-${uid})`}
      />
      <path
        d="M 48 92 L 54 97 L 118 97 L 112 92 Z"
        fill={`url(#bottom-depth-${uid})`}
      />

      {/* Front Chassis (Glossy White Ceramic / Titanium) */}
      <rect
        x="48"
        y="22"
        width="64"
        height="70"
        rx="16"
        fill={`url(#porcelain-${uid})`}
        stroke="#ffffff"
        strokeWidth="1.4"
      />

      {/* Edge-to-Edge Glass Screen */}
      <rect
        x="52"
        y="26"
        width="56"
        height="62"
        rx="12"
        fill="#0b1120"
        stroke={`rgba(${accentRgb}, 0.6)`}
        strokeWidth="1.2"
      />

      {/* Top Dynamic Island Notch */}
      <rect x="69" y="29" width="22" height="4" rx="2" fill="#030712" />
      <circle cx="86" cy="31" r="1.2" fill={accent} />

      {/* Diagonal Glass Sheen Reflection */}
      <path
        d="M 53 27 C 65 27 92 31 106 48 C 108 51 105 56 100 55 C 84 54 62 43 51 33 Z"
        fill={`url(#gloss-${uid})`}
      />

      {/* Mobile App Grid & Code Node */}
      <g transform="translate(80, 56)">
        <circle r="14" fill={`url(#glow-${uid})`} />

        {/* Floating App Card */}
        <rect
          x="-17"
          y="-13"
          width="34"
          height="26"
          rx="7"
          fill="#172554"
          stroke={accent}
          strokeWidth="1.5"
        />

        {/* 3D Mobile Code Glyph </> */}
        <path
          d="M -6 -4 L -9 0 L -6 4"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 1.5 -5 L -1.5 5"
          fill="none"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 6 -4 L 9 0 L 6 4"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Home Indicator Bar */}
      <rect x="70" y="83" width="20" height="2" rx="1" fill="#ffffff" fillOpacity="0.6" />
    </g>
  );
}

/* ========================================================================= */
/* 4. AI & ML SOLUTIONS: 3D GLOSSY NEURAL BRAIN & QUANTUM AI PROCESSOR CHIP  */
/* ========================================================================= */
function AiNeuralBrainModel({
  uid,
  accent,
  accentRgb,
}: {
  uid: string;
  accent: string;
  accentRgb: string;
}) {
  return (
    <g transform="translate(0, 4)">
      {/* 3D Isometric Quantum Processor Base */}
      <polygon
        points="80,98 126,73 80,48 34,73"
        fill={`url(#depth-${uid})`}
      />
      <polygon
        points="80,104 126,79 126,73 80,98 34,73 34,79"
        fill={`url(#bottom-depth-${uid})`}
      />

      {/* Processor Die Top Surface */}
      <polygon
        points="80,94 122,71 80,48 38,71"
        fill={`url(#silver-metal-${uid})`}
        stroke="#ffffff"
        strokeWidth="1.2"
      />

      {/* Floating 3D Glossy Hologram Brain & Neural Synapse Core */}
      <g transform="translate(80, 52)">
        {/* Pulsing AI Aura */}
        <circle r="22" fill={`url(#glow-${uid})`} />

        {/* Left Brain Lobe (Glossy Porcelain & Neon) */}
        <path
          d="M -3 -16 C -12 -16 -20 -10 -20 0 C -20 7 -15 13 -7 14 C -4 14 -3 10 -3 7 Z"
          fill={`url(#porcelain-${uid})`}
          stroke={accent}
          strokeWidth="1.6"
        />
        {/* Left Brain Gyri / Synapse Curves */}
        <path d="M -15 -6 C -10 -8 -6 -3 -12 2" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M -14 6 C -9 5 -6 9 -8 11" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />

        {/* Right Brain Lobe (Glossy Porcelain & Neon) */}
        <path
          d="M 3 -16 C 12 -16 20 -10 20 0 C 20 7 15 13 7 14 C 4 14 3 10 3 7 Z"
          fill={`url(#porcelain-${uid})`}
          stroke={accent}
          strokeWidth="1.6"
        />
        {/* Right Brain Gyri */}
        <path d="M 15 -6 C 10 -8 6 -3 12 2" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 14 6 C 9 5 6 9 8 11" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />

        {/* Central Quantum Neural Core (Glowing Hexagon / Node) */}
        <circle r="7" fill="#ffffff" filter={`drop-shadow(0 0 6px ${accent})`} />
        <circle r="4" fill="#0f172a" />
        <circle r="2.2" fill={accent} />

        {/* Synaptic Light Particles */}
        <circle cx="-16" cy="-2" r="2" fill="#ffffff" />
        <circle cx="16" cy="-2" r="2" fill="#ffffff" />
        <circle cx="-8" cy="-12" r="2" fill={accent} />
        <circle cx="8" cy="-12" r="2" fill={accent} />
      </g>
    </g>
  );
}

/* ========================================================================= */
/* 5. API INTEGRATION: 3D GLOSSY SERVER RACK & MODULAR MICROSERVICES         */
/* ========================================================================= */
function ServerClusterModel({
  uid,
  accent,
  accentRgb,
}: {
  uid: string;
  accent: string;
  accentRgb: string;
}) {
  return (
    <g transform="translate(0, 4)">
      {/* 3D Server Tower Chassis Depth */}
      <path
        d="M 112 28 L 118 33 L 118 97 L 112 92 Z"
        fill={`url(#depth-${uid})`}
      />
      <path
        d="M 48 92 L 54 97 L 118 97 L 112 92 Z"
        fill={`url(#bottom-depth-${uid})`}
      />

      {/* Front Face: Glossy Porcelain Server Unit Rack */}
      <rect
        x="48"
        y="24"
        width="64"
        height="68"
        rx="10"
        fill={`url(#porcelain-${uid})`}
        stroke="#ffffff"
        strokeWidth="1.4"
      />

      {/* 3 Modular Server Blades / Microservice Units */}
      {/* Blade 1 (Top) */}
      <g transform="translate(54, 30)">
        <rect x="0" y="0" width="52" height="15" rx="4" fill="#0f172a" stroke={`rgba(${accentRgb}, 0.5)`} strokeWidth="1" />
        {/* Drive Slots */}
        <rect x="5" y="4" width="22" height="7" rx="1.5" fill="#1e293b" />
        <circle cx="34" cy="7.5" r="1.6" fill="#10b981" />
        <circle cx="40" cy="7.5" r="1.6" fill={accent} />
        <circle cx="46" cy="7.5" r="1.6" fill="#38bdf8" />
      </g>

      {/* Blade 2 (Middle - Active API Gateway with </>) */}
      <g transform="translate(54, 49)">
        <rect x="0" y="0" width="52" height="17" rx="4" fill="#064e3b" stroke={accent} strokeWidth="1.4" />
        <circle cx="26" cy="8.5" r="8" fill={`url(#glow-${uid})`} />
        {/* API Brackets */}
        <path d="M 16 6 L 13 8.5 L 16 11" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 36 6 L 39 8.5 L 36 11" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="26" cy="8.5" r="2.2" fill="#ffffff" />
      </g>

      {/* Blade 3 (Bottom) */}
      <g transform="translate(54, 70)">
        <rect x="0" y="0" width="52" height="15" rx="4" fill="#0f172a" stroke={`rgba(${accentRgb}, 0.5)`} strokeWidth="1" />
        <rect x="5" y="4" width="22" height="7" rx="1.5" fill="#1e293b" />
        <circle cx="34" cy="7.5" r="1.6" fill={accent} />
        <circle cx="40" cy="7.5" r="1.6" fill="#10b981" />
        <circle cx="46" cy="7.5" r="1.6" fill="#eab308" />
      </g>

      {/* Diagonal Glass Sheen */}
      <path
        d="M 49 26 C 60 26 94 30 109 48 C 111 51 108 56 102 55 C 84 54 60 42 49 32 Z"
        fill={`url(#gloss-${uid})`}
      />
    </g>
  );
}

/* ========================================================================= */
/* 6. HIRE DEVELOPERS: 3D GLOSSY DEVELOPER WORKSTATION & TALENT BADGE        */
/* ========================================================================= */
function DeveloperWorkstationModel({
  uid,
  accent,
  accentRgb,
}: {
  uid: string;
  accent: string;
  accentRgb: string;
}) {
  return (
    <g transform="translate(0, 4)">
      {/* 3D Shield / Talent Crest Depth */}
      <path
        d="M 116 38 L 122 43 L 122 83 C 122 102 87 114 87 114 L 80 109 C 80 109 116 97 116 78 Z"
        fill={`url(#depth-${uid})`}
      />

      {/* Front Face: Glossy Porcelain Developer Crest */}
      <path
        d="M 80 24 L 116 38 L 116 78 C 116 97 80 109 80 109 C 80 109 44 97 44 78 L 44 38 Z"
        fill={`url(#porcelain-${uid})`}
        stroke="#ffffff"
        strokeWidth="1.4"
      />

      {/* Golden Metallic Rim */}
      <path
        d="M 80 28 L 112 40 L 112 76 C 112 93 80 104 80 104 C 80 104 48 93 48 76 L 48 40 Z"
        fill="none"
        stroke={`rgba(${accentRgb}, 0.7)`}
        strokeWidth="1.5"
      />

      {/* Diagonal Glass Sheen */}
      <path
        d="M 80 26 L 110 38 C 110 56 96 70 80 74 C 64 70 54 60 50 42 L 80 26 Z"
        fill={`url(#gloss-${uid})`}
      />

      {/* 3D Developer Avatar Profile */}
      <g transform="translate(80, 58)">
        <circle r="18" fill={`url(#glow-${uid})`} />

        {/* Headset Arc */}
        <path
          d="M -11 -6 C -11 -13 11 -13 11 -6"
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Headset Mic */}
        <path d="M 10 -5 L 10 1 L 6 1" fill="none" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />

        {/* Developer Head */}
        <circle cx="0" cy="-6" r="7.5" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />

        {/* Shoulders */}
        <path
          d="M -14 12 C -14 3 14 3 14 12"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Floating Hologram Code Shield in front */}
        <g transform="translate(0, 15)">
          <rect x="-12" y="-6" width="24" height="12" rx="3" fill="#0f172a" stroke={accent} strokeWidth="1.4" />
          {/* Miniature </> */}
          <path d="M -6 -2.5 L -8.5 0 L -6 2.5" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M 6 -2.5 L 8.5 0 L 6 2.5" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="1.5" y1="-3" x2="-1.5" y2="3" stroke={accent} strokeWidth="1.4" strokeLinecap="round" />
        </g>
      </g>
    </g>
  );
}
