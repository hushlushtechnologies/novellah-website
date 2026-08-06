 "use client";

import { useEffect, useRef, useState } from "react";
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
  const [mobileIndex, setMobileIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const exactResults = treatmentSlug
    ? beforeAfterResults.filter((r) => r.treatmentSlug === treatmentSlug)
    : beforeAfterResults;

  let results = exactResults;
  let isFallback = false;

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

  // Track which card is centered in the mobile carousel as the user swipes
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    function handleScroll() {
      if (!el) return;
      const cardWidth = el.firstElementChild
        ? (el.firstElementChild as HTMLElement).offsetWidth + 16 // + gap
        : 1;
      const index = Math.round(el.scrollLeft / cardWidth);
      setMobileIndex(Math.min(index, results.length - 1));
    }

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [results.length]);

  function scrollToCard(index: number) {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement | undefined;
    if (card) {
      el.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }
  }

  function getCategoryLabel(resultTreatmentSlug: string): string | null {
    const treatment = treatments.find((tr) => tr.slug === resultTreatmentSlug);
    if (!treatment) return null;
    const category = treatmentsMegaMenu.find(
      (c) => c.categorySlug === treatment.categorySlug,
    );
    return category?.title[locale] ?? null;
  }

  function renderCard(result: (typeof results)[number]) {
    const categoryLabel = getCategoryLabel(result.treatmentSlug);
    return (
      <div key={result.id} className={`overflow-hidden ${cardBaseClasses}`}>
        <div className="relative h-64 w-full">
          <Image
            src={result.image}
            alt={result.title[locale]}
            fill
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
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

        {/* Mobile: horizontal snap-scroll carousel, all results, no pagination */}
        <div
          ref={carouselRef}
          className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {results.map((result) => (
            <div key={result.id} className="w-[85%] shrink-0 snap-center">
              {renderCard(result)}
            </div>
          ))}
        </div>

        {/* Mobile carousel dots — driven by scroll position, not page state */}
        {results.length > 1 && (
          <div className="mt-6 flex justify-center gap-2 sm:hidden">
            {results.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full cursor-pointer transition-all ${
                  mobileIndex === i ? "w-6 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        )}

        {/* Tablet/Desktop: existing paginated grid, unchanged */}
        <div className="mt-12 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {visibleResults.map((result) => renderCard(result))}
        </div>

        {pageCount > 1 && (
          <div className="mt-10 hidden justify-center gap-2 sm:flex">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
                className={`h-2 rounded-full cursor-pointer transition-all ${
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