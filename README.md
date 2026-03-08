# Joe Kracz Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS featuring animations, dark mode support, and interactive elements.

## Features

- **Modern Tech Stack**: Next.js 16, React 19, TypeScript
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Dark Mode**: Full theme support with next-themes
- **Interactive UI**:
  - Smooth scroll animations and progress indicator
  - Contact form with Web3Forms integration
  - Lottie animations
- **Performance Optimized**: Built with Next.js App Router and TurboPack
- **SEO Optimized**: Sitemap generation and metadata configuration
- **Accessibility**: Built with a11y best practices using Radix UI primitives

## Sections

- **Hero**: Introduction with typewriter effect and Lottie animation
- **Services**: Overview of capabilities (web apps, mobile, e-commerce, marketing sites)
- **Portfolio**: Featured projects with result metrics and modal details
- **About**: Background, experience, and technology stack
- **Contact**: Contact form and social links
- **Footer**: Site navigation and social links

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion, DotLottie React
- **Icons**: Lucide React
- **Forms**: Web3Forms integration
- **Type Safety**: TypeScript 5
- **Package Manager**: PNPM
- **Analytics**: Vercel Analytics, Vercel Speed Insights, Google Analytics

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- PNPM (recommended) or NPM

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd jk-portfolio

# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server with TurboPack
pnpm dev

# The site will be available at http://localhost:3000
```

### Production Build

```bash
# Create an optimized production build
pnpm build

# Run the production build locally
pnpm start
```

## Scripts

- `pnpm dev` - Start development server with TurboPack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix linting issues automatically
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## Customization

### Styling

The site uses Tailwind CSS with a custom theme defined in:
- `tailwind.config.ts` - Theme configuration and custom utilities
- `app/globals.css` - Global styles, CSS variables, and custom utilities

### Content

Content is separated from components in the `content/` directory:
- `content/projects.ts` - Portfolio project data
- `content/services.ts` - Service definitions

Components live in `components/`:
- `hero.tsx` - Hero section with typewriter and Lottie animation
- `services.tsx` - Services grid
- `portfolio.tsx` - Portfolio projects with modal details
- `about.tsx` - About section with technology grid
- `contact.tsx` - Contact form
- `header.tsx` - Navigation header
- `footer.tsx` - Footer

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the values you need:

```env
NEXT_PUBLIC_GOOGLE_ID=your-google-analytics-id
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-web3forms-access-key
```

## License

[MIT License](LICENSE)
