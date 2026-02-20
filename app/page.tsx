'use client'

import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Products from './components/Products'
import Contact from './components/Contact'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const homepage = document.getElementById("homepage");
    if (!homepage)
      return;
    const colors = ['#c9922a', '#c4541a', '#4a7830', '#8b5e0a', '#e8a020']
    for (let i = 0; i < 18; i++) {
      const speck = document.createElement('div')
      speck.className = 'speck'
      const size = Math.random() * 8 + 3
      speck.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}vw;
        bottom: 0;
        animation-duration: ${Math.random() * 8 + 6}s;
        animation-delay: ${Math.random() * 8}s;
      `
      homepage.appendChild(speck)
    }
  }, [])

  return (
    <main>
      <Navbar />
      <Homepage />
      <Products />
      <Contact />
    </main>
  )
}
