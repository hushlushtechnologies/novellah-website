import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import { TreatmentCard } from "@/components/ui/TreatmentCard";
import { treatments, type Treatment } from "@/lib/content/treatments";

export async function RelatedTreatmentsSection({
  currentSlug,
  categorySlug,
  locale,
}: {
  currentSlug: string;
  categorySlug: string;
  locale: "en" | "ar";
}) {
  const t = await getTranslations("relatedTreatments");
  const tSignature = await getTranslations("signatureTreatments");

  const related = treatments
    .filter((tr) => tr.categorySlug === categorySlug && tr.slug !== currentSlug)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <DecorativeFlower position="top-left" size="lg" opacity={0.5} />

      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={t("eyebrow")} heading={t("heading")} />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((treatment) => (
            <TreatmentCard
              key={treatment.slug}
              treatment={treatment}
              locale={locale}
              durationUnit={tSignature("durationUnit")}
              ctaLabel={tSignature("ctaExplore")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}