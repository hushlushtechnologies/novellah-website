 "use client";

import { useMemo, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DoctorCard } from "@/components/ui/DoctorCard";
import {
  doctors,
  doctorCategories,
  type DoctorCategory,
} from "@/lib/content/doctors";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import { CategoryTabs } from "@/components/ui/CategoryTabs";

export function DoctorsListSection() {
  const t = useTranslations("doctorsList");
  const locale = useLocale() as "en" | "ar";

  const [activeCategory, setActiveCategory] = useState<
    DoctorCategory | "all"
  >("all");

  const visibleDoctors =
    activeCategory === "all"
      ? doctors
      : doctors.filter((doctor) => doctor.category === activeCategory);

  const tabs = useMemo(
    () => [
      {
        id: "all",
        label: t("filterAll"),
      },
      ...doctorCategories.map((category) => ({
        id: category.slug,
        label: category.label,
      })),
    ],
    [t],
  );

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <DecorativeFlower position="top-left" size="lg" opacity={0.9} />
      <DecorativeFlower position="top-right-half" size="lg" opacity={0.9} />

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
          onChange={(id) =>
            setActiveCategory(id as DoctorCategory | "all")
          }
        />

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