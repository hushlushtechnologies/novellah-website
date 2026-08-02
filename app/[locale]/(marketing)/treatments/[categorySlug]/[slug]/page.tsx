import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { TreatmentDetailHeroSection } from "@/components/sections/treatments/TreatmentDetailHeroSection";
import { treatments } from "@/lib/content/treatments";
import { treatmentsMegaMenu } from "@/lib/navigation";
import { TreatmentOverviewSection } from "@/components/sections/treatments/TreatmentOverviewSection";
import { TreatmentProcessSection } from "@/components/sections/treatments/TreatmentProcessSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { BeforeAfterSection } from "@/components/sections/shared/BeforeAfterSection";
import { RelatedTreatmentsSection } from "@/components/sections/treatments/RelatedTreatmentsSection";
import { FinalCtaSection } from "@/components/sections/shared/FinalCtaSection";
import { FlowerDivider } from "@/components/sections/home/FlowerDivider";

export function generateStaticParams() {
  return treatments.map((tr) => ({
    categorySlug: tr.categorySlug,
    slug: tr.slug,
  }));
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ categorySlug: string; slug: string }>;
}) {
  const { categorySlug, slug } = await params;
  const treatment = treatments.find(
    (tr) => tr.slug === slug && tr.categorySlug === categorySlug,
  );

  if (!treatment) notFound();

  const locale = (await getLocale()) as "en" | "ar";
  const category = treatmentsMegaMenu.find(
    (c) => c.categorySlug === categorySlug,
  );

  return (
    <>
      <TreatmentDetailHeroSection
        treatment={treatment}
        categoryTitle={category?.title[locale] ?? ""}
        locale={locale}
      />
      <TreatmentOverviewSection treatment={treatment} locale={locale} />
      <FlowerDivider />
      <TreatmentProcessSection treatment={treatment} locale={locale} />
      <FaqSection items={treatment.faq} />
      <BeforeAfterSection />
      <RelatedTreatmentsSection
        currentSlug={treatment.slug}
        categorySlug={treatment.categorySlug}
        locale={locale}
      />
      <FinalCtaSection />
    </>
  );
}
