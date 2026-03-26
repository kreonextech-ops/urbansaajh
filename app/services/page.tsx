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
    title: "Residential Design & Modular Kitchen Solutions",
    subtitle: "Your Home, Crafted to Perfection",
    description:
      "From luxury villas to smart apartments, we design homes that are beautiful and practical. Specializing in high-quality modular kitchens, wardrobes, and living spaces that fit your lifestyle and budget.",
    includes: [
      "Modular Kitchen & Wardrobe Design",
      "Living & Bedroom Interiors",
      "Full Concept Development",
      "3D Visualisations & Step-by-Step Plans",
      "Material & Finish Selection",
      "Space Saving Furniture Layouts",
      "Complete Site Supervision",
    ],
    image: "/images/services/residential.png",
  },
  {
    number: "02",
    title: "Commercial Interiors",
    subtitle: "Professional Spaces That Mean Business",
    description:
      "Offices, showrooms, and retail spaces designed to impress your clients and boost productivity. We create professional environments that reflect your brand identity and functional needs.",
    includes: [
      "Office & Workspace Strategy",
      "Showroom & Retail Layouts",
      "Branding & Interior Matching",
      "Smart Lighting & Acoustic Design",
      "Functional Employee Zones",
      "Durable Material Palettes",
      "Timely Implementation",
    ],
    image: "/images/services/commercial-no-brand.png",
  },
  {
    number: "03",
    title: "Turnkey Projects",
    subtitle: "Hassle-Free, End-to-End Execution",
    description:
      "Hand over your keys and relax. We take complete responsibility for your project — from material procurement and vendor management to the final finishing — delivering your dream space on time.",
    includes: [
      "Single Point of Contact",
      "Material Sourcing & Delivery",
      "Contractor Management",
      "Strict Quality Control",
      "Transparent Budgeting",
      "Punctual Project Handover",
      "Post-Completion Support",
    ],
    image: "/images/services/turnkey.png",
  },
  {
    number: "04",
    title: "Space Planning",
    subtitle: "Every Inch, Maximum Utility",
    description:
      "Before we make it beautiful, we make it work. Our space planning ensures every corner of your home is used effectively, ensuring smooth movement and a clutter-free environment.",
    includes: [
      "Site Measurement & Analysis",
      "Efficient Traffic Flow",
      "Smart Furniture Placement",
      "Storage Needs Optimization",
      "Natural Light & Ventilation",
      "Clutter-Free Layouts",
      "Detailed Floor Plans",
    ],
    image: "/images/services/space-planning.png",
  },
  {
    number: "05",
    title: "Custom Furniture",
    subtitle: "Crafted for Your Space Only",
    description:
      "If you can't find it in the market, we build it for you. Custom-designed sofas, beds, and cabinets crafted by master artisans to fit your room's dimensions and your aesthetic perfectly.",
    includes: [
      "Custom Designs & Drawings",
      "Premium Material Selection",
      "Artisan-Led Craftsmanship",
      "Durable & High-Quality Finish",
      "Perfect Fit for Your Space",
      "Care & Maintenance Guides",
      "On-Site Woodwork Oversight",
    ],
    image: "/images/services/custom-furniture.png",
  },
  {
    number: "06",
    title: "3D Visualisation & Design Consultation",
    subtitle: "See Your Dream Space Before Construction",
    description:
      "Get a realistic view of how your project will look before the first brick is laid. Perfect for those who want professional design guidance, material selections, and clear visual clarity to avoid costly mistakes.",
    includes: [
      "Personalised Discovery Session",
      "High-Definition 3D Renders",
      "Material & Color Combinations",
      "Essential Shopping Checklists",
      "Lighting & Paint Guides",
      "Step-by-Step Design Roadmaps",
      "Expert Design Advice",
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
