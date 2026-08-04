// app/not-found.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cormorant, inter } from "./fonts";
import "./globals.css";

const PETAL_COUNT = 6;

type Petal = { id: number; left: number; delay: number; duration: number };

export default function RootNotFound() {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [collected, setCollected] = useState<number[]>([]);

  // Generate randomized positions only after mount — client-only,
  // so server-rendered markup and first client render match (both empty).
  useEffect(() => {
    setPetals(
      Array.from({ length: PETAL_COUNT }, (_, i) => ({
        id: i,
        left: 10 + i * 14 + Math.random() * 6,
        delay: i * 0.6,
        duration: 6 + Math.random() * 3,
      })),
    );
  }, []);

  const allCollected = petals.length > 0 && collected.length === PETAL_COUNT;

  function collectPetal(id: number) {
    setCollected((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }

  return (
    <section
      className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 text-center ${cormorant.variable} ${inter.variable}`}
    >
      {petals.map(
        (petal) =>
          !collected.includes(petal.id) && (
            <motion.button
              key={petal.id}
              type="button"
              aria-label="Collect petal"
              onClick={() => collectPetal(petal.id)}
              initial={{ y: "110vh", opacity: 0 }}
              animate={{
                y: "-10vh",
                opacity: [0, 1, 1, 0],
                x: [0, 15, -15, 0],
              }}
              transition={{
                duration: petal.duration,
                delay: petal.delay,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ left: `${petal.left}%` }}
              className="absolute bottom-0 h-6 w-6 cursor-pointer text-secondary"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full drop-shadow-sm">
                <path d="M12 2C9 6 6 9 6 13a6 6 0 0 0 12 0c0-4-3-7-6-11Z" />
              </svg>
            </motion.button>
          ),
      )}

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,theme(colors.secondary/15%),transparent_60%)]" />

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-heading text-[6rem] font-bold leading-none text-secondary/30 sm:text-[8rem]"
      >
        404
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl"
      >
        Page Not Found
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 max-w-md font-body text-sm text-muted-foreground sm:text-base"
      >
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </motion.p>

      <div className="mt-6 flex items-center gap-2">
        <span className="font-body text-xs text-muted-foreground">
          Catch the petals while you wait
        </span>
        <div className="flex gap-1">
          {Array.from({ length: PETAL_COUNT }).map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition-colors ${
                collected.includes(i) ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {allCollected ? (
          <motion.a
            key="unlocked"
            href="/"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 rounded-full bg-primary px-6 py-3 font-body text-sm text-white shadow-lg"
          >
            All petals found — take me home
          </motion.a>
        ) : (
          <motion.a
            key="default"
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 rounded-full border border-primary px-6 py-3 font-body text-sm text-primary"
          >
            Back to Home
          </motion.a>
        )}
      </AnimatePresence>
    </section>
  );
}