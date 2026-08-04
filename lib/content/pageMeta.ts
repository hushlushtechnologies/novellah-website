import type { Localized } from "@/lib/navigation";

export interface PageMeta {
  title: Localized;
  description: Localized;
}

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: { en: "Home", ar: "الرئيسية" },
    description: {
      en: "Novellah Restyle — premium skincare and aesthetic treatments.",
      ar: "نوفيلا ريستايل — علاجات بشرة وتجميل متميزة.",
    },
  },
  aboutUs: {
    title: { en: "About Us", ar: "من نحن" },
    description: {
      en: "Learn about Novellah Restyle's mission, values, and expert team.",
      ar: "تعرفي على رسالة نوفيلا ريستايل وقيمها وفريقها المتخصص.",
    },
  },
  treatments: {
    title: { en: "Treatments", ar: "العلاجات" },
    description: {
      en: "Explore our full range of skincare and aesthetic treatments.",
      ar: "استكشفي مجموعتنا الكاملة من علاجات البشرة والتجميل.",
    },
  },
  ourDoctors: {
    title: { en: "Our Doctors", ar: "أطباؤنا" },
    description: {
      en: "Meet the specialists behind Novellah Restyle's treatments.",
      ar: "تعرفي على المتخصصين القائمين على علاجات نوفيلا ريستايل.",
    },
  },
  specialOffers: {
    title: { en: "Special Offers", ar: "العروض الخاصة" },
    description: {
      en: "Exclusive deals and treatment packages at Novellah Restyle.",
      ar: "عروض وباقات علاجية حصرية في نوفيلا ريستايل.",
    },
  },
  blogs: {
    title: { en: "Blog", ar: "المدونة" },
    description: {
      en: "Skincare tips, treatment guides, and news from Novellah Restyle.",
      ar: "نصائح للعناية بالبشرة وأدلة العلاجات وأخبار من نوفيلا ريستايل.",
    },
  },
  loyaltyCard: {
    title: { en: "Loyalty Cards", ar: "بطاقات الولاء" },
    description: {
      en: "Earn points and enjoy rewards with Novellah Restyle's loyalty program.",
      ar: "اكسبي نقاطًا واستمتعي بالمكافآت مع برنامج ولاء نوفيلا ريستايل.",
    },
  },
  contactUs: {
    title: { en: "Contact Us", ar: "تواصلي معنا" },
    description: {
      en: "Get in touch with Novellah Restyle — visit, call, or message us.",
      ar: "تواصلي مع نوفيلا ريستايل — زوري عيادتنا أو اتصلي بنا أو راسلينا.",
    },
  },
  bookAppointment: {
    title: { en: "Book Appointment", ar: "احجزي موعدك" },
    description: {
      en: "Book your appointment at Novellah Restyle in just a few steps.",
      ar: "احجزي موعدك في نوفيلا ريستايل خلال خطوات بسيطة.",
    },
  },
  faq: {
    title: { en: "FAQ", ar: "الأسئلة الشائعة" },
    description: {
      en: "Answers to common questions about our treatments and clinic.",
      ar: "إجابات على الأسئلة الشائعة حول علاجاتنا وعيادتنا.",
    },
  },
};