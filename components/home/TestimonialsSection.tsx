"use client";

import { useState } from "react";
import { Reveal, SectionLabel } from "@/components/ui/shared";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arjun & Neha Malhotra",
    role: "Homeowners",
    quote:
      "Urban Saajh didn't just design our home — they designed our life. Every corner speaks to us. Priya and her team listened to our wildest dreams and turned them into our everyday reality. We are beyond words.",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=200&q=80",
    project: "The Ivory Residence",
  },
  {
    id: 2,
    name: "Ritu Kapoor",
    role: "CEO, Kapoor Industries, Mumbai",
    quote:
      "Our new office has transformed how my team feels about coming to work. The design elevated our brand identity in a way we never imagined possible. Urban Saajh truly understands the intersection of aesthetics and function.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    project: "Kapoor Industries HQ",
  },
  {
    id: 3,
    name: "Vikram & Ananya Nair",
    role: "Homeowners, Bengaluru",
    quote:
      "We had a vision, but no idea how to bring it to life. Urban Saajh took our scattered ideas and wove them into something coherent, elegant, and deeply personal. Working with Priya was the best decision we made.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=200&q=80",
    project: "Silk & Stone Penthouse",
  },
  {
    id: 4,
    name: "Meera Subramaniam",
    role: "Boutique Hotel Owner, Udaipur",
    quote:
      "Our guests constantly ask who designed the hotel. Urban Saajh gave us an identity — a feeling that is uniquely ours. Bookings have doubled since the redesign. This is the power of great design.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    project: "The Onyx Suite",
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
