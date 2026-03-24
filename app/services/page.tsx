import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Reveal, SectionLabel } from "@/components/ui/shared";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Design Services | Bagdogra, Siliguri, Darjeeling & Sikkim",
  description:
    "Explore full-range interior design services by Urban Saajh — residential design, commercial interiors, turnkey projects, space planning, and custom furniture. Serving Bagdogra, Siliguri, Darjeeling, Kurseong, Kalimpong, and Sikkim.",
  keywords: [
    "interior design services Bagdogra", "residential interior design Siliguri",
    "commercial interior design Darjeeling", "turnkey interior project North Bengal",
    "space planning Siliguri", "custom furniture design Bagdogra",
    "interior design services Kalimpong", "interior design services Kurseong",
    "interior design services Sikkim", "home interior services North Bengal hills",
    "best interior design services Siliguri", "interior decorator Bagdogra",
  ],
  openGraph: {
    title: "Interior Design Services | Urban Saajh — Bagdogra, Siliguri, Darjeeling",
    description: "Residential, commercial, and turnkey interior design services across Bagdogra, Siliguri, Darjeeling, Kalimpong, Kurseong, and Sikkim.",
  },
};

const services = [
  {
    number: "01",
    title: "Residential Design",
    subtitle: "Your Home, Perfected",
    description:
      "We design private homes that become sanctuaries — spaces where every element reflects the personality, values, and lifestyle of the people who inhabit them. From palatial villas to intimate apartments, we bring the same devotion to every project.",
    includes: [
      "In-depth lifestyle consultation",
      "Full concept development & mood boards",
      "3D visualizations & walkthroughs",
      "Material & finish selection",
      "Furniture layout & space planning",
      "Art & accessory curation",
      "Project management & installation",
    ],
    image: "/images/services/residential.png",
  },
  {
    number: "02",
    title: "Commercial Interiors",
    subtitle: "Spaces That Inspire Work",
    description:
      "Your office, showroom, or hospitality space is your brand made physical. We design commercial interiors that communicate your identity, inspire your team, and leave a lasting impression on every visitor who walks through your doors.",
    includes: [
      "Brand identity integration",
      "Workplace strategy consultation",
      "Custom layout & wayfinding",
      "Acoustic & lighting design",
      "Branded material palettes",
      "Phased implementation planning",
      "Post-occupancy evaluation",
    ],
    image: "/images/services/commercial-no-brand.png",
  },
  {
    number: "03",
    title: "Turnkey Projects",
    subtitle: "Zero Stress, Total Luxury",
    description:
      "For those who want a completely hands-off experience, our turnkey service manages every aspect of the project — from the first concept to the final cushion. You hand us the keys and we hand you back a finished, styled, ready-to-live-in masterpiece.",
    includes: [
      "Complete end-to-end management",
      "Contractor & vendor coordination",
      "Procurement & logistics",
      "Quality control at every stage",
      "Budget & timeline management",
      "Snagging & final handover",
      "30-day post-completion support",
    ],
    image: "/images/services/turnkey.png",
  },
  {
    number: "04",
    title: "Space Planning",
    subtitle: "Every Inch, Intentional",
    description:
      "Before a space can be beautiful, it must work. Our expert space planners analyze how you live, work, and move — then design layouts that maximize every square foot without ever feeling constrained.",
    includes: [
      "Site measurement & analysis",
      "Traffic flow optimization",
      "Furniture placement strategy",
      "Multi-use space planning",
      "Storage integration",
      "Natural light maximization",
      "AutoCAD floor plan deliverables",
    ],
    image: "/images/services/space-planning.png",
  },
  {
    number: "05",
    title: "Custom Furniture",
    subtitle: "Made for You, Only You",
    description:
      "When nothing off-the-shelf is quite right, we design and commission custom furniture crafted by master artisans. Each piece is designed specifically for your space and your story — built to last a lifetime.",
    includes: [
      "Custom design and drawing",
      "Material & finish selection",
      "Artisan matching & commissioning",
      "Production oversight",
      "White-glove delivery",
      "Installation & placement",
      "Care & maintenance guides",
    ],
    image: "/images/services/custom-furniture.png",
  },
  {
    number: "06",
    title: "Consultation",
    subtitle: "Bespoke Design, Anywhere",
    description:
      "Design expertise shouldn't be limited by geography. Our online consultation service delivers the full Urban Saajh experience digitally — with detailed mood boards, 3D renders, material guides, and ongoing support.",
    includes: [
      "Video discovery session",
      "Digital mood boards & concepts",
      "3D room visualizations",
      "Curated shopping lists with links",
      "Material & paint guides",
      "Implementation checklist",
      "Follow-up review session",
    ],
    image: "/images/services/consultation-v2.png",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Offer"
        title="Our Services"
        subtitle="Versatile design solutions tailored to every space and budget."
        image="/images/services/hero.png"
      />

      {/* Intro */}
      <section className="bg-warm-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <Reveal>
            <p className="font-cormorant text-2xl lg:text-3xl italic text-espresso/80 leading-relaxed">
              From intimate residential projects to landmark commercial spaces, Urban Saajh offers a full spectrum of design services — each one tailored, personal, and executed with uncompromising quality.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="w-12 h-px bg-gold mx-auto mt-8" />
          </Reveal>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-warm-white pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-0">
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`grid lg:grid-cols-2 gap-0 border-t border-cream-dark ${
                i % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
              }`}
            >
              {/* Image */}
              <Reveal className="relative overflow-hidden">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[350px] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-espresso/80 backdrop-blur-sm px-4 py-2">
                    <p className="font-cormorant text-4xl text-gold/60 leading-none">
                      {service.number}
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Content */}
              <div className="p-10 lg:p-14 flex flex-col justify-center bg-cream">
                <Reveal>
                  <p className="font-cormorant text-sm italic text-gold mb-2">{service.subtitle}</p>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="font-italiana text-4xl lg:text-5xl text-espresso tracking-wide mb-5">
                    {service.title}
                  </h2>
                </Reveal>
                <Reveal delay={200}>
                  <p className="font-dm text-sm text-charcoal/70 leading-relaxed mb-8">
                    {service.description}
                  </p>
                </Reveal>
                <Reveal delay={300}>
                  <p className="font-dm text-[9px] tracking-ultra-wide uppercase text-gold mb-4">
                    What's Included
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check size={12} className="text-gold mt-1 flex-shrink-0" />
                        <span className="font-dm text-sm text-charcoal/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={400}>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 font-dm text-[11px] tracking-ultra-wide uppercase text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition-all duration-300 self-start"
                  >
                    Enquire About This Service
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-espresso py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <Reveal>
            <SectionLabel label="Ready to Begin" className="justify-center mb-6" />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-italiana text-5xl lg:text-6xl text-cream tracking-wide mb-6">
              Not Sure Where to Start?
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-cormorant text-xl italic text-taupe mb-10">
              Book a complimentary discovery call and let's figure out together what your space truly needs.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-dm text-[11px] tracking-ultra-wide uppercase px-10 py-4 bg-gold text-espresso hover:bg-gold-light transition-all duration-300"
            >
              Book a Free Consultation
              <ArrowRight size={13} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
