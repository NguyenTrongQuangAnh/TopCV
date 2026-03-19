# TopCV-style Content Site Brief

## 1. Goal

Build a content-focused website inspired by the visual language of `topcv.vn`, but remove all recruitment product complexity.

The new site should keep:

- a modern landing-page feel
- strong green brand color
- a dense but clean homepage layout
- section-based content discovery
- article-first navigation

The new site should not include:

- job search
- CV builder
- employer tools
- candidate accounts
- hiring workflows
- matching/recommendation engines

## 2. What We Reuse From TopCV

Observed from the current homepage and blog structure on 2026-03-18:

- Header with many navigation entry points and a clear CTA area
- Large homepage hero designed as the primary attention block
- Multi-section homepage with repeated card grids
- Strong use of trust/scale messaging
- Content grouped by topic/category
- Article surfaces on both homepage and dedicated blog pages
- Dense footer with many quick links

Visual patterns worth borrowing:

- green-led palette with white/light gray surfaces
- rounded cards and soft shadows
- layered landing-page sections instead of a plain feed
- mix of highlight cards, logo strips, stats, and content grids
- clear hierarchy between hero, featured content, and secondary sections

## 3. Product Direction For Our Version

This should be positioned as a media/content platform, not a recruitment platform.

Recommended content model:

- Homepage
- Article listing
- Category listing
- Article detail
- Search results
- CMS admin

Optional later:

- author pages
- tags
- newsletter
- related articles block by topic

## 4. MVP Scope

### Public site

- Homepage with TopCV-inspired structure
- Blog listing page
- Category page
- Article detail page
- Search for articles
- Responsive header and footer

### CMS

- Admin login
- Create/edit/delete articles
- Draft/published status
- Category management
- Cover image upload
- SEO fields: title, description, slug, OG image
- Rich text editor
- Publish date
- Featured article toggle

### Excluded from MVP

- user registration
- comments
- job data
- multilingual support
- recommendation engine
- analytics dashboard inside CMS

## 5. Suggested Homepage Structure

To feel similar to TopCV without copying it 1:1:

1. Announcement/top utility bar
2. Main header with logo, nav, and CTA
3. Hero section
4. Featured categories
5. Featured articles block
6. Stats / trust section
7. Topic-based article sections
8. Partner / brand / logo strip
9. Newsletter or CTA section
10. Dense footer

### Hero adaptation

TopCV uses a search-driven hero. For our version, replace that with a content-discovery hero:

- headline
- short supporting description
- article search input
- primary CTA: read featured articles
- secondary CTA: browse categories
- highlight panel for 1 featured article + 2 quick links

## 6. Suggested Page-Level UI

### Homepage

- bold hero
- 3-6 featured categories
- article cards in mixed sizes
- one editorial spotlight section
- one trending section
- one newest articles section

### Blog listing

- page intro
- category tabs/filter
- featured article at top
- paginated article grid

### Article detail

- category
- title
- author/date/read time
- hero image
- rich content body
- sticky table of contents if article is long
- related articles

## 7. CMS Data Model

### Article

- title
- slug
- excerpt
- content
- coverImage
- category
- tags
- author
- status
- featured
- publishedAt
- seoTitle
- seoDescription
- ogImage

### Category

- name
- slug
- description
- icon or image
- featuredOrder

### Author (optional for MVP)

- name
- avatar
- bio

## 8. Recommended Tech Stack

Recommended setup for fast delivery and a built-in admin:

- Frontend + CMS: `Next.js + Payload CMS`
- Database: `PostgreSQL`
- Styling: `Tailwind CSS` with custom design tokens
- Image storage: local in dev, object storage in production

Why this is the best fit here:

- single codebase
- TypeScript-friendly
- easy custom admin
- flexible content schema
- can render a highly custom landing page without fighting a theme system

Alternative if we want a simpler editorial backend with separate services:

- `Next.js + Strapi`

## 9. Design Rules To Keep

- Do not clone TopCV branding assets, copy, icons, or illustrations directly
- Keep the overall rhythm and density, but redesign each block with original assets
- Use a green identity, but define our own shades and spacing system
- Preserve the feeling of a large, trustworthy platform
- Make article cards the central interaction model

## 10. Build Order

Phase 1:

- initialize project
- set up design tokens
- build header, footer, and layout
- build homepage sections with static mock data

Phase 2:

- install and configure CMS
- create article/category schemas
- connect homepage and listing pages to CMS data

Phase 3:

- article detail page
- search
- SEO metadata
- responsive polish

## 11. Immediate Next Step

The cleanest next move is:

1. scaffold a `Next.js + Payload CMS` project
2. build the homepage shell with static content first
3. wire CMS content after the layout is approved

This keeps risk low and makes visual review fast before spending time on backend wiring.
