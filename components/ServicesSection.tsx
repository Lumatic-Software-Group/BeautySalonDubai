'use client'

import Image from 'next/image'

interface ServicesSectionProps {
  currentLanguage: string
}

export default function ServicesSection({ currentLanguage }: ServicesSectionProps) {
  const services = [
    {
      icon: '/assets/icons/hair-styling.svg',
      en: {
        title: 'Hair Styling',
        description: 'Professional cuts, colors, and styling for every occasion'
      },
      fa: {
        title: 'آرایش مو',
        description: 'کوتاهی، رنگ‌آمیزی و استایل حرفه‌ای برای هر مناسبتی'
      }
    },
    {
      icon: '/assets/icons/nail-care.svg',
      en: {
        title: 'Nail Care',
        description: 'Manicure, pedicure, and nail art services'
      },
      fa: {
        title: 'مراقبت از ناخن',
        description: 'مانیکور، پدیکور و نیل آرت'
      }
    },
    {
      icon: '/assets/icons/facial-treatment.svg',
      en: {
        title: 'Facial Treatments',
        description: 'Rejuvenating facials and skincare treatments'
      },
      fa: {
        title: 'مراقبت از پوست',
        description: 'فیشال و درمان‌های جوانسازی پوست'
      }
    },
    {
      icon: '/assets/icons/makeup-services.svg',
      en: {
        title: 'Makeup Services',
        description: 'Bridal, party, and everyday makeup'
      },
      fa: {
        title: 'آرایش',
        description: 'آرایش عروس، مهمانی و روزانه'
      }
    }
  ]

  const content = {
    en: {
      title: 'Our Services'
    },
    fa: {
      title: 'خدمات ما'
    }
  }

  const text = content[currentLanguage as keyof typeof content]

  return (
    <section id="services" className="services" aria-labelledby="services-heading">
      <div className="container">
        <h2 id="services-heading" className="section-title">{text.title}</h2>
        <div className="services-grid" role="list">
          {services.map((service, index) => {
            const serviceText = service[currentLanguage as keyof typeof service] as { title: string; description: string }
            return (
              <article key={index} className="service-card card-elevated" role="listitem">
                <div className="service-icon" aria-hidden="true">
                  <Image
                    src={service.icon}
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                  />
                </div>
                <h3>{serviceText.title}</h3>
                <p>{serviceText.description}</p>
              </article>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .services {
          padding: var(--space-3xl) 0;
          background: linear-gradient(180deg, var(--neutral-light) 0%, var(--neutral-warm) 100%);
          position: relative;
        }

        .section-title {
          font-family: var(--font-script-secondary);
          font-size: clamp(2.5rem, 6vw, 4rem);
          text-align: center;
          background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: var(--space-3xl);
          position: relative;
          font-weight: 400;
          letter-spacing: 0.01em;
        }
        
        [dir="rtl"] .section-title {
          font-family: var(--font-persian);
          font-weight: 300;
          -webkit-text-fill-color: var(--primary-gold-solid);
          background: none;
          color: var(--primary-gold-solid);
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: var(--primary-gold);
          border-radius: 2px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--space-xl);
          margin-top: var(--space-3xl);
        }

        .service-card {
          background: var(--glass-white);
          backdrop-filter: blur(var(--blur-medium));
          -webkit-backdrop-filter: blur(var(--blur-medium));
          padding: var(--space-2xl) var(--space-xl);
          border-radius: var(--radius-xl);
          text-align: center;
          transition: all var(--transition-smooth);
          border: 1px solid var(--glass-border);
          box-shadow: 0 8px 32px var(--glass-shadow);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, var(--glass-gold), transparent);
          transition: left 0.5s ease;
        }

        .service-card:hover::before {
          left: 100%;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px var(--glass-shadow-strong);
          border-color: var(--glass-border-gold);
          background: var(--glass-white-medium);
        }

        .service-icon {
          margin-bottom: var(--space-lg);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 120px;
          width: 120px;
          margin: 0 auto var(--space-lg);
          background: linear-gradient(135deg, var(--primary-gold-solid), var(--accent-rose-gold));
          border-radius: 50%;
          position: relative;
          z-index: 2;
        }

        .service-icon::before {
          content: '';
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          background: var(--primary-gold);
          border-radius: 50%;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover .service-icon::before {
          opacity: 1;
        }

        .service-icon :global(img) {
          filter: brightness(0) invert(1);
          transition: all 0.3s ease;
        }

        .service-card:hover .service-icon :global(img) {
          transform: scale(1.1) rotate(5deg);
        }

        .service-card h3 {
          font-family: var(--font-script-tertiary);
          font-size: clamp(1.75rem, 4vw, 2rem);
          color: var(--primary-gold-solid);
          margin-bottom: var(--space-md);
          font-weight: 400;
          letter-spacing: 0.01em;
          position: relative;
          z-index: 2;
        }
        
        [dir="rtl"] .service-card h3 {
          font-family: var(--font-persian);
          font-weight: 300;
        }

        .service-card p {
          color: var(--soft-gray);
          line-height: 1.7;
          font-size: var(--text-base);
          position: relative;
          z-index: 2;
          max-width: 280px;
          margin: 0 auto;
        }

        @media (max-width: 968px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-lg);
          }
        }

        @media (max-width: 640px) {
          .services {
            padding: var(--space-2xl) 0;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
            margin-top: var(--space-2xl);
          }

          .service-card {
            padding: var(--space-xl) var(--space-lg);
          }

          .service-icon {
            width: 100px;
            height: 100px;
            margin: 0 auto var(--space-md);
          }

          .service-icon :global(img) {
            width: 40px !important;
            height: 40px !important;
          }

          .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: var(--space-sm);
          }

          .service-card p {
            font-size: 0.9375rem;
          }
        }
      `}</style>
    </section>
  )
}