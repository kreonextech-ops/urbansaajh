import Link from "next/link";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      {/* Top CTA band */}
      <div className="border-b border-espresso-light py-16 px-6 lg:px-12 text-center">
        <p className="font-dm text-[10px] tracking-mega-wide uppercase text-gold mb-4">
          Begin Your Journey
        </p>
        <h2 className="font-cormorant text-4xl lg:text-6xl italic font-light text-cream mb-8">
          Let's Design Your Dream Space
        </h2>
        <Link
          href="/contact"
          className="inline-block font-dm text-[11px] tracking-ultra-wide uppercase px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-espresso transition-all duration-300"
        >
          Start a Conversation
        </Link>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <img src="/logo.png" alt="Urban Saajh Logo" className="h-12 w-auto" />
            <div className="flex flex-col leading-none">
              <p className="font-italiana text-2xl tracking-widest text-cream">
                URBAN SAAJH <span className="text-gold">BY TEJ</span>
              </p>
            </div>
          </div>
          <p className="font-cormorant text-lg italic text-taupe leading-relaxed max-w-xs">
            "A space is only as beautiful as the story it tells. We craft interiors that breathe life into every corner."
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="https://www.instagram.com/urbansaajh_bytej/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-espresso-light flex items-center justify-center text-taupe hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={15} />
            </a>
            <a
              href="mailto:hello@urbansaajh.com"
              className="w-10 h-10 border border-espresso-light flex items-center justify-center text-taupe hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-dm text-[9px] tracking-ultra-wide uppercase text-gold mb-6">
            Navigation
          </p>
          <ul className="space-y-3">
            {["Home", "About", "Services", "Portfolio", "Process", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="font-dm text-sm text-taupe hover:text-cream transition-colors duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-dm text-[9px] tracking-ultra-wide uppercase text-gold mb-6">
            Contact
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <MapPin size={13} className="text-taupe mt-0.5 flex-shrink-0" />
              <span className="font-dm text-sm text-taupe">
                BHOGAL BROTHERS, BAGDOGRA,<br />BIHAR MORE, PIN CODE- 734014
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={13} className="text-taupe flex-shrink-0" />
              <a href="tel:+917602016708" className="font-dm text-sm text-taupe hover:text-cream transition-colors">
                +91 76020 16708
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={13} className="text-taupe flex-shrink-0" />
              <a href="mailto:hello@urbansaajh.com" className="font-dm text-sm text-taupe hover:text-cream transition-colors">
                hello@urbansaajh.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-espresso-light px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-dm text-[10px] text-taupe tracking-wide">
          © {new Date().getFullYear()} Urban Saajh. All rights reserved.
        </p>
        <p className="font-dm text-[10px] text-taupe tracking-wide">
          Crafted with intention. Built for beauty.
        </p>
      </div>
    </footer>
  );
}
