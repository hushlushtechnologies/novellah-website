// lib/formatDate.ts
export function formatDate(dateStr: string, locale: string) {
  return new Date(dateStr).toLocaleDateString(locale === "ar" ? "ar" : "en-US", {
    month: "long",
    year: "numeric",
  });
}