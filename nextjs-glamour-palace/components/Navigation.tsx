'use client'

import { useState, useEffect } from 'react'

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
      {/* Language Toggle */}
      <div className="language-toggle">
        <button
          onClick={() => onLanguageChange('en')}
          className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
        >
          EN
        </button>
        <button
          onClick={() => onLanguageChange('fa')}
          className={`lang-btn ${currentLanguage === 'fa' ? 'active' : ''}`}
        >
          فا
        </button>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <h2>{currentLanguage === 'en' ? 'Glamour Palace' : 'گلامور پالس'}</h2>
          </div>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="nav-link"
                >
                  {currentLanguage === 'en' ? item.en : item.fa}
                </button>
              </li>
            ))}
          </ul>
          
          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .language-toggle {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: var(--z-tooltip);
          display: flex;
          gap: 5px;
        }

        .lang-btn {
          padding: 8px 12px;
          border: 2px solid var(--primary-gold-solid);
          background: rgba(255, 255, 255, 0.9);
          color: var(--primary-gold-solid);
          cursor: pointer;
          border-radius: 20px;
          transition: var(--transition-base);
          font-weight: 600;
          font-size: var(--text-xs);
        }

        .lang-btn.active,
        .lang-btn:hover {
          background: var(--primary-gold-solid);
          color: white;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: var(--z-overlay);
          padding: 15px 0;
          transition: var(--transition-base);
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: var(--shadow-base);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }

        .logo h2 {
          font-family: var(--font-headline);
          color: var(--primary-gold-solid);
          font-size: 1.8rem;
          font-weight: 700;
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
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 4px;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: var(--deep-charcoal);
          transition: var(--transition-base);
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-menu {
            position: fixed;
            top: 70px;
            right: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-top: var(--space-2xl);
            transition: var(--transition-base);
            gap: var(--space-xl);
            z-index: var(--z-modal);
          }

          .nav-menu.active {
            right: 0;
          }

          .nav-link {
            font-size: var(--text-lg);
            padding: var(--space-md) 0;
            width: 80%;
            text-align: center;
            border-bottom: 1px solid var(--neutral-warm);
          }
        }
      `}</style>
    </>
  )
}