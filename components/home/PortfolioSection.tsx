"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal, SectionLabel } from "@/components/ui/shared";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 101,
    title: "Bespoke Residence I",
    category: "Living & Lounge",
    location: "Siliguri",
    year: "2024",
    image: "/images/portfolio/_DSC0937.jpg",
  },
  {
    id: 105,
    title: "Luxe Living",
    category: "Living & Lounge",
    location: "Gangtok",
    year: "2024",
    image: "/images/portfolio/_DSC0954.jpg",
  },
  {
    id: 106,
    title: "Sophisticated Suite",
    category: "Rooms",
    location: "Siliguri",
    year: "2024",
    image: "/images/portfolio/_DSC0959.jpg",
  },
  {
    id: 109,
    title: "Urban Oasis",
    category: "Living & Lounge",
    location: "Bagdogra",
    year: "2024",
    image: "/images/portfolio/_DSC0967.jpg",
  },
  {
    id: 113,
    title: "Timeless Texture",
    category: "Living & Lounge",
    location: "Gangtok",
    year: "2024",
    image: "/images/portfolio/_DSC0977.jpg",
  },
  {
    id: 103,
    title: "The Golden Hour",
    category: "Kitchen & Dining",
    location: "Darjeeling",
    year: "2024",
    image: "/images/portfolio/_DSC0948.jpg",
  },
];

const categories = ["All", "Living & Lounge", "Rooms", "Kitchen & Dining"];

export default function PortfolioSection() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <Reveal>
              <SectionLabel label="Selected Work" className="mb-6" />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-italiana text-5xl lg:text-6xl text-espresso tracking-wide leading-tight">
                Our Portfolio
                <br />
                <span className="font-cormorant italic font-light">of Excellence</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 font-dm text-[11px] tracking-ultra-wide uppercase text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition-all duration-300 flex-shrink-0"
            >
              View All Projects
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Reveal>
        </div>

        {/* Filters */}
        <Reveal delay={150}>
          <div className="flex gap-6 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-dm text-[10px] tracking-ultra-wide uppercase pb-1 transition-all duration-200 ${
                  active === cat
                    ? "text-gold border-b border-gold"
                    : "text-taupe-dark hover:text-espresso border-b border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Symmetrical 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <Link href={`/portfolio`} className="group block relative overflow-hidden bg-espresso">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    style={{ "--tw-scale-x": "1.08", "--tw-scale-y": "1.08" } as React.CSSProperties}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/60 transition-all duration-500 flex items-end p-6">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                      <p className="font-dm text-[9px] tracking-ultra-wide uppercase text-gold mb-2">
                        {project.category} · {project.location}
                      </p>
                      <h3 className="font-italiana text-2xl text-cream tracking-wide">
                        {/* {project.title} */}
                      </h3>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="font-dm text-[10px] tracking-ultra-wide uppercase text-taupe">
                          View Project
                        </span>
                        <ArrowRight size={11} className="text-gold" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Below image info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-espresso/80 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <p className="font-dm text-[9px] tracking-ultra-wide uppercase text-gold/80">
                    {project.category}
                  </p>
                  {/* <p className="font-cormorant text-lg italic text-cream">{project.title}</p> */}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
