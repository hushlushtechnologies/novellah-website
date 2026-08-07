 import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/lib/siteConfig";
import { OffersHeroContent } from "./OffersHeroContent";

export async function OffersHeroSection() {
  const t = await getTranslations("offersHero");

  return (
    <OffersHeroContent
      eyebrow={t("eyebrow")}
      headingLine1={t("headingLine1")}
      headingHighlight={t("headingHighlight")}
      headingSuffix={t("headingSuffix")}
      subheading={t("subheading")}
      ctaBook={t("ctaBook")}
      ctaWhatsapp={t("ctaWhatsapp")}
      whatsappHref={siteConfig.whatsappHref}
      badge1Line1={t("badge1Line1")}
      badge1Line2={t("badge1Line2")}
      badge1Line3={t("badge1Line3")}
      badge1Line4={t("badge1Line4")}
      badge2Line1={t("badge2Line1")}
      badge2Line2={t("badge2Line2")}
      badge2Line3={t("badge2Line3")}
      badge2Line4={t("badge2Line4")}
    />
  );
}