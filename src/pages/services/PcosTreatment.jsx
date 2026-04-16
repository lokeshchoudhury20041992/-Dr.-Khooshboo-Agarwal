import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function PcosTreatment() {
  return (
    <>
      <Helmet>
        <title>PCOS Treatment in Kolkata | Dr. Khooshboo Agarwal | Saltlake, Dumdum</title>
        <meta name="description" content="Expert PCOS management in Kolkata by Dr. Khooshboo Agarwal. Hormonal treatment, lifestyle guidance and PCOS-related infertility care in Saltlake, Dumdum and Nagerbazar." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/services/pcos-treatment" />
      </Helmet>
      <ServicePageTemplate
        hero={{
          tag: 'Hormonal Health',
          heading: 'PCOS Treatment in Kolkata',
          subtitle: 'PCOS affects nearly 1 in 5 Indian women. It is manageable — and Dr. Khooshboo Agarwal will show you how, step by step.',
          title: 'PCOS Treatment',
        }}
        intro={{
          heading: 'Understanding PCOS: More Than Just Irregular Periods',
          paragraphs: [
            'Polycystic Ovary Syndrome (PCOS) is a hormonal condition where the ovaries produce excess androgens, leading to a range of symptoms. Many women know it causes irregular periods — but PCOS also affects weight, mood, skin, fertility, and long-term metabolic health.',
            'Dr. Khooshboo Agarwal\'s approach to PCOS goes beyond treating the symptoms. She investigates the root hormonal imbalance, provides a specific PCOS Diet and Lifestyle plan, and creates a management plan that works for your life — not just your lab reports.',
          ],
          highlights: [
            { icon: '📋', title: 'Comprehensive Hormonal Work-Up', desc: 'LH, FSH, testosterone, insulin, thyroid — a full picture before any treatment.' },
            { icon: '⚖️', title: 'Weight & Insulin Resistance', desc: 'Addressing the metabolic root of PCOS alongside the gynecological symptoms.' },
            { icon: '🌸', title: 'Fertility Preservation', desc: 'For women wanting to conceive, early PCOS management protects future fertility.' },
            { icon: '💊', title: 'Evidence-Based Medication', desc: 'Oral contraceptives, metformin, clomiphene — prescribed only when clinically indicated.' },
          ],
        }}
        sections={[
          {
            heading: 'Signs You Might Have PCOS',
            subheading: 'Many women live with PCOS for years without realising it. These are the most common signs.',
            type: 'grid',
            items: [
              { icon: '📅', title: 'Irregular or Absent Periods', desc: 'Cycles shorter than 21 days or longer than 35 days, or periods that simply stop.' },
              { icon: '🪮', title: 'Excess Hair Growth (Hirsutism)', desc: 'Facial hair, chest hair, or hair in unexpected places due to high androgens.' },
              { icon: '🤚', title: 'Persistent Acne', desc: 'Hormonal acne on the jawline and chin that does not respond to regular skincare.' },
              { icon: '⚖️', title: 'Unexplained Weight Gain', desc: 'Especially around the abdomen — driven by insulin resistance, not just diet.' },
              { icon: '🌸', title: 'Difficulty Getting Pregnant', desc: 'PCOS is one of the most common causes of anovulatory infertility.' },
              { icon: '😴', title: 'Fatigue & Mood Changes', desc: 'Often linked to insulin swings and hormonal fluctuations throughout the day.' },
            ],
          },
        ]}
        faqs={[
          { question: 'Can PCOS be cured?', answer: 'PCOS cannot be permanently cured, but it can be very well managed. With the right treatment, most women with PCOS achieve regular periods, better hormonal balance, and — when desired — successful pregnancy.' },
          { question: 'Does PCOS cause infertility?', answer: 'PCOS is one of the most common causes of female infertility, but most women with PCOS can conceive with the right treatment. Dr. Khooshboo offers ovulation induction, lifestyle interventions, and IVF Treatment if needed.' },
          { question: 'Can a slim woman have PCOS?', answer: 'Yes. While weight gain is common with PCOS, lean PCOS exists and is equally disruptive. Hormone levels and ultrasound findings confirm the diagnosis regardless of weight.' },
          { question: 'What is the best PCOS doctor in Kolkata near Saltlake and Dumdum?', answer: 'Dr. Khooshboo Agarwal consults at ILS Saltlake, ILS Nagerbazar, and other Kolkata hospitals — making her one of the most accessible and experienced PCOS specialists for patients from Saltlake, Dumdum, Laketown, and Bidhannagar.' },
        ]}
        relatedServices={[
          { slug: 'infertility-treatment', icon: '🌸', title: 'Infertility Treatment', shortDesc: 'For PCOS-related difficulty conceiving.' },
          { slug: 'preconception-counselling', icon: '💑', title: 'Preconception Counselling', shortDesc: 'Prepare your body before trying for a baby.' },
        ]}
      />
    </>
  )
}
