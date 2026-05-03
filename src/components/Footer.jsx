import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-text">
              <div className="name">Dr. Khooshboo Agarwal</div>
              <div className="designation">Gynecologist and Infertility Specialist</div>
            </div>
            <p>
              Compassionate, evidence-based women's healthcare in Kolkata.
              Serving patients across Salt Lake, Nagerbazar, Dum Dum, New Town,
              and the wider Kolkata metropolitan area.
            </p>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <nav className="footer-links" aria-label="Services navigation">
              <Link to="/services/high-risk-pregnancy">High-Risk Pregnancy</Link>
              <Link to="/services/painless-delivery">Painless Delivery</Link>
              <Link to="/services/pcos-treatment">PCOS Treatment</Link>
              <Link to="/services/infertility-treatment">Infertility and ART</Link>
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
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer-col">
            <h5>Associated Hospitals</h5>
            <div className="footer-links">
              <span>IRM Kolkata</span>
              <span>ILS Saltlake</span>
              <span>ILS Nagerbazar</span>
              <span>Care Hospital</span>
              <span>Spandan Hospital</span>
              <span>Suraksha Nagerbazar</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Dr. Khooshboo Agarwal. All rights reserved.</p>
          <p>Gynecologist and Infertility Specialist in Kolkata, West Bengal</p>
        </div>
      </div>
    </footer>
  )
}
