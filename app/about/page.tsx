import type { Metadata } from "next";
import { PageHero, Reveal, SectionLabel } from "@/components/ui/shared";
import { FounderVideo } from "@/components/ui/FounderVideo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Tejinder Singh Bhogal | Interior Designer Bagdogra & Siliguri",
  description:
    "Meet Tejinder Singh Bhogal, founder of Urban Saajh — a premier interior design studio based in Bagdogra, serving Siliguri, Darjeeling, Kurseong, Kalimpong, Sikkim, and North Bengal. Discover our story, philosophy, and design approach.",
  keywords: [
    "interior designer Bagdogra", "Tejinder Singh Bhogal interior designer",
    "interior design studio North Bengal", "best interior designer Siliguri",
    "interior designer Darjeeling hills", "Urban Saajh about",
    "interior designer Kalimpong", "interior designer Kurseong",
    "interior designer Sikkim", "interior design North Bengal",
  ],
  openGraph: {
    title: "About Urban Saajh — Interior Designer Bagdogra & Siliguri",
    description: "Premier interior design studio by Tejinder Singh Bhogal, serving Bagdogra, Siliguri, Darjeeling, Kalimpong, Kurseong, and Sikkim.",
  },
};

const values = [
  { title: "Intention",    description: "Every element we choose has a reason. We don't decorate — we design with purpose." },
  { title: "Authenticity", description: "Your space should reflect you, not design trends. We create genuinely personal interiors." },
  { title: "Excellence",   description: "We hold ourselves to the highest standard — from the first sketch to the final installation." },
  { title: "Harmony",      description: "Beautiful spaces balance aesthetics with function. We never sacrifice one for the other." },
];


export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <PageHero
        label="Our Story"
        title="About Urban Saajh"
        subtitle="Born from passion. Built on purpose. Defined by beauty."
        image="/images/europa/Staircase.jpg"
      />



      {/* ── FULL-BLEED INTRO QUOTE ── */}
      <section className="bg-cream py-20 lg:py-28">
        <Reveal>
          <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
            <p className="font-cormorant text-3xl lg:text-5xl italic text-espresso leading-snug">
              "Urban Saajh was born from a powerful conviction — that design is not decoration, it is
              <span className="text-gold"> transformation. </span>"
            </p>
            <div className="w-12 h-px bg-gold mx-auto mt-10" />
          </div>
        </Reveal>
      </section>

      {/* ── FOUNDER ── editorial two-column ── */}
      <section className="bg-warm-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <SectionLabel label="The Founder" className="mb-10" />
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left: video */}
            <Reveal className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold/20 pointer-events-none" />
              <FounderVideo />
              <div className="absolute bottom-6 -right-6 bg-gold px-6 py-3 z-30 shadow-lg">
                <p className="font-italiana text-xl text-espresso tracking-widest">Tejinder Singh Bhogal</p>
                <p className="font-dm text-[9px] tracking-ultra-wide uppercase text-espresso/70 mt-0.5">
                  Founder & Principal Designer
                </p>
              </div>
            </Reveal>

            {/* Right: text — left border acts as divider */}
            <div className="flex flex-col justify-center pt-16 lg:pt-0 lg:pl-10 lg:border-l lg:border-gold/20">
              <div>
                <Reveal delay={100}>
                  <h2 className="font-italiana text-5xl lg:text-6xl text-espresso tracking-wide leading-tight mb-6">
                    Design as a
                    <br />
                    <span className="font-cormorant italic font-light text-taupe-dark">Life's Calling</span>
                  </h2>
                </Reveal>
                <Reveal delay={200}>
                  <p className="font-dm text-base text-charcoal/75 leading-relaxed mb-8">
                    Tejinder's approach is rooted in a simple truth — a home should feel like yours, not like a showroom. He designs for everyday life: real meals, real routines, real people — not for an Instagram grid.
                  </p>
                </Reveal>
                <Reveal delay={300}>
                  <div className="grid sm:grid-cols-3 gap-6 border-t border-cream-dark pt-8 mb-10">
                    {[
                      { title: "Modern & Considered", desc: "Clean lines, purposeful choices, nothing unnecessary." },
                      { title: "Minimal Luxury",       desc: "Restraint done beautifully. Quality over quantity, always." },
                      { title: "Built for Living",     desc: "Comfortable, functional, and genuinely yours." },
                    ].map((item) => (
                      <div key={item.title}>
                        <p className="font-dm text-[9px] tracking-ultra-wide uppercase text-gold mb-2">{item.title}</p>
                        <p className="font-dm text-sm text-charcoal/65 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              {/* Pull quote fills the remaining vertical space */}
              <Reveal delay={400}>
                <blockquote className="border-l-2 border-gold pl-6">
                  <p className="font-cormorant text-2xl lg:text-3xl italic text-espresso/70 leading-snug">
                    "A home should feel like yours — not like a showroom."
                  </p>
                  <p className="font-dm text-[10px] tracking-ultra-wide uppercase text-gold mt-4">— Tejinder Singh Bhogal</p>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── espresso bg, images left, text right ── */}
      <section className="bg-espresso py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal delay={150}>
            <div className="relative h-[520px]">
              <img
                src="/images/europa/Living 2.jpg"
                alt="Interior craftsmanship render"
                className="absolute top-0 left-0 w-[65%] h-[70%] object-cover"
              />
              <img
                src="/images/europa/Master Bedroom 2.jpg"
                alt="Elegant bedroom design"
                className="absolute bottom-0 right-0 w-[60%] h-[60%] object-cover border-4 border-espresso"
              />
              <div className="absolute bottom-[38%] left-[40%] w-[25%] h-[25%] bg-gold/10 border border-gold/30" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <SectionLabel label="Who We Are" className="mb-6" />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-italiana text-5xl lg:text-6xl text-cream tracking-wide leading-tight mb-8">
                A Studio Built on
                <br />
                <span className="font-cormorant italic font-light text-taupe">Human Stories</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-dm text-base text-taupe/80 leading-relaxed mb-5">
                Urban Saajh by Tejinder Singh Bhogal was born from a powerful conviction — that design is not decoration, it is transformation. 
                We believe a space should not just look beautiful — it should elevate how you live, think, work, and feel.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="font-dm text-base text-taupe/80 leading-relaxed mb-10">
                Rooted in Indian sensibilities yet shaped by contemporary global aesthetics, Urban Saajh creates interiors that are intelligent, refined, and deeply personal. From modern urban residences to statement commercial environments, every space we design carries clarity of vision and strength of character.
              </p>
            </Reveal>
            <Reveal delay={500}>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-3 font-dm text-[11px] tracking-ultra-wide uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-all duration-300"
              >
                See Our Work
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── HONEST PERSPECTIVE ── cream, editorial header + 3 cols ── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-16">
            <div className="lg:w-1/2">
              <Reveal>
                <SectionLabel label="Our USP" className="mb-6" />
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-italiana text-5xl lg:text-7xl text-espresso tracking-wide leading-none">
                  The Honest
                  <br />
                  <span className="font-cormorant italic font-light">Perspective</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200} className="lg:w-1/2 lg:pb-2">
              <p className="font-cormorant text-xl lg:text-2xl italic text-espresso/70 leading-relaxed">
                "At Urban Saajh, clarity and honesty aren't extra — they are our foundation."
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-cream-dark">
            {[
              {
                num: "01",
                title: "Clarity First",
                body: "I keep things simple — clarity first. We talk budget upfront, because Pinterest rooms and luxury finishes aren't \"low-cost\". If you want that look, the investment has to match. I don't sugarcoat; I guide.",
              },
              {
                num: "02",
                title: "Space Matters",
                body: "You can't expect a spacious 3BHK feel inside 1000 sq ft. Interiors are built on real dimensions, movement flow, and comfort. If the space is tight, something has to give — and I'll tell you that honestly.",
              },
              {
                num: "03",
                title: "The Value of Design",
                body: "Your contractor can \"manage\", but a designer brings planning, proportion, detailing, and long-term value. Skipping design saves money now, but costs more later.",
              },
            ].map((pt, i) => (
              <Reveal key={pt.num} delay={i * 100}>
                <div className="bg-cream p-8 lg:p-10 h-full">
                  <p className="font-cormorant text-5xl text-gold/40 mb-4">{pt.num}</p>
                  <h3 className="font-italiana text-2xl text-espresso tracking-wide mb-4">{pt.title}</h3>
                  <p className="font-dm text-sm text-charcoal/70 leading-relaxed">{pt.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400} className="mt-16 bg-espresso p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center gap-8">
            <p className="font-dm text-lg text-cream leading-relaxed lg:flex-1">
              At Urban Saajh, this clarity, honesty, and detailed planning isn't extra — it's our USP.
              We focus on every parameter that actually matters, so when you hire us, you're choosing smart design, zero confusion, and results that truly last.
            </p>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-3 font-dm text-[11px] tracking-ultra-wide uppercase px-8 py-4 bg-gold text-espresso hover:bg-gold-light transition-all duration-300"
            >
              Start a Project
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── CORE VALUES ── asymmetric: heading col + 2×2 grid ── */}
      <section className="bg-warm-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-16 items-start">
            <div>
              <Reveal>
                <SectionLabel label="What We Believe" className="mb-6" />
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-italiana text-5xl lg:text-6xl text-espresso tracking-wide leading-tight">
                  Our Core
                  <br />
                  <span className="font-cormorant italic font-light">Values</span>
                </h2>
              </Reveal>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-cream-dark">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="bg-warm-white p-8 lg:p-10 h-full">
                    <div className="w-8 h-px bg-gold mb-6" />
                    <h3 className="font-italiana text-3xl text-espresso tracking-wide mb-4">{v.title}</h3>
                    <p className="font-dm text-sm text-charcoal/65 leading-relaxed">{v.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
