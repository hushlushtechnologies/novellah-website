 import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/lib/siteConfig";
import { BlogHeroContent } from "./BlogHeroContent";

export async function BlogHeroSection() {
  const t = await getTranslations("blogHero");

  return (
    <BlogHeroContent
      eyebrow={t("eyebrow")}
      headingLine1={t("headingLine1")}
      headingLine2={t("headingLine2")}
      subheading={t("subheading")}
      ctaBook={t("ctaBook")}
      ctaWhatsapp={t("ctaWhatsapp")}
      whatsappHref={siteConfig.whatsappHref}
    />
  );
}