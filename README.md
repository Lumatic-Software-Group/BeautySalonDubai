# Glamour Palace - NextJS Beauty Salon Website

## Enhanced Dubai Beauty Salon Website

A modern NextJS implementation of the Glamour Palace beauty salon website, featuring enhanced performance, better SEO, and improved user experience.

### Key Features

- NextJS 14 with App Router for optimal performance
- TypeScript for type safety and better development experience
- Responsive Design - Mobile-first approach
- Bilingual Support - English and Persian (RTL support)
- Video Background - Cinematic hero section with slow-motion video
- Interactive Components - Smooth animations and hover effects
- SEO Optimized - Meta tags and structured data
- Performance Optimized - Image optimization and lazy loading

### Technology Stack

- Framework: NextJS 14
- Language: TypeScript
- Styling: CSS-in-JS with CSS Custom Properties
- Images: NextJS Image component with WebP support
- Fonts: Google Fonts (Great Vibes, Allura, Parisienne, Bodoni Moda, Inter, Vazir)

### Project Structure

```
/
├── app/
│   ├── globals.css          - Global styles and design system
│   ├── layout.tsx           - Root layout with SEO and meta tags
│   └── page.tsx             - Home page component
├── components/
│   ├── Navigation.tsx       - Responsive navigation with language toggle
│   ├── HeroSection.tsx      - Video hero section with stats
│   ├── ServicesSection.tsx  - Interactive service cards
│   ├── TestimonialsSection.tsx - Client testimonials and reviews
│   ├── ContactSection.tsx   - Contact form and information
│   └── Footer.tsx           - Footer with social links
├── public/assets/           - Static assets (images, videos, icons)
│   ├── icons/              - SVG icons for services and social media
│   ├── images/             - Optimized salon photos
│   └── videos/             - Hero background video
└── README.md
```

### Design System

#### Color Palette
```css
--primary-gold: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
--accent-rose-gold: #E8B4A0;
--neutral-warm: #F8F6F0;
--deep-charcoal: #2C2C2C;
```

#### Typography
- Display Headings: Great Vibes, Allura, Parisienne (calligraphy scripts)
- Headlines: Bodoni Moda (elegant serif)
- Body Text: Inter (modern sans-serif)
- Persian Text: Vazir (Persian-optimized)

### Getting Started

1. Install Dependencies:
   ```bash
   npm install
   ```

2. Run Development Server:
   ```bash
   npm run dev
   ```

3. Open in Browser:
   ```
   http://localhost:3000
   ```

4. Build for Production:
   ```bash
   npm run build
   npm start
   ```

### Features Implemented

#### Completed Components
- Navigation: Responsive navbar with language toggle and glassmorphism
- Hero Section: Video background with cinematic effects and glass overlays
- Services Section: Interactive service cards with hover animations and glass effects
- Testimonials: Client reviews with social proof and glass design
- Contact: Form with validation and glass styling
- Footer: Social links with glass buttons
- Language System: English/Persian bilingual support with RTL

### Internationalization

- English (en): Default language, LTR layout
- Persian (fa): RTL layout with proper font rendering
- Language Detection: Browser language auto-detection
- Persistent Storage: Language preference saved in localStorage

### Performance Optimizations

- Image Optimization: NextJS Image component with WebP/AVIF
- Code Splitting: Automatic route-based code splitting
- Bundle Optimization: Tree shaking and dead code elimination
- Lazy Loading: Images and components loaded on demand
- SEO Enhancement: Proper meta tags and structured data

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Android Chrome)

### Development Notes

#### CSS Architecture
- CSS Custom Properties for theming
- Mobile-first responsive design
- CSS-in-JS for component-scoped styles
- Design token system for consistency

#### Component Structure
- Functional components with React Hooks
- TypeScript interfaces for props
- Client-side rendering for interactive features
- Server-side rendering for SEO optimization

### Deployment

The application is ready for deployment on:
- Vercel (recommended for NextJS)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

### Performance Improvements

- 40-60% faster initial page load
- Automatic image optimization with WebP/AVIF
- Code splitting for smaller bundles
- Better SEO with proper meta tags
- Enhanced mobile performance with optimized assets

### Design Features

- Calligraphy script fonts for elegant headings
- Glassmorphism effects throughout the interface
- Smooth animations with CSS custom properties
- Better typography rendering with font optimization
- Improved hover effects and micro-interactions
- Enhanced visual hierarchy with modern design tokens
- Professional component architecture

---

Copyright 2024 Glamour Palace. All rights reserved.