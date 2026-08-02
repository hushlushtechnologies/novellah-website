"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import {
  ChevronDown,
  MessageCircle,
  Phone,
  CalendarCheck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/siteConfig";
import type { FaqItem } from "@/lib/content/faq";
import Image from "next/image";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";

interface FaqSectionProps {
  items: FaqItem[];
}

export function FaqSection({ items }: FaqSectionProps) {
  const t = useTranslations("faq");
  const locale = useLocale() as "en" | "ar";
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <DecorativeFlower position="top-left" size="lg" opacity={0.5} />
       <DecorativeFlower position="top-right-half" size="lg" opacity={0.9} />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={
            <>
              {t("headingPrefix")}{" "}
              <span className="text-primary">{t("headingHighlight")}</span>
            </>
          }
          subheading={t("subheading")}
        />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 lg:grid-cols-[1fr_1.3fr] lg:gap-8">
          {/* Left: help card with contact options */}
          <div className="relative overflow-hidden rounded-2xl bg-background-light p-4 sm:p-5">
            <Image
              src="/images/decorative/faq-illustration.svg"
              alt=""
              fill
              aria-hidden
              className="pointer-events-none absolute inset-y-0 start-0 -z-0 h-full w-auto object-contain object-left-bottom opacity-90"
            />

            <div className="relative z-10 ms-auto max-w-[80%] sm:max-w-[85%] lg:mt-10   p-5  lg:space-y-5">
              <div className="flex items-center gap-2">
                <MessageCircle size={14} className="text-secondary" />
                <p className="font-body text-xs font-bold uppercase tracking-wide text-secondary">
                  {t("helpEyebrow")}
                </p>
              </div>

              <h3 className="mt-2 font-heading text-2xl font-extrabold text-foreground">
                {t("helpHeading")}
              </h3>
              <p className="mt-1.5 font-body text-sm text-muted-foreground">
                {t("helpBody")}
              </p>

              <div className="mt-4 divide-y divide-border rounded-xl border border-border bg-card">
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-secondary/40">
                    <Phone size={16} className="text-secondary" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-body text-sm font-semibold uppercase text-foreground">
                      {t("whatsappTitle")}
                    </span>
                    <span className="block font-body text-xs text-muted-foreground">
                      {t("whatsappSubtext")}
                    </span>
                  </span>
                  <ArrowRight size={14} className="text-primary" />
                </a>

                <a
                  href="/book-appintment"
                  className="flex items-center gap-3 p-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-secondary/40">
                    <CalendarCheck size={16} className="text-secondary" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-body text-sm font-semibold text-foreground">
                      {t("consultationTitle")}
                    </span>
                    <span className="block font-body text-xs text-muted-foreground">
                      {t("consultationSubtext")}
                    </span>
                  </span>
                  <ArrowRight size={14} className="text-primary" />
                </a>
              </div>

              <div className="mt-3 flex items-center gap-3 bg-card p-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 bg-primary">
                  <ShieldCheck size={16} className="text-secondary" />
                </span>
                <div>
                  <p className="font-body text-sm font-semibold text-primary">
                    {t("safetyTitle")}
                  </p>
                  <p className="mt-0.5 font-body text-xs text-muted-foreground">
                    {t("safetyBody")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="flex flex-col gap-3">
            {items.map((item, i) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border p-4 transition-colors ${
                    isOpen
                      ? "border-transparent bg-background-light"
                      : "border-border bg-card"
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full cursor-pointer items-center gap-3 text-start"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-body text-xs font-bold ${
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-background-light text-secondary"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex-1 font-heading text-lg font-bold ${isOpen ? "text-primary" : "text-foreground"}`}
                    >
                      {item.question[locale]}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isOpen && (
                    <p className="mt-2 ps-11 font-body text-sm font-semibold text-muted-foreground">
                      {item.answer[locale]}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
