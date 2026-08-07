 import type { Localized } from "@/lib/navigation";

export interface Testimonial {
  id: string;
  name: Localized;
  rating: number; // out of 5, supports .5
  quote: Localized;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "nimal-perera-1",
    name: { en: "Nimal Perera", ar: "نيمال بيريرا" },
    rating: 5,
    quote: {
      en: "I've struggled with acne for years, and after just a few sessions, I noticed a huge improvement. The doctors were professional, and the staff made me feel comfortable throughout my treatment. I couldn't be happier with the results.",
      ar: "عانيت من حب الشباب لسنوات، وبعد بضع جلسات فقط لاحظت تحسنًا كبيرًا. كان الأطباء محترفين، وجعلني الفريق أشعر بالراحة طوال فترة العلاج. لم أكن لأتخيل نتائج أفضل من هذه.",
    },
    avatar: "/images/testimonials/tsicon.svg",
  },
  {
    id: "kasun-fernando-1",
    name: { en: "Kasun Fernando", ar: "كاسون فيرناندو" },
    rating: 5,
    quote: {
      en: "The Hydra Facial completely changed my skin. It's brighter, smoother, and so much more even. The whole team walked me through every step and made sure I felt relaxed the entire time. I'm already booked in for my next session.",
      ar: "غيّر هيدرا فيشل بشرتي بالكامل. أصبحت أكثر إشراقًا ونعومة وتجانسًا. رافقني الفريق في كل خطوة وحرص على راحتي طوال الوقت. حجزت بالفعل جلستي القادمة.",
    },
    avatar: "/images/testimonials/tsicon.svg",
  },
  {
    id: "dinesh-jayasinghe-1",
    name: { en: "Dinesh Jayasinghe", ar: "دينيش جاياسينغه" },
    rating: 5,
    quote: {
      en: "I was nervous about trying Botox for the first time, but the specialists here made the process easy to understand and completely painless. The results look so natural—exactly the refreshed look I was hoping for.",
      ar: "كنت متوترًا بشأن تجربة البوتوكس للمرة الأولى، لكن المتخصصين هنا جعلوا العملية سهلة الفهم وخالية من الألم تمامًا. النتائج تبدو طبيعية جدًا—تمامًا المظهر المنتعش الذي كنت أتمناه.",
    },
    avatar: "/images/testimonials/tsicon.svg",
  },
  {
    id: "chamara-silva-1",
    name: { en: "Chamara Silva", ar: "تشامارا سيلفا" },
    rating: 5,
    quote: {
      en: "After my microneedling sessions, my acne scars have faded so much more than I expected. The clinic is spotless, the staff is warm and welcoming, and I always leave feeling well taken care of.",
      ar: "بعد جلسات المايكرونيدلينغ، تلاشت ندوب حب الشباب لدي أكثر مما توقعت. العيادة نظيفة تمامًا، والفريق دافئ ومرحّب، وأشعر دائمًا بالعناية الجيدة عند مغادرتي.",
    },
    avatar: "/images/testimonials/tsicon.svg",
  },
];