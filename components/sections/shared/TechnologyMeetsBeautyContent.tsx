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

interface Point {
  icon: string;
  title: string;
  desc: string;
}

interface TechnologyMeetsBeautyContentProps {
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  description1: string;
  description2: string;
  ctaLearnMore: string;
  ctaConnect: string;
  points: Point[];
}

const textContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const pointGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const pointCard = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// Splits "Word rest of line" into a highlighted first word + the remainder
function splitFirstWord(line: string) {
  const [first, ...rest] = line.split(" ");
  return { first, rest: rest.join(" ") };
}

export function TechnologyMeetsBeautyContent({
  eyebrow,
  headingLine1,
  headingLine2,
  description1,
  description2,
  ctaLearnMore,
  ctaConnect,
  points,
}: TechnologyMeetsBeautyContentProps) {
  const line1 = splitFirstWord(headingLine1);
  const line2 = splitFirstWord(headingLine2);

  return (
    <section className="relative overflow-hidden py-12 lg:pb-20" dir="ltr">
      <Image
        src="/images/decorative/swirl-welcome.png"
        alt=""
        width={707}
        height={1692}
        aria-hidden
        dir="ltr"
        className="pointer-events-none absolute -translate-x-1/2 start-0 top-0 -z-10 hidden w-auto opacity-90 md:block"
        style={{ height: "100%" }}
      />

      <div className="lg:ms-auto lg:max-w-[95%] grid items-center gap-8 lg:grid-cols-2 lg:gap-12 2xl:mx-auto 2xl:max-w-[1600px]">
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
            <span className="text-primary">{line1.first}</span> {line1.rest}
            <br />
            <span className="text-primary">{line2.first}</span> {line2.rest}
          </motion.h2>

          <motion.p variants={revealUp} className={` ${sectionDescriptionClasses} text-muted-foreground`}>
            {description1}
          </motion.p>
          <motion.p variants={revealUp} className={` ${sectionDescriptionClasses} text-muted-foreground`}>
            {description2}
          </motion.p>

          <motion.div
            variants={revealUp}
            className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Button
              href="/about-us#our-story"
              variant="solid"
              icon={<ArrowRight size={16} />}
              className="w-full justify-center sm:w-fit"
            >
              {ctaLearnMore}
            </Button>
            <Button
              href="/contact-us"
              variant="outline"
              className="w-full justify-center border-secondary sm:w-fit"
            >
              {ctaConnect}
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
          <div className="relative h-full w-full overflow-hidden lg:rounded-tl-[90px] lg:rounded-bl-[90px]">
            <Image
              src="/images/technology-treatment-room.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Trust points — 4 columns */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={pointGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-4 sm:gap-6"
        >
          {points.map((point) => (
            <motion.div
              key={point.title}
              variants={pointCard}
              className={`${cardBaseClasses} p-5 text-center transition-transform duration-300 hover:-translate-y-1`}
            >
              <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center">
                <Image src={point.icon} alt="" width={20} height={20} />
              </span>
              <p className="font-body text-sm font-bold text-foreground">{point.title}</p>
              <p className="mt-1 font-body text-xs text-muted-foreground">{point.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}