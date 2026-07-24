 import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/lib/content/blog";

function formatDate(dateStr: string, locale: string) {
  return new Date(dateStr).toLocaleDateString(locale === "ar" ? "ar" : "en-US", {
    month: "long",
    year: "numeric",
  });
}

export async function BlogFeaturedSection() {
  const t = await getTranslations("blogFeatured");
  const locale = (await getLocale()) as "en" | "ar";

  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug).slice(0, 2);

  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header row — heading left, CTA button right */}
        <div className="flex flex-col items-start justify-between gap-5 sm:gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow={t("eyebrow")}
            align="start"
            sides="start"
            heading={
              <>
                {t("headingLine1")}
                <br />
                {t("headingLine2")}
              </>
            }
            subheading={t("subheading")}
            className="max-w-2xl"
          />
          <Button href="/blog" variant="outline" className="w-full justify-center lg:w-fit">
            {t("ctaViewAll")}
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Featured large post */}
          <div>
            <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-72 lg:h-96">
              <Image src={featured.image} alt="" fill className="object-cover" />
              <span className="absolute start-3 top-3 rounded-full bg-white/95 px-2.5 py-1 font-body text-[10px] font-semibold text-foreground sm:start-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs">
                {featured.readTime} {t("readTimeUnit")}
              </span>
              <span className="absolute end-3 top-3 rounded-full bg-white/95 px-2.5 py-1 font-body text-[10px] font-semibold text-foreground sm:end-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs">
                {formatDate(featured.publishedDate, locale)}
              </span>
            </div>
            <h3 className="mt-4 font-heading text-xl font-bold leading-snug text-foreground sm:mt-5 sm:text-2xl">
              {featured.title[locale]}
            </h3>
            <p className="mt-2 font-body text-sm text-muted-foreground sm:mt-3">
              {featured.excerpt[locale]}
            </p>
           <a 
              href={`/blog/${featured.slug}`}
              className="mt-3 inline-flex items-center gap-1 font-body text-sm font-semibold uppercase text-primary sm:mt-4"
            >
              {t("ctaReadMore")} <ArrowRight size={14} />
            </a>
          </div>

          {/* 2 smaller posts, stacked — stretches to match the left column's full height */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {rest.map((post) => (
              <div
                key={post.slug}
                className="grid grid-cols-1 gap-4 sm:flex-1 sm:grid-cols-[48%_52%] sm:items-stretch sm:gap-5"
              >
                <div className="relative h-40 w-full overflow-hidden rounded-2xl sm:h-full sm:min-h-[176px]">
                  <Image src={post.image} alt="" fill className="object-cover" />
                  <span className="absolute start-2 top-2 rounded-full bg-white/95 px-2 py-1 font-body text-[10px] font-semibold text-foreground">
                    {formatDate(post.publishedDate, locale)}
                  </span>
                  <span className="absolute start-2 bottom-2 rounded-full bg-white/95 px-2 py-1 font-body text-[10px] font-semibold text-foreground">
                    {post.readTime} {t("readTimeUnit")}
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-heading text-base font-bold leading-snug text-foreground sm:text-lg">
                    {post.title[locale]}
                  </h3>
                  <p className="mt-2 line-clamp-2 font-body text-sm text-muted-foreground">
                    {post.excerpt[locale]}
                  </p>
                  
                <a    href={`/blog/${post.slug}`}
                    className="mt-3 inline-flex items-center gap-1 font-body text-sm font-semibold uppercase text-primary"
                  >
                    {t("ctaReadMore")} <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}