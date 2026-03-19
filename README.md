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

## Deploy to Render

This repo includes [render.yaml](/D:/Admin/Workspace/Codex/TopCV/render.yaml) for a Render Blueprint deployment.

1. Push the latest code to GitHub
2. In Render, choose `New` -> `Blueprint`
3. Select this repository
4. Render will detect `render.yaml` automatically
5. Provide values for:
   - `PAYLOAD_PUBLIC_SERVER_URL`
   - `NEXT_PUBLIC_SITE_URL`
   - `PAYLOAD_ADMIN_PASSWORD`
   - `PAYLOAD_EDITOR_PASSWORD`
6. Deploy

Notes:

- The app deploys from the existing `Dockerfile`
- Uploaded files persist on a disk mounted at `/app/media`
- Render provisions the PostgreSQL database from the Blueprint

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
