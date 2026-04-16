import fs from 'fs';
import path from 'path';

// pSEO Variables
const conditions = [
  { name: 'PCOS', slug: 'pcos', category: 'Gynecology' },
  { name: 'Endometriosis', slug: 'endometriosis', category: 'Gynecology' },
  { name: 'Fibroids', slug: 'fibroids', category: 'Gynecology' },
  { name: 'Adenomyosis', slug: 'adenomyosis', category: 'Gynecology' },
  { name: 'Ovarian Cysts', slug: 'ovarian-cysts', category: 'Gynecology' },
  { name: 'Infertility', slug: 'infertility', category: 'Fertility Guide' },
  { name: 'Blocked Fallopian Tubes', slug: 'blocked-fallopian-tubes', category: 'Fertility Guide' }
];

const cities = [
  'Salt Lake',
  'Dumdum',
  'New Town',
  'Rajarhat',
  'Howrah',
  'Bidhannagar',
  'Kankurgachi',
  'Park Street',
  'Ballygunge',
  'Alipore',
  'South Kolkata',
  'North Kolkata',
  'VIP Road',
  'Lake Town',
  'Sector 5'
];

const modifiers = ['Expert', 'Top', 'Best', 'Leading', 'Trusted'];

const generatedPosts = [];

// Template 1: Local Condition Specialist
cities.forEach((city) => {
  conditions.forEach((cond, index) => {
    // Generate pseudorandom modifier
    const mod = modifiers[(index + city.length) % modifiers.length];
    
    // Create the blog object
    const post = {
      slug: `${mod.toLowerCase()}-${cond.slug}-specialist-${city.toLowerCase().replace(/ /g, '-')}`,
      title: `${mod} ${cond.name} Specialist in ${city}, Kolkata`,
      excerpt: `Searching for the ${mod.toLowerCase()} ${cond.name} doctor in ${city}? Dr. Khooshboo Agarwal offers trusted, advanced medical and surgical treatments tailored to your exact needs.`,
      date: 'April 15, 2026',
      author: 'Dr. Khooshboo Agarwal',
      category: cond.category,
      emoji: '🏥',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      content: \`
        <h2>Expert \${cond.name} Care in \${city}</h2>
        <p>Living with \${cond.name} can be incredibly draining, but finding the right specialist near <strong>\${city}</strong> shouldn't be. Dr. Khooshboo Agarwal is recognized as a \${mod.toLowerCase()} consultant for complex gynecological issues and fertility challenges.</p>
        
        <h2>Why Consult Us for \${cond.name}?</h2>
        <p>When searching for a doctor in \${city}, you need someone who utilizes the latest medical protocols rather than outdated advice. We focus on:</p>
        <ul>
          <li>Accurate, fast ultrasound and diagnostic screening.</li>
          <li>Conservative medical management to avoid unnecessary surgery.</li>
          <li>Advanced fertility-sparing protocols if pregnancy is a future goal.</li>
        </ul>
        
        <h2>Accessible from \${city}</h2>
        <p>Dr. Khooshboo frequently consults patients from \${city} seeking a second opinion or comprehensive management of \${cond.name}. <a href="/contact">Book your appointment</a> today for a private consultation.</p>
      \`,
      tags: [\`\${cond.name} specialist \${city}\`, \`gynecologist \${city}\`, \`\${cond.name} doctor Kolkata\`],
      linkedServices: ['/contact'],
      readTime: '3 min read'
    };
    
    generatedPosts.push(post);
  });
});

// Output generation
const outputPath = path.resolve('./src/data/generated_blogs.js');

const fileContent = \`// AUTO-GENERATED pSEO FILE - DO NOT EDIT MANUALLY
// Total Articles Generated: \${generatedPosts.length}

export const generatedPosts = \${JSON.stringify(generatedPosts, null, 2)};
\`;

fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(\`Successfully generated \${generatedPosts.length} pSEO pages to \${outputPath}\`);
