import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { treatmentsMegaMenu } from "@/lib/navigation";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  cardBaseClasses,
  CardDescriptionClasses,
  cardDividerClasses,
  cardHeadingClasses,
} from "@/lib/styles";

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

        {/* Category grid */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:mt-12 sm:gap-x-6 sm:gap-y-6 sm:grid-cols-2">
          {treatmentsMegaMenu.map((category) => (
            <div
              key={category.categorySlug}
              className={`${cardBaseClasses} flex flex-col overflow-hidden d sm:flex-row sm:min-h-[280px]`}
            >
              <div className="relative h-40 w-full shrink-0 sm:h-auto sm:w-32 md:w-36">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-4 sm:p-5">
                <h3 className={`${cardHeadingClasses}`}>
                  {category.title[locale]}
                </h3>
                <div className={cardDividerClasses} />
                <p className={CardDescriptionClasses}>
                  {category.description[locale]}
                </p>

                <a
                  href={`/treatments/${category.categorySlug}`}
                  className="mt-3 inline-flex items-center gap-1 font-body text-sm font-semibold uppercase text-primary sm:mt-4"
                >
                  {t("ctaExplore")} <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
