 import { getTranslations } from "next-intl/server";
import { BookingHeroContent } from "./BookingHeroContent";

export async function BookingHeroSection() {
  const t = await getTranslations("bookingHero");

  return (
    <BookingHeroContent
      eyebrow={t("eyebrow")}
      headingLine1={t("headingLine1")}
      headingHighlight={t("headingHighlight")}
      subheading={t("subheading")}
      ctaViewTreatment={t("ctaViewTreatment")}
      ctaContact={t("ctaContact")}
    />
  );
}