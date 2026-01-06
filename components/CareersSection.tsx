'use client'

interface CareersSectionProps {
  currentLanguage: string
}

export default function CareersSection({ currentLanguage }: CareersSectionProps) {
  const positions = [
    {
      en: {
        title: "Senior Hair Stylist",
        requirements: "3+ years of experience required",
        description: "Join our team of expert stylists and create beautiful transformations for our clients."
      },
      fa: {
        title: "آرایشگر ارشد",
        requirements: "حداقل ۳ سال تجربه کاری",
        description: "به تیم متخصصان آرایشگر ما بپیوندید و تحول زیبا را برای مشتریان خلق کنید."
      }
    },
    {
      en: {
        title: "Nail Technician",
        requirements: "Certified with portfolio",
        description: "Create stunning nail art and provide professional nail care services."
      },
      fa: {
        title: "متخصص ناخن",
        requirements: "دارای گواهینامه و نمونه‌کار",
        description: "طراحی ناخن خیره‌کننده ایجاد کنید و خدمات حرفه‌ای مراقبت از ناخن ارائه دهید."
      }
    },
    {
      en: {
        title: "Beauty Consultant",
        requirements: "Customer service focused",
        description: "Help clients choose the perfect beauty treatments and provide expert advice."
      },
      fa: {
        title: "مشاور زیبایی",
        requirements: "متمرکز بر خدمات مشتریان",
        description: "به مشتریان کمک کنید تا بهترین درمان‌های زیبایی را انتخاب کنند و مشاوره تخصصی ارائه دهید."
      }
    }
  ]

  const benefits = [
    {
      en: "Competitive salary and commission",
      fa: "حقوق و کمیسیون رقابتی"
    },
    {
      en: "Professional development opportunities",
      fa: "فرصت‌های توسعه حرفه‌ای"
    },
    {
      en: "Flexible working hours",
      fa: "ساعات کاری انعطاف‌پذیر"
    },
    {
      en: "Staff discounts on services",
      fa: "تخفیف کارکنان بر خدمات"
    }
  ]

  const content = {
    en: {
      title: "Join Our Team",
      subtitle: "Build Your Beauty Career with Us",
      description: "We're always looking for talented individuals passionate about beauty and customer service. Join our team and grow in a supportive, luxury environment.",
      openingsTitle: "Current Openings",
      applyText: "Apply Now"
    },
    fa: {
      title: "به تیم ما بپیوندید",
      subtitle: "حرفه زیبایی خود را با ما بسازید",
      description: "ما همیشه به دنبال افراد مستعد و علاقه‌مند به زیبایی و خدمات به مشتریان هستیم. به تیم ما بپیوندید و در محیطی حمایتگر و لوکس رشد کنید.",
      openingsTitle: "موقعیت‌های شغلی باز",
      applyText: "درخواست همکاری"
    }
  }

  const text = content[currentLanguage as keyof typeof content]

  return (
    <section id="careers" className="careers" aria-labelledby="careers-heading">
      <div className="container">
        <h2 id="careers-heading" className="section-title">{text.title}</h2>
        <div className="careers-content">
          <div className="careers-text">
            <h3>{text.subtitle}</h3>
            <p>{text.description}</p>
            <ul className="careers-benefits" role="list">
              {benefits.map((benefit, index) => (
                <li key={index} role="listitem">{benefit[currentLanguage as keyof typeof benefit]}</li>
              ))}
            </ul>
          </div>
          <div className="careers-positions">
            <h3>{text.openingsTitle}</h3>
            {positions.map((position, index) => {
              const positionText = position[currentLanguage as keyof typeof position]
              return (
                <article key={index} className="position-card">
                  <h4>{positionText.title}</h4>
                  <p className="position-requirements">{positionText.requirements}</p>
                  <p className="position-description">{positionText.description}</p>
                  <button className="btn-base btn-primary apply-btn" aria-label={`Apply for ${positionText.title} position`}>
                    {text.applyText}
                  </button>
                </article>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .careers {
          padding: var(--space-3xl) 0;
          background: var(--neutral-warm);
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

        .careers-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-3xl);
          align-items: start;
        }

        .careers-text h3 {
          font-family: var(--font-headline);
          font-size: var(--text-2xl);
          color: var(--deep-charcoal);
          margin-bottom: var(--space-lg);
        }

        .careers-text p {
          color: var(--soft-gray);
          margin-bottom: var(--space-xl);
          line-height: 1.7;
          font-size: var(--text-base);
        }

        .careers-benefits {
          list-style: none;
          padding: 0;
        }

        .careers-benefits li {
          padding: var(--space-md) 0;
          color: var(--deep-charcoal);
          position: relative;
          padding-left: var(--space-xl);
          font-size: var(--text-base);
        }

        .careers-benefits li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-gold-solid);
          font-weight: bold;
          font-size: var(--text-lg);
        }

        .careers-positions h4 {
          font-family: var(--font-headline);
          font-size: var(--text-xl);
          color: var(--deep-charcoal);
          margin-bottom: var(--space-xl);
        }

        .position-card {
          background: var(--white);
          padding: var(--space-2xl);
          border-radius: var(--radius-lg);
          margin-bottom: var(--space-lg);
          border-left: 4px solid var(--primary-gold-solid);
          transition: var(--transition-bounce);
          box-shadow: var(--shadow-sm);
        }

        .position-card:hover {
          transform: translateX(10px);
          box-shadow: var(--shadow-md);
        }

        .position-card h5 {
          color: var(--primary-gold-solid);
          margin-bottom: var(--space-sm);
          font-size: var(--text-lg);
          font-weight: 600;
          font-family: var(--font-headline);
        }

        .position-requirements {
          color: var(--soft-gray);
          font-size: var(--text-sm);
          margin-bottom: var(--space-md);
          font-weight: 500;
        }

        .position-description {
          color: var(--deep-charcoal);
          line-height: 1.6;
          margin-bottom: var(--space-lg);
        }

        .apply-btn {
          padding: var(--space-sm) var(--space-lg);
          font-size: var(--text-sm);
        }

        @media (max-width: 768px) {
          .careers-content {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
          }

          .careers-text h3 {
            font-size: var(--text-xl);
          }

          .position-card {
            padding: var(--space-xl);
          }

          .careers-benefits li {
            padding-left: var(--space-lg);
          }
        }

        [dir="rtl"] .position-card {
          border-right: 4px solid var(--primary-gold-solid);
          border-left: none;
        }

        [dir="rtl"] .position-card:hover {
          transform: translateX(-10px);
        }

        [dir="rtl"] .careers-benefits li {
          padding-right: var(--space-xl);
          padding-left: 0;
        }

        [dir="rtl"] .careers-benefits li::before {
          right: 0;
          left: auto;
        }
      `}</style>
    </section>
  )
}