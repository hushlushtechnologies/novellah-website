import type { Localized } from "@/lib/navigation";

export interface FaqItem {
  id: string;
  question: Localized;
  answer: Localized;
}

export const generalFaqItems: FaqItem[] = [
  {
    id: "what-is-rewards",
    question: { en: "What is Novellah Rewards", ar: "ما هو برنامج نوفيلاه للمكافآت" },
    answer: {
      en: "Novellah Rewards is our exclusive loyalty program designed to rewards you for choosing us, Earn points, enjoy special perks and experience luxury like never before",
      ar: "برنامج نوفيلاه للمكافآت هو برنامج الولاء الحصري المصمم لمكافأتك على اختيارك لنا.",
    },
  },
  {
    id: "how-earn-points",
    question: { en: "How do I earn points?", ar: "كيف أكسب النقاط؟" },
    answer: { en: "Placeholder answer.", ar: "إجابة مؤقتة." },
  },
  {
    id: "how-redeem-points",
    question: { en: "How can i redeem my points?", ar: "كيف يمكنني استبدال نقاطي؟" },
    answer: { en: "Placeholder answer.", ar: "إجابة مؤقتة." },
  },
  {
    id: "points-expire",
    question: { en: "Do my points expire?", ar: "هل تنتهي صلاحية نقاطي؟" },
    answer: { en: "Placeholder answer.", ar: "إجابة مؤقتة." },
  },
  {
    id: "contact-help",
    question: { en: "Who can i contact for more help?", ar: "بمن يمكنني التواصل لمزيد من المساعدة؟" },
    answer: { en: "Placeholder answer.", ar: "إجابة مؤقتة." },
  },
  {
    id: "membership-fee",
    question: { en: "Is there a membership fee?", ar: "هل هناك رسوم عضوية؟" },
    answer: { en: "Placeholder answer.", ar: "إجابة مؤقتة." },
  },
  {
    id: "how-to-join",
    question: { en: "How do i join Novellah Rewards?", ar: "كيف أنضم إلى نوفيلاه للمكافآت؟" },
    answer: { en: "Placeholder answer.", ar: "إجابة مؤقتة." },
  },
];