import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import FAQ from '../components/FAQ'
import { hospitals, doctorProfile } from '../data/services'

// Image imports
let imgProfile, imgSurgical, imgWithBaby, imgAward, imgCertificate
try {
  imgProfile      = new URL('../assets/khushboo_hero.jpg', import.meta.url).href
  imgSurgical     = new URL('../assets/WhatsApp Image 2026-04-08 at 21.56.48.jpeg', import.meta.url).href
  imgWithBaby     = new URL('../assets/WhatsApp Image 2026-04-08 at 21.56.49 (1).jpeg', import.meta.url).href
  imgAward        = new URL('../assets/WhatsApp Image 2026-04-09 at 09.58.54.jpeg', import.meta.url).href
  imgCertificate  = new URL('../assets/WhatsApp Image 2026-04-11 at 14.54.31.jpeg', import.meta.url).href
} catch (_) {
  imgProfile = imgSurgical = imgWithBaby = imgAward = imgCertificate = null
}

const aboutFaqs = [
  {
    question: 'What are Dr. Khooshboo Agarwal\'s qualifications?',
    answer: 'Dr. Khooshboo Agarwal holds an MBBS from Assam Medical College, Dibrugarh and an MS in Obstetrics and Gynaecology from Gauhati Medical College (GMCH), Gauhati, Assam. She also completed advanced training in Infertility and Assisted Reproductive Technology (ART) at the Institute of Reproductive Medicine (IRM), Kolkata.',
  },
  {
    question: 'Which area of Kolkata does Dr. Khooshboo consult in?',
    answer: 'Dr. Khooshboo Agarwal consults at hospitals across Kolkata including ILS Saltlake, ILS Nagerbazar, IRM Kolkata, Care Hospital, Spandan Hospital, Suraksha Nagerbazar, and Rameshwara Nursing Home — making her accessible to patients in Saltlake, Bidhannagar, Dumdum, Laketown, Nagerbazar, New Town, and surrounding areas.',
  },
  {
    question: 'How many years of experience does she have?',
    answer: 'Dr. Khooshboo Agarwal has over 8 years of clinical experience in obstetrics, gynecology, and infertility management.',
  },
  {
    question: 'Does Dr. Khooshboo handle high-risk pregnancies?',
    answer: 'Yes. High-risk pregnancy management is one of her core areas of expertise. She monitors complex cases including gestational diabetes, hypertension in pregnancy, multiple gestations, PROM, and previous caesarean section pregnancies.',
  },
  {
    question: 'Is she trained in IVF treatment?',
    answer: 'Yes. Dr. Khooshboo Agarwal trained at the Institute of Reproductive Medicine (IRM) Kolkata, which is among India\'s premier ART centres. She is trained in IVF, IUI, and other Assisted Reproductive Technologies (ART).',
  },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Dr. Khooshboo Agarwal | Best Lady Gynecologist in Kolkata, Saltlake, Dumdum</title>
        <meta name="description" content="Meet Dr. Khooshboo Agarwal – MS-qualified Obstetrician, Gynecologist and Infertility Specialist in Kolkata. 8+ years experience. Consulting in Saltlake, Dumdum, Laketown, Bidhannagar and Nagerbazar." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/about" />
      </Helmet>

      {/* ── PAGE HERO ── */}
      <header className="page-hero" aria-labelledby="about-hero-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span>About</span>
          </nav>
          <div className="section-tag">Meet the Doctor</div>
          <h1 id="about-hero-heading">
            Dr. Khooshboo Agarwal
          </h1>
          <p style={{ maxWidth: '580px', margin: '0 auto', fontSize: '1.1rem' }}>
            Obstetrician, Gynecologist and Infertility Specialist in Kolkata
          </p>
        </div>
      </header>

      {/* ── MAIN ABOUT LAYOUT ── */}
      <section className="section about-hero" aria-labelledby="about-profile-heading">
        <div className="container">
          {/* LARGE LEFT-ALIGNED PROFILE IMAGE + CONTENT SIDE BY SIDE */}
          <div className="about-layout">

            {/* LEFT — Large Doctor Portrait */}
            <div className="about-doctor-image-wrap">
              {imgProfile ? (
                <img
                  src={imgProfile}
                  alt="Dr. Khooshboo Agarwal – best gynecologist near me in Kolkata, best lady gynecologist in Saltlake and Dumdum"
                  title="Dr. Khooshboo Agarwal | Best Gynecologist Near Me | Kolkata"
                  width="420" height="560"
                  loading="eager"
                  fetchpriority="high"
                />
              ) : (
                <div style={{
                  background: 'var(--ivory-deep)',
                  borderRadius: 'var(--radius-md)',
                  aspectRatio: '3/4',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontSize: '4rem',
                  color: 'var(--gold)',
                }}>K.A.</div>
              )}

              {/* Credential pill overlaid at bottom */}
              <div style={{
                marginTop: '16px',
                background: 'white',
                borderRadius: 'var(--radius-md)',
                padding: '16px 20px',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
              }}>
                <span style={{ width: '8px', height: '8px', background: 'var(--gold)', borderRadius: '50%', flexShrink: 0, marginTop: '6px' }}></span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--gray-900)', fontFamily: 'var(--font-heading)' }}>MS – Obstetrics and Gynaecology</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--gray-400)' }}>GMCH, Gauhati · Verified Specialist</div>
                </div>
              </div>
            </div>

            {/* RIGHT — Bio + Credentials */}
            <div className="about-content-side">
              <h2 id="about-profile-heading" style={{ marginBottom: '20px' }}>
                A Doctor Shaped by Empathy and Expertise
              </h2>
              <p>
                Dr. Khooshboo Agarwal always believed that women deserve healthcare
                that treats them as whole people, not just patients with a complaint.
                That conviction led her to specialize in obstetrics and gynecology,
                a field that lets her support women through some of the most
                significant moments of their lives.
              </p>
              <p>
                After completing her MBBS from Assam Medical College, Dibrugarh,
                she went on to earn her MS in Obstetrics and Gynaecology from
                Gauhati Medical College (GMCH), Gauhati, Assam.
                Driven by a deep interest in infertility, she then trained at the
                Institute of Reproductive Medicine (IRM) in Kolkata for
                cutting-edge ART skills.
              </p>
              <p>
                Now practicing in Kolkata for over 8 years, Dr. Khooshboo is a
                sought-after choice for women in Saltlake, Bidhannagar, Dumdum,
                Laketown, Nagerbazar, and New Town who are looking for a
                gynecologist who listens as much as she treats.
              </p>

              {/* Education Credentials */}
              <h3 style={{ marginTop: '32px', marginBottom: '16px' }}>Education and Training</h3>
              <div className="credentials-list">
                {doctorProfile.education.map((edu) => (
                  <div className="credential-item" key={edu.degree}>
                    <span className="ci-icon" aria-hidden="true">{edu.icon}</span>
                    <div>
                      <h5>{edu.degree}</h5>
                      <p>{edu.institute}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hospital Affiliations */}
              <h3 style={{ marginTop: '32px', marginBottom: '16px' }}>Hospital Affiliations in Kolkata</h3>
              <div className="hospitals-grid">
                {hospitals.map((h) => (
                  <div className="hospital-tag" key={h}>{h}</div>
                ))}
              </div>

              <Link to="/contact" className="btn btn-primary mt-4">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY / HIGHLIGHTS ── */}
      <section className="section" style={{ background: 'var(--gray-50)' }} aria-labelledby="gallery-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Moments and Milestones</div>
            <h2 id="gallery-heading">A Glimpse Into Her Work</h2>
            <p>These images reflect both her professional excellence and her genuine dedication to her patients.</p>
          </div>

          {/* 3-column gallery */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}>
            {/* Card 1 — Award */}
            <figure style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-card)', margin: 0 }}>
              {imgAward ? (
                <img
                  src={imgAward}
                  alt="Dr. Khooshboo Agarwal, best gynecologist near me Kolkata, receiving felicitation at ENHANCE Advance USG Conference with Mankind Pharma"
                  title="Best Gyno Doctor Near Me in Kolkata – Dr. Khooshboo Agarwal at Medical Conference"
                  width="600" height="750"
                  loading="lazy"
                  style={{ width: '100%', height: '320px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
              ) : (
                <div style={{ height:'320px', background:'var(--ivory-deep)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontSize:'3rem', color:'var(--gold)' }}>K.A.</div>
              )}
              <figcaption style={{ padding: '16px', background: 'white', fontSize: '0.85rem', color: 'var(--gray-600)', fontWeight: 500 }}>
                Recognized at ENHANCE Advance USG Classes — a mark of her commitment to continuous medical education.
              </figcaption>
            </figure>

            {/* Card 2 — With Baby */}
            <figure style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-card)', margin: 0 }}>
              {imgWithBaby ? (
                <img
                  src={imgWithBaby}
                  alt="Dr. Khooshboo Agarwal, best lady gynecologist in Dumdum Kolkata, joyfully holding a newborn baby delivered under her care"
                  title="Best Lady Gynecologist Near Me Dumdum – Dr. Khooshboo Agarwal with Delivered Newborn"
                  width="760" height="1135"
                  loading="lazy"
                  style={{ width: '100%', height: '320px', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
                />
              ) : (
                <div style={{ height:'320px', background:'var(--ivory-deep)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontSize:'3rem', color:'var(--gold)' }}>K.A.</div>
              )}
              <figcaption style={{ padding: '16px', background: 'white', fontSize: '0.85rem', color: 'var(--gray-600)', fontWeight: 500 }}>
                Every delivery is a moment she treasures. Dr. Khooshboo with a newborn she delivered at her clinic.
              </figcaption>
            </figure>

            {/* Card 3 — Surgical Scrubs */}
            <figure style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-card)', margin: 0 }}>
              {imgSurgical ? (
                <img
                  src={imgSurgical}
                  alt="Dr. Khooshboo Agarwal, best gynecologist in Bidhannagar Saltlake Kolkata, holding a newborn baby"
                  title="Best Gynecologist in Bidhannagar and Saltlake Kolkata – Dr. Khooshboo Agarwal"
                  width="760" height="1280"
                  loading="lazy"
                  style={{ width: '100%', height: '320px', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
                />
              ) : (
                <div style={{ height:'320px', background:'var(--ivory)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontSize:'3rem', color:'var(--gold)' }}>K.A.</div>
              )}
              <figcaption style={{ padding: '16px', background: 'white', fontSize: '0.85rem', color: 'var(--gray-600)', fontWeight: 500 }}>
                Dr. Khooshboo welcoming a new life — a moment of pure joy and dedication.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── MS CERTIFICATE (Credentials Trust Section) ── */}
      <section className="section" aria-labelledby="credentials-heading">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
            <div>
              <div className="section-tag">Verified Credentials</div>
              <h2 id="credentials-heading">Qualifications You Can Trust</h2>
              <p>
                Dr. Khooshboo Agarwal's MS degree in Obstetrics and Gynaecology
                is from Gauhati Medical College (GMCH), Gauhati, Assam — one of
                India's premier government medical institutions. Her academic background
                reflects both rigor and commitment to the highest standards of women's healthcare.
              </p>
              <p>
                Combined with her practical training at IRM Kolkata in Infertility
                and ART, she is uniquely positioned to offer both comprehensive
                gynecological care and fertility solutions to women across Kolkata.
              </p>
              <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'MBBS – Assam Medical College, Dibrugarh',
                  'MS (Obs and Gynae) – GMCH, Gauhati (Assam)',
                  'Superspeciality training in Infertility and ART procedures – IRM Kolkata',
                  '8+ Years Clinical Experience in Kolkata',
                ].map((c) => (
                  <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: 'var(--gray-700)' }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1.1rem', fontFamily: 'var(--font-display)' }}>—</span>
                    {c}
                  </div>
                ))}
              </div>
            </div>

            {/* Certificate image — trust signal */}
            <figure style={{ margin: 0 }}>
              {imgCertificate ? (
                <img
                  src={imgCertificate}
                  alt="Official MS Obstetrics and Gynaecology degree certificate of Dr. Khooshboo Agarwal from Gauhati Medical College GMCH – best gynecologist in Bidhannagar Laketown Kolkata"
                  title="Dr. Khooshboo Agarwal MS Degree Certificate | Best Gynecologist Bidhannagar and Laketown"
                  width="760" height="1013"
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)', border: '2px solid var(--gray-100)' }}
                />
              ) : (
                <div style={{ background: 'var(--ivory)', borderRadius: 'var(--radius-md)', padding: '60px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '4rem', color: 'var(--gold)' }}>K.A.</div>
              )}
              <figcaption style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.82rem', color: 'var(--gray-400)', fontStyle: 'italic' }}>
                Original MS (Obstetrics and Gynaecology) Pass Certificate – GMCH, Gauhati (Assam)
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE HER ── */}
      <section className="section services-section" style={{ background: 'var(--gray-50)' }} aria-labelledby="why-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Why Patients Choose Her</div>
            <h2 id="why-heading">What Makes Dr. Khooshboo Different</h2>
          </div>
          <div className="grid-3">
            {[
              { title: 'She Listens Without Judging', desc: 'Whether it is a sensitive concern or a complicated diagnosis, Dr. Khooshboo creates a space where you feel heard, not hurried.' },
              { title: 'Evidence-Based Treatment', desc: 'Every treatment plan is grounded in current medical evidence. No unnecessary procedures, no guesswork.' },
              { title: 'Accessible Across Kolkata', desc: 'With consultations at 7 hospitals across Saltlake, Dumdum, Nagerbazar, and beyond, reaching her is simple.' },
              { title: 'Specializes in Women\'s Wellbeing', desc: 'From adolescent health to menopause, she understands the full arc of a woman\'s health journey.' },
              { title: 'Treats Couples, Not Just Patients', desc: 'In infertility cases, she works with both partners — understanding that fertility is a shared journey.' },
              { title: 'Continuously Updating Skills', desc: 'As seen at ENHANCE USG Classes and IRM training, she constantly upgrades her clinical knowledge.' },
            ].map((item, i) => (
              <div className="card" key={item.title}>
                <div className="card-icon" aria-hidden="true" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold)' }}>{String(i + 1).padStart(2, '0')}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section faq-section" aria-labelledby="about-faq-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Questions and Answers</div>
            <h2 id="about-faq-heading">About Dr. Khooshboo Agarwal</h2>
          </div>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <FAQ items={aboutFaqs} />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-sm">
        <div className="container">
          <div className="highlight-box">
            <h2>Looking for the Best Gynecologist in Kolkata?</h2>
            <p>Get in touch with Dr. Khooshboo Agarwal at a hospital near you in Saltlake, Dumdum, Laketown, or Nagerbazar.</p>
            <Link to="/contact" className="btn-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
