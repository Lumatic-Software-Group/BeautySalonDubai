import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://glamourpalace.ae' // Update with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Glamour Palace - Dubai Beauty Salon | سالن زیبایی گلامور پالس',
    template: '%s | Glamour Palace Dubai'
  },
  description: 'Premium beauty salon in Downtown Dubai offering luxury hair styling, nail care, spa treatments, facials, and makeup services. Book your appointment today!',
  keywords: ['beauty salon Dubai', 'hair salon Downtown Dubai', 'nail salon Dubai', 'spa Dubai', 'makeup artist Dubai', 'bridal makeup Dubai', 'luxury salon UAE', 'beauty treatments Dubai', 'سالن زیبایی دبی', 'آرایشگاه زنانه دبی'],
  authors: [{ name: 'Glamour Palace', url: siteUrl }],
  creator: 'Glamour Palace',
  publisher: 'Glamour Palace',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fa_IR', 'ar_AE'],
    url: siteUrl,
    title: 'Glamour Palace - Premium Beauty Salon in Downtown Dubai',
    description: 'Experience luxury beauty services in the heart of Downtown Dubai. Professional hair styling, nail care, spa treatments, and makeup services.',
    siteName: 'Glamour Palace',
    images: [
      {
        url: '/assets/images/reception.jpg',
        width: 1200,
        height: 630,
        alt: 'Glamour Palace Beauty Salon Reception',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glamour Palace - Premium Beauty Salon in Downtown Dubai',
    description: 'Experience luxury beauty services in Downtown Dubai. Hair styling, nail care, spa treatments & makeup.',
    images: ['/assets/images/reception.jpg'],
    creator: '@glamourpalace',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': `${siteUrl}/en`,
      'fa-IR': `${siteUrl}/fa`,
      'ar-AE': `${siteUrl}/ar`,
    },
  },
  category: 'Beauty & Personal Care',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    '@id': `${siteUrl}/#beautysalon`,
    name: 'Glamour Palace',
    alternateName: 'گلامور پالس',
    description: 'Premium beauty salon in Downtown Dubai offering luxury hair styling, nail care, spa treatments, facials, and makeup services.',
    url: siteUrl,
    telephone: '+971-XX-XXX-XXXX', // Update with actual phone
    email: 'info@glamourpalace.ae', // Update with actual email
    priceRange: '$$-$$$',
    image: `${siteUrl}/assets/images/reception.jpg`,
    logo: `${siteUrl}/logo.png`, // Add your logo
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dubai Mall',
      addressLocality: 'Downtown Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.1972,
      longitude: 55.2744,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '21:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/glamourpalace',
      'https://www.instagram.com/glamourpalace',
      'https://wa.me/971XXXXXXXXX',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Beauty Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hair Styling',
            description: 'Professional cuts, colors, and styling',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nail Care',
            description: 'Manicure, pedicure, and nail art services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Facial Treatments',
            description: 'Rejuvenating facials and skincare',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Makeup Services',
            description: 'Bridal, party, and everyday makeup',
          },
        },
      ],
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{__html: `
          /* Prevent FOUC (Flash of Unstyled Content) */
          html {
            visibility: visible;
            opacity: 1;
          }
          body {
            visibility: visible;
            opacity: 1;
          }
        `}} />
        <meta name="theme-color" content="#d4a574" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Optimized font loading with display=swap for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Allura&family=Parisienne&family=Tangerine:wght@400;700&family=Bodoni+Moda:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        
        {/* Persian fonts - Vazir */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css" rel="stylesheet" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}