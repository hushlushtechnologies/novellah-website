"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { BlogPostCard } from "@/components/ui/BlogPostCard";
import { blogPosts } from "@/lib/content/blog";
import { formatDate } from "@/lib/formatDate";

const POSTS_PER_PAGE = 6;

export function BlogListSection() {
  const t = useTranslations("blogList");
  const locale = useLocale() as "en" | "ar";
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const visiblePosts = blogPosts.slice(0, visibleCount);
  const hasMore = visibleCount < blogPosts.length;

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={
            <>
              {t("headingPrefix")} <span className="text-primary">{t("headingHighlight")}</span>{" "}
              {t("headingSuffix")}
            </>
          }
          subheading={t("subheading")}
        />

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <BlogPostCard
              key={post.slug}
              post={post}
              locale={locale}
              readTimeUnit={t("readTimeUnit")}
              ctaLabel={t("ctaReadMore")}
              formatDate={formatDate}
            />
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
            >
              {t("ctaLoadMore")}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}