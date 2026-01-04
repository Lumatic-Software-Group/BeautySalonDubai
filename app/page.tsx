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

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set loaded state to prevent FOUC
    setIsLoaded(true)
    
    const savedLanguage = localStorage.getItem('salon-language')
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fa')) {
      setCurrentLanguage(savedLanguage)
    } else {
      const browserLang = navigator.language || (navigator as any).userLanguage
      if (browserLang.includes('fa') || browserLang.includes('persian')) {
        setCurrentLanguage('fa')
      }
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = currentLanguage
    document.documentElement.dir = currentLanguage === 'fa' ? 'rtl' : 'ltr'
    localStorage.setItem('salon-language', currentLanguage)
    
    const titles = {
      en: 'Glamour Palace - Dubai Beauty Salon',
      fa: 'گلامور پالس - صالون زیبایی دبی'
    }
    document.title = titles[currentLanguage as keyof typeof titles]
  }, [currentLanguage])

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang)
  }

  return (
    <main style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.2s ease-in' }}>
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
    </main>
  )
}