import type { Localized } from "@/lib/navigation";

export interface MembershipTier {
  slug: "silver" | "gold" | "platinum";
  name: string;
  tagline: Localized;
  annualSpending: string;
  benefits: Localized[];
  cardImage: string;
  popular?: boolean;
}

export const membershipTiers: MembershipTier[] = [
  {
    slug: "silver",
    name: "SILVER",
    tagline: { en: "Perfect for new members", ar: "مثالية للأعضاء الجدد" },
    annualSpending: "20,000+",
    benefits: [
      { en: "5% Discount", ar: "خصم 5%" },
      { en: "Birthday Gift", ar: "هدية عيد ميلاد" },
      { en: "Member Offers", ar: "عروض الأعضاء" },
    ],
    cardImage: "/images/cards/silver-card.png",
  },
  {
    slug: "gold",
    name: "GOLD",
    tagline: { en: "Elevated Benefits for our valued clients", ar: "مزايا مرتقاة لعملائنا الكرام" },
    annualSpending: "50,000+",
    benefits: [
      { en: "10% Discount", ar: "خصم 10%" },
      { en: "Priority Booking", ar: "حجز أولوية" },
      { en: "Free Skin Analysis", ar: "تحليل بشرة مجاني" },
    ],
    cardImage: "/images/cards/gold-card.png",
    popular: true,
  },
  {
    slug: "platinum",
    name: "PLATINUM",
    tagline: { en: "The ultimate luxury experience", ar: "تجربة الرفاهية المطلقة" },
    annualSpending: "50,000+",
    benefits: [
      { en: "15% Discount", ar: "خصم 15%" },
      { en: "Complimentary Treatments", ar: "علاجات مجانية" },
      { en: "VIP Events", ar: "فعاليات كبار الشخصيات" },
      { en: "Dedicated Beauty Consultant", ar: "مستشار جمال مخصص" },
    ],
    cardImage: "/images/cards/platinum-card.png",
  },
];