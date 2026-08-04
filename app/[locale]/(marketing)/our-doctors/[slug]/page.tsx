import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { DoctorDetailHeroSection } from "@/components/sections/doctors/DoctorDetailHeroSection";
import { doctors } from "@/lib/content/doctors";
import { DoctorPhilosophySection } from "@/components/sections/doctors/DoctorPhilosophySection";
import { DoctorTreatmentsSection } from "@/components/sections/doctors/DoctorTreatmentsSection";
import { FinalCtaSection } from "@/components/sections/shared/FinalCtaSection";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
 

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "ar"; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);
  if (!doctor) return { title: "Not found" };

  return buildMetadata(locale, {
    title: { en: doctor.name, ar: doctor.name }, // name has no ar/en split — same string both ways
    description: doctor.bio, // already Localized — correct type
  });
}

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) notFound();

  const locale = (await getLocale()) as "en" | "ar";

  return (
    <>
      <DoctorDetailHeroSection doctor={doctor} locale={locale} />
      <DoctorPhilosophySection doctor={doctor} locale={locale} />
      <DoctorTreatmentsSection doctor={doctor} locale={locale} />
      <FinalCtaSection/>
    </>
  );
}