# joekracz.com

Personal portfolio site for Joe Kracz -- freelance software engineer. Built with Next.js 16, React 19, and Tailwind CSS.

Live at [joekracz.com](https://joekracz.com).

## Tech Stack

- **Next.js 16** (App Router, TurboPack)
- **React 19** with TypeScript
- **Tailwind CSS 3.4** with custom theme
- **Radix UI** + shadcn/ui for accessible components
- **Framer Motion** for animations
- **Web3Forms** for contact form submissions
- **Vercel** for hosting, analytics, and speed insights

## Project Structure

```
app/              Next.js App Router (layout, page, global styles, sitemap)
components/       Page sections (hero, services, portfolio, about, contact)
  ui/             Reusable UI primitives (button, dialog, input, etc.)
content/          Data files for services, projects, and pricing
lib/              Utilities and API helpers
types/            TypeScript type definitions
public/           Static assets (images, icons, Lottie files)
```

Content is separated from presentation -- update `content/projects.ts` and `content/services.ts` to change what's displayed without touching components.

## Getting Started

Requires Node.js 18+ and PNPM.

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Create a `.env.local` for the contact form:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
```

## Scripts

| Command              | Description                    |
| -------------------- | ------------------------------ |
| `pnpm dev`           | Start dev server (TurboPack)   |
| `pnpm build`         | Production build               |
| `pnpm start`         | Serve production build         |
| `pnpm lint`          | Run ESLint                     |
| `pnpm lint:fix`      | Auto-fix lint issues           |
| `pnpm format`        | Format with Prettier           |
| `pnpm format:check`  | Check formatting               |

## Styling

Theme configuration lives in `tailwind.config.ts` and `app/globals.css`. The site supports dark and light modes via `next-themes` with system preference detection.

Fonts: Instrument Sans (headings) and Geist Mono (body).

## License

[MIT](LICENSE)
