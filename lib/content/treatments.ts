// lib/content/treatments.ts
import type { Localized } from "@/lib/navigation";

export interface Treatment {
  slug: string;
  categorySlug: string;
  title: Localized;
  description: Localized;
  image: string;
  durationMinutes: number;
  skinType: Localized;
}

export const treatments: Treatment[] = [
  {
    slug: "hydra-facial",
    categorySlug: "advanced-skin-care",
    title: { en: "Hydra Facial", ar: "هيدرا فيشل" },
    description: {
      en: "Deep Cleansing, hydration and nourishment for an instant glow",
      ar: "تنظيف عميق وترطيب وتغذية للحصول على إشراقة فورية",
    },
    image: "/images/treatments/hydra-facial.jpg",
    durationMinutes: 60,
    skinType: { en: "All Skin Types", ar: "لجميع أنواع البشرة" },
  },
  {
    slug: "carbon-peel",
    categorySlug: "advanced-skin-care",
    title: { en: "Carbon Peel", ar: "تقشير الكربون" },
    description: {
      en: "Deep pore cleansing, oil control and brighter, smoother skin with instant results",
      ar: "تنظيف عميق للمسام والتحكم في الدهون وبشرة أكثر إشراقاً ونعومة بنتائج فورية",
    },
    image: "/images/treatments/carbon-peel.jpg",
    durationMinutes: 60,
    skinType: { en: "All Skin Types", ar: "لجميع أنواع البشرة" },
  },
  {
    slug: "dermabrasion",
    categorySlug: "advanced-skin-care",
    title: { en: "Dermabrasion", ar: "سنفرة البشرة" },
    description: {
      en: "Exfoliates and removes dead skin cells for smoother and refreshed skin",
      ar: "يقشر ويزيل خلايا الجلد الميتة لبشرة أكثر نعومة ونضارة",
    },
    image: "/images/treatments/dermabrasion.jpg",
    durationMinutes: 60,
    skinType: { en: "All Skin Types", ar: "لجميع أنواع البشرة" },
  },
  {
    slug: "ultrasonic-treatment",
    categorySlug: "advanced-skin-care",
    title: { en: "Ultrasonic Treatments", ar: "العلاج بالموجات فوق الصوتية" },
    description: {
      en: "Advanced technology to deeply cleanse, nourish and rejuvenate",
      ar: "تقنية متقدمة للتنظيف العميق والتغذية وتجديد البشرة",
    },
    image: "/images/treatments/ultrasonic-treatment.jpg",
    durationMinutes: 60,
    skinType: { en: "All Skin Types", ar: "لجميع أنواع البشرة" },
  },
  // TODO: add featured treatments for the other 5 categories
  // (hair-care-beauty, anti-aging-solution, consultation-analysis, laser-treatment, beauty-enhancement)
  // following this exact shape, so every tab has content to show.
];