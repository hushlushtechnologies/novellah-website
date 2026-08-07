 import { getTranslations, getLocale } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { treatmentsMegaMenu } from "@/lib/navigation";
import { CategoryTreatmentsGrid } from "./CategoryTreatmentsGrid";

export async function CategoryTreatmentsSection() {
  const t = await getTranslations("categoryTreatments");
  const locale = (await getLocale()) as "en" | "ar";

  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:pt-20">
      <div className="mx-auto max-w-6xl">
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

        <CategoryTreatmentsGrid
          categories={treatmentsMegaMenu.map((category) => ({
            slug: category.categorySlug,
            image: category.image,
            title: category.title[locale],
            description: category.description[locale],
          }))}
          ctaExplore={t("ctaExplore")}
        />
      </div>
    </section>
  );
}