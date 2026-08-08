"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

interface PostSummary {
  slug: string;
  image: string;
  title: string;
  excerpt: string;
  readTime: number;
  formattedDate: string;
}

interface BlogFeaturedContentProps {
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  subheading: string;
  ctaViewAll: string;
  ctaReadMore: string;
  readTimeUnit: string;
  showViewAll: boolean;
  featured: PostSummary;
  rest: PostSummary[];
}

const revealUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const gridContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const gridItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function BlogFeaturedContent({
  eyebrow,
  headingLine1,
  headingLine2,
  subheading,
  ctaViewAll,
  ctaReadMore,
  readTimeUnit,
  showViewAll,
  featured,
  rest,
}: BlogFeaturedContentProps) {
  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header row — heading left, CTA button right */}
        <div className="flex flex-col items-start justify-between gap-5 sm:gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow={eyebrow}
            align="start"
            sides="start"
            heading={
              <>
                {headingLine1}
                <br />
                {headingLine2}
              </>
            }
            subheading={subheading}
            className="max-w-2xl"
            ctaLabel={showViewAll ? ctaViewAll : undefined}
            ctaHref={showViewAll ? "/blog" : undefined}
          />
        </div>

        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2 lg:items-stretch"
        >
          {/* Featured large post — whole card clickable */}
          <motion.a
            variants={gridItem}
            href={`/blog/${featured.slug}`}
            className="group"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-72 lg:h-96">
              <Image
                src={featured.image}
                alt=""
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <span className="absolute start-3 top-3 rounded-full bg-white/95 px-2.5 py-1 font-body text-[10px] font-semibold text-foreground sm:start-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs">
                {featured.readTime} {readTimeUnit}
              </span>
              <span className="absolute end-3 top-3 rounded-full bg-white/95 px-2.5 py-1 font-body text-[10px] font-semibold text-foreground sm:end-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs">
                {featured.formattedDate}
              </span>
            </div>
            <h3 className="mt-4 font-heading text-xl font-bold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary sm:mt-5 sm:text-2xl">
              {featured.title}
            </h3>
            <p className="mt-2 font-body text-sm text-muted-foreground sm:mt-3">
              {featured.excerpt}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 font-body text-sm font-semibold uppercase text-primary sm:mt-4">
              {ctaReadMore}
              <ArrowRight
                size={14}
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              />
            </span>
          </motion.a>

          {/* 2 smaller posts, stacked — each fully clickable */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {rest.map((post) => (
              <motion.a
                key={post.slug}
                variants={gridItem}
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-1 gap-4 sm:flex-1 sm:grid-cols-[48%_52%] sm:items-stretch sm:gap-5"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="relative h-40 w-full overflow-hidden rounded-2xl sm:h-full sm:min-h-[176px]">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <span className="absolute start-2 top-2 rounded-full bg-white/95 px-2 py-1 font-body text-[10px] font-semibold text-foreground">
                    {post.formattedDate}
                  </span>
                  <span className="absolute start-2 bottom-2 rounded-full bg-white/95 px-2 py-1 font-body text-[10px] font-semibold text-foreground">
                    {post.readTime} {readTimeUnit}
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-heading text-base font-bold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary sm:text-lg">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 font-body text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 font-body text-sm font-semibold uppercase text-primary">
                    {ctaReadMore}
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}