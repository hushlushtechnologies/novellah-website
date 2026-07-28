import Image from "next/image";
import { getTranslations } from "next-intl/server";
 import { InstagramIcon, LinkedinIcon, FacebookIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { Button } from "@/components/ui/Button";
import { BlogPostCard } from "@/components/ui/BlogPostCard";
import { blogPosts, type BlogPost } from "@/lib/content/blog";
import { siteConfig } from "@/lib/siteConfig";
import { formatDate } from "@/lib/formatDate";
import { SubscribeInline } from "./SubscribeInline";

const socialIcons = [
  { Icon: InstagramIcon, href: siteConfig.socials.instagram },
  { Icon: LinkedinIcon, href: siteConfig.socials.linkedin },
  { Icon: FacebookIcon, href: siteConfig.socials.facebook },
  { Icon: YoutubeIcon, href: siteConfig.socials.youtube },
];

export async function BlogArticleBodySection({
  post,
  locale,
}: {
  post: BlogPost;
  locale: "en" | "ar";
}) {
  const t = await getTranslations("blogDetail");
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
        {/* Article body */}
        <article className="mx-auto max-w-2xl">
          {post.body?.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2 key={i} className="mt-8 font-bold font-heading text-2xl text-foreground first:mt-0">
                  {block.text[locale]}
                </h2>
              );
            }
            if (block.type === "paragraph") {
              return (
                <p key={i} className="mt-3 font-body text-sm text-muted-foreground sm:text-base">
                  {block.text[locale]}
                </p>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="mt-3 space-y-1.5">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 font-body text-sm text-muted-foreground sm:text-base">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {item[locale]}
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === "imageGrid") {
              return (
                <div key={i} className="mt-6 grid grid-cols-2 gap-4">
                  {block.images.map((src, j) => (
                    <div key={j} className="relative h-40 overflow-hidden rounded-2xl sm:h-52">
                      <Image src={src} alt="" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              );
            }
            return null;
          })}
        </article>

        {/* Sidebar */}
        <aside className="flex flex-col gap-8">
          <div className="rounded-2xl   ">
            <div className="flex items-center gap-2">
              <div className="h-1 rounded-full w-8 bg-primary" />
              <p className="font-body text-xs font-semibold uppercase tracking-wide text-primary">
                {t("subscribeEyebrow")}
              </p>
            </div>

            <div className="mt-5 mb-3 h-8 w-24">
              <Image src="/images/logo.svg" alt="Novellah" width={96} height={32} />
            </div>

            <p className="mt-12 font-body text-sm text-muted-foreground">{t("subscribeBody")}</p>

            <label className="mt-4 block font-body text-sm text-foreground">{t("emailLabel")}</label>
            <SubscribeInline
              placeholder={t("emailPlaceholder")}
              ctaLabel={t("ctaSubscribe")}
            />
            <p className="mt-2 font-body text-xs text-muted-foreground">{t("subscribeDisclaimer")}</p>

            <p className="mt-5 font-body text-xs font-semibold uppercase tracking-wide text-primary">
              {t("followUsLabel")}
            </p>
            <div className="mt-2 flex items-center gap-2">
              {socialIcons.map((social, i) => (
                
                 <a key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary/40 text-secondary"
                >
                  <social.Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <div className="h-1 rounded-full w-8 bg-primary" />
              <p className="font-body text-xs font-semibold uppercase tracking-wide text-primary">
                {t("featuredArticlesEyebrow")}
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-5">
              {otherPosts.map((p) => (
                <div key={p.slug} className="flex gap-3">
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl">
                    <Image src={p.image} alt="" fill className="object-cover" />
                    <span className="absolute start-1 top-1 rounded-full bg-white/95 px-1.5 py-0.5 font-body text-[8px] font-semibold text-foreground">
                      {formatDate(p.publishedDate, locale)}
                    </span>
                    <span className="absolute start-1 bottom-1 rounded-full bg-white/95 px-1.5 py-0.5 font-body text-[8px] font-semibold text-foreground">
                      {p.readTime} {t("readTimeUnit")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm leading-snug text-foreground">{p.title[locale]}</h4>
                    <p className="mt-1 line-clamp-2 font-body text-xs text-muted-foreground">
                      {p.excerpt[locale]}
                    </p>
                  <a  
                      href={`/blog/${p.slug}`}
                      className="mt-1 inline-block font-body text-xs font-semibold uppercase text-primary"
                    >
                      {t("ctaReadMore")}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}