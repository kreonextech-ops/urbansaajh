const fs = require('fs');

let p = fs.readFileSync('c:/Users/mr/Downloads/urban-saajh/urban-saajh/components/home/PortfolioSection.tsx', 'utf8');

// Section heading: text-espresso -> text-cream
p = p.replace(
  'text-5xl lg:text-6xl text-espresso tracking-wide leading-tight',
  'text-5xl lg:text-6xl text-cream tracking-wide leading-tight'
);
// "of Excellence" span
p = p.replace(
  '<span className="font-cormorant italic font-light">of Excellence</span>',
  '<span className="font-cormorant italic font-light text-gold/80">of Excellence</span>'
);
// View All Projects link
p = p.replace(
  'uppercase text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition-all duration-300 flex-shrink-0',
  'uppercase text-cream/70 border-b border-cream/30 pb-1 hover:text-gold hover:border-gold transition-all duration-300 flex-shrink-0'
);
// Project title h3
p = p.replace(
  'text-4xl lg:text-5xl text-espresso tracking-wide',
  'text-4xl lg:text-5xl text-cream tracking-wide'
);
// Project description
p = p.replace(
  'text-base text-taupe-dark leading-relaxed',
  'text-base text-cream/65 leading-relaxed'
);
// Explore Project link
p = p.replace(
  'uppercase text-espresso hover:text-gold transition-colors',
  'uppercase text-cream/70 hover:text-gold transition-colors'
);
// Bottom CTA italic text
p = p.replace(
  'text-2xl italic text-espresso/70 mb-6',
  'text-2xl italic text-cream/70 mb-6'
);
// Bottom CTA link
p = p.replace(
  'border border-espresso text-espresso hover:bg-espresso hover:text-cream',
  'border border-cream/50 text-cream hover:bg-cream hover:text-espresso'
);

fs.writeFileSync('c:/Users/mr/Downloads/urban-saajh/urban-saajh/components/home/PortfolioSection.tsx', p);
console.log('portfolio done');
