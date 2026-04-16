# Dr. Khooshboo Agarwal — Medical Website

**A full-featured React + Vite + Supabase medical website for Dr. Khooshboo Agarwal, Obstetrician, Gynecologist and Infertility Specialist in Kolkata.**

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite 5 |
| Routing | React Router v6 |
| Database | Supabase (PostgreSQL) |
| Styling | Vanilla CSS (Custom Design System) |
| SEO | react-helmet-async + JSON-LD Schema |
| Deployment | Any static host (Vercel / Netlify recommended) |

---

## Project Structure

```
Dr.Khooshoo Agarwal/
├── public/
│   ├── robots.txt          ← AI & search crawler config
│   ├── sitemap.xml         ← All 28 pages indexed
│   └── favicon.svg
├── src/
│   ├── assets/             ← Doctor images (see rename guide below)
│   ├── components/
│   │   ├── Layout.jsx      ← Navbar + Footer + WhatsApp float
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── FAQ.jsx         ← Accessible accordion
│   │   └── ServicePageTemplate.jsx
│   ├── data/
│   │   ├── blogs.js        ← All 15 blog articles metadata
│   │   ├── services.js     ← Services + hospital data
│   │   └── images.js       ← SEO image catalog
│   ├── lib/
│   │   └── supabase.js     ← Supabase client + form helpers
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx       ← Large left-aligned doctor photo
│   │   ├── Services.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx     ← Supabase appointment form
│   │   ├── services/       ← 8 service sub-pages
│   │   └── blog/
│   │       └── BlogPost.jsx ← Dynamic blog route
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html              ← Root HTML with full SEO schema
├── vite.config.js
├── package.json
├── .env.local              ← Supabase credentials (do not commit)
└── README.md
```

---

## Quick Start

### 1. Install dependencies

```bash
npm_config_cache=/tmp/npm-cache npm install
```

> Note: The `npm_config_cache` prefix bypasses the root-owned npm cache issue on this Mac.

### 2. Set up Supabase

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Create a new project
3. Run this SQL in the Supabase SQL editor:

```sql
-- Appointments table
CREATE TABLE appointments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  service text,
  preferred_date date,
  message text,
  status text DEFAULT 'pending'
);

-- Contact messages table
CREATE TABLE contact_messages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  message text NOT NULL
);

-- Enable Row Level Security and allow inserts from anon
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON appointments FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow public insert" ON contact_messages FOR INSERT TO anon WITH CHECK (true);
```

4. Copy your Supabase URL and anon key into `.env.local`:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Add Doctor Images

Rename and copy the 5 doctor photos into `src/assets/`:

| Source | Renamed File |
|---|---|
| Profile photo (blue scrubs + stethoscope) | `dr-khooshboo-agarwal-gynecologist-near-me-kolkata.jpg` |
| Surgical scrubs + cap (Maatritva logo) | `best-gynecologist-saltlake-bidhannagar-dr-khooshboo-agarwal-surgery.jpg` |
| Holding newborn (orange saree) | `best-lady-gynecologist-dumdum-kolkata-dr-khooshboo-agarwal-newborn-delivery.jpg` |
| Award ceremony (ENHANCE USG conference) | `dr-khooshboo-agarwal-best-gyno-doctor-kolkata-award-enhance-usb-conference.jpg` |
| MS degree certificate (SSUHS) | `dr-khooshboo-agarwal-ms-obstetrics-gynaecology-degree-certificate-ssuhs.jpg` |

### 4. Run dev server

```bash
npm_config_cache=/tmp/npm-cache npm run dev
```

App will open at `http://localhost:3000`

---

## Pages & Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Dr. Khooshboo |
| `/services` | Services Overview |
| `/blog` | Blog Hub (15 articles) |
| `/contact` | Book Appointment |
| `/services/high-risk-pregnancy` | High-Risk Pregnancy |
| `/services/painless-delivery` | Normal & Painless Delivery |
| `/services/pcos-treatment` | PCOS Treatment |
| `/services/infertility-treatment` | Infertility & ART |
| `/services/preconception-counselling` | Preconception Counselling |
| `/services/contraception` | Contraception |
| `/services/sexual-health` | Sexual Health |
| `/services/vaginal-infections` | Vaginal Infections |
| `/blog/:slug` | Dynamic blog article (15 slugs) |

---

## SEO Implementation

### Primary Keywords Targeted
- `best gynecologist in Kolkata`
- `gynecologist near me`
- `best lady gynecologist near me`
- `best gynecologist in Saltlake`
- `best gynecologist in Bidhannagar`
- `best gynecologist in Dumdum`
- `best gynecologist in Laketown`
- `best gyno doctor near me`
- `PCOS treatment Kolkata`
- `infertility specialist Kolkata`
- `pregnancy doctor Kolkata`

### Schema.org Implemented
- `Physician` (index.html)
- `MedicalBusiness` (index.html)
- `Article` (all blog pages)
- `FAQPage` (all blog + service pages)

### Image SEO
All 5 doctor images have:
- SEO-keyword-rich filenames
- Unique, descriptive `alt` attributes
- Hyperlocal keywords (Saltlake, Bidhannagar, Dumdum, Laketown, Nagerbazar)
- `title` attributes for hover tooltips
- Correct `width`/`height` to prevent layout shift

### AI Search Optimization (robots.txt)
The following AI crawlers are explicitly allowed in `public/robots.txt`:
- GPTBot (ChatGPT)
- ClaudeBot (Anthropic)
- PerplexityBot
- Google-Extended (AI Overviews)
- OAI-SearchBot
- YouBot, cohere-ai, CCBot

---

## Social Media Content

### For each blog, post the following:

#### LinkedIn (Authority tone)
> "Many women visit a gynecologist only when something feels wrong. But preventive care — regular check-ups, preconception counselling, PCOS monitoring — can prevent most of those 'something is wrong' moments altogether. [Link to relevant blog post] — Dr. Khooshboo Agarwal, Gynecologist in Kolkata"

#### Facebook (Relatable)
> "Are your periods always irregular? You are not imagining it. PCOS affects 1 in 5 Indian women — but most go undiagnosed for years. A simple hormone test can give you answers. Book a consultation: [link]"

#### Reddit-style (r/TryingForABaby or r/WomensHealth)
> "Posting in case this helps someone. After 14 months of trying and three doctors telling me 'just wait', I finally saw a fertility specialist who actually did a full work-up. Turns out I had PCOS and my husband had mild oligospermia. We're now 10 weeks pregnant after IUI. Don't wait too long."

---

## Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy dist/ folder to Vercel
```

Add environment variables in Vercel dashboard:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### Update Canonical URLs
Before deploying, replace `https://www.drkhooshbooagarwal.com` in:
- `index.html`
- All page `<Helmet>` canonical tags
- `public/sitemap.xml`
- `public/robots.txt`

with the actual live domain.

---

## Contact Details to Update

Search for `XXXXXXXXXX` in the codebase and replace with the actual WhatsApp/phone number:
- `src/components/Layout.jsx` (WhatsApp floating button)
- `src/pages/Contact.jsx` (WhatsApp link)

---

*Built with React + Vite + Supabase. Optimized for Google Search, AI answer engines, and local Kolkata SEO.*
# -Dr.-Khooshboo-Agarwal
