import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function VaginalInfections() {
  return (
    <>
      <Helmet>
        <title>Vaginal Infection Treatment in Kolkata | Dr. Khooshboo Agarwal</title>
        <meta name="description" content="Itching, unusual discharge, or discomfort? Dr. Khooshboo Agarwal diagnoses and treats all common vaginal infections in Kolkata. Confidential, effective care in Saltlake and Dumdum." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/services/vaginal-infections" />
      </Helmet>
      <ServicePageTemplate
        hero={{ tag: 'Women\'s Health', heading: 'Vaginal Infection Diagnosis and Treatment in Kolkata', subtitle: 'Itching, unusual discharge, or persistent discomfort down there? Do not ignore it. These symptoms are treatable — and Dr. Khooshboo Agarwal can help.', title: 'Vaginal Infections' }}
        intro={{
          heading: 'Common, Treatable, and Nothing to Be Ashamed Of',
          paragraphs: [
            'Vaginal infections are among the most common reasons women visit a gynecologist. Yet many women delay seeking help out of embarrassment. The truth is: these infections are very common, have clear causes, and most respond quickly to the right treatment.',
            'Dr. Khooshboo Agarwal performs a thorough examination, orders appropriate tests, and provides targeted treatment — without you having to feel uncomfortable or judged.',
          ],
          highlights: [
            { icon: '🦠', title: 'Bacterial Vaginosis (BV)', desc: 'A shift in vaginal bacteria causing fishy odour and greyish discharge — very common and easily treatable.' },
            { icon: '🍄', title: 'Candidal (Yeast) Infection', desc: 'Intense itching, thick white discharge — caused by Candida fungus, treated with antifungals.' },
            { icon: '🔬', title: 'Trichomonas (STI)', desc: 'A sexually transmitted infection causing frothy, yellow-green discharge with odour.' },
            { icon: '🌡️', title: 'Cervicitis and Pelvic Inflammatory Disease', desc: 'Infections ascending to the cervix or upper reproductive tract — requiring prompt antibiotic treatment.' },
          ],
        }}
        faqs={[
          { question: 'How do I know if I have a vaginal infection?', answer: 'Common signs include unusual discharge (changed colour, consistency, or smell), itching, burning, redness, or pain during intercourse or urination. Any new or persistent symptoms deserve a proper evaluation.' },
          { question: 'Can vaginal infections go away on their own?', answer: 'Some mild yeast infections might resolve, but most vaginal infections need treatment. Untreated infections can spread, recur, and — in some cases — affect fertility. It is always best to get diagnosed properly.' },
          { question: 'Are vaginal infections common during pregnancy?', answer: 'Yes. Hormonal changes during pregnancy make women more prone to yeast infections and BV. Both can be safely treated during pregnancy with medications appropriate for the trimester.' },
          { question: 'Is a private vaginal infection consultation available near Saltlake and Dumdum?', answer: 'Yes. Dr. Khooshboo Agarwal sees patients at ILS Saltlake, ILS Nagerbazar, and other Kolkata clinics. All consultations are completely private.' },
        ]}
        relatedServices={[{ slug: 'sexual-health', icon: '💬', title: 'Sexual Health', shortDesc: 'Infections can cause pain during intercourse.' }, { slug: 'pcos-treatment', icon: '🔬', title: 'PCOS Treatment', shortDesc: 'Hormonal imbalance can increase infection risk.' }]}
      />
    </>
  )
}
