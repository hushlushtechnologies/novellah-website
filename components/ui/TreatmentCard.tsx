 import Image from "next/image";
import { Clock, Droplet, ArrowRight } from "lucide-react";
import type { Treatment } from "@/lib/content/treatments";
import { cardBaseClasses, CardDescriptionClasses, cardDividerClasses, cardHeadingClasses } from "@/lib/styles";

interface TreatmentCardProps {
  treatment: Treatment;
  locale: "en" | "ar";
  durationUnit: string;
  ctaLabel: string;
  className?: string;
}

export function TreatmentCard({
  treatment,
  locale,
  durationUnit,
  ctaLabel,
  className = "",
}: TreatmentCardProps) {
  return (
    <div
      className={`flex h-full flex-col overflow-hidden ${cardBaseClasses} ${className}`}
    >
      <div className="relative h-48 w-full shrink-0">
        <Image src={treatment.image} alt="" fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className={`${cardHeadingClasses}`}>
          {treatment.title[locale]}
        </h3>
        <div className={cardDividerClasses} />
        <p className={`${CardDescriptionClasses} line-clamp-2 sm:line-clamp-3`}>
          {treatment.description[locale]}
        </p>
        <div className="mt-4 flex items-center gap-4 font-body text-xs font-medium text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock size={14} /> {treatment.durationMinutes} {durationUnit}
          </span>
          <span className="flex items-center gap-1">
            <Droplet size={14} /> {treatment.skinType[locale]}
          </span>
        </div>

        
         <a href={`/treatments/${treatment.categorySlug}/${treatment.slug}`}
          className="mt-auto inline-flex items-center gap-1 pt-4 font-body text-sm font-semibold uppercase text-primary"
        >
          {ctaLabel} <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}