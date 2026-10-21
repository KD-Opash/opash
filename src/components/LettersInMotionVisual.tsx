"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import HeroCreativeBackdrop from "./HeroCreativeBackdrop";

export interface ActivePhraseState {
  index: number;
  id: string;
  title: string;
  slug: string;
  primaryColor: string;
  secondaryColor: string;
  rect: {
    left: number;
    top: number;
    width: number;
    height: number;
    centerX: number;
    centerY: number;
    normX: number;
    normY: number;
    widthNorm: number;
    heightNorm: number;
  };
  transitionProgress: number;
  isTransitioning: boolean;
}

export interface LettersInMotionVisualProps {
  currentIndex: number;
  activePhrase: ActivePhraseState;
  onSelectPhrase?: (index: number) => void;
}

export interface SceneMeta {
  id: string;
  title: string;
  badge: string;
  primaryColor: number;
  secondaryColor: number;
  lightKeyColor: number;
  lightAmbientColor: number;
}

export const SCENE_METAS: SceneMeta[] = [
  {
    id: "custom-software",
    title: "Custom Software",
    badge: "BESPOKE ARCHITECTURE",
    primaryColor: 0x00bbab,
    secondaryColor: 0x38bdf8,
    lightKeyColor: 0x00bbab,
    lightAmbientColor: 0x011424,
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    badge: "NEURAL PIPELINES",
    primaryColor: 0x2dd4bf,
    secondaryColor: 0x60a5fa,
    lightKeyColor: 0x2dd4bf,
    lightAmbientColor: 0x071b26,
  },
  {
    id: "web-applications",
    title: "Web Applications",
    badge: "EDGE SCALE",
    primaryColor: 0x38bdf8,
    secondaryColor: 0x00bbab,
    lightKeyColor: 0x38bdf8,
    lightAmbientColor: 0x02162e,
  },
  {
    id: "mobile-ecosystems",
    title: "Mobile Ecosystems",
    badge: "NATIVE RUNTIMES",
    primaryColor: 0x818cf8,
    secondaryColor: 0x38bdf8,
    lightKeyColor: 0x818cf8,
    lightAmbientColor: 0x0a0c2e,
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    badge: "TERRAFORM & K8S",
    primaryColor: 0x34d399,
    secondaryColor: 0x00bbab,
    lightKeyColor: 0x34d399,
    lightAmbientColor: 0x021c1a,
  },
];

/**
 * LettersInMotionVisual:
 * Replaced heavy Three.js WebGL canvas loop with zero-GPU hardware-accelerated
 * HeroCreativeBackdrop (SVG telemetry arcs + ambient radiant glows + architectural texture).
 * Eliminates GPU rendering load completely.
 */
export default function LettersInMotionVisual({
  currentIndex,
  activePhrase,
  onSelectPhrase,
}: LettersInMotionVisualProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <HeroCreativeBackdrop
      isLightMode={isLight}
      currentIndex={currentIndex}
      activePrimaryColor={activePhrase.primaryColor}
      activeSecondaryColor={activePhrase.secondaryColor}
      activeTitle={activePhrase.title}
      onSelectPhrase={onSelectPhrase}
    />
  );
}
