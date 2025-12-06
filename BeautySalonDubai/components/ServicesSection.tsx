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
        description: 'کوتاهی، رنگ و استایل حرفه‌ای برای هر مناسبت'
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
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">{text.title}</h2>
        <div className="services-grid">
          {services.map((service, index) => {
            const serviceText = service[currentLanguage as keyof typeof service] as { title: string; description: string }
            return (
              <div key={index} className="service-card card-elevated">
                <div className="service-icon">
                  <Image
                    src={service.icon}
                    alt={serviceText.title}
                    width={48}
                    height={48}
                  />
                </div>
                <h3>{serviceText.title}</h3>
                <p>{serviceText.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .services {
          padding: var(--space-3xl) 0;
          background: var(--neutral-light);
        }

        .section-title {
          font-family: var(--font-headline);
          font-size: clamp(2rem, 5vw, var(--text-3xl));
          text-align: center;
          color: var(--deep-charcoal);
          margin-bottom: var(--space-3xl);
          position: relative;
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
          background: var(--white);
          padding: var(--space-2xl) var(--space-xl);
          border-radius: var(--radius-xl);
          text-align: center;
          transition: var(--transition-bounce);
          border: 1px solid rgba(212, 175, 55, 0.1);
          box-shadow: var(--shadow-sm);
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .service-card:hover::before {
          left: 100%;
        }

        .service-card:hover {
          transform: translateY(-12px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-gold-solid);
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
          font-family: var(--font-headline);
          font-size: var(--text-xl);
          color: var(--deep-charcoal);
          margin-bottom: var(--space-md);
          font-weight: 500;
          letter-spacing: -0.01em;
          position: relative;
          z-index: 2;
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

        @media (max-width: 768px) {
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
            width: 40px;
            height: 40px;
          }

          .service-card h3 {
            font-size: var(--text-lg);
            margin-bottom: var(--space-sm);
          }

          .service-card p {
            font-size: var(--text-sm);
          }
        }
      `}</style>
    </section>
  )
}