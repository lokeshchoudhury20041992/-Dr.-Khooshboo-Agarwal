import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function Contraception() {
  return (
    <>
      <Helmet>
        <title>Contraception Guidance in Kolkata | Dr. Khooshboo Agarwal</title>
        <meta name="description" content="Evidence-based contraception advice from Dr. Khooshboo Agarwal in Kolkata. Pills, IUDs, implants, and more — explained clearly so you can make the right choice for your body." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/services/contraception" />
      </Helmet>
      <ServicePageTemplate
        hero={{ tag: 'Family Planning', heading: 'Contraception Guidance in Kolkata', subtitle: 'Birth control is a deeply personal decision. Dr. Khooshboo Agarwal gives you honest, unbiased information so you can choose what works for your body and your life.', title: 'Contraception' }}
        intro={{
          heading: 'Choosing the Right Contraception for You',
          paragraphs: [
            'There is no one-size-fits-all contraceptive. The best option depends on your age, health history, relationship status, whether you want children in the future, and your lifestyle. Dr. Khooshboo Agarwal walks you through every option without judgment.',
            'She is available at clinics across Kolkata including Saltlake, Nagerbazar, and Care Hospital for a confidential discussion about your contraceptive needs.',
          ],
          highlights: [
            { icon: '💊', title: 'Oral Contraceptive Pills', desc: 'Highly effective when taken consistently — with additional non-contraceptive benefits for PCOS and period pain.' },
            { icon: '🔩', title: 'Intrauterine Devices (IUD/IUCD)', desc: 'Copper IUDs (non-hormonal) and hormonal IUDs like Mirena — excellent long-term options.' },
            { icon: '💉', title: 'Injectable Contraceptives', desc: 'A quarterly injection for women who prefer not to take daily pills.' },
            { icon: '🛡️', title: 'Emergency Contraception', desc: 'Explained clearly, without judgment — what it is, how it works, and when it is appropriate.' },
          ],
        }}
        faqs={[
          { question: 'Which contraceptive is safest for long-term use?', answer: 'Long-acting reversible contraceptives (LARCs) like IUDs and implants are among the most effective and safe for long-term use. Dr. Khooshboo will discuss which is best based on your individual health profile.' },
          { question: 'Does the contraceptive pill affect future fertility?', answer: 'No. Fertility typically returns within 1–3 months after stopping the pill. Dr. Khooshboo explains this clearly so you can plan ahead confidently.' },
          { question: 'Is contraception counselling confidential?', answer: 'Absolutely. Your consultation with Dr. Khooshboo Agarwal is completely private and confidential.' },
        ]}
        relatedServices={[{ slug: 'preconception-counselling', icon: '💑', title: 'Preconception Counselling', shortDesc: 'When you are ready to consider pregnancy.' }, { slug: 'sexual-health', icon: '💬', title: 'Sexual Health', shortDesc: 'Other sexual health concerns addressed with care.' }]}
      />
    </>
  )
}
