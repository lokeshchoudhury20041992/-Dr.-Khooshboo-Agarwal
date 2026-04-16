import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="disclaimer">
          <p>
            <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Medical Disclaimer:</strong> The information on this website is for educational purposes only and does not constitute medical advice. Always consult Dr. Khooshboo Agarwal or a qualified healthcare professional for personal medical guidance.
          </p>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">👩‍⚕️</div>
              <div className="logo-text">
                <div className="name">Dr. Khooshboo Agarwal</div>
                <div className="designation">Gynecologist &amp; Infertility Specialist</div>
              </div>
            </div>
            <p>
              Compassionate, evidence-based women's healthcare in Kolkata. Serving patients across Salt Lake, Nagerbazar, Dum Dum, New Town, and the wider Kolkata metropolitan area.
            </p>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <nav className="footer-links" aria-label="Services navigation">
              <Link to="/services/high-risk-pregnancy">High-Risk Pregnancy</Link>
              <Link to="/services/painless-delivery">Painless Delivery</Link>
              <Link to="/services/pcos-treatment">PCOS Treatment</Link>
              <Link to="/services/infertility-treatment">Infertility & ART</Link>
              <Link to="/services/preconception-counselling">Preconception</Link>
              <Link to="/services/sexual-health">Sexual Health</Link>
            </nav>
          </div>

          <div className="footer-col">
            <h5>Quick Links</h5>
            <nav className="footer-links" aria-label="Quick links navigation">
              <Link to="/">Home</Link>
              <Link to="/about">About Doctor</Link>
              <Link to="/services">All Services</Link>
              <Link to="/blog">Health Blog</Link>
              <a href="https://maatritvaivffertility.com/appointment" target="_blank" rel="noopener noreferrer">Book Appointment</a>
            </nav>
          </div>

          <div className="footer-col">
            <h5>Associated Hospitals</h5>
            <div className="footer-links">
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.87rem' }}>IRM Kolkata</span>
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.87rem' }}>ILS Saltlake</span>
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.87rem' }}>ILS Nagerbazar</span>
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.87rem' }}>Care Hospital</span>
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.87rem' }}>Spandan Hospital</span>
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.87rem' }}>Suraksha Nagerbazar</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Dr. Khooshboo Agarwal. All rights reserved.</p>
          <p>Gynecologist &amp; Infertility Specialist in Kolkata, West Bengal</p>
        </div>
      </div>
    </footer>
  )
}
