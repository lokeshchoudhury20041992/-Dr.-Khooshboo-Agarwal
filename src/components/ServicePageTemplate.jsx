// ============================================================
// ServicePageTemplate - Reusable template for all service pages
// ============================================================
import { Link } from 'react-router-dom'
import FAQ from './FAQ'

export default function ServicePageTemplate({ seo, hero, intro, sections, faqs, cta, relatedServices }) {
  return (
    <>
      <header className="page-hero" aria-labelledby="service-hero-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>›</span>
            <Link to="/services">Services</Link> <span>›</span>
            <span>{hero.title}</span>
          </nav>
          <div className="section-tag">{hero.tag}</div>
          <h1 id="service-hero-heading">{hero.heading}</h1>
          <p style={{ maxWidth: '580px', margin: '16px auto 0', fontSize: '1.1rem' }}>{hero.subtitle}</p>
          <Link to="/contact" className="btn btn-primary btn-lg" style={{ marginTop: '28px', display: 'inline-flex' }}>
            Contact Us
          </Link>
        </div>
      </header>

      <section className="section" aria-labelledby="intro-heading">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 id="intro-heading">{intro.heading}</h2>
              {intro.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {intro.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '14px 16px', background: 'var(--ivory)', borderRadius: 'var(--radius-sm)', borderLeft: '2px solid var(--gold)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold)', flexShrink: 0, lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--forest)' }}>{h.title}</strong>
                    <p style={{ fontSize: '0.87rem', margin: '4px 0 0', color: 'var(--gray-500)' }}>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {sections && sections.map((sec, idx) => (
        <section key={idx} className="section" style={{ background: idx % 2 === 0 ? 'var(--gray-50)' : 'var(--white)' }} aria-labelledby={`section-heading-${idx}`}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '36px' }}>
              <h2 id={`section-heading-${idx}`}>{sec.heading}</h2>
              {sec.subheading && <p>{sec.subheading}</p>}
            </div>
            {sec.type === 'grid' && (
              <div className="grid-3">
                {sec.items.map((item, i) => (
                  <div className="card" key={i}>
                    <div className="card-icon" aria-hidden="true" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold)' }}>{String(i + 1).padStart(2, '0')}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
            {sec.type === 'list' && (
              <ul className="numbered-list" style={{ maxWidth: '640px', margin: '0 auto' }}>
                {sec.items.map((item, i) => (
                  <li key={i}>
                    <div>
                      <strong style={{ display: 'block', marginBottom: '4px', color: 'var(--gray-900)' }}>{item.title}</strong>
                      <span style={{ fontSize: '0.92rem', color: 'var(--gray-600)' }}>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {faqs && faqs.length > 0 && (
        <section className="section faq-section" aria-labelledby="service-faq-heading">
          <div className="container">
            <div className="section-header">
              <div className="section-tag">FAQ</div>
              <h2 id="service-faq-heading">Common Questions</h2>
            </div>
            <div style={{ maxWidth: '760px', margin: '0 auto' }}>
              <FAQ items={faqs} />
            </div>
          </div>
        </section>
      )}

      {relatedServices && relatedServices.length > 0 && (
        <section className="section services-section" aria-labelledby="related-heading">
          <div className="container">
            <div className="section-header">
              <div className="section-tag">Related</div>
              <h2 id="related-heading">You Might Also Be Interested In</h2>
            </div>
            <div className="grid-3">
              {relatedServices.map((s) => (
                <Link to={`/services/${s.slug}`} key={s.slug} className="card service-card" style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="card-icon" aria-hidden="true" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold)' }}>→</div>
                  <h3>{s.title}</h3>
                  <p>{s.shortDesc}</p>
                  <span className="read-more" style={{ marginTop: '12px' }}>Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-sm">
        <div className="container">
          <div className="highlight-box">
            <h2>{cta?.heading || 'Ready to Get the Right Care?'}</h2>
            <p>{cta?.sub || 'Get in touch with Dr. Khooshboo Agarwal at a hospital nearest to you in Kolkata.'}</p>
            <Link to="/contact" className="btn-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
