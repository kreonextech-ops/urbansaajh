const fs = require('fs');

let content = fs.readFileSync('c:/Users/mr/Downloads/urban-saajh/urban-saajh/app/portfolio/page.tsx', 'utf8');

const importsToAdd = `import { featuredProjects } from "@/lib/featured-projects";\n`;
content = content.replace('import { ArrowRight, ArrowUpRight } from "lucide-react";', 'import { ArrowRight, ArrowUpRight } from "lucide-react";\n' + importsToAdd);

const returnStart = content.indexOf('return (');

const jsxToInject = `
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: \`url(/images/europa/Staircase.jpg)\` }}
        />
        <div className="absolute inset-0 bg-espresso/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <SectionLabel label="Our Work" className="mb-4" />
          <h1 className="font-italiana text-5xl lg:text-7xl text-cream tracking-wider">Portfolio</h1>
          <p className="font-cormorant text-xl italic text-taupe mt-3">
            Every project is a collaboration. Every space is a story.
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-warm-white py-16 lg:py-24 border-b border-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel label="Featured Projects" className="mb-12" />
          
          <div className="space-y-24">
            {featuredProjects.map((project, idx) => (
              <div key={project.id} id={project.id} className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-24">
                  <h2 className="font-italiana text-3xl lg:text-4xl text-espresso tracking-wide">
                    {project.title}
                  </h2>
                  <p className="font-dm text-sm text-taupe-dark leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.images.map((img, i) => (
                    <div key={i} className={\`relative overflow-hidden group bg-espresso \${i === 0 ? 'sm:col-span-2 aspect-video' : 'aspect-square'}\`}>
                      <img 
                        src={img} 
                        alt={\`\${project.title} - Image \${i+1}\`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Grid (Previous Works) */}
      <section className="bg-warm-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="mb-12">
            <h2 className="font-italiana text-3xl lg:text-4xl text-espresso tracking-wide mb-6">
              Previous Works & Previews
            </h2>
            <p className="font-cormorant text-lg italic text-taupe-dark">
              A curated selection of our earlier design studies and random works.
            </p>
          </div>
`;

// Replace from 'return (' to the start of '{/* Filters */}' with the new JSX
const filterStart = content.indexOf('{/* Filters */}');

// The original JSX to be replaced is from returnStart to filterStart.
const firstPart = content.substring(0, returnStart) + 'return (' + jsxToInject;
const secondPart = content.substring(filterStart);

fs.writeFileSync('c:/Users/mr/Downloads/urban-saajh/urban-saajh/app/portfolio/page.tsx', firstPart + secondPart);
console.log('Done');
