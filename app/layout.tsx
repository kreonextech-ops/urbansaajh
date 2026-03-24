import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Urban Saajh — Bespoke Interior Design | Bagdogra, Siliguri, Darjeeling",
    template: "%s | Urban Saajh Interior Design",
  },
  description:
    "Urban Saajh is a premium interior design studio serving Bagdogra, Siliguri, Darjeeling, Kurseong, Kalimpong, Sikkim, and the entire North Bengal hills region. Bespoke residential and commercial interiors crafted by expert designer Tejinder Singh Bhogal.",
  keywords: [
    // Brand
    "Urban Saajh", "Urban Saajh interior design", "Tejinder Singh Bhogal",
    // Service keywords
    "bespoke interior design", "residential interior design", "commercial interior design",
    "turnkey interior project", "space planning", "custom furniture design",
    "home interior designer", "luxury interior design India", "budget interior design",
    // Primary location — Bagdogra
    "interior designer Bagdogra", "best interior designer Bagdogra",
    "interior design Bagdogra", "home interior Bagdogra",
    "interior decorator Bagdogra", "interior design studio Bagdogra",
    // Siliguri
    "interior designer Siliguri", "best interior designer Siliguri",
    "interior design Siliguri", "home interior Siliguri",
    "luxury interior design Siliguri", "interior decorator Siliguri",
    "residential interior design Siliguri", "commercial interior design Siliguri",
    // Darjeeling
    "interior designer Darjeeling", "interior design Darjeeling",
    "home interior Darjeeling", "best interior designer Darjeeling",
    "hill station interior design Darjeeling",
    // Kurseong
    "interior designer Kurseong", "interior design Kurseong",
    "best interior designer Kurseong", "home interior Kurseong",
    // Kalimpong
    "interior designer Kalimpong", "interior design Kalimpong",
    "best interior designer Kalimpong", "home interior Kalimpong",
    // Sikkim
    "interior designer Sikkim", "interior design Sikkim",
    "best interior designer Gangtok", "interior design Gangtok",
    "home interior Sikkim", "interior designer Gangtok Sikkim",
    // Hills / North Bengal region
    "interior designer North Bengal", "interior design North Bengal hills",
    "hill interior design", "interior designer sub Himalayan region",
    "interior designer Dooars", "interior design Jalpaiguri",
    "interior designer Cooch Behar", "interior design North East India",
    // General India
    "interior designer India", "best interior design studio India",
    "top interior designer West Bengal",
  ],
  authors: [{ name: "Tejinder Singh Bhogal" }],
  creator: "Urban Saajh",
  publisher: "Urban Saajh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Urban Saajh — Bespoke Interior Design | Bagdogra · Siliguri · Darjeeling",
    description:
      "Premium interior design studio serving Bagdogra, Siliguri, Darjeeling, Kurseong, Kalimpong, and Sikkim. Crafting timeless, functional, and soulful spaces.",
    type: "website",
    locale: "en_IN",
    siteName: "Urban Saajh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Saajh — Bespoke Interior Design | Bagdogra · Siliguri · Darjeeling",
    description:
      "Premium interior design studio serving Bagdogra, Siliguri, Darjeeling, Kurseong, Kalimpong, and Sikkim.",
    creator: "@urbansaajh_bytej",
  },
  category: "Interior Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=DM+Sans:wght@300;400;500&family=Italiana&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-warm-white text-espresso antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
