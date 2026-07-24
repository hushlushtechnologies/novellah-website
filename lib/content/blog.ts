import type { Localized } from "@/lib/navigation";

export interface BlogPost {
  slug: string;
  title: Localized;
  excerpt: Localized;
  image: string;
  readTime: number;
  publishedDate: string; // e.g. "2026-07-01"
  featured?: boolean;
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
  },
  {
    slug: "benefits-of-laser-hair-removal",
    title: {
      en: "Top Benefits of Laser Hair Removal: What You Should Know Before Your First Session",
      ar: "أهم فوائد إزالة الشعر بالليزر: ما يجب معرفته قبل جلستك الأولى",
    },
    excerpt: {
      en: "Laser hair removal offers a long-term solution for unwanted hair with minimal discomfort. Learn how the treatment works, who it's suitable for, and what results you can expect.",
      ar: "توفر إزالة الشعر بالليزر حلاً طويل الأمد للشعر غير المرغوب فيه مع أقل قدر من الانزعاج. تعرف على كيفية عمل العلاج والنتائج المتوقعة.",
    },
    image: "/images/blog/hydra-facial-guide.jpg",
    readTime: 4,
    publishedDate: "2026-07-10",
    featured: false,
  },
  {
    slug: "daily-skincare-routine",
    title: {
      en: "The Perfect Daily Skincare Routine for Healthy and Glowing Skin",
      ar: "روتين العناية اليومي المثالي لبشرة صحية ومشرقة",
    },
    excerpt: {
      en: "A consistent skincare routine is the foundation of beautiful skin. Discover the essential morning and evening steps recommended by skincare professionals.",
      ar: "يُعد روتين العناية بالبشرة المنتظم أساس الحصول على بشرة جميلة. اكتشف الخطوات الأساسية الصباحية والمسائية التي ينصح بها الخبراء.",
    },
    image: "/images/blog/hydra-facial-guide.jpg",
    readTime: 6,
    publishedDate: "2026-07-18",
    featured: false,
  },
];