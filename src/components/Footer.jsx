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
            <div className="footer-socials">
              <a href="https://www.instagram.com/gupshupwithyourgynaec/" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.linkedin.com/in/dr-khooshboo-agarwal-754a603b9/" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://x.com/Letstalkpink" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.reddit.com/user/gupshupwithyourgynae/" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="Reddit">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-1.25 1.25c-.05 0-.097-.008-.146-.017-.552.483-1.294.783-2.12.825l.443-2.072 1.545.328a.747.747 0 0 1-.035.228c0 .414.336.75.75.75.414 0 .75-.336.75-.75a.752.752 0 0 1-.75-.75c-.297 0-.555.174-.683.424l-1.72-.367a.253.253 0 0 0-.276.164l-.51 2.378c-.896-.025-1.706-.328-2.298-.829a1.23 1.23 0 0 1-.106.015 1.25 1.25 0 0 1-1.25-1.25c0-.688.561-1.25 1.25-1.25.358 0 .676.155.901.399.704-.51 1.637-.828 2.684-.852l-.443 2.072c1.077.026 2.05.353 2.766.883a1.237 1.237 0 0 1 .843-.377zm-8.256 5.626c0-.528.431-.959.96-.959.528 0 .959.431.959.959 0 .528-.431.959-.959.959-.529 0-.96-.431-.96-.959zm7.042.959a.96.96 0 0 1-.96-.959c0-.528.431-.959.96-.959.528 0 .959.431.959.959 0 .528-.431.959-.959.959zm-4.796 2.34c-1.127 0-2.062-.779-2.146-1.776a.125.125 0 0 1 .125-.135h4.043a.125.125 0 0 1 .125.135c-.084.997-1.02 1.776-2.147 1.776z"/></svg>
              </a>
              <a href="https://www.quora.com/profile/Gupshupwithyourgynaec" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="Quora">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.247 2c-5.187 0-9.247 3.882-9.247 9.083s4.046 9.083 9.247 9.083c1.085 0 2.115-.17 3.037-.478l2.963 2.312v-3.79c1.996-1.748 3.253-4.323 3.253-7.127 0-5.201-4.06-9.083-9.253-9.083zm.185 14.502c-3.13 0-5.432-2.115-5.432-5.419s2.302-5.42 5.432-5.42c3.131 0 5.432 2.116 5.432 5.42s-2.301 5.419-5.432 5.419zm1.846-3.23c-.702 1.077-1.847 1.258-2.33 1.258a1.597 1.597 0 0 1-1.594-1.595c0-1.189.96-1.594 2.502-1.594h1.422v1.931z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61572159206766" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
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
