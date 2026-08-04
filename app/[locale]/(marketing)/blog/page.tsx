import { BlogHeroSection } from "@/components/sections/blog/BlogHeroSection";
import { BlogListSection } from "@/components/sections/blog/BlogListSection";
import { BlogFeaturedSection } from "@/components/sections/shared/BlogFeaturedSection";
import { FinalCtaSection } from "@/components/sections/shared/FinalCtaSection";

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/content/pageMeta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, pageMeta.blogs);
}


export default function BlogPage() {
  return (
    <>
      <BlogHeroSection />
   <BlogFeaturedSection showViewAll={false} />
   <BlogListSection/>
   <FinalCtaSection/>
    </>
  );
}