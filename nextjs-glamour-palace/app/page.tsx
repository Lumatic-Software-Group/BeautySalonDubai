'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'

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
  }, [currentLanguage])

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang)
  }

  return (
    <main>
      <Navigation 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <HeroSection currentLanguage={currentLanguage} />
      <ServicesSection currentLanguage={currentLanguage} />
    </main>
  )
}