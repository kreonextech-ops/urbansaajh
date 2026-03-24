"use client";

import { useState } from "react";
import { Reveal, SectionLabel } from "@/components/ui/shared";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sudeep & Sharmila Chatterjee",
    role: "Homeowners, Siliguri",
    quote:
      "Tejinder has an incredible eye for detail. Our villa in Siliguri feels like a sanctuary. He managed to blend our traditional Bengali heritage with a modern, sleek aesthetic that we absolutely love.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80",
    project: "The Heritage Villa",
  },
  {
    id: 2,
    name: "Dr. Anirban Das",
    role: "Medical Director, Bagdogra",
    quote:
      "Designing a clinic that feels professional yet warm is a challenge. Urban Saajh exceeded my expectations. The space planning in our Bagdogra facility is remarkably efficient and world-class in its aesthetic.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80",
    project: "Lifeline Wellness Centre",
  },
  {
    id: 3,
    name: "Pallavi Sen",
    role: "Entrepreneur, Darjeeling",
    quote:
      "Working with Tejinder was a seamless experience. He is patient, transparent, and truly visionary. My apartment in Darjeeling is now the talk of my social circle. Truly bespoke design with soul!",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=200&q=80",
    project: "Cloud Nine Apartment",
  },
  {
    id: 4,
    name: "Ayan & Barnali Banerjee",
    role: "Homeowners, Kurseong",
    quote:
      "From the first 3D render to the final handover, the transparency was refreshing. They respected our budget while delivering a luxury finish that feels twice its cost. Highly recommend for anyone in the hills.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    project: "Mountain Mist Retreat",
  },
  {
    id: 5,
    name: "Rajat & Ishita Mukherjee",
    role: "Creative Directors, Siliguri",
    quote:
      "The 'Design Journey' is real. Urban Saajh transformed our ancestral home into a contemporary masterpiece without losing its soul. Meticulous execution and brilliant craftsmanship from start to finish.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&q=80",
    project: "The Ancestral Revival",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="bg-warm-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <SectionLabel label="Client Stories" className="justify-center mb-6" />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-italiana text-5xl lg:text-6xl text-espresso tracking-wide leading-tight">
              Words from Our
              <br />
              <span className="font-cormorant italic font-light">Beloved Clients</span>
            </h2>
          </Reveal>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-cream-dark px-8 lg:px-16 py-14 transition-all duration-500">
            {/* Quote icon */}
            <Quote
              size={40}
              className="text-gold/30 absolute top-8 left-8 lg:top-10 lg:left-12"
              fill="currentColor"
            />

            <div key={t.id} className="text-center">
              {/* Quote text */}
              <blockquote className="font-cormorant text-2xl lg:text-3xl italic text-espresso leading-relaxed mb-10 relative z-10">
                "{t.quote}"
              </blockquote>

              {/* Client info */}
              <div className="flex flex-col items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                />
                <div>
                  <p className="font-italiana text-xl text-espresso tracking-wide">{t.name}</p>
                  <p className="font-dm text-[10px] tracking-ultra-wide uppercase text-taupe-dark mt-0.5">
                    {t.role}
                  </p>
                  <p className="font-cormorant text-sm italic text-gold mt-1">
                    Project: {t.project}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 ${
                    i === current ? "w-8 h-1 bg-gold" : "w-2 h-1 bg-taupe"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 border border-cream-dark flex items-center justify-center text-taupe-dark hover:border-gold hover:text-gold transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 border border-cream-dark flex items-center justify-center text-taupe-dark hover:border-gold hover:text-gold transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
