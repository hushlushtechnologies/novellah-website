"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Quote, Sparkle } from "lucide-react";

interface Point {
  icon: string;
  title: string;
  desc: string;
}

interface WhatIsRewardsContentProps {
  quote: string;
  eyebrow: string;
  headingLine1Prefix: string;
  headingLine1Highlight: string;
  headingLine2: string;
  description: string;
  points: Point[];
}

const imageScaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const textContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const revealUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const pointsGrid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const pointItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function WhatIsRewardsContent({
  quote,
  eyebrow,
  headingLine1Prefix,
  headingLine1Highlight,
  headingLine2,
  description,
  points,
}: WhatIsRewardsContentProps) {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: framed image with quote overlay */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageScaleIn}
            className="relative h-[380px] w-full overflow-hidden rounded-3xl border border-secondary/40 p-2 sm:h-[460px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image src="/images/loyalty-card.png" alt="" fill className="object-cover" />
              <div className="absolute inset-x-4 bottom-4 flex items-start gap-3 rounded-2xl bg-primary/90 p-5 backdrop-blur-sm">
                <Quote size={28} className="shrink-0 text-secondary/70" fill="currentColor" />
                <p className="font-body text-sm font-medium text-white">{quote}</p>
              </div>
            </div>
          </motion.div>

          {/* Right: text + feature grid */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={revealUp} className="flex items-center gap-2">
              <div className="h-1 rounded-full w-10 bg-primary" />
              <Sparkle size={10} className="text-primary sm:size-3" fill="currentColor" />
              <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
            </motion.div>

            <motion.h2
              variants={revealUp}
              className="mt-4 font-heading font-extrabold text-4xl leading-tight text-foreground sm:text-5xl"
            >
              {headingLine1Prefix} <span className="text-primary">{headingLine1Highlight}</span>
              <br />
              {headingLine2}
            </motion.h2>

            <motion.p variants={revealUp} className="mt-4 font-body font-medium text-sm text-muted-foreground">
              {description}
            </motion.p>

            <motion.div
              variants={pointsGrid}
              className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
            >
              {points.map((point) => (
                <motion.div key={point.title} variants={pointItem} className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/40">
                    <Image src={point.icon} alt="" width={20} height={20} />
                  </span>
                  <div>
                    <p className="font-heading text-base font-bold text-primary">{point.title}</p>
                    <div className="mt-1 mb-1.5 h-1 rounded-full w-6 bg-secondary" />
                    <p className="font-body text-sm text-muted-foreground">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}