import type { Localized } from "@/lib/navigation";

export interface Offer {
  slug: string;
  doctorName: string;
  specialties: string[];
  scheduleLabel: Localized;
  scheduleDays: Localized;
  scheduleHours: string;
  image: string;
  featured?: boolean;
}

 export const offers: Offer[] = [
  {
    slug: "amanda-fontoura-eye-care",
    doctorName: "Drª. Amanda Fontoura",
    specialties: ["Fundo de Olho", "Catarata", "Glaucoma"],
    scheduleLabel: { en: "Appointments", ar: "المواعيد" },
    scheduleDays: { en: "Mondays & Tuesdays", ar: "الإثنين والثلاثاء" },
    scheduleHours: "08h00 - 18h00",
    image: "/images/offers/amanda-fontoura-featured.png",
    featured: true,
  },
  {
    slug: "sarah-mathew-skin-care",
    doctorName: "Dr. Sarah Mathew",
    specialties: ["Dermatology", "Hydra Facial", "Anti-Aging"],
    scheduleLabel: { en: "Appointments", ar: "المواعيد" },
    scheduleDays: { en: "Wednesdays & Thursdays", ar: "الأربعاء والخميس" },
    scheduleHours: "09h00 - 17h00",
    image: "/images/offers/amanda-fontoura-featured.png",
    featured: false,
  },
  {
    slug: "mohamed-faisal-laser",
    doctorName: "Dr. Mohamed Faisal",
    specialties: ["Laser Treatment", "Hair Restoration", "PRP Therapy"],
    scheduleLabel: { en: "Appointments", ar: "المواعيد" },
    scheduleDays: { en: "Fridays & Saturdays", ar: "الجمعة والسبت" },
    scheduleHours: "10h00 - 18h00",
    image: "/images/offers/amanda-fontoura-featured.png",
    featured: false,
  },
  {
    slug: "nadia-hassan-aesthetics",
    doctorName: "Dr. Nadia Hassan",
    specialties: ["Botox", "Fillers", "Skin Brightening"],
    scheduleLabel: { en: "Appointments", ar: "المواعيد" },
    scheduleDays: { en: "Sundays & Mondays", ar: "الأحد والإثنين" },
    scheduleHours: "08h30 - 16h30",
    image: "/images/offers/amanda-fontoura-featured.png",
    featured: false,
  },
  {
    slug: "riyaz-rahman-cosmetic",
    doctorName: "Dr. Riyaz Rahman",
    specialties: ["Cosmetic Medicine", "Facial Contouring", "Acne Scar Treatment"],
    scheduleLabel: { en: "Appointments", ar: "المواعيد" },
    scheduleDays: { en: "Tuesdays & Fridays", ar: "الثلاثاء والجمعة" },
    scheduleHours: "09h30 - 18h30",
    image: "/images/offers/amanda-fontoura-featured.png",
    featured: false,
  },
];