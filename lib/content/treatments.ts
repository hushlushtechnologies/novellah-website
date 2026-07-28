// lib/content/treatments.ts
import type { Localized } from "@/lib/navigation";

export interface TreatmentBenefit {
  icon: string;
  title: Localized;
  description: Localized;
}

export interface ProcessStep {
  image: string;
  title: Localized;
  description: Localized;
}

export interface Treatment {
  slug: string;
  categorySlug: string;
  title: Localized;
  description: Localized;
    detailDescription: Localized; 
  image: string;
  durationMinutes: number;
  skinType: Localized;
    sessions: string; 
  procedureType: Localized; 
  overview: Localized;
  benefits: TreatmentBenefit[];
    processHeading: Localized;  
  processSubheading: Localized;
  processHeadingHighlight:Localized;
  process: ProcessStep[];
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
          detailDescription: {
    en: "Deep Cleansing, hydration and nourishment for an instant glow , Depply cleanse, hydrate and rejuvenate your skin with Hydra facial - the ultimate treatment for an instant healthy, radiant glow",
    ar: "...",
  },
      sessions: "4 - 6",
  procedureType: { en: "Non-Invasive", ar: "غير جراحي" },
  overview: {
  en: "Hydra facial is a non-invasive multi - step skin treatments that deeply cleanses hydrates and revitalizes your skin. it combines advanced technology with powerful serums to remove impurities and deliver intense hydration, leaving your skin instantly, refreshed, smooth and glowing.",
  ar: "...",
},
benefits: [
  {
    icon: "/images/icons/deep-cleaning.svg",
    title: { en: "Deep Cleaning", ar: "..." },
    description: { en: "Removes impurities excess oil and unclogs pores", ar: "..." },
  },
  {
    icon: "/images/icons/intense-hydration.svg",
    title: { en: "Intense Hydration", ar: "..." },
    description: { en: "Infuses the skin with nourishing serums for long lasting moisture", ar: "..." },
  },
  {
    icon: "/images/icons/instant-glow.svg",
    title: { en: "Instant Glow", ar: "..." },
    description: { en: "Reveals a brighter, smoother and more radiant complexion", ar: "..." },
  },
  {
    icon: "/images/icons/safe-gentle.svg",
    title: { en: "Safe & Gentle", ar: "..." },
    description: { en: "Suitable for all skin types, even sensitive skin", ar: "..." },
  },
  {
    icon: "/images/icons/improved-texture.svg",
    title: { en: "Improved Skin Texture", ar: "..." },
    description: { en: "Enhances Skin texture and tone, leaving your skin soft and supple", ar: "..." },
  },
  {
    icon: "/images/icons/healthy-youthful.svg",
    title: { en: "Healthy, Youthful Skin", ar: "..." },
    description: { en: "With regular sessions, enjoy healthier, plump and youthful skin", ar: "..." },
  },
  
],
processHeading: { en: "Your Journey to", ar: "..." },
processHeadingHighlight: { en: "Radiant Skin", ar: "..." },
processSubheading: {
  en: "Every Hydra facial is performed with precision and care to ensure maximum results and a comfortable experience",
  ar: "...",
},
process: [
  {
    image: "/images/treatments/hydra-facial-process-1.jpg",
    title: { en: "Consultation", ar: "..." },
    description: { en: "We begin with a detailed consultation to understand your skin concerns, goals and medical history", ar: "..." },
  },
  {
    image: "/images/treatments/hydra-facial-process-2.jpg",
    title: { en: "Preparation & Analysis", ar: "..." },
    description: { en: "Skin Analysis helps us assess your skin condition and create a personalized treatment plan and prepared with gentle exfoliation to remove impurities", ar: "..." },
  },
  {
    image: "/images/treatments/hydra-facial-process-3.jpg",
    title: { en: "Hydra Facial Treatment", ar: "..." },
    description: { en: "The Hydra facial system deeply cleanses, extracts and infuses the skin with nourishing serums", ar: "..." },
  },
  {
    image: "/images/treatments/hydra-facial-process-4.jpg",
    title: { en: "After Care & Glow", ar: "..." },
    description: { en: "We apply protective serums and SPF to nourish your skin and enhance your glow", ar: "..." },
  },
],
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
          detailDescription: {
    en: "Deep Cleansing, hydration and nourishment for an instant glow , Depply cleanse, hydrate and rejuvenate your skin with Hydra facial - the ultimate treatment for an instant healthy, radiant glow",
    ar: "...",
  },
      sessions: "4 - 6",
  procedureType: { en: "Non-Invasive", ar: "غير جراحي" },
  overview: {
  en: "Hydra facial is a non-invasive multi - step skin treatments that deeply cleanses hydrates and revitalizes your skin. it combines advanced technology with powerful serums to remove impurities and deliver intense hydration, leaving your skin instantly, refreshed, smooth and glowing.",
  ar: "...",
},
benefits: [
  {
    icon: "/images/icons/deep-cleaning.svg",
    title: { en: "Deep Cleaning", ar: "..." },
    description: { en: "Removes impurities excess oil and unclogs pores", ar: "..." },
  },
  {
    icon: "/images/icons/intense-hydration.svg",
    title: { en: "Intense Hydration", ar: "..." },
    description: { en: "Infuses the skin with nourishing serums for long lasting moisture", ar: "..." },
  },
  {
    icon: "/images/icons/instant-glow.svg",
    title: { en: "Instant Glow", ar: "..." },
    description: { en: "Reveals a brighter, smoother and more radiant complexion", ar: "..." },
  },
  {
    icon: "/images/icons/safe-gentle.svg",
    title: { en: "Safe & Gentle", ar: "..." },
    description: { en: "Suitable for all skin types, even sensitive skin", ar: "..." },
  },
  {
    icon: "/images/icons/improved-texture.svg",
    title: { en: "Improved Skin Texture", ar: "..." },
    description: { en: "Enhances Skin texture and tone, leaving your skin soft and supple", ar: "..." },
  },
  {
    icon: "/images/icons/healthy-youthful.svg",
    title: { en: "Healthy, Youthful Skin", ar: "..." },
    description: { en: "With regular sessions, enjoy healthier, plump and youthful skin", ar: "..." },
  },
],
processHeading: { en: "Your Journey to", ar: "..." },
processHeadingHighlight: { en: "Radiant Skin", ar: "..." },
processSubheading: {
  en: "Every Hydra facial is performed with precision and care to ensure maximum results and a comfortable experience",
  ar: "...",
},
process: [
  {
    image: "/images/treatments/hydra-facial-process-1.jpg",
    title: { en: "Consultation", ar: "..." },
    description: { en: "We begin with a detailed consultation to understand your skin concerns, goals and medical history", ar: "..." },
  },
  {
    image: "/images/treatments/hydra-facial-process-2.jpg",
    title: { en: "Preparation & Analysis", ar: "..." },
    description: { en: "Skin Analysis helps us assess your skin condition and create a personalized treatment plan and prepared with gentle exfoliation to remove impurities", ar: "..." },
  },
  {
    image: "/images/treatments/hydra-facial-process-3.jpg",
    title: { en: "Hydra Facial Treatment", ar: "..." },
    description: { en: "The Hydra facial system deeply cleanses, extracts and infuses the skin with nourishing serums", ar: "..." },
  },
  {
    image: "/images/treatments/hydra-facial-process-4.jpg",
    title: { en: "After Care & Glow", ar: "..." },
    description: { en: "We apply protective serums and SPF to nourish your skin and enhance your glow", ar: "..." },
  },
],
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
          detailDescription: {
    en: "Deep Cleansing, hydration and nourishment for an instant glow , Depply cleanse, hydrate and rejuvenate your skin with Hydra facial - the ultimate treatment for an instant healthy, radiant glow",
    ar: "...",
  },
      sessions: "4 - 6",
  procedureType: { en: "Non-Invasive", ar: "غير جراحي" },
  overview: {
  en: "Hydra facial is a non-invasive multi - step skin treatments that deeply cleanses hydrates and revitalizes your skin. it combines advanced technology with powerful serums to remove impurities and deliver intense hydration, leaving your skin instantly, refreshed, smooth and glowing.",
  ar: "...",
},
benefits: [
  {
    icon: "/images/icons/deep-cleaning.svg",
    title: { en: "Deep Cleaning", ar: "..." },
    description: { en: "Removes impurities excess oil and unclogs pores", ar: "..." },
  },
  {
    icon: "/images/icons/intense-hydration.svg",
    title: { en: "Intense Hydration", ar: "..." },
    description: { en: "Infuses the skin with nourishing serums for long lasting moisture", ar: "..." },
  },
  {
    icon: "/images/icons/instant-glow.svg",
    title: { en: "Instant Glow", ar: "..." },
    description: { en: "Reveals a brighter, smoother and more radiant complexion", ar: "..." },
  },
  {
    icon: "/images/icons/safe-gentle.svg",
    title: { en: "Safe & Gentle", ar: "..." },
    description: { en: "Suitable for all skin types, even sensitive skin", ar: "..." },
  },
  {
    icon: "/images/icons/improved-texture.svg",
    title: { en: "Improved Skin Texture", ar: "..." },
    description: { en: "Enhances Skin texture and tone, leaving your skin soft and supple", ar: "..." },
  },
  {
    icon: "/images/icons/healthy-youthful.svg",
    title: { en: "Healthy, Youthful Skin", ar: "..." },
    description: { en: "With regular sessions, enjoy healthier, plump and youthful skin", ar: "..." },
  },
],
processHeading: { en: "Your Journey to", ar: "..." },
processHeadingHighlight: { en: "Radiant Skin", ar: "..." },
processSubheading: {
  en: "Every Hydra facial is performed with precision and care to ensure maximum results and a comfortable experience",
  ar: "...",
},
process: [
  {
    image: "/images/treatments/hydra-facial-process-1.jpg",
    title: { en: "Consultation", ar: "..." },
    description: { en: "We begin with a detailed consultation to understand your skin concerns, goals and medical history", ar: "..." },
  },
  {
    image: "/images/treatments/hydra-facial-process-2.jpg",
    title: { en: "Preparation & Analysis", ar: "..." },
    description: { en: "Skin Analysis helps us assess your skin condition and create a personalized treatment plan and prepared with gentle exfoliation to remove impurities", ar: "..." },
  },
  {
    image: "/images/treatments/hydra-facial-process-3.jpg",
    title: { en: "Hydra Facial Treatment", ar: "..." },
    description: { en: "The Hydra facial system deeply cleanses, extracts and infuses the skin with nourishing serums", ar: "..." },
  },
  {
    image: "/images/treatments/hydra-facial-process-4.jpg",
    title: { en: "After Care & Glow", ar: "..." },
    description: { en: "We apply protective serums and SPF to nourish your skin and enhance your glow", ar: "..." },
  },
],
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
          detailDescription: {
    en: "Deep Cleansing, hydration and nourishment for an instant glow , Depply cleanse, hydrate and rejuvenate your skin with Hydra facial - the ultimate treatment for an instant healthy, radiant glow",
    ar: "...",
  },
      sessions: "4 - 6",
  procedureType: { en: "Non-Invasive", ar: "غير جراحي" },
  overview: {
  en: "Hydra facial is a non-invasive multi - step skin treatments that deeply cleanses hydrates and revitalizes your skin. it combines advanced technology with powerful serums to remove impurities and deliver intense hydration, leaving your skin instantly, refreshed, smooth and glowing.",
  ar: "...",
},
benefits: [
  {
    icon: "/images/icons/deep-cleaning.svg",
    title: { en: "Deep Cleaning", ar: "..." },
    description: { en: "Removes impurities excess oil and unclogs pores", ar: "..." },
  },
  {
    icon: "/images/icons/intense-hydration.svg",
    title: { en: "Intense Hydration", ar: "..." },
    description: { en: "Infuses the skin with nourishing serums for long lasting moisture", ar: "..." },
  },
  {
    icon: "/images/icons/instant-glow.svg",
    title: { en: "Instant Glow", ar: "..." },
    description: { en: "Reveals a brighter, smoother and more radiant complexion", ar: "..." },
  },
  {
    icon: "/images/icons/safe-gentle.svg",
    title: { en: "Safe & Gentle", ar: "..." },
    description: { en: "Suitable for all skin types, even sensitive skin", ar: "..." },
  },
  {
    icon: "/images/icons/improved-texture.svg",
    title: { en: "Improved Skin Texture", ar: "..." },
    description: { en: "Enhances Skin texture and tone, leaving your skin soft and supple", ar: "..." },
  },
  {
    icon: "/images/icons/healthy-youthful.svg",
    title: { en: "Healthy, Youthful Skin", ar: "..." },
    description: { en: "With regular sessions, enjoy healthier, plump and youthful skin", ar: "..." },
  },
],
processHeading: { en: "Your Journey to", ar: "..." },
processHeadingHighlight: { en: "Radiant Skin", ar: "..." },
processSubheading: {
  en: "Every Hydra facial is performed with precision and care to ensure maximum results and a comfortable experience",
  ar: "...",
},
process: [
  {
    image: "/images/treatments/hydra-facial-process-1.jpg",
    title: { en: "Consultation", ar: "..." },
    description: { en: "We begin with a detailed consultation to understand your skin concerns, goals and medical history", ar: "..." },
  },
  {
    image: "/images/treatments/hydra-facial-process-2.jpg",
    title: { en: "Preparation & Analysis", ar: "..." },
    description: { en: "Skin Analysis helps us assess your skin condition and create a personalized treatment plan and prepared with gentle exfoliation to remove impurities", ar: "..." },
  },
  {
    image: "/images/treatments/hydra-facial-process-3.jpg",
    title: { en: "Hydra Facial Treatment", ar: "..." },
    description: { en: "The Hydra facial system deeply cleanses, extracts and infuses the skin with nourishing serums", ar: "..." },
  },
  {
    image: "/images/treatments/hydra-facial-process-4.jpg",
    title: { en: "After Care & Glow", ar: "..." },
    description: { en: "We apply protective serums and SPF to nourish your skin and enhance your glow", ar: "..." },
  },
],
  },
  // TODO: add featured treatments for the other 5 categories
  // (hair-care-beauty, anti-aging-solution, consultation-analysis, laser-treatment, beauty-enhancement)
  // following this exact shape, so every tab has content to show.
];