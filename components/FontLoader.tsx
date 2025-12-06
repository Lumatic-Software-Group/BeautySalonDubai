'use client'

import { useEffect } from 'react'

export default function FontLoader() {
  useEffect(() => {
    
    const link = document.createElement('link')
    link.href = 'https://cdn.jsdelivr.net/gh/rastikerdar/shabnam-font@v5.0.1/dist/font-face.css'
    link.rel = 'stylesheet'
    link.type = 'text/css'
    document.head.appendChild(link)

    
    const link2 = document.createElement('link')
    link2.href = 'https://cdn.jsdelivr.net/gh/rastikerdar/shabnam-font@v5.0.1/dist/Shabnam-Light-FD.woff2'
    link2.rel = 'stylesheet'
    link2.type = 'text/css'
    document.head.appendChild(link2)

    
    const applyShabnamFont = () => {
      document.body.style.fontFamily = "'Shabnam', 'Shabnam Light', 'Tahoma', 'Arial', sans-serif"
      const allElements = document.querySelectorAll('*')
      allElements.forEach((element: Element) => {
        (element as HTMLElement).style.fontFamily = "'Shabnam', 'Shabnam Light', 'Tahoma', 'Arial', sans-serif"
      })
    }

    
    applyShabnamFont()
    
    
    if ('fonts' in document) {
      (document as any).fonts.ready.then(() => {
        applyShabnamFont()
      })
    }

    
    setTimeout(applyShabnamFont, 1000)
    setTimeout(applyShabnamFont, 3000)

  }, [])

  return null
}