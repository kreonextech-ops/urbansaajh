# Urban Saajh — Luxury Interior Design Website

A full multi-page luxury interior design website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Fonts**: Cormorant Garamond, DM Sans, Italiana (Google Fonts)
- **Icons**: Lucide React
- **Animation**: CSS transitions + Intersection Observer

## Design System

**Color Palette**
| Name | Hex |
|------|-----|
| Espresso | `#2C1810` |
| Cream | `#F5EFE6` |
| Taupe | `#B8A99A` |
| Gold | `#C9A96E` |
| Warm White | `#FAF7F4` |

**Typography**
- **Italiana** — Logo, large display headings
- **Cormorant Garamond** — Italic subheadings, quotes, accents
- **DM Sans** — Body text, labels, UI elements

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage (Hero, About, Services, Portfolio, Process, Testimonials) |
| `/about` | Full About page with team and founder sections |
| `/services` | Detailed services with inclusions list |
| `/portfolio` | Filterable masonry project grid |
| `/process` | Step-by-step design process with FAQ |
| `/contact` | Enquiry form with contact details |

## Project Structure

```
urban-saajh/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── loading.tsx         # Loading state
│   ├── not-found.tsx       # 404 page
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── portfolio/
│   │   └── page.tsx
│   ├── process/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ProcessSection.tsx
│   │   └── TestimonialsSection.tsx
│   └── ui/
│       └── shared.tsx      # Reusable: SectionLabel, Reveal, PageHero
├── lib/
│   ├── data.ts             # Shared constants
│   └── utils.ts            # cn() helper
└── public/
    └── robots.txt
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customisation Guide

### Updating Brand Content
- Edit `lib/data.ts` for contact details and brand info
- Update founder details and team in `app/about/page.tsx`
- Update project portfolio in `app/portfolio/page.tsx`

### Replacing Images
All images use Unsplash URLs. Replace with your own by:
1. Adding images to `public/images/`
2. Replacing `https://images.unsplash.com/...` with `/images/your-file.jpg`

### Updating Colors
Edit `tailwind.config.ts` — all brand colors are defined under `theme.extend.colors`.

### Adding New Pages
1. Create a new folder in `app/` (e.g., `app/blog/`)
2. Add a `page.tsx` inside it
3. Add the link to `NAV_LINKS` in `lib/data.ts` and `components/layout/Navbar.tsx`

## Deployment

Deploy easily on **Vercel**:

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.
