'use client'

import { useEffect, useRef, useState } from 'react'

interface HeroSectionProps {
    currentLanguage: string
}

export default function HeroSection({ currentLanguage }: HeroSectionProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [videoError, setVideoError] = useState(false)

    // Use environment variable for video URL
    const VIDEO_MP4 = process.env.NEXT_PUBLIC_HERO_VIDEO_MP4 || '/assets/videos/hero-video.mp4'
    const VIDEO_WEBM = process.env.NEXT_PUBLIC_HERO_VIDEO_WEBM || '/assets/videos/hero-video.webm'

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        video.playbackRate = 0.4

        const handleError = (e: Event) => {
            console.error('Video loading error:', e)
            setVideoError(true)
            const videoContainer = video.parentElement
            const hero = videoContainer?.parentElement
            if (videoContainer && hero) {
                videoContainer.style.display = 'none'
                hero.style.background = 'linear-gradient(135deg, var(--neutral-warm) 0%, var(--neutral-light) 100%)'
            }
        }

        const handleLoadedData = () => {
            console.log('Video loaded successfully')
            video.playbackRate = 0.4
            setVideoError(false)
        }

        const handleEnded = () => {
            video.currentTime = 0
            video.play().catch((err) => {
                console.error('Video play error:', err)
            })
        }

        const handleCanPlayThrough = () => {
            video.playbackRate = 0.4
            video.play().catch((err) => {
                console.error('Video autoplay error:', err)
                // Some browsers block autoplay, this is fine
            })
        }

        video.addEventListener('error', handleError)
        video.addEventListener('loadeddata', handleLoadedData)
        video.addEventListener('ended', handleEnded)
        video.addEventListener('canplaythrough', handleCanPlayThrough)

        // Increased timeout for slower connections
        const timeout = setTimeout(() => {
            if (video.readyState === 0) {
                console.warn('Video failed to load within 5 seconds')
                handleError(new Event('timeout'))
            }
        }, 5000)

        return () => {
            video.removeEventListener('error', handleError)
            video.removeEventListener('loadeddata', handleLoadedData)
            video.removeEventListener('ended', handleEnded)
            video.removeEventListener('canplaythrough', handleCanPlayThrough)
            clearTimeout(timeout)
        }
    }, [])

    const handleBookConsultation = () => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
            setTimeout(() => {
                const firstInput = contactSection.querySelector('input')
                if (firstInput) {
                    firstInput.focus()
                }
            }, 500)
        }
    }

    const handleVirtualTour = () => {
        const virtualTourCanvas = document.getElementById('virtual-tour-canvas')
        if (virtualTourCanvas) {
            virtualTourCanvas.scrollIntoView({ behavior: 'smooth' })
        }
    }

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
                {!videoError && (
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="hero-video"
                        poster="/assets/images/hero-poster.jpg" // Add a poster image as fallback
                    >
                        <source src={VIDEO_MP4} type="video/mp4" />
                        <source src={VIDEO_WEBM} type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                )}
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
                    <button
                        className="btn-base btn-primary btn-ripple"
                        onClick={handleBookConsultation}
                    >
                        {text.btn1}
                    </button>
                    <button
                        className="btn-base btn-secondary btn-ripple"
                        onClick={handleVirtualTour}
                    >
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
                    transition: opacity 0.5s ease-in-out;
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
                    background: var(--glass-white-medium);
                    backdrop-filter: blur(var(--blur-medium));
                    -webkit-backdrop-filter: blur(var(--blur-medium));
                    border: 1px solid var(--glass-border);
                    border-radius: var(--radius-full);
                    padding: var(--space-sm) var(--space-lg);
                    margin-bottom: var(--space-xl);
                    font-size: var(--text-sm);
                    font-weight: 500;
                    letter-spacing: 0.05em;
                    animation: fadeInUp 1s ease 0.3s forwards;
                    opacity: 0;
                    box-shadow: 0 4px 16px var(--glass-shadow);
                }

                .hero-title {
                    font-family: var(--font-script-primary);
                    font-size: clamp(3rem, 10vw, 6rem);
                    font-weight: 400;
                    line-height: 1.2;
                    margin-bottom: var(--space-lg);
                    letter-spacing: 0.02em;
                }

                [dir="rtl"] .hero-title {
                    font-family: var(--font-persian);
                    font-weight: 300;
                    letter-spacing: 0;
                }

                .title-line {
                    display: block;
                    opacity: 0;
                    animation: fadeInUp 1s ease forwards;
                }

                .title-line:first-child {
                    animation-delay: 0.6s;
                    color: var(--white);
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
                }

                .title-line.title-highlight {
                    animation-delay: 0.9s;
                    font-weight: 400;
                    margin-top: 0;
                }

                .gradient-primary {
                    background: var(--primary-gold);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .hero-subtitle {
                    font-size: clamp(1.1rem, 3vw, var(--text-lg));
                    color: rgba(255, 255, 255, 0.95);
                    margin-bottom: var(--space-2xl);
                    opacity: 0;
                    animation: fadeInUp 1s ease 1.2s forwards;
                    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                    font-weight: 400;
                    line-height: 1.6;
                    font-family: var(--font-body);
                }

                .hero-actions {
                    display: flex;
                    gap: var(--space-lg);
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    margin-bottom: var(--space-2xl);
                    opacity: 0;
                    animation: fadeInUp 1s ease 1.5s forwards;
                }

                .hero-actions button {
                    background: var(--glass-gold-medium);
                    backdrop-filter: blur(var(--blur-medium));
                    -webkit-backdrop-filter: blur(var(--blur-medium));
                    border: 1px solid var(--glass-border-gold);
                    color: white;
                    padding: 1rem 2.5rem;
                    font-size: 1.125rem;
                    font-weight: 600;
                    border-radius: var(--radius-lg);
                    cursor: pointer;
                    transition: all var(--transition-smooth);
                    box-shadow: 0 4px 16px rgba(212, 175, 55, 0.3);
                }

                .hero-actions button:hover {
                    background: var(--glass-gold-strong);
                    transform: translateY(-3px);
                    box-shadow: 0 8px 24px rgba(212, 175, 55, 0.4);
                }

                .hero-actions button:active {
                    transform: translateY(-1px);
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

                /* Ripple Effect */
                .btn-ripple {
                    position: relative;
                    overflow: hidden;
                }

                .btn-ripple::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.3);
                    transition: width 0.6s, height 0.6s, top 0.6s, left 0.6s;
                }

                .btn-ripple:active::before {
                    width: 300px;
                    height: 300px;
                    top: calc(50% - 150px);
                    left: calc(50% - 150px);
                }

                @media (max-width: 768px) {
                    .hero-badge {
                        font-size: var(--text-xs);
                        padding: var(--space-xs) var(--space-md);
                        margin-bottom: var(--space-lg);
                    }

                    .hero-actions {
                        flex-direction: column;
                        gap: var(--space-md);
                        margin-bottom: var(--space-xl);
                    }

                    .hero-actions .btn-base {
                        width: 100%;
                        max-width: 280px;
                        padding: var(--space-md) var(--space-lg);
                    }

                    .hero-stats {
                        flex-direction: column;
                        gap: var(--space-lg);
                        text-align: center;
                    }

                    .stat {
                        min-width: auto;
                    }

                    .stat-number {
                        font-size: var(--text-lg);
                    }

                    .stat-label {
                        font-size: var(--text-xs);
                    }

                    .hero-overlay {
                        background: linear-gradient(
                                135deg,
                                rgba(212, 165, 116, 0.9) 0%,
                                rgba(232, 180, 160, 0.7) 50%,
                                rgba(0, 0, 0, 0.5) 100%
                        );
                    }
                }
            `}</style>
        </section>
    )
}