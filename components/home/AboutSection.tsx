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
              Urban Saajh by Tejinder Singh Bhogal was born from a powerful conviction — that design is not decoration, it is transformation. 
              We believe a space should not just look beautiful — it should elevate how you live, think, work, and feel.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="font-dm text-base text-charcoal/75 leading-relaxed mb-8">
              Rooted in Indian sensibilities yet shaped by contemporary global aesthetics, Urban Saajh creates interiors that are intelligent, refined, and deeply personal. From modern urban residences to statement commercial environments, every space we design carries clarity of vision and strength of character.
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
                src="/images/europa/Living 1.jpg"
                alt="Luxury living room render"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden">
              <img
                src="/images/europa/Dining 1.jpg"
                alt="Modern dining interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden">
              <img
                src="/images/europa/Master Bedroom 1.jpg"
                alt="Elegant bedroom design"
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
              A Vision Shaped
              <br />
              <span className="font-cormorant italic font-light">by Purpose</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-dm text-base text-charcoal/75 leading-relaxed mb-6">
              Urban Saajh was not created to design showpieces. It was created to design homes that feel lived in, loved, and lasting.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="font-dm text-base text-charcoal/75 leading-relaxed mb-8">
              Tejinder Singh Bhogal believes a home should reflect the rhythm of your life — your routines, your gatherings, your quiet mornings, your ambitious evenings. Not a staged showroom. Not a social media trend. But a space that feels unmistakably yours.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="grid sm:grid-cols-3 gap-8 mb-10 py-8 border-t border-cream-dark">
              {[
                {
                  title: "MODERN. INTENTIONAL. TIMELESS.",
                  desc: "Every line has clarity. Every material has meaning. Every decision has purpose.",
                },
                {
                  title: "REFINED MINIMAL LUXURY",
                  desc: "Luxury is not loud. It is disciplined restraint executed beautifully with premium materials.",
                },
                {
                  title: "DESIGNED FOR REAL LIFE",
                  desc: "A beautiful space must also work beautifully for real meals, conversations, and families.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <p className="font-dm text-[10px] tracking-ultra-wide uppercase text-gold mb-2">
                    {item.title}
                  </p>
                  <p className="font-dm text-xs text-charcoal/70 leading-relaxed">
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
