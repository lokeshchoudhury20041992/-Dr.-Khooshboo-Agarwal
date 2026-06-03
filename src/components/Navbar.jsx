import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className="navbar-inner">
          <Link to="/" className="logo" onClick={close} aria-label="Dr. Khooshboo Agarwal Home">
            <div className="logo-text">
              <div className="name">Dr. Khooshboo Agarwal</div>
              <div className="designation">Gynecologist and Infertility Specialist</div>
            </div>
          </Link>

          <div className={`nav-links${menuOpen ? ' mobile-open' : ''}`}>
            <NavLink to="/" end onClick={close}>Home</NavLink>
            <NavLink to="/about" onClick={close}>About</NavLink>
            <NavLink to="/clinics" onClick={close}>Clinics</NavLink>
            <NavLink to="/blog" onClick={close}>Blog</NavLink>
            <NavLink to="/pregnancy-care" onClick={close}>Pregnancy</NavLink>
            <NavLink to="/fertility" onClick={close}>Fertility</NavLink>
            <NavLink to="/gynecology" onClick={close}>Gynecology</NavLink>
            <NavLink to="/surgeries" onClick={close}>Surgeries</NavLink>
            <a href="tel:+919477595594" className="nav-phone-cta" onClick={close}>
              📞 +91 94775 95594
            </a>
            <NavLink to="/contact" className="nav-cta" onClick={close}>
              Contact Us
            </NavLink>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
