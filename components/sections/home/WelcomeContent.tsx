"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  cardBaseClasses,
  sectionDescriptionClasses,
  sectionDividerClasses,
  sectionEyebrowClasses,
  sectionHeadingClasses,
} from "@/lib/styles";

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface Stat {
  value: string;
  label: string;
}

interface WelcomeContentProps {
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  description1: string;
  description2: string;
  ctaLearnMore: string;
  ctaExplore: string;
  features: Feature[];
  stats: Stat[];
}

const textContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const featureGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const featureCard = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function WelcomeContent({
  eyebrow,
  headingLine1,
  headingLine2,
  description1,
  description2,
  ctaLearnMore,
  ctaExplore,
  features,
  stats,
}: WelcomeContentProps) {
  return (
    <section id="welcome" className="relative overflow-hidden py-12 lg:py-20">
      {/* Grid row — NOT wrapped in max-w, so the image column can reach the true page edge on lg+ */}
      <div className="grid items-center gap-8 lg:ms-auto lg:grid-cols-2 lg:gap-10 lg:max-w-[95%] 2xl:mx-auto 2xl:max-w-[1600px]">
        {/* Left: text */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="px-4 sm:px-6 lg:ps-8 lg:pe-4 xl:ps-16 xl:pe-6"
        >
          <motion.div variants={revealUp} className="mb-4 flex items-center gap-2">
            <div className={`${sectionDividerClasses} bg-primary`} />
            <Sparkle size={12} className="text-primary" fill="currentColor" />
            <p className={` ${sectionEyebrowClasses} text-primary`}>{eyebrow}</p>
          </motion.div>

          <motion.h2 variants={revealUp} className={`${sectionHeadingClasses} text-foreground`}>
            {headingLine1}
            <br />
            <span className="text-primary">{headingLine2}</span>
          </motion.h2>

          <motion.p variants={revealUp} className={` ${sectionDescriptionClasses} text-muted-foreground`}>
            {description1}
          </motion.p>
          <motion.p variants={revealUp} className={` ${sectionDescriptionClasses} text-muted-foreground`}>
            {description2}
          </motion.p>

          <motion.div
            variants={featureGrid}
            className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-2"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={featureCard}
                className={`${cardBaseClasses} flex items-center gap-3 px-3 py-3 text-start transition-transform duration-300 hover:-translate-y-1 sm:flex-col sm:px-2 sm:text-center`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 sm:mx-auto sm:mb-3 sm:h-12 sm:w-12">
                  <Image src={feature.icon} alt="" width={20} height={20} />
                </span>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">{feature.title}</p>
                  <p className="mt-0.5 font-body text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={revealUp}
            className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Button
              href="/about-us"
              variant="solid"
              icon={<ArrowRight size={16} />}
              className="w-full justify-center sm:w-fit"
            >
              {ctaLearnMore}
            </Button>
            <Button
              href="/treatments"
              variant="outline"
              className="w-full justify-center border-secondary sm:w-fit"
            >
              {ctaExplore}
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: clinic image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative h-[220px] border-primary/60 sm:h-[300px] lg:h-[420px] xl:h-[460px] lg:rounded-tl-[90px] lg:rounded-bl-[90px] lg:border-l-2 lg:border-t-2 lg:border-b-2 lg:py-4"
        >
          <div className="relative h-full w-full overflow-hidden lg:rounded-tl-[80px] lg:rounded-bl-[80px]">
            <Image
              src="/images/welcome-clinics.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 grid grid-cols-2 gap-4 rounded-2xl bg-background-light p-5 sm:mt-14 sm:grid-cols-4 sm:gap-0 sm:p-6 sm:divide-x sm:divide-border lg:p-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: "easeOut" }}
              className="text-center sm:px-4"
            >
              <p className="font-heading font-bold text-xl text-primary sm:text-2xl lg:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 font-body text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}