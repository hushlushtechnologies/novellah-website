"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkle, Award, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";

const iconMap = {
  Award,
  ShieldCheck,
  Clock,
} as const;

interface Point {
  iconKey: keyof typeof iconMap;
  title: string;
  desc: string;
}

interface ContactHeroContentProps {
  eyebrow: string;
  headingLine1: string;
  headingHighlight: string;
  subheading: string;
  ctaBook: string;
  ctaWhatsapp: string;
  whatsappHref: string;
  points: Point[];
}

const textContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const pointsGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const pointItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function ContactHeroContent({
  eyebrow,
  headingLine1,
  headingHighlight,
  subheading,
  ctaBook,
  ctaWhatsapp,
  whatsappHref,
  points,
}: ContactHeroContentProps) {
  return (
    <section className="relative overflow-hidden pb-16 sm:pb-24 lg:pb-32" dir="ltr">
      <DecorativeFlower position="top-left" size="lg" opacity={0.5} />

      <div className="mx-auto max-w-[1800px]">
        <div className="grid items-center gap-8 pt-8 sm:pt-10 lg:grid-cols-2 lg:items-start lg:gap-12 lg:pt-0">
          {/* Left: text */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 px-4 pb-4 sm:px-6 sm:pb-6 lg:ps-8 lg:pe-4 lg:pb-20 lg:pt-12 xl:ps-16 xl:pe-6 xl:pb-24 xl:pt-16"
          >
            <motion.p
              variants={revealUp}
              className="font-body text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:text-sm"
            >
              {eyebrow}
            </motion.p>

            <motion.h1
              variants={revealUp}
              className="mt-4 font-heading font-extrabold text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              {headingLine1}
              <br />
              <span className="text-primary">{headingHighlight}</span>
            </motion.h1>

            <motion.div variants={revealUp} className="mt-5 flex items-center gap-2">
              <div className="h-1 rounded-full w-16 bg-secondary sm:w-24" />
              <Sparkle size={12} className="text-secondary" fill="currentColor" />
            </motion.div>

            <motion.p variants={revealUp} className="mt-5 font-body text-sm text-muted-foreground sm:text-base">
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

          {/* Right: reception photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-[240px] sm:h-[320px] lg:h-[460px] xl:h-[500px] lg:rounded-tl-[100px]"
          >
            <div className="relative h-full w-full overflow-hidden lg:rounded-tl-[100px]">
              <Image
                src="/images/contact-hero-reception.png"
                alt=""
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3-point feature row — overlapping the image's bottom edge */}
      <div className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:-mt-14 sm:px-6 lg:-mt-16 lg:px-8">
        <motion.div
          variants={pointsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-1 gap-5 rounded-2xl border border-border bg-background-light p-5 shadow-card sm:grid-cols-3 sm:gap-6 sm:p-8"
        >
          {points.map((point) => {
            const Icon = iconMap[point.iconKey];
            return (
              <motion.div key={point.title} variants={pointItem} className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/40 bg-white sm:h-12 sm:w-12">
                  <Icon size={18} className="text-secondary" />
                </span>
                <div>
                  <p className="font-heading text-base font-extrabold text-primary">{point.title}</p>
                  <div className="mt-1 mb-1.5 h-px w-6 bg-secondary" />
                  <p className="font-body text-sm text-muted-foreground">{point.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}