"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";

interface OffersHeroContentProps {
  eyebrow: string;
  headingLine1: string;
  headingHighlight: string;
  headingSuffix: string;
  subheading: string;
  ctaBook: string;
  ctaWhatsapp: string;
  whatsappHref: string;
  badge1Line1: string;
  badge1Line2: string;
  badge1Line3: string;
  badge1Line4: string;
  badge2Line1: string;
  badge2Line2: string;
  badge2Line3: string;
  badge2Line4: string;
}

const textContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const collageContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
};

const mainPhoto = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const badgePop = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
};

const sidePhoto = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function OffersHeroContent({
  eyebrow,
  headingLine1,
  headingHighlight,
  headingSuffix,
  subheading,
  ctaBook,
  ctaWhatsapp,
  whatsappHref,
  badge1Line1,
  badge1Line2,
  badge1Line3,
  badge1Line4,
  badge2Line1,
  badge2Line2,
  badge2Line3,
  badge2Line4,
}: OffersHeroContentProps) {
  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-20" dir="ltr">
      <DecorativeFlower position="top-right-half" size="lg" opacity={0.9} />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: text */}
        <motion.div variants={textContainer} initial="hidden" animate="visible">
          <motion.p
            variants={revealUp}
            className="font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary sm:text-sm sm:tracking-[0.3em]"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            variants={revealUp}
            className="mt-3 font-heading text-3xl font-extrabold leading-tight text-foreground sm:mt-4 sm:text-5xl lg:text-6xl"
          >
            {headingLine1}
            <br />
            <span className="text-primary">{headingHighlight}</span> {headingSuffix}
          </motion.h1>

          <motion.div variants={revealUp} className="mt-4 flex items-center gap-2 sm:mt-5">
            <div className="h-1 w-12 rounded-full bg-secondary sm:w-24" />
            <Sparkle size={12} className="text-secondary" fill="currentColor" />
          </motion.div>

          <motion.p variants={revealUp} className="mt-4 font-body text-sm text-muted-foreground sm:mt-5 sm:text-base">
            {subheading}
          </motion.p>

          <motion.div
            variants={revealUp}
            className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Button
              href="/book-appointment"
              variant="solid"
              icon={<ArrowRight size={16} />}
              className="w-full justify-center sm:w-fit"
            >
              {ctaBook}
            </Button>
            <Button href={whatsappHref} variant="outline" className="w-full justify-center sm:w-fit">
              {ctaWhatsapp}
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: layered photo collage */}
        <motion.div
          variants={collageContainer}
          initial="hidden"
          animate="visible"
          className="relative mx-auto h-[300px] w-full max-w-xs sm:h-[420px] sm:max-w-md lg:h-[560px]"
        >
          {/* Main arched photo */}
          <motion.div
            variants={mainPhoto}
            className="absolute inset-x-0 top-0 h-[85%] w-[75%] overflow-hidden rounded-t-full border border-secondary/40 p-1 sm:p-1.5"
          >
            <div className="relative h-full w-full overflow-hidden rounded-t-full">
              <Image src="/images/offers/hero-main.png" alt="" fill className="object-cover" />
            </div>
          </motion.div>

          {/* Top-right circular badge, overlapping the main photo */}
          <motion.div
            variants={badgePop}
            className="absolute left-1/2 top-6 flex h-20 w-20 -translate-y-1/4 translate-x-1/4 flex-col items-center justify-center rounded-full bg-gradient-primary p-2 text-center shadow-card sm:top-10 sm:h-28 sm:w-28 sm:p-3 lg:h-32 lg:w-32"
          >
            <p className="font-body text-[8px] font-bold uppercase leading-tight text-white sm:text-[10px] lg:text-xs">
              {badge1Line1}
              <br />
              {badge1Line2}
            </p>
            <div className="my-1 h-1 w-1 rounded-full bg-secondary" />
            <p className="font-body text-[8px] font-bold uppercase leading-tight text-white sm:text-[10px] lg:text-xs">
              {badge1Line3}
              <br />
              {badge1Line4}
            </p>
          </motion.div>

          {/* Bottom-left small photo */}
          <motion.div variants={sidePhoto} className="absolute bottom-0 -start-2 h-[45%] w-[45%] sm:-start-3">
            <Image src="/images/offers/hero-bottom-right.png" alt="" fill className="object-cover" />
          </motion.div>

          {/* Bottom-right rotated portrait photo */}
          <motion.div variants={sidePhoto} className="absolute bottom-0 end-0 h-[60%] w-[48%] rotate-6">
            <Image src="/images/offers/hero-bottom-left.png" alt="" fill className="object-cover" />
          </motion.div>

          {/* Bottom-right circular badge, overlapping the portrait photo */}
          <motion.div
            variants={badgePop}
            className="absolute bottom-6 end-0 flex h-16 w-16 translate-x-1/3 flex-col items-center justify-center rounded-full bg-white p-2 text-center shadow-card sm:bottom-10 sm:h-24 sm:w-24 sm:p-3 lg:h-28 lg:w-28"
          >
            <p className="font-body text-[8px] font-bold uppercase leading-tight text-foreground sm:text-[10px] lg:text-xs">
              {badge2Line1}
              <br />
              {badge2Line2}
            </p>
            <div className="my-1 h-1 w-1 rounded-full bg-secondary" />
            <p className="font-body text-[8px] font-semibold uppercase leading-tight text-muted-foreground sm:text-[10px] lg:text-xs">
              {badge2Line3}
              <br />
              {badge2Line4}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}