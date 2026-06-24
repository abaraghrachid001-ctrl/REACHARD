# Structura Maroc

Premium platform for Civil Engineering & Public Works in Morocco. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn-style components, and Framer Motion.

## Design system

- **Palette**: navy `#060D17 → #1E4068`, gold `#C9A227 → #E8C766`, ivory `#F8F7F3`.
- **Type**: Fraunces (display), Inter (body), JetBrains Mono (data/eyebrows/labels).
- **Signature element**: the hero's hand-drafted gold blueprint elevation that ink-draws itself in on load — a nod to the engineering drawing board, instead of a generic gradient hero.
- **Glassmorphism**: `.glass` / `.glass-card` utility classes in `app/globals.css`.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in real keys
npm run dev
```

## What's fully built

- Marketing site: Hero, Services (5 offerings), Blog (listing + post template), Resources library (filterable PDF/Excel/DWG grid with premium locks), Membership pricing, Digital store, Contact form, Services page.
- Navbar (glass, responsive, search trigger, language toggle), Footer, full SEO metadata, `sitemap.ts`, `robots.ts`.
- Admin dashboard shell: sidebar layout + overview stats/activity feed at `/dashboard`.
- Auth UI: `/login`, `/register` forms.
- `lib/i18n.ts`: FR/AR dictionaries ready to wire into `next-intl` or App Router `[locale]` segments.
- AdSense-ready component (`components/adsense.tsx`) — activates once `NEXT_PUBLIC_ADSENSE_CLIENT_ID` is set.
- Stripe checkout route stub (`app/api/checkout/route.ts`) and search API stub (`app/api/search/route.ts`).

## What still needs real backend wiring (intentionally stubbed — these require your infra/keys, not more frontend)

1. **Authentication** — `next-auth` is installed; add `app/api/auth/[...nextauth]/route.ts` with your providers (email, Google) and a database adapter (Prisma/Drizzle + Postgres recommended).
2. **Payments** — `STRIPE_SECRET_KEY` + webhook handler for subscription/membership state; the checkout route is scaffolded.
3. **Database & CMS** — blog posts, resources, and products are hardcoded arrays for now. Swap for Postgres/Prisma or a headless CMS (Sanity/Payload).
4. **Search** — `app/api/search/route.ts` does naive array filtering; swap in Meilisearch/Algolia for production-grade full-text search.
5. **Locale routing** — dictionaries exist in `lib/i18n.ts`; add `[locale]` route segments or `next-intl` middleware for `/fr` and `/ar` (RTL handled automatically by setting `dir="rtl"` on `<html>` when locale is `ar`).
6. **File delivery** — wire real PDF/Excel/DWG storage (S3/Cloudflare R2) with signed URLs gated by membership tier.

## Folder structure

```
app/                 routes (App Router)
  blog/, resources/, membership/, store/, contact/, services/
  login/, register/, dashboard/
  api/checkout, api/search
  globals.css, layout.tsx, sitemap.ts, robots.ts
components/          navbar, footer, hero, services, blog-preview, membership-cta, adsense
components/ui/       button, card, badge, input
lib/                 utils.ts (cn helper), i18n.ts (FR/AR dictionaries)
```
