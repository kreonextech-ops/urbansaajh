import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ProcessSection from "@/components/home/ProcessSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export const metadata: Metadata = {
  title: "Urban Saajh — Best Interior Designer in Bagdogra, Siliguri & Darjeeling",
  description:
    "Urban Saajh is the leading interior design studio in Bagdogra, serving Siliguri, Darjeeling, Kurseong, Kalimpong, and Sikkim. Premium bespoke residential and commercial interiors by Tejinder Singh Bhogal.",
  keywords: [
    "interior designer Bagdogra", "best interior designer Siliguri",
    "interior design Darjeeling", "interior designer North Bengal",
    "interior designer Sikkim", "interior design Kalimpong",
    "interior designer Kurseong", "bespoke interior design North Bengal hills",
    "luxury home interior Siliguri", "interior design studio Bagdogra",
  ],
  openGraph: {
    title: "Urban Saajh — Best Interior Designer in Bagdogra, Siliguri & Darjeeling",
    description: "Leading interior design studio serving Bagdogra, Siliguri, Darjeeling, Kurseong, Kalimpong, and Sikkim.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.urbansaajh.com",
  name: "Urban Saajh",
  description:
    "Premium interior design studio serving Bagdogra, Siliguri, Darjeeling, Kurseong, Kalimpong, and Sikkim.",
  url: "https://www.urbansaajh.com",
  telephone: "+917602016708",
  email: "hello@urbansaajh.com",
  founder: {
    "@type": "Person",
    name: "Tejinder Singh Bhogal",
    jobTitle: "Founder & Principal Designer",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bhogal Brothers, Bagdogra, Bihar More",
    addressLocality: "Bagdogra",
    addressRegion: "West Bengal",
    postalCode: "734014",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.6813,
    longitude: 88.3258,
  },
  areaServed: [
    { "@type": "City", name: "Bagdogra" },
    { "@type": "City", name: "Siliguri" },
    { "@type": "City", name: "Darjeeling" },
    { "@type": "City", name: "Kurseong" },
    { "@type": "City", name: "Kalimpong" },
    { "@type": "City", name: "Gangtok" },
    { "@type": "State", name: "Sikkim" },
    { "@type": "State", name: "West Bengal" },
  ],
  sameAs: ["https://www.instagram.com/urbansaajh_bytej/"],
  openingHours: "Mo-Sa 10:00-19:00",
  priceRange: "₹₹–₹₹₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Bank Transfer, UPI",
  image: "https://www.urbansaajh.com/images/og-image.jpg",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <WhyChooseUs />
      <TestimonialsSection />
    </>
  );
}
