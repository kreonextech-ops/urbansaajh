"use client";
import { useEffect, useRef } from "react";

interface SectionLabelProps {
  label: string;
  className?: string;
}

export function SectionLabel({ label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="block w-8 h-px bg-gold flex-shrink-0" />
      <p className="font-dm text-[10px] tracking-ultra-wide uppercase text-gold">
        {label}
      </p>
    </div>
  );
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  images: string | string[];
}

export function PageHero({ label, title, subtitle, images }: PageHeroProps) {
  const imageArray = Array.isArray(images) ? images : [images];

  return (
    <section className="relative h-[65vh] min-h-[500px] flex items-end overflow-hidden">
      {/* Background Images Grid */}
      <div className={`absolute inset-0 grid ${imageArray.length > 1 ? "grid-cols-1 lg:grid-cols-" + Math.min(imageArray.length, 3) : "grid-cols-1"}`}>
        {imageArray.slice(0, 3).map((img, i) => (
          <div 
            key={i} 
            className={`relative h-full w-full overflow-hidden ${i > 0 ? "hidden lg:block lg:border-l border-espresso/10" : ""}`}
          >
            <img
              src={img}
              alt={`${title} - ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/40 to-espresso/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full text-left">
        <Reveal>
          <SectionLabel label={label} className="mb-6" />
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-italiana text-6xl lg:text-8xl text-cream tracking-wider leading-tight">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={200}>
            <p className="font-cormorant text-2xl lg:text-3xl italic text-taupe mt-4 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
