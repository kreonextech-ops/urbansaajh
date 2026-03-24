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
  image: string;
}

export function PageHero({ label, title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-espresso/55" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
        <SectionLabel label={label} className="mb-4" />
        <h1 className="font-italiana text-5xl lg:text-7xl text-cream tracking-wider">
          {title}
        </h1>
        {subtitle && (
          <p className="font-cormorant text-xl italic text-taupe mt-3 max-w-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
