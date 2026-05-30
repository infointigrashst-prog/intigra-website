import Link from "next/link";
import { SprayCan, Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

const INTIGRALogoSmall = () => (
  <Link
    href="/"
    className="flex items-center gap-3 hover:opacity-90 transition-opacity"
  >
    <Image
      src="/images/header_logo.png"
      alt="Intigra Coatings Logo"
      width={250}
      height={100}
      className="object-contain"
      priority
    />
  </Link>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Decorative powder spray effect */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-orange-500 rounded-full opacity-20 blur-3xl animate-pulse" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse" />

      <div className="container max-w-screen-xl py-5 px-6 sm:px-8 lg:px-16 relative z-10">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-6">
          {/* Logo & About */}
          <div>
            <INTIGRALogoSmall />
            <p className="mt-4 text-base text-white/80">
              Your trusted partner for premium{" "}
              <span className="font-semibold">powder coating</span> solutions.
            </p>
            <p className="mt-2 text-base text-white/80">
              Durable finishes. Vibrant colors. Industrial precision.
            </p>
          </div>

          {/* MOBILE WRAP → Quick Links + Connect */}
          <div className="grid grid-cols-2 md:col-span-2 md:grid-cols-2">
            {/* Quick Links */}
            <div>
              <h3 className="text-base font-semibold uppercase tracking-wider text-orange-400">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2">
                {["About Us", "Services", "Project Gallery", "Contact Us"].map(
                  (item, i) => (
                    <li key={i}>
                      <Link
                        href={`/${item.toLowerCase().replace(/ /g, "")}`}
                        className="text-base text-white/80 hover:text-orange-400 transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h3 className="text-base font-semibold uppercase tracking-wider text-orange-400">
                Connect With Us
              </h3>

               <div className="mt-4 flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/70 hover:text-orange-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-white/70 hover:text-orange-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/70 hover:text-orange-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>

              <p className="mt-4 mb-2 text-base text-white/80">
                Intigra Coatings, Rajkot, Gujarat, India
              </p>

              <p className="text-base text-white/80">
                <a href="tel:+918128228778" className="hover:text-white">
                  📞 +91 81282 28778
                </a>
              </p>

              <p className="text-base text-white/80">
                <a
                  href="mailto:info.intigra.shst@gmail.com"
                  className="hover:text-white break-all sm:break-normal"
                >
                info.intigra.shst@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-5 border-t border-gray-700 pt-3 text-center text-sm text-white/60">
          &copy; {currentYear} INTIGRA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
