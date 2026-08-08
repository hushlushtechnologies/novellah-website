 import type { Localized } from "@/lib/navigation";

export type DoctorCategory = "dermatology" | "aesthetic-medicine" | "laser-specialist" | "skin-care";

export interface Doctor {
  slug: string;
  name: string;
  title: Localized;
  specialty: Localized;
  category: DoctorCategory;
  experienceYears: number;
  qualification: string;
  qualificationField: Localized;
  image: string;
  cutoutImage: string;
  roomImage: string;
  bio: Localized;
  languages: Localized;
  educationDetail: Localized;
   philosophySubheading: Localized; //  
  aboutParagraph1: Localized;
  aboutParagraph2: Localized;
  treatmentCategorySlugs: string[];
}

export const doctorCategories: { slug: DoctorCategory; label: string }[] = [
  { slug: "dermatology", label: "Dermatology" },
  { slug: "aesthetic-medicine", label: "Aesthetic Medicine" },
  { slug: "laser-specialist", label: "Laser Specialist" },
  { slug: "skin-care", label: "Skin Care" },
];

export const doctors: Doctor[] = [
  {
  slug: "ahamed-razeen",
  name: "Dr. Ahamed Razeen",
  title: {
    en: "Founder & CEO",
    ar: "المؤسس والرئيس التنفيذي",
  },
  specialty: {
    en: "Aesthetic Physician & Skin Specialist",
    ar: "طبيب تجميل وأخصائي بشرة",
  },
  category: "dermatology",
  experienceYears: 10,
  qualification: "MBBS, MD",
  qualificationField: {
    en: "Dermatology",
    ar: "الأمراض الجلدية",
  },
  image: "/images/doctors/ahamed-razeen.png",
  cutoutImage: "/images/doctors/ahamed-razeen-cutout.png",
  roomImage: "/images/doctors/ahamed-razeen-room.png",
  bio: {
    en: "Dedicated to enhancing natural beauty through advanced aesthetic treatments and personalized care. With a passion for precision and a commitment to excellence, Dr. Ahamed helps his clients look and feel their absolute best.",
    ar: "يكرّس جهوده لتعزيز الجمال الطبيعي من خلال العلاجات التجميلية المتقدمة والرعاية الشخصية. وبفضل شغفه بالدقة والتزامه بالتميز، يساعد الدكتور أحمد عملاءه على الظهور بأفضل صورة والشعور بثقة أكبر.",
  },
  languages: {
    en: "English, Arabic",
    ar: "الإنجليزية، العربية",
  },
  educationDetail: {
    en: "MBBS, American University of Sharjah",
    ar: "بكالوريوس الطب والجراحة، الجامعة الأمريكية في الشارقة",
  },
  philosophySubheading: {
    en: "Dr. Ahamed believes that true beauty lies in confidence. His approach is centered on enhancing your natural features with advanced techniques, personalized care and the highest standards of safety.",
    ar: "يؤمن الدكتور أحمد بأن الجمال الحقيقي يكمن في الثقة بالنفس. ويرتكز نهجه على إبراز ملامحك الطبيعية باستخدام أحدث التقنيات، مع تقديم رعاية شخصية والالتزام بأعلى معايير السلامة.",
  },
  aboutParagraph1: {
    en: "With over 10 years of experience in aesthetic medicine, Dr. Ahamed combines medical expertise with an artistic eye to deliver natural-looking results tailored to each individual's unique features and goals.",
    ar: "بخبرة تزيد على 10 سنوات في مجال الطب التجميلي، يجمع الدكتور أحمد بين الخبرة الطبية والرؤية الفنية لتقديم نتائج طبيعية تتناسب مع ملامح وأهداف كل شخص على حدة.",
  },
  aboutParagraph2: {
    en: "He continuously updates his knowledge with international training and the latest technologies to provide his clients with the best possible care.",
    ar: "يحرص باستمرار على تطوير خبراته من خلال التدريب الدولي ومواكبة أحدث التقنيات، لضمان تقديم أفضل مستويات الرعاية وأحدث الحلول العلاجية لعملائه.",
  },
  treatmentCategorySlugs: ["advanced-skin-care"],
},
{
  slug: "fatima-al-hassan",
  name: "Dr. Fatima Al Hassan",
  title: {
    en: "Consultant Dermatologist",
    ar: "استشارية الأمراض الجلدية",
  },
  specialty: {
    en: "Dermatologist & Laser Specialist",
    ar: "طبيبة جلدية وأخصائية الليزر",
  },
  category: "dermatology",
  experienceYears: 8,
  qualification: "MBBS, MD",
  qualificationField: {
    en: "Dermatology",
    ar: "الأمراض الجلدية",
  },
  image: "/images/doctors/fatima-al-hassan.png",
  cutoutImage: "/images/doctors/ahamed-razeen-cutout.png",
  roomImage: "/images/doctors/ahamed-razeen-room.png",

  bio: {
    en: "Passionate about helping patients achieve healthy, radiant skin through evidence-based treatments and advanced dermatological care. Dr. Fatima combines medical expertise with a personalized approach to deliver safe and natural-looking results.",
    ar: "تؤمن بأهمية مساعدة المرضى على الحصول على بشرة صحية ومشرقة من خلال العلاجات المبنية على الأدلة وأحدث تقنيات الأمراض الجلدية. تجمع الدكتورة فاطمة بين الخبرة الطبية والرعاية الشخصية لتحقيق نتائج آمنة وطبيعية.",
  },

  languages: {
    en: "English, Arabic",
    ar: "الإنجليزية، العربية",
  },

  educationDetail: {
    en: "MBBS, Dubai Medical College",
    ar: "بكالوريوس الطب والجراحة، كلية دبي الطبية",
  },

  philosophySubheading: {
    en: "Healthy skin is the foundation of confidence. Dr. Fatima focuses on individualized treatment plans that enhance skin health while preserving natural beauty through modern dermatological techniques.",
    ar: "تؤمن الدكتورة فاطمة بأن البشرة الصحية هي أساس الثقة بالنفس، ولذلك تعتمد على خطط علاجية مخصصة تعزز صحة البشرة وتحافظ على جمالها الطبيعي باستخدام أحدث التقنيات الطبية.",
  },

  aboutParagraph1: {
    en: "Dr. Fatima has over 8 years of experience treating a wide range of skin conditions, including acne, pigmentation, melasma, rosacea and signs of aging. She is known for delivering natural results with a patient-centered approach.",
    ar: "تمتلك الدكتورة فاطمة أكثر من 8 سنوات من الخبرة في علاج مختلف مشاكل البشرة، بما في ذلك حب الشباب، والتصبغات، والكلف، والوردية، وعلامات التقدم في العمر، مع التركيز على تحقيق نتائج طبيعية ورعاية مخصصة لكل مريض.",
  },

  aboutParagraph2: {
    en: "She regularly participates in international conferences and advanced training programs to stay updated with the latest innovations in dermatology and aesthetic medicine.",
    ar: "تحرص على المشاركة المستمرة في المؤتمرات الدولية والبرامج التدريبية المتقدمة لمواكبة أحدث الابتكارات في مجال الأمراض الجلدية والطب التجميلي.",
  },

  treatmentCategorySlugs: [
    "advanced-skin-care",
    "laser-treatments",
    "anti-aging"
  ],
},
{
  slug: "omar-al-nuaimi",
  name: "Dr. Omar Al Nuaimi",
  title: {
    en: "Consultant Aesthetic Physician",
    ar: "استشاري الطب التجميلي",
  },
  specialty: {
    en: "Aesthetic Medicine & Anti-Aging Specialist",
    ar: "أخصائي الطب التجميلي ومكافحة الشيخوخة",
  },
  category: "aesthetic-medicine",
  experienceYears: 12,
  qualification: "MBBS, MSc",
  qualificationField: {
    en: "Aesthetic Medicine",
    ar: "الطب التجميلي",
  },
  image: "/images/doctors/omar-al-nuaimi.png",
  cutoutImage: "/images/doctors/ahamed-razeen-cutout.png",
  roomImage: "/images/doctors/ahamed-razeen-room.png",
  bio: {
    en: "Specializing in non-surgical facial rejuvenation, Dr. Omar is dedicated to achieving natural, youthful results using advanced aesthetic techniques tailored to each patient's unique features.",
    ar: "يتخصص الدكتور عمر في تجديد شباب الوجه دون جراحة، ويحرص على تحقيق نتائج طبيعية وشابة باستخدام أحدث التقنيات التجميلية المصممة بما يناسب ملامح كل مريض.",
  },

  languages: {
    en: "English, Arabic",
    ar: "الإنجليزية، العربية",
  },

  educationDetail: {
    en: "MBBS, MSc in Aesthetic Medicine, University of Dubai",
    ar: "بكالوريوس الطب والجراحة، ماجستير في الطب التجميلي، جامعة دبي",
  },

  philosophySubheading: {
    en: "Every face is unique. Dr. Omar believes aesthetic treatments should enhance natural beauty while preserving individuality and facial harmony.",
    ar: "يؤمن الدكتور عمر بأن لكل وجه جماله الخاص، وأن الهدف من العلاجات التجميلية هو إبراز الجمال الطبيعي مع الحفاظ على الهوية وتناسق الملامح.",
  },

  aboutParagraph1: {
    en: "With more than 12 years of clinical experience, Dr. Omar has successfully treated thousands of patients using Botox, dermal fillers, skin boosters and regenerative therapies with consistently natural-looking outcomes.",
    ar: "بخبرة تزيد على 12 عاماً، نجح الدكتور عمر في علاج آلاف المرضى باستخدام البوتوكس والفيلر ومحفزات البشرة والعلاجات التجديدية مع تحقيق نتائج طبيعية باستمرار.",
  },

  aboutParagraph2: {
    en: "He regularly attends international aesthetic conferences and advanced hands-on workshops to ensure his patients benefit from the latest evidence-based techniques and innovations.",
    ar: "يشارك باستمرار في المؤتمرات الدولية وورش العمل المتقدمة في مجال الطب التجميلي لضمان حصول مرضاه على أحدث التقنيات والحلول العلاجية المعتمدة.",
  },

  treatmentCategorySlugs: [
    "injectables",
    "anti-aging",
    "advanced-skin-care"
  ],
},
{
  slug: "layla-al-mansoori",
  name: "Dr. Layla Al Mansoori",
  title: {
    en: "Consultant Dermatologist",
    ar: "استشارية الأمراض الجلدية",
  },
  specialty: {
    en: "Laser & Cosmetic Dermatologist",
    ar: "استشارية الجلدية والليزر والتجميل",
  },
  category: "dermatology",
  experienceYears: 9,
  qualification: "MBBS, MD",
  qualificationField: {
    en: "Dermatology",
    ar: "الأمراض الجلدية",
  },
  image: "/images/doctors/layla-al-mansoori.png",
  cutoutImage: "/images/doctors/ahamed-razeen-cutout.png",
  roomImage: "/images/doctors/ahamed-razeen-room.png",
  bio: {
    en: "Dr. Layla is committed to restoring healthy, radiant skin through advanced laser technology and personalized dermatological treatments. She focuses on delivering natural, long-lasting results while ensuring every patient receives exceptional care.",
    ar: "تلتزم الدكتورة ليلى باستعادة صحة البشرة وإشراقتها من خلال أحدث تقنيات الليزر والعلاجات الجلدية المخصصة، مع التركيز على تحقيق نتائج طبيعية وطويلة الأمد وتقديم رعاية استثنائية لكل مريض.",
  },

  languages: {
    en: "English, Arabic",
    ar: "الإنجليزية، العربية",
  },

  educationDetail: {
    en: "MBBS, MD Dermatology, Gulf Medical University",
    ar: "بكالوريوس الطب والجراحة، دكتوراه في الأمراض الجلدية، جامعة الخليج الطبية",
  },

  philosophySubheading: {
    en: "Beautiful skin begins with healthy skin. Dr. Layla combines science, technology and personalized care to help every patient achieve long-term skin confidence.",
    ar: "تؤمن الدكتورة ليلى بأن جمال البشرة يبدأ بصحتها، لذلك تجمع بين العلم والتقنيات الحديثة والرعاية الشخصية لمساعدة كل مريض على التمتع ببشرة صحية وثقة دائمة.",
  },

  aboutParagraph1: {
    en: "Over the past nine years, Dr. Layla has treated thousands of patients with acne, pigmentation, melasma, scars and signs of aging. Her patient-first philosophy and attention to detail have earned her an excellent reputation in cosmetic dermatology.",
    ar: "على مدار أكثر من تسع سنوات، عالجت الدكتورة ليلى آلاف المرضى من مشاكل حب الشباب والتصبغات والكلف والندبات وعلامات التقدم في العمر، واشتهرت بنهجها الذي يضع المريض أولاً واهتمامها بأدق التفاصيل.",
  },

  aboutParagraph2: {
    en: "She continuously expands her expertise through international workshops and advanced laser training, ensuring her patients benefit from the latest innovations in aesthetic dermatology.",
    ar: "تحرص على تطوير خبراتها باستمرار من خلال ورش العمل الدولية وبرامج التدريب المتقدمة في تقنيات الليزر، لتقديم أحدث الحلول في مجال الجلدية التجميلية.",
  },

  treatmentCategorySlugs: [
    "advanced-skin-care",
    "laser-treatments",
    "pigmentation-treatment",
    "acne-treatment"
  ],
}
];