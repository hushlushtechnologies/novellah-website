"use client";

import { ReactNode, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { heroDescriptionClasses, heroEyebrowClasses, heroHeadingClasses } from "@/lib/styles";
import heroImage from "@/public/images/hero-treatments.png";

interface HeroContentProps {
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  descriptionBold: string;
  ctaExplore: string;
  ctaBook: string;
  scrollCue: ReactNode;
  watchGalleryButton: ReactNode;
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function HeroContent({
  eyebrow,
  headingLine1,
  headingLine2,
  description,
  descriptionBold,
  ctaExplore,
  ctaBook,
  scrollCue,
  watchGalleryButton,
}: HeroContentProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section className="px-4 pt-4 sm:px-6 lg:px-6">
      <div
        ref={sectionRef}
        className="relative mx-auto grayscale-25 h-[520px] max-w-[1820px] overflow-hidden rounded-2xl sm:h-[590px] sm:rounded-3xl"
      >
        {/* Parallax wrapper (scroll-driven) */}
        <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
          {/* Ken Burns wrapper (slow continuous zoom) */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={heroImage}
              alt=""
              fill
              priority
              placeholder="blur"
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative flex h-full max-w-xl flex-col justify-center gap-4 px-5 sm:gap-6 sm:px-12 lg:px-16"
        >
          <motion.p variants={item} className={heroEyebrowClasses}>
            {eyebrow}
          </motion.p>

          <motion.h1 variants={item} className={`${heroHeadingClasses} font-extrabold text-white`}>
            {headingLine1}
            <br />
            {headingLine2}
          </motion.h1>

          <motion.div variants={item} className="flex items-center gap-2">
            <motion.div
              className="h-1 w-20 origin-left rounded bg-secondary sm:w-36"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            />
            <motion.span
              animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkle size={14} className="text-secondary" fill="currentColor" />
            </motion.span>
          </motion.div>

          <motion.p variants={item} className={heroDescriptionClasses}>
            {description}
            <br />
            <span className="font-semibold">{descriptionBold}</span>
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3 sm:gap-4">
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
              className="w-full justify-center border-secondary bg-white/90 text-secondary transition-colors duration-500 hover:bg-secondary hover:text-white sm:w-fit"
            >
              {ctaBook}
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll cue — floating */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          {scrollCue}
        </motion.div>

        {/* Watch gallery badge — floating */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          {watchGalleryButton}
        </motion.div>
      </div>
    </section>
  );
}