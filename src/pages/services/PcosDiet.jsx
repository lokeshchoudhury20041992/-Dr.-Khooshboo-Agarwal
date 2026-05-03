import { Helmet } from 'react-helmet-async'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function PcosDiet() {
  return (
    <>
      <Helmet>
        <title>PCOS Diet and Lifestyle Management in Kolkata | Nutrition Guide</title>
        <meta name="description" content="Expert PCOS diet and lifestyle plan in Kolkata by Dr. Khooshboo Agarwal. Reverse insulin resistance, manage weight, and boost fertility naturally." />
        <link rel="canonical" href="https://www.drkhooshbooagarwal.com/gynecology/pcos-diet" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "about": {
              "@type": "MedicalCondition",
              "name": "Polycystic Ovary Syndrome (PCOS)",
              "possibleTreatment": {
                "@type": "LifestyleModification",
                "name": "PCOS Diet Plan"
              }
            }
          })}
        </script>
      </Helmet>
      <ServicePageTemplate
        hero={{
          tag: 'Gynecology and Nutrition',
          heading: 'PCOS Diet and Lifestyle Management: Healing From Within',
          subtitle: 'Medicine is only half the battle. Reversing PCOS symptoms starts on your plate. Dr. Khooshboo Agarwal offers practical, evidence-based nutrition strategies to regain control of your hormones.',
          title: 'PCOS Diet and Lifestyle',
        }}
        intro={{
          heading: 'Why Does Diet Matter for PCOS?',
          paragraphs: [
            'Over 70% of women diagnosed with PCOS have varying degrees of insulin resistance. This means your body struggles to use insulin effectively, leading to high blood sugar levels. In response, your body pumps out more insulin, which directly triggers your ovaries to produce excess testosterone.',
            'This domino effect causes the hallmark symptoms of PCOS: rapid weight gain, stubborn abdominal fat, acne, facial hair, and irregular ovulation.',
          ],
          highlights: [
            { icon: '🥦', title: 'Targeted Nutrition', desc: 'Custom meal strategies to lower insulin spikes throughout the day.' },
            { icon: '🏋️‍♀️', title: 'Movement Prescriptions', desc: 'Strength training to enhance muscle glucose uptake.' },
            { icon: '📉', title: 'Sustainable Weight Loss', desc: 'Focusing on fat loss without highly restrictive fad diets.' },
            { icon: '👶', title: 'Boosted Fertility', desc: 'Natural ovulation often returns with a 5-10% reduction in body weight.' },
          ],
        }}
        sections={[
          {
            heading: 'Building the Perfect PCOS Plate',
            subheading: 'Small daily changes yield massive hormonal shifts over time.',
            type: 'list',
            items: [
              { title: 'Embrace Complex Carbohydrates', desc: 'Swap white rice and Maida for brown rice, quinoa, and whole oats to prevent blood sugar spikes.' },
              { title: 'Prioritize Lean Protein', desc: 'Include lentils, chickpeas, eggs, or lean chicken in every meal to keep you full and stabilize hormones.' },
              { title: 'Healthy Fats', desc: 'Almonds, walnuts, chia seeds, and avocados combat chronic inflammation caused by PCOS.' },
              { title: 'Anti-Inflammatory Spices', desc: 'Turmeric and cinnamon are clinically proven to improve insulin sensitivity.' },
            ],
          },
        ]}
        faqs={[
          { question: 'Should I go completely dairy-free or gluten-free for PCOS?', answer: 'Not necessarily. Unless you have a diagnosed intolerance or celiac disease, completely eliminating gluten or dairy is not medically required. Focus on reducing highly processed foods and added sugars first.' },
          { question: 'Do I need medication if I exercise and eat right?', answer: 'Many women manage their PCOS almost entirely through lifestyle changes. However, some may still need medications like Metformin or letrozole (for fertility) to kickstart the process. We evaluate this on a case-by-case basis.' },
        ]}
        relatedServices={[
          { slug: 'pcos-treatment', icon: '🔬', title: 'PCOS Medical Management', shortDesc: 'Our core PCOS diagnostic and medical page.' },
          { slug: 'ivf-treatment', icon: '🧬', title: 'IVF Treatment', shortDesc: 'For advanced fertility assistance.' },
        ]}
      />
    </>
  )
}
