# Joe Kracz Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, and TailwindCSS featuring a beautiful UI with animations, dark mode support, and interactive elements.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Dark Mode**: Full theme support with next-themes
- **Interactive UI**: 
  - Custom cursor effects
  - Smooth scroll animations
  - Interactive pricing calculator
  - Contact form
- **Performance Optimized**: Built with Next.js App Router and TurboPack
- **Fully Customizable**: Easily modify content and styling
- **Accessibility**: Built with a11y best practices

## 📋 Sections

- **Hero**: Eye-catching introduction with animations
- **Services**: Showcase of professional services
- **Portfolio**: Display of past work and projects
- **Pricing Calculator**: Interactive tool for estimating project costs
- **About**: Professional background and skills
- **Contact**: Contact form and information
- **Footer**: Site navigation and social links

## 🔧 Tech Stack

- **Framework**: Next.js 15
- **UI**: React 19, TailwindCSS, Radix UI
- **Styling**: TailwindCSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Type Safety**: TypeScript

## 🛠️ Getting Started

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

## 📝 Scripts

- `pnpm dev` - Start development server with TurboPack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix linting issues
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check formatting

## 🎨 Customization

### Styling

The site uses TailwindCSS with a custom theme defined in:
- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - Global styles and custom utilities

### Content

Edit component files in the `components/` directory to modify content:
- `hero.tsx` - Main hero section
- `services.tsx` - Services section
- `portfolio.tsx` - Portfolio projects
- `about.tsx` - About information
- `contact.tsx` - Contact details and form

## 📱 Responsive Design

The site is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktops
- Large screens

## 🔒 License

[MIT License](LICENSE)
