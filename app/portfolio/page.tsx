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
  {
    id: 101,
    title: "Bespoke Residence I",
    category: "Living & Lounge",
    location: "Siliguri",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/_DSC0937.jpg",
    size: "large",
    description: "A sophisticated blend of modern luxury and functional elegance.",
  },
  {
    id: 102,
    title: "Modern Minimalist",
    category: "Rooms",
    location: "Bagdogra",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/_DSC0942.jpg",
    size: "medium",
    description: "Clean lines and a muted palette create a serene private retreat.",
  },
  {
    id: 103,
    title: "The Golden Hour",
    category: "Kitchen & Dining",
    location: "Darjeeling",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/_DSC0948.jpg",
    size: "medium",
    description: "A warm and inviting dining space designed for shared moments.",
  },
  {
    id: 104,
    title: "Elegant Entryway",
    category: "Architecture",
    location: "Siliguri",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/_DSC0952.jpg",
    size: "medium",
    description: "The first impression of a home designed to wow.",
  },
  {
    id: 105,
    title: "Luxe Living",
    category: "Living & Lounge",
    location: "Gangtok",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/_DSC0954.jpg",
    size: "large",
    description: "Opulence meets comfort in this expansive living area.",
  },
  {
    id: 106,
    title: "Sophisticated Suite",
    category: "Rooms",
    location: "Siliguri",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/_DSC0959.jpg",
    size: "medium",
    description: "A master suite designed with uncompromised quality and soul.",
  },
  {
    id: 107,
    title: "The Grand Library",
    category: "Storage",
    location: "Kalimpong",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/_DSC0961.jpg",
    size: "medium",
    description: "Custom-built storage that serves as a focal point of the home.",
  },
  {
    id: 108,
    title: "Celestial Ceiling",
    category: "Architecture",
    location: "Siliguri",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/_DSC0965.jpg",
    size: "medium",
    description: "Innovative architectural lighting that elevates the ambience.",
  },
  {
    id: 109,
    title: "Urban Oasis",
    category: "Living & Lounge",
    location: "Bagdogra",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/_DSC0967.jpg",
    size: "large",
    description: "A refreshing take on urban living with a touch of nature.",
  },
  {
    id: 110,
    title: "The Serene Spa",
    category: "Rooms",
    location: "Siliguri",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/_DSC0969.jpg",
    size: "medium",
    description: "Bringing the spa experience into the comfort of home.",
  },
  {
    id: 111,
    title: "Curated Collection",
    category: "Storage",
    location: "Darjeeling",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/_DSC0971.jpg",
    size: "medium",
    description: "Thoughtfully designed display and storage solutions.",
  },
  {
    id: 112,
    title: "Architectural Symmetry",
    category: "Architecture",
    location: "Siliguri",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/_DSC0974.jpg",
    size: "medium",
    description: "Precision-engineered spaces that feel perfectly balanced.",
  },
  {
    id: 113,
    title: "Timeless Texture",
    category: "Living & Lounge",
    location: "Gangtok",
    year: "2024",
    area: "Residential",
    image: "/images/portfolio/_DSC0977.jpg",
    size: "large",
    description: "Rich textures and palettes that stand the test of time.",
  },
  {
    id: 1,
    title: "Check 1.jpg",
    category: "Previews & Mentions",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Check 1.jpg.jpeg",
    size: "large",
    description: "Detailed architectural and interior view of Check 1.jpg.",
  },
  {
    id: 2,
    title: "Check 2.jpg",
    category: "Previews & Mentions",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Check 2.jpg.jpeg",
    size: "medium",
    description: "Detailed architectural and interior view of Check 2.jpg.",
  },
  {
    id: 3,
    title: "Check 3.jpg",
    category: "Previews & Mentions",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Check 3.jpg.jpeg",
    size: "medium",
    description: "Detailed architectural and interior view of Check 3.jpg.",
  },
  {
    id: 4,
    title: "Check 4.jpg",
    category: "Previews & Mentions",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Check 4.jpg.jpeg",
    size: "medium",
    description: "Detailed architectural and interior view of Check 4.jpg.",
  },
  {
    id: 5,
    title: "Check 5.jpg",
    category: "Previews & Mentions",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Check 5.jpg.jpeg",
    size: "large",
    description: "Detailed architectural and interior view of Check 5.jpg.",
  },
  {
    id: 6,
    title: "Check 6.jpg",
    category: "Previews & Mentions",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Check 6.jpg.jpeg",
    size: "medium",
    description: "Detailed architectural and interior view of Check 6.jpg.",
  },
  {
    id: 7,
    title: "Check 7.jpg",
    category: "Previews & Mentions",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Check 7.jpg.jpeg",
    size: "medium",
    description: "Detailed architectural and interior view of Check 7.jpg.",
  },
  {
    id: 8,
    title: "Check 8.jpg",
    category: "Previews & Mentions",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Check 8.jpg.jpeg",
    size: "medium",
    description: "Detailed architectural and interior view of Check 8.jpg.",
  },
  {
    id: 9,
    title: "Check 9.jpg",
    category: "Previews & Mentions",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Check 9.jpg.jpeg",
    size: "large",
    description: "Detailed architectural and interior view of Check 9.jpg.",
  },
  {
    id: 10,
    title: "Dining 1",
    category: "Kitchen & Dining",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Dining 1.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Dining 1.",
  },
  {
    id: 11,
    title: "Kids Closet 1",
    category: "Storage",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Kids Closet 1.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Kids Closet 1.",
  },
  {
    id: 12,
    title: "kids closet 2",
    category: "Storage",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/kids closet 2.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of kids closet 2.",
  },
  {
    id: 13,
    title: "Kids Room 1",
    category: "Rooms",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Kids Room 1.jpg",
    size: "large",
    description: "Detailed architectural and interior view of Kids Room 1.",
  },
  {
    id: 14,
    title: "Kids Room 2",
    category: "Rooms",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Kids Room 2.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Kids Room 2.",
  },
  {
    id: 15,
    title: "Kids Room 3",
    category: "Rooms",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Kids Room 3.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Kids Room 3.",
  },
  {
    id: 16,
    title: "Kitcehn 2",
    category: "Kitchen & Dining",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Kitcehn 2.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Kitcehn 2.",
  },
  {
    id: 17,
    title: "Kitchen 1",
    category: "Kitchen & Dining",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Kitchen 1.jpg",
    size: "large",
    description: "Detailed architectural and interior view of Kitchen 1.",
  },
  {
    id: 18,
    title: "Kitchen 3",
    category: "Kitchen & Dining",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Kitchen 3.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Kitchen 3.",
  },
  {
    id: 19,
    title: "Living 1",
    category: "Living & Lounge",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Living 1.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Living 1.",
  },
  {
    id: 20,
    title: "Living 2",
    category: "Living & Lounge",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Living 2.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Living 2.",
  },
  {
    id: 21,
    title: "living Extra",
    category: "Living & Lounge",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/living Extra.jpg",
    size: "large",
    description: "Detailed architectural and interior view of living Extra.",
  },
  {
    id: 22,
    title: "Lounge Room 1",
    category: "Living & Lounge",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Lounge Room 1.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Lounge Room 1.",
  },
  {
    id: 23,
    title: "Lounge room 2",
    category: "Living & Lounge",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Lounge room 2.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Lounge room 2.",
  },
  {
    id: 24,
    title: "Lounge Room 3",
    category: "Living & Lounge",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Lounge Room 3.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Lounge Room 3.",
  },
  {
    id: 25,
    title: "lounge Room 4",
    category: "Living & Lounge",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/lounge Room 4.jpg",
    size: "large",
    description: "Detailed architectural and interior view of lounge Room 4.",
  },
  {
    id: 26,
    title: "Lounge room 5",
    category: "Living & Lounge",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Lounge room 5.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Lounge room 5.",
  },
  {
    id: 27,
    title: "Lounge Room 6",
    category: "Living & Lounge",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Lounge Room 6.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Lounge Room 6.",
  },
  {
    id: 28,
    title: "Lounge room 7",
    category: "Living & Lounge",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Lounge room 7.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Lounge room 7.",
  },
  {
    id: 29,
    title: "Master Bedroom 1",
    category: "Rooms",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Master Bedroom 1.jpg",
    size: "large",
    description: "Detailed architectural and interior view of Master Bedroom 1.",
  },
  {
    id: 30,
    title: "Master Bedroom 2",
    category: "Rooms",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Master Bedroom 2.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Master Bedroom 2.",
  },
  {
    id: 31,
    title: "Master Bedroom 3",
    category: "Rooms",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Master Bedroom 3.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Master Bedroom 3.",
  },
  {
    id: 32,
    title: "Master Bedroom 4",
    category: "Rooms",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Master Bedroom 4.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Master Bedroom 4.",
  },
  {
    id: 33,
    title: "Master Bedroom 5",
    category: "Rooms",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Master Bedroom 5.jpg",
    size: "large",
    description: "Detailed architectural and interior view of Master Bedroom 5.",
  },
  {
    id: 34,
    title: "P1",
    category: "Rooms",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/P1.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of P1.",
  },
  {
    id: 35,
    title: "P2",
    category: "Rooms",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/P2.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of P2.",
  },
  {
    id: 36,
    title: "P3",
    category: "Rooms",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/P3.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of P3.",
  },
  {
    id: 37,
    title: "Parents Closet 1",
    category: "Storage",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Parents Closet 1.jpg",
    size: "large",
    description: "Detailed architectural and interior view of Parents Closet 1.",
  },
  {
    id: 38,
    title: "Parents Closet 2",
    category: "Storage",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Parents Closet 2.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Parents Closet 2.",
  },
  {
    id: 39,
    title: "Parents Room 1",
    category: "Rooms",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Parents Room 1.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Parents Room 1.",
  },
  {
    id: 40,
    title: "Parents Room 2",
    category: "Rooms",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Parents Room 2.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Parents Room 2.",
  },
  {
    id: 41,
    title: "Parents Room 3",
    category: "Rooms",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Parents Room 3.jpg",
    size: "large",
    description: "Detailed architectural and interior view of Parents Room 3.",
  },
  {
    id: 42,
    title: "Staircase 2",
    category: "Architecture",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Staircase 2.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Staircase 2.",
  },
  {
    id: 43,
    title: "Staircase",
    category: "Architecture",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/Staircase.jpg",
    size: "medium",
    description: "Detailed architectural and interior view of Staircase.",
  },
  {
    id: 44,
    title: "WhatsApp Image 2026 03 16 at 8.49.19 PM (1)",
    category: "Previews & Mentions",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/WhatsApp Image 2026-03-16 at 8.49.19 PM (1).jpeg",
    size: "medium",
    description: "Detailed architectural and interior view of WhatsApp Image 2026 03 16 at 8.49.19 PM (1).",
  },
  {
    id: 45,
    title: "WhatsApp Image 2026 03 16 at 8.49.19 PM (2)",
    category: "Previews & Mentions",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/WhatsApp Image 2026-03-16 at 8.49.19 PM (2).jpeg",
    size: "large",
    description: "Detailed architectural and interior view of WhatsApp Image 2026 03 16 at 8.49.19 PM (2).",
  },
  {
    id: 46,
    title: "WhatsApp Image 2026 03 16 at 8.49.19 PM (3)",
    category: "Previews & Mentions",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/WhatsApp Image 2026-03-16 at 8.49.19 PM (3).jpeg",
    size: "medium",
    description: "Detailed architectural and interior view of WhatsApp Image 2026 03 16 at 8.49.19 PM (3).",
  },
  {
    id: 47,
    title: "WhatsApp Image 2026 03 16 at 8.49.19 PM (4)",
    category: "Previews & Mentions",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/WhatsApp Image 2026-03-16 at 8.49.19 PM (4).jpeg",
    size: "medium",
    description: "Detailed architectural and interior view of WhatsApp Image 2026 03 16 at 8.49.19 PM (4).",
  },
  {
    id: 48,
    title: "WhatsApp Image 2026 03 16 at 8.49.19 PM",
    category: "Previews & Mentions",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/WhatsApp Image 2026-03-16 at 8.49.19 PM.jpeg",
    size: "medium",
    description: "Detailed architectural and interior view of WhatsApp Image 2026 03 16 at 8.49.19 PM.",
  },
  {
    id: 49,
    title: "WhatsApp Image 2026 03 16 at 8.49.45 PM",
    category: "Previews & Mentions",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/WhatsApp Image 2026-03-16 at 8.49.45 PM.jpeg",
    size: "large",
    description: "Detailed architectural and interior view of WhatsApp Image 2026 03 16 at 8.49.45 PM.",
  },
  {
    id: 50,
    title: "WhatsApp Image 2026 03 16 at 8.50.04 PM",
    category: "Previews & Mentions",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/WhatsApp Image 2026-03-16 at 8.50.04 PM.jpeg",
    size: "medium",
    description: "Detailed architectural and interior view of WhatsApp Image 2026 03 16 at 8.50.04 PM.",
  },
  {
    id: 51,
    title: "WhatsApp Image 2026 03 16 at 8.55.25 PM",
    category: "Previews & Mentions",
    location: "Europa Villa",
    year: "2024",
    area: "Residential",
    image: "/images/europa/WhatsApp Image 2026-03-16 at 8.55.25 PM.jpeg",
    size: "medium",
    description: "Detailed architectural and interior view of WhatsApp Image 2026 03 16 at 8.55.25 PM.",
  },
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
