'use client'

interface FooterProps {
  currentLanguage: string
}

export default function Footer({ currentLanguage }: FooterProps) {
  const content = {
    en: {
      tagline: "Dubai's premier beauty destination",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      allRights: "All rights reserved",
      services: "Services",
      gallery: "Gallery",
      careers: "Careers"
    },
    fa: {
      tagline: "مقصد اصلی زیبایی دبی",
      quickLinks: "لینک‌های سریع",
      followUs: "ما را دنبال کنید",
      allRights: "تمامی حقوق محفوظ است",
      services: "خدمات",
      gallery: "گالری",
      careers: "فرصت‌های شغلی"
    }
  }

  const text = content[currentLanguage as keyof typeof content]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>{currentLanguage === 'en' ? 'Glamour Palace' : 'گلامور پالس'}</h4>
            <p>{text.tagline}</p>
          </div>
          <div className="footer-section">
            <h4>{text.quickLinks}</h4>
            <ul>
              <li>
                <button onClick={() => scrollToSection('services')} className="footer-link">
                  {text.services}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="footer-link">
                  {text.gallery}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('careers')} className="footer-link">
                  {text.careers}
                </button>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{text.followUs}</h4>
            <div className="social-links">
              <a href="#" aria-label="Instagram" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Glamour Palace. {text.allRights}</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--deep-charcoal);
          color: var(--white);
          padding: var(--space-3xl) 0 var(--space-lg);
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-2xl);
          margin-bottom: var(--space-xl);
        }

        .footer-section h4 {
          color: var(--primary-gold-solid);
          margin-bottom: var(--space-lg);
          font-family: var(--font-headline);
          font-size: var(--text-lg);
        }

        .footer-section p {
          color: #ccc;
          line-height: 1.6;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section ul li {
          margin-bottom: var(--space-md);
        }

        .footer-link {
          color: #ccc;
          background: none;
          border: none;
          cursor: pointer;
          transition: var(--transition-base);
          font-family: var(--font-body);
          font-size: var(--text-base);
          text-align: left;
          padding: 0;
        }

        .footer-link:hover {
          color: var(--primary-gold-solid);
        }

        .social-links {
          display: flex;
          gap: var(--space-md);
        }

        .social-link {
          display: inline-block;
          transition: var(--transition-base);
          padding: var(--space-sm);
          border-radius: 50%;
          background: rgba(212, 165, 116, 0.1);
          color: var(--primary-gold-solid);
        }

        .social-link:hover {
          transform: scale(1.2);
          background: rgba(212, 165, 116, 0.2);
        }

        .footer-bottom {
          text-align: center;
          padding-top: var(--space-xl);
          border-top: 1px solid #555;
          color: #999;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }

          .footer-link {
            text-align: center;
          }
        }

        [dir="rtl"] .footer-link {
          text-align: right;
        }

        [dir="rtl"] .footer-content {
          direction: rtl;
        }

        @media (max-width: 768px) {
          [dir="rtl"] .footer-link {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}