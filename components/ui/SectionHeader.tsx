import { ReactNode } from "react";
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
    <div className={`max-w-4xl ${isCenter ? "mx-auto text-center" : "text-start"} ${className}`}>
      <div className={`mb-4 flex items-center gap-2 ${isCenter ? "justify-center" : "justify-start"}`}>
        <div className={`${sectionDividerClasses} ${dividerColorClass}`} />
        <Sparkle size={12} className="text-secondary" fill="currentColor" />
        <p className={`${sectionEyebrowClasses} text-primary`}>{eyebrow}</p>
        {sides === "both" && (
          <>
            <Sparkle size={12} className="text-secondary" fill="currentColor" />
            <div className={`${sectionDividerClasses} ${dividerColorClass}`} />
          </>
        )}
      </div>

      <h2 className={`${sectionHeadingClasses} text-foreground`}>{heading}</h2>

      {subheading && (
        <p className={`${sectionDescriptionClasses} max-w-2xl ${isCenter ? "mx-auto" : ""}`}>
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