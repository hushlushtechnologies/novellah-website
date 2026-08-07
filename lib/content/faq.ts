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
    answer: {
      en: "You earn points automatically every time you book and complete a treatment with us. Points are added to your account based on the value of your visit, and you can track your balance anytime by contacting our team.",
      ar: "تكسب النقاط تلقائيًا في كل مرة تحجز فيها وتكمل علاجًا معنا. تُضاف النقاط إلى حسابك بناءً على قيمة زيارتك، ويمكنك متابعة رصيدك في أي وقت من خلال التواصل مع فريقنا.",
    },
  },
  {
    id: "how-redeem-points",
    question: { en: "How can i redeem my points?", ar: "كيف يمكنني استبدال نقاطي؟" },
    answer: {
      en: "Once you've earned enough points, you can redeem them for discounts on future treatments, exclusive offers, or complimentary add-ons. Simply let our team know at your next visit or when booking your appointment.",
      ar: "بمجرد أن تجمع نقاطًا كافية، يمكنك استبدالها بخصومات على العلاجات المستقبلية، أو عروض حصرية، أو إضافات مجانية. ما عليك سوى إخبار فريقنا في زيارتك القادمة أو عند حجز موعدك.",
    },
  },
  {
    id: "points-expire",
    question: { en: "Do my points expire?", ar: "هل تنتهي صلاحية نقاطي؟" },
    answer: {
      en: "Points remain valid as long as your account stays active. We'll always notify you before any changes to your points balance, so you never miss the chance to redeem what you've earned.",
      ar: "تظل النقاط سارية طالما أن حسابك نشط. سنقوم دائمًا بإعلامك قبل أي تغييرات على رصيد نقاطك، حتى لا تفوّت فرصة استبدال ما كسبته.",
    },
  },
  {
    id: "contact-help",
    question: { en: "Who can i contact for more help?", ar: "بمن يمكنني التواصل لمزيد من المساعدة؟" },
    answer: {
      en: "Our team is always happy to help with any questions about your rewards. Reach out to us via phone, WhatsApp, or the contact form on our website, and we'll get back to you as soon as possible.",
      ar: "فريقنا سعيد دائمًا بمساعدتك في أي استفسارات حول مكافآتك. تواصل معنا عبر الهاتف أو واتساب أو نموذج التواصل على موقعنا، وسنرد عليك في أقرب وقت ممكن.",
    },
  },
  {
    id: "membership-fee",
    question: { en: "Is there a membership fee?", ar: "هل هناك رسوم عضوية؟" },
    answer: {
      en: "No, joining Novellah Rewards is completely free. There's no membership fee, no minimum spend required to sign up, and you start earning points from your very first visit.",
      ar: "لا، الانضمام إلى نوفيلاه للمكافآت مجاني تمامًا. لا توجد رسوم عضوية، ولا يوجد حد أدنى للإنفاق مطلوب للتسجيل، وتبدأ في كسب النقاط من زيارتك الأولى.",
    },
  },
  {
    id: "how-to-join",
    question: { en: "How do i join Novellah Rewards?", ar: "كيف أنضم إلى نوفيلاه للمكافآت؟" },
    answer: {
      en: "Joining is simple. Book any treatment with us, and you'll be automatically enrolled in Novellah Rewards. You can also sign up in person during your visit or by reaching out to our team directly.",
      ar: "الانضمام بسيط. احجز أي علاج معنا، وسيتم تسجيلك تلقائيًا في برنامج نوفيلاه للمكافآت. يمكنك أيضًا التسجيل شخصيًا أثناء زيارتك أو من خلال التواصل مع فريقنا مباشرة.",
    },
  },
];