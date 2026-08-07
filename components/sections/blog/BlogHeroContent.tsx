 "use client";

import { motion, easeOut, type Variants } from "framer-motion";
import { ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";

interface BlogHeroContentProps {
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  subheading: string;
  ctaBook: string;
  ctaWhatsapp: string;
  whatsappHref: string;
}

const textContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const revealUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export function BlogHeroContent({
  eyebrow,
  headingLine1,
  headingLine2,
  subheading,
  ctaBook,
  ctaWhatsapp,
  whatsappHref,
}: BlogHeroContentProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <DecorativeFlower />

      <motion.div
        variants={textContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-3xl text-center"
      >
        <motion.p
          variants={revealUp}
          className="font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary sm:text-sm"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          variants={revealUp}
          className="mt-4 font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          {headingLine1}
          <br />
          {headingLine2}
        </motion.h1>

        <motion.div
          variants={revealUp}
          className="mx-auto mt-5 flex items-center justify-center gap-3"
        >
          <div className="h-1 w-24 rounded-full bg-secondary sm:w-36" />
          <Sparkle
            size={12}
            className="text-secondary"
            fill="currentColor"
          />
          <div className="h-1 w-24 rounded-full bg-secondary sm:w-36" />
        </motion.div>

        <motion.p
          variants={revealUp}
          className="mx-auto mt-5 font-body text-sm text-muted-foreground sm:text-base"
        >
          {subheading}
        </motion.p>

        <motion.div
          variants={revealUp}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Button
            href="/book-appointment"
            variant="solid"
            icon={<ArrowRight size={16} />}
            className="w-full justify-center sm:w-fit"
          >
            {ctaBook}
          </Button>

          <Button
            href={whatsappHref}
            variant="outline"
            className="w-full justify-center sm:w-fit"
          >
            {ctaWhatsapp}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}