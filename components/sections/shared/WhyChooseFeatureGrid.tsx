"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { cardBaseClasses, cardHeadingClasses, cardDividerClasses, CardDescriptionClasses } from "@/lib/styles";

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface WhyChooseFeatureGridProps {
  features: Feature[];
}

const gridContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function WhyChooseFeatureGrid({ features }: WhyChooseFeatureGridProps) {
  return (
    <motion.div
      variants={gridContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {features.map((feature) => (
        <motion.div
          key={feature.title}
          variants={cardReveal}
          className={`flex gap-4 ${cardBaseClasses} p-4 transition-transform duration-300 hover:-translate-y-1`}
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-2xl bg-white">
            <Image src={feature.icon} alt="" width={26} height={26} />
          </span>
          <div>
            <h3 className={`${cardHeadingClasses}`}>{feature.title}</h3>
            <div className={`${cardDividerClasses}`} />
            <p className={`${CardDescriptionClasses}`}>{feature.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}