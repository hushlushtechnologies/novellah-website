 import { getTranslations } from "next-intl/server";
import { WhatIsRewardsContent } from "./WhatIsRewardsContent";

const points = [
  { icon: "/images/icons/exclusive-privileges.svg", titleKey: "point1Title", descKey: "point1Desc" },
  { icon: "/images/icons/rewarded-every-time.svg", titleKey: "point2Title", descKey: "point2Desc" },
  { icon: "/images/icons/personalized-care-4.svg", titleKey: "point3Title", descKey: "point3Desc" },
] as const;

export async function WhatIsRewardsSection() {
  const t = await getTranslations("whatIsRewards");

  return (
    <WhatIsRewardsContent
      quote={t("quote")}
      eyebrow={t("eyebrow")}
      headingLine1Prefix={t("headingLine1Prefix")}
      headingLine1Highlight={t("headingLine1Highlight")}
      headingLine2={t("headingLine2")}
      description={t("description")}
      points={points.map((p) => ({
        icon: p.icon,
        title: t(p.titleKey),
        desc: t(p.descKey),
      }))}
    />
  );
}