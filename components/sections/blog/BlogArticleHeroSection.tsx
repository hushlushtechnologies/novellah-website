import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { formatDate } from "@/lib/formatDate";
import type { BlogPost } from "@/lib/content/blog";

export async function BlogArticleHeroSection({
  post,
  locale,
}: {
  post: BlogPost;
  locale: "en" | "ar";
}) {
  const t = await getTranslations("blogDetail");

  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <nav className="flex items-center gap-2 font-body text-sm">
          <a href="/blog" className="text-foreground hover:text-primary">
            {t("breadcrumbHome")}
          </a>
          <span className="text-muted-foregroun font-bold">{"›"}</span>
          <span className="text-primary font-bold">{post.title[locale]}</span>
        </nav>

        <h1 className="mt-6 font-heading  font-extrabold text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
          {post.title[locale]}
        </h1>

        {post.intro && (
          <p className="mt-4 font-body text-sm text-muted-foreground sm:text-base">
            {post.intro[locale]}
          </p>
        )}

 <div className="relative mt-6 h-64 w-full overflow-hidden rounded-2xl sm:h-96">
  <Image src={post.image} alt="" fill priority className="object-cover" />
  <span className="absolute start-3 bottom-3 rounded-full bg-white/95 px-3 py-1.5 font-body text-xs font-semibold text-foreground sm:start-4 sm:bottom-4">
    {post.readTime} {t("readTimeUnit")}
  </span>
  <span className="absolute end-3 bottom-3 rounded-full bg-white/95 px-3 py-1.5 font-body text-xs font-semibold text-foreground sm:end-4 sm:bottom-4">
    {formatDate(post.publishedDate, locale)}
  </span>
</div>
      </div>
    </section>
  );
}