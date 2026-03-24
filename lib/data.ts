// Central data file for Urban Saajh website

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
] as const;

export const CONTACT = {
  phone: "+91 76020 16708",
  email: "hello@urbansaajh.com",
  address: "BHOGAL BROTHERS, BAGDOGRA, BIHAR MORE, PIN CODE- 734014",
  instagram: "https://www.instagram.com/urbansaajh_bytej/",
  hours: "Mon–Sat: 10AM–7PM | Sunday: By Appointment",
} as const;

export const BRAND = {
  name: "Urban Saajh",
  tagline: "Bespoke Interior Design — For Every Space & Budget",
  description:
    "Urban Saajh is a versatile interior design studio crafting timeless, functional, and soulful spaces across India, from budget-friendly homes to luxury estates.",
} as const;
