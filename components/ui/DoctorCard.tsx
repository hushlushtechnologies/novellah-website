import Image from "next/image";
import { ArrowRight, Star, GraduationCap } from "lucide-react";
import type { Doctor } from "@/lib/content/doctors";

interface DoctorCardProps {
  doctor: Doctor;
  locale: "en" | "ar";
  experienceLabel: string;
  ctaLabel: string;
}

export function DoctorCard({ doctor, locale, experienceLabel, ctaLabel }: DoctorCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative h-52 w-full sm:h-64">
        <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-heading text-base font-extrabold text-primary sm:text-lg">
          {doctor.name}
        </h3>
        <div className="mt-1 mb-2 h-1 w-8 rounded-full bg-secondary sm:mb-3" />
        <p className="font-body text-sm font-semibold text-secondary">{doctor.title[locale]}</p>
        <p className="mt-1 font-body text-sm text-muted-foreground">{doctor.specialty[locale]}</p>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-3 sm:mt-4 sm:pt-4">
          <div className="flex items-center gap-2">
            <Star size={16} className="text-secondary" />
            <div>
              <p className="font-body text-xs font-semibold text-foreground">
                {doctor.experienceYears}+ Years
              </p>
              <p className="font-body text-[11px] text-muted-foreground">{experienceLabel}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap size={16} className="text-secondary" />
            <div>
              <p className="font-body text-xs font-semibold text-foreground">
                {doctor.qualification}
              </p>
              <p className="font-body text-[11px] text-muted-foreground">
                {doctor.qualificationField[locale]}
              </p>
            </div>
          </div>
        </div>

        
         <a href={`/our-doctors/${doctor.slug}`}
          className="mt-3 inline-flex items-center gap-1 font-body text-sm font-semibold uppercase text-primary sm:mt-4"
        >
          {ctaLabel} <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}