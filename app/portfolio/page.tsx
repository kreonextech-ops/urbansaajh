"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, SectionLabel } from "@/components/ui/shared";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// NOTE: In client components, metadata can't be exported directly.
// SEO for this page is handled by the global layout metadata.
// For per-page portfolio SEO, add metadata in a server wrapper.

const categories = ["All", ...["Previews & Mentions","Kitchen & Dining","Storage","Rooms","Living & Lounge","Architecture"]];

const projects = [
  // --- Portfolio Folder ---
  {
    id: 1,
    title: "Living 1",
    category: "Living & Lounge",
    location: "Siliguri",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/ChatGPT Image Mar 30, 2026, 09_54_23 PM.png",
    size: "large",
    description: "Elegant living area with a blend of modern and classic comfort.",
  },
  {
    id: 2,
    title: "Dining 1",
    category: "Kitchen & Dining",
    location: "Bagdogra",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/ChatGPT Image Mar 30, 2026, 09_54_34 PM.png",
    size: "medium",
    description: "A welcoming dining space designed for intimacy and style.",
  },
  {
    id: 3,
    title: "Modern Sanctuary",
    category: "Rooms",
    location: "Darjeeling",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/ChatGPT Image Mar 30, 2026, 09_54_38 PM.png",
    size: "medium",
    description: "A private retreat balanced by clean lines and serene tones.",
  },
  {
    id: 4,
    title: "Architectural Noir",
    category: "Architecture",
    location: "Siliguri",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/ChatGPT Image Mar 30, 2026, 09_54_51 PM.png",
    size: "medium",
    description: "Bold structural details making a statement of luxury.",
  },
  {
    id: 5,
    title: "Golden Lounge",
    category: "Living & Lounge",
    location: "Gangtok",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/ChatGPT Image Mar 30, 2026, 09_54_55 PM.png",
    size: "large",
    description: "Opulent seating area crafted for perfect social gatherings.",
  },
  {
    id: 6,
    title: "Sleek Suite",
    category: "Rooms",
    location: "Siliguri",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/ChatGPT Image Mar 30, 2026, 09_55_04 PM.png",
    size: "medium",
    description: "A suite defined by its uncompromising quality and soul.",
  },
  {
    id: 7,
    title: "The Gallery Wall",
    category: "Storage",
    location: "Kalimpong",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/ChatGPT Image Mar 30, 2026, 09_55_07 PM.png",
    size: "medium",
    description: "Customized display solutions for cherished collections.",
  },
  {
    id: 8,
    title: "Ambient Light",
    category: "Architecture",
    location: "Siliguri",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/ChatGPT Image Mar 30, 2026, 09_55_11 PM.png",
    size: "medium",
    description: "Innovative lighting concepts that enhance vertical spaces.",
  },
  {
    id: 9,
    title: "Urban Loft",
    category: "Living & Lounge",
    location: "Bagdogra",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/ChatGPT Image Mar 30, 2026, 09_55_14 PM.png",
    size: "large",
    description: "A refreshing modern approach with sophisticated urban touches.",
  },
  {
    id: 10,
    title: "Crystal Vista",
    category: "Rooms",
    location: "Siliguri",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/ChatGPT Image Mar 30, 2026, 10_35_39 PM.png",
    size: "medium",
    description: "Clear and refined interiors with an eye for detail.",
  },

  // --- Europa Folder (all 51 images) ---
  { id: 11, title: "Europa Check 1", category: "Previews & Mentions", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Check 1.jpg.jpeg", size: "large", description: "Design study for Europa Villa." },
  { id: 12, title: "Europa Check 2", category: "Previews & Mentions", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Check 2.jpg.jpeg", size: "medium", description: "Design study for Europa Villa." },
  { id: 13, title: "Europa Check 3", category: "Previews & Mentions", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Check 3.jpg.jpeg", size: "medium", description: "Design study for Europa Villa." },
  { id: 14, title: "Europa Check 4", category: "Previews & Mentions", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Check 4.jpg.jpeg", size: "medium", description: "Design study for Europa Villa." },
  { id: 15, title: "Europa Check 5", category: "Previews & Mentions", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Check 5.jpg.jpeg", size: "large", description: "Design study for Europa Villa." },
  { id: 16, title: "Europa Check 6", category: "Previews & Mentions", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Check 6.jpg.jpeg", size: "medium", description: "Design study for Europa Villa." },
  { id: 17, title: "Europa Check 7", category: "Previews & Mentions", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Check 7.jpg.jpeg", size: "medium", description: "Design study for Europa Villa." },
  { id: 18, title: "Europa Check 8", category: "Previews & Mentions", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Check 8.jpg.jpeg", size: "medium", description: "Design study for Europa Villa." },
  { id: 19, title: "Europa Check 9", category: "Previews & Mentions", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Check 9.jpg.jpeg", size: "large", description: "Design study for Europa Villa." },
  { id: 20, title: "Dining 1", category: "Kitchen & Dining", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Dining 1.jpg", size: "medium", description: "Dining area at Europa Villa." },
  { id: 21, title: "Kids Closet 1", category: "Storage", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Kids Closet 1.jpg", size: "medium", description: "Storage space at Europa Villa." },
  { id: 22, title: "kids closet 2", category: "Storage", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/kids closet 2.jpg", size: "medium", description: "Storage space at Europa Villa." },
  { id: 23, title: "Kids Room 1", category: "Rooms", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Kids Room 1.jpg", size: "large", description: "Kids room at Europa Villa." },
  { id: 24, title: "Kids Room 2", category: "Rooms", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Kids Room 2.jpg", size: "medium", description: "Kids room at Europa Villa." },
  { id: 25, title: "Kids Room 3", category: "Rooms", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Kids Room 3.jpg", size: "medium", description: "Kids room at Europa Villa." },
  { id: 26, title: "Kitcehn 2", category: "Kitchen & Dining", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Kitcehn 2.jpg", size: "medium", description: "Kitchen at Europa Villa." },
  { id: 27, title: "Kitchen 1", category: "Kitchen & Dining", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Kitchen 1.jpg", size: "large", description: "Kitchen at Europa Villa." },
  { id: 28, title: "Kitchen 3", category: "Kitchen & Dining", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Kitchen 3.jpg", size: "medium", description: "Kitchen at Europa Villa." },
  { id: 29, title: "Living 1", category: "Living & Lounge", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Living 1.jpg", size: "medium", description: "Living area at Europa Villa." },
  { id: 30, title: "Living 2", category: "Living & Lounge", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Living 2.jpg", size: "medium", description: "Living area at Europa Villa." },
  { id: 31, title: "living Extra", category: "Living & Lounge", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/living Extra.jpg", size: "large", description: "Living area at Europa Villa." },
  { id: 32, title: "Lounge Room 1", category: "Living & Lounge", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Lounge Room 1.jpg", size: "medium", description: "Lounge space at Europa Villa." },
  { id: 33, title: "Lounge room 2", category: "Living & Lounge", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Lounge room 2.jpg", size: "medium", description: "Lounge space at Europa Villa." },
  { id: 34, title: "Lounge Room 3", category: "Living & Lounge", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Lounge Room 3.jpg", size: "medium", description: "Lounge space at Europa Villa." },
  { id: 35, title: "lounge Room 4", category: "Living & Lounge", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/lounge Room 4.jpg", size: "large", description: "Lounge space at Europa Villa." },
  { id: 36, title: "Lounge room 5", category: "Living & Lounge", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Lounge room 5.jpg", size: "medium", description: "Lounge space at Europa Villa." },
  { id: 37, title: "Lounge Room 6", category: "Living & Lounge", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Lounge Room 6.jpg", size: "medium", description: "Lounge space at Europa Villa." },
  { id: 38, title: "Lounge room 7", category: "Living & Lounge", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Lounge room 7.jpg", size: "medium", description: "Lounge space at Europa Villa." },
  { id: 39, title: "Master Bedroom 1", category: "Rooms", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Master Bedroom 1.jpg", size: "large", description: "Bedroom at Europa Villa." },
  { id: 40, title: "Master Bedroom 2", category: "Rooms", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Master Bedroom 2.jpg", size: "medium", description: "Bedroom at Europa Villa." },
  { id: 41, title: "Master Bedroom 3", category: "Rooms", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Master Bedroom 3.jpg", size: "medium", description: "Bedroom at Europa Villa." },
  { id: 42, title: "Master Bedroom 4", category: "Rooms", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Master Bedroom 4.jpg", size: "medium", description: "Bedroom at Europa Villa." },
  { id: 43, title: "Master Bedroom 5", category: "Rooms", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Master Bedroom 5.jpg", size: "large", description: "Bedroom at Europa Villa." },
  { id: 44, title: "P1", category: "Rooms", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/P1.jpg", size: "medium", description: "Room detail at Europa Villa." },
  { id: 45, title: "P2", category: "Rooms", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/P2.jpg", size: "medium", description: "Room detail at Europa Villa." },
  { id: 46, title: "P3", category: "Rooms", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/P3.jpg", size: "medium", description: "Room detail at Europa Villa." },
  { id: 47, title: "Parents Closet 1", category: "Storage", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Parents Closet 1.jpg", size: "large", description: "Storage space at Europa Villa." },
  { id: 48, title: "Parents Closet 2", category: "Storage", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Parents Closet 2.jpg", size: "medium", description: "Storage space at Europa Villa." },
  { id: 49, title: "Parents Room 1", category: "Rooms", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Parents Room 1.jpg", size: "medium", description: "Bedroom at Europa Villa." },
  { id: 50, title: "Parents Room 2", category: "Rooms", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Parents Room 2.jpg", size: "medium", description: "Bedroom at Europa Villa." },
  { id: 51, title: "Parents Room 3", category: "Rooms", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Parents Room 3.jpg", size: "large", description: "Bedroom at Europa Villa." },
  { id: 52, title: "Staircase 2", category: "Architecture", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Staircase 2.jpg", size: "medium", description: "Architectural detail at Europa Villa." },
  { id: 53, title: "Staircase", category: "Architecture", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/Staircase.jpg", size: "medium", description: "Architectural detail at Europa Villa." },
  { id: 54, title: "WhatsApp 1", category: "Previews & Mentions", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/WhatsApp Image 2026-03-16 at 8.49.19 PM (1).jpeg", size: "medium", description: "Preview from Europa Villa." },
  { id: 55, title: "WhatsApp 2", category: "Previews & Mentions", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/WhatsApp Image 2026-03-16 at 8.49.19 PM (2).jpeg", size: "large", description: "Preview from Europa Villa." },
  { id: 56, title: "WhatsApp 3", category: "Previews & Mentions", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/WhatsApp Image 2026-03-16 at 8.49.19 PM (3).jpeg", size: "medium", description: "Preview from Europa Villa." },
  { id: 57, title: "WhatsApp 4", category: "Previews & Mentions", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/WhatsApp Image 2026-03-16 at 8.49.19 PM (4).jpeg", size: "medium", description: "Preview from Europa Villa." },
  { id: 58, title: "WhatsApp 5", category: "Previews & Mentions", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/WhatsApp Image 2026-03-16 at 8.49.19 PM.jpeg", size: "medium", description: "Preview from Europa Villa." },
  { id: 59, title: "WhatsApp 6", category: "Previews & Mentions", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/WhatsApp Image 2026-03-16 at 8.49.45 PM.jpeg", size: "large", description: "Preview from Europa Villa." },
  { id: 60, title: "WhatsApp 7", category: "Previews & Mentions", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/WhatsApp Image 2026-03-16 at 8.50.04 PM.jpeg", size: "medium", description: "Preview from Europa Villa." },
  { id: 61, title: "WhatsApp 8", category: "Previews & Mentions", location: "Europa Villa", year: "2024", area: "Residential", image: "/images/europa/WhatsApp Image 2026-03-16 at 8.55.25 PM.jpeg", size: "medium", description: "Preview from Europa Villa." },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/europa/Staircase.jpg)` }}
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

      {/* Filter & Grid */}
      <section className="bg-warm-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Filters */}
          <div className="flex flex-wrap gap-1 mb-14 border-b border-cream-dark pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-dm text-[10px] tracking-ultra-wide uppercase px-5 py-2.5 transition-all duration-200 ${
                  active === cat
                    ? "bg-espresso text-cream"
                    : "text-taupe-dark hover:text-espresso hover:bg-cream"
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto font-dm text-[10px] tracking-ultra-wide uppercase text-taupe self-center">
              {filtered.length} Projects
            </span>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className="break-inside-avoid"
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <Reveal delay={Math.min(i * 60, 400)}>
                  <div className="group relative overflow-hidden bg-espresso cursor-pointer">
                    <div
                      className={`relative overflow-hidden ${
                        project.size === "large" ? "aspect-[3/4]" : "aspect-[4/3]"
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Permanent label at bottom */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-espresso/90 via-espresso/50 to-transparent transition-all duration-500 ${
                          hovered === project.id ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                        }`}
                      >
                        <p className="font-dm text-[9px] tracking-ultra-wide uppercase text-gold/80 mb-1">
                          {project.category} · {project.location}
                        </p>
                      </div>

                      {/* Hover detail overlay */}
                      <div
                        className={`absolute inset-0 bg-espresso/75 p-6 flex flex-col justify-end transition-all duration-500 ${
                          hovered === project.id ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <p className="font-dm text-[9px] tracking-ultra-wide uppercase text-gold mb-2">
                          {project.category} · {project.year}
                        </p>
                        <p className="font-dm text-sm text-taupe leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-dm text-[9px] tracking-ultra-wide uppercase text-taupe">
                            {project.location} · {project.area}
                          </span>
                          <div className="w-8 h-8 border border-gold/50 flex items-center justify-center text-gold">
                            <ArrowUpRight size={14} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <Reveal delay={200} className="mt-20 text-center">
            <p className="font-cormorant text-2xl italic text-espresso/70 mb-6">
              Have a space in mind?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-dm text-[11px] tracking-ultra-wide uppercase px-10 py-4 bg-espresso text-cream hover:bg-espresso-light transition-all duration-300"
            >
              Start Your Project
              <ArrowRight size={13} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
