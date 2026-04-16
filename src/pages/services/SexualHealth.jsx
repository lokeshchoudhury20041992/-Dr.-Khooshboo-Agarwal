import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function SexualHealth() {
  return (
    <>
      <Helmet>
        <title>Sexual Health for Women | Dr. Khooshboo Agarwal | Gynecologist Kolkata</title>
        <meta name="description" content="Pain during sex, vaginismus, fear of intimacy — these are medical conditions with real solutions. Dr. Khooshboo Agarwal in Kolkata offers compassionate, private sexual health care for women." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/services/sexual-health" />
      </Helmet>
      <ServicePageTemplate
        hero={{ tag: 'Sexual Health', heading: 'Sexual Health Care for Women in Kolkata', subtitle: 'Pain during sex, discomfort, or fear of intimacy are not things you have to live with. They are medical conditions — and Dr. Khooshboo Agarwal treats them with skill and complete sensitivity.', title: 'Sexual Health' }}
        intro={{
          heading: 'This Is a Safe Space',
          paragraphs: [
            'Many women suffer in silence when it comes to sexual health — because they feel embarrassed, afraid of being judged, or simply unsure if what they are experiencing is normal. Dr. Khooshboo Agarwal has created a practice environment where you can speak openly without any fear of judgment.',
            'Pain during intercourse, inability to tolerate penetration (vaginismus), lack of desire, or discomfort after intimacy are all valid medical concerns. They often have clear, treatable causes — and you deserve to enjoy intimacy without pain.',
          ],
          highlights: [
            { icon: '😣', title: 'Dyspareunia (Painful Intercourse)', desc: 'Pain during or after sex that can result from infections, hormonal dryness, endometriosis, or vaginismus.' },
            { icon: '🔒', title: 'Vaginismus', desc: 'Involuntary muscle contractions that make penetration painful or impossible — highly treatable with the right approach.' },
            { icon: '💔', title: 'Loss of Libido', desc: 'Reduced sexual desire linked to hormonal changes, stress, PCOS, thyroid dysfunction, or relationship factors.' },
            { icon: '👨', title: 'Male Sexual Health (ED, Azoospermia)', desc: 'Dr. Khooshboo also addresses male sexual and reproductive health concerns in the context of couples care.' },
          ],
        }}
        faqs={[
          { question: 'Is pain during sex normal?', answer: 'Occasional mild discomfort can occur, but regular or significant pain during sex is not normal and should be evaluated. It is almost always treatable once the cause is identified.' },
          { question: 'What is vaginismus and can it be treated?', answer: 'Vaginismus is an involuntary tightening of the vaginal muscles that makes penetration painful or impossible. It is a recognised medical condition that responds very well to a combination of physiotherapy, counselling, and medical management.' },
          { question: 'Will Dr. Khooshboo judge me for my sexual health concerns?', answer: 'Absolutely not. Dr. Khooshboo Agarwal specifically creates a judgment-free consultation environment. She has heard and helped with every kind of sexual health concern, and treats each patient with complete dignity and respect.' },
          { question: 'Is sexual health consultation available privately in Kolkata?', answer: 'Yes. All consultations with Dr. Khooshboo Agarwal are completely private and confidential, at her clinics in Saltlake, Nagerbazar, and other Kolkata locations.' },
        ]}
        relatedServices={[{ slug: 'vaginal-infections', icon: '🩺', title: 'Vaginal Infections', shortDesc: 'Infections that can cause pain or discomfort.' }, { slug: 'pcos-treatment', icon: '🔬', title: 'PCOS Treatment', shortDesc: 'Hormonal imbalance can affect sexual health.' }]}
      />
    </>
  )
}
