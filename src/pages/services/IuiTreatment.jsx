import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function IuiTreatment() {
  return (
    <>
      <Helmet>
        <title>IUI Treatment in Kolkata | Intrauterine Insemination Provider</title>
        <meta name="description" content="Affordable and effective IUI (Intrauterine Insemination) treatment in Kolkata by Dr. Khooshboo Agarwal. A non-invasive first step to treating mild infertility." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/fertility/iui-treatment" />
      </Helmet>
      <ServicePageTemplate
        hero={{
          tag: 'Fertility',
          heading: 'IUI Treatment (Intrauterine Insemination)',
          subtitle: 'A highly effective, minimally invasive first-line fertility treatment that gives sperm a massive head start exactly when you are ovulating.',
          title: 'IUI Treatment',
        }}
        intro={{
          heading: 'What is IUI and How Does it Work?',
          paragraphs: [
            'Intrauterine Insemination (IUI) is a widely used artificial insemination procedure. During IUI, highly motile, concentrated "washed" sperm are injected directly into your uterus using a very fine, painless catheter.',
            'By bypassing the cervix completely, IUI places a massive concentration of healthy sperm closer to the fallopian tubes right as the egg is released, drastically increasing the chances of fertilization.',
          ],
          highlights: [
            { icon: '⏱️', title: 'Fast and Painless', desc: 'The procedure takes only 5 minutes in the clinic and feels similar to a Pap smear.' },
            { icon: '💸', title: 'Cost-Effective', desc: 'Significantly less expensive than IVF, making it a great first step.' },
            { icon: '💊', title: 'Medically Timed', desc: 'Coupled with ovulation induction medication to ensure egg release.' },
            { icon: '🔬', title: 'Sperm Washing', desc: 'The lab removes seminal fluid, dead sperm, and debris before injection.' },
          ],
        }}
        sections={[
          {
            heading: 'Who Benefits Most from IUI?',
            subheading: 'IUI requires that the female partner has at least one open fallopian tube. It is most successful for:',
            type: 'list',
            items: [
              { title: 'Mild Male Factor Infertility', desc: 'If sperm count or motility is slightly below average, washing and concentrating the sperm overcomes the barrier.' },
              { title: 'Unexplained Infertility', desc: 'When all tests are normal but pregnancy is not happening, IUI paired with medication is a standard starting point.' },
              { title: 'Cervical Factor Infertility', desc: 'If thick or hostile cervical mucus is preventing sperm from entering the uterus, IUI simply bypasses the cervix entirely.' },
              { title: 'PCOS Anovulation', desc: 'Women with PCOS who do not ovulate naturally often succeed when IUI is timed with ovulation-inducing drugs like Letrozole.' },
            ],
          },
        ]}
        faqs={[
          { question: 'Does IUI hurt?', answer: 'No. Most women experience very little to zero discomfort. The catheter is incredibly thin, and placing it feels similar to a routine cervical exam. You can drive home and resume normal activities immediately.' },
          { question: 'What is the success rate of IUI?', answer: 'Success rates vary based on age and diagnosis, but typically range from 10% to 20% per cycle. Because it is highly affordable and minimally invasive, we often recommend trying 3 to 4 cycles before escalating to IVF.' },
          { question: 'Are twins common with IUI?', answer: 'If IUI is performed during your natural cycle, the twin rate is normal. However, because we often use medication like Clomiphene to stimulate the ovaries into releasing 2 or 3 eggs to boost your chances, the risk of twins does increase slightly.' },
        ]}
        relatedServices={[
          { slug: 'infertility-treatment', icon: '🌸', title: 'Fertility Evaluation', shortDesc: 'The workup required before IUI.' },
          { slug: 'ivf-treatment', icon: '🧬', title: 'IVF Treatment', shortDesc: 'The next step if IUI is unsuccessful.' },
        ]}
      />
    </>
  )
}
