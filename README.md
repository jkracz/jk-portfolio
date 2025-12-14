# Joe Kracz Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS featuring a beautiful UI with animations, dark mode support, and interactive elements.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16, React 19, TypeScript
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Dark Mode**: Full theme support with next-themes
- **Interactive UI**:
  - Custom cursor effects
  - Smooth scroll animations and progress indicator
  - Interactive pricing calculator
  - Contact form with Web3Forms integration
  - Lottie animations
- **Performance Optimized**: Built with Next.js App Router and TurboPack
- **SEO Optimized**: Sitemap generation and metadata configuration
- **Accessibility**: Built with a11y best practices using Radix UI primitives

## 📋 Sections

- **Hero**: Eye-catching introduction with typewriter effect and Lottie animation
- **Services**: Showcase of professional services
- **Portfolio**: Display of past work and projects with modal details
- **Pricing Calculator**: Interactive tool for estimating project costs
- **About**: Professional background and skills
- **Testimonials**: Client testimonials carousel
- **Contact**: Contact form and information
- **Footer**: Site navigation and social links

## 🔧 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Animations**: DotLottie React (Lottie animations)
- **Forms**: Native HTML forms with Web3Forms integration
- **Type Safety**: TypeScript 5
- **Package Manager**: PNPM
- **Analytics**: Vercel Speed Insights, Google Analytics

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
- `pnpm lint:fix` - Fix linting issues automatically
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## 🎨 Customization

### Styling

The site uses Tailwind CSS with a custom theme defined in:
- `tailwind.config.ts` - Theme configuration and custom utilities
- `app/globals.css` - Global styles, CSS variables, and custom utilities

### Content

Edit component files in the `components/` directory to modify content:
- `hero.tsx` - Main hero section with typewriter and animation
- `services.tsx` - Services section
- `portfolio.tsx` - Portfolio projects with modal details
- `pricing-calculator.tsx` - Interactive pricing calculator
- `about.tsx` - About information
- `testimonials.tsx` - Client testimonials
- `contact.tsx` - Contact details and form
- `footer.tsx` - Footer content and links
- `header.tsx` - Navigation header

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_GOOGLE_ID=your-google-analytics-id
NEXT_PUBLIC_WEB3FORMS_KEY=your-web3forms-key
```

## 📱 Responsive Design

The site is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1400px+)

## 📄 License

[MIT License](LICENSE)
