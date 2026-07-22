// lib/navigation.ts

interface Localized {
  en: string;
  ar: string;
}

interface NavLink {
  key: string;
  href: string;
  hasMegaMenu?: boolean;
}

export const navLinks : NavLink[] = [
  { key: "aboutUs", href: "/about-us" },
  { key: "treatments", href: "/treatments", hasMegaMenu: true },
  { key: "ourDoctors", href: "/our-doctors" },
  { key: "specialOffers", href: "/special-offer" },
  { key: "blogs", href: "/blog" },
  { key: "loyaltyCard", href: "/loyality-cards" },
  { key: "contactUs", href: "/contact-us" },
]  ;

 

 export const treatmentsMegaMenuPromo = {
  image: "/images/treatments-promo.png",
  heading: {
    en: "Radiate Confidence.\nReveal Your Best.",
    ar: "أشرقي بالثقة.\nأظهري أفضل ما لديك.",
  },
  subtext: {
    en: "Advanced Treatments Personalized for your",
    ar: "علاجات متطورة مخصصة لك",
  },
  ctaHref: "/book-appintment",
};

 export const treatmentsMegaMenuQuickLinks = [
  {
    label: {
      en: "SPECIAL OFFERS",
      ar: "العروض الخاصة",
    },
    subtext: {
      en: "Exclusive deals & packages",
      ar: "عروض وباقات حصرية",
    },
    href: "/special-offer",
  },
  {
    label: {
      en: "LOYALTY PROGRAM",
      ar: "برنامج الولاء",
    },
    subtext: {
      en: "Earn Points, enjoy rewards",
      ar: "اكسب النقاط واستمتع بالمكافآت",
    },
    href: "/loyalty-cards",
  },
];

// export interface TreatmentMenuCategory {
//   title: string;
//   categorySlug: string;
//    icon: string;
//   items: { label: string; slug: string }[];
// }

export interface TreatmentMenuCategory {
  title: Localized;
  categorySlug: string;
  icon: string;
  items: { slug: string; label: Localized }[];
}

 export const treatmentsMegaMenu: TreatmentMenuCategory[] = [
  {
    title: {
      en: "Hair Care & Beauty",
      ar: "العناية بالشعر والجمال",
    },
    categorySlug: "hair-care-beauty",
    icon: "/images/icons/haircare.png",
    items: [
      {
        slug: "hair-beauty",
        label: {
          en: "Hair Beauty",
          ar: "جمال الشعر",
        },
      },
      {
        slug: "hair-treatments",
        label: {
          en: "Hair Treatments",
          ar: "علاجات الشعر",
        },
      },
    ],
  },
  {
    title: {
      en: "Anti Aging Solution",
      ar: "حلول مكافحة الشيخوخة",
    },
    categorySlug: "anti-aging-solution",
    icon: "/images/icons/antiagin.png",
    items: [
      {
        slug: "anti-wrinkle",
        label: {
          en: "Anti Wrinkle",
          ar: "مكافحة التجاعيد",
        },
      },
      {
        slug: "anti-aging",
        label: {
          en: "Anti Aging",
          ar: "مكافحة الشيخوخة",
        },
      },
    ],
  },
  {
    title: {
      en: "Consultation & Analysis",
      ar: "الاستشارة والتحليل",
    },
    categorySlug: "consultation-analysis",
    icon: "/images/icons/consultation.png",
    items: [
      {
        slug: "skin-analysis",
        label: {
          en: "Skin Analysis",
          ar: "تحليل البشرة",
        },
      },
      {
        slug: "scalp-analysis",
        label: {
          en: "Scalp Analysis",
          ar: "تحليل فروة الرأس",
        },
      },
      {
        slug: "advanced-beauty-technology",
        label: {
          en: "Advanced Beauty Technology",
          ar: "تقنيات التجميل المتقدمة",
        },
      },
    ],
  },
  {
    title: {
      en: "Advanced Skin Care",
      ar: "العناية المتقدمة بالبشرة",
    },
    categorySlug: "advanced-skin-care",
    icon: "/images/icons/advancedskincare.png",
    items: [
      {
        slug: "skin-care",
        label: {
          en: "Skin Care",
          ar: "العناية بالبشرة",
        },
      },
      {
        slug: "signature-facial",
        label: {
          en: "Signature Facial",
          ar: "جلسة الوجه المميزة",
        },
      },
      {
        slug: "hydra-facial",
        label: {
          en: "Hydra Facial",
          ar: "هيدرا فيشل",
        },
      },
      {
        slug: "carbon-peel",
        label: {
          en: "Carbon Peel",
          ar: "تقشير الكربون",
        },
      },
      {
        slug: "dermabrasion",
        label: {
          en: "Dermabrasion",
          ar: "سنفرة البشرة",
        },
      },
      {
        slug: "ultrasonic-treatment",
        label: {
          en: "Ultrasonic Treatment",
          ar: "العلاج بالموجات فوق الصوتية",
        },
      },
      {
        slug: "acne-treatment",
        label: {
          en: "Acne Treatment",
          ar: "علاج حب الشباب",
        },
      },
      {
        slug: "scar-treatment",
        label: {
          en: "Scar Treatment",
          ar: "علاج الندبات",
        },
      },
      {
        slug: "pigmentation-treatment",
        label: {
          en: "Pigmentation Treatment",
          ar: "علاج التصبغات",
        },
      },
      {
        slug: "skin-brightening-rejuvenation",
        label: {
          en: "Skin Brightening & Rejuvenation",
          ar: "تفتيح وتجديد البشرة",
        },
      },
    ],
  },
  {
    title: {
      en: "Laser Treatment",
      ar: "العلاج بالليزر",
    },
    categorySlug: "laser-treatment",
    icon: "/images/icons/lasertreatment.png",
    items: [
      {
        slug: "laser-skin-treatments",
        label: {
          en: "Laser Skin Treatments",
          ar: "علاجات البشرة بالليزر",
        },
      },
      {
        slug: "tattoo-removal",
        label: {
          en: "Tattoo Removal",
          ar: "إزالة الوشم",
        },
      },
      {
        slug: "laser-hair-removal",
        label: {
          en: "Laser Hair Removal",
          ar: "إزالة الشعر بالليزر",
        },
      },
    ],
  },
  {
    title: {
      en: "Beauty Enhancement",
      ar: "تعزيز الجمال",
    },
    categorySlug: "beauty-enhancement",
    icon: "/images/icons/beautyenhancement.png",
    items: [
      {
        slug: "microblading",
        label: {
          en: "Microblading",
          ar: "مايكروبليدنج",
        },
      },
      {
        slug: "permanent-makeup",
        label: {
          en: "Permanent Makeup",
          ar: "المكياج الدائم",
        },
      },
      {
        slug: "pmu-lip-blush",
        label: {
          en: "PMU Lip Blush",
          ar: "توريد الشفاه الدائم",
        },
      },
      {
        slug: "bridal-makeup",
        label: {
          en: "Bridal & Makeup",
          ar: "مكياج العروس",
        },
      },
      {
        slug: "nails",
        label: {
          en: "Nails",
          ar: "العناية بالأظافر",
        },
      },
      {
        slug: "manicure-pedicure",
        label: {
          en: "Manicure & Pedicure",
          ar: "مانيكير وباديكير",
        },
      },
    ],
  },
];