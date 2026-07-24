 "use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { doctors, doctorCategories, type DoctorCategory } from "@/lib/content/doctors";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";

export function DoctorsListSection() {
  const t = useTranslations("doctorsList");
  const locale = useLocale() as "en" | "ar";
  const [activeCategory, setActiveCategory] = useState<DoctorCategory | "all">("all");

  const visibleDoctors =
    activeCategory === "all" ? doctors : doctors.filter((d) => d.category === activeCategory);

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
              <DecorativeFlower position="top-left" size="lg" opacity={0.9} />
              <DecorativeFlower position="top-right-half" size="lg" opacity={0.9} />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={
            <>
              {t("headingPrefix")} <span className="text-primary">{t("headingHighlight")}</span>
            </>
          }
          subheading={t("subheading")}
        />

        {/* Category filter tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 rounded-full border border-border p-2 sm:mx-auto sm:w-fit">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-2 font-body text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-gradient-primary text-white"
                : "text-foreground hover:bg-background-light"
            }`}
          >
            {t("filterAll")}
          </button>
          {doctorCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`rounded-full px-4 py-2 font-body text-sm font-medium transition-colors ${
                activeCategory === cat.slug
                  ? "bg-gradient-primary text-white"
                  : "text-foreground hover:bg-background-light"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Doctor grid — all matching doctors, no pagination */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.slug}
              doctor={doctor}
              locale={locale}
              experienceLabel={t("experienceLabel")}
              ctaLabel={t("ctaProfile")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}