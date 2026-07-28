"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TreatmentCard } from "@/components/ui/TreatmentCard";
import { treatmentsMegaMenu } from "@/lib/navigation";
import { treatments } from "@/lib/content/treatments";

export function TreatmentsListSection() {
  const t = useTranslations("treatmentsList");
  const locale = useLocale() as "en" | "ar";
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const visibleTreatments =
    activeCategory === "all"
      ? treatments
      : treatments.filter((tr) => tr.categorySlug === activeCategory);

  return (
    <section id="next-section" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
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
          {treatmentsMegaMenu.map((cat) => (
            <button
              key={cat.categorySlug}
              onClick={() => setActiveCategory(cat.categorySlug)}
              className={`rounded-full px-4 py-2 font-body text-sm font-medium transition-colors ${
                activeCategory === cat.categorySlug
                  ? "bg-gradient-primary text-white"
                  : "text-foreground hover:bg-background-light"
              }`}
            >
              {cat.title[locale]}
            </button>
          ))}
        </div>

        {/* Treatment grid — all matching treatments, no pagination */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleTreatments.map((treatment) => (
            <TreatmentCard
              key={treatment.slug}
              treatment={treatment}
              locale={locale}
              durationUnit={t("durationUnit")}
              ctaLabel={t("ctaViewMore")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}