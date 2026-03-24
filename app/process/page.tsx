import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Reveal, SectionLabel } from "@/components/ui/shared";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Design Process | Interior Designer Bagdogra & Siliguri",
  description:
    "Discover Urban Saajh's transparent, step-by-step interior design process — from discovery to grand reveal. Trusted by clients in Bagdogra, Siliguri, Darjeeling, Kurseong, Kalimpong, and Sikkim.",
  keywords: [
    "interior design process Bagdogra", "interior design process Siliguri",
    "how interior design works North Bengal", "interior designer process Darjeeling",
    "turnkey interior design process", "Urban Saajh design process",
    "interior project timeline Siliguri", "best interior design process North Bengal hills",
  ],
  openGraph: {
    title: "Our Design Process | Urban Saajh — Bagdogra & Siliguri Interior Design",
    description: "Transparent, structured interior design process from discovery to grand reveal. Serving Bagdogra, Siliguri, Darjeeling, and the North Bengal hills.",
  },
};

const phases = [
  {
    number: "01",
    phase: "Phase One",
    title: "Discovery & Vision",
    duration: "Week 1–2",
    description:
      "Every great design begins with deep listening. We spend the first phase getting to know you — your lifestyle, your aesthetics, your non-negotiables, and your dreams. This isn't a questionnaire exercise; it's a genuine conversation about how you live and what you love.",
    activities: [
      "Initial discovery call (60 minutes)",
      "On-site visit and space assessment",
      "Lifestyle & preference deep-dive",
      "Brief documentation and alignment",
      "Project scope and budget discussion",
    ],
    deliverable: "A detailed design brief that captures your vision in full.",
    image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=800&q=80",
  },
  {
    number: "02",
    phase: "Phase Two",
    title: "Concept Design",
    duration: "Week 2–4",
    description:
      "With the brief in hand, we translate your vision into visual concepts. This is where your space begins to take shape — through mood boards, color palettes, material directions, and early layout ideas. We present multiple directions and refine based on your feedback.",
    activities: [
      "Concept mood board creation",
      "Material and color palette curation",
      "Initial space layout explorations",
      "Style reference presentation",
      "Client feedback and direction refinement",
    ],
    deliverable: "An approved concept direction with mood boards and material palette.",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80",
  },
  {
    number: "03",
    phase: "Phase Three",
    title: "Design Development",
    duration: "Week 4–7",
    description:
      "With the concept approved, we move into full design development. This is where precision meets creativity — detailed floor plans, 3D visualizations, and final material selections come together into a comprehensive design package.",
    activities: [
      "Detailed AutoCAD floor plans",
      "3D room-by-room visualizations",
      "Furniture specifications and layouts",
      "Lighting design and electrical planning",
      "Material sample sourcing and presentation",
    ],
    deliverable: "A complete design package with 3D renders, floor plans, and material specifications.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
  {
    number: "04",
    phase: "Phase Four",
    title: "Sourcing & Procurement",
    duration: "Week 6–12",
    description:
      "Once designs are signed off, we begin the careful process of sourcing every element. We tap into our curated network of artisans, suppliers, and manufacturers — both domestic and global — to procure exactly what your space calls for.",
    activities: [
      "Vendor and artisan selection",
      "Custom furniture commissioning",
      "Import and logistics management",
      "Quality inspection at source",
      "Procurement schedule management",
    ],
    deliverable: "All items procured, quality-checked, and staged for installation.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    number: "05",
    phase: "Phase Five",
    title: "Execution & Installation",
    duration: "Week 8–20",
    description:
      "Our project managers take over the site — coordinating contractors, overseeing construction, and managing installations with meticulous attention to quality. You'll receive regular updates without needing to be involved in the day-to-day.",
    activities: [
      "Contractor coordination and briefing",
      "Construction quality oversight",
      "Furniture and fixture installation",
      "Soft furnishing and accessory placement",
      "Weekly progress reports to client",
    ],
    deliverable: "A fully executed space, ready for final styling.",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
  },
  {
    number: "06",
    phase: "Phase Six",
    title: "The Grand Reveal",
    duration: "Final Week",
    description:
      "The moment we live for. After a final snagging walk-through to ensure every detail meets our standard, we style the space to perfection — flowers, books, art, candles, every last touch — and hand you back your transformed home.",
    activities: [
      "Final snagging and punch list resolution",
      "Complete interior styling",
      "Art, plants, and accessory placement",
      "Photography session (optional)",
      "White-glove handover ceremony",
    ],
    deliverable: "Your dream space — ready to live in, exactly as you imagined.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
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
        title="Our Process"
        subtitle="Transparency, collaboration, and precision — every step of the way."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=85"
      />

      {/* Intro */}
      <section className="bg-warm-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <Reveal>
            <p className="font-cormorant text-2xl lg:text-3xl italic text-espresso/80 leading-relaxed">
              Good design doesn't happen by accident. It's the result of a thoughtful, structured process — one where every decision is intentional and every detail is considered.
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
