import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function RecurrentMiscarriage() {
  return (
    <>
      <Helmet>
        <title>Recurrent Miscarriage Treatment in Kolkata | Pregnancy Loss</title>
        <meta name="description" content="Expert recurrent miscarriage evaluation and treatment in Kolkata. Discover the cause behind pregnancy loss and explore pathways to a healthy baby with Dr. Khooshboo Agarwal." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/pregnancy-care/recurrent-miscarriage" />
      </Helmet>
      <ServicePageTemplate
        hero={{
          tag: 'Pregnancy Care and Fertility',
          heading: 'Recurrent Miscarriage Evaluation',
          subtitle: 'Experiencing a miscarriage is heartbreaking. Experiencing it repeatedly is devastating. Let us systematically uncover the "why" and build a plan for a healthy full-term pregnancy.',
          title: 'Recurrent Miscarriage',
        }}
        intro={{
          heading: 'We Can Find Answers',
          paragraphs: [
            'A miscarriage is generally defined as the loss of a pregnancy before 20 weeks. While a single miscarriage is unfortunately common (often due to random chromosomal errors), recurrent pregnancy loss (RPL) — defined as two or more consecutive miscarriages — requires deep medical investigation.',
            'Dr. Khooshboo Agarwal brings an empathetic, highly rigorous approach to recurrent miscarriages. By systematically ruling out anatomical, genetic, immune, and clotting factors, we successfully identify the root cause in over 60% of cases.',
          ],
          highlights: [
            { icon: '🧬', title: 'Genetic Screening', desc: 'Chromosomal analysis (Karyotyping) for both parents.' },
            { icon: '🩸', title: 'Blood Clotting Tests', desc: 'Testing for APS and thrombophilia which cause micro-clots in the placenta.' },
            { icon: '🔬', title: 'Hormonal Workup', desc: 'Evaluating thyroid function and prolactin levels.' },
            { icon: '🔍', title: 'Uterine Diagnostics', desc: 'Identifying polyps, septums, or fibroids disrupting implantation.' },
          ],
        }}
        sections={[
          {
            heading: 'The Diagnostic Workup',
            subheading: 'If you have suffered multiple losses, our next step is intensive testing before you try again:',
            type: 'grid',
            items: [
              { icon: '📷', title: '3D Pelvic Ultrasound', desc: 'Detects structural abnormalities like a septate uterus that leaves no room for the baby to grow.' },
              { icon: '🩺', title: 'Hysteroscopy', desc: 'A surgical camera explores the inside of your uterus, allowing us to actively remove polyps or scar tissue during the diagnosis.' },
              { icon: '🧬', title: 'Karyotyping', desc: 'A blood test evaluating the genetic makeup of you and your partner to find translocations.' },
              { icon: '🛡️', title: 'Antiphospholipid Antibodies', desc: 'Tests for an immune system disorder where the body mistakenly attacks the placental blood supply.' },
            ],
          },
        ]}
        faqs={[
          { question: 'What happens if you find a genetic issue?', answer: 'If testing reveals a balanced chromosomal translocation in either partner, we often recommend IVF equipped with Preimplantation Genetic Testing (PGT-A). This allows us to select and transfer only chromosomally normal embryos, drastically reducing the risk of another miscarriage.' },
          { question: 'Is my recurrent miscarriage caused by stress?', answer: 'No. The crushing guilt that comes with miscarriage often makes women blame themselves, their jobs, or their stress levels. Everyday stress, heavy lifting, or exercising do not cause recurrent miscarriages.' },
          { question: 'What if all tests come back normal?', answer: 'This is called "unexplained" recurrent pregnancy loss, and while profoundly frustrating, it is actually a positive prognostic sign! Couples with unexplained RPL have an excellent chance (over 60%) of having a successful, perfectly normal pregnancy without any specialized intervention in their next attempt.' },
        ]}
        relatedServices={[
          { slug: 'diagnostic-hysteroscopy', icon: '🔍', title: 'Diagnostic Hysteroscopy', shortDesc: 'To evaluate the uterine cavity.' },
          { slug: 'ivf-treatment', icon: '🧬', title: 'IVF Treatment', shortDesc: 'IVF with PGT-A for genetic screening.' },
        ]}
      />
    </>
  )
}
