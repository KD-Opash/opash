"use client";

import React, { useState } from "react";

interface Service3DLiveIconProps {
  id: string;
  image?: string;
  title?: string;
  accent: string;
  accentRgb: string;
}

export function Service3DLiveIcon({
  id,
  image,
  title,
  accent,
  accentRgb,
}: Service3DLiveIconProps) {
  const [imgError, setImgError] = useState(false);
  const uid = id.replace(/[^a-zA-Z0-9]/g, "");

  return (
    <div
      className="service-icon-box"
      style={{
        position: "relative",
        width: "125px",
        height: "115px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        userSelect: "none",
        flexShrink: 0,
      }}
      aria-label={title || id}
    >
      {/* 1. Ambient Floor Glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-4px",
          width: "90px",
          height: "24px",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, rgba(${accentRgb}, 0.8) 0%, rgba(${accentRgb}, 0.25) 50%, transparent 75%)`,
          filter: "blur(12px)",
          pointerEvents: "none",
        }}
      />

      {/* 2. Floating 3D Device / Object Presentation */}
      <div
        className="animate-float-3d"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {image && !imgError ? (
          /* ========================================================================= */
          /* PHOTOREALISTIC 3D GLASS RENDER IMAGE (Strictly Constrained)               */
          /* ========================================================================= */
          <div
            style={{
              position: "relative",
              width: "105px",
              height: "105px",
              maxWidth: "105px",
              maxHeight: "105px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {/* Ambient Back Glow */}
            <div
              style={{
                position: "absolute",
                inset: "0",
                borderRadius: "16px",
                background: `radial-gradient(circle at center, rgba(${accentRgb}, 0.45) 0%, transparent 70%)`,
                filter: "blur(10px)",
                pointerEvents: "none",
              }}
            />

            {/* Strictly constrained 3D Render Image */}
            <img
              src={image}
              alt={title || id}
              onError={() => setImgError(true)}
              style={{
                width: "100px",
                height: "100px",
                maxWidth: "100px",
                maxHeight: "100px",
                objectFit: "contain",
                display: "block",
                position: "relative",
                zIndex: 2,
                filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.7))",
                maskImage:
                  "radial-gradient(circle at center, black 65%, rgba(0,0,0,0.85) 82%, transparent 98%)",
                WebkitMaskImage:
                  "radial-gradient(circle at center, black 65%, rgba(0,0,0,0.85) 82%, transparent 98%)",
              }}
            />

            {/* Luminous Floor Disc */}
            <div
              style={{
                position: "absolute",
                bottom: "2px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "70px",
                height: "8px",
                borderRadius: "50%",
                background: `radial-gradient(ellipse, rgba(${accentRgb}, 0.7) 0%, transparent 75%)`,
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
          </div>
        ) : (
          /* ========================================================================= */
          /* ULTRA-HIGH-FIDELITY 3D VECTOR STAGE & MODELS                              */
          /* ========================================================================= */
          <svg
            viewBox="0 0 160 150"
            width="120"
            height="110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: "block",
              maxWidth: "120px",
              maxHeight: "110px",
              filter: `drop-shadow(0 10px 18px rgba(0, 0, 0, 0.65)) drop-shadow(0 0 10px rgba(${accentRgb}, 0.4))`,
            }}
          >
            <defs>
              <linearGradient id={`obsidian-${uid}`} x1="0" y1="0" x2="0.3" y2="1">
                <stop offset="0%" stopColor="#243048" />
                <stop offset="50%" stopColor="#141c2d" />
                <stop offset="100%" stopColor="#0a0f1d" />
              </linearGradient>

              <linearGradient id={`porcelain-${uid}`} x1="0" y1="0" x2="0.3" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>

              <linearGradient id={`depth-${uid}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="100%" stopColor="#090d16" />
              </linearGradient>

              <radialGradient id={`glow-${uid}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={accent} stopOpacity="1" />
                <stop offset="50%" stopColor={accent} stopOpacity="0.45" />
                <stop offset="100%" stopColor={accent} stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* 1. HOLOGRAPHIC EMITTER PAD */}
            <g className="pedestal-stage" transform="translate(0, 6)">
              <ellipse cx="80" cy="118" rx="54" ry="13" fill={`url(#glow-${uid})`} opacity="0.6" />
              <ellipse
                cx="80"
                cy="116"
                rx="50"
                ry="11.5"
                fill="rgba(10, 16, 28, 0.75)"
                stroke={`rgba(${accentRgb}, 0.35)`}
                strokeWidth="1.2"
              />
              <ellipse
                cx="80"
                cy="116"
                rx="42"
                ry="9.5"
                fill="none"
                stroke={`rgba(${accentRgb}, 0.5)`}
                strokeWidth="1.4"
                strokeDasharray="6 6"
              />
              <path
                d="M 44 118 C 55 123 72 125 88 125 C 104 125 118 122 124 118"
                stroke={accent}
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />
              <ellipse
                cx="80"
                cy="115"
                rx="28"
                ry="6.5"
                fill="rgba(15, 23, 42, 0.9)"
                stroke={accent}
                strokeWidth="1.4"
              />
              <ellipse cx="80" cy="115" rx="16" ry="3.5" fill={`url(#glow-${uid})`} />
              <ellipse cx="80" cy="114.5" rx="14" ry="3" fill="rgba(0, 0, 0, 0.75)" />
            </g>

            {/* 2. SPECIFIC 3D HARDWARE / TECH OBJECT */}
            <g>{renderSpecificDeviceModel(id, uid, accent, accentRgb)}</g>
          </svg>
        )}
      </div>
    </div>
  );
}

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
      <ellipse cx="80" cy="100" rx="18" ry="4.5" fill="#1e293b" stroke={accent} strokeWidth="1" />
      <polygon points="76,82 84,82 83,100 77,100" fill={`url(#depth-${uid})`} />
      <path d="M 122 30 L 128 35 L 128 85 L 122 80 Z" fill={`url(#depth-${uid})`} />
      <path d="M 38 80 L 44 85 L 128 85 L 122 80 Z" fill="#090d16" />

      <rect
        x="38"
        y="26"
        width="84"
        height="54"
        rx="8"
        fill={`url(#obsidian-${uid})`}
        stroke={`rgba(${accentRgb}, 0.5)`}
        strokeWidth="1.4"
      />
      <rect x="42" y="30" width="76" height="44" rx="5" fill="#070b14" stroke="#1e293b" strokeWidth="1" />
      <rect x="42" y="30" width="76" height="7" rx="3" fill="#0f172a" />
      <circle cx="47" cy="33.5" r="1.5" fill="#f43f5e" />
      <circle cx="52" cy="33.5" r="1.5" fill="#eab308" />
      <circle cx="57" cy="33.5" r="1.5" fill="#10b981" />

      <g transform="translate(80, 54)">
        <circle r="13" fill={`url(#glow-${uid})`} />
        <path d="M -7 -6 L -13 0 L -7 6" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 3 -7.5 L -3 7.5" fill="none" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M 7 -6 L 13 0 L 7 6" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </g>
  );
}

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
      <path d="M 120 28 L 125 32 L 125 78 L 120 74 Z" fill={`url(#depth-${uid})`} />
      <rect
        x="40"
        y="24"
        width="80"
        height="50"
        rx="6"
        fill={`url(#obsidian-${uid})`}
        stroke={`rgba(${accentRgb}, 0.5)`}
        strokeWidth="1.4"
      />
      <rect x="44" y="28" width="72" height="42" rx="4" fill="#090e1a" stroke="#1e293b" strokeWidth="1" />
      <rect x="44" y="28" width="72" height="7" rx="2" fill="#0f172a" />
      <circle cx="49" cy="31.5" r="1.3" fill="#f43f5e" />
      <circle cx="54" cy="31.5" r="1.3" fill="#eab308" />
      <circle cx="59" cy="31.5" r="1.3" fill="#10b981" />

      <g transform="translate(80, 50)">
        <circle r="12" fill={`url(#glow-${uid})`} />
        <path d="M -7 -5 L -12 0 L -7 5" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M 2.5 -6 L -2.5 6" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" />
        <path d="M 7 -5 L 12 0 L 7 5" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
      </g>

      <polygon points="22,96 138,96 142,101 18,101" fill="#090d16" />
      <polygon points="36,74 124,74 138,96 22,96" fill="#1e293b" stroke={accent} strokeWidth="1.2" />
      <polygon points="46,76 114,76 126,88 34,88" fill="#0a0f1d" />
      <line x1="50" y1="80" x2="110" y2="80" stroke={`rgba(${accentRgb}, 0.65)`} strokeWidth="1.2" />
      <line x1="44" y1="84" x2="116" y2="84" stroke={`rgba(${accentRgb}, 0.65)`} strokeWidth="1.2" />
    </g>
  );
}

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
      <path d="M 112 24 L 118 29 L 118 97 L 112 92 Z" fill={`url(#depth-${uid})`} />
      <path d="M 48 92 L 54 97 L 118 97 L 112 92 Z" fill="#090d16" />

      <rect
        x="48"
        y="20"
        width="64"
        height="72"
        rx="16"
        fill={`url(#obsidian-${uid})`}
        stroke={`rgba(${accentRgb}, 0.6)`}
        strokeWidth="1.4"
      />
      <rect x="52" y="24" width="56" height="64" rx="12" fill="#070b14" stroke="#1e293b" strokeWidth="1" />
      <rect x="69" y="27" width="22" height="4" rx="2" fill="#030712" />
      <circle cx="86" cy="29" r="1.2" fill={accent} />

      <g transform="translate(80, 56)">
        <circle r="15" fill={`url(#glow-${uid})`} />
        <rect
          x="-18"
          y="-14"
          width="36"
          height="28"
          rx="8"
          fill="rgba(15, 23, 42, 0.9)"
          stroke={accent}
          strokeWidth="1.4"
        />
        <line x1="-12" y1="-7" x2="2" y2="-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <line x1="-12" y1="-1" x2="8" y2="-1" stroke={`rgba(${accentRgb}, 0.7)`} strokeWidth="1.8" strokeLinecap="round" />
        <line x1="-12" y1="5" x2="-2" y2="5" stroke={`rgba(${accentRgb}, 0.5)`} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="10" cy="5" r="2.5" fill={accent} />
      </g>
      <rect x="70" y="83" width="20" height="2" rx="1" fill="#ffffff" fillOpacity="0.6" />
    </g>
  );
}

function AiNeuralBrainModel({
  uid,
  accent,
}: {
  uid: string;
  accent: string;
  accentRgb: string;
}) {
  return (
    <g transform="translate(0, 4)">
      <polygon points="80,98 126,73 80,48 34,73" fill={`url(#depth-${uid})`} />
      <polygon points="80,104 126,79 126,73 80,98 34,73 34,79" fill="#090d16" />
      <polygon
        points="80,94 122,71 80,48 38,71"
        fill={`url(#obsidian-${uid})`}
        stroke={accent}
        strokeWidth="1.4"
      />

      <g transform="translate(80, 52)">
        <circle r="24" fill={`url(#glow-${uid})`} />
        
        {/* Left Brain Hemisphere */}
        <path
          d="M -3 -16 C -13 -16 -21 -10 -21 0 C -21 7 -16 13 -8 14 C -4 14 -3 10 -3 7 Z"
          fill="rgba(15, 23, 42, 0.88)"
          stroke={accent}
          strokeWidth="1.8"
        />
        <path d="M -15 -6 C -10 -8 -6 -3 -12 2" fill="none" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M -14 6 C -9 5 -6 9 -8 11" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />

        {/* Right Brain Hemisphere */}
        <path
          d="M 3 -16 C 13 -16 21 -10 21 0 C 21 7 16 13 8 14 C 4 14 3 10 3 7 Z"
          fill="rgba(15, 23, 42, 0.88)"
          stroke={accent}
          strokeWidth="1.8"
        />
        <path d="M 15 -6 C 10 -8 6 -3 12 2" fill="none" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M 14 6 C 9 5 6 9 8 11" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />

        {/* Orbiting Quantum Data Photon */}
        <circle r="3" fill="#ffffff" filter={`drop-shadow(0 0 8px ${accent})`}>
          <animateMotion
            dur="2.4s"
            repeatCount="indefinite"
            path="M -22 0 A 22 10 0 1 0 22 0 A 22 10 0 1 0 -22 0"
          />
        </circle>

        {/* Pulsing Synaptic Core */}
        <circle r="7.5" fill="#ffffff" filter={`drop-shadow(0 0 10px ${accent})`}>
          <animate attributeName="r" values="6.5;8.5;6.5" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.85;1;0.85" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#090d16" />
        <circle r="2.2" fill={accent} />

        {/* Synaptic Nodes */}
        <circle cx="-16" cy="-2" r="2" fill="#ffffff">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="16" cy="-2" r="2" fill="#ffffff">
          <animate attributeName="opacity" values="1;0.5;1" dur="1.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="-8" cy="-12" r="2.2" fill={accent}>
          <animate attributeName="r" values="1.8;2.6;1.8" dur="1.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="8" cy="-12" r="2.2" fill={accent}>
          <animate attributeName="r" values="2.6;1.8;2.6" dur="1.6s" repeatCount="indefinite" />
        </circle>
      </g>
    </g>
  );
}

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
      <path d="M 112 26 L 118 31 L 118 97 L 112 92 Z" fill={`url(#depth-${uid})`} />
      <path d="M 48 92 L 54 97 L 118 97 L 112 92 Z" fill="#090d16" />

      <rect
        x="48"
        y="22"
        width="64"
        height="70"
        rx="10"
        fill={`url(#obsidian-${uid})`}
        stroke={`rgba(${accentRgb}, 0.6)`}
        strokeWidth="1.4"
      />

      <g transform="translate(54, 28)">
        <rect x="0" y="0" width="52" height="16" rx="4" fill="#08101e" stroke="#1e293b" strokeWidth="1" />
        <rect x="5" y="4.5" width="22" height="7" rx="1.5" fill="#141f33" />
        <circle cx="34" cy="8" r="1.8" fill="#10b981" />
        <circle cx="40" cy="8" r="1.8" fill={accent} />
        <circle cx="46" cy="8" r="1.8" fill="#38bdf8" />
      </g>

      <g transform="translate(54, 48)">
        <rect x="0" y="0" width="52" height="18" rx="4" fill="#062e24" stroke={accent} strokeWidth="1.4" />
        <circle cx="26" cy="9" r="8" fill={`url(#glow-${uid})`} />
        <path d="M 16 6.5 L 13 9 L 16 11.5" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 36 6.5 L 39 9 L 36 11.5" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="26" cy="9" r="2.5" fill="#ffffff" />
      </g>

      <g transform="translate(54, 70)">
        <rect x="0" y="0" width="52" height="16" rx="4" fill="#08101e" stroke="#1e293b" strokeWidth="1" />
        <rect x="5" y="4.5" width="22" height="7" rx="1.5" fill="#141f33" />
        <circle cx="34" cy="8" r="1.8" fill={accent} />
        <circle cx="40" cy="8" r="1.8" fill="#10b981" />
        <circle cx="46" cy="8" r="1.8" fill="#eab308" />
      </g>
    </g>
  );
}

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
      <path
        d="M 116 36 L 122 41 L 122 83 C 122 102 87 114 87 114 L 80 109 C 80 109 116 97 116 78 Z"
        fill={`url(#depth-${uid})`}
      />

      <path
        d="M 80 22 L 116 36 L 116 78 C 116 97 80 109 80 109 C 80 109 44 97 44 78 L 44 36 Z"
        fill={`url(#obsidian-${uid})`}
        stroke={`rgba(${accentRgb}, 0.7)`}
        strokeWidth="1.5"
      />

      <path
        d="M 80 27 L 111 39 L 111 76 C 111 93 80 104 80 104 C 80 104 49 93 49 76 L 49 39 Z"
        fill="none"
        stroke={accent}
        strokeWidth="1.3"
      />

      <g transform="translate(80, 56)">
        <circle r="18" fill={`url(#glow-${uid})`} />
        <path d="M -11 -6 C -11 -13 11 -13 11 -6" fill="none" stroke={accent} strokeWidth="2.3" strokeLinecap="round" />
        <path d="M 10 -5 L 10 1 L 6 1" fill="none" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />

        <circle cx="0" cy="-6" r="7.5" fill="#ffffff" stroke="#0f172a" strokeWidth="1.4" />
        <path d="M -14 12 C -14 3 14 3 14 12" fill="none" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" />

        <g transform="translate(0, 15)">
          <rect x="-13" y="-6.5" width="26" height="13" rx="3.5" fill="#0f172a" stroke={accent} strokeWidth="1.4" />
          <path d="M -7 -2.5 L -9.5 0 L -7 2.5" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M 7 -2.5 L 9.5 0 L 7 2.5" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="1.8" y1="-3" x2="-1.8" y2="3" stroke={accent} strokeWidth="1.4" strokeLinecap="round" />
        </g>
      </g>
    </g>
  );
}
