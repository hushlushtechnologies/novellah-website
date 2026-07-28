"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { treatmentsMegaMenu } from "@/lib/navigation";
import { treatments } from "@/lib/content/treatments";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import { TreatmentCard } from "@/components/ui/TreatmentCard";

const trustPoints = [
  { icon: "/images/icons/visible-results.svg", titleKey: "trust1Title", descKey: "trust1Desc" },
  { icon: "/images/icons/safe-proven.svg", titleKey: "trust2Title", descKey: "trust2Desc" },
  { icon: "/images/icons/personalized-care-3.svg", titleKey: "trust3Title", descKey: "trust3Desc" },
  { icon: "/images/icons/premium-experience.svg", titleKey: "trust4Title", descKey: "trust4Desc" },
] as const;

const CARDS_PER_PAGE = 4;

export function SignatureTreatmentsSection() {
  const t = useTranslations("signatureTreatments");
  const locale = useLocale() as "en" | "ar";
  const [activeCategory, setActiveCategory] = useState(treatmentsMegaMenu[3].categorySlug);
  const [page, setPage] = useState(0);

  const categoryTreatments = treatments.filter((tr) => tr.categorySlug === activeCategory);
  const pageCount = Math.max(1, Math.ceil(categoryTreatments.length / CARDS_PER_PAGE));
  const visibleTreatments = categoryTreatments.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  function selectCategory(slug: string) {
    setActiveCategory(slug);
    setPage(0);
  }

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <DecorativeFlower />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={
            <>
              {t("headingLine1")} <span className="text-primary">{t("headingLine2")}</span>
            </>
          }
          subheading={t("subheading")}
          ctaLabel={t("ctaViewAll")}
          ctaHref="/treatments"
        />

        {/* Trust points */}
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.titleKey} className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/40 shadow-soft">
                <Image src={point.icon} alt="" width={18} height={18} />
              </span>
              <div>
                <p className="font-body text-sm font-semibold text-foreground">{t(point.titleKey)}</p>
                <p className="mt-0.5 font-body text-xs text-muted-foreground">{t(point.descKey)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Category tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 rounded-full border border-border bg-card p-2">
          {treatmentsMegaMenu.map((category) => (
            <button
              key={category.categorySlug}
              onClick={() => selectCategory(category.categorySlug)}
              className={`rounded-full px-4 py-2 font-body text-sm font-medium transition-colors ${
                activeCategory === category.categorySlug
                  ? "bg-gradient-primary text-white"
                  : "text-foreground hover:bg-background-light"
              }`}
            >
              {category.title[locale]}
            </button>
          ))}
        </div>

        {/* Treatment cards — now via shared TreatmentCard */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleTreatments.map((treatment) => (
            <TreatmentCard
              key={treatment.slug}
              treatment={treatment}
              locale={locale}
              durationUnit={t("durationUnit")}
              ctaLabel={t("ctaExplore")}
            />
          ))}
        </div>

        {pageCount > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  page === i ? "w-6 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}