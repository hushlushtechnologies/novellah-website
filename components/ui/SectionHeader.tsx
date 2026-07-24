 import { ReactNode } from "react";
import { Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface SectionHeaderProps {
  eyebrow: string;
  heading: ReactNode;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  sides?: "both" | "start";
  align?: "center" | "start";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  subheading,
  ctaLabel,
  ctaHref,
  sides = "both",
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`max-w-4xl ${isCenter ? "mx-auto text-center" : "text-start"} ${className}`}>
      <div className={`mb-4 flex items-center gap-2 ${isCenter ? "justify-center" : "justify-start"}`}>
        <div className="h-1 w-10 rounded-full bg-secondary" />
        <Sparkle size={12} className="text-secondary" fill="currentColor" />
        <p className="font-body text-xs font-semibold uppercase tracking-[0.6em] text-primary">
          {eyebrow}
        </p>
        {sides === "both" && (
          <>
            <Sparkle size={12} className="text-secondary" fill="currentColor" />
            <div className="h-1 w-10 rounded-full bg-secondary" />
          </>
        )}
      </div>

      <h2 className="font-heading text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
        {heading}
      </h2>

      {subheading && (
        <p className={`mt-4 max-w-2xl font-body text-sm text-muted-foreground sm:text-base ${isCenter ? "mx-auto" : ""}`}>
          {subheading}
        </p>
      )}

      {ctaLabel && ctaHref && (
        <Button href={ctaHref} variant="outline" className={`mt-6 ${isCenter ? "mx-auto" : ""}`}>
          {ctaLabel}
        </Button>
      )}
    </div>
  );
}