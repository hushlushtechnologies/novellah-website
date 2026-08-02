// lib/content/treatments.ts
import type { Localized } from "@/lib/navigation";
import { FaqItem } from "./faq";

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
  overviewImage: string;
  durationMinutes: string;
  skinType: Localized;
    sessions: string; 
  procedureType: Localized; 
  overview: Localized;
  benefits: TreatmentBenefit[];
    processHeading: Localized;  
  processSubheading: Localized;
  processHeadingHighlight:Localized;
  process: ProcessStep[];
  faq: FaqItem[];
}

export const treatments: Treatment[] = [
  {
    slug: "hair-beauty",
    categorySlug: "hair-care-beauty",
    title: { en: "Hair Beauty", ar: "جمال الشعر" },
    description: {
      en: "Restore your hair's natural beauty with personalized hair care treatments designed to nourish, strengthen, and revitalize every strand.",
      ar: "استعيدي جمال شعرك الطبيعي مع علاجات عناية مخصصة مصممة لتغذية وتقوية وتنشيط كل خصلة من شعرك.",
    },
    image: "/images/treatments/hair-beauty.jpg",
    durationMinutes: "45-60 ",
    skinType: { en: "All Hair Types", ar: "لجميع أنواع الشعر" },
    detailDescription: {
      en: "Restore your hair's natural beauty with personalized hair care treatments designed to nourish, strengthen, and revitalize every strand. Whether you're looking to improve hair health, enhance shine, or maintain beautiful, manageable hair, our professional solutions help you achieve healthier, more confident results.",
      ar: "استعيدي جمال شعرك الطبيعي مع علاجات عناية بالشعر مخصصة مصممة لتغذية وتقوية وتنشيط كل خصلة. سواء كنتِ ترغبين في تحسين صحة شعرك، أو تعزيز لمعانه، أو الحفاظ على شعر جميل وسهل التصفيف، تساعدك حلولنا الاحترافية على تحقيق نتائج أكثر صحة وثقة.",
    },
    sessions: "As Recommended",
    procedureType: { en: "Non-Invasive", ar: "غير جراحي" },
    overview: {
      en: "Hair Beauty is a collection of professional treatments designed to improve the health, appearance, and overall condition of your hair. Using high-quality products and personalized care, these treatments help nourish the scalp, strengthen hair fibers, restore moisture, reduce damage, and leave your hair looking softer, shinier, and healthier.",
      ar: "جمال الشعر هو مجموعة من العلاجات الاحترافية المصممة لتحسين صحة شعرك ومظهره وحالته العامة. باستخدام منتجات عالية الجودة وعناية مخصصة، تساعد هذه العلاجات على تغذية فروة الرأس، وتقوية خصلات الشعر، واستعادة الرطوبة، وتقليل التلف، وترك شعرك أكثر نعومة ولمعانًا وصحة.",
    },
    overviewImage: "/images/treatments/hair-beauty-overview.png",
    benefits: [
      {
        icon: "/images/icons/deep-nourishment.svg",
        title: { en: "Deep Nourishment", ar: "تغذية عميقة" },
        description: {
          en: "Provides essential nutrients to strengthen and revitalize your hair.",
          ar: "توفر العناصر الغذائية الأساسية لتقوية شعرك وتنشيطه.",
        },
      },
      {
        icon: "/images/icons/improved-shine.svg",
        title: { en: "Improved Shine", ar: "لمعان محسّن" },
        description: {
          en: "Restores natural softness and enhances healthy-looking shine.",
          ar: "تستعيد النعومة الطبيعية وتعزز لمعانًا يعكس صحة الشعر.",
        },
      },
      {
        icon: "/images/icons/damage-repair.svg",
        title: { en: "Damage Repair", ar: "إصلاح التلف" },
        description: {
          en: "Helps repair dry, damaged, and chemically treated hair.",
          ar: "تساعد على إصلاح الشعر الجاف والتالف والمعالج كيميائيًا.",
        },
      },
      {
        icon: "/images/icons/stronger-hair.svg",
        title: { en: "Stronger Hair", ar: "شعر أقوى" },
        description: {
          en: "Reduces breakage while improving overall hair strength.",
          ar: "تقلل من التقصف وتعزز قوة الشعر بشكل عام.",
        },
      },
      {
        icon: "/images/icons/healthy-scalp.svg",
        title: { en: "Healthy Scalp", ar: "فروة رأس صحية" },
        description: {
          en: "Supports a clean, balanced scalp for healthier hair growth.",
          ar: "تدعم فروة رأس نظيفة ومتوازنة لنمو شعر أكثر صحة.",
        },
      },
      {
        icon: "/images/icons/beautiful-results.svg",
        title: { en: "Beautiful Results", ar: "نتائج جميلة" },
        description: {
          en: "Leaves your hair feeling smooth, manageable, and refreshed.",
          ar: "تترك شعرك ناعمًا وسهل التصفيف ومنتعشًا.",
        },
      },
    ],
    processHeading: { en: "Your Journey to", ar: "رحلتك نحو" },
    processHeadingHighlight: { en: "Healthier Hair", ar: "شعر أكثر صحة" },
    processSubheading: {
      en: "Every Hair Beauty treatment is personalized to improve your hair's condition while providing a relaxing and professional salon experience.",
      ar: "كل علاج جمال شعر يُصمم خصيصًا لتحسين حالة شعرك مع تقديم تجربة صالون احترافية ومريحة.",
    },
    process: [
      {
        image: "/images/treatments/hair-beauty-process-1.jpg",
        title: { en: "Consultation", ar: "الاستشارة" },
        description: {
          en: "Our specialists assess your hair type, concerns, lifestyle, and beauty goals to recommend the most suitable treatment.",
          ar: "يقوم خبراؤنا بتقييم نوع شعرك ومشاكله ونمط حياتك وأهدافك الجمالية لاقتراح العلاج الأنسب.",
        },
      },
      {
        image: "/images/treatments/hair-beauty-process-2.jpg",
        title: { en: "Hair & Scalp Assessment", ar: "تقييم الشعر وفروة الرأس" },
        description: {
          en: "A detailed evaluation helps identify dryness, damage, scalp condition, and overall hair health before beginning treatment.",
          ar: "يساعد التقييم التفصيلي على تحديد الجفاف والتلف وحالة فروة الرأس وصحة الشعر العامة قبل بدء العلاج.",
        },
      },
      {
        image: "/images/treatments/hair-beauty-process-3.jpg",
        title: { en: "Hair Treatment", ar: "علاج الشعر" },
        description: {
          en: "Specialized products and techniques are applied to nourish, repair, and restore your hair based on its individual needs.",
          ar: "يتم استخدام منتجات وتقنيات متخصصة لتغذية شعرك وإصلاحه واستعادة حيويته وفقًا لاحتياجاته الفردية.",
        },
      },
      {
        image: "/images/treatments/hair-beauty-process-4.jpg",
        title: { en: "Finishing & Care Advice", ar: "اللمسات الأخيرة ونصائح العناية" },
        description: {
          en: "Your treatment concludes with professional styling and personalized home care recommendations to maintain long-lasting results.",
          ar: "يُختتم علاجك بتصفيف احترافي وتوصيات عناية منزلية مخصصة للحفاظ على النتائج لأطول فترة ممكنة.",
        },
      },
    ],
  faq: [
  {
    id: "hair-beauty-what-is",
    question: {
      en: "What is a Hair Beauty treatment?",
      ar: "ما هو علاج جمال الشعر؟",
    },
    answer: {
      en: "Hair Beauty treatments are professional services designed to nourish, repair, and improve the health and appearance of your hair.",
      ar: "علاجات جمال الشعر هي خدمات احترافية مصممة لتغذية الشعر وإصلاحه وتحسين صحته ومظهره، مما يمنحه مظهرًا أكثر حيوية وجمالًا.",
    },
  },
  {
    id: "hair-beauty-suitable",
    question: {
      en: "Who is this treatment suitable for?",
      ar: "لمن يناسب هذا العلاج؟",
    },
    answer: {
      en: "It is suitable for all hair types, including dry, damaged, chemically treated, curly, and color-treated hair.",
      ar: "هذا العلاج مناسب لجميع أنواع الشعر، بما في ذلك الشعر الجاف، والتالف، والمعالج كيميائيًا، والمجعد، والمصبوغ.",
    },
  },
  {
    id: "hair-beauty-duration",
    question: {
      en: "How long does the treatment take?",
      ar: "كم تستغرق جلسة العلاج؟",
    },
    answer: {
      en: "Most sessions take approximately 45 to 60 minutes, depending on your hair condition and selected treatment.",
      ar: "تستغرق معظم الجلسات حوالي 45 إلى 60 دقيقة، وذلك حسب حالة شعرك ونوع العلاج المختار.",
    },
  },
  {
    id: "hair-beauty-results",
    question: {
      en: "Will I notice results immediately?",
      ar: "هل سألاحظ النتائج مباشرة؟",
    },
    answer: {
      en: "Yes. Most clients experience softer, shinier, and healthier-looking hair immediately after treatment.",
      ar: "نعم، يلاحظ معظم العملاء شعرًا أكثر نعومة ولمعانًا وصحة مباشرةً بعد انتهاء الجلسة.",
    },
  },
  {
    id: "hair-beauty-frequency",
    question: {
      en: "How often should I have a Hair Beauty treatment?",
      ar: "كم مرة يُنصح بإجراء علاج جمال الشعر؟",
    },
    answer: {
      en: "The frequency depends on your hair condition, but treatments are commonly recommended every 4 to 6 weeks.",
      ar: "يعتمد عدد الجلسات على حالة شعرك، ولكن يُوصى عادةً بإجراء العلاج كل 4 إلى 6 أسابيع للحفاظ على أفضل النتائج.",
    },
  },
  {
    id: "hair-beauty-combine",
    question: {
      en: "Can I combine this with other hair treatments?",
      ar: "هل يمكن دمج هذا العلاج مع علاجات شعر أخرى؟",
    },
    answer: {
      en: "Yes. Our specialists may recommend combining treatments to achieve the best possible results for your hair.",
      ar: "نعم، قد يوصي خبراؤنا بدمج هذا العلاج مع علاجات شعر أخرى للحصول على أفضل النتائج الممكنة وفقًا لاحتياجات شعرك.",
    },
  },
  {
    id: "hair-beauty-downtime",
    question: {
      en: "Is there any downtime?",
      ar: "هل توجد فترة تعافٍ بعد العلاج؟",
    },
    answer: {
      en: "No. Hair Beauty treatments are non-invasive, allowing you to return to your daily routine immediately after your appointment.",
      ar: "لا، فالعلاج غير جراحي ولا يتطلب أي فترة تعافٍ، ويمكنك العودة إلى روتينك اليومي مباشرةً بعد الجلسة.",
    },
  },
],
  },

  {
  slug: "hair-treatments",
  categorySlug: "hair-care-beauty",
  title: {
    en: "Hair Treatments",
    ar: "علاجات الشعر",
  },

  description: {
    en: "Restore healthier, stronger hair with personalized treatments designed to target hair fall, thinning, dryness, and damage.",
    ar: "استعيدي شعراً أكثر صحة وقوة مع علاجات مخصصة تستهدف تساقط الشعر، وترققه، والجفاف، والتلف.",
  },

  image: "/images/treatments/hair-treatments.jpg",

  durationMinutes: "60-90",

  skinType: {
    en: "Men & Women",
    ar: "للرجال والنساء",
  },

  detailDescription: {
    en: "Restore healthier, stronger hair with personalized treatments designed to target hair fall, thinning, dryness, and damage. Our advanced hair therapies nourish the scalp, strengthen hair from the roots, and promote healthier, fuller-looking hair with professional care tailored to your individual needs.",
    ar: "استعيدي شعراً أكثر صحة وقوة مع علاجات مخصصة تستهدف تساقط الشعر، وترققه، والجفاف، والتلف. تعمل علاجاتنا المتقدمة على تغذية فروة الرأس، وتقوية الشعر من الجذور، وتعزيز نمو شعر أكثر كثافة وصحة من خلال رعاية احترافية مصممة خصيصًا لاحتياجاتك.",
  },

  sessions: "6-8 Sessions",

  procedureType: {
    en: "Non-Invasive",
    ar: "غير جراحي",
  },

  overview: {
    en: "Hair Treatments are professional therapies designed to improve the health of your hair and scalp while addressing common concerns such as hair thinning, excessive hair fall, dryness, damaged hair, and weak hair follicles. Using advanced techniques and nourishing ingredients, these treatments help strengthen the hair, improve scalp health, and encourage healthier, fuller-looking hair over time.",
    ar: "علاجات الشعر هي علاجات احترافية مصممة لتحسين صحة الشعر وفروة الرأس مع معالجة المشكلات الشائعة مثل ترقق الشعر، وتساقطه، والجفاف، والتلف، وضعف البصيلات. باستخدام تقنيات متقدمة ومكونات مغذية، تساعد هذه العلاجات على تقوية الشعر وتحسين صحة فروة الرأس وتشجيع نمو شعر أكثر كثافة وصحة مع مرور الوقت.",
  },

  overviewImage: "/images/treatments/hair-treatments-overview.png",

  benefits: [
    {
      icon: "/images/icons/reduced-hair-fall.svg",
      title: {
        en: "Reduced Hair Fall",
        ar: "تقليل تساقط الشعر",
      },
      description: {
        en: "Helps strengthen hair roots and minimize excessive hair shedding.",
        ar: "يساعد على تقوية جذور الشعر وتقليل التساقط المفرط.",
      },
    },
    {
      icon: "/images/icons/healthy-hair-growth.svg",
      title: {
        en: "Healthier Hair Growth",
        ar: "نمو شعر أكثر صحة",
      },
      description: {
        en: "Supports stronger, fuller-looking hair by improving scalp health.",
        ar: "يعزز نمو شعر أكثر كثافة وقوة من خلال تحسين صحة فروة الرأس.",
      },
    },
    {
      icon: "/images/icons/deep-nourishment-2.svg",
      title: {
        en: "Deep Nourishment",
        ar: "تغذية عميقة",
      },
      description: {
        en: "Provides essential nutrients that repair and revitalize damaged hair.",
        ar: "يوفر العناصر الغذائية الأساسية لإصلاح الشعر التالف واستعادة حيويته.",
      },
    },
    {
      icon: "/images/icons/stronger-hair.svg",
      title: {
        en: "Stronger Hair Strands",
        ar: "خصلات شعر أقوى",
      },
      description: {
        en: "Improves hair strength while reducing breakage and split ends.",
        ar: "يعزز قوة الشعر ويقلل من التقصف والأطراف المتقصفة.",
      },
    },
    {
      icon: "/images/icons/healthy-scalp.svg",
      title: {
        en: "Balanced Scalp",
        ar: "فروة رأس متوازنة",
      },
      description: {
        en: "Maintains a healthy scalp environment for optimal hair growth.",
        ar: "يحافظ على بيئة صحية لفروة الرأس لدعم نمو الشعر بشكل مثالي.",
      },
    },
    {
      icon: "/images/icons/improved-texture.svg",
      title: {
        en: "Improved Hair Texture",
        ar: "تحسين ملمس الشعر",
      },
      description: {
        en: "Leaves hair softer, smoother, shinier, and easier to manage.",
        ar: "يترك الشعر أكثر نعومة ولمعانًا وسهولة في التصفيف.",
      },
    },
  ],

  processHeading: {
    en: "Your Journey to",
    ar: "رحلتك نحو",
  },

  processHeadingHighlight: {
    en: "Healthier Hair",
    ar: "شعر أكثر صحة",
  },

  processSubheading: {
    en: "Every Hair Treatment is tailored to address your unique hair concerns while providing a comfortable and professional experience.",
    ar: "يتم تصميم كل علاج للشعر خصيصًا لمعالجة مشكلات شعرك مع توفير تجربة مريحة واحترافية.",
  },

  process: [
    {
      image: "/images/treatments/hair-treatment-process-1.jpg",
      title: {
        en: "Consultation",
        ar: "الاستشارة",
      },
      description: {
        en: "Our specialists evaluate your hair concerns, medical history, and lifestyle to understand the underlying causes of your hair condition.",
        ar: "يقوم خبراؤنا بتقييم مشكلات شعرك وتاريخك الطبي ونمط حياتك لفهم الأسباب الأساسية لحالة شعرك.",
      },
    },
    {
      image: "/images/treatments/hair-treatment-process-2.jpg",
      title: {
        en: "Hair & Scalp Analysis",
        ar: "تحليل الشعر وفروة الرأس",
      },
      description: {
        en: "A detailed assessment identifies scalp health, hair density, hair strength, and areas that require targeted treatment.",
        ar: "يساعد التقييم التفصيلي في تحديد صحة فروة الرأس وكثافة الشعر وقوته والمناطق التي تحتاج إلى علاج مخصص.",
      },
    },
    {
      image: "/images/treatments/hair-treatment-process-3.jpg",
      title: {
        en: "Hair Treatment",
        ar: "علاج الشعر",
      },
      description: {
        en: "Advanced therapies and professional products are applied to nourish the scalp, strengthen hair follicles, and restore healthy hair.",
        ar: "يتم تطبيق علاجات متقدمة ومنتجات احترافية لتغذية فروة الرأس وتقوية بصيلات الشعر واستعادة صحة الشعر.",
      },
    },
    {
      image: "/images/treatments/hair-treatment-process-4.jpg",
      title: {
        en: "Aftercare & Maintenance",
        ar: "العناية اللاحقة والمتابعة",
      },
      description: {
        en: "You'll receive personalized recommendations, including home care advice and a treatment schedule to achieve long-lasting results.",
        ar: "ستحصل على توصيات مخصصة تشمل نصائح للعناية المنزلية وجدول جلسات للحفاظ على نتائج طويلة الأمد.",
      },
    },
  ],

 faq: [
  {
    id: "hair-treatment-concerns",
    question: {
      en: "What concerns can Hair Treatments address?",
      ar: "ما المشكلات التي يمكن أن تعالجها علاجات الشعر؟",
    },
    answer: {
      en: "Hair Treatments can help manage hair fall, thinning, dryness, damaged hair, weak strands, and overall scalp health.",
      ar: "تساعد علاجات الشعر في معالجة تساقط الشعر، وترققه، والجفاف، وتلف الشعر، وضعف الخصلات، وتحسين صحة فروة الرأس بشكل عام.",
    },
  },
  {
    id: "hair-treatment-suitable",
    question: {
      en: "Who is suitable for Hair Treatments?",
      ar: "من يناسبه علاج الشعر؟",
    },
    answer: {
      en: "These treatments are suitable for both men and women experiencing common hair and scalp concerns.",
      ar: "هذه العلاجات مناسبة للرجال والنساء الذين يعانون من مشكلات شائعة في الشعر أو فروة الرأس.",
    },
  },
  {
    id: "hair-treatment-sessions",
    question: {
      en: "How many sessions are recommended?",
      ar: "كم عدد الجلسات الموصى بها؟",
    },
    answer: {
      en: "The number of sessions depends on your hair condition, but most clients benefit from a course of 6 to 8 treatments.",
      ar: "يعتمد عدد الجلسات على حالة شعرك، إلا أن معظم العملاء يستفيدون من برنامج يتكون من 6 إلى 8 جلسات.",
    },
  },
  {
    id: "hair-treatment-pain",
    question: {
      en: "Are Hair Treatments painful?",
      ar: "هل علاجات الشعر مؤلمة؟",
    },
    answer: {
      en: "No. Hair Treatments are comfortable, non-invasive procedures designed to provide a relaxing treatment experience.",
      ar: "لا. علاجات الشعر هي إجراءات مريحة وغير جراحية، صُممت لتوفير تجربة علاجية مريحة ومسترخية.",
    },
  },
  {
    id: "hair-treatment-results",
    question: {
      en: "When will I start seeing results?",
      ar: "متى سأبدأ بملاحظة النتائج؟",
    },
    answer: {
      en: "Many clients notice improvements in hair texture and scalp health after the first few sessions, while stronger, healthier hair growth develops gradually with continued treatment.",
      ar: "يلاحظ العديد من العملاء تحسنًا في ملمس الشعر وصحة فروة الرأس بعد الجلسات الأولى، بينما يظهر نمو شعر أقوى وأكثر صحة تدريجيًا مع الاستمرار في العلاج.",
    },
  },
  {
    id: "hair-treatment-combine",
    question: {
      en: "Can Hair Treatments be combined with other services?",
      ar: "هل يمكن دمج علاجات الشعر مع خدمات أخرى؟",
    },
    answer: {
      en: "Yes. Depending on your needs, our specialists may recommend combining Hair Treatments with scalp analysis or other supportive therapies for enhanced results.",
      ar: "نعم. بناءً على احتياجاتك، قد يوصي خبراؤنا بدمج علاجات الشعر مع تحليل فروة الرأس أو علاجات داعمة أخرى للحصول على نتائج أفضل.",
    },
  },
  {
    id: "hair-treatment-downtime",
    question: {
      en: "Is there any downtime after treatment?",
      ar: "هل توجد فترة تعافٍ بعد العلاج؟",
    },
    answer: {
      en: "No. You can return to your normal daily activities immediately after your appointment, following any aftercare advice provided by our specialists.",
      ar: "لا. يمكنك العودة إلى أنشطتك اليومية المعتادة مباشرةً بعد الجلسة، مع اتباع تعليمات العناية اللاحقة التي يقدمها لك أخصائيونا.",
    },
  },
],
},

{
  slug: "anti-wrinkle",
  categorySlug: "anti-aging-solutions",

  title: {
    en: "Anti Wrinkle Treatments",
    ar: "علاجات مكافحة التجاعيد",
  },

  description: {
    en: "Reduce the appearance of fine lines and wrinkles with advanced anti-wrinkle treatments tailored to your skin's unique needs.",
    ar: "قللي من مظهر الخطوط الدقيقة والتجاعيد مع علاجات متقدمة لمكافحة التجاعيد مصممة خصيصًا لاحتياجات بشرتك.",
  },

  image: "/images/treatments/anti-wrinkle.jpg",

  durationMinutes: "30-45",

  skinType: {
    en: "Adults with Fine Lines & Wrinkles",
    ar: "للبالغين الذين يعانون من الخطوط الدقيقة والتجاعيد",
  },

  detailDescription: {
    en: "Reduce the appearance of fine lines and wrinkles with advanced anti-wrinkle treatments tailored to your skin's unique needs. Our personalized solutions help restore smoother, firmer, and naturally refreshed skin while maintaining your natural facial expressions.",
    ar: "قللي من مظهر الخطوط الدقيقة والتجاعيد مع علاجات متقدمة لمكافحة التجاعيد مصممة خصيصًا لاحتياجات بشرتك. تساعد حلولنا المخصصة على استعادة بشرة أكثر نعومة وتماسكًا ومظهراً منتعشاً مع الحفاظ على تعابير وجهك الطبيعية.",
  },

  sessions: "As Recommended",

  procedureType: {
    en: "Minimally Invasive",
    ar: "طفيف التداخل",
  },

  overview: {
    en: "Anti Wrinkle Treatments are advanced aesthetic procedures designed to soften facial wrinkles, reduce fine lines, and restore a smoother, more youthful appearance. These personalized treatments target common signs of aging while preserving natural facial movement, helping you look refreshed rather than overdone.",
    ar: "علاجات مكافحة التجاعيد هي إجراءات تجميلية متقدمة تهدف إلى تنعيم التجاعيد والخطوط الدقيقة واستعادة مظهر أكثر شبابًا ونعومة. تستهدف هذه العلاجات علامات التقدم في العمر مع الحفاظ على تعابير الوجه الطبيعية.",
  },

  overviewImage: "/images/treatments/anti-wrinkle-overview.png",

  benefits: [
    {
      icon: "/images/icons/smooth-lines.svg",
      title: {
        en: "Smooth Fine Lines",
        ar: "تنعيم الخطوط الدقيقة",
      },
      description: {
        en: "Softens visible expression lines and facial wrinkles.",
        ar: "يخفف من خطوط التعبير والتجاعيد الظاهرة.",
      },
    },
    {
      icon: "/images/icons/youthful-appearance.svg",
      title: {
        en: "Youthful Appearance",
        ar: "مظهر أكثر شبابًا",
      },
      description: {
        en: "Restores a fresher and naturally rejuvenated look.",
        ar: "يمنحك مظهراً أكثر انتعاشًا وشبابًا بشكل طبيعي.",
      },
    },
    {
      icon: "/images/icons/natural-results-2.svg",
      title: {
        en: "Natural Results",
        ar: "نتائج طبيعية",
      },
      description: {
        en: "Enhances your appearance without looking overdone.",
        ar: "يحسن مظهرك مع الحفاظ على تعابير وجهك الطبيعية.",
      },
    },
    {
      icon: "/images/icons/prevent-aging.svg",
      title: {
        en: "Prevents Early Aging",
        ar: "يحد من الشيخوخة المبكرة",
      },
      description: {
        en: "Helps slow the formation of deeper wrinkles over time.",
        ar: "يساعد في إبطاء ظهور التجاعيد العميقة مع مرور الوقت.",
      },
    },
    {
      icon: "/images/icons/quick-treatment.svg",
      title: {
        en: "Quick Treatment",
        ar: "إجراء سريع",
      },
      description: {
        en: "A fast procedure with minimal disruption to your day.",
        ar: "جلسة سريعة تتيح لك العودة إلى أنشطتك اليومية بسهولة.",
      },
    },
    {
      icon: "/images/icons/confidence.svg",
      title: {
        en: "Boosted Confidence",
        ar: "تعزيز الثقة بالنفس",
      },
      description: {
        en: "Feel more confident with smoother, refreshed-looking skin.",
        ar: "استمتع ببشرة أكثر نعومة وإشراقًا مع ثقة أكبر بنفسك.",
      },
    },
  ],

  processHeading: {
    en: "Your Journey to",
    ar: "رحلتك نحو",
  },

  processHeadingHighlight: {
    en: "Smoother, Younger-Looking Skin",
    ar: "بشرة أكثر نعومة وشبابًا",
  },

  processSubheading: {
    en: "Every Anti Wrinkle Treatment begins with a personalized consultation to ensure safe, effective, and natural-looking results.",
    ar: "تبدأ كل جلسة بعناية واستشارة مخصصة لضمان نتائج آمنة وطبيعية وفعالة.",
  },

  process: [
    {
      image: "/images/treatments/anti-wrinkle-process-1.jpg",
      title: {
        en: "Consultation",
        ar: "الاستشارة",
      },
      description: {
        en: "Our specialists assess your facial concerns, skin condition, and desired outcomes to develop a customized treatment plan.",
        ar: "يقوم خبراؤنا بتقييم حالة بشرتك وأهدافك لوضع خطة علاج مخصصة.",
      },
    },
    {
      image: "/images/treatments/anti-wrinkle-process-2.jpg",
      title: {
        en: "Facial Assessment",
        ar: "تقييم الوجه",
      },
      description: {
        en: "Target areas are carefully evaluated to determine the most effective treatment approach while maintaining natural facial expressions.",
        ar: "يتم تقييم المناطق المستهدفة بعناية لاختيار أفضل خطة علاج مع الحفاظ على تعابير الوجه الطبيعية.",
      },
    },
    {
      image: "/images/treatments/anti-wrinkle-process-3.jpg",
      title: {
        en: "Personalized Treatment",
        ar: "العلاج المخصص",
      },
      description: {
        en: "The selected anti-wrinkle treatment is performed with precision to soften wrinkles and refresh your appearance.",
        ar: "يتم تنفيذ العلاج المختار بدقة لتقليل التجاعيد ومنحك مظهراً أكثر انتعاشًا.",
      },
    },
    {
      image: "/images/treatments/anti-wrinkle-process-4.jpg",
      title: {
        en: "Aftercare & Follow-Up",
        ar: "العناية اللاحقة والمتابعة",
      },
      description: {
        en: "Post-treatment guidance is provided to help maximize results, with follow-up recommendations if required.",
        ar: "ستحصل على تعليمات للعناية بعد العلاج وتوصيات بالمتابعة للحفاظ على أفضل النتائج.",
      },
    },
  ],

 faq: [
  {
    id: "anti-wrinkle-concerns",
    question: {
      en: "What concerns do Anti Wrinkle Treatments address?",
      ar: "ما المشكلات التي تعالجها علاجات مكافحة التجاعيد؟",
    },
    answer: {
      en: "They help reduce fine lines, forehead lines, crow's feet, frown lines, and other visible signs of facial aging.",
      ar: "تساعد هذه العلاجات على تقليل الخطوط الدقيقة، وخطوط الجبهة، وتجاعيد حول العينين، وخطوط العبوس، وغيرها من علامات التقدم في العمر الظاهرة على الوجه.",
    },
  },
  {
    id: "anti-wrinkle-candidate",
    question: {
      en: "Who is a suitable candidate?",
      ar: "من هو المرشح المناسب لهذا العلاج؟",
    },
    answer: {
      en: "Adults looking to minimize wrinkles or prevent early signs of aging may benefit from Anti Wrinkle Treatments after a professional consultation.",
      ar: "يمكن للبالغين الذين يرغبون في تقليل التجاعيد أو الوقاية من علامات الشيخوخة المبكرة الاستفادة من علاجات مكافحة التجاعيد بعد استشارة احترافية.",
    },
  },
  {
    id: "anti-wrinkle-duration",
    question: {
      en: "How long does the treatment take?",
      ar: "كم تستغرق جلسة العلاج؟",
    },
    answer: {
      en: "Most appointments are completed within 30 to 45 minutes.",
      ar: "تستغرق معظم الجلسات ما بين 30 و45 دقيقة.",
    },
  },
  {
    id: "anti-wrinkle-results",
    question: {
      en: "When will I see the results?",
      ar: "متى سأرى النتائج؟",
    },
    answer: {
      en: "Results vary depending on the treatment, but improvements are typically visible within a few days, with full results developing over the following weeks.",
      ar: "تختلف النتائج حسب نوع العلاج، ولكن عادةً ما تبدأ التحسينات بالظهور خلال بضعة أيام، بينما تظهر النتائج الكاملة تدريجيًا خلال الأسابيع التالية.",
    },
  },
  {
    id: "anti-wrinkle-lasting",
    question: {
      en: "How long do the results last?",
      ar: "كم تدوم النتائج؟",
    },
    answer: {
      en: "Results differ from person to person, but regular maintenance sessions are usually recommended to maintain the desired appearance.",
      ar: "تختلف مدة النتائج من شخص لآخر، ولكن يُنصح عادةً بجلسات صيانة دورية للحفاظ على المظهر المطلوب.",
    },
  },
  {
    id: "anti-wrinkle-downtime",
    question: {
      en: "Is there any downtime?",
      ar: "هل توجد فترة تعافٍ بعد العلاج؟",
    },
    answer: {
      en: "Most clients can return to their normal daily activities shortly after treatment, following the aftercare instructions provided by our specialists.",
      ar: "يمكن لمعظم العملاء العودة إلى أنشطتهم اليومية بعد فترة قصيرة من العلاج، مع الالتزام بتعليمات العناية اللاحقة التي يقدمها أخصائيونا.",
    },
  },
  {
    id: "anti-wrinkle-natural",
    question: {
      en: "Will my face look natural after treatment?",
      ar: "هل سيبدو وجهي طبيعيًا بعد العلاج؟",
    },
    answer: {
      en: "Yes. Our approach focuses on achieving subtle, balanced enhancements that maintain your natural facial expressions while reducing visible signs of aging.",
      ar: "نعم. يركز نهجنا على تحقيق نتائج طبيعية ومتوازنة تحافظ على تعابير وجهك الطبيعية مع تقليل علامات التقدم في العمر بشكل واضح.",
    },
  },
],
},

{
  slug: "anti-aging",
  categorySlug: "anti-aging-solutions",

  title: {
    en: "Anti Aging Treatments",
    ar: "علاجات مكافحة الشيخوخة",
  },

  description: {
    en: "Restore your skin's youthful vitality with personalized anti-aging treatments designed to improve firmness, hydration, elasticity, and overall skin quality.",
    ar: "استعيدي حيوية بشرتك الشبابية مع علاجات مكافحة الشيخوخة المصممة لتحسين التماسك والترطيب والمرونة وجودة البشرة.",
  },

  image: "/images/treatments/anti-aging.jpg",

  durationMinutes: "45-60",

  skinType: {
    en: "Aging & Mature Skin",
    ar: "للبشرة المتقدمة في العمر والناضجة",
  },

  detailDescription: {
    en: "Restore your skin's youthful vitality with personalized anti-aging treatments designed to improve firmness, hydration, elasticity, and overall skin quality. Our advanced solutions help reduce visible signs of aging while promoting healthier, smoother, and naturally radiant skin.",
    ar: "استعيدي حيوية بشرتك الشبابية مع علاجات مكافحة الشيخوخة المصممة خصيصًا لتحسين التماسك والترطيب والمرونة وجودة البشرة. تساعد حلولنا المتقدمة على تقليل علامات التقدم في العمر مع تعزيز بشرة أكثر صحة ونعومة وإشراقًا طبيعيًا.",
  },

  sessions: "4–6 Sessions",

  procedureType: {
    en: "Non-Invasive / Minimally Invasive",
    ar: "غير جراحي / طفيف التداخل",
  },

  overview: {
    en: "Anti Aging Treatments are advanced aesthetic procedures designed to address multiple signs of skin aging, including fine lines, wrinkles, loss of elasticity, uneven texture, and dullness. Using modern technologies and professional skincare solutions, these treatments stimulate skin renewal, improve collagen production, and restore a healthier, more youthful complexion.",
    ar: "علاجات مكافحة الشيخوخة هي إجراءات تجميلية متقدمة تهدف إلى معالجة علامات تقدم العمر، بما في ذلك الخطوط الدقيقة، والتجاعيد، وفقدان المرونة، وعدم تجانس ملمس البشرة، والبهتان. باستخدام أحدث التقنيات وحلول العناية الاحترافية، تساعد هذه العلاجات على تحفيز تجدد البشرة وتعزيز إنتاج الكولاجين واستعادة مظهر أكثر شبابًا وصحة.",
  },

  overviewImage: "/images/treatments/anti-aging-overview.png",

  benefits: [
    {
      icon: "/images/icons/firmer-skin.svg",
      title: {
        en: "Firmer Skin",
        ar: "بشرة أكثر تماسكًا",
      },
      description: {
        en: "Improves skin elasticity for a firmer, lifted appearance.",
        ar: "يعزز مرونة البشرة للحصول على مظهر أكثر تماسكًا وشدًا.",
      },
    },
    {
      icon: "/images/icons/reduced-fine-lines.svg",
      title: {
        en: "Reduced Fine Lines",
        ar: "تقليل الخطوط الدقيقة",
      },
      description: {
        en: "Softens visible signs of aging and smooths the skin.",
        ar: "يخفف علامات التقدم في العمر ويمنح البشرة ملمسًا أكثر نعومة.",
      },
    },
    {
      icon: "/images/icons/enhanced-hydration.svg",
      title: {
        en: "Enhanced Hydration",
        ar: "ترطيب عميق",
      },
      description: {
        en: "Restores moisture for healthier, plumper-looking skin.",
        ar: "يعيد ترطيب البشرة لتبدو أكثر امتلاءً وصحة.",
      },
    },
    {
      icon: "/images/icons/improved-texture-2.svg",
      title: {
        en: "Improved Skin Texture",
        ar: "تحسين ملمس البشرة",
      },
      description: {
        en: "Creates smoother, softer, and more refined skin.",
        ar: "يجعل البشرة أكثر نعومة وصفاءً وتجانسًا.",
      },
    },
    {
      icon: "/images/icons/natural-rejuvenation.svg",
      title: {
        en: "Natural Rejuvenation",
        ar: "تجديد طبيعي",
      },
      description: {
        en: "Supports collagen production for long-term skin renewal.",
        ar: "يعزز إنتاج الكولاجين لتجديد البشرة على المدى الطويل.",
      },
    },
    {
      icon: "/images/icons/youthful-glow.svg",
      title: {
        en: "Youthful Glow",
        ar: "إشراقة شبابية",
      },
      description: {
        en: "Revives dull, tired skin with a fresh and radiant complexion.",
        ar: "يعيد الحيوية للبشرة الباهتة ويمنحها إشراقة صحية.",
      },
    },
  ],

  processHeading: {
    en: "Your Journey to",
    ar: "رحلتك نحو",
  },

  processHeadingHighlight: {
    en: "Younger-Looking Skin",
    ar: "بشرة أكثر شبابًا",
  },

  processSubheading: {
    en: "Every Anti Aging Treatment is carefully tailored to improve your skin's health while delivering natural, long-lasting rejuvenation.",
    ar: "يتم تصميم كل علاج لمكافحة الشيخوخة بعناية لتحسين صحة البشرة وتحقيق نتائج طبيعية تدوم طويلًا.",
  },

  process: [
    {
      image: "/images/treatments/anti-aging-process-1.jpg",
      title: {
        en: "Consultation",
        ar: "الاستشارة",
      },
      description: {
        en: "Our specialists evaluate your skin condition, aging concerns, and beauty goals to create a personalized treatment plan.",
        ar: "يقوم خبراؤنا بتقييم حالة بشرتك ومشكلات الشيخوخة وأهدافك الجمالية لوضع خطة علاج مخصصة.",
      },
    },
    {
      image: "/images/treatments/anti-aging-process-2.jpg",
      title: {
        en: "Skin Assessment",
        ar: "تحليل البشرة",
      },
      description: {
        en: "A comprehensive skin analysis helps identify areas of concern, including elasticity, hydration, texture, and signs of aging.",
        ar: "يساعد تحليل البشرة الشامل على تحديد مشكلات المرونة والترطيب وملمس البشرة وعلامات التقدم في العمر.",
      },
    },
    {
      image: "/images/treatments/anti-aging-process-3.jpg",
      title: {
        en: "Personalized Treatment",
        ar: "العلاج المخصص",
      },
      description: {
        en: "Your customized anti-aging procedure is performed using advanced techniques and professional skincare solutions to restore youthful skin.",
        ar: "يتم تنفيذ العلاج المخصص باستخدام تقنيات متقدمة وحلول احترافية لاستعادة شباب البشرة.",
      },
    },
    {
      image: "/images/treatments/anti-aging-process-4.jpg",
      title: {
        en: "Aftercare & Maintenance",
        ar: "العناية اللاحقة والمتابعة",
      },
      description: {
        en: "After treatment, we provide personalized skincare recommendations and maintenance guidance to help prolong your results.",
        ar: "بعد العلاج، نقدم توصيات مخصصة للعناية بالبشرة وإرشادات للحفاظ على النتائج لأطول فترة ممكنة.",
      },
    },
  ],

 faq: [
  {
    id: "anti-aging-concerns",
    question: {
      en: "What concerns do Anti Aging Treatments address?",
      ar: "ما المشكلات التي تعالجها علاجات مكافحة الشيخوخة؟",
    },
    answer: {
      en: "They help improve fine lines, wrinkles, skin laxity, dehydration, uneven texture, and other common signs of aging.",
      ar: "تساعد هذه العلاجات على تحسين الخطوط الدقيقة والتجاعيد وترهل البشرة والجفاف وعدم تجانس الملمس وغيرها من علامات التقدم في العمر الشائعة.",
    },
  },
  {
    id: "anti-aging-candidate",
    question: {
      en: "Who can benefit from Anti Aging Treatments?",
      ar: "من يمكنه الاستفادة من علاجات مكافحة الشيخوخة؟",
    },
    answer: {
      en: "These treatments are suitable for adults who wish to maintain youthful skin or reduce visible signs of aging through personalized professional care.",
      ar: "هذه العلاجات مناسبة للبالغين الذين يرغبون في الحفاظ على بشرة شابة أو تقليل علامات التقدم في العمر من خلال رعاية احترافية مخصصة.",
    },
  },
  {
    id: "anti-aging-sessions",
    question: {
      en: "How many sessions will I need?",
      ar: "كم عدد الجلسات التي سأحتاجها؟",
    },
    answer: {
      en: "The number of sessions varies depending on your skin condition and treatment goals. During your consultation, our specialists will recommend a customized treatment plan.",
      ar: "يعتمد عدد الجلسات على حالة بشرتك وأهداف العلاج. خلال الاستشارة، سيقترح خبراؤنا خطة علاج مخصصة تناسب احتياجاتك.",
    },
  },
  {
    id: "anti-aging-pain",
    question: {
      en: "Are Anti Aging Treatments painful?",
      ar: "هل علاجات مكافحة الشيخوخة مؤلمة؟",
    },
    answer: {
      en: "Most treatments involve minimal discomfort and are designed to provide a comfortable experience.",
      ar: "معظم العلاجات تسبب انزعاجًا بسيطًا فقط، وقد صُممت لتوفير تجربة مريحة وآمنة.",
    },
  },
  {
    id: "anti-aging-results",
    question: {
      en: "When will I notice results?",
      ar: "متى سألاحظ النتائج؟",
    },
    answer: {
      en: "Many clients notice improvements in skin texture and radiance after the first session, while optimal results develop gradually with continued treatment.",
      ar: "يلاحظ العديد من العملاء تحسنًا في ملمس البشرة وإشراقتها بعد الجلسة الأولى، بينما تظهر النتائج المثالية تدريجيًا مع استمرار العلاج.",
    },
  },
  {
    id: "anti-aging-combination",
    question: {
      en: "Can Anti Aging Treatments be combined with other procedures?",
      ar: "هل يمكن دمج علاجات مكافحة الشيخوخة مع إجراءات أخرى؟",
    },
    answer: {
      en: "Yes. Depending on your skin's needs, our specialists may recommend combining anti-aging treatments with complementary skincare procedures for enhanced results.",
      ar: "نعم. وفقًا لاحتياجات بشرتك، قد يوصي خبراؤنا بدمج علاجات مكافحة الشيخوخة مع إجراءات أخرى للعناية بالبشرة للحصول على نتائج أفضل.",
    },
  },
  {
    id: "anti-aging-downtime",
    question: {
      en: "Is there any downtime?",
      ar: "هل توجد فترة تعافٍ بعد العلاج؟",
    },
    answer: {
      en: "Downtime depends on the specific treatment selected, but many anti-aging procedures allow you to return to your normal routine with little or no interruption.",
      ar: "تعتمد فترة التعافي على نوع العلاج المختار، إلا أن العديد من علاجات مكافحة الشيخوخة تتيح لك العودة إلى روتينك اليومي مع فترة تعافٍ قصيرة أو دون الحاجة إليها.",
    },
  },
],
},



 
];