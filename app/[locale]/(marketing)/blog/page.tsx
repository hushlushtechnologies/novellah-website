import { BlogHeroSection } from "@/components/sections/blog/BlogHeroSection";
import { BlogListSection } from "@/components/sections/blog/BlogListSection";
import { BlogFeaturedSection } from "@/components/sections/shared/BlogFeaturedSection";
import { FinalCtaSection } from "@/components/sections/shared/FinalCtaSection";

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