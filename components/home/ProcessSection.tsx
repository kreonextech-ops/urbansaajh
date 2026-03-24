"use client";

import Link from "next/link";
import { Reveal, SectionLabel } from "@/components/ui/shared";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Vision",
    description:
      "Our journey begins with you. A deep-dive consultation to understand your lifestyle, aspirations, and the story you want your space to tell.",
    detail: "1–2 weeks",
  },
  {
    number: "02",
    title: "Concept Design",
    description:
      "We translate insights into visual concepts — mood boards, material palettes, spatial layouts, and the design language that will define your space.",
    detail: "2–3 weeks",
  },
  {
    number: "03",
    title: "Design Development",
    description:
      "Detailed floor plans, 3D visualizations, and refined material selections bring the concept to life with precision and clarity.",
    detail: "3–4 weeks",
  },
  {
    number: "04",
    title: "Sourcing & Procurement",
    description:
      "We curate and procure every element — furniture, fixtures, art, and accessories — from trusted artisans and premium suppliers globally.",
    detail: "4–6 weeks",
  },
  {
    number: "05",
    title: "Execution & Installation",
    description:
      "Our skilled project managers oversee every detail of construction and installation, ensuring flawless quality at every stage.",
    detail: "6–12 weeks",
  },
  {
    number: "06",
    title: "The Grand Reveal",
    description:
      "A white-glove handover — your space, fully styled and perfected, ready for you to walk in and fall in love.",
    detail: "Final week",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-cream-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <SectionLabel label="How We Work" className="mb-6" />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-italiana text-5xl lg:text-6xl text-espresso tracking-wide leading-tight">
                Our Design
                <br />
                <span className="font-cormorant italic font-light text-taupe-dark">Process</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Link
              href="/process"
              className="group inline-flex items-center gap-3 font-dm text-[11px] tracking-ultra-wide uppercase text-espresso border-b border-espresso/20 pb-1 hover:text-gold hover:border-gold transition-all duration-300 flex-shrink-0"
            >
              Explore Process
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Reveal>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100} className="h-full">
              <div className="group bg-cream hover:bg-warm-white transition-colors duration-300 p-8 lg:p-10 relative overflow-hidden h-full">
                {/* Large background number */}
                <p className="absolute top-4 right-6 font-cormorant text-8xl text-gold/10 group-hover:text-gold/20 transition-colors duration-300 leading-none select-none">
                  {step.number}
                </p>

                {/* Small number badge */}
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center mb-6 group-hover:border-gold transition-colors duration-300">
                  <span className="font-dm text-[10px] tracking-wide text-gold">{step.number}</span>
                </div>

                <h3 className="font-italiana text-2xl text-espresso tracking-wide mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="font-dm text-sm text-charcoal/70 leading-relaxed mb-6 relative z-10">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={200} className="mt-16 text-center">
          <p className="font-cormorant text-2xl italic text-charcoal/75 mb-6">
            Ready to begin your transformation?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-dm text-[11px] tracking-ultra-wide uppercase px-10 py-4 bg-gold text-espresso hover:bg-gold-light transition-all duration-300"
          >
            Start Your Project
            <ArrowRight size={13} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
