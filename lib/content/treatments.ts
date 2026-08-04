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
  processHeadingHighlight: Localized;
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
        title: {
          en: "Finishing & Care Advice",
          ar: "اللمسات الأخيرة ونصائح العناية",
        },
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

  {
    slug: "skin-analysis",
    categorySlug: "consultation-analysis",

    title: {
      en: "Skin Analysis",
      ar: "تحليل البشرة",
    },

    description: {
      en: "Discover your skin's unique needs with our comprehensive Skin Analysis. Using professional assessment techniques, we evaluate your skin condition, identify underlying concerns, and create a personalized treatment plan to help you achieve healthier, clearer, and more radiant skin.",
      ar: "اكتشف احتياجات بشرتك الفريدة من خلال تحليل البشرة الشامل. باستخدام تقنيات تقييم احترافية، نقوم بتقييم حالة بشرتك، وتحديد المشكلات الكامنة، ووضع خطة علاج مخصصة لمساعدتك في الحصول على بشرة أكثر صحة ونقاءً وإشراقًا.",
    },

    image: "/images/treatments/skin-analysis.jpg",

    durationMinutes: "30-45",

    skinType: {
      en: "All Skin Types",
      ar: "جميع أنواع البشرة",
    },

    detailDescription: {
      en: "Discover your skin's unique needs with our comprehensive Skin Analysis. Using professional assessment techniques, we evaluate your skin condition, identify underlying concerns, and create a personalized treatment plan to help you achieve healthier, clearer, and more radiant skin.",
      ar: "اكتشف احتياجات بشرتك الفريدة من خلال تحليل البشرة الشامل. باستخدام تقنيات تقييم احترافية، نقوم بدراسة حالة بشرتك وتحديد المشكلات الكامنة ووضع خطة علاج مخصصة لمساعدتك في الوصول إلى بشرة أكثر صحة وإشراقًا.",
    },

    sessions: "As Required",

    procedureType: {
      en: "Non-Invasive",
      ar: "غير جراحي",
    },

    overview: {
      en: "Skin Analysis is a professional consultation that carefully evaluates your skin's health, condition, and individual concerns. Our specialists assess factors such as hydration, pigmentation, texture, pore size, sensitivity, and signs of aging to better understand your skin's needs.",
      ar: "تحليل البشرة هو استشارة احترافية يتم خلالها تقييم صحة البشرة وحالتها والمشكلات الخاصة بها بدقة. يقوم خبراؤنا بفحص عوامل مثل الترطيب، والتصبغات، وملمس البشرة، وحجم المسام، والحساسية، وعلامات التقدم في العمر لفهم احتياجات بشرتك بشكل أفضل.",
    },

    overviewImage: "/images/treatments/skin-analysis-overview.png",

    benefits: [
      {
        icon: "/images/icons/personalized-assessment.svg",
        title: {
          en: "Personalized Assessment",
          ar: "تقييم شخصي",
        },
        description: {
          en: "Gain a clear understanding of your skin's unique condition.",
          ar: "احصل على فهم واضح لحالة بشرتك واحتياجاتها الفريدة.",
        },
      },
      {
        icon: "/images/icons/early-detection.svg",
        title: {
          en: "Early Detection",
          ar: "الاكتشاف المبكر",
        },
        description: {
          en: "Identify skin concerns before they become more noticeable.",
          ar: "اكتشف مشكلات البشرة قبل أن تصبح أكثر وضوحًا.",
        },
      },
      {
        icon: "/images/icons/treatment-plan.svg",
        title: {
          en: "Tailored Treatment Plan",
          ar: "خطة علاج مخصصة",
        },
        description: {
          en: "Receive recommendations based on your individual skin needs.",
          ar: "احصل على توصيات مصممة وفقًا لاحتياجات بشرتك.",
        },
      },
      {
        icon: "/images/icons/skincare.svg",
        title: {
          en: "Better Skincare",
          ar: "عناية أفضل بالبشرة",
        },
        description: {
          en: "Learn which products and routines best suit your skin.",
          ar: "تعرف على المنتجات وروتين العناية الأنسب لبشرتك.",
        },
      },
      {
        icon: "/images/icons/professional-guidance.svg",
        title: {
          en: "Professional Guidance",
          ar: "إرشادات احترافية",
        },
        description: {
          en: "Benefit from expert advice to achieve your skincare goals.",
          ar: "استفد من نصائح الخبراء لتحقيق أهداف العناية ببشرتك.",
        },
      },
      {
        icon: "/images/icons/healthy-skin.svg",
        title: {
          en: "Healthier Skin Journey",
          ar: "رحلة نحو بشرة صحية",
        },
        description: {
          en: "Build the foundation for long-term skin health and confidence.",
          ar: "ابدأ رحلتك نحو بشرة صحية وثقة تدوم على المدى الطويل.",
        },
      },
    ],

    processHeading: {
      en: "Your Journey to",
      ar: "رحلتك نحو",
    },

    processHeadingHighlight: {
      en: "Better Skin Starts Here",
      ar: "بشرة أفضل تبدأ من هنا",
    },

    processSubheading: {
      en: "Every Skin Analysis is performed with attention to detail, helping us understand your skin and recommend the most effective care.",
      ar: "يتم إجراء كل تحليل للبشرة بعناية فائقة لمساعدتنا على فهم احتياجات بشرتك واقتراح أفضل خطة للعناية بها.",
    },

    process: [
      {
        image: "/images/treatments/skin-analysis-process-1.jpg",
        title: {
          en: "Consultation",
          ar: "الاستشارة",
        },
        description: {
          en: "We begin by discussing your skincare concerns, medical history, daily routine, and beauty goals.",
          ar: "نبدأ بمناقشة مشكلات بشرتك، وتاريخك الصحي، وروتين العناية اليومي، وأهدافك الجمالية.",
        },
      },
      {
        image: "/images/treatments/skin-analysis-process-2.jpg",
        title: {
          en: "Skin Assessment",
          ar: "تقييم البشرة",
        },
        description: {
          en: "Our specialists carefully evaluate your skin's texture, hydration, pigmentation, pores, elasticity, and overall condition.",
          ar: "يقوم خبراؤنا بتقييم ملمس البشرة، والترطيب، والتصبغات، والمسام، والمرونة، والحالة العامة للبشرة.",
        },
      },
      {
        image: "/images/treatments/skin-analysis-process-3.jpg",
        title: {
          en: "Personalized Treatment",
          ar: "العلاج المخصص",
        },
        description: {
          en: "Based on the assessment, we recommend suitable treatments, skincare products, and lifestyle adjustments tailored to your needs.",
          ar: "بناءً على نتائج التقييم، نوصي بالعلاجات المناسبة ومنتجات العناية بالبشرة والتعديلات المناسبة لنمط حياتك.",
        },
      },
      {
        image: "/images/treatments/skin-analysis-process-4.jpg",
        title: {
          en: "Skin Care Plan",
          ar: "خطة العناية بالبشرة",
        },
        description: {
          en: "You'll receive professional guidance and a personalized plan to help maintain healthy, radiant skin over time.",
          ar: "ستحصل على إرشادات احترافية وخطة عناية مخصصة للحفاظ على بشرة صحية ومشرقة على المدى الطويل.",
        },
      },
    ],

    faq: [
      {
        id: "skin-analysis-purpose",
        question: {
          en: "What is the purpose of a Skin Analysis?",
          ar: "ما الهدف من تحليل البشرة؟",
        },
        answer: {
          en: "Skin Analysis helps identify your skin's condition and concerns so we can recommend the most appropriate treatments and skincare routine.",
          ar: "يساعد تحليل البشرة في تحديد حالة بشرتك والمشكلات التي تعاني منها، مما يمكننا من اقتراح العلاجات وروتين العناية الأكثر ملاءمة.",
        },
      },
      {
        id: "skin-analysis-who",
        question: {
          en: "Who should have a Skin Analysis?",
          ar: "من يحتاج إلى تحليل البشرة؟",
        },
        answer: {
          en: "Anyone looking to improve their skin health, address specific concerns, or begin professional skincare treatments can benefit from a Skin Analysis.",
          ar: "يمكن لأي شخص يرغب في تحسين صحة بشرته، أو معالجة مشكلات معينة، أو بدء علاجات احترافية للبشرة الاستفادة من تحليل البشرة.",
        },
      },
      {
        id: "skin-analysis-duration",
        question: {
          en: "How long does the consultation take?",
          ar: "كم تستغرق جلسة الاستشارة؟",
        },
        answer: {
          en: "A typical Skin Analysis appointment takes approximately 30 to 45 minutes.",
          ar: "تستغرق جلسة تحليل البشرة عادةً ما بين 30 و45 دقيقة.",
        },
      },
      {
        id: "skin-analysis-pain",
        question: {
          en: "Is Skin Analysis painful?",
          ar: "هل تحليل البشرة مؤلم؟",
        },
        answer: {
          en: "No. Skin Analysis is completely non-invasive and comfortable.",
          ar: "لا، تحليل البشرة إجراء غير جراحي تمامًا ومريح.",
        },
      },
      {
        id: "skin-analysis-before-treatment",
        question: {
          en: "Do I need a Skin Analysis before treatment?",
          ar: "هل أحتاج إلى تحليل البشرة قبل العلاج؟",
        },
        answer: {
          en: "While not always required, it is highly recommended to ensure treatments are customized to your skin's individual needs.",
          ar: "رغم أنه ليس إلزاميًا دائمًا، إلا أنه يُوصى به بشدة لضمان اختيار العلاج المناسب لاحتياجات بشرتك.",
        },
      },
      {
        id: "skin-analysis-plan",
        question: {
          en: "Will I receive a personalized treatment plan?",
          ar: "هل سأحصل على خطة علاج مخصصة؟",
        },
        answer: {
          en: "Yes. Our specialists provide tailored recommendations based on your skin assessment and beauty goals.",
          ar: "نعم، يقدم خبراؤنا توصيات وخطة علاج مخصصة بناءً على نتائج تقييم بشرتك وأهدافك الجمالية.",
        },
      },
      {
        id: "skin-analysis-frequency",
        question: {
          en: "How often should I have a Skin Analysis?",
          ar: "كم مرة يُنصح بإجراء تحليل البشرة؟",
        },
        answer: {
          en: "Regular Skin Analysis is recommended whenever your skin changes or before starting a new skincare or treatment program to ensure the best possible results.",
          ar: "يُنصح بإجراء تحليل للبشرة عند حدوث تغيرات في حالتها أو قبل البدء بأي برنامج جديد للعناية أو العلاج، لضمان أفضل النتائج.",
        },
      },
    ],
  },

  {
    slug: "scalp-analysis",
    categorySlug: "consultation-analysis",

    title: {
      en: "Scalp Analysis",
      ar: "تحليل فروة الرأس",
    },

    description: {
      en: "Discover the foundation of healthy hair with our professional Scalp Analysis. We carefully assess your scalp condition, hair density, and overall hair health to identify underlying concerns and create a personalized treatment plan for stronger, healthier-looking hair.",
      ar: "اكتشف أساس الشعر الصحي من خلال تحليل فروة الرأس الاحترافي. نقوم بتقييم حالة فروة الرأس وكثافة الشعر وصحته العامة لتحديد المشكلات الكامنة ووضع خطة علاج مخصصة للحصول على شعر أقوى وأكثر صحة.",
    },

    image: "/images/treatments/scalp-analysis.jpg",

    durationMinutes: "30-45",

    skinType: {
      en: "Men & Women",
      ar: "للرجال والنساء",
    },

    detailDescription: {
      en: "Discover the foundation of healthy hair with our professional Scalp Analysis. We carefully assess your scalp condition, hair density, and overall hair health to identify underlying concerns and create a personalized treatment plan for stronger, healthier-looking hair.",
      ar: "اكتشف أساس الشعر الصحي من خلال تحليل فروة الرأس الاحترافي. نقوم بتقييم حالة فروة الرأس وكثافة الشعر وصحته العامة لتحديد المشكلات الكامنة ووضع خطة علاج مخصصة للحصول على شعر أقوى وأكثر صحة.",
    },

    sessions: "As Required",

    procedureType: {
      en: "Non-Invasive",
      ar: "غير جراحي",
    },

    overview: {
      en: "Scalp Analysis is a professional consultation designed to evaluate the overall health of your scalp and hair. Our specialists examine factors such as scalp condition, hair density, hair follicles, oil balance, dryness, dandruff, and signs of hair thinning.",
      ar: "تحليل فروة الرأس هو استشارة احترافية تهدف إلى تقييم الصحة العامة لفروة الرأس والشعر. يقوم خبراؤنا بفحص عوامل مثل حالة فروة الرأس، وكثافة الشعر، وبصيلات الشعر، وتوازن الزيوت، والجفاف، والقشرة، وعلامات ترقق الشعر.",
    },

    overviewImage: "/images/treatments/scalp-analysis-overview.png",

    benefits: [
      {
        icon: "/images/icons/personalized-assessment.svg",
        title: {
          en: "Healthy Scalp Assessment",
          ar: "تقييم صحة فروة الرأس",
        },
        description: {
          en: "Understand the condition of your scalp and hair follicles.",
          ar: "تعرف على حالة فروة رأسك وبصيلات شعرك بدقة.",
        },
      },
      {
        icon: "/images/icons/early-detection.svg",
        title: {
          en: "Early Detection",
          ar: "الاكتشاف المبكر",
        },
        description: {
          en: "Identify scalp and hair concerns before they become more noticeable.",
          ar: "اكتشف مشكلات فروة الرأس والشعر قبل أن تتفاقم.",
        },
      },
      {
        icon: "/images/icons/treatment-plan.svg",
        title: {
          en: "Personalized Hair Plan",
          ar: "خطة شعر مخصصة",
        },
        description: {
          en: "Receive recommendations based on your individual scalp and hair needs.",
          ar: "احصل على توصيات مخصصة وفقًا لاحتياجات فروة رأسك وشعرك.",
        },
      },
      {
        icon: "/images/icons/skincare.svg",
        title: {
          en: "Better Hair Health",
          ar: "صحة شعر أفضل",
        },
        description: {
          en: "Learn how to improve scalp health and maintain stronger hair.",
          ar: "تعرف على أفضل الطرق لتحسين صحة فروة الرأس والحفاظ على شعر أقوى.",
        },
      },
      {
        icon: "/images/icons/professional-guidance.svg",
        title: {
          en: "Professional Guidance",
          ar: "إرشادات احترافية",
        },
        description: {
          en: "Benefit from expert advice to achieve your hair care goals.",
          ar: "استفد من نصائح الخبراء لتحقيق أهداف العناية بشعرك.",
        },
      },
      {
        icon: "/images/icons/healthy-skin.svg",
        title: {
          en: "Stronger Hair Journey",
          ar: "رحلة نحو شعر أقوى",
        },
        description: {
          en: "Build the foundation for healthier, fuller-looking hair over time.",
          ar: "ابدأ رحلة الحصول على شعر أكثر صحة وكثافة مع مرور الوقت.",
        },
      },
    ],

    processHeading: {
      en: "Your Journey to",
      ar: "رحلتك نحو",
    },

    processHeadingHighlight: {
      en: "Healthier Hair Starts Here",
      ar: "شعر أكثر صحة يبدأ من هنا",
    },

    processSubheading: {
      en: "Every Scalp Analysis is performed with precision to help us understand your scalp health and recommend the most effective treatment plan.",
      ar: "يتم إجراء كل تحليل لفروة الرأس بدقة لمساعدتنا على فهم حالتها واقتراح أفضل خطة علاج تناسب احتياجاتك.",
    },

    process: [
      {
        image: "/images/treatments/scalp-analysis-process-1.jpg",
        title: {
          en: "Consultation",
          ar: "الاستشارة",
        },
        description: {
          en: "We begin by discussing your hair concerns, lifestyle, medical history, and hair care routine.",
          ar: "نبدأ بمناقشة مشكلات الشعر، ونمط الحياة، والتاريخ الطبي، وروتين العناية بالشعر.",
        },
      },
      {
        image: "/images/treatments/scalp-analysis-process-2.jpg",
        title: {
          en: "Scalp Assessment",
          ar: "تقييم فروة الرأس",
        },
        description: {
          en: "Our specialists carefully evaluate scalp health, hair density, follicles, oil production, dryness, and overall hair condition.",
          ar: "يقوم خبراؤنا بتقييم صحة فروة الرأس، وكثافة الشعر، والبصيلات، وإفراز الزيوت، والجفاف، والحالة العامة للشعر.",
        },
      },
      {
        image: "/images/treatments/scalp-analysis-process-3.jpg",
        title: {
          en: "Personalized Treatment",
          ar: "العلاج المخصص",
        },
        description: {
          en: "Based on the findings, we recommend suitable hair treatments, scalp care solutions, and home care practices tailored to your needs.",
          ar: "استنادًا إلى نتائج التقييم، نوصي بعلاجات الشعر المناسبة، وحلول العناية بفروة الرأس، وروتين العناية المنزلي الملائم.",
        },
      },
      {
        image: "/images/treatments/scalp-analysis-process-4.jpg",
        title: {
          en: "Hair Care Plan",
          ar: "خطة العناية بالشعر",
        },
        description: {
          en: "You'll receive a personalized treatment roadmap designed to improve scalp health and support stronger, healthier hair.",
          ar: "ستحصل على خطة علاج مخصصة تهدف إلى تحسين صحة فروة الرأس ودعم نمو شعر أقوى وأكثر صحة.",
        },
      },
    ],

    faq: [
      {
        id: "scalp-analysis-what-is",
        question: {
          en: "What is a Scalp Analysis?",
          ar: "ما هو تحليل فروة الرأس؟",
        },
        answer: {
          en: "Scalp Analysis is a professional assessment that evaluates the health of your scalp and hair to identify concerns and recommend personalized treatment solutions.",
          ar: "تحليل فروة الرأس هو تقييم احترافي يهدف إلى فحص صحة فروة الرأس والشعر لتحديد المشكلات واقتراح حلول علاجية مخصصة.",
        },
      },
      {
        id: "scalp-analysis-who",
        question: {
          en: "Who should have a Scalp Analysis?",
          ar: "من يحتاج إلى تحليل فروة الرأس؟",
        },
        answer: {
          en: "Anyone experiencing hair fall, thinning hair, dandruff, scalp irritation, excessive oiliness, or simply wanting to improve overall hair health can benefit from a Scalp Analysis.",
          ar: "يمكن لأي شخص يعاني من تساقط الشعر، أو ترققه، أو القشرة، أو تهيج فروة الرأس، أو زيادة إفراز الزيوت، أو يرغب في تحسين صحة شعره الاستفادة من تحليل فروة الرأس.",
        },
      },
      {
        id: "scalp-analysis-duration",
        question: {
          en: "How long does the consultation take?",
          ar: "كم تستغرق جلسة الاستشارة؟",
        },
        answer: {
          en: "A typical Scalp Analysis appointment takes approximately 30 to 45 minutes.",
          ar: "تستغرق جلسة تحليل فروة الرأس عادةً ما بين 30 و45 دقيقة.",
        },
      },
      {
        id: "scalp-analysis-pain",
        question: {
          en: "Is Scalp Analysis painful?",
          ar: "هل تحليل فروة الرأس مؤلم؟",
        },
        answer: {
          en: "No. The procedure is completely non-invasive, comfortable, and painless.",
          ar: "لا، الإجراء غير جراحي تمامًا، ومريح، ولا يسبب أي ألم.",
        },
      },
      {
        id: "scalp-analysis-plan",
        question: {
          en: "Will I receive a personalized treatment plan?",
          ar: "هل سأحصل على خطة علاج مخصصة؟",
        },
        answer: {
          en: "Yes. After the assessment, our specialists will recommend treatments and hair care solutions specifically tailored to your scalp condition.",
          ar: "نعم، بعد التقييم سيقدم لك خبراؤنا علاجات وحلولًا للعناية بالشعر مصممة خصيصًا وفقًا لحالة فروة رأسك.",
        },
      },
      {
        id: "scalp-analysis-hair-loss",
        question: {
          en: "Can Scalp Analysis help with hair loss?",
          ar: "هل يساعد تحليل فروة الرأس في علاج تساقط الشعر؟",
        },
        answer: {
          en: "Yes. It helps identify possible factors contributing to hair thinning or hair loss, allowing us to recommend appropriate treatments and care plans.",
          ar: "نعم، يساعد في تحديد العوامل المحتملة المسببة لترقق الشعر أو تساقطه، مما يمكننا من اقتراح العلاجات وخطط العناية المناسبة.",
        },
      },
      {
        id: "scalp-analysis-frequency",
        question: {
          en: "How often should I have a Scalp Analysis?",
          ar: "كم مرة يُنصح بإجراء تحليل فروة الرأس؟",
        },
        answer: {
          en: "Regular Scalp Analysis is recommended whenever you notice changes in your hair or scalp, or before beginning a new hair treatment program to monitor your progress effectively.",
          ar: "يُنصح بإجراء تحليل لفروة الرأس عند ملاحظة أي تغيرات في الشعر أو فروة الرأس، أو قبل البدء بأي برنامج علاجي جديد لمتابعة تقدم الحالة بفعالية.",
        },
      },
    ],
  },

  {
    slug: "advanced-beauty-technology",
    categorySlug: "consultation-analysis",

    title: {
      en: "Advanced Beauty Technology",
      ar: "تقنيات التجميل المتقدمة",
    },

    description: {
      en: "Discover your skin's true needs with advanced diagnostic technology designed to analyze, understand, and personalize your beauty journey. Our advanced beauty technology combines precision analysis with expert recommendations to create targeted treatment plans for healthier, more radiant skin.",
      ar: "اكتشف احتياجات بشرتك الحقيقية باستخدام تقنيات تشخيص متقدمة مصممة لتحليل البشرة وفهمها وتخصيص رحلة العناية بها. تجمع تقنياتنا المتقدمة بين التحليل الدقيق وتوصيات الخبراء لإنشاء خطط علاج مخصصة تمنحك بشرة أكثر صحة وإشراقًا.",
    },

    image: "/images/treatments/advanced-beauty-technologys.jpg",

    durationMinutes: "45",

    skinType: {
      en: "All Skin Types",
      ar: "جميع أنواع البشرة",
    },

    detailDescription: {
      en: "Discover your skin's true needs with advanced diagnostic technology designed to analyze, understand, and personalize your beauty journey. Our advanced beauty technology combines precision analysis with expert recommendations to create targeted treatment plans for healthier, more radiant skin.",
      ar: "اكتشف احتياجات بشرتك الحقيقية باستخدام تقنيات تشخيص متقدمة مصممة لتحليل البشرة وفهمها وتخصيص رحلة العناية بها. تجمع تقنياتنا المتقدمة بين التحليل الدقيق وتوصيات الخبراء لإنشاء خطط علاج مخصصة تمنحك بشرة أكثر صحة وإشراقًا.",
    },

    sessions: "As Required",

    procedureType: {
      en: "Non-Invasive",
      ar: "غير جراحي",
    },

    overview: {
      en: "Advanced Beauty Technology uses innovative skin analysis tools and modern diagnostic techniques to evaluate your skin condition in depth. By identifying concerns such as hydration levels, pigmentation, texture, sensitivity, and signs of aging, we create personalized recommendations tailored to your unique skin goals.",
      ar: "تستخدم تقنيات التجميل المتقدمة أدوات تحليل مبتكرة وتقنيات تشخيص حديثة لتقييم حالة بشرتك بدقة. ومن خلال تحديد مشكلات مثل الترطيب، والتصبغات، وملمس البشرة، والحساسية، وعلامات التقدم في العمر، نقدم توصيات مخصصة تناسب احتياجاتك وأهدافك الجمالية.",
    },

    overviewImage: "/images/treatments/advanced-beauty-technology-overview.png",

    benefits: [
      {
        icon: "/images/icons/personalized-assessment.svg",
        title: {
          en: "Accurate Skin Analysis",
          ar: "تحليل دقيق للبشرة",
        },
        description: {
          en: "Identifies hidden skin concerns and provides a detailed understanding of your skin condition.",
          ar: "يكشف المشكلات الخفية في البشرة ويوفر فهماً دقيقاً لحالتها.",
        },
      },
      {
        icon: "/images/icons/treatment-plan.svg",
        title: {
          en: "Personalized Treatment Plans",
          ar: "خطط علاج مخصصة",
        },
        description: {
          en: "Creates customized beauty solutions based on your skin type, concerns, and desired results.",
          ar: "يقدم حلولاً تجميلية مخصصة بناءً على نوع بشرتك واحتياجاتها وأهدافك.",
        },
      },
      {
        icon: "/images/icons/early-detection.svg",
        title: {
          en: "Early Detection of Skin Concerns",
          ar: "الاكتشاف المبكر لمشكلات البشرة",
        },
        description: {
          en: "Helps identify potential issues before they become more visible.",
          ar: "يساعد على اكتشاف المشكلات المحتملة قبل أن تصبح أكثر وضوحًا.",
        },
      },
      {
        icon: "/images/icons/skincare.svg",
        title: {
          en: "Better Treatment Results",
          ar: "نتائج علاج أفضل",
        },
        description: {
          en: "Ensures every treatment is selected according to your skin's specific requirements.",
          ar: "يضمن اختيار العلاج الأنسب وفقًا لاحتياجات بشرتك الخاصة.",
        },
      },
      {
        icon: "/images/icons/professional-guidance.svg",
        title: {
          en: "Advanced Skin Monitoring",
          ar: "متابعة متقدمة للبشرة",
        },
        description: {
          en: "Tracks your skin improvements and progress throughout your beauty journey.",
          ar: "يتابع تطور وتحسن بشرتك طوال رحلة العناية بها.",
        },
      },
      {
        icon: "/images/icons/healthy-skin.svg",
        title: {
          en: "Confidence in Your Skin Care",
          ar: "الثقة في روتين العناية ببشرتك",
        },
        description: {
          en: "Provides expert guidance to help you maintain healthier, balanced, and radiant skin.",
          ar: "يوفر إرشادات احترافية للحفاظ على بشرة صحية ومتوازنة ومشرقة.",
        },
      },
    ],

    processHeading: {
      en: "Your Journey to",
      ar: "رحلتك نحو",
    },

    processHeadingHighlight: {
      en: "Healthier, Radiant Skin",
      ar: "بشرة أكثر صحة وإشراقًا",
    },

    processSubheading: {
      en: "Every consultation is carefully designed to understand your skin, identify your concerns, and create a personalized roadmap for achieving your beauty goals.",
      ar: "تم تصميم كل استشارة بعناية لفهم بشرتك، وتحديد احتياجاتها، ووضع خطة مخصصة لتحقيق أهدافك الجمالية.",
    },

    process: [
      {
        image: "/images/treatments/advanced-beauty-technology-process-1.jpg",
        title: {
          en: "Consultation",
          ar: "الاستشارة",
        },
        description: {
          en: "We begin with a detailed consultation to understand your lifestyle, skin concerns, beauty goals, and previous treatments.",
          ar: "نبدأ باستشارة تفصيلية لفهم نمط حياتك، ومشكلات بشرتك، وأهدافك الجمالية، والعلاجات السابقة.",
        },
      },
      {
        image: "/images/treatments/advanced-beauty-technology-process-2.jpg",
        title: {
          en: "Advanced Skin Analysis",
          ar: "تحليل البشرة المتقدم",
        },
        description: {
          en: "Using advanced diagnostic technology, we evaluate your skin condition, including hydration, texture, pigmentation, pores, and overall skin health.",
          ar: "باستخدام تقنيات تشخيص متقدمة، نقوم بتقييم ترطيب البشرة وملمسها وتصبغاتها والمسام وصحتها العامة.",
        },
      },
      {
        image: "/images/treatments/advanced-beauty-technology-process-3.jpg",
        title: {
          en: "Personalized Treatment",
          ar: "العلاج المخصص",
        },
        description: {
          en: "Our specialists analyze the results and recommend suitable treatments, skincare routines, and professional solutions designed for your needs.",
          ar: "يقوم خبراؤنا بتحليل النتائج واقتراح العلاجات وروتين العناية والحلول الاحترافية المناسبة لاحتياجاتك.",
        },
      },
      {
        image: "/images/treatments/advanced-beauty-technology-process-4.jpg",
        title: {
          en: "Planning & Follow-Up",
          ar: "الخطة والمتابعة",
        },
        description: {
          en: "We create a customized beauty plan and provide guidance to help you achieve and maintain visible improvements over time.",
          ar: "نضع خطة تجميل مخصصة ونقدم الإرشادات اللازمة لمساعدتك على تحقيق نتائج واضحة والحفاظ عليها.",
        },
      },
    ],

    faq: [
      {
        id: "advanced-beauty-what-is",
        question: {
          en: "What is Advanced Beauty Technology?",
          ar: "ما هي تقنيات التجميل المتقدمة؟",
        },
        answer: {
          en: "Advanced Beauty Technology uses modern diagnostic tools to analyze your skin condition and create personalized treatment recommendations based on your specific needs.",
          ar: "تستخدم تقنيات التجميل المتقدمة أدوات تشخيص حديثة لتحليل حالة بشرتك وإنشاء توصيات علاجية مخصصة وفقًا لاحتياجاتك.",
        },
      },
      {
        id: "advanced-beauty-skin-types",
        question: {
          en: "Is the skin analysis suitable for all skin types?",
          ar: "هل تحليل البشرة مناسب لجميع أنواع البشرة؟",
        },
        answer: {
          en: "Yes, advanced skin analysis is suitable for all skin types and helps identify the right approach for different skin concerns.",
          ar: "نعم، تحليل البشرة المتقدم مناسب لجميع أنواع البشرة، ويساعد في تحديد أفضل نهج لمعالجة مختلف المشكلات الجلدية.",
        },
      },
      {
        id: "advanced-beauty-duration",
        question: {
          en: "How long does the consultation take?",
          ar: "كم تستغرق جلسة الاستشارة؟",
        },
        answer: {
          en: "The consultation usually takes around 45 minutes, depending on your skin concerns and the level of analysis required.",
          ar: "تستغرق الاستشارة عادةً حوالي 45 دقيقة، حسب مشكلات بشرتك ومستوى التحليل المطلوب.",
        },
      },
      {
        id: "advanced-beauty-comfort",
        question: {
          en: "Does the procedure cause any discomfort?",
          ar: "هل يسبب الإجراء أي انزعاج؟",
        },
        answer: {
          en: "No, the analysis is completely non-invasive, comfortable, and does not cause any pain or downtime.",
          ar: "لا، التحليل غير جراحي تمامًا ومريح ولا يسبب أي ألم أو فترة تعافٍ.",
        },
      },
      {
        id: "advanced-beauty-frequency",
        question: {
          en: "How often should I have a skin analysis?",
          ar: "كم مرة يُنصح بإجراء تحليل للبشرة؟",
        },
        answer: {
          en: "Regular skin assessments are recommended to monitor changes and adjust your skincare treatments according to your skin's evolving needs.",
          ar: "يُنصح بإجراء تقييم دوري للبشرة لمتابعة التغيرات وتعديل خطة العناية وفقًا لاحتياجات بشرتك المتغيرة.",
        },
      },
      {
        id: "advanced-beauty-detection",
        question: {
          en: "Can this technology detect skin problems?",
          ar: "هل يمكن لهذه التقنية اكتشاف مشكلات البشرة؟",
        },
        answer: {
          en: "It helps identify visible and underlying skin concerns such as dehydration, uneven tone, pigmentation, and texture changes, allowing for better treatment planning.",
          ar: "تساعد التقنية في اكتشاف المشكلات الظاهرة والكامنة مثل الجفاف، وعدم توحد لون البشرة، والتصبغات، وتغيرات الملمس، مما يساهم في وضع خطة علاج أكثر دقة.",
        },
      },
      {
        id: "advanced-beauty-recommendation",
        question: {
          en: "Will I receive a personalized skincare recommendation?",
          ar: "هل سأحصل على توصيات مخصصة للعناية بالبشرة؟",
        },
        answer: {
          en: "Yes, our specialists provide personalized recommendations based on your skin analysis results and beauty goals.",
          ar: "نعم، يقدم خبراؤنا توصيات مخصصة للعناية بالبشرة بناءً على نتائج تحليل بشرتك وأهدافك الجمالية.",
        },
      },
    ],
  },

  {
    slug: "skin-care",
    categorySlug: "advanced-skin-care",

    title: {
      en: "Skin Care",
      ar: "العناية بالبشرة",
    },

    description: {
      en: "Restore your skin's natural balance with customized skincare solutions designed to nourish, protect, and rejuvenate your complexion. Our professional skin care treatments combine advanced techniques with high-quality products to address individual concerns and reveal healthier, smoother, and more radiant skin.",
      ar: "استعيدي التوازن الطبيعي لبشرتك مع حلول عناية مخصصة مصممة لتغذية البشرة وحمايتها وتجديدها. تجمع علاجاتنا الاحترافية بين التقنيات المتقدمة والمنتجات عالية الجودة لمعالجة احتياجات بشرتك ومنحها مظهراً أكثر صحة ونعومة وإشراقاً.",
    },

    image: "/images/treatments/skin-care.jpg",

    durationMinutes: "60",

    skinType: {
      en: "All Skin Types",
      ar: "جميع أنواع البشرة",
    },

    detailDescription: {
      en: "Restore your skin's natural balance with customized skincare solutions designed to nourish, protect, and rejuvenate your complexion. Our professional skin care treatments combine advanced techniques with high-quality products to address individual concerns and reveal healthier, smoother, and more radiant skin.",
      ar: "استعيدي التوازن الطبيعي لبشرتك مع حلول عناية مخصصة مصممة لتغذية البشرة وحمايتها وتجديدها. تجمع علاجاتنا الاحترافية بين التقنيات المتقدمة والمنتجات عالية الجودة لمنحك بشرة أكثر صحة ونعومة وإشراقاً.",
    },

    sessions: "As Required",

    procedureType: {
      en: "Non-Invasive",
      ar: "غير جراحي",
    },

    overview: {
      en: "Professional Skin Care treatments are designed to improve your skin's health, appearance, and overall condition through customized cleansing, hydration, nourishment, and rejuvenation techniques.",
      ar: "تم تصميم علاجات العناية بالبشرة الاحترافية لتحسين صحة البشرة ومظهرها وحالتها العامة من خلال تقنيات مخصصة للتنظيف والترطيب والتغذية وتجديد البشرة.",
    },

    overviewImage: "/images/treatments/skin-care-overview.png",

    benefits: [
      {
        icon: "/images/icons/deep-cleaning.svg",
        title: {
          en: "Deep Cleansing",
          ar: "تنظيف عميق",
        },
        description: {
          en: "Removes impurities, excess oil, and buildup to refresh and purify the skin.",
          ar: "يزيل الشوائب والزيوت الزائدة والتراكمات لتنقية البشرة وإنعاشها.",
        },
      },
      {
        icon: "/images/icons/intense-hydration.svg",
        title: {
          en: "Improved Hydration",
          ar: "ترطيب أفضل",
        },
        description: {
          en: "Restores moisture balance and helps maintain soft, smooth, and healthy-looking skin.",
          ar: "يعيد توازن الترطيب ويساعد في الحفاظ على بشرة ناعمة وصحية.",
        },
      },
      {
        icon: "/images/icons/bright-complexion.svg",
        title: {
          en: "Brighter Complexion",
          ar: "بشرة أكثر إشراقًا",
        },
        description: {
          en: "Helps reduce dullness and enhances your skin's natural radiance.",
          ar: "يساعد على تقليل البهتان ويعزز الإشراقة الطبيعية للبشرة.",
        },
      },
      {
        icon: "/images/icons/improved-textures.svg",
        title: {
          en: "Better Skin Texture",
          ar: "تحسين ملمس البشرة",
        },
        description: {
          en: "Smooths uneven texture and leaves the skin feeling refined and refreshed.",
          ar: "يمنح البشرة ملمسًا أكثر نعومة ويتركها منتعشة ومتجانسة.",
        },
      },
      {
        icon: "/images/icons/skin-nourishment.svg",
        title: {
          en: "Skin Nourishment",
          ar: "تغذية البشرة",
        },
        description: {
          en: "Provides essential nutrients to support healthier and more balanced skin.",
          ar: "يوفر العناصر الغذائية الأساسية لدعم بشرة أكثر صحة وتوازنًا.",
        },
      },
      {
        icon: "/images/icons/healthy-skin.svg",
        title: {
          en: "Long-Term Skin Health",
          ar: "صحة البشرة على المدى الطويل",
        },
        description: {
          en: "Regular treatments help maintain a youthful, glowing, and well-cared-for complexion.",
          ar: "تساعد العلاجات المنتظمة في الحفاظ على بشرة شابة ومشرقة ومعتنى بها جيدًا.",
        },
      },
    ],

    processHeading: {
      en: "Your Journey to",
      ar: "رحلتك نحو",
    },

    processHeadingHighlight: {
      en: "Beautiful, Healthy Skin",
      ar: "بشرة جميلة وصحية",
    },

    processSubheading: {
      en: "Every skin care treatment is personalized to address your unique skin concerns while providing a relaxing and effective experience.",
      ar: "يتم تصميم كل علاج للعناية بالبشرة خصيصًا لمعالجة احتياجات بشرتك مع توفير تجربة مريحة وفعالة.",
    },

    process: [
      {
        image: "/images/treatments/skin-care-process-1.jpg",
        title: {
          en: "Consultation",
          ar: "الاستشارة",
        },
        description: {
          en: "We begin with a detailed consultation to understand your skin type, concerns, lifestyle, and desired results.",
          ar: "نبدأ باستشارة تفصيلية لفهم نوع بشرتك واحتياجاتها ونمط حياتك والنتائج التي ترغبين في تحقيقها.",
        },
      },
      {
        image: "/images/treatments/skin-care-process-2.jpg",
        title: {
          en: "Cleansing & Preparation",
          ar: "التنظيف والتحضير",
        },
        description: {
          en: "The skin is gently cleansed and prepared to remove impurities, excess oil, and surface buildup.",
          ar: "يتم تنظيف البشرة بلطف وتحضيرها لإزالة الشوائب والزيوت الزائدة والتراكمات السطحية.",
        },
      },
      {
        image: "/images/treatments/skin-care-process-3.jpg",
        title: {
          en: "Personalized Treatment",
          ar: "العلاج المخصص",
        },
        description: {
          en: "Based on your skin needs, specialized products and techniques are applied to hydrate, nourish, and rejuvenate your complexion.",
          ar: "يتم استخدام منتجات وتقنيات متخصصة لترطيب البشرة وتغذيتها وتجديدها وفقًا لاحتياجاتها.",
        },
      },
      {
        image: "/images/treatments/skin-care-process-4.jpg",
        title: {
          en: "Protection & After Care",
          ar: "الحماية والعناية اللاحقة",
        },
        description: {
          en: "The treatment concludes with protective skincare products and expert guidance to help maintain your results at home.",
          ar: "تُختتم الجلسة باستخدام منتجات حماية للبشرة مع تقديم إرشادات احترافية للحفاظ على النتائج في المنزل.",
        },
      },
    ],

    faq: [
      {
        id: "skin-care-what-is",
        question: {
          en: "What is a professional skin care treatment?",
          ar: "ما هو علاج العناية بالبشرة الاحترافي؟",
        },
        answer: {
          en: "A professional skin care treatment is a customized procedure designed to improve skin health through cleansing, hydration, nourishment, and targeted skincare techniques.",
          ar: "علاج العناية بالبشرة الاحترافي هو إجراء مخصص يهدف إلى تحسين صحة البشرة من خلال التنظيف والترطيب والتغذية وتقنيات العناية المناسبة.",
        },
      },
      {
        id: "skin-care-suitable",
        question: {
          en: "Is skin care treatment suitable for all skin types?",
          ar: "هل علاج العناية بالبشرة مناسب لجميع أنواع البشرة؟",
        },
        answer: {
          en: "Yes, treatments can be customized for different skin types, including dry, oily, sensitive, and combination skin.",
          ar: "نعم، يمكن تخصيص العلاج ليناسب جميع أنواع البشرة، بما في ذلك الجافة والدهنية والحساسة والمختلطة.",
        },
      },
      {
        id: "skin-care-frequency",
        question: {
          en: "How often should I get a professional skin care treatment?",
          ar: "كم مرة يُنصح بإجراء علاج احترافي للعناية بالبشرة؟",
        },
        answer: {
          en: "The recommended frequency depends on your skin condition and goals. Our specialists will suggest a suitable treatment schedule after consultation.",
          ar: "يعتمد عدد الجلسات على حالة بشرتك وأهدافك، وسيقترح خبراؤنا جدولاً مناسبًا للعلاج بعد الاستشارة.",
        },
      },
      {
        id: "skin-care-downtime",
        question: {
          en: "Will there be any downtime after the treatment?",
          ar: "هل توجد فترة تعافٍ بعد العلاج؟",
        },
        answer: {
          en: "No, most skin care treatments are non-invasive and allow you to return to your normal activities immediately.",
          ar: "لا، معظم علاجات العناية بالبشرة غير جراحية وتسمح لك بالعودة إلى أنشطتك اليومية مباشرةً.",
        },
      },
      {
        id: "skin-care-dull-skin",
        question: {
          en: "Can skin care treatments help with dull skin?",
          ar: "هل تساعد علاجات العناية بالبشرة في علاج البشرة الباهتة؟",
        },
        answer: {
          en: "Yes, professional treatments help remove impurities, improve hydration, and enhance your skin's natural brightness.",
          ar: "نعم، تساعد العلاجات الاحترافية على إزالة الشوائب وتحسين الترطيب وتعزيز الإشراقة الطبيعية للبشرة.",
        },
      },
      {
        id: "skin-care-customized",
        question: {
          en: "How is the treatment customized for my skin?",
          ar: "كيف يتم تخصيص العلاج ليناسب بشرتي؟",
        },
        answer: {
          en: "Our specialists assess your skin type and concerns before selecting suitable techniques and products for your personalized treatment.",
          ar: "يقوم خبراؤنا بتقييم نوع بشرتك ومشكلاتها قبل اختيار التقنيات والمنتجات المناسبة لعلاجك المخصص.",
        },
      },
      {
        id: "skin-care-combination",
        question: {
          en: "Can I combine skin care treatments with other beauty treatments?",
          ar: "هل يمكن دمج علاجات العناية بالبشرة مع علاجات تجميلية أخرى؟",
        },
        answer: {
          en: "Yes, skin care treatments can often be combined with other treatments depending on your skin goals and specialist recommendations.",
          ar: "نعم، يمكن في كثير من الحالات دمج علاجات العناية بالبشرة مع علاجات تجميلية أخرى وفقًا لأهدافك وتوصيات الأخصائي.",
        },
      },
    ],
  },
  {
    slug: "signature-facial",
    categorySlug: "advanced-skin-care",

    title: {
      en: "Signature Facial",
      ar: "سيغنتشر فيشل",
    },

    description: {
      en: "Experience the ultimate personalized facial treatment designed to restore your skin's natural glow, improve texture, and provide deep relaxation. Our Signature Facial combines advanced skincare techniques with premium products to deeply cleanse, nourish, and rejuvenate your complexion for a refreshed, radiant appearance.",
      ar: "استمتعي بتجربة علاج الوجه الفاخر المصمم خصيصًا لاستعادة إشراقة بشرتك الطبيعية وتحسين ملمسها ومنحك الاسترخاء العميق. يجمع سيغنتشر فيشل بين تقنيات العناية المتقدمة والمنتجات الفاخرة لتنظيف البشرة وتغذيتها وتجديدها للحصول على مظهر صحي ومشرق.",
    },

    image: "/images/treatments/signature-facial.jpg",

    durationMinutes: "60",

    skinType: {
      en: "All Skin Types",
      ar: "جميع أنواع البشرة",
    },

    detailDescription: {
      en: "Experience the ultimate personalized facial treatment designed to restore your skin's natural glow, improve texture, and provide deep relaxation. Our Signature Facial combines advanced skincare techniques with premium products to deeply cleanse, nourish, and rejuvenate your complexion for a refreshed, radiant appearance.",
      ar: "استمتعي بتجربة علاج الوجه الفاخر المصمم خصيصًا لاستعادة إشراقة بشرتك الطبيعية وتحسين ملمسها ومنحك الاسترخاء العميق. يجمع سيغنتشر فيشل بين تقنيات العناية المتقدمة والمنتجات الفاخرة لتنظيف البشرة وتغذيتها وتجديدها للحصول على مظهر صحي ومشرق.",
    },

    sessions: "As Required",

    procedureType: {
      en: "Non-Invasive",
      ar: "غير جراحي",
    },

    overview: {
      en: "Signature Facial is a customized luxury facial treatment designed to address your individual skin concerns while providing a deeply relaxing experience. It combines professional cleansing, exfoliation, hydration, and nourishing techniques to restore balance and enhance your skin's natural beauty.",
      ar: "سيغنتشر فيشل هو علاج فاخر ومخصص للوجه يهدف إلى معالجة احتياجات بشرتك الفردية مع توفير تجربة استرخاء عميقة. يجمع بين التنظيف الاحترافي، والتقشير، والترطيب، والتغذية لاستعادة توازن البشرة وتعزيز جمالها الطبيعي.",
    },

    overviewImage: "/images/treatments/signature-facial-overview.png",

    benefits: [
      {
        icon: "/images/icons/deep-cleaning.svg",
        title: {
          en: "Deep Cleansing",
          ar: "تنظيف عميق",
        },
        description: {
          en: "Removes impurities, excess oil, and environmental buildup to refresh and purify the skin.",
          ar: "يزيل الشوائب والزيوت الزائدة والتراكمات البيئية لينقي البشرة وينعشها.",
        },
      },
      {
        icon: "/images/icons/intense-hydration.svg",
        title: {
          en: "Improved Hydration",
          ar: "ترطيب عميق",
        },
        description: {
          en: "Provides deep moisture to restore softness, smoothness, and skin comfort.",
          ar: "يوفر ترطيبًا عميقًا لاستعادة نعومة البشرة وراحتها.",
        },
      },
      {
        icon: "/images/icons/bright-complexion.svg",
        title: {
          en: "Radiant Glow",
          ar: "إشراقة طبيعية",
        },
        description: {
          en: "Enhances your complexion by reducing dullness and revealing brighter, healthier-looking skin.",
          ar: "يعزز إشراقة البشرة ويقلل من البهتان ليمنحك مظهرًا أكثر صحة ونضارة.",
        },
      },
      {
        icon: "/images/icons/improved-textures.svg",
        title: {
          en: "Relaxation & Stress Relief",
          ar: "الاسترخاء وتخفيف التوتر",
        },
        description: {
          en: "Combines therapeutic techniques to promote relaxation while caring for your skin.",
          ar: "يجمع بين تقنيات علاجية تساعد على الاسترخاء مع العناية الفعالة بالبشرة.",
        },
      },
      {
        icon: "/images/icons/skin-nourishment.svg",
        title: {
          en: "Improved Skin Texture",
          ar: "تحسين ملمس البشرة",
        },
        description: {
          en: "Helps refine uneven texture and leaves your skin feeling smoother and more balanced.",
          ar: "يساعد على تحسين ملمس البشرة ويجعلها أكثر نعومة وتوازنًا.",
        },
      },
      {
        icon: "/images/icons/healthy-skin.svg",
        title: {
          en: "Youthful Skin Appearance",
          ar: "مظهر بشرة أكثر شبابًا",
        },
        description: {
          en: "Supports healthier-looking skin with improved firmness, nourishment, and radiance.",
          ar: "يعزز مظهر البشرة الصحي من خلال تحسين التماسك والتغذية والإشراق.",
        },
      },
    ],

    processHeading: {
      en: "Your Journey to",
      ar: "رحلتك نحو",
    },

    processHeadingHighlight: {
      en: "Radiant Skin",
      ar: "بشرة مشرقة",
    },

    processSubheading: {
      en: "Every Signature Facial is carefully customized to deliver a luxurious skincare experience while targeting your specific skin needs.",
      ar: "يتم تخصيص كل جلسة سيغنتشر فيشل بعناية لتوفير تجربة عناية فاخرة بالبشرة مع استهداف احتياجات بشرتك الخاصة.",
    },

    process: [
      {
        image: "/images/treatments/signature-facial-process-1.jpg",
        title: {
          en: "Consultation",
          ar: "الاستشارة",
        },
        description: {
          en: "We begin with a detailed consultation to understand your skin concerns, preferences, and beauty goals before selecting the ideal facial approach.",
          ar: "نبدأ باستشارة تفصيلية لفهم احتياجات بشرتك وتفضيلاتك وأهدافك الجمالية قبل اختيار العلاج الأنسب.",
        },
      },
      {
        image: "/images/treatments/signature-facial-process-2.jpg",
        title: {
          en: "Cleansing & Exfoliation",
          ar: "التنظيف والتقشير",
        },
        description: {
          en: "The skin is gently cleansed and exfoliated to remove impurities, dead skin cells, and prepare the complexion for deeper nourishment.",
          ar: "يتم تنظيف البشرة وتقشيرها بلطف لإزالة الشوائب والخلايا الميتة وتحضيرها لتغذية أعمق.",
        },
      },
      {
        image: "/images/treatments/signature-facial-process-3.jpg",
        title: {
          en: "Facial Treatment",
          ar: "العلاج المخصص",
        },
        description: {
          en: "Specialized products, massage techniques, and targeted skincare methods are applied based on your skin requirements.",
          ar: "يتم استخدام منتجات وتقنيات تدليك وعناية متخصصة تناسب احتياجات بشرتك الفردية.",
        },
      },
      {
        image: "/images/treatments/signature-facial-process-4.jpg",
        title: {
          en: "Nourishment & Protection",
          ar: "التغذية والحماية",
        },
        description: {
          en: "The treatment concludes with skin-enhancing serums, moisturizers, and protective care to maintain your fresh, glowing results.",
          ar: "تُختتم الجلسة باستخدام السيرومات والمرطبات ومنتجات الحماية للحفاظ على نتائج مشرقة وصحية.",
        },
      },
    ],

    faq: [
      {
        id: "signature-facial-difference",
        question: {
          en: "What makes a Signature Facial different from a regular facial?",
          ar: "ما الذي يميز سيغنتشر فيشل عن جلسات تنظيف البشرة العادية؟",
        },
        answer: {
          en: "A Signature Facial is a customized treatment designed according to your skin type and concerns, combining advanced techniques with personalized skincare solutions.",
          ar: "سيغنتشر فيشل هو علاج مخصص يتم تصميمه وفقًا لنوع بشرتك واحتياجاتها، ويجمع بين التقنيات المتقدمة وحلول العناية الشخصية.",
        },
      },
      {
        id: "signature-facial-skin-types",
        question: {
          en: "Is Signature Facial suitable for all skin types?",
          ar: "هل سيغنتشر فيشل مناسب لجميع أنواع البشرة؟",
        },
        answer: {
          en: "Yes, the treatment can be adapted for all skin types, including sensitive, dry, oily, and combination skin.",
          ar: "نعم، يمكن تخصيص العلاج ليناسب جميع أنواع البشرة، بما في ذلك الحساسة والجافة والدهنية والمختلطة.",
        },
      },
      {
        id: "signature-facial-duration",
        question: {
          en: "How long does a Signature Facial treatment take?",
          ar: "كم تستغرق جلسة سيغنتشر فيشل؟",
        },
        answer: {
          en: "A typical Signature Facial session takes approximately 60 minutes, depending on your personalized treatment plan.",
          ar: "تستغرق جلسة سيغنتشر فيشل عادةً حوالي 60 دقيقة، حسب خطة العلاج المخصصة لك.",
        },
      },
      {
        id: "signature-facial-downtime",
        question: {
          en: "Will I experience any downtime after the treatment?",
          ar: "هل توجد فترة تعافٍ بعد العلاج؟",
        },
        answer: {
          en: "No, Signature Facial is a non-invasive treatment with no downtime, allowing you to continue your daily activities immediately.",
          ar: "لا، سيغنتشر فيشل علاج غير جراحي ولا يحتاج إلى فترة تعافٍ، ويمكنك العودة إلى أنشطتك اليومية مباشرة.",
        },
      },
      {
        id: "signature-facial-frequency",
        question: {
          en: "How often should I get a Signature Facial?",
          ar: "كم مرة يُنصح بإجراء سيغنتشر فيشل؟",
        },
        answer: {
          en: "The recommended frequency depends on your skin condition and goals. Regular treatments can help maintain healthy, glowing skin.",
          ar: "يعتمد عدد الجلسات على حالة بشرتك وأهدافك، وتساعد الجلسات المنتظمة في الحفاظ على بشرة صحية ومشرقة.",
        },
      },
      {
        id: "signature-facial-dull-skin",
        question: {
          en: "Can Signature Facial help with dull and tired-looking skin?",
          ar: "هل يساعد سيغنتشر فيشل في علاج البشرة الباهتة والمتعبة؟",
        },
        answer: {
          en: "Yes, it helps improve hydration, remove impurities, and restore a brighter, more refreshed complexion.",
          ar: "نعم، يساعد على تحسين الترطيب وإزالة الشوائب واستعادة مظهر أكثر إشراقًا وانتعاشًا للبشرة.",
        },
      },
      {
        id: "signature-facial-combine",
        question: {
          en: "Can I combine Signature Facial with other treatments?",
          ar: "هل يمكن دمج سيغنتشر فيشل مع علاجات أخرى؟",
        },
        answer: {
          en: "Yes, depending on your skin needs, it can be combined with other skincare treatments recommended by our specialists.",
          ar: "نعم، يمكن دمجه مع علاجات أخرى للعناية بالبشرة وفقًا لاحتياجاتك وتوصيات أخصائيينا.",
        },
      },
    ],
  },

  {
    slug: "hydra-facial",
    categorySlug: "advanced-skin-care",

    title: {
      en: "Hydra Facial",
      ar: "هيدرا فيشل",
    },

    description: {
      en: "Deeply cleanse, hydrate, and rejuvenate your skin with Hydra Facial — an advanced non-invasive treatment that delivers intense hydration and an instant healthy, radiant glow.",
      ar: "نظفي بشرتك بعمق ورطبيها وجدديها مع هيدرا فيشل، وهو علاج متطور غير جراحي يمنح البشرة ترطيبًا مكثفًا وإشراقة صحية وفورية.",
    },

    image: "/images/treatments/hydra-facial.jpg",

    durationMinutes: "60",

    skinType: {
      en: "All Skin Types",
      ar: "جميع أنواع البشرة",
    },

    detailDescription: {
      en: "Hydra Facial is a professional multi-step facial treatment designed to deeply cleanse, exfoliate, hydrate, and revitalize your skin. Using advanced vortex technology and nourishing serums, the treatment removes impurities while replenishing essential moisture, leaving your complexion smoother, healthier, and naturally radiant with no downtime.",
      ar: "هيدرا فيشل هو علاج احترافي متعدد الخطوات مصمم لتنظيف البشرة بعمق وتقشيرها وترطيبها وتجديدها. يستخدم تقنية متطورة مع سيرومات مغذية لإزالة الشوائب وتعويض البشرة بالرطوبة اللازمة، مما يمنحها مظهرًا أكثر نعومة وصحة وإشراقًا دون الحاجة إلى فترة تعافٍ.",
    },

    sessions: "4 - 6",

    procedureType: {
      en: "Non-Invasive",
      ar: "غير جراحي",
    },

    overview: {
      en: "Hydra Facial is a non-invasive, multi-step skin treatment that deeply cleanses, hydrates, and revitalizes the skin. Combining advanced technology with powerful nourishing serums, it removes impurities, unclogs pores, and delivers intense hydration for instantly refreshed, smooth, and glowing skin.",
      ar: "هيدرا فيشل هو علاج غير جراحي متعدد الخطوات يعمل على تنظيف البشرة بعمق وترطيبها وتجديدها. يجمع بين التقنيات المتقدمة والسيرومات المغذية لإزالة الشوائب وتنظيف المسام ومنح البشرة ترطيبًا مكثفًا، لتبدو أكثر نعومة وانتعاشًا وإشراقًا على الفور.",
    },

    overviewImage: "/images/treatments/hydra-facial-overview.png",

    benefits: [
      {
        icon: "/images/icons/deep-cleaning.svg",
        title: {
          en: "Deep Cleansing",
          ar: "تنظيف عميق",
        },
        description: {
          en: "Effectively removes impurities, excess oil, dead skin cells, and unclogs pores for cleaner, healthier skin.",
          ar: "يزيل الشوائب والزيوت الزائدة وخلايا الجلد الميتة وينظف المسام بعمق للحصول على بشرة أكثر صحة ونقاء.",
        },
      },
      {
        icon: "/images/icons/intense-hydration.svg",
        title: {
          en: "Intense Hydration",
          ar: "ترطيب مكثف",
        },
        description: {
          en: "Infuses the skin with nourishing serums that provide long-lasting hydration and restore moisture balance.",
          ar: "يغذي البشرة بسيرومات مرطبة توفر ترطيبًا طويل الأمد وتعيد توازن الرطوبة الطبيعي.",
        },
      },
      {
        icon: "/images/icons/bright-complexion.svg",
        title: {
          en: "Instant Glow",
          ar: "إشراقة فورية",
        },
        description: {
          en: "Reveals a brighter, smoother, and more radiant complexion immediately after treatment.",
          ar: "يكشف عن بشرة أكثر إشراقًا ونعومة ونضارة مباشرة بعد الجلسة.",
        },
      },
      {
        icon: "/images/icons/improved-textures.svg",
        title: {
          en: "Safe & Gentle",
          ar: "آمن ولطيف",
        },
        description: {
          en: "A gentle, non-invasive treatment suitable for all skin types, including sensitive skin.",
          ar: "علاج لطيف وغير جراحي يناسب جميع أنواع البشرة، بما في ذلك البشرة الحساسة.",
        },
      },
      {
        icon: "/images/icons/skin-nourishment.svg",
        title: {
          en: "Improved Skin Texture",
          ar: "تحسين ملمس البشرة",
        },
        description: {
          en: "Enhances skin texture and tone, leaving your skin softer, smoother, and healthier-looking.",
          ar: "يحسن ملمس البشرة ولونها ليمنحها نعومة ومظهرًا صحيًا وأكثر تجانسًا.",
        },
      },
      {
        icon: "/images/icons/healthy-skin.svg",
        title: {
          en: "Healthy, Youthful Skin",
          ar: "بشرة صحية وشابة",
        },
        description: {
          en: "With regular sessions, enjoy healthier, plumper, and more youthful-looking skin with lasting radiance.",
          ar: "مع الجلسات المنتظمة، استمتعي ببشرة أكثر صحة وامتلاءً وشبابًا مع إشراقة تدوم لفترة أطول.",
        },
      },
    ],
    processHeading: {
      en: "Your Journey to",
      ar: "رحلتك نحو",
    },

    processHeadingHighlight: {
      en: "Radiant Skin",
      ar: "بشرة مشرقة",
    },

    processSubheading: {
      en: "Every Hydra Facial is performed with precision and care to deliver maximum results while ensuring a comfortable, relaxing, and refreshing experience.",
      ar: "يتم إجراء كل جلسة هيدرا فيشل بعناية ودقة لتحقيق أفضل النتائج مع توفير تجربة مريحة ومسترخية ومنعشة.",
    },

    process: [
      {
        image: "/images/treatments/hydra-facial-process-1.jpg",
        title: {
          en: "Consultation",
          ar: "الاستشارة",
        },
        description: {
          en: "We begin with a detailed consultation to understand your skin concerns, beauty goals, and medical history before creating a personalized treatment plan.",
          ar: "نبدأ باستشارة تفصيلية لفهم مشاكل بشرتك وأهدافك الجمالية وتاريخك الطبي قبل إعداد خطة علاج مخصصة.",
        },
      },
      {
        image: "/images/treatments/hydra-facial-process-2.jpg",
        title: {
          en: "Preparation & Analysis",
          ar: "التحضير وتحليل البشرة",
        },
        description: {
          en: "A professional skin analysis is performed to assess your skin condition, followed by gentle cleansing and exfoliation to prepare your skin for the Hydra Facial treatment.",
          ar: "يتم إجراء تحليل احترافي للبشرة لتقييم حالتها، ثم تنظيفها وتقشيرها بلطف لتحضيرها لجلسة هيدرا فيشل.",
        },
      },
      {
        image: "/images/treatments/hydra-facial-process-3.jpg",
        title: {
          en: "Hydra Facial Treatment",
          ar: "علاج هيدرا فيشل",
        },
        description: {
          en: "The advanced Hydra Facial system deeply cleanses, exfoliates, extracts impurities, and infuses the skin with nourishing serums for immediate hydration and radiance.",
          ar: "يقوم جهاز هيدرا فيشل المتطور بتنظيف البشرة بعمق وتقشيرها واستخراج الشوائب وتغذيتها بسيرومات مرطبة تمنحها إشراقة وترطيبًا فوريًا.",
        },
      },
      {
        image: "/images/treatments/hydra-facial-process-4.jpg",
        title: {
          en: "After Care & Glow",
          ar: "العناية اللاحقة والإشراقة",
        },
        description: {
          en: "The treatment concludes with protective serums, moisturizers, and SPF to nourish your skin, protect it from environmental damage, and maintain your healthy glow.",
          ar: "تُختتم الجلسة باستخدام سيرومات مرطبة وكريمات حماية وواقي شمس لتغذية البشرة وحمايتها والحفاظ على إشراقتها الصحية.",
        },
      },
    ],

    faq: [
      {
        id: "hydra-facial-what-is",
        question: {
          en: "What is Hydra Facial?",
          ar: "ما هو هيدرا فيشل؟",
        },
        answer: {
          en: "Hydra Facial is a non-invasive, multi-step treatment that cleanses, exfoliates, extracts impurities, and deeply hydrates the skin using advanced technology and nourishing serums. It leaves your skin refreshed, smooth, and glowing immediately after the session.",
          ar: "هيدرا فيشل هو علاج غير جراحي متعدد الخطوات يعمل على تنظيف البشرة وتقشيرها واستخراج الشوائب وترطيبها بعمق باستخدام تقنية متقدمة وسيرومات مغذية، مما يمنح البشرة نعومة وإشراقة وانتعاشًا فوريًا.",
        },
      },
      {
        id: "hydra-facial-skin-types",
        question: {
          en: "Is Hydra Facial suitable for all skin types?",
          ar: "هل هيدرا فيشل مناسب لجميع أنواع البشرة؟",
        },
        answer: {
          en: "Yes. Hydra Facial is suitable for all skin types, including sensitive skin. The treatment is customized according to your individual skin concerns and goals.",
          ar: "نعم، يناسب هيدرا فيشل جميع أنواع البشرة، بما في ذلك البشرة الحساسة، حيث يتم تخصيص العلاج وفقًا لاحتياجات بشرتك وأهدافك.",
        },
      },
      {
        id: "hydra-facial-duration",
        question: {
          en: "How long does a Hydra Facial session take?",
          ar: "كم تستغرق جلسة هيدرا فيشل؟",
        },
        answer: {
          en: "A typical Hydra Facial session takes approximately 60 minutes, making it an ideal treatment for achieving refreshed and radiant skin without a lengthy appointment.",
          ar: "تستغرق جلسة هيدرا فيشل عادةً حوالي 60 دقيقة، مما يجعلها علاجًا مثاليًا للحصول على بشرة مشرقة ومنتعشة في وقت قصير.",
        },
      },
      {
        id: "hydra-facial-downtime",
        question: {
          en: "Is there any downtime after Hydra Facial?",
          ar: "هل توجد فترة تعافٍ بعد هيدرا فيشل؟",
        },
        answer: {
          en: "No. Hydra Facial requires little to no downtime, allowing most clients to resume their daily activities immediately after treatment.",
          ar: "لا، لا يحتاج هيدرا فيشل إلى فترة تعافٍ، ويمكن لمعظم العملاء العودة إلى أنشطتهم اليومية مباشرة بعد الجلسة.",
        },
      },
      {
        id: "hydra-facial-sessions",
        question: {
          en: "How many Hydra Facial sessions are recommended?",
          ar: "كم عدد جلسات هيدرا فيشل الموصى بها؟",
        },
        answer: {
          en: "The recommended number of sessions depends on your skin condition and desired results. A series of 4–6 sessions is commonly recommended to achieve and maintain optimal skin health.",
          ar: "يعتمد عدد الجلسات على حالة بشرتك والنتائج التي ترغبين بها، وعادةً ما يُوصى بإجراء 4 إلى 6 جلسات للحصول على أفضل النتائج والحفاظ عليها.",
        },
      },
      {
        id: "hydra-facial-dull-skin",
        question: {
          en: "Can Hydra Facial help with dull and dehydrated skin?",
          ar: "هل يساعد هيدرا فيشل في علاج البشرة الباهتة والجافة؟",
        },
        answer: {
          en: "Yes. Hydra Facial restores hydration, removes impurities, improves skin texture, and revives dull, tired, and dehydrated skin for a healthier-looking complexion.",
          ar: "نعم، يساعد هيدرا فيشل على استعادة ترطيب البشرة وإزالة الشوائب وتحسين ملمسها وإنعاش البشرة الباهتة والجافة لتبدو أكثر صحة وإشراقًا.",
        },
      },
      {
        id: "hydra-facial-aftercare",
        question: {
          en: "How should I care for my skin after a Hydra Facial?",
          ar: "كيف أعتني ببشرتي بعد جلسة هيدرا فيشل؟",
        },
        answer: {
          en: "After your treatment, use gentle skincare products, apply sunscreen daily, stay well hydrated, and follow the aftercare recommendations provided by our specialists to maintain your healthy glow.",
          ar: "بعد الجلسة، يُنصح باستخدام منتجات عناية لطيفة، ووضع واقي الشمس يوميًا، وشرب كمية كافية من الماء، واتباع تعليمات العناية التي يقدمها أخصائيو البشرة للحفاظ على إشراقة بشرتك.",
        },
      },
    ],
  },

  {
    slug: "carbon-peel",
    categorySlug: "advanced-skin-care",

    title: {
      en: "Carbon Peel",
      ar: "الكربون بيل",
    },

    description: {
      en: "Reveal refreshed and radiant skin with Carbon Peel — an advanced laser-based skin rejuvenation treatment designed to deeply cleanse, refine pores, improve texture, and enhance overall skin clarity.",
      ar: "استمتع ببشرة أكثر نضارة وإشراقًا مع الكربون بيل، وهو علاج متقدم بالليزر مصمم لتنظيف البشرة بعمق، وتنقية المسام، وتحسين الملمس، وتعزيز صفاء البشرة.",
    },

    image: "/images/treatments/carbon-peel-1.jpg",

    durationMinutes: "45-60",

    skinType: {
      en: "All Skin Types",
      ar: "جميع أنواع البشرة",
    },

    detailDescription: {
      en: "Reveal refreshed and radiant skin with Carbon Peel — an advanced laser-based skin rejuvenation treatment designed to deeply cleanse, refine pores, improve texture, and enhance overall skin clarity. This gentle yet effective treatment helps reduce excess oil, dullness, and uneven skin tone while restoring a smoother, healthier appearance.",
      ar: "استمتع ببشرة أكثر نضارة وإشراقًا مع الكربون بيل، وهو علاج متقدم بالليزر مصمم لتنظيف البشرة بعمق، وتنقية المسام، وتحسين الملمس، وتعزيز صفاء البشرة. يساعد هذا العلاج اللطيف والفعال على تقليل الزيوت الزائدة والبهتان وتفاوت لون البشرة، ليمنحك مظهرًا أكثر نعومة وصحة.",
    },

    sessions: "4 - 6",

    procedureType: {
      en: "Non-Invasive",
      ar: "غير جراحي",
    },

    overview: {
      en: "Carbon Peel is a modern skin rejuvenation treatment that uses a carbon-based mask combined with laser technology to deeply cleanse and refresh the skin. The treatment works by removing impurities, excess oil, and dead skin cells while stimulating skin renewal.",
      ar: "الكربون بيل هو علاج حديث لتجديد البشرة يستخدم قناعًا كربونيًا مع تقنية الليزر لتنظيف البشرة بعمق وإنعاشها. يعمل العلاج على إزالة الشوائب والزيوت الزائدة وخلايا الجلد الميتة مع تحفيز تجدد البشرة للحصول على مظهر أكثر صحة وإشراقًا.",
    },

    overviewImage: "/images/treatments/carbon-peel-overview.png",

    benefits: [
      {
        icon: "/images/icons/deep-cleaning.svg",
        title: {
          en: "Deep Pore Cleansing",
          ar: "تنظيف عميق للمسام",
        },
        description: {
          en: "Helps remove dirt, oil, and impurities from deep within the pores for cleaner-looking skin.",
          ar: "يساعد على إزالة الأوساخ والزيوت والشوائب من أعماق المسام للحصول على بشرة أكثر نقاءً.",
        },
      },
      {
        icon: "/images/icons/intense-hydration.svg",
        title: {
          en: "Oil Control",
          ar: "التحكم في الزيوت",
        },
        description: {
          en: "Balances excess oil production and helps improve the appearance of oily and congested skin.",
          ar: "يساعد على تنظيم إفراز الزيوت الزائدة وتحسين مظهر البشرة الدهنية والمحتقنة.",
        },
      },
      {
        icon: "/images/icons/bright-complexion.svg",
        title: {
          en: "Refined Skin Texture",
          ar: "تحسين ملمس البشرة",
        },
        description: {
          en: "Smooths rough skin texture and enhances overall skin softness.",
          ar: "يساعد على تنعيم ملمس البشرة وتحسين نعومتها بشكل ملحوظ.",
        },
      },
      {
        icon: "/images/icons/improved-textures.svg",
        title: {
          en: "Brighter Complexion",
          ar: "بشرة أكثر إشراقًا",
        },
        description: {
          en: "Helps reduce dullness and promotes a more even and radiant skin tone.",
          ar: "يساعد على تقليل بهتان البشرة ويمنحها لونًا أكثر إشراقًا وتجانسًا.",
        },
      },
      {
        icon: "/images/icons/skin-nourishment.svg",
        title: {
          en: "Reduced Appearance of Pores",
          ar: "تقليل مظهر المسام",
        },
        description: {
          en: "Minimizes the look of enlarged pores for a smoother complexion.",
          ar: "يساعد على تقليل مظهر المسام الواسعة للحصول على بشرة أكثر نعومة.",
        },
      },
      {
        icon: "/images/icons/healthy-skin.svg",
        title: {
          en: "Skin Rejuvenation",
          ar: "تجديد البشرة",
        },
        description: {
          en: "Stimulates natural skin renewal for a healthier and refreshed appearance.",
          ar: "يحفز التجدد الطبيعي للبشرة للحصول على مظهر أكثر صحة وانتعاشًا.",
        },
      },
    ],

    processHeading: {
      en: "Your Journey to",
      ar: "رحلتك نحو",
    },

    processHeadingHighlight: {
      en: "Clearer, Radiant Skin",
      ar: "بشرة أكثر صفاءً وإشراقًا",
    },

    processSubheading: {
      en: "Every Carbon Peel treatment is performed with precision and care to deliver effective skin rejuvenation while ensuring a safe and comfortable experience.",
      ar: "يتم إجراء كل جلسة كربون بيل بدقة وعناية لتوفير أفضل نتائج لتجديد البشرة مع ضمان تجربة آمنة ومريحة.",
    },

    process: [
      {
        image: "/images/treatments/hydra-facial-process-1.jpg",
        title: {
          en: "Consultation",
          ar: "الاستشارة",
        },
        description: {
          en: "We begin with a detailed consultation to understand your skin concerns, sensitivity, and desired results before preparing for treatment.",
          ar: "نبدأ باستشارة تفصيلية لفهم مشكلات بشرتك ومدى حساسيتها والنتائج التي ترغب في تحقيقها قبل بدء العلاج.",
        },
      },
      {
        image: "/images/treatments/carbon-peel-process-2.jpg",
        title: {
          en: "Carbon Application",
          ar: "تطبيق الكربون",
        },
        description: {
          en: "A thin layer of medical-grade carbon lotion is applied to the skin, allowing it to absorb impurities and prepare the skin for laser treatment.",
          ar: "يتم وضع طبقة رقيقة من محلول الكربون الطبي على البشرة لامتصاص الشوائب وتحضيرها للعلاج بالليزر.",
        },
      },
      {
        image: "/images/treatments/carbon-peel-process-3.jpg",
        title: {
          en: "Laser Carbon Treatment",
          ar: "العلاج بليزر الكربون",
        },
        description: {
          en: "The laser gently targets the carbon particles, removing impurities, exfoliating dead skin cells, and stimulating natural skin rejuvenation.",
          ar: "يستهدف الليزر جزيئات الكربون بلطف لإزالة الشوائب وتقشير خلايا الجلد الميتة وتحفيز التجدد الطبيعي للبشرة.",
        },
      },
      {
        image: "/images/treatments/hydra-facial-process-4.jpg",
        title: {
          en: "Soothing & After Care",
          ar: "التهدئة والعناية اللاحقة",
        },
        description: {
          en: "The treatment concludes with calming skincare products and personalized aftercare recommendations to protect your skin and maintain long-lasting results.",
          ar: "تُختتم الجلسة باستخدام منتجات مهدئة للبشرة مع تقديم تعليمات عناية مخصصة للمساعدة في حماية البشرة والحفاظ على النتائج لأطول فترة ممكنة.",
        },
      },
    ],

    faq: [
      {
        id: "carbon-peel-what-is",
        question: {
          en: "What is Carbon Peel treatment?",
          ar: "ما هو علاج الكربون بيل؟",
        },
        answer: {
          en: "Carbon Peel is an advanced skin rejuvenation treatment that uses carbon particles and laser technology to deeply cleanse, exfoliate, and refresh the skin.",
          ar: "الكربون بيل هو علاج متطور لتجديد البشرة يستخدم جزيئات الكربون وتقنية الليزر لتنظيف البشرة بعمق، وتقشيرها، وإنعاشها للحصول على مظهر أكثر صحة وإشراقًا.",
        },
      },
      {
        id: "carbon-peel-skin-types",
        question: {
          en: "Is Carbon Peel suitable for all skin types?",
          ar: "هل الكربون بيل مناسب لجميع أنواع البشرة؟",
        },
        answer: {
          en: "Yes, Carbon Peel can be customized for different skin types and is suitable for many common concerns such as dullness, uneven texture, and excess oil.",
          ar: "نعم، يمكن تخصيص علاج الكربون بيل ليناسب مختلف أنواع البشرة، كما يساعد في معالجة العديد من المشكلات الشائعة مثل بهتان البشرة، وعدم تجانس الملمس، والزيوت الزائدة.",
        },
      },
      {
        id: "carbon-peel-pain",
        question: {
          en: "Does Carbon Peel treatment hurt?",
          ar: "هل علاج الكربون بيل مؤلم؟",
        },
        answer: {
          en: "Carbon Peel is generally comfortable, with most clients experiencing only a mild warming sensation during the procedure.",
          ar: "يُعد الكربون بيل علاجًا مريحًا بشكل عام، حيث يشعر معظم العملاء فقط بإحساس دافئ خفيف أثناء الجلسة.",
        },
      },
      {
        id: "carbon-peel-downtime",
        question: {
          en: "Is there any downtime after Carbon Peel?",
          ar: "هل توجد فترة تعافٍ بعد الكربون بيل؟",
        },
        answer: {
          en: "No, Carbon Peel requires minimal to no downtime, and most clients can return to normal activities shortly after treatment.",
          ar: "لا، لا يتطلب علاج الكربون بيل فترة تعافٍ تُذكر، ويمكن لمعظم العملاء العودة إلى أنشطتهم اليومية بعد فترة قصيرة من الجلسة.",
        },
      },
      {
        id: "carbon-peel-sessions",
        question: {
          en: "How many sessions are recommended for visible results?",
          ar: "كم عدد الجلسات الموصى بها للحصول على نتائج ملحوظة؟",
        },
        answer: {
          en: "The number of sessions depends on your skin condition and goals. A series of 4–6 treatments is often recommended for enhanced results.",
          ar: "يعتمد عدد الجلسات على حالة بشرتك والأهداف المرجوة، إلا أنه يُوصى عادةً بإجراء 4 إلى 6 جلسات للحصول على أفضل النتائج.",
        },
      },
      {
        id: "carbon-peel-acne",
        question: {
          en: "Can Carbon Peel help with acne-prone skin?",
          ar: "هل يساعد الكربون بيل في علاج البشرة المعرضة لحب الشباب؟",
        },
        answer: {
          en: "Yes, Carbon Peel can help improve excess oil, clogged pores, and skin texture, making it beneficial for acne-prone skin when recommended by a specialist.",
          ar: "نعم، يساعد الكربون بيل على تقليل الزيوت الزائدة، وتنظيف المسام المسدودة، وتحسين ملمس البشرة، مما يجعله خيارًا مناسبًا للبشرة المعرضة لحب الشباب عند توصية الأخصائي.",
        },
      },
      {
        id: "carbon-peel-aftercare",
        question: {
          en: "How should I care for my skin after Carbon Peel?",
          ar: "كيف أعتني ببشرتي بعد جلسة الكربون بيل؟",
        },
        answer: {
          en: "After treatment, it is recommended to use gentle skincare products, avoid excessive sun exposure, and apply SPF regularly to protect your skin.",
          ar: "بعد العلاج، يُنصح باستخدام منتجات عناية لطيفة بالبشرة، وتجنب التعرض المفرط لأشعة الشمس، واستخدام واقي الشمس بانتظام لحماية البشرة والحفاظ على النتائج.",
        },
      },
    ],
  },

  {
  slug: "dermabrasion",
  categorySlug: "advanced-skin-care",

  title: {
    en: "Dermabrasion",
    ar: "الديرمابراشن",
  },

  description: {
    en: "Reveal a smoother and more refined complexion with Dermabrasion — an advanced skin resurfacing treatment designed to remove damaged surface layers, improve texture, and promote healthier-looking skin.",
    ar: "استمتع ببشرة أكثر نعومة وصفاءً مع الديرمابراشن، وهو علاج متقدم لإعادة تسطيح البشرة يساعد على إزالة الطبقات السطحية المتضررة، وتحسين الملمس، وتعزيز مظهر بشرة أكثر صحة.",
  },

  image: "/images/treatments/carbon-peel-1.jpg",

  durationMinutes: "45-60",

  skinType: {
    en: "Most Skin Types",
    ar: "معظم أنواع البشرة",
  },

  detailDescription: {
    en: "Reveal a smoother and more refined complexion with Dermabrasion — an advanced skin resurfacing treatment designed to remove damaged surface layers, improve texture, and promote healthier-looking skin. This treatment helps address uneven texture, dullness, and visible skin imperfections while encouraging natural skin renewal.",
    ar: "استمتع ببشرة أكثر نعومة وصفاءً مع الديرمابراشن، وهو علاج متقدم لإعادة تسطيح البشرة يساعد على إزالة الطبقات السطحية المتضررة، وتحسين ملمس البشرة، وتعزيز مظهر أكثر صحة. كما يساعد على علاج الملمس غير المتجانس، والبهتان، والعيوب الظاهرة، مع تحفيز التجدد الطبيعي للبشرة.",
  },

  sessions: "4 - 6",

  procedureType: {
    en: "Minimally Invasive",
    ar: "طفيف التوغل",
  },

  overview: {
  en: "Dermabrasion is a professional skin resurfacing treatment that uses controlled exfoliation techniques to remove the outermost layer of damaged skin cells. By stimulating the skin's natural renewal process, it helps improve texture, smoothness, and overall appearance.",
  ar: "الديرمابراشن هو علاج احترافي لإعادة تسطيح البشرة يستخدم تقنيات تقشير دقيقة لإزالة الطبقة الخارجية من خلايا الجلد التالفة. ومن خلال تحفيز عملية التجدد الطبيعية للبشرة، يساعد على تحسين الملمس والنعومة والمظهر العام للبشرة.",
},

overviewImage: "/images/treatments/carbon-peel-overview.png",

benefits: [
  {
    icon: "/images/icons/deep-cleaning.svg",
    title: {
      en: "Smoother Skin Texture",
      ar: "ملمس بشرة أكثر نعومة",
    },
    description: {
      en: "Removes damaged surface cells to create softer, smoother, and more refined skin.",
      ar: "يزيل خلايا الجلد السطحية التالفة ليمنح البشرة ملمسًا أكثر نعومة وصفاءً.",
    },
  },
  {
    icon: "/images/icons/intense-hydration.svg",
    title: {
      en: "Skin Renewal",
      ar: "تجديد البشرة",
    },
    description: {
      en: "Encourages natural regeneration by stimulating the skin renewal process.",
      ar: "يعزز التجدد الطبيعي للبشرة من خلال تحفيز عملية تجديد الخلايا.",
    },
  },
  {
    icon: "/images/icons/bright-complexion.svg",
    title: {
      en: "Improved Skin Tone",
      ar: "تحسين لون البشرة",
    },
    description: {
      en: "Helps reduce unevenness and promotes a more balanced complexion.",
      ar: "يساعد على تقليل تفاوت لون البشرة ويمنحها مظهرًا أكثر تجانسًا.",
    },
  },
  {
    icon: "/images/icons/improved-textures.svg",
    title: {
      en: "Reduced Appearance of Fine Lines",
      ar: "تقليل مظهر الخطوط الدقيقة",
    },
    description: {
      en: "Supports smoother-looking skin by improving surface texture and signs of aging.",
      ar: "يساعد على تنعيم البشرة وتحسين ملمسها وتقليل علامات التقدم في العمر.",
    },
  },
  {
    icon: "/images/icons/skin-nourishment.svg",
    title: {
      en: "Minimized Skin Imperfections",
      ar: "تقليل عيوب البشرة",
    },
    description: {
      en: "Helps improve the appearance of roughness, dullness, and certain surface concerns.",
      ar: "يساعد على تحسين مظهر خشونة البشرة والبهتان وبعض العيوب السطحية.",
    },
  },
  {
    icon: "/images/icons/healthy-skin.svg",
    title: {
      en: "Enhanced Product Absorption",
      ar: "تحسين امتصاص المنتجات",
    },
    description: {
      en: "Creates a smoother skin surface, allowing skincare products to penetrate more effectively.",
      ar: "يوفر سطحًا أكثر نعومة للبشرة، مما يساعد منتجات العناية على الامتصاص بشكل أكثر فعالية.",
    },
  },
],

processHeading: {
  en: "Your Journey to",
  ar: "رحلتك نحو",
},

processHeadingHighlight: {
  en: "Renewed Skin",
  ar: "بشرة متجددة",
},

processSubheading: {
  en: "Every Dermabrasion treatment is carefully performed to refresh the skin surface while ensuring comfort and personalized care.",
  ar: "يتم إجراء كل جلسة ديرمابراشن بعناية لتجديد سطح البشرة مع ضمان الراحة وتقديم رعاية مخصصة تناسب احتياجاتك.",
},

process: [
  {
    image: "/images/treatments/hydra-facial-process-1.jpg",
    title: {
      en: "Consultation",
      ar: "الاستشارة",
    },
    description: {
      en: "We begin with a detailed consultation to evaluate your skin condition, concerns, and goals to determine the most suitable approach.",
      ar: "نبدأ باستشارة تفصيلية لتقييم حالة بشرتك ومشكلاتها وأهدافك، وذلك لتحديد أفضل خطة علاج تناسب احتياجاتك.",
    },
  },
  {
    image: "/images/treatments/carbon-peel-process-2.jpg",
    title: {
      en: "Skin Preparation",
      ar: "تحضير البشرة",
    },
    description: {
      en: "The skin is thoroughly cleansed and prepared to remove impurities, ensuring a safe and effective resurfacing experience.",
      ar: "يتم تنظيف البشرة وتحضيرها بعناية لإزالة الشوائب، مما يضمن تجربة إعادة تسطيح آمنة وفعالة.",
    },
  },
  {
    image: "/images/treatments/carbon-peel-process-3.jpg",
    title: {
      en: "Dermabrasion Treatment",
      ar: "علاج الديرمابراشن",
    },
    description: {
      en: "A controlled exfoliation process is performed to remove damaged surface cells and reveal smoother, healthier-looking skin underneath.",
      ar: "يتم إجراء عملية تقشير دقيقة ومدروسة لإزالة خلايا الجلد السطحية التالفة والكشف عن بشرة أكثر نعومة وصحة.",
    },
  },
  {
    image: "/images/treatments/hydra-facial-process-4.jpg",
    title: {
      en: "Soothing & After Care",
      ar: "التهدئة والعناية اللاحقة",
    },
    description: {
      en: "The treatment concludes with calming skincare products and protective measures to support your skin and maintain optimal results.",
      ar: "تُختتم الجلسة باستخدام منتجات مهدئة وإجراءات وقائية للمساعدة في حماية البشرة والحفاظ على أفضل النتائج.",
    },
  },
],

faq: [
  {
    id: "dermabrasion-what-is",
    question: {
      en: "What is Dermabrasion treatment?",
      ar: "ما هو علاج الديرمابراشن؟",
    },
    answer: {
      en: "Dermabrasion is a skin resurfacing procedure that removes damaged outer skin layers to improve texture, smoothness, and overall skin appearance.",
      ar: "الديرمابراشن هو إجراء لإعادة تسطيح البشرة يزيل الطبقات الخارجية التالفة من الجلد لتحسين الملمس والنعومة والمظهر العام للبشرة.",
    },
  },
  {
    id: "dermabrasion-skin-types",
    question: {
      en: "Is Dermabrasion suitable for all skin types?",
      ar: "هل الديرمابراشن مناسب لجميع أنواع البشرة؟",
    },
    answer: {
      en: "Dermabrasion can be customized depending on your skin condition. A consultation is recommended to determine if it is suitable for your skin.",
      ar: "يمكن تخصيص علاج الديرمابراشن وفقًا لحالة بشرتك. ويُنصح بإجراء استشارة لتحديد مدى ملاءمته لبشرتك.",
    },
  },
  {
    id: "dermabrasion-comfort",
    question: {
      en: "Does Dermabrasion treatment cause discomfort?",
      ar: "هل يسبب علاج الديرمابراشن أي انزعاج؟",
    },
    answer: {
      en: "The treatment may cause mild sensations depending on skin sensitivity, but it is performed with techniques designed to ensure client comfort.",
      ar: "قد يسبب العلاج شعورًا خفيفًا بالانزعاج حسب حساسية البشرة، إلا أنه يُجرى باستخدام تقنيات مصممة لضمان راحة العميل.",
    },
  },
  {
    id: "dermabrasion-downtime",
    question: {
      en: "Is there any downtime after Dermabrasion?",
      ar: "هل توجد فترة تعافٍ بعد الديرمابراشن؟",
    },
    answer: {
      en: "Some clients may experience temporary redness or sensitivity after treatment. Recovery time depends on the intensity of the procedure and individual skin response.",
      ar: "قد يعاني بعض العملاء من احمرار أو حساسية مؤقتة بعد العلاج. وتعتمد مدة التعافي على شدة الإجراء واستجابة البشرة الفردية.",
    },
  },
  {
    id: "dermabrasion-sessions",
    question: {
      en: "How many sessions are recommended?",
      ar: "كم عدد الجلسات الموصى بها؟",
    },
    answer: {
      en: "The number of sessions varies based on your skin concerns and desired results. Our specialists will recommend a suitable treatment plan after assessment.",
      ar: "يعتمد عدد الجلسات على حالة بشرتك والنتائج التي ترغبين في تحقيقها. وسيقترح أخصائيونا خطة علاج مناسبة بعد تقييم البشرة.",
    },
  },
  {
    id: "dermabrasion-dull-skin",
    question: {
      en: "Can Dermabrasion improve dull-looking skin?",
      ar: "هل يساعد الديرمابراشن في تحسين البشرة الباهتة؟",
    },
    answer: {
      en: "Yes, by removing dead and damaged skin cells, Dermabrasion helps reveal a fresher, smoother, and more radiant complexion.",
      ar: "نعم، من خلال إزالة خلايا الجلد الميتة والمتضررة، يساعد الديرمابراشن على الكشف عن بشرة أكثر نضارة ونعومة وإشراقًا.",
    },
  },
  {
    id: "dermabrasion-aftercare",
    question: {
      en: "What should I do after Dermabrasion treatment?",
      ar: "كيف أعتني ببشرتي بعد علاج الديرمابراشن؟",
    },
    answer: {
      en: "It is recommended to follow post-treatment skincare guidance, use sunscreen regularly, and avoid harsh products until the skin fully recovers.",
      ar: "يُنصح باتباع تعليمات العناية بعد العلاج، واستخدام واقي الشمس بانتظام، وتجنب المنتجات القاسية حتى تتعافى البشرة بشكل كامل.",
    },
  },
]
}, 

{
  slug: "ultrasonic-treatment",
  categorySlug: "advanced-skin-care",

  title: {
    en: "Ultrasonic Treatments",
    ar: "العلاجات بالموجات فوق الصوتية",
  },

  description: {
    en: "Experience advanced ultrasonic technology designed to deeply cleanse, hydrate, and rejuvenate your skin while enhancing product absorption for a smoother, healthier, and more radiant complexion.",
    ar: "استمتع بتقنية الموجات فوق الصوتية المتطورة المصممة لتنظيف البشرة بعمق وترطيبها وتجديدها، مع تعزيز امتصاص منتجات العناية للحصول على بشرة أكثر نعومة وصحة وإشراقًا.",
  },

  image: "/images/treatments/ultrasonic-treatment-1.jpg",

  durationMinutes: "45 - 60",

  skinType: {
    en: "All Skin Types",
    ar: "جميع أنواع البشرة",
  },

  detailDescription: {
    en: "Ultrasonic Treatments use gentle high-frequency sound wave technology to deeply cleanse, stimulate, and rejuvenate the skin without discomfort or downtime. The treatment enhances circulation, improves hydration, and increases the absorption of professional skincare products, leaving your skin refreshed, smoother, and naturally radiant.",
    ar: "تستخدم العلاجات بالموجات فوق الصوتية تقنية الموجات الصوتية عالية التردد لتنظيف البشرة بعمق وتحفيزها وتجديدها بلطف دون ألم أو فترة تعافٍ. يساعد العلاج على تحسين الدورة الدموية، وتعزيز الترطيب، وزيادة امتصاص منتجات العناية الاحترافية، مما يمنح البشرة مظهرًا أكثر نعومة وانتعاشًا وإشراقًا.",
  },

  sessions: "4 - 6",

  procedureType: {
    en: "Minimally Invasive",
    ar: "طفيف التوغل",
  },
    overview: {
    en: "Ultrasonic Treatments are advanced skincare procedures that use high-frequency sound waves to gently cleanse, hydrate, and rejuvenate the skin. This innovative technology helps remove impurities, improve circulation, enhance hydration, and increase the absorption of professional skincare products for healthier, smoother, and more radiant-looking skin.",
    ar: "العلاجات بالموجات فوق الصوتية هي إجراءات متطورة للعناية بالبشرة تستخدم موجات صوتية عالية التردد لتنظيف البشرة وترطيبها وتجديدها بلطف. تساعد هذه التقنية المبتكرة على إزالة الشوائب، وتحسين الدورة الدموية، وتعزيز الترطيب، وزيادة امتصاص منتجات العناية الاحترافية، مما يمنح البشرة مظهرًا أكثر صحة ونعومة وإشراقًا.",
  },

  overviewImage: "/images/treatments/ultrasonic-treatment-overview.png",

  benefits: [
    {
      icon: "/images/icons/deep-cleaning.svg",
      title: {
        en: "Deep Skin Cleansing",
        ar: "تنظيف عميق للبشرة",
      },
      description: {
        en: "Helps remove impurities, excess oil, and surface buildup for cleaner, refreshed, and healthier-looking skin.",
        ar: "يساعد على إزالة الشوائب والزيوت الزائدة والتراكمات السطحية للحصول على بشرة أنظف وأكثر انتعاشًا وصحة.",
      },
    },
    {
      icon: "/images/icons/skin-nourishment.svg",
      title: {
        en: "Enhanced Product Absorption",
        ar: "تعزيز امتصاص المنتجات",
      },
      description: {
        en: "Improves the skin's ability to absorb nourishing serums and professional skincare products for enhanced treatment results.",
        ar: "يعزز قدرة البشرة على امتصاص السيرومات المغذية ومنتجات العناية الاحترافية للحصول على نتائج علاجية أفضل.",
      },
    },
    {
      icon: "/images/icons/intense-hydration.svg",
      title: {
        en: "Improved Hydration",
        ar: "ترطيب عميق",
      },
      description: {
        en: "Supports deeper hydration by helping active skincare ingredients penetrate the skin more effectively.",
        ar: "يعزز الترطيب العميق من خلال مساعدة المكونات الفعالة على الوصول إلى البشرة بكفاءة أكبر.",
      },
    },
    {
      icon: "/images/icons/improved-textures.svg",
      title: {
        en: "Smoother Skin Texture",
        ar: "ملمس بشرة أكثر نعومة",
      },
      description: {
        en: "Helps refine rough skin texture and promotes a softer, smoother, and more even complexion.",
        ar: "يساعد على تحسين ملمس البشرة الخشن ويمنحها نعومة وتجانسًا أكبر.",
      },
    },
    {
      icon: "/images/icons/bright-complexion.svg",
      title: {
        en: "Boosted Skin Radiance",
        ar: "إشراقة معززة للبشرة",
      },
      description: {
        en: "Promotes a brighter, healthier-looking complexion by improving overall skin vitality and freshness.",
        ar: "يعزز إشراقة البشرة ويمنحها مظهرًا أكثر صحة وحيوية من خلال تحسين نضارتها العامة.",
      },
    },
    {
      icon: "/images/icons/healthy-skin.svg",
      title: {
        en: "Gentle Skin Rejuvenation",
        ar: "تجديد لطيف للبشرة",
      },
      description: {
        en: "Provides effective skin rejuvenation without harsh procedures or downtime, making it ideal for regular skincare maintenance.",
        ar: "يوفر تجديدًا فعالًا للبشرة دون إجراءات قاسية أو فترة تعافٍ، مما يجعله مثاليًا للعناية المنتظمة بالبشرة.",
      },
    },
  ],
    processHeading: {
    en: "Your Journey to",
    ar: "رحلتك نحو",
  },

  processHeadingHighlight: {
    en: "Refreshed Skin",
    ar: "بشرة منتعشة",
  },

  processSubheading: {
    en: "Every Ultrasonic Treatment is tailored to your skin's unique needs, combining advanced ultrasonic technology with professional skincare techniques to restore healthier, smoother, and more radiant skin.",
    ar: "يتم تخصيص كل جلسة علاج بالموجات فوق الصوتية وفقًا لاحتياجات بشرتك، مع الجمع بين التقنية المتطورة وأساليب العناية الاحترافية لاستعادة بشرة أكثر صحة ونعومة وإشراقًا.",
  },

  process: [
    {
      image: "/images/treatments/hydra-facial-process-1.jpg",
      title: {
        en: "Consultation",
        ar: "الاستشارة",
      },
      description: {
        en: "We begin with a detailed consultation to understand your skin concerns, treatment goals, and current skincare routine before creating a personalized treatment plan.",
        ar: "نبدأ باستشارة تفصيلية لفهم مشاكل بشرتك وأهداف العلاج وروتين العناية الحالي قبل إعداد خطة علاج مخصصة.",
      },
    },
    {
      image: "/images/treatments/ultrasonic-treatment-process-2.jpg",
      title: {
        en: "Skin Preparation",
        ar: "تحضير البشرة",
      },
      description: {
        en: "Your skin is gently cleansed and prepared to remove surface impurities, ensuring the ultrasonic technology performs at its maximum effectiveness.",
        ar: "يتم تنظيف البشرة وتحضيرها بلطف لإزالة الشوائب السطحية، مما يضمن تحقيق أفضل نتائج للعلاج بالموجات فوق الصوتية.",
      },
    },
    {
      image: "/images/treatments/ultrasonic-treatment-process-3.jpg",
      title: {
        en: "Ultrasonic Therapy",
        ar: "العلاج بالموجات فوق الصوتية",
      },
      description: {
        en: "Advanced ultrasonic technology is applied to deeply cleanse the skin, stimulate circulation, enhance hydration, and improve the absorption of nourishing skincare ingredients.",
        ar: "يتم استخدام تقنية الموجات فوق الصوتية المتطورة لتنظيف البشرة بعمق، وتحفيز الدورة الدموية، وتعزيز الترطيب، وتحسين امتصاص مكونات العناية المغذية.",
      },
    },
    {
      image: "/images/treatments/hydra-facial-process-4.jpg",
      title: {
        en: "Nourishment & Protection",
        ar: "التغذية والحماية",
      },
      description: {
        en: "The treatment concludes with specialized serums, moisturizers, and protective skincare products to calm, hydrate, and protect your skin while maintaining its refreshed, radiant glow.",
        ar: "تُختتم الجلسة باستخدام سيرومات ومرطبات ومنتجات حماية متخصصة لتهدئة البشرة وترطيبها وحمايتها، مع الحفاظ على إشراقتها ونضارتها.",
      },
    },
  ],
    faq: [
    {
      id: "ultrasonic-treatment-what-is",
      question: {
        en: "What are Ultrasonic Treatments?",
        ar: "ما هي العلاجات بالموجات فوق الصوتية؟",
      },
      answer: {
        en: "Ultrasonic Treatments use high-frequency sound waves to deeply cleanse, rejuvenate, and enhance the appearance of the skin while improving the absorption of professional skincare products for healthier, more radiant skin.",
        ar: "تستخدم العلاجات بالموجات فوق الصوتية موجات صوتية عالية التردد لتنظيف البشرة بعمق وتجديدها وتحسين مظهرها، مع تعزيز امتصاص منتجات العناية الاحترافية للحصول على بشرة أكثر صحة وإشراقًا.",
      },
    },
    {
      id: "ultrasonic-treatment-skin-types",
      question: {
        en: "Are Ultrasonic Treatments suitable for all skin types?",
        ar: "هل العلاجات بالموجات فوق الصوتية مناسبة لجميع أنواع البشرة؟",
      },
      answer: {
        en: "Yes. This gentle treatment can be customized for different skin types, including sensitive skin, to address your individual skincare concerns.",
        ar: "نعم، يمكن تخصيص هذا العلاج اللطيف ليناسب جميع أنواع البشرة، بما في ذلك البشرة الحساسة، وفقًا لاحتياجات كل شخص.",
      },
    },
    {
      id: "ultrasonic-treatment-pain",
      question: {
        en: "Does the treatment cause any pain?",
        ar: "هل يسبب العلاج أي ألم؟",
      },
      answer: {
        en: "No. Ultrasonic Treatments are non-invasive and comfortable. Most clients experience only a gentle warming or vibrating sensation during the procedure.",
        ar: "لا، العلاجات بالموجات فوق الصوتية غير جراحية ومريحة، ويشعر معظم العملاء فقط بإحساس خفيف بالدفء أو الاهتزاز أثناء الجلسة.",
      },
    },
    {
      id: "ultrasonic-treatment-downtime",
      question: {
        en: "Is there any downtime after the treatment?",
        ar: "هل توجد فترة تعافٍ بعد العلاج؟",
      },
      answer: {
        en: "No. There is no downtime, allowing you to return to your normal daily activities immediately after your treatment.",
        ar: "لا، لا يتطلب العلاج أي فترة تعافٍ، ويمكنك العودة إلى أنشطتك اليومية مباشرة بعد انتهاء الجلسة.",
      },
    },
    {
      id: "ultrasonic-treatment-frequency",
      question: {
        en: "How often should I have Ultrasonic Treatments?",
        ar: "كم مرة يُنصح بإجراء العلاجات بالموجات فوق الصوتية؟",
      },
      answer: {
        en: "The recommended treatment frequency depends on your skin condition and skincare goals. Our specialists will recommend a personalized treatment schedule during your consultation.",
        ar: "يعتمد عدد الجلسات الموصى بها على حالة بشرتك وأهداف العناية بها، وسيقوم أخصائيو البشرة بوضع جدول علاجي مناسب خلال الاستشارة.",
      },
    },
    {
      id: "ultrasonic-treatment-hydration",
      question: {
        en: "Can Ultrasonic Treatments help with dry or dehydrated skin?",
        ar: "هل تساعد العلاجات بالموجات فوق الصوتية في علاج البشرة الجافة أو التي تعاني من نقص الترطيب؟",
      },
      answer: {
        en: "Yes. The treatment supports deeper hydration by improving the delivery and absorption of nourishing skincare ingredients, helping restore soft, healthy-looking skin.",
        ar: "نعم، يساعد العلاج على تعزيز الترطيب العميق من خلال تحسين وصول وامتصاص المكونات المغذية، مما يمنح البشرة نعومة ومظهرًا أكثر صحة.",
      },
    },
    {
      id: "ultrasonic-treatment-combination",
      question: {
        en: "Can Ultrasonic Treatments be combined with other skincare procedures?",
        ar: "هل يمكن دمج العلاجات بالموجات فوق الصوتية مع علاجات أخرى للعناية بالبشرة؟",
      },
      answer: {
        en: "Yes. Depending on your skin's needs, Ultrasonic Treatments can complement other facial and skin rejuvenation procedures to maximize your overall skincare results.",
        ar: "نعم، يمكن دمج العلاجات بالموجات فوق الصوتية مع علاجات الوجه وإجراءات تجديد البشرة الأخرى وفقًا لاحتياجات بشرتك لتحقيق أفضل النتائج.",
      },
    },
  ],
},
{
  slug: "acne-treatment",
  categorySlug: "advanced-skin-care",

  title: {
    en: "Acne Treatment",
    ar: "علاج حب الشباب",
  },

  description: {
    en: "Achieve clearer, healthier-looking skin with personalized Acne Treatment designed to reduce breakouts, control excess oil, unclog pores, and restore your skin's natural balance and confidence.",
    ar: "احصل على بشرة أكثر صفاءً وصحة مع علاج حب الشباب المصمم خصيصًا لتقليل البثور، والتحكم في الزيوت الزائدة، وتنظيف المسام، واستعادة توازن البشرة وثقتك بنفسك.",
  },

  image: "/images/treatments/acne-treatment.jpg",

  durationMinutes: "45 - 60",

  skinType: {
    en: "Acne-Prone & Problematic Skin",
    ar: "البشرة المعرضة لحب الشباب والمشكلات الجلدية",
  },

  detailDescription: {
    en: "Our personalized Acne Treatment combines professional skincare techniques with advanced treatment methods to target active breakouts, reduce excess oil, unclog pores, and improve overall skin health. Each treatment plan is tailored to your skin condition, helping calm inflammation, refine skin texture, minimize post-acne concerns, and restore a clearer, healthier-looking complexion.",
    ar: "يجمع علاج حب الشباب المخصص لدينا بين تقنيات العناية الاحترافية والأساليب العلاجية المتقدمة لاستهداف البثور النشطة، وتقليل الزيوت الزائدة، وتنظيف المسام، وتحسين صحة البشرة بشكل عام. يتم تصميم كل خطة علاجية وفقًا لحالة بشرتك للمساعدة في تهدئة الالتهابات، وتحسين ملمس البشرة، وتقليل آثار ما بعد حب الشباب، واستعادة بشرة أكثر صفاءً وصحة.",
  },

  sessions: "Personalized",

  procedureType: {
    en: "Non-Invasive",
    ar: "غير جراحي",
  },
    overview: {
    en: "Acne Treatment is a personalized skincare procedure designed to effectively manage acne by targeting the root causes of breakouts, including excess oil production, clogged pores, bacteria buildup, and skin inflammation. Using professional techniques and customized treatment plans, it helps restore clearer, healthier, and more balanced skin while supporting long-term skin health.",
    ar: "علاج حب الشباب هو إجراء مخصص للعناية بالبشرة يهدف إلى السيطرة على حب الشباب من خلال معالجة أسبابه الرئيسية، مثل زيادة إفراز الزيوت، وانسداد المسام، وتراكم البكتيريا، والتهابات البشرة. يعتمد العلاج على تقنيات احترافية وخطط علاجية مخصصة للمساعدة في استعادة بشرة أكثر صفاءً وصحة وتوازنًا، مع دعم صحة البشرة على المدى الطويل.",
  },

  overviewImage: "/images/treatments/acne-treatment-overview.png",

  benefits: [
    {
      icon: "/images/icons/deep-cleaning.svg",
      title: {
        en: "Reduces Breakouts",
        ar: "تقليل البثور",
      },
      description: {
        en: "Targets acne-causing factors to reduce active breakouts and improve the overall appearance of your skin.",
        ar: "يستهدف العوامل المسببة لحب الشباب للمساعدة في تقليل البثور النشطة وتحسين مظهر البشرة بشكل عام.",
      },
    },
    {
      icon: "/images/icons/intense-hydration.svg",
      title: {
        en: "Deep Pore Cleansing",
        ar: "تنظيف عميق للمسام",
      },
      description: {
        en: "Removes excess oil, impurities, and pore-clogging buildup to promote cleaner and healthier skin.",
        ar: "يزيل الزيوت الزائدة والشوائب والتراكمات التي تسد المسام للحصول على بشرة أكثر نظافة وصحة.",
      },
    },
    {
      icon: "/images/icons/bright-complexion.svg",
      title: {
        en: "Controls Excess Oil",
        ar: "التحكم في الزيوت الزائدة",
      },
      description: {
        en: "Helps regulate excess oil production to maintain a balanced, fresh, and healthier-looking complexion.",
        ar: "يساعد على تنظيم إفراز الزيوت الزائدة للحفاظ على بشرة متوازنة وأكثر نضارة وصحة.",
      },
    },
    {
      icon: "/images/icons/improved-textures.svg",
      title: {
        en: "Calms Skin Inflammation",
        ar: "تهدئة التهاب البشرة",
      },
      description: {
        en: "Soothes irritated skin, reduces redness, and helps improve overall skin comfort during the healing process.",
        ar: "يساعد على تهدئة البشرة المتهيجة وتقليل الاحمرار وتحسين راحة البشرة أثناء عملية التعافي.",
      },
    },
    {
      icon: "/images/icons/skin-nourishment.svg",
      title: {
        en: "Improved Skin Texture",
        ar: "تحسين ملمس البشرة",
      },
      description: {
        en: "Helps smooth uneven skin texture and promotes a clearer, more refined, and healthier-looking complexion.",
        ar: "يساعد على تحسين ملمس البشرة غير المتجانس ويمنحها مظهرًا أكثر نعومة وصفاءً وصحة.",
      },
    },
    {
      icon: "/images/icons/healthy-skin.svg",
      title: {
        en: "Prevents Future Concerns",
        ar: "الوقاية من المشكلات المستقبلية",
      },
      description: {
        en: "Supports long-term skin health through personalized treatment plans and professional skincare recommendations.",
        ar: "يدعم صحة البشرة على المدى الطويل من خلال خطط علاجية مخصصة وتوصيات احترافية للعناية بالبشرة.",
      },
    },
  ],
    processHeading: {
    en: "Your Journey to",
    ar: "رحلتك نحو",
  },

  processHeadingHighlight: {
    en: "Clearer Skin",
    ar: "بشرة أكثر صفاءً",
  },

  processSubheading: {
    en: "Every Acne Treatment begins with a detailed skin assessment and a personalized treatment plan designed to reduce breakouts, restore balance, and promote healthier-looking skin.",
    ar: "تبدأ كل جلسة لعلاج حب الشباب بتقييم شامل للبشرة ووضع خطة علاج مخصصة تهدف إلى تقليل البثور واستعادة توازن البشرة وتعزيز مظهرها الصحي.",
  },

  process: [
    {
      image: "/images/treatments/hydra-facial-process-1.jpg",
      title: {
        en: "Consultation",
        ar: "الاستشارة",
      },
      description: {
        en: "We begin with a comprehensive skin consultation to evaluate your acne concerns, skin type, lifestyle, and previous skincare routine before creating a personalized treatment plan.",
        ar: "نبدأ باستشارة شاملة لتقييم حالة حب الشباب، ونوع البشرة، ونمط الحياة، وروتين العناية السابق، ثم نضع خطة علاجية مخصصة تناسب احتياجاتك.",
      },
    },
    {
      image: "/images/treatments/acne-treatment-process-2.jpg",
      title: {
        en: "Skin Preparation",
        ar: "تحضير البشرة",
      },
      description: {
        en: "Your skin is gently cleansed to remove excess oil, impurities, and surface buildup, preparing it for targeted acne treatment.",
        ar: "يتم تنظيف البشرة بلطف لإزالة الزيوت الزائدة والشوائب والتراكمات السطحية، مما يهيئها للعلاج المخصص لحب الشباب.",
      },
    },
    {
      image: "/images/treatments/acne-treatment-process-3.jpg",
      title: {
        en: "Acne Treatment",
        ar: "علاج حب الشباب",
      },
      description: {
        en: "Based on your skin condition, specialized treatment techniques and professional skincare solutions are applied to reduce breakouts, unclog pores, calm inflammation, and restore skin balance.",
        ar: "وفقًا لحالة بشرتك، يتم استخدام تقنيات علاجية متخصصة ومنتجات احترافية للمساعدة في تقليل البثور، وتنظيف المسام، وتهدئة الالتهابات، واستعادة توازن البشرة.",
      },
    },
    {
      image: "/images/treatments/hydra-facial-process-4.jpg",
      title: {
        en: "Recovery & Skin Care",
        ar: "التعافي والعناية بالبشرة",
      },
      description: {
        en: "The treatment concludes with soothing skincare products and personalized aftercare recommendations to support healing, maintain results, and promote healthier skin over time.",
        ar: "تُختتم الجلسة باستخدام منتجات مهدئة للبشرة مع تقديم إرشادات مخصصة للعناية اللاحقة لدعم التعافي والحفاظ على النتائج وتعزيز صحة البشرة على المدى الطويل.",
      },
    },
  ],
    faq: [
    {
      id: "acne-treatment-causes",
      question: {
        en: "What causes acne and breakouts?",
        ar: "ما الذي يسبب حب الشباب وظهور البثور؟",
      },
      answer: {
        en: "Acne can be caused by a combination of factors, including excess oil production, clogged pores, bacteria buildup, hormonal changes, and certain lifestyle habits. A professional skin assessment helps identify the most likely causes affecting your skin.",
        ar: "قد ينتج حب الشباب عن عدة عوامل، منها زيادة إفراز الزيوت، وانسداد المسام، وتراكم البكتيريا، والتغيرات الهرمونية، وبعض العوامل المرتبطة بنمط الحياة. يساعد تقييم البشرة لدى الأخصائي في تحديد الأسباب الأكثر تأثيرًا على حالتك.",
      },
    },
    {
      id: "acne-treatment-types",
      question: {
        en: "Is Acne Treatment suitable for all types of acne?",
        ar: "هل علاج حب الشباب مناسب لجميع أنواع حب الشباب؟",
      },
      answer: {
        en: "Yes. Acne Treatment can be customized according to your acne type, skin condition, and treatment goals. During your consultation, our specialists will recommend the most suitable approach for your skin.",
        ar: "نعم، يمكن تخصيص علاج حب الشباب وفقًا لنوع حب الشباب وحالة بشرتك وأهداف العلاج. خلال الاستشارة، سيحدد أخصائيو البشرة الخطة العلاجية الأنسب لك.",
      },
    },
    {
      id: "acne-treatment-sessions",
      question: {
        en: "How many sessions are needed to see results?",
        ar: "كم عدد الجلسات المطلوبة لرؤية النتائج؟",
      },
      answer: {
        en: "The number of sessions varies depending on the severity of acne and your skin's individual response. Our specialists will create a personalized treatment plan to achieve the best possible results.",
        ar: "يعتمد عدد الجلسات على شدة حب الشباب واستجابة بشرتك للعلاج. سيقوم أخصائيو البشرة بوضع خطة علاجية مخصصة لتحقيق أفضل النتائج.",
      },
    },
    {
      id: "acne-treatment-pain",
      question: {
        en: "Does Acne Treatment hurt?",
        ar: "هل يسبب علاج حب الشباب الألم؟",
      },
      answer: {
        en: "Most Acne Treatments are comfortable and non-invasive. Depending on the treatment technique used, you may experience mild temporary sensations during the procedure.",
        ar: "معظم علاجات حب الشباب مريحة وغير جراحية، وقد تشعر بإحساس خفيف ومؤقت أثناء الجلسة حسب التقنية المستخدمة.",
      },
    },
    {
      id: "acne-treatment-scars",
      question: {
        en: "Can Acne Treatment help with acne scars?",
        ar: "هل يساعد علاج حب الشباب في تحسين آثار وندبات حب الشباب؟",
      },
      answer: {
        en: "Acne Treatment primarily focuses on controlling active acne and preventing future breakouts. If acne scars are present, additional skin rejuvenation treatments may be recommended to improve their appearance.",
        ar: "يركز علاج حب الشباب بشكل أساسي على السيطرة على البثور النشطة والحد من ظهورها مستقبلاً. وإذا كانت هناك آثار أو ندبات، فقد يوصي الأخصائي بعلاجات إضافية لتحسين مظهرها.",
      },
    },
    {
      id: "acne-treatment-return",
      question: {
        en: "Can acne return after treatment?",
        ar: "هل يمكن أن يعود حب الشباب بعد العلاج؟",
      },
      answer: {
        en: "Acne can return depending on individual skin conditions and contributing factors. Following a proper skincare routine and your specialist's recommendations can help minimize future breakouts.",
        ar: "قد يعود حب الشباب حسب طبيعة البشرة والعوامل المسببة له، ولكن الالتزام بروتين عناية مناسب واتباع تعليمات الأخصائي يساعد في تقليل احتمالية ظهور البثور مرة أخرى.",
      },
    },
    {
      id: "acne-treatment-aftercare",
      question: {
        en: "What skincare should I use after Acne Treatment?",
        ar: "ما هي منتجات العناية التي يجب استخدامها بعد علاج حب الشباب؟",
      },
      answer: {
        en: "Our specialists will recommend skincare products tailored to your skin condition, helping support healing, maintain hydration, protect the skin barrier, and promote long-term skin health.",
        ar: "سيقوم أخصائيو البشرة بترشيح منتجات عناية مناسبة لحالة بشرتك لدعم التعافي، والحفاظ على الترطيب، وحماية حاجز البشرة، وتعزيز صحة البشرة على المدى الطويل.",
      },
    },
  ],
},
{
  slug: "scar-treatment",
  categorySlug: "advanced-skin-care",

  title: {
    en: "Scar Treatment",
    ar: "علاج الندبات",
  },

  description: {
    en: "Restore smoother, healthier-looking skin with advanced Scar Treatment designed to reduce the appearance of acne scars, injury marks, and uneven skin texture through personalized skin rejuvenation solutions.",
    ar: "استعد نعومة بشرتك ومظهرها الصحي مع علاج الندبات المتطور المصمم لتقليل آثار حب الشباب والندبات والإصابات وتحسين ملمس البشرة من خلال حلول تجديد البشرة المخصصة.",
  },

  image: "/images/treatments/scar-treatment.jpg",

  durationMinutes: "45 - 60",

  skinType: {
    en: "All Skin Types",
    ar: "جميع أنواع البشرة",
  },

  detailDescription: {
    en: "Our advanced Scar Treatment is designed to improve the appearance of acne scars, injury marks, and uneven skin texture using personalized skin rejuvenation techniques. By stimulating the skin's natural renewal process, the treatment helps refine texture, promote smoother skin, and restore a healthier, more even complexion with minimal discomfort and no downtime.",
    ar: "صُمم علاج الندبات المتطور لدينا لتحسين مظهر آثار حب الشباب والندبات والإصابات وعدم تجانس ملمس البشرة باستخدام تقنيات مخصصة لتجديد البشرة. يساعد العلاج على تحفيز عملية التجدد الطبيعية للبشرة لتحسين الملمس واستعادة بشرة أكثر نعومة وتجانسًا وصحة مع أقل قدر من الانزعاج ودون الحاجة إلى فترة تعافٍ.",
  },

  sessions: "4 - 6",

  procedureType: {
    en: "Non-Invasive",
    ar: "غير جراحي",
  },

    overview: {
    en: "Scar Treatment is a personalized skin rejuvenation procedure designed to improve the appearance of various types of scars, including acne scars, minor injury marks, and uneven skin texture. Using advanced skincare techniques and customized treatment plans, it helps stimulate natural skin renewal, refine texture, and restore a smoother, healthier, and more even-looking complexion.",
    ar: "علاج الندبات هو إجراء مخصص لتجديد البشرة يهدف إلى تحسين مظهر مختلف أنواع الندبات، بما في ذلك آثار حب الشباب وآثار الإصابات البسيطة وعدم تجانس ملمس البشرة. يعتمد العلاج على تقنيات متطورة وخطط علاجية مخصصة لتحفيز التجدد الطبيعي للبشرة وتحسين ملمسها واستعادة مظهر أكثر نعومة وصحة وتجانسًا.",
  },

  overviewImage: "/images/treatments/scar-treatment-overview.png",

  benefits: [
    {
      icon: "/images/icons/deep-cleaning.svg",
      title: {
        en: "Reduces Scar Appearance",
        ar: "تقليل مظهر الندبات",
      },
      description: {
        en: "Helps minimize the visibility of acne scars, minor injury marks, and other surface imperfections for smoother-looking skin.",
        ar: "يساعد على تقليل ظهور آثار حب الشباب والندبات البسيطة وغيرها من عيوب سطح البشرة للحصول على مظهر أكثر نعومة.",
      },
    },
    {
      icon: "/images/icons/intense-hydration.svg",
      title: {
        en: "Improves Skin Texture",
        ar: "تحسين ملمس البشرة",
      },
      description: {
        en: "Smooths uneven skin texture and refines the skin's surface for a softer, healthier complexion.",
        ar: "يحسن ملمس البشرة غير المتجانس ويمنحها نعومة ومظهرًا أكثر صحة.",
      },
    },
    {
      icon: "/images/icons/bright-complexion.svg",
      title: {
        en: "Promotes Skin Renewal",
        ar: "تحفيز تجدد البشرة",
      },
      description: {
        en: "Stimulates the skin's natural regeneration process to encourage healthier, refreshed, and revitalized skin.",
        ar: "يحافظ على تحفيز عملية التجدد الطبيعية للبشرة للحصول على بشرة أكثر صحة وانتعاشًا وحيوية.",
      },
    },
    {
      icon: "/images/icons/improved-textures.svg",
      title: {
        en: "Enhances Skin Tone",
        ar: "تحسين لون البشرة",
      },
      description: {
        en: "Supports a more balanced, even complexion by improving the overall appearance of the treated skin.",
        ar: "يساعد على توحيد لون البشرة وتحسين مظهرها العام للحصول على بشرة أكثر إشراقًا وتجانسًا.",
      },
    },
    {
      icon: "/images/icons/skin-nourishment.svg",
      title: {
        en: "Boosts Skin Confidence",
        ar: "تعزيز الثقة بالبشرة",
      },
      description: {
        en: "Restores a smoother skin appearance, helping you feel more confident in your natural complexion.",
        ar: "يساعد على استعادة مظهر أكثر نعومة للبشرة، مما يعزز ثقتك بإطلالتك الطبيعية.",
      },
    },
    {
      icon: "/images/icons/healthy-skin.svg",
      title: {
        en: "Personalized Treatment Approach",
        ar: "خطة علاج مخصصة",
      },
      description: {
        en: "Every treatment plan is tailored according to your scar type, skin condition, and desired aesthetic results.",
        ar: "يتم تصميم كل خطة علاجية وفقًا لنوع الندبة، وحالة البشرة، والنتائج الجمالية التي ترغب في تحقيقها.",
      },
    },
  ],

    processHeading: {
    en: "Your Journey to",
    ar: "رحلتك نحو",
  },

  processHeadingHighlight: {
    en: "Smoother Skin",
    ar: "بشرة أكثر نعومة",
  },

  processSubheading: {
    en: "Every Scar Treatment begins with a comprehensive skin assessment and a personalized treatment plan designed to improve skin texture, reduce visible scarring, and restore a smoother, healthier complexion.",
    ar: "تبدأ كل جلسة لعلاج الندبات بتقييم شامل للبشرة ووضع خطة علاجية مخصصة تهدف إلى تحسين ملمس البشرة، وتقليل مظهر الندبات، واستعادة بشرة أكثر نعومة وصحة.",
  },

  process: [
    {
      image: "/images/treatments/hydra-facial-process-1.jpg",
      title: {
        en: "Consultation",
        ar: "الاستشارة",
      },
      description: {
        en: "We carefully evaluate your skin condition, scar type, depth, and concerns to determine the most suitable treatment approach for your individual needs.",
        ar: "نقوم بتقييم حالة بشرتك ونوع الندبة وعمقها ومخاوفك لتحديد الخطة العلاجية الأنسب لاحتياجاتك.",
      },
    },
    {
      image: "/images/treatments/acne-treatment-process-2.jpg",
      title: {
        en: "Skin Preparation",
        ar: "تحضير البشرة",
      },
      description: {
        en: "Your skin is thoroughly cleansed and prepared to ensure a safe, comfortable, and effective treatment experience.",
        ar: "يتم تنظيف البشرة وتحضيرها بعناية لضمان جلسة علاجية آمنة ومريحة وفعالة.",
      },
    },
    {
      image: "/images/treatments/scar-treatment-process-3.jpg",
      title: {
        en: "Targeted Scar Treatment",
        ar: "العلاج الموجه للندبات",
      },
      description: {
        en: "Advanced treatment techniques are applied according to your skin condition to stimulate collagen production, improve skin texture, and reduce the appearance of scars.",
        ar: "يتم تطبيق تقنيات علاجية متطورة وفقًا لحالة بشرتك لتحفيز إنتاج الكولاجين، وتحسين ملمس البشرة، وتقليل مظهر الندبات.",
      },
    },
    {
      image: "/images/treatments/hydra-facial-process-4.jpg",
      title: {
        en: "Recovery & Skin Care",
        ar: "التعافي والعناية بالبشرة",
      },
      description: {
        en: "The treatment concludes with personalized aftercare guidance, soothing skincare products, and protective recommendations to support healing and maintain long-lasting results.",
        ar: "تُختتم الجلسة بإرشادات مخصصة للعناية اللاحقة، مع استخدام منتجات مهدئة وتوصيات وقائية لدعم التعافي والحفاظ على نتائج تدوم لفترة أطول.",
      },
    },
  ],
    faq: [
    {
      id: "scar-treatment-types",
      question: {
        en: "What types of scars can be treated?",
        ar: "ما أنواع الندبات التي يمكن علاجها؟",
      },
      answer: {
        en: "Scar Treatment can help improve the appearance of acne scars, minor injury scars, and uneven skin texture. The most suitable treatment approach depends on the type, depth, and condition of the scar.",
        ar: "يساعد علاج الندبات على تحسين مظهر آثار حب الشباب والندبات الناتجة عن الإصابات البسيطة وعدم تجانس ملمس البشرة. ويعتمد العلاج الأنسب على نوع الندبة وعمقها وحالتها.",
      },
    },
    {
      id: "scar-treatment-remove",
      question: {
        en: "Can Scar Treatment completely remove scars?",
        ar: "هل يمكن لعلاج الندبات إزالة الندبات بالكامل؟",
      },
      answer: {
        en: "Scar Treatment is designed to reduce the visibility of scars and improve overall skin texture. Results vary depending on the scar type, skin condition, and your individual response to treatment.",
        ar: "يهدف علاج الندبات إلى تقليل مظهر الندبات وتحسين ملمس البشرة بشكل عام، وتختلف النتائج حسب نوع الندبة وحالة البشرة واستجابة كل شخص للعلاج.",
      },
    },
    {
      id: "scar-treatment-skin-types",
      question: {
        en: "Is Scar Treatment suitable for all skin types?",
        ar: "هل علاج الندبات مناسب لجميع أنواع البشرة؟",
      },
      answer: {
        en: "Yes. Scar Treatment can be customized for different skin types after a professional skin assessment to ensure safe and effective results.",
        ar: "نعم، يمكن تخصيص علاج الندبات ليناسب مختلف أنواع البشرة بعد إجراء تقييم احترافي للبشرة لضمان علاج آمن وفعال.",
      },
    },
    {
      id: "scar-treatment-sessions",
      question: {
        en: "How many sessions are required for visible results?",
        ar: "كم عدد الجلسات المطلوبة للحصول على نتائج ملحوظة؟",
      },
      answer: {
        en: "The number of sessions depends on the severity of the scars and your skin's individual response. Our specialists will recommend a personalized treatment plan during your consultation.",
        ar: "يعتمد عدد الجلسات على شدة الندبات واستجابة بشرتك للعلاج، وسيقوم أخصائيو البشرة بوضع خطة علاجية مخصصة خلال الاستشارة.",
      },
    },
    {
      id: "scar-treatment-downtime",
      question: {
        en: "Is there any downtime after Scar Treatment?",
        ar: "هل توجد فترة تعافٍ بعد علاج الندبات؟",
      },
      answer: {
        en: "Downtime varies depending on the treatment method used. Our specialists will provide detailed aftercare instructions to support healing and achieve the best possible results.",
        ar: "تعتمد فترة التعافي على التقنية العلاجية المستخدمة، وسيقدم لك أخصائيو البشرة تعليمات مفصلة للعناية اللاحقة لدعم التعافي وتحقيق أفضل النتائج.",
      },
    },
    {
      id: "scar-treatment-combination",
      question: {
        en: "Can Scar Treatment be combined with other skincare treatments?",
        ar: "هل يمكن دمج علاج الندبات مع علاجات أخرى للعناية بالبشرة؟",
      },
      answer: {
        en: "Yes. Depending on your skin concerns and treatment goals, Scar Treatment can be combined with other skin rejuvenation procedures to enhance overall results.",
        ar: "نعم، يمكن دمج علاج الندبات مع علاجات أخرى لتجديد البشرة وفقًا لاحتياجات بشرتك وأهداف العلاج لتحقيق نتائج أفضل.",
      },
    },
    {
      id: "scar-treatment-maintenance",
      question: {
        en: "How can I maintain my results after treatment?",
        ar: "كيف يمكنني الحفاظ على النتائج بعد العلاج؟",
      },
      answer: {
        en: "Maintaining a consistent skincare routine, protecting your skin from excessive sun exposure, using sunscreen daily, and following your specialist's recommendations can help preserve your treatment results.",
        ar: "يساعد الالتزام بروتين منتظم للعناية بالبشرة، واستخدام واقي الشمس يوميًا، وحماية البشرة من التعرض المفرط للشمس، واتباع تعليمات الأخصائي على الحفاظ على نتائج العلاج لفترة أطول.",
      },
    },
  ],
},
{
  slug: "pigmentation-treatment",
  categorySlug: "advanced-skin-care",

  title: {
    en: "Pigmentation Treatment",
    ar: "علاج التصبغات",
  },

  description: {
    en: "Restore balance and radiance to your skin with our advanced Pigmentation Treatment, designed to reduce dark spots, improve uneven skin tone, and reveal a clearer, smoother, and more luminous complexion.",
    ar: "استعيدي توازن وإشراقة بشرتك مع علاج التصبغات المتطور، المصمم لتقليل البقع الداكنة، وتحسين توحيد لون البشرة، والكشف عن بشرة أكثر صفاءً ونعومة وإشراقًا.",
  },

  image: "/images/treatments/pigmentation-treatment.jpg",

  durationMinutes: "45 - 60",

  skinType: {
    en: "All Skin Types",
    ar: "جميع أنواع البشرة",
  },

  detailDescription: {
    en: "Our advanced Pigmentation Treatment is designed to address uneven skin tone, dark spots, sun damage, and discoloration using personalized skincare techniques and modern skin rejuvenation solutions. By targeting excess pigmentation while supporting healthy skin renewal, the treatment helps restore a brighter, smoother, and more even complexion with minimal discomfort and no downtime.",
    ar: "صُمم علاج التصبغات المتطور لدينا لمعالجة تفاوت لون البشرة، والبقع الداكنة، وآثار أشعة الشمس، والتصبغات باستخدام تقنيات مخصصة للعناية بالبشرة وحلول حديثة لتجديدها. من خلال استهداف التصبغات الزائدة ودعم تجدد البشرة الطبيعي، يساعد العلاج على استعادة بشرة أكثر إشراقًا ونعومة وتجانسًا مع أقل قدر من الانزعاج ودون الحاجة إلى فترة تعافٍ.",
  },

  sessions: "4 - 6",

  procedureType: {
    en: "Non-Invasive",
    ar: "غير جراحي",
  },
    overview: {
    en: "Pigmentation Treatment is a personalized skin rejuvenation procedure designed to improve the appearance of dark spots, uneven skin tone, sun damage, and other pigmentation concerns. Using advanced skincare techniques and customized treatment plans, it helps reduce excess pigmentation, promote healthy skin renewal, and restore a brighter, smoother, and more even-looking complexion.",
    ar: "علاج التصبغات هو إجراء مخصص لتجديد البشرة يهدف إلى تحسين مظهر البقع الداكنة، وتفاوت لون البشرة، وآثار أشعة الشمس، ومختلف مشكلات التصبغات. يعتمد العلاج على تقنيات متطورة وخطط علاجية مخصصة للمساعدة في تقليل التصبغات الزائدة، وتعزيز تجدد البشرة، واستعادة بشرة أكثر إشراقًا ونعومة وتجانسًا.",
  },

  overviewImage: "/images/treatments/pigmentation-treatment-overview.png",

  benefits: [
    {
      icon: "/images/icons/deep-cleaning.svg",
      title: {
        en: "Reduces Dark Spots",
        ar: "تقليل البقع الداكنة",
      },
      description: {
        en: "Helps improve the appearance of pigmentation, sun spots, and uneven discoloration for clearer-looking skin.",
        ar: "يساعد على تحسين مظهر التصبغات والبقع الناتجة عن الشمس وتفاوت اللون للحصول على بشرة أكثر صفاءً.",
      },
    },
    {
      icon: "/images/icons/intense-hydration.svg",
      title: {
        en: "Evens Skin Tone",
        ar: "توحيد لون البشرة",
      },
      description: {
        en: "Promotes a more balanced and uniform complexion by reducing visible uneven pigmentation.",
        ar: "يساعد على توحيد لون البشرة وتقليل تفاوت التصبغات للحصول على مظهر أكثر تجانسًا.",
      },
    },
    {
      icon: "/images/icons/bright-complexion.svg",
      title: {
        en: "Enhances Skin Brightness",
        ar: "تعزيز إشراقة البشرة",
      },
      description: {
        en: "Reveals a fresher, brighter, and naturally radiant complexion by improving overall skin clarity.",
        ar: "يكشف عن بشرة أكثر نضارة وإشراقًا من خلال تحسين صفاء البشرة ومظهرها العام.",
      },
    },
    {
      icon: "/images/icons/improved-textures.svg",
      title: {
        en: "Improves Skin Texture",
        ar: "تحسين ملمس البشرة",
      },
      description: {
        en: "Supports smoother, healthier skin by encouraging natural skin renewal and surface refinement.",
        ar: "يساعد على تحسين ملمس البشرة من خلال تعزيز تجددها الطبيعي ومنحها مظهرًا أكثر نعومة وصحة.",
      },
    },
    {
      icon: "/images/icons/skin-nourishment.svg",
      title: {
        en: "Targets Sun Damage",
        ar: "معالجة آثار الشمس",
      },
      description: {
        en: "Helps improve the visible effects of sun damage and environmental stress for healthier-looking skin.",
        ar: "يساعد على تحسين المظهر الناتج عن أضرار أشعة الشمس والعوامل البيئية للحصول على بشرة أكثر صحة.",
      },
    },
    {
      icon: "/images/icons/healthy-skin.svg",
      title: {
        en: "Skin Maintenance",
        ar: "الحفاظ على صحة البشرة",
      },
      description: {
        en: "Includes personalized skincare guidance to help maintain a clearer, brighter, and more balanced complexion over time.",
        ar: "يتضمن إرشادات مخصصة للعناية بالبشرة للمساعدة في الحفاظ على بشرة أكثر صفاءً وإشراقًا وتوازنًا على المدى الطويل.",
      },
    },
  ],
    processHeading: {
    en: "Your Journey to",
    ar: "رحلتك نحو",
  },

  processHeadingHighlight: {
    en: "Brighter Skin",
    ar: "بشرة أكثر إشراقًا",
  },

  processSubheading: {
    en: "Every Pigmentation Treatment is tailored to your unique skin condition, pigmentation concerns, and aesthetic goals to achieve a brighter, more even complexion.",
    ar: "يتم تخصيص كل جلسة لعلاج التصبغات وفقًا لحالة بشرتك ومشكلات التصبغات وأهدافك الجمالية للحصول على بشرة أكثر إشراقًا وتجانسًا.",
  },

  process: [
    {
      image: "/images/treatments/hydra-facial-process-1.jpg",
      title: {
        en: "Consultation",
        ar: "الاستشارة",
      },
      description: {
        en: "We begin with a detailed consultation to evaluate your pigmentation concerns, skin history, lifestyle, and desired results before creating a personalized treatment plan.",
        ar: "نبدأ باستشارة تفصيلية لتقييم مشكلات التصبغات، وتاريخ البشرة، ونمط الحياة، والنتائج التي ترغبين في تحقيقها قبل إعداد خطة علاج مخصصة.",
      },
    },
    {
      image: "/images/treatments/pigmentation-treatment-process-2.jpg",
      title: {
        en: "Skin Preparation",
        ar: "تحضير البشرة",
      },
      description: {
        en: "Your skin is gently cleansed and prepared to remove impurities and create the ideal foundation for effective pigmentation treatment.",
        ar: "يتم تنظيف البشرة وتحضيرها بلطف لإزالة الشوائب وتهيئتها بالشكل المثالي قبل بدء علاج التصبغات.",
      },
    },
    {
      image: "/images/treatments/pigmentation-treatment-process-3.jpg",
      title: {
        en: "Pigmentation Treatment",
        ar: "علاج التصبغات",
      },
      description: {
        en: "Advanced skincare techniques and professional treatment solutions are carefully applied to reduce visible pigmentation, even skin tone, and encourage healthy skin renewal.",
        ar: "يتم استخدام تقنيات متطورة وحلول علاجية احترافية بعناية لتقليل التصبغات الظاهرة، وتوحيد لون البشرة، وتحفيز تجددها الطبيعي.",
      },
    },
    {
      image: "/images/treatments/hydra-facial-process-4.jpg",
      title: {
        en: "Protection & After Care",
        ar: "الحماية والعناية اللاحقة",
      },
      description: {
        en: "The treatment concludes with nourishing skincare products, SPF protection, and personalized aftercare advice to help maintain brighter, healthier-looking skin.",
        ar: "تُختتم الجلسة باستخدام منتجات مغذية للبشرة مع واقي شمس وإرشادات مخصصة للعناية اللاحقة للمساعدة في الحفاظ على بشرة أكثر إشراقًا وصحة.",
      },
    },
  ],
    faq: [
    {
      id: "pigmentation-treatment-causes",
      question: {
        en: "What causes skin pigmentation?",
        ar: "ما أسباب تصبغات البشرة؟",
      },
      answer: {
        en: "Skin pigmentation can occur due to several factors, including sun exposure, hormonal changes, aging, skin inflammation, acne marks, and environmental influences. A professional skin assessment helps identify the most appropriate treatment approach.",
        ar: "قد تحدث تصبغات البشرة نتيجة عدة عوامل، مثل التعرض لأشعة الشمس، والتغيرات الهرمونية، والتقدم في العمر، والتهابات البشرة، وآثار حب الشباب، والعوامل البيئية. ويساعد تقييم البشرة لدى الأخصائي في تحديد العلاج الأنسب.",
      },
    },
    {
      id: "pigmentation-treatment-skin-types",
      question: {
        en: "Is Pigmentation Treatment suitable for all skin types?",
        ar: "هل علاج التصبغات مناسب لجميع أنواع البشرة؟",
      },
      answer: {
        en: "Yes. Pigmentation Treatment can be customized for different skin types and pigmentation concerns following a professional skin assessment.",
        ar: "نعم، يمكن تخصيص علاج التصبغات ليناسب مختلف أنواع البشرة ومشكلات التصبغ المختلفة بعد إجراء تقييم احترافي للبشرة.",
      },
    },
    {
      id: "pigmentation-treatment-sessions",
      question: {
        en: "How many sessions are needed to see results?",
        ar: "كم عدد الجلسات المطلوبة للحصول على نتائج ملحوظة؟",
      },
      answer: {
        en: "The number of sessions depends on the type and severity of pigmentation as well as your skin's response to treatment. Our specialists will recommend a personalized treatment plan during your consultation.",
        ar: "يعتمد عدد الجلسات على نوع التصبغات وشدتها واستجابة بشرتك للعلاج، وسيقوم أخصائيو البشرة بوضع خطة علاجية مخصصة خلال الاستشارة.",
      },
    },
    {
      id: "pigmentation-treatment-dark-spots",
      question: {
        en: "Can Pigmentation Treatment completely remove dark spots?",
        ar: "هل يمكن لعلاج التصبغات إزالة البقع الداكنة بالكامل؟",
      },
      answer: {
        en: "Pigmentation Treatment is designed to reduce the appearance of dark spots and improve overall skin tone. Results vary depending on your skin condition, pigmentation type, and individual response to treatment.",
        ar: "يهدف علاج التصبغات إلى تقليل مظهر البقع الداكنة وتحسين توحيد لون البشرة، وتختلف النتائج حسب حالة البشرة ونوع التصبغات واستجابة كل شخص للعلاج.",
      },
    },
    {
      id: "pigmentation-treatment-downtime",
      question: {
        en: "Is there any downtime after Pigmentation Treatment?",
        ar: "هل توجد فترة تعافٍ بعد علاج التصبغات؟",
      },
      answer: {
        en: "Downtime depends on the treatment method used. Most procedures involve minimal recovery time, and our specialists will provide detailed aftercare instructions to support optimal healing.",
        ar: "تعتمد فترة التعافي على التقنية العلاجية المستخدمة، ومعظم الإجراءات تتطلب وقتًا قصيرًا للتعافي، وسيقدم لك الأخصائي تعليمات مفصلة للعناية اللاحقة.",
      },
    },
    {
      id: "pigmentation-treatment-return",
      question: {
        en: "Can pigmentation come back after treatment?",
        ar: "هل يمكن أن تعود التصبغات بعد العلاج؟",
      },
      answer: {
        en: "Pigmentation may return if the skin is not properly protected. Daily sunscreen use, a consistent skincare routine, and following professional recommendations help maintain long-lasting results.",
        ar: "قد تعود التصبغات إذا لم تتم حماية البشرة بشكل صحيح. يساعد استخدام واقي الشمس يوميًا، والالتزام بروتين عناية مناسب، واتباع تعليمات الأخصائي في الحفاظ على النتائج لفترة أطول.",
      },
    },
    {
      id: "pigmentation-treatment-combination",
      question: {
        en: "Can Pigmentation Treatment be combined with other skin treatments?",
        ar: "هل يمكن دمج علاج التصبغات مع علاجات أخرى للبشرة؟",
      },
      answer: {
        en: "Yes. Depending on your skin condition and aesthetic goals, Pigmentation Treatment can be combined with other skin rejuvenation procedures to achieve enhanced overall results.",
        ar: "نعم، يمكن دمج علاج التصبغات مع إجراءات أخرى لتجديد البشرة وفقًا لحالة بشرتك وأهدافك الجمالية لتحقيق نتائج أفضل وأكثر شمولاً.",
      },
    },
  ],
},
{
  slug: "skin-brightening-rejuvenation",
  categorySlug: "advanced-skin-care",

  title: {
    en: "Skin Brightening & Rejuvenation",
    ar: "تفتيح وتجديد البشرة",
  },

  description: {
    en: "Revitalize tired and dull-looking skin with our Skin Brightening & Rejuvenation treatment, designed to enhance your natural glow, improve skin texture, and restore a healthier, more youthful-looking complexion.",
    ar: "استعيدي نضارة بشرتك الباهتة والمتعبة مع علاج تفتيح وتجديد البشرة المصمم لتعزيز إشراقتك الطبيعية، وتحسين ملمس البشرة، واستعادة مظهر أكثر صحة وشبابًا.",
  },

  image: "/images/treatments/skin-brightening-rejuvenation.jpg",

  durationMinutes: "45 - 60",

  skinType: {
    en: "All Skin Types",
    ar: "جميع أنواع البشرة",
  },

  detailDescription: {
    en: "Our Skin Brightening & Rejuvenation treatment combines advanced skincare techniques with nourishing professional solutions to improve skin clarity, refine texture, and restore a naturally radiant complexion. The treatment helps reduce dullness, promote healthy skin renewal, and leave your skin looking brighter, smoother, and more youthful with minimal discomfort and no downtime.",
    ar: "يجمع علاج تفتيح وتجديد البشرة بين تقنيات العناية المتطورة والحلول الاحترافية المغذية لتحسين صفاء البشرة، وتنعيم ملمسها، واستعادة إشراقتها الطبيعية. يساعد العلاج على تقليل البهتان، وتعزيز تجدد البشرة الصحي، ليمنحك بشرة أكثر إشراقًا ونعومة وشبابًا مع أقل قدر من الانزعاج ودون الحاجة إلى فترة تعافٍ.",
  },

  sessions: "4 - 6",

  procedureType: {
    en: "Non-Invasive",
    ar: "غير جراحي",
  },
    overview: {
    en: "Skin Brightening & Rejuvenation is an advanced skincare treatment designed to improve dullness, uneven skin tone, and visible signs of skin fatigue. By combining professional skincare techniques with nourishing ingredients, the treatment enhances hydration, supports natural skin renewal, and restores a brighter, smoother, and healthier-looking complexion.",
    ar: "تفتيح وتجديد البشرة هو علاج متطور للعناية بالبشرة يهدف إلى تحسين بهتان البشرة، وتفاوت لونها، وعلامات الإرهاق الظاهرة. يجمع العلاج بين تقنيات احترافية ومكونات مغذية لتعزيز الترطيب، ودعم التجدد الطبيعي للبشرة، واستعادة بشرة أكثر إشراقًا ونعومة وصحة.",
  },

  overviewImage: "/images/treatments/skin-brightening-rejuvenation-overview.png",

  benefits: [
    {
      icon: "/images/icons/deep-cleaning.svg",
      title: {
        en: "Brighter Complexion",
        ar: "بشرة أكثر إشراقًا",
      },
      description: {
        en: "Helps reduce dullness and enhances your skin's natural radiance for a fresher, healthier appearance.",
        ar: "يساعد على تقليل بهتان البشرة وتعزيز إشراقتها الطبيعية للحصول على مظهر أكثر نضارة وصحة.",
      },
    },
    {
      icon: "/images/icons/intense-hydration.svg",
      title: {
        en: "Evens Skin Tone",
        ar: "توحيد لون البشرة",
      },
      description: {
        en: "Improves the appearance of uneven skin tone and promotes a more balanced, uniform complexion.",
        ar: "يساعد على تحسين تفاوت لون البشرة ويمنحها مظهرًا أكثر تجانسًا وتوازنًا.",
      },
    },
    {
      icon: "/images/icons/bright-complexion.svg",
      title: {
        en: "Deep Skin Renewal",
        ar: "تجديد عميق للبشرة",
      },
      description: {
        en: "Supports the skin's natural renewal process to reveal fresher, healthier, and revitalized skin.",
        ar: "يعزز عملية التجدد الطبيعية للبشرة ليكشف عن بشرة أكثر نضارة وصحة وحيوية.",
      },
    },
    {
      icon: "/images/icons/improved-textures.svg",
      title: {
        en: "Improved Skin Texture",
        ar: "تحسين ملمس البشرة",
      },
      description: {
        en: "Helps smooth rough skin texture and creates a softer, more refined, and youthful-looking complexion.",
        ar: "يساعد على تنعيم ملمس البشرة الخشن ويمنحها مظهرًا أكثر نعومة وصفاءً وشبابًا.",
      },
    },
    {
      icon: "/images/icons/skin-nourishment.svg",
      title: {
        en: "Enhanced Hydration",
        ar: "ترطيب معزز",
      },
      description: {
        en: "Restores the skin's moisture balance to improve softness, comfort, and overall skin health.",
        ar: "يعيد توازن رطوبة البشرة لتحسين نعومتها وراحتها وصحتها بشكل عام.",
      },
    },
    {
      icon: "/images/icons/healthy-skin.svg",
      title: {
        en: "Youthful Skin Appearance",
        ar: "مظهر أكثر شبابًا",
      },
      description: {
        en: "Improves overall skin vitality while promoting a naturally radiant, refreshed, and youthful-looking complexion.",
        ar: "يعزز حيوية البشرة ويمنحها مظهرًا طبيعيًا أكثر إشراقًا وانتعاشًا وشبابًا.",
      },
    },
  ],
    processHeading: {
    en: "Your Journey to",
    ar: "رحلتك نحو",
  },

  processHeadingHighlight: {
    en: "Radiant, Rejuvenated Skin",
    ar: "بشرة مشرقة ومتجددة",
  },

  processSubheading: {
    en: "Every Skin Brightening & Rejuvenation treatment is personalized to address your skin concerns, restore natural radiance, and reveal a healthier, more youthful-looking complexion.",
    ar: "يتم تخصيص كل جلسة لتفتيح وتجديد البشرة وفقًا لاحتياجات بشرتك لاستعادة إشراقتها الطبيعية والكشف عن بشرة أكثر صحة وشبابًا.",
  },

  process: [
    {
      image: "/images/treatments/hydra-facial-process-1.jpg",
      title: {
        en: "Consultation",
        ar: "الاستشارة",
      },
      description: {
        en: "We begin with a detailed consultation to understand your skin concerns, pigmentation, lifestyle, skincare history, and desired results before creating a personalized treatment plan.",
        ar: "نبدأ باستشارة تفصيلية لفهم مشكلات بشرتك، والتصبغات، ونمط حياتك، وتاريخ العناية بالبشرة، والنتائج التي ترغبين في تحقيقها قبل إعداد خطة علاج مخصصة.",
      },
    },
    {
      image: "/images/treatments/skin-brightening-rejuvenation-process-2.jpg",
      title: {
        en: "Skin Preparation",
        ar: "تحضير البشرة",
      },
      description: {
        en: "Your skin is gently cleansed and prepared to remove impurities and create the ideal foundation for active ingredients to penetrate effectively.",
        ar: "يتم تنظيف البشرة وتحضيرها بلطف لإزالة الشوائب وتهيئتها لامتصاص المكونات الفعالة وتحقيق أفضل النتائج.",
      },
    },
    {
      image: "/images/treatments/skin-brightening-rejuvenation-process-3.jpg",
      title: {
        en: "Brightening & Rejuvenation Treatment",
        ar: "علاج التفتيح وتجديد البشرة",
      },
      description: {
        en: "Customized skincare solutions and advanced rejuvenation techniques are applied to brighten the complexion, improve skin texture, and support healthy skin renewal.",
        ar: "يتم استخدام حلول مخصصة للعناية بالبشرة وتقنيات متقدمة لتجديدها بهدف تفتيح البشرة، وتحسين ملمسها، ودعم عملية التجدد الطبيعي.",
      },
    },
    {
      image: "/images/treatments/skin-brightening-rejuvenation-process-4.jpg",
      title: {
        en: "Hydration & Skin Protection",
        ar: "الترطيب وحماية البشرة",
      },
      description: {
        en: "The treatment concludes with nourishing moisturizers, protective skincare products, and personalized aftercare advice to maintain hydration, radiance, and long-lasting results.",
        ar: "تُختتم الجلسة باستخدام مرطبات مغذية ومنتجات حماية للبشرة مع إرشادات مخصصة للعناية اللاحقة للحفاظ على الترطيب والإشراقة والنتائج طويلة الأمد.",
      },
    },
  ],
    faq: [
    {
      id: "skin-brightening-rejuvenation-what-is",
      question: {
        en: "What is Skin Brightening & Rejuvenation treatment?",
        ar: "ما هو علاج تفتيح وتجديد البشرة؟",
      },
      answer: {
        en: "Skin Brightening & Rejuvenation is a professional skincare treatment designed to improve dullness, uneven skin tone, hydration, and overall skin radiance, revealing a healthier and more refreshed complexion.",
        ar: "تفتيح وتجديد البشرة هو علاج احترافي للعناية بالبشرة يهدف إلى تحسين بهتان البشرة، وتفاوت لونها، وترطيبها، وتعزيز إشراقتها العامة للحصول على مظهر أكثر صحة ونضارة.",
      },
    },
    {
      id: "skin-brightening-rejuvenation-skin-types",
      question: {
        en: "Is this treatment suitable for all skin types?",
        ar: "هل هذا العلاج مناسب لجميع أنواع البشرة؟",
      },
      answer: {
        en: "Yes. The treatment can be customized for different skin types according to your individual skin concerns, condition, and aesthetic goals.",
        ar: "نعم، يمكن تخصيص العلاج ليناسب مختلف أنواع البشرة وفقًا لحالة بشرتك واحتياجاتها وأهدافك الجمالية.",
      },
    },
    {
      id: "skin-brightening-rejuvenation-lightening",
      question: {
        en: "Will the treatment make my skin lighter?",
        ar: "هل سيجعل هذا العلاج لون بشرتي أفتح؟",
      },
      answer: {
        en: "No. The goal of the treatment is not to change your natural skin tone, but to restore brightness, improve skin clarity, and enhance your skin's natural glow.",
        ar: "لا، لا يهدف العلاج إلى تغيير لون بشرتك الطبيعي، بل إلى استعادة إشراقتها، وتحسين صفائها، وتعزيز نضارتها الطبيعية.",
      },
    },
    {
      id: "skin-brightening-rejuvenation-sessions",
      question: {
        en: "How many sessions are recommended?",
        ar: "كم عدد الجلسات الموصى بها؟",
      },
      answer: {
        en: "The number of sessions depends on your skin condition and desired results. Our specialists will recommend a personalized treatment plan during your consultation.",
        ar: "يعتمد عدد الجلسات على حالة بشرتك والنتائج التي ترغبين في تحقيقها، وسيحدد أخصائيو البشرة الخطة العلاجية المناسبة خلال الاستشارة.",
      },
    },
    {
      id: "skin-brightening-rejuvenation-downtime",
      question: {
        en: "Is there any downtime after the treatment?",
        ar: "هل توجد فترة تعافٍ بعد العلاج؟",
      },
      answer: {
        en: "Most Skin Brightening & Rejuvenation treatments are non-invasive and involve little to no downtime, allowing you to return to your daily routine immediately.",
        ar: "معظم جلسات تفتيح وتجديد البشرة غير جراحية ولا تتطلب فترة تعافٍ، مما يسمح لك بالعودة إلى أنشطتك اليومية مباشرة بعد العلاج.",
      },
    },
    {
      id: "skin-brightening-rejuvenation-dull-skin",
      question: {
        en: "Can this treatment help with dull and tired-looking skin?",
        ar: "هل يساعد هذا العلاج في علاج البشرة الباهتة والمتعبة؟",
      },
      answer: {
        en: "Yes. The treatment helps refresh the complexion, improve hydration, support healthy skin renewal, and restore a naturally brighter and more radiant appearance.",
        ar: "نعم، يساعد العلاج على إنعاش البشرة، وتعزيز ترطيبها، ودعم تجددها الطبيعي، واستعادة مظهر أكثر إشراقًا وحيوية.",
      },
    },
    {
      id: "skin-brightening-rejuvenation-maintenance",
      question: {
        en: "How can I maintain my results after treatment?",
        ar: "كيف يمكنني الحفاظ على النتائج بعد العلاج؟",
      },
      answer: {
        en: "Using the recommended skincare products, applying sunscreen daily, maintaining a consistent skincare routine, and following your specialist's advice will help preserve your results for longer.",
        ar: "يساعد استخدام منتجات العناية الموصى بها، ووضع واقي الشمس يوميًا، والالتزام بروتين منتظم للعناية بالبشرة، واتباع تعليمات الأخصائي على الحفاظ على النتائج لأطول فترة ممكنة.",
      },
    },
  ],
},
{
  slug: "laser-skin-treatments",
  categorySlug: "laser-treatment",

  title: {
    en: "Laser Skin Treatments",
    ar: "علاجات البشرة بالليزر",
  },

  description: {
    en: "Experience the power of advanced laser technology designed to improve skin quality, target multiple skin concerns, and restore a smoother, brighter, and more youthful-looking complexion.",
    ar: "اكتشف قوة تقنية الليزر المتطورة المصممة لتحسين جودة البشرة، ومعالجة مختلف مشكلاتها، واستعادة بشرة أكثر نعومة وإشراقًا وشبابًا.",
  },

  image: "/images/treatments/laser-skin-treatments.jpg",

  durationMinutes: "45 - 60",

  skinType: {
    en: "Based on Skin Assessment",
    ar: "حسب تقييم البشرة",
  },

  detailDescription: {
    en: "Our Laser Skin Treatments use advanced laser technology to safely and precisely address a wide range of skin concerns, including pigmentation, uneven skin tone, fine lines, acne marks, and overall skin texture. By stimulating the skin's natural renewal process, these customized treatments help reveal smoother, clearer, brighter, and healthier-looking skin with minimal discomfort and little to no downtime.",
    ar: "تعتمد علاجات البشرة بالليزر لدينا على تقنية ليزر متطورة لمعالجة مجموعة واسعة من مشكلات البشرة بدقة وأمان، بما في ذلك التصبغات، وتفاوت لون البشرة، والخطوط الدقيقة، وآثار حب الشباب، وتحسين ملمس البشرة. ومن خلال تحفيز عملية التجدد الطبيعية للبشرة، تساعد هذه العلاجات المخصصة على استعادة بشرة أكثر نعومة وصفاءً وإشراقًا وصحة مع أقل قدر من الانزعاج وفترة تعافٍ محدودة أو معدومة.",
  },

  sessions: "4 - 6",

  procedureType: {
    en: "Non-Invasive",
    ar: "غير جراحي",
  },
    overview: {
    en: "Laser Skin Treatments are advanced aesthetic procedures that use controlled laser energy to target a variety of skin concerns, including uneven texture, pigmentation, fine lines, acne marks, and other skin imperfections. By stimulating the skin's natural renewal process and collagen production, these treatments help restore smoother, brighter, firmer, and healthier-looking skin.",
    ar: "علاجات البشرة بالليزر هي إجراءات تجميلية متطورة تستخدم طاقة الليزر الموجهة لمعالجة مجموعة متنوعة من مشكلات البشرة، بما في ذلك عدم تجانس الملمس، والتصبغات، والخطوط الدقيقة، وآثار حب الشباب، وغيرها من عيوب البشرة. ومن خلال تحفيز عملية التجدد الطبيعية وإنتاج الكولاجين، تساعد هذه العلاجات على استعادة بشرة أكثر نعومة وإشراقًا وتماسكًا وصحة.",
  },

  overviewImage: "/images/treatments/laser-skin-treatments-overview.png",

  benefits: [
    {
      icon: "/images/icons/deep-cleaning.svg",
      title: {
        en: "Improves Skin Texture",
        ar: "تحسين ملمس البشرة",
      },
      description: {
        en: "Helps smooth uneven skin texture and refine the skin's surface for a softer, healthier-looking complexion.",
        ar: "يساعد على تنعيم ملمس البشرة غير المتجانس وتحسين سطحها للحصول على بشرة أكثر نعومة وصحة.",
      },
    },
    {
      icon: "/images/icons/intense-hydration.svg",
      title: {
        en: "Reduces Pigmentation Concerns",
        ar: "تقليل مشكلات التصبغات",
      },
      description: {
        en: "Targets visible pigmentation, dark spots, and uneven skin tone to reveal a clearer, more balanced complexion.",
        ar: "يستهدف التصبغات والبقع الداكنة وتفاوت لون البشرة للحصول على بشرة أكثر صفاءً وتجانسًا.",
      },
    },
    {
      icon: "/images/icons/bright-complexion.svg",
      title: {
        en: "Stimulates Collagen Production",
        ar: "تحفيز إنتاج الكولاجين",
      },
      description: {
        en: "Encourages natural collagen renewal to improve skin firmness, elasticity, and overall skin health.",
        ar: "يعزز إنتاج الكولاجين الطبيعي لتحسين تماسك البشرة ومرونتها وصحتها بشكل عام.",
      },
    },
    {
      icon: "/images/icons/improved-textures.svg",
      title: {
        en: "Reduces Signs of Aging",
        ar: "تقليل علامات التقدم في العمر",
      },
      description: {
        en: "Helps soften the appearance of fine lines and other visible skin imperfections for a more youthful look.",
        ar: "يساعد على تقليل مظهر الخطوط الدقيقة وغيرها من علامات الشيخوخة للحصول على مظهر أكثر شبابًا.",
      },
    },
    {
      icon: "/images/icons/skin-nourishment.svg",
      title: {
        en: "Enhances Skin Clarity",
        ar: "تعزيز صفاء البشرة",
      },
      description: {
        en: "Promotes a brighter, clearer, and more even complexion by improving overall skin quality.",
        ar: "يعزز صفاء البشرة وإشراقتها وتجانسها من خلال تحسين جودتها بشكل عام.",
      },
    },
    {
      icon: "/images/icons/healthy-skin.svg",
      title: {
        en: "Long-Lasting Skin Improvement",
        ar: "تحسين طويل الأمد للبشرة",
      },
      description: {
        en: "Supports continuous skin renewal with a personalized treatment plan to maintain healthier, smoother, and more radiant skin over time.",
        ar: "يدعم تجدد البشرة المستمر من خلال خطة علاجية مخصصة للحفاظ على بشرة أكثر صحة ونعومة وإشراقًا على المدى الطويل.",
      },
    },
  ],
    processHeading: {
    en: "Your Journey to",
    ar: "رحلتك نحو",
  },

  processHeadingHighlight: {
    en: "Renewed Skin",
    ar: "بشرة متجددة",
  },

  processSubheading: {
    en: "Every Laser Skin Treatment is performed with precision and personalized care, combining advanced laser technology with professional expertise to restore healthier, smoother, and more radiant skin.",
    ar: "يتم إجراء كل جلسة علاج للبشرة بالليزر بدقة وعناية مخصصة، مع الجمع بين تقنية الليزر المتطورة والخبرة الاحترافية لاستعادة بشرة أكثر صحة ونعومة وإشراقًا.",
  },

  process: [
    {
      image: "/images/treatments/hydra-facial-process-1.jpg",
      title: {
        en: "Consultation",
        ar: "الاستشارة",
      },
      description: {
        en: "We begin with a comprehensive consultation to evaluate your skin type, concerns, medical history, and desired results before creating a personalized laser treatment plan.",
        ar: "نبدأ باستشارة شاملة لتقييم نوع بشرتك، ومشكلاتها، وتاريخك الطبي، والنتائج التي ترغبين في تحقيقها قبل إعداد خطة علاج بالليزر مخصصة.",
      },
    },
    {
      image: "/images/treatments/laser-skin-treatments-process-2.jpg",
      title: {
        en: "Skin Preparation",
        ar: "تحضير البشرة",
      },
      description: {
        en: "Your skin is carefully cleansed and prepared to ensure a safe, comfortable, and effective laser treatment experience.",
        ar: "يتم تنظيف البشرة وتحضيرها بعناية لضمان جلسة علاج بالليزر آمنة ومريحة وفعالة.",
      },
    },
    {
      image: "/images/treatments/laser-skin-treatments-process-3.jpg",
      title: {
        en: "Laser Skin Treatment",
        ar: "العلاج بالليزر",
      },
      description: {
        en: "Advanced laser technology is applied with precision to target your specific skin concerns, stimulate collagen production, and promote natural skin rejuvenation.",
        ar: "يتم استخدام تقنية الليزر المتطورة بدقة لاستهداف مشكلات البشرة المحددة، وتحفيز إنتاج الكولاجين، وتعزيز التجدد الطبيعي للبشرة.",
      },
    },
    {
      image: "/images/treatments/skin-brightening-rejuvenation-process-4.jpg",
      title: {
        en: "Recovery & After Care",
        ar: "التعافي والعناية اللاحقة",
      },
      description: {
        en: "The treatment concludes with soothing skincare products, sun protection guidance, and personalized aftercare recommendations to support healing and maximize long-lasting results.",
        ar: "تُختتم الجلسة باستخدام منتجات مهدئة للبشرة، وإرشادات للحماية من أشعة الشمس، وتعليمات مخصصة للعناية اللاحقة لدعم التعافي والحفاظ على أفضل النتائج.",
      },
    },
  ],
    faq: [
    {
      id: "laser-skin-treatment-what-is",
      question: {
        en: "What are Laser Skin Treatments?",
        ar: "ما هي علاجات البشرة بالليزر؟",
      },
      answer: {
        en: "Laser Skin Treatments use advanced laser technology to address various skin concerns, including pigmentation, uneven texture, fine lines, acne marks, and other skin imperfections while promoting healthier, rejuvenated skin.",
        ar: "تستخدم علاجات البشرة بالليزر تقنية ليزر متطورة لمعالجة العديد من مشكلات البشرة، بما في ذلك التصبغات، وعدم تجانس الملمس، والخطوط الدقيقة، وآثار حب الشباب، وغيرها من العيوب، مع تعزيز تجدد البشرة وصحتها.",
      },
    },
    {
      id: "laser-skin-treatment-safe",
      question: {
        en: "Are Laser Skin Treatments safe?",
        ar: "هل علاجات البشرة بالليزر آمنة؟",
      },
      answer: {
        en: "Yes. Laser Skin Treatments are performed using advanced technology and are customized according to your skin type, condition, and treatment goals to ensure safe and effective results.",
        ar: "نعم، تُجرى علاجات البشرة بالليزر باستخدام تقنيات متطورة ويتم تخصيصها وفقًا لنوع بشرتك وحالتها وأهداف العلاج لضمان نتائج آمنة وفعالة.",
      },
    },
    {
      id: "laser-skin-treatment-pain",
      question: {
        en: "Does laser treatment hurt?",
        ar: "هل يسبب العلاج بالليزر الألم؟",
      },
      answer: {
        en: "Most clients experience only minimal discomfort during treatment. The sensation varies depending on the type of laser procedure being performed and your individual skin sensitivity.",
        ar: "يشعر معظم العملاء بانزعاج بسيط فقط أثناء العلاج، ويختلف الإحساس حسب نوع الليزر المستخدم ومدى حساسية البشرة.",
      },
    },
    {
      id: "laser-skin-treatment-sessions",
      question: {
        en: "How many sessions are required?",
        ar: "كم عدد الجلسات المطلوبة؟",
      },
      answer: {
        en: "The recommended number of sessions depends on your skin concerns and desired results. Our specialists will create a personalized treatment plan during your consultation.",
        ar: "يعتمد عدد الجلسات الموصى بها على حالة بشرتك والنتائج التي ترغبين في تحقيقها، وسيضع أخصائيو البشرة خطة علاجية مخصصة خلال الاستشارة.",
      },
    },
    {
      id: "laser-skin-treatment-downtime",
      question: {
        en: "Is there downtime after laser treatment?",
        ar: "هل توجد فترة تعافٍ بعد العلاج بالليزر؟",
      },
      answer: {
        en: "Recovery time varies depending on the type and intensity of the laser treatment. Your specialist will provide detailed aftercare instructions to support healing and achieve the best possible results.",
        ar: "تختلف فترة التعافي حسب نوع الليزر وشدة العلاج، وسيقدم لك الأخصائي تعليمات مفصلة للعناية اللاحقة لدعم التعافي وتحقيق أفضل النتائج.",
      },
    },
    {
      id: "laser-skin-treatment-multiple-concerns",
      question: {
        en: "Can laser treatments improve multiple skin concerns?",
        ar: "هل يمكن لعلاجات الليزر معالجة أكثر من مشكلة في البشرة؟",
      },
      answer: {
        en: "Yes. Laser Skin Treatments can address multiple concerns, including pigmentation, uneven texture, fine lines, acne marks, and overall skin rejuvenation through a personalized treatment approach.",
        ar: "نعم، يمكن لعلاجات البشرة بالليزر معالجة العديد من المشكلات، مثل التصبغات، وعدم تجانس الملمس، والخطوط الدقيقة، وآثار حب الشباب، وتجديد البشرة بشكل عام من خلال خطة علاجية مخصصة.",
      },
    },
    {
      id: "laser-skin-treatment-aftercare",
      question: {
        en: "How should I care for my skin after laser treatment?",
        ar: "كيف أعتني ببشرتي بعد العلاج بالليزر؟",
      },
      answer: {
        en: "Use gentle skincare products, avoid excessive sun exposure, apply sunscreen daily, and follow your specialist's aftercare recommendations to protect your skin and maintain long-lasting results.",
        ar: "يُنصح باستخدام منتجات عناية لطيفة، وتجنب التعرض المفرط لأشعة الشمس، ووضع واقي الشمس يوميًا، واتباع تعليمات الأخصائي للعناية اللاحقة لحماية البشرة والحفاظ على النتائج لأطول فترة ممكنة.",
      },
    },
  ],
},
{
  slug: "tattoo-removal",
  categorySlug: "laser-treatment",

  title: {
    en: "Tattoo Removal",
    ar: "إزالة الوشم",
  },

  description: {
    en: "Restore your skin's natural appearance with advanced Tattoo Removal treatment designed to gradually break down unwanted tattoo pigments using precise laser technology for clearer, more even-looking skin.",
    ar: "استعد المظهر الطبيعي لبشرتك مع علاج إزالة الوشم المتطور المصمم لتفتيت أصباغ الوشم غير المرغوب فيها تدريجيًا باستخدام تقنية الليزر الدقيقة، للحصول على بشرة أكثر صفاءً وتجانسًا.",
  },

  image: "/images/treatments/tattoo-removal.jpg",

  durationMinutes: "45 - 60",

  skinType: {
    en: "Based on Skin Assessment",
    ar: "حسب تقييم البشرة",
  },

  detailDescription: {
    en: "Our advanced Tattoo Removal treatment uses precision laser technology to gradually break down unwanted tattoo pigments without damaging the surrounding skin. The laser targets ink particles beneath the skin, allowing the body's natural healing process to eliminate them over time. Treatment plans are customized according to your tattoo's size, color, depth, and skin type to achieve the safest and most effective results.",
    ar: "يعتمد علاج إزالة الوشم المتطور لدينا على تقنية الليزر الدقيقة لتفتيت أصباغ الوشم غير المرغوب فيها تدريجيًا دون التأثير على الجلد المحيط. يستهدف الليزر جزيئات الحبر الموجودة تحت سطح الجلد، مما يسمح للجسم بالتخلص منها طبيعيًا مع مرور الوقت. ويتم تخصيص خطة العلاج وفقًا لحجم الوشم ولونه وعمقه ونوع البشرة لضمان أفضل النتائج بأعلى درجات الأمان.",
  },

  sessions: "Multiple Sessions Required",

  procedureType: {
    en: "Laser Treatment",
    ar: "العلاج بالليزر",
  },
    overview: {
    en: "Tattoo Removal is an advanced laser procedure that uses specialized laser energy to target and break down tattoo pigments beneath the skin's surface. The fragmented ink particles are then naturally eliminated by the body's immune system over time, gradually fading the tattoo while preserving the surrounding skin. Each treatment plan is personalized based on your tattoo's size, color, depth, and your skin type.",
    ar: "إزالة الوشم هي إجراء متطور باستخدام الليزر يعتمد على طاقة ليزر متخصصة لاستهداف أصباغ الوشم وتفتيتها تحت سطح الجلد. بعد ذلك، يتخلص الجسم تدريجيًا من جزيئات الحبر المتفتتة بشكل طبيعي، مما يؤدي إلى تلاشي الوشم مع الحفاظ على سلامة الجلد المحيط. ويتم تخصيص كل خطة علاجية وفقًا لحجم الوشم ولونه وعمقه ونوع البشرة.",
  },

  overviewImage: "/images/treatments/tattoo-removal-overview.png",

  benefits: [
    {
      icon: "/images/icons/deep-cleaning.svg",
      title: {
        en: "Effective Ink Reduction",
        ar: "تقليل الحبر بفعالية",
      },
      description: {
        en: "Gradually fades unwanted tattoos by breaking down tattoo pigments into smaller particles that the body naturally removes.",
        ar: "يساعد على تلاشي الوشم غير المرغوب فيه تدريجيًا من خلال تفتيت جزيئات الحبر ليتم التخلص منها طبيعيًا بواسطة الجسم.",
      },
    },
    {
      icon: "/images/icons/intense-hydration.svg",
      title: {
        en: "Advanced Laser Precision",
        ar: "دقة متقدمة بالليزر",
      },
      description: {
        en: "Uses controlled laser technology to precisely target tattoo ink while minimizing the impact on surrounding healthy skin.",
        ar: "يستخدم تقنية ليزر دقيقة لاستهداف حبر الوشم مع تقليل التأثير على الجلد السليم المحيط.",
      },
    },
    {
      icon: "/images/icons/bright-complexion.svg",
      title: {
        en: "Suitable for Different Tattoos",
        ar: "مناسب لمختلف أنواع الوشم",
      },
      description: {
        en: "Can effectively treat a variety of tattoo colors, sizes, and styles through a customized treatment approach.",
        ar: "يمكنه معالجة مختلف ألوان وأحجام وأنواع الوشم من خلال خطة علاجية مخصصة.",
      },
    },
    {
      icon: "/images/icons/improved-textures.svg",
      title: {
        en: "Improves Skin Appearance",
        ar: "تحسين مظهر البشرة",
      },
      description: {
        en: "Helps restore a cleaner, smoother, and more natural-looking appearance to the treated skin area.",
        ar: "يساعد على استعادة مظهر أكثر صفاءً ونعومة وطبيعية للمنطقة المعالجة.",
      },
    },
    {
      icon: "/images/icons/skin-nourishment.svg",
      title: {
        en: "Customized Treatment Plan",
        ar: "خطة علاج مخصصة",
      },
      description: {
        en: "Each treatment plan is tailored according to your tattoo characteristics, skin type, and treatment response to achieve optimal results.",
        ar: "يتم تصميم كل خطة علاجية وفقًا لخصائص الوشم ونوع البشرة واستجابة العلاج لتحقيق أفضل النتائج.",
      },
    },
    {
      icon: "/images/icons/healthy-skin.svg",
      title: {
        en: "Professional Skin Care Support",
        ar: "دعم احترافي للعناية بالبشرة",
      },
      description: {
        en: "Includes expert guidance before and after each session to promote healthy skin recovery and maximize treatment success.",
        ar: "يتضمن إرشادات احترافية قبل وبعد كل جلسة لدعم تعافي البشرة وتحقيق أفضل نتائج العلاج.",
      },
    },
  ],
    processHeading: {
    en: "Your Journey to",
    ar: "رحلتك نحو",
  },

  processHeadingHighlight: {
    en: "Clearer Skin",
    ar: "بشرة أكثر صفاءً",
  },

  processSubheading: {
    en: "Every Tattoo Removal treatment is carefully personalized according to your tattoo characteristics and skin condition to achieve safe, gradual, and effective results.",
    ar: "يتم تخصيص كل جلسة لإزالة الوشم بعناية وفقًا لخصائص الوشم وحالة بشرتك لتحقيق نتائج آمنة وفعالة وتدريجية.",
  },

  process: [
    {
      image: "/images/treatments/hydra-facial-process-1.jpg",
      title: {
        en: "Consultation",
        ar: "الاستشارة",
      },
      description: {
        en: "We carefully assess your tattoo's size, color, ink type, location, and your skin condition to create a personalized laser treatment plan.",
        ar: "نقوم بتقييم حجم الوشم ولونه ونوع الحبر ومكانه بالإضافة إلى حالة بشرتك لوضع خطة علاج بالليزر مخصصة.",
      },
    },
    {
      image: "/images/treatments/tattoo-removal-process-2.jpg",
      title: {
        en: "Skin Preparation",
        ar: "تحضير البشرة",
      },
      description: {
        en: "The treatment area is thoroughly cleansed and prepared to ensure a safe, comfortable, and effective laser procedure.",
        ar: "يتم تنظيف المنطقة المعالجة وتحضيرها بعناية لضمان جلسة ليزر آمنة ومريحة وفعالة.",
      },
    },
    {
      image: "/images/treatments/tattoo-removal-process-3.jpg",
      title: {
        en: "Laser Tattoo Removal",
        ar: "إزالة الوشم بالليزر",
      },
      description: {
        en: "Advanced laser technology delivers controlled pulses of energy to break down tattoo pigments beneath the skin, allowing the body to naturally eliminate the fragmented ink over time.",
        ar: "تستخدم تقنية الليزر المتطورة نبضات دقيقة من الطاقة لتفتيت أصباغ الوشم تحت سطح الجلد، مما يسمح للجسم بالتخلص من جزيئات الحبر تدريجيًا بشكل طبيعي.",
      },
    },
    {
      image: "/images/treatments/tattoo-removal-process-4.jpg",
      title: {
        en: "Recovery & After Care",
        ar: "التعافي والعناية اللاحقة",
      },
      description: {
        en: "After each session, we provide personalized aftercare instructions to support skin healing, protect the treated area, and maximize results between treatment sessions.",
        ar: "بعد كل جلسة، نقدم تعليمات مخصصة للعناية اللاحقة لدعم تعافي البشرة، وحماية المنطقة المعالجة، وتحقيق أفضل النتائج بين الجلسات.",
      },
    },
  ],
    faq: [
    {
      id: "tattoo-removal-how-it-works",
      question: {
        en: "How does laser tattoo removal work?",
        ar: "كيف تعمل إزالة الوشم بالليزر؟",
      },
      answer: {
        en: "Laser tattoo removal uses focused laser energy to break tattoo pigments into tiny particles that are gradually removed by the body's natural healing process over time.",
        ar: "تعتمد إزالة الوشم بالليزر على استخدام طاقة ليزر مركزة لتفتيت أصباغ الوشم إلى جزيئات صغيرة يتخلص منها الجسم تدريجيًا من خلال عملياته الطبيعية.",
      },
    },
    {
      id: "tattoo-removal-colors",
      question: {
        en: "Can all tattoo colors be removed?",
        ar: "هل يمكن إزالة جميع ألوان الوشم؟",
      },
      answer: {
        en: "Different tattoo colors respond differently to laser treatment. During your consultation, our specialists will assess your tattoo and recommend the most effective treatment approach.",
        ar: "تستجيب ألوان الوشم المختلفة للعلاج بالليزر بدرجات متفاوتة. وخلال الاستشارة، سيقيّم أخصائيو البشرة الوشم ويحددون الخطة العلاجية الأنسب.",
      },
    },
    {
      id: "tattoo-removal-sessions",
      question: {
        en: "How many sessions are required for tattoo removal?",
        ar: "كم عدد الجلسات المطلوبة لإزالة الوشم؟",
      },
      answer: {
        en: "The number of sessions depends on several factors, including the tattoo's size, color, ink depth, age, and your individual skin response. A personalized treatment plan will be created after assessment.",
        ar: "يعتمد عدد الجلسات على عدة عوامل، مثل حجم الوشم، ولونه، وعمق الحبر، وعمر الوشم، واستجابة بشرتك للعلاج. وسيتم وضع خطة علاجية مخصصة بعد التقييم.",
      },
    },
    {
      id: "tattoo-removal-pain",
      question: {
        en: "Is tattoo removal painful?",
        ar: "هل إزالة الوشم مؤلمة؟",
      },
      answer: {
        en: "Most clients describe the treatment as causing mild discomfort. Cooling techniques and advanced laser technology are used to maximize comfort throughout the procedure.",
        ar: "يصف معظم العملاء العلاج بأنه يسبب انزعاجًا بسيطًا فقط، ويتم استخدام تقنيات التبريد وأجهزة الليزر المتطورة لزيادة الراحة أثناء الجلسة.",
      },
    },
    {
      id: "tattoo-removal-scarring",
      question: {
        en: "Will tattoo removal leave scars?",
        ar: "هل تترك إزالة الوشم ندبات؟",
      },
      answer: {
        en: "When performed by experienced professionals using appropriate laser technology, the risk of scarring is minimal. Following the recommended aftercare instructions is essential for healthy healing.",
        ar: "عند إجراء العلاج بواسطة مختصين باستخدام تقنية الليزر المناسبة، يكون خطر حدوث الندبات منخفضًا جدًا. كما أن الالتزام بتعليمات العناية اللاحقة يساعد على التعافي بشكل صحي.",
      },
    },
    {
      id: "tattoo-removal-session-gap",
      question: {
        en: "How long should I wait between sessions?",
        ar: "كم يجب أن أنتظر بين جلسات إزالة الوشم؟",
      },
      answer: {
        en: "Treatment sessions are usually spaced several weeks apart to allow the skin to heal properly and give the body enough time to naturally eliminate the fragmented tattoo ink.",
        ar: "عادةً ما يتم ترك عدة أسابيع بين الجلسات لإتاحة الوقت الكافي لشفاء البشرة وتمكين الجسم من التخلص تدريجيًا من جزيئات الحبر المتفتتة.",
      },
    },
    {
      id: "tattoo-removal-aftercare",
      question: {
        en: "What should I do after tattoo removal treatment?",
        ar: "كيف أعتني بالبشرة بعد جلسة إزالة الوشم؟",
      },
      answer: {
        en: "Keep the treated area clean and protected, follow all aftercare instructions, avoid excessive sun exposure, and use the recommended skincare products to support proper healing and achieve the best results.",
        ar: "احرص على إبقاء المنطقة المعالجة نظيفة ومحمية، واتبع جميع تعليمات العناية اللاحقة، وتجنب التعرض المفرط لأشعة الشمس، واستخدم منتجات العناية الموصى بها لدعم التعافي وتحقيق أفضل النتائج.",
      },
    },
  ],
},
{
  slug: "laser-hair-removal",
  categorySlug: "laser-treatment",

  title: {
    en: "Laser Hair Removal",
    ar: "إزالة الشعر بالليزر",
  },

  description: {
    en: "Experience long-lasting smoothness with our advanced Laser Hair Removal treatment, designed to safely and effectively reduce unwanted hair growth while leaving your skin smoother, softer, and more confident.",
    ar: "استمتع ببشرة ناعمة لفترة طويلة مع علاج إزالة الشعر بالليزر المتطور، المصمم لتقليل نمو الشعر غير المرغوب فيه بأمان وفعالية، مع منح بشرتك نعومة ولمسة حريرية وثقة أكبر.",
  },

  image: "/images/treatments/laser-hair-removal.jpg",

  durationMinutes: "30 - 60",

  skinType: {
    en: "Based on Skin Assessment",
    ar: "حسب تقييم البشرة",
  },

  detailDescription: {
    en: "Our advanced Laser Hair Removal treatment uses precision laser technology to safely target hair follicles while protecting the surrounding skin. The treatment helps reduce unwanted hair growth, minimizes the need for frequent shaving or waxing, and leaves your skin smoother and softer over time. Each treatment plan is personalized according to your skin type, hair color, treatment area, and individual goals to achieve safe, effective, and long-lasting results.",
    ar: "يعتمد علاج إزالة الشعر بالليزر المتطور لدينا على تقنية ليزر دقيقة تستهدف بصيلات الشعر بأمان مع الحفاظ على سلامة الجلد المحيط. يساعد العلاج على تقليل نمو الشعر غير المرغوب فيه، والحد من الحاجة إلى الحلاقة أو إزالة الشعر المتكررة، ويمنح البشرة نعومة تدوم لفترة أطول. ويتم تخصيص خطة العلاج وفقًا لنوع البشرة، ولون الشعر، والمنطقة المراد علاجها، وأهدافك الفردية لتحقيق نتائج آمنة وفعالة وطويلة الأمد.",
  },

  sessions: "6 - 8",

  procedureType: {
    en: "Laser Treatment",
    ar: "العلاج بالليزر",
  },
    overview: {
    en: "Laser Hair Removal is an advanced aesthetic treatment that uses controlled laser energy to target hair follicles beneath the skin's surface. The laser energy is absorbed by the hair pigment, helping reduce future hair growth while protecting the surrounding skin. With a personalized treatment plan, it delivers smoother, longer-lasting results across a variety of treatment areas.",
    ar: "إزالة الشعر بالليزر هي تقنية تجميلية متطورة تستخدم طاقة ليزر موجهة لاستهداف بصيلات الشعر تحت سطح الجلد. تمتص صبغة الشعر طاقة الليزر، مما يساعد على تقليل نمو الشعر مستقبلاً مع الحفاظ على سلامة الجلد المحيط. ومن خلال خطة علاجية مخصصة، يمنح العلاج نتائج طويلة الأمد وبشرة أكثر نعومة في مختلف مناطق الجسم.",
  },

  overviewImage: "/images/treatments/laser-hair-removal-overview.png",

  benefits: [
    {
      icon: "/images/icons/deep-cleaning.svg",
      title: {
        en: "Long-Lasting Hair Reduction",
        ar: "تقليل طويل الأمد لنمو الشعر",
      },
      description: {
        en: "Helps significantly reduce unwanted hair growth, leaving your skin smoother with long-lasting results.",
        ar: "يساعد على تقليل نمو الشعر غير المرغوب فيه بشكل ملحوظ، مما يمنحك بشرة أكثر نعومة ونتائج تدوم لفترة طويلة.",
      },
    },
    {
      icon: "/images/icons/intense-hydration.svg",
      title: {
        en: "Precise & Effective",
        ar: "دقيق وفعال",
      },
      description: {
        en: "Targets hair follicles with precision while protecting the surrounding skin for safe and effective treatment.",
        ar: "يستهدف بصيلات الشعر بدقة مع الحفاظ على سلامة البشرة المحيطة، مما يوفر علاجًا آمنًا وفعالًا.",
      },
    },
    {
      icon: "/images/icons/bright-complexion.svg",
      title: {
        en: "Smooth Skin Texture",
        ar: "بشرة أكثر نعومة",
      },
      description: {
        en: "Helps maintain softer, smoother, and healthier-looking skin by reducing unwanted hair over time.",
        ar: "يساعد على الحفاظ على بشرة أكثر نعومة وصحة من خلال تقليل نمو الشعر غير المرغوب فيه تدريجيًا.",
      },
    },
    {
      icon: "/images/icons/improved-textures.svg",
      title: {
        en: "Saves Time & Effort",
        ar: "يوفر الوقت والجهد",
      },
      description: {
        en: "Reduces the need for frequent shaving, waxing, and other temporary hair removal methods.",
        ar: "يقلل الحاجة إلى الحلاقة المتكررة أو إزالة الشعر بالشمع وغيرها من الطرق المؤقتة.",
      },
    },
    {
      icon: "/images/icons/skin-nourishment.svg",
      title: {
        en: "Suitable for Multiple Areas",
        ar: "مناسب لمناطق متعددة",
      },
      description: {
        en: "Can be performed safely on various face and body areas according to your individual treatment needs.",
        ar: "يمكن استخدامه بأمان في مختلف مناطق الوجه والجسم وفقًا لاحتياجاتك العلاجية.",
      },
    },
    {
      icon: "/images/icons/healthy-skin.svg",
      title: {
        en: "Comfortable Treatment Experience",
        ar: "تجربة علاج مريحة",
      },
      description: {
        en: "Advanced laser technology provides an efficient, comfortable, and minimally uncomfortable treatment experience.",
        ar: "توفر تقنية الليزر المتطورة جلسة علاج فعالة ومريحة مع أقل قدر ممكن من الانزعاج.",
      },
    },
  ],
    processHeading: {
    en: "Your Journey to",
    ar: "رحلتك نحو",
  },

  processHeadingHighlight: {
    en: "Smooth, Confident Skin",
    ar: "بشرة ناعمة وثقة أكبر",
  },

  processSubheading: {
    en: "Every Laser Hair Removal session is tailored to your skin type, hair growth pattern, and treatment goals to deliver safe, comfortable, and long-lasting hair reduction.",
    ar: "يتم تخصيص كل جلسة إزالة شعر بالليزر وفقًا لنوع بشرتك ونمط نمو الشعر وأهدافك العلاجية لتحقيق نتائج آمنة ومريحة وطويلة الأمد.",
  },

  process: [
    {
      image: "/images/treatments/hydra-facial-process-1.jpg",
      title: {
        en: "Consultation",
        ar: "الاستشارة",
      },
      description: {
        en: "We begin with a detailed consultation to evaluate your skin type, hair characteristics, treatment area, and aesthetic goals before creating a personalized treatment plan.",
        ar: "نبدأ باستشارة تفصيلية لتقييم نوع بشرتك، وخصائص الشعر، والمنطقة المراد علاجها، وأهدافك الجمالية قبل إعداد خطة علاج مخصصة.",
      },
    },
    {
      image: "/images/treatments/laser-hair-removal-process-2.jpg",
      title: {
        en: "Skin Preparation",
        ar: "تحضير البشرة",
      },
      description: {
        en: "The treatment area is carefully cleansed and prepared to ensure your skin is ready for a safe, comfortable, and effective laser procedure.",
        ar: "يتم تنظيف المنطقة المستهدفة وتحضيرها بعناية لضمان جاهزية البشرة لجلسة ليزر آمنة ومريحة وفعالة.",
      },
    },
    {
      image: "/images/treatments/laser-hair-removal-process-3.jpg",
      title: {
        en: "Hair Removal Session",
        ar: "جلسة إزالة الشعر",
      },
      description: {
        en: "Advanced laser technology precisely targets hair follicles to reduce unwanted hair growth while protecting the surrounding skin for optimal results.",
        ar: "تستهدف تقنية الليزر المتطورة بصيلات الشعر بدقة لتقليل نمو الشعر غير المرغوب فيه مع الحفاظ على سلامة البشرة المحيطة وتحقيق أفضل النتائج.",
      },
    },
    {
      image: "/images/treatments/laser-hair-removal-process-4.jpg",
      title: {
        en: "After Care",
        ar: "العناية اللاحقة",
      },
      description: {
        en: "Following your session, we provide personalized aftercare guidance and skincare recommendations to support skin comfort, protect the treated area, and maintain smooth, long-lasting results.",
        ar: "بعد انتهاء الجلسة، نقدم إرشادات مخصصة للعناية اللاحقة وتوصيات للعناية بالبشرة لدعم راحتها، وحماية المنطقة المعالجة، والحفاظ على نتائج ناعمة تدوم لفترة طويلة.",
      },
    },
  ],
    faq: [
    {
      id: "laser-hair-removal-how-it-works",
      question: {
        en: "How does Laser Hair Removal work?",
        ar: "كيف تعمل إزالة الشعر بالليزر؟",
      },
      answer: {
        en: "Laser Hair Removal uses focused laser energy to target hair follicles beneath the skin, reducing their ability to produce future hair growth while leaving the surrounding skin protected.",
        ar: "تعتمد إزالة الشعر بالليزر على استخدام طاقة ليزر مركزة لاستهداف بصيلات الشعر تحت سطح الجلد، مما يقلل قدرتها على إنتاج الشعر مستقبلاً مع الحفاظ على سلامة البشرة المحيطة.",
      },
    },
    {
      id: "laser-hair-removal-skin-types",
      question: {
        en: "Is Laser Hair Removal suitable for all skin types?",
        ar: "هل إزالة الشعر بالليزر مناسبة لجميع أنواع البشرة؟",
      },
      answer: {
        en: "Yes. Advanced laser systems can be customized according to different skin types and hair characteristics following a professional consultation and skin assessment.",
        ar: "نعم، يمكن ضبط أجهزة الليزر المتطورة لتناسب مختلف أنواع البشرة وخصائص الشعر بعد إجراء استشارة وتقييم احترافي للبشرة.",
      },
    },
    {
      id: "laser-hair-removal-sessions",
      question: {
        en: "How many sessions are needed for the best results?",
        ar: "كم عدد الجلسات المطلوبة للحصول على أفضل النتائج؟",
      },
      answer: {
        en: "Multiple sessions are typically recommended because hair grows in different cycles. The exact number depends on your hair growth pattern, treatment area, and individual response.",
        ar: "عادةً ما يُوصى بعدة جلسات لأن الشعر ينمو في مراحل مختلفة. ويعتمد العدد المناسب على نمط نمو الشعر، والمنطقة المعالجة، واستجابة جسمك للعلاج.",
      },
    },
    {
      id: "laser-hair-removal-pain",
      question: {
        en: "Is Laser Hair Removal painful?",
        ar: "هل إزالة الشعر بالليزر مؤلمة؟",
      },
      answer: {
        en: "Most clients experience only minimal discomfort during treatment. Advanced cooling systems and modern laser technology help make the procedure more comfortable.",
        ar: "يشعر معظم العملاء بانزعاج بسيط فقط أثناء الجلسة، حيث تساعد أنظمة التبريد المتطورة وتقنيات الليزر الحديثة على جعل العلاج أكثر راحة.",
      },
    },
    {
      id: "laser-hair-removal-body-areas",
      question: {
        en: "Can Laser Hair Removal be done on all body areas?",
        ar: "هل يمكن إجراء إزالة الشعر بالليزر لجميع مناطق الجسم؟",
      },
      answer: {
        en: "Yes. Laser Hair Removal can be performed on various areas of the face and body, depending on your individual needs and your specialist's recommendations.",
        ar: "نعم، يمكن إجراء إزالة الشعر بالليزر في مختلف مناطق الوجه والجسم وفقًا لاحتياجاتك وتوصيات الأخصائي.",
      },
    },
    {
      id: "laser-hair-removal-downtime",
      question: {
        en: "Is there any downtime after Laser Hair Removal?",
        ar: "هل توجد فترة تعافٍ بعد إزالة الشعر بالليزر؟",
      },
      answer: {
        en: "No. There is generally little to no downtime, allowing most clients to return to their normal daily activities immediately after treatment.",
        ar: "لا، لا توجد عادةً فترة تعافٍ تُذكر، ويمكن لمعظم العملاء العودة إلى أنشطتهم اليومية مباشرة بعد الجلسة.",
      },
    },
    {
      id: "laser-hair-removal-aftercare",
      question: {
        en: "How should I care for my skin after treatment?",
        ar: "كيف أعتني ببشرتي بعد جلسة إزالة الشعر بالليزر؟",
      },
      answer: {
        en: "Avoid excessive sun exposure, apply sunscreen regularly, follow the recommended skincare instructions, and keep the treated area protected to support healing and achieve the best long-term results.",
        ar: "تجنب التعرض المفرط لأشعة الشمس، واستخدم واقي الشمس بانتظام، واتبع تعليمات العناية بالبشرة الموصى بها، واحرص على حماية المنطقة المعالجة لدعم التعافي والحصول على أفضل النتائج طويلة الأمد.",
      },
    },
  ],
},
{
  slug: "permanent-makeup",
  categorySlug: "beauty-enhancement",

  title: {
    en: "Permanent Makeup",
    ar: "المكياج الدائم",
  },

  description: {
    en: "Enhance your natural features with Permanent Makeup, an advanced beauty treatment designed to create beautifully defined brows, eyes, and lips for a polished, effortless look that lasts.",
    ar: "عززي جمال ملامحك الطبيعية مع المكياج الدائم، وهو علاج تجميلي متطور يمنح الحواجب والعينين والشفاه مظهرًا محددًا وأنيقًا يدوم لفترة طويلة دون عناء المكياج اليومي.",
  },

  image: "/images/treatments/permanent-makeup.jpg",

  durationMinutes: "120 - 180",

  skinType: {
    en: "Most Skin Types",
    ar: "معظم أنواع البشرة",
  },

  detailDescription: {
    en: "Permanent Makeup is an advanced cosmetic treatment that enhances your natural beauty using specialized pigments and precision application techniques. Whether defining eyebrows, enhancing eyeliner, or adding natural lip color, every treatment is customized to complement your facial features and personal preferences. The result is a refined, long-lasting appearance that reduces the need for daily makeup while maintaining a natural, elegant look.",
    ar: "المكياج الدائم هو علاج تجميلي متطور يعزز جمال ملامحك الطبيعية باستخدام أصباغ متخصصة وتقنيات تطبيق دقيقة. سواء كان لتحديد الحواجب، أو إبراز العينين، أو إضافة لون طبيعي للشفاه، يتم تخصيص كل جلسة بما يتناسب مع ملامح وجهك وتفضيلاتك الشخصية. والنتيجة هي مظهر أنيق وطويل الأمد يقلل الحاجة إلى المكياج اليومي مع الحفاظ على إطلالة طبيعية وجذابة.",
  },

  sessions: "1 - 2",

  procedureType: {
    en: "Semi-Permanent Treatment",
    ar: "علاج شبه دائم",
  },
    overview: {
    en: "Permanent Makeup is a semi-permanent cosmetic procedure that enhances your natural facial features by depositing specialized pigments into the skin. Designed for areas such as the eyebrows, eyeliner, and lips, the treatment creates soft, natural-looking definition while reducing the need for daily makeup application and maintaining a polished appearance.",
    ar: "المكياج الدائم هو إجراء تجميلي شبه دائم يعزز ملامح الوجه الطبيعية من خلال ترسيب أصباغ متخصصة داخل البشرة. ويُستخدم لتحديد الحواجب، وخط العين، والشفاه، ليمنح مظهرًا طبيعيًا وأنيقًا مع تقليل الحاجة إلى وضع المكياج اليومي.",
  },

  overviewImage: "/images/treatments/permanent-makeup-overview.png",

  benefits: [
    {
      icon: "/images/icons/deep-cleaning.svg",
      title: {
        en: "Effortless Daily Beauty",
        ar: "جمال يومي دون عناء",
      },
      description: {
        en: "Reduces the need for everyday makeup application while helping you maintain a naturally polished and well-defined appearance.",
        ar: "يقلل الحاجة إلى وضع المكياج يوميًا مع الحفاظ على مظهر طبيعي وأنيق طوال اليوم.",
      },
    },
    {
      icon: "/images/icons/intense-hydration.svg",
      title: {
        en: "Natural Feature Enhancement",
        ar: "تعزيز الملامح الطبيعية",
      },
      description: {
        en: "Enhances your natural beauty by adding definition, symmetry, and balance to your facial features.",
        ar: "يعزز جمال ملامحك الطبيعية من خلال إضافة التحديد والتناسق والتوازن للوجه.",
      },
    },
    {
      icon: "/images/icons/bright-complexion.svg",
      title: {
        en: "Customized Results",
        ar: "نتائج مخصصة",
      },
      description: {
        en: "Every treatment is tailored to your preferences, skin tone, facial structure, and desired aesthetic outcome.",
        ar: "يتم تخصيص كل جلسة وفقًا لتفضيلاتك، ولون بشرتك، وملامح وجهك، والنتيجة الجمالية التي ترغبين بها.",
      },
    },
    {
      icon: "/images/icons/improved-textures.svg",
      title: {
        en: "Long-Lasting Definition",
        ar: "تحديد يدوم طويلًا",
      },
      description: {
        en: "Provides beautifully enhanced brows, eyes, or lips with results that remain visible for an extended period.",
        ar: "يوفر تحديدًا جميلًا للحواجب أو العينين أو الشفاه مع نتائج تدوم لفترة طويلة.",
      },
    },
    {
      icon: "/images/icons/skin-nourishment.svg",
      title: {
        en: "Time-Saving Solution",
        ar: "توفير الوقت",
      },
      description: {
        en: "Perfect for busy lifestyles by simplifying your daily beauty routine and reducing makeup application time.",
        ar: "مثالي لنمط الحياة المزدحم، حيث يوفر الوقت من خلال تبسيط روتين الجمال اليومي وتقليل وقت وضع المكياج.",
      },
    },
    {
      icon: "/images/icons/healthy-skin.svg",
      title: {
        en: "Confidence Boost",
        ar: "تعزيز الثقة بالنفس",
      },
      description: {
        en: "Enjoy greater confidence with naturally refined features and a consistently fresh, well-groomed appearance.",
        ar: "استمتعي بثقة أكبر بفضل ملامح طبيعية أكثر تحديدًا وإطلالة أنيقة ومنتعشة باستمرار.",
      },
    },
  ],
    processHeading: {
    en: "Your Journey to",
    ar: "رحلتك نحو",
  },

  processHeadingHighlight: {
    en: "Effortless Beauty",
    ar: "جمال طبيعي دون عناء",
  },

  processSubheading: {
    en: "Every Permanent Makeup treatment is carefully designed and performed to enhance your natural features with long-lasting, beautifully balanced results.",
    ar: "يتم تصميم وتنفيذ كل جلسة مكياج دائم بعناية لتعزيز ملامحك الطبيعية ومنحك نتائج متناسقة وجميلة تدوم طويلًا.",
  },

  process: [
    {
      image: "/images/treatments/hydra-facial-process-1.jpg",
      title: {
        en: "Consultation",
        ar: "الاستشارة",
      },
      description: {
        en: "We begin with a detailed consultation to understand your desired look, facial features, lifestyle, and expectations before creating your personalized treatment plan.",
        ar: "نبدأ باستشارة تفصيلية لفهم الإطلالة التي ترغبين بها، وملامح وجهك، ونمط حياتك، وتوقعاتك قبل إعداد خطة علاج مخصصة.",
      },
    },
    {
      image: "/images/treatments/permanent-makeup-process-2.jpg",
      title: {
        en: "Design & Customization",
        ar: "التصميم والتخصيص",
      },
      description: {
        en: "Our specialists create a personalized design by selecting the ideal shape, style, and pigment shades that complement your facial features and natural beauty.",
        ar: "يقوم أخصائيونا بتصميم مخصص من خلال اختيار الشكل والأسلوب ودرجات الألوان المناسبة التي تتناغم مع ملامح وجهك وجمالك الطبيعي.",
      },
    },
    {
      image: "/images/treatments/permanent-makeup-process-3.jpg",
      title: {
        en: "Permanent Makeup",
        ar: "تطبيق المكياج الدائم",
      },
      description: {
        en: "Using advanced techniques and premium-quality pigments, the selected facial features are enhanced with precision to achieve natural, elegant, and long-lasting results.",
        ar: "باستخدام تقنيات متقدمة وأصباغ عالية الجودة، يتم تعزيز الملامح المختارة بدقة للحصول على نتائج طبيعية وأنيقة تدوم طويلًا.",
      },
    },
    {
      image: "/images/treatments/permanent-makeup-process-4.jpg",
      title: {
        en: "Healing & Touch-Up Care",
        ar: "التعافي والعناية اللاحقة",
      },
      description: {
        en: "Comprehensive aftercare instructions are provided to support proper healing, optimize pigment retention, and maintain beautiful long-lasting results. A touch-up session may be recommended if required.",
        ar: "نقدم تعليمات شاملة للعناية اللاحقة لدعم التعافي السليم، والحفاظ على ثبات اللون، وضمان نتائج جميلة تدوم طويلًا. وقد يُوصى بجلسة تعزيز إذا لزم الأمر.",
      },
    },
  ],
    faq: [
    {
      id: "permanent-makeup-what-is",
      question: {
        en: "What is Permanent Makeup?",
        ar: "ما هو المكياج الدائم؟",
      },
      answer: {
        en: "Permanent Makeup is a semi-permanent cosmetic treatment that enhances facial features by applying specialized pigments to create natural-looking, long-lasting definition.",
        ar: "المكياج الدائم هو علاج تجميلي شبه دائم يعتمد على استخدام أصباغ متخصصة لتعزيز ملامح الوجه ومنحها تحديدًا طبيعيًا يدوم لفترة طويلة.",
      },
    },
    {
      id: "permanent-makeup-areas",
      question: {
        en: "Which areas can be enhanced with Permanent Makeup?",
        ar: "ما المناطق التي يمكن تحسينها بالمكياج الدائم؟",
      },
      answer: {
        en: "Permanent Makeup can enhance areas such as the eyebrows, eyeliner, and lips, depending on your desired look and personalized treatment plan.",
        ar: "يمكن استخدام المكياج الدائم لتعزيز مظهر الحواجب، وخط العين، والشفاه وفقًا للإطلالة التي ترغبين بها وخطة العلاج المخصصة لك.",
      },
    },
    {
      id: "permanent-makeup-duration",
      question: {
        en: "How long do Permanent Makeup results last?",
        ar: "كم تدوم نتائج المكياج الدائم؟",
      },
      answer: {
        en: "Results typically last between 1 and 3 years, depending on the treatment area, skin type, lifestyle, and how well you follow the recommended aftercare routine.",
        ar: "تدوم النتائج عادةً من سنة إلى ثلاث سنوات، وذلك حسب المنطقة المعالجة، ونوع البشرة، ونمط الحياة، والالتزام بتعليمات العناية اللاحقة.",
      },
    },
    {
      id: "permanent-makeup-safe",
      question: {
        en: "Is Permanent Makeup safe?",
        ar: "هل المكياج الدائم آمن؟",
      },
      answer: {
        en: "Yes. When performed by trained professionals using advanced techniques and high-quality pigments, Permanent Makeup is considered a safe and effective cosmetic enhancement procedure.",
        ar: "نعم، عند إجرائه بواسطة مختصين مدربين باستخدام تقنيات متطورة وأصباغ عالية الجودة، يُعد المكياج الدائم إجراءً تجميليًا آمنًا وفعالًا.",
      },
    },
    {
      id: "permanent-makeup-pain",
      question: {
        en: "Does Permanent Makeup hurt?",
        ar: "هل يسبب المكياج الدائم الألم؟",
      },
      answer: {
        en: "A topical numbing solution is typically applied before the procedure to improve comfort. Most clients experience only mild discomfort during treatment.",
        ar: "عادةً ما يتم استخدام كريم مخدر موضعي قبل الجلسة لزيادة الراحة، ويشعر معظم العملاء بانزعاج بسيط فقط أثناء العلاج.",
      },
    },
    {
      id: "permanent-makeup-healing",
      question: {
        en: "How long does the healing process take?",
        ar: "كم تستغرق فترة التعافي؟",
      },
      answer: {
        en: "Healing time varies depending on the treatment area and individual skin response, but most clients notice gradual healing and color settling over the first few weeks.",
        ar: "تختلف مدة التعافي حسب المنطقة المعالجة واستجابة البشرة، إلا أن معظم العملاء يلاحظون التئام البشرة واستقرار اللون تدريجيًا خلال الأسابيع الأولى.",
      },
    },
    {
      id: "permanent-makeup-natural-look",
      question: {
        en: "Can Permanent Makeup be customized to look natural?",
        ar: "هل يمكن تخصيص المكياج الدائم ليبدو طبيعيًا؟",
      },
      answer: {
        en: "Yes. Every Permanent Makeup treatment is fully customized to complement your facial features, preferred style, and desired level of definition, creating natural and elegant results.",
        ar: "نعم، يتم تخصيص كل جلسة مكياج دائم بما يتناسب مع ملامح وجهك، وأسلوبك المفضل، ودرجة التحديد التي ترغبين بها، للحصول على نتائج طبيعية وأنيقة.",
      },
    },
  ],
},
{
  slug: "pmu-lip-blush",
  categorySlug: "beauty-enhancement",

  title: {
    en: "PMU Lip Blush",
    ar: "توريد الشفاه الدائم",
  },

  description: {
    en: "Enhance your lips with PMU Lip Blush, a semi-permanent beauty treatment designed to add a natural tint, improve lip definition, and create beautifully balanced, healthy-looking lips.",
    ar: "عززي جمال شفتيك مع توريد الشفاه الدائم، وهو علاج تجميلي شبه دائم يمنح الشفاه لونًا طبيعيًا، ويبرز حدودها، ويمنحها مظهرًا صحيًا ومتناسقًا.",
  },

  image: "/images/treatments/pmu-lip-blush.jpg",

  durationMinutes: "120 - 180",

  skinType: {
    en: "Most Skin Types",
    ar: "معظم أنواع البشرة",
  },

  detailDescription: {
    en: "PMU Lip Blush is a semi-permanent cosmetic treatment that enhances the natural beauty of your lips using customized pigments and advanced application techniques. The treatment improves lip color, defines the lip border, and creates a softer, fuller-looking appearance while maintaining a natural finish. Every procedure is personalized to match your skin tone, natural lip color, and desired aesthetic outcome for elegant, long-lasting results.",
    ar: "توريد الشفاه الدائم هو علاج تجميلي شبه دائم يعزز جمال الشفاه الطبيعي باستخدام أصباغ مخصصة وتقنيات تطبيق متطورة. يساعد العلاج على تحسين لون الشفاه، وتحديد حدودها، ومنحها مظهرًا أكثر امتلاءً ونعومة مع الحفاظ على مظهر طبيعي. ويتم تخصيص كل جلسة بما يتناسب مع لون بشرتك، ولون شفتيك الطبيعي، والنتيجة الجمالية التي ترغبين بها للحصول على نتائج أنيقة تدوم طويلًا.",
  },

  sessions: "1 - 2",

  procedureType: {
    en: "Semi-Permanent Treatment",
    ar: "علاج شبه دائم",
  },
    overview: {
    en: "PMU Lip Blush is a semi-permanent cosmetic procedure that enhances the natural color and shape of your lips by gently depositing customized pigments into the skin. The treatment improves lip definition, balances uneven pigmentation, and creates a soft, healthy-looking blush effect for naturally beautiful, fuller-looking lips.",
    ar: "توريد الشفاه الدائم هو إجراء تجميلي شبه دائم يعزز اللون الطبيعي وشكل الشفاه من خلال ترسيب أصباغ مخصصة بلطف داخل البشرة. يساعد العلاج على تحديد حدود الشفاه، وتوحيد لونها، ومنحها مظهرًا طبيعيًا وصحيًا مع لمسة وردية ناعمة وإطلالة أكثر امتلاءً.",
  },

  overviewImage: "/images/treatments/pmu-lip-blush-overview.png",

  benefits: [
    {
      icon: "/images/icons/deep-cleaning.svg",
      title: {
        en: "Natural Lip Enhancement",
        ar: "تعزيز جمال الشفاه الطبيعي",
      },
      description: {
        en: "Creates a soft, natural-looking tint that enhances your lips while maintaining a fresh and elegant appearance.",
        ar: "يمنح الشفاه لونًا طبيعيًا وناعمًا يعزز جمالها مع الحفاظ على مظهر أنيق وطبيعي.",
      },
    },
    {
      icon: "/images/icons/intense-hydration.svg",
      title: {
        en: "Improved Lip Definition",
        ar: "تحديد أفضل للشفاه",
      },
      description: {
        en: "Enhances the lip border and creates a more balanced, symmetrical, and well-defined lip shape.",
        ar: "يساعد على إبراز حدود الشفاه ومنحها شكلًا أكثر توازنًا وتناسقًا وتحديدًا.",
      },
    },
    {
      icon: "/images/icons/bright-complexion.svg",
      title: {
        en: "Even Lip Tone",
        ar: "توحيد لون الشفاه",
      },
      description: {
        en: "Helps improve the appearance of uneven pigmentation and restores a healthier, more balanced lip color.",
        ar: "يساعد على تحسين تفاوت لون الشفاه واستعادة لون صحي ومتجانس.",
      },
    },
    {
      icon: "/images/icons/improved-textures.svg",
      title: {
        en: "Fresh & Youthful Appearance",
        ar: "مظهر أكثر نضارة وشبابًا",
      },
      description: {
        en: "Adds a healthy-looking flush of color that gives your lips a refreshed, youthful, and naturally vibrant appearance.",
        ar: "يمنح الشفاه لونًا صحيًا ومنتعشًا يعزز مظهرها الطبيعي ويضفي عليها حيوية وشبابًا.",
      },
    },
    {
      icon: "/images/icons/skin-nourishment.svg",
      title: {
        en: "Reduces Makeup Dependence",
        ar: "تقليل الحاجة للمكياج",
      },
      description: {
        en: "Minimizes the need for daily lipstick application and frequent touch-ups, saving time every day.",
        ar: "يقلل الحاجة لاستخدام أحمر الشفاه يوميًا أو إجراء التعديلات المتكررة، مما يوفر الوقت والجهد.",
      },
    },
    {
      icon: "/images/icons/healthy-skin.svg",
      title: {
        en: "Customized Color Selection",
        ar: "اختيار لون مخصص",
      },
      description: {
        en: "Pigments are carefully selected to complement your complexion, natural lip tone, and preferred style for beautifully personalized results.",
        ar: "يتم اختيار الأصباغ بعناية لتناسب لون بشرتك، ولون شفتيك الطبيعي، وأسلوبك المفضل للحصول على نتائج مخصصة وجميلة.",
      },
    },
  ],
    processHeading: {
    en: "Your Journey to",
    ar: "رحلتك نحو",
  },

  processHeadingHighlight: {
    en: "Beautifully Tinted Lips",
    ar: "شفاه جميلة بلون طبيعي",
  },

  processSubheading: {
    en: "Every PMU Lip Blush treatment is carefully customized to enhance your natural lip color, improve definition, and create elegant, long-lasting results.",
    ar: "يتم تخصيص كل جلسة لتوريد الشفاه الدائم بعناية لتعزيز لون الشفاه الطبيعي، وتحسين تحديدها، ومنحها نتائج أنيقة تدوم طويلًا.",
  },

  process: [
    {
      image: "/images/treatments/hydra-facial-process-1.jpg",
      title: {
        en: "Consultation",
        ar: "الاستشارة",
      },
      description: {
        en: "We begin with a detailed consultation to understand your desired lip shade, assess your natural lip tone, and discuss your beauty goals before creating a personalized treatment plan.",
        ar: "نبدأ باستشارة تفصيلية لفهم درجة اللون التي ترغبين بها، وتقييم لون شفتيك الطبيعي، ومناقشة أهدافك الجمالية قبل إعداد خطة علاج مخصصة.",
      },
    },
    {
      image: "/images/treatments/pmu-lip-blush-process-2.jpg",
      title: {
        en: "Lip Design & Color Selection",
        ar: "تصميم الشفاه واختيار اللون",
      },
      description: {
        en: "Our specialists carefully design your lip shape and select customized pigment shades that complement your complexion, natural lip tone, and personal style.",
        ar: "يقوم أخصائيونا بتصميم شكل الشفاه بعناية واختيار درجات الألوان المناسبة التي تتناسق مع لون بشرتك ولون شفتيك الطبيعي وأسلوبك الشخصي.",
      },
    },
    {
      image: "/images/treatments/pmu-lip-blush-process-3.jpg",
      title: {
        en: "PMU Lip Blush",
        ar: "تطبيق توريد الشفاه",
      },
      description: {
        en: "Using advanced precision techniques, customized pigments are gently applied to create soft, even, naturally enhanced lips with beautiful long-lasting color.",
        ar: "باستخدام تقنيات دقيقة ومتطورة، يتم تطبيق الأصباغ المخصصة بلطف للحصول على لون شفاه طبيعي ومتناسق يدوم طويلًا.",
      },
    },
    {
      image: "/images/treatments/pmu-lip-blush-process-4.jpg",
      title: {
        en: "Healing & Touch-Up Care",
        ar: "التعافي والعناية اللاحقة",
      },
      description: {
        en: "Comprehensive aftercare instructions are provided to support proper healing and pigment retention. A touch-up session may be recommended to perfect and maintain your final results.",
        ar: "نقدم تعليمات شاملة للعناية اللاحقة لدعم التعافي السليم والحفاظ على ثبات اللون. وقد يُوصى بجلسة تعزيز للحصول على أفضل النتائج والمحافظة عليها.",
      },
    },
  ],
    faq: [
    {
      id: "pmu-lip-blush-what-is",
      question: {
        en: "What is PMU Lip Blush?",
        ar: "ما هو توريد الشفاه الدائم (PMU Lip Blush)؟",
      },
      answer: {
        en: "PMU Lip Blush is a semi-permanent cosmetic treatment that enhances the natural color and definition of your lips using specialized pigments, creating a soft, healthy-looking, and naturally beautiful finish.",
        ar: "توريد الشفاه الدائم هو علاج تجميلي شبه دائم يعزز اللون الطبيعي وتحديد الشفاه باستخدام أصباغ متخصصة، ليمنحها مظهرًا صحيًا وطبيعيًا وأنيقًا.",
      },
    },
    {
      id: "pmu-lip-blush-duration",
      question: {
        en: "How long does PMU Lip Blush last?",
        ar: "كم تدوم نتائج توريد الشفاه الدائم؟",
      },
      answer: {
        en: "Results typically last between 1 and 3 years depending on your skin type, lifestyle, pigment selection, and how well you follow the recommended aftercare routine.",
        ar: "تدوم النتائج عادةً من سنة إلى ثلاث سنوات، وذلك حسب نوع البشرة، ونمط الحياة، والأصباغ المستخدمة، والالتزام بتعليمات العناية اللاحقة.",
      },
    },
    {
      id: "pmu-lip-blush-suitability",
      question: {
        en: "Is PMU Lip Blush suitable for all lip types?",
        ar: "هل توريد الشفاه الدائم مناسب لجميع أنواع الشفاه؟",
      },
      answer: {
        en: "Yes. The treatment can be customized for different lip tones, shapes, and cosmetic concerns following a professional consultation.",
        ar: "نعم، يمكن تخصيص العلاج ليناسب مختلف ألوان وأشكال الشفاه واحتياجاتها التجميلية بعد إجراء استشارة احترافية.",
      },
    },
    {
      id: "pmu-lip-blush-pain",
      question: {
        en: "Does PMU Lip Blush hurt?",
        ar: "هل يسبب توريد الشفاه الدائم الألم؟",
      },
      answer: {
        en: "A topical numbing solution is applied before and throughout the procedure to maximize comfort. Most clients experience only mild discomfort during treatment.",
        ar: "يتم استخدام مخدر موضعي قبل الجلسة وأثناءها لزيادة الراحة، ويشعر معظم العملاء بانزعاج بسيط فقط أثناء العلاج.",
      },
    },
    {
      id: "pmu-lip-blush-healing",
      question: {
        en: "How long does the healing process take?",
        ar: "كم تستغرق فترة التعافي؟",
      },
      answer: {
        en: "Your lips will go through a natural healing process, with the final color gradually settling and becoming more natural over the following weeks.",
        ar: "تمر الشفاه بمرحلة تعافٍ طبيعية، ويستقر اللون النهائي تدريجيًا ليظهر بشكل طبيعي خلال الأسابيع التالية للجلسة.",
      },
    },
    {
      id: "pmu-lip-blush-even-tone",
      question: {
        en: "Can PMU Lip Blush correct uneven lip color?",
        ar: "هل يساعد توريد الشفاه الدائم في توحيد لون الشفاه؟",
      },
      answer: {
        en: "Yes. Customized pigment selection can improve the appearance of uneven lip tone, creating a more balanced, vibrant, and naturally enhanced look.",
        ar: "نعم، يساعد اختيار الأصباغ المناسبة على تحسين مظهر تفاوت لون الشفاه ومنحها لونًا أكثر تجانسًا وحيوية وطبيعية.",
      },
    },
    {
      id: "pmu-lip-blush-aftercare",
      question: {
        en: "How should I care for my lips after the treatment?",
        ar: "كيف أعتني بشفتي بعد جلسة توريد الشفاه الدائم؟",
      },
      answer: {
        en: "Follow your specialist's aftercare instructions, keep your lips moisturized, avoid irritation while healing, protect them from excessive sun exposure, and use only the recommended lip care products for the best results.",
        ar: "اتبع تعليمات الأخصائي للعناية اللاحقة، وحافظ على ترطيب الشفاه، وتجنب تهييجها أثناء فترة التعافي، واحمها من التعرض المفرط لأشعة الشمس، واستخدم فقط منتجات العناية الموصى بها للحصول على أفضل النتائج.",
      },
    },
  ],

},

{
  slug: "bridal-makeup",
  categorySlug: "beauty-enhancement",

  title: {
    en: "Bridal & Makeup",
    ar: "مكياج العروس والمناسبات",
  },

  description: {
    en: "Celebrate life's most memorable moments with our professional Bridal & Makeup services, creating flawless, elegant looks tailored to your features, style, and special occasion.",
    ar: "احتفلي بأجمل لحظات حياتك مع خدمات مكياج العروس والمناسبات الاحترافية، المصممة لإبراز جمالك الطبيعي بإطلالة أنيقة ومثالية تناسب ملامحك وأسلوبك ومناسبتك الخاصة.",
  },

  image: "/images/treatments/bridal-makeup.jpg",

  durationMinutes: "120 - 180",

  skinType: {
    en: "Based on Occasion & Requirements",
    ar: "حسب المناسبة والاحتياجات",
  },

  detailDescription: {
    en: "Our Bridal & Makeup services are designed to enhance your natural beauty with personalized makeup artistry for weddings, engagements, receptions, parties, and special occasions. Every look is customized to complement your facial features, skin tone, outfit, and personal style, ensuring a flawless, elegant, and long-lasting finish that keeps you looking confident throughout your special day.",
    ar: "صُممت خدمات مكياج العروس والمناسبات لدينا لإبراز جمالك الطبيعي من خلال تطبيق مكياج احترافي مخصص لحفلات الزفاف والخطوبة والاستقبالات والمناسبات الخاصة. يتم تصميم كل إطلالة بما يتناسب مع ملامح وجهك، ولون بشرتك، وإطلالتك، وأسلوبك الشخصي، لضمان مظهر أنيق وثابت يدوم طوال مناسبتك ويمنحك الثقة في كل لحظة.",
  },

  sessions: "1 - 2",

  procedureType: {
    en: "Professional Beauty Service",
    ar: "خدمة تجميل احترافية",
  },
    overview: {
    en: "Bridal & Makeup is a personalized beauty service designed to create stunning looks for weddings, celebrations, photoshoots, and special occasions. Our professional makeup artists combine expert techniques, premium products, and customized styling to enhance your natural features while creating a flawless, elegant, and long-lasting finish.",
    ar: "مكياج العروس والمناسبات هو خدمة تجميل مخصصة تهدف إلى ابتكار إطلالات مميزة لحفلات الزفاف، والاحتفالات، وجلسات التصوير، والمناسبات الخاصة. يجمع خبراء التجميل لدينا بين التقنيات الاحترافية، والمنتجات عالية الجودة، والتنسيق المخصص لإبراز جمال ملامحك الطبيعية والحصول على إطلالة أنيقة تدوم طويلًا.",
  },

  overviewImage: "/images/treatments/bridal-makeup-overview.png",

  benefits: [
    {
      icon: "/images/icons/deep-cleaning.svg",
      title: {
        en: "Personalized Beauty Look",
        ar: "إطلالة تجميلية مخصصة",
      },
      description: {
        en: "Creates a customized makeup style that complements your personality, outfit, facial features, and the occasion.",
        ar: "يتم تصميم مكياج مخصص يتناسب مع شخصيتك وإطلالتك وملامح وجهك والمناسبة التي تحضرينها.",
      },
    },
    {
      icon: "/images/icons/intense-hydration.svg",
      title: {
        en: "Flawless Finish",
        ar: "لمسة نهائية مثالية",
      },
      description: {
        en: "Professional techniques deliver a polished, elegant, and long-lasting makeup finish that looks beautiful throughout your event.",
        ar: "تمنحك التقنيات الاحترافية مكياجًا أنيقًا وثابتًا يدوم طوال المناسبة بإطلالة مثالية.",
      },
    },
    {
      icon: "/images/icons/bright-complexion.svg",
      title: {
        en: "Expert Product Selection",
        ar: "اختيار احترافي للمنتجات",
      },
      description: {
        en: "High-quality beauty products are carefully selected according to your skin type and desired makeup style.",
        ar: "يتم اختيار منتجات تجميل عالية الجودة بما يتناسب مع نوع بشرتك والإطلالة التي ترغبين بها.",
      },
    },
    {
      icon: "/images/icons/improved-textures.svg",
      title: {
        en: "Camera-Ready Appearance",
        ar: "إطلالة مثالية للتصوير",
      },
      description: {
        en: "Enhances your features beautifully for photography, videography, and every memorable moment.",
        ar: "يعزز ملامحك لتظهري بأفضل صورة في جلسات التصوير والفيديو وجميع لحظاتك المميزة.",
      },
    },
    {
      icon: "/images/icons/skin-nourishment.svg",
      title: {
        en: "Stress-Free Experience",
        ar: "تجربة مريحة",
      },
      description: {
        en: "Enjoy professional guidance, organized preparation, and a smooth beauty experience for your special day.",
        ar: "استمتعي بتجربة مريحة مع إرشادات احترافية وتحضير منظم يضمن لك راحة البال في يومك المميز.",
      },
    },
    {
      icon: "/images/icons/healthy-skin.svg",
      title: {
        en: "Complete Beauty Enhancement",
        ar: "إطلالة متكاملة",
      },
      description: {
        en: "Combines professional makeup artistry and personalized styling to create a refined, elegant, and unforgettable appearance.",
        ar: "يجمع بين فن المكياج الاحترافي والتنسيق الشخصي للحصول على إطلالة أنيقة ومتكاملة لا تُنسى.",
      },
    },
  ],
    processHeading: {
    en: "Your Journey to",
    ar: "رحلتك نحو",
  },

  processHeadingHighlight: {
    en: "Perfect Look",
    ar: "الإطلالة المثالية",
  },

  processSubheading: {
    en: "Every Bridal & Makeup experience is thoughtfully planned to create a personalized beauty look that enhances your natural features and makes you feel confident on your special day.",
    ar: "يتم التخطيط لكل تجربة مكياج العروس والمناسبات بعناية لابتكار إطلالة جمالية مخصصة تعزز ملامحك الطبيعية وتمنحك الثقة في يومك المميز.",
  },

  process: [
    {
      image: "/images/treatments/hydra-facial-process-1.jpg",
      title: {
        en: "Consultation",
        ar: "الاستشارة",
      },
      description: {
        en: "We begin with a detailed consultation to understand your occasion, outfit, personal preferences, skin type, and desired makeup style before creating your customized beauty plan.",
        ar: "نبدأ باستشارة تفصيلية لفهم المناسبة، والإطلالة، وتفضيلاتك الشخصية، ونوع بشرتك، وأسلوب المكياج الذي ترغبين به قبل إعداد خطة تجميل مخصصة.",
      },
    },
    {
      image: "/images/treatments/bridal-makeup-process-2.jpg",
      title: {
        en: "Skin Preparation",
        ar: "تحضير البشرة",
      },
      description: {
        en: "Your skin is carefully prepared using suitable skincare techniques to create a smooth, hydrated base that ensures flawless and long-lasting makeup application.",
        ar: "يتم تحضير البشرة بعناية باستخدام تقنيات العناية المناسبة للحصول على قاعدة ناعمة ومرطبة تضمن تطبيق مكياج مثالي يدوم طويلًا.",
      },
    },
    {
      image: "/images/treatments/bridal-makeup-process-3.jpg",
      title: {
        en: "Professional Makeup",
        ar: "تطبيق المكياج الاحترافي",
      },
      description: {
        en: "Our professional makeup artists use advanced techniques and premium products to enhance your natural features and create your ideal bridal or special occasion look.",
        ar: "يقوم خبراء التجميل لدينا باستخدام تقنيات احترافية ومنتجات عالية الجودة لإبراز جمال ملامحك الطبيعية وابتكار إطلالة العروس أو المناسبة التي تحلمين بها.",
      },
    },
    {
      image: "/images/treatments/bridal-makeup-process-4.jpg",
      title: {
        en: "Final Touches & Styling",
        ar: "اللمسات الأخيرة والتنسيق",
      },
      description: {
        en: "The experience concludes with final detailing, touch-ups, and styling refinements to ensure a polished, elegant, and camera-ready look that lasts throughout your celebration.",
        ar: "تُختتم التجربة بإضافة اللمسات النهائية، وإجراء التعديلات اللازمة، وتنسيق الإطلالة لضمان مظهر أنيق ومتقن وجاهز للتصوير يدوم طوال مناسبتك.",
      },
    },
  ],
    faq: [
    {
      id: "bridal-makeup-services",
      question: {
        en: "What makeup services are included in Bridal & Makeup?",
        ar: "ما الخدمات التي تشملها خدمة مكياج العروس والمناسبات؟",
      },
      answer: {
        en: "Our Bridal & Makeup services can include bridal makeup, event makeup, skin preparation, beauty styling, and customized makeup looks tailored to your occasion and personal preferences.",
        ar: "تشمل خدمات مكياج العروس والمناسبات مكياج العروس، ومكياج المناسبات، وتحضير البشرة، وتنسيق الإطلالة، وتصميم مكياج مخصص يتناسب مع مناسبتك وتفضيلاتك الشخصية.",
      },
    },
    {
      id: "bridal-makeup-customization",
      question: {
        en: "Can the makeup style be customized?",
        ar: "هل يمكن تخصيص أسلوب المكياج؟",
      },
      answer: {
        en: "Yes. Every makeup look is fully personalized according to your facial features, outfit, event theme, skin tone, and personal style to create your ideal appearance.",
        ar: "نعم، يتم تصميم كل إطلالة بشكل مخصص وفقًا لملامح وجهك، وإطلالتك، وطبيعة المناسبة، ولون بشرتك، وأسلوبك الشخصي للحصول على النتيجة التي ترغبين بها.",
      },
    },
    {
      id: "bridal-makeup-duration",
      question: {
        en: "How long does bridal makeup take?",
        ar: "كم تستغرق جلسة مكياج العروس؟",
      },
      answer: {
        en: "The duration depends on the complexity of the desired look and any additional services required. Bridal makeup typically takes between 2 and 3 hours.",
        ar: "تعتمد مدة الجلسة على تفاصيل الإطلالة والخدمات الإضافية المطلوبة، وعادةً يستغرق مكياج العروس من ساعتين إلى ثلاث ساعات.",
      },
    },
    {
      id: "bridal-makeup-trial",
      question: {
        en: "Do you provide makeup trials before the event?",
        ar: "هل توفرون جلسة تجربة للمكياج قبل المناسبة؟",
      },
      answer: {
        en: "Yes. Makeup trials can be arranged before your event to finalize your preferred style and ensure you achieve the perfect look for your special day.",
        ar: "نعم، يمكن ترتيب جلسة تجريبية قبل المناسبة لاختيار الإطلالة المناسبة وضمان الحصول على المظهر المثالي في يومك المميز.",
      },
    },
    {
      id: "bridal-makeup-lasting",
      question: {
        en: "Will the makeup last throughout the event?",
        ar: "هل يدوم المكياج طوال المناسبة؟",
      },
      answer: {
        en: "Yes. Professional techniques and high-quality products are used to create a flawless, long-lasting finish designed to remain beautiful throughout your special occasion.",
        ar: "نعم، نستخدم تقنيات احترافية ومنتجات عالية الجودة للحصول على مكياج ثابت وأنيق يدوم طوال المناسبة.",
      },
    },
    {
      id: "bridal-makeup-occasions",
      question: {
        en: "Can makeup be done for other occasions besides weddings?",
        ar: "هل تقدمون خدمات المكياج لمناسبات أخرى غير حفلات الزفاف؟",
      },
      answer: {
        en: "Absolutely. Our makeup services are available for engagements, parties, photoshoots, celebrations, corporate events, and other special occasions.",
        ar: "بالتأكيد، نقدم خدمات المكياج لحفلات الخطوبة، والحفلات، وجلسات التصوير، والاحتفالات، والفعاليات، وغيرها من المناسبات الخاصة.",
      },
    },
    {
      id: "bridal-makeup-preparation",
      question: {
        en: "How should I prepare my skin before makeup?",
        ar: "كيف أجهز بشرتي قبل جلسة المكياج؟",
      },
      answer: {
        en: "Maintaining a healthy skincare routine, keeping your skin well hydrated, and following your beauty specialist's recommendations before the event will help create the best makeup results.",
        ar: "يساعد الالتزام بروتين عناية صحي بالبشرة، والحفاظ على ترطيبها، واتباع تعليمات أخصائي التجميل قبل المناسبة في الحصول على أفضل نتائج للمكياج.",
      },
    },
  ],
},

{
  slug: "nails",
  categorySlug: "beauty-enhancement",

  title: {
    en: "Nails",
    ar: "العناية بالأظافر",
  },

  description: {
    en: "Enhance your personal style with our professional Nail treatments, designed to keep your hands looking polished, healthy, and beautifully maintained with customized care and elegant finishes.",
    ar: "عززي أناقتك مع خدمات العناية بالأظافر الاحترافية المصممة للحفاظ على أظافرك ويديك بمظهر صحي وأنيق ومرتب من خلال عناية مخصصة ولمسات جمالية راقية.",
  },

  image: "/images/treatments/nails.jpg",

  durationMinutes: "45 - 90",

  skinType: {
    en: "All Nail Types",
    ar: "جميع أنواع الأظافر",
  },

  detailDescription: {
    en: "Our professional Nail treatments are designed to maintain healthy, beautiful nails while enhancing your personal style. From classic nail care and shaping to elegant finishes and creative nail designs, every service is tailored to your preferences and nail condition. Using premium products and professional techniques, we help keep your nails strong, well-groomed, and beautifully polished for every occasion.",
    ar: "صُممت خدمات العناية بالأظافر لدينا للحفاظ على صحة وجمال الأظافر مع إبراز أناقتك الشخصية. سواء كنتِ تفضلين العناية الكلاسيكية، أو تشكيل الأظافر، أو اللمسات الراقية، أو التصاميم الإبداعية، يتم تخصيص كل خدمة بما يتناسب مع تفضيلاتك وحالة أظافرك. وباستخدام منتجات عالية الجودة وتقنيات احترافية، نساعدك في الحفاظ على أظافر قوية وأنيقة ومرتبة تناسب جميع المناسبات.",
  },

  sessions: "Personalized Based on Nail Care Needs",

  procedureType: {
    en: "Beauty Enhancement Service",
    ar: "خدمة تجميلية",
  },
    overview: {
    en: "Professional Nail Treatments are designed to improve the appearance, health, and beauty of your nails through expert care, shaping, nourishing treatments, and customized styling. Whether you prefer a timeless, elegant look or creative nail art, every treatment is tailored to your nail condition and personal style for beautifully maintained hands.",
    ar: "صُممت علاجات العناية الاحترافية بالأظافر لتحسين مظهر الأظافر وصحتها وجمالها من خلال العناية المتخصصة، والتشكيل، والعلاجات المغذية، والتصاميم المخصصة. سواء كنتِ تفضلين الإطلالة الكلاسيكية الأنيقة أو تصاميم الأظافر الإبداعية، يتم تخصيص كل جلسة بما يتناسب مع حالة أظافرك وأسلوبك الشخصي للحصول على يدين أنيقتين ومعتنى بهما.",
  },

  overviewImage: "/images/treatments/nails-overview.png",

  benefits: [
    {
      icon: "/images/icons/deep-cleaning.svg",
      title: {
        en: "Beautiful Nail Appearance",
        ar: "مظهر جميل للأظافر",
      },
      description: {
        en: "Creates a polished, elegant finish that enhances your overall appearance and complements your personal style.",
        ar: "يمنح أظافرك مظهرًا أنيقًا ولامعًا يعزز إطلالتك ويتناسب مع أسلوبك الشخصي.",
      },
    },
    {
      icon: "/images/icons/intense-hydration.svg",
      title: {
        en: "Improved Nail Health",
        ar: "تحسين صحة الأظافر",
      },
      description: {
        en: "Supports stronger, healthier, and well-maintained nails through professional care and nourishing treatments.",
        ar: "يساعد على تقوية الأظافر والحفاظ على صحتها من خلال العناية الاحترافية والعلاجات المغذية.",
      },
    },
    {
      icon: "/images/icons/bright-complexion.svg",
      title: {
        en: "Customized Nail Designs",
        ar: "تصاميم أظافر مخصصة",
      },
      description: {
        en: "Choose from a variety of elegant finishes, colors, and creative nail designs tailored to your preferences.",
        ar: "اختاري من بين مجموعة متنوعة من الألوان واللمسات النهائية والتصاميم الإبداعية التي تناسب ذوقك.",
      },
    },
    {
      icon: "/images/icons/improved-textures.svg",
      title: {
        en: "Smooth & Refined Finish",
        ar: "لمسة نهائية ناعمة ومتقنة",
      },
      description: {
        en: "Professional shaping, detailing, and finishing techniques create flawless, beautifully groomed nails.",
        ar: "توفر تقنيات التشكيل والتفاصيل الاحترافية أظافرًا مرتبة بإتقان ولمسة نهائية مثالية.",
      },
    },
    {
      icon: "/images/icons/skin-nourishment.svg",
      title: {
        en: "Relaxing Beauty Experience",
        ar: "تجربة تجميل مريحة",
      },
      description: {
        en: "Enjoy a comfortable and relaxing nail care session that pampers your hands while enhancing their beauty.",
        ar: "استمتعي بجلسة مريحة للعناية بالأظافر تمنح يديك الاهتمام والجمال في أجواء من الاسترخاء.",
      },
    },
    {
      icon: "/images/icons/healthy-skin.svg",
      title: {
        en: "Long-Lasting Results",
        ar: "نتائج تدوم طويلًا",
      },
      description: {
        en: "Professional techniques and premium products help maintain beautiful, well-groomed nails for an extended period.",
        ar: "تساعد التقنيات الاحترافية والمنتجات عالية الجودة في الحفاظ على أظافر جميلة وأنيقة لفترة أطول.",
      },
    },
  ],
    processHeading: {
    en: "Your Journey to",
    ar: "رحلتك نحو",
  },

  processHeadingHighlight: {
    en: "Beautiful Nails",
    ar: "أظافر جميلة",
  },

  processSubheading: {
    en: "Every nail treatment is personalized to deliver healthy, beautifully maintained nails with professional care, precision, and elegant finishing touches.",
    ar: "يتم تخصيص كل جلسة للعناية بالأظافر لتمنحك أظافر صحية وجميلة من خلال عناية احترافية ودقة في التنفيذ ولمسات نهائية أنيقة.",
  },

  process: [
    {
      image: "/images/treatments/hydra-facial-process-1.jpg",
      title: {
        en: "Consultation",
        ar: "الاستشارة",
      },
      description: {
        en: "We begin by assessing your nail condition and discussing your preferred style, nail shape, color, and desired finish to create a personalized treatment experience.",
        ar: "نبدأ بتقييم حالة أظافرك ومناقشة الشكل واللون والتصميم واللمسة النهائية التي تفضلينها لتقديم خدمة مخصصة تناسب ذوقك.",
      },
    },
    {
      image: "/images/treatments/nails-process-2.jpg",
      title: {
        en: "Preparation & Care",
        ar: "التحضير والعناية",
      },
      description: {
        en: "Your nails are carefully cleaned, shaped, and prepared using professional techniques to create the ideal foundation for your chosen nail treatment.",
        ar: "يتم تنظيف الأظافر وتشكيلها وتحضيرها بعناية باستخدام تقنيات احترافية لتوفير قاعدة مثالية للعلاج أو التصميم المختار.",
      },
    },
    {
      image: "/images/treatments/nails-process-3.jpg",
      title: {
        en: "Customized Nail Service",
        ar: "خدمة الأظافر المخصصة",
      },
      description: {
        en: "Your selected nail treatment, color, design, or enhancement is applied with precision and attention to detail, ensuring beautiful and long-lasting results.",
        ar: "يتم تنفيذ العلاج أو اللون أو التصميم أو الإضافة التي اخترتها بدقة واهتمام بأدق التفاصيل للحصول على نتائج جميلة تدوم طويلًا.",
      },
    },
    {
      image: "/images/treatments/nails-process-4.jpg",
      title: {
        en: "Finishing & Nail Care",
        ar: "اللمسات النهائية والعناية",
      },
      description: {
        en: "The treatment concludes with final finishing touches and personalized nail care recommendations to help maintain healthy, strong, and beautifully polished nails.",
        ar: "تُختتم الجلسة باللمسات النهائية مع تقديم نصائح مخصصة للعناية بالأظافر للحفاظ عليها قوية وصحية وجميلة لفترة أطول.",
      },
    },
  ],
    faq: [
    {
      id: "nail-services",
      question: {
        en: "What nail services are available?",
        ar: "ما خدمات العناية بالأظافر المتوفرة؟",
      },
      answer: {
        en: "Our nail services include professional nail care, shaping, polishing, nail enhancements, and customized nail designs tailored to your personal preferences and style.",
        ar: "تشمل خدماتنا العناية الاحترافية بالأظافر، وتشكيلها، وتلميعها، وتعزيزها، وتصميمات أظافر مخصصة تناسب ذوقك وأسلوبك الشخصي.",
      },
    },
    {
      id: "nail-treatments-suitability",
      question: {
        en: "Are nail treatments suitable for everyone?",
        ar: "هل علاجات الأظافر مناسبة للجميع؟",
      },
      answer: {
        en: "Yes. Nail treatments can be customized to suit different nail types, conditions, and personal preferences following a professional consultation.",
        ar: "نعم، يمكن تخصيص علاجات الأظافر لتناسب مختلف أنواع الأظافر وحالاتها وتفضيلاتك الشخصية بعد استشارة مختص.",
      },
    },
    {
      id: "nail-treatment-duration",
      question: {
        en: "How long does a nail treatment take?",
        ar: "كم تستغرق جلسة العناية بالأظافر؟",
      },
      answer: {
        en: "The treatment duration depends on the selected service and level of customization, typically ranging from 45 to 90 minutes.",
        ar: "تعتمد مدة الجلسة على نوع الخدمة ومستوى التخصيص المطلوب، وتتراوح عادةً بين 45 و90 دقيقة.",
      },
    },
    {
      id: "nail-treatment-lasting",
      question: {
        en: "How long do nail treatments last?",
        ar: "كم تدوم نتائج علاجات الأظافر؟",
      },
      answer: {
        en: "The longevity of your results depends on the type of treatment, natural nail growth, lifestyle, and how well you follow the recommended aftercare routine.",
        ar: "تعتمد مدة بقاء النتائج على نوع العلاج، ومعدل نمو الأظافر، ونمط الحياة، ومدى الالتزام بتعليمات العناية اللاحقة.",
      },
    },
    {
      id: "custom-nail-design",
      question: {
        en: "Can I choose my own nail design?",
        ar: "هل يمكنني اختيار تصميم الأظافر الخاص بي؟",
      },
      answer: {
        en: "Absolutely. Our nail specialists can create customized nail designs based on your personal style, special occasion, inspiration, or preferred colors.",
        ar: "بالتأكيد، يمكن لأخصائيي الأظافر تصميم أشكال مخصصة وفقًا لذوقك الشخصي أو مناسبتك أو التصميم أو الألوان التي تفضلينها.",
      },
    },
    {
      id: "nail-aftercare",
      question: {
        en: "How can I maintain my nails after treatment?",
        ar: "كيف أحافظ على أظافري بعد العلاج؟",
      },
      answer: {
        en: "Regular maintenance, gentle nail care, moisturizing your hands and cuticles, and following your specialist's recommendations will help keep your nails healthy, strong, and beautiful.",
        ar: "يساعد الانتظام في العناية بالأظافر، وترطيب اليدين والجلد المحيط بالأظافر، واتباع نصائح الأخصائي في الحفاظ على أظافر صحية وقوية وجميلة.",
      },
    },
    {
      id: "nail-treatment-safety",
      question: {
        en: "Are nail treatments safe?",
        ar: "هل علاجات الأظافر آمنة؟",
      },
      answer: {
        en: "Yes. All nail treatments are performed by trained professionals using proper hygiene standards, sterilized tools, and high-quality products to ensure a safe and comfortable experience.",
        ar: "نعم، يتم تنفيذ جميع خدمات الأظافر بواسطة مختصين مدربين مع الالتزام بمعايير النظافة، واستخدام أدوات معقمة ومنتجات عالية الجودة لضمان تجربة آمنة ومريحة.",
      },
    },
  ],

},
{
  slug: "manicure-pedicure",
  categorySlug: "beauty-enhancement",

  title: {
    en: "Manicure & Pedicure",
    ar: "مانيكير وباديكير",
  },

  description: {
    en: "Indulge in professional Manicure & Pedicure treatments designed to nourish, refresh, and enhance the beauty of your hands and feet. Combining expert care with deep cleansing, exfoliation, and hydration, this treatment promotes healthy nails and beautifully soft skin.",
    ar: "استمتعي بخدمات المانيكير والباديكير الاحترافية المصممة لتغذية اليدين والقدمين وإنعاشهما وتعزيز جمالهما. تجمع هذه الجلسات بين العناية المتخصصة والتنظيف العميق والتقشير والترطيب للحفاظ على أظافر صحية وبشرة ناعمة وجميلة.",
  },

  image: "/images/treatments/manicure-pedicure.jpg",

  durationMinutes: "60 - 90",

  skinType: {
    en: "All Skin & Nail Types",
    ar: "جميع أنواع البشرة والأظافر",
  },

  detailDescription: {
    en: "Our professional Manicure & Pedicure treatments are designed to care for your hands, feet, nails, and cuticles through deep cleansing, exfoliation, hydration, and expert grooming techniques. Each treatment is personalized according to your skin and nail care needs, helping maintain healthy nails, softer skin, and a refreshed appearance while providing a relaxing self-care experience.",
    ar: "صُممت جلسات المانيكير والباديكير الاحترافية لدينا للعناية باليدين والقدمين والأظافر والجلد المحيط بها من خلال التنظيف العميق، والتقشير، والترطيب، وتقنيات العناية الاحترافية. يتم تخصيص كل جلسة وفقًا لاحتياجات بشرتك وأظافرك، مما يساعد على الحفاظ على أظافر صحية وبشرة أكثر نعومة مع تجربة استرخاء متكاملة.",
  },

  sessions: "Personalized Based on Care Needs",

  procedureType: {
    en: "Beauty Enhancement Service",
    ar: "خدمة تجميلية",
  },
    overview: {
    en: "Manicure & Pedicure are professional hand and foot care treatments designed to improve nail health, soften the skin, and enhance the overall appearance of your hands and feet. The treatment includes deep cleansing, nail shaping, exfoliation, hydration, cuticle care, and finishing touches to leave your hands and feet feeling refreshed, smooth, and beautifully maintained.",
    ar: "المانيكير والباديكير هما علاجان احترافيان للعناية باليدين والقدمين يهدفان إلى تحسين صحة الأظافر، وتنعيم البشرة، وتعزيز المظهر العام لليدين والقدمين. تشمل الجلسة التنظيف العميق، وتشكيل الأظافر، والتقشير، والترطيب، والعناية بالجلد المحيط بالأظافر، واللمسات النهائية للحصول على يدين وقدمين ناعمتين ومنتعشتين ومعتنى بهما.",
  },

  overviewImage: "/images/treatments/manicure-pedicure-overview.png",

  benefits: [
    {
      icon: "/images/icons/deep-cleaning.svg",
      title: {
        en: "Soft & Smooth Skin",
        ar: "بشرة ناعمة وملساء",
      },
      description: {
        en: "Removes dead skin cells and improves skin texture through gentle exfoliation, leaving your hands and feet soft and refreshed.",
        ar: "يزيل خلايا الجلد الميت ويحسن ملمس البشرة من خلال التقشير اللطيف، ليترك اليدين والقدمين ناعمتين ومنتعشتين.",
      },
    },
    {
      icon: "/images/icons/intense-hydration.svg",
      title: {
        en: "Deep Hydration",
        ar: "ترطيب عميق",
      },
      description: {
        en: "Provides essential moisture to nourish the skin, prevent dryness, and maintain long-lasting softness.",
        ar: "يوفر ترطيبًا عميقًا لتغذية البشرة، ومنع الجفاف، والحفاظ على نعومتها لفترة أطول.",
      },
    },
    {
      icon: "/images/icons/bright-complexion.svg",
      title: {
        en: "Improved Nail Care",
        ar: "عناية أفضل بالأظافر",
      },
      description: {
        en: "Supports stronger, healthier-looking nails through professional grooming, shaping, and regular maintenance.",
        ar: "يساعد على الحفاظ على أظافر أقوى وأكثر صحة من خلال العناية الاحترافية والتشكيل والصيانة المنتظمة.",
      },
    },
    {
      icon: "/images/icons/improved-textures.svg",
      title: {
        en: "Relaxation & Stress Relief",
        ar: "الاسترخاء وتخفيف التوتر",
      },
      description: {
        en: "Enjoy a calming self-care experience with soothing massage techniques and professional hand and foot care.",
        ar: "استمتعي بتجربة استرخاء مميزة من خلال تقنيات التدليك اللطيفة والعناية الاحترافية باليدين والقدمين.",
      },
    },
    {
      icon: "/images/icons/skin-nourishment.svg",
      title: {
        en: "Polished Appearance",
        ar: "مظهر أنيق ومرتب",
      },
      description: {
        en: "Leaves your hands and feet looking clean, elegant, refreshed, and beautifully groomed for any occasion.",
        ar: "يمنح يديك وقدميك مظهرًا نظيفًا وأنيقًا ومنتعشًا ومعتنى بهما بشكل جميل في جميع المناسبات.",
      },
    },
    {
      icon: "/images/icons/healthy-skin.svg",
      title: {
        en: "Healthy & Beautiful Nails",
        ar: "أظافر صحية وجميلة",
      },
      description: {
        en: "Keeps your nails clean, neatly shaped, and professionally maintained to enhance both beauty and nail health.",
        ar: "يحافظ على نظافة الأظافر وتشكيلها والعناية بها باحترافية، مما يعزز جمالها وصحتها في الوقت نفسه.",
      },
    },
  ],
    processHeading: {
    en: "Your Journey to",
    ar: "رحلتك نحو",
  },

  processHeadingHighlight: {
    en: "Complete Nail & Skin Care",
    ar: "عناية متكاملة بالأظافر والبشرة",
  },

  processSubheading: {
    en: "Every Manicure & Pedicure treatment is thoughtfully designed to nourish your hands and feet, promote healthy nails, and provide a relaxing self-care experience.",
    ar: "تم تصميم كل جلسة مانيكير وباديكير بعناية لتغذية اليدين والقدمين، وتعزيز صحة الأظافر، وتوفير تجربة عناية واسترخاء متكاملة.",
  },

  process: [
    {
      image: "/images/treatments/hydra-facial-process-1.jpg",
      title: {
        en: "Consultation",
        ar: "الاستشارة",
      },
      description: {
        en: "We begin by assessing your nail condition, skin concerns, and personal preferences to recommend the most suitable manicure and pedicure treatment.",
        ar: "نبدأ بتقييم حالة أظافرك وبشرتك وفهم احتياجاتك وتفضيلاتك لاختيار خدمة المانيكير والباديكير الأنسب لك.",
      },
    },
    {
      image: "/images/treatments/manicure-pedicure-process-2.jpg",
      title: {
        en: "Cleansing & Preparation",
        ar: "التنظيف والتحضير",
      },
      description: {
        en: "Your hands and feet are gently cleansed and prepared to remove impurities, soften the skin, and create the ideal foundation for professional nail care.",
        ar: "يتم تنظيف اليدين والقدمين وتحضيرهما بلطف لإزالة الشوائب، وتنعيم البشرة، وتهيئتهما للعناية الاحترافية بالأظافر.",
      },
    },
    {
      image: "/images/treatments/manicure-pedicure-process-3.jpg",
      title: {
        en: "Exfoliation & Care",
        ar: "التقشير والعناية",
      },
      description: {
        en: "Dead skin cells are gently exfoliated, followed by nail shaping, cuticle care, and detailed grooming to improve both nail health and appearance.",
        ar: "تتم إزالة خلايا الجلد الميت بلطف، يليها تشكيل الأظافر والعناية بالجلد المحيط بها والاهتمام بالتفاصيل للحصول على أظافر صحية وجميلة.",
      },
    },
    {
      image: "/images/treatments/manicure-pedicure-process-4.jpg",
      title: {
        en: "Hydration & Finishing",
        ar: "الترطيب واللمسات النهائية",
      },
      description: {
        en: "The treatment concludes with nourishing moisturizers, a relaxing massage, and finishing touches that leave your hands and feet feeling soft, refreshed, and beautifully cared for.",
        ar: "تُختتم الجلسة باستخدام مرطبات مغذية، وتدليك مريح، ولمسات نهائية تمنح يديك وقدميك نعومة وانتعاشًا ومظهرًا أنيقًا ومعتنى به.",
      },
    },
  ],
    faq: [
    {
      id: "manicure-pedicure-includes",
      question: {
        en: "What is included in a Manicure & Pedicure treatment?",
        ar: "ماذا تتضمن جلسة المانيكير والباديكير؟",
      },
      answer: {
        en: "A professional Manicure & Pedicure treatment typically includes cleansing, nail shaping, cuticle care, exfoliation, hydration, massage, and finishing care to keep your hands and feet healthy and beautifully maintained.",
        ar: "تتضمن جلسة المانيكير والباديكير الاحترافية عادةً تنظيف اليدين والقدمين، وتشكيل الأظافر، والعناية بالجلد المحيط بالأظافر، والتقشير، والترطيب، والتدليك، واللمسات النهائية للحفاظ على صحة وجمال اليدين والقدمين.",
      },
    },
    {
      id: "manicure-pedicure-frequency",
      question: {
        en: "How often should I get a Manicure & Pedicure?",
        ar: "كم مرة يُنصح بإجراء جلسة مانيكير وباديكير؟",
      },
      answer: {
        en: "The recommended frequency depends on your lifestyle, nail condition, and personal care needs. Regular treatments help maintain healthy nails, soft skin, and well-groomed hands and feet.",
        ar: "يعتمد عدد الجلسات الموصى بها على نمط حياتك، وحالة أظافرك، واحتياجاتك الشخصية. وتساعد الجلسات المنتظمة في الحفاظ على أظافر صحية وبشرة ناعمة ويدين وقدمين بمظهر أنيق.",
      },
    },
    {
      id: "manicure-pedicure-suitability",
      question: {
        en: "Is Manicure & Pedicure suitable for everyone?",
        ar: "هل المانيكير والباديكير مناسب للجميع؟",
      },
      answer: {
        en: "Yes. Treatments can be customized to suit different skin types, nail conditions, and individual preferences for a safe and comfortable experience.",
        ar: "نعم، يمكن تخصيص الجلسات لتناسب مختلف أنواع البشرة وحالات الأظافر والتفضيلات الشخصية، مما يضمن تجربة آمنة ومريحة.",
      },
    },
    {
      id: "manicure-pedicure-duration",
      question: {
        en: "How long does the treatment take?",
        ar: "كم تستغرق جلسة المانيكير والباديكير؟",
      },
      answer: {
        en: "A typical Manicure & Pedicure session takes approximately 60 to 90 minutes, depending on the selected services and level of customization.",
        ar: "تستغرق جلسة المانيكير والباديكير عادةً من 60 إلى 90 دقيقة، وذلك حسب نوع الخدمات المختارة ومستوى التخصيص المطلوب.",
      },
    },
    {
      id: "manicure-pedicure-polish",
      question: {
        en: "Can I add nail polish or nail art?",
        ar: "هل يمكن إضافة طلاء أو تصميمات للأظافر؟",
      },
      answer: {
        en: "Yes. Additional finishing options such as classic polish, gel polish, or customized nail art can be added according to your personal style and preferences.",
        ar: "نعم، يمكنك إضافة خيارات نهائية مثل طلاء الأظافر التقليدي أو الجل أو تصميمات الأظافر المخصصة بما يتناسب مع ذوقك الشخصي.",
      },
    },
    {
      id: "manicure-pedicure-aftercare",
      question: {
        en: "How can I maintain my results after the treatment?",
        ar: "كيف أحافظ على النتائج بعد الجلسة؟",
      },
      answer: {
        en: "Keep your hands and feet moisturized, protect your nails from excessive damage, and follow your specialist's care recommendations to maintain long-lasting, beautiful results.",
        ar: "احرص على ترطيب اليدين والقدمين بانتظام، وحماية الأظافر من التلف، واتباع تعليمات الأخصائي للحفاظ على نتائج جميلة تدوم لفترة أطول.",
      },
    },
    {
      id: "manicure-pedicure-safety",
      question: {
        en: "Are professional Manicure & Pedicure treatments safe?",
        ar: "هل جلسات المانيكير والباديكير الاحترافية آمنة؟",
      },
      answer: {
        en: "Yes. Our treatments are performed by trained professionals using hygienic practices, sterilized tools, and professional techniques to ensure a safe, comfortable, and relaxing experience.",
        ar: "نعم، يتم تنفيذ جميع جلسات المانيكير والباديكير بواسطة مختصين مدربين مع الالتزام بمعايير النظافة، واستخدام أدوات معقمة وتقنيات احترافية لضمان تجربة آمنة ومريحة وممتعة.",
      },
    },
  ],
},
{
  slug: "microblading",
  categorySlug: "beauty-enhancement",

  title: {
    en: "Microblading",
    ar: "الميكروبليدنج",
  },

  description: {
    en: "Enhance your natural beauty with Microblading, a semi-permanent eyebrow enhancement treatment designed to create fuller, beautifully shaped, and natural-looking brows with precision and artistry.",
    ar: "عززي جمالك الطبيعي مع الميكروبليدنج، وهو علاج شبه دائم لتحديد الحواجب يمنحك حواجب أكثر كثافة وتناسقًا بمظهر طبيعي من خلال تقنيات دقيقة وفنية.",
  },

  image: "/images/treatments/microblading.jpg",

  durationMinutes: "120 - 180",

  skinType: {
    en: "Most Skin Types",
    ar: "معظم أنواع البشرة",
  },

  detailDescription: {
    en: "Microblading is a semi-permanent eyebrow enhancement technique that uses precise, hair-like strokes and customized pigments to create fuller, naturally defined brows. Every treatment is tailored to your facial features, skin tone, and personal preferences, ensuring beautifully balanced eyebrows that complement your natural appearance while reducing the need for daily brow makeup.",
    ar: "الميكروبليدنج هو تقنية شبه دائمة لتجميل الحواجب تعتمد على رسم شعيرات دقيقة باستخدام أصباغ مخصصة للحصول على حواجب أكثر كثافة وتحديدًا بمظهر طبيعي. يتم تخصيص كل جلسة بما يتناسب مع ملامح وجهك، ولون بشرتك، وتفضيلاتك الشخصية للحصول على حواجب متناسقة تعزز جمالك الطبيعي وتقلل الحاجة إلى مكياج الحواجب اليومي.",
  },

  sessions: "1 - 2",

  procedureType: {
    en: "Semi-Permanent Treatment",
    ar: "علاج شبه دائم",
  },
    overview: {
    en: "Microblading is a semi-permanent eyebrow enhancement treatment that uses a precision technique to create realistic, hair-like strokes within the brow area. It helps improve the appearance of sparse, uneven, or undefined eyebrows while creating fuller, beautifully shaped brows that maintain a soft, natural, and elegant look.",
    ar: "الميكروبليدنج هو علاج شبه دائم لتجميل الحواجب يستخدم تقنية دقيقة لرسم شعيرات تحاكي الشعر الطبيعي داخل منطقة الحاجب. يساعد على تحسين مظهر الحواجب الخفيفة أو غير المتناسقة أو غير المحددة، ليمنحك حواجب أكثر كثافة وتناسقًا بمظهر طبيعي وأنيق.",
  },

  overviewImage: "/images/treatments/microblading-overview.png",

  benefits: [
    {
      icon: "/images/icons/deep-cleaning.svg",
      title: {
        en: "Natural-Looking Brow Enhancement",
        ar: "تعزيز طبيعي للحواجب",
      },
      description: {
        en: "Creates fine, realistic hair-like strokes that blend seamlessly with your natural brows for a soft and elegant finish.",
        ar: "يرسم شعيرات دقيقة تحاكي الشعر الطبيعي لتندمج بانسيابية مع الحواجب وتمنح مظهرًا ناعمًا وأنيقًا.",
      },
    },
    {
      icon: "/images/icons/intense-hydration.svg",
      title: {
        en: "Customized Brow Shape",
        ar: "تصميم مخصص للحواجب",
      },
      description: {
        en: "Brows are carefully designed according to your facial features, symmetry, and personal beauty preferences for perfectly balanced results.",
        ar: "يتم تصميم الحواجب بعناية بما يتناسب مع ملامح وجهك وتناسقه وتفضيلاتك الجمالية للحصول على نتائج متوازنة.",
      },
    },
    {
      icon: "/images/icons/bright-complexion.svg",
      title: {
        en: "Fuller & Defined Brows",
        ar: "حواجب أكثر كثافة وتحديدًا",
      },
      description: {
        en: "Enhances sparse or uneven brows by adding natural-looking fullness, shape, and definition.",
        ar: "يعزز الحواجب الخفيفة أو غير المتناسقة بإضافة كثافة وتحديد وشكل طبيعي وجذاب.",
      },
    },
    {
      icon: "/images/icons/improved-textures.svg",
      title: {
        en: "Saves Daily Makeup Time",
        ar: "يوفر وقت المكياج اليومي",
      },
      description: {
        en: "Reduces the need for daily eyebrow pencils, powders, and shaping, making your beauty routine quicker and easier.",
        ar: "يقلل الحاجة إلى استخدام أقلام الحواجب أو البودرة أو التحديد اليومي، مما يجعل روتينك اليومي أسرع وأسهل.",
      },
    },
    {
      icon: "/images/icons/skin-nourishment.svg",
      title: {
        en: "Long-Lasting Results",
        ar: "نتائج تدوم طويلًا",
      },
      description: {
        en: "Provides beautiful semi-permanent brow definition that maintains its appearance for an extended period with proper aftercare.",
        ar: "يوفر تحديدًا جميلًا للحواجب يدوم لفترة طويلة عند الالتزام بالعناية اللاحقة المناسبة.",
      },
    },
    {
      icon: "/images/icons/healthy-skin.svg",
      title: {
        en: "Enhances Facial Features",
        ar: "إبراز جمال ملامح الوجه",
      },
      description: {
        en: "Beautifully shaped brows frame the eyes and create greater facial balance, harmony, and confidence.",
        ar: "تساعد الحواجب المتناسقة على إبراز جمال العينين وتحقيق توازن أفضل لملامح الوجه مع تعزيز الثقة بالنفس.",
      },
    },
  ],  processHeading: {
    en: "Your Journey to",
    ar: "رحلتك نحو",
  },

  processHeadingHighlight: {
    en: "Perfectly Defined Brows",
    ar: "حواجب محددة بإتقان",
  },

  processSubheading: {
    en: "Every Microblading treatment is carefully customized to create natural-looking brows that beautifully complement your facial features and personal style.",
    ar: "يتم تخصيص كل جلسة ميكروبليدنج بعناية لابتكار حواجب طبيعية المظهر تتناغم مع ملامح وجهك وأسلوبك الشخصي.",
  },

  process: [
    {
      image: "/images/treatments/hydra-facial-process-1.jpg",
      title: {
        en: "Consultation",
        ar: "الاستشارة",
      },
      description: {
        en: "We begin with a detailed consultation to understand your preferred brow style, evaluate your facial features, and assess your natural brows before creating a personalized treatment plan.",
        ar: "نبدأ باستشارة تفصيلية لفهم شكل الحواجب الذي ترغبين به، وتقييم ملامح وجهك، ودراسة حواجبك الطبيعية قبل إعداد خطة علاج مخصصة.",
      },
    },
    {
      image: "/images/treatments/microblading-process-2.jpg",
      title: {
        en: "Brow Mapping & Design",
        ar: "تخطيط وتصميم الحواجب",
      },
      description: {
        en: "Our specialists carefully map and design your brows to achieve ideal symmetry, balance, and a shape that naturally complements your facial features.",
        ar: "يقوم أخصائيونا بتخطيط وتصميم الحواجب بعناية لتحقيق التناسق والتوازن واختيار الشكل الذي يتناسب بشكل طبيعي مع ملامح وجهك.",
      },
    },
    {
      image: "/images/treatments/microblading-process-3.jpg",
      title: {
        en: "Microblading Application",
        ar: "تطبيق الميكروبليدنج",
      },
      description: {
        en: "Using precision tools and customized pigments, fine hair-like strokes are expertly created to enhance brow fullness, definition, and natural beauty.",
        ar: "باستخدام أدوات دقيقة وأصباغ مخصصة، يتم رسم شعيرات تحاكي الشعر الطبيعي لتعزيز كثافة الحواجب وتحديدها وإبراز جمالها الطبيعي.",
      },
    },
    {
      image: "/images/treatments/microblading-process-4.jpg",
      title: {
        en: "Healing Care & Touch-Up",
        ar: "العناية بعد الجلسة وجلسة التعزيز",
      },
      description: {
        en: "Comprehensive aftercare instructions are provided to support proper healing and pigment retention. A touch-up session may be recommended to perfect and maintain your final results.",
        ar: "نقدم تعليمات شاملة للعناية اللاحقة لدعم التعافي السليم والحفاظ على ثبات اللون. وقد يُوصى بجلسة تعزيز للحصول على أفضل النتائج والمحافظة عليها.",
      },
    },
  ],
    faq: [
    {
      id: "microblading-what-is",
      question: {
        en: "What is Microblading?",
        ar: "ما هو الميكروبليدنج؟",
      },
      answer: {
        en: "Microblading is a semi-permanent eyebrow enhancement technique that uses specialized tools and customized pigments to create realistic, hair-like strokes for fuller, natural-looking brows.",
        ar: "الميكروبليدنج هو تقنية شبه دائمة لتجميل الحواجب تستخدم أدوات متخصصة وأصباغ مخصصة لرسم شعيرات تحاكي الشعر الطبيعي، مما يمنح الحواجب مظهرًا أكثر كثافة وطبيعية.",
      },
    },
    {
      id: "microblading-results-duration",
      question: {
        en: "How long do Microblading results last?",
        ar: "كم تدوم نتائج الميكروبليدنج؟",
      },
      answer: {
        en: "Results typically last between 12 and 18 months depending on your skin type, lifestyle, skincare routine, and how well you follow the recommended aftercare instructions.",
        ar: "تدوم النتائج عادةً من 12 إلى 18 شهرًا حسب نوع البشرة، ونمط الحياة، وروتين العناية بالبشرة، والالتزام بتعليمات العناية اللاحقة.",
      },
    },
    {
      id: "microblading-suitability",
      question: {
        en: "Is Microblading suitable for everyone?",
        ar: "هل الميكروبليدنج مناسب للجميع؟",
      },
      answer: {
        en: "Microblading is suitable for many clients. A professional consultation is recommended to assess your skin type, eyebrow condition, and desired results before treatment.",
        ar: "الميكروبليدنج مناسب للعديد من الأشخاص، ولكن يُنصح بإجراء استشارة احترافية لتقييم نوع البشرة وحالة الحواجب والنتائج المطلوبة قبل بدء العلاج.",
      },
    },
    {
      id: "microblading-pain",
      question: {
        en: "Does Microblading hurt?",
        ar: "هل يسبب الميكروبليدنج الألم؟",
      },
      answer: {
        en: "A topical numbing solution is applied before the procedure to maximize comfort. Most clients experience only mild discomfort during treatment.",
        ar: "يتم استخدام مخدر موضعي قبل الجلسة لزيادة الراحة، ويشعر معظم العملاء بانزعاج بسيط فقط أثناء العلاج.",
      },
    },
    {
      id: "microblading-procedure-time",
      question: {
        en: "How long does the Microblading procedure take?",
        ar: "كم تستغرق جلسة الميكروبليدنج؟",
      },
      answer: {
        en: "The complete Microblading procedure usually takes around 2 to 3 hours, including consultation, brow mapping, design, and the treatment itself.",
        ar: "تستغرق جلسة الميكروبليدنج عادةً من ساعتين إلى ثلاث ساعات، وتشمل الاستشارة، وتخطيط الحواجب، والتصميم، وتنفيذ العلاج.",
      },
    },
    {
      id: "microblading-natural-results",
      question: {
        en: "Will my brows look natural after Microblading?",
        ar: "هل ستبدو حواجبي طبيعية بعد الميكروبليدنج؟",
      },
      answer: {
        en: "Yes. Microblading is designed to create fine, realistic hair-like strokes that blend naturally with your existing brows and complement your facial features.",
        ar: "نعم، صُممت تقنية الميكروبليدنج لرسم شعيرات دقيقة تحاكي الشعر الطبيعي وتندمج مع حواجبك الحالية لتمنحك مظهرًا طبيعيًا ومتناسقًا مع ملامح وجهك.",
      },
    },
    {
      id: "microblading-aftercare",
      question: {
        en: "What should I do after Microblading treatment?",
        ar: "كيف أعتني بحواجبي بعد جلسة الميكروبليدنج؟",
      },
      answer: {
        en: "Follow your specialist's aftercare instructions, avoid excessive moisture and direct sun exposure during the healing period, and use only the recommended products to support proper healing and maintain long-lasting results.",
        ar: "اتبع تعليمات الأخصائي للعناية اللاحقة، وتجنب الرطوبة الزائدة وأشعة الشمس المباشرة خلال فترة التعافي، واستخدم فقط المنتجات الموصى بها لضمان التعافي السليم والحفاظ على النتائج لفترة أطول.",
      },
    },
  ],
}

];
