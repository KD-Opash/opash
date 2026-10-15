"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface LayoutTextFlipProps {
  text?: string;
  words: string[];
  duration?: number;
  className?: string;
  textClassName?: string;
}

export const LayoutTextFlip = ({
  text,
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 2600,
  className,
  textClassName,
}: LayoutTextFlipProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <span className="inline-flex items-center align-middle">
      {text ? (
        <motion.span
          layoutId="subtext"
          className={cn("inline-block font-bold tracking-tight", textClassName)}
        >
          {text}
        </motion.span>
      ) : null}

      <motion.span
        layout
        transition={{
          layout: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
        }}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-xl border px-3.5 py-1 shadow-sm backdrop-blur-md transition-all duration-300",
          "border-white/20 bg-neutral-900/85 text-[#5EC098] shadow-[0_0_25px_rgba(94,192,152,0.18)] ring-1 ring-white/10",
          className,
        )}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={currentIndex}
            initial={{ y: -36, filter: "blur(8px)", opacity: 0 }}
            animate={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            exit={{ y: 40, filter: "blur(8px)", opacity: 0 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={cn("inline-block whitespace-nowrap", textClassName)}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </span>
  );
};

export default LayoutTextFlip;
