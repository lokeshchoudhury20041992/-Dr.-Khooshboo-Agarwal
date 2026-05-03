import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function PreconceptionCounselling() {
  return (
    <>
      <Helmet>
        <title>Preconception Counselling in Kolkata | Dr. Khooshboo Agarwal</title>
        <meta name="description" content="Preconception counselling with Dr. Khooshboo Agarwal in Kolkata. Plan for a healthy pregnancy with targeted medical, nutritional and lifestyle guidance before conception." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/services/preconception-counselling" />
      </Helmet>
      <ServicePageTemplate
        hero={{ tag: 'Family Planning', heading: 'Preconception Counselling in Kolkata', subtitle: 'The healthiest pregnancies often begin before conception. Let Dr. Khooshboo Agarwal help you prepare your body and your mind for the journey ahead.', title: 'Preconception Counselling' }}
        intro={{
          heading: 'Why Preconception Counselling Matters',
          paragraphs: [
            'Most women see a doctor only after they discover they are pregnant. But the first 8–10 weeks of pregnancy — before many women even know — are among the most critical for fetal development. Preconception counselling addresses health issues before they can affect your pregnancy.',
            'Dr. Khooshboo Agarwal\'s preconception consultations cover your medical history, nutritional status, vaccinations, genetic risk factors, lifestyle habits, and any existing conditions like PCOS, thyroid disease, or diabetes that need to be optimized before conception.',
          ],
          highlights: [
            { icon: '💊', title: 'Folic Acid and Nutritional Guidance', desc: 'Starting folic acid before pregnancy significantly reduces neural tube defects.' },
            { icon: '🧬', title: 'Genetic Counselling', desc: 'For couples with family history of inherited conditions or previous pregnancy losses.' },
            { icon: '🩺', title: 'Medical Condition Optimization', desc: 'Conditions like thyroid disease and diabetes need to be well-controlled before conception.' },
            { icon: '💉', title: 'Pre-Pregnancy Vaccinations', desc: 'Rubella, Hepatitis B, and other vaccines that safeguard pregnancy are reviewed.' },
          ],
        }}
        faqs={[
          { question: 'When should I start preconception counselling?', answer: 'Ideally 3–6 months before you plan to start trying. This gives enough time to address any health issues, optimize your nutrition, and ensure your body is ready for pregnancy.' },
          { question: 'Is preconception counselling only for women?', answer: 'No. Dr. Khooshboo encourages both partners to attend — male health also affects conception and early fetal development through sperm quality.' },
          { question: 'Is preconception counselling available in Saltlake and Dumdum?', answer: 'Yes. Dr. Khooshboo Agarwal consults at ILS Saltlake, ILS Nagerbazar, and other Kolkata hospitals — accessible from Saltlake, Bidhannagar, Dumdum, and Laketown.' },
        ]}
        relatedServices={[{ slug: 'high-risk-pregnancy', icon: '🤰', title: 'High-Risk Pregnancy', shortDesc: 'If your pregnancy is expected to be high-risk.' }, { slug: 'infertility-treatment', icon: '🌸', title: 'Infertility Treatment', shortDesc: 'For couples having difficulty conceiving.' }]}
      />
    </>
  )
}
