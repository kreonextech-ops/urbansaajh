"use client";

import { Reveal, SectionLabel } from "@/components/ui/shared";
import { Wallet, Clock, UserCheck, Gem, Smile } from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: <Wallet size={24} />,
    title: "Budget-Friendly Packages",
    description: "Premium interior design tailored to your financial comfort. We provide high-end aesthetics while respecting your investment goals.",
  },
  {
    number: "02",
    icon: <Clock size={24} />,
    title: "Timely Project Delivery",
    description: "We value your time. Our structured approach ensures every project is completed and handed over exactly as promised, without delays.",
  },
  {
    number: "03",
    icon: <UserCheck size={24} />,
    title: "Personalized Solutions",
    description: "Your space should reflect your story. We create bespoke designs that are uniquely customized to your lifestyle, needs, and personality.",
  },
  {
    number: "04",
    icon: <Gem size={24} />,
    title: "Premium Quality & Finishing",
    description: "Uncompromising standards in every detail. We use the finest materials and skilled craftsmanship to ensure a luxurious and durable finish.",
  },
  {
    number: "05",
    icon: <Smile size={24} />,
    title: "Hassle-Free Experience",
    description: "From the first concept to the final styling, we manage everything. Sit back and relax while we transform your space into a masterpiece.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-espresso py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Reveal>
            <SectionLabel label="Our Commitment" className="mb-6" />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-italiana text-5xl lg:text-6xl text-cream tracking-wide leading-tight mb-6">
              Why Choose
              <br />
              <span className="font-cormorant italic font-light text-gold/80">Urban Saajh</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-cormorant text-2xl italic text-cream/60">
              "Iconic Interiors Intelligently Designed!"
            </p>
          </Reveal>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-espresso-light border border-espresso-light">
          {reasons.map((reason, i) => (
            <Reveal key={reason.number} delay={i * 100} className="h-full">
              <div className="group bg-espresso-light hover:bg-cream transition-all duration-500 p-10 lg:p-12 h-full flex flex-col relative overflow-hidden cursor-default">
                {/* Large Background Number */}
                <p className="absolute top-4 right-6 font-cormorant text-8xl text-cream/[0.04] group-hover:text-espresso/[0.05] transition-colors duration-500 leading-none select-none">
                  {reason.number}
                </p>

                {/* Icon & Index */}
                <div className="flex items-center justify-between mb-10 relative z-10">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-espresso transition-all duration-500">
                    {reason.icon}
                  </div>
                  <span className="font-dm text-[10px] tracking-widest text-cream/50 group-hover:text-gold transition-colors duration-500 uppercase">
                    Reason {reason.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-italiana text-2xl text-cream group-hover:text-espresso tracking-wide mb-4 transition-colors duration-500 relative z-10">
                  {reason.title}
                </h3>
                <p className="font-dm text-sm text-cream/60 group-hover:text-espresso/70 leading-relaxed transition-colors duration-500 relative z-10">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}

          {/* Special Branding Block */}
          <Reveal delay={reasons.length * 100} className="h-full">
            <div className="group bg-espresso-light p-10 lg:p-12 h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
               <div className="relative z-10">
                 <p className="font-dm text-[10px] tracking-[0.4em] uppercase text-cream/50 mb-4">
                   Established Excellence
                 </p>
                 <div className="w-12 h-px bg-gold mx-auto mb-6" />
                 <p className="font-cormorant text-lg italic text-cream leading-relaxed max-w-[200px] mx-auto">
                   An Initiative by <br />
                   <span className="font-dm text-[11px] font-bold tracking-widest text-gold uppercase not-italic block mt-2">
                     HK DESIGN STUDIO
                   </span>
                 </p>
               </div>
               {/* Decorative Circle */}
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/5 rounded-full" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
