'use client'

import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Products from './components/Products'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Homepage />
      <Products />
      <Contact />
    </main>
  )
}
