import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import type { Treatment } from "@/lib/content/treatments";

export async function TreatmentProcessSection({
  treatment,
  locale,
}: {
  treatment: Treatment;
  locale: "en" | "ar";
}) {
  const t = await getTranslations("treatmentProcess");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <DecorativeFlower position="top-left" size="lg" opacity={0.5} />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={
            <>
              {treatment.processHeading[locale]}{" "}
              <span className="text-primary">{treatment.processHeadingHighlight[locale]}</span>
            </>
          }
          subheading={treatment.processSubheading[locale]}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatment.process.map((step, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl bg-background-light p-4"
            >
              <span
                aria-hidden
                className="absolute -top-2 start-3 font-heading text-6xl font-bold text-secondary/20"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative mt-8 h-40 w-full overflow-hidden rounded-xl">
                <Image src={step.image} alt="" fill className="object-cover" />
              </div>

              <h3 className="mt-4 font-heading text-lg text-foreground">{step.title[locale]}</h3>
              <div className="mt-1 mb-2 flex items-center gap-1.5">
                <div className="h-px w-6 bg-secondary" />
              </div>
              <p className="font-body text-sm text-muted-foreground">{step.description[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}