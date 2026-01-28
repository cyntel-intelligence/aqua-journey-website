# Aqua Journey Swim School Website

A modern, professional website for Aqua Journey Swim School built with Next.js and Tailwind CSS.

## Features

- Clean, professional design
- Mobile-responsive layout
- Fast loading with static generation
- SEO optimized
- Easy to customize

## Pages

- **Home** - Hero section, features, program overview, testimonial preview
- **About** - Company story, mission, values
- **Classes** - Detailed program information for all age groups
- **Contact** - Contact form and business information
- **FAQ** - Frequently asked questions
- **Testimonials** - Parent reviews and statistics

## Quick Start

### Preview Locally

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### Build for Production

```bash
npm run build
```

## Deployment

See [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) for step-by-step instructions to deploy your site to Vercel (free).

## Customization

### Colors

Edit `src/app/globals.css` to change brand colors:

```css
:root {
  --primary: #03a9f4;      /* Main blue */
  --secondary: #f79007;    /* Orange accent */
}
```

### Content

- Home: `src/app/page.tsx`
- About: `src/app/about/page.tsx`
- Classes: `src/app/classes/page.tsx`
- Contact: `src/app/contact/page.tsx`
- FAQ: `src/app/faq/page.tsx`
- Testimonials: `src/app/testimonials/page.tsx`

### Navigation & Footer

- Header: `src/components/Header.tsx`
- Footer: `src/components/Footer.tsx`

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vercel](https://vercel.com/) - Hosting (recommended)
