import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import { BlogPostCard } from "@/components/ui/BlogPostCard";
import { blogPosts, type BlogPost } from "@/lib/content/blog";
import { formatDate } from "@/lib/formatDate";

export async function RelatedArticlesSection({
  currentSlug,
  locale,
}: {
  currentSlug: string;
  locale: "en" | "ar";
}) {
  const t = await getTranslations("relatedArticles");
  const tBlogList = await getTranslations("blogList");

  const related = blogPosts.filter((p) => p.slug !== currentSlug).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <DecorativeFlower position="top-left" size="lg" opacity={0.5} />

      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={t("eyebrow")} heading={t("heading")} />

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((post) => (
            <BlogPostCard
              key={post.slug}
              post={post}
              locale={locale}
              readTimeUnit={tBlogList("readTimeUnit")}
              ctaLabel={tBlogList("ctaReadMore")}
              formatDate={formatDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}