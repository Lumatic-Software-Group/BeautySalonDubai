'use client'

import { useEffect, useRef } from 'react'

interface HeroSectionProps {
  currentLanguage: string
}

export default function HeroSection({ currentLanguage }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.playbackRate = 0.4

      const handleError = () => {
        const videoContainer = video.parentElement
        const hero = videoContainer?.parentElement
        if (videoContainer && hero) {
          videoContainer.style.display = 'none'
          hero.style.background = 'linear-gradient(135deg, var(--neutral-warm) 0%, var(--neutral-light) 100%)'
        }
      }

      const handleLoadedData = () => {
        video.playbackRate = 0.4
      }

      const handleEnded = () => {
        video.currentTime = 0
        video.play().catch(() => {})
      }

      const handleCanPlayThrough = () => {
        video.playbackRate = 0.4
        video.play().catch(() => {})
      }

      video.addEventListener('error', handleError)
      video.addEventListener('loadeddata', handleLoadedData)
      video.addEventListener('ended', handleEnded)
      video.addEventListener('canplaythrough', handleCanPlayThrough)

      const timeout = setTimeout(() => {
        if (video.readyState === 0) {
          handleError()
        }
      }, 3000)

      return () => {
        video.removeEventListener('error', handleError)
        video.removeEventListener('loadeddata', handleLoadedData)
        video.removeEventListener('ended', handleEnded)
        video.removeEventListener('canplaythrough', handleCanPlayThrough)
        clearTimeout(timeout)
      }
    }
  }, [])

  const content = {
    en: {
      badge: "Dubai's Premier Beauty Destination",
      title1: "Discover Your",
      title2: "Inner Beauty",
      subtitle: "Experience luxury beauty services in the heart of Downtown Dubai",
      btn1: "Book Consultation",
      btn2: "Virtual Tour",
      stat1: "Happy Clients",
      stat2: "Google Rating",
      stat3: "Years Experience"
    },
    fa: {
      badge: "مقصد اصلی زیبایی دبی",
      title1: "زیبایی درونی",
      title2: "خود را کشف کنید",
      subtitle: "تجربه خدمات زیبایی لوکس در قلب مرکز شهر دبی",
      btn1: "رزرو مشاوره",
      btn2: "تور مجازی",
      stat1: "مشتری راضی",
      stat2: "امتیاز گوگل",
      stat3: "سال تجربه"
    }
  }

  const text = content[currentLanguage as keyof typeof content]

  return (
    <section id="home" className="hero">
      <div className="hero-video-container">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-video"
        >
          <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge animate-fade-in-up">
          <span>{text.badge}</span>
        </div>
        
        <h1 className="hero-title">
          <span className="title-line">{text.title1}</span>
          <span className="title-line title-highlight gradient-primary">{text.title2}</span>
        </h1>
        
        <p className="hero-subtitle">{text.subtitle}</p>
        
        <div className="hero-actions">
          <button className="btn-base btn-primary">
            {text.btn1}
          </button>
          <button className="btn-base btn-secondary">
            {text.btn2}
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">2000+</span>
            <span className="stat-label">{text.stat1}</span>
          </div>
          <div className="stat">
            <span className="stat-number">5★</span>
            <span className="stat-label">{text.stat2}</span>
          </div>
          <div className="stat">
            <span className="stat-number">8+</span>
            <span className="stat-label">{text.stat3}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          min-height: 600px;
        }

        .hero-video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          filter: brightness(0.9) contrast(1.1);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg, 
            rgba(212, 165, 116, 0.8) 0%,
            rgba(232, 180, 160, 0.6) 50%,
            rgba(0, 0, 0, 0.4) 100%
          );
          z-index: 2;
        }

        .hero-content {
          text-align: center;
          z-index: 3;
          position: relative;
          padding: 0 var(--space-lg);
          color: var(--white);
          max-width: 800px;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-full);
          padding: var(--space-sm) var(--space-lg);
          margin-bottom: var(--space-xl);
          font-size: var(--text-sm);
          font-weight: 500;
          letter-spacing: 0.05em;
          animation: fadeInUp 1s ease 0.3s forwards;
          opacity: 0;
        }

        .hero-title {
          font-family: var(--font-headline);
          font-size: clamp(2.5rem, 8vw, var(--text-4xl));
          font-weight: 600;
          line-height: 1.1;
          margin-bottom: var(--space-lg);
          letter-spacing: -0.02em;
        }

        .title-line {
          display: block;
          opacity: 0;
          animation: fadeInUp 1s ease forwards;
        }

        .title-line:first-child {
          animation-delay: 0.6s;
          color: var(--white);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .title-line.title-highlight {
          animation-delay: 0.9s;
          font-weight: 700;
          margin-top: -0.2em;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 3vw, var(--text-lg));
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: var(--space-2xl);
          opacity: 0;
          animation: fadeInUp 1s ease 1.2s forwards;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
          font-weight: 400;
          line-height: 1.5;
        }

        .hero-actions {
          display: flex;
          gap: var(--space-lg);
          justify-content: center;
          align-items: center;
          margin-bottom: var(--space-2xl);
          opacity: 0;
          animation: fadeInUp 1s ease 1.5s forwards;
        }

        .hero-stats {
          display: flex;
          gap: var(--space-2xl);
          justify-content: center;
          align-items: center;
          opacity: 0;
          animation: fadeInUp 1s ease 1.8s forwards;
        }

        .stat {
          text-align: center;
          position: relative;
        }

        .stat-number {
          display: block;
          font-family: var(--font-headline);
          font-size: var(--text-xl);
          font-weight: 700;
          color: var(--white);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          margin-bottom: var(--space-xs);
        }

        .stat-label {
          display: block;
          font-size: var(--text-sm);
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 2px;
          background: var(--primary-gold);
          border-radius: 1px;
        }

        @media (max-width: 768px) {
          .hero-actions {
            flex-direction: column;
            gap: var(--space-md);
          }

          .hero-actions .btn-base {
            width: 100%;
            max-width: 280px;
          }

          .hero-stats {
            flex-direction: column;
            gap: var(--space-lg);
          }
        }
      `}</style>
    </section>
  )
}