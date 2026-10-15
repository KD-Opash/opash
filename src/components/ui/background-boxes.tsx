"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const BOX_COLORS = [
  "#38bdf8", // sky-400
  "#f43f5e", // rose-500
  "#10b981", // emerald-500
  "#fbbf24", // amber-400
  "#a855f7", // purple-500
  "#3b82f6", // blue-500
  "#6366f1", // indigo-500
  "#2dd4bf", // teal-400
  "#ec4899", // pink-500
];

function getCellColor(i: number, j: number) {
  const hash = Math.abs((i * 19 + j * 37 + (i ^ j) * 11)) % BOX_COLORS.length;
  return BOX_COLORS[hash];
}

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = React.useMemo(() => new Array(110).fill(1), []);
  const cols = React.useMemo(() => new Array(55).fill(1), []);

  return (
    <div
      style={{
        transform: `translate(-50%, -50%) skewX(-48deg) skewY(14deg) scale(0.88) rotate(0deg) translateZ(0)`,
      }}
      className={cn("boxes-grid-container", className)}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row-${i}`}
          className="boxes-row"
        >
          {cols.map((_, j) => {
            const hoverColor = getCellColor(i, j);
            return (
              <motion.div
                key={`col-${j}`}
                whileHover={{
                  backgroundColor: hoverColor,
                  transition: { duration: 0 },
                }}
                animate={{
                  transition: { duration: 2.2 },
                }}
                className="boxes-cell"
              >
                {j % 2 === 0 && i % 2 === 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="boxes-cross"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                ) : null}
              </motion.div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
