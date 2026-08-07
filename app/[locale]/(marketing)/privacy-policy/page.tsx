import { getLocale, getTranslations } from "next-intl/server";
import { siteConfig } from "@/lib/siteConfig";

export default async function PrivacyPolicyPage() {
  const t = await getTranslations("privacyPolicy");
  const locale = (await getLocale()) as "en" | "ar";

  const sections = [
    {
      title: t("informationCollectedTitle"),
      content: (
        <>
          <p>{t("informationCollectedText")}</p>
        </>
      ),
    },
    {
      title: t("informationUseTitle"),
      content: (
        <>
          {" "}
          <p>{t("informationUseText")}</p>{" "}
          <ul className="mt-5 list-disc space-y-2 ps-5">
            {" "}
            <li>{t("use1")}</li> <li>{t("use2")}</li> <li>{t("use3")}</li>{" "}
            <li>{t("use4")}</li> <li>{t("use5")}</li>  
          </ul>{" "}
        </>
      ),
    },
    {
      title: t("protectionTitle"),
      content: <p>{t("protectionText")}</p>,
    },
    {
      title: t("thirdPartyTitle"),
      content: (
        <>
          <p>{t("thirdPartyText")}</p>
        </>
      ),
    },
    {
      title: t("cookiesTitle"),
      content: <p>{t("cookiesText")}</p>,
    },
    {
      title: t("rightsTitle"),
      content: (
        <>
          <p>{t("rightsText")}</p>
        </>
      ),
    },
    {
      title: t("contactTitle"),
      content: (
        <div className="space-y-3">
          <p>{t("contactText")}</p>

          <div className="pt-4">
            <p className="font-semibold text-foreground">{siteConfig.name}</p>

            <a
              href={siteConfig.emailHref}
              className="block hover:text-primary transition-colors"
            >
              {siteConfig.email}
            </a>

            <a
              href={siteConfig.phoneHref}
              className="block hover:text-primary transition-colors"
            >
              {siteConfig.phone}
            </a>

            <p>
              {siteConfig.address1[locale]}
              <br />
              {siteConfig.address2[locale]}
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="  py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-8">
        {/* Left */}

        <aside className="lg:sticky lg:top-28 lg:self-start lg:flex lg:justify-center">
          <div className="max-w-md">
            <h1 className="font-heading text-4xl font-bold text-primary lg:text-5xl">
              {t("title")}
            </h1>

            <p className="mt-8 font-body text-sm font-medium text-foreground">
              {t("lastUpdated")}
            </p>

            <p className="mt-8 font-body text-base font-medium leading-8 text-foreground">
              {t("intro")}
            </p>
          </div>
        </aside>

        {/* Right */}

        <div className="space-y-14   ">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-heading text-3xl text-foreground font-bold lg:text-4xl">
                {section.title}
              </h2>

              <div className="mt-5 font-body text-base leading-8 text-foreground">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
