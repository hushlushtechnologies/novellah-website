 import { getTranslations } from "next-intl/server";
import { TechnologyMeetsBeautyContent } from "./TechnologyMeetsBeautyContent";

const points = [
  {
    icon: "/images/icons/safe-approved.svg",
    titleKey: "point1Title",
    descKey: "point1Desc",
  },
  {
    icon: "/images/icons/precise-effective.svg",
    titleKey: "point2Title",
    descKey: "point2Desc",
  },
  {
    icon: "/images/icons/minimal-downtime.svg",
    titleKey: "point3Title",
    descKey: "point3Desc",
  },
  {
    icon: "/images/icons/experts-hands.svg",
    titleKey: "point4Title",
    descKey: "point4Desc",
  },
] as const;

export async function TechnologyMeetsBeautySection() {
  const t = await getTranslations("technologyMeetsBeauty");

  return (
    <TechnologyMeetsBeautyContent
      eyebrow={t("eyebrow")}
      headingLine1={t("headingLine1")}
      headingLine2={t("headingLine2")}
      description1={t("description1")}
      description2={t("description2")}
      ctaLearnMore={t("ctaLearnMore")}
      ctaConnect={t("ctaConnect")}
      points={points.map((p) => ({
        icon: p.icon,
        title: t(p.titleKey),
        desc: t(p.descKey),
      }))}
    />
  );
}