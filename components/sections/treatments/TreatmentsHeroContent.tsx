"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface TreatmentsHeroContentProps {
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  subheading: string;
  ctaExplore: string;
  ctaBook: string;
  scrollToDiscover: string;
}

const textContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const revealUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function TreatmentsHeroContent({
  eyebrow,
  headingLine1,
  headingLine2,
  subheading,
  ctaExplore,
  ctaBook,
  scrollToDiscover,
}: TreatmentsHeroContentProps) {
  return (
    <section>
      <div className="relative mx-auto h-[520px] max-w-[1800px] overflow-hidden sm:h-[590px]">
        <Image
          src="/images/treatments-hero-room.png"
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="visible"
          className="relative flex h-full max-w-2xl flex-col justify-center gap-4 px-5 sm:gap-6 sm:px-12 lg:px-20 xl:max-w-5xl"
        >
          <motion.p
            variants={revealUp}
            className="font-body text-xs font-semibold uppercase tracking-wider text-secondary sm:text-sm"
          >
            {eyebrow}
          </motion.p>

          <motion.h1 variants={revealUp} className="font-heading text-3xl leading-tight sm:text-5xl">
            <span className="text-white">{headingLine1}</span>
            <br />
            <span className="text-secondary">{headingLine2}</span>
          </motion.h1>

          <motion.div variants={revealUp} className="flex items-center gap-2">
            <div className="h-1 w-20 rounded bg-secondary sm:w-36" />
            <Sparkle size={14} className="text-secondary" fill="currentColor" />
          </motion.div>

          <motion.p variants={revealUp} className="font-body w-xl text-sm text-white/90 sm:text-base">
            {subheading}
          </motion.p>

          <motion.div variants={revealUp} className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Button
              href="/about-us"
              variant="solid"
              icon={<ArrowRight size={16} />}
              className="w-full justify-center sm:w-fit"
            >
              {ctaExplore}
            </Button>
            <Button
              href="/book-appointment"
              variant="outline"
              className="w-full justify-center border-secondary bg-white/90 text-secondary sm:w-fit"
            >
              {ctaBook}
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          href="#next-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute bottom-6 start-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white sm:bottom-10 md:flex"
        >
          <span className="font-body text-xs uppercase tracking-wide">{scrollToDiscover}</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/60"
          >
            <ChevronDown size={14} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}