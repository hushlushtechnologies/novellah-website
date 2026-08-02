import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import type { Treatment } from "@/lib/content/treatments";
import {
  CardDescriptionClasses,
  cardDividerClasses,
  cardHeadingClasses,
} from "@/lib/styles";
import { Sparkle } from "lucide-react";

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
              <span className="text-primary">
                {treatment.processHeadingHighlight[locale]}
              </span>
            </>
          }
          subheading={treatment.processSubheading[locale]}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatment.process.map((step, i) => {
            const isLeft = i % 2 === 0; // 1st & 3rd cards

            return (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl bg-background-light p-4"
              >
                {/* Number */}
                <span
                  aria-hidden
                  className={`absolute -top-8 font-heading text-8xl font-bold text-secondary/20 ${
                    isLeft ? "start-0" : "end-0"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div
                  className={`relative top-2 p-1 ${
                    isLeft ? "-end-3" : "-start-3"
                  }`}
                >
                  <div className="relative mt-10 h-40 w-full overflow-hidden rounded-xl">
                    <Image
                      src={step.image}
                      alt={step.title[locale]}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className={`mt-4 ${cardHeadingClasses}`}>
                    {step.title[locale]}
                  </h3>

                  <div className="mb-2 flex items-center gap-1">
                    <div className="h-0.5 rounded-full w-10 bg-secondary" />
                    <Sparkle
                      size={12}
                      className="shrink-0 text-secondary"
                      fill="currentColor"
                    />
                  </div>

                  <p className={CardDescriptionClasses}>
                    {step.description[locale]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
