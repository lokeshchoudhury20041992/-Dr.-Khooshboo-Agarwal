import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function Endometriosis() {
  return (
    <>
      <Helmet>
        <title>Endometriosis Treatment in Kolkata | Diagnosis & Pain Relief</title>
        <meta name="description" content="Expert endometriosis diagnosis and treatment by Dr. Khooshboo Agarwal. Comprehensive care for severe pelvic pain, painful periods, and related infertility." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/gynecology/endometriosis" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "about": {
              "@type": "MedicalCondition",
              "name": "Endometriosis",
              "alternateName": "Endo",
              "associatedAnatomy": {
                "@type": "AnatomicalStructure",
                "name": "Pelvis"
              }
            }
          })}
        </script>
      </Helmet>
      <ServicePageTemplate
        hero={{
          tag: 'Gynecology',
          heading: 'Endometriosis Treatment in Kolkata: Reclaim Your Life from Pelvic Pain',
          subtitle: 'Severe period pain is not normal. Dr. Khooshboo Agarwal specializes in the early diagnosis and comprehensive medical and surgical management of Endometriosis.',
          title: 'Endometriosis',
        }}
        intro={{
          heading: 'What is Endometriosis?',
          paragraphs: [
            'Endometriosis is a chronic condition where tissue similar to the lining of the uterus (endometrium) grows outside the uterus. This tissue can implant on the ovaries, fallopian tubes, intestines, and pelvic lining.',
            'Because this displaced tissue behaves like normal endometrial tissue—thickening, breaking down, and bleeding with each menstrual cycle—it becomes trapped, leading to severe inflammation, scar tissue (adhesions), and cysts known as endometriomas.',
          ],
          highlights: [
            { icon: '🩺', title: 'Early Diagnosis', desc: 'Accurate clinical diagnosis and high-resolution imaging to detect deep infiltrating disease.' },
            { icon: '💊', title: 'Medical Management', desc: 'Customized hormonal suppression therapies to manage pain and slow progression.' },
            { icon: '🏥', title: 'Excision Surgery', desc: 'Minimally invasive laparoscopic removal of endometriosis implants.' },
            { icon: '👶', title: 'Fertility Support', desc: 'Integrated care protocols to optimize your chances of conception.' },
          ],
        }}
        sections={[
          {
            heading: 'Recognizing the Symptoms',
            subheading: 'Many women suffer in silence for years. Look out for these key signs:',
            type: 'grid',
            items: [
              { icon: '🩸', title: 'Dysmenorrhea', desc: 'Pelvic pain and cramping that begins before and extends several days into a menstrual period.' },
              { icon: '❤️', title: 'Pain with Intercourse', desc: 'Deep pain during or after sex is a hallmark symptom of endometriosis.' },
              { icon: '🚽', title: 'Pain with Bowel Movements', desc: 'Pain during urination or bowel movements, especially during your period.' },
              { icon: '📉', title: 'Infertility', desc: 'Endometriosis is intimately linked to difficulty in conceiving and may require ART.' },
            ],
          },
        ]}
        faqs={[
          { question: 'How is Endometriosis Diagnosed?', answer: 'Diagnosis begins with a detailed medical history and pelvic exam. Advanced pelvic ultrasounds can identify large cysts. However, the gold standard for definitive diagnosis and staging is a diagnostic Laparoscopic Surgery.' },
          { question: 'Does endometriosis go away after menopause?', answer: 'For many women, symptoms improve significantly after menopause because the tissue is no longer stimulated by monthly hormone cycles. Exceptions do occur, especially if HRT is used.' },
          { question: 'Can I still get pregnant if I have endometriosis?', answer: 'Yes. While it can make it harder to conceive, many women with mild to moderate disease conceive naturally. Advanced stages may require surgery or IVF.' },
        ]}
        relatedServices={[
          { slug: 'adenomyosis', icon: '🩺', title: 'Adenomyosis', shortDesc: 'A related condition causing severe uterine pain.' },
          { slug: 'laparoscopic-surgery', icon: '🏥', title: 'Laparoscopic Surgery', shortDesc: 'Minimally invasive evaluation and treatment.' },
        ]}
      />
    </>
  )
}
