import { useState, useEffect } from 'react'
import './Navbar.css'
import { LINKS } from '../utils/constants'
import DownloadCVButton from './common/DownloadCVButton/DownloadCVButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="logo-letters">AS</span>
        </a>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {LINKS.map((l) => (
            <li key={l.link}>
              <a
                href={`#${l.link.toLowerCase()}`}
                className={`navbar__link${l.link === 'Home' ? ' navbar__link--active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div>
          <DownloadCVButton />
          <a href="#contact" className="btn-primary navbar__cta">
            Vamos Conversar
          </a>
        </div>

        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
