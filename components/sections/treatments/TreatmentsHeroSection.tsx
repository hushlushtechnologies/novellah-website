 import { getTranslations } from "next-intl/server";
import { TreatmentsHeroContent } from "./TreatmentsHeroContent";

export async function TreatmentsHeroSection() {
  const t = await getTranslations("treatmentsHero");

  return (
    <TreatmentsHeroContent
      eyebrow={t("eyebrow")}
      headingLine1={t("headingLine1")}
      headingLine2={t("headingLine2")}
      subheading={t("subheading")}
      ctaExplore={t("ctaExplore")}
      ctaBook={t("ctaBook")}
      scrollToDiscover={t("scrollToDiscover")}
    />
  );
}