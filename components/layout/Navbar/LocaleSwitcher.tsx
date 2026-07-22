"use client";

import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === "en" ? "ar" : "en";

  function switchLocale() {
    const segments = pathname.split("/");
    if (routing.locales.includes(segments[1] as "en" | "ar")) {
      segments[1] = nextLocale;
    } else {
      segments.unshift("", nextLocale);
    }
    router.push(segments.join("/") || "/");
  }

  return (
    <button
      onClick={switchLocale}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-xs font-medium text-primary"
    >
      {nextLocale.toUpperCase()}
    </button>
  );
}