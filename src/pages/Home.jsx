import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import FAQ from '../components/FAQ'
import { services } from '../data/services'
import { blogPosts } from '../data/blogs'

// Image imports — these match the rename guide in src/data/images.js
// Place renamed images in src/assets/ before running npm dev
let imgProfile, imgSurgical, imgWithBaby, imgAward
try {
  imgProfile = new URL('../assets/khushboo.jpg', import.meta.url).href
  imgSurgical = new URL('../assets/khushboo.jpg', import.meta.url).href
  imgWithBaby = new URL('../assets/WhatsApp Image 2026-04-08 at 21.56.50.jpeg', import.meta.url).href
  imgAward = new URL('../assets/WhatsApp Image 2026-04-08 at 21.56.49 (1).jpeg', import.meta.url).href
} catch (_) {
  imgProfile = imgSurgical = imgWithBaby = imgAward = null
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
    answer: 'Yes. Dr. Khooshboo Agarwal completed specialized training in Infertility and Assisted Reproductive Technology (ART) at the Institute of Reproductive Medicine (IRM), Kolkata — one of India\'s most respected fertility institutions. She holds an MS in Obstetrics & Gynaecology from Gauhati Medical College (GMCH), Gauhati, Assam.',
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
          <div className="grid-2">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="dot" aria-hidden="true"></span>
                Available for Consultations in Kolkata
              </div>
              <h1 id="hero-heading">
                Your Trusted <span>Lady Gynecologist</span> in Kolkata
              </h1>
              <p className="hero-subtitle">
                Dr. Khooshboo Agarwal is an Obstetrician, Gynecologist
                and Infertility Specialist with 8 years of experience
                serving women across Saltlake, Dumdum, Laketown,
                Bidhannagar, and the greater Kolkata region.
              </p>
              <div className="hero-actions">
                <a href="https://maatritvaivffertility.com/appointment" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                  📅 Book Appointment
                </a>
                <Link to="/about" className="btn btn-secondary btn-lg">
                  Meet the Doctor
                </Link>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">8+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5000+</span>
                  <span className="stat-label">Patients Cared For</span>
                </div>
                <div className="stat">
                  <span className="stat-number">7</span>
                  <span className="stat-label">Hospitals</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Specializations</span>
                </div>
              </div>
            </div>

            {/* Massive editorial custom image */}
            <div className="hero-image-box">
              <div className="hero-editorial-image">
                {imgSurgical ? (
                  <img
                    src={imgSurgical}
                    alt="Dr. Khooshboo Agarwal"
                    title="Dr. Khooshboo Agarwal | Best Gynecologist Kolkata"
                    loading="eager"
                  />
                ) : <span style={{ fontSize: '6rem' }}>👩‍⚕️</span>}
              </div>
              <div className="floating-card fc1">
                <span className="fc-icon">👶</span>
                Delivery Expert
              </div>
              <div className="floating-card fc2">
                <span className="fc-icon">⭐</span>
                IRM Kolkata Trained
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="trust-section" aria-label="Trust indicators">
        <div className="container">
          <div className="trust-items">
            {[
              { icon: '🎓', label: 'MS – Obstetrics & Gynaecology' },
              { icon: '🏥', label: '7 Associated Hospitals' },
              { icon: '🔬', label: 'IRM Kolkata Fertility Training' },
              { icon: '🤰', label: 'High-Risk Pregnancy Expert' },
              { icon: '📍', label: 'Serving Saltlake & Dumdum' },
            ].map((t) => (
              <div className="trust-item" key={t.label}>
                <span className="trust-item-icon" aria-hidden="true">{t.icon}</span>
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNAPSHOT ── */}
      <section className="section" aria-labelledby="about-heading">
        <div className="container">
          <div className="grid-2">
            <div>
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
                and her MS in Obstetrics &amp; Gynaecology from GMCH, Gauhati (Assam),
                she pursued advanced training in Infertility and ART at the
                Institute of Reproductive Medicine (IRM), Kolkata — one of
                India's most respected fertility centres.
              </p>
              <p>
                Today she consults across seven hospitals in Kolkata, including
                ILS Saltlake, ILS Nagerbazar, IRM Kolkata, and Care Hospital —
                making expert gynecological care accessible across the city.
              </p>
              <Link to="/about" className="btn btn-primary mt-3">
                Read Full Profile
              </Link>
            </div>

            {/* Award / conference image */}
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              {imgAward ? (
                <img
                  src={imgAward}
                  alt="Dr. Khooshboo Agarwal, best gyno doctor near me in Kolkata, receiving recognition at ENHANCE Advance USG medical conference"
                  title="Dr. Khooshboo Agarwal | Award at ENHANCE USG Conference | Best Gyno Kolkata"
                  width="600" height="750"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <div style={{ background: 'var(--rose-pale)', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem' }}>🏆</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section services-section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Services</div>
            <h2 id="services-heading">Complete Women's Healthcare Under One Roof</h2>
            <p>From preconception planning to delivery and beyond, Dr. Khooshboo Agarwal provides expert care at every stage of a woman's life.</p>
          </div>
          <div className="grid-4">
            {services.map((s) => (
              <Link
                to={`/services/${s.slug}`}
                key={s.slug}
                className="card service-card"
                style={{ textDecoration: 'none', display: 'block' }}
                aria-label={`Learn more about ${s.title}`}
              >
                <div className="card-icon" aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.shortDesc}</p>
                <span className="read-more" style={{ marginTop: '12px' }}>Learn more →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── REAL MOMENTS — Doctor with newborn ── */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--rose-pale), var(--teal-pale))' }} aria-labelledby="moments-heading">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card)', maxWidth: '420px' }}>
              {imgWithBaby ? (
                <img
                  src={imgWithBaby}
                  alt="Dr. Khooshboo Agarwal, best lady gynecologist in Dumdum and Nagerbazar Kolkata, smiling while holding a newborn baby patient"
                  title="Best Lady Gynecologist Near Me in Dumdum Kolkata – Dr. Khooshboo Agarwal with Newborn"
                  width="760" height="1135"
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              ) : (
                <div style={{ background: 'var(--rose-pale)', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6rem' }}>👶</div>
              )}
            </div>
            <div>
              <div className="section-tag">Real Moments</div>
              <h2 id="moments-heading">Every Baby Delivered is a Story She Carries</h2>
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
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '28px' }}>
                <Link to="/services/painless-delivery" className="btn btn-primary">
                  Painless Delivery
                </Link>
                <Link to="/services/high-risk-pregnancy" className="btn btn-secondary">
                  High-Risk Pregnancy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials-section" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Patient Stories</div>
            <h2 id="testimonials-heading">What Patients Say About Dr. Khooshboo Agarwal</h2>
          </div>
          <div className="grid-3">
            {[
              {
                text: "I had been struggling with PCOS for 3 years before I found Dr. Khooshboo. She was the first doctor who actually explained what was happening in my body and what we could do about it. Six months later, my periods are regular and I feel like myself again.",
                name: 'Priya S.',
                detail: 'PCOS Patient, Saltlake',
                emoji: '👩',
              },
              {
                text: "My pregnancy was categorized as high-risk due to gestational diabetes. Dr. Khooshboo monitored me so carefully throughout and I had a perfectly healthy delivery. I cannot thank her enough. She is the best gynecologist in Kolkata, in my opinion.",
                name: 'Ananya M.',
                detail: 'High-Risk Pregnancy Patient, Dumdum',
                emoji: '🤱',
              },
              {
                text: "After two years of trying to conceive, we finally went to Dr. Khooshboo. She was so patient and never made us feel rushed. She guided us through IUI and we are now expecting our first child. She truly is one of Kolkata's best.",
                name: 'Reema & Saurav R.',
                detail: 'Infertility Patients, New Town',
                emoji: '👨‍👩‍👧',
              },
            ].map((t, i) => (
              <article className="testimonial-card" key={i} aria-label={`Patient testimonial from ${t.name}`}>
                <div className="stars" aria-label="5 star rating">★★★★★</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar" aria-hidden="true">{t.emoji}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-detail">{t.detail}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT BLOGS ── */}
      <section className="section" aria-labelledby="blog-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Health Library</div>
            <h2 id="blog-heading">Women's Health Insights from Dr. Khooshboo</h2>
            <p>Medically accurate, easy-to-understand articles on the topics that matter most to women.</p>
          </div>
          <div className="grid-3">
            {blogPosts.slice(0, 3).map((post) => (
              <article className="blog-card" key={post.slug}>
                <div className="blog-card-img" style={{ background: 'linear-gradient(135deg, var(--rose-pale), var(--teal-pale))' }} aria-hidden="true">
                  <span>{post.emoji}</span>
                </div>
                <div className="blog-card-body">
                  <span className="blog-tag">{post.category}</span>
                  <h3>
                    <Link to={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h3>
                  <p>{post.excerpt.slice(0, 110)}…</p>
                  <div className="blog-meta">
                    <span>🗓 {post.date}</span>
                    <span>⏱ {post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="read-more" style={{ display: 'block', marginTop: '14px' }}>
                    Read article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/blog" className="btn btn-secondary">View All Articles</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section faq-section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Common Questions</div>
            <h2 id="faq-heading">Frequently Asked Questions</h2>
          </div>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <FAQ items={homeFaqs} />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-sm" aria-labelledby="cta-heading">
        <div className="container">
          <div className="highlight-box">
            <h2 id="cta-heading">Ready to Take the First Step?</h2>
            <p>Book a consultation with Dr. Khooshboo Agarwal today. She consults across Saltlake, Nagerbazar, Dumdum, and central Kolkata.</p>
            <a href="https://maatritvaivffertility.com/appointment" target="_blank" rel="noopener noreferrer" className="btn-white">
              📅 Book Appointment Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
