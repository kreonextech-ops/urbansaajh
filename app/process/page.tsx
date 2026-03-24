import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Reveal, SectionLabel } from "@/components/ui/shared";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Design Journey | Interior Designer Bagdogra & Siliguri",
  description:
    "Explore Urban Saajh's transparent, step-by-step interior design journey — from vision alignment to flawless execution. Trusted by clients in Bagdogra, Siliguri, Darjeeling, and the hills.",
  keywords: [
    "interior design journey Bagdogra", "interior design process Siliguri",
    "how interior design works North Bengal", "interior designer journey Darjeeling",
    "turnkey interior design journey", "Urban Saajh design journey",
    "interior project timeline Siliguri", "best interior design journey North Bengal hills",
  ],
  openGraph: {
    title: "Our Design Journey | Urban Saajh — Bagdogra & Siliguri Interior Design",
    description: "Transparent, structured interior design journey from vision alignment to flawless execution. Serving Bagdogra, Siliguri, Darjeeling, and the North Bengal hills.",
  },
};

const phases = [
  {
    number: "01",
    phase: "Step One",
    title: "Vision Alignment",
    description:
      "Every exceptional space begins with clarity. We engage in an in-depth consultation to understand your lifestyle, aspirations, design sensibilities, and long-term vision — ensuring the foundation of the project is deeply personal and purpose-driven.",
    activities: [
      "In-depth lifestyle consultation",
      "Aspiration & sensibility mapping",
      "Long-term vision alignment",
      "Site assessment & spatial audit",
      "Brief finalization",
    ],
    deliverable: "A deeply personal design brief rooted in your lifestyle.",
    image: "/images/europa/Check 5.jpg.jpeg",
  },
  {
    number: "02",
    phase: "Step Two",
    title: "Concept Curation",
    description:
      "We translate your vision into a distinctive design language. From spatial philosophy to material direction, lighting mood to aesthetic narrative — a cohesive concept is curated to define the identity of your space.",
    activities: [
      "Spatial philosophy development",
      "Material & texture direction",
      "Lighting mood conceptualization",
      "Aesthetic narrative curation",
      "Concept mood boards",
    ],
    deliverable: "A cohesive design identity with curated material palettes.",
    image: "/images/europa/Kitchen 1.jpg",
  },
  {
    number: "03",
    phase: "Step Three",
    title: "Precision Space Planning",
    description:
      "Function meets finesse. We develop technically detailed and thoughtfully optimized floor plans that maximize flow, proportion, and spatial harmony while maintaining architectural integrity.",
    activities: [
      "Technical floor plan development",
      "Flow & movement optimization",
      "Proportion & scale analysis",
      "Architectural integrity preservation",
      "Zoning & functional mapping",
    ],
    deliverable: "Technically detailed and spatially optimized floor plans.",
    image: "/images/europa/Living 2.jpg",
  },
  {
    number: "04",
    phase: "Step Four",
    title: "Immersive 3D Visualization",
    description:
      "Experience your space before it is built. Through high-quality 3D renders, we bring textures, materials, lighting, and ambience together — allowing you to step into your future environment with complete confidence.",
    activities: [
      "High-fidelity 3D modeling",
      "Photorealistic material rendering",
      "Artificial & natural lighting simulation",
      "Ambience & mood visualization",
      "Interactive 360 views (optional)",
    ],
    deliverable: "A complete photorealistic preview of your future environment.",
    image: "/images/europa/Check 6.jpg.jpeg",
  },
  {
    number: "05",
    phase: "Step Five",
    title: "Transparent Investment Planning",
    description:
      "Luxury is built on clarity. We provide a comprehensive and structured budget plan, detailing materials, finishes, fixtures, and execution scope — ensuring financial transparency without compromising design excellence.",
    activities: [
      "Comprehensive cost estimation",
      "Material & finish itemization",
      "Fixture & fitting specifications",
      "Execution scope definition",
      "Financial milestone planning",
    ],
    deliverable: "A structured investment plan with complete financial clarity.",
    image: "/images/europa/Dining 1.jpg",
  },
  {
    number: "06",
    phase: "Step Six",
    title: "Flawless Execution & Delivery",
    description:
      "Design is only as powerful as its execution. With meticulous site supervision, uncompromised quality control, and refined craftsmanship, we transform concept into reality — delivering a space that is timeless, elevated, and truly yours.",
    activities: [
      "Meticulous site supervision",
      "Uncompromised quality control",
      "Refined craftsmanship management",
      "Timely milestone tracking",
      "Final flawless handover",
    ],
    deliverable: "A timeless, elevated space delivered with absolute precision.",
    image: "/images/europa/Master Bedroom 3.jpg",
  },
];

const faqs = [
  {
    q: "How long does a full residential project take?",
    a: "A complete residential project typically takes 4–6 months from initial consultation to final handover, depending on scope, size, and any custom elements involved.",
  },
  {
    q: "Do I need to be available throughout the project?",
    a: "Not at all. We handle the day-to-day entirely. We keep you informed through regular updates and require your input only at key decision points — concept approval, material sign-off, and final walk-through.",
  },
  {
    q: "What is your minimum project size?",
    a: "We work on projects of all sizes — from a single room refresh to a full home. For our full-service offering, we typically work on spaces from 500 sq ft upward.",
  },
  {
    q: "Can we work with our existing furniture?",
    a: "Absolutely. We're skilled at working with pieces you love. During the discovery phase, we'll assess what stays, what transforms, and what needs to go.",
  },
  {
    q: "Do you work across India?",
    a: "Yes. We work across India and internationally. For outstation projects, we schedule regular site visits and use digital tools to keep the process seamless.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        label="How We Work"
        title="Our Design Journey"
        subtitle="Transparency, collaboration, and precision — every step of the way."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=85"
      />

      {/* Intro */}
      <section className="bg-warm-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <Reveal>
            <h3 className="font-italiana text-2xl lg:text-3xl text-espresso mb-4 tracking-wide">
              Urban Saajh by Tejinder Singh Bhogal
            </h3>
            <p className="font-cormorant text-2xl lg:text-3xl italic text-espresso/80 leading-relaxed">
              Where vision meets precision, and spaces are crafted to reflect status, sophistication, and soul.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="w-12 h-px bg-gold mx-auto mt-8" />
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Phase Numbers Header */}
          <div className="hidden lg:flex justify-between items-center py-10 border-b border-cream-dark mb-0">
            {phases.map((p) => (
              <div key={p.number} className="text-center flex-1">
                <p className="font-cormorant text-4xl text-gold/40">{p.number}</p>
                <p className="font-dm text-[9px] tracking-ultra-wide uppercase text-taupe mt-1">{p.phase}</p>
              </div>
            ))}
          </div>

          {/* Phases */}
          <div className="space-y-0">
            {phases.map((phase, i) => (
              <div
                key={phase.number}
                className={`grid lg:grid-cols-2 gap-0 border-b border-cream-dark ${
                  i % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Image */}
                <Reveal className="relative overflow-hidden">
                  <div className="aspect-[4/3] lg:h-full min-h-[320px] relative overflow-hidden">
                    <img
                      src={phase.image}
                      alt={phase.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 bg-espresso/80 px-4 py-2">
                      <p className="font-cormorant text-5xl text-gold/60 leading-none">{phase.number}</p>
                    </div>
                  </div>
                </Reveal>

                {/* Content */}
                <div className="p-10 lg:p-14 flex flex-col justify-center bg-warm-white">
                  <Reveal>
                    <p className="font-dm text-[9px] tracking-ultra-wide uppercase text-gold mb-2">
                      {phase.phase}
                    </p>
                  </Reveal>
                  <Reveal delay={100}>
                    <h2 className="font-italiana text-4xl lg:text-5xl text-espresso tracking-wide mb-5">
                      {phase.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={200}>
                    <p className="font-dm text-sm text-charcoal/70 leading-relaxed mb-7">
                      {phase.description}
                    </p>
                  </Reveal>
                  <Reveal delay={300}>
                    <p className="font-dm text-[9px] tracking-ultra-wide uppercase text-espresso mb-3">
                      Key Activities
                    </p>
                    <ul className="space-y-1.5 mb-7">
                      {phase.activities.map((a) => (
                        <li key={a} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                          <p className="font-dm text-sm text-charcoal/65">{a}</p>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={400}>
                    <div className="bg-cream p-5 border-l-2 border-gold">
                      <p className="font-dm text-[9px] tracking-ultra-wide uppercase text-gold mb-1.5">
                        Deliverable
                      </p>
                      <p className="font-cormorant text-lg italic text-espresso leading-snug">
                        {phase.deliverable}
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-espresso py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <Reveal>
              <SectionLabel label="Questions Answered" className="justify-center mb-6" />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-italiana text-5xl lg:text-6xl text-cream tracking-wide">
                Frequently Asked
                <br />
                <span className="font-cormorant italic font-light text-taupe">Questions</span>
              </h2>
            </Reveal>
          </div>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-b border-espresso-light py-7">
                  <p className="font-italiana text-2xl text-cream tracking-wide mb-3">{faq.q}</p>
                  <p className="font-dm text-sm text-taupe leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300} className="mt-14 text-center">
            <p className="font-cormorant text-xl italic text-taupe mb-6">
              Still have questions? We'd love to answer them.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-dm text-[11px] tracking-ultra-wide uppercase px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-espresso transition-all duration-300"
            >
              Get in Touch
              <ArrowRight size={13} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
