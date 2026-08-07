import { getTranslations } from "next-intl/server";
import { HeroContent } from "./HeroContent";
import { ScrollCue } from "@/components/ui/ScrollCue";
import { WatchGalleryButton } from "@/components/ui/WatchGalleryButton";

export async function HeroSection() {
  const t = await getTranslations("home");

  return (
    <HeroContent
      eyebrow={t("eyebrow")}
      headingLine1={t("headingLine1")}
      headingLine2={t("headingLine2")}
      description={t("description")}
      descriptionBold={t("descriptionBold")}
      ctaExplore={t("ctaExplore")}
      ctaBook={t("ctaBook")}
      scrollCue={<ScrollCue label={t("scrollToDiscover")} targetId="welcome" />}
      watchGalleryButton={<WatchGalleryButton />}
    />
  );
}