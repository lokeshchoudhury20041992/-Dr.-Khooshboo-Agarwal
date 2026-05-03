import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function HighRiskPregnancy() {
  return (
    <>
      <Helmet>
        <title>Best High-Risk Pregnancy Doctor in Kolkata | Complications Care</title>
        <meta name="description" content="Expert high-risk pregnancy management by Dr. Khooshboo Agarwal. Comprehensive care for gestational diabetes, preeclampsia, and twin pregnancies in Kolkata." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/pregnancy-care/high-risk-pregnancy" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "name": "High-Risk Pregnancy",
            "associatedAnatomy": {
              "@type": "AnatomicalStructure",
              "name": "Uterus"
            },
            "possibleTreatment": [
              {
                "@type": "MedicalProcedure",
                "name": "Antenatal Monitoring"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Cesarean Section"
              }
            ]
          })}
        </script>
      </Helmet>
      <ServicePageTemplate
        hero={{
          tag: 'Maternity Care',
          heading: 'High-Risk Pregnancy Care in Kolkata',
          subtitle: 'A high-risk pregnancy requires expert hands, vigilant monitoring, and calm reassurance. Protect your journey with our specialized obstetric care.',
          title: 'High-Risk Pregnancy',
        }}
        intro={{
          heading: 'What Makes a Pregnancy High-Risk?',
          paragraphs: [
            'A pregnancy is considered high-risk when there are potential complications that could affect the mother, baby, or both. This categorization simply means that you and your baby need closer monitoring and specialized care — it does not mean that something will definitely go wrong.',
            'Risk factors can be pre-existing (such as chronic hypertension or diabetes) or they can develop during the pregnancy (such as gestational diabetes or placental issues). Maternal age (over 35 or under 17) and carrying multiples (twins or triplets) also automatically classify a pregnancy as high-risk.',
            'Dr. Khooshboo Agarwal offers rigorous antenatal surveillance, coordinating with a multidisciplinary team at Kolkata’s top hospitals to ensure safe deliveries for high-risk patients.'
          ],
          highlights: [
            { icon: '🩺', title: 'Intensive Monitoring', desc: 'Frequent ultrasounds and non-stress tests to track fetal health.' },
            { icon: '🏥', title: 'Tertiary Care Access', desc: 'Delivery planning at hospitals with advanced NICU facilities.' },
            { icon: '👩‍⚕️', title: 'Surgical Expertise', desc: 'Expertise in complex C-Sections and emergency interventions.' },
            { icon: '🤝', title: 'Multidisciplinary Care', desc: 'Collaboration with endocrinologists and fetal medicine experts.' },
          ],
        }}
        sections={[
          {
            heading: 'Complex Conditions We Manage',
            subheading: 'Expert oversight for maternal and fetal complications.',
            type: 'grid',
            items: [
              { icon: '🩸', title: 'Gestational Diabetes (GDM)', desc: 'Managing maternal blood sugar through diet, lifestyle, and insulin to prevent fetal overgrowth and birth complications.' },
              { icon: '❤️', title: 'Preeclampsia and Hypertension', desc: 'Strict blood pressure management to prevent eclampsia, organ damage, and premature delivery.' },
              { icon: '👶', title: 'Multiple Gestations', desc: 'Twin and triplet pregnancies require specialized surveillance for growth restriction and preterm labor.' },
              { icon: '📉', title: 'Fetal Growth Restriction (IUGR)', desc: 'Regular Doppler scans to monitor placental blood flow and ensure the baby is receiving adequate nutrition.' },
              { icon: '🧬', title: 'Thyroid Disorders', desc: 'Careful titration of thyroid medication to support healthy fetal brain development.' },
              { icon: '🔁', title: 'History of Miscarriages', desc: 'Targeted treatments like cervical cerclage or progesterone therapy for patients with recurrent pregnancy loss.' },
            ],
          },
        ]}
        faqs={[
          { question: 'What makes a pregnancy high-risk?', answer: 'Conditions like high blood pressure, diabetes, autoimmune diseases, advanced maternal age (over 35), carrying twins/triplets, or a history of complicated pregnancies/miscarriages make a pregnancy high-risk.' },
          { question: 'Can I have a normal delivery if my pregnancy is high-risk?', answer: 'Yes, depending on the specific complication. For example, well-managed gestational diabetes often allows for a normal vaginal delivery. However, conditions like placenta previa or severe preeclampsia typically require a planned C-Section for safety.' },
          { question: 'How often will I need check-ups?', answer: 'High-risk pregnancies require more frequent prenatal visits. You may need to see Dr. Agarwal every 1-2 weeks in your second trimester, and potentially weekly in your third trimester, along with additional ultrasound monitoring.' },
          { question: 'Are high-risk deliveries more expensive?', answer: 'Because high-risk pregnancies may require more frequent testing, specialized medications, or potentially a longer hospital stay (or NICU care for the baby), they can incur higher costs. We discuss these factors transparently during your care planning.' },
        ]}
        relatedServices={[
          { slug: 'painless-delivery', icon: '👶', title: 'Painless Delivery', shortDesc: 'Safe childbirth options for high-risk mothers.' },
          { slug: 'preconception-counselling', icon: '💑', title: 'Preconception Counselling', shortDesc: 'Control risk factors before getting pregnant.' },
        ]}
      />
    </>
  )
}
