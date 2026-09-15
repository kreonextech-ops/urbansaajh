const fs = require('fs');

let content = fs.readFileSync('c:/Users/mr/Downloads/urban-saajh/urban-saajh/app/portfolio/page.tsx', 'utf8');

// For featured projects, remove aspect-square/video and bg-espresso
content = content.replace(/className=\{`relative overflow-hidden group bg-espresso \$\{i === 0 \? 'sm:col-span-2 aspect-video' : 'aspect-square'\}`\}/g, "className={`relative overflow-hidden group rounded-md bg-cream ${i === 0 ? 'sm:col-span-2' : ''}`}");
// Change w-full h-full object-cover to w-full h-auto for masonry flow
// Wait, the featured projects is a normal grid, so h-auto might make uneven rows. Let's just use aspect-video/aspect-square but without bg-espresso.
content = content.replace(/className=\{`relative overflow-hidden group bg-espresso \$\{i === 0 \? 'sm:col-span-2 aspect-video' : 'aspect-square'\}`\}/g, "className={`relative overflow-hidden group rounded-md bg-warm-white ${i === 0 ? 'sm:col-span-2 aspect-video' : 'aspect-square'}`}");

// For old works masonry grid, remove bg-espresso
content = content.replace(/<div className="group relative overflow-hidden bg-espresso cursor-pointer">/g, '<div className="group relative overflow-hidden cursor-pointer rounded-md">');
content = content.replace(/className=\{`relative overflow-hidden \$\{\s*project.size === "large" \? "aspect-\[3\/4\]" : "aspect-\[4\/3\]"\s*\}`\}/g, 'className="relative overflow-hidden"');

// Fix the img tag in masonry grid
content = content.replace(/className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/g, 'className="w-full h-auto transition-transform duration-700 group-hover:scale-105"');

// Wait, the first one was in featured projects, which we still want object-cover for.
// Let me just replace all h-full object-cover with h-auto block.
// But featured projects has grid, we need object-cover there if we kept aspect classes.
// I will just read and rewrite the file properly.

fs.writeFileSync('c:/Users/mr/Downloads/urban-saajh/urban-saajh/app/portfolio/page.tsx', content);
console.log('done portfolio page fix');
