import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function GestationalDiabetes() {
  return (
    <>
      <Helmet>
        <title>Gestational Diabetes Management in Kolkata | Dr. Khooshboo Agarwal</title>
        <meta name="description" content="Expert Gestational Diabetes (GDM) management during pregnancy. Protect your baby from macrosomia with targeted diet and insulin protocols." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/pregnancy-care/gestational-diabetes" />
      </Helmet>
      <ServicePageTemplate
        hero={{
          tag: 'High-Risk Pregnancy',
          heading: 'Gestational Diabetes Management',
          subtitle: 'A temporary but serious condition during pregnancy. We provide the dietary plans, rigorous monitoring, and medical care needed to protect you and your baby.',
          title: 'Gestational Diabetes',
        }}
        intro={{
          heading: 'What is Gestational Diabetes (GDM)?',
          paragraphs: [
            'Gestational diabetes is a type of diabetes that develops exclusively during pregnancy. Because your placenta produces hormones that cause insulin resistance, your body may struggle to produce enough insulin to keep your blood sugar in a safe range.',
            'If left unmanaged, the excess sugar crosses the placenta, causing your baby to grow too large (macrosomia), which increases the risk of birth complications, premature delivery, and the baby experiencing low blood sugar right after birth.',
          ],
          highlights: [
            { icon: '🩸', title: 'Early Screening', desc: 'Conducting Oral Glucose Tolerance Tests (OGTT) around 24-28 weeks.' },
            { icon: '🥦', title: 'Dietary Mapping', desc: 'Customized nutritional plans focusing on complex carbs and protein.' },
            { icon: '📈', title: 'Continuous Monitoring', desc: 'Teaching you how to check blood sugar safely at home.' },
            { icon: '💊', title: 'Medical Support', desc: 'Oral medications or safe insulin protocols if diet alone is insufficient.' },
          ],
        }}
        sections={[
          {
            heading: 'Risks of Unmanaged GDM',
            subheading: 'Proper management is critical to prevent complications for both mother and child:',
            type: 'grid',
            items: [
              { icon: '👶', title: 'Excessive Birth Weight', desc: 'Babies over 9 pounds (macrosomia) making normal delivery dangerous.' },
              { icon: '⏱️', title: 'Preterm Birth', desc: 'High blood sugar increases the risk of early labor and respiratory distress syndrome.' },
              { icon: '🩺', title: 'Preeclampsia', desc: 'GDM patients have a higher risk of developing severe high blood pressure.' },
              { icon: '🔄', title: 'Future Diabetes Risk', desc: 'Increases the likelihood of developing Type 2 Diabetes later in life.' },
            ],
          },
        ]}
        faqs={[
          { question: 'Will I have diabetes after the baby is born?', answer: 'In most cases, gestational diabetes resolves completely shortly after delivery. However, women who had GDM are at a significantly higher risk of developing Type 2 diabetes over the next decade and will need standard screening.' },
          { question: 'Can I still have a normal delivery with GDM?', answer: 'Yes! If your blood sugar is perfectly controlled throughout the pregnancy and the baby’s growth remains average, a normal vaginal delivery is highly achievable. Uncontrolled GDM often necessitates a C-section due to the baby’s size.' },
          { question: 'Is taking insulin safe for my baby?', answer: 'Yes. Insulin does not cross the placenta. It is the safest and most effective way to lower your blood sugar if diet and exercise are not enough, directly protecting your baby from the dangers of excess glucose.' },
        ]}
        relatedServices={[
          { slug: 'high-risk-pregnancy', icon: '🤰', title: 'High-Risk Pregnancy', shortDesc: 'GDM requires high-risk monitoring protocols.' },
          { slug: 'painless-delivery', icon: '👶', title: 'Delivery Care', shortDesc: 'Safe birthing options for diabetic mothers.' },
        ]}
      />
    </>
  )
}
