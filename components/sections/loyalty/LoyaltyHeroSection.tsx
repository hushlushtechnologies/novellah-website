 import { getTranslations } from "next-intl/server";
import { LoyaltyHeroContent } from "./LoyaltyHeroContent";

export async function LoyaltyHeroSection() {
  const t = await getTranslations("loyaltyHero");

  return (
    <LoyaltyHeroContent
      eyebrow={t("eyebrow")}
      headingLine1={t("headingLine1")}
      headingHighlight={t("headingHighlight")}
      headingSuffix={t("headingSuffix")}
      subheading={t("subheading")}
      ctaContact={t("ctaContact")}
      ctaConsultation={t("ctaConsultation")}
    />
  );
}