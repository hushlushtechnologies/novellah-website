 import { getTranslations, getLocale } from "next-intl/server";
import { blogPosts } from "@/lib/content/blog";
import { BlogFeaturedContent } from "./BlogFeaturedContent";

function formatDate(dateStr: string, locale: string) {
  return new Date(dateStr).toLocaleDateString(locale === "ar" ? "ar" : "en-US", {
    month: "long",
    year: "numeric",
  });
}

export async function BlogFeaturedSection({ showViewAll = true }: { showViewAll?: boolean }) {
  const t = await getTranslations("blogFeatured");
  const locale = (await getLocale()) as "en" | "ar";

  const featuredPost = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const restPosts = blogPosts.filter((p) => p.slug !== featuredPost.slug).slice(0, 2);

  return (
    <BlogFeaturedContent
      eyebrow={t("eyebrow")}
      headingLine1={t("headingLine1")}
      headingLine2={t("headingLine2")}
      subheading={t("subheading")}
      ctaViewAll={t("ctaViewAll")}
      ctaReadMore={t("ctaReadMore")}
      readTimeUnit={t("readTimeUnit")}
      showViewAll={showViewAll}
      featured={{
        slug: featuredPost.slug,
        image: featuredPost.image,
        title: featuredPost.title[locale],
        excerpt: featuredPost.excerpt[locale],
        readTime: featuredPost.readTime,
        formattedDate: formatDate(featuredPost.publishedDate, locale),
      }}
      rest={restPosts.map((post) => ({
        slug: post.slug,
        image: post.image,
        title: post.title[locale],
        excerpt: post.excerpt[locale],
        readTime: post.readTime,
        formattedDate: formatDate(post.publishedDate, locale),
      }))}
    />
  );
}