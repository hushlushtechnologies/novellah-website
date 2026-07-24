import type { Localized } from "@/lib/navigation";

export interface BeforeAfterResult {
  id: string;
  treatmentSlug: string;
  title: Localized;
  description: Localized;
  beforeImage: string;
  afterImage: string;
}

 export const beforeAfterResults: BeforeAfterResult[] = [
  {
    id: "hydra-facial-1",
    treatmentSlug: "hydra-facial",
    title: { en: "Hydra Facial", ar: "هيدرا فيشل" },
    description: {
      en: "Deeply cleanse, hydrate and rejuvenate your skin for a radiant and healthy glow.",
      ar: "تنظيف عميق وترطيب وتجديد للبشرة لإشراقة صحية ونضرة.",
    },
    beforeImage: "/images/results/hydra-facial-before-1.png",
    afterImage: "/images/results/hydra-facial-after-1.png",
  },
  {
    id: "hydra-facial-2",
    treatmentSlug: "hydra-facial",
    title: { en: "Hydra Facial", ar: "هيدرا فيشل" },
    description: {
      en: "Reveal smoother, brighter skin with advanced hydration and gentle exfoliation.",
      ar: "بشرة أكثر نعومة وإشراقًا مع الترطيب المتقدم والتقشير اللطيف.",
    },
    beforeImage: "/images/results/hydra-facial-before-1.png",
    afterImage: "/images/results/hydra-facial-after-1.png",
  },
  {
    id: "hydra-facial-3",
    treatmentSlug: "hydra-facial",
    title: { en: "Hydra Facial", ar: "هيدرا فيشل" },
    description: {
      en: "Restore your skin's natural glow with a refreshing and nourishing facial treatment.",
      ar: "استعيدي نضارة بشرتك الطبيعية مع علاج منعش ومغذٍ للوجه.",
    },
    beforeImage: "/images/results/hydra-facial-before-1.png",
    afterImage: "/images/results/hydra-facial-after-1.png",
  },
  {
    id: "hydra-facial-4",
    treatmentSlug: "hydra-facial",
    title: { en: "Hydra Facial", ar: "هيدرا فيشل" },
    description: {
      en: "Experience visibly healthier skin with intensive cleansing and hydration.",
      ar: "استمتعي ببشرة أكثر صحة مع التنظيف المكثف والترطيب العميق.",
    },
    beforeImage: "/images/results/hydra-facial-before-1.png",
    afterImage: "/images/results/hydra-facial-after-1.png",
  },
  {
    id: "hydra-facial-5",
    treatmentSlug: "hydra-facial",
    title: { en: "Hydra Facial", ar: "هيدرا فيشل" },
    description: {
      en: "Refresh dull skin and enhance your complexion with long-lasting hydration.",
      ar: "جددي البشرة الباهتة وعززي إشراقتها بترطيب يدوم طويلًا.",
    },
    beforeImage: "/images/results/hydra-facial-before-1.png",
    afterImage: "/images/results/hydra-facial-after-1.png",
  },
];