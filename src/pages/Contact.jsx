import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Contact() {

  return (
    <>
      <Helmet>
        <title>Contact Us | Dr. Khooshboo Agarwal | Gynecologist Kolkata</title>
        <meta name="description" content="Contact Dr. Khooshboo Agarwal, best gynecologist in Kolkata. Consulting at Saltlake, Dumdum, Nagerbazar, and central Kolkata hospitals." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/contact" />
      </Helmet>

      <header className="page-hero" aria-labelledby="contact-hero-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Contact</span>
          </nav>
          <div className="section-tag">Reach Out</div>
          <h1 id="contact-hero-heading">Contact Us</h1>
          <p style={{ maxWidth: '540px', margin: '16px auto 0', fontSize: '1.1rem' }}>
            Call or message our booking helpline directly to confirm your appointment at any of our Kolkata locations.
          </p>
        </div>
      </header>

      <section className="section contact-section" aria-labelledby="contact-form-heading">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start' }}>

            {/* Left — Contact Info */}
            <div>
              <h2 id="contact-form-heading" style={{ marginBottom: '28px' }}>How to Reach Dr. Khooshboo</h2>

              <div className="info-box">
                <div>
                  <h4>Consults Across Kolkata</h4>
                  <p>IRM Kolkata, ILS Saltlake, ILS Nagerbazar, Care Hospital, Spandan Hospital, Suraksha Nagerbazar, Rameshwara Nursing Home, Devine Nursing Home</p>
                </div>
              </div>

              <div className="info-box">
                <div>
                  <h4>Consultation Hours</h4>
                  <p>Monday to Saturday, 8:00 AM to 8:00 PM</p>
                </div>
              </div>

              <div className="info-box">
                <div>
                  <h4>WhatsApp Enquiry</h4>
                  <p>
                    <a
                      href="https://wa.me/919477595594"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--forest)', fontWeight: 700, borderBottom: '1px solid var(--gold)' }}
                    >
                      Message on WhatsApp
                    </a>
                    {' '}for quick responses
                  </p>
                </div>
              </div>

              {/* Local SEO text */}
              <div style={{ marginTop: '32px', padding: '24px', background: 'var(--ivory)', borderLeft: '2px solid var(--gold)' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px', color: 'var(--gray-500)' }}>Serving Patients from</h3>
                <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--gray-600)' }}>
                  Saltlake, Bidhannagar, Dumdum, Laketown, Nagerbazar, New Town, Rajarhat, Dum Dum Cantonment, VIP Road, Belghoria, Shyambazar, Central Kolkata
                </p>
              </div>
            </div>

            {/* Right — Direct Contact Options */}
            <div className="contact-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--forest)', margin: 0 }}>
                Direct Consultation Booking
              </h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', margin: 0, lineHeight: '1.7' }}>
                To schedule an appointment or check doctor availability, please call our booking desk directly or send a WhatsApp message.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <a
                  href="tel:+919477595594"
                  className="btn btn-primary"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    padding: '16px 20px',
                    fontSize: '0.95rem',
                    fontWeight: 600
                  }}
                >
                  📞 Call +91 94775 95594
                </a>

                <a
                  href="https://wa.me/919477595594"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    padding: '16px 20px',
                    fontSize: '0.95rem',
                    fontWeight: 600
                  }}
                >
                  💬 Message on WhatsApp
                </a>
              </div>

              <div style={{ borderTop: '1px solid var(--gray-200)', paddingTop: '20px', marginTop: '8px' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--forest)', marginBottom: '10px', fontFamily: 'var(--font-body)' }}>
                  Important Instructions
                </h4>
                <ul style={{ paddingLeft: '20px', listStyleType: 'disc', color: 'var(--gray-500)', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '8px', margin: 0 }}>
                  <li>Please mention your preferred location (Saltlake, Dumdum, Nagerbazar, Lauhati, Newtown, etc.) when contacting.</li>
                  <li>If you have relevant prescriptions, scans, or lab reports, please bring them along for your consultation.</li>
                  <li>Direct phone calls are recommended for urgent consultations.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Community Section */}
      <section className="section-sm" style={{ background: 'var(--gray-50)', borderTop: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="highlight-box" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', background: 'white', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-lg)', padding: '40px 32px' }}>
            <div className="section-tag" style={{ color: 'var(--gold)' }}>Join Our Community</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--forest)', marginBottom: '16px' }}>
              Gupshup With Your Gynaec
            </h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '1.05rem', maxWidth: '580px', margin: '0 auto 28px', lineHeight: '1.7' }}>
              Follow Dr. Khooshboo Agarwal on social media for friendly, medically accurate gynaecological insights, health tips, and direct Q&A sessions.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://www.instagram.com/gupshupwithyourgynaec/" target="_blank" rel="noopener noreferrer" className="btn btn-teal" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}>
                Instagram
              </a>
              <a href="https://www.facebook.com/profile.php?id=61572159206766" target="_blank" rel="noopener noreferrer" className="btn btn-teal" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}>
                Facebook
              </a>
              <a href="https://www.linkedin.com/in/dr-khooshboo-agarwal-754a603b9/" target="_blank" rel="noopener noreferrer" className="btn btn-teal" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}>
                LinkedIn
              </a>
              <a href="https://x.com/Letstalkpink" target="_blank" rel="noopener noreferrer" className="btn btn-teal" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}>
                Twitter / X
              </a>
              <a href="https://www.quora.com/profile/Gupshupwithyourgynaec" target="_blank" rel="noopener noreferrer" className="btn btn-teal" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}>
                Quora
              </a>
              <a href="https://www.reddit.com/user/gupshupwithyourgynae/" target="_blank" rel="noopener noreferrer" className="btn btn-teal" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}>
                Reddit
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
