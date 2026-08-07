 import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/lib/siteConfig";
import { ContactHeroContent } from "./ContactHeroContent";

const points = [
  { iconKey: "Award", titleKey: "point1Title", descKey: "point1Desc" },
  { iconKey: "ShieldCheck", titleKey: "point2Title", descKey: "point2Desc" },
  { iconKey: "Clock", titleKey: "point3Title", descKey: "point3Desc" },
] as const;

export async function ContactHeroSection() {
  const t = await getTranslations("contactHero");

  return (
    <ContactHeroContent
      eyebrow={t("eyebrow")}
      headingLine1={t("headingLine1")}
      headingHighlight={t("headingHighlight")}
      subheading={t("subheading")}
      ctaBook={t("ctaBook")}
      ctaWhatsapp={t("ctaWhatsapp")}
      whatsappHref={siteConfig.whatsappHref}
      points={points.map((p) => ({
        iconKey: p.iconKey,
        title: t(p.titleKey),
        desc: t(p.descKey),
      }))}
    />
  );
}