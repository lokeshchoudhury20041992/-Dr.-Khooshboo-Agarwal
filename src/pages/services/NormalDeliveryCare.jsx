import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function NormalDeliveryCare() {
  return (
    <>
      <Helmet>
        <title>Normal Vaginal Delivery in Kolkata | Maternity Doctor</title>
        <meta name="description" content="Expert preparation and care for Normal Vaginal Delivery (NVD) in Kolkata by Dr. Khooshboo Agarwal. Safe, patient-centered childbirth." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/pregnancy-care/normal-delivery" />
      </Helmet>
      <ServicePageTemplate
        hero={{
          tag: 'Childbirth',
          heading: 'Normal Vaginal Delivery (NVD)',
          subtitle: 'The safest, most natural way to bring your baby into the world. Dr. Khooshboo Agarwal advocates for natural birth whenever medically safe.',
          title: 'Normal Delivery',
        }}
        intro={{
          heading: 'Advocating For Your Natural Birth',
          paragraphs: [
            'A normal vaginal delivery is the natural physiological process of childbirth. When a pregnancy is uncomplicated, delivering vaginally is generally the safest option for both mother and child, leading to faster recovery times and lowering the risk of respiratory issues for the baby.',
            'Dr. Khooshboo Agarwal firmly believes in supporting a mother’s desire for a natural birth. She provides extensive third-trimester counseling, teaches labor preparation techniques, and avoids unnecessary surgical interventions unless absolutely emergency indicators arise.',
          ],
          highlights: [
            { icon: '🏃‍♀️', title: 'Faster Recovery', desc: 'Shorter hospital stays and quicker return to mobility.' },
            { icon: '🛡️', title: 'Immune Boosting', desc: 'The baby receives beneficial microbiome bacteria during vaginal birth.' },
            { icon: '🩺', title: 'Fewer Complications', desc: 'Avoids the risks associated with major abdominal surgery.' },
            { icon: '🤱', title: 'Immediate Bonding', desc: 'Easier to initiate skin-to-skin contact and early breastfeeding.' },
          ],
        }}
        sections={[
          {
            heading: 'Preparing for a Normal Delivery',
            subheading: 'Preparation begins long before you enter the labor ward:',
            type: 'list',
            items: [
              { title: 'Antenatal Exercises', desc: 'We recommend specific pelvic floor exercises and yoga to keep your body flexible and strong for labor.' },
              { title: 'Weight Management', desc: 'Maintaining an optimal weight range prevents the baby from growing too large (macrosomia).' },
              { title: 'Birth Planning', desc: 'Discussing your preferences for pain relief, labor positions, and who will be in the delivery room.' },
              { title: 'Fetal Monitoring', desc: 'Through your third trimester, we closely track the baby’s head-down position (cephalic presentation).' },
            ],
          },
        ]}
        faqs={[
          { question: 'What if the pain is too much?', answer: 'There is no award for suffering! If the pain becomes overwhelming, we can easily transition to a Painless Delivery (Epidural), which still allows for a vaginal birth but massively reduces the pain.' },
          { question: 'Will I need an episiotomy?', answer: 'An episiotomy (a small surgical cut to widen the vaginal opening) is not routine. It is only performed if the baby is in distress and needs to be delivered rapidly, or if severe, uncontrollable tearing is imminent.' },
          { question: 'When does a normal delivery turn into a C-Section?', answer: 'A C-section becomes necessary if the baby\'s heart rate drops dangerously (fetal distress), if labor completely stalls and the cervix won\'t dilate, or if the baby is in a breech position at full term.' },
        ]}
        relatedServices={[
          { slug: 'painless-delivery', icon: '💉', title: 'Painless Delivery', shortDesc: 'Epidural options for natural birth.' },
          { slug: 'preconception-counselling', icon: '💑', title: 'Preconception', shortDesc: 'Start your journey healthy.' },
        ]}
      />
    </>
  )
}
