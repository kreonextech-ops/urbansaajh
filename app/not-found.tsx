import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-espresso flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-cormorant text-[120px] lg:text-[180px] text-espresso-light leading-none select-none">
          404
        </p>
        <div className="w-12 h-px bg-gold mx-auto -mt-4 mb-8" />
        <h1 className="font-italiana text-4xl lg:text-5xl text-cream tracking-wide mb-4">
          Page Not Found
        </h1>
        <p className="font-cormorant text-xl italic text-taupe mb-10 max-w-xs mx-auto">
          It seems this space hasn't been designed yet. Let's take you somewhere beautiful.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 font-dm text-[11px] tracking-ultra-wide uppercase px-10 py-4 bg-gold text-espresso hover:bg-gold-light transition-all duration-300"
        >
          Return Home
          <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}
