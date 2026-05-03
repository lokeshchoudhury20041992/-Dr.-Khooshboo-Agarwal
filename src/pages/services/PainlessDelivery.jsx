import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function PainlessDelivery() {
  return (
    <>
      <Helmet>
        <title>Painless Delivery in Kolkata | Dr. Khooshboo Agarwal | Normal and Epidural</title>
        <meta name="description" content="Safe, comfortable childbirth with Dr. Khooshboo Agarwal in Kolkata. Expert in normal delivery and epidural (painless) delivery across ILS Saltlake, ILS Nagerbazar, and Care Hospital." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/services/painless-delivery" />
      </Helmet>
      <ServicePageTemplate
        hero={{ tag: 'Childbirth', heading: 'Normal and Painless Delivery in Kolkata', subtitle: 'Your birth experience matters. Dr. Khooshboo Agarwal prepares you thoroughly, keeps you informed, and is with you every step of the way.', title: 'Painless Delivery' }}
        intro={{
          heading: 'Every Mother Deserves a Safe, Supported Birth',
          paragraphs: [
            'Childbirth is one of the most profound experiences in a woman\'s life. Whether you choose a natural birth or prefer pain relief through an epidural, Dr. Khooshboo Agarwal helps you understand your options and delivers your baby in the safest possible environment, including high-risk pregnancies that need specialist care.',
            'She consults at equipped hospitals across Kolkata including ILS Saltlake, Care Hospital, and Rameshwara Nursing Home — all with modern labour ward facilities.',
          ],
          highlights: [
            { icon: '💉', title: 'Epidural Analgesia (Painless Delivery)', desc: 'Labour pain relief administered by an anaesthesiologist — significantly reducing discomfort during delivery.' },
            { icon: '🌿', title: 'Normal Vaginal Delivery', desc: 'Natural birth with active monitoring — the safest and most preferred mode when appropriate.' },
            { icon: '🏥', title: 'LSCS (C-Section) When Needed', desc: 'When a normal delivery is not safe, a planned or emergency caesarean is performed with skill and care.' },
            { icon: '🤱', title: 'Postpartum Care', desc: 'Breastfeeding support, wound care, and emotional wellbeing support after delivery.' },
          ],
        }}
        faqs={[
          { question: 'Is painless delivery safe for the baby?', answer: 'Yes. Epidural analgesia is one of the most extensively studied methods of pain relief in childbirth. When administered by a trained anaesthesiologist, it is safe for both mother and baby.' },
          { question: 'Can I decide between normal and painless delivery?', answer: 'Yes, in most cases you can. Dr. Khooshboo discusses your birth preferences early in pregnancy and helps create a birth plan — while making clear that the final decision may need to adapt to your clinical situation during labour.' },
          { question: 'Which hospitals in Kolkata offer painless delivery?', answer: 'Dr. Khooshboo Agarwal delivers at ILS Saltlake, ILS Nagerbazar, Care Hospital, Spandan Hospital, and Rameshwara Nursing Home — all of which are equipped for painless delivery with anaesthetic support.' },
        ]}
        relatedServices={[{ slug: 'high-risk-pregnancy', icon: '🤰', title: 'High-Risk Pregnancy Care', shortDesc: 'For pregnancies needing specialist monitoring.' }, { slug: 'preconception-counselling', icon: '💑', title: 'Preconception Counselling', shortDesc: 'Plan a healthy pregnancy from before conception.' }]}
      />
    </>
  )
}
