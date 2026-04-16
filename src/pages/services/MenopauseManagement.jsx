import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function MenopauseManagement() {
  return (
    <>
      <Helmet>
        <title>Menopause Management & HRT in Kolkata | Gynecologist</title>
        <meta name="description" content="Expert menopause management in Kolkata. Find relief from hot flashes, mood swings, and vaginal dryness with Dr. Khooshboo Agarwal's customized HRT and lifestyle plans." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/gynecology/menopause-management" />
      </Helmet>
      <ServicePageTemplate
        hero={{
          tag: 'Gynecology & Aging',
          heading: 'Menopause Management: Navigating the Change',
          subtitle: 'Menopause is a natural transition, but the symptoms do not have to disrupt your life. Discover safe, effective management strategies tailored to your body.',
          title: 'Menopause Care',
        }}
        intro={{
          heading: 'What to Expect During Perimenopause and Menopause',
          paragraphs: [
            'Menopause officially marks the point when you have not had a menstrual period for 12 consecutive months. However, the transitional period leading up to it — known as perimenopause — can start in your 40s and bring severe hormonal fluctuations.',
            'As your ovaries drastically reduce their production of estrogen and progesterone, you may experience profound physical and emotional changes. Dr. Khooshboo Agarwal’s management protocol focuses on alleviating immediate discomfort while protecting your long-term bone and cardiovascular health.',
          ],
          highlights: [
            { icon: '🔥', title: 'Hot Flash Relief', desc: 'Identify triggers and utilize safe medications to cool your body.' },
            { icon: '🦴', title: 'Osteoporosis Prevention', desc: 'Estrogen loss causes rapid bone density loss. We focus on halting it.' },
            { icon: '💬', title: 'Sexual Health', desc: 'Addressing vaginal dryness, thinning tissue, and painful intercourse.' },
            { icon: '🧠', title: 'Mood Stabilization', desc: 'Managing the anxiety, brain fog, and depression linked to hormonal drops.' },
          ],
        }}
        sections={[
          {
            heading: 'Understanding Hormone Replacement Therapy (HRT)',
            subheading: 'HRT replaces the estrogen and progesterone your body stops making. While highly effective, it is highly customized:',
            type: 'list',
            items: [
              { title: 'Estrogen Therapy', desc: 'The most effective treatment for relieving menopausal hot flashes and preventing bone loss. It comes in pills, patches, gels, or sprays.' },
              { title: 'Combined Therapy', desc: 'If you still have your uterus, progesterone is prescribed alongside estrogen to protect the uterine lining from cancer risks.' },
              { title: 'Vaginal Estrogen', desc: 'For women whose only symptoms are vaginal dryness or pain during sex, a low-dose localized estrogen cream or tablet provides immense relief without systemic effects.' },
            ],
          },
        ]}
        faqs={[
          { question: 'Is Hormone Replacement Therapy (HRT) safe?', answer: 'For most healthy women under 60 who start HRT within 10 years of menopause, the benefits heavily outweigh the risks. However, HRT is not appropriate for everyone, especially those with a history of breast cancer or blood clots. Dr. Khooshboo will thoroughly review your medical history first.' },
          { question: 'What can I do if I am not a candidate for HRT?', answer: 'There are excellent non-hormonal medications available to treat hot flashes and vaginal dryness. We also lean heavily on targeted diet, calcium, Vitamin D supplementation, and strength-training exercises to protect your bones.' },
          { question: 'Why is sex suddenly painful after menopause?', answer: 'The drop in estrogen causes the vaginal tissues to become thin, dry, and less elastic — a condition known as vaginal atrophy. It is incredibly common and highly treatable with local estrogen therapy or medical-grade moisturizers.' },
        ]}
        relatedServices={[
          { slug: 'sexual-health', icon: '💬', title: 'Sexual Health', shortDesc: 'Private counselling for painful intercourse.' },
          { slug: 'contraception', icon: '💊', title: 'Contraception', shortDesc: 'Needed until you hit the 12-month mark!' },
        ]}
      />
    </>
  )
}
