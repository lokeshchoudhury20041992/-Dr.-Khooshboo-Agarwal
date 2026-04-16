import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function DiagnosticHysteroscopy() {
  return (
    <>
      <Helmet>
        <title>Diagnostic Hysteroscopy in Kolkata | Zero Incision Uterine Scan</title>
        <meta name="description" content="Expert hysteroscopy procedure by Dr. Khooshboo Agarwal. Diagnose heavy bleeding, polyps, and recurrent miscarriages with advanced, minimally invasive care." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/surgeries/diagnostic-hysteroscopy" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "about": {
              "@type": "MedicalProcedure",
              "name": "Diagnostic Hysteroscopy",
              "procedureType": "DiagnosticProcedure",
              "bodyLocation": "Uterus"
            }
          })}
        </script>
      </Helmet>
      <ServicePageTemplate
        hero={{
          tag: 'Surgeries',
          heading: 'Diagnostic & Operative Hysteroscopy',
          subtitle: 'A highly precise, zero-incision procedure to look directly inside your uterus to diagnose and treat bleeding abnormalities or fertility issues.',
          title: 'Hysteroscopy',
        }}
        intro={{
          heading: 'What is a Hysteroscopy?',
          paragraphs: [
            'A hysteroscopy is a procedure where Dr. Agarwal uses a hysteroscope — a thin, lighted tube with a camera — to examine the inside of your cervix and uterus.',
            'Because the scope is inserted through the vagina and cervix, no abdominal incisions are required. It is the gold standard for investigating the internal uterine cavity.',
          ],
          highlights: [
            { icon: '✨', title: 'Zero Incisions', desc: 'No cuts on the abdomen ensures virtually zero visible scarring.' },
            { icon: '⏱️', title: 'Day-Case Procedure', desc: 'Most patients go home within an hour or two of the procedure.' },
            { icon: '🔬', title: 'Pinpoint Diagnosis', desc: 'Direct visualization is far more accurate than standard ultrasounds.' },
            { icon: '🛠️', title: 'See and Treat', desc: 'Operative hysteroscopy allows for immediate removal of polyps or small fibroids.' },
          ],
        }}
        sections={[
          {
            heading: 'When is a Hysteroscopy Recommended?',
            subheading: 'This procedure is a critical tool for both diagnosing (Diagnostic) and treating (Operative) uterine conditions:',
            type: 'list',
            items: [
              { title: 'Abnormal Bleeding', desc: 'Investigating unexplained heavy periods, bleeding between periods, or post-menopausal bleeding.' },
              { title: 'Polyps and Fibroids', desc: 'Locating and removing uterine polyps or small submucosal Fibroids that protrude into the cavity.' },
              { title: 'Infertility Workup', desc: 'Diagnosing causes of repeated miscarriages or ensuring the cavity is clear before an IVF cycle.' },
              { title: 'Lost IUDs', desc: 'Locating and safely retrieving a displaced intrauterine device (IUD) when the strings are not visible.' },
            ],
          },
        ]}
        faqs={[
          { question: 'Is a hysteroscopy painful?', answer: 'Most patients report only mild cramping during recovery, similar to menstrual cramps. Since the procedure is usually done under sedation or light anesthesia, you will not feel pain during the operation itself.' },
          { question: 'What is the recovery timeline like?', answer: 'Recovery is exceptionally fast. You may experience light bleeding or spotting for a few days. Normal activities can usually be resumed within 1 to 2 days.' },
          { question: 'Do I need this before IVF?', answer: 'A diagnostic hysteroscopy is frequently recommended prior to IVF Treatment to ensure the uterine cavity is completely healthy and optimized for embryo implantation.' },
        ]}
        relatedServices={[
          { slug: 'ivf-treatment', icon: '🧬', title: 'IVF Treatment', shortDesc: 'Hysteroscopy often precedes IVF.' },
          { slug: 'laparoscopic-cystectomy', icon: '🏥', title: 'Laparoscopic Surgery', shortDesc: 'Complementary minimally invasive procedure.' },
        ]}
      />
    </>
  )
}
