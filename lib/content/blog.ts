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
  publishedDate: string;
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
      ar: "أصبح هيدرا فيشل أحد أشهر علاجات العناية بالبشرة غير الجراحية في العالم، ولسبب وجيه. من التنظيف العميق والتقشير اللطيف إلى الترطيب المكثف والإشراقة الفورية، اكتشفي كيف يساعد هذا العلاج المتطور على تحسين صحة بشرتك دون وقت تعافٍ يُذكر.",
    },
    image: "/images/blog/hydra-facial-guide.jpg",
    readTime: 5,
    publishedDate: "2026-07-01",
    featured: true,

    intro: {
      en: "Hydra Facial is one of today's most popular non-invasive skincare treatments, combining cleansing, exfoliation, extraction, hydration, and antioxidant protection in a single session. Discover how this advanced treatment can help restore healthier, brighter, and more youthful-looking skin.",
      ar: "هيدرا فيشل هو أحد أشهر علاجات العناية بالبشرة غير الجراحية اليوم، حيث يجمع بين التنظيف والتقشير والاستخراج والترطيب وحماية مضادات الأكسدة في جلسة واحدة. اكتشفي كيف يساعد هذا العلاج المتطور على استعادة بشرة أكثر صحة وإشراقًا وشبابًا.",
    },

    body: [
      { type: "heading", text: { en: "Introduction", ar: "مقدمة" } },
      {
        type: "paragraph",
        text: {
          en: "Healthy skin begins with proper care, hydration, and professional treatment. Hydra Facial has become one of the most trusted skincare procedures worldwide because it delivers immediate results without discomfort or downtime.",
          ar: "تبدأ البشرة الصحية بالعناية السليمة والترطيب والعلاج الاحترافي. أصبح هيدرا فيشل من أكثر إجراءات العناية بالبشرة الموثوقة حول العالم لأنه يقدم نتائج فورية دون ألم أو وقت تعافٍ.",
        },
      },
      {
        type: "paragraph",
        text: {
          en: "Unlike traditional facials, Hydra Facial uses advanced vortex technology to gently cleanse, exfoliate, extract impurities, and deeply hydrate the skin. The treatment is suitable for a wide range of skin types and addresses multiple concerns in a single appointment.",
          ar: "على عكس جلسات تنظيف البشرة التقليدية، يستخدم هيدرا فيشل تقنية الدوامة المتقدمة لتنظيف البشرة بلطف وتقشيرها واستخراج الشوائب وترطيبها بعمق. يناسب العلاج مجموعة واسعة من أنواع البشرة ويعالج عدة مشكلات في جلسة واحدة.",
        },
      },
      {
        type: "paragraph",
        text: {
          en: "Whether you're preparing for a special occasion or simply maintaining healthy skin, Hydra Facial offers a refreshing experience that leaves your complexion looking brighter and feeling revitalized.",
          ar: "سواء كنتِ تستعدين لمناسبة خاصة أو ترغبين ببساطة في الحفاظ على بشرة صحية، يقدم لكِ هيدرا فيشل تجربة منعشة تترك بشرتك أكثر إشراقًا وحيوية.",
        },
      },
      {
        type: "heading",
        text: {
          en: "Why Hydra Facial Is Different",
          ar: "لماذا يتميز هيدرا فيشل؟",
        },
      },
      {
        type: "paragraph",
        text: {
          en: "Hydra Facial combines several essential skincare steps into one advanced treatment, providing a comprehensive approach to skin health.",
          ar: "يجمع هيدرا فيشل بين عدة خطوات أساسية للعناية بالبشرة في علاج واحد متطور، مما يوفر نهجًا شاملاً لصحة البشرة.",
        },
      },
      {
        type: "paragraph",
        text: { en: "The treatment includes:", ar: "يشمل العلاج:" },
      },
      {
        type: "list",
        items: [
          {
            en: "Deep cleansing to remove impurities",
            ar: "تنظيف عميق لإزالة الشوائب",
          },
          {
            en: "Gentle exfoliation for smoother skin",
            ar: "تقشير لطيف لبشرة أكثر نعومة",
          },
          {
            en: "Painless extraction of clogged pores",
            ar: "استخراج غير مؤلم للمسام المسدودة",
          },
          {
            en: "Intensive hydration with nourishing serums",
            ar: "ترطيب مكثف بمصل مغذٍ",
          },
          {
            en: "Antioxidant protection for healthier skin",
            ar: "حماية بمضادات الأكسدة لبشرة أكثر صحة",
          },
        ],
      },
      {
        type: "paragraph",
        text: {
          en: "This multi-step process helps improve both the appearance and overall health of your skin.",
          ar: "تساعد هذه العملية متعددة الخطوات على تحسين مظهر بشرتك وصحتها العامة.",
        },
      },
      {
        type: "heading",
        text: { en: "Benefits of Hydra Facial", ar: "فوائد هيدرا فيشل" },
      },
      {
        type: "paragraph",
        text: {
          en: "Regular Hydra Facial treatments may help:",
          ar: "قد تساعد جلسات هيدرا فيشل المنتظمة في:",
        },
      },
      {
        type: "list",
        items: [
          { en: "Improve skin hydration", ar: "تحسين ترطيب البشرة" },
          { en: "Brighten dull skin", ar: "تفتيح البشرة الباهتة" },
          { en: "Reduce enlarged pores", ar: "تقليل ظهور المسام الواسعة" },
          {
            en: "Smooth uneven skin texture",
            ar: "تنعيم ملمس البشرة غير المتساوي",
          },
          { en: "Minimize fine lines", ar: "تقليل الخطوط الدقيقة" },
          { en: "Improve skin elasticity", ar: "تحسين مرونة البشرة" },
          {
            en: "Support healthier skin barrier",
            ar: "دعم حاجز بشرة أكثر صحة",
          },
          { en: "Enhance natural radiance", ar: "تعزيز الإشراقة الطبيعية" },
        ],
      },
      {
        type: "paragraph",
        text: {
          en: "Because the treatment is gentle and non-invasive, many clients notice visible improvements immediately after their session.",
          ar: "نظرًا لأن العلاج لطيف وغير جراحي، يلاحظ العديد من العميلات تحسنًا واضحًا فور انتهاء الجلسة.",
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
          en: "Who Is Hydra Facial Suitable For?",
          ar: "لمن يناسب هيدرا فيشل؟",
        },
      },
      {
        type: "paragraph",
        text: {
          en: "Hydra Facial is suitable for most skin types and can benefit individuals experiencing:",
          ar: "يناسب هيدرا فيشل معظم أنواع البشرة، ويمكن أن يفيد الأشخاص الذين يعانون من:",
        },
      },
      {
        type: "list",
        items: [
          { en: "Dry skin", ar: "البشرة الجافة" },
          { en: "Oily skin", ar: "البشرة الدهنية" },
          { en: "Combination skin", ar: "البشرة المختلطة" },
          { en: "Congested pores", ar: "المسام المسدودة" },
          { en: "Mild acne", ar: "حب الشباب الخفيف" },
          { en: "Uneven texture", ar: "الملمس غير المتساوي" },
          { en: "Fine lines", ar: "الخطوط الدقيقة" },
          { en: "Sun damage", ar: "أضرار أشعة الشمس" },
          { en: "Dull complexion", ar: "البشرة الباهتة" },
        ],
      },
      {
        type: "paragraph",
        text: {
          en: "Before beginning treatment, our specialists perform a personalized skin assessment to ensure the treatment is appropriate for your skin's unique needs.",
          ar: "قبل بدء العلاج، يقوم أخصائيونا بإجراء تقييم شخصي للبشرة للتأكد من ملاءمة العلاج لاحتياجات بشرتك الفريدة.",
        },
      },
    ],
  },
{
    slug: "chemical-peels-101",
    title: {
      en: "Chemical Peels 101: How to Reveal Brighter, Smoother Skin",
      ar: "التقشير الكيميائي: كيف تحصلين على بشرة أكثر إشراقًا ونعومة",
    },
    excerpt: {
      en: "Chemical peels have long been a trusted solution for clients looking to refresh dull, uneven, or textured skin. By using a carefully formulated acid solution, this treatment removes damaged outer layers of skin to reveal the healthier, smoother skin underneath.",
      ar: "لطالما كان التقشير الكيميائي حلاً موثوقًا للعميلات الراغبات في تجديد البشرة الباهتة أو غير المتساوية أو ذات الملمس الخشن. باستخدام محلول حمضي مدروس بعناية، يزيل هذا العلاج الطبقات الخارجية التالفة من البشرة ليكشف عن بشرة أكثر صحة ونعومة.",
    },
    image: "/images/blog/chemical-peels-101.png",
    readTime: 5,
    publishedDate: "2026-07-01",

    intro: {
      en: "Chemical peels have long been a trusted solution for clients looking to refresh dull, uneven, or textured skin. By using a carefully formulated acid solution, this treatment removes damaged outer layers of skin to reveal the healthier, smoother skin underneath.",
      ar: "لطالما كان التقشير الكيميائي حلاً موثوقًا للعميلات الراغبات في تجديد البشرة الباهتة أو غير المتساوية أو ذات الملمس الخشن. باستخدام محلول حمضي مدروس بعناية، يزيل هذا العلاج الطبقات الخارجية التالفة من البشرة ليكشف عن بشرة أكثر صحة ونعومة.",
    },

    body: [
      { type: "heading", text: { en: "Introduction", ar: "مقدمة" } },
      {
        type: "paragraph",
        text: {
          en: "Chemical peels have long been a trusted solution for clients looking to refresh dull, uneven, or textured skin. By using a carefully formulated acid solution, this treatment removes damaged outer layers of skin to reveal the healthier, smoother skin underneath.",
          ar: "لطالما كان التقشير الكيميائي حلاً موثوقًا للعميلات الراغبات في تجديد البشرة الباهتة أو غير المتساوية أو ذات الملمس الخشن. باستخدام محلول حمضي مدروس بعناية، يزيل هذا العلاج الطبقات الخارجية التالفة من البشرة ليكشف عن بشرة أكثر صحة ونعومة.",
        },
      },
      {
        type: "paragraph",
        text: {
          en: "At Novellah Restyle, our chemical peels are tailored to each client's skin type and concerns, ranging from light, no-downtime peels to deeper resurfacing treatments for more visible results.",
          ar: "في نوفيلا ريستايل، نصمم جلسات التقشير الكيميائي وفقًا لنوع بشرة كل عميلة واحتياجاتها، بدءًا من التقشير الخفيف دون وقت تعافٍ وصولًا إلى علاجات التجديد الأعمق لنتائج أكثر وضوحًا.",
        },
      },
      {
        type: "paragraph",
        text: {
          en: "With consistent treatment, chemical peels can transform the tone, texture, and overall clarity of your complexion.",
          ar: "مع الاستمرار في العلاج، يمكن للتقشير الكيميائي أن يحدث تحولًا في لون بشرتك وملمسها ونقائها بشكل عام.",
        },
      },
      {
        type: "heading",
        text: { en: "Why Chemical Peels Are Different", ar: "لماذا يتميز التقشير الكيميائي؟" },
      },
      {
        type: "paragraph",
        text: {
          en: "Unlike surface-level exfoliants, chemical peels work at a controlled depth to accelerate skin renewal.",
          ar: "على عكس المقشرات السطحية، يعمل التقشير الكيميائي على عمق محكوم لتسريع تجدد البشرة.",
        },
      },
      {
        type: "list",
        items: [
          { en: "Customizable strength based on skin concerns", ar: "قوة قابلة للتخصيص حسب مشكلات البشرة" },
          { en: "Stimulates natural cell turnover", ar: "يحفز التجدد الطبيعي لخلايا البشرة" },
          { en: "Targets pigmentation at a deeper level", ar: "يعالج التصبغات على مستوى أعمق" },
          { en: "Improves the effectiveness of home skincare products", ar: "يحسّن فعالية منتجات العناية بالبشرة المنزلية" },
          { en: "Available in light, medium, and deep formulations", ar: "متوفر بتركيزات خفيفة ومتوسطة وعميقة" },
        ],
      },
      {
        type: "paragraph",
        text: {
          en: "This targeted approach allows our specialists to address specific skin concerns with precision.",
          ar: "يتيح هذا النهج الموجّه لأخصائيينا معالجة مشكلات بشرة محددة بدقة.",
        },
      },
      {
        type: "heading",
        text: { en: "Benefits of Chemical Peels", ar: "فوائد التقشير الكيميائي" },
      },
      {
        type: "paragraph",
        text: {
          en: "Regular chemical peel treatments may help:",
          ar: "قد تساعد جلسات التقشير الكيميائي المنتظمة في:",
        },
      },
      {
        type: "list",
        items: [
          { en: "Even out skin tone", ar: "توحيد لون البشرة" },
          { en: "Fade dark spots and hyperpigmentation", ar: "تفتيح البقع الداكنة والتصبغات" },
          { en: "Reduce the appearance of acne scars", ar: "تقليل ظهور ندبات حب الشباب" },
          { en: "Smooth rough or bumpy texture", ar: "تنعيم الملمس الخشن أو غير المستوي" },
          { en: "Minimize fine lines", ar: "تقليل الخطوط الدقيقة" },
          { en: "Shrink the appearance of pores", ar: "تصغير مظهر المسام" },
          { en: "Boost overall radiance", ar: "تعزيز الإشراقة العامة للبشرة" },
          { en: "Improve product absorption", ar: "تحسين امتصاص منتجات العناية" },
        ],
      },
      {
        type: "paragraph",
        text: {
          en: "Most clients notice smoother, more even-toned skin within days of their peel, with continued improvement over the following weeks.",
          ar: "تلاحظ معظم العميلات بشرة أكثر نعومة وتوحدًا في اللون خلال أيام من الجلسة، مع تحسن مستمر خلال الأسابيع التالية.",
        },
      },
      {
        type: "imageGrid",
        images: [
          "/images/blog/carbon-peel-1.jpg",
          "/images/blog/carbon-peel-2.jpg",
          "/images/blog/carbon-peel-3.jpg",
          "/images/blog/carbon-peel-4.jpg",
        ],
      },
      {
        type: "heading",
        text: { en: "Who Are Chemical Peels Suitable For?", ar: "لمن يناسب التقشير الكيميائي؟" },
      },
      {
        type: "paragraph",
        text: {
          en: "Chemical peels can benefit individuals experiencing:",
          ar: "يمكن أن يفيد التقشير الكيميائي الأشخاص الذين يعانون من:",
        },
      },
      {
        type: "list",
        items: [
          { en: "Dull or tired-looking skin", ar: "بشرة باهتة أو تبدو متعبة" },
          { en: "Uneven skin tone", ar: "لون بشرة غير متساوٍ" },
          { en: "Sun damage", ar: "أضرار أشعة الشمس" },
          { en: "Mild acne scarring", ar: "ندبات خفيفة لحب الشباب" },
          { en: "Hyperpigmentation", ar: "فرط التصبغ" },
          { en: "Fine lines and early aging", ar: "الخطوط الدقيقة وعلامات الشيخوخة المبكرة" },
          { en: "Rough or textured skin", ar: "بشرة خشنة أو غير ناعمة الملمس" },
          { en: "Clogged or enlarged pores", ar: "مسام مسدودة أو واسعة" },
        ],
      },
      {
        type: "paragraph",
        text: {
          en: "A consultation with our skincare specialists will determine the right peel strength for your skin and goals.",
          ar: "ستساعدك استشارة مع أخصائيي العناية بالبشرة لدينا في تحديد التركيز المناسب للتقشير بحسب بشرتك وأهدافك.",
        },
      },
    ],
  },
  {
    slug: "microneedling-explained",
    title: {
      en: "Microneedling Explained: Boosting Collagen for Youthful Skin",
      ar: "المايكرونيدلينج: كيف يعزز الكولاجين لبشرة أكثر شبابًا",
    },
    excerpt: {
      en: "Microneedling has become a go-to treatment for clients seeking firmer, more youthful-looking skin without surgery. The procedure uses fine, sterile needles to create controlled micro-injuries in the skin, triggering the body's natural healing response.",
      ar: "أصبح المايكرونيدلينج علاجًا مفضلاً للعميلات الراغبات في بشرة أكثر شدًا وشبابًا دون جراحة. يستخدم هذا الإجراء إبرًا دقيقة ومعقمة لإحداث إصابات دقيقة ومحكومة في البشرة، مما يحفز استجابة الجسم الطبيعية للشفاء.",
    },
    image: "/images/blog/microneedling-cover.jpg",
    readTime: 5,
    publishedDate: "2026-07-01",

    intro: {
      en: "Microneedling has become a go-to treatment for clients seeking firmer, more youthful-looking skin without surgery. The procedure uses fine, sterile needles to create controlled micro-injuries in the skin, triggering the body's natural healing response.",
      ar: "أصبح المايكرونيدلينج علاجًا مفضلاً للعميلات الراغبات في بشرة أكثر شدًا وشبابًا دون جراحة. يستخدم هذا الإجراء إبرًا دقيقة ومعقمة لإحداث إصابات دقيقة ومحكومة في البشرة، مما يحفز استجابة الجسم الطبيعية للشفاء.",
    },

    body: [
      { type: "heading", text: { en: "Introduction", ar: "مقدمة" } },
      {
        type: "paragraph",
        text: {
          en: "Microneedling has become a go-to treatment for clients seeking firmer, more youthful-looking skin without surgery. The procedure uses fine, sterile needles to create controlled micro-injuries in the skin, triggering the body's natural healing response.",
          ar: "أصبح المايكرونيدلينج علاجًا مفضلاً للعميلات الراغبات في بشرة أكثر شدًا وشبابًا دون جراحة. يستخدم هذا الإجراء إبرًا دقيقة ومعقمة لإحداث إصابات دقيقة ومحكومة في البشرة، مما يحفز استجابة الجسم الطبيعية للشفاء.",
        },
      },
      {
        type: "paragraph",
        text: {
          en: "This process stimulates collagen and elastin production, two proteins essential for skin's structure and firmness. Over time, the skin becomes noticeably smoother, tighter, and more resilient.",
          ar: "تحفز هذه العملية إنتاج الكولاجين والإيلاستين، وهما بروتينان أساسيان لبنية البشرة وشدها. ومع الوقت، تصبح البشرة أكثر نعومة وشدًا ومرونة بشكل ملحوظ.",
        },
      },
      {
        type: "paragraph",
        text: {
          en: "At Novellah Restyle, microneedling sessions are performed by trained specialists using medical-grade devices for safe, consistent results.",
          ar: "في نوفيلا ريستايل، تُجرى جلسات المايكرونيدلينج على يد أخصائيين مدربين باستخدام أجهزة طبية معتمدة لضمان نتائج آمنة وثابتة.",
        },
      },
      {
        type: "heading",
        text: { en: "Why Microneedling Is Different", ar: "لماذا يتميز المايكرونيدلينج؟" },
      },
      {
        type: "paragraph",
        text: {
          en: "Microneedling works below the skin's surface to encourage long-term renewal rather than temporary improvement.",
          ar: "يعمل المايكرونيدلينج تحت سطح البشرة لتحفيز تجدد طويل الأمد بدلًا من تحسن مؤقت.",
        },
      },
      {
        type: "list",
        items: [
          { en: "Stimulates natural collagen production", ar: "يحفز إنتاج الكولاجين الطبيعي" },
          { en: "Improves the skin's structural support", ar: "يحسّن الدعم البنيوي للبشرة" },
          { en: "Enhances absorption of serums during treatment", ar: "يعزز امتصاص المصل أثناء الجلسة" },
          { en: "Minimal downtime compared to more invasive procedures", ar: "وقت تعافٍ أقل مقارنة بالإجراءات الأكثر تدخلاً" },
          { en: "Suitable for face, neck, and other areas of concern", ar: "مناسب للوجه والرقبة ومناطق أخرى" },
        ],
      },
      {
        type: "paragraph",
        text: {
          en: "Because results build gradually, microneedling is often recommended as part of an ongoing skincare plan.",
          ar: "نظرًا لأن النتائج تتراكم تدريجيًا، غالبًا ما يُوصى بالمايكرونيدلينج كجزء من خطة عناية مستمرة بالبشرة.",
        },
      },
      {
        type: "heading",
        text: { en: "Benefits of Microneedling", ar: "فوائد المايكرونيدلينج" },
      },
      {
        type: "paragraph",
        text: {
          en: "Regular microneedling treatments may help:",
          ar: "قد تساعد جلسات المايكرونيدلينج المنتظمة في:",
        },
      },
      {
        type: "list",
        items: [
          { en: "Improve skin firmness and elasticity", ar: "تحسين شد البشرة ومرونتها" },
          { en: "Soften fine lines and wrinkles", ar: "تنعيم الخطوط الدقيقة والتجاعيد" },
          { en: "Reduce the appearance of acne scars", ar: "تقليل ظهور ندبات حب الشباب" },
          { en: "Refine enlarged pores", ar: "تحسين مظهر المسام الواسعة" },
          { en: "Even out skin texture", ar: "توحيد ملمس البشرة" },
          { en: "Improve overall skin tone", ar: "تحسين لون البشرة بشكل عام" },
          { en: "Boost collagen production", ar: "تعزيز إنتاج الكولاجين" },
          { en: "Enhance the effectiveness of skincare products", ar: "تعزيز فعالية منتجات العناية بالبشرة" },
        ],
      },
      {
        type: "paragraph",
        text: {
          en: "Visible improvements typically continue for several weeks after treatment as new collagen forms.",
          ar: "عادةً ما تستمر التحسينات الملحوظة لعدة أسابيع بعد الجلسة مع تكوّن الكولاجين الجديد.",
        },
      },
      {
        type: "imageGrid",
        images: [
          "/images/blog/microneedling-1.jpg",
          "/images/blog/microneedling-2.jpg",
          "/images/blog/microneedling-3.jpg",
          "/images/blog/microneedling-4.jpg",
        ],
      },
      {
        type: "heading",
        text: { en: "Who Is Microneedling Suitable For?", ar: "لمن يناسب المايكرونيدلينج؟" },
      },
      {
        type: "paragraph",
        text: {
          en: "Microneedling is suitable for most skin types and can benefit individuals experiencing:",
          ar: "يناسب المايكرونيدلينج معظم أنواع البشرة، ويمكن أن يفيد الأشخاص الذين يعانون من:",
        },
      },
      {
        type: "list",
        items: [
          { en: "Fine lines and early signs of aging", ar: "الخطوط الدقيقة وعلامات الشيخوخة المبكرة" },
          { en: "Acne scarring", ar: "ندبات حب الشباب" },
          { en: "Enlarged pores", ar: "المسام الواسعة" },
          { en: "Uneven skin texture", ar: "ملمس بشرة غير متساوٍ" },
          { en: "Loss of skin firmness", ar: "فقدان شد البشرة" },
          { en: "Dull complexion", ar: "البشرة الباهتة" },
          { en: "Stretch marks", ar: "علامات التمدد" },
          { en: "Sun-damaged skin", ar: "بشرة متضررة من أشعة الشمس" },
        ],
      },
      {
        type: "paragraph",
        text: {
          en: "A personalized skin assessment ensures microneedling is the right fit for your skin type and goals.",
          ar: "يضمن التقييم الشخصي للبشرة أن يكون المايكرونيدلينج الخيار المناسب لنوع بشرتك وأهدافك.",
        },
      },
    ],
  },
  {
  slug: "led-light-therapy-science-behind-glowing-skin",
  title: {
    en: "LED Light Therapy: The Science Behind Glowing Skin",
    ar: "العلاج بالضوء LED: العلم وراء البشرة المتألقة",
  },
  excerpt: {
    en: "LED Light Therapy is a gentle, non-invasive treatment that uses specific wavelengths of light to target a range of skin concerns. Backed by decades of research, this technology offers a relaxing, no-downtime solution for healthier, brighter-looking skin.",
    ar: "العلاج بالضوء LED هو علاج لطيف وغير جراحي يستخدم أطوالًا موجية محددة من الضوء لاستهداف مجموعة متنوعة من مشاكل البشرة. وبفضل الأبحاث الممتدة لعقود، يوفر هذا العلاج حلاً مريحًا دون فترة تعافٍ للحصول على بشرة أكثر صحة وإشراقًا.",
  },
  image: "/images/blog/led-light-therapy-cover.jpg",
  readTime: 5,
  publishedDate: "2026-07-01",

  intro: {
    en: "LED Light Therapy is a gentle, non-invasive treatment that uses specific wavelengths of light to target a range of skin concerns. Backed by decades of research, this technology is a favorite among clients looking for a relaxing, no-downtime way to improve their skin. Different light colors penetrate the skin at varying depths, each offering unique benefits—from calming inflammation to stimulating collagen production. At Novellah Restyle, LED Light Therapy is often paired with other treatments to enhance results and support the skin's natural healing process.",
    ar: "العلاج بالضوء LED هو علاج لطيف وغير جراحي يستخدم أطوالًا موجية محددة من الضوء لاستهداف مختلف مشاكل البشرة. يعتمد على أبحاث علمية تمتد لعقود، ويُعد خيارًا مثاليًا لمن يبحثون عن تحسين البشرة دون ألم أو فترة تعافٍ. تخترق ألوان الضوء المختلفة البشرة بأعماق متفاوتة لتقديم فوائد متعددة، بدءًا من تهدئة الالتهابات وحتى تحفيز إنتاج الكولاجين. في نوفيلا ريستايل، غالبًا ما يُدمج العلاج بالضوء LED مع علاجات أخرى لتعزيز النتائج ودعم عملية تجدد البشرة الطبيعية.",
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
        en: "LED Light Therapy is a gentle, non-invasive treatment that uses specific wavelengths of light to target a range of skin concerns. Backed by decades of research, this technology is a favorite among clients looking for a relaxing, no-downtime way to improve their skin.",
        ar: "العلاج بالضوء LED هو علاج لطيف وغير جراحي يستخدم أطوالًا موجية محددة من الضوء لاستهداف مجموعة متنوعة من مشاكل البشرة، ويُعد خيارًا شائعًا لمن يبحثون عن تحسين البشرة دون فترة تعافٍ.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Different light colors penetrate the skin at varying depths, each offering unique benefits—from calming inflammation to stimulating collagen production.",
        ar: "تخترق ألوان الضوء المختلفة البشرة بأعماق متفاوتة، ويقدم كل لون فوائد مميزة، بدءًا من تهدئة الالتهابات وحتى تحفيز إنتاج الكولاجين.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "At Novellah Restyle, LED Light Therapy is often paired with other treatments to enhance results and support the skin's natural healing process.",
        ar: "في نوفيلا ريستايل، غالبًا ما يُستخدم العلاج بالضوء LED مع علاجات أخرى لتعزيز النتائج ودعم عملية التعافي الطبيعية للبشرة.",
      },
    },

    {
      type: "heading",
      text: {
        en: "Why LED Light Therapy Is Different",
        ar: "ما الذي يميز العلاج بالضوء LED؟",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "LED therapy works with the skin's natural cellular processes rather than physically altering the skin's surface.",
        ar: "يعتمد العلاج بالضوء LED على دعم العمليات الطبيعية لخلايا البشرة بدلاً من تغيير سطح البشرة بشكل مباشر.",
      },
    },
    {
      type: "list",
      items: [
        {
          en: "Completely non-invasive and pain-free",
          ar: "غير جراحي تمامًا وخالٍ من الألم",
        },
        {
          en: "No downtime or recovery needed",
          ar: "لا يحتاج إلى فترة تعافٍ",
        },
        {
          en: "Different wavelengths target different concerns",
          ar: "تستهدف الأطوال الموجية المختلفة مشكلات متنوعة",
        },
        {
          en: "Safe for most skin types and tones",
          ar: "آمن لمعظم أنواع وألوان البشرة",
        },
        {
          en: "Can be combined with other facial treatments",
          ar: "يمكن دمجه مع علاجات الوجه الأخرى",
        },
      ],
    },
    {
      type: "paragraph",
      text: {
        en: "This makes it an excellent option for clients seeking gentle, consistent skin improvement.",
        ar: "وهذا يجعله خيارًا مثاليًا لمن يبحثون عن تحسين لطيف ومستمر لصحة البشرة.",
      },
    },

    {
      type: "imageGrid",
      images: [
        "/images/blog/led-light-therapy-1.jpg",
        "/images/blog/led-light-therapy-2.jpg",
        "/images/blog/led-light-therapy-3.jpg",
        "/images/blog/led-light-therapy-4.jpg",
      ],
    },

    {
      type: "heading",
      text: {
        en: "Benefits of LED Light Therapy",
        ar: "فوائد العلاج بالضوء LED",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Regular LED Light Therapy sessions may help:",
        ar: "قد تساعد جلسات العلاج بالضوء LED المنتظمة على:",
      },
    },
    {
      type: "list",
      items: [
        {
          en: "Reduce redness and inflammation",
          ar: "تقليل الاحمرار والالتهابات",
        },
        {
          en: "Calm active breakouts",
          ar: "تهدئة حب الشباب النشط",
        },
        {
          en: "Boost collagen production",
          ar: "تعزيز إنتاج الكولاجين",
        },
        {
          en: "Improve skin tone and clarity",
          ar: "تحسين لون البشرة ونقائها",
        },
        {
          en: "Support post-treatment healing",
          ar: "دعم التعافي بعد العلاجات",
        },
        {
          en: "Minimize the appearance of fine lines",
          ar: "تقليل مظهر الخطوط الدقيقة",
        },
        {
          en: "Promote a healthy, even glow",
          ar: "منح البشرة إشراقة صحية ومتجانسة",
        },
        {
          en: "Strengthen the skin barrier",
          ar: "تقوية الحاجز الطبيعي للبشرة",
        },
      ],
    },
    {
      type: "paragraph",
      text: {
        en: "Because the treatment is so gentle, it's suitable for regular sessions as part of an ongoing skincare routine.",
        ar: "وبفضل لطافته، يُعد العلاج مناسبًا للجلسات المنتظمة كجزء من روتين مستمر للعناية بالبشرة.",
      },
    },

    {
      type: "heading",
      text: {
        en: "Who Is LED Light Therapy Suitable For?",
        ar: "لمن يناسب العلاج بالضوء LED؟",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "LED Light Therapy can benefit individuals experiencing:",
        ar: "يمكن أن يفيد العلاج بالضوء LED الأشخاص الذين يعانون من:",
      },
    },
    {
      type: "list",
      items: [
        {
          en: "Redness or sensitive skin",
          ar: "احمرار البشرة أو حساسيتها",
        },
        {
          en: "Active or recurring breakouts",
          ar: "حب الشباب النشط أو المتكرر",
        },
        {
          en: "Early signs of aging",
          ar: "علامات الشيخوخة المبكرة",
        },
        {
          en: "Uneven skin tone",
          ar: "عدم توحد لون البشرة",
        },
        {
          en: "Post-treatment sensitivity",
          ar: "حساسية البشرة بعد العلاجات",
        },
        {
          en: "Dull or tired-looking skin",
          ar: "البشرة الباهتة أو المرهقة",
        },
        {
          en: "Compromised skin barrier",
          ar: "ضعف الحاجز الطبيعي للبشرة",
        },
      ],
    },
    {
      type: "paragraph",
      text: {
        en: "Our specialists will recommend the right light wavelength and treatment plan based on your specific skin concerns.",
        ar: "سيقوم أخصائيونا باختيار الطول الموجي المناسب ووضع خطة علاج مخصصة وفقًا لاحتياجات بشرتك.",
      },
    },
  ],
},
{
  slug: "understanding-botox-what-to-expect-before-and-after",
  title: {
    en: "Understanding Botox: What to Expect Before and After",
    ar: "فهم البوتوكس: ما الذي يمكن توقعه قبل العلاج وبعده",
  },
  excerpt: {
    en: "Botox remains one of the most popular non-surgical treatments for softening expression lines and wrinkles. Learn what to expect before, during, and after treatment for natural-looking, refreshed results.",
    ar: "يُعد البوتوكس من أشهر العلاجات غير الجراحية لتخفيف خطوط التعبير والتجاعيد. تعرّف على ما يمكن توقعه قبل العلاج وأثناءه وبعده للحصول على نتائج طبيعية ومنتعشة.",
  },
  image: "/images/blog/botox-cover.jpg",
  readTime: 5,
  publishedDate: "2026-07-01",

  intro: {
    en: "Botox remains one of the most popular non-surgical treatments for softening the appearance of expression lines and wrinkles. By temporarily relaxing targeted facial muscles, Botox helps smooth the skin's surface for a refreshed, natural-looking result. At Novellah Restyle, treatments are performed by experienced specialists who take a conservative, individualized approach to ensure results look natural rather than overdone. Understanding what to expect before, during, and after your appointment can help you feel confident and prepared for your treatment.",
    ar: "يُعد البوتوكس من أشهر العلاجات غير الجراحية لتقليل ظهور خطوط التعبير والتجاعيد. يعمل من خلال إرخاء عضلات الوجه المستهدفة مؤقتًا، مما يمنح البشرة مظهرًا أكثر نعومة وانتعاشًا. في نوفيلا ريستايل، يتم إجراء العلاج بواسطة مختصين ذوي خبرة مع التركيز على الحصول على نتائج طبيعية ومتوازنة. إن معرفة ما يمكن توقعه قبل العلاج وأثناءه وبعده تساعدك على الشعور بالثقة والاستعداد للجلسة.",
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
        en: "Botox remains one of the most popular non-surgical treatments for softening the appearance of expression lines and wrinkles. By temporarily relaxing targeted facial muscles, Botox helps smooth the skin's surface for a refreshed, natural-looking result.",
        ar: "يُعد البوتوكس من أشهر العلاجات غير الجراحية لتخفيف خطوط التعبير والتجاعيد، حيث يعمل على إرخاء عضلات الوجه المستهدفة مؤقتًا للحصول على مظهر أكثر نعومة وانتعاشًا.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "At Novellah Restyle, treatments are performed by experienced specialists who take a conservative, individualized approach to ensure results look natural rather than overdone.",
        ar: "في نوفيلا ريستايل، يتم تنفيذ العلاج بواسطة مختصين ذوي خبرة يعتمدون نهجًا مخصصًا ومحافظًا لضمان نتائج طبيعية ومتوازنة.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Understanding what to expect before, during, and after your appointment can help you feel confident and prepared for your treatment.",
        ar: "يساعدك فهم ما يمكن توقعه قبل الجلسة وأثناءها وبعدها على الشعور بالثقة والاستعداد للعلاج.",
      },
    },

    {
      type: "heading",
      text: {
        en: "Why Botox Is Different",
        ar: "ما الذي يميز البوتوكس؟",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Unlike topical treatments, Botox works beneath the skin's surface to address the muscle movement that causes expression lines.",
        ar: "على عكس المنتجات الموضعية، يعمل البوتوكس تحت سطح البشرة لمعالجة حركة العضلات التي تسبب خطوط التعبير.",
      },
    },
    {
      type: "list",
      items: [
        {
          en: "Targets the underlying cause of dynamic wrinkles",
          ar: "يستهدف السبب الأساسي للتجاعيد الحركية",
        },
        {
          en: "Quick treatment with little to no downtime",
          ar: "إجراء سريع مع فترة تعافٍ قليلة أو معدومة",
        },
        {
          en: "Results appear gradually over several days",
          ar: "تظهر النتائج تدريجيًا خلال عدة أيام",
        },
        {
          en: "Customizable dosing for a natural look",
          ar: "إمكانية تخصيص الجرعة للحصول على مظهر طبيعي",
        },
        {
          en: "Long-standing safety record when performed by trained specialists",
          ar: "سجل طويل من الأمان عند إجرائه بواسطة مختصين مدربين",
        },
      ],
    },
    {
      type: "paragraph",
      text: {
        en: "This precision allows our specialists to tailor treatment to each client's facial anatomy and aesthetic goals.",
        ar: "تتيح هذه الدقة لأخصائيينا تصميم العلاج بما يتناسب مع ملامح الوجه والأهداف الجمالية لكل عميل.",
      },
    },

    {
      type: "imageGrid",
      images: [
        "/images/blog/botox-1.jpg",
        "/images/blog/botox-2.jpg",
        "/images/blog/botox-3.jpg",
        "/images/blog/botox-4.jpg",
      ],
    },

    {
      type: "heading",
      text: {
        en: "Benefits of Botox",
        ar: "فوائد البوتوكس",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Botox treatments may help:",
        ar: "قد تساعد علاجات البوتوكس في:",
      },
    },
    {
      type: "list",
      items: [
        {
          en: "Soften forehead lines",
          ar: "تخفيف خطوط الجبهة",
        },
        {
          en: "Reduce the appearance of crow's feet",
          ar: "تقليل ظهور خطوط حول العينين",
        },
        {
          en: "Smooth frown lines between the brows",
          ar: "تنعيم خطوط العبوس بين الحاجبين",
        },
        {
          en: "Prevent deeper wrinkles from forming over time",
          ar: "المساعدة في الحد من تعمق التجاعيد مع مرور الوقت",
        },
        {
          en: "Provide a refreshed, well-rested appearance",
          ar: "منح الوجه مظهرًا أكثر انتعاشًا وحيوية",
        },
        {
          en: "Offer subtle, natural-looking results",
          ar: "تحقيق نتائج طبيعية وغير مبالغ فيها",
        },
      ],
    },
    {
      type: "paragraph",
      text: {
        en: "Results typically last three to four months, with many clients returning for maintenance treatments to preserve their results.",
        ar: "تستمر النتائج عادةً لمدة تتراوح بين ثلاثة وأربعة أشهر، ويعود العديد من العملاء لإجراء جلسات المحافظة على النتائج.",
      },
    },

    {
      type: "heading",
      text: {
        en: "Who Is Botox Suitable For?",
        ar: "لمن يناسب البوتوكس؟",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Botox is commonly recommended for individuals experiencing:",
        ar: "يُنصح بالبوتوكس عادةً للأشخاص الذين يعانون من:",
      },
    },
    {
      type: "list",
      items: [
        {
          en: "Forehead lines",
          ar: "خطوط الجبهة",
        },
        {
          en: "Frown lines between the brows",
          ar: "خطوط العبوس بين الحاجبين",
        },
        {
          en: "Crow's feet around the eyes",
          ar: "خطوط حول العينين",
        },
        {
          en: "Early signs of expression-related aging",
          ar: "علامات الشيخوخة المبكرة الناتجة عن تعابير الوجه",
        },
        {
          en: "A desire for preventative treatment",
          ar: "الرغبة في العلاج الوقائي",
        },
      ],
    },
    {
      type: "paragraph",
      text: {
        en: "A consultation with our specialists will determine whether Botox aligns with your skin goals and medical history.",
        ar: "ستحدد الاستشارة مع أخصائيينا ما إذا كان البوتوكس مناسبًا لأهدافك الجمالية وتاريخك الطبي.",
      },
    },
  ],
},
{
  slug: "dermal-fillers-101-restoring-volume-and-youthful-contours",
  title: {
    en: "Dermal Fillers 101: Restoring Volume and Youthful Contours",
    ar: "دليل الفيلر: استعادة الحجم وإبراز ملامح الوجه الشبابية",
  },
  excerpt: {
    en: "Dermal fillers are a popular non-surgical treatment designed to restore lost facial volume, soften lines, and enhance natural contours. Learn how this versatile treatment creates balanced, youthful-looking results.",
    ar: "يُعد الفيلر من أشهر العلاجات غير الجراحية المصممة لاستعادة حجم الوجه، وتخفيف الخطوط، وإبراز الملامح الطبيعية. تعرّف على كيفية تحقيق نتائج متوازنة وشبابية.",
  },
  image: "/images/blog/dermal-fillers-cover.jpg",
  readTime: 5,
  publishedDate: "2026-07-01",

  intro: {
    en: "As skin ages, it naturally loses volume, collagen, and elasticity, which can lead to hollowing, flattened contours, and deeper folds. Dermal fillers are designed to restore lost volume and enhance the skin's natural structure for a softer, more youthful appearance. Using advanced hyaluronic acid-based formulas, our specialists carefully sculpt and contour treatment areas to achieve balanced, natural-looking results. Whether you're looking to restore volume, enhance certain features, or soften the signs of aging, dermal fillers offer a versatile, non-surgical solution.",
    ar: "مع التقدم في العمر، تفقد البشرة حجمها الطبيعي والكولاجين والمرونة، مما يؤدي إلى ظهور التجاويف وترهل الملامح وزيادة عمق الخطوط. صُمم الفيلر لاستعادة الحجم المفقود وتعزيز بنية البشرة للحصول على مظهر أكثر شبابًا ونعومة. باستخدام مواد تعتمد على حمض الهيالورونيك، يقوم أخصائيونا بإعادة تشكيل ملامح الوجه بدقة لتحقيق نتائج طبيعية ومتوازنة.",
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
        en: "As skin ages, it naturally loses volume, collagen, and elasticity, which can lead to hollowing, flattened contours, and deeper folds. Dermal fillers are designed to restore lost volume and enhance the skin's natural structure for a softer, more youthful appearance.",
        ar: "مع التقدم في العمر، تفقد البشرة حجمها الطبيعي والكولاجين والمرونة، مما يؤدي إلى ظهور التجاويف وترهل الملامح. يساعد الفيلر على استعادة الحجم الطبيعي للحصول على مظهر أكثر شبابًا.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Using advanced hyaluronic acid-based formulas, our specialists carefully sculpt and contour treatment areas to achieve balanced, natural-looking results.",
        ar: "باستخدام تركيبات متطورة تعتمد على حمض الهيالورونيك، يعمل أخصائيونا على إعادة تشكيل الملامح بدقة لتحقيق نتائج طبيعية ومتوازنة.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Whether you're looking to restore volume, enhance certain features, or soften the signs of aging, dermal fillers offer a versatile, non-surgical solution.",
        ar: "سواء كنت ترغب في استعادة الحجم أو تحسين بعض الملامح أو تقليل علامات التقدم في العمر، فإن الفيلر يوفر حلاً فعالًا دون الحاجة إلى جراحة.",
      },
    },

    {
      type: "heading",
      text: {
        en: "Why Dermal Fillers Are Different",
        ar: "ما الذي يميز الفيلر؟",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Dermal fillers work by physically restoring volume, rather than relaxing muscles or resurfacing the skin's surface.",
        ar: "يعتمد الفيلر على استعادة الحجم المفقود في البشرة بدلاً من إرخاء العضلات أو تقشير سطح الجلد.",
      },
    },
    {
      type: "list",
      items: [
        {
          en: "Made from hyaluronic acid, a substance naturally found in skin",
          ar: "يعتمد على حمض الهيالورونيك الموجود طبيعيًا في البشرة",
        },
        {
          en: "Immediate, visible results",
          ar: "نتائج فورية وملحوظة",
        },
        {
          en: "Customizable to each client's facial structure",
          ar: "يتم تخصيصه وفقًا لملامح كل شخص",
        },
        {
          en: "Reversible in most cases if adjustments are needed",
          ar: "يمكن تعديله أو إذابته في معظم الحالات عند الحاجة",
        },
        {
          en: "Minimal downtime following treatment",
          ar: "فترة تعافٍ قصيرة جدًا",
        },
      ],
    },
    {
      type: "paragraph",
      text: {
        en: "This makes fillers a flexible option for both subtle enhancement and more noticeable facial restoration.",
        ar: "وهذا يجعل الفيلر خيارًا مرنًا سواء للتحسينات البسيطة أو لاستعادة ملامح الوجه بشكل أوضح.",
      },
    },

    {
      type: "imageGrid",
      images: [
        "/images/blog/dermal-fillers-1.jpg",
        "/images/blog/dermal-fillers-2.jpg",
        "/images/blog/dermal-fillers-3.jpg",
        "/images/blog/dermal-fillers-4.jpg",
      ],
    },

    {
      type: "heading",
      text: {
        en: "Benefits of Dermal Fillers",
        ar: "فوائد الفيلر",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Dermal filler treatments may help:",
        ar: "قد تساعد علاجات الفيلر على:",
      },
    },
    {
      type: "list",
      items: [
        {
          en: "Restore volume to cheeks and temples",
          ar: "استعادة الحجم في الخدين ومنطقة الصدغين",
        },
        {
          en: "Soften nasolabial folds and marionette lines",
          ar: "تخفيف خطوط الأنف والفم وخطوط الماريونيت",
        },
        {
          en: "Enhance lip shape and fullness",
          ar: "تحسين شكل الشفاه وزيادة امتلائها",
        },
        {
          en: "Define and contour the jawline",
          ar: "إبراز وتحديد خط الفك",
        },
        {
          en: "Smooth under-eye hollows",
          ar: "تقليل مظهر التجاويف أسفل العين",
        },
        {
          en: "Improve overall facial balance",
          ar: "تحقيق توازن أفضل لملامح الوجه",
        },
      ],
    },
    {
      type: "paragraph",
      text: {
        en: "Results are immediate and typically last between six months and two years, depending on the treatment area and filler type used.",
        ar: "تظهر النتائج مباشرة بعد العلاج، وتستمر عادةً من ستة أشهر إلى سنتين حسب المنطقة المعالجة ونوع الفيلر المستخدم.",
      },
    },

    {
      type: "heading",
      text: {
        en: "Who Are Dermal Fillers Suitable For?",
        ar: "لمن يناسب الفيلر؟",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Dermal filler treatments may be suitable for individuals who want to:",
        ar: "قد يكون الفيلر مناسبًا للأشخاص الذين يرغبون في:",
      },
    },
    {
      type: "list",
      items: [
        {
          en: "Restore volume to cheeks and temples",
          ar: "استعادة الحجم في الخدين ومنطقة الصدغين",
        },
        {
          en: "Soften nasolabial folds and marionette lines",
          ar: "تخفيف خطوط الأنف والفم وخطوط الماريونيت",
        },
        {
          en: "Enhance lip shape and fullness",
          ar: "تحسين شكل الشفاه وزيادة امتلائها",
        },
        {
          en: "Define and contour the jawline",
          ar: "إبراز وتحديد خط الفك",
        },
        {
          en: "Smooth under-eye hollows",
          ar: "تقليل مظهر التجاويف أسفل العين",
        },
        {
          en: "Improve overall facial balance",
          ar: "تحقيق توازن أفضل لملامح الوجه",
        },
      ],
    },
    {
      type: "paragraph",
      text: {
        en: "A consultation with our specialists helps determine the most appropriate treatment areas, filler type, and personalized plan based on your facial structure and aesthetic goals.",
        ar: "يساعدك التقييم مع أخصائيينا على تحديد المناطق المناسبة للعلاج، ونوع الفيلر الأنسب، ووضع خطة علاج مخصصة وفقًا لملامح وجهك وأهدافك الجمالية.",
      },
    },
  ],
},
{
  slug: "ultimate-guide-building-skincare-routine-for-your-skin-type",
  title: {
    en: "The Ultimate Guide to Building a Skincare Routine for Your Skin Type",
    ar: "الدليل الشامل لبناء روتين العناية بالبشرة المناسب لنوع بشرتك",
  },
  excerpt: {
    en: "Healthy, glowing skin starts with a skincare routine tailored to your unique skin type. Learn the essential steps, discover why personalization matters, and build habits that support long-term skin health.",
    ar: "تبدأ البشرة الصحية والمشرقة بروتين عناية مصمم خصيصًا لنوع بشرتك. تعرّف على الخطوات الأساسية، وأهمية التخصيص، وكيفية بناء روتين يدعم صحة البشرة على المدى الطويل.",
  },
  image: "/images/blog/skincare-routine-cover.jpg",
  readTime: 5,
  publishedDate: "2026-07-01",

  intro: {
    en: "A great complexion doesn't happen by chance—it's the result of a consistent, well-designed skincare routine tailored to your unique skin type. With so many products available, it's easy to feel overwhelmed about where to start. At Novellah Restyle, our specialists believe that effective skincare doesn't have to be complicated. The right routine is built on a few essential steps, customized to address your skin's specific needs. This guide explains how to identify your skin type and create a routine that supports healthier, stronger, and more radiant skin.",
    ar: "لا تأتي البشرة الصحية والمشرقة بالصدفة، بل هي نتيجة روتين عناية منتظم ومصمم بما يتناسب مع نوع بشرتك. ومع كثرة المنتجات المتوفرة، قد يكون من الصعب معرفة من أين تبدأ. في نوفيلا ريستايل، نؤمن بأن العناية الفعالة بالبشرة لا تحتاج إلى التعقيد، بل إلى خطوات أساسية يتم تخصيصها وفقًا لاحتياجات بشرتك. يساعدك هذا الدليل على فهم نوع بشرتك وبناء روتين يدعم صحتها وإشراقتها على المدى الطويل.",
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
        en: "A great complexion doesn't happen by chance—it's the result of a consistent, well-designed skincare routine tailored to your unique skin type. With so many products available, it's easy to feel overwhelmed about where to start.",
        ar: "لا تأتي البشرة الصحية والمشرقة بالصدفة، بل هي نتيجة روتين عناية منتظم ومصمم بما يتناسب مع نوع بشرتك. ومع توفر العديد من المنتجات، قد يكون من الصعب معرفة نقطة البداية.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "At Novellah Restyle, our specialists believe that effective skincare doesn't have to be complicated. The right routine is built on a few essential steps, customized to address your skin's specific needs.",
        ar: "في نوفيلا ريستايل، يؤمن أخصائيونا بأن العناية الفعالة بالبشرة لا تحتاج إلى التعقيد، بل تعتمد على خطوات أساسية يتم تخصيصها لتلبية احتياجات بشرتك.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "This guide breaks down how to identify your skin type and build a routine that supports long-term skin health.",
        ar: "يساعدك هذا الدليل على التعرف على نوع بشرتك وبناء روتين يدعم صحة البشرة على المدى الطويل.",
      },
    },

    {
      type: "heading",
      text: {
        en: "Why a Personalized Routine Is Different",
        ar: "لماذا يُعد الروتين المخصص أفضل؟",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "A one-size-fits-all approach rarely delivers lasting results because every skin type responds differently to ingredients, environmental factors, and daily care.",
        ar: "نادراً ما يحقق الروتين الموحد نتائج طويلة الأمد، لأن كل نوع من أنواع البشرة يستجيب بشكل مختلف للمكونات والعوامل البيئية والعناية اليومية.",
      },
    },
    {
      type: "list",
      items: [
        {
          en: "Addresses your specific skin concerns directly",
          ar: "يعالج مشاكل بشرتك بشكل مباشر",
        },
        {
          en: "Reduces the risk of irritation from unsuitable products",
          ar: "يقلل خطر التهيج الناتج عن المنتجات غير المناسبة",
        },
        {
          en: "Maximizes the effectiveness of active ingredients",
          ar: "يعزز فعالية المكونات النشطة",
        },
        {
          en: "Adapts as your skin changes over time",
          ar: "يتكيف مع تغير احتياجات البشرة مع مرور الوقت",
        },
        {
          en: "Supports healthier skin in the long term",
          ar: "يساعد في الحفاظ على صحة البشرة على المدى الطويل",
        },
      ],
    },
    {
      type: "paragraph",
      text: {
        en: "Our specialists can assess your skin type and recommend a personalized routine that suits your lifestyle, goals, and skincare concerns.",
        ar: "يمكن لأخصائيينا تقييم نوع بشرتك واقتراح روتين مخصص يتناسب مع نمط حياتك وأهدافك واحتياجات بشرتك.",
      },
    },

    {
      type: "imageGrid",
      images: [
        "/images/blog/skincare-routine-1.jpg",
        "/images/blog/skincare-routine-2.jpg",
        "/images/blog/skincare-routine-3.jpg",
        "/images/blog/skincare-routine-4.jpg",
      ],
    },

    {
      type: "heading",
      text: {
        en: "Core Steps of an Effective Routine",
        ar: "الخطوات الأساسية لروتين فعال",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "A balanced skincare routine typically includes the following essential steps:",
        ar: "يتضمن روتين العناية المتوازن عادةً الخطوات الأساسية التالية:",
      },
    },
    {
      type: "list",
      items: [
        {
          en: "A gentle cleanser suited to your skin type",
          ar: "غسول لطيف مناسب لنوع بشرتك",
        },
        {
          en: "A targeted treatment or serum",
          ar: "سيروم أو علاج مخصص لاحتياجات البشرة",
        },
        {
          en: "Daily moisturizer to support the skin barrier",
          ar: "مرطب يومي للحفاظ على حاجز البشرة",
        },
        {
          en: "Broad-spectrum sunscreen every morning",
          ar: "واقي شمس واسع الطيف كل صباح",
        },
        {
          en: "Weekly exfoliation for smoother skin texture",
          ar: "تقشير أسبوعي لتحسين ملمس البشرة",
        },
        {
          en: "Regular professional treatments for deeper results",
          ar: "جلسات احترافية منتظمة للحصول على نتائج أعمق",
        },
      ],
    },
    {
      type: "paragraph",
      text: {
        en: "Consistency is essential. Most people begin noticing healthier, more balanced skin within four to six weeks of following a personalized skincare routine.",
        ar: "الاستمرارية هي المفتاح. يبدأ معظم الأشخاص بملاحظة تحسن في صحة البشرة وتوازنها خلال أربعة إلى ستة أسابيع من الالتزام بروتين مخصص.",
      },
    },

    {
      type: "heading",
      text: {
        en: "Who Can Benefit From a Personalized Routine?",
        ar: "من يمكنه الاستفادة من روتين مخصص؟",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "A customized skincare routine is beneficial for individuals experiencing:",
        ar: "يفيد روتين العناية المخصص الأشخاص الذين يعانون من:",
      },
    },
    {
      type: "list",
      items: [
        {
          en: "Dry or dehydrated skin",
          ar: "البشرة الجافة أو المصابة بالجفاف",
        },
        {
          en: "Oily or acne-prone skin",
          ar: "البشرة الدهنية أو المعرضة لحب الشباب",
        },
        {
          en: "Combination skin",
          ar: "البشرة المختلطة",
        },
        {
          en: "Sensitive or reactive skin",
          ar: "البشرة الحساسة أو سريعة التهيج",
        },
        {
          en: "Signs of premature aging",
          ar: "علامات الشيخوخة المبكرة",
        },
        {
          en: "Uneven tone or texture",
          ar: "عدم توحد لون البشرة أو ملمسها",
        },
      ],
    },
    {
      type: "paragraph",
      text: {
        en: "Book a consultation with our specialists for a personalized skin assessment and expert product recommendations tailored to your skin type and long-term skincare goals.",
        ar: "احجز استشارة مع أخصائيينا للحصول على تقييم شامل للبشرة وتوصيات مخصصة بالمنتجات والعلاجات المناسبة لنوع بشرتك وأهدافك طويلة المدى.",
      },
    },
  ],
}
];
