import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function EggFreezing() {
  return (
    <>
      <Helmet>
        <title>Egg Freezing Cost and Procedure in Kolkata | Preserve Your Fertility</title>
        <meta name="description" content="Secure your reproductive future with egg freezing in Kolkata. Dr. Khooshboo Agarwal clearly explains the process, age limits, and transparent costs." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/fertility/egg-freezing" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What is the best age to freeze your eggs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The ideal time to freeze your eggs is in your late 20s to early 30s, as egg quality and quantity are remarkably higher. However, freezing eggs up to age 37 can still be highly successful depending on ovarian reserve testing."
              }
            }]
          })}
        </script>
      </Helmet>
      <ServicePageTemplate
        hero={{
          tag: 'Fertility',
          heading: 'Egg Freezing (Oocyte Cryopreservation)',
          subtitle: 'Pause your biological clock. Preserve your highest quality eggs today to secure your chances of starting a family on your own timeline.',
          title: 'Egg Freezing',
        }}
        intro={{
          heading: 'Why Consider Egg Freezing?',
          paragraphs: [
            'Female fertility naturally declines with age, significantly accelerating after age 35. Egg freezing gives you the flexibility to delay childbearing to focus on your career, finding the right partner, or undergoing medical treatments that might impact your fertility.',
            'By freezing your eggs now, you are essentially hitting "pause" on their biological age. An egg frozen at age 30 will remain a 30-year-old egg whenever it is thawed in the future.',
          ],
          highlights: [
            { icon: '⏳', title: 'Stop the Clock', desc: 'Secure high-quality eggs before natural age-related fertility decline.' },
            { icon: '❄️', title: 'Advanced Vitrification', desc: 'Rapid-freeze technology ensures maximum survival rates post-thaw.' },
            { icon: '💼', title: 'Career and Family', desc: 'Take the pressure off finding a partner or pausing your career goals.' },
            { icon: '🛡️', title: 'Medical Preservation', desc: 'Protect fertility before undergoing cancer treatments or pelvic surgeries.' },
          ],
        }}
        sections={[
          {
            heading: 'The Step-by-Step Procedure',
            subheading: 'The egg freezing process mirrors the first half of an IVF cycle and typically takes about two weeks.',
            type: 'list',
            items: [
              { title: '1. Ovarian Reserve Testing', desc: 'Blood tests (like AMH) and pelvic ultrasounds determine the current health and quantity of your eggs.' },
              { title: '2. Ovarian Stimulation', desc: 'You will self-administer daily hormone injections for 10-14 days to stimulate your ovaries to mature multiple eggs simultaneously.' },
              { title: '3. Egg Retrieval', desc: 'A 15-minute, minimally invasive procedure performed under light sedation to collect the eggs using a specialized ultrasound-guided needle.' },
              { title: '4. Vitrification (Freezing)', desc: 'Using a rapid-freeze technique, the healthy mature eggs are flash-frozen to sub-zero temperatures, preventing damaging ice crystals from forming.' },
            ],
          },
        ]}
        faqs={[
          { question: 'What is the cost of egg freezing in Kolkata?', answer: 'Costs involve the initial retrieval cycle (medications, anesthesia, procedural fees) and a yearly storage fee for the frozen eggs. We encourage patients to book a consultative assessment so we can provide a detailed, completely transparent financial breakdown.' },
          { question: 'Is egg freezing guaranteed to result in a baby?', answer: 'No medical procedure is 100% guaranteed. Frozen eggs must survive the thaw, successfully fertilize, and develop into healthy embryos down the line. However, freezing a sufficient number of high-quality eggs at a younger age drastically improves your statistical probability of success.' },
          { question: 'What is the best age to freeze your eggs?', answer: 'The ideal time is in your late 20s to early 30s. However, freezing eggs up to age 37 can still be highly successful depending on your individual ovarian reserve testing (AMH levels).' },
        ]}
        relatedServices={[
          { slug: 'ivf-treatment', icon: '🧬', title: 'IVF Treatment', shortDesc: 'The process used to eventually fertilize frozen eggs.' },
          { slug: 'preconception-counselling', icon: '💑', title: 'Preconception Counselling', shortDesc: 'Plan your reproductive timeline.' },
        ]}
      />
    </>
  )
}
