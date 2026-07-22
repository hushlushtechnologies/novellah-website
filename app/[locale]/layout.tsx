import type { Metadata } from "next";
import { cormorant, inter } from "../fonts";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Novellah",
    template: "%s | Novellah",
  },
  description: "Novellah — premium skincare and aesthetic treatments.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "ar")) notFound();

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
           <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}