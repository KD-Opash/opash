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
  RefreshCw,
  FileCode,
  Lock,
  Network,
  Activity,
  Award,
  ChevronDown,
  ChevronRight,
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
import { motion } from "framer-motion";
import OuiWillHeadline, { OuiWillWord, OuiWillDot } from "@/components/OuiWillHeadline";
import { TechStackShowcase } from "@/components/TechStackShowcase";
import { AnimatedIndustriesCarousel } from "@/components/AnimatedIndustriesCarousel";
import AnimatedRollingMetric from "@/components/AnimatedRollingMetric";
import ServiceCardsCarousel from "@/components/ServiceCardsCarousel";
import CustomSelect from "@/components/CustomSelect";

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
  heroVideoSrc?: string;
}

const SERVICE_HERO_VIDEOS: Record<string, string> = {
  "custom-software-development": "/videos/herovideo.mp4",
  "web-development": "/videos/video2.mp4",
  "mobile-development": "/videos/video3.mp4",
  "ai-ml-solutions": "/videos/video4.mp4",
  "saas-development": "/videos/video5.mp4",
  "api-integration": "/videos/video6.mp4",
  "qa-testing": "/videos/video7.mp4",
  "hire-developers": "/videos/herovideo.mp4",
};

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

function getServiceFeatureMeta(serviceSlug: string, item: { title: string; desc: string }, index: number) {
  const titleLower = item.title.toLowerCase();

  // 1. API Integration Mapping
  if (serviceSlug === "api-integration") {
    if (titleLower.includes("third-party") || titleLower.includes("payment")) {
      return {
        icon: CreditCard,
        badge: "PAYMENTS & GATEWAYS",
        chips: ["Stripe", "PayPal", "Twilio", "SendGrid", "Razorpay", "Zoom APIs"],
        metric: "Idempotent Webhooks & Retries",
      };
    }
    if (titleLower.includes("crm") || titleLower.includes("erp")) {
      return {
        icon: Database,
        badge: "ENTERPRISE SYNC",
        chips: ["Salesforce", "Zoho CRM", "HubSpot", "SAP ERP", "Odoo Suite"],
        metric: "Bi-Directional Real-Time Sync",
      };
    }
    if (titleLower.includes("cloud")) {
      return {
        icon: Cloud,
        badge: "MULTI-CLOUD PIPELINES",
        chips: ["AWS Lambda", "Google Cloud", "Firebase", "Azure Event Grid"],
        metric: "Event-Driven Serverless Flow",
      };
    }
    if (titleLower.includes("social") || titleLower.includes("marketing")) {
      return {
        icon: Globe2,
        badge: "OMNICHANNEL FEEDS",
        chips: ["Facebook Graph", "Instagram API", "LinkedIn", "Mailchimp", "Google Ads"],
        metric: "Real-Time Audience & Ad Sync",
      };
    }
    if (titleLower.includes("custom api")) {
      return {
        icon: Cpu,
        badge: "CORE ARCHITECTURE",
        chips: ["RESTful APIs", "GraphQL", "FastAPI / Node", "OpenAPI 3.1", "gRPC"],
        metric: "Sub-45ms Median Latency",
      };
    }
    if (titleLower.includes("authentication") || titleLower.includes("security") || titleLower.includes("webhook")) {
      return {
        icon: Lock,
        badge: "ZERO-TRUST SECURITY",
        chips: ["OAuth 2.0", "JWT Tokens", "Rate Limiting", "HMAC Signatures", "mTLS"],
        metric: "OWASP API Security Top 10",
      };
    }
  }

  // 2. QA & Testing Mapping
  if (serviceSlug === "qa-testing") {
    if (titleLower.includes("manual")) {
      return {
        icon: Search,
        badge: "EXPLORATORY & UI",
        chips: ["Functional QA", "Regression Runs", "Exploratory", "Usability", "Pixel Audit"],
        metric: "100% User Journey Verification",
      };
    }
    if (titleLower.includes("automated")) {
      return {
        icon: Bot,
        badge: "CI/CD AUTOMATION",
        chips: ["Playwright", "Cypress", "Selenium", "GitHub Actions", "Parallel Suites"],
        metric: "85%+ Automated Test Coverage",
      };
    }
    if (titleLower.includes("performance")) {
      return {
        icon: Activity,
        badge: "HIGH LOAD & STRESS",
        chips: ["Apache JMeter", "k6 Load Testing", "Gatling", "Stress Profiling", "Spike Tests"],
        metric: "10,000+ Concurrent Virtual Users",
      };
    }
    if (titleLower.includes("security")) {
      return {
        icon: ShieldCheck,
        badge: "VULNERABILITY DEFENSE",
        chips: ["OWASP Top 10", "Penetration Testing", "Vulnerability Scan", "SQLi / XSS Defense"],
        metric: "Zero-Defect Security Sign-Off",
      };
    }
    if (titleLower.includes("cross-browser") || titleLower.includes("device")) {
      return {
        icon: Laptop,
        badge: "MULTI-PLATFORM LAB",
        chips: ["Chrome / Safari / Firefox", "iOS Real Devices", "Android Lab", "Responsive Breakpoints"],
        metric: "500+ Device & Viewport Matrix",
      };
    }
    if (titleLower.includes("api")) {
      return {
        icon: Network,
        badge: "CONTRACT & SCHEMA",
        chips: ["Postman Collections", "Swagger Specs", "Payload Schema", "Edge Case Chaos", "REST/GraphQL"],
        metric: "100% API Schema Reliability",
      };
    }
  }

  // 3. Hire Developers Mapping
  if (serviceSlug === "hire-developers") {
    if (titleLower.includes("frontend")) {
      return {
        icon: Code2,
        badge: "UI / UX ARCHITECTS",
        chips: ["React.js", "Next.js 15", "Angular", "Svelte", "TailwindCSS", "TypeScript"],
        metric: "Pixel-Perfect Responsive UIs",
      };
    }
    if (titleLower.includes("backend")) {
      return {
        icon: Server,
        badge: "CORE ARCHITECTURE",
        chips: ["Node.js", "Python / Django", "FastAPI", "Go", "Express", "Postgres"],
        metric: "High-Throughput Concurrency",
      };
    }
    if (titleLower.includes("full stack")) {
      return {
        icon: Layers,
        badge: "END-TO-END SQUADS",
        chips: ["MERN Stack", "MEAN Stack", "Next.js + Postgres", "GraphQL APIs", "Prisma"],
        metric: "Rapid MVP-to-Scale Delivery",
      };
    }
    if (titleLower.includes("mobile")) {
      return {
        icon: Smartphone,
        badge: "NATIVE & CROSS-PLATFORM",
        chips: ["Flutter", "React Native", "iOS Swift", "Android Kotlin", "Offline-First"],
        metric: "60-120 FPS Fluid Experiences",
      };
    }
    if (titleLower.includes("devops")) {
      return {
        icon: Cloud,
        badge: "CLOUD & INFRASTRUCTURE",
        chips: ["Kubernetes", "Docker", "AWS / Azure", "Terraform", "CI/CD Pipelines"],
        metric: "99.99% Availability & Auto-Scale",
      };
    }
    if (titleLower.includes("qa") || titleLower.includes("testing")) {
      return {
        icon: TestTube2,
        badge: "TEST AUTOMATION",
        chips: ["Playwright", "Cypress", "Selenium", "JMeter", "Test Strategy", "k6"],
        metric: "Defect-Free Sprint Cycles",
      };
    }
    if (titleLower.includes("ai") || titleLower.includes("ml")) {
      return {
        icon: BrainCircuit,
        badge: "APPLIED AI & MLOPS",
        chips: ["Python", "PyTorch", "TensorFlow", "RAG & LLMs", "Vector DBs", "MLOps"],
        metric: "Enterprise GenAI Integration",
      };
    }
  }

  // Generic fallback
  const iconList = [Code2, Server, Database, Cloud, ShieldCheck, Zap, Workflow, Terminal];
  const SelectedIcon = iconList[index % iconList.length];
  const derivedChips = item.desc
    .split(/[,–-]/)
    .map((s) => s.trim())
    .filter((s) => s.length > 1 && s.length < 24)
    .slice(0, 5);

  return {
    icon: SelectedIcon,
    badge: `CAPABILITY 0${index + 1}`,
    chips: derivedChips.length > 0 ? derivedChips : ["Enterprise Ready", "High Availability", "Production Grade"],
    metric: "100% Production Ready Quality",
  };
}

function getProcessStepIcon(index: number, title: string) {
  const t = title.toLowerCase();
  if (t.includes("analys") || t.includes("scope") || t.includes("profil") || t.includes("discover") || t.includes("require")) return Search;
  if (t.includes("plan") || t.includes("design") || t.includes("shortlist") || t.includes("architect")) return Compass;
  if (t.includes("environ") || t.includes("setup") || t.includes("interview") || t.includes("code") || t.includes("develop")) return Code2;
  if (t.includes("test") || t.includes("execut") || t.includes("qa") || t.includes("onboard")) return TestTube2;
  if (t.includes("regress") || t.includes("bug") || t.includes("deploy") || t.includes("sprint")) return Rocket;
  if (t.includes("sign-off") || t.includes("monitor") || t.includes("scal") || t.includes("support") || t.includes("mainten")) return RefreshCw;
  const icons = [Search, Compass, Code2, TestTube2, Rocket, RefreshCw];
  return icons[index % icons.length];
}

function getProcessStepTags(index: number, serviceSlug: string, stepTitle: string): string[] {
  if (serviceSlug === "api-integration") {
    const apiTags: Record<number, string[]> = {
      0: ["Data Contract Specs", "Schema Mapping"],
      1: ["Auth & Rate Limits", "Latency Profiling"],
      2: ["REST / GraphQL / gRPC", "mTLS Zero-Trust"],
      3: ["Token Rotation", "Idempotent Listeners"],
      4: ["Chaos Fault Mocking", "Synthetic Testing"],
      5: ["Edge Gateway Ops", "99.99% SLA Tracking"],
    };
    return apiTags[index] || ["API Contract", "Zero-Loss Bridge"];
  }
  if (serviceSlug === "qa-testing") {
    const qaTags: Record<number, string[]> = {
      0: ["SRS Analysis", "Risk Assessment"],
      1: ["Test Strategy", "Coverage Matrix"],
      2: ["Staging Mirrors", "Mock Data"],
      3: ["E2E Automation", "Defect Logging"],
      4: ["Regression Suite", "Zero Critical Bugs"],
      5: ["Smoke Testing", "Production Sign-Off"],
    };
    return qaTags[index] || ["Quality Gate", "Audit Passed"];
  }
  if (serviceSlug === "hire-developers") {
    const hireTags: Record<number, string[]> = {
      0: ["Tech Stack Mapping", "Role Definition"],
      1: ["48h Matching", "Top 3% Talent"],
      2: ["Live Coding", "Architecture Review"],
      3: ["NDA & IP Signed", "GitHub / Jira Access"],
      4: ["Daily Standups", "Bi-Weekly Demos"],
      5: ["Elastic Scalability", "Dedicated PM"],
    };
    return hireTags[index] || ["Vetted Talent", "Agile Execution"];
  }
  const genericTags: Record<number, string[]> = {
    0: ["Discovery & Scope", "KPI Alignment"],
    1: ["Architecture Blueprint", "Design Specs"],
    2: ["Agile Sprints", "Clean Codebase"],
    3: ["Rigorous QA", "Security Validation"],
    4: ["Automated CI/CD", "Zero-Downtime Rollout"],
    5: ["24/7 Monitoring", "Continuous SLAs"],
  };
  return genericTags[index] || ["Milestone Verified", "Enterprise SLA"];
}

function getProcessPipelineLabel(title: string, index: number): string {
  const t = title.toLowerCase();
  if (t.includes("analys") || t.includes("scope") || t.includes("profil") || t.includes("require")) return "Requirement";
  if (t.includes("evaluat") || t.includes("compatib") || t.includes("shortlist")) return "Evaluation";
  if (t.includes("endpoint") || t.includes("config") || t.includes("environ") || t.includes("develop")) return "Endpoints";
  if (t.includes("secur") || t.includes("rate limit") || t.includes("webhook")) return "Security";
  if (t.includes("sandbox") || t.includes("regress") || t.includes("bug")) return "Sandbox";
  if (t.includes("deploy") || t.includes("sign-off") || t.includes("monitor") || t.includes("support")) return "Deployment";
  const words = title.split(/\s+/).filter(Boolean);
  if (words[0].toLowerCase() === "test" && words.length > 1) {
    return words[1];
  }
  return words[0] || `Phase ${index + 1}`;
}

function getServiceMetricIcon(index: number, label: string, serviceSlug: string) {
  const l = label.toLowerCase();
  if (l.includes("call") || l.includes("throughput") || l.includes("speed") || l.includes("saving") || l.includes("cost")) return Zap;
  if (l.includes("time") || l.includes("hour") || l.includes("latency") || l.includes("cadence") || l.includes("cycle")) return Clock;
  if (l.includes("uptime") || l.includes("sla") || l.includes("defect") || l.includes("secur") || l.includes("vetting")) return ShieldCheck;
  if (l.includes("doc") || l.includes("cover") || l.includes("code") || l.includes("test")) return FileCode;
  if (l.includes("user") || l.includes("team") || l.includes("talent") || l.includes("match")) return Users;
  if (l.includes("overlap") || l.includes("global") || l.includes("project")) return Globe2;
  const defaultIcons = [Zap, Clock, ShieldCheck, FileCode];
  return defaultIcons[index % defaultIcons.length];
}

function getServiceMetricSub(index: number, label: string, serviceSlug: string): string {
  if (serviceSlug === "api-integration") {
    const apiSubs = [
      "High-Throughput Gateways",
      "Sub-50ms Global Edge Routing",
      "Multi-Zone High Availability",
      "Standardized OpenAPI 3.0 Specs",
    ];
    return apiSubs[index] || "Enterprise Telemetry";
  }
  if (serviceSlug === "qa-testing") {
    const qaSubs = [
      "Zero-Defect Quality Gates",
      "Cypress & Playwright Suites",
      "Distributed Load Benchmarks",
      "Streamlined CI/CD Feedback",
    ];
    return qaSubs[index] || "Quality Assurance Metric";
  }
  if (serviceSlug === "hire-developers") {
    const hireSubs = [
      "Instant Bench Onboarding",
      "Multi-Round Technical Screen",
      "Zero Recruitment Overhead",
      "Real-Time Collaboration",
    ];
    return hireSubs[index] || "Talent Guarantee";
  }
  return "Production-Grade Metric";
}

export default function ServiceDetailTemplate({
  service,
  heroVideoSrc,
}: ServiceDetailTemplateProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const activeVideoSrc =
    heroVideoSrc || SERVICE_HERO_VIDEOS[service.slug] || "/videos/herovideo.mp4";

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
  const [heroConsoleTab, setHeroConsoleTab] = useState<"architecture" | "telemetry" | "devops">("architecture");
  const [activeTier, setActiveTier] = useState<number>(0);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 700);
  };

  const titleConfig = useMemo(() => {
    if (service.slug === "api-integration") {
      return { main: "API Integration", accent: "Services", ghost: "APIS" };
    }
    if (service.slug === "qa-testing") {
      return { main: "QA & Testing", accent: "Services", ghost: "QA" };
    }
    if (service.slug === "hire-developers") {
      return { main: "Hire Dedicated", accent: "Developers", ghost: "TALENT" };
    }
    const words = (service.heroHeadline || service.title || "").trim().split(/\s+/);
    if (words.length <= 1) {
      return { main: words[0] || "", accent: "", ghost: (words[0] || "SERVICES").toUpperCase() };
    }
    const accent = words.pop() || "";
    const main = words.join(" ");
    return { main, accent, ghost: (words[0] || "OPASH").toUpperCase() };
  }, [service.slug, service.heroHeadline, service.title]);

  // Alternating hero background images (Image 1 vs Image 2) across service pages:
  // 6. api-integration -> Image 2 (web-development-hero-bg.png)
  // 7. qa-testing -> Image 1 (custom-software-hero-bg.png)
  // 8. hire-developers -> Image 2 (web-development-hero-bg.png)
  const isImage2 = service.slug === "api-integration" || service.slug === "hire-developers";
  const heroBgImage = isImage2
    ? "/images/web-development-hero-bg.png"
    : "/images/custom-software-hero-bg.png";

  const consoleConfig = useMemo(() => {
    if (service.slug === "api-integration") {
      return {
        tag: "opash.engine // api-gateway.v3",
        status: "GATEWAY OPTIMAL",
        layers: [
          {
            name: "API Gateway & Edge Routing",
            stack: "Kong, Envoy, Apigee, Express Gateway, NGINX",
            metric: "< 8ms Routing",
            icon: Network,
            color: mintColor,
          },
          {
            name: "Microservices Mesh & Event Bus",
            stack: "Node.js, Go, Apache Kafka, RabbitMQ, Redis Pub/Sub",
            metric: "35k req/s",
            icon: Cpu,
            color: isLight ? "#0284c7" : "#38bdf8",
          },
          {
            name: "Protocol Adapters & Legacy Connectors",
            stack: "REST, GraphQL, gRPC, Webhooks, SOAP Bridges",
            metric: "100% Zero-Loss",
            icon: Database,
            color: isLight ? "#7c3aed" : "#a78bfa",
          },
        ],
        telemetry: [
          { label: "Request Throughput", val: "35,000 req/s", sub: "Distributed Edge Cluster", color: mintColor, icon: Zap },
          { label: "Gateway Routing Latency", val: "< 8ms", sub: "Global Edge Micro-Proxies", color: isLight ? "#0284c7" : "#38bdf8", icon: Server },
          { label: "Protocol Security", val: "mTLS + OAuth2", sub: "Zero-Trust Perimeter", color: isLight ? "#7c3aed" : "#a78bfa", icon: ShieldCheck },
          { label: "Error Budget SLA", val: "99.99%", sub: "Automated Circuit Breaking", color: isLight ? "#f59e0b" : "#fbbf24", icon: Clock },
        ],
        pipeline: [
          { step: "01", title: "OpenAPI 3.0 & Swagger Spec Mapping", status: "Completed", icon: FileCode },
          { step: "02", title: "Microservices Gateway & Proxy Sprints", status: "Active Sprint", icon: RefreshCw },
          { step: "03", title: "Distributed Stress & Chaos Testing", status: "Continuous", icon: Shield },
          { step: "04", title: "Production Traffic Migration & Canary", status: "Ready", icon: Rocket },
        ],
        footerLeft: "Routing: 8ms • Success Rate: 99.99%",
        footerTechCount: "25+ Techs",
      };
    }

    if (service.slug === "qa-testing") {
      return {
        tag: "opash.engine // testops-core.v3",
        status: "TEST SUITE GREEN",
        layers: [
          {
            name: "End-to-End Test Automation",
            stack: "Playwright, Cypress, Selenium, Appium, WebdriverIO",
            metric: "100% Headless",
            icon: TestTube2,
            color: mintColor,
          },
          {
            name: "API & Contract Verification",
            stack: "Postman, REST-Assured, Newman, Pact, Swagger",
            metric: "0ms Regression",
            icon: CheckSquare,
            color: isLight ? "#0284c7" : "#38bdf8",
          },
          {
            name: "Security, SAST & Load Performance",
            stack: "JMeter, k6, OWASP ZAP, SonarQube, Burp Suite",
            metric: "Zero Vulns",
            icon: ShieldCheck,
            color: isLight ? "#7c3aed" : "#a78bfa",
          },
        ],
        telemetry: [
          { label: "Automated Pass Rate", val: "99.8%", sub: "5,400+ Automated Test Cases", color: mintColor, icon: Zap },
          { label: "Regression Run Time", val: "< 12 mins", sub: "Parallel Distributed Workers", color: isLight ? "#0284c7" : "#38bdf8", icon: Server },
          { label: "Production Defect Leak", val: "< 0.1%", sub: "Strict Deployment Gates", color: isLight ? "#7c3aed" : "#a78bfa", icon: ShieldCheck },
          { label: "Test Coverage SLA", val: "95%+", sub: "Unit, Integration & E2E", color: isLight ? "#f59e0b" : "#fbbf24", icon: Clock },
        ],
        pipeline: [
          { step: "01", title: "Test Strategy & Coverage Matrix", status: "Completed", icon: FileCode },
          { step: "02", title: "Automation Framework Scripting", status: "Active Sprint", icon: RefreshCw },
          { step: "03", title: "CI/CD Quality Gate Integration", status: "Continuous", icon: Shield },
          { step: "04", title: "Release Sign-Off & Performance Report", status: "Ready", icon: Rocket },
        ],
        footerLeft: "Coverage: 95%+ • Regression: < 12m",
        footerTechCount: "20+ Techs",
      };
    }

    if (service.slug === "hire-developers") {
      return {
        tag: "opash.engine // talent-core.v3",
        status: "ENGINEERS ACTIVE",
        layers: [
          {
            name: "Top 3% Vetted Senior Engineers",
            stack: "React, Next.js, Node.js, Python, Flutter, Go, Cloud",
            metric: "Top 3% Vetted",
            icon: UserCheck,
            color: mintColor,
          },
          {
            name: "Seamless Agile Team Integration",
            stack: "Jira, GitHub, Slack, Daily Standups, CI/CD Workflows",
            metric: "48h Onboard",
            icon: Users,
            color: isLight ? "#0284c7" : "#38bdf8",
          },
          {
            name: "Timezone-Aligned Dedicated Sprints",
            stack: "Direct US/UK/EMEA/APAC working hour coverage",
            metric: "4-8h Overlap",
            icon: Clock,
            color: isLight ? "#7c3aed" : "#a78bfa",
          },
        ],
        telemetry: [
          { label: "Vetting Acceptance", val: "Top 3%", sub: "Multi-Tier Technical Assessment", color: mintColor, icon: Zap },
          { label: "Daily Timezone Overlap", val: "4-8 Hours", sub: "Live Real-Time Collaboration", color: isLight ? "#0284c7" : "#38bdf8", icon: Server },
          { label: "Client Retention Rate", val: "98.4%", sub: "Long-Term Dedicated Partnerships", color: isLight ? "#7c3aed" : "#a78bfa", icon: ShieldCheck },
          { label: "Deployment Ramp-Up", val: "< 48 Hours", sub: "Instant Sprint Day-1 Productivity", color: isLight ? "#f59e0b" : "#fbbf24", icon: Clock },
        ],
        pipeline: [
          { step: "01", title: "Domain Scoping & Tech Stack Matching", status: "Completed", icon: FileCode },
          { step: "02", title: "Handpicked Senior Candidate Interviews", status: "Active Sprint", icon: RefreshCw },
          { step: "03", title: "NDA, Security Compliance & Setup", status: "Continuous", icon: Shield },
          { step: "04", title: "Sprint Day-1 Kickoff & Daily Standups", status: "Ready", icon: Rocket },
        ],
        footerLeft: "Onboarding: < 48h • Retention: 98.4%",
        footerTechCount: "30+ Techs",
      };
    }

    // Generic fallback for any other service slug
    return {
      tag: `opash.engine // ${service.slug}.v3`,
      status: "SYSTEM OPTIMAL",
      layers: [
        {
          name: "High-Performance Modern Frontend",
          stack: "Next.js 15, React 19, TypeScript, Tailwind CSS",
          metric: "Sub-Second TTI",
          icon: Globe2,
          color: mintColor,
        },
        {
          name: "Scalable Microservices & Business Logic",
          stack: "Node.js, Python, PostgreSQL, Redis, REST APIs",
          metric: "< 14ms Latency",
          icon: Cpu,
          color: isLight ? "#0284c7" : "#38bdf8",
        },
        {
          name: "Cloud Infrastructure & Resilient Storage",
          stack: "AWS, Docker, Kubernetes, CI/CD Pipeline",
          metric: "99.99% Uptime",
          icon: Database,
          color: isLight ? "#7c3aed" : "#a78bfa",
        },
      ],
      telemetry: [
        { label: "System Availability", val: "99.99%", sub: "Automated Multi-Zone Failover", color: mintColor, icon: Zap },
        { label: "Response Velocity", val: "< 14ms", sub: "Low-Latency Edge Proxy", color: isLight ? "#0284c7" : "#38bdf8", icon: Server },
        { label: "Code & IP Rights", val: "100%", sub: "Exclusive Client Ownership", color: isLight ? "#7c3aed" : "#a78bfa", icon: ShieldCheck },
        { label: "Sprint Shipping Cadence", val: "14-Day Delivery", sub: "Continuous Bi-Weekly Releases", color: isLight ? "#f59e0b" : "#fbbf24", icon: Clock },
      ],
      pipeline: [
        { step: "01", title: "Architecture Blueprint & Requirements", status: "Completed", icon: FileCode },
        { step: "02", title: "Agile Development Sprints", status: "Active Sprint", icon: RefreshCw },
        { step: "03", title: "Quality Assurance & Security Audits", status: "Continuous", icon: Shield },
        { step: "04", title: "High-Availability Production Launch", status: "Ready", icon: Rocket },
      ],
      footerLeft: "Latency: 12ms • Uptime: 99.99%",
      footerTechCount: `${service.technologies.length}+ Techs`,
    };
  }, [service, isLight, mintColor]);

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
          padding: "clamp(5rem, 8vw, 7.5rem) clamp(1rem, 3vw, 1.5rem) clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Subtle Ambient Tech Dot Grid (Pure Static CSS) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: isLight
              ? "radial-gradient(rgba(0, 168, 143, 0.12) 1px, transparent 1px)"
              : "radial-gradient(rgba(94, 192, 152, 0.12) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage:
              "radial-gradient(ellipse 80% 65% at 50% 35%, black 40%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 65% at 50% 35%, black 40%, transparent 85%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Cinematic Hero Video Background */}
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
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              minWidth: "100%",
              minHeight: "100%",
              width: "auto",
              height: "auto",
              objectFit: "cover",
              opacity: isLight ? 0.35 : 0.45,
            }}
          >
            <source src={activeVideoSrc} type="video/mp4" />
          </video>
          {/* Subtle gradient overlay to ensure text contrast and bottom fade */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: isLight
                ? "linear-gradient(180deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.85) 60%, #ffffff 100%)"
                : "linear-gradient(180deg, rgba(2, 7, 18, 0.65) 0%, rgba(2, 7, 18, 0.85) 60%, #020712 100%)",
            }}
          />
        </div>

        {/* Soft Ambient Radial Bloom (Pure Static CSS) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "1100px",
            height: "460px",
            background: isLight
              ? "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0, 168, 143, 0.12) 0%, rgba(2, 132, 199, 0.05) 45%, transparent 75%)"
              : "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(94, 192, 152, 0.15) 0%, rgba(56, 189, 248, 0.06) 45%, transparent 75%)",
            filter: "blur(60px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Crisp Top Horizon Highlight Line */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(92%, 1000px)",
            height: "1px",
            background: isLight
              ? "linear-gradient(90deg, transparent 0%, rgba(0, 168, 143, 0.3) 30%, rgba(45, 212, 191, 0.5) 50%, rgba(0, 168, 143, 0.3) 70%, transparent 100%)"
              : "linear-gradient(90deg, transparent 0%, rgba(94, 192, 152, 0.35) 30%, rgba(45, 212, 191, 0.6) 50%, rgba(94, 192, 152, 0.35) 70%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Responsive CSS for Split Hero */}
        <style jsx>{`
          .service-hero-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.75rem;
            align-items: center;
            margin-bottom: 0;
          }
          @media (min-width: 1024px) {
            .service-hero-grid {
              grid-template-columns: 1.15fr 0.85fr;
              gap: 3.5rem;
            }
          }
        `}</style>

        <div className="container-custom" style={{ position: "relative", zIndex: 2, maxWidth: "1320px", margin: "0 auto", width: "100%" }}>
          {/* ================================================================= */}
          {/* NEW HERO SPLIT-COLUMN LAYOUT (Not Centered)                       */}
          {/* ================================================================= */}
          <div className="service-hero-grid">
            {/* ── LEFT COLUMN: Headline, Positioning, CTAs & Trust Badges ─── */}
            <div style={{ textAlign: "left" }}>
              {/* Monumental Headline */}
              <div style={{ margin: "0 0 1.25rem 0" }}>
                <OuiWillHeadline
                  style={{
                    fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', serif",
                    fontSize: "clamp(2rem, 5vw, 60px)",
                    fontWeight: 400,
                    lineHeight: 1.18,
                    letterSpacing: "-0.015em",
                    margin: 0,
                    textAlign: "left",
                    display: "block",
                  }}
                >
                  <span style={{ display: "inline-flex", alignItems: "baseline", whiteSpace: "nowrap" }}>
                    <OuiWillWord index={1}>{titleConfig.main}</OuiWillWord>
                    {titleConfig.accent && <OuiWillDot />}
                  </span>
                  {titleConfig.accent && (
                    <span style={{ display: "block", width: "100%", marginTop: "0.25rem" }}>
                      <OuiWillWord index={2} isGradient>
                        {titleConfig.accent}
                      </OuiWillWord>
                    </span>
                  )}
                </OuiWillHeadline>
              </div>

              {/* Lead Paragraph 1 (Exact Content Preserved) */}
              <p
                style={{
                  fontSize: "clamp(1rem, 1.15vw, 1.125rem)",
                  lineHeight: 1.68,
                  color: isLight ? "#334155" : "#cbd5e1",
                  maxWidth: "640px",
                  margin: "0 0 1rem 0",
                  fontWeight: 400,
                  textAlign: "left",
                }}
              >
                {service.heroSubheadline || service.shortDesc}
              </p>

              {/* Lead Paragraph 2 (Exact Content Preserved) */}
              {service.heroParagraph2 && (
                <p
                  style={{
                    fontSize: "clamp(0.9rem, 1vw, 0.98rem)",
                    lineHeight: 1.62,
                    color: isLight ? "#64748b" : "#94a3b8",
                    maxWidth: "600px",
                    margin: "0 0 2rem 0",
                    fontWeight: 400,
                    textAlign: "left",
                  }}
                >
                  {service.heroParagraph2}
                </p>
              )}

              {/* Action Buttons (Left-Aligned) */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1.1rem",
                  flexWrap: "wrap",
                  marginBottom: "2.25rem",
                }}
              >
                {/* Primary Button */}
                <Link
                  href="#quote-section"
                  className="hero-brand-primary-btn opash-roll-btn"
                  style={{
                    padding: "0.95rem 2.1rem",
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <span className="opash-roll-track">
                    <span className="opash-roll-item">
                      <span>ESTIMATE PROJECT</span>
                      <ArrowRight size={18} className="hero-btn-arrow" />
                    </span>
                    <span className="opash-roll-item" aria-hidden="true">
                      <span>ESTIMATE PROJECT</span>
                      <ArrowRight size={18} className="hero-btn-arrow" />
                    </span>
                  </span>
                </Link>

                {/* Secondary Button */}
                <Link
                  href="#tech-stack"
                  className="hero-brand-secondary-btn opash-roll-btn"
                  style={{
                    padding: "0.95rem 1.9rem",
                    borderRadius: "12px",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    letterSpacing: "0.02em",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <span className="opash-roll-track">
                    <span className="opash-roll-item">
                      <span>Explore Technologies</span>
                      <Terminal size={17} className="hero-btn-arrow" />
                    </span>
                    <span className="opash-roll-item" aria-hidden="true">
                      <span>Explore Technologies</span>
                      <Terminal size={17} className="hero-btn-arrow" />
                    </span>
                  </span>
                </Link>
              </div>

              {/* Trust Highlights Inline Strip */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "1.35rem",
                  color: isLight ? "#475569" : "#94a3b8",
                  fontSize: "0.86rem",
                  fontWeight: 500,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                  <CheckCircle2 size={16} color={mintColor} />
                  <span>100% Code & IP Ownership</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                  <CheckCircle2 size={16} color={mintColor} />
                  <span>Zero Vendor Lock-In</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                  <CheckCircle2 size={16} color={mintColor} />
                  <span>Agile Sprints & Bi-Weekly Releases</span>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Interactive Live Architecture & Engine Console ── */}
            <div style={{ position: "relative" }}>
              {/* Main Interactive Glass Console Box */}
              <div
                style={{
                  position: "relative",
                  borderRadius: "24px",
                  background: isLight
                    ? "linear-gradient(155deg, rgba(255, 255, 255, 0.94) 0%, rgba(248, 250, 252, 0.90) 100%)"
                    : "linear-gradient(155deg, rgba(15, 23, 42, 0.85) 0%, rgba(8, 14, 28, 0.92) 100%)",
                  border: isLight
                    ? "1px solid rgba(0, 168, 143, 0.22)"
                    : "1px solid rgba(94, 192, 152, 0.25)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: isLight
                    ? "0 25px 60px -15px rgba(0, 168, 143, 0.16), 0 0 1px 1px rgba(255, 255, 255, 0.9)"
                    : "0 30px 70px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(94, 192, 152, 0.12)",
                  overflow: "hidden",
                  padding: "1.5rem",
                }}
              >
                {/* Console Top Header Bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: "1.1rem",
                    borderBottom: isLight
                      ? "1px solid rgba(0, 0, 0, 0.08)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
                    <span
                      style={{
                        marginLeft: "0.5rem",
                        fontFamily: "monospace",
                        fontSize: "0.78rem",
                        color: isLight ? "#64748b" : "#94a3b8",
                        fontWeight: 600,
                      }}
                    >
                      {consoleConfig.tag}
                    </span>
                  </div>

                  {/* Active Cluster Status */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "9999px",
                      background: isLight ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0.16)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: isLight ? "#059669" : "#34d399",
                      letterSpacing: "0.04em",
                    }}
                  >
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} className="animate-pulse" />
                    <span>{consoleConfig.status}</span>
                  </div>
                </div>

                {/* Interactive Console Tabs */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "0.5rem",
                    background: isLight ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.04)",
                    padding: "0.3rem",
                    borderRadius: "12px",
                    marginBottom: "1.25rem",
                  }}
                >
                  {[
                    { id: "architecture", label: "Architecture", icon: Layers },
                    { id: "telemetry", label: "Live Telemetry", icon: Activity },
                    { id: "devops", label: "Delivery Pipeline", icon: Workflow },
                  ].map((tab) => {
                    const isActive = heroConsoleTab === tab.id;
                    const TabIcon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setHeroConsoleTab(tab.id as any)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.4rem",
                          padding: "0.55rem 0.5rem",
                          borderRadius: "9px",
                          border: "none",
                          background: isActive
                            ? isLight
                              ? "#ffffff"
                              : "rgba(255, 255, 255, 0.12)"
                            : "transparent",
                          color: isActive
                            ? isLight
                              ? "#00A88F"
                              : "#5EC098"
                            : isLight
                            ? "#64748b"
                            : "#94a3b8",
                          fontWeight: isActive ? 700 : 500,
                          fontSize: "0.76rem",
                          boxShadow: isActive
                            ? isLight
                              ? "0 2px 8px rgba(0, 0, 0, 0.06)"
                              : "0 2px 10px rgba(0, 0, 0, 0.4)"
                            : "none",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <TabIcon size={13} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab 1: Architecture Stack (Default) */}
                {heroConsoleTab === "architecture" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {consoleConfig.layers.map((layer, idx) => {
                      const LayerIcon = layer.icon;
                      const isSelected = activeTier === idx;
                      return (
                        <div
                          key={idx}
                          onClick={() => setActiveTier(idx)}
                          style={{
                            padding: "0.95rem 1.1rem",
                            borderRadius: "14px",
                            background: isSelected
                              ? isLight
                                ? "rgba(0, 168, 143, 0.08)"
                                : "rgba(94, 192, 152, 0.12)"
                              : isLight
                              ? "rgba(0, 0, 0, 0.02)"
                              : "rgba(255, 255, 255, 0.03)",
                            border: isSelected
                              ? isLight
                                ? "1px solid rgba(0, 168, 143, 0.35)"
                                : "1px solid rgba(94, 192, 152, 0.45)"
                              : isLight
                              ? "1px solid rgba(0, 0, 0, 0.05)"
                              : "1px solid rgba(255, 255, 255, 0.06)",
                            transition: "all 0.2s ease",
                            cursor: "pointer",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                              <div
                                style={{
                                  width: "28px",
                                  height: "28px",
                                  borderRadius: "8px",
                                  background: `${layer.color}20`,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: layer.color,
                                }}
                              >
                                <LayerIcon size={15} />
                              </div>
                              <span style={{ fontSize: "0.86rem", fontWeight: 700, color: isLight ? "#0f172a" : "#ffffff" }}>
                                {layer.name}
                              </span>
                            </div>
                            <span
                              style={{
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                padding: "0.2rem 0.55rem",
                                borderRadius: "9999px",
                                background: `${layer.color}18`,
                                color: layer.color,
                                border: `1px solid ${layer.color}35`,
                              }}
                            >
                              {layer.metric}
                            </span>
                          </div>

                          <div style={{ fontSize: "0.75rem", color: isLight ? "#64748b" : "#94a3b8", marginLeft: "2.35rem" }}>
                            <strong style={{ color: isLight ? "#334155" : "#cbd5e1" }}>Stack:</strong> {layer.stack}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Tab 2: Live Telemetry */}
                {heroConsoleTab === "telemetry" && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.85rem",
                    }}
                  >
                    {consoleConfig.telemetry.map((metric, idx) => {
                      const MetricIcon = metric.icon;
                      return (
                        <div
                          key={idx}
                          style={{
                            padding: "1rem",
                            borderRadius: "14px",
                            background: isLight ? "rgba(0, 0, 0, 0.02)" : "rgba(255, 255, 255, 0.03)",
                            border: isLight ? "1px solid rgba(0, 0, 0, 0.06)" : "1px solid rgba(255, 255, 255, 0.08)",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                            <span style={{ fontSize: "0.72rem", color: isLight ? "#64748b" : "#94a3b8", fontWeight: 600 }}>
                              {metric.label}
                            </span>
                            <MetricIcon size={14} color={metric.color} />
                          </div>
                          <div style={{ fontSize: "1.35rem", fontWeight: 800, color: metric.color, letterSpacing: "-0.02em" }}>
                            {metric.val}
                          </div>
                          <div style={{ fontSize: "0.7rem", color: isLight ? "#64748b" : "#94a3b8", marginTop: "0.2rem" }}>
                            {metric.sub}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Tab 3: DevOps & Delivery Pipeline */}
                {heroConsoleTab === "devops" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    {consoleConfig.pipeline.map((item, idx) => {
                      const StepIcon = item.icon;
                      return (
                        <div
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "0.75rem 1rem",
                            borderRadius: "12px",
                            background: isLight ? "rgba(0, 0, 0, 0.02)" : "rgba(255, 255, 255, 0.03)",
                            border: isLight ? "1px solid rgba(0, 0, 0, 0.06)" : "1px solid rgba(255, 255, 255, 0.07)",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                            <span style={{ fontFamily: "monospace", fontSize: "0.72rem", color: mintColor, fontWeight: 700 }}>
                              {item.step}
                            </span>
                            <span style={{ fontSize: "0.78rem", fontWeight: 600, color: isLight ? "#0f172a" : "#ffffff" }}>
                              {item.title}
                            </span>
                          </div>
                          <span
                            style={{
                              fontSize: "0.68rem",
                              fontWeight: 700,
                              padding: "0.18rem 0.55rem",
                              borderRadius: "9999px",
                              background: idx === 1 ? `${mintColor}20` : "rgba(255, 255, 255, 0.08)",
                              color: idx === 1 ? mintColor : isLight ? "#64748b" : "#94a3b8",
                            }}
                          >
                            {item.status}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Console Bottom Action Bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "1.1rem",
                    borderTop: isLight
                      ? "1px solid rgba(0, 0, 0, 0.08)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    marginTop: "1.25rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.72rem", color: isLight ? "#64748b" : "#94a3b8" }}>
                    <span>{consoleConfig.footerLeft}</span>
                  </div>

                  <Link
                    href="#tech-stack"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      color: mintColor,
                      textDecoration: "none",
                    }}
                  >
                    <span>Explore {consoleConfig.footerTechCount}</span>
                    <ChevronRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 1.5 PROVEN TRACK RECORD & ENTERPRISE METRICS (SEPARATE SCROLL SECTION)*/}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)",
          background: isLight ? "#ffffff" : "#020712",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div
          className="container-custom"
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* 4 Telemetry Metrics Cards with Vertical Rolling Number Animation */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
              maxWidth: "1200px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            {service.metrics.map((metric, idx) => {
              const MetricIcon = getServiceMetricIcon(idx, metric.label, service.slug);
              const subtitle = getServiceMetricSub(idx, metric.label, service.slug);

              return (
                <div
                  key={idx}
                  style={{
                    padding: "1.6rem 1.6rem",
                    borderRadius: "18px",
                    position: "relative",
                    background: isLight
                      ? "linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(248, 250, 252, 0.92) 100%)"
                      : "linear-gradient(135deg, rgba(16, 32, 51, 0.55) 0%, rgba(8, 18, 32, 0.7) 100%)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: isLight
                      ? "1px solid rgba(0, 168, 143, 0.18)"
                      : "1px solid rgba(94, 192, 152, 0.18)",
                    boxShadow: isLight
                      ? "0 10px 30px -8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9)"
                      : "0 14px 35px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
                    transition:
                      "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.borderColor = isLight
                      ? "rgba(0, 168, 143, 0.45)"
                      : "rgba(94, 192, 152, 0.45)";
                    e.currentTarget.style.boxShadow = isLight
                      ? "0 20px 40px -10px rgba(0, 168, 143, 0.18), inset 0 1px 0 rgba(255, 255, 255, 1)"
                      : "0 22px 45px -10px rgba(0, 0, 0, 0.7), 0 0 25px -5px rgba(94, 192, 152, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = isLight
                      ? "rgba(0, 168, 143, 0.18)"
                      : "rgba(94, 192, 152, 0.18)";
                    e.currentTarget.style.boxShadow = isLight
                      ? "0 10px 30px -8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9)"
                      : "0 14px 35px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)";
                  }}
                >
                  {/* Top Subtle Card Highlight Line */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "15%",
                      right: "15%",
                      height: "1px",
                      background: isLight
                        ? "linear-gradient(90deg, transparent 0%, rgba(0, 168, 143, 0.5) 50%, transparent 100%)"
                        : "linear-gradient(90deg, transparent 0%, rgba(94, 192, 152, 0.6) 50%, transparent 100%)",
                    }}
                  />

                  {/* Header Row: Metric Value + Icon */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "0.85rem",
                    }}
                  >
                    <AnimatedRollingMetric
                      value={metric.value}
                      color={mintColor}
                      isLight={isLight}
                    />

                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: isLight
                          ? "rgba(0, 168, 143, 0.08)"
                          : "rgba(94, 192, 152, 0.1)",
                        border: `1px solid ${isLight ? "rgba(0, 168, 143, 0.2)" : "rgba(94, 192, 152, 0.2)"}`,
                        color: mintColor,
                      }}
                    >
                      <MetricIcon size={20} />
                    </div>
                  </div>

                  {/* Content: Label & Subtitle */}
                  <div>
                    <div
                      style={{
                        fontSize: "1.02rem",
                        fontWeight: 700,
                        color: isLight ? "#0f172a" : "#ffffff",
                        marginBottom: "0.35rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {metric.label}
                    </div>
                    {subtitle && (
                      <div
                        style={{
                          fontSize: "0.84rem",
                          fontWeight: 500,
                          color: isLight ? "#64748b" : "#94a3b8",
                          lineHeight: 1.4,
                        }}
                      >
                        {subtitle}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. WHY [SERVICE]? (Exact Live Headline & 2 Exact Live Paragraphs)     */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)",
          background: isLight ? "#ffffff" : "#040b17",
          borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "880px", margin: "0 auto 3.5rem auto" }}>
            <h2
              className="heading-section"
              style={{
                marginBottom: "1.5rem",
              }}
            >
              {service.whyTitle ? (
                service.whyTitle.includes("Why") ? (
                  <>
                    Why <span className="opash-hero-gradient-text">{service.whyTitle.replace(/^Why\s+/i, "")}</span>
                  </>
                ) : (
                  <span>{service.whyTitle}</span>
                )
              ) : (
                <>
                  Why Choose <span className="opash-hero-gradient-text">{service.title}?</span>
                </>
              )}
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

          {/* Scoped CSS for Why Choose Us / Advantage Cards */}
          <style>{`
            .benefit-pillar-card {
              position: relative;
              overflow: hidden;
              border-radius: 20px;
              transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1),
                          box-shadow 0.38s cubic-bezier(0.16, 1, 0.3, 1),
                          border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1);
              will-change: transform;
              cursor: pointer;
              backdrop-filter: blur(12px);
              -webkit-backdrop-filter: blur(12px);
            }
            .benefit-pillar-card:hover {
              transform: translateY(-8px);
            }
            .benefit-pillar-card .pillar-spotlight {
              position: absolute;
              inset: 0;
              pointer-events: none;
              opacity: 0;
              transition: opacity 0.35s ease;
              border-radius: inherit;
              z-index: 1;
            }
            .benefit-pillar-card:hover .pillar-spotlight {
              opacity: 1;
            }
            .benefit-pillar-card .pillar-laser-beam {
              position: absolute;
              top: 0;
              left: 12%;
              right: 12%;
              height: 2px;
              background: linear-gradient(90deg, transparent, #5EC098, #38bdf8, transparent);
              opacity: 0;
              transform: scaleX(0.2);
              transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
              pointer-events: none;
              z-index: 3;
            }
            .benefit-pillar-card:hover .pillar-laser-beam {
              opacity: 1;
              transform: scaleX(1);
            }
            .benefit-pillar-card .pillar-icon-box {
              transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                          background 0.3s ease,
                          box-shadow 0.3s ease,
                          border-color 0.3s ease;
            }
            .benefit-pillar-card:hover .pillar-icon-box {
              transform: translateY(-3px) scale(1.1) rotate(4deg);
              background: rgba(94, 192, 152, 0.25) !important;
              box-shadow: 0 0 24px rgba(94, 192, 152, 0.45) !important;
              border-color: rgba(94, 192, 152, 0.6) !important;
            }
            .benefit-pillar-card .pillar-title {
              transition: color 0.25s ease;
            }
            .benefit-pillar-card:hover .pillar-title {
              color: #5EC098 !important;
            }
            .benefit-pillar-card .pillar-arrow-btn {
              transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .benefit-pillar-card:hover .pillar-arrow-btn {
              background: rgba(94, 192, 152, 0.25) !important;
              border-color: rgba(94, 192, 152, 0.55) !important;
              box-shadow: 0 0 16px rgba(94, 192, 152, 0.35);
            }
            .benefit-pillar-card .pillar-arrow {
              transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .benefit-pillar-card:hover .pillar-arrow {
              transform: translateX(3px);
            }
            .benefit-pillar-card .pillar-divider {
              transition: border-color 0.3s ease;
            }
            .benefit-pillar-card:hover .pillar-divider {
              border-color: rgba(94, 192, 152, 0.35) !important;
            }
          `}</style>

          {/* 4 Bento Architecture Highlights with Interactive Carousel Slider */}
          <ServiceCardsCarousel id="detail-benefits" desktopCards={3} autoScrollInterval={3800}>
            {themeConfig.whyPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="benefit-pillar-card"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const spotlight = e.currentTarget.querySelector(".pillar-spotlight") as HTMLElement;
                    if (spotlight) {
                      spotlight.style.background = isLight
                        ? `radial-gradient(280px circle at ${x}px ${y}px, rgba(0, 168, 143, 0.08), transparent 70%)`
                        : `radial-gradient(280px circle at ${x}px ${y}px, rgba(94, 192, 152, 0.12), transparent 70%)`;
                    }
                  }}
                  style={{
                    padding: "2.25rem 2rem",
                    borderRadius: "20px",
                    background: isLight
                      ? "linear-gradient(165deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.94) 100%)"
                      : "linear-gradient(165deg, rgba(13, 23, 42, 0.75) 0%, rgba(7, 13, 27, 0.85) 100%)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isLight
                      ? "0 4px 16px rgba(0,0,0,0.03)"
                      : "0 10px 30px -10px rgba(0,0,0,0.5)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Dynamic Cursor Spotlight Effect */}
                  <div className="pillar-spotlight" />

                  {/* Top Laser Charging Beam on Hover */}
                  <div className="pillar-laser-beam" />

                  {/* Main Content */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "1.35rem",
                      }}
                    >
                      {/* Icon Box with Spring Hover Transformation */}
                      <div
                        className="pillar-icon-box"
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: "14px",
                          background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.14)",
                          border: isLight ? "1px solid rgba(0, 168, 143, 0.28)" : "1px solid rgba(94, 192, 152, 0.35)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: mintColor,
                        }}
                      >
                        <PillarIcon size={24} />
                      </div>
                    </div>

                    <div
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: mintColor,
                        marginBottom: "0.45rem",
                      }}
                    >
                      {pillar.metric}
                    </div>

                    <h3
                      className="pillar-title"
                      style={{
                        fontSize: "1.28rem",
                        fontWeight: 700,
                        marginBottom: "0.75rem",
                        color: isLight ? "#0f172a" : "#ffffff",
                        letterSpacing: "-0.015em",
                        lineHeight: 1.35,
                      }}
                    >
                      {pillar.title}
                    </h3>

                    <p
                      style={{
                        color: isLight ? "#475569" : "#cbd5e1",
                        fontSize: "0.96rem",
                        lineHeight: 1.65,
                        fontWeight: 500,
                        margin: 0,
                      }}
                    >
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Clean Bottom Action Row */}
                  <div
                    className="pillar-divider"
                    style={{
                      position: "relative",
                      zIndex: 2,
                      marginTop: "1.5rem",
                      paddingTop: "1rem",
                      borderTop: isLight ? "1px solid #f1f5f9" : "1px solid rgba(255, 255, 255, 0.07)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.76rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: isLight ? "#94a3b8" : "#64748b",
                      }}
                    >
                      Architectural Advantage
                    </span>

                    {/* Dedicated Circular Arrow Button */}
                    <div
                      className="pillar-arrow-btn"
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.12)",
                        border: isLight ? "1px solid rgba(0, 168, 143, 0.25)" : "1px solid rgba(94, 192, 152, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: mintColor,
                      }}
                    >
                      <ArrowRight size={14} className="pillar-arrow" />
                    </div>
                  </div>
                </div>
              );
            })}
          </ServiceCardsCarousel>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. WHAT [SERVICE] INCLUDES / WHO YOU CAN HIRE (Redesigned Engineering Suite) */}
      {/* ===================================================================== */}
      <section
        id="what-includes"
        style={{
          position: "relative",
          padding: "clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)",
          background: isLight
            ? "linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)"
            : "linear-gradient(180deg, #020712 0%, #060e1d 50%, #020712 100%)",
          borderTop: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.05)",
          borderBottom: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.05)",
          overflow: "hidden",
        }}
      >
        {/* Ambient background bloom */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "400px",
            background: isLight
              ? "radial-gradient(circle, rgba(0, 168, 143, 0.06) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(94, 192, 152, 0.08) 0%, rgba(56, 189, 248, 0.04) 50%, transparent 70%)",
            pointerEvents: "none",
            filter: "blur(60px)",
          }}
        />

        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 4rem auto" }}>
            {/* Title with Acthirey Serif font & Dual-Tone Gradient */}
            <h2
              className="heading-section"
              style={{
                marginBottom: "1.25rem",
                textAlign: "center",
              }}
            >
              {service.slug === "api-integration" ? (
                <>
                  <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>Our </span>
                  <span className="opash-hero-gradient-text">
                    API Integration Service
                  </span>
                  <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}> Includes</span>
                </>
              ) : service.slug === "qa-testing" ? (
                <>
                  <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>What Our </span>
                  <span className="opash-hero-gradient-text">
                    QA & Testing
                  </span>
                  <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}> Services Include</span>
                </>
              ) : service.slug === "hire-developers" ? (
                <>
                  <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>Who You Can </span>
                  <span className="opash-hero-gradient-text">
                    Hire
                  </span>
                </>
              ) : service.slug === "saas-development" ? (
                <>
                  <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>What </span>
                  <span className="opash-hero-gradient-text">
                    SaaS Development
                  </span>
                  <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}> Includes</span>
                </>
              ) : (
                <>
                  <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}>What </span>
                  <span className="opash-hero-gradient-text">
                    {service.title}
                  </span>
                  <span style={{ color: isLight ? "#0f172a" : "#f8fafc" }}> Includes</span>
                </>
              )}
            </h2>

            <p
              style={{
                fontSize: "clamp(1.02rem, 1.5vw, 1.15rem)",
                lineHeight: 1.68,
                color: isLight ? "#64748b" : "#94a3b8",
                maxWidth: "780px",
                margin: "0 auto",
              }}
            >
              {service.slug === "api-integration"
                ? "Connect disparate cloud software, automate mission-critical workflows, and orchestrate ultra-fast data pipelines with enterprise-grade encryption and 99.99% availability."
                : service.slug === "qa-testing"
                ? "Comprehensive manual and automated quality engineering embedded across every sprint to eliminate regressions, harden security, and ensure flawless multi-device reliability."
                : service.slug === "hire-developers"
                ? "Access dedicated senior engineers and full-stack squads vetted through rigorous technical benchmarks—ready to onboard directly into your workflow in less than 48 hours."
                : "Comprehensive end-to-end capabilities tailored to meet your unique business objectives, user expectations, and compliance standards."}
            </p>
          </div>

          {/* Redesigned Features Carousel (Bento Glass Cards) */}
          <ServiceCardsCarousel id="detail-features" desktopCards={3} autoScrollInterval={4200}>
            {service.features.map((item, idx) => {
              const meta = getServiceFeatureMeta(service.slug, item, idx);
              const IconComp = meta.icon;
              const cleanTitle = item.title.replace(/[:–-].*$/, "").trim() || item.title;

              return (
                <div
                  key={idx}
                  className="service-feature-card"
                  style={{
                    position: "relative",
                    padding: "2.25rem 2rem",
                    borderRadius: "20px",
                    background: isLight
                      ? "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)"
                      : "linear-gradient(180deg, rgba(13, 24, 42, 0.75) 0%, rgba(9, 17, 30, 0.9) 100%)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isLight
                      ? "0 10px 30px -10px rgba(0, 0, 0, 0.05)"
                      : "0 14px 40px -15px rgba(0, 0, 0, 0.6)",
                    backdropFilter: "blur(16px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    overflow: "hidden",
                  }}
                >
                  {/* Subtle Top Accent Glow Line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "15%",
                      right: "15%",
                      height: "2px",
                      background: "linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.5), transparent)",
                    }}
                  />

                  <div>
                    {/* Top Meta Bar */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {/* Icon container */}
                      <div
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: "14px",
                          background: isLight ? "rgba(0, 168, 143, 0.08)" : "rgba(94, 192, 152, 0.12)",
                          border: isLight
                            ? "1px solid rgba(0, 168, 143, 0.25)"
                            : "1px solid rgba(94, 192, 152, 0.35)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: mintColor,
                          boxShadow: isLight
                            ? "0 4px 12px rgba(0, 168, 143, 0.1)"
                            : "0 4px 16px rgba(94, 192, 152, 0.15)",
                        }}
                      >
                        <IconComp size={24} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: "1.24rem",
                        fontWeight: 750,
                        color: isLight ? "#0f172a" : "#f8fafc",
                        marginBottom: "0.65rem",
                        lineHeight: 1.3,
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {cleanTitle}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "0.93rem",
                        color: isLight ? "#475569" : "#94a3b8",
                        lineHeight: 1.6,
                        margin: 0,
                        marginBottom: "1.25rem",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>

                  <div>
                    {/* Technology / Capability Chips */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.45rem",
                        marginBottom: "1.35rem",
                      }}
                    >
                      {meta.chips.map((chip, cIdx) => (
                        <span
                          key={cIdx}
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            padding: "0.22rem 0.6rem",
                            borderRadius: "7px",
                            background: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.05)",
                            border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                            color: isLight ? "#334155" : "#cbd5e1",
                          }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    {/* Deliverable Guarantee / SLA Strip */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        paddingTop: "0.95rem",
                        borderTop: isLight ? "1px solid #f1f5f9" : "1px solid rgba(255, 255, 255, 0.06)",
                        fontSize: "0.82rem",
                        fontWeight: 650,
                        color: isLight ? "#0f172a" : "#e2e8f0",
                      }}
                    >
                      <CheckCircle2 size={15} color={mintColor} style={{ flexShrink: 0 }} />
                      <span style={{ flex: 1 }}>{meta.metric}</span>
                      <ChevronRight size={14} style={{ opacity: 0.45 }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </ServiceCardsCarousel>

          {/* Bottom High-Impact Engineering Assurance Banner */}
          <div
            style={{
              position: "relative",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              padding: "clamp(2rem, 4vw, 2.75rem) clamp(1.5rem, 4vw, 2.5rem)",
              borderRadius: "22px",
              background: isLight
                ? "linear-gradient(135deg, rgba(0, 168, 143, 0.06) 0%, rgba(56, 189, 248, 0.06) 100%)"
                : "linear-gradient(135deg, rgba(15, 29, 52, 0.7) 0%, rgba(9, 18, 33, 0.85) 100%)",
              border: isLight
                ? "1px solid rgba(0, 168, 143, 0.25)"
                : "1px solid rgba(94, 192, 152, 0.25)",
              boxShadow: isLight
                ? "0 10px 30px -10px rgba(0, 168, 143, 0.08)"
                : "0 16px 48px -12px rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
              overflow: "hidden",
            }}
          >
            <div style={{ maxWidth: "720px" }}>
              <h3
                style={{
                  fontSize: "clamp(1.25rem, 2.2vw, 1.65rem)",
                  fontWeight: 800,
                  color: isLight ? "#0f172a" : "#ffffff",
                  lineHeight: 1.3,
                  marginBottom: "0.65rem",
                  letterSpacing: "-0.015em",
                }}
              >
                {service.slug === "api-integration"
                  ? "Architecting Custom APIs or High-Volume Microservices?"
                  : service.slug === "qa-testing"
                  ? "Deploy Every Sprint With Zero Regressions & Certified Quality Gates"
                  : service.slug === "hire-developers"
                  ? "Pre-Vetted Senior Engineers Ready to Deploy in 48 Hours"
                  : `Accelerate Your ${service.title} Delivery with Opash Engineers`}
              </h3>

              <p
                style={{
                  fontSize: "0.94rem",
                  color: isLight ? "#475569" : "#94a3b8",
                  lineHeight: 1.6,
                  margin: 0,
                  marginBottom: "1rem",
                }}
              >
                {service.slug === "api-integration"
                  ? "From OAuth 2.0 / mTLS zero-trust auth to distributed Kafka event streaming, our principal architects ensure sub-45ms responses and 99.99% system availability."
                  : service.slug === "qa-testing"
                  ? "Our embedded QA specialists execute end-to-end regression suites, test up to 10,000+ concurrent virtual users, and audit OWASP Top 10 security standards."
                  : service.slug === "hire-developers"
                  ? "Skip traditional recruiting overhead. Interview hand-picked senior tech talent aligned with your time zone, backed by direct communication and a 2-week risk-free trial."
                  : "Collaborate directly with our engineering teams to build resilient, enterprise-scale software built for rapid market adoption."}
              </p>

              {/* Metrics pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {(service.slug === "api-integration"
                  ? ["35k+ req/s Throughput", "<45ms Median Latency", "99.99% Availability SLA"]
                  : service.slug === "qa-testing"
                  ? ["99.4% Defect Detection", "85%+ Test Coverage", "OWASP Top 10 Hardened"]
                  : service.slug === "hire-developers"
                  ? ["Top 3% Vetted Talent", "4-8h Timezone Overlap", "2-Week Risk-Free Trial"]
                  : ["100% Tailored", "Zero Vendor Lock-in", "Enterprise SLA"]
                ).map((pill, pIdx) => (
                  <span
                    key={pIdx}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: isLight ? "#0f172a" : "#f1f5f9",
                    }}
                  >
                    <CheckCircle2 size={13} color={mintColor} />
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div style={{ marginTop: "0.5rem" }}>
              <Link
                href="#quote-section"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  padding: "0.95rem 1.85rem",
                  borderRadius: "14px",
                  background: `linear-gradient(135deg, ${mintColor} 0%, #0284c7 100%)`,
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: isLight
                    ? "0 10px 24px -6px rgba(0, 168, 143, 0.4)"
                    : "0 12px 28px -6px rgba(94, 192, 152, 0.35)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                <span>
                  {service.slug === "api-integration"
                    ? "Consult Integration Architect"
                    : service.slug === "qa-testing"
                    ? "Request Free QA Audit"
                    : service.slug === "hire-developers"
                    ? "Interview Developers Now"
                    : "Get Free Consultation"}
                </span>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. TECHNOLOGIES & PLATFORMS SHOWCASE (SAME AS HOME PAGE)               */}
      {/* ===================================================================== */}
      <TechStackShowcase />

      {/* ===================================================================== */}
      {/* 5. [SERVICE] PROCESS (6 Chronological Sprints + Live SLA Note)        */}
      {/* ===================================================================== */}
      <section
        style={{
          position: "relative",
          padding: "clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3.5rem auto" }}>
            <h2
              className="heading-section"
              style={{
                marginBottom: "1rem",
              }}
            >
              {service.title} <span className="opash-hero-gradient-text">Process</span>
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

          {/* Scoped CSS for Process Roadmap Animation (Zero CPU Overhead, Pure GPU Composited) */}
          <style>{`
            .process-phase-card {
              position: relative;
              overflow: hidden;
              border-radius: 20px;
              transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1),
                          box-shadow 0.38s cubic-bezier(0.16, 1, 0.3, 1),
                          border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                          background 0.35s ease;
              will-change: transform;
              cursor: pointer;
              backdrop-filter: blur(12px);
              -webkit-backdrop-filter: blur(12px);
            }
            .process-phase-card:hover {
              transform: translateY(-8px);
            }
            .process-phase-card .phase-watermark-num {
              position: absolute;
              top: 0.75rem;
              right: 1.25rem;
              font-size: 3.75rem;
              font-weight: 900;
              font-family: var(--font-space-grotesk), monospace, sans-serif;
              line-height: 1;
              pointer-events: none;
              transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease, color 0.35s ease;
              user-select: none;
            }
            .process-phase-card:hover .phase-watermark-num {
              transform: scale(1.12) translate(-4px, -2px);
              opacity: 0.28 !important;
              color: #5EC098 !important;
            }
            .process-phase-card .phase-bottom-progress {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 3px;
              background: linear-gradient(90deg, #00A88F, #5EC098, #38bdf8);
              transform: scaleX(0);
              transform-origin: left;
              transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
              pointer-events: none;
              z-index: 4;
            }
            .process-phase-card:hover .phase-bottom-progress {
              transform: scaleX(1);
            }
            .process-phase-card .phase-icon-box {
              position: relative;
              transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                          background 0.3s ease,
                          box-shadow 0.3s ease,
                          border-color 0.3s ease;
            }
            .process-phase-card:hover .phase-icon-box {
              transform: translateY(-3px) scale(1.1) rotate(4deg);
              background: rgba(94, 192, 152, 0.25) !important;
              box-shadow: 0 0 24px rgba(94, 192, 152, 0.45) !important;
              border-color: rgba(94, 192, 152, 0.6) !important;
            }
            .process-phase-card .phase-tag-chip {
              transition: all 0.3s ease;
            }
            .process-phase-card:hover .phase-tag-chip {
              border-color: rgba(94, 192, 152, 0.4) !important;
              background: rgba(94, 192, 152, 0.12) !important;
              color: #5EC098 !important;
            }
            .process-phase-card .phase-title {
              transition: color 0.25s ease;
            }
            .process-phase-card:hover .phase-title {
              color: #5EC098 !important;
            }
            .process-pipeline-strip {
              display: none;
            }
            @media (min-width: 900px) {
              .process-pipeline-strip {
                display: flex;
                align-items: center;
                justify-content: space-between;
                position: relative;
                max-width: 1040px;
                margin: 0 auto 3.25rem auto;
                padding: 1rem 1.5rem;
                border-radius: 16px;
              }
            }
          `}</style>

          {/* Interactive Horizontal Pipeline Tracker (Desktop) */}
          {service.process && service.process.length > 0 && (
            <div
              className="process-pipeline-strip"
              style={{
                background: isLight ? "rgba(0, 0, 0, 0.02)" : "rgba(255, 255, 255, 0.02)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              {service.process.map((step, idx) => {
                const stepNum = step.step.length === 1 ? `0${step.step}` : step.step;
                const label = getProcessPipelineLabel(step.title, idx);
                return (
                  <React.Fragment key={idx}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <div
                        style={{
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          background: isLight ? "rgba(0, 168, 143, 0.12)" : "rgba(94, 192, 152, 0.15)",
                          border: isLight ? "1px solid rgba(0, 168, 143, 0.4)" : "1px solid rgba(94, 192, 152, 0.5)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.72rem",
                          fontWeight: 800,
                          fontFamily: "monospace",
                          color: mintColor,
                        }}
                      >
                        {stepNum}
                      </div>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: isLight ? "#475569" : "#cbd5e1",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {label}
                      </span>
                    </div>
                    {idx < service.process.length - 1 && (
                      <div
                        style={{
                          flex: 1,
                          height: "2px",
                          margin: "0 0.85rem",
                          background: isLight
                            ? "linear-gradient(90deg, rgba(0, 168, 143, 0.2), rgba(0, 168, 143, 0.5))"
                            : "linear-gradient(90deg, rgba(94, 192, 152, 0.2), rgba(94, 192, 152, 0.6))",
                          position: "relative",
                          borderRadius: "9999px",
                        }}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}

          {/* Process Timeline Carousel */}
          <ServiceCardsCarousel id="detail-process" desktopCards={3} autoScrollInterval={4500}>
            {service.process.map((step, idx) => {
              const StepIcon = getProcessStepIcon(idx, step.title);
              const tags = getProcessStepTags(idx, service.slug, step.title);
              const stepNumber = step.step.length === 1 ? `0${step.step}` : step.step;

              return (
                <div
                  key={idx}
                  className="process-phase-card"
                  style={{
                    padding: "2.25rem 2rem",
                    background: isLight
                      ? "linear-gradient(165deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.94) 100%)"
                      : "linear-gradient(165deg, rgba(13, 23, 42, 0.72) 0%, rgba(7, 13, 27, 0.82) 100%)",
                    border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isLight
                      ? "0 4px 16px rgba(0,0,0,0.03)"
                      : "0 10px 30px -10px rgba(0,0,0,0.5)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Giant Watermark Step Number that glows on hover */}
                  <div
                    className="phase-watermark-num"
                    style={{
                      color: isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)",
                    }}
                  >
                    {stepNumber}
                  </div>

                  {/* Progressive Bottom Milestone Charging Line */}
                  <div className="phase-bottom-progress" />

                  {/* Top Content */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "1.35rem",
                      }}
                    >
                      {/* Icon Box with Spring Hover Transformation */}
                      <div
                        className="phase-icon-box"
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: "14px",
                          background: isLight ? "rgba(0, 168, 143, 0.1)" : "rgba(94, 192, 152, 0.14)",
                          border: isLight ? "1px solid rgba(0, 168, 143, 0.28)" : "1px solid rgba(94, 192, 152, 0.35)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: mintColor,
                        }}
                      >
                        <StepIcon size={24} />
                      </div>
                    </div>

                    <div
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: mintColor,
                        marginBottom: "0.45rem",
                      }}
                    >
                      Phase {stepNumber}
                    </div>

                    <h3
                      className="phase-title"
                      style={{
                        fontSize: "1.28rem",
                        fontWeight: 700,
                        marginBottom: "0.75rem",
                        color: isLight ? "#0f172a" : "#ffffff",
                        letterSpacing: "-0.015em",
                        lineHeight: 1.35,
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      style={{
                        color: isLight ? "#475569" : "#cbd5e1",
                        fontSize: "0.96rem",
                        lineHeight: 1.65,
                        fontWeight: 500,
                        marginBottom: "1.35rem",
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>

                  {/* Deliverable Micro-Checklist Chips */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      marginTop: "auto",
                      paddingTop: "1.1rem",
                      borderTop: isLight ? "1px solid #f1f5f9" : "1px solid rgba(255, 255, 255, 0.07)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.55rem",
                      flexWrap: "wrap",
                    }}
                  >
                    {tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="phase-tag-chip"
                        style={{
                          fontSize: "0.74rem",
                          fontWeight: 600,
                          padding: "0.22rem 0.55rem",
                          borderRadius: "7px",
                          background: isLight ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.04)",
                          border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.07)",
                          color: isLight ? "#64748b" : "#94a3b8",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                        }}
                      >
                        <CheckCircle2 size={12} color={mintColor} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </ServiceCardsCarousel>

          {/* Verbatim SLA Note Card from Live Site */}
          {service.processSla && (
            <div
              style={{
                marginTop: "clamp(2.5rem, 5vw, 3.75rem)",
                padding: "clamp(1.25rem, 3.5vw, 2rem) clamp(1rem, 3.5vw, 2.5rem)",
                borderRadius: "16px",
                background: isLight
                  ? "#f8fafc"
                  : "rgba(10, 20, 36, 0.5)",
                border: isLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
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
      {/* 6. INDUSTRIES WE SPECIALIZE IN (ANIMATED CAROUSEL AS ON HOME PAGE)    */}
      {/* ===================================================================== */}
      <AnimatedIndustriesCarousel />

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
          padding: "clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)",
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
              padding: "clamp(1.25rem, 3.5vw, 3.5rem) clamp(0.75rem, 2.5vw, 2.5rem)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              {/* Left Column: Verbatim Opash Copy */}
              <div>
                <h2
                  className="heading-section section-connect-heading"
                  style={{
                    fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', 'Prime Serif', Georgia, serif",
                    fontSize: "clamp(1.35rem, 3.5vw, 2.35rem)",
                    lineHeight: 1.25,
                    maxWidth: "760px",
                    marginBottom: "1.5rem",
                    textAlign: "left",
                    textWrap: "balance",
                  }}
                >
                  <span>Connect with <span className="opash-hero-gradient-text">Opash Software’s</span></span>{" "}
                  <span style={{ display: "inline-block" }}>Expert Development Team Today.</span>
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
                  padding: "clamp(1.25rem, 3vw, 2rem) clamp(0.75rem, 2vw, 1.5rem)",
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
                      <CustomSelect
                        value={formData.projectType}
                        onChange={(val) => setFormData({ ...formData, projectType: val })}
                        options={["Hourly", "Part Time", "Full Time"]}
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
                        Country
                      </label>
                      <CustomSelect
                        value={formData.country}
                        onChange={(val) => setFormData({ ...formData, country: val })}
                        options={COUNTRIES_LIST}
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
