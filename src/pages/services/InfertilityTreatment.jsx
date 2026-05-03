import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function InfertilityTreatment() {
  return (
    <>
      <Helmet>
        <title>Infertility Treatment and IVF in Kolkata | Dr. Khooshboo Agarwal</title>
        <meta name="description" content="Infertility specialist in Kolkata. Dr. Khooshboo Agarwal offers IUI, IVF and ART at IRM Kolkata. Serving patients from Saltlake, Bidhannagar, Dumdum and Laketown." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/services/infertility-treatment" />
      </Helmet>
      <ServicePageTemplate
        hero={{
          tag: 'Infertility and ART',
          heading: 'Infertility Treatment and ART in Kolkata',
          subtitle: 'The journey to parenthood is not always straightforward. Dr. Khooshboo Agarwal walks with you every step of the way — with expertise, honesty, and hope.',
          title: 'Infertility Treatment',
        }}
        intro={{
          heading: 'You Are Not Alone in This',
          paragraphs: [
            'Infertility is defined as the inability to conceive after 12 months of regular, unprotected intercourse (or 6 months if the woman is over 35). It affects roughly 10–15% of couples in India — and the numbers are rising in urban areas like Kolkata.',
            'Dr. Khooshboo Agarwal trained at the Institute of Reproductive Medicine (IRM), Kolkata — one of India\'s premier fertility institutions. She offers a full range of fertility evaluations, including Diagnostic Hysteroscopy, to ensure uterine health before commencing treatments.',
          ],
          highlights: [
            { icon: '🔬', title: 'IRM Kolkata Trained', desc: 'Advanced fertility training at one of India\'s top ART centres.' },
            { icon: '👨‍👩‍👧', title: 'Couple-Centred Care', desc: 'Infertility evaluation for both partners — male and female factors investigated equally.' },
            { icon: '💉', title: 'IUI and IVF Services', desc: 'From basic ovulation induction to full ART cycles, tailored to your diagnosis.' },
            { icon: '💬', title: 'Emotional Support', desc: 'Fertility treatment is emotionally intense. Dr. Khooshboo ensures you feel supported at every step.' },
          ],
        }}
        sections={[
          {
            heading: 'Fertility Treatments Offered',
            subheading: 'Treatment depends on the diagnosis. Dr. Khooshboo starts with the least invasive option.',
            type: 'list',
            items: [
              { title: 'Ovulation Induction', desc: 'Stimulating egg release using medication in women who are not ovulating regularly — often the first step for PCOS-related infertility.' },
              { title: 'Intrauterine Insemination (IUI)', desc: 'Placing washed sperm directly into the uterus during ovulation — a minimally invasive option for mild male factor or unexplained infertility.' },
              { title: 'In Vitro Fertilisation (IVF)', desc: 'Fertilising eggs outside the body and transferring the resulting embryo — indicated for blocked tubes, severe male factor, or failed simpler treatments.' },
              { title: 'Frozen Embryo Transfer (FET)', desc: 'Using previously frozen embryos from an IVF cycle — often with better success rates than fresh transfers.' },
              { title: 'Male Factor Infertility (Azoospermia)', desc: 'Evaluation and referral for surgical sperm retrieval in cases of azoospermia, coordinated with the ART cycle.' },
            ],
          },
        ]}
        faqs={[
          { question: 'When should a couple seek infertility treatment?', answer: 'If you have been trying to conceive for 12 months without success (or 6 months if over 35), it is time to see a specialist. Earlier is always better, as fertility tends to decline with age.' },
          { question: 'Is IVF the only option for infertility?', answer: 'No. Many couples conceive with simpler treatments like ovulation induction or IUI. Dr. Khooshboo uses a step-wise approach — starting with the least invasive treatment appropriate for your diagnosis.' },
          { question: 'Does Dr. Khooshboo treat male infertility too?', answer: 'Yes. A semen analysis is part of the standard fertility work-up. She addresses male factor infertility including low sperm count, poor motility, and azoospermia — coordinating with urologists and andrologists when needed.' },
          { question: 'Is there an infertility specialist near Saltlake and Bidhannagar?', answer: 'Yes. Dr. Khooshboo Agarwal consults at IRM Kolkata and ILS Saltlake among other hospitals — making her accessible to patients across Saltlake, Bidhannagar, New Town, and Dumdum.' },
        ]}
        relatedServices={[
          { slug: 'pcos-treatment', icon: '🔬', title: 'PCOS Treatment', shortDesc: 'PCOS is a leading cause of female infertility.' },
          { slug: 'preconception-counselling', icon: '💑', title: 'Preconception Counselling', shortDesc: 'Before starting fertility treatment or trying naturally.' },
        ]}
      />
    </>
  )
}
