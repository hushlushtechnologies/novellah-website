"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FormSuccessStateProps {
  heading: string;
  lines: string[];
  buttonLabel: string;
  buttonHref: string;
  footerNote: string;
  /** Optional custom image — replaces the default SVG animation when provided */
  imageSrc?: string;
  imageAlt?: string;
}

export function FormSuccessState({
  heading,
  lines,
  buttonLabel,
  buttonHref,
  footerNote,
  imageSrc,
  imageAlt = "",
}: FormSuccessStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-border bg-card p-8 text-center sm:p-10"
    >
<div className="flex justify-center">
  {imageSrc ? (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "backOut" }}
      className="relative h-32 w-52 sm:h-36 sm:w-64"
    >
      <Image src={imageSrc} alt={imageAlt} fill sizes="256px" className="object-contain" />
    </motion.div>
  ) : (
    <SuccessIllustration />
  )}
</div>

      <h2 className="mt-6 font-heading text-2xl font-bold uppercase tracking-wide text-primary sm:text-3xl">
        {heading}
      </h2>

      <div className="mx-auto mt-4 max-w-sm space-y-3">
        {lines.map((line, i) => (
          <p key={i} className="font-body text-sm text-muted-foreground sm:text-base">
            {line}
          </p>
        ))}
      </div>

      <Button href={buttonHref} variant="solid" className="mx-auto mt-8 w-fit">
        {buttonLabel} <ArrowRight size={16} />
      </Button>

      <p className="mt-4 flex items-center justify-center gap-2 font-body text-xs text-muted-foreground">
        <ShieldCheck size={14} className="text-secondary" />
        {footerNote}
      </p>
    </motion.div>
  );
}

function SuccessIllustration() {
  return (
    <svg viewBox="0 0 260 160" className="h-32 w-auto sm:h-36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M14,120 C45,95 55,150 90,125 C115,107 80,80 105,68 C135,54 150,45 175,30"
        stroke="#4ADE80"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 9"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
      <motion.g
        initial={{ opacity: 0, scale: 0.6, x: -6, y: 6 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ delay: 0.9, duration: 0.35, ease: "backOut" }}
      >
        <path d="M172,10 L235,32 L182,62 L172,10Z" fill="#7A1E1E" />
        <path d="M172,10 L235,32 L200,40 L172,10Z" fill="#9C3A3A" />
        <path d="M172,10 L200,40 L182,62 L172,10Z" fill="#5E1616" />
      </motion.g>
    </svg>
  );
}