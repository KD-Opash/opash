"use client";

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Star, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { companyData } from "@/data/company";
import GlobalNetworkMap from "./GlobalNetworkMap";
import ElasticLettering from "./ElasticLettering";

export interface HeroCardProps {
  tag?: string;
  title: string;
  description: string;
  metric?: string;
  graphType?: "arc" | "cycle" | "nodes" | "metric";
}

export interface AtmosphericHeroProps {
  badge?: string;
  titleTop?: string;
  titleAccent?: string;
  subheadline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  leftCard?: HeroCardProps;
  rightCard?: HeroCardProps;
  centerVisualImage?: string;
  bottomChildren?: React.ReactNode;
}

export default function AtmosphericHero({
  badge,
  titleTop,
  titleAccent,
  subheadline,
  primaryCta = { label: "Start Project Now", href: "/get-a-quote" },
  secondaryCta = { label: "WhatsApp Consultation", href: companyData.contact.whatsapp },
  bottomChildren,
}: AtmosphericHeroProps) {
  const isDefaultHomeHero =
    !titleTop ||
    titleTop.includes("Top Global Partner") ||
    titleTop.includes("Engineering Scalable") ||
    titleTop.includes("Think Global");

  return (
    <section className="hero-valerio-container">
      {/* ========================================================================= */}
      {/* 0. CINEMATIC BACKGROUND VIDEO BACKDROP (Opash Logo Palette) */}
      {/* ========================================================================= */}
      <div className="hero-valerio-video-backdrop" aria-hidden="true">
        <video
          className="hero-valerio-video"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-video-poster.png"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Opash Brand Blue color overlay & tint matching logo */}
        <div className="hero-valerio-video-overlay" />
        <div className="hero-valerio-video-blue-tint" />
        <div className="hero-valerio-video-radial-mask" />
      </div>

      {/* ========================================================================= */}
      {/* 1. SWEEPING PARABOLIC BOWL AURORA GLOW (Opash Slate Blue & Mint Green) */}
      {/* ========================================================================= */}
      <div className="hero-valerio-bowl-glow">
        <div className="hero-valerio-glow-slate" />
        <div className="hero-valerio-glow-mint" />
      </div>

      <div className="container-custom" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        {/* ========================================================================= */}
        {/* 2. CENTERED ANNOUNCEMENT PILL BADGE */}
        {/* ========================================================================= */}
        <Link
          href="/portfolio"
          className="hero-valerio-pill"
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "var(--color-mint, #5EC098)",
              display: "inline-block",
              boxShadow: "0 0 10px #5EC098",
            }}
          />
          <span>
            {badge || "Opash Global Delivery Hub v2.4 is Live • 50+ Engineers"}
          </span>
          <ChevronRight size={14} style={{ color: "var(--color-mint, #5EC098)", marginLeft: "2px" }} />
        </Link>

        {/* ========================================================================= */}
        {/* 3. CENTERED HUGE POWERFUL HEADLINE (Elastic Lettering from React Bits Pro) */}
        {/* ========================================================================= */}
        <h1 className="hero-valerio-headline">
          {isDefaultHomeHero ? (
            <>
              <div>
                <ElasticLettering
                  text="Think Global Scale."
                  as="span"
                  discoveryTug={true}
                />
              </div>
              <div>
                <ElasticLettering
                  text="Act Like a Pro."
                  as="span"
                  gradient={true}
                  discoveryTug={true}
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <ElasticLettering text={titleTop || ""} as="span" />
              </div>
              <div>
                <ElasticLettering
                  text={titleAccent || ""}
                  as="span"
                  gradient={true}
                />
              </div>
            </>
          )}
        </h1>

        {/* ========================================================================= */}
        {/* 4. CENTERED LEAD SUBTITLE */}
        {/* ========================================================================= */}
        <p className="hero-valerio-subhead">
          {subheadline ||
            "Smarter custom software starts with dedicated engineering squads, AI-driven architectures, and 96% client retention. Delivered from Surat, India to partners worldwide."}
        </p>

        {/* ========================================================================= */}
        {/* 5. CENTERED VALERIO-STYLE CTA BUTTONS */}
        {/* ========================================================================= */}
        <div className="hero-valerio-cta-row">
          <Link
            href={primaryCta?.href || "/get-a-quote"}
            className="hero-valerio-primary-btn"
          >
            <Sparkles size={18} />
            <span>{primaryCta?.label || "Start Project Now"}</span>
            <ArrowRight size={16} />
          </Link>

          <a
            href={secondaryCta?.href || companyData.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hero-valerio-secondary-btn"
          >
            <MessageSquare size={16} style={{ color: "#25D366" }} />
            <span>{secondaryCta?.label || "WhatsApp Consultation"}</span>
          </a>
        </div>

        {/* ========================================================================= */}
        {/* 6. CENTERED BIG SHOWCASE APP WINDOW WITH OUR GLOBAL MAP (Valerio Frame) */}
        {/* ========================================================================= */}
        <div className="hero-valerio-app-window">
          {/* Window Top Bar (macOS style) */}
          <div className="hero-valerio-window-header">
            {/* macOS traffic light window dots */}
            <div className="flex items-center gap-2">
              <span
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  backgroundColor: "#ff5f56",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  backgroundColor: "#ffbd2e",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  backgroundColor: "#27c93f",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.82rem",
                  marginLeft: "0.6rem",
                  fontWeight: 600,
                }}
              >
                opashsoftware.com/global-delivery-network
              </span>
            </div>

            {/* Live Operational Beacon */}
            <div className="flex items-center gap-3">
              <span
                className="flex items-center gap-2"
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-cyan, #5EC098)",
                  fontWeight: 700,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    display: "inline-block",
                    boxShadow: "0 0 8px #10b981",
                  }}
                />
                <span>SURAT HQ ⇄ 8 ACTIVE GLOBAL HUBS</span>
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>•</span>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-secondary)",
                  fontWeight: 600,
                }}
              >
                96% CLIENT RETENTION
              </span>
            </div>
          </div>

          {/* Window Body: Our Interactive Global Network Map */}
          <div className="hero-valerio-window-body" style={{ padding: "1rem 1rem 1.5rem 1rem" }}>
            <GlobalNetworkMap hideTopHud={true} />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 7. UNIFIED TRUST DOCK BAR (Below Showcase Window) */}
        {/* ========================================================================= */}
        <div style={{ marginTop: "2.75rem", display: "flex", justifyContent: "center" }}>
          <div className="hero-trust-dock">
            <div className="hero-trust-item">
              <div className="flex items-center gap-0.5" style={{ color: "#f59e0b" }}>
                <Star size={12} fill="#f59e0b" stroke="#f59e0b" />
                <Star size={12} fill="#f59e0b" stroke="#f59e0b" />
                <Star size={12} fill="#f59e0b" stroke="#f59e0b" />
                <Star size={12} fill="#f59e0b" stroke="#f59e0b" />
                <Star size={12} fill="#f59e0b" stroke="#f59e0b" />
              </div>
              <span className="hero-trust-bold">4.9/5 Clutch Rating</span>
            </div>

            <span className="hero-trust-separator" />

            <div className="hero-trust-item">
              <CheckCircle2 size={14} color="#10b981" />
              <span>50+ In-House Engineers in Surat HQ</span>
            </div>

            <span className="hero-trust-separator" />

            <div className="hero-trust-item">
              <ShieldCheck size={14} color="#38bdf8" />
              <span>96% Client Retention</span>
            </div>
          </div>
        </div>

        {/* Optional Page Bottom Children */}
        {bottomChildren && (
          <div style={{ marginTop: "4rem", width: "100%" }}>
            {bottomChildren}
          </div>
        )}
      </div>
    </section>
  );
}
