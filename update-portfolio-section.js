const fs = require('fs');

let content = fs.readFileSync('c:/Users/mr/Downloads/urban-saajh/urban-saajh/components/home/PortfolioSection.tsx', 'utf8');

const importsToAdd = `import { featuredProjects } from "@/lib/featured-projects";\n`;
content = content.replace('import { ArrowRight } from "lucide-react";', 'import { ArrowRight } from "lucide-react";\n' + importsToAdd);

// Replace the projects array
const projectsRegex = /const projects = \[.*?\];/s;
const newProjectsCode = `const projects = featuredProjects.slice(0, 6).map(p => ({
  id: p.id,
  title: p.title,
  category: "Featured",
  location: "Urban Saajh",
  image: p.coverImage
}));`;

content = content.replace(projectsRegex, newProjectsCode);

// update categories
content = content.replace('const categories = ["All", "Living & Lounge", "Rooms", "Kitchen & Dining"];', 'const categories = ["All", "Featured"];');

// update Link href to point to the hash
content = content.replace(/href=\{\`\/portfolio\`\}/g, 'href={`/portfolio#${project.id}`}');

fs.writeFileSync('c:/Users/mr/Downloads/urban-saajh/urban-saajh/components/home/PortfolioSection.tsx', content);
console.log('done');
