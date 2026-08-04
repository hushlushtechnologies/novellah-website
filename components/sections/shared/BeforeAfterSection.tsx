"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { beforeAfterResults } from "@/lib/content/beforeAfter";
import { treatments } from "@/lib/content/treatments";
import { treatmentsMegaMenu } from "@/lib/navigation";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import { cardBaseClasses, CardDescriptionClasses, cardDividerClasses, cardHeadingClasses } from "@/lib/styles";

const CARDS_PER_PAGE = 4;

interface BeforeAfterSectionProps {
  treatmentSlug?: string;
}

export function BeforeAfterSection({ treatmentSlug }: BeforeAfterSectionProps) {
  const t = useTranslations("beforeAfter");
  const locale = useLocale() as "en" | "ar";
  const [page, setPage] = useState(0);

  // Tier 1: exact treatment match
  const exactResults = treatmentSlug
    ? beforeAfterResults.filter((r) => r.treatmentSlug === treatmentSlug)
    : beforeAfterResults;

  let results = exactResults;
  let isFallback = false;

  // Tier 2: same-category fallback, only if no exact matches and a
  // treatmentSlug was actually passed (unfiltered usage skips this entirely)
  if (treatmentSlug && exactResults.length === 0) {
    const currentTreatment = treatments.find((tr) => tr.slug === treatmentSlug);
    if (currentTreatment) {
      const sameCategorySlugs = treatments
        .filter((tr) => tr.categorySlug === currentTreatment.categorySlug)
        .map((tr) => tr.slug);

      const categoryResults = beforeAfterResults.filter((r) =>
        sameCategorySlugs.includes(r.treatmentSlug),
      );

      if (categoryResults.length > 0) {
        results = categoryResults;
        isFallback = true;
      }
    }
  }

  if (results.length === 0) return null;

  const pageCount = Math.max(1, Math.ceil(results.length / CARDS_PER_PAGE));
  const visibleResults = results.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE,
  );

  function getCategoryLabel(resultTreatmentSlug: string): string | null {
    const treatment = treatments.find((tr) => tr.slug === resultTreatmentSlug);
    if (!treatment) return null;
    const category = treatmentsMegaMenu.find(
      (c) => c.categorySlug === treatment.categorySlug,
    );
    return category?.title[locale] ?? null;
  }

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <DecorativeFlower position="top-right" size="lg" opacity={0.9} />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          align="start"
          heading={
            <>
              {t("headingLine1")}{" "}
              <span className="text-primary">{t("headingLine2")}</span>
            </>
          }
          subheading={isFallback ? t("subheadingFallback") : t("subheading")}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleResults.map((result) => {
            const categoryLabel = getCategoryLabel(result.treatmentSlug);

            return (
              <div key={result.id} className={`overflow-hidden ${cardBaseClasses}`}>
                <div className="relative h-64 w-full">
                  <Image
                    src={result.image}
                    alt={result.title[locale]}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  {/* <span className="absolute start-3 top-3 rounded-full bg-white/95 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-wide text-foreground">
                    {t("beforeLabel")}
                  </span>
                  <span className="absolute end-3 top-3 rounded-full bg-white/95 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-wide text-foreground">
                    {t("afterLabel")}
                  </span> */}
                </div>

                <div className="p-5">
                  <h3 className={cardHeadingClasses}>{result.title[locale]}</h3>
                  <div className={cardDividerClasses} />
                  <p className={CardDescriptionClasses}>{result.description[locale]}</p>

                  {categoryLabel && (
                    <>
                      <div className="mt-4 border-t border-border pt-3" />
                      <span className="font-body text-xs font-semibold uppercase tracking-wide text-secondary">
                        {categoryLabel}
                      </span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {pageCount > 1 && (
          <div className="mt-10 flex justify-center gap-2">
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