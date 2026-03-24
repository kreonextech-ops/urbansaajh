const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const publicEuropaDir = path.join(rootDir, 'public', 'images', 'europa');
const pageFile = path.join(rootDir, 'app', 'portfolio', 'page.tsx');

const files = fs.readdirSync(publicEuropaDir).filter(f => f.match(/\.(jpe?g|png|webp)$/i));

const getCategory = (filename) => {
    const lower = filename.toLowerCase();
    if (lower.includes('living') || lower.includes('lounge')) return 'Living & Lounge';
    if (lower.includes('bedroom') || lower.includes('room') || lower.includes('p1') || lower.includes('p2') || lower.includes('p3')) return 'Rooms';
    if (lower.includes('kitchen') || lower.includes('dining') || lower.includes('kitcehn')) return 'Kitchen & Dining';
    if (lower.includes('closet')) return 'Storage';
    if (lower.includes('staircase')) return 'Architecture';
    if (lower.includes('check') || lower.includes('whatsapp')) return 'Previews & Mentions';
    return 'Other';
};

const getSize = (index) => {
    return index % 4 === 0 ? 'large' : 'medium';
}

let projectsStr = 'const projects = [\n';
files.forEach((file, idx) => {
    const category = getCategory(file);
    let title = file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
    
    projectsStr += `  {
    id: ${idx + 1},
    title: ${JSON.stringify(title)},
    category: ${JSON.stringify(category)},
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/${file}",
    size: ${JSON.stringify(getSize(idx))},
    description: "Detailed architectural and interior view of ${title}.",
  },\n`;
});
projectsStr += '];\n';

const categories = Array.from(new Set(files.map(getCategory)));
const categoriesStr = `const categories = ["All", ...${JSON.stringify(categories)}];\n`;

let pageContent = fs.readFileSync(pageFile, 'utf8');

pageContent = pageContent.replace(/const categories = \[.*?\];/s, categoriesStr.trim());
pageContent = pageContent.replace(/const projects = \[.*?\];/s, projectsStr.trim());

fs.writeFileSync(pageFile, pageContent);
console.log(`Successfully injected ${files.length} images into portfolio page!`);
