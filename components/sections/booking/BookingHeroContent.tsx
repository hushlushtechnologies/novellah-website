"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface BookingHeroContentProps {
  eyebrow: string;
  headingLine1: string;
  headingHighlight: string;
  subheading: string;
  ctaViewTreatment: string;
  ctaContact: string;
}

const textContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const revealUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function BookingHeroContent({
  eyebrow,
  headingLine1,
  headingHighlight,
  subheading,
  ctaViewTreatment,
  ctaContact,
}: BookingHeroContentProps) {
  return (
    <section className="relative flex min-h-[440px] items-end justify-center overflow-hidden pb-10 sm:min-h-[560px] sm:pb-20 lg:min-h-[720px] lg:pb-36">
      <Image
        src="/images/booking-hero-lounge.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/85 to-white" />

      <motion.div
        variants={textContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-2xl px-4 pt-10 text-center sm:px-6 lg:px-8"
      >
        <motion.p
          variants={revealUp}
          className="font-body text-[10px]  font-extrabold uppercase tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.2em] lg:text-lg"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          variants={revealUp}
          className="mt-2 font-heading text-2xl font-extrabold leading-tight text-foreground sm:mt-3 sm:text-3xl lg:text-4xl xl:text-6xl"
        >
          {headingLine1}
          <br />
          <span className="text-primary">{headingHighlight}</span>
        </motion.h1>

        <motion.div
          variants={revealUp}
          className="mx-auto mt-3 flex items-center justify-center gap-2 sm:mt-4 sm:gap-3 lg:mt-5"
        >
          <div className="h-1 w-10 rounded-full bg-secondary sm:w-16 lg:w-24" />
          <Sparkle size={10} className="shrink-0 text-secondary sm:size-3" fill="currentColor" />
          <div className="h-1 w-10 rounded-full bg-secondary sm:w-16 lg:w-24" />
        </motion.div>

        <motion.p
          variants={revealUp}
          className="mx-auto mt-3 font-body text-sm font-medium text-muted-foreground sm:mt-4 sm:text-base lg:mt-5"
        >
          {subheading}
        </motion.p>

        <motion.div
          variants={revealUp}
          className="mt-5 flex flex-col items-center justify-center gap-3 sm:mt-6 sm:flex-row sm:gap-4 lg:mt-8"
        >
          <Button
            href="/treatments"
            variant="solid"
            icon={<ArrowRight size={16} />}
            className="w-full justify-center sm:w-fit"
          >
            {ctaViewTreatment}
          </Button>
          <Button href="/contact-us" variant="outline" className="w-full justify-center sm:w-fit">
            {ctaContact}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}