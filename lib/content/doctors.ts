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
  },
  {
    slug: "sarah-mathew",
    name: "Dr. Sarah Mathew",
    title: { en: "Senior Dermatologist", ar: "استشارية الأمراض الجلدية" },
    specialty: { en: "Clinical Dermatology", ar: "الأمراض الجلدية السريرية" },
    category: "dermatology",
    experienceYears: 8,
    qualification: "MBBS, DDVL",
    qualificationField: { en: "Dermatology", ar: "الأمراض الجلدية" },
    image: "/images/doctors/ahamed-razeen.png",
  },
  {
    slug: "mohamed-faisal",
    name: "Dr. Mohamed Faisal",
    title: { en: "Aesthetic Physician", ar: "طبيب تجميل" },
    specialty: { en: "Botox & Fillers", ar: "البوتوكس والفيلر" },
    category: "aesthetic-medicine",
    experienceYears: 11,
    qualification: "MBBS, MD",
    qualificationField: { en: "Aesthetic Medicine", ar: "الطب التجميلي" },
    image: "/images/doctors/ahamed-razeen.png",
  },
  {
    slug: "nadia-hassan",
    name: "Dr. Nadia Hassan",
    title: { en: "Cosmetic Physician", ar: "طبيبة تجميل" },
    specialty: { en: "Facial Rejuvenation", ar: "تجديد شباب الوجه" },
    category: "aesthetic-medicine",
    experienceYears: 7,
    qualification: "MBBS, PGDAC",
    qualificationField: { en: "Cosmetic Medicine", ar: "الطب التجميلي" },
    image: "/images/doctors/ahamed-razeen.png",
  },
  {
    slug: "riyaz-rahman",
    name: "Dr. Riyaz Rahman",
    title: { en: "Laser Specialist", ar: "أخصائي الليزر" },
    specialty: { en: "Laser Hair Removal", ar: "إزالة الشعر بالليزر" },
    category: "laser-specialist",
    experienceYears: 9,
    qualification: "MBBS, MD",
    qualificationField: { en: "Laser Therapy", ar: "العلاج بالليزر" },
    image: "/images/doctors/ahamed-razeen.png",
  },
  {
    slug: "fatima-noor",
    name: "Dr. Fatima Noor",
    title: { en: "Laser Consultant", ar: "استشارية الليزر" },
    specialty: { en: "Skin Laser Treatments", ar: "علاجات الجلد بالليزر" },
    category: "laser-specialist",
    experienceYears: 6,
    qualification: "MBBS, DVD",
    qualificationField: { en: "Laser Dermatology", ar: "الأمراض الجلدية بالليزر" },
    image: "/images/doctors/ahamed-razeen.png",
  },
  {
    slug: "anjali-nair",
    name: "Dr. Anjali Nair",
    title: { en: "Skin Care Specialist", ar: "أخصائية العناية بالبشرة" },
    specialty: { en: "Acne & Pigmentation", ar: "حب الشباب والتصبغات" },
    category: "skin-care",
    experienceYears: 5,
    qualification: "MBBS, DDVL",
    qualificationField: { en: "Skin Care", ar: "العناية بالبشرة" },
    image: "/images/doctors/ahamed-razeen.png",
  },
  {
    slug: "omar-khalid",
    name: "Dr. Omar Khalid",
    title: { en: "Skin Wellness Expert", ar: "خبير صحة البشرة" },
    specialty: { en: "Hydra Facial & Skin Rejuvenation", ar: "الهيدرا فيشل وتجديد البشرة" },
    category: "skin-care",
    experienceYears: 8,
    qualification: "MBBS, MD",
    qualificationField: { en: "Aesthetic Dermatology", ar: "الأمراض الجلدية التجميلية" },
    image: "/images/doctors/ahamed-razeen.png",
  },
];