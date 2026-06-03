import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { clinicsData } from '../data/clinics'

export default function ClinicDetail() {
  const { id } = useParams()
  
  const clinic = clinicsData.find(c => c.id === id)
  
  if (!clinic) {
    return <Navigate to="/clinics" replace />
  }

  return (
    <>
      <Helmet>
        <title>{clinic.name} | Dr. Khooshboo Agarwal Clinics in Kolkata</title>
        <meta name="description" content={`Get location details, directions, and information for ${clinic.name} located at ${clinic.address}.`} />
      </Helmet>

      {/* ── PAGE HERO ── */}
      <header className="page-hero" aria-labelledby="clinic-hero-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link to="/clinics">Clinics</Link>
            <span aria-hidden="true">›</span>
            <span>{clinic.name}</span>
          </nav>
          <div className="section-tag">Clinic Details</div>
          <h1 id="clinic-hero-heading">{clinic.name}</h1>
          <p style={{ maxWidth: '580px', margin: '0 auto', fontSize: '1.1rem' }}>
            {clinic.address}
          </p>
        </div>
      </header>

      {/* ── CLINIC INFO and MAP ── */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '60px' }}>
            
            {/* Information Side */}
            <div>
              <h2 style={{ marginBottom: '24px' }}>About This Location</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '32px' }}>
                {clinic.description}
              </p>

              <h3 style={{ marginBottom: '16px', fontSize: '1.25rem' }}>Features and Services</h3>
              <ul className="numbered-list" style={{ marginBottom: '40px' }}>
                {clinic.features.map((feature, idx) => (
                  <li key={idx} style={{ fontSize: '1rem', color: 'var(--gray-700)' }}>
                    <span style={{ paddingTop: '2px' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="info-box" style={{ background: 'var(--gray-50)', padding: '24px', borderRadius: 'var(--radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--gold)', flexShrink: 0 }}>Loc.</div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1rem' }}>Address</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--gray-600)' }}>{clinic.address}</p>
                  </div>
                </div>
              </div>

              {clinic.phone && (
                <div className="info-box" style={{ background: 'var(--gray-50)', padding: '24px', borderRadius: 'var(--radius-md)', marginTop: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--gold)', flexShrink: 0 }}>📞</div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '1rem' }}>Booking Helpline</h4>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                        <a href={`tel:${clinic.phone.replace(/[^0-9+]/g, '')}`} style={{ color: 'var(--forest)', fontWeight: 600 }}>
                          {clinic.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ marginTop: '32px' }}>
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Map Side */}
            <div className="location-map-panel" style={{ height: '550px' }}>
              <iframe
                src={clinic.iframeSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map to ${clinic.name}`}
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
