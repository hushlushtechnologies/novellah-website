"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === "en" ? "ar" : "en";

  function switchLocale() {
    router.push(pathname, { locale: nextLocale });
  }

  return (
    <button
      onClick={switchLocale}
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-background text-xs font-medium text-primary"
    >
      {nextLocale.toUpperCase()}
    </button>
  );
}