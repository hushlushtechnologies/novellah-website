import Image from "next/image";
import { Clock, Droplet, ArrowRight } from "lucide-react";
import type { Treatment } from "@/lib/content/treatments";

interface TreatmentCardProps {
  treatment: Treatment;
  locale: "en" | "ar";
  durationUnit: string;
  ctaLabel: string;
}

export function TreatmentCard({ treatment, locale, durationUnit, ctaLabel }: TreatmentCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative h-48 w-full">
        <Image src={treatment.image} alt="" fill className="object-cover" />
      </div>
      <div className="p-5">
    
<h3 className="font-heading text-lg font-bold text-primary">{treatment.title[locale]}</h3>
<div className="mt-1 mb-3 h-px w-8 bg-secondary" />
<p className="font-body text-sm text-muted-foreground">{treatment.description[locale]}</p>
<div className="mt-4 flex items-center gap-4 font-body text-xs font-medium text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock size={14} /> {treatment.durationMinutes} {durationUnit}
          </span>
          <span className="flex items-center gap-1">
            <Droplet size={14} /> {treatment.skinType[locale]}
          </span>
        </div>
        
        <a  href={`/treatments/${treatment.categorySlug}/${treatment.slug}`}
          className="mt-4 inline-flex items-center gap-1 font-body text-sm font-semibold uppercase text-primary"
        >
          {ctaLabel} <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}