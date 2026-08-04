 import type { Localized } from "@/lib/navigation";

export interface BeforeAfterResult {
  id: string;
  treatmentSlug: string;
  title: Localized;
  description: Localized;
  image: string;
}

 
 
export const beforeAfterResults: BeforeAfterResult[] = [
  {
    id: "hair-treatments-1",
    treatmentSlug: "hair-treatments",
    title: {
      en: "Hair Treatments",
      ar: "علاجات الشعر",
    },
    description: {
      en: "Restore healthier, stronger hair with personalized treatments designed to target hair fall, thinning.",
      ar: "استعد شعراً أكثر صحة وقوة من خلال علاجات مخصصة تستهدف تساقط الشعر وترققه.",
    },
    image: "/images/results/hair-treatments-1.png",
  },
  {
    id: "hair-treatments-2",
    treatmentSlug: "hair-treatments",
    title: {
      en: "Hair Treatments",
      ar: "علاجات الشعر",
    },
    description: {
      en: "Restore healthier, stronger hair with personalized treatments designed to target hair fall, thinning.",
      ar: "استعد شعراً أكثر صحة وقوة من خلال علاجات مخصصة تستهدف تساقط الشعر وترققه.",
    },
    image: "/images/results/hair-treatments-2.png",
  },
  {
  id: "anti-wrinkle-treatments-1",
  treatmentSlug: "anti-wrinkle",
  title: {
    en: "Anti Wrinkle Treatments",
    ar: "علاجات مكافحة التجاعيد",
  },
  description: {
    en: "Reduce the appearance of fine lines and wrinkles with advanced anti-wrinkle treatments.",
    ar: "قلّل من ظهور الخطوط الدقيقة والتجاعيد باستخدام علاجات متقدمة لمكافحة التجاعيد.",
  },
  image: "/images/results/anti-wrinkle-treatments-1.png",
},
{
  id: "anti-wrinkle-treatments-2",
  treatmentSlug: "anti-wrinkle",
  title: {
    en: "Anti Wrinkle Treatments",
    ar: "علاجات مكافحة التجاعيد",
  },
  description: {
    en: "Reduce the appearance of fine lines and wrinkles with advanced anti-wrinkle treatments.",
    ar: "قلّل من ظهور الخطوط الدقيقة والتجاعيد باستخدام علاجات متقدمة لمكافحة التجاعيد.",
  },
  image: "/images/results/anti-wrinkle-treatments-2.png",
},
{
  id: "anti-aging-treatments-1",
  treatmentSlug: "anti-aging",
  title: {
    en: "Anti Aging Treatments",
    ar: "علاجات مكافحة الشيخوخة",
  },
  description: {
    en: "Restore your skin's youthful vitality with personalized anti-aging treatments designed to reduce visible signs of aging and enhance natural skin rejuvenation.",
    ar: "استعد حيوية بشرتك الشبابية من خلال علاجات مخصصة لمكافحة الشيخوخة مصممة لتقليل علامات التقدم في العمر وتعزيز تجدد البشرة الطبيعي.",
  },
  image: "/images/results/anti-aging-treatments-1.png",
},
{
  id: "anti-aging-treatments-2",
  treatmentSlug: "anti-aging",
  title: {
    en: "Anti Aging Treatments",
    ar: "علاجات مكافحة الشيخوخة",
  },
  description: {
    en: "Restore your skin's youthful vitality with personalized anti-aging treatments designed to reduce visible signs of aging and enhance natural skin rejuvenation.",
    ar: "استعد حيوية بشرتك الشبابية من خلال علاجات مخصصة لمكافحة الشيخوخة مصممة لتقليل علامات التقدم في العمر وتعزيز تجدد البشرة الطبيعي.",
  },
  image: "/images/results/anti-aging-treatments-2.png",
},
{
  id: "skin-analysis-1",
  treatmentSlug: "skin-analysis",
  title: {
    en: "Skin Analysis",
    ar: "تحليل البشرة",
  },
  description: {
    en: "Discover your skin's unique needs with our comprehensive Skin Analysis, designed to evaluate your skin condition and create a personalized treatment plan.",
    ar: "اكتشف احتياجات بشرتك الفريدة من خلال تحليل البشرة الشامل المصمم لتقييم حالة البشرة ووضع خطة علاج مخصصة.",
  },
  image: "/images/results/skin-analysis-1.png",
},
{
  id: "skin-analysis-2",
  treatmentSlug: "skin-analysis",
  title: {
    en: "Skin Analysis",
    ar: "تحليل البشرة",
  },
  description: {
    en: "Discover your skin's unique needs with our comprehensive Skin Analysis, designed to evaluate your skin condition and create a personalized treatment plan.",
    ar: "اكتشف احتياجات بشرتك الفريدة من خلال تحليل البشرة الشامل المصمم لتقييم حالة البشرة ووضع خطة علاج مخصصة.",
  },
  image: "/images/results/skin-analysis-2.png",
},
{
  id: "scalp-analysis-1",
  treatmentSlug: "scalp-analysis",
  title: {
    en: "Scalp Analysis",
    ar: "تحليل فروة الرأس",
  },
  description: {
    en: "Discover the foundation of healthy hair with our professional Scalp Analysis, designed to evaluate scalp health and create a personalized hair care plan.",
    ar: "اكتشف أساس الشعر الصحي من خلال تحليل فروة الرأس الاحترافي المصمم لتقييم صحة فروة الرأس ووضع خطة عناية مخصصة بالشعر.",
  },
  image: "/images/results/scalp-analysis-1.png",
},
{
  id: "scalp-analysis-2",
  treatmentSlug: "scalp-analysis",
  title: {
    en: "Scalp Analysis",
    ar: "تحليل فروة الرأس",
  },
  description: {
    en: "Discover the foundation of healthy hair with our professional Scalp Analysis, designed to evaluate scalp health and create a personalized hair care plan.",
    ar: "اكتشف أساس الشعر الصحي من خلال تحليل فروة الرأس الاحترافي المصمم لتقييم صحة فروة الرأس ووضع خطة عناية مخصصة بالشعر.",
  },
  image: "/images/results/scalp-analysis-2.png",
},
{
  id: "skin-care-1",
  treatmentSlug: "skin-care",
  title: {
    en: "Skin Care",
    ar: "العناية بالبشرة",
  },
  description: {
    en: "Restore your skin's natural balance with customized skincare solutions designed to nourish, protect, and enhance your skin's overall health.",
    ar: "استعد التوازن الطبيعي لبشرتك من خلال حلول عناية مخصصة مصممة لتغذية البشرة وحمايتها وتعزيز صحتها.",
  },
  image: "/images/results/skin-care-1.png",
},
{
  id: "skin-care-2",
  treatmentSlug: "skin-care",
  title: {
    en: "Skin Care",
    ar: "العناية بالبشرة",
  },
  description: {
    en: "Restore your skin's natural balance with customized skincare solutions designed to nourish, protect, and enhance your skin's overall health.",
    ar: "استعد التوازن الطبيعي لبشرتك من خلال حلول عناية مخصصة مصممة لتغذية البشرة وحمايتها وتعزيز صحتها.",
  },
  image: "/images/results/skin-care-1.png",
},

{
  id: "signature-facial-1",
  treatmentSlug: "signature-facial",
  title: {
    en: "Signature Facial",
    ar: "الفيشل المميز",
  },
  description: {
    en: "Experience the ultimate personalized facial treatment designed to restore your skin's natural glow, improve hydration, and leave your complexion refreshed and radiant.",
    ar: "استمتع بتجربة فيشل مخصصة مصممة لاستعادة الإشراقة الطبيعية لبشرتك، وتحسين ترطيبها، ومنحها مظهراً أكثر نضارة وإشراقاً.",
  },
  image: "/images/results/signature-facial-1.png",
},
{
  id: "signature-facial-2",
  treatmentSlug: "signature-facial",
  title: {
    en: "Signature Facial",
    ar: "الفيشل المميز",
  },
  description: {
    en: "Experience the ultimate personalized facial treatment designed to restore your skin's natural glow, improve hydration, and leave your complexion refreshed and radiant.",
    ar: "استمتع بتجربة فيشل مخصصة مصممة لاستعادة الإشراقة الطبيعية لبشرتك، وتحسين ترطيبها، ومنحها مظهراً أكثر نضارة وإشراقاً.",
  },
  image: "/images/results/signature-facial-2.png",
},

{
  id: "hydra-facial-1",
  treatmentSlug: "hydra-facial",
  title: {
    en: "Hydra Facial",
    ar: "هيدرا فيشل",
  },
  description: {
    en: "Deeply cleanse, hydrate, and rejuvenate your skin for a radiant, healthy-looking complexion with our advanced Hydra Facial treatment.",
    ar: "نظّف، ورطّب، وجدّد بشرتك بعمق للحصول على بشرة صحية ومشرقة مع علاج الهيدرا فيشل المتطور.",
  },
  image: "/images/results/hydra-facial-1.png",
},
{
  id: "hydra-facial-2",
  treatmentSlug: "hydra-facial",
  title: {
    en: "Hydra Facial",
    ar: "هيدرا فيشل",
  },
  description: {
    en: "Deeply cleanse, hydrate, and rejuvenate your skin for a radiant, healthy-looking complexion with our advanced Hydra Facial treatment.",
    ar: "نظّف، ورطّب، وجدّد بشرتك بعمق للحصول على بشرة صحية ومشرقة مع علاج الهيدرا فيشل المتطور.",
  },
  image: "/images/results/hydra-facial-2.png",
},


{
  id: "carbon-peel-1",
  treatmentSlug: "carbon-peel",
  title: {
    en: "Carbon Peel",
    ar: "تقشير الكربون",
  },
  description: {
    en: "Reveal refreshed and radiant skin with Carbon Peel—an advanced laser-based skin rejuvenation treatment designed to improve skin clarity and texture.",
    ar: "استمتع ببشرة أكثر إشراقًا ونضارة مع تقشير الكربون، وهو علاج متطور لتجديد البشرة بالليزر يحسن صفاء البشرة وملمسها.",
  },
  image: "/images/results/carbon-peel-1.png",
},
{
  id: "carbon-peel-2",
  treatmentSlug: "carbon-peel",
  title: {
    en: "Carbon Peel",
    ar: "تقشير الكربون",
  },
  description: {
    en: "Reveal refreshed and radiant skin with Carbon Peel—an advanced laser-based skin rejuvenation treatment designed to improve skin clarity and texture.",
    ar: "استمتع ببشرة أكثر إشراقًا ونضارة مع تقشير الكربون، وهو علاج متطور لتجديد البشرة بالليزر يحسن صفاء البشرة وملمسها.",
  },
  image: "/images/results/carbon-peel-2.png",
},

{
  id: "dermabrasion-1",
  treatmentSlug: "dermabrasion",
  title: {
    en: "Dermabrasion",
    ar: "الديرمابرايجن",
  },
  description: {
    en: "Reveal a smoother and more refined complexion with Dermabrasion, designed to gently resurface the skin and improve overall texture.",
    ar: "احصل على بشرة أكثر نعومة وصفاءً مع الديرمابرايجن، المصمم لتقشير البشرة بلطف وتحسين ملمسها.",
  },
  image: "/images/results/dermabrasion-1.png",
},
{
  id: "dermabrasion-2",
  treatmentSlug: "dermabrasion",
  title: {
    en: "Dermabrasion",
    ar: "الديرمابرايجن",
  },
  description: {
    en: "Reveal a smoother and more refined complexion with Dermabrasion, designed to gently resurface the skin and improve overall texture.",
    ar: "احصل على بشرة أكثر نعومة وصفاءً مع الديرمابرايجن، المصمم لتقشير البشرة بلطف وتحسين ملمسها.",
  },
  image: "/images/results/dermabrasion-2.png",
},

{
  id: "ultrasonic-treatments-1",
  treatmentSlug: "ultrasonic-treatments",
  title: {
    en: "Ultrasonic Treatments",
    ar: "العلاجات بالموجات فوق الصوتية",
  },
  description: {
    en: "Experience the benefits of advanced ultrasonic technology designed to improve skin health, hydration, and overall skin appearance.",
    ar: "استمتع بفوائد تقنية الموجات فوق الصوتية المتطورة المصممة لتحسين صحة البشرة وترطيبها ومظهرها العام.",
  },
  image: "/images/results/ultrasonic-treatments-1.png",
},
 

{
  id: "acne-treatment-1",
  treatmentSlug: "acne-treatment",
  title: {
    en: "Acne Treatment",
    ar: "علاج حب الشباب",
  },
  description: {
    en: "Achieve clearer and healthier-looking skin with our personalized Acne Treatment designed to reduce breakouts and improve skin balance.",
    ar: "احصل على بشرة أكثر صفاءً وصحة مع علاج حب الشباب المخصص لتقليل البثور وتحسين توازن البشرة.",
  },
  image: "/images/results/acne-treatment-1.png",
},
 

{
  id: "scar-treatment-1",
  treatmentSlug: "scar-treatment",
  title: {
    en: "Scar Treatment",
    ar: "علاج الندبات",
  },
  description: {
    en: "Improve the appearance of acne scars, injury marks, and uneven skin texture with personalized Scar Treatment solutions.",
    ar: "حسّن مظهر ندبات حب الشباب وآثار الإصابات وملمس البشرة غير المتجانس من خلال علاجات الندبات المخصصة.",
  },
  image: "/images/results/scar-treatment-1.png",
},
 
{
  id: "pigmentation-treatment-1",
  treatmentSlug: "pigmentation-treatment",
  title: {
    en: "Pigmentation Treatment",
    ar: "علاج التصبغات",
  },
  description: {
    en: "Restore balance and radiance to your skin with advanced Pigmentation Treatment designed to improve uneven skin tone and dark spots.",
    ar: "استعد توازن وإشراقة بشرتك مع علاج التصبغات المتطور المصمم لتحسين توحد لون البشرة وتقليل البقع الداكنة.",
  },
  image: "/images/results/pigmentation-treatment-1.png",
},
 

{
  id: "skin-brightening-rejuvenation-1",
  treatmentSlug: "skin-brightening-rejuvenation",
  title: {
    en: "Skin Brightening & Rejuvenation",
    ar: "تفتيح وتجديد البشرة",
  },
  description: {
    en: "Revitalize tired and dull-looking skin with our Skin Brightening & Rejuvenation treatment for a healthier, radiant complexion.",
    ar: "جدد البشرة الباهتة والمتعبة مع علاج تفتيح وتجديد البشرة للحصول على مظهر أكثر صحة وإشراقًا.",
  },
  image: "/images/results/skin-brightening-rejuvenation-1.png",
},
 {
  id: "laser-skin-treatments-1",
  treatmentSlug: "laser-skin-treatments",
  title: {
    en: "Laser Skin Treatments",
    ar: "علاجات البشرة بالليزر",
  },
  description: {
    en: "Experience the power of advanced laser technology designed to improve skin quality, texture, tone, and overall skin rejuvenation.",
    ar: "استمتع بقوة تقنية الليزر المتقدمة المصممة لتحسين جودة البشرة وملمسها ولونها وتجديدها بشكل عام.",
  },
  image: "/images/results/laser-skin-treatments-1.png",
},
 

{
  id: "tattoo-removal-1",
  treatmentSlug: "tattoo-removal",
  title: {
    en: "Tattoo Removal",
    ar: "إزالة الوشم",
  },
  description: {
    en: "Restore your skin's natural appearance with advanced Tattoo Removal treatment designed to gradually fade unwanted tattoo pigments safely and effectively.",
    ar: "استعد المظهر الطبيعي لبشرتك مع علاج إزالة الوشم المتطور المصمم لتقليل صبغات الوشم غير المرغوب فيها بأمان وفعالية.",
  },
  image: "/images/results/tattoo-removal-1.png",
},
 
];