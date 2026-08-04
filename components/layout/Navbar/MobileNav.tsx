 "use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { X, ChevronDown, Search } from "lucide-react";
import { navLinks, treatmentsMegaMenu } from "@/lib/navigation";
import { treatments } from "@/lib/content/treatments";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { Button } from "@/components/ui/Button";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const MAX_RESULTS = 5;

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const locale = useLocale() as "en" | "ar";
  const t = useTranslations("nav");
  const tSearch = useTranslations("search");
  const [treatmentsExpanded, setTreatmentsExpanded] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return treatments
      .filter((treatment) => {
        const title = treatment.title[locale].toLowerCase();
        const overview = treatment.overview[locale].toLowerCase();
        return title.includes(q) || overview.includes(q);
      })
      .slice(0, MAX_RESULTS);
  }, [query, locale]);

  function handleClose() {
    setQuery("");
    onClose();
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" onClick={handleClose} />

      {/* Drawer panel — logical "end" so it flips correctly in RTL */}
      <div className="absolute inset-y-0 end-0 flex w-[85%] max-w-sm flex-col bg-background">
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.svg" alt="Novellah" width={90} height={40} />
          </Link>
          <button
            onClick={handleClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Search — moved above nav links so results have room to show */}
        <div className="border-b border-border p-6">
          <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5">
            <Search size={16} className="shrink-0 text-primary" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={tSearch("placeholder")}
              aria-label={tSearch("label")}
              className="min-w-0 flex-1 bg-transparent font-body text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            {query && (
              <button
                type="button"
                aria-label={tSearch("clear")}
                onClick={() => setQuery("")}
                className="shrink-0 text-muted-foreground"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {query.trim() && (
            <div className="mt-3 max-h-64 overflow-y-auto">
              {results.length === 0 ? (
                <p className="px-2 py-3 text-center font-body text-sm text-muted-foreground">
                  {tSearch("noResults", { query })}
                </p>
              ) : (
                <ul className="flex flex-col gap-1">
                  {results.map((result) => (
                    <li key={`${result.categorySlug}-${result.slug}`}>
                      <Link
                        href={`/treatments/${result.categorySlug}/${result.slug}`}
                        onClick={handleClose}
                        className="flex items-center gap-3 rounded-xl p-2"
                      >
                        <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={result.overviewImage}
                            alt=""
                            fill
                            sizes="44px"
                            className="object-cover"
                          />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-heading text-sm font-semibold text-foreground">
                            {result.title[locale]}
                          </span>
                          <span className="block truncate font-body text-xs text-muted-foreground">
                            {result.overview[locale]}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto">
          {navLinks.map((link) =>
            link.hasMegaMenu ? (
              <div key={link.href} className="border-b border-border">
                <button
                  onClick={() => setTreatmentsExpanded((v) => !v)}
                  className="flex w-full items-center justify-between px-6 py-5 font-body text-foreground"
                  aria-expanded={treatmentsExpanded}
                >
                  {t(link.key)}
                  <ChevronDown
                    size={16}
                    className={`text-primary transition-transform ${treatmentsExpanded ? "rotate-180" : ""}`}
                  />
                </button>
                {treatmentsExpanded && (
                  <div className="space-y-4 px-6 pb-5">
                    {treatmentsMegaMenu.map((category) => (
                      <Link
                        key={category.categorySlug}
                        href={`/treatments/${category.categorySlug}`}
                        onClick={handleClose}
                        className="block font-body text-sm text-muted-foreground"
                      >
                        {category.title[locale]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleClose}
                className="block border-b border-border px-6 py-5 font-body text-foreground"
              >
                {t(link.key)}
              </Link>
            )
          )}
        </nav>

        <div className="space-y-4 border-t border-border p-6">
          <div className="flex items-center gap-3">
            <LocaleSwitcher />
            <Button href="/book-appointment" className="flex-1 justify-center" onClick={handleClose}>
              {t("bookAppointment")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}