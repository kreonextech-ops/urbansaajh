"use client";

import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "917602016708"; // E.164 format, no +
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I found Urban Saajh and would love to discuss an interior design project."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    // Show button after a short delay for a polished entrance
    const t = setTimeout(() => setVisible(true), 1500);
    // Stop pulsing after 4 seconds
    const p = setTimeout(() => setPulse(false), 5000);
    return () => {
      clearTimeout(t);
      clearTimeout(p);
    };
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center gap-3
        bg-[#25D366] text-white
        rounded-full shadow-2xl
        transition-all duration-500 ease-out
        group overflow-hidden
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}
      `}
    >
      {/* Pulse ring */}
      {pulse && (
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"
          aria-hidden="true"
        />
      )}

      {/* Icon container — always visible */}
      <span className="relative flex items-center justify-center w-14 h-14 flex-shrink-0">
        {/* WhatsApp SVG icon */}
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-7 h-7"
          aria-hidden="true"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.47-2.018A15.934 15.934 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0Zm0 29.333a13.27 13.27 0 0 1-6.77-1.852l-.485-.288-5.025 1.197 1.218-4.905-.316-.503A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333Zm7.27-9.907c-.398-.199-2.354-1.162-2.72-1.295-.365-.133-.63-.199-.895.199-.265.398-1.028 1.295-1.26 1.561-.232.265-.464.298-.862.1-.398-.199-1.681-.62-3.2-1.978-1.182-1.057-1.979-2.36-2.211-2.759-.232-.398-.025-.613.174-.81.179-.178.398-.464.597-.696.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.895-2.156-1.227-2.952-.323-.776-.65-.67-.895-.683l-.762-.013c-.265 0-.696.1-1.06.497-.365.398-1.394 1.361-1.394 3.317 0 1.956 1.427 3.845 1.626 4.11.199.265 2.808 4.288 6.8 6.016.951.411 1.693.656 2.271.839.954.303 1.822.26 2.509.158.766-.114 2.354-.963 2.687-1.893.332-.93.332-1.727.232-1.893-.1-.166-.365-.265-.762-.464Z" />
        </svg>
      </span>

      {/* Expanded label — slides in on hover */}
      <span className="max-w-0 group-hover:max-w-[160px] overflow-hidden transition-all duration-300 ease-in-out whitespace-nowrap pr-0 group-hover:pr-5">
        <span className="font-dm text-[11px] tracking-wider uppercase">
          Chat with us
        </span>
      </span>
    </a>
  );
}
