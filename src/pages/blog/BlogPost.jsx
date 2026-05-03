import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import FAQ from '../../components/FAQ'
import { getBlogBySlug, blogPosts } from '../../data/blogs'

// Full blog article content mapped by slug
const blogContent = {
  'irregular-period-normal': {
    faqs: [
      { question: 'How late is too late for a period?', answer: 'A period that is more than 7 days late on a regular basis (not due to pregnancy or a one-off stressor) may warrant investigation. Cycles shorter than 21 days or longer than 35 days consistently are considered irregular.' },
      { question: 'Can stress cause irregular periods?', answer: 'Yes. Emotional and physical stress can disrupt the hormonal axis that controls your menstrual cycle. However, if stress resolves and irregularity persists, other causes like PCOS or thyroid dysfunction should be ruled out.' },
      { question: 'When should I see a gynecologist for irregular periods?', answer: 'If your periods have been irregular for 3 or more consecutive cycles, if you are missing periods and not pregnant, or if the irregularity is accompanied by other symptoms like hair loss, acne, or weight gain — it is time to see a gynecologist.' },
    ],
    body: `
      <h2>What Does an Irregular Period Actually Mean?</h2>
      <p>A normal menstrual cycle falls between 21 and 35 days in length, with bleeding lasting 3 to 7 days. Anything consistently outside these ranges — or cycles that vary wildly from month to month — qualifies as irregular.</p>
      <p>Occasional variation is completely normal. Stress, travel, illness, significant weight change, or even a new medication can briefly disrupt your cycle. What matters is whether the irregularity is a pattern.</p>

      <h2>Common Causes of Irregular Periods</h2>
      <p>The most frequent causes of irregular periods include:</p>
      <ul>
        <li><strong>PCOS (Polycystic Ovary Syndrome):</strong> One of the leading causes of irregular or absent periods in reproductive-age women. PCOS disrupts ovulation, making cycles unpredictable.</li>
        <li><strong>Thyroid dysfunction:</strong> Both hypothyroidism and hyperthyroidism can alter the frequency and flow of periods.</li>
        <li><strong>Stress:</strong> High cortisol levels can suppress the reproductive hormonal axis, delaying ovulation and therefore periods.</li>
        <li><strong>Extreme weight loss or gain:</strong> Body fat plays a role in oestrogen production. Significant changes can disrupt the cycle.</li>
        <li><strong>Perimenopause:</strong> For women in their 40s, irregular periods can signal the beginning of the perimenopausal transition.</li>
      </ul>

      <h2>When Should You Be Concerned?</h2>
      <div class="article-callout"><p>If your periods have been consistently irregular for more than 3 months, if you have missed 3 or more consecutive periods and are not pregnant, or if the irregularity comes with pain, unusual discharge, or other symptoms — please see a gynecologist.</p></div>

      <h2>What Will a Doctor Do?</h2>
      <p>Dr. Khooshboo Agarwal begins with a detailed menstrual history, followed by hormone blood tests (FSH, LH, oestrogen, thyroid), and often a pelvic ultrasound. This gives a clear picture of what is happening and why — so treatment can be targeted, not guesswork.</p>

      <h2>Getting Treatment in Kolkata</h2>
      <p>If you are experiencing irregular periods and are in Kolkata — whether in Saltlake, Dumdum, Bidhannagar, Laketown, or New Town — Dr. Khooshboo Agarwal is available for consultations at ILS Saltlake, ILS Nagerbazar, and other hospitals across the city.</p>
    `,
  },
  'pain-during-sex-normal': {
    faqs: [
      { question: 'Is some pain during sex normal?', answer: 'Mild initial discomfort with first-time sex or after a long gap can be normal. But regular, significant pain during intercourse is not normal and should be evaluated by a gynecologist.' },
      { question: 'What causes pain during sex in women?', answer: 'Common causes include vaginismus (muscle spasm), vaginal dryness (especially post-menopause or post-delivery), endometriosis, pelvic inflammatory disease, vaginal infections, or ovarian cysts. Each has different treatment.' },
      { question: 'Can vaginismus be cured?', answer: 'Vaginismus responds very well to treatment. A combination of pelvic floor physiotherapy, counselling, and sometimes medical management leads to resolution in the majority of cases. You do not have to live with it.' },
    ],
    body: `
      <h2>You Are Not Alone</h2>
      <p>Studies suggest that up to 75% of women experience pain during sex at some point in their lives. Yet most never mention it to a doctor — out of embarrassment, or because they have been told it is "normal". It is not something you have to accept.</p>

      <h2>Understanding Dyspareunia</h2>
      <p>The medical term for pain during sex in women is <strong>dyspareunia</strong>. It can be:</p>
      <ul>
        <li><strong>Superficial:</strong> Pain at the vaginal opening, often caused by infections, dryness, or vaginismus.</li>
        <li><strong>Deep:</strong> Pain felt deep in the pelvis during penetration, which can point to endometriosis, ovarian cysts, or PID.</li>
      </ul>

      <h2>What Is Vaginismus?</h2>
      <p>Vaginismus is an involuntary contraction of the muscles around the vaginal opening in response to attempted penetration. It can be so severe that any penetration is impossible — including tampon use or gynaecological examinations.</p>
      <div class="article-callout"><p>Vaginismus is not a character flaw or a sign of abnormality. It is a recognised medical condition that responds well to treatment.</p></div>

      <h2>What to Expect at a Consultation</h2>
      <p>Dr. Khooshboo Agarwal creates a safe, non-judgmental space to discuss sexual health. She will take a detailed history, perform a gentle examination (only with your consent and at your pace), and order relevant tests to identify the underlying cause.</p>
      <p>Treatment is tailored to the diagnosis — whether that is treating an infection, prescribing local oestrogen for dryness, referral to a pelvic physiotherapist for vaginismus, or addressing the hormonal root cause.</p>
    `,
  },
  'signs-you-need-infertility-treatment': {
    faqs: [
      { question: 'How long should we try before seeing a fertility specialist?', answer: 'Under 35: Try for 12 months, then seek help. Over 35: Seek evaluation after 6 months. If you have known conditions like PCOS, blocked tubes, or irregular periods, consult a specialist sooner.' },
      { question: 'Is infertility always a female issue?', answer: 'No. Male factors account for approximately 40–50% of infertility cases. Dr. Khooshboo evaluates both partners as standard practice.' },
      { question: 'What is the first step in infertility evaluation?', answer: 'Typically, a semen analysis for the male partner and a hormonal blood panel, pelvic ultrasound, and assessment of tube patency (HSG or laparoscopy) for the female partner.' },
    ],
    body: `
      <h2>When Trying Becomes Trying</h2>
      <p>Most healthy couples under 35 will conceive within 12 months of trying. If that is not happening for you, it is not a reflection of anything you did wrong — it is a medical issue that deserves proper investigation.</p>

      <h2>Signs You May Need Infertility Treatment</h2>
      <ul>
        <li>No conception after 12 months of regular, unprotected intercourse (or 6 months if you are over 35)</li>
        <li>Diagnosed with PCOS, endometriosis, or blocked fallopian tubes</li>
        <li>Irregular or absent periods (which signals ovulation problems)</li>
        <li>History of two or more miscarriages</li>
        <li>Previous pelvic infection or abdominal surgery</li>
        <li>Known low sperm count or sperm motility issues in the male partner</li>
      </ul>

      <h2>The Evaluation Process with Dr. Khooshboo</h2>
      <p>Dr. Khooshboo Agarwal trained at IRM Kolkata in advanced fertility evaluation and ART. She begins every fertility work-up by evaluating both partners simultaneously — a semen analysis for the male partner and hormonal evaluation, ultrasound, and tube assessment for the female partner.</p>
      <p>Once the cause is identified, she maps out a step-wise treatment plan starting from the least invasive option appropriate for the diagnosis.</p>

      <h2>Hope Is Realistic</h2>
      <div class="article-callout"><p>The vast majority of couples who seek timely help for infertility do go on to have children — through treatment, lifestyle changes, or a combination of both. Do not wait too long before seeking help.</p></div>
    `,
  },
  'best-gynecologist-kolkata-guide': {
    faqs: [
      { question: 'Who is the best lady gynecologist in Kolkata?', answer: 'Dr. Khooshboo Agarwal is widely regarded as one of the best lady gynecologists in Kolkata. She is an MS-qualified Obstetrician, Gynecologist and Infertility Specialist practising at multiple hospitals across the city including ILS Saltlake, ILS Nagerbazar, IRM Kolkata, Care Hospital, and more.' },
      { question: 'Which is the best gynecology clinic near Dumdum and Saltlake?', answer: 'Dr. Khooshboo Agarwal consults at ILS Saltlake (near Bidhannagar) and ILS Nagerbazar (near Dumdum) among other locations — making her one of the most accessible gynecologists for patients in these areas.' },
      { question: 'What should I look for in a gynecologist?', answer: 'Look for formal qualifications (MBBS + MS or MD in Obs and Gynae), hospital affiliations, experience in your specific concern (pregnancy, PCOS, infertility etc.), and most importantly, a doctor who makes you feel heard and comfortable.' },
      { question: 'Which is the best gynecologist in Laketown?', answer: 'Dr. Khooshboo Agarwal, though primarily associated with hospitals in Saltlake and Nagerbazar, serves patients from Laketown who travel a short distance for her care. She is one of the top-rated gynecologists in the greater Dumdum and North Kolkata area.' },
    ],
    body: `
      <h2>Why Choosing the Right Gynecologist Matters</h2>
      <p>A gynecologist is not just a specialist you visit when something is wrong. For most women, she becomes a long-term healthcare partner — someone who knows your history, understands your concerns, and helps you navigate everything from your first period to menopause.</p>
      <p>Choosing the right one — especially in a large city like Kolkata — deserves some thought.</p>

      <h2>What to Look For in a Gynecologist</h2>
      <ul>
        <li><strong>Qualifications:</strong> An MBBS followed by an MS or MD in Obstetrics and Gynaecology from a recognized university. Additional superspeciality training in infertility and ART procedures is a strong advantage.</li>
        <li><strong>Hospital affiliations:</strong> A doctor who consults at reputed, well-equipped hospitals is better placed to handle emergencies and complex cases.</li>
        <li><strong>Specialization match:</strong> If you need infertility help, find someone trained in fertility — not just a general gynecologist.</li>
        <li><strong>Communication style:</strong> Do you feel heard? Are your questions answered clearly? This matters enormously in healthcare.</li>
        <li><strong>Accessibility:</strong> In a city like Kolkata, a doctor who consults at multiple locations is practically more accessible.</li>
      </ul>

      <h2>Why Patients Choose Dr. Khooshboo Agarwal</h2>
      <p>Dr. Khooshboo Agarwal is an MS-qualified Obstetrician, Gynecologist and Infertility Specialist with over 8 years of experience. She trained at the Institute of Reproductive Medicine (IRM) Kolkata for advanced ART skills and consults at 7+ hospitals across the city.</p>
      <p>But more than her qualifications, patients consistently mention how she makes them feel at ease, explains things in plain language, and never makes them feel rushed or judged.</p>

      <h2>Serving Women Across Kolkata</h2>
      <p>Whether you are in Saltlake, Bidhannagar, Dumdum, Laketown, Nagerbazar, New Town, or central Kolkata — Dr. Khooshboo Agarwal is likely practising at a hospital near you.</p>
    `,
  },
}

// Generic blog body for articles without custom content
function getGenericBody(post) {
  return `
    <h2>Introduction</h2>
    <p>${post.excerpt}</p>
    <h2>What You Need to Know</h2>
    <p>This is an important topic that affects many women in Kolkata and across India. Understanding the basics helps you recognize when to seek professional help — and what to expect when you do.</p>
    <h2>When to See Dr. Khooshboo Agarwal</h2>
    <p>If you have concerns related to ${post.category.toLowerCase()}, Dr. Khooshboo Agarwal offers compassionate, expert care at clinics across Kolkata including ILS Saltlake, ILS Nagerbazar, IRM Kolkata, and more.</p>
    <div class="article-callout"><p>Early consultation leads to better outcomes. Do not wait for symptoms to worsen — get in touch with us today.</p></div>
    <h2>Serving Patients Across Kolkata</h2>
    <p>Dr. Khooshboo Agarwal sees patients from Saltlake, Bidhannagar, Dumdum, Laketown, Nagerbazar, New Town and the wider Kolkata metropolitan area.</p>
  `
}

let imgProfile
try { imgProfile = new URL('../../assets/khushboo.jpg', import.meta.url).href } catch (_) { imgProfile = null }

export default function BlogPost() {
  const { slug } = useParams()
  const post = getBlogBySlug(slug)

  if (!post) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
        <h1>Article Not Found</h1>
        <p>Sorry, this article does not exist.</p>
        <Link to="/blog" className="btn btn-primary" style={{ display: 'inline-flex', marginTop: '24px' }}>Back to Blog</Link>
      </div>
    )
  }

  const content = blogContent[slug]
  const body = post.content || content?.body || getGenericBody(post)
  const faqs = content?.faqs || []

  return (
    <>
      <Helmet>
        <title>{post.title} | Dr. Khooshboo Agarwal | Gynecologist Kolkata</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        <link rel="canonical" href={`https://www.drkhooshbooagarwal.com/blog/${slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "description": post.metaDescription,
          "datePublished": new Date(post.date).toISOString(),
          "author": { "@type": "Person", "name": "Dr. Khooshboo Agarwal", "jobTitle": "Obstetrician and Gynecologist" },
          "publisher": { "@type": "Organization", "name": "Dr. Khooshboo Agarwal Clinic" },
          "keywords": post.tags.join(', '),
        })}</script>
        {faqs.length > 0 && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": { "@type": "Answer", "text": f.answer },
            })),
          })}</script>
        )}
      </Helmet>

      {/* Article Header */}
      <header style={{ paddingTop: '96px', paddingBottom: '48px', background: 'linear-gradient(135deg, var(--off-white), var(--rose-pale))' }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>›</span>
            <Link to="/blog">Blog</Link> <span>›</span>
            <span>{post.category}</span>
          </nav>
          <span className="blog-tag" style={{ marginTop: '16px', display: 'inline-block' }}>{post.category}</span>
          <h1 style={{ marginTop: '14px', marginBottom: '20px', maxWidth: '720px' }}>{post.title}</h1>
          <div className="blog-meta">
            <span style={{ color: 'var(--gray-500)' }}>{post.date}</span>
            <span style={{ color: 'var(--gray-500)' }}>{post.readTime}</span>
            <span style={{ color: 'var(--gray-500)' }}>By Dr. Khooshboo Agarwal</span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <section className="section" aria-label="Article content">
        <div className="container">
          <div className="article-body">
            {/* Author box */}
            <div className="author-box" style={{ marginBottom: '40px', marginTop: 0 }}>
              <div className="avatar">
                {imgProfile
                  ? <img src={imgProfile} alt="Dr. Khooshboo Agarwal – best gynecologist near me in Kolkata" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  : <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--gold)' }}>K.A.</span>
                }
              </div>
              <div>
                <h5>Dr. Khooshboo Agarwal</h5>
                <p>MS (Obs and Gynae) · Obstetrician, Gynecologist and Infertility Specialist in Kolkata. Trained at IRM Kolkata. Consulting at ILS Saltlake, ILS Nagerbazar, Care Hospital, and more.</p>
              </div>
            </div>

            {/* Article content */}
            <div dangerouslySetInnerHTML={{ __html: body }} />

            {/* Article tags */}
            <div style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {post.tags.map((tag) => (
                <span key={tag} style={{ background: 'var(--ivory)', color: 'var(--forest)', fontSize: '0.78rem', fontWeight: 600, padding: '4px 12px', borderRadius: '0' }}>
                  #{tag}
                </span>
              ))}
            </div>

            {/* Internal links */}
            {post.linkedServices && post.linkedServices.length > 0 && (
              <div style={{ marginTop: '36px', padding: '24px', background: 'var(--ivory)', borderRadius: 'var(--radius-md)', borderLeft: '2px solid var(--gold)' }}>
                <h4 style={{ color: 'var(--forest)', marginBottom: '12px', fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>Related Services by Dr. Khooshboo Agarwal</h4>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {post.linkedServices.map((link) => (
                    <Link key={link} to={link} className="btn btn-sm btn-teal">{link.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* FAQ */}
          {faqs.length > 0 && (
            <div style={{ maxWidth: '760px', margin: '60px auto 0' }}>
              <div className="section-tag text-center" style={{ marginBottom: '24px' }}>FAQ</div>
              <h2 className="text-center" style={{ marginBottom: '32px' }}>Common Questions</h2>
              <FAQ items={faqs} />
            </div>
          )}

          {/* CTA */}
          <div style={{ maxWidth: '760px', margin: '60px auto 0' }}>
            <div className="highlight-box">
              <h2>Have a Question for Dr. Khooshboo?</h2>
              <p>Get in touch and get expert guidance tailored to your situation.</p>
              <Link to="/contact" className="btn-white">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section services-section" aria-label="Related articles">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Keep Reading</div>
            <h2>Related Articles</h2>
          </div>
          <div className="grid-3">
            {blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3).concat(
              blogPosts.filter((p) => p.slug !== slug && p.category !== post.category)
            ).slice(0, 3).map((related) => (
              <article className="blog-card" key={related.slug}>
                <div className="blog-card-img" style={{ background: 'linear-gradient(135deg, var(--forest-light), var(--forest))' }} aria-hidden="true">
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--gold)', opacity: 0.5 }}>{related.emoji}</span>
                </div>
                <div className="blog-card-body">
                  <span className="blog-tag">{related.category}</span>
                  <h3><Link to={`/blog/${related.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{related.title}</Link></h3>
                  <Link to={`/blog/${related.slug}`} className="read-more">Read article →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
