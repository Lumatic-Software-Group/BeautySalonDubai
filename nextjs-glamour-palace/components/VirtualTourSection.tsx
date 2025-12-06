'use client'

import { useEffect, useRef, useState } from 'react'

interface VirtualTourSectionProps {
  currentLanguage: string
}

export default function VirtualTourSection({ currentLanguage }: VirtualTourSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [currentScene, setCurrentScene] = useState('reception')

  const scenes = {
    reception: {
      en: { name: 'Reception Area', description: 'Welcome to our elegant reception area' },
      fa: { name: 'منطقه پذیرش', description: 'به منطقه پذیرش زیبای ما خوش آمدید' },
      bg: '#f5f1eb'
    },
    styling: {
      en: { name: 'Hair Styling Stations', description: 'Professional styling with modern equipment' },
      fa: { name: 'ایستگاه‌های آرایش مو', description: 'آرایش حرفه‌ای با تجهیزات مدرن' },
      bg: '#f9f7f4'
    },
    spa: {
      en: { name: 'Spa Treatment Room', description: 'Relaxing environment for treatments' },
      fa: { name: 'اتاق درمان اسپا', description: 'محیط آرامش‌بخش برای درمان‌ها' },
      bg: '#e8f5e8'
    },
    nail: {
      en: { name: 'Nail Care Station', description: 'Dedicated area for nail services' },
      fa: { name: 'ایستگاه مراقبت از ناخن', description: 'منطقه اختصاصی برای خدمات ناخن' },
      bg: '#faf0f0'
    }
  }

  const content = {
    en: { title: 'Virtual Salon Tour' },
    fa: { title: 'تور مجازی صالون' }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      drawScene()
    }

    const drawScene = () => {
      const scene = scenes[currentScene as keyof typeof scenes]
      const sceneText = scene[currentLanguage as keyof typeof scene] as { name: string; description: string }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Background
      ctx.fillStyle = scene.bg
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Add gradient overlay
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, 'rgba(212, 175, 55, 0.1)')
      gradient.addColorStop(1, 'rgba(232, 180, 160, 0.1)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Title
      ctx.fillStyle = '#D4AF37'
      ctx.font = currentLanguage === 'fa' ? 
        'bold 42px Vazir, Arial' : 
        'bold 42px "Bodoni Moda", serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
      ctx.shadowBlur = 10
      ctx.fillText(sceneText.name, canvas.width / 2, canvas.height / 2 - 30)
      
      // Description
      ctx.font = currentLanguage === 'fa' ? 
        '20px Vazir, Arial' : 
        '20px Inter, sans-serif'
      ctx.fillStyle = '#666'
      ctx.shadowBlur = 5
      ctx.fillText(sceneText.description, canvas.width / 2, canvas.height / 2 + 30)
      
      ctx.shadowColor = 'transparent'
      ctx.shadowBlur = 0
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [currentScene, currentLanguage])

  const tourButtons = [
    { key: 'reception', en: 'Reception', fa: 'پذیرش' },
    { key: 'styling', en: 'Styling Area', fa: 'منطقه آرایش' },
    { key: 'spa', en: 'Spa Room', fa: 'اتاق اسپا' },
    { key: 'nail', en: 'Nail Station', fa: 'ایستگاه ناخن' }
  ]

  const text = content[currentLanguage as keyof typeof content]

  return (
    <section id="gallery" className="virtual-tour">
      <div className="container">
        <h2 className="section-title">{text.title}</h2>
        <div className="tour-container">
          <canvas ref={canvasRef} className="tour-canvas" />
          <div className="tour-controls">
            {tourButtons.map((button) => (
              <button
                key={button.key}
                className={`tour-btn ${currentScene === button.key ? 'active' : ''}`}
                onClick={() => setCurrentScene(button.key)}
              >
                {currentLanguage === 'en' ? button.en : button.fa}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .virtual-tour {
          padding: var(--space-3xl) 0;
          background: linear-gradient(135deg, var(--neutral-warm) 0%, var(--neutral-light) 100%);
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

        .tour-container {
          position: relative;
          margin-top: var(--space-2xl);
        }

        .tour-canvas {
          width: 100%;
          height: 500px;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          background: var(--white);
          cursor: pointer;
          transition: var(--transition-base);
        }

        .tour-controls {
          display: flex;
          justify-content: center;
          gap: var(--space-md);
          margin-top: var(--space-xl);
          flex-wrap: wrap;
        }

        .tour-btn {
          padding: var(--space-md) var(--space-xl);
          background: var(--white);
          border: 2px solid var(--primary-gold-solid);
          color: var(--primary-gold-solid);
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: var(--transition-bounce);
          font-weight: 600;
          font-family: var(--font-body);
          min-height: 44px;
        }

        .tour-btn:hover,
        .tour-btn.active {
          background: var(--primary-gold-solid);
          color: var(--white);
          transform: translateY(-2px);
          box-shadow: var(--shadow-base);
        }

        @media (max-width: 768px) {
          .tour-canvas {
            height: 300px;
            border-radius: var(--radius-lg);
          }

          .tour-controls {
            gap: var(--space-sm);
            margin-top: var(--space-md);
          }

          .tour-btn {
            padding: var(--space-sm) var(--space-md);
            font-size: var(--text-sm);
            min-width: 120px;
          }
        }
      `}</style>
    </section>
  )
}