'use client'

import { useState, useEffect } from 'react'

interface TestimonialsSectionProps {
  currentLanguage: string
}

export default function TestimonialsSection({ currentLanguage }: TestimonialsSectionProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      en: {
        text: "Amazing service! The staff is so professional and friendly. I always leave feeling beautiful and confident.",
        author: "Sarah Ahmed",
        role: "Regular Client"
      },
      fa: {
        text: "خدمات فوق‌العاده! کارکنان بسیار حرفه‌ای و دوستانه هستند. همیشه با احساس زیبایی و اعتماد به نفس از آنجا خارج می‌شوم.",
        author: "سارا احمد",
        role: "مشتری دائمی"
      }
    },
    {
      en: {
        text: "The best beauty salon in Dubai! Their attention to detail and luxury atmosphere is unmatched.",
        author: "Fatima Al-Zahra",
        role: "VIP Client"
      },
      fa: {
        text: "بهترین صالون زیبایی در دبی! توجه آنها به جزئیات و فضای لوکس بی‌نظیر است.",
        author: "فاطمه الزهرا",
        role: "مشتری ویژه"
      }
    },
    {
      en: {
        text: "Exceptional quality and luxury experience. The team made me feel like royalty during my wedding preparation.",
        author: "Aisha Al-Mansouri",
        role: "Bride"
      },
      fa: {
        text: "کیفیت استثنایی و تجربه لوکس. تیم باعث شد در طول آماده‌سازی عروسی‌ام احساس شاهزاده بودن کنم.",
        author: "عایشه المنصوری",
        role: "عروس"
      }
    }
  ]

  const reviews = [
    {
      en: {
        text: "Absolutely amazing experience! Best salon in Dubai.",
        author: "Maria S.",
        source: "Google Reviews"
      },
      fa: {
        text: "تجربه‌ای فوق‌العاده! بهترین صالون در دبی.",
        author: "ماریا س.",
        source: "نظرات گوگل"
      }
    },
    {
      en: {
        text: "Perfect service, professional staff, luxury atmosphere!",
        author: "Layla K.",
        source: "Facebook"
      },
      fa: {
        text: "سرویس عالی، کارکنان حرفه‌ای، جو لوکس!",
        author: "لیلا ک.",
        source: "فیس‌بوک"
      }
    }
  ]

  const trustBadges = [
    {
      en: { title: "Award Winner", subtitle: "Best Salon Dubai 2024" },
      fa: { title: "برنده جایزه", subtitle: "بهترین صالون دبی ۲۰۲۴" }
    },
    {
      en: { title: "Certified", subtitle: "Licensed Professionals" },
      fa: { title: "تایید شده", subtitle: "متخصصان مجاز" }
    },
    {
      en: { title: "Premium", subtitle: "Luxury Products Only" },
      fa: { title: "درجه یک", subtitle: "فقط محصولات لوکس" }
    }
  ]

  const content = {
    en: { title: "What Our Clients Say" },
    fa: { title: "نظرات مشتریان ما" }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const text = content[currentLanguage as keyof typeof content]

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">{text.title}</h2>
        
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => {
            const testimonialText = testimonial[currentLanguage as keyof typeof testimonial]
            return (
              <div 
                key={index}
                className={`testimonial ${index === activeTestimonial ? 'active' : ''}`}
              >
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonialText.text}"</p>
                  <div className="testimonial-author">
                    <h4>{testimonialText.author}</h4>
                    <span>{testimonialText.role}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="social-proof-section">
          <div className="reviews-stream">
            {reviews.map((review, index) => {
              const reviewText = review[currentLanguage as keyof typeof review]
              return (
                <div key={index} className="review-card">
                  <div className="review-rating">
                    <div className="stars">
                      <span className="star">★</span>
                      <span className="star">★</span>
                      <span className="star">★</span>
                      <span className="star">★</span>
                      <span className="star">★</span>
                    </div>
                    <span className="rating-score">5.0/5</span>
                  </div>
                  <p>"{reviewText.text}"</p>
                  <div className="review-author">
                    <div className="author-avatar">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="author-name">{reviewText.author}</span>
                      <span className="review-source">{reviewText.source}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="trust-badges">
            {trustBadges.map((badge, index) => {
              const badgeText = badge[currentLanguage as keyof typeof badge]
              return (
                <div key={index} className="trust-badge">
                  <div className="badge-icon">
                    {index === 0 && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    )}
                    {index === 1 && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
                      </svg>
                    )}
                    {index === 2 && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                      </svg>
                    )}
                  </div>
                  <div className="badge-text">
                    <span className="badge-title">{badgeText.title}</span>
                    <span className="badge-subtitle">{badgeText.subtitle}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          padding: var(--space-3xl) 0;
          background: linear-gradient(180deg, var(--neutral-warm) 0%, var(--neutral-light) 100%);
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

        .testimonials-slider {
          max-width: 900px;
          margin: 0 auto var(--space-3xl);
          position: relative;
          min-height: 200px;
        }

        .testimonial {
          display: none;
          text-align: center;
          padding: var(--space-2xl);
          background: var(--glass-white);
          backdrop-filter: blur(var(--blur-medium));
          -webkit-backdrop-filter: blur(var(--blur-medium));
          border-radius: var(--radius-2xl);
          border: 1px solid var(--glass-border);
          box-shadow: 0 8px 32px var(--glass-shadow);
        }

        .testimonial.active {
          display: block;
          animation: fadeInScale 0.8s ease;
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .testimonial-text {
          font-size: var(--text-lg);
          font-style: italic;
          color: var(--deep-charcoal);
          margin-bottom: var(--space-xl);
          line-height: 1.8;
          position: relative;
          padding: 0 var(--space-lg);
          font-weight: 300;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .testimonial-author h4 {
          color: var(--primary-gold-solid);
          margin-bottom: var(--space-xs);
          font-family: var(--font-script-tertiary);
          font-size: clamp(1.5rem, 3vw, 1.75rem);
          font-weight: 400;
          letter-spacing: 0.01em;
        }
        
        [dir="rtl"] .testimonial-author h4 {
          font-family: var(--font-persian);
          font-weight: 300;
        }

        .testimonial-author span {
          color: var(--soft-gray);
          font-size: var(--text-sm);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 500;
        }

        .social-proof-section {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--space-3xl);
          align-items: start;
        }

        .reviews-stream {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .review-card {
          background: var(--glass-white);
          backdrop-filter: blur(var(--blur-medium));
          -webkit-backdrop-filter: blur(var(--blur-medium));
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: var(--space-xl);
          transition: all var(--transition-smooth);
          box-shadow: 0 4px 16px var(--glass-shadow);
          animation: slideInUp 0.6s ease forwards;
          opacity: 0;
        }
        
        .review-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        
        .review-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .review-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 32px var(--glass-shadow-strong);
          background: var(--glass-white-medium);
        }

        .review-rating {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-md);
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .star {
          color: #FFD700;
          font-size: var(--text-lg);
          line-height: 1;
        }

        .rating-score {
          font-family: var(--font-headline);
          font-weight: 600;
          color: var(--primary-gold-solid);
          font-size: var(--text-lg);
        }

        .review-card p {
          font-size: var(--text-base);
          color: var(--deep-charcoal);
          margin-bottom: var(--space-lg);
          line-height: 1.6;
          font-style: italic;
        }

        .review-author {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .author-avatar {
          width: 40px;
          height: 40px;
          background: var(--primary-gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
        }

        .author-name {
          display: block;
          font-weight: 500;
          color: var(--deep-charcoal);
          font-size: var(--text-sm);
        }

        .review-source {
          display: block;
          font-size: var(--text-xs);
          color: var(--soft-gray);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .trust-badges {
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-lg);
          background: var(--glass-gold);
          backdrop-filter: blur(var(--blur-medium));
          -webkit-backdrop-filter: blur(var(--blur-medium));
          border-radius: var(--radius-lg);
          border: 1px solid var(--glass-border-gold);
          box-shadow: 0 4px 16px rgba(212, 175, 55, 0.2);
          transition: all var(--transition-smooth);
          animation: slideInRight 0.6s ease forwards;
          opacity: 0;
        }
        
        .trust-badge:nth-child(1) {
          animation-delay: 0.3s;
        }
        
        .trust-badge:nth-child(2) {
          animation-delay: 0.4s;
        }
        
        .trust-badge:nth-child(3) {
          animation-delay: 0.5s;
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .trust-badge:hover {
          transform: translateX(8px) scale(1.05);
          box-shadow: 0 8px 32px rgba(212, 175, 55, 0.4);
          background: var(--glass-gold-medium);
        }

        .badge-icon {
          width: 60px;
          height: 60px;
          background: var(--primary-gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          flex-shrink: 0;
        }

        .badge-title {
          display: block;
          font-family: var(--font-headline);
          font-weight: 500;
          color: var(--deep-charcoal);
          font-size: var(--text-base);
          margin-bottom: var(--space-xs);
        }

        .badge-subtitle {
          display: block;
          font-size: var(--text-sm);
          color: var(--soft-gray);
          line-height: 1.4;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 768px) {
          .social-proof-section {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }

          .reviews-stream {
            gap: var(--space-md);
          }

          .review-card {
            padding: var(--space-lg);
          }

          .trust-badges {
            flex-direction: column;
            gap: var(--space-md);
          }

          .trust-badge {
            padding: var(--space-md);
          }

          .badge-icon {
            width: 50px;
            height: 50px;
          }

          .testimonial {
            padding: var(--space-lg) var(--space-md);
          }

          .testimonial-text {
            font-size: var(--text-base);
          }
        }
      `}</style>
    </section>
  )
}