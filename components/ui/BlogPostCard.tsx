import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/content/blog";

interface BlogPostCardProps {
  post: BlogPost;
  locale: "en" | "ar";
  readTimeUnit: string;
  ctaLabel: string;
  formatDate: (dateStr: string, locale: string) => string;
}

export function BlogPostCard({ post, locale, readTimeUnit, ctaLabel, formatDate }: BlogPostCardProps) {
  return (
    
     <a href={`/blog/${post.slug}`}
      className="group block transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative h-56 w-full overflow-hidden rounded-2xl">
        <Image
          src={post.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute start-3 top-3 rounded-full bg-white/95 px-2.5 py-1 font-body text-[10px] font-semibold text-foreground">
          {post.readTime} {readTimeUnit}
        </span>
        <span className="absolute end-3 top-3 rounded-full bg-white/95 px-2.5 py-1 font-body text-[10px] font-semibold text-foreground">
          {formatDate(post.publishedDate, locale)}
        </span>
      </div>
      <h3 className="mt-4 font-extrabold font-heading text-lg leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
        {post.title[locale]}
      </h3>
      <p className="mt-2 line-clamp-3 font-body text-sm text-muted-foreground">{post.excerpt[locale]}</p>

      <span className="mt-3 inline-flex items-center gap-1 font-body text-sm font-semibold uppercase text-primary">
        {ctaLabel}
        <ArrowRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </a>
  );
}