"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, SprayCan } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact-us", label: "Contact Us" },
];

const INTIGRALogo = () => (
  <Link
    href="/"
    className="flex items-center gap-3 group transition-all duration-300 ml-8"
  >
    <div className="relative h-20 w-44">
      <Image
        src="/images/header_logo.png" // ✅ make sure logo is in /public/images/
        alt="Intigra Coatings Logo"
        fill
        className="object-contain group-hover:scale-105 transition-transform duration-300"
        priority
      />
    </div>
  </Link>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-orange-100 shadow-sm transition-all duration-300">
      <div className="container flex h-15 max-w-screen-xl items-center justify-between px-4">
        <INTIGRALogo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-[15px] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative group transition-all duration-300",
                pathname === link.href
                  ? "text-orange-600 font-semibold"
                  : "text-gray-700 hover:text-orange-600",
              )}
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="text-gray-700 hover:bg-orange-50"
          >
            {/* {isMobileMenuOpen ? (
  <X className="h-8 w-8 md:h-10 md:w-10" />
) : (
  <Menu className="h-9 w-9 md:h-10 md:w-10" />
)} */}
            {isMobileMenuOpen ? (
              <svg className="h-6 fill-current" viewBox="0 0 20 20">
                <title>Close Menu</title>
                <polygon
                  points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                  transform="rotate(45 10 10)"
                />
              </svg>
            ) : (
              <svg className="h-9 fill-current" viewBox="0 0 20 20">
                <title>Open Menu</title>
                <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-17 left-0 right-0 z-40 bg-white border-t border-orange-100 shadow-lg animate-slideDown">
          <nav className="flex flex-col items-center space-y-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMobileMenu}
                className={cn(
                  "text-lg transition-all duration-200 w-full text-center py-2 rounded-md",
                  pathname === link.href
                    ? "text-orange-600 font-semibold bg-orange-50"
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
