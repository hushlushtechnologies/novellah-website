import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import { TreatmentCard } from "@/components/ui/TreatmentCard";
import { treatments } from "@/lib/content/treatments";
import type { Doctor } from "@/lib/content/doctors";

export async function DoctorTreatmentsSection({
  doctor,
  locale,
}: {
  doctor: Doctor;
  locale: "en" | "ar";
}) {
  const t = await getTranslations("doctorTreatments");

  const relatedTreatments = treatments.filter((tr) =>
    doctor.treatmentCategorySlugs.includes(tr.categorySlug)
  );

  if (relatedTreatments.length === 0) return null;

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <DecorativeFlower position="top-left" size="lg" opacity={0.5} />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={
            <>
              {t("headingLine1")}
              <br />
              <span className="text-primary">{t("headingLine2").split(" ")[0]}</span>{" "}
              {t("headingLine2").split(" ").slice(1).join(" ")}
            </>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedTreatments.map((treatment) => (
            <TreatmentCard
              key={treatment.slug}
              treatment={treatment}
              locale={locale}
              durationUnit={t("durationUnit")}
              ctaLabel={t("ctaExplore")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}