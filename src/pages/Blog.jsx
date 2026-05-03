import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { blogPosts } from '../data/blogs'

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Women's Health Blog | Dr. Khooshboo Agarwal | Gynecologist Kolkata</title>
        <meta name="description" content="Medically accurate articles on PCOS, pregnancy, infertility, sexual health, and more — written by Dr. Khooshboo Agarwal, gynecologist in Kolkata." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/blog" />
      </Helmet>

      <header className="page-hero" aria-labelledby="blog-hero-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>›</span> <span>Blog</span>
          </nav>
          <div className="section-tag">Health Library</div>
          <h1 id="blog-hero-heading">Women's Health Articles</h1>
          <p style={{ maxWidth: '560px', margin: '16px auto 0', fontSize: '1.1rem' }}>
            Real answers to the questions Kolkata women are Googling — written with medical accuracy and zero judgment.
          </p>
        </div>
      </header>

      <section className="section" aria-label="All blog articles">
        <div className="container">
          <div className="grid-3">
            {blogPosts.map((post) => (
              <article className="blog-card" key={post.slug}>
                <div
                  className="blog-card-img"
                  style={{ background: 'linear-gradient(135deg, var(--forest-light), var(--forest))' }}
                  aria-hidden="true"
                >
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--gold)', opacity: 0.5 }}>{post.emoji}</span>
                </div>
                <div className="blog-card-body">
                  <span className="blog-tag">{post.category}</span>
                  <h2 style={{ fontSize: '1.05rem', marginBottom: '10px', lineHeight: '1.4', fontFamily: 'var(--font-heading)' }}>
                    <Link to={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h2>
                  <p style={{ fontSize: '0.88rem', marginBottom: '16px' }}>{post.excerpt.slice(0, 120)}…</p>
                  <div className="blog-meta">
                    <span style={{ color: 'var(--gray-500)' }}>{post.date}</span>
                    <span style={{ color: 'var(--gray-500)' }}>{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="read-more" style={{ display: 'block', marginTop: '14px' }}>
                    Read article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
