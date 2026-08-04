import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { BlogArticleHeroSection } from "@/components/sections/blog/BlogArticleHeroSection";
import { BlogArticleBodySection } from "@/components/sections/blog/BlogArticleBodySection";
import { blogPosts } from "@/lib/content/blog";
import { RelatedArticlesSection } from "@/components/sections/blog/RelatedArticlesSection";
import { FinalCtaSection } from "@/components/sections/shared/FinalCtaSection";

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
 

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "ar"; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Not found" };

  return buildMetadata(locale, {
    title: post.title,
    description: post.excerpt,
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const locale = (await getLocale()) as "en" | "ar";

  return (
    <>
      <BlogArticleHeroSection post={post} locale={locale} />
      <BlogArticleBodySection post={post} locale={locale} />
     <RelatedArticlesSection currentSlug={slug} locale={locale} />
     <FinalCtaSection/>
    </>
  );
}