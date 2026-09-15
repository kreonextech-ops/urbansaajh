"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Home } from "lucide-react";
import { featuredProjects } from "@/lib/featured-projects";
import { Reveal, SectionLabel } from "@/components/ui/shared";

export default function PortfolioSection() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const activeProject = featuredProjects[activeProjectIdx];
  const images = activeProject.images;

  // Reset image index when project changes
  useEffect(() => {
    setActiveImageIdx(0);
    setIsAnimating(true);
    const t = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(t);
  }, [activeProjectIdx]);

  const nextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="portfolio" className="bg-[#F5F1E8] pt-24 pb-12 overflow-hidden flex flex-col">
      
      {/* Section Header */}
      <div className="max-w-[1600px] w-full mx-auto px-8 lg:px-16 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Reveal>
              <SectionLabel label="Selected Work" className="mb-4" />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-italiana text-5xl lg:text-6xl text-[#0F3B2E] tracking-wide leading-tight">
                Our Latest Projects
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 font-dm text-[11px] tracking-ultra-wide uppercase text-[#0F3B2E] border-b border-[#0F3B2E]/30 pb-1 hover:text-gold hover:border-gold transition-all duration-300"
            >
              Explore Full Portfolio
              <ArrowRight size={13} />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Top Main Section */}
      <div className="max-w-[1600px] w-full mx-auto flex flex-col lg:flex-row min-h-[600px] lg:h-[75vh]">
        
        {/* Left Panel: Project Info (approx 35%) */}
        <div className="w-full lg:w-[35%] px-8 lg:px-16 flex flex-col justify-center py-12 lg:py-0 relative">
          {/* Faint background decorative lines could go here */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 0% 0%, #0F3B2E 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-cormorant text-2xl text-espresso">{String(activeProjectIdx + 1).padStart(2, "0")}</span>
              <span className="text-taupe-dark/50">/</span>
              <span className="font-dm text-sm text-taupe-dark">{String(featuredProjects.length).padStart(2, "0")}</span>
              <div className="w-16 h-px bg-taupe-dark/30 ml-4" />
            </div>

            <h2 className="font-cormorant text-5xl lg:text-6xl text-[#0F3B2E] leading-tight mb-3 transition-opacity duration-300">
              {activeProject.title}
            </h2>
            
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-taupe-dark mb-8">
              {activeProject.description.toLowerCase().includes('under construction') ? 'Under Construction' : 'Completed'}
            </p>

            <div className="flex items-center gap-6 font-dm text-[12px] text-espresso/80 mb-8">
              <span className="flex items-center gap-2"><MapPin size={14} /> {activeProject.location}</span>
              <span className="flex items-center gap-2"><Home size={14} /> {activeProject.category}</span>
            </div>

            <p className="font-dm text-[15px] text-espresso/70 leading-relaxed mb-10 max-w-sm">
              {activeProject.description}
            </p>

            <Link
              href={`/portfolio#${activeProject.id}`}
              className="inline-flex items-center gap-3 font-dm text-[11px] tracking-widest uppercase bg-[#0F3B2E] text-cream px-8 py-4 hover:bg-[#1a4a3b] transition-colors"
            >
              View Project Details <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Center Panel: Large Image Gallery (approx 65%) */}
        <div className="w-full lg:w-[65%] relative flex flex-col">
          {/* Main Large Image */}
          <div className="relative flex-1 bg-charcoal overflow-hidden group">
            <img
              key={`${activeProjectIdx}-${activeImageIdx}`}
              src={images[activeImageIdx]}
              alt={activeProject.title}
              className={`w-full h-full object-cover transition-opacity duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
            />
            
            {/* Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={20} />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-6 right-8 text-white/90 font-dm text-[11px] tracking-widest bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
              {String(activeImageIdx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="h-24 bg-[#0F3B2E] flex">
            {images.slice(0, 10).map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={`flex-1 relative cursor-pointer overflow-hidden transition-all duration-300 ${activeImageIdx === idx ? 'opacity-100 scale-[1.02] z-10 border-2 border-gold shadow-lg' : 'opacity-60 hover:opacity-100'}`}
              >
                <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Projects Carousel */}
      <div className="bg-[#0b2b21] py-12 px-8 lg:px-16 mt-auto">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex justify-between items-center mb-8 border-b border-[#F5F1E8]/10 pb-4">
            <h3 className="font-cormorant text-2xl text-[#F5F1E8]">All Projects</h3>
            <Link href="/portfolio" className="font-dm text-[11px] tracking-widest uppercase text-gold hover:text-[#F5F1E8] transition-colors flex items-center gap-2">
              Explore More Projects <ArrowRight size={12} />
            </Link>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">
            {featuredProjects.map((project, idx) => (
              <div 
                key={project.id}
                onClick={() => setActiveProjectIdx(idx)}
                className={`snap-start min-w-[280px] lg:min-w-[320px] cursor-pointer group transition-all duration-300 ${activeProjectIdx === idx ? 'opacity-100 ring-1 ring-gold ring-offset-4 ring-offset-[#0b2b21]' : 'opacity-60 hover:opacity-100'}`}
              >
                <div className="aspect-video w-full overflow-hidden mb-4 rounded-sm">
                   <img 
                     src={project.coverImage || project.images[0]} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                     alt={project.title} 
                   />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-cormorant text-xl text-gold">{String(idx + 1).padStart(2, "0")}</span>
                      <h4 className="font-cormorant text-xl text-[#F5F1E8] truncate max-w-[200px]">{project.title.replace(/Residential|Commercial/g, '').trim()}</h4>
                    </div>
                    <p className="font-dm text-[11px] tracking-widest uppercase text-[#F5F1E8]/50 pl-8">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
