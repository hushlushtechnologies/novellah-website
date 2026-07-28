import type { Localized } from "@/lib/navigation";

export type ArticleBlock =
  | { type: "paragraph"; text: Localized }
  | { type: "heading"; text: Localized }
  | { type: "list"; items: Localized[] }
  | { type: "imageGrid"; images: string[] };

export interface BlogPost {
  slug: string;
  title: Localized;
  excerpt: Localized;
  image: string;
  readTime: number;
  publishedDate: string; // e.g. "2026-07-01"
  featured?: boolean;
  intro?: Localized;
  body?: ArticleBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "everything-about-hydra-facial",
    title: {
      en: "Everything You Need to Know About Hydra Facial: The Secret to Healthy, Radiant Skin",
      ar: "كل ما تحتاجين معرفته عن هيدرا فيشل: سر البشرة الصحية والمشرقة",
    },
    excerpt: {
      en: "Hydra Facial has become one of the world's most popular non-invasive skincare treatments—and for good reason. From deep cleansing and gentle exfoliation to intense hydration and instant radiance, discover how this advanced treatment helps improve your skin's health with little to no downtime.",
      ar: "أصبح هيدرا فيشل أحد أشهر علاجات العناية بالبشرة غير الجراحية في العالم، ولسبب وجيه.",
    },
    image: "/images/blog/hydra-facial-guide.jpg",
    readTime: 5,
    publishedDate: "2026-07-01",
    featured: true,

      intro: {
    en: "Hydra Facial is one of today's most popular non-invasive skincare treatments, combining cleansing, exfoliation, extraction, hydration, and antioxidant protection in a single session. Discover how this advanced treatment can help restore healthier, brighter, and more youthful-looking skin.",
    ar: "هيدرا فيشل هو أحد أشهر علاجات العناية بالبشرة غير الجراحية اليوم، حيث يجمع بين التنظيف والتقشير والاستخراج والترطيب وحماية مضادات الأكسدة في جلسة واحدة.",
  },

    body: [
      { type: "heading", text: { en: "Introduction", ar: "مقدمة" } },
      {
        type: "paragraph",
        text: {
          en: "Healthy skin begins with proper care, hydration, and professional treatment. Hydra Facial has become one of the most trusted skincare procedures worldwide because it delivers immediate results without discomfort or downtime.",
          ar: "...",
        },
      },
      {
        type: "paragraph",
        text: {
          en: "Unlike traditional facials, Hydra Facial uses advanced vortex technology to gently cleanse, exfoliate, extract impurities, and deeply hydrate the skin. The treatment is suitable for a wide range of skin types and addresses multiple concerns in a single appointment.",
          ar: "...",
        },
      },
      {
        type: "paragraph",
        text: {
          en: "Whether you're preparing for a special occasion or simply maintaining healthy skin, Hydra Facial offers a refreshing experience that leaves your complexion looking brighter and feeling revitalized.",
          ar: "...",
        },
      },
      {
        type: "heading",
        text: { en: "Why Hydra Facial Is Different", ar: "..." },
      },
      {
        type: "paragraph",
        text: {
          en: "Hydra Facial combines several essential skincare steps into one advanced treatment, providing a comprehensive approach to skin health.",
          ar: "...",
        },
      },
      { type: "paragraph", text: { en: "The treatment includes:", ar: "..." } },
      {
        type: "list",
        items: [
          { en: "Deep cleansing to remove impurities", ar: "..." },
          { en: "Gentle exfoliation for smoother skin", ar: "..." },
          { en: "Painless extraction of clogged pores", ar: "..." },
          { en: "Intensive hydration with nourishing serums", ar: "..." },
          { en: "Antioxidant protection for healthier skin", ar: "..." },
        ],
      },
      {
        type: "paragraph",
        text: {
          en: "This multi-step process helps improve both the appearance and overall health of your skin.",
          ar: "...",
        },
      },
      { type: "heading", text: { en: "Benefits of Hydra Facial", ar: "..." } },
      {
        type: "paragraph",
        text: { en: "Regular Hydra Facial treatments may help:", ar: "..." },
      },
      {
        type: "list",
        items: [
          { en: "Improve skin hydration", ar: "..." },
          { en: "Brighten dull skin", ar: "..." },
          { en: "Reduce enlarged pores", ar: "..." },
          { en: "Smooth uneven skin texture", ar: "..." },
          { en: "Minimize fine lines", ar: "..." },
          { en: "Improve skin elasticity", ar: "..." },
          { en: "Support healthier skin barrier", ar: "..." },
          { en: "Enhance natural radiance", ar: "..." },
        ],
      },
      {
        type: "paragraph",
        text: {
          en: "Because the treatment is gentle and non-invasive, many clients notice visible improvements immediately after their session.",
          ar: "...",
        },
      },
      {
        type: "imageGrid",
        images: [
          "/images/blog/hydra-facial-guide.jpg",
          "/images/blog/hydra-facial-guide.jpg",
          "/images/blog/hydra-facial-guide.jpg",
          "/images/blog/hydra-facial-guide.jpg",
        ],
      },
      {
        type: "heading",
        text: { en: "Who Is Hydra Facial Suitable For?", ar: "..." },
      },
      {
        type: "paragraph",
        text: {
          en: "Hydra Facial is suitable for most skin types and can benefit individuals experiencing:",
          ar: "...",
        },
      },
      {
        type: "list",
        items: [
          { en: "Dry skin", ar: "..." },
          { en: "Oily skin", ar: "..." },
          { en: "Combination skin", ar: "..." },
          { en: "Congested pores", ar: "..." },
          { en: "Mild acne", ar: "..." },
          { en: "Uneven texture", ar: "..." },
          { en: "Fine lines", ar: "..." },
          { en: "Sun damage", ar: "..." },
          { en: "Dull complexion", ar: "..." },
        ],
      },
      {
        type: "paragraph",
        text: {
          en: "Before beginning treatment, our specialists perform a personalized skin assessment to ensure the treatment is appropriate for your skin's unique needs.",
          ar: "...",
        },
      },
    ],
  },
  {
  slug: "chemical-peel-benefits",
  title: {
    en: "Chemical Peel Benefits: Reveal Brighter, Healthier Skin",
    ar: "فوائد التقشير الكيميائي: بشرة أكثر إشراقًا وصحة",
  },
  excerpt: {
    en: "Chemical peels are an effective solution for improving skin texture, reducing pigmentation, and revealing a brighter complexion. Learn how this treatment works and who can benefit from it.",
    ar: "يُعد التقشير الكيميائي علاجًا فعالًا لتحسين ملمس البشرة وتقليل التصبغات والحصول على بشرة أكثر إشراقًا.",
  },
  image: "/images/blog/hydra-facial-guide.jpg",
  readTime: 6,
  publishedDate: "2026-07-08",
  featured: false,

  intro: {
    en: "Chemical peels are professional skin resurfacing treatments that remove damaged outer skin layers, helping reveal smoother, brighter, and healthier-looking skin while encouraging natural skin renewal.",
    ar: "التقشير الكيميائي هو علاج احترافي يساعد على إزالة الطبقات الخارجية التالفة من البشرة للحصول على بشرة أكثر نعومة وإشراقًا.",
  },

  body: [
    {
      type: "heading",
      text: {
        en: "Introduction",
        ar: "مقدمة",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Chemical peels have become one of the most popular aesthetic treatments for improving overall skin quality. They help reduce pigmentation, acne marks, and uneven texture while promoting healthier skin.",
        ar: "...",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Different peel strengths are available depending on your skin type and concerns, making the treatment highly customizable.",
        ar: "...",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "With proper aftercare and professional guidance, chemical peels can safely restore a brighter and smoother complexion.",
        ar: "...",
      },
    },

    {
      type: "heading",
      text: {
        en: "How Chemical Peels Work",
        ar: "...",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "The treatment gently removes damaged skin cells while stimulating new skin growth and collagen production.",
        ar: "...",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Benefits include:",
        ar: "...",
      },
    },
    {
      type: "list",
      items: [
        { en: "Exfoliates dead skin cells", ar: "..." },
        { en: "Improves skin texture", ar: "..." },
        { en: "Reduces pigmentation", ar: "..." },
        { en: "Stimulates collagen", ar: "..." },
        { en: "Brightens the complexion", ar: "..." },
      ],
    },
    {
      type: "paragraph",
      text: {
        en: "Regular treatments can significantly improve overall skin appearance.",
        ar: "...",
      },
    },

    {
      type: "heading",
      text: {
        en: "Benefits of Chemical Peels",
        ar: "...",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Chemical peels may help:",
        ar: "...",
      },
    },
    {
      type: "list",
      items: [
        { en: "Reduce acne scars", ar: "..." },
        { en: "Fade pigmentation", ar: "..." },
        { en: "Improve skin tone", ar: "..." },
        { en: "Smooth rough texture", ar: "..." },
        { en: "Reduce fine lines", ar: "..." },
        { en: "Increase skin radiance", ar: "..." },
        { en: "Boost collagen production", ar: "..." },
        { en: "Refresh tired-looking skin", ar: "..." },
      ],
    },
    {
      type: "paragraph",
      text: {
        en: "Most clients notice healthier and brighter skin after completing their recommended treatment plan.",
        ar: "...",
      },
    },

    {
      type: "imageGrid",
      images: [
        "/images/blog/hydra-facial-guide.jpg",
        "/images/blog/hydra-facial-guide.jpg",
        "/images/blog/hydra-facial-guide.jpg",
        "/images/blog/hydra-facial-guide.jpg",
      ],
    },

    {
      type: "heading",
      text: {
        en: "Who Can Benefit?",
        ar: "...",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Chemical peels are suitable for many skin concerns, including:",
        ar: "...",
      },
    },
    {
      type: "list",
      items: [
        { en: "Uneven skin tone", ar: "..." },
        { en: "Pigmentation", ar: "..." },
        { en: "Acne scars", ar: "..." },
        { en: "Fine lines", ar: "..." },
        { en: "Sun damage", ar: "..." },
        { en: "Large pores", ar: "..." },
        { en: "Rough skin texture", ar: "..." },
        { en: "Dull skin", ar: "..." },
      ],
    },
    {
      type: "paragraph",
      text: {
        en: "A consultation with our skincare specialists helps determine the most suitable peel for your skin type and goals.",
        ar: "...",
      },
    },
  ],
},
{
  slug: "laser-hair-removal-guide",
  title: {
    en: "Laser Hair Removal: Everything You Need to Know Before Your First Session",
    ar: "إزالة الشعر بالليزر: كل ما تحتاج إلى معرفته قبل جلستك الأولى",
  },
  excerpt: {
    en: "Laser hair removal is one of the most effective long-term solutions for unwanted hair. Learn how the treatment works, its benefits, and what to expect before and after your appointment.",
    ar: "تُعد إزالة الشعر بالليزر من أكثر الحلول فعالية للتخلص من الشعر غير المرغوب فيه على المدى الطويل.",
  },
  image: "/images/blog/hydra-facial-guide.jpg",
  readTime: 5,
  publishedDate: "2026-07-15",
  featured: false,

  intro: {
    en: "Laser hair removal is a safe and effective treatment designed to reduce unwanted hair growth by targeting hair follicles with concentrated light energy. It provides smoother skin with long-lasting results compared to traditional hair removal methods.",
    ar: "إزالة الشعر بالليزر هي تقنية آمنة وفعالة لتقليل نمو الشعر غير المرغوب فيه باستخدام أشعة الليزر التي تستهدف بصيلات الشعر.",
  },

  body: [
    {
      type: "heading",
      text: {
        en: "Introduction",
        ar: "مقدمة",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Laser hair removal has become one of the most requested aesthetic treatments worldwide due to its convenience and long-lasting results.",
        ar: "...",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Unlike shaving or waxing, laser technology targets the hair follicle, helping reduce future hair growth while keeping the surrounding skin unharmed.",
        ar: "...",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "With multiple sessions, clients can enjoy smoother skin with significantly less maintenance.",
        ar: "...",
      },
    },

    {
      type: "heading",
      text: {
        en: "How Laser Hair Removal Works",
        ar: "...",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "The laser emits concentrated light that is absorbed by the pigment inside the hair follicle, gradually reducing its ability to grow new hair.",
        ar: "...",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "The treatment process includes:",
        ar: "...",
      },
    },
    {
      type: "list",
      items: [
        { en: "Professional skin assessment", ar: "..." },
        { en: "Skin preparation", ar: "..." },
        { en: "Precision laser treatment", ar: "..." },
        { en: "Cooling for comfort", ar: "..." },
        { en: "Aftercare recommendations", ar: "..." },
      ],
    },
    {
      type: "paragraph",
      text: {
        en: "Each treatment is personalized according to your skin type and hair characteristics.",
        ar: "...",
      },
    },

    {
      type: "heading",
      text: {
        en: "Benefits of Laser Hair Removal",
        ar: "...",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Laser hair removal can help:",
        ar: "...",
      },
    },
    {
      type: "list",
      items: [
        { en: "Reduce unwanted hair growth", ar: "..." },
        { en: "Prevent ingrown hairs", ar: "..." },
        { en: "Save time on daily shaving", ar: "..." },
        { en: "Provide smoother skin", ar: "..." },
        { en: "Reduce skin irritation", ar: "..." },
        { en: "Deliver long-lasting results", ar: "..." },
        { en: "Treat multiple body areas", ar: "..." },
        { en: "Improve confidence", ar: "..." },
      ],
    },
    {
      type: "paragraph",
      text: {
        en: "Most clients notice progressive hair reduction after each treatment session.",
        ar: "...",
      },
    },

    {
      type: "imageGrid",
      images: [
        "/images/blog/hydra-facial-guide.jpg",
        "/images/blog/hydra-facial-guide.jpg",
        "/images/blog/hydra-facial-guide.jpg",
        "/images/blog/hydra-facial-guide.jpg",
      ],
    },

    {
      type: "heading",
      text: {
        en: "Who Is It Suitable For?",
        ar: "...",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Laser hair removal is suitable for many people looking for a long-term reduction in unwanted hair, including those with:",
        ar: "...",
      },
    },
    {
      type: "list",
      items: [
        { en: "Facial hair", ar: "..." },
        { en: "Leg hair", ar: "..." },
        { en: "Underarm hair", ar: "..." },
        { en: "Bikini area hair", ar: "..." },
        { en: "Chest hair", ar: "..." },
        { en: "Back hair", ar: "..." },
        { en: "Sensitive skin", ar: "..." },
        { en: "Frequent ingrown hairs", ar: "..." },
      ],
    },
    {
      type: "paragraph",
      text: {
        en: "Our specialists will evaluate your skin and hair type to recommend the safest and most effective treatment plan.",
        ar: "...",
      },
    },
  ],
},
];
