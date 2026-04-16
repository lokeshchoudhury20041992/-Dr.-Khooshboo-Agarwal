import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function Adenomyosis() {
  return (
    <>
      <Helmet>
        <title>Adenomyosis Treatment in Kolkata | Symptoms & Diagnosis</title>
        <meta name="description" content="Expert adenomyosis diagnosis and treatment by Dr. Khooshboo Agarwal. Comprehensive care for heavy bleeding, enlarged uterus, and severe pelvic pain." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/gynecology/adenomyosis" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "about": {
              "@type": "MedicalCondition",
              "name": "Adenomyosis",
              "associatedAnatomy": {
                "@type": "AnatomicalStructure",
                "name": "Uterus"
              }
            }
          })}
        </script>
      </Helmet>
      <ServicePageTemplate
        hero={{
          tag: 'Gynecology',
          heading: 'Adenomyosis Treatment: Managing Heavy Bleeding & Pain',
          subtitle: 'Often misdiagnosed or confused with fibroids, Adenomyosis requires expert identification. Dr. Khooshboo Agarwal offers precise diagnostic scans and customized treatment plans.',
          title: 'Adenomyosis',
        }}
        intro={{
          heading: 'What is Adenomyosis?',
          paragraphs: [
            'Adenomyosis occurs when the tissue that normally lines the uterus (endometrial tissue) grows into the muscular wall of the uterus. This displaced tissue continues to act normally — thickening, breaking down and bleeding — during each menstrual cycle.',
            'The result is an enlarged uterus and painful, heavy periods. Unlike Endometriosis (where tissue grows outside the uterus), Adenomyosis is strictly confined within the uterine walls.',
          ],
          highlights: [
            { icon: '🩸', title: 'Bleeding Control', desc: 'Targeted therapies to stop excessive menstrual flow and anemia.' },
            { icon: '🔍', title: 'Precision Diagnostics', desc: 'Differentiating adenomyosis from uterine fibroids via advanced imaging.' },
            { icon: '💊', title: 'Medical Therapy', desc: 'Hormonal treatments to minimize uterine swelling and suppress pain.' },
            { icon: '🏥', title: 'Surgical Care', desc: 'From conservative interventions to definitive hysterectomy when indicated.' },
          ],
        }}
        sections={[
          {
            heading: 'Key Symptoms to Watch For',
            subheading: 'Adenomyosis can cause severe disruption to your daily life. Seek medical help if you experience:',
            type: 'grid',
            items: [
              { icon: '⏰', title: 'Heavy Menstrual Bleeding', desc: 'Prolonged periods or passing large blood clots regularly.' },
              { icon: '🔪', title: 'Severe Cramping', desc: 'Sharp, knife-like pelvic pain during menstruation (dysmenorrhea).' },
              { icon: '🎈', title: 'Enlarged Uterus', desc: 'A feeling of lower abdominal pressure, heaviness, or bloating.' },
              { icon: '❤️', title: 'Painful Intercourse', desc: 'Deep pelvic pain during sexual intercourse similar to endometriosis.' },
            ],
          },
        ]}
        faqs={[
          { question: 'How is Adenomyosis Diagnosed?', answer: 'Because symptoms overlap heavily with Uterine Fibroids, precise imaging is required. A high-resolution pelvic ultrasound or an MRI of the pelvis is the best way to visualize the thickened uterine wall characteristics.' },
          { question: 'What are the surgical options?', answer: 'If you are experiencing severe symptoms and do not wish to become pregnant in the future, a Hysterectomy is the only definitive cure for Adenomyosis.' },
          { question: 'Does adenomyosis affect fertility?', answer: 'Heavy bleeding and uterine inflammation can make embryo implantation difficult, but many women with adenomyosis still conceive. We carefully manage symptoms during Infertility Treatment to maximize success.' },
        ]}
        relatedServices={[
          { slug: 'endometriosis', icon: '🎗️', title: 'Endometriosis', shortDesc: 'Often co-occurring with adenomyosis.' },
          { slug: 'laparoscopic-cystectomy', icon: '🏥', title: 'Ovarian Cysts', shortDesc: 'Surgical management of pelvic masses.' },
        ]}
      />
    </>
  )
}
