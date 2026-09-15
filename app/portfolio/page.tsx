"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal, SectionLabel } from "@/components/ui/shared";
import { ArrowRight, MapPin, Home, ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/featured-projects";
import { archiveProjects } from "@/lib/archive-projects";
import { Lightbox } from "@/components/ui/Lightbox";

const categories = ["All", "Previews & Mentions", "Kitchen & Dining", "Storage", "Rooms", "Living & Lounge", "Architecture"];

const getGridClasses = (index: number, total: number) => {
  let classes = "col-span-1 row-span-1";
  
  if (total === 3) {
    if (index === 0) classes = "col-span-2 row-span-2";
  } 
  else if (total === 4) {
    if (index === 0) classes = "col-span-2 lg:col-span-3 row-span-2"; 
    if (index === 3) classes = "col-span-2 lg:col-span-1 row-span-1";
  }
  else if (total === 5) {
    if (index === 0) classes = "col-span-2 row-span-2";
    if (index === 3) classes = "col-span-2 row-span-1"; 
    if (index === 4) classes = "col-span-2 lg:col-span-1 row-span-1";
  }
  else if (total >= 6) {
    if (index === 0) classes = "col-span-2 row-span-2";
    if (index === 5) classes = "col-span-2 lg:col-span-1 row-span-1";
  }
  return classes;
};

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setCurrentGallery(images);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const filtered = active === "All" ? archiveProjects : archiveProjects.filter((p) => p.category === active);
  const archiveImageUrls = filtered.map(p => p.image);

  return (
    <div className="bg-warm-white min-h-screen">
      <Lightbox
        isOpen={lightboxOpen}
        images={currentGallery}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentIndex}
      />

      {/* 1. Hero (Cinematic Full Bleed) */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/europa/Master Bedroom 2.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center px-6 mt-8">
          <Reveal>
            <p className="font-dm text-[11px] tracking-[0.4em] uppercase text-gold mb-6">
              A Curation of our Finest
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-italiana text-5xl lg:text-7xl text-cream tracking-wide leading-none mb-6">
              Spaces That
              <br />
              <span className="font-cormorant italic font-light text-gold/80">Tell Stories</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
             <div className="w-16 h-px bg-gold mx-auto mt-8" />
          </Reveal>
        </div>
      </section>

      {/* 2. The 6 Featured Projects */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-40 lg:space-y-56">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const allImages = project.images;
            const len = allImages.length;
            
            // Determine how many images to show on the grid (max 6 to keep it clean)
            let maxVisible = 6;
            if (len <= 6) maxVisible = len;

            const extraCount = Math.max(0, len - maxVisible);

            return (
              <div key={project.id} id={project.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-start`}>
                
                {/* Text Block */}
                <div className="w-full lg:w-1/3 flex flex-col relative sticky top-32">
                  <Reveal>
                    <span className="font-cormorant text-6xl italic text-gold/30 mb-6 block">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                  </Reveal>
                  
                  <Reveal delay={100}>
                    <h2 className="font-italiana text-4xl lg:text-5xl text-espresso tracking-wide mb-6">
                      {project.title}
                    </h2>
                  </Reveal>
                  
                  <Reveal delay={200}>
                    <div className="flex items-center gap-6 font-dm text-[10px] tracking-widest uppercase text-taupe-dark border-b border-gold/20 pb-6 mb-8">
                      <span className="flex items-center gap-2"><MapPin size={13} className="text-gold" /> {project.location}</span>
                      <span className="flex items-center gap-2"><Home size={13} className="text-gold" /> {project.category}</span>
                    </div>
                  </Reveal>

                  <Reveal delay={300}>
                    <p className="font-dm text-sm text-charcoal/75 leading-relaxed">
                      {project.description}
                    </p>
                  </Reveal>
                </div>

                {/* Bento Image Grid */}
                <div className="w-full lg:w-2/3">
                  <Reveal delay={200}>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 auto-rows-[150px] sm:auto-rows-[200px] lg:auto-rows-[250px]">
                      {allImages.slice(0, maxVisible).map((img, i) => {
                        const gridClasses = getGridClasses(i, maxVisible);
                        const isLastVisible = i === maxVisible - 1;
                        const hasMore = extraCount > 0;

                        return (
                          <div 
                            key={i} 
                            onClick={() => openLightbox(allImages, i)}
                            className={`relative overflow-hidden group cursor-pointer ${gridClasses} bg-cream-dark/30 rounded-sm`}
                          >
                            <img 
                              src={img} 
                              alt={`${project.title} - view ${i + 1}`} 
                              className={`w-full h-full object-cover transition-transform duration-1000 ${hasMore && isLastVisible ? 'opacity-50' : 'group-hover:scale-105'}`}
                            />
                            
                            {/* Overlay for remaining images */}
                            {hasMore && isLastVisible && (
                              <div className="absolute inset-0 bg-espresso/80 flex flex-col items-center justify-center text-cream transition-colors group-hover:bg-espresso">
                                <span className="font-cormorant text-4xl lg:text-5xl italic">+{extraCount}</span>
                                <span className="font-dm text-[9px] tracking-widest uppercase mt-2 text-gold">View Gallery</span>
                              </div>
                            )}

                            {/* Hover overlay for normal images */}
                            {(!hasMore || !isLastVisible) && (
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full border border-cream/50 flex items-center justify-center text-cream backdrop-blur-sm">
                                  <ArrowUpRight size={16} />
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </Reveal>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CTA Banner */}
      <section className="bg-espresso py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/europa/Living%201.jpg')] opacity-[0.03] bg-cover bg-center mix-blend-overlay" />
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="text-center md:text-left">
            <Reveal>
              <p className="font-dm text-[11px] tracking-mega-wide uppercase text-gold mb-4">Have a project in mind?</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-italiana text-5xl lg:text-6xl text-cream tracking-wide leading-tight">
                Let's Design Your
                <br />
                <span className="font-cormorant italic font-light text-gold/80">Dream Space</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 font-dm text-[11px] tracking-ultra-wide uppercase px-10 py-5 bg-gold text-espresso hover:bg-cream transition-all duration-300 whitespace-nowrap"
            >
              Start the Conversation
              <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4. Studio Archive */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <Reveal>
                <SectionLabel label="Studio Archive" className="mb-4" />
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-italiana text-4xl lg:text-5xl text-espresso tracking-wide">
                  Details & Design Moments
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <p className="font-cormorant text-xl italic text-taupe-dark max-w-sm lg:text-right">
                A glimpse into our process, materials, spaces and everything in between.
              </p>
            </Reveal>
          </div>

          {/* Interactive Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-dm text-[10px] tracking-widest uppercase px-6 py-3 transition-all duration-300 border ${
                  active === cat
                    ? "bg-espresso text-cream border-espresso"
                    : "border-gold/30 text-espresso hover:border-espresso hover:bg-espresso/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* CSS to hide orphaned grid items so the bottom is always perfectly flush */}
          <style dangerouslySetInnerHTML={{__html: `
            /* lg screens (3 columns) */
            @media (min-width: 1024px) {
              .archive-grid > div:nth-child(3n+1):last-child { display: none; }
              .archive-grid > div:nth-child(3n+2):last-child { display: none; }
              .archive-grid > div:nth-child(3n+1):nth-last-child(2) { display: none; }
            }
            /* sm screens (2 columns) */
            @media (min-width: 640px) and (max-width: 1023px) {
              .archive-grid > div:nth-child(2n+1):last-child { display: none; }
            }
          `}} />

          {/* Uniform Grid instead of Masonry to avoid jagged bottoms */}
          <div className="archive-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className="group relative overflow-hidden cursor-pointer rounded-sm bg-cream-dark/20 aspect-[4/5]"
                onClick={() => openLightbox(archiveImageUrls, i)}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <Reveal delay={Math.min(i * 50, 300)} className="w-full h-full">
                  <div className="w-full h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Permanent subtle label */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent transition-all duration-500 ${
                        hovered === project.id ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                      }`}
                    >
                      <p className="font-dm text-[9px] tracking-widest uppercase text-gold/90">
                        {project.category}
                      </p>
                    </div>

                    {/* Hover detail overlay */}
                    <div
                      className={`absolute inset-0 bg-espresso/80 p-6 flex flex-col justify-between transition-all duration-500 ${
                        hovered === project.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-12 h-12 border border-cream/50 rounded-full flex items-center justify-center text-cream backdrop-blur-sm">
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-t border-gold/20 pt-4">
                        <span className="font-dm text-[9px] tracking-widest uppercase text-gold">
                          {project.category}
                        </span>
                        <span className="font-dm text-[9px] tracking-widest uppercase text-gold/70">
                          {project.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}
