# secondbrain

> Your AI-powered companion for mastering any skill

A modern SaaS landing page built with Next.js 15, TypeScript, and Tailwind CSS. Features a beautiful UI, form validation, and comprehensive developer tooling.

## ✨ Features

- 🎨 **Modern UI Components** - Built with Radix UI and Tailwind CSS
- 📱 **Fully Responsive** - Mobile-first design with dark mode support
- 🔥 **Type-Safe** - Full TypeScript coverage with Zod validation
- ⚡ **Fast** - Next.js 15 with Turbopack for blazing fast development
- 🎯 **SEO Optimized** - Metadata, sitemap, and OpenGraph tags
- 📊 **Analytics Ready** - Scaffolding for Vercel Analytics, Google Analytics, etc.
- ♿ **Accessible** - ARIA attributes and keyboard navigation
- 🎭 **Animated** - Smooth animations with Framer Motion and custom CSS

## 🚀 Tech Stack

### Core

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Build Tool**: [Turbopack](https://turbo.build/pack)

### UI & Components

- **UI Primitives**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Class Management**: [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- **Variants**: [class-variance-authority](https://cva.style/)

### Forms & Validation

- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Form Integration**: [@hookform/resolvers](https://github.com/react-hook-form/resolvers)

### Data Fetching

- **HTTP Client**: [Axios](https://axios-http.com/)
- **State Management**: [TanStack Query](https://tanstack.com/query)

### Developer Tools

- **Linting**: [ESLint](https://eslint.org/) with Next.js config
- **Formatting**: [Prettier](https://prettier.io/) with Tailwind plugin
- **Sitemap**: [next-sitemap](https://github.com/iamvishnusankar/next-sitemap)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd second-brain
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp .env.example .env.local
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript compiler check

## 📁 Project Structure

```
second-brain/
├── app/                      # Next.js App Router
│   ├── (landing)/           # Landing page route group
│   │   ├── layout.tsx       # Landing-specific layout
│   │   └── page.tsx         # Landing page
│   ├── api/                 # API routes
│   │   └── waitlist/        # Waitlist endpoint
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── spinner.tsx
│   │   ├── form.tsx
│   │   ├── textarea.tsx
│   │   ├── container.tsx
│   │   └── section.tsx
│   ├── landing/             # Landing page components
│   │   ├── hero.tsx
│   │   └── waitlist-form.tsx
│   └── shared/              # Shared components
│       └── analytics.tsx
├── lib/                     # Utility functions
│   ├── utils.ts             # Common utilities (cn, formatDate, etc.)
│   ├── constants.ts         # App constants
│   └── api-client.ts        # Axios instance
├── hooks/                   # Custom React hooks
│   ├── use-local-storage.ts
│   ├── use-media-query.ts
│   ├── use-scroll-position.ts
│   └── use-mounted.ts
├── types/                   # TypeScript type definitions
│   └── index.ts
├── styles/                  # Additional styles
├── public/                  # Static assets
│   └── images/
├── .env.local              # Environment variables (not in git)
├── .env.example            # Environment variables template
├── tailwind.config.ts      # Tailwind configuration
├── next-sitemap.config.js  # Sitemap configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Key Components

### UI Components

All UI components are fully typed, accessible, and support dark mode:

- **Button** - 5 variants (default, outline, ghost, destructive, link) × 4 sizes
- **Input** - Error states, accessibility, forwarded refs
- **Card** - Composable card with header, content, footer
- **Badge** - 6 variants for labels and tags
- **Spinner** - Loading states with 3 sizes
- **Form** - React Hook Form integration components
- **Textarea** - Auto-resize and character count
- **Container** - Max-width container with responsive padding
- **Section** - Reusable section wrapper with background variants

### Custom Hooks

- `useLocalStorage<T>` - Type-safe localStorage with SSR safety
- `useMediaQuery` - Responsive breakpoint detection
- `useIsMobile/Tablet/Desktop` - Convenience breakpoint hooks
- `useScrollPosition` - Scroll position and direction tracking
- `useMounted` - SSR hydration safety

### Utilities

- `cn()` - Merge Tailwind classes intelligently
- `formatDate()` - i18n-ready date formatting
- `generateId()` - Unique ID generation
- `sleep()` - Promise-based delay
- `truncate()` - Text truncation with ellipsis

## 🌐 Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_ENABLE_WAITLIST=true
```

## 🎯 SEO & Analytics

### Metadata

- Comprehensive OpenGraph tags for social sharing
- Twitter Card support
- Structured data ready
- Dynamic title templates

### Sitemap

Automatic sitemap generation on build:

- Located at `/sitemap.xml`
- robots.txt at `/robots.txt`
- Custom priorities per route

### Analytics

Scaffolding ready for:

- Vercel Analytics
- Google Analytics
- PostHog
- Plausible

See `components/shared/analytics.tsx` for implementation.

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

```bash
npm run build
npm run start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with modern tools and libraries from the amazing open-source community.

---

Made with ❤️ by the secondbrain team
