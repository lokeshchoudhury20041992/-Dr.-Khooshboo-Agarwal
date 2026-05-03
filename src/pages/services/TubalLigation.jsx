import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function TubalLigation() {
  return (
    <>
      <Helmet>
        <title>Tubal Ligation Side Effects and Reversal | Comprehensive Guide</title>
        <meta name="description" content="Considering tubal ligation in Kolkata? Understand the procedure, side effects, and options for reversal or IVF with Dr. Khooshboo Agarwal." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/surgeries/tubal-ligation" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What are the side effects of tubal ligation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tubal ligation does not cause menopause, weight gain, or change your menstrual cycle. It only blocks the fallopian tubes to prevent pregnancy. Normal surgical side effects include temporary abdominal pain and fatigue."
              }
            }]
          })}
        </script>
      </Helmet>
      <ServicePageTemplate
        hero={{
          tag: 'Surgeries and Contraception',
          heading: 'Tubal Ligation (Female Sterilization): Procedure and Myths',
          subtitle: 'Making the decision for permanent birth control is highly personal. Understand the facts, myths, and highly effective surgical options available.',
          title: 'Tubal Ligation',
        }}
        intro={{
          heading: 'What is Tubal Ligation?',
          paragraphs: [
            'Tubal ligation, often referred to as "getting your tubes tied," is a surgical procedure for permanent sterilization. The fallopian tubes are cut, tied, or blocked to permanently prevent an egg from traveling from the ovaries to the uterus, and to prevent sperm from reaching the egg.',
            'It is one of the most effective forms of birth control available and is often performed laparoscopically or immediately following a C-section.',
          ],
          highlights: [
            { icon: '🛡️', title: 'Permanent Protection', desc: 'Over 99% effective at preventing pregnancy permanently.' },
            { icon: '🚫', title: 'Hormone Free', desc: 'Does not alter your body\'s natural hormone production at all.' },
            { icon: '🏥', title: 'Cancer Risk Reduction', desc: 'Studies show tubal ligation significantly decreases the risk of ovarian cancer.' },
            { icon: '⏱️', title: 'Fast Procedure', desc: 'Quick day-care surgery with recovery usually within a few days.' },
          ],
        }}
        sections={[
          {
            heading: 'Debunking Post-Tubal Ligation Myths',
            subheading: 'There is a vast amount of misinformation regarding the side effects of sterilization. Because the ovaries remain completely intact, tubal ligation DOES NOT:',
            type: 'list',
            items: [
              { title: 'Trigger Early Menopause', desc: 'Your ovaries will continue to release eggs and produce estrogen and progesterone normally.' },
              { title: 'Cause Weight Gain', desc: 'Sterilization has no metabolic or hormonal impact that causes direct weight gain.' },
              { title: 'Change Your Periods', desc: 'Your menstrual cycle length, heaviness, and frequency will remain exactly as they were before the surgery.' },
              { title: 'Decrease Sex Drive', desc: 'Your libido is unaffected, and many women report increased satisfaction due to the removal of pregnancy anxiety.' },
            ],
          },
        ]}
        faqs={[
          { question: 'What are the side effects of tubal ligation?', answer: 'Tubal ligation only blocks the fallopian tubes. Normal surgical side effects include temporary abdominal pain, shoulder pain (if done laparoscopically), and fatigue for a few days.' },
          { question: 'Can tubal ligation be reversed if I change my mind?', answer: 'A tubal reversal surgery attempts to reconnect the blocked tubes. While possible, it is a complex surgery, and success varies based on age and how the tubes were originally tied. It is not guaranteed.' },
          { question: 'Can I do IVF if my tubes are tied?', answer: 'Yes! In Vitro Fertilization (IVF) completely bypasses the fallopian tubes. Eggs are retrieved directly from the ovaries, fertilized in a lab, and placed into the uterus. Many women who have had tubal ligations choose IVF over reversal surgery due to higher success rates.' },
        ]}
        relatedServices={[
          { slug: 'contraception', icon: '💊', title: 'Reversible Contraception', shortDesc: 'Explore IUDs and other non-permanent options.' },
          { slug: 'ivf-treatment', icon: '🧬', title: 'IVF Treatment', shortDesc: 'Conceive even after a tubal ligation.' },
        ]}
      />
    </>
  )
}
