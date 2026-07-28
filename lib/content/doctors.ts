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
    title: { en: "Founder & CEO", ar: "المؤسس والرئيس التنفيذي" },
    specialty: { en: "Aesthetic Physician & Skin Specialist", ar: "طبيب تجميل وأخصائي بشرة" },
    category: "dermatology",
    experienceYears: 10,
    qualification: "MBBS, MD",
    qualificationField: { en: "Dermatology", ar: "الأمراض الجلدية" },
    image: "/images/doctors/ahamed-razeen.png",
    cutoutImage: "/images/doctors/ahamed-razeen-cutout.png",
    roomImage: "/images/doctors/ahamed-razeen-room.png",
    bio: {
      en: "Dedicated to enhancing natural beauty through advanced aesthetic treatments and personalized care. With a passion for precision and a commitment to excellence, Dr. Ahamed helps his clients look and feel their absolute best.",
      ar: "مكرّس لتعزيز الجمال الطبيعي من خلال علاجات تجميلية متقدمة ورعاية شخصية.",
    },
    languages: { en: "English, Arabic", ar: "الإنجليزية، العربية" },
    educationDetail: {
      en: "MBBS, American University of Sharjah",
      ar: "بكالوريوس الطب والجراحة، الجامعة الأمريكية في الشارقة",
    },
    philosophySubheading: {
  en: "Dr. Ahamed believes that true beauty lies in confidence. His approach is centered on enhancing your natural features with advanced techniques, personalized care and the highest standards of safety",
  ar: "...",
},
aboutParagraph1: {
  en: "With over 10 years of experience in aesthetic medicine, Dr. Ahamed combines medical expertise with an artistic eye...",
  ar: "...",
},
aboutParagraph2: {
  en: "He continuously updates his knowledge with international training and the latest technologies to provide his clients with the best possible care",
  ar: "...",
},
treatmentCategorySlugs: ["advanced-skin-care"],
  },
];