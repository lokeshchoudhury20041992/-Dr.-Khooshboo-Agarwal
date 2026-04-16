import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function UterinePolyps() {
  return (
    <>
      <Helmet>
        <title>Uterine Polyps Treatment in Kolkata | Hysteroscopic Removal</title>
        <meta name="description" content="Expert diagnosis and minimally invasive removal of uterine polyps by Dr. Khooshboo Agarwal. Stop heavy bleeding and protect your fertility." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/gynecology/uterine-polyps" />
      </Helmet>
      <ServicePageTemplate
        hero={{
          tag: 'Gynecology',
          heading: 'Uterine Polyps: Diagnosis & Removal',
          subtitle: 'Overgrowths of tissue in the uterine cavity can cause severe bleeding and infertility. We offer precise diagnosis and zero-incision removal.',
          title: 'Uterine Polyps',
        }}
        intro={{
          heading: 'What are Uterine Polyps?',
          paragraphs: [
            'Uterine polyps (endometrial polyps) are overgrowths of cells in the lining of the uterus. They attach to the uterine wall by a large base or a thin stalk and extend inward into your uterine cavity.',
            'While usually noncancerous (benign), polyps can cause highly irregular menstrual bleeding, spotting between periods, and significantly interfere with embryo implantation during pregnancy or IVF.',
          ],
          highlights: [
            { icon: '🩸', title: 'Bleeding Control', desc: 'Identify the exact cause of spotting and heavy periods.' },
            { icon: '🔬', title: 'Precise Diagnosis', desc: 'Using 3D ultrasound and diagnostic hysteroscopy to locate polyps.' },
            { icon: '✨', title: 'Zero-Incision Removal', desc: 'Painless hysteroscopic polypectomy performed as a day procedure.' },
            { icon: '👶', title: 'Fertility Restoration', desc: 'Clearing the uterine cavity is a critical step before attempting IVF.' },
          ],
        }}
        sections={[
          {
            heading: 'Recognizing the Symptoms',
            subheading: 'Some polyps cause no symptoms and are found incidentally. Others cause significant distress:',
            type: 'grid',
            items: [
              { icon: '📅', title: 'Irregular Bleeding', desc: 'Unpredictable menstrual timing or bleeding between periods.' },
              { icon: '📈', title: 'Heavy Menstruation', desc: 'Excessive bleeding during your normal menstrual cycle.' },
              { icon: '🛑', title: 'Post-Menopausal Bleeding', desc: 'Any vaginal bleeding after menopause must be investigated for polyps.' },
              { icon: '📉', title: 'Infertility', desc: 'Inability to conceive or repeated miscarriages due to polyps acting like a natural IUD.' },
            ],
          },
        ]}
        faqs={[
          { question: 'Do polyps turn into cancer?', answer: 'The vast majority of uterine polyps are benign. However, a small percentage can be precancerous or cancerous, which is why surgical removal and biopsy are often recommended, especially in older or post-menopausal women.' },
          { question: 'What is a Hysteroscopic Polypectomy?', answer: 'It is a minimally invasive surgery where a thin camera (hysteroscope) is inserted through the vagina and cervix into the uterus. The polyp is then shaved off or cut away without any abdominal incisions.' },
          { question: 'Can polyps grow back?', answer: 'Yes, because polyps are sensitive to estrogen, it is possible for new ones to grow. Hormonal management is sometimes used to suppress future growth.' },
        ]}
        relatedServices={[
          { slug: 'diagnostic-hysteroscopy', icon: '🔍', title: 'Hysteroscopy', shortDesc: 'The procedure used to remove polyps.' },
          { slug: 'ivf-treatment', icon: '🧬', title: 'IVF Treatment', shortDesc: 'Conceiving safely after polyp removal.' },
        ]}
      />
    </>
  )
}
