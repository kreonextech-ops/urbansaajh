"use client";

import { useRef, useState } from "react";
import { Reveal, SectionLabel } from "@/components/ui/shared";
import { ChevronLeft, ChevronRight, Quote, Play } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amitabh & Snigdha Das",
    role: "Homeowners, Siliguri",
    quote: "Very happy with the work of Urban Saajh. Great designs, good coordination, and neat finishing. Tejinder and the team listened to our needs and delivered beyond expectations.",
    video: "/VN20260402_130744.mp4"
  },
  {
    id: 2,
    name: "Priyanka Gajmer",
    role: "Fashion Designer, Siliguri",
    quote: "No doubt he's the best in his craft. Very professional and creative interior designer. Urban Saajh understood my vision perfectly.",
    video: "/VN20260402_130744.mp4"
  },
  {
    id: 3,
    name: "Deepak Pradhan",
    role: "Homeowner, Kalimpong",
    quote: "Amazing experience working with the Urban Saajh team! They understood my taste perfectly and delivered elegant, functional designs on time. Highly recommended for anyone looking to transform their space beautifully.",
    video: "/VN20260402_130744.mp4"
  },
  {
    id: 4,
    name: "Sandeep Roy",
    role: "Business Owner, Bagdogra",
    quote: "Thank you, Tejinder, for your outstanding work on the design! I truly appreciate your support and creativity. Your friendliness and professionalism shine through in everything you do, and it's greatly valued.",
    video: "/VN20260402_130744.mp4"
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const prev = () => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    setIsPlaying(false);
    if (videoRef.current) videoRef.current.pause();
  };
  const next = () => {
    setCurrent((c) => (c + 1) % testimonials.length);
    setIsPlaying(false);
    if (videoRef.current) videoRef.current.pause();
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="bg-warm-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Video */}
        <Reveal className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="relative max-w-md w-full">
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 pointer-events-none" />
            <div className="relative z-10 w-full aspect-[3/4]">
              <video
                ref={videoRef}
                key={t.video}
                src={t.video}
                className="w-full h-full object-cover object-bottom cursor-pointer"
                playsInline
                onClick={togglePlay}
              />
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 m-auto w-20 h-20 bg-espresso/80 text-cream rounded-full flex items-center justify-center hover:bg-espresso hover:scale-105 transition-all duration-300 z-20"
                  aria-label="Play video"
                >
                  <Play size={32} className="ml-1" fill="currentColor" />
                </button>
              )}
            </div>
          </div>
        </Reveal>

        {/* Right: Written Testimony Block */}
        <div className="order-1 lg:order-2 flex flex-col pt-8 lg:pt-0">
          <Reveal>
            <SectionLabel label="Client Stories" className="mb-6" />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-italiana text-5xl lg:text-6xl text-espresso tracking-wide leading-tight mb-8">
              Words from Our
              <br />
              <span className="font-cormorant italic font-light">Beloved Clients</span>
            </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="relative mt-4">
              <Quote
                size={48}
                className="text-gold/20 absolute -top-4 -left-4"
                fill="currentColor"
              />

              <div key={t.id} className="transition-all duration-500 relative z-10 pt-4 pl-4 min-h-[160px]">
                <blockquote className="font-cormorant text-2xl lg:text-3xl italic text-espresso leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>
                <div className="flex flex-col gap-0.5 border-l-2 border-gold/30 pl-6 mt-4">
                  <p className="font-italiana text-2xl text-espresso tracking-wide">{t.name}</p>
                  <p className="font-dm text-[11px] tracking-ultra-wide uppercase text-taupe-dark mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between mt-10 pt-8 border-t border-cream-dark pl-4">
                {/* Indicators */}
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`transition-all duration-300 rounded-full ${
                        i === current ? "w-8 h-1.5 bg-gold" : "w-1.5 h-1.5 bg-taupe/30"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-3">
                  <button
                    onClick={prev}
                    className="w-11 h-11 border border-taupe/20 rounded-full flex items-center justify-center text-taupe-dark hover:border-gold hover:text-gold transition-all duration-200"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={next}
                    className="w-11 h-11 border border-taupe/20 rounded-full flex items-center justify-center text-taupe-dark hover:border-gold hover:text-gold transition-all duration-200"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
