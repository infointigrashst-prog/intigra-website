"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact-us", label: "Contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          (scrolled || pathname !== "/")
            ? "bg-black/85 backdrop-blur-xl border-b border-white/8 py-3 shadow-2xl shadow-black/30"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="bg-white px-5 py-2 flex items-center transition-opacity hover:opacity-90 shadow-md"
            style={{ clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}
          >
            <div className="relative h-12 w-32 md:h-14 md:w-44">
              <Image
                src="/images/header_logo.png"
                alt="INTIGRA Coatings Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative font-ui text-[13px] tracking-[1px] uppercase font-medium transition-colors duration-300 group",
                  pathname === link.href
                    ? "text-orange-400"
                    : scrolled
                    ? "text-zinc-300 hover:text-white"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute left-0 -bottom-1 h-[1px] bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300",
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+918128228778"
              className={cn(
                "font-ui text-[12px] tracking-[1px] uppercase font-medium transition-colors duration-300",
                scrolled ? "text-zinc-400 hover:text-orange-400" : "text-white/60 hover:text-orange-400"
              )}
            >
              📞 +91 81282 28778
            </a>
            <Link
              href="/contact-us"
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-ui text-[12px] tracking-[2px] uppercase font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-orange-500/20"
              style={{ clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={cn("w-6 h-[1.5px] bg-white transition-all duration-300", isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : "")} />
            <span className={cn("w-6 h-[1.5px] bg-white transition-all duration-300", isMobileMenuOpen ? "opacity-0" : "")} />
            <span className={cn("w-6 h-[1.5px] bg-white transition-all duration-300", isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : "")} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 transition-all duration-500 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        {/* Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-72 bg-[#0d0d15] border-l border-white/8 flex flex-col pt-24 pb-8 px-8 transition-transform duration-500",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "py-3 px-4 font-ui text-[13px] tracking-[2px] uppercase font-medium transition-all duration-200 border-b border-white/5",
                  pathname === link.href
                    ? "text-orange-400 border-orange-500/30"
                    : "text-zinc-300 hover:text-white hover:pl-6"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <a
              href="tel:+918128228778"
              className="text-zinc-400 text-sm font-ui tracking-wide hover:text-orange-400 transition-colors"
            >
              📞 +91 81282 28778
            </a>
            <Link
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-ui text-[12px] tracking-[2px] uppercase font-semibold"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
