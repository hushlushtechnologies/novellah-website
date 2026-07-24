"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Star, StarHalf } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import { testimonials } from "@/lib/content/testimonials";
import { partners } from "@/lib/content/partners";

const CARDS_PER_PAGE = 4;

function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={i} size={16} className="text-secondary" fill="currentColor" />
      ))}
      {hasHalf && <StarHalf size={16} className="text-secondary" fill="currentColor" />}
    </div>
  );
}

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const [page, setPage] = useState(0);

  const pageCount = Math.max(1, Math.ceil(testimonials.length / CARDS_PER_PAGE));
  const visibleTestimonials = testimonials.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <DecorativeFlower position="top-left" size="lg" opacity={0.5} />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={t("heading")}
          ctaLabel={t("ctaBookNow")}
          ctaHref="/book-appintment"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="relative mb-4 h-12 w-12 overflow-hidden rounded-full">
                <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
              </div>
              <h3 className="font-heading text-lg text-foreground">{testimonial.name}</h3>
              <div className="mt-1 mb-3">
                <RatingStars rating={testimonial.rating} />
              </div>
              <p className="font-body text-sm text-muted-foreground">{testimonial.quote}</p>
            </div>
          ))}
        </div>

        {pageCount > 1 && (
          <div className="mt-8 flex justify-center gap-2">
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

        {/* Partner logos */}
        {partners.length > 0 && (
          <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center">
            <p className="shrink-0 font-heading text-base text-foreground sm:border-e sm:border-border sm:pe-6">
              {t("partnersLabel")}
            </p>
            <div className="flex min-w-0 flex-1 snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex h-24 w-24 shrink-0 snap-start items-center justify-center rounded-2xl border border-border p-3 sm:h-28 sm:w-28"
                >
                  <Image src={partner.logo} alt={partner.name} width={80} height={64} className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}