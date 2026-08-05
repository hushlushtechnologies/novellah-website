 "use client";

import { useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { treatmentsMegaMenu } from "@/lib/navigation";
import { treatments } from "@/lib/content/treatments";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import { TreatmentCard } from "@/components/ui/TreatmentCard";
import { CategoryTabs } from "@/components/ui/CategoryTabs";

const trustPoints = [
  {
    icon: "/images/icons/visible-results.svg",
    titleKey: "trust1Title",
    descKey: "trust1Desc",
  },
  {
    icon: "/images/icons/safe-proven.svg",
    titleKey: "trust2Title",
    descKey: "trust2Desc",
  },
  {
    icon: "/images/icons/personalized-care-3.svg",
    titleKey: "trust3Title",
    descKey: "trust3Desc",
  },
  {
    icon: "/images/icons/premium-experience.svg",
    titleKey: "trust4Title",
    descKey: "trust4Desc",
  },
] as const;

const CARDS_PER_PAGE = 4;

export function SignatureTreatmentsSection() {
  const t = useTranslations("signatureTreatments");
  const locale = useLocale() as "en" | "ar";
  const [activeCategory, setActiveCategory] = useState(
    treatmentsMegaMenu[3].categorySlug,
  );
  const [page, setPage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const categoryTabs = treatmentsMegaMenu.map((category) => ({
    id: category.categorySlug,
    label: category.title[locale],
  }));

  const categoryTreatments = treatments.filter(
    (tr) => tr.categorySlug === activeCategory,
  );
  const pageCount = Math.max(
    1,
    Math.ceil(categoryTreatments.length / CARDS_PER_PAGE),
  );
  const pages = Array.from({ length: pageCount }, (_, i) =>
    categoryTreatments.slice(i * CARDS_PER_PAGE, i * CARDS_PER_PAGE + CARDS_PER_PAGE),
  );

  function selectCategory(slug: string) {
    setActiveCategory(slug);
    setPage(0);
    scrollRef.current?.scrollTo({ left: 0 });
  }

  function scrollToPage(i: number) {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({ left: i * container.clientWidth, behavior: "smooth" });
    setPage(i);
  }

  function handleScroll() {
    const container = scrollRef.current;
    if (!container || container.clientWidth === 0) return;
    const newPage = Math.round(container.scrollLeft / container.clientWidth);
    setPage(newPage);
  }

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <DecorativeFlower />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={
            <>
              {t("headingLine1")}{" "}
              <span className="text-primary">{t("headingLine2")}</span>
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
                <p className="font-body text-sm font-semibold text-foreground">
                  {t(point.titleKey)}
                </p>
                <p className="mt-2 font-body text-xs text-muted-foreground">
                  {t(point.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Category tabs */}
        <CategoryTabs
          className="mt-8 sm:mt-12"
          items={categoryTabs}
          activeId={activeCategory}
          onChange={selectCategory}
        />

        {/* Mobile: one-card-at-a-time swipe carousel */}
        <div
          className="
            mt-10 -mx-4 flex snap-x snap-mandatory gap-4
            overflow-x-auto scroll-smooth px-4 scrollbar-hide
            sm:hidden
          "
        >
          {categoryTreatments.map((treatment) => (
            <div key={treatment.slug} className="w-[82%] shrink-0 snap-center">
              <TreatmentCard
                treatment={treatment}
                locale={locale}
                durationUnit={t("durationUnit")}
                ctaLabel={t("ctaExplore")}
                className="h-full"
              />
            </div>
          ))}
        </div>

        {/* Tablet/desktop: page-at-a-time swipe/drag carousel, dots synced both ways */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            mt-10 hidden snap-x snap-mandatory gap-6
            overflow-x-auto scroll-smooth scrollbar-hide sm:flex
          "
        >
          {pages.map((pageItems, i) => (
            <div
              key={i}
              className="grid w-full shrink-0 snap-start grid-cols-2 gap-6 lg:grid-cols-4"
            >
              {pageItems.map((treatment) => (
                <TreatmentCard
                  key={treatment.slug}
                  treatment={treatment}
                  locale={locale}
                  durationUnit={t("durationUnit")}
                  ctaLabel={t("ctaExplore")}
                  className="h-full"
                />
              ))}
            </div>
          ))}
        </div>

        {pageCount > 1 && (
          <div className="mt-8 hidden justify-center gap-2 sm:flex">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
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