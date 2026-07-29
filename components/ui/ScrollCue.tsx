"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

interface ScrollCueProps {
  label: string;
  targetId?: string;
  className?: string;
}

export function ScrollCue({
  label,
  targetId = "next-section",
  className = "",
}: ScrollCueProps) {
  return (
    <a
      href={`#${targetId}`}
      className={`absolute bottom-6 start-1/2 hidden -translate-x-1/2 flex-col items-center text-white sm:bottom-10 md:flex ${className}`}
    >
      <span className="font-body text-xs uppercase tracking-wide">{label}</span>

      {/* Vertical line */}
      <span className="my-1 h-4 w-px bg-white/60" />

      

      <motion.span
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/60"
      >
        <ChevronDown size={14} className="text-secondary" />
      </motion.span>
    </a>
  );
}
