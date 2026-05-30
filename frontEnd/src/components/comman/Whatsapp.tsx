"use client";

import Link from "next/link";
import Image from "next/image";

function WhatsappButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_MOBILE_NO;
  const message = encodeURIComponent(
    "Hello Intigra Coatings! I’m interested in your powder coating services. Please share details about colors, finishes, and pricing."
  );

  if (!phoneNumber) return null; // Avoid rendering if number is missing

  return (
    <div className="fixed bottom-5 left-2 z-50 w-14 h-14 md:bottom-6 md:left-4">
      <div className="relative w-14 h-14">
        {/* Ping animation */}
        <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-75"></span>

        {/* WhatsApp button */}
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:scale-105 transition-transform duration-300">
          <Link
            href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <Image
              src="/images/WhatsApp_icon.png"
              alt="WhatsApp"
              width={32}
              height={32}
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WhatsappButton;
