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

    // Simulate form submission
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
          background: var(--white);
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

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-3xl);
        }

        .contact-item {
          margin-bottom: var(--space-xl);
        }

        .contact-item h4 {
          color: var(--primary-gold-solid);
          font-family: var(--font-headline);
          margin-bottom: var(--space-md);
          font-size: var(--text-lg);
        }

        .contact-item p {
          color: var(--soft-gray);
          line-height: 1.6;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .contact-form input,
        .contact-form select,
        .contact-form textarea {
          padding: var(--space-md);
          border: 2px solid #f0ede7;
          border-radius: var(--radius-base);
          font-family: var(--font-body);
          transition: var(--transition-base);
          font-size: var(--text-base);
        }

        .contact-form input:focus,
        .contact-form select:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: var(--primary-gold-solid);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
        }

        .contact-form button {
          padding: var(--space-md);
          border-radius: var(--radius-base);
          font-weight: 600;
          transition: var(--transition-bounce);
        }

        .contact-form button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .contact-form button:hover:not(:disabled) {
          transform: translateY(-2px);
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