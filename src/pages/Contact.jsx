import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { submitAppointment } from '../lib/supabase'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', preferred_date: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await submitAppointment(formData)
      setStatus('success')
      setFormData({ name: '', phone: '', email: '', service: '', preferred_date: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

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
            Fill in the form below and Dr. Khooshboo's team will get back to you within a few hours.
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
                  <p>Monday to Saturday, 9:00 AM to 8:00 PM</p>
                </div>
              </div>

              <div className="info-box">
                <div>
                  <h4>WhatsApp Enquiry</h4>
                  <p>
                    <a
                      href="https://wa.me/91XXXXXXXXXX"
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

            {/* Right — Appointment Form */}
            <div className="contact-card" role="form" aria-label="Contact form">
              <h3 style={{ marginBottom: '24px', fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>Send us a Message</h3>

              {status === 'success' && (
                <div className="form-success visible" role="alert" style={{ background: '#d1fae5', color: '#065f46' }}>
                  Your request has been received. Dr. Khooshboo's team will contact you shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="form-success visible" role="alert" style={{ background: '#fee2e2', color: '#991b1b' }}>
                  Something went wrong. Please try again or WhatsApp us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange}
                    required placeholder="Your full name"
                    aria-required="true"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel" id="phone" name="phone"
                    value={formData.phone} onChange={handleChange}
                    required placeholder="+91 XXXXX XXXXX"
                    aria-required="true"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    placeholder="your@email.com (optional)"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Required</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    <option value="high-risk-pregnancy">High-Risk Pregnancy</option>
                    <option value="painless-delivery">Painless Delivery</option>
                    <option value="pcos-treatment">PCOS Treatment</option>
                    <option value="infertility-treatment">Infertility / IVF / ART</option>
                    <option value="preconception-counselling">Preconception Counselling</option>
                    <option value="contraception">Contraception Guidance</option>
                    <option value="sexual-health">Sexual Health</option>
                    <option value="vaginal-infections">Vaginal Infections</option>
                    <option value="general-checkup">General Gynaecology Checkup</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="preferred_date">Preferred Date</label>
                  <input
                    type="date" id="preferred_date" name="preferred_date"
                    value={formData.preferred_date} onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message / Concern</label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange}
                    placeholder="Briefly describe your concern (optional)"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
