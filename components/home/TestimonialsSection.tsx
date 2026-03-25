"use client";

import { useState } from "react";
import { Reveal, SectionLabel } from "@/components/ui/shared";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amitabh & Snigdha Das",
    role: "Homeowners, Siliguri",
    quote:
      "Very happy with the work of Urban Saajh. Great designs, good coordination, and neat finishing. Tejinder and the team listened to our needs and delivered beyond expectations.",
    image: "",
    project: "",
  },
  {
    id: 2,
    name: "Priyanka Gajmer",
    role: "Fashion Designer, Siliguri",
    quote:
      "No doubt he’s the best in his craft. Very professional and creative interior designer. Urban Saajh understood my vision perfectly.",
    image: "",
    project: "",
  },
  {
    id: 3,
    name: "Deepak Pradhan",
    role: "Homeowner, Kalimpong",
    quote:
      "Amazing experience working with the Urban Saajh team! They understood my taste perfectly and delivered elegant, functional designs on time. Highly recommended for anyone looking to transform their space beautifully.",
    image: "",
    project: "",
  },
  {
    id: 4,
    name: "Sandeep Roy",
    role: "Business Owner, Bagdogra",
    quote:
      "Thank you, Tejinder, for your outstanding work on the design! I truly appreciate your support and creativity. Your friendliness and professionalism shine through in everything you do, and it's greatly valued. Thanks again!",
    image: "",
    project: "",
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
              <div className="flex flex-col items-center gap-1">
                <div>
                  <p className="font-italiana text-xl text-espresso tracking-wide">{t.name}</p>
                  <p className="font-dm text-[10px] tracking-ultra-wide uppercase text-taupe-dark mt-0.5">
                    {t.role}
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
