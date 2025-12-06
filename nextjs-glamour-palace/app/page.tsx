'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import VirtualTourSection from '@/components/VirtualTourSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CareersSection from '@/components/CareersSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import FontLoader from '@/components/FontLoader'

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState('en')

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('salon-language')
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fa')) {
      setCurrentLanguage(savedLanguage)
    } else {
      // Auto-detect language from browser
      const browserLang = navigator.language || (navigator as any).userLanguage
      if (browserLang.includes('fa') || browserLang.includes('persian')) {
        setCurrentLanguage('fa')
      }
    }
  }, [])

  useEffect(() => {
    // Update document direction and language
    document.documentElement.lang = currentLanguage
    document.documentElement.dir = currentLanguage === 'fa' ? 'rtl' : 'ltr'
    
    // Save language preference
    localStorage.setItem('salon-language', currentLanguage)
    
    // Update page title based on language
    const titles = {
      en: 'Glamour Palace - Dubai Beauty Salon',
      fa: 'گلامور پالس - صالون زیبایی دبی'
    }
    document.title = titles[currentLanguage as keyof typeof titles]
    
    // Force Vazir font for all elements
    document.documentElement.style.setProperty('--font-body', "'Vazir', 'Tahoma', 'Arial', sans-serif")
    document.documentElement.style.setProperty('--font-headline', "'Vazir', 'Tahoma', 'Arial', sans-serif")
    
    // Apply Vazir font to body
    document.body.style.fontFamily = "'Vazir', 'Tahoma', 'Arial', sans-serif"
  }, [currentLanguage])

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang)
  }

  return (
    <main className="main-content">
      <FontLoader />
      <Navigation 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <HeroSection currentLanguage={currentLanguage} />
      <ServicesSection currentLanguage={currentLanguage} />
      <VirtualTourSection currentLanguage={currentLanguage} />
      <TestimonialsSection currentLanguage={currentLanguage} />
      <CareersSection currentLanguage={currentLanguage} />
      <ContactSection currentLanguage={currentLanguage} />
      <Footer currentLanguage={currentLanguage} />
      
      <style jsx>{`
        .main-content {
          scroll-behavior: smooth;
        }
        
        /* Smooth scrolling for all sections */
        :global(section) {
          scroll-margin-top: 80px;
        }
        
        /* Enhanced scroll snap for better navigation */
        @media (min-width: 769px) {
          :global(html) {
            scroll-snap-type: y proximity;
          }
          
          :global(section) {
            scroll-snap-align: start;
          }
        }
      `}</style>
    </main>
  )
}