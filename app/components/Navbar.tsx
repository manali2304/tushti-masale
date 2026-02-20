'use client'

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">- Tushti Masale -</div>
      <div className="navbar-links">
        <button onClick={() => scrollTo('masalas')}>Our Masalas</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
      </div>
    </nav>
  )
}