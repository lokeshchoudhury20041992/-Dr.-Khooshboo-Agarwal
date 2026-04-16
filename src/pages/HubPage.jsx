import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { services, categories } from '../data/services'

export default function HubPage() {
  const { category } = useParams()
  
  // Validate if the category exists in our metadata
  const categoryMeta = categories[category]
  if (!categoryMeta) {
    return <Navigate to="/services" replace />
  }

  // Filter services that belong to this category
  const categoryServices = services.filter(s => s.categoryId === category)

  return (
    <>
      <Helmet>
        <title>{categoryMeta.title} in Kolkata | Dr. Khooshboo Agarwal</title>
        <meta name="description" content={`Expert ${categoryMeta.title.toLowerCase()} by Dr. Khooshboo Agarwal. ${categoryMeta.desc}`} />
        <link rel="canonical" href={`https://www.drkhooshbooagarwal.com/${category}`} />
      </Helmet>

      <header className="page-hero" aria-labelledby="hub-hero-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>›</span> <span>{categoryMeta.title}</span>
          </nav>
          <div className="section-tag">Specialized Care</div>
          <h1 id="hub-hero-heading">{categoryMeta.title}</h1>
          <p style={{ maxWidth: '580px', margin: '16px auto 0', fontSize: '1.1rem' }}>
            {categoryMeta.desc}
          </p>
        </div>
      </header>

      <section className="section" aria-labelledby="hub-services-heading">
        <div className="container">
          <h2 id="hub-services-heading" className="text-center mb-5">Available Services</h2>
          <div className="grid-2">
            {categoryServices.length > 0 ? (
              categoryServices.map((s) => (
                <Link
                  to={`/${category}/${s.slug}`}
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
              ))
            ) : (
              <p className="text-center" style={{ gridColumn: '1 / -1', padding: '2rem' }}>
                New specialized treatments are being updated for this category.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="highlight-box">
            <h2>Need Expert Guidance?</h2>
            <p>Schedule a personalized consultation with Dr. Khooshboo Agarwal to discuss your specific health needs.</p>
            <Link to="/contact" className="btn-white">Book Your Consultation</Link>
          </div>
        </div>
      </section>
    </>
  )
}
