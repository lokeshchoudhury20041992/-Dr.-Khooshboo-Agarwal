import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function IvfTreatment() {
  return (
    <>
      <Helmet>
        <title>Best IVF Treatment in Kolkata | Success Rates & Process</title>
        <meta name="description" content="Comprehensive IVF treatment in Kolkata by Dr. Khooshboo Agarwal. Step-by-step guidance, cost factors, and success rates. Book your fertility consultation." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/fertility/ivf-treatment" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "In Vitro Fertilization (IVF)",
            "procedureType": "Fertility Treatment",
            "bodyLocation": "Reproductive System",
            "provider": {
              "@type": "Physician",
              "name": "Dr. Khooshboo Agarwal"
            }
          })}
        </script>
      </Helmet>
      <ServicePageTemplate
        hero={{
          tag: 'Fertility & IVF',
          heading: 'IVF Treatment (In Vitro Fertilization) in Kolkata',
          subtitle: 'Advanced reproductive technologies with compassionate care. Discover our evidence-based approach to building your family.',
          title: 'IVF Treatment',
        }}
        intro={{
          heading: 'What is IVF and Is It Right For You?',
          paragraphs: [
            'In Vitro Fertilization (IVF) is a complex series of procedures used to help with fertility or prevent genetic problems and assist with the conception of a child. During IVF, mature eggs are collected from ovaries and fertilized by sperm in a lab.',
            'Dr. Khooshboo Agarwal believes in a transparent, patient-first approach to IVF. At our affiliated top-tier laboratories in Kolkata, we utilize state-of-the-art incubation and embryology techniques to maximize your chances of a successful pregnancy.',
            '*Disclaimer: IVF success rates vary significantly based on patient age, medical history, and specific diagnostic factors. There is no 100% guarantee of pregnancy. Please consult with our specialists to review your specific statistical probabilities.*'
          ],
          highlights: [
            { icon: '👩‍🔬', title: 'Laboratory Excellence', desc: 'Partnered with top ICSI and embryology labs in Kolkata.' },
            { icon: '📊', title: 'Transparent Success Rates', desc: 'Honest discussions about your realistic chances before beginning.' },
            { icon: '❄️', title: 'Embryo Freezing (FET)', desc: 'Advanced vitrification for safer, future embryo transfers.' },
            { icon: '🧬', title: 'Genetic Testing', desc: 'PGT-A screening options for older patients or recurrent loss.' },
          ],
        }}
        sections={[
          {
            heading: 'The Step-by-Step IVF Process',
            subheading: 'Understanding each phase of your IVF cycle helps reduce anxiety and prepares you for the journey.',
            type: 'list',
            items: [
              { title: '1. Ovarian Stimulation', desc: 'Using injectable hormones for 8-14 days to stimulate the ovaries to produce multiple eggs instead of the usual single egg.' },
              { title: '2. Egg Retrieval', desc: 'A minor surgical procedure done under light sedation where eggs are retrieved using an ultrasound-guided needle.' },
              { title: '3. Sperm Collection & Fertilization', desc: 'Sperm is collected and combined with eggs in the lab. For severe male-factor infertility, ICSI (injecting a single sperm directly into the egg) is used.' },
              { title: '4. Embryo Culture', desc: 'Fertilized eggs develop into embryos over 3 to 5 days under strict laboratory observation.' },
              { title: '5. Embryo Transfer', desc: 'The best quality embryo(s) are transferred into the uterus via a thin catheter. This is a painless procedure similar to a Pap smear.' },
            ],
          },
        ]}
        faqs={[
          { question: 'What is the success rate of IVF on the first try?', answer: 'IVF success rates depend heavily on maternal age, egg quality, and the underlying cause of infertility. Women under 35 generally have the highest success rates. Success rates vary significantly based on individual medical conditions.' },
          { question: 'Is IVF a painful procedure?', answer: 'Most of the IVF process is not painful. The hormone injections use very thin needles. The egg retrieval is performed under sedation so you will not feel pain. The embryo transfer is generally painless and does not require anesthesia.' },
          { question: 'What is the difference between IVF and ICSI?', answer: 'In traditional IVF, sperm is placed in a dish with the egg to fertilize naturally. In ICSI (Intracytoplasmic Sperm Injection), a single sperm is injected directly into the egg. ICSI is highly effective for male infertility issues like low sperm count or motility.' },
          { question: 'Are there risks associated with IVF?', answer: 'Risks include Ovarian Hyperstimulation Syndrome (OHSS), multiple pregnancies (if more than one embryo is transferred), and ectopic pregnancy. Dr. Khooshboo monitors stimulation cycles closely to mitigate all manageable risks.' },
        ]}
        relatedServices={[
          { slug: 'infertility-treatment', icon: '🌸', title: 'General Infertility & IUI', shortDesc: 'Initial workups and basic fertility interventions.' },
          { slug: 'pcos-treatment', icon: '🔬', title: 'PCOS Management', shortDesc: 'PCOS is a leading cause of female infertility.' },
        ]}
      />
    </>
  )
}
