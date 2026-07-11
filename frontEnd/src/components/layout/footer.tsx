import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden border-t border-white/10"
      style={{ background: "#06060c" }}
    >
      {/* Dynamic ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[500px] h-[300px] rounded-full bg-orange-500 opacity-[0.05] blur-[120px]" />
        <div className="absolute bottom-0 right-10 w-[300px] h-[300px] rounded-full bg-cyan-400 opacity-[0.03] blur-[100px]" />
      </div>

      {/* Decorative top border gradient line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-orange-600 via-amber-400 to-transparent" />

      {/* Main Footer Container */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-10 relative z-10">
        {/* ============================================================== */}
        {/* 1. DESKTOP & TABLET VIEW: Full detailed grid (Visible on md up) */}
        {/* ============================================================== */}
        <div className="hidden md:grid grid-cols-12 gap-8 pb-12 border-b border-white/5">
          {/* Column 1: Brand & Logo (Spans 5 cols) */}
          <div className="col-span-5 flex flex-col items-start">
            <Link
              href="/"
              className="inline-flex bg-white px-5 py-2 items-center transition-opacity hover:opacity-90 shadow-md mb-6"
              style={{
                clipPath:
                  "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
              }}
            >
              <Image
                src="/images/header_logo.png"
                alt="INTIGRA Coatings Logo"
                width={150}
                height={60}
                className="object-contain"
              />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-sm">
              World-class automated powder coating plant in Rajkot, Gujarat.
              Engineering colour and protecting excellence with advanced
              electrostatic systems.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1JGgtxVfMZ/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/intigra_coatings?igsh=dmw4OHk2dThvcTB5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Spans 3 cols) */}
          <div className="col-span-3 pl-4">
            <h3 className="font-display text-lg tracking-[2px] uppercase text-white mb-6 border-l-2 border-orange-500 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {[
                { href: "/", label: "Home Page" },
                { href: "/about-us", label: "About INTIGRA" },
                { href: "/services", label: "Our Services" },
                { href: "/products", label: "Finish Gallery" },
                { href: "/contact-us", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-sm transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                  >
                    <span className="w-4 h-[1px] bg-orange-500/30 group-hover:w-5 group-hover:bg-orange-500 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details (Spans 4 cols) */}
          <div className="col-span-4">
            <h3 className="font-display text-lg tracking-[2px] uppercase text-white mb-6 border-l-2 border-orange-500 pl-3">
              Reach Us
            </h3>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Aanand liner gate, Dhwani Industrial area 5, Shree Hari
                  Surface Technology
                  <br />
                  Veraval (Shapar),Rajkot, Gujarat 360024, India
                </span>
              </li>
              <li>
                <a
                  href="tel:+918128228778"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <Phone className="text-orange-500 w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+91 81282 28778</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info.intigra.shst@gmail.com"
                  className="flex items-center gap-3 hover:text-white transition-colors break-all group"
                >
                  <Mail className="text-orange-500 w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>info.intigra.shst@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-orange-500 w-5 h-5 flex-shrink-0" />
                <span>Thursday - Thursday: 8:30 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. MOBILE VIEW: Super compact, low-height grid (Visible below md) */}
        {/* ============================================================== */}
        <div className="md:hidden flex flex-col gap-8 pb-8 border-b border-white/5">
          {/* Top row: Brand Logo & Social links aligned side-by-side */}
          <div className="flex justify-between items-center w-full">
            <Link
              href="/"
              className="bg-white px-4 py-1.5 flex items-center transition-opacity hover:opacity-90 shadow-sm"
              style={{
                clipPath:
                  "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
              }}
            >
              <Image
                src="/images/header_logo.png"
                alt="INTIGRA Coatings Logo"
                width={110}
                height={45}
                className="object-contain"
              />
            </Link>

            {/* Highly compact socials */}
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/share/1JGgtxVfMZ/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/intigra_coatings?igsh=dmw4OHk2dThvcTB5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Middle row: 2-column grid to cut height in half */}
          <div className="grid grid-cols-2 gap-6 text-left">
            {/* Quick Links Column */}
            <div>
              <h3 className="font-display text-sm tracking-[1.5px] uppercase text-white mb-4 border-l border-orange-500 pl-2">
                Quick Links
              </h3>
              <ul className="space-y-2 text-xs">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about-us", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/products", label: "Gallery" },
                  { href: "/contact-us", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-zinc-400 hover:text-white flex items-center gap-1.5"
                    >
                      <span className="w-2.5 h-[1px] bg-orange-500/30" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reach Us Column */}
            <div>
              <h3 className="font-display text-sm tracking-[1.5px] uppercase text-white mb-4 border-l border-orange-500 pl-2">
                Reach Us
              </h3>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li className="flex items-start gap-1.5 leading-relaxed">
                  <MapPin className="text-orange-500 w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  <span>
                    Aanand liner gate, Dhwani Industrial area 5,
                    Veraval(Shapar), Rajkot-360024
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+918128228778"
                    className="flex items-center gap-1.5"
                  >
                    <Phone className="text-orange-500 w-3.5 h-3.5" />
                    <span>+91 81282 28778</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info.intigra.shst@gmail.com"
                    className="flex items-center gap-1.5 truncate"
                  >
                    <Mail className="text-orange-500 w-3.5 h-3.5" />
                    <span>info.intigra.shst</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-500 text-xs md:text-sm">
          <p className="font-ui tracking-wide text-center sm:text-left">
            © {currentYear} INTIGRA Coatings. All rights reserved.
          </p>
          <div className="flex gap-4 text-[10px] md:text-xs">
            <span>Rajkot</span>
            <span>·</span>
            <span>Gujarat</span>
            <span>·</span>
            <span>India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
