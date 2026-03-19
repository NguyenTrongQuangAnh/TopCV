# TopCV-style Content Platform

Website inspired by the visual rhythm of TopCV, but focused only on editorial content and article publishing.

## Stack

- Next.js App Router
- Payload CMS
- PostgreSQL
- Tailwind CSS
- Docker Compose

## Local setup

1. Copy `.env.example` to `.env`
2. If you run without Docker, change `DATABASE_URI` host from `db` to `localhost`
3. Install dependencies with `npm install`
4. Start development with `npm run dev`
5. Open `http://localhost:3000`
6. Open `http://localhost:3000/admin` for CMS

## Docker

1. Copy `.env.example` to `.env`
2. Run `docker compose up --build`
3. Open `http://localhost:3000`

## Seed behavior

On first boot the app attempts to:

- create the admin user from `PAYLOAD_ADMIN_EMAIL` and `PAYLOAD_ADMIN_PASSWORD`
- create the writer user from `PAYLOAD_EDITOR_EMAIL` and `PAYLOAD_EDITOR_PASSWORD`
- create sample categories
- create sample articles

## Current scope

- TopCV-inspired homepage
- Article listing
- Category pages
- Article detail pages
- Search
- Payload CMS for managing articles, categories, media, and admins

## CMS usage

- Quick workflow guide: [CMS_GUIDE.md](D:\Admin\Workspace\Codex\TopCV\CMS_GUIDE.md)
