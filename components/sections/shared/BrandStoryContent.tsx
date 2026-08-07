"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Sparkle } from "lucide-react";
import { sectionEyebrowClasses, sectionHeadingClasses } from "@/lib/styles";

interface BrandStoryContentProps {
  eyebrow: string;
  philosophyLabel: string;
  philosophyHeadingLine1: string;
  philosophyHeadingLine2: string;
  philosophyHeadingHighlight: string;
  philosophyTagline: string;
  philosophyBody: string;
  visionLabel: string;
  visionBodyPart1: string;
  visionBodyHighlight1: string;
  visionBodyPart2: string;
  visionBodyHighlight2: string;
  ceoLabel: string;
  ceoHeadingLine1: string;
  ceoHeadingLine2From: string;
  ceoHeadingHighlight: string;
  ceoQuote1: string;
  ceoQuote2: string;
  ceoQuote3: string;
  ceoName: string;
  ceoTitle: string;
  bannerHeading: string;
  bannerSubtext: string;
}

const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const trioContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const trioColumn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const imageScaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const ceoTextContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

export function BrandStoryContent({
  eyebrow,
  philosophyLabel,
  philosophyHeadingLine1,
  philosophyHeadingLine2,
  philosophyHeadingHighlight,
  philosophyTagline,
  philosophyBody,
  visionLabel,
  visionBodyPart1,
  visionBodyHighlight1,
  visionBodyPart2,
  visionBodyHighlight2,
  ceoLabel,
  ceoHeadingLine1,
  ceoHeadingLine2From,
  ceoHeadingHighlight,
  ceoQuote1,
  ceoQuote2,
  ceoQuote3,
  ceoName,
  ceoTitle,
  bannerHeading,
  bannerSubtext,
}: BrandStoryContentProps) {
  return (
    <section className="relative overflow-hidden bg-drbg px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={revealUp}
          className="mb-6 flex items-center justify-center gap-2 sm:mb-10"
        >
          <div className="h-1 w-6 rounded-full bg-secondary sm:w-10" />
          <Sparkle size={10} className="text-secondary sm:size-3" fill="currentColor" />
          <p className={`${sectionEyebrowClasses} text-secondary`}>{eyebrow}</p>
          <Sparkle size={10} className="text-secondary sm:size-3" fill="currentColor" />
          <div className="h-1 w-6 rounded-full bg-secondary sm:w-10" />
        </motion.div>

        {/* Philosophy & Vision */}
        <motion.div
          variants={trioContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-center gap-8 rounded-3xl border border-white/10 bg-drbglight p-5 sm:p-10 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-10"
        >
          {/* Philosophy */}
          <motion.div variants={trioColumn} className="text-center">
            <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-drbg sm:h-12 sm:w-12">
              <Image
                src="/images/icons/philosophy.svg"
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain sm:h-5 sm:w-5"
              />
            </span>
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              {philosophyLabel}
            </p>
            <h3 className="mt-3 font-heading text-2xl font-extrabold leading-snug text-white sm:text-3xl">
              {philosophyHeadingLine1}
              <br />
              {philosophyHeadingLine2}
              <br />
              <span className="text-primary">{philosophyHeadingHighlight}</span>
            </h3>

            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="h-1 w-8 rounded-full bg-secondary sm:w-12" />
              <Sparkle size={12} className="text-secondary" fill="currentColor" />
              <div className="h-1 w-8 rounded-full bg-secondary sm:w-12" />
            </div>

            <p className="mt-4 font-body text-sm font-bold text-white">{philosophyTagline}</p>
            <p className="mt-2 font-body text-xs text-white/60">{philosophyBody}</p>
          </motion.div>

          {/* Center image */}
          <motion.div
            variants={imageScaleIn}
            className="relative mx-auto h-56 w-full max-w-sm overflow-hidden rounded-2xl sm:h-72 lg:h-96"
          >
            <Image
              src="/images/philosophy-treatment-room.png"
              alt=""
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Vision */}
          <motion.div variants={trioColumn} className="text-center">
            <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-drbg sm:h-12 sm:w-12">
              <Image
                src="/images/icons/vision.svg"
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain sm:h-5 sm:w-5"
              />
            </span>
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              {visionLabel}
            </p>
            <p className="mt-4 font-body text-sm font-bold leading-relaxed text-white/90">
              {visionBodyPart1}
              <span className="text-primary">{visionBodyHighlight1}</span>
              {visionBodyPart2}
              <span className="text-primary">{visionBodyHighlight2}</span>
            </p>

            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="h-1 w-8 rounded-full bg-secondary sm:w-12" />
              <Sparkle size={12} className="text-secondary" fill="currentColor" />
              <div className="h-1 w-8 rounded-full bg-secondary sm:w-12" />
            </div>
          </motion.div>
        </motion.div>

        {/* CEO Message */}
        <div className="mt-10 grid items-center gap-8 sm:mt-16 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={ceoTextContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div variants={revealUp} className="flex items-center gap-3">
              <p className={` ${sectionEyebrowClasses} text-secondary  `}>{ceoLabel}</p>
              <div className="h-1 max-w-24 flex-1 rounded-full bg-secondary" />
              <Sparkle size={12} className="text-secondary" fill="currentColor" />
            </motion.div>

            <motion.h2 variants={revealUp} className={`${sectionHeadingClasses} text-white`}>
              {ceoHeadingLine1} {ceoHeadingLine2From}{" "}
              <span className="text-secondary">{ceoHeadingHighlight}</span>
            </motion.h2>

            <motion.div variants={revealUp} className="relative mt-6 py-6">
              {/* Top border */}
              <div className="absolute top-0 start-8 end-12 h-px translate-y-1.5 bg-white/10 sm:start-10 sm:end-14" />

              {/* Bottom border */}
              <div className="absolute bottom-0 start-6 end-6 h-px bg-white/10 sm:start-8 sm:end-8" />

              <Quote
                size={32}
                className="absolute -top-2 -left-2  start-0 text-primary/30 sm:size-10"
                fill="currentColor"
              />

              <div className="px-6 sm:px-8 lg:px-10">
                <p className="font-body text-sm text-white/80">{ceoQuote1}</p>
                <p className="mt-4 font-body text-sm text-white/80">{ceoQuote2}</p>
                <p className="mt-4 font-body text-sm text-white/80">{ceoQuote3}</p>
              </div>

              <Quote
                size={32}
                className="absolute -bottom-5 lg:-right-4 end-0 rotate-180 text-primary/30 sm:-bottom-5 sm:size-10"
                fill="currentColor"
              />
            </motion.div>
          </motion.div>

          {/* CEO photo with name badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto h-[320px] w-full max-w-sm overflow-hidden rounded-3xl border-2 border-secondary/50 p-2 sm:h-[420px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image src="/images/dr frame.png" alt="" fill className="object-cover" />
              <div className="absolute inset-x-4 bottom-4 rounded-full bg-primary/90 px-4 py-2.5 text-center backdrop-blur-sm sm:px-6 sm:py-3">
                <p className="font-heading text-lg font-extrabold text-secondary sm:text-xl">
                  {ceoName}
                </p>
                <p className="font-body text-xs text-white">{ceoTitle}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-10 rounded-2xl bg-drmsg px-5 py-6 text-center sm:mt-16 sm:px-6 sm:py-8"
        >
          <h3 className="font-heading text-xl font-bold text-secondary sm:text-2xl lg:text-3xl">
            {bannerHeading}
          </h3>
          <p className="mt-2 font-body text-sm text-white">{bannerSubtext}</p>
        </motion.div>
      </div>
    </section>
  );
}