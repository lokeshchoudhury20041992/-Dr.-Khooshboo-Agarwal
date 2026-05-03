import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import FAQ from '../components/FAQ'
import LocationsSection from '../components/LocationsSection'
import { services } from '../data/services'
import { blogPosts } from '../data/blogs'

// Image imports
let imgProfile, imgWithBaby, imgAward
let imgSurgery, imgGynecologist

try {
  imgProfile = new URL('../assets/khushboo.jpg', import.meta.url).href
  imgWithBaby = new URL('../assets/best-lady-gynecologist-dumdum-kolkata-dr-khooshboo-agarwal-newborn-delivery.jpg', import.meta.url).href
  imgAward = new URL('../assets/dr-khooshboo-agarwal-best-gyno-doctor-kolkata-award-enhance-usb-conference.jpg', import.meta.url).href
  imgSurgery = new URL('../assets/best-gynecologist-saltlake-bidhannagar-dr-khooshboo-agarwal-surgery.jpg', import.meta.url).href
  imgGynecologist = new URL('../assets/dr-khooshboo-agarwal-gynecologist-near-me-kolkata.jpg', import.meta.url).href
} catch (_) {
  imgProfile = imgWithBaby = imgAward = imgSurgery = imgGynecologist = null
}

const homeFaqs = [
  {
    question: 'Who is the best gynecologist near me in Kolkata?',
    answer: 'Dr. Khooshboo Agarwal is a highly recommended Obstetrician, Gynecologist and Infertility Specialist practising in Kolkata. She consults at IRM Kolkata, ILS Saltlake, ILS Nagerbazar, Care Hospital, Spandhan, Suraksha Nagerbazar, and Rameshwara Nursing Home — serving patients from Saltlake, Dumdum, Laketown, Bidhannagar, Nagerbazar, New Town and surrounding areas.',
  },
  {
    question: 'What services does Dr. Khooshboo Agarwal offer?',
    answer: 'Dr. Khooshboo Agarwal offers comprehensive women\'s healthcare including High-Risk Pregnancy management, Normal and Painless Delivery, PCOS treatment, Infertility treatment and ART (IVF/IUI), Preconception counselling, Contraception guidance, Sexual health care, and treatment of vaginal infections.',
  },
  {
    question: 'Is Dr. Khooshboo Agarwal a qualified infertility specialist?',
    answer: 'Yes. Dr. Khooshboo Agarwal completed specialized training in Infertility and Assisted Reproductive Technology (ART) at the Institute of Reproductive Medicine (IRM), Kolkata — one of India\'s most respected fertility institutions. She holds an MS in Obstetrics and Gynaecology from Gauhati Medical College (GMCH), Gauhati, Assam.',
  },
  {
    question: 'How do I book an appointment with Dr. Khooshboo Agarwal?',
    answer: 'You can book an appointment directly through the Contact page on this website, or send a WhatsApp message using the chat button on the right side of the screen. Dr. Agarwal consults at multiple hospitals across Kolkata — please mention your preferred location when booking.',
  },
  {
    question: 'Does Dr. Khooshboo Agarwal treat PCOS?',
    answer: 'Yes. PCOS management is one of Dr. Agarwal\'s core areas of expertise. She offers hormonal evaluation, lifestyle guidance, medication, and long-term monitoring for women with PCOS — including PCOS-related infertility treatment.',
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Dr. Khooshboo Agarwal | Best Gynecologist in Kolkata, Saltlake, Dumdum</title>
        <meta name="description" content="Dr. Khooshboo Agarwal is one of the best lady gynecologists in Kolkata. Serving Saltlake, Dumdum, Laketown, Bidhannagar, and Nagerbazar. Expert in PCOS, High-Risk Pregnancy, IVF, and Painless Delivery." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-overline">Gynecologist and Infertility Specialist — Kolkata</div>
              <h1 id="hero-heading">
                Compassionate care for <em>every chapter</em> of womanhood
              </h1>
              <p className="hero-subtitle">
                Dr. Khooshboo Agarwal is an Obstetrician, Gynecologist
                and Infertility Specialist with 8 years of experience
                serving women across Saltlake, Dumdum, Laketown,
                Bidhannagar, and the greater Kolkata region.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
                <Link to="/about" className="btn btn-outline">
                  Meet the Doctor
                </Link>
              </div>
            </div>

            <div className="hero-image-side">
              <div className="hero-image-frame">
                {imgProfile ? (
                  <img
                    src={imgProfile}
                    alt="Dr. Khooshboo Agarwal"
                    title="Dr. Khooshboo Agarwal | Best Gynecologist Kolkata"
                    loading="eager"
                  />
                ) : (
                  <div style={{ background: 'var(--ivory-deep)', height: '560px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '4rem', color: 'var(--gold)' }}>K.A.</div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="hero-stats-bar">
          <div className="container">
            <div className="hero-stats-inner">
              <div className="hero-stat">
                <span className="hero-stat-number">8+</span>
                <span className="hero-stat-label">Years Experience</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">5000+</span>
                <span className="hero-stat-label">Patients Cared For</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">7</span>
                <span className="hero-stat-label">Hospitals</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">3</span>
                <span className="hero-stat-label">Specializations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="trust-strip" aria-label="Key credentials">
        <div className="container">
          <div className="trust-strip-inner">
            <div className="trust-item">
              <span className="trust-number">MS</span>
              <span className="trust-label">Obstetrics and Gynaecology</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">7</span>
              <span className="trust-label">Associated Hospitals</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">IRM</span>
              <span className="trust-label">Kolkata Fertility Training</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">HR</span>
              <span className="trust-label">Pregnancy Expert</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">KOL</span>
              <span className="trust-label">Saltlake and Dumdum</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section" aria-labelledby="about-heading">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrap">
              <div className="about-image-border" aria-hidden="true" />
              {imgAward ? (
                <img
                  src={imgAward}
                  alt="Dr. Khooshboo Agarwal receiving recognition at ENHANCE Advance USG medical conference"
                  title="Dr. Khooshboo Agarwal | Award at ENHANCE USG Conference"
                  loading="lazy"
                />
              ) : (
                <div style={{ background: 'var(--ivory-deep)', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--gold)' }}>K.A.</div>
              )}
            </div>
            <div className="about-text">
              <div className="section-tag">About the Doctor</div>
              <h2 id="about-heading">A Gynecologist Who Truly Listens</h2>
              <p>
                Growing up, Dr. Khooshboo Agarwal saw how many women
                silently endured health problems they felt too embarrassed
                or too busy to address. That observation shaped everything
                about how she practices medicine today — with patience,
                empathy, and zero judgment.
              </p>
              <p>
                After completing her MBBS from Assam Medical College, Dibrugarh
                and her MS in Obstetrics and Gynaecology from GMCH, Gauhati (Assam),
                she pursued advanced training in Infertility and ART at the
                Institute of Reproductive Medicine (IRM), Kolkata — one of
                India's most respected fertility centres.
              </p>
              <blockquote className="about-quote">
                "Every patient deserves to be heard before they are treated."
              </blockquote>
              <p>
                Today she consults across seven hospitals in Kolkata, including
                ILS Saltlake, ILS Nagerbazar, IRM Kolkata, and Care Hospital —
                making expert gynecological care accessible across the city.
              </p>
              <Link to="/about" className="btn btn-outline mt-3">
                Read Full Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES REEL ── */}
      <section className="section services-reel-section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Services</div>
            <h2 id="services-heading">Complete Women's Healthcare Under One Roof</h2>
            <p style={{ color: 'rgba(247,245,240,0.65)' }}>
              From preconception planning to delivery and beyond, Dr. Khooshboo Agarwal provides expert care at every stage of a woman's life.
            </p>
          </div>
        </div>
        <div className="services-reel" role="list">
          {services.map((s, i) => (
            <Link
              to={`/services/${s.slug}`}
              key={s.slug}
              className="service-reel-item"
              role="listitem"
              aria-label={`Learn more about ${s.title}`}
            >
              <div className="service-reel-num">{String(i + 1).padStart(2, '0')}</div>
              <h3>{s.title}</h3>
              <p>{s.shortDesc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── REAL MOMENTS ── */}
      <section className="real-moments" aria-labelledby="moments-heading">
        <div className="real-moments-bg">
          {imgWithBaby ? (
            <img
              src={imgWithBaby}
              alt="Dr. Khooshboo Agarwal with a newborn patient"
              title="Dr. Khooshboo Agarwal with Newborn"
              loading="lazy"
            />
          ) : (
            <div style={{ background: 'var(--forest)', width: '100%', height: '100%' }} />
          )}
        </div>
        <div className="real-moments-overlay" aria-hidden="true" />
        <div className="container">
          <div className="real-moments-content">
            <div className="section-tag" style={{ color: 'var(--gold-light)' }}>Real Moments</div>
            <h2 id="moments-heading">
              "Every baby delivered is a story she carries"
            </h2>
            <p>
              Dr. Khooshboo Agarwal has guided hundreds of families through
              the journey of pregnancy and childbirth. Whether it is a
              straightforward delivery or a high-risk case requiring close
              monitoring, she brings the same level of dedication and calm
              to every birth.
            </p>
            <p>
              Her patients across Dumdum, Nagerbazar, Laketown and Saltlake
              trust her not just for her qualifications, but for the
              reassurance she provides throughout pregnancy.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
              <Link to="/services/painless-delivery" className="btn btn-gold">
                Painless Delivery
              </Link>
              <Link to="/services/high-risk-pregnancy" className="btn btn-outline" style={{ color: 'var(--ivory)', borderColor: 'rgba(247,245,240,0.4)' }}>
                High-Risk Pregnancy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials-section" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Patient Stories</div>
            <h2 id="testimonials-heading">What Patients Say</h2>
          </div>
          <div className="testimonials-grid">
            {[
              {
                text: "I had been struggling with PCOS for 3 years before I found Dr. Khooshboo. She was the first doctor who actually explained what was happening in my body and what we could do about it. Six months later, my periods are regular and I feel like myself again.",
                name: 'Priya S.',
                detail: 'PCOS Patient, Saltlake',
              },
              {
                text: "My pregnancy was categorized as high-risk due to gestational diabetes. Dr. Khooshboo monitored me so carefully throughout and I had a perfectly healthy delivery. I cannot thank her enough. She is the best gynecologist in Kolkata, in my opinion.",
                name: 'Ananya M.',
                detail: 'High-Risk Pregnancy Patient, Dumdum',
              },
            ].map((t, i) => (
              <article className="testimonial-item" key={i}>
                <span className="testimonial-quote-mark" aria-hidden="true">"</span>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author-name">{t.name}</div>
                <div className="testimonial-author-detail">{t.detail}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <LocationsSection />

      {/* ── RECENT BLOGS ── */}
      <section className="section" aria-labelledby="blog-heading">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Health Library</div>
            <h2 id="blog-heading">Women's Health Insights</h2>
            <p>Medically accurate, easy-to-understand articles on the topics that matter most to women.</p>
          </div>
          <div className="blog-offset-grid">
            {blogPosts.slice(0, 3).map((post) => (
              <Link to={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
                <div className="blog-card-img">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
                <div className="blog-card-tag">{post.category}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt.slice(0, 110)}…</p>
                <div className="blog-card-meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/blog" className="btn btn-outline">View All Articles</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section faq-section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Common Questions</div>
            <h2 id="faq-heading">Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            <FAQ items={homeFaqs} />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-sm cta-section" aria-labelledby="cta-heading">
        <div className="container">
          <h2 id="cta-heading">Ready to Take the First Step?</h2>
          <p>Book a consultation with Dr. Khooshboo Agarwal today. She consults across Saltlake, Nagerbazar, Dumdum, and central Kolkata.</p>
          <Link to="/contact" className="btn btn-gold">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
