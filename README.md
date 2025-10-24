# Online Portfolio (Next.js)

A personal portfolio built with Next.js, Tailwind CSS and a small set of utilities for content and chat features.

## Table of contents

- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Quick start](#quick-start)
- [Environment variables](#environment-variables)
- [Development](#development)
- [Build & Production](#build--production)
- [Project structure](#project-structure)
- [Contributing](#contributing)
- [License & contact](#license--contact)

## About

This repository hosts a personal online portfolio and blog built with the Next.js App Router. It includes content in Markdown, some utilities for RAG/suggest features, and a small chat UI used for demonstrations.

## Features

- Static and dynamic content pages (Markdown in `content/articles`).
- Simple chat UI components and API routes under `src/app/api/chat`.
- Tailwind CSS for styling and small utilities for embedding and RAG.

## Tech stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Node.js (development environment)

## Quick start

Prerequisites

- Node.js 18+ (or the version used by your deployment platform)
- npm, yarn, or pnpm

Clone and install

1. Clone the repo

   git clone <your-repo-url>
   cd my-portfolio

2. Install dependencies

   npm install
   # or
   pnpm install

3. Create environment variables

   - There is a `.env` file in the project root. If your local environment needs secrets (API keys, etc.), add them there or create a `.env.local` that is gitignored.
   - The project doesn't require public secrets by default, but any integrations you enable (search, vector DBs, LLMs) will need keys.

4. Start the development server

   npm run dev

Open http://localhost:3000 to view the site.

## Environment variables

- Keep secrets out of git. Use `.env.local` for local overrides.
- Inspect `src/app/api` and `next.config.ts` if you need to know exactly which env vars are read by the app.

## Development

- Development server: `npm run dev`
- Type checking: `npm run type-check` (if present) or `tsc --noEmit`
- Linting: `npm run lint` (if present)

If you add new content under `content/articles`, the app will pick it up on refresh (or rebuild for production static export).

## Build & Production

Build for production

```
npm run build
npm run start   # or use your platform's start command
```

Deploy: the app works well with Vercel (recommended) or any platform that supports Next.js (Netlify, Railway, Docker, etc.).

## Project structure

- `app/` — Next.js App Router pages and API routes
  - `app/api/` — API routes used by chat and other features
- `components/` — React components (chat UI, overlays, etc.)
- `content/` — Markdown articles and content files
- `public/` — Static assets and compiled Tailwind CSS
- `scripts/` — helper scripts (e.g., `embed.ts`)
- `src/lib/` — small libraries and helpers (RAG, suggest, timeouts)

Example important files:

- `src/hooks/useChat.ts` — chat hook used by message UI
- `src/app/layout.tsx` — global layout and CSS imports
