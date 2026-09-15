const fs = require('fs');

let p = fs.readFileSync('c:/Users/mr/Downloads/urban-saajh/urban-saajh/components/home/WhyChooseUs.tsx', 'utf8');

// Section bg
p = p.replace('className="bg-warm-white py-24 lg:py-32">', 'className="bg-espresso py-24 lg:py-32">');

// Main heading
p = p.replace(
  'text-5xl lg:text-6xl text-espresso tracking-wide leading-tight mb-6',
  'text-5xl lg:text-6xl text-cream tracking-wide leading-tight mb-6'
);
// Subheading span
p = p.replace(
  'font-cormorant italic font-light text-taupe-dark',
  'font-cormorant italic font-light text-gold/80'
);
// Quote text
p = p.replace(
  'text-2xl italic text-charcoal/70',
  'text-2xl italic text-cream/60'
);

// Grid separator bg
p = p.replace(
  'grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-dark border border-cream-dark',
  'grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-espresso-light border border-espresso-light'
);

// Cards: default bg and hover
p = p.replace(
  'group bg-warm-white hover:bg-espresso transition-all duration-500 p-10 lg:p-12 h-full flex flex-col relative overflow-hidden cursor-default',
  'group bg-espresso-light hover:bg-cream transition-all duration-500 p-10 lg:p-12 h-full flex flex-col relative overflow-hidden cursor-default'
);

// Large bg number color
p = p.replace(
  'text-espresso/[0.03] group-hover:text-cream/[0.05]',
  'text-cream/[0.04] group-hover:text-espresso/[0.05]'
);

// Icon circle hover
p = p.replace(
  'group-hover:bg-gold group-hover:text-espresso',
  'group-hover:bg-gold group-hover:text-espresso'
); // stays same

// "Reason XX" text
p = p.replace(
  'text-taupe group-hover:text-gold',
  'text-cream/50 group-hover:text-gold'
);

// Card title
p = p.replace(
  'text-espresso group-hover:text-cream tracking-wide mb-4 transition-colors duration-500 relative z-10',
  'text-cream group-hover:text-espresso tracking-wide mb-4 transition-colors duration-500 relative z-10'
);

// Card description
p = p.replace(
  'text-charcoal/70 group-hover:text-taupe leading-relaxed transition-colors duration-500 relative z-10',
  'text-cream/60 group-hover:text-espresso/70 leading-relaxed transition-colors duration-500 relative z-10'
);

// Branding block bg
p = p.replace('group bg-cream-light p-10', 'group bg-espresso-light p-10');
p = p.replace(
  'text-taupe-dark mb-4',
  'text-cream/50 mb-4'
);
p = p.replace(
  'text-lg italic text-espresso leading-relaxed',
  'text-lg italic text-cream leading-relaxed'
);
p = p.replace(
  'font-bold tracking-widest text-espresso uppercase not-italic block mt-2',
  'font-bold tracking-widest text-gold uppercase not-italic block mt-2'
);

fs.writeFileSync('c:/Users/mr/Downloads/urban-saajh/urban-saajh/components/home/WhyChooseUs.tsx', p);
console.log('why-choose done');
