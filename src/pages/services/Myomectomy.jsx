import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function Myomectomy() {
  return (
    <>
      <Helmet>
        <title>Laparoscopic Myomectomy in Kolkata | Fibroid Removal Surgery</title>
        <meta name="description" content="Safe laparoscopic myomectomy (fibroid removal) surgery in Kolkata. Preserve your uterus and fertility with Dr. Khooshboo Agarwal's minimally invasive expertise." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/surgeries/myomectomy" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "about": {
              "@type": "MedicalProcedure",
              "name": "Laparoscopic Myomectomy",
              "procedureType": "SurgicalProcedure"
            }
          })}
        </script>
      </Helmet>
      <ServicePageTemplate
        hero={{
          tag: 'Surgeries',
          heading: 'Laparoscopic Myomectomy: Fertility-Sparing Fibroid Surgery',
          subtitle: 'Remove painful uterine fibroids while completely preserving your uterus. Advanced minimally invasive surgery for a faster, safer recovery.',
          title: 'Myomectomy',
        }}
        intro={{
          heading: 'What is a Myomectomy?',
          paragraphs: [
            'A myomectomy is a specialized surgical procedure designed to remove uterine fibroids (leiomyomas) while leaving the uterus intact. Unlike a Hysterectomy (which removes the entire uterus), a myomectomy is the gold-standard surgical option for women who wish to retain their fertility or simply wish to keep their uterus.',
            'Whenever medically viable, Dr. Khooshboo Agarwal performs this surgery laparoscopically. Using keyhole incisions and a camera, the fibroids are removed with extreme precision.',
          ],
          highlights: [
            { icon: '🩹', title: 'Minimal Scarring', desc: 'Avoids the large abdominal incision of an open myomectomy.' },
            { icon: '⏱️', title: 'Shorter Stay', desc: 'Hospital stay of just 1-2 days instead of a full week.' },
            { icon: '👶', title: 'Uterus Preservation', desc: 'Maintains your ability to carry a pregnancy in the future.' },
            { icon: '🩸', title: 'Symptom Relief', desc: 'Immediate relief from heavy anemic bleeding and pelvic pressure.' },
          ],
        }}
        sections={[
          {
            heading: 'When is a Myomectomy Recommended?',
            subheading: 'Fibroids are very common, and many do not require surgery. However, intervention is advised if fibroids cause:',
            type: 'list',
            items: [
              { title: 'Excessive Bleeding', desc: 'Prolonged, heavy menstrual bleeding leading to severe anemia and weakness.' },
              { title: 'Severe Pain', desc: 'Debilitating pelvic pain, painful intercourse, or lower back pain due to fibroid pressure.' },
              { title: 'Organ Compression', desc: 'Compression of the bladder causing frequent urination, or compression of the bowel causing constipation.' },
              { title: 'Infertility Issues', desc: 'Infertility or repeated miscarriages due to distortion of the uterine cavity by submucosal fibroids.' },
            ],
          },
        ]}
        faqs={[
          { question: 'Can fibroids grow back after a myomectomy?', answer: 'Yes, because the uterus is preserved, new fibroids can develop over time. However, removing existing problematic fibroids provides immense, often permanent relief from immediate symptoms.' },
          { question: 'How soon can I get pregnant after fibroid surgery?', answer: 'The uterus needs adequate time to heal to prevent complications like rupture during pregnancy. Dr. Agarwal typically recommends waiting 3 to 6 months before trying to conceive naturally or via IVF.' },
        ]}
        relatedServices={[
          { slug: 'adenomyosis', icon: '🩸', title: 'Adenomyosis', shortDesc: 'A condition often confused with fibroids.' },
          { slug: 'laparoscopic-cystectomy', icon: '🏥', title: 'Ovarian Cystectomy', shortDesc: 'Another fertility-sparing surgery.' },
        ]}
      />
    </>
  )
}
