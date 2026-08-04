
 
"use client";
 
import { motion, useReducedMotion } from "framer-motion";
 
 
export default function Loading() {
 
  const reduceMotion = useReducedMotion();
 
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-background">
      {/* Rotating ring + pulsing monogram */}
      <div className="relative flex h-20 w-20 items-center justify-center">
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-secondary/30 border-t-primary"
          animate={reduceMotion ? {} : { rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.span
          className="font-heading text-2xl font-medium text-primary"
          animate={reduceMotion ? {} : { opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          N
        </motion.span>
      </div>
 
      {/* Wordmark */}
      <motion.p
        className="font-heading text-lg tracking-[0.2em] text-foreground"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        NOVELLAH RESTYLE
      </motion.p>
 
      {/* Thin progress hint */}
      <div className="h-px w-32 overflow-hidden bg-border">
        <motion.div
          className="h-full w-1/3 bg-secondary"
          animate={reduceMotion ? { x: "0%" } : { x: ["-100%", "300%"] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}