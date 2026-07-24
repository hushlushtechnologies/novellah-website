"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { beforeAfterResults } from "@/lib/content/beforeAfter";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";

const CARDS_PER_PAGE = 4;

export function BeforeAfterSection() {
  const t = useTranslations("beforeAfter");
  const locale = useLocale() as "en" | "ar";
  const [page, setPage] = useState(0);

  const pageCount = Math.max(1, Math.ceil(beforeAfterResults.length / CARDS_PER_PAGE));
  const visibleResults = beforeAfterResults.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <DecorativeFlower position="top-right" size="lg" opacity={0.9} />
        
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          align="start"
          heading={
            <>
              {t("headingLine1")} <span className="text-primary">{t("headingLine2")}</span>
            </>
          }
          subheading={t("subheading")}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleResults.map((result) => (
            <div
              key={result.id}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative flex h-64 w-full">
                <div className="relative w-1/2">
                  <Image src={result.beforeImage} alt="" fill className="object-cover" />
                  <span className="absolute start-3 top-3 rounded-full bg-white/95 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-wide text-foreground">
                    {t("beforeLabel")}
                  </span>
                </div>
                <div className="relative w-1/2">
                  <Image src={result.afterImage} alt="" fill className="object-cover" />
                  <span className="absolute end-3 top-3 rounded-full bg-white/95 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-wide text-foreground">
                    {t("afterLabel")}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-extrabold text-primary">{result.title[locale]}</h3>
                <div className="mt-1 mb-3 h-1 rounded-full w-10 bg-secondary" />
                <p className="font-body  font-semibold text-sm text-muted-foreground">
                  {result.description[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {pageCount > 1 && (
          <div className="mt-10 flex justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  page === i ? "w-6 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}