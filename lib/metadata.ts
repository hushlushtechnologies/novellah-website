import type { Metadata } from "next";
import type { PageMeta } from "@/lib/content/pageMeta";

type Locale = "en" | "ar";

export function buildMetadata(locale: Locale, meta: PageMeta): Metadata {
  const title = meta.title[locale];
  const description = meta.description[locale];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: locale === "ar" ? "ar_AE" : "en_US",
      type: "website",
    },
  };
}