"use client";

import { useState } from "react";
import { PageHero, Reveal, SectionLabel } from "@/components/ui/shared";
import { Mail, Phone, MapPin, Instagram, Clock, ArrowRight } from "lucide-react";

// Metadata for this page is provided via layout.tsx since this is a client component.
// Page-specific SEO is handled through the global metadata in app/layout.tsx.
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Contact Us"
        subtitle="We'd love to hear about your space. Let's start a conversation."
        image="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85"
      />

      <section className="bg-warm-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <div>
            <Reveal>
              <SectionLabel label="Let's Connect" className="mb-6" />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-italiana text-5xl lg:text-6xl text-espresso tracking-wide leading-tight mb-8">
                Your Dream Space
                <br />
                <span className="font-cormorant italic font-light">Starts with a Call</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-dm text-base text-charcoal/70 leading-relaxed mb-12">
                Whether you have a detailed brief or just a vague feeling that something needs to change — we're here to listen. Reach out and let's see what's possible together.
              </p>
            </Reveal>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              {[
                {
                  icon: <MapPin size={16} />,
                  label: "Studio",
                  value: "BHOGAL BROTHERS, BAGDOGRA\nBIHAR MORE, PIN CODE- 734014",
                },
                {
                  icon: <Phone size={16} />,
                  label: "Phone",
                  value: "+91 76020 16708",
                  href: "tel:+917602016708",
                },
                {
                  icon: <Mail size={16} />,
                  label: "Email",
                  value: "hello@urbansaajh.com",
                  href: "mailto:hello@urbansaajh.com",
                },
                {
                  icon: <Clock size={16} />,
                  label: "Studio Hours",
                  value: "Mon – Sat: 10:00 AM – 7:00 PM\nSunday: By Appointment",
                },
              ].map((item) => (
                <Reveal key={item.label}>
                  <div className="flex gap-5 items-start">
                    <div className="w-10 h-10 border border-cream-dark flex items-center justify-center text-gold flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-dm text-[9px] tracking-ultra-wide uppercase text-taupe-dark mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-dm text-sm text-espresso hover:text-gold transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-dm text-sm text-espresso whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Social */}
            <Reveal>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/urbansaajh_bytej/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-dm text-[10px] tracking-ultra-wide uppercase text-taupe-dark hover:text-gold border-b border-transparent hover:border-gold pb-0.5 transition-all duration-200"
                >
                  <Instagram size={13} />
                  @urbansaajh_bytej
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <Reveal delay={200}>
            {submitted ? (
              <div className="bg-cream p-12 lg:p-16 text-center h-full flex flex-col items-center justify-center min-h-[500px]">
                <div className="w-12 h-12 border border-gold flex items-center justify-center mb-6">
                  <ArrowRight size={18} className="text-gold" />
                </div>
                <h3 className="font-italiana text-4xl text-espresso tracking-wide mb-4">
                  Message Received
                </h3>
                <p className="font-cormorant text-xl italic text-espresso/70 mb-2">
                  Thank you for reaching out.
                </p>
                <p className="font-dm text-sm text-charcoal/60 leading-relaxed max-w-xs">
                  We'll be in touch within 24 hours to discuss your project and schedule a discovery call.
                </p>
                <div className="w-12 h-px bg-gold mt-8" />
              </div>
            ) : (
              <div className="bg-cream p-8 lg:p-12">
                <p className="font-dm text-[9px] tracking-ultra-wide uppercase text-gold mb-8">
                  Project Enquiry Form
                </p>

                <div className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-dm text-[9px] tracking-ultra-wide uppercase text-espresso/60 block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-cream-dark focus:border-espresso outline-none py-2 font-dm text-sm text-espresso placeholder-taupe transition-colors duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="font-dm text-[9px] tracking-ultra-wide uppercase text-espresso/60 block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-cream-dark focus:border-espresso outline-none py-2 font-dm text-sm text-espresso placeholder-taupe transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-dm text-[9px] tracking-ultra-wide uppercase text-espresso/60 block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-cream-dark focus:border-espresso outline-none py-2 font-dm text-sm text-espresso placeholder-taupe transition-colors duration-200"
                      placeholder="+91 76020 16708"
                    />
                  </div>


                  {/* Message */}
                  <div>
                    <label className="font-dm text-[9px] tracking-ultra-wide uppercase text-espresso/60 block mb-2">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-transparent border-b border-cream-dark focus:border-espresso outline-none py-2 font-dm text-sm text-espresso placeholder-taupe transition-colors duration-200 resize-none"
                      placeholder="Describe your space, vision, timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full font-dm text-[11px] tracking-ultra-wide uppercase py-4 bg-espresso text-cream hover:bg-espresso-light transition-all duration-300 flex items-center justify-center gap-3 mt-4"
                  >
                    Send Enquiry
                    <ArrowRight size={13} />
                  </button>

                  <p className="font-dm text-[9px] text-taupe text-center">
                    We respond within 24 hours. Your information is kept strictly confidential.
                  </p>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* Map / Studio visual */}
      <section className="bg-cream-dark py-0">
        <div className="relative h-72 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt="Urban Saajh Studio"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="font-italiana text-4xl text-espresso tracking-widest">URBAN SAAJH</p>
              <p className="font-dm text-[9px] tracking-mega-wide uppercase text-espresso/60 mt-2">
                Studio · India
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
