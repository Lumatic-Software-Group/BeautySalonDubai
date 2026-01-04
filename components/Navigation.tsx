'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface NavigationProps {
  currentLanguage: string
  onLanguageChange: (lang: string) => void
}

export default function Navigation({ currentLanguage, onLanguageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { en: 'Home', fa: 'خانه', href: '#home' },
    { en: 'Services', fa: 'خدمات', href: '#services' },
    { en: 'Gallery', fa: 'گالری', href: '#gallery' },
    { en: 'Testimonials', fa: 'نظرات', href: '#testimonials' },
    { en: 'Careers', fa: 'فرصت‌های شغلی', href: '#careers' },
    { en: 'Contact', fa: 'تماس', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <div className="language-toggle" role="group" aria-label="Language selection">
        <button
          onClick={() => onLanguageChange('en')}
          className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
          aria-label="Switch to English"
          aria-pressed={currentLanguage === 'en'}
        >
          EN
        </button>
        <button
          onClick={() => onLanguageChange('fa')}
          className={`lang-btn ${currentLanguage === 'fa' ? 'active' : ''}`}
          aria-label="Switch to Persian"
          aria-pressed={currentLanguage === 'fa'}
        >
          فا
        </button>
      </div>

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav-container">
          <div className="logo">
            <h1>{currentLanguage === 'en' ? 'Glamour Palace' : 'گلامور پالس'}</h1>
          </div>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} role="menubar">
            {navItems.map((item, index) => (
              <li key={index} role="none">
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="nav-link"
                  role="menuitem"
                  aria-label={`Navigate to ${currentLanguage === 'en' ? item.en : item.fa} section`}
                >
                  {currentLanguage === 'en' ? item.en : item.fa}
                </button>
              </li>
            ))}
          </ul>
          
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <style jsx>{`
        .language-toggle {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1100;
          display: flex;
          gap: 5px;
        }

        .lang-btn {
          padding: 8px 16px;
          border: 1px solid var(--glass-border-gold);
          background: var(--glass-white-medium);
          backdrop-filter: blur(var(--blur-medium));
          -webkit-backdrop-filter: blur(var(--blur-medium));
          color: var(--primary-gold-solid);
          cursor: pointer;
          border-radius: 20px;
          transition: var(--transition-smooth);
          font-weight: 600;
          font-size: var(--text-xs);
        }

        .lang-btn.active {
          background: var(--glass-gold-strong);
          color: white;
          border-color: var(--primary-gold-solid);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
        }
        
        .lang-btn:hover {
          background: var(--glass-gold-medium);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(var(--blur-strong)) saturate(180%);
          -webkit-backdrop-filter: blur(var(--blur-strong)) saturate(180%);
          border-bottom: 1px solid var(--glass-border);
          z-index: 1000;
          padding: 15px 0;
          transition: var(--transition-smooth);
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 4px 20px var(--glass-shadow);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }

        .logo h1 {
          font-family: var(--font-script-primary);
          background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 400;
          margin: 0;
          letter-spacing: 0.02em;
        }

        [dir="rtl"] .logo h1 {
          font-family: var(--font-persian);
          font-weight: 300;
          -webkit-text-fill-color: var(--primary-gold-solid);
          background: none;
          color: var(--primary-gold-solid);
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 30px;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--deep-charcoal);
          font-weight: 500;
          transition: var(--transition-base);
          position: relative;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: var(--text-base);
        }

        .nav-link:hover {
          color: var(--primary-gold-solid);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-gold-solid);
          transition: var(--transition-base);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .hamburger {
          display: none !important;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: var(--deep-charcoal);
          transition: var(--transition-base);
        }

        @media (max-width: 768px) {
          .language-toggle {
            top: 15px;
            left: 15px;
            right: auto;
            gap: 3px;
          }

          [dir="rtl"] .language-toggle {
            left: auto;
            right: 15px;
          }

          .lang-btn {
            padding: 6px 12px;
            font-size: 0.75rem;
          }

          .hamburger {
            display: none !important;
          }

          .nav-menu {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: var(--space-sm);
            padding: 0;
            margin: 0;
            position: static;
            width: auto;
            height: auto;
            background: none;
            backdrop-filter: none;
          }

          .nav-menu li {
            flex: 0 0 auto;
          }

          .nav-link {
            font-size: 0.875rem;
            padding: 0.5rem 0.75rem;
            white-space: nowrap;
          }

          .nav-link:hover::after {
            width: 100%;
            left: 0;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 10px 0;
          }

          .nav-container {
            padding: 0 15px;
          }

          .logo h1 {
            font-size: 1.5rem;
          }

          .language-toggle {
            top: 12px;
            left: 12px;
          }

          [dir="rtl"] .language-toggle {
            left: auto;
            right: 12px;
          }

          .lang-btn {
            padding: 5px 10px;
            font-size: 0.7rem;
          }

          .nav-container {
            flex-direction: column;
            gap: 0.5rem;
          }

          .logo {
            order: 1;
          }

          .nav-menu {
            order: 2;
            gap: 0.375rem;
          }

          .nav-link {
            font-size: 0.75rem;
            padding: 0.375rem 0.5rem;
          }
        }
      `}</style>
    </>
  )
}