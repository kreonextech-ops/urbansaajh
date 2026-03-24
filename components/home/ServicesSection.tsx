"use client";

import Link from "next/link";
import { Reveal, SectionLabel } from "@/components/ui/shared";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Residential Design",
    subtitle: "Your home, perfected.",
    description:
      "From private villas to luxury apartments, we design living spaces that reflect who you are — balancing comfort, beauty, and your unique lifestyle.",
    image: "/images/services/residential.png",
  },
  {
    number: "02",
    title: "Commercial Interiors",
    subtitle: "Spaces that inspire work.",
    description:
      "Offices, showrooms, and hospitality spaces designed to elevate brand identity and create environments where productivity and elegance coexist.",
    image: "/images/services/commercial-no-brand.png",
  },
  {
    number: "03",
    title: "Turnkey Projects",
    subtitle: "Zero stress, total luxury.",
    description:
      "We manage the entire journey — from concept to construction to final styling — delivering a fully finished space with no compromise on quality.",
    image: "/images/services/turnkey.png",
  },
  {
    number: "04",
    title: "Space Planning",
    subtitle: "Every inch, intentional.",
    description:
      "Expert space analysis and layout design to maximize functionality and flow, ensuring your space works as beautifully as it looks.",
    image: "/images/services/space-planning.png",
  },
  {
    number: "05",
    title: "Custom Furniture",
    subtitle: "Made for you, only you.",
    description:
      "Custom-designed furniture pieces crafted by master artisans to complement your space perfectly — one-of-a-kind pieces with lasting character.",
    image: "/images/services/custom-furniture.png",
  },
  {
    number: "06",
    title: "Consultation",
    subtitle: "Luxury design, anywhere.",
    description:
      "Bring Urban Saajh's expertise to your doorstep, wherever you are. Detailed consultations with mood boards, 3D visualizations, and material guides.",
    image: "/images/services/consultation-v2.png",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-warm-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <SectionLabel label="What We Offer" className="mb-6" />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-italiana text-5xl lg:text-6xl text-espresso tracking-wide leading-tight">
                Our Design
                <br />
                <span className="font-cormorant italic font-light">Services</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 font-dm text-[11px] tracking-ultra-wide uppercase text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition-all duration-300 flex-shrink-0"
            >
              All Services
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-dark">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={i * 80}>
              <div className="group bg-warm-white hover:bg-espresso transition-all duration-500 p-8 flex flex-col h-full cursor-pointer overflow-hidden relative">
                {/* Number */}
                <p className="font-cormorant text-6xl text-cream-dark group-hover:text-espresso-light transition-colors duration-500 absolute top-6 right-8 leading-none select-none">
                  {service.number}
                </p>

                {/* Image */}
                <div className="relative overflow-hidden mb-6 h-44">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <p className="font-cormorant text-xs italic text-gold mb-2">
                  {service.subtitle}
                </p>
                <h3 className="font-italiana text-2xl text-espresso group-hover:text-cream tracking-wide mb-3 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="font-dm text-sm text-charcoal/65 group-hover:text-taupe leading-relaxed flex-grow transition-colors duration-500">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <p className="font-dm text-[10px] tracking-mega-wide uppercase text-gold mb-4">
            Interior Design for Every Space
          </p>
                  <ArrowRight size={11} className="text-gold" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
