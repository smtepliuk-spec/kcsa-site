# KCSA Site — Project History

## Overview

Bilingual (Ukrainian/English) landing page for the **Kyiv Council on Strategic Affairs** (Київська Рада зі Стратегічних Питань).

- **Live site:** https://kcsa.netlify.app
- **Admin panel:** https://kcsa.netlify.app/admin/
- **GitHub repo:** https://github.com/smtepliuk-spec/kcsa-site
- **Created:** 2026-03-27

---

## Tech Stack

- **Astro 6** — static site generator
- **Tailwind CSS v4** — styling via `@tailwindcss/vite` plugin
- **Decap CMS** — admin panel for content editing (Netlify Identity + Git Gateway)
- **Vanilla JS** — news slider, mobile menu, contact form, parallax
- **Google Fonts** — Cinzel (headings), Raleway (body), JetBrains Mono (labels)
- **Deployed on** Netlify with auto-deploy from GitHub

---

## Design Decisions

### Audience
Hybrid — donors, experts/members, and the general public (equal weight).

### Languages
Ukrainian (default) and English via separate routes (`/ua/*`, `/en/*`). Language toggle in header.

### Design Feel
Modern, clean, official — institutional authority (Atlantic Council / Chatham House reference).

### Color Palette (from KCSA logo)
- Navy `#1A365D` — headers, hero, nav
- Gold `#C9A84C` — CTAs, labels, highlights
- Ivory `#F7F5F0` — section backgrounds
- Steel `#2D4A7A` — links, subheadings
- Charcoal `#1A1A1A` — text, footer

### Typography
- **Cinzel** — headings, matches logo's Roman serif style
- **Raleway** — body text, elegant thin sans-serif
- **JetBrains Mono** — data labels, dates, metadata

### Logo
- Logo image with "KCSA / KYIV COUNCIL ON STRATEGIC AFFAIRS" text used in header and footer (`public/logo-text.png`)
- Globe logo used separately (`public/logo-nobg.png`)
- Hero section has ghost logo watermark at 4% opacity with parallax effect

---

## Site Structure

### Pages
```
/                       → Redirects to /ua/
/ua/                    → Ukrainian homepage
/en/                    → English homepage
/ua/structure           → Leadership, council, experts
/en/structure
/ua/committees/         → Committee list
/en/committees/
/ua/committees/[slug]   → Individual committee
/en/committees/[slug]
/ua/publications        → Publications archive
/en/publications
/ua/events              → Events
/en/events
/ua/donors              → Donors (placeholder)
/en/donors
/ua/reporting           → Reporting (placeholder)
/en/reporting
/ua/contact             → Contact form
/en/contact
/admin/                 → Decap CMS admin panel
```

### Homepage Sections
1. Header — fixed, sticky, mega-menu dropdowns
2. Hero — navy gradient, ghost logo parallax
3. Ukraine Alerts — 3-card grid (placeholder for Medium integration)
4. News Slider + Events — 60/40 split layout
5. Committees — 5-card grid from content collection
6. Publications — 3-card grid with type badges
7. Donors + Reporting — split placeholder sections
8. Contact — form with mailto + direct links
9. Footer — 4-column with logo, nav, resources, contacts

### Content Collections (src/content/)
- `committees/` — YAML, committee data
- `leadership/` — YAML, director and chairs
- `council/` — YAML, council members
- `experts/` — YAML, expert list
- `events/` — Markdown, events with frontmatter
- `publications/` — Markdown, publications
- `news/` — Markdown, news slider items
- `alerts/` — Markdown, Ukraine Alerts cards
- `settings/` — YAML, site settings (email, LinkedIn, WhatsApp, phone)

---

## CMS (Decap CMS)

### Access
- **Production:** https://kcsa.netlify.app/admin/ (login with Netlify Identity)
- **Local:** Run `npm run dev` + `npm run admin`, open http://localhost:4321/admin/
- For local dev, swap backend in `public/admin/config.yml` from `git-gateway` to `proxy`

### Editable via CMS
- All content collections (committees, leadership, council, experts, events, publications, news, alerts)
- Site settings (email, LinkedIn, WhatsApp, phone number)

### Authentication
- Netlify Identity + Git Gateway
- Users invited via Netlify dashboard → Identity → Invite users
- Admin user: s.m.tepliuk@gmail.com

---

## Key Files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro config, i18n, Tailwind |
| `src/content.config.ts` | Content collection schemas |
| `src/i18n/translations.ts` | All UI text in UA/EN |
| `src/styles/global.css` | Tailwind theme (colors, fonts) |
| `src/layouts/BaseLayout.astro` | HTML shell, fonts, meta |
| `public/admin/config.yml` | Decap CMS configuration |
| `public/logo-text.png` | Logo with text for header/footer |
| `public/logo-nobg.png` | Globe logo (transparent) |

---

## Deployment

- Auto-deploys from GitHub `master` branch to Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- Netlify Identity enabled for CMS authentication
- Git Gateway enabled for CMS to commit changes

---

## Future Enhancements (not built yet)

- Medium RSS integration for Ukraine Alerts
- CMS for non-technical content editing (done — Decap CMS)
- Search across publications
- Newsletter subscription
- Event registration
- Member/expert portal
- Custom domain setup (ready — add in Netlify Domain Management)
