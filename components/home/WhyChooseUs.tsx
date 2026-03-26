"use client";

import { Reveal, SectionLabel } from "@/components/ui/shared";
import { Wallet, Clock, UserCheck, Gem, Smile, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: <Wallet size={20} />,
    title: "Budget-Friendly Packages",
    description: "High-end luxury design that respects your investment and maximizes value.",
  },
  {
    icon: <Clock size={20} />,
    title: "Timely Project Delivery",
    description: "We stick to our timelines, ensuring you move into your new space exactly as planned.",
  },
  {
    icon: <UserCheck size={20} />,
    title: "Personalized Design Solutions",
    description: "Every home we craft is unique, reflecting your personal story and lifestyle.",
  },
  {
    icon: <Gem size={20} />,
    title: "Premium Quality Materials & Finishing",
    description: "Zero compromise on quality. We use only the finest materials and master craftsmen.",
  },
  {
    icon: <Smile size={20} />,
    title: "Hassle-Free Experience",
    description: "From the first concept to the final handover, we manage every single detail for you.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <Reveal>
              <SectionLabel label="Our Values" className="mb-6" />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-italiana text-5xl lg:text-6xl text-espresso tracking-wide leading-tight mb-4">
                Why Choose
                <br />
                <span className="font-cormorant italic font-light">Urban Saajh</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-cormorant text-xl italic text-gold mb-10">
                Iconic Interiors Intelligently Designed!
              </p>
            </Reveal>

            {/* Reasons List */}
            <div className="space-y-8 mb-12">
              {reasons.map((reason, i) => (
                <Reveal key={reason.title} delay={200 + i * 100}>
                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-full border border-cream-dark bg-warm-white flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300 flex-shrink-0">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="font-italiana text-xl text-espresso tracking-wide mb-1">
                        {reason.title}
                      </h3>
                      <p className="font-dm text-sm text-charcoal/70 leading-relaxed max-w-md">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={800}>
              <div className="pt-8 border-t border-cream-dark">
                <p className="font-dm text-[9px] tracking-[0.4em] uppercase text-taupe-dark">
                  An Initiative by <span className="text-espresso font-medium">HK DESIGN STUDIO</span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: Visual */}
          <Reveal delay={400} className="relative">
            <div className="relative aspect-[4/5] rounded-t-[200px] overflow-hidden group">
              <img
                src="/images/europa/942.jpg"
                alt="Bespoke Interior Design"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-espresso/10 group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 right-10 bg-warm-white/90 backdrop-blur-md p-8 border-l border-gold shadow-2xl max-w-[200px]">
                <p className="font-cormorant text-3xl italic text-espresso leading-tight mb-2">
                  "Excellence in every detail."
                </p>
                <div className="w-8 h-px bg-gold mb-2" />
                <p className="font-dm text-[9px] tracking-widest uppercase text-taupe-dark">
                  Quality Guaranteed
                </p>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
