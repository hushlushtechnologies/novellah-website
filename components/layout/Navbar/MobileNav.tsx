 "use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, Search } from "lucide-react";
import { navLinks, treatmentsMegaMenu } from "@/lib/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { Button } from "@/components/ui/Button";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const locale = useLocale() as "en" | "ar";
  const t = useTranslations("nav");
  const [treatmentsExpanded, setTreatmentsExpanded] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer panel — logical "end" so it flips correctly in RTL */}
      <div className="absolute inset-y-0 end-0 flex w-[85%] max-w-sm flex-col bg-background">
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.svg" alt="Novellah" width={90} height={40} />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
          >
            <X size={18} />
          </button>
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
                        onClick={onClose}
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
                onClick={onClose}
                className="block border-b border-border px-6 py-5 font-body text-foreground"
              >
                {t(link.key)}
              </Link>
            )
          )}
        </nav>

        <div className="space-y-4 border-t border-border p-6">
          <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5">
            <Search size={16} className="text-primary" />
            <input
              type="text"
              placeholder="Search.."
              className="w-full bg-transparent font-body text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex items-center gap-3">
            <LocaleSwitcher />
            <Button href="/book-appintment" className="flex-1 justify-center" onClick={onClose}>
              {t("bookAppointment")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}