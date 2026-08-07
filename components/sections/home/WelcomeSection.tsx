import { getTranslations } from "next-intl/server";
import { WelcomeContent } from "./WelcomeContent";
 

const features = [
  { icon: "/images/icons/modern-beauty.svg", titleKey: "feature1Title", descKey: "feature1Desc" },
  { icon: "/images/icons/personalized-care.svg", titleKey: "feature2Title", descKey: "feature2Desc" },
  { icon: "/images/icons/exceptional-experience.svg", titleKey: "feature3Title", descKey: "feature3Desc" },
] as const;

const stats = [
  { valueKey: "stat1Value", labelKey: "stat1Label" },
  { valueKey: "stat2Value", labelKey: "stat2Label" },
  { valueKey: "stat3Value", labelKey: "stat3Label" },
  { valueKey: "stat4Value", labelKey: "stat4Label" },
] as const;

export async function WelcomeSection() {
  const t = await getTranslations("welcome");

  return (
    <WelcomeContent
      eyebrow={t("eyebrow")}
      headingLine1={t("headingLine1")}
      headingLine2={t("headingLine2")}
      description1={t("description1")}
      description2={t("description2")}
      ctaLearnMore={t("ctaLearnMore")}
      ctaExplore={t("ctaExplore")}
      features={features.map((f) => ({
        icon: f.icon,
        title: t(f.titleKey),
        desc: t(f.descKey),
      }))}
      stats={stats.map((s) => ({
        value: t(s.valueKey),
        label: t(s.labelKey),
      }))}
    />
  );
}