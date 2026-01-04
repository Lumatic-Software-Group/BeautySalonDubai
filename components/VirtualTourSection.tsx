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
      image: '/assets/images/reception.jpg',
      bg: '#f5f1eb'
    },
    styling: {
      en: { name: 'Hair Styling Stations', description: 'Professional styling with modern equipment' },
      fa: { name: 'ایستگاه‌های آرایش مو', description: 'آرایش حرفه‌ای با تجهیزات مدرن' },
      image: '/assets/images/styling.jpg',
      bg: '#f9f7f4'
    },
    spa: {
      en: { name: 'Spa Treatment Room', description: 'Relaxing environment for treatments' },
      fa: { name: 'اتاق درمان اسپا', description: 'محیط آرامش‌بخش برای درمان‌ها' },
      image: '/assets/images/spa.jpg',
      bg: '#e8f5e8'
    },
    nail: {
      en: { name: 'Nail Care Station', description: 'Dedicated area for nail services' },
      fa: { name: 'ایستگاه مراقبت از ناخن', description: 'منطقه اختصاصی برای خدمات ناخن' },
      image: '/assets/images/nail-station.jpg',
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

    const loadedImages: { [key: string]: HTMLImageElement } = {}

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      drawScene()
    }

    const loadImage = (src: string, key: string) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        loadedImages[key] = img
        if (key === currentScene) {
          drawScene()
        }
      }
      img.onerror = () => {
        console.log(`Failed to load image: ${src}`)
        drawFallbackScene()
      }
      img.src = src
    }

    const drawScene = () => {
      const scene = scenes[currentScene as keyof typeof scenes]
      const sceneText = scene[currentLanguage as keyof typeof scene] as { name: string; description: string }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      
      if (loadedImages[currentScene]) {
        const img = loadedImages[currentScene]
        
        
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height)
        const x = (canvas.width / 2) - (img.width / 2) * scale
        const y = (canvas.height / 2) - (img.height / 2) * scale
        
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale)
        
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      } else {
        
        ctx.fillStyle = scene.bg
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
      
      
      ctx.fillStyle = 'white'
      ctx.font = '300 42px Shabnam, Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.shadowColor = 'rgba(0, 0, 0, 0.8)'
      ctx.shadowBlur = 10
      ctx.shadowOffsetX = 2
      ctx.shadowOffsetY = 2
      ctx.fillText(sceneText.name, canvas.width / 2, canvas.height / 2 - 30)
      
      
      ctx.font = '300 20px Shabnam, Arial'
      ctx.fillStyle = 'rgba(255, 255, 255, 0.95)'
      ctx.shadowBlur = 5
      ctx.fillText(sceneText.description, canvas.width / 2, canvas.height / 2 + 30)
      
      
      ctx.shadowColor = 'transparent'
      ctx.shadowBlur = 0
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
    }

    const drawFallbackScene = () => {
      const scene = scenes[currentScene as keyof typeof scenes]
      const sceneText = scene[currentLanguage as keyof typeof scene] as { name: string; description: string }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      
      ctx.fillStyle = scene.bg
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, 'rgba(212, 175, 55, 0.1)')
      gradient.addColorStop(1, 'rgba(232, 180, 160, 0.1)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      
      ctx.fillStyle = '#D4AF37'
      ctx.font = '300 42px Shabnam, Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
      ctx.shadowBlur = 10
      ctx.fillText(sceneText.name, canvas.width / 2, canvas.height / 2 - 30)
      
      
      ctx.font = '300 20px Shabnam, Arial'
      ctx.fillStyle = '#666'
      ctx.shadowBlur = 5
      ctx.fillText(sceneText.description, canvas.width / 2, canvas.height / 2 + 30)
      
      ctx.shadowColor = 'transparent'
      ctx.shadowBlur = 0
    }

    
    Object.keys(scenes).forEach(key => {
      const scene = scenes[key as keyof typeof scenes]
      if (scene.image) {
        loadImage(scene.image, key)
      }
    })

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
    <section id="gallery" className="virtual-tour" aria-labelledby="tour-heading">
      <div className="container">
        <h2 id="tour-heading" className="section-title">{text.title}</h2>
        <div className="tour-container">
          <div className="tour-image-container" role="img" aria-live="polite" aria-label={`Virtual tour of ${text.title}`}>
            {Object.keys(scenes).map((sceneKey) => {
              const scene = scenes[sceneKey as keyof typeof scenes]
              const sceneText = scene[currentLanguage as keyof typeof scene] as { name: string; description: string }
              return (
                <div 
                  key={sceneKey}
                  className={`tour-scene ${currentScene === sceneKey ? 'active' : ''}`}
                  style={{ backgroundColor: scene.bg }}
                >
                  {scene.image && (
                    <img
                      src={scene.image}
                      alt={`${sceneText.name} - ${sceneText.description}`}
                      className="scene-image"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none'
                      }}
                    />
                  )}
                  <div className="scene-overlay">
                    <h3 className="scene-title">{sceneText.name}</h3>
                    <p className="scene-description">{sceneText.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
          
          <canvas ref={canvasRef} className="tour-canvas-fallback" style={{ display: 'none' }} aria-hidden="true" />
          
          <nav className="tour-controls" aria-label="Virtual tour navigation">
            {tourButtons.map((button) => (
              <button
                key={button.key}
                className={`tour-btn ${currentScene === button.key ? 'active' : ''}`}
                aria-label={`View ${currentLanguage === 'en' ? button.en : button.fa}`}
                aria-pressed={currentScene === button.key}
                onClick={() => setCurrentScene(button.key)}
              >
                {currentLanguage === 'en' ? button.en : button.fa}
              </button>
            ))}
          </nav>
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

        .tour-image-container {
          position: relative;
          width: 100%;
          height: 500px;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .tour-scene {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.5s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tour-scene.active {
          opacity: 1;
        }

        .scene-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
        }

        .scene-overlay {
          position: relative;
          z-index: 2;
          text-align: center;
          background: rgba(0, 0, 0, 0.6);
          padding: var(--space-xl);
          border-radius: var(--radius-lg);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .scene-title {
          color: white;
          font-family: 'Shabnam', 'Shabnam Light', 'Tahoma', 'Arial', sans-serif !important;
          font-size: var(--text-2xl);
          font-weight: 700;
          margin-bottom: var(--space-md);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        }

        .scene-description {
          color: rgba(255, 255, 255, 0.95);
          font-family: 'Shabnam', 'Shabnam Light', 'Tahoma', 'Arial', sans-serif !important;
          font-size: var(--text-base);
          line-height: 1.6;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
        }

        .tour-canvas-fallback {
          width: 100%;
          height: 500px;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          background: var(--white);
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
          .tour-image-container {
            height: 300px;
            border-radius: var(--radius-lg);
          }

          .scene-overlay {
            padding: var(--space-lg);
          }

          .scene-title {
            font-size: var(--text-xl);
          }

          .scene-description {
            font-size: var(--text-sm);
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