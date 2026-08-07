"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface LoyaltyHeroContentProps {
  eyebrow: string;
  headingLine1: string;
  headingHighlight: string;
  headingSuffix: string;
  subheading: string;
  ctaContact: string;
  ctaConsultation: string;
}

const textContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const revealUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function LoyaltyHeroContent({
  eyebrow,
  headingLine1,
  headingHighlight,
  headingSuffix,
  subheading,
  ctaContact,
  ctaConsultation,
}: LoyaltyHeroContentProps) {
  return (
    <section className="relative overflow-hidden" dir="ltr">
      <div className="relative mx-auto min-h-[480px] max-w-[1800px] sm:min-h-[560px] lg:min-h-[640px]">
        <Image
          src="/images/loyalty-hero-cards.png"
          alt=""
          fill
          priority
          className="object-cover object-right"
        />

        {/* Fade from solid white (text side) to transparent (photo side) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent sm:via-white/70" />

        <div className="relative flex min-h-[480px] items-center px-4 sm:min-h-[560px] sm:px-6 lg:min-h-[640px] lg:px-20">
          <motion.div
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className="max-w-md lg:max-w-lg"
          >
            <motion.p
              variants={revealUp}
              className="font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary sm:text-sm sm:tracking-[0.3em]"
            >
              {eyebrow}
            </motion.p>

            <motion.h1
              variants={revealUp}
              className="mt-3 font-heading font-extrabold text-3xl leading-tight text-foreground sm:mt-4 sm:text-5xl lg:text-6xl"
            >
              {headingLine1}
              <br />
              <span className="text-primary">{headingHighlight}</span> {headingSuffix}
            </motion.h1>

            <motion.div variants={revealUp} className="mt-4 h-px w-16 bg-secondary sm:mt-5 sm:w-24" />

            <motion.p variants={revealUp} className="mt-4 font-body text-sm text-muted-foreground sm:mt-5 sm:text-base">
              {subheading}
            </motion.p>

            <motion.div
              variants={revealUp}
              className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <Button
                href="/contact-us"
                variant="solid"
                icon={<ArrowRight size={16} />}
                className="w-full justify-center sm:w-fit"
              >
                {ctaContact}
              </Button>
              <Button href="/book-appointment" variant="outline" className="w-full justify-center sm:w-fit">
                {ctaConsultation}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}