"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-warm-white/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-none">
            <span
              className={`font-italiana text-2xl tracking-widest transition-colors duration-300 ${
                scrolled || !isHome ? "text-espresso" : "text-cream"
              }`}
            >
              URBAN SAAJH
            </span>
            <span
              className={`font-dm text-[9px] tracking-ultra-wide uppercase mt-0.5 transition-colors duration-300 ${
                scrolled || !isHome ? "text-taupe-dark" : "text-taupe"
              }`}
            >
              Bespoke Interior Design
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-dm text-[11px] tracking-ultra-wide uppercase relative group transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-gold"
                    : scrolled || !isHome
                    ? "text-espresso hover:text-gold"
                    : "text-cream hover:text-gold-light"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className={`font-dm text-[11px] tracking-ultra-wide uppercase px-6 py-2.5 border transition-all duration-300 ${
                scrolled || !isHome
                  ? "border-espresso text-espresso hover:bg-espresso hover:text-cream"
                  : "border-cream text-cream hover:bg-cream hover:text-espresso"
              }`}
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden transition-colors duration-300 ${
              scrolled || !isHome ? "text-espresso" : "text-cream"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-espresso transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`font-cormorant text-3xl italic transition-all duration-300 ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } ${pathname === link.href ? "text-gold" : "text-cream hover:text-gold"}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="w-12 h-px bg-gold mt-4" />
          <p className="font-dm text-[10px] tracking-mega-wide uppercase text-espresso/40 mt-1">
            Design for Every Budget
          </p>
        </div>
      </div>
    </>
  );
}
