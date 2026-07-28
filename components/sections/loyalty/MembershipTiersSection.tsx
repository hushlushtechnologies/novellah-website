import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactBannerStrip } from "@/components/ui/ContactBannerStrip";
import { membershipTiers } from "@/lib/content/membershipTiers";

export async function MembershipTiersSection() {
  const t = await getTranslations("membershipTiers");
  const locale = (await getLocale()) as "en" | "ar";

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={
            <>
              {t("headingPrefix")} <span className="text-primary">{t("headingHighlight")}</span>
            </>
          }
          subheading={t("subheading")}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {membershipTiers.map((tier) => (
            <div
              key={tier.slug}
              className={`overflow-hidden rounded-2xl border bg-card ${
                tier.popular ? "border-2 border-secondary shadow-card" : "border-border"
              }`}
            >
              <div className="relative h-56 w-full bg-[#F1E9DF]">
                <Image src={tier.cardImage} alt={tier.name} fill className="object-contain p-6" />
                {tier.popular && (
                  <span className="absolute end-4 top-4 rounded-full bg-secondary px-3 py-1 font-body text-[10px] font-bold uppercase text-white">
                    {t("popularBadge")}
                  </span>
                )}
              </div>

              <div className="p-6 text-center">
                <h3
                  className={`font-heading text-2xl font-extrabold tracking-wide ${
                    tier.popular ? "text-secondary" : "text-foreground"
                  }`}
                >
                  {tier.name}
                </h3>
                <p className="mt-1 font-body text-sm text-muted-foreground">{tier.tagline[locale]}</p>

                <div className="mt-4 h-1 rounded-full w-8 mx-auto bg-secondary" />

                <div className="mt-4 rounded-xl border border-border bg-background-light p-4">
                  <p className="font-body font-bold text-xs uppercase tracking-wide text-muted-foreground">
                    {t("annualSpendingLabel")}
                  </p>
                  <p className="mt-1 font-bold font-heading text-2xl text-foreground">{tier.annualSpending}</p>
                </div>

                <ul className="mt-5 space-y-3 text-start">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit.en} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-background-light">
                        <Check size={14} className="text-primary" />
                      </span>
                      <span className="font-body text-sm text-foreground">{benefit[locale]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <ContactBannerStrip
            heading={t("bannerHeading")}
            subtext={t("bannerSubtext")}
            ctaLabel={t("ctaContact")}
            // variant="light"
          />
        </div>
      </div>
    </section>
  );
}