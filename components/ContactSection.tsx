'use client'

import { useState } from 'react'

interface ContactSectionProps {
  currentLanguage: string
}

export default function ContactSection({ currentLanguage }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    { en: "Hair Styling", fa: "آرایش مو" },
    { en: "Nail Care", fa: "مراقبت از ناخن" },
    { en: "Facial Treatment", fa: "مراقبت از پوست" },
    { en: "Makeup", fa: "آرایش" }
  ]

  const content = {
    en: {
      title: "Get In Touch",
      location: "Location",
      locationText: "Dubai Mall, Downtown Dubai, UAE",
      phone: "Phone",
      email: "Email",
      hours: "Hours",
      hoursText: "Mon-Sun: 9AM - 9PM",
      selectService: "Select Service",
      sendMessage: "Send Message",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      phonePlaceholder: "Phone",
      messagePlaceholder: "Message"
    },
    fa: {
      title: "ارتباط با ما",
      location: "موقعیت",
      locationText: "دبی مال، مرکز شهر دبی، امارات متحده عربی",
      phone: "تلفن",
      email: "ایمیل",
      hours: "ساعات کار",
      hoursText: "دوشنبه تا یکشنبه: 9 صبح - 9 شب",
      selectService: "انتخاب خدمات",
      sendMessage: "ارسال پیام",
      namePlaceholder: "نام",
      emailPlaceholder: "ایمیل",
      phonePlaceholder: "تلفن",
      messagePlaceholder: "پیام"
    }
  }

  const text = content[currentLanguage as keyof typeof content]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      alert(currentLanguage === 'en' ? 'Thank you! Your message has been sent.' : 'متشکرم! پیام شما ارسال شد.')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{text.title}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h4>{text.location}</h4>
              <p>{text.locationText}</p>
            </div>
            <div className="contact-item">
              <h4>{text.phone}</h4>
              <p>+971 4 123 4567</p>
            </div>
            <div className="contact-item">
              <h4>{text.email}</h4>
              <p>info@glamourpalace.ae</p>
            </div>
            <div className="contact-item">
              <h4>{text.hours}</h4>
              <p>{text.hoursText}</p>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={text.namePlaceholder}
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={text.emailPlaceholder}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder={text.phonePlaceholder}
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
            >
              <option value="">{text.selectService}</option>
              {services.map((service, index) => (
                <option key={index} value={service.en}>
                  {service[currentLanguage as keyof typeof service]}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder={text.messagePlaceholder}
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
            />
            <button 
              type="submit" 
              className="btn-base btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 
                (currentLanguage === 'en' ? 'Sending...' : 'در حال ارسال...') : 
                text.sendMessage
              }
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact {
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

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-3xl);
        }

        .contact-item {
          margin-bottom: var(--space-xl);
          padding: var(--space-lg);
          background: var(--glass-white);
          backdrop-filter: blur(var(--blur-medium));
          -webkit-backdrop-filter: blur(var(--blur-medium));
          border-radius: var(--radius-lg);
          border: 1px solid var(--glass-border);
          box-shadow: 0 4px 16px var(--glass-shadow);
          transition: all var(--transition-smooth);
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }
        
        .contact-item:nth-child(1) {
          animation-delay: 0.1s;
        }
        
        .contact-item:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .contact-item:nth-child(3) {
          animation-delay: 0.3s;
        }
        
        .contact-item:nth-child(4) {
          animation-delay: 0.4s;
        }
        
        .contact-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px var(--glass-shadow-strong);
          background: var(--glass-white-medium);
        }

        .contact-item h4 {
          color: var(--primary-gold-solid);
          font-family: var(--font-script-tertiary);
          margin-bottom: var(--space-md);
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          font-weight: 400;
          letter-spacing: 0.01em;
        }
        
        [dir="rtl"] .contact-item h4 {
          font-family: var(--font-persian);
          font-weight: 300;
        }

        .contact-item p {
          color: var(--deep-charcoal);
          line-height: 1.6;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
          padding: var(--space-2xl);
          background: var(--glass-card-strong);
          backdrop-filter: blur(var(--blur-strong));
          -webkit-backdrop-filter: blur(var(--blur-strong));
          border-radius: var(--radius-xl);
          border: 1px solid var(--glass-border);
          box-shadow: 0 8px 32px var(--glass-shadow);
          animation: fadeInUp 0.6s ease 0.2s forwards;
          opacity: 0;
        }

        .contact-form input,
        .contact-form select,
        .contact-form textarea {
          padding: var(--space-md);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-base);
          font-family: var(--font-body);
          transition: all var(--transition-smooth);
          font-size: var(--text-base);
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .contact-form input:focus,
        .contact-form select:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: var(--primary-gold-solid);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
          background: rgba(255, 255, 255, 0.7);
          transform: translateY(-2px);
        }

        .contact-form button {
          padding: var(--space-md) var(--space-xl);
          border-radius: var(--radius-lg);
          font-weight: 600;
          transition: all var(--transition-smooth);
          background: var(--glass-gold-medium);
          backdrop-filter: blur(var(--blur-medium));
          -webkit-backdrop-filter: blur(var(--blur-medium));
          border: 1px solid var(--glass-border-gold);
          color: white;
          font-size: var(--text-lg);
          box-shadow: 0 4px 16px rgba(212, 175, 55, 0.3);
          cursor: pointer;
        }

        .contact-form button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .contact-form button:hover:not(:disabled) {
          transform: translateY(-3px);
          background: var(--glass-gold-strong);
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.4);
        }
        
        .contact-form button:active:not(:disabled) {
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
          }

          .contact-form input,
          .contact-form select,
          .contact-form textarea {
            padding: var(--space-sm);
          }
        }

        [dir="rtl"] .contact-form input,
        [dir="rtl"] .contact-form select,
        [dir="rtl"] .contact-form textarea {
          text-align: right;
          direction: rtl;
        }
      `}</style>
    </section>
  )
}