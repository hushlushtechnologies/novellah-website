 import { getTranslations } from "next-intl/server";
import { DoctorsHeroContent } from "./DoctorsHeroContent";
import { siteConfig } from "@/lib/siteConfig";

const points = [
  { iconKey: "UserCheck", titleKey: "point1Title", descKey: "point1Desc" },
  { iconKey: "HeartHandshake", titleKey: "point2Title", descKey: "point2Desc" },
  { iconKey: "ShieldCheck", titleKey: "point3Title", descKey: "point3Desc" },
] as const;

export async function DoctorsHeroSection() {
  const t = await getTranslations("doctorsHero");

  return (
    <DoctorsHeroContent
      eyebrow={t("eyebrow")}
      headingLine1Prefix={t("headingLine1Prefix")}
      headingLine1Highlight={t("headingLine1Highlight")}
      headingLine2Prefix={t("headingLine2Prefix")}
      headingLine2Highlight={t("headingLine2Highlight")}
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