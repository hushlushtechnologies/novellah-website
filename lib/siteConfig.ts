import type { Localized } from "@/lib/navigation";

export const siteConfig = {
  name: "Novellah Restyle",
  phone: "+971 50 123 4567",
  phoneHref: "tel:+971501234567",
  whatsappHref: "https://wa.me/971501234567",
  email: "info@novellah.ae",
  emailHref: "mailto:info@novellah.ae",
  address: {
    en: "Novellah Restyle Clinic\nAl Wasl Road, Jumeirah 1\nDubai, United Arab Emirates",
    ar: "عيادة نوفيلاه ريستايل\nشارع الوصل، جميرا 1\nدبي، الإمارات العربية المتحدة",
  } as Localized,
  hours: {
    weekdays: { en: "Monday - Saturday", ar: "الإثنين - السبت" } as Localized,
    weekdaysTime: "10:00 AM - 08:00 PM",
    weekend: { en: "Sunday", ar: "الأحد" } as Localized,
    weekendTime: { en: "Closed", ar: "مغلق" } as Localized,
  },
  socials: {
    instagram: "https://instagram.com/novellahrestyle",
    linkedin: "https://linkedin.com/company/novellahrestyle",
    facebook: "https://facebook.com/novellahrestyle",
    youtube: "https://youtube.com/@novellahrestyle",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.779747915759!2d55.17892098009861!3d25.109316020442893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b129a3b9c23%3A0x611d3e8b1335256b!2sHushlush%20Events!5e0!3m2!1sen!2sin!4v1784984359532!5m2!1sen!2sin",
} as const;