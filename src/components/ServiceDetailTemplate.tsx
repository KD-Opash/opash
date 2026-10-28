"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Code2,
  Layers,
  ShieldCheck,
  Zap,
  Cpu,
  Server,
  Database,
  Cloud,
  Terminal,
  ArrowRight,
  CheckCircle2,
  Check,
  Clock,
  Users,
  Sparkles,
  RefreshCw,
  FileCode,
  Lock,
  Network,
  Activity,
  Award,
  ChevronDown,
  Globe2,
  Radio,
  Workflow,
  Search,
  CheckSquare,
  Rocket,
  Compass,
  Smartphone,
  Bot,
  TestTube2,
  UserCheck,
  Plane,
  Factory,
  Shield,
  CreditCard,
  ShoppingBag,
  GraduationCap,
  Building2,
  HeartPulse,
  Send,
  MessageCircle,
  ExternalLink,
  Laptop,
  BrainCircuit,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { ServiceDetail } from "@/data/services";
import WhyChooseUsCards from "@/components/WhyChooseUsCards";
import RecognisedBy from "@/components/RecognisedBy";

function AiMlDeviceIllustration() {
  return (
    <svg width="64" height="64" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      {/* Gears on the Left */}
      <g opacity="0.85">
        <circle cx="20" cy="28" r="8" stroke="#94a3b8" strokeWidth="2.5" strokeDasharray="3 2" />
        <circle cx="20" cy="28" r="3.5" fill="#94a3b8" />
        <circle cx="15" cy="42" r="7" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 2" />
        <circle cx="15" cy="42" r="3" fill="#94a3b8" />
      </g>
      
      {/* Desktop Monitor Screen Behind */}
      <rect x="24" y="16" width="46" height="34" rx="4" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
      <rect x="28" y="20" width="38" height="24" rx="2" fill="#ffffff" />
      <line x1="28" y1="24" x2="66" y2="24" stroke="#e2e8f0" strokeWidth="1.5" />
      {/* Monitor Stand */}
      <path d="M42 50V56H52V50" stroke="#94a3b8" strokeWidth="2" />
      <line x1="36" y1="56" x2="58" y2="56" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />

      {/* Mobile Phone In Front */}
      <rect x="42" y="26" width="26" height="42" rx="4" fill="#ffffff" stroke="#38bdf8" strokeWidth="2.5" />
      <rect x="45" y="31" width="20" height="31" rx="2" fill="#f0f9ff" />
      <line x1="51" y1="28.5" x2="59" y2="28.5" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="52" y1="65" x2="58" y2="65" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />

      {/* Blue Circular Badge with Checkmark on Phone Screen */}
      <circle cx="55" cy="46" r="8" fill="#0284c7" />
      <path d="M51.5 46L54 48.5L58.5 43.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function getAiMlTechStack(isLight: boolean) {
  return [
    {
      name: "Python",
      logo: (
        <svg width="44" height="44" viewBox="0 0 128 128">
          <path fill="#387eb8" d="M63.5 6c-27.5 0-26 12-26 12l.1 12.3h26.4v3.7H27.5C12 34 12 49.5 12 49.5s-1.5 18 15.5 18h9.3v-13c0-6 5.5-11 11.5-11h26c5.5 0 10-4.5 10-10V18.5S85.5 6 63.5 6zm-14.7 7.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
          <path fill="#ffe052" d="M64.5 122c27.5 0 26-12 26-12l-.1-12.3H64v-3.7h36.5c15.5 0 15.5-15.5 15.5-15.5s1.5-18-15.5-18h-9.3v13c0 6-5.5 11-11.5 11h-26c-5.5 0-10 4.5-10 10v15.5s-1.2 12.5 20.8 12.5zm14.7-7.5a4 4 0 1 1 0-8 4 4 0 0 1 0-8z"/>
        </svg>
      ),
    },
    {
      name: "TensorFlow",
      logo: (
        <svg width="44" height="44" viewBox="0 0 128 128">
          <path fill="#e25325" d="M64 12L16 39.7v28.2l20-11.5v32.2l28 16.2V88.6l-12-6.9V58l28 16.2V12z"/>
          <path fill="#ff6f00" d="M64 12l48 27.7v28.2l-20-11.5v32.2l-28 16.2V88.6l12-6.9V58L64 74.2V12z"/>
        </svg>
      ),
    },
    {
      name: "Keras",
      logo: (
        <div style={{ width: 44, height: 44, borderRadius: 8, background: "#d00000", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#ffffff", fontWeight: 900, fontSize: "1.7rem", fontFamily: "sans-serif" }}>K</span>
        </div>
      ),
    },
    {
      name: "Django",
      logo: (
        <div style={{ width: 44, height: 44, borderRadius: 8, background: "#092e20", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#ffffff", fontWeight: 900, fontSize: "1.35rem", letterSpacing: "-1px" }}>dj</span>
        </div>
      ),
    },
    {
      name: "Docker",
      logo: (
        <svg width="48" height="44" viewBox="0 0 128 128">
          <path fill="#2496ed" d="M118 55c-1.5-1-6.5-1.5-10.5.5-1-6-5-10.5-10-12.5-1-.5-2.5-.5-3.5 0-5 2.5-7 7.5-7.5 12h-23V42h13V30H61v12h12v13H18c-3 0-5.5 2.5-5.5 5.5v1.5c0 14 8 28 22 34 16 7 42 7 57-3 12-8 18-20 19-32 3-.5 6-2 7.5-6z"/>
          <rect x="37" y="42" width="10" height="10" rx="1.5" fill="#2496ed"/>
          <rect x="49" y="42" width="10" height="10" rx="1.5" fill="#2496ed"/>
          <rect x="37" y="30" width="10" height="10" rx="1.5" fill="#2496ed"/>
          <rect x="49" y="30" width="10" height="10" rx="1.5" fill="#2496ed"/>
          <rect x="25" y="42" width="10" height="10" rx="1.5" fill="#2496ed"/>
        </svg>
      ),
    },
    {
      name: "Flask",
      logo: (
        <svg width="44" height="44" viewBox="0 0 128 128" fill={isLight ? "#1e293b" : "#ffffff"}>
          <path d="M72 16h-16v16h6.5l-18 48H32v16h40V80h-6.5l18-48H96V16H72zm-12 12v-4h8v4h-8zm-5.5 48l16-42.5h5L59.5 76h-5z"/>
          <path d="M52 108c-8 0-14-5-14-12h28c0 7-6 12-14 12z"/>
        </svg>
      ),
    },
    {
      name: "FastAPI",
      logo: (
        <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#059669", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Zap size={24} color="#ffffff" fill="#ffffff" />
        </div>
      ),
    },
    {
      name: "Kubernetes",
      logo: (
        <svg width="44" height="44" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="54" fill="#326ce5"/>
          <circle cx="64" cy="64" r="16" fill="none" stroke="#fff" strokeWidth="6"/>
          <path d="M64 16v16M64 96v16M16 64h16M96 64h16M30 30l12 12M86 86l12 12M30 98l12-12M86 42l12-12" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      name: "Amazon SageMaker",
      logo: (
        <div style={{ width: 44, height: 44, borderRadius: 10, background: "#8c4fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <BrainCircuit size={26} color="#ffffff" />
        </div>
      ),
    },
    {
      name: "Google Vertex AI",
      logo: (
        <svg width="44" height="44" viewBox="0 0 80 80">
          <circle cx="40" cy="20" r="3.5" fill="#4285F4" />
          <circle cx="32" cy="28" r="3.5" fill="#4285F4" />
          <circle cx="48" cy="28" r="3.5" fill="#4285F4" />
          <circle cx="26" cy="36" r="3.2" fill="#34A853" />
          <circle cx="54" cy="36" r="3.2" fill="#34A853" />
          <path d="M40 38V62M34 46L40 62M46 46L40 62" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" />
          <circle cx="40" cy="64" r="4.5" fill="#1a73e8" />
        </svg>
      ),
    },
    {
      name: "Azure ML",
      logo: (
        <svg width="44" height="44" viewBox="0 0 128 128">
          <path fill="#0078d4" d="M42 22L16 78h32L74 22H42z"/>
          <path fill="#50e6ff" d="M74 22L48 78l18 28 46-84H74z"/>
        </svg>
      ),
    },
    {
      name: "Databricks",
      logo: (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <svg width="34" height="28" viewBox="0 0 128 110">
            <path fill="#ff3621" d="M64 16L18 42l46 26 46-26L64 16zm0 30L26 42l38-22 38 22-38 24z"/>
            <path fill="#ff3621" d="M18 58l46 26 46-26-10-6-36 20-36-20-10 6zm0 28l46 26 46-26-10-6-36 20-36-20-10 6z"/>
          </svg>
          <span style={{ fontSize: "0.68rem", fontWeight: 800, color: "#ff3621", letterSpacing: "0.02em" }}>databricks</span>
        </div>
      ),
    },
    {
      name: "PostgreSQL",
      logo: (
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <svg width="30" height="30" viewBox="0 0 128 128">
            <path fill="#336791" d="M64 14c-22 0-36 16-36 38 0 14 6 25 15 32v16l14-6c2 1 4 1 7 1s5 0 7-1l14 6V84c9-7 15-18 15-32 0-22-14-38-36-38zm-14 36c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5zm28 0c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/>
          </svg>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#336791" }}>PostgreSQL</span>
        </div>
      ),
    },
    {
      name: "MongoDB",
      logo: (
        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <svg width="22" height="26" viewBox="0 0 128 128">
            <path fill="#13aa52" d="M64 8c-3 10-24 35-24 62 0 24 16 42 24 50 8-8 24-26 24-50 0-27-21-52-24-62z"/>
            <path fill="#116149" d="M64 8v112c8-8 24-26 24-50 0-27-21-52-24-62z"/>
          </svg>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: isLight ? "#116149" : "#4ade80" }}>mongoDB</span>
        </div>
      ),
    },
    {
      name: "Snowflake",
      logo: (
        <svg width="44" height="44" viewBox="0 0 128 128">
          <path d="M64 14v100M14 64h100M28 28l72 72M28 100l72-72" stroke="#29b5e8" strokeWidth="8" strokeLinecap="round"/>
          <circle cx="64" cy="64" r="8" fill="#29b5e8"/>
        </svg>
      ),
    },
    {
      name: "BigQuery",
      logo: (
        <svg width="44" height="44" viewBox="0 0 128 128">
          <circle cx="56" cy="56" r="38" fill="none" stroke="#4285f4" strokeWidth="10"/>
          <rect x="42" y="56" width="6" height="18" rx="2" fill="#4285f4"/>
          <rect x="53" y="44" width="6" height="30" rx="2" fill="#4285f4"/>
          <rect x="64" y="34" width="6" height="40" rx="2" fill="#4285f4"/>
          <line x1="84" y1="84" x2="114" y2="114" stroke="#4285f4" strokeWidth="12" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];
}

function getSaasTechStack(isLight: boolean) {
  return [
    {
      name: "React",
      logo: (
        <svg width="46" height="44" viewBox="0 0 24 24" fill="#00d8ff">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565z"/>
        </svg>
      ),
    },
    {
      name: "Next",
      logo: (
        <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
          <span style={{ fontSize: "1.9rem", fontWeight: 900, letterSpacing: "-1.5px", color: isLight ? "#0f172a" : "#ffffff", fontFamily: "system-ui, -apple-system, sans-serif" }}>
            NEXT
          </span>
          <span style={{ fontSize: "1.05rem", fontWeight: 800, color: isLight ? "#475569" : "#94a3b8" }}>
            .JS
          </span>
        </div>
      ),
    },
    {
      name: "TailwindCSS",
      logo: (
        <svg width="46" height="44" viewBox="0 0 24 24" fill="#06b6d4">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      ),
    },
    {
      name: "Redux",
      logo: (
        <svg width="44" height="44" viewBox="0 0 128 128">
          <path fill="#764abc" d="M84.4 39.4c-2.4-4.1-6.1-7.1-10.5-8.5 2.1-4.3 2.5-9.3 1.2-13.9-2.3-8.3-9.9-14-18.4-14-3 0-6 .7-8.7 2.1-7.8 4-11.9 12.8-10.1 21.4-3.8 2.2-6.8 5.6-8.5 9.7-3.8 9.3-1 20 6.9 26.2-.2 1.5-.2 3.1 0 4.6-7.8 6.2-10.7 16.9-6.9 26.2 1.7 4.1 4.7 7.5 8.5 9.7-1.8 8.6 2.3 17.4 10.1 21.4 2.7 1.4 5.7 2.1 8.7 2.1 8.5 0 16.1-5.7 18.4-14 1.3-4.6.9-9.6-1.2-13.9 4.4-1.4 8.1-4.4 10.5-8.5 5.5-9.4 4.5-21.1-2.4-29.5 6.9-8.4 7.9-20.1 2.4-29.5zm-27.7-27.2c5.3 0 10.1 3.5 11.5 8.7.9 3.3.4 6.7-1.3 9.7-4.1-.7-8.3-.5-12.3.6-2.5-5-2.8-10.9-.9-16.1 1-.9 2-1.7 3-2.9zm-16.9 29.3c-2.7-2.9-4.2-6.7-4.3-10.7 0-.3 0-.6.1-.9 5.2.2 10.3 2.1 14.5 5.4-3.7 2.2-7.3 4.2-10.3 6.2zm1.2 55.4c-2.7-6.5-.6-14 5.2-18.3 3 2.1 6.5 4.1 10.3 6.2-4.2 3.3-9.3 5.2-14.5 5.4-.1-.3-.1-.6-.1-.9 0-3.9 1.5-7.7 4.2-10.6l-5.1 18.2zm15.7 21.9c-1 1.2-2 2-3 2.9-5.1 0-9.8-3.3-11.5-8.3-1.6-4.7-1-9.9 1.6-14.2 3.8 1.1 7.8 1.3 11.7.7 1.8 3 2.2 6.5 1.2 9.8 0 3-1.6 6.3 0 9.1zm19.8-32.9c-4 6.8-11.8 10.3-19.4 8.7-2.7-.6-5.2-1.8-7.3-3.6-1.1-.9-2.1-2-2.9-3.2-3.8-5.7-3.8-13.1 0-18.8.8-1.2 1.8-2.3 2.9-3.2 2.1-1.8 4.6-3 7.3-3.6 7.6-1.6 15.4 1.9 19.4 8.7 4.1 7 4.1 15.7 0 22.7l.001.001z"/>
        </svg>
      ),
    },
    {
      name: "Material UI",
      logo: (
        <svg width="48" height="42" viewBox="0 0 36 32" fill="none">
          <path d="M18 0L9 5.2v10.4l9-5.2V0z" fill="#007FFF" />
          <path d="M18 0l9 5.2v10.4l-9-5.2V0z" fill="#0059B2" />
          <path d="M9 5.2L0 10.4v10.4l9-5.2V5.2z" fill="#007FFF" />
          <path d="M27 5.2l9 5.2v10.4l-9-5.2V5.2z" fill="#0059B2" />
          <path d="M18 10.4L9 15.6v10.4l9-5.2V10.4z" fill="#007FFF" />
          <path d="M18 10.4l9 5.2v10.4l-9-5.2V10.4z" fill="#0059B2" />
          <path d="M9 20.8l9 5.2v5.2l-9-5.2v-5.2z" fill="#007FFF" />
          <path d="M27 20.8l-9 5.2v5.2l9-5.2v-5.2z" fill="#0059B2" />
        </svg>
      ),
    },
    {
      name: "Node",
      logo: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="#339933">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z" />
        </svg>
      ),
    },
    {
      name: "Nest.js",
      logo: (
        <svg width="44" height="44" viewBox="0 0 256 256" fill="none">
          <path
            d="M217.4 69.8c-1.3-1.6-3.8-1.8-5.3-.5-4.4 3.9-9.8 6.9-15.6 8.7-2-.8-4-1.5-6.1-2.1l17.7-27.9c1.1-1.8.6-4.1-1.1-5.3-1.8-1.1-4.1-.6-5.3 1.1L182.2 74c-4.4-.8-8.9-1.2-13.5-1.2-12.7 0-24.8 3.1-35.4 8.7L148 48.7c.9-1.9.1-4.2-1.8-5.1-1.9-.9-4.2-.1-5.1 1.8l-15.5 34c-11.8 8.1-21.2 19.3-26.9 32.5l-3.3-11.8c-.5-1.9-2.5-3.1-4.4-2.6-1.9.5-3.1 2.5-2.6 4.4l3.8 13.6c-4.5 13.2-5.4 27.5-2.5 41.5-3.3-3.7-6.2-7.8-8.6-12.2-1-1.8-3.2-2.4-5-1.4-1.8 1-2.4 3.2-1.4 5 3.3 5.9 7.3 11.3 11.9 16.1-3.6 15.6-2 31.7 4.9 46.5 1 2.1 3.5 3 5.6 2 2.1-1 3-3.5 2-5.6-6-13-7.5-27.2-4.6-41 11.5 13.9 27.6 23.7 45.9 27.4 2.1.4 4.1-1 4.5-3.1.4-2.1-1-4.1-3.1-4.5-16.7-3.4-31.5-12.4-42-25.1 2.9-11.4 9-21.7 17.5-29.8l10.9 39.1c.5 1.9 2.5 3.1 4.4 2.6 1.9-.5 3.1-2.5 2.6-4.4l-9.9-35.6c8.5-6.4 18.5-10.7 29.4-12.4 2.1-.3 3.6-2.3 3.3-4.4-.3-2.1-2.3-3.6-4.4-3.3-12.2 1.9-23.4 6.8-32.9 14.1 4.7-10.7 12.3-19.8 21.8-26.4 21.6-14.9 50.4-16.6 73.6-4.3 1.9 1 4.2.3 5.2-1.6 1-1.9.3-4.2-1.6-5.2-14.8-7.9-31.5-11.1-48-9.6l10.8-23.7c9.3-4.3 19.6-6.6 30.3-6.6 4 0 7.9.3 11.8 1l-18.7 29.5c-1.1 1.8-.6 4.1 1.1 5.3 1.8 1.1 4.1.6 5.3-1.1l19.9-31.4c3.2 1 6.3 2.2 9.2 3.6-1.5 2.6-2.5 5.5-2.8 8.6-.2 2.1 1.3 4 3.4 4.2 2.1.2 4-1.3 4.2-3.4.4-4.5 2.1-8.7 4.9-12.2 1.3-1.6 1.1-4-.5-5.3z"
            fill="#E0234E"
          />
        </svg>
      ),
    },
    {
      name: "Django",
      logo: (
        <div style={{ width: 44, height: 44, borderRadius: 8, background: "#092e20", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#ffffff", fontWeight: 900, fontSize: "1.35rem", letterSpacing: "-1px" }}>dj</span>
        </div>
      ),
    },
  ];
}

function getApiIntegrationTechStack() {
  return [
    {
      name: "Postman",
      logo: (
        <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#ff6c37", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(255, 108, 55, 0.35)" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522z" />
          </svg>
        </div>
      ),
    },
    {
      name: "Swagger (OpenAPI)",
      logo: (
        <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#85ea2d", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(133, 234, 45, 0.35)" }}>
          <span style={{ color: "#173647", fontWeight: 900, fontSize: "1.25rem", letterSpacing: "0.5px", fontFamily: "monospace" }}>{`{...}`}</span>
        </div>
      ),
    },
    {
      name: "Insomnia",
      logo: (
        <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#5849be", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(88, 73, 190, 0.35)" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15.5c-3.04 0-5.5-2.46-5.5-5.5 0-.55.45-1 1-1s1 .45 1 1c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-.55.45-1 1-1s1 .45 1 1c0 3.04-2.46 5.5-5.5 5.5z" fill="#ffffff" />
            <circle cx="12" cy="12" r="3.2" fill="#ffffff" />
          </svg>
        </div>
      ),
    },
    {
      name: "RapidAPI",
      logo: (
        <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#001e3d", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0, 30, 61, 0.35)" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 3C7.5 3 5 6.5 5 11c0 2.5 1.5 4.5 3 5.5v2.8a1 1 0 001.5.86l1-.58a1 1 0 011 0l1 .58A1 1 0 0014 19.3v-2.8c1.5-1 3-3 3-5.5 0-4.5-2.5-8-7-8z" fill="#ffffff"/>
            <circle cx="9.2" cy="11" r="1.3" fill="#001e3d"/>
            <circle cx="14.8" cy="11" r="1.3" fill="#001e3d"/>
            <path d="M7 16.5c-1 1.5-1.5 3-.5 4.5M17 16.5c1 1.5 1.5 3 .5 4.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </div>
      ),
    },
  ];
}

function getQaTestingTechStack(isLight: boolean) {
  return [
    {
      name: "Selenium",
      logo: (
        <div style={{ width: 48, height: 48, borderRadius: 10, background: "#43b02a", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(67, 176, 42, 0.35)" }}>
          <span style={{ color: "#ffffff", fontWeight: 900, fontSize: "1.45rem", fontFamily: "sans-serif" }}>Se</span>
        </div>
      ),
    },
    {
      name: "Cypress",
      logo: (
        <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#17202c", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(23, 32, 44, 0.35)" }}>
          <span style={{ color: "#00bf88", fontWeight: 900, fontSize: "1.35rem", fontFamily: "sans-serif" }}>cy</span>
        </div>
      ),
    },
    {
      name: "JMeter",
      logo: (
        <div style={{ width: 48, height: 48, borderRadius: 10, background: isLight ? "#f8fafc" : "#0f172a", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(210, 33, 40, 0.15)" }}>
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#d22128">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
          </svg>
          <span style={{ fontWeight: 850, fontSize: "0.85rem", color: "#d22128", marginLeft: "1px" }}>JM</span>
        </div>
      ),
    },
    {
      name: "Postman",
      logo: (
        <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#ff6c37", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(255, 108, 55, 0.35)" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522z" />
          </svg>
        </div>
      ),
    },
    {
      name: "Playwright",
      logo: (
        <svg viewBox="0 0 24 24" width="44" height="44" fill="#2ead33">
          <path d="M23.996 7.462c-.056.837-.257 2.135-.716 3.85-.995 3.715-4.27 10.874-10.42 9.227-6.15-1.65-5.407-9.487-4.412-13.201.46-1.716.934-2.94 1.305-3.694.42-.853.846-.289 1.815.523.684.573 2.41 1.791 5.011 2.488 2.601.697 4.706.506 5.583.352 1.245-.219 1.897-.494 1.834.455Zm-9.807 3.863s-.127-1.819-1.773-2.286c-1.644-.467-2.613 1.04-2.613 1.04Zm4.058 4.539-7.769-2.172s.446 2.306 3.338 3.153c2.862.836 4.43-.98 4.43-.981Zm2.701-2.51s-.13-1.818-1.773-2.286c-1.644-.469-2.612 1.038-2.612 1.038ZM8.57 18.23c-4.749 1.279-7.261-4.224-8.021-7.08C.197 9.831.044 8.832.003 8.188c-.047-.73.455-.52 1.415-.354.677.118 2.3.261 4.308-.28a11.28 11.28 0 0 0 2.41-.956c-.058.197-.114.4-.17.61-.433 1.618-.827 4.055-.632 6.426-1.976.732-2.267 2.423-2.267 2.423l2.524-.715c.227 1.002.6 1.987 1.15 2.838a5.914 5.914 0 0 1-.171.049Zm-4.188-6.298c1.265-.333 1.363-1.631 1.363-1.631l-3.374.888s.745 1.076 2.01.743Z" />
        </svg>
      ),
    },
    {
      name: "Jest",
      logo: (
        <svg viewBox="0 0 24 24" width="44" height="44" fill="#c21325">
          <path d="M22.251 11.82a3.117 3.117 0 0 0-2.328-3.01L22.911 0H8.104L11.1 8.838a3.116 3.116 0 0 0-2.244 2.988c0 1.043.52 1.967 1.313 2.536a8.279 8.279 0 0 1-1.084 1.244 8.14 8.14 0 0 1-2.55 1.647c-.834-.563-1.195-1.556-.869-2.446a3.11 3.11 0 0 0-.91-6.08 3.117 3.117 0 0 0-3.113 3.113c0 .848.347 1.626.903 2.182-.048.097-.097.195-.146.299-.465.959-.993 2.043-1.195 3.259-.403 2.432.257 4.384 1.849 5.489A5.093 5.093 0 0 0 5.999 24c1.827 0 3.682-.917 5.475-1.807 1.279-.632 2.599-1.292 3.898-1.612.48-.118.98-.187 1.508-.264 1.07-.153 2.175-.312 3.168-.89a4.482 4.482 0 0 0 2.182-3.091c.174-.994 0-1.994-.444-2.87.298-.48.465-1.042.465-1.647z" />
        </svg>
      ),
    },
    {
      name: "PyTest",
      logo: (
        <svg viewBox="0 0 24 24" width="44" height="44" fill="#0a9edc">
          <path d="M2.6152 0v.8867h3.8399V0zm5.0215 0v.8867h3.8418V0zm4.957 0v.8867h3.8418V0zm4.9356 0v.8867h3.8418V0zM2.4473 1.8945a.935.935 0 0 0-.9356.9356c0 .517.4185.9375.9356.9375h19.1054c.5171 0 .9356-.4204.9356-.9375a.935.935 0 0 0-.9356-.9356zm.168 2.8477V24H6.455V4.7422zm5.0214 0V20.543h3.8418V4.7422zm4.957 0V15.291h3.8497V4.7422zm4.9356 0v6.4941h3.8418V4.7422z" />
        </svg>
      ),
    },
    {
      name: "JUnit",
      logo: (
        <div style={{ width: 48, height: 48, borderRadius: 10, background: "#25a162", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(37, 161, 98, 0.35)" }}>
          <span style={{ color: "#ffffff", fontWeight: 900, fontSize: "1.25rem", fontFamily: "sans-serif" }}>JUnit</span>
        </div>
      ),
    },
  ];
}

function getHireDevTechStack(isLight: boolean) {
  return [
    {
      name: "React",
      logo: (
        <svg width="46" height="44" viewBox="0 0 24 24" fill="#00d8ff">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565z"/>
        </svg>
      ),
    },
    {
      name: "Next",
      logo: (
        <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
          <span style={{ fontSize: "1.9rem", fontWeight: 900, letterSpacing: "-1.5px", color: isLight ? "#0f172a" : "#ffffff", fontFamily: "system-ui, -apple-system, sans-serif" }}>
            NEXT
          </span>
          <span style={{ fontSize: "1.05rem", fontWeight: 800, color: isLight ? "#475569" : "#94a3b8" }}>
            .JS
          </span>
        </div>
      ),
    },
    {
      name: "Node",
      logo: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="#339933">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z" />
        </svg>
      ),
    },
    {
      name: "Python",
      logo: (
        <svg width="44" height="44" viewBox="0 0 128 128">
          <path fill="#387eb8" d="M63.5 6c-27.5 0-26 12-26 12l.1 12.3h26.4v3.7H27.5C12 34 12 49.5 12 49.5s-1.5 18 15.5 18h9.3v-13c0-6 5.5-11 11.5-11h26c5.5 0 10-4.5 10-10V18.5S85.5 6 63.5 6zm-14.7 7.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
          <path fill="#ffe052" d="M64.5 122c27.5 0 26-12 26-12l-.1-12.3H64v-3.7h36.5c15.5 0 15.5-15.5 15.5-15.5s1.5-18-15.5-18h-9.3v13c0 6-5.5 11-11.5 11h-26c-5.5 0-10 4.5-10 10v15.5s-1.2 12.5 20.8 12.5zm14.7-7.5a4 4 0 1 1 0-8 4 4 0 0 1 0-8z"/>
        </svg>
      ),
    },
    {
      name: "Django",
      logo: (
        <div style={{ width: 44, height: 44, borderRadius: 8, background: "#092e20", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#ffffff", fontWeight: 900, fontSize: "1.35rem", letterSpacing: "-1px" }}>dj</span>
        </div>
      ),
    },
    {
      name: "Flutter",
      logo: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="#02569b">
          <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
        </svg>
      ),
    },
    {
      name: "React Native",
      logo: (
        <svg width="46" height="44" viewBox="0 0 24 24" fill="#61dafb">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565z"/>
        </svg>
      ),
    },
    {
      name: "Docker",
      logo: (
        <svg width="48" height="44" viewBox="0 0 128 128">
          <path fill="#2496ed" d="M118 55c-1.5-1-6.5-1.5-10.5.5-1-6-5-10.5-10-12.5-1-.5-2.5-.5-3.5 0-5 2.5-7 7.5-7.5 12h-23V42h13V30H61v12h12v13H18c-3 0-5.5 2.5-5.5 5.5v1.5c0 14 8 28 22 34 16 7 42 7 57-3 12-8 18-20 19-32 3-.5 6-2 7.5-6z"/>
          <rect x="37" y="42" width="10" height="10" rx="1.5" fill="#2496ed"/>
          <rect x="49" y="42" width="10" height="10" rx="1.5" fill="#2496ed"/>
          <rect x="37" y="30" width="10" height="10" rx="1.5" fill="#2496ed"/>
          <rect x="49" y="30" width="10" height="10" rx="1.5" fill="#2496ed"/>
          <rect x="25" y="42" width="10" height="10" rx="1.5" fill="#2496ed"/>
        </svg>
      ),
    },
  ];
}

interface ServiceDetailTemplateProps {
  service: ServiceDetail;
}

// -----------------------------------------------------------------------------
// Service Hero Background Images Map
// -----------------------------------------------------------------------------
const SERVICE_HERO_IMAGES: Record<string, string> = {
  "custom-software-development": "/images/services/custom_software_3d.jpg",
  "web-development": "/images/services/web_dev_3d.jpg",
  "mobile-development": "/images/services/mobile_dev_3d.jpg",
  "ai-ml-solutions": "/images/services/ai_ml_3d.jpg",
  "saas-development": "/images/services/saas_dev_3d.jpg",
  "api-integration": "/images/services/api_integration_3d.jpg",
  "qa-testing": "/images/services/qa_testing_3d.jpg",
  "hire-developers": "/images/services/hire_dev_3d.jpg",
};

// -----------------------------------------------------------------------------
// Service Accent Configurations
// -----------------------------------------------------------------------------
interface ServiceThemeConfig {
  accent: string;
  accentSecondary: string;
  badgeText: string;
  primaryIcon: React.ElementType;
  whyPillars: {
    title: string;
    desc: string;
    metric: string;
    icon: React.ElementType;
  }[];
}

const SERVICE_THEMES: Record<string, ServiceThemeConfig> = {
  "mobile-development": {
    accent: "#00A88F",
    accentSecondary: "#38bdf8",
    badgeText: "iOS & Android Engineering",
    primaryIcon: Smartphone,
    whyPillars: [
      {
        title: "60 FPS Native Performance",
        desc: "Silky smooth user experiences across iOS and Android with optimized native rendering threads.",
        metric: "120Hz V-Sync",
        icon: Zap,
      },
      {
        title: "Offline-First Sync",
        desc: "Local database caching with background sync so users never face downtime or lost input.",
        metric: "Zero Latency",
        icon: Database,
      },
      {
        title: "App Store Approval SLA",
        desc: "Full guidance across Apple Human Interface and Google Play Developer policies with 100% approval rate.",
        metric: "100% Approved",
        icon: ShieldCheck,
      },
      {
        title: "Hardware Integration",
        desc: "Deep integration with cameras, biometric FaceID/TouchID, GPS sensors, Bluetooth, and push channels.",
        metric: "Deep Native",
        icon: Cpu,
      },
    ],
  },
  "ai-ml-solutions": {
    accent: "#6366f1",
    accentSecondary: "#00A88F",
    badgeText: "Intelligent AI Architectures",
    primaryIcon: Bot,
    whyPillars: [
      {
        title: "Predictive Precision",
        desc: "Custom trained ML models delivering verified accuracy in classification, demand forecasting, and churn detection.",
        metric: "94%+ Accuracy",
        icon: Activity,
      },
      {
        title: "100% Data Confidentiality",
        desc: "Private VPC model deployments ensuring your proprietary business data never leaks into public models.",
        metric: "Private VPC",
        icon: Lock,
      },
      {
        title: "Sub-150ms Inference",
        desc: "Optimized model quantization and GPU inference pipelines for instantaneous real-time query responses.",
        metric: "<150ms Latency",
        icon: Zap,
      },
      {
        title: "Autonomous Agentic Pipelines",
        desc: "Intelligent RPA and autonomous agents that orchestrate complex multi-step workflows without human intervention.",
        metric: "10x Automation",
        icon: Workflow,
      },
    ],
  },
  "saas-development": {
    accent: "#0284c7",
    accentSecondary: "#00A88F",
    badgeText: "Multi-Tenant Cloud SaaS",
    primaryIcon: Cloud,
    whyPillars: [
      {
        title: "Tenant Isolation Security",
        desc: "Row-Level Security (RLS) and schema-per-tenant architectures guaranteeing zero cross-tenant leakage.",
        metric: "100% Segregated",
        icon: Shield,
      },
      {
        title: "Automated Recurring Billing",
        desc: "Integrated Stripe & Lemon Squeezy subscription engines with tiered pricing, coupons, and automatic invoicing.",
        metric: "PCI-DSS Level 1",
        icon: CreditCard,
      },
      {
        title: "Elastic Auto-Scaling",
        desc: "Kubernetes & containerized workloads dynamically scaling from 10 to 1,000,000+ concurrent active users.",
        metric: "99.99% Uptime",
        icon: Rocket,
      },
      {
        title: "Real-Time Telemetry & RBAC",
        desc: "Super-admin portals with MRR cohort tracking, feature flag management, and enterprise SSO integration.",
        metric: "Role-Based ACL",
        icon: Users,
      },
    ],
  },
  "api-integration": {
    accent: "#8b5cf6",
    accentSecondary: "#00A88F",
    badgeText: "High-Throughput Gateway",
    primaryIcon: Cpu,
    whyPillars: [
      {
        title: "Sub-45ms API Latency",
        desc: "High-throughput API gateway routing with caching layers and connection pooling for instant responsiveness.",
        metric: "<45ms Median",
        icon: Zap,
      },
      {
        title: "Idempotent Webhooks",
        desc: "Dead-letter queues and exponential backoff retries guaranteeing zero lost transactions during partner outages.",
        metric: "Zero Data Loss",
        icon: RefreshCw,
      },
      {
        title: "OpenAPI & Swagger Specs",
        desc: "Interactive documentation, Postman collections, and automated SDK generators for seamless developer onboarding.",
        metric: "100% Documented",
        icon: FileCode,
      },
      {
        title: "Enterprise ERP/CRM Bridges",
        desc: "Bi-directional data synchronization with Salesforce, HubSpot, SAP, NetSuite, and custom internal systems.",
        metric: "Bi-Directional",
        icon: Network,
      },
    ],
  },
  "qa-testing": {
    accent: "#10b981",
    accentSecondary: "#00A88F",
    badgeText: "Zero-Defect Quality Engineering",
    primaryIcon: TestTube2,
    whyPillars: [
      {
        title: "99.4% Pre-Release Defect Capture",
        desc: "Multi-layered test coverage catching critical defects and regressions long before reaching production.",
        metric: "99.4% Catch Rate",
        icon: ShieldCheck,
      },
      {
        title: "85%+ Automated Coverage",
        desc: "Maintainable Cypress and Playwright test suites integrated into CI/CD for continuous quality gates on every PR.",
        metric: "85%+ Automated",
        icon: Workflow,
      },
      {
        title: "10,000+ Concurrent User Load",
        desc: "High-stress load benchmarking with JMeter and Gatling identifying database bottlenecks and memory leaks.",
        metric: "Stress Benchmarked",
        icon: Activity,
      },
      {
        title: "Cross-Device Real-Hardware Matrix",
        desc: "Testing across physical iOS, Android, macOS, and Windows configurations to ensure pixel-perfect fidelity.",
        metric: "Zero Visual Flaws",
        icon: Laptop,
      },
    ],
  },
  "hire-developers": {
    accent: "#00A88F",
    accentSecondary: "#476D9A",
    badgeText: "Vetted Senior Tech Squads",
    primaryIcon: UserCheck,
    whyPillars: [
      {
        title: "48-Hour Talent Matching",
        desc: "Immediate access to pre-vetted senior software engineers ready to onboard into your repositories in 48 hours.",
        metric: "48h Onboarding",
        icon: Clock,
      },
      {
        title: "Strict Top 3% Vetting",
        desc: "Multi-stage technical code assessments, architectural walkthroughs, and English communication screening.",
        metric: "Top 3% Vetted",
        icon: Award,
      },
      {
        title: "100% Timezone Overlap",
        desc: "Seamless synchronization with US, EU, and APAC business hours for daily standups, live pairing, and reviews.",
        metric: "Full Overlap",
        icon: Globe2,
      },
      {
        title: "2-Week Risk-Free Trial",
        desc: "Evaluate your dedicated engineer for two full weeks. If you are not completely satisfied, pay nothing.",
        metric: "100% Risk Free",
        icon: ShieldCheck,
      },
    ],
  },
};

// -----------------------------------------------------------------------------
// 10 Specialized Industries (Live Opash Standard)
// -----------------------------------------------------------------------------
const INDUSTRIES_LIVE = [
  { id: "travel", name: "Travel & Hospitality", icon: Plane },
  { id: "telecom", name: "Telecommunication", icon: Radio },
  { id: "industrial", name: "Industrial Tech", icon: Factory },
  { id: "ngo", name: "NGOs", icon: Globe2 },
  { id: "insuretech", name: "InsureTech", icon: Shield },
  { id: "healthcare", name: "Health Care", icon: HeartPulse },
  { id: "fintech", name: "Fintech", icon: CreditCard },
  { id: "ecommerce", name: "Ecommerce", icon: ShoppingBag },
  { id: "education", name: "Education", icon: GraduationCap },
  { id: "realestate", name: "Real Estate", icon: Building2 },
];

const COUNTRIES_LIST = [
  "United States",
  "India",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "United Arab Emirates",
  "Singapore",
  "Netherlands",
  "Switzerland",
  "France",
  "New Zealand",
  "Saudi Arabia",
  "South Africa",
  "Ireland",
  "Other",
];

// Helper to categorize technologies dynamically
function categorizeTech(name: string): string {
  const lower = name.toLowerCase();
  if (lower.includes("react native") || lower.includes("flutter") || lower.includes("ios") || lower.includes("android") || lower.includes("swift") || lower.includes("kotlin")) {
    return "Mobile";
  }
  if (lower.includes("react") || lower.includes("next") || lower.includes("angular") || lower.includes("html") || lower.includes("css") || lower.includes("tailwind") || lower.includes("bootstrap") || lower.includes("redux") || lower.includes("material") || lower.includes("svelte")) {
    return "Frontend";
  }
  if (lower.includes("node") || lower.includes("express") || lower.includes("django") || lower.includes("python") || lower.includes("fastapi") || lower.includes("flask") || lower.includes("nest") || lower.includes("rest") || lower.includes("graphql") || lower.includes("api") || lower.includes("swagger") || lower.includes("postman") || lower.includes("insomnia") || lower.includes("rapidapi")) {
    return "Backend & APIs";
  }
  if (lower.includes("sql") || lower.includes("postgres") || lower.includes("mongo") || lower.includes("firebase") || lower.includes("supabase") || lower.includes("snowflake") || lower.includes("bigquery") || lower.includes("redis") || lower.includes("database") || lower.includes("s3")) {
    return "Databases & Storage";
  }
  if (lower.includes("aws") || lower.includes("cloud") || lower.includes("azure") || lower.includes("docker") || lower.includes("kubernetes") || lower.includes("git") || lower.includes("terraform") || lower.includes("jenkins") || lower.includes("vercel") || lower.includes("netlify") || lower.includes("heroku") || lower.includes("actions")) {
    return "Cloud & DevOps";
  }
  if (lower.includes("jest") || lower.includes("cypress") || lower.includes("selenium") || lower.includes("playwright") || lower.includes("jmeter") || lower.includes("mocha") || lower.includes("junit") || lower.includes("pytest") || lower.includes("gatling")) {
    return "QA & Testing";
  }
  if (lower.includes("tensor") || lower.includes("keras") || lower.includes("sagemaker") || lower.includes("vertex") || lower.includes("databricks") || lower.includes("ai") || lower.includes("ml")) {
    return "AI & Machine Learning";
  }
  if (lower.includes("strapi") || lower.includes("sanity") || lower.includes("contentful")) {
    return "Headless CMS";
  }
  return "Engineering Tools";
}

export default function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Brand Color Tokens
  const mintColor = isLight ? "#00A88F" : "#5EC098";
  const slateColor = isLight ? "#102033" : "#476D9A";

  // Theme Config
  const themeConfig = SERVICE_THEMES[service.slug] || {
    accent: mintColor,
    accentSecondary: slateColor,
    badgeText: "Enterprise Technology",
    primaryIcon: Code2,
    whyPillars: [
      {
        title: "Tailored Architecture",
        desc: "Every line of code is engineered specifically to align with your business domain and workflows.",
        metric: "100% Bespoke",
        icon: Code2,
      },
      {
        title: "Enterprise Grade SLA",
        desc: "Rock-solid uptime, strict adherence to security compliance, and comprehensive code review gates.",
        metric: "99.98% Uptime",
        icon: ShieldCheck,
      },
      {
        title: "Sub-Second Velocity",
        desc: "Optimized pipelines, modern reactive state machines, and microsecond response latency.",
        metric: "<100ms Response",
        icon: Zap,
      },
      {
        title: "100% IP Ownership",
        desc: "You retain exclusive rights to source code, databases, design assets, and architectural blueprints.",
        metric: "Zero Lock-In",
        icon: Lock,
      },
    ],
  };

  const heroBgImage = SERVICE_HERO_IMAGES[service.slug] || "/images/services/custom_software_3d.jpg";

  // Categorize technologies
  const techCategories = useMemo(() => {
    const cats = new Set<string>();
    service.technologies.forEach((t) => cats.add(categorizeTech(t)));
    return ["All", ...Array.from(cats)];
  }, [service.technologies]);

  const [selectedTechCat, setSelectedTechCat] = useState<string>("All");
  const [activeIndustryIdx, setActiveIndustryIdx] = useState<number>(6); // Default Fintech

  // Filtered Techs
  const displayedTechs = useMemo(() => {
    if (selectedTechCat === "All") return service.technologies;
    return service.technologies.filter((t) => categorizeTech(t) === selectedTechCat);
  }, [selectedTechCat, service.technologies]);

  // Quote Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Full Time",
    country: "United States",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formLoading, setFormLoading] = useState<boolean>(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 700);
  };

  return (
    <div
      className="service-detail-wrapper"
      style={{
        position: "relative",
        overflowX: "clip",
        backgroundColor: isLight ? "#f8fafc" : "#020712",
        color: isLight ? "#0f172a" : "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* ===================================================================== */}
      {/* 1. HERO SECTION WITH CINEMATIC BACKGROUND IMAGE & TELEMETRY STRIP    */}
      {/* ===================================================================== */}
      <section
        className="service-hero"
        style={{
          position: "relative",
          padding: "7.5rem 1.5rem 5rem 1.5rem",
          overflow: "hidden",
        }}
      >
        {/* Background Image Layer with Adaptive Gradient Masks */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <img
            src={heroBgImage}
            alt=""
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 25%",
              opacity: isLight ? 0.12 : 0.28,
              filter: isLight ? "saturate(1.15) contrast(1.05)" : "saturate(1.3) brightness(0.9)",
              transform: "scale(1.04)",
              maskImage: "linear-gradient(to bottom, black 0%, black 55%, rgba(0, 0, 0, 0.3) 85%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 55%, rgba(0, 0, 0, 0.3) 85%, transparent 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background: isLight
                ? `
                  radial-gradient(ellipse 80% 65% at 50% 30%, rgba(248, 250, 252, 0.45) 0%, rgba(248, 250, 252, 0.88) 60%, #f8fafc 100%),
                  linear-gradient(to bottom, rgba(248, 250, 252, 0.15) 0%, rgba(248, 250, 252, 0.95) 85%, #f8fafc 100%)
                `
                : `
                  radial-gradient(ellipse 80% 65% at 50% 30%, rgba(4, 10, 23, 0.35) 0%, rgba(4, 10, 23, 0.88) 60%, #020712 100%),
                  linear-gradient(to bottom, rgba(2, 7, 18, 0.15) 0%, rgba(2, 7, 18, 0.95) 85%, #020712 100%)
                `,
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background: isLight
                ? `
                  radial-gradient(ellipse 70% 50% at 50% 15%, rgba(0, 168, 143, 0.14) 0%, transparent 65%),
                  radial-gradient(circle 450px at 85% 30%, rgba(71, 109, 154, 0.10) 0%, transparent 70%)
                `
                : `
                  radial-gradient(ellipse 70% 50% at 50% 15%, rgba(94, 192, 152, 0.20) 0%, transparent 65%),
                  radial-gradient(circle 450px at 85% 30%, rgba(71, 109, 154, 0.15) 0%, transparent 70%)
                `,
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Seamless Hero Bottom Feather Blender */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "180px",
            background: isLight
              ? "linear-gradient(to bottom, transparent 0%, rgba(248, 250, 252, 0.85) 60%, #f8fafc 100%)"
              : "linear-gradient(to bottom, transparent 0%, rgba(2, 7, 18, 0.85) 60%, #020712 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        <div className="container-custom" style={{ position: "relative", zIndex: 1, maxWidth: "1240px", margin: "0 auto" }}>
          {/* Eyebrow Label */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: mintColor,
              }}
            >
              <Sparkles size={16} />
              <span>{service.badge} &bull; 8+ Years Expertise &bull; 100% IP Ownership</span>
            </div>
          </div>

          {/* Main Headline */}
          <div style={{ textAlign: "center", maxWidth: "980px", margin: "0 auto" }}>
            <h1
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
              }}
            >
              {service.heroHeadline || service.title}
            </h1>

            {/* Verbatim Lead Paragraph 1 */}
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                lineHeight: 1.65,
                color: isLight ? "#334155" : "#cbd5e1",
                maxWidth: "860px",
                margin: "0 auto 1.25rem auto",
                fontWeight: 450,
              }}
            >
              {service.heroSubheadline || service.shortDesc}
            </p>

            {/* Verbatim Lead Paragraph 2 */}
            {service.heroParagraph2 && (
              <p
                style={{
                  fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                  lineHeight: 1.65,
                  color: isLight ? "#64748b" : "#94a3b8",
                  maxWidth: "840px",
                  margin: "0 auto 2.5rem auto",
                }}
              >
                {service.heroParagraph2}
              </p>
            )}

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "3.5rem",
              }}
            >
              <Link
                href="#quote-section"
                className="btn-shimmer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.95rem 2rem",
                  borderRadius: "12px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#ffffff",
                  background: `linear-gradient(135deg, ${mintColor} 0%, #0284c7 100%)`,
                  boxShadow: isLight
                    ? "0 10px 25px -5px rgba(0, 168, 143, 0.4)"
                    : "0 10px 25px -5px rgba(94, 192, 152, 0.3)",
                  textDecoration: "none",
                }}
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#tech-stack"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.95rem 1.8rem",
                  borderRadius: "12px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: isLight ? "#0f172a" : "#ffffff",
                  background: isLight ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.05)",
                  border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(10px)",
                  textDecoration: "none",
                }}
              >
                <span>Explore Technologies</span>
                <Terminal size={17} />
              </Link>
            </div>

            {/* 4 Telemetry Metrics Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
                maxWidth: "960px",
                margin: "0 auto",
              }}
            >
              {service.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "1.25rem 1rem",
                    borderRadius: "14px",
                    background: isLight ? "rgba(255, 255, 255, 0.85)" : "rgba(16, 32, 51, 0.45)",
                    border: isLight ? "1px solid rgba(226, 232, 240, 0.8)" : "1px solid rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(8px)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)",
                      fontWeight: 800,
                      color: mintColor,
                      lineHeight: 1.1,
                      marginBottom: "0.35rem",
                    }}
                  >
                    {metric.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: isLight ? "#64748b" : "#94a3b8",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. WHY [SERVICE]? (Exact Live Headline & 2 Exact Live Paragraphs)     */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "5.5rem 1.5rem",
          background: isLight ? "#ffffff" : "#040b17",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
          borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "880px", margin: "0 auto 3.5rem auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: mintColor,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "0.85rem",
              }}
            >
              <Award size={16} />
              <span>Strategic Advantage</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.6vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              {service.whyTitle || `Why Choose ${service.title}?`}
            </h2>

            {/* Verbatim Why Paragraphs from Live Site */}
            {service.whyParagraphs && service.whyParagraphs.length > 0 ? (
              service.whyParagraphs.map((para, pIdx) => (
                <p
                  key={pIdx}
                  style={{
                    fontSize: "clamp(1.02rem, 1.6vw, 1.15rem)",
                    lineHeight: 1.7,
                    color: isLight ? "#475569" : "#94a3b8",
                    marginBottom: pIdx === 0 ? "1rem" : "0",
                  }}
                >
                  {para}
                </p>
              ))
            ) : (
              <p
                style={{
                  fontSize: "clamp(1.02rem, 1.6vw, 1.15rem)",
                  lineHeight: 1.7,
                  color: isLight ? "#475569" : "#94a3b8",
                }}
              >
                {service.shortDesc}
              </p>
            )}
          </div>

          {/* 4 Bento Architecture Highlights */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {themeConfig.whyPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  style={{
                    padding: "2rem 1.75rem",
                    borderRadius: "18px",
                    background: isLight ? "rgba(248, 250, 252, 0.85)" : "rgba(16, 32, 51, 0.35)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isLight ? "0 4px 12px rgba(0, 0, 0, 0.03)" : "none",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: mintColor,
                      marginBottom: "1.25rem",
                    }}
                  >
                    <PillarIcon size={24} />
                  </div>

                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: mintColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {pillar.metric}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      marginBottom: "0.75rem",
                      color: isLight ? "#0f172a" : "#f8fafc",
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      color: isLight ? "#64748b" : "#94a3b8",
                      flex: 1,
                    }}
                  >
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. WHAT [SERVICE] INCLUDES / WHO YOU CAN HIRE (Exact 6-7 Live Items)  */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "6rem 1.5rem",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3.5rem auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: mintColor,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "0.85rem",
              }}
            >
              <Layers size={16} />
              <span>Full-Spectrum Capabilities</span>
            </div>

            {service.slug === "saas-development" ? (
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                  fontWeight: 850,
                  letterSpacing: "-0.025em",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                  textAlign: "center",
                }}
              >
                <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>What </span>
                <span
                  style={{
                    background: isLight ? "#dbeafe" : "rgba(37, 99, 235, 0.2)",
                    color: "#2563eb",
                    padding: "0.15rem 0.65rem",
                    borderRadius: "8px",
                    display: "inline-block",
                  }}
                >
                  SaaS Development
                </span>
                <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}> Includes</span>
              </h2>
            ) : service.slug === "api-integration" ? (
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                  fontWeight: 850,
                  letterSpacing: "-0.025em",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                  textAlign: "center",
                }}
              >
                <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>Our </span>
                <span
                  style={{
                    background: isLight ? "#dbeafe" : "rgba(37, 99, 235, 0.2)",
                    color: "#2563eb",
                    padding: "0.15rem 0.65rem",
                    borderRadius: "8px",
                    display: "inline-block",
                  }}
                >
                  API Integration Service
                </span>
                <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}> Includes</span>
              </h2>
            ) : service.slug === "qa-testing" ? (
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                  fontWeight: 850,
                  letterSpacing: "-0.025em",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                  textAlign: "center",
                }}
              >
                <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>What Our </span>
                <span
                  style={{
                    background: isLight ? "#dbeafe" : "rgba(37, 99, 235, 0.2)",
                    color: "#2563eb",
                    padding: "0.15rem 0.65rem",
                    borderRadius: "8px",
                    display: "inline-block",
                  }}
                >
                  QA & Testing
                </span>
                <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}> Services Include</span>
              </h2>
            ) : service.slug === "hire-developers" ? (
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                  fontWeight: 850,
                  letterSpacing: "-0.025em",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                  textAlign: "center",
                }}
              >
                <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>Who You Can </span>
                <span style={{ color: "#2563eb" }}>Hire</span>
              </h2>
            ) : service.slug === "mobile-development" ? (
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                  fontWeight: 850,
                  letterSpacing: "-0.025em",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                  textAlign: "center",
                }}
              >
                <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>Our </span>
                <span
                  style={{
                    background: isLight ? "#dbeafe" : "rgba(37, 99, 235, 0.2)",
                    color: "#2563eb",
                    padding: "0.15rem 0.65rem",
                    borderRadius: "8px",
                    display: "inline-block",
                  }}
                >
                  Mobile App Development
                </span>
                <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}> Services Include</span>
              </h2>
            ) : service.slug === "ai-ml-solutions" ? (
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                  fontWeight: 850,
                  letterSpacing: "-0.025em",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                  textAlign: "center",
                }}
              >
                <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>What </span>
                <span
                  style={{
                    background: isLight ? "#dbeafe" : "rgba(37, 99, 235, 0.2)",
                    color: "#2563eb",
                    padding: "0.15rem 0.65rem",
                    borderRadius: "8px",
                    display: "inline-block",
                  }}
                >
                  AI/ML Development
                </span>
                <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}> Includes</span>
              </h2>
            ) : (
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.6vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                {`What ${service.title} Includes`}
              </h2>
            )}

            <p
              style={{
                fontSize: "clamp(1.02rem, 1.6vw, 1.15rem)",
                lineHeight: 1.65,
                color: isLight ? "#64748b" : "#94a3b8",
                maxWidth: "780px",
                margin: "0 auto",
              }}
            >
              {service.slug === "hire-developers"
                ? "Access dedicated senior developers and engineering squads specialized across every tier of the modern technology stack."
                : `Comprehensive end-to-end capabilities tailored to meet your unique business objectives, user expectations, and compliance standards.`}
            </p>
          </div>

          {/* Features Grid */}
          {[
            "ai-ml-solutions",
            "mobile-development",
            "saas-development",
            "api-integration",
            "qa-testing",
            "hire-developers",
          ].includes(service.slug) ? (
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "2.75rem 2.25rem",
                  marginTop: "3.5rem",
                }}
                className="ai-ml-includes-grid"
              >
                {service.features.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1.1rem",
                    }}
                  >
                    <AiMlDeviceIllustration />
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: "1.08rem",
                          fontWeight: 750,
                          color: "#2563eb",
                          marginBottom: "0.45rem",
                          lineHeight: 1.35,
                        }}
                      >
                        {service.slug === "hire-developers"
                          ? item.title
                          : item.title.endsWith(":") || item.title.endsWith("–") || item.title.endsWith("-")
                          ? item.title
                          : `${item.title}:`}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.92rem",
                          color: isLight ? "#475569" : "#94a3b8",
                          lineHeight: 1.55,
                          margin: 0,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {service.slug === "mobile-development" && (
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "3.5rem",
                    paddingTop: "2rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "clamp(1.02rem, 1.8vw, 1.15rem)",
                      fontWeight: 700,
                      color: isLight ? "#0f172a" : "#f1f5f9",
                      lineHeight: 1.6,
                      maxWidth: "960px",
                      margin: "0 auto",
                    }}
                  >
                    Whether you&apos;re building an MVP for a startup or a robust enterprise-grade app, we tailor our services to align with your goals.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.75rem",
              }}
            >
              {service.features.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "2rem",
                    borderRadius: "18px",
                    background: isLight ? "#ffffff" : "rgba(16, 32, 51, 0.4)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isLight ? "0 4px 15px rgba(0, 0, 0, 0.03)" : "none",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.25s ease, border-color 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.14)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: mintColor,
                        fontWeight: 800,
                        fontSize: "0.95rem",
                      }}
                    >
                      0{idx + 1}
                    </div>

                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        background: isLight ? "rgba(71, 109, 154, 0.1)" : "rgba(71, 109, 154, 0.25)",
                        color: slateColor,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {item.badge || "Production Ready"}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      marginBottom: "0.75rem",
                      color: isLight ? "#0f172a" : "#f8fafc",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      color: isLight ? "#64748b" : "#94a3b8",
                      flex: 1,
                    }}
                  >
                    {item.desc}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      marginTop: "1.5rem",
                      paddingTop: "1rem",
                      borderTop: isLight ? "1px solid #f1f5f9" : "1px solid rgba(255, 255, 255, 0.05)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: mintColor,
                    }}
                  >
                    <CheckCircle2 size={16} />
                    <span>100% Quality Assurance Guarantee</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. TECHNOLOGIES WE DEPLOY (Tabbed Interactive Categories)              */}
      {/* ===================================================================== */}
      <section
        id="tech-stack"
        style={{
          position: "relative",
          padding: "5.5rem 1.5rem",
          background: isLight ? "#ffffff" : "#040b17",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
          borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3rem auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: mintColor,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "0.85rem",
              }}
            >
              <Cpu size={16} />
              <span>Technology Ecosystem</span>
            </div>

            {(() => {
              const customTechStack =
                service.slug === "ai-ml-solutions"
                  ? getAiMlTechStack(isLight)
                  : service.slug === "saas-development"
                  ? getSaasTechStack(isLight)
                  : service.slug === "api-integration"
                  ? getApiIntegrationTechStack()
                  : service.slug === "qa-testing"
                  ? getQaTestingTechStack(isLight)
                  : service.slug === "hire-developers"
                  ? getHireDevTechStack(isLight)
                  : null;

              if (customTechStack) {
                return (
                  <h2
                    style={{
                      fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                      fontWeight: 850,
                      letterSpacing: "-0.025em",
                      marginBottom: "3rem",
                      lineHeight: 1.2,
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        background: isLight ? "#dbeafe" : "rgba(37, 99, 235, 0.2)",
                        color: "#2563eb",
                        padding: "0.15rem 0.65rem",
                        borderRadius: "8px",
                        display: "inline-block",
                        marginRight: "0.45rem",
                      }}
                    >
                      Tech Stack
                    </span>
                    <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>
                      {service.slug === "ai-ml-solutions"
                        ? "We Use For AI/ML"
                        : service.slug === "saas-development"
                        ? "We Use For SaaS"
                        : service.slug === "api-integration"
                        ? "We Use For Api Integration & Microservices"
                        : service.slug === "qa-testing"
                        ? "We Use For QA & Testing Services"
                        : service.slug === "hire-developers"
                        ? "Our Dedicated Developers Master"
                        : `We Use For ${service.title}`}
                    </span>
                  </h2>
                );
              }

              return (
                <>
                  <h2
                    style={{
                      fontSize: "clamp(2rem, 3.6vw, 3rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.025em",
                      marginBottom: "1rem",
                      lineHeight: 1.2,
                    }}
                  >
                    Technologies We Deploy
                  </h2>

                  <p
                    style={{
                      fontSize: "clamp(1.02rem, 1.6vw, 1.15rem)",
                      lineHeight: 1.65,
                      color: isLight ? "#64748b" : "#94a3b8",
                    }}
                  >
                    Battle-tested frameworks, modern cloud infrastructure, and enterprise toolchains proven in high-concurrency production systems.
                  </p>

                  {/* Category Filter Tabs */}
                  {techCategories.length > 2 && (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "0.5rem",
                        marginTop: "2rem",
                      }}
                    >
                      {techCategories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedTechCat(cat)}
                          style={{
                            padding: "0.55rem 1.25rem",
                            borderRadius: "9999px",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            border: "none",
                            background:
                              selectedTechCat === cat
                                ? mintColor
                                : isLight
                                ? "#f1f5f9"
                                : "rgba(255, 255, 255, 0.08)",
                            color:
                              selectedTechCat === cat
                                ? "#ffffff"
                                : isLight
                                ? "#475569"
                                : "#cbd5e1",
                          }}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              );
            })()}
          </div>

          {/* Technologies Grid */}
          {(() => {
            const customTechStack =
              service.slug === "ai-ml-solutions"
                ? getAiMlTechStack(isLight)
                : service.slug === "saas-development"
                ? getSaasTechStack(isLight)
                : service.slug === "api-integration"
                ? getApiIntegrationTechStack()
                : service.slug === "qa-testing"
                ? getQaTestingTechStack(isLight)
                : service.slug === "hire-developers"
                ? getHireDevTechStack(isLight)
                : null;

            if (customTechStack) {
              return (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1.5rem",
                    maxWidth: customTechStack.length <= 4 ? "1080px" : "1240px",
                    margin: "0 auto",
                  }}
                  className="service-custom-tech-grid"
                >
                  {customTechStack.map((techItem, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: isLight ? "#ffffff" : "rgba(15, 23, 42, 0.7)",
                        borderRadius: "18px",
                        border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                        boxShadow: isLight
                          ? "0 4px 16px rgba(15, 23, 42, 0.04)"
                          : "0 8px 24px rgba(0, 0, 0, 0.35)",
                        padding: "1.75rem 1.25rem 1.35rem 1.25rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                        minHeight: "140px",
                        transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease, border-color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.borderColor = isLight ? "#93c5fd" : "rgba(56, 189, 248, 0.4)";
                        e.currentTarget.style.boxShadow = isLight
                          ? "0 12px 28px rgba(37, 99, 235, 0.12)"
                          : "0 14px 32px rgba(37, 99, 235, 0.25)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.borderColor = isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)";
                        e.currentTarget.style.boxShadow = isLight
                          ? "0 4px 16px rgba(15, 23, 42, 0.04)"
                          : "0 8px 24px rgba(0, 0, 0, 0.35)";
                      }}
                    >
                      <div
                        style={{
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                        }}
                      >
                        {techItem.logo}
                      </div>
                      <div
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 650,
                          color: isLight ? "#1e293b" : "#f1f5f9",
                          textAlign: "center",
                          marginTop: "0.5rem",
                        }}
                      >
                        {techItem.name}
                      </div>
                    </div>
                  ))}
                </div>
              );
            }

            return null;
          })() || (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {displayedTechs.map((tech, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "1.25rem 1.1rem",
                    borderRadius: "14px",
                    background: isLight ? "#f8fafc" : "rgba(16, 32, 51, 0.35)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.85rem",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: mintColor,
                    }}
                  >
                    <Code2 size={18} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: isLight ? "#0f172a" : "#f8fafc",
                      }}
                    >
                      {tech}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: isLight ? "#94a3b8" : "#64748b",
                      }}
                    >
                      {categorizeTech(tech)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <style jsx>{`
          @media (min-width: 1024px) {
            :global(.ai-ml-tech-grid) {
              grid-template-columns: repeat(4, 1fr) !important;
            }
            :global(.ai-ml-includes-grid) {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
        `}</style>
      </section>

      {/* ===================================================================== */}
      {/* 5. [SERVICE] PROCESS (6 Chronological Sprints + Live SLA Note)        */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "6rem 1.5rem",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3.5rem auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: mintColor,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "0.85rem",
              }}
            >
              <Workflow size={16} />
              <span>Agile Execution Framework</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.6vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              {service.title} Process
            </h2>

            <p
              style={{
                fontSize: "clamp(1.02rem, 1.6vw, 1.15rem)",
                lineHeight: 1.65,
                color: isLight ? "#64748b" : "#94a3b8",
              }}
            >
              A proven, iterative roadmap delivering transparency, rigorous quality assurance, and continuous milestones from day one.
            </p>
          </div>

          {/* Process Timeline Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.75rem",
              marginBottom: "3rem",
            }}
          >
            {service.process.map((step, idx) => (
              <div
                key={idx}
                style={{
                  padding: "2rem",
                  borderRadius: "18px",
                  background: isLight ? "#ffffff" : "rgba(16, 32, 51, 0.4)",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  position: "relative",
                  boxShadow: isLight ? "0 4px 12px rgba(0, 0, 0, 0.03)" : "none",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: mintColor,
                    }}
                  >
                    {step.step}
                  </span>

                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "0.25rem 0.65rem",
                      borderRadius: "6px",
                      background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.08)",
                      color: isLight ? "#475569" : "#cbd5e1",
                      textTransform: "uppercase",
                    }}
                  >
                    Phase 0{idx + 1}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                    color: isLight ? "#0f172a" : "#f8fafc",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    color: isLight ? "#64748b" : "#94a3b8",
                    flex: 1,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Verbatim SLA Note Card from Live Site */}
          {service.processSla && (
            <div
              style={{
                padding: "2rem 2.5rem",
                borderRadius: "16px",
                background: isLight
                  ? "linear-gradient(135deg, rgba(0, 168, 143, 0.08) 0%, rgba(71, 109, 154, 0.06) 100%)"
                  : "linear-gradient(135deg, rgba(94, 192, 152, 0.12) 0%, rgba(71, 109, 154, 0.15) 100%)",
                border: isLight ? "1px solid rgba(0, 168, 143, 0.25)" : "1px solid rgba(94, 192, 152, 0.3)",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: mintColor,
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={28} />
              </div>
              <div style={{ flex: 1, minWidth: "280px" }}>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: mintColor,
                    marginBottom: "0.25rem",
                  }}
                >
                  Opash Enterprise Delivery Guarantee
                </div>
                <div
                  style={{
                    fontSize: "0.98rem",
                    lineHeight: 1.6,
                    color: isLight ? "#334155" : "#cbd5e1",
                    fontWeight: 500,
                  }}
                >
                  {service.processSla}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. INDUSTRIES WE SPECIALIZE IN (10 Exact Live Industries)              */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "5.5rem 1.5rem",
          background: isLight ? "#ffffff" : "#040b17",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
          borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3.5rem auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: mintColor,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "0.85rem",
              }}
            >
              <Globe2 size={16} />
              <span>Domain Expertise</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.6vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                marginBottom: "1.25rem",
                lineHeight: 1.2,
              }}
            >
              Industries We Specialize In
            </h2>

            {/* Verbatim Opash 8+ Years Paragraph */}
            <p
              style={{
                fontSize: "clamp(1.02rem, 1.6vw, 1.15rem)",
                lineHeight: 1.7,
                color: isLight ? "#475569" : "#94a3b8",
              }}
            >
              Opash Software brings over 8 years of expertise in delivering tailored digital solutions for Insurance, Fintech, eCommerce, Education, and Real Estate — helping businesses overcome industry challenges and scale confidently.
            </p>
          </div>

          {/* 10 Industry Badges Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {INDUSTRIES_LIVE.map((ind, idx) => {
              const IndIcon = ind.icon;
              const isActive = activeIndustryIdx === idx;
              return (
                <div
                  key={ind.id}
                  onClick={() => setActiveIndustryIdx(idx)}
                  style={{
                    padding: "1.5rem 1.25rem",
                    borderRadius: "16px",
                    background: isActive
                      ? isLight
                        ? "rgba(0, 168, 143, 0.1)"
                        : "rgba(94, 192, 152, 0.15)"
                      : isLight
                      ? "#f8fafc"
                      : "rgba(16, 32, 51, 0.35)",
                    border: isActive
                      ? `2px solid ${mintColor}`
                      : isLight
                      ? "1px solid #e2e8f0"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "0.85rem",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: isActive
                        ? mintColor
                        : isLight
                        ? "rgba(71, 109, 154, 0.1)"
                        : "rgba(255, 255, 255, 0.06)",
                      color: isActive ? "#ffffff" : mintColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <IndIcon size={24} />
                  </div>

                  <span
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: isActive
                        ? mintColor
                        : isLight
                        ? "#0f172a"
                        : "#f8fafc",
                    }}
                  >
                    {ind.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6.5 WHY CHOOSE US BENTO & RECOGNITION MARQUEE                        */}
      {/* ===================================================================== */}
      <WhyChooseUsCards />
      <RecognisedBy />

      {/* ===================================================================== */}
      {/* 7. GET YOUR FREE QUOTE TODAY (Verbatim Live Lead Generation Card)      */}
      {/* ===================================================================== */}
      <section
        id="quote-section"
        style={{
          position: "relative",
          padding: "6rem 1.5rem",
          overflow: "hidden",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div
            style={{
              borderRadius: "24px",
              background: isLight
                ? "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)"
                : "linear-gradient(135deg, #071529 0%, #0c203b 100%)",
              border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: isLight
                ? "0 20px 40px -15px rgba(0, 0, 0, 0.06)"
                : "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
              padding: "clamp(2rem, 5vw, 4rem)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              {/* Left Column: Verbatim Opash Copy */}
              <div>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: mintColor,
                    marginBottom: "1rem",
                  }}
                >
                  Turn Your Ideas into Scalable Digital Solutions
                </span>

                <h2
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    marginBottom: "1.5rem",
                    color: isLight ? "#0f172a" : "#ffffff",
                  }}
                >
                  Connect with{" "}
                  <span style={{ color: mintColor }}>Opash Software’s</span> Expert Development Team Today.
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                    color: isLight ? "#475569" : "#94a3b8",
                    marginBottom: "2rem",
                  }}
                >
                  Schedule an initial architectural review or discovery call. We provide transparent estimates, rapid developer onboarding, and NDA protection from day one.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: mintColor,
                      }}
                    >
                      <CheckCircle2 size={18} />
                    </div>
                    <span style={{ fontSize: "0.95rem", fontWeight: 600, color: isLight ? "#1e293b" : "#e2e8f0" }}>
                      Strict NDA & 100% Intellectual Property Ownership
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: mintColor,
                      }}
                    >
                      <Clock size={18} />
                    </div>
                    <span style={{ fontSize: "0.95rem", fontWeight: 600, color: isLight ? "#1e293b" : "#e2e8f0" }}>
                      Guaranteed Response Within 24 Business Hours
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: mintColor,
                      }}
                    >
                      <Users size={18} />
                    </div>
                    <span style={{ fontSize: "0.95rem", fontWeight: 600, color: isLight ? "#1e293b" : "#e2e8f0" }}>
                      Senior Full-Stack & Engineering Bench
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Lead Capture Form */}
              <div
                style={{
                  background: isLight ? "#ffffff" : "rgba(10, 24, 46, 0.8)",
                  borderRadius: "20px",
                  border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "2.25rem",
                  boxShadow: isLight ? "0 10px 25px rgba(0, 0, 0, 0.04)" : "none",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.45rem",
                    fontWeight: 700,
                    marginBottom: "1.5rem",
                    color: isLight ? "#0f172a" : "#ffffff",
                    textAlign: "center",
                  }}
                >
                  Get Your Free Quote Today
                </h3>

                {formSubmitted ? (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "2.5rem 1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.15)",
                        color: mintColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1.25rem auto",
                      }}
                    >
                      <CheckCircle2 size={32} />
                    </div>
                    <h4
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        marginBottom: "0.5rem",
                        color: isLight ? "#0f172a" : "#f8fafc",
                      }}
                    >
                      Quote Request Received!
                    </h4>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: isLight ? "#64748b" : "#94a3b8",
                        lineHeight: 1.6,
                      }}
                    >
                      Thank you for contacting Opash Software. One of our technical leads will reach out within 24 hours with scoping details.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          marginBottom: "0.35rem",
                          color: isLight ? "#334155" : "#cbd5e1",
                        }}
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Henderson"
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          borderRadius: "10px",
                          border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                          background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
                          color: isLight ? "#0f172a" : "#ffffff",
                          fontSize: "0.95rem",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            marginBottom: "0.35rem",
                            color: isLight ? "#334155" : "#cbd5e1",
                          }}
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          style={{
                            width: "100%",
                            padding: "0.75rem 1rem",
                            borderRadius: "10px",
                            border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                            background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
                            color: isLight ? "#0f172a" : "#ffffff",
                            fontSize: "0.95rem",
                            outline: "none",
                          }}
                        />
                      </div>

                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            marginBottom: "0.35rem",
                            color: isLight ? "#334155" : "#cbd5e1",
                          }}
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          style={{
                            width: "100%",
                            padding: "0.75rem 1rem",
                            borderRadius: "10px",
                            border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                            background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
                            color: isLight ? "#0f172a" : "#ffffff",
                            fontSize: "0.95rem",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            marginBottom: "0.35rem",
                            color: isLight ? "#334155" : "#cbd5e1",
                          }}
                        >
                          Project Engagement
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "0.75rem 1rem",
                            borderRadius: "10px",
                            border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                            background: isLight ? "#f8fafc" : "#0d1b2e",
                            color: isLight ? "#0f172a" : "#ffffff",
                            fontSize: "0.95rem",
                            outline: "none",
                          }}
                        >
                          <option value="Hourly">Hourly</option>
                          <option value="Part Time">Part Time</option>
                          <option value="Full Time">Full Time</option>
                        </select>
                      </div>

                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            marginBottom: "0.35rem",
                            color: isLight ? "#334155" : "#cbd5e1",
                          }}
                        >
                          Country
                        </label>
                        <select
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "0.75rem 1rem",
                            borderRadius: "10px",
                            border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                            background: isLight ? "#f8fafc" : "#0d1b2e",
                            color: isLight ? "#0f172a" : "#ffffff",
                            fontSize: "0.95rem",
                            outline: "none",
                          }}
                        >
                          {COUNTRIES_LIST.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          marginBottom: "0.35rem",
                          color: isLight ? "#334155" : "#cbd5e1",
                        }}
                      >
                        Project Details / Message *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project requirements, timeline, and goals..."
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          borderRadius: "10px",
                          border: isLight ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.15)",
                          background: isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
                          color: isLight ? "#0f172a" : "#ffffff",
                          fontSize: "0.95rem",
                          outline: "none",
                          resize: "vertical",
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formLoading}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.6rem",
                        padding: "0.95rem",
                        borderRadius: "10px",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "#ffffff",
                        background: `linear-gradient(135deg, ${mintColor} 0%, #0284c7 100%)`,
                        border: "none",
                        cursor: formLoading ? "not-allowed" : "pointer",
                        boxShadow: "0 8px 20px -4px rgba(0, 168, 143, 0.35)",
                        marginTop: "0.5rem",
                      }}
                    >
                      {formLoading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={17} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
