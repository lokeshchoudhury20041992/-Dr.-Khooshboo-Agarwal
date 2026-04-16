import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function LaparoscopicCystectomy() {
  return (
    <>
      <Helmet>
        <title>Laparoscopic Ovarian Cystectomy | Minimally Invasive Surgery</title>
        <meta name="description" content="Safe, minimally invasive laparoscopic ovarian cyst removal surgery in Kolkata. Preserve your fertility with expert care from Dr. Khooshboo Agarwal." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/surgeries/laparoscopic-cystectomy" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "about": {
              "@type": "MedicalProcedure",
              "name": "Laparoscopic Ovarian Cystectomy",
              "procedureType": "SurgicalProcedure",
              "bodyLocation": "Ovaries"
            }
          })}
        </script>
      </Helmet>
      <ServicePageTemplate
        hero={{
          tag: 'Surgeries',
          heading: 'Laparoscopic Ovarian Cystectomy (Cyst Removal Surgery)',
          subtitle: 'A safe, minimally invasive approach to remove painful ovarian cysts while preserving your healthy ovarian tissue and fertility.',
          title: 'Ovarian Cystectomy',
        }}
        intro={{
          heading: 'What is a Laparoscopic Cystectomy?',
          paragraphs: [
            'An ovarian cystectomy is a surgical procedure to remove a cyst from your ovary. In a laparoscopic approach, Dr. Agarwal makes just a few tiny incisions (keyholes) in your abdomen.',
            'Using a specialized camera and miniature surgical tools, she carefully separates the cyst from the healthy ovarian tissue and removes it. This approach is heavily utilized for complex cysts such as dermoid cysts, large endometriomas (associated with Endometriosis), or suspicious cysts.',
          ],
          highlights: [
            { icon: '👁️', title: 'High Precision', desc: 'Enhanced magnification allows for meticulous cyst wall removal.' },
            { icon: '🩹', title: 'Tiny Incisions', desc: 'Minimal scarring and significantly less trauma to the abdominal wall.' },
            { icon: '🏃‍♀️', title: 'Rapid Recovery', desc: 'Return to normal routine in a fraction of the time compared to open surgery.' },
            { icon: '👶', title: 'Fertility Preservation', desc: 'Techniques specifically aimed at protecting your ovarian reserve.' },
          ],
        }}
        sections={[
          {
            heading: 'When is Surgery Necessary?',
            subheading: 'Many small cysts resolve independently. We recommend surgery when indicated by specific size and risk parameters.',
            type: 'list',
            items: [
              { title: 'Size and Persistence', desc: 'Cysts larger than 5 centimeters in diameter that do not shrink over several menstrual cycles.' },
              { title: 'Severe Pain', desc: 'Cysts causing severe, persistent pelvic pain or drastically impacting quality of life.' },
              { title: 'Complex Nature', desc: 'Suspected endometriomas (chocolate cysts) or dermoid cysts which will not resolve medically.' },
              { title: 'Risk of Torsion', desc: 'Cysts that pose a high risk of causing the ovary to twist (ovarian torsion), which is a medical emergency.' },
            ],
          },
        ]}
        faqs={[
          { question: 'Will my ovary be removed along with the cyst?', answer: 'In almost all cases, the primary goal is fertility preservation. Dr. Agarwal uses advanced techniques to strip the cyst wall away while leaving the healthy ovary intact. Removal of the entire ovary is only performed if absolutely medically necessary.' },
          { question: 'Can the cyst come back after surgery?', answer: 'Yes, certain types of cysts like endometriomas have a higher recurrence rate. We often prescribe medical management like hormonal birth control post-surgery to suppress new cyst formation.' },
          { question: 'What is the recovery timeline?', answer: 'Most patients go home the same day or the morning after surgery. You will experience abdominal soreness for a few days, but most women return to desk jobs or light activities within 1 to 2 weeks.' },
        ]}
        relatedServices={[
          { slug: 'endometriosis', icon: '🎗️', title: 'Endometriosis', shortDesc: 'Endometriomas often require surgical removal.' },
          { slug: 'diagnostic-hysteroscopy', icon: '🔬', title: 'Hysteroscopy', shortDesc: 'Internal uterine evaluation.' },
        ]}
      />
    </>
  )
}
