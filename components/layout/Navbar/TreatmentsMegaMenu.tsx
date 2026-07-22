"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import {
  treatmentsMegaMenu,
  treatmentsMegaMenuPromo,
  treatmentsMegaMenuQuickLinks,
} from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { useLocale, useTranslations } from "next-intl";

export function TreatmentsMegaMenu() {
  const locale = useLocale() as "en" | "ar";
  const t = useTranslations("nav");

  return (
    <div className="absolute inset-x-0 top-full z-50 border-t border-border bg-white shadow-card">
      <div className="mx-auto grid max-w-7xl grid-cols-[500px_1fr] gap-10 px-4 py-10 sm:px-6 lg:px-8">
        {/* Left: promo + quick links */}
        <div className="space-y-6">
          <div className="overflow-hidden rounded-2xl bg-background">
            <div className="flex items-center gap-8">
              <div className="relative h-[290px] w-[190px] shrink-0">
                <Image
                  src={treatmentsMegaMenuPromo.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col">
                <h3 className="whitespace-pre-line font-heading text-[24px] leading-tight text-foreground">
                  {treatmentsMegaMenuPromo.heading[locale]}
                </h3>
                <p className="my-2 font-body text-md text-muted-foreground">
                  {treatmentsMegaMenuPromo.subtext[locale]}
                </p>
                <Button href={treatmentsMegaMenuPromo.ctaHref} icon={<ArrowRight size={14} />}>
                  {t("bookAppointment")}
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-background-light border border-border">
            {treatmentsMegaMenuQuickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-4 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-secondary">
                  <Clock size={16} />
                </span>
                <span className="flex-1">
                  <span className="block font-body text-sm font-semibold text-foreground">
                    {link.label[locale]}
                  </span>
                  <span className="block font-body text-xs text-muted-foreground">
                    {link.subtext[locale]}
                  </span>
                </span>
                <ArrowRight size={16} className="text-primary" />
              </Link>
            ))}
          </div>
        </div>

        {/* Right: category grid */}
        <div className="grid grid-cols-3 gap-x-10 gap-y-10">
          {treatmentsMegaMenu.map((category) => (
            <div key={category.categorySlug}>
              <Image src={category.icon} alt="" width={20} height={20} className="mb-1" />
              <h3 className="font-heading text-xl font-semibold text-foreground">
                {category.title[locale]}
              </h3>
              <ul className="mt-4 space-y-2">
                {category.items.slice(0, 5).map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/treatments/${category.categorySlug}/${item.slug}`}
                      className="font-body text-sm font-medium text-foreground hover:text-foreground"
                    >
                      {item.label[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
              {category.items.length > 5 && (
                <Link
                  href={`/treatments/${category.categorySlug}`}
                  className="mt-3 inline-flex items-center gap-1 font-body text-sm font-medium text-primary"
                >
                  {t("viewAll")} <ArrowRight size={12} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}