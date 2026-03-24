"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex items-center overflow-hidden h-[50vh] min-h-[400px] lg:h-screen lg:min-h-[700px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] ease-out"
        style={{
          transform: loaded ? "scale(1.05)" : "scale(1.12)",
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />

      {/* Decorative vertical line */}
      <div className="absolute left-6 lg:left-12 top-0 bottom-0 flex flex-col items-center py-32 gap-0">
        <div
          className="w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent h-full transition-all duration-[2000ms]"
          style={{ opacity: loaded ? 1 : 0 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-16 lg:pt-32">
        <div
          className="transition-all duration-700 ease-out delay-200"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(20px)",
          }}
        >
          <h1 className="font-italiana text-4xl sm:text-5xl lg:text-[90px] xl:text-[110px] leading-none text-cream tracking-wide max-w-3xl">
            Iconic Interiors
            <br />
            <span className="italic font-cormorant font-light">Intelligently</span>
            <br />
            Designed
          </h1>
        </div>

        <div
          className="transition-all duration-700 ease-out delay-[600ms] flex flex-col sm:flex-row gap-4 mt-8 lg:mt-12"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(20px)",
          }}
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 font-dm text-[11px] tracking-ultra-wide uppercase px-8 py-4 bg-gold text-espresso hover:bg-gold-light transition-all duration-300"
          >
            View Our Work
            <ArrowDownRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-dm text-[11px] tracking-ultra-wide uppercase px-8 py-4 border border-cream/40 text-cream hover:border-gold hover:text-gold transition-all duration-300"
          >
            Start a Project
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 lg:right-12 flex flex-col items-center gap-3">
        <p className="font-dm text-[9px] tracking-ultra-wide uppercase text-cream/50 [writing-mode:vertical-rl]">
          Scroll
        </p>
        <div className="w-px h-12 bg-gradient-to-b from-cream/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
