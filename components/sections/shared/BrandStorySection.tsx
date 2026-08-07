 import { getTranslations } from "next-intl/server";
import { BrandStoryContent } from "./BrandStoryContent";

export async function BrandStorySection() {
  const t = await getTranslations("brandStory");

  return (
    <BrandStoryContent
      eyebrow={t("eyebrow")}
      philosophyLabel={t("philosophyLabel")}
      philosophyHeadingLine1={t("philosophyHeadingLine1")}
      philosophyHeadingLine2={t("philosophyHeadingLine2")}
      philosophyHeadingHighlight={t("philosophyHeadingHighlight")}
      philosophyTagline={t("philosophyTagline")}
      philosophyBody={t("philosophyBody")}
      visionLabel={t("visionLabel")}
      visionBodyPart1={t("visionBodyPart1")}
      visionBodyHighlight1={t("visionBodyHighlight1")}
      visionBodyPart2={t("visionBodyPart2")}
      visionBodyHighlight2={t("visionBodyHighlight2")}
      ceoLabel={t("ceoLabel")}
      ceoHeadingLine1={t("ceoHeadingLine1")}
      ceoHeadingLine2From={t("ceoHeadingLine2From")}
      ceoHeadingHighlight={t("ceoHeadingHighlight")}
      ceoQuote1={t("ceoQuote1")}
      ceoQuote2={t("ceoQuote2")}
      ceoQuote3={t("ceoQuote3")}
      ceoName={t("ceoName")}
      ceoTitle={t("ceoTitle")}
      bannerHeading={t("bannerHeading")}
      bannerSubtext={t("bannerSubtext")}
    />
  );
}