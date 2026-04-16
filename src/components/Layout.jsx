import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/91XXXXXXXXXX?text=Hello%20Dr.%20Khooshboo%2C%20I%20would%20like%20to%20book%20an%20appointment."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        💬
      </a>
    </>
  )
}
