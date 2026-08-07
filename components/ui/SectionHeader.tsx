 "use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { sectionHeadingClasses, sectionEyebrowClasses, sectionDividerClasses, sectionDescriptionClasses } from "@/lib/styles";

interface SectionHeaderProps {
  eyebrow: string;
  heading: ReactNode;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  sides?: "both" | "start";
  align?: "center" | "start";
  dividerColor?: "primary" | "secondary";
  className?: string;
}

const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function SectionHeader({
  eyebrow,
  heading,
  subheading,
  ctaLabel,
  ctaHref,
  sides = "both",
  align = "center",
  dividerColor = "secondary",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const dividerColorClass = dividerColor === "primary" ? "bg-primary" : "bg-secondary";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.16 }}
      className={`max-w-4xl ${isCenter ? "mx-auto text-center" : "text-start"} ${className}`}
    >
      <motion.div
        variants={revealUp}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`mb-4 flex items-center gap-2 ${isCenter ? "justify-center" : "justify-start"}`}
      >
        <div className={`${sectionDividerClasses} ${dividerColorClass}`} />
        <Sparkle size={12} className="text-secondary" fill="currentColor" />
        <p className={`${sectionEyebrowClasses} text-primary`}>{eyebrow}</p>
        {sides === "both" && (
          <>
            <Sparkle size={12} className="text-secondary" fill="currentColor" />
            <div className={`${sectionDividerClasses} ${dividerColorClass}`} />
          </>
        )}
      </motion.div>

      <motion.h2
        variants={revealUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`${sectionHeadingClasses} text-foreground`}
      >
        {heading}
      </motion.h2>

      {subheading && (
        <motion.p
          variants={revealUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`${sectionDescriptionClasses} max-w-2xl ${isCenter ? "mx-auto" : ""}`}
        >
          {subheading}
        </motion.p>
      )}

      {ctaLabel && ctaHref && (
        <motion.div
          variants={revealUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={isCenter ? "mx-auto w-fit" : "w-fit"}
        >
          <Button href={ctaHref} variant="outline" className="mt-6">
            {ctaLabel}
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}