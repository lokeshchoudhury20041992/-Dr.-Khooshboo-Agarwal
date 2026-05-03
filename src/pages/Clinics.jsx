import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { clinicsData } from '../data/clinics'

export default function Clinics() {
  return (
    <>
      <Helmet>
        <title>Our Clinics | Dr. Khooshboo Agarwal Locations in Kolkata</title>
        <meta name="description" content="Find the nearest clinic for Dr. Khooshboo Agarwal in Kolkata. We are located in Lauhati, Newtown, Gorabazar, LakeTown, Kankurgachi and more." />
      </Helmet>

      {/* ── PAGE HERO ── */}
      <header className="page-hero" aria-labelledby="clinics-hero-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span>Clinics</span>
          </nav>
          <div className="section-tag">Visit Us</div>
          <h1 id="clinics-hero-heading">Our Clinic Locations</h1>
          <p style={{ maxWidth: '580px', margin: '0 auto', fontSize: '1.1rem' }}>
            Find Dr. Khooshboo Agarwal at a clinic near you for expert gynecological and fertility care.
          </p>
        </div>
      </header>

      {/* ── LOCATIONS SECTION ── */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="grid-3">
            {clinicsData.map((clinic, idx) => (
              <div key={clinic.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '16px' }}>{String(idx + 1).padStart(2, '0')}</div>
                <h3 style={{ marginBottom: '8px' }}>{clinic.name}</h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', marginBottom: '16px', flexGrow: 1 }}>
                  {clinic.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gray-400)', fontSize: '0.85rem', marginBottom: '24px' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 600 }}>Loc.</span> {clinic.address}
                </div>
                <Link to={`/clinics/${clinic.id}`} className="btn btn-secondary btn-sm" style={{ alignSelf: 'flex-start' }}>
                  View Location Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-sm">
        <div className="container">
          <div className="highlight-box">
            <h2>Ready to take the next step?</h2>
            <p>Get in touch with us at one of our clinics today.</p>
            <Link to="/contact" className="btn-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
