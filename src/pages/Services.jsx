import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Gynecology Services in Kolkata | Dr. Khooshboo Agarwal</title>
        <meta name="description" content="Complete women's healthcare services by Dr. Khooshboo Agarwal in Kolkata: PCOS, High-Risk Pregnancy, IVF, Painless Delivery, Preconception Counselling, and more." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/services" />
      </Helmet>

      <header className="page-hero" aria-labelledby="services-hero-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>›</span> <span>Services</span>
          </nav>
          <div className="section-tag">Comprehensive Care</div>
          <h1 id="services-hero-heading">Women's Health Services in Kolkata</h1>
          <p style={{ maxWidth: '580px', margin: '16px auto 0', fontSize: '1.1rem' }}>
            From routine gynecological check-ups to complex infertility treatment, Dr. Khooshboo Agarwal offers the full range of women's healthcare — all in one place.
          </p>
        </div>
      </header>

      <section className="section" aria-labelledby="services-list-heading">
        <div className="container">
          <h2 id="services-list-heading" className="text-center mb-5">All Services</h2>
          <div className="grid-2">
            {services.map((s) => (
              <Link
                to={`/services/${s.slug}`}
                key={s.slug}
                style={{ textDecoration: 'none' }}
                aria-label={`Learn about ${s.title}`}
              >
                <div className="service-item">
                  <div className="service-item-icon" aria-hidden="true">{s.icon}</div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '6px', color: 'var(--gray-900)' }}>{s.title}</h3>
                    <p style={{ fontSize: '0.9rem', margin: 0 }}>{s.shortDesc}</p>
                    <span className="read-more" style={{ display: 'inline-flex', marginTop: '10px' }}>Explore →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="highlight-box">
            <h2>Not Sure Which Service You Need?</h2>
            <p>Get in touch and Dr. Khooshboo Agarwal will help you understand the right care for your situation.</p>
            <Link to="/contact" className="btn-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
