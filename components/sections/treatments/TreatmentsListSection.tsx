"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TreatmentCard } from "@/components/ui/TreatmentCard";
import { treatmentsMegaMenu } from "@/lib/navigation";
import { treatments } from "@/lib/content/treatments";
import { CategoryTabs } from "@/components/ui/CategoryTabs";

export function TreatmentsListSection() {
  const t = useTranslations("treatmentsList");
  const locale = useLocale() as "en" | "ar";
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState("all");

  // Update selected category when URL changes
  useEffect(() => {
    if (
      categoryParam &&
      treatmentsMegaMenu.some(
        (c) => c.categorySlug === categoryParam,
      )
    ) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory("all");
    }
  }, [categoryParam]);

  const visibleTreatments =
    activeCategory === "all"
      ? treatments
      : treatments.filter(
          (tr) => tr.categorySlug === activeCategory,
        );

  const tabs = useMemo(
    () => [
      {
        id: "all",
        label: t("filterAll"),
      },
      ...treatmentsMegaMenu.map((category) => ({
        id: category.categorySlug,
        label: category.title[locale],
      })),
    ],
    [locale, t],
  );

  return (
    <section
      id="next-section"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={
            <>
              {t("headingPrefix")}{" "}
              <span className="text-primary">
                {t("headingHighlight")}
              </span>
            </>
          }
          subheading={t("subheading")}
        />

        <CategoryTabs
          className="mt-10"
          items={tabs}
          activeId={activeCategory}
          onChange={setActiveCategory}
        />

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