const fs = require('fs');
const path = require('path');

const europaDir = 'c:/Users/mr/Downloads/urban-saajh/urban-saajh/public/images/europa';
const portfolioDir = 'c:/Users/mr/Downloads/urban-saajh/urban-saajh/public/images/portfolio';

const archive = [];
let id = 1;

// Function to map file names to categories
function getCategory(name) {
  name = name.toLowerCase();
  if (name.includes('living') || name.includes('lounge')) return 'Living & Lounge';
  if (name.includes('kitchen') || name.includes('dining')) return 'Kitchen & Dining';
  if (name.includes('bed') || name.includes('room') || name.includes('kids')) return 'Rooms';
  if (name.includes('closet') || name.includes('wardrobe') || name.includes('storage') || name.includes('study')) return 'Storage';
  if (name.includes('stair') || name.includes('check') || name.includes('exterior') || name.includes('lift')) return 'Architecture';
  return 'Previews & Mentions';
}

function processDir(dir, prefix, defaultLocation) {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg'));
    for (const file of files) {
      archive.push({
        id: id++,
        title: file.replace(/\.[^/.]+$/, ''),
        category: getCategory(file),
        location: defaultLocation,
        image: `/images/${prefix}/${file}`,
        description: 'Design details from our studio archive.'
      });
    }
  }
}

processDir(portfolioDir, 'portfolio', 'Siliguri');
processDir(europaDir, 'europa', 'Europa Villa');

const content = `export const archiveProjects = ${JSON.stringify(archive, null, 2)};`;
fs.writeFileSync('c:/Users/mr/Downloads/urban-saajh/urban-saajh/lib/archive-projects.ts', content);
console.log('Generated archive-projects.ts with ' + archive.length + ' items');
