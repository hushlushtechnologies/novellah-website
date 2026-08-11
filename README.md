# Novellah Restyle 

A fully bilingual (English/Arabic), static marketing website for **Novellah Restyle**, a premium skincare and aesthetics clinic. Built with the Next.js App Router, TypeScript, and Tailwind CSS v4 — no backend, fully statically generated.

---

## ✨ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme` config) |
| i18n | [`next-intl`](https://next-intl.dev) — English + Arabic, full RTL support |
| Icons | [Lucide React](https://lucide.dev) (+ custom inline SVGs for brand/social icons) |
| Animation | Framer Motion (planned), GSAP (only where required) |
| Fonts | Cormorant Garamond (headings), Inter (body) — via `next/font` |
| Linting | ESLint + Prettier |

---

## 🗂️ Project Structure

```
novellah/
├── middleware.ts                   # next-intl locale routing (Next.js 16 renamed this)
├── next.config.ts                  # wraps config with next-intl plugin
│
├── i18n/
│   ├── routing.ts                  # locales, default locale, prefix strategy
│   └── request.ts                  # loads messages per request
│
├── messages/
│   ├── en.json                     # English UI strings, namespaced per section
│   └── ar.json                     # Arabic UI strings (mirrors en.json keys)
│
├── lib/
│   ├── navigation.ts                # navLinks, treatmentsMegaMenu, Localized type
│   ├── siteConfig.ts                # centralized contact info, socials, map embed
│   ├── styles.ts                    # shared Tailwind class-string constants
│   ├── formatDate.ts                # locale-aware date formatting
│   └── content/
│       ├── treatments.ts            # treatment data (bilingual, detail-page fields)
│       ├── doctors.ts               # doctor profiles
│       ├── blog.ts                  # blog posts (typed ArticleBlock content model)
│       ├── faq.ts                   # FAQ item sets (per-page arrays)
│       ├── membershipTiers.ts       # loyalty tier data
│       ├── offers.ts                # special offers
│       ├── testimonials.ts          # client testimonials
│       ├── partners.ts              # partner logos
│       └── gallery.ts               # clinic gallery images
│
├── components/
│   ├── ui/                          # small reusable primitives
│   │   ├── Button.tsx                # href OR onClick; variants: primary/solid/secondary/outline
│   │   ├── SectionHeader.tsx         # eyebrow + heading + subheading + CTA
│   │   ├── DecorativeFlower.tsx      # positioned decorative art (dir="ltr" locked)
│   │   ├── ScrollCue.tsx             # hero "scroll to discover" affordance
│   │   ├── DoctorCard.tsx
│   │   ├── TreatmentCard.tsx
│   │   ├── BlogPostCard.tsx
│   │   ├── ContactBannerStrip.tsx
│   │   └── SocialIcons.tsx           # inline SVGs (Lucide lacks reliable brand icons)
│   │
│   ├── layout/
│   │   ├── Navbar/                   # mega menu, mobile drawer, locale switcher
│   │   └── Footer.tsx
│   │
│   └── sections/
│       ├── home/                     # homepage-only sections
│       ├── about/
│       ├── doctors/
│       ├── treatments/
│       ├── blog/
│       ├── loyalty/
│       ├── offers/
│       ├── contact/
│       ├── booking/
│       └── shared/                   # sections used on 2+ pages
│
├── app/
│   └── [locale]/
│       ├── layout.tsx                 # fonts, dir="rtl"/"ltr", Navbar, Footer
│       ├── fonts.ts
│       └── (marketing)/
│           ├── page.tsx                          # Home
│           ├── about-us/page.tsx
│           ├── treatments/
│           │   ├── page.tsx
│           │   └── [categorySlug]/[slug]/page.tsx
│           ├── our-doctors/
│           │   ├── page.tsx
│           │   └── [slug]/page.tsx
│           ├── special-offer/page.tsx
│           ├── loyality-cards/page.tsx
│           ├── blog/
│           │   ├── page.tsx
│           │   └── [slug]/page.tsx
│           ├── contact-us/page.tsx
│           └── book-appintment/page.tsx
│
└── public/
    └── images/                        # logo, icons, decorative art, photos
```

---

## 🌍 Internationalization & RTL

- **Locales:** `en` (default, no URL prefix) and `ar` (`/ar/...`)
- Server Components: `getTranslations` / `getLocale` from `next-intl/server`
- Client Components: `useTranslations` / `useLocale` from `next-intl`
- **RTL:** the whole site uses Tailwind **logical properties** (`start`/`end`, `ps`/`pe`, `ms`/`me`) instead of physical `left`/`right`, so layout mirrors automatically in Arabic
- **Decorative elements are the one exception** — swirls, flowers, and other non-content art are wrapped in `dir="ltr"` so they stay physically fixed and don't mirror with the rest of the page
- All content data (`lib/content/*.ts`) is bilingual via a shared `Localized` type:
  ```ts
  interface Localized {
    en: string;
    ar: string;
  }
  ```
- **Never** color part of a heading via a runtime `.split(" ")` — this breaks for Arabic word order. Always store pre-split translation keys (e.g. `headingLine1` / `headingHighlight`) instead.

---

## 🎨 Design System

### Theme tokens (`app/globals.css` → `@theme`)

| Token | Value |
|---|---|
| `--color-primary` | `#7A1E1E` |
| `--color-secondary` | `#C7A35D` |
| `--color-background` | `#FAEDDE` |
| `--color-background-light` | `#F8F4EF` |
| `--color-card` | `#FCFAF8` |
| `--color-border` | `#D8C8C2` |
| `--color-foreground` | `#3A2A26` |
| `--color-muted-foreground` | `#8B7C70` |
| `--font-heading` | Cormorant Garamond |
| `--font-body` | Inter |

> Gradients **must** use the `--background-image-*` namespace (e.g. `--background-image-gradient-primary`) — Tailwind v4 won't generate a `bg-*` utility class from a bare `--gradient-*` variable.

### Shared style constants (`lib/styles.ts`)

Structural class strings shared across sections — color is intentionally left out and applied locally per usage:

```ts
heroHeadingClasses
sectionHeadingClasses
sectionEyebrowClasses
sectionDividerClasses
sectionDescriptionClasses
miniDividerClasses
cardBaseClasses
```

### Core reusable components

- **`<Button>`** — accepts `href` (renders a `<Link>`) or no `href` + `onClick`/`type="submit"` (renders a `<button>`). `children` is required for accessibility — icon-only buttons need an `sr-only` label.
- **`<SectionHeader>`** — `eyebrow`, `heading` (ReactNode), optional `subheading`/`ctaLabel`/`ctaHref`, `align` (`center`/`start`), `sides` (`both`/`start`), `dividerColor` (`primary`/`secondary`).

---

## 🏗️ Architectural Conventions

1. **Server Components by default.** `"use client"` only when something genuinely needs it — `useState`, forms, tabs, pagination, accordions.
2. **Forms are split** into a Server wrapper (static layout/translations) + an isolated Client sub-component (the actual interactive fields) — minimizes shipped JS.
3. **Single source of truth for shared data** — e.g. the mega menu, the Treatments listing page, and treatment detail pages all read from the same `treatmentsMegaMenu` / `treatments` arrays. Never duplicate a list.
4. **Card markup lives in one place.** `DoctorCard`, `TreatmentCard`, and `BlogPostCard` are each used across a homepage teaser, a full listing page, and (where relevant) a detail page's "related" section.
5. **`components/sections/shared/`** is for anything used on 2+ pages — move a section here the moment a second usage is confirmed, don't leave it under a single page's folder.
6. **Detail pages** use `generateStaticParams()` for full static generation, and call `notFound()` when a slug doesn't match.
7. **`lib/siteConfig.ts`** is the only place phone/WhatsApp/email/address/hours should be hardcoded — every component reads from it.

---

## 🖼️ Image Handling

- Every `<Image fill>` usage **must** include a `sizes` prop — without it, Next.js assumes 100vw at every breakpoint and over-fetches.
- The parent of any `fill` image needs `overflow-hidden` to prevent decorative glows/effects from bleeding outside their section.
- **LCP / hero images** get `priority` **and** `placeholder="blur"` — the latter requires a **static import** of the image file (`import heroImage from "@/public/images/hero.jpg"`), not a string `src` path, since Next.js needs to analyze the file at build time to auto-generate the blur data.
- `priority` should be reserved for genuinely above-the-fold images only.

---

## 🐛 Known Gotchas (learned the hard way)

- **`min-w-0 flex-1`** is required on a flex child that also has `overflow-x-auto` — without it, the element expands to fit its content instead of clipping/scrolling, and horizontal scroll silently does nothing.
- **Tailwind v4 has no default `xs` breakpoint** — if one is needed, add `--breakpoint-xs` to `@theme` explicitly rather than assuming `xs:` classes will work.
- **Merged TypeScript interfaces must all share the same export status** — two `interface Foo {}` declarations in one file (one exported, one not) throws a build error.
- **`Button`'s `children` is required** — pass an `sr-only` label for icon-only buttons rather than omitting `children`.
- **Lucide doesn't reliably ship brand/logo icons** (`Facebook` has been removed in some versions) — use `components/ui/SocialIcons.tsx` (custom inline SVGs) instead of importing brand icons from `lucide-react`.
- **Next.js 16 renamed `middleware.ts` → `proxy.ts`** (and the named export `middleware` → `proxy`, though `next-intl`'s default-export pattern is unaffected by the export rename).

---

## 📋 Content Model Highlights

### Treatments (`lib/content/treatments.ts`)
Each `Treatment` includes card data (`title`, `description`, `image`, `durationMinutes`, `skinType`) plus full detail-page content: `detailDescription`, `overview`, `benefits[]`, `process[]` (numbered steps), and a per-treatment `faq[]`.

### Blog (`lib/content/blog.ts`)
Article bodies use a typed `ArticleBlock` union so any post can mix structured content freely:
```ts
type ArticleBlock =
  | { type: "paragraph"; text: Localized }
  | { type: "heading"; text: Localized }
  | { type: "list"; items: Localized[] }
  | { type: "imageGrid"; images: string[] };
```

### FAQ (`lib/content/faq.ts`)
`<FaqSection items={...} />` takes its question set as a prop — each page (or even each treatment) supplies its own `FaqItem[]`, while the section's UI (accordion, help card, WhatsApp/consultation links) stays fixed.

---

## ⚠️ Outstanding Work / Technical Debt

- [ ] Consolidate the "framed image + overlay badge + icon grid" pattern (repeated 4+ times) into one shared component
- [ ] Extract shared pagination-dot logic (currently duplicated across 4 sections)
- [ ] Replace placeholder/incomplete content across all `lib/content/*.ts` files with final copy
- [ ] Replace placeholder images, including watermarked stock photos
- [ ] Full native-speaker review of all Arabic translations
- [ ] Wire real backend/submission handling for Contact form, Booking form, Newsletter signup
- [ ] Implement scroll animations (deferred until section patterns stabilized)
- [ ] SEO: metadata API, Open Graph tags, `sitemap.xml`, `robots.txt`
- [ ] Favicon and a styled 404 page
- [ ] Build real Privacy Policy / Terms pages (currently linked from Footer, don't exist)
- [ ] Real Google Maps embed on Contact page
- [ ] Reconcile inconsistent support email addresses across the codebase

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` (English) or `http://localhost:3000/ar` (Arabic).

```bash
npm run build   # production build + type check
```

> Run `npm run build` periodically during development — `next dev` is lenient about type errors that `next build` will catch.