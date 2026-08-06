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
    id: "hair-treatments-1",
    treatmentSlug: "hair-treatments",
    title: { en: "Hair Treatments", ar: "علاجات الشعر" },
    description: {
      en: "Restore healthier, stronger hair with personalized treatments designed to target hair fall, thinning.",
      ar: "استعد شعراً أكثر صحة وقوة من خلال علاجات مخصصة تستهدف تساقط الشعر وترققه.",
    },
    beforeImage: "/images/results/hair-treatments-1-before.png",
    afterImage: "/images/results/hair-treatments-1-after.png",
  },
  {
    id: "hair-treatments-2",
    treatmentSlug: "hair-treatments",
    title: { en: "Hair Treatments", ar: "علاجات الشعر" },
    description: {
      en: "Restore healthier, stronger hair with personalized treatments designed to target hair fall, thinning.",
      ar: "استعد شعراً أكثر صحة وقوة من خلال علاجات مخصصة تستهدف تساقط الشعر وترققه.",
    },
    beforeImage: "/images/results/hair-treatments-2-before.png",
    afterImage: "/images/results/hair-treatments-2-after.png",
  },
  {
    id: "anti-wrinkle-treatments-1",
    treatmentSlug: "anti-wrinkle",
    title: { en: "Anti Wrinkle Treatments", ar: "علاجات مكافحة التجاعيد" },
    description: {
      en: "Reduce the appearance of fine lines and wrinkles with advanced anti-wrinkle treatments.",
      ar: "قلّل من ظهور الخطوط الدقيقة والتجاعيد باستخدام علاجات متقدمة لمكافحة التجاعيد.",
    },
    beforeImage: "/images/results/anti-wrinkle-treatments-1-before.png",
    afterImage: "/images/results/anti-wrinkle-treatments-1-after.png",
  },
  {
    id: "anti-wrinkle-treatments-2",
    treatmentSlug: "anti-wrinkle",
    title: { en: "Anti Wrinkle Treatments", ar: "علاجات مكافحة التجاعيد" },
    description: {
      en: "Reduce the appearance of fine lines and wrinkles with advanced anti-wrinkle treatments.",
      ar: "قلّل من ظهور الخطوط الدقيقة والتجاعيد باستخدام علاجات متقدمة لمكافحة التجاعيد.",
    },
    beforeImage: "/images/results/anti-wrinkle-treatments-2-before.png",
    afterImage: "/images/results/anti-wrinkle-treatments-2-after.png",
  },
  {
    id: "anti-aging-treatments-1",
    treatmentSlug: "anti-aging",
    title: { en: "Anti Aging Treatments", ar: "علاجات مكافحة الشيخوخة" },
    description: {
      en: "Restore your skin's youthful vitality with personalized anti-aging treatments designed",
      ar: "استعد حيوية بشرتك الشبابية من خلال علاجات مخصصة لمكافحة الشيخوخة مصممة خصيصًا لتلبية احتياجات بشرتك.",
    },
    beforeImage: "/images/results/anti-aging-treatments-1-before.png",
    afterImage: "/images/results/anti-aging-treatments-1-after.png",
  },
  {
    id: "anti-aging-treatments-2",
    treatmentSlug: "anti-aging",
    title: { en: "Anti Aging Treatments", ar: "علاجات مكافحة الشيخوخة" },
    description: {
      en: "Restore your skin's youthful vitality with personalized anti-aging treatments designed",
      ar: "استعد حيوية بشرتك الشبابية من خلال علاجات مخصصة لمكافحة الشيخوخة مصممة خصيصًا لتلبية احتياجات بشرتك.",
    },
    beforeImage: "/images/results/anti-aging-treatments-2-before.png",
    afterImage: "/images/results/anti-aging-treatments-2-after.png",
  },
  {
    id: "skin-analysis-1",
    treatmentSlug: "skin-analysis",
    title: { en: "Skin Analysis", ar: "تحليل البشرة" },
description: {
  en: "Discover your skin's unique needs with our comprehensive Skin Analysis.",
  ar: "اكتشف احتياجات بشرتك الفريدة من خلال تحليل البشرة الشامل الذي يقيّم حالة بشرتك بدقة ويساعد في وضع خطة علاج مخصصة.",
},
    beforeImage: "/images/results/skin-analysis-1-before.png",
    afterImage: "/images/results/skin-analysis-1-after.png",
  },
  {
    id: "skin-analysis-2",
    treatmentSlug: "skin-analysis",
    title: { en: "Skin Analysis", ar: "تحليل البشرة" },
description: {
  en: "Discover your skin's unique needs with our comprehensive Skin Analysis.",
  ar: "اكتشف احتياجات بشرتك الفريدة من خلال تحليل البشرة الشامل الذي يقيّم حالة بشرتك بدقة ويساعد في وضع خطة علاج مخصصة.",
},
    beforeImage: "/images/results/skin-analysis-2-before.png",
    afterImage: "/images/results/skin-analysis-2-after.png",
  },
  {
    id: "scalp-analysis-1",
    treatmentSlug: "scalp-analysis",
    title: { en: "Scalp Analysis", ar: "تحليل فروة الرأس" },
description: {
  en: "Discover the foundation of healthy hair with our professional Scalp Analysis.",
  ar: "اكتشف أساس الشعر الصحي من خلال تحليل فروة الرأس الاحترافي الذي يقيّم صحة فروة الرأس بدقة ويساعد في وضع خطة عناية مخصصة للشعر.",
},
    beforeImage: "/images/results/scalp-analysis-1-before.png",
    afterImage: "/images/results/scalp-analysis-1-after.png",
  },
  {
    id: "scalp-analysis-2",
    treatmentSlug: "scalp-analysis",
    title: { en: "Scalp Analysis", ar: "تحليل فروة الرأس" },
 description: {
  en: "Discover the foundation of healthy hair with our professional Scalp Analysis.",
  ar: "اكتشف أساس الشعر الصحي من خلال تحليل فروة الرأس الاحترافي الذي يقيّم صحة فروة الرأس بدقة ويساعد في وضع خطة عناية مخصصة للشعر.",
},
    beforeImage: "/images/results/scalp-analysis-2-before.png",
    afterImage: "/images/results/scalp-analysis-2-after.png",
  },
  {
    id: "skin-care-1",
    treatmentSlug: "skin-care",
    title: { en: "Skin Care", ar: "العناية بالبشرة" },
description: {
  en: "Restore your skin's natural balance with customized skincare solutions designed to nourish, protect.",
  ar: "استعد التوازن الطبيعي لبشرتك من خلال حلول عناية مخصصة مصممة لتغذية البشرة وحمايتها والحفاظ على صحتها.",
},
    beforeImage: "/images/results/skin-care-1-before.png",
    afterImage: "/images/results/skin-care-1-after.png",
  },
  {
    id: "skin-care-2",
    treatmentSlug: "skin-care",
    title: { en: "Skin Care", ar: "العناية بالبشرة" },
description: {
  en: "Restore your skin's natural balance with customized skincare solutions designed to nourish, protect.",
  ar: "استعد التوازن الطبيعي لبشرتك من خلال حلول عناية مخصصة مصممة لتغذية البشرة وحمايتها والحفاظ على صحتها.",
},
    beforeImage: "/images/results/skin-care-1-before.png",
    afterImage: "/images/results/skin-care-1-after.png",
  },
  {
    id: "signature-facial-1",
    treatmentSlug: "signature-facial",
    title: { en: "Signature Facial", ar: "الفيشل المميز" },
description: {
  en: "Experience the ultimate personalized facial treatment designed to restore your skin's natural glow.",
  ar: "استمتع بتجربة علاج فيشل مخصص مصمم لاستعادة الإشراقة الطبيعية لبشرتك وتعزيز نضارتها ومنحها مظهراً صحياً ومشرقاً.",
},
    beforeImage: "/images/results/signature-facial-1-before.png",
    afterImage: "/images/results/signature-facial-1-after.png",
  },
  {
    id: "signature-facial-2",
    treatmentSlug: "signature-facial",
    title: { en: "Signature Facial", ar: "الفيشل المميز" },
description: {
  en: "Experience the ultimate personalized facial treatment designed to restore your skin's natural glow.",
  ar: "استمتع بتجربة علاج فيشل مخصص مصمم لاستعادة الإشراقة الطبيعية لبشرتك وتعزيز نضارتها ومنحها مظهراً صحياً ومشرقاً.",
},
    beforeImage: "/images/results/signature-facial-2-before.png",
    afterImage: "/images/results/signature-facial-2-after.png",
  },
  {
    id: "hydra-facial-1",
    treatmentSlug: "hydra-facial",
    title: { en: "Hydra Facial", ar: "هيدرا فيشل" },
description: {
  en: "Deeply cleanse, hydrate, and rejuvenate your skin for a radiant, healthy glow.",
  ar: "نظّف بشرتك بعمق، ورطّبها، وجدّد حيويتها للحصول على بشرة صحية ومشرقة مع علاج الهيدرافيشل المتطور.",
},
    beforeImage: "/images/results/hydra-facial-1-before.png",
    afterImage: "/images/results/hydra-facial-1-after.png",
  },
  {
    id: "hydra-facial-2",
    treatmentSlug: "hydra-facial",
    title: { en: "Hydra Facial", ar: "هيدرا فيشل" },
description: {
  en: "Deeply cleanse, hydrate, and rejuvenate your skin for a radiant, healthy glow.",
  ar: "نظّف بشرتك بعمق، ورطّبها، وجدّد حيويتها للحصول على بشرة صحية ومشرقة مع علاج الهيدرافيشل المتطور.",
},
    beforeImage: "/images/results/hydra-facial-2-before.png",
    afterImage: "/images/results/hydra-facial-2-after.png",
  },
  {
    id: "carbon-peel-1",
    treatmentSlug: "carbon-peel",
    title: { en: "Carbon Peel", ar: "تقشير الكربون" },
  description: {
  en: "Reveal refreshed and radiant skin with Carbon Peel — an advanced laser-based skin rejuvenation ",
  ar: "استمتع ببشرة منتعشة ومشرقة مع تقشير الكربون، وهو علاج متطور لتجديد البشرة بالليزر.",
},
    beforeImage: "/images/results/carbon-peel-1-before.png",
    afterImage: "/images/results/carbon-peel-1-after.png",
  },
  {
    id: "carbon-peel-2",
    treatmentSlug: "carbon-peel",
    title: { en: "Carbon Peel", ar: "تقشير الكربون" },
description: {
  en: "Reveal refreshed and radiant skin with Carbon Peel — an advanced laser-based skin rejuvenation ",
  ar: "استمتع ببشرة منتعشة ومشرقة مع تقشير الكربون، وهو علاج متطور لتجديد البشرة بالليزر.",
},
    beforeImage: "/images/results/carbon-peel-2-before.png",
    afterImage: "/images/results/carbon-peel-2-after.png",
  },
  {
    id: "dermabrasion-1",
    treatmentSlug: "dermabrasion",
    title: { en: "Dermabrasion", ar: "الديرمابرايجن" },
    description: {
      en: "Reveal a smoother and more refined complexion with Dermabrasion.",
      ar: "احصل على بشرة أكثر نعومة وصفاءً مع الديرمابرايجن، المصمم لتقشير البشرة بلطف وتحسين ملمسها.",
    },
    beforeImage: "/images/results/dermabrasion-1-before.png",
    afterImage: "/images/results/dermabrasion-1-after.png",
  },
  {
    id: "dermabrasion-2",
    treatmentSlug: "dermabrasion",
    title: { en: "Dermabrasion", ar: "الديرمابرايجن" },
description: {
  en: "Reveal a smoother and more refined complexion with Dermabrasion.",
  ar: "احصل على بشرة أكثر نعومة وصفاءً مع الديرمابرايجن.",
},
    beforeImage: "/images/results/dermabrasion-2-before.png",
    afterImage: "/images/results/dermabrasion-2-after.png",
  },
  {
    id: "ultrasonic-treatments-1",
    treatmentSlug: "ultrasonic-treatment",
    title: { en: "Ultrasonic Treatments", ar: "العلاجات بالموجات فوق الصوتية" },
  description: {
  en: "Experience the benefits of advanced ultrasonic technology designed to improve skin health",
  ar: "استمتع بفوائد تقنية الموجات فوق الصوتية المتطورة المصممة لتحسين صحة البشرة.",
},
    beforeImage: "/images/results/ultrasonic-treatments-1-before.png",
    afterImage: "/images/results/ultrasonic-treatments-1-after.png",
  },
  {
    id: "acne-treatment-1",
    treatmentSlug: "acne-treatment",
    title: { en: "Acne Treatment", ar: "علاج حب الشباب" },
description: {
  en: "Achieve clearer and healthier-looking skin with our personalized Acne Treatment.",
  ar: "احصل على بشرة أكثر صفاءً وصحة مع علاج حب الشباب المخصص.",
},
    beforeImage: "/images/results/acne-treatment-1-before.png",
    afterImage: "/images/results/acne-treatment-1-after.png",
  },
  {
    id: "scar-treatment-1",
    treatmentSlug: "scar-treatment",
    title: { en: "Scar Treatment", ar: "علاج الندبات" },
description: {
  en: "Advanced Skin Solutions to Restore Smoother, More Even-Looking Skin Improve the appearance.",
  ar: "حلول متقدمة للعناية بالبشرة لاستعادة بشرة أكثر نعومة وتجانسًا وتحسين مظهرها.",
},
    beforeImage: "/images/results/scar-treatment-1-before.png",
    afterImage: "/images/results/scar-treatment-1-after.png",
  },
  {
    id: "pigmentation-treatment-1",
    treatmentSlug: "pigmentation-treatment",
    title: { en: "Pigmentation Treatment", ar: "علاج التصبغات" },
description: {
  en: "Restore balance and radiance to your skin with our advanced Pigmentation Treatment.",
  ar: "استعد توازن وإشراقة بشرتك مع علاج التصبغات المتطور.",
},
    beforeImage: "/images/results/pigmentation-treatment-1-before.png",
    afterImage: "/images/results/pigmentation-treatment-1-after.png",
  },
  {
    id: "skin-brightening-rejuvenation-1",
    treatmentSlug: "skin-brightening-rejuvenation",
    title: { en: "Skin Brightening & Rejuvenation", ar: "تفتيح وتجديد البشرة" },
description: {
  en: "Revitalize tired and dull-looking skin with our Skin Brightening & Rejuvenation treatment.",
  ar: "جدد البشرة المتعبة والباهتة مع علاج تفتيح وتجديد البشرة.",
},
    beforeImage: "/images/results/skin-brightening-rejuvenation-1-before.png",
    afterImage: "/images/results/skin-brightening-rejuvenation-1-after.png",
  },
  {
    id: "laser-skin-treatments-1",
    treatmentSlug: "laser-skin-treatments",
    title: { en: "Laser Skin Treatments", ar: "علاجات البشرة بالليزر" },
 description: {
  en: "Experience the power of advanced laser technology designed to improve skin quality.",
  ar: "استمتع بقوة تقنية الليزر المتطورة المصممة لتحسين جودة البشرة.",
},
    beforeImage: "/images/results/laser-skin-treatments-1-before.png",
    afterImage: "/images/results/laser-skin-treatments-1-after.png",
  },
  {
    id: "tattoo-removal-1",
    treatmentSlug: "tattoo-removal",
    title: { en: "Tattoo Removal", ar: "إزالة الوشم" },
   description: {
  en: "Restore your skin’s natural appearance with advanced Tattoo Removal treatment .",
  ar: "استعد المظهر الطبيعي لبشرتك مع علاج إزالة الوشم المتطور.",
},
    beforeImage: "/images/results/tattoo-removal-1-before.png",
    afterImage: "/images/results/tattoo-removal-1-after.png",
  },
];