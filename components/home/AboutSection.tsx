"use client";

import Link from "next/link";
import { Reveal, SectionLabel } from "@/components/ui/shared";
import { ArrowRight } from "lucide-react";
import { FounderVideo } from "@/components/ui/FounderVideo";

export default function AboutSection() {
  return (
    <section id="about" className="bg-warm-white">
      {/* — Part 1: About Us Written — */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <Reveal>
            <SectionLabel label="About Urban Saajh" className="mb-6" />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-italiana text-5xl lg:text-6xl text-espresso tracking-wide leading-tight mb-8">
              Where Design
              <br />
              <span className="font-cormorant italic font-light">meets Soul</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-dm text-base text-charcoal/75 leading-relaxed mb-6">
              Urban Saajh was born from a simple but powerful belief — that a beautifully designed space has the power to transform how you live, feel, and thrive. We are a versatile interior design studio rooted in the rich cultural tapestry of India, crafting thoughtful spaces for every budget and lifestyle.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="font-dm text-base text-charcoal/75 leading-relaxed mb-8">
              Every project we undertake is an intimate collaboration — we listen deeply, design thoughtfully, and execute flawlessly. From the sweep of a grand living room to the quiet comfort of a private study, we bring the same level of devotion to every inch.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex gap-10 mb-6 py-4 border-t border-cream-dark">
              {[
                { value: "50+", label: "Projects" },
                { value: "4+", label: "Years" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-cormorant text-3xl text-gold">{s.value}</p>
                  <p className="font-dm text-[9px] tracking-ultra-wide uppercase text-taupe mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={500}>
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 font-dm text-[11px] tracking-ultra-wide uppercase text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition-all duration-300"
            >
              Our Full Story
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Reveal>
        </div>

        {/* Right: Image grid */}
        <Reveal delay={200} className="relative">
          <div className="grid grid-cols-2 gap-3 h-[520px]">
            <div className="relative overflow-hidden row-span-2">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
                alt="Luxury living room"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80"
                alt="Modern interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80"
                alt="Elegant bedroom"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          {/* Decorative tag */}
          <div className="absolute -bottom-6 -right-4 bg-espresso px-6 py-4 shadow-lg">
            <p className="font-cormorant text-lg italic text-cream">
              "Thoughtfully crafted,<br />lovingly designed."
            </p>
          </div>
        </Reveal>
      </div>

      {/* — Part 2: Founder Section — */}
      <div className="bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Founder Image */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 pointer-events-none" />
              <FounderVideo />
              <div className="absolute bottom-6 -right-6 bg-gold px-6 py-3 z-30 shadow-lg">
                <p className="font-italiana text-xl text-espresso tracking-widest">Tejinder Singh Bhogal</p>
                <p className="font-dm text-[9px] tracking-ultra-wide uppercase text-espresso/70 mt-0.5">
                  Founder & Principal Designer
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: Founder Story */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionLabel label="Meet the Founder" className="mb-6" />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-italiana text-5xl lg:text-6xl text-espresso tracking-wide leading-tight mb-8">
                A Vision Born
                <br />
                <span className="font-cormorant italic font-light">from Passion</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-dm text-base text-charcoal/75 leading-relaxed mb-8">
                Tejinder's approach is rooted in a simple truth — a home should feel like yours, not like a showroom. He designs for everyday life: real meals, real routines, real people — not for an Instagram grid.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                {[
                  {
                    title: "Modern & Considered",
                    desc: "Clean lines, purposeful choices, nothing unnecessary. Every element earns its place.",
                  },
                  {
                    title: "Minimal Luxury",
                    desc: "Luxury isn't about excess — it's restraint done beautifully. Quality over quantity, always.",
                  },
                  {
                    title: "Built for Living",
                    desc: "Spaces that work as hard as you do. Comfortable, functional, and genuinely yours.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="font-dm text-[10px] tracking-ultra-wide uppercase text-gold mb-2">
                      {item.title}
                    </p>
                    <p className="font-dm text-sm text-charcoal/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={500}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 font-dm text-[11px] tracking-ultra-wide uppercase text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition-all duration-300"
              >
                Read Full Story
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
