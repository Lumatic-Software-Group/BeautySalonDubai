'use client'

import { useEffect } from 'react'

export default function FontLoader() {
  useEffect(() => {
    // Force load Vazir font
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Vazir:wght@100;200;300;400;500;600;700;800;900&display=swap'
    link.rel = 'stylesheet'
    link.type = 'text/css'
    document.head.appendChild(link)

    // Additional Vazir font source
    const link2 = document.createElement('link')
    link2.href = 'https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css'
    link2.rel = 'stylesheet'
    link2.type = 'text/css'
    document.head.appendChild(link2)

    // Apply font immediately to document
    const applyVazirFont = () => {
      document.body.style.fontFamily = "'Vazir', 'Tahoma', 'Arial', sans-serif"
      const allElements = document.querySelectorAll('*')
      allElements.forEach((element: Element) => {
        (element as HTMLElement).style.fontFamily = "'Vazir', 'Tahoma', 'Arial', sans-serif"
      })
    }

    // Apply immediately and after font loads
    applyVazirFont()
    
    // Check if font is loaded and apply again
    if ('fonts' in document) {
      (document as any).fonts.ready.then(() => {
        applyVazirFont()
      })
    }

    // Fallback timeout
    setTimeout(applyVazirFont, 1000)
    setTimeout(applyVazirFont, 3000)

  }, [])

  return null
}