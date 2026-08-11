"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getStoredConsent, setStoredConsent } from "@/lib/consent";

export function CookieConsentBanner() {
  const locale = useLocale() as "en" | "ar";
  const t = useTranslations("cookieConsent");
  const [visible, setVisible] = useState(false);

  // Only decide visibility after mount — avoids a hydration mismatch,
  // since localStorage isn't available during server render.
  useEffect(() => {
    setVisible(getStoredConsent() === null);
  }, []);

  function handleChoice(value: ConsentValue) {
    setStoredConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label={t("label")}
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-card px-4 py-5 shadow-[0_-10px_30px_rgba(58,42,38,0.08)] sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body text-sm text-foreground">
          {t("message")}{" "}
          <Link href="/privacy-policy" className="font-semibold text-primary underline underline-offset-2">
            {t("learnMore")}
          </Link>
        </p>

        <div className="flex w-full shrink-0 gap-3 sm:w-auto">
          <button
            type="button"
            onClick={() => handleChoice("rejected")}
            className="flex-1 rounded-full border border-border px-5 py-2.5 font-body text-sm font-semibold text-foreground transition-colors hover:bg-background sm:flex-none"
          >
            {t("reject")}
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="flex-1 rounded-full bg-primary px-5 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-primary/90 sm:flex-none"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}