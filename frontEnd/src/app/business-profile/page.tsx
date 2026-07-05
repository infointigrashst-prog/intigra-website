"use client";
import { useState } from "react";
import {
  Phone,
  Mail,
  Globe,
  Share2,
  Save,
  Image as ImageIcon,
  FileText,
  CreditCard,
} from "lucide-react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ShareCardModal from "@/components/comman/shareCardModal";

export default function BusinessProfile() {
  const [activeInfo, setActiveInfo] = useState<"tax" | "bank" | null>(null);
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [isShareOpen, setShareOpen] = useState(false);

  const galleryImages = [
    "/images/products/hydrant-valve.jpg",
    "/images/products/hydrant-valve-2.jpg",
    "/images/products/Flanges-madrec.jpg",
    "/images/products/Flanges2-madrec.jpg",
    "/images/products/Boiler_Parts2-madrec.jpg",
    "/images/products/Valve_Casting_Parts2-madrec.jpg",
    "/images/products/Valve_Casting_Parts3-madrec.jpg",
  ]; // replace with your product images

  // Function to create and download VCF
  function downloadVCard() {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Shree Hari Yogi
ORG:Surface Technology
TEL;TYPE=CELL:+917984528778
EMAIL:info@shreehariyogi.com
ADR:;;Plot 2, Veraval Shapar, Rajkot, Gujarat, 360024;India
URL:https://shree-hari-yogi.vercel.app/
END:VCARD
  `.trim();

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "ShreeHariYogi.vcf"; // File name
    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 flex flex-col items-center py-3 px-2">
      {/* Card Container */}
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md overflow-hidden border border-gray-100 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
        {/* Banner & Logo */}
        <div className="relative h-60 bg-gradient-to-tr from-orange-600 via-yellow-500 to-pink-400 flex items-center justify-center overflow-visible">
          {/* Decorative Wave Shape */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="w-full h-20"
            >
              <path
                d="M0.00,49.98 C150.00,150.00 349.93,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                className="fill-white"
              ></path>
            </svg>
          </div>

          {/* Glow Logo */}
          <div className="absolute -bottom-20 flex justify-center w-full">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-400 blur-3xl opacity-60 rounded-full animate-pulse"></div>
              <Image
                src="/images/shree-hari-yogi-logo.png"
                alt="Shree Hari Yogi Logo"
                width={140}
                height={140}
                className="relative rounded-full border-[6px] border-white shadow-2xl ring-4 ring-orange-300 ring-opacity-70 transform hover:scale-110 transition"
              />
            </div>
          </div>

          {/* Title Overlay */}
          <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-lg px-6 py-3 rounded-2xl shadow-lg">
            <h1 className="text-3xl font-extrabold text-white drop-shadow-md tracking-wide">
              Shree Hari Yogi
            </h1>
            <p className="text-sm text-white/90 mt-1">
              Powder Coating & Surface Finishing
            </p>
          </div>

          {/* Animated Circle Accent */}
          <div className="absolute top-10 right-10 w-16 h-16 bg-white/20 rounded-full blur-2xl animate-ping"></div>
        </div>

        {/* Info Section */}
        <div className="mt-10 text-center px-6 pb-8">
          {/* <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
            Yash Kapadiya
          </h2> */}
          <p className="text-orange-600 font-semibold text-lg mb-2">
            Yash Kapadiya
          </p>
          <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">
            Plot 2, Veraval Shapar, Rajkot, Gujarat, 360024
          </p>

          {/* Main Action Buttons */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <ActionButton
              icon={<Save size={20} className="text-blue-600" />}
              text="Save Contact"
              onClick={downloadVCard}
            />
            <ActionButton
              icon={<ImageIcon size={20} className="text-green-600" />}
              text="Gallery"
              onClick={() => setGalleryOpen(true)}
            />
            <ActionButton
              icon={<Share2 size={20} className="text-purple-600" />}
              text="Share Card"
              onClick={() => setShareOpen(true)}
            />
          </div>
          <ShareCardModal
            isOpen={isShareOpen}
            onClose={() => setShareOpen(false)}
          />

          {/* Secondary Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <ActionButton
              icon={<FileText size={20} className="text-indigo-600" />}
              text="Tax Details"
              onClick={() => setActiveInfo(activeInfo === "tax" ? null : "tax")}
            />
            <ActionButton
              icon={<CreditCard size={20} className="text-fuchsia-600" />}
              text="Bank Details"
              onClick={() =>
                setActiveInfo(activeInfo === "bank" ? null : "bank")
              }
            />
          </div>

          {/* Conditional Info Display */}
          {activeInfo === "tax" && (
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-5 rounded-xl text-sm text-gray-700 mb-8 shadow-inner border border-gray-200 text-left">
              <p className="font-bold text-gray-800 mb-2">
                GSTIN: <span className="font-normal">24AAJFT123XXXXX</span>
              </p>
            </div>
          )}
          {activeInfo === "bank" && (
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-5 rounded-xl text-sm text-gray-700 mb-8 shadow-inner border border-gray-200 text-left">
              <p className="font-bold text-gray-800 mb-2">Bank Details:</p>
              <ul className="list-disc list-inside ml-2 space-y-1 text-gray-600">
                <li>
                  A/C Name: <span className="font-normal">SHREE HARI YOGI</span>
                </li>
                <li>
                  A/C No: <span className="font-normal">1234XXXXXX</span>
                </li>
                <li>
                  IFSC Code: <span className="font-normal">HDFC000XXXXX</span>
                </li>
                <li>
                  Bank Name: <span className="font-normal">HDFC BANK</span>
                </li>
                <li>
                  Branch: <span className="font-normal">Rajkot</span>
                </li>
              </ul>
            </div>
          )}

          {/* Contact Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ContactButton
              icon={<AiOutlineWhatsApp size={22} />}
              text="WhatsApp"
              color="whatsapp"
              href="https://wa.me/7984528778?text=Hello%20Shree%20Hari%20Yogi,%20I%20am%20interested%20in%20your%20powder%20coating%20services."
            />
            <ContactButton
              icon={<FileText size={20} />}
              text="Inquiry"
              color="blue"
              href="/contact-us"
            />
            <ContactButton
              icon={<Globe size={20} />}
              text="Website"
              color="gray"
              href="/"
            />
            <ContactButton
              icon={<Mail size={20} />}
              text="Send Mail"
              color="red"
              href="mailto:info@shreehariyogi.com"
            />
            <ContactButton
              icon={<Phone size={20} />}
              text="Call Now"
              color="yellow"
              href="tel:+917984528778"
            />
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setGalleryOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-3xl font-bold z-50"
            >
              ✕
            </button>

            {/* Swiper Slider */}
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation
              pagination={{ clickable: true }}
              loop
              className="relative"
            >
              {galleryImages.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex justify-center p-4">
                    <Image
                      src={src}
                      alt={`Product ${idx + 1}`}
                      width={800}
                      height={600}
                      className="object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
}

// Reusable Action Button
function ActionButton({
  icon,
  text,
  onClick,
}: {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 bg-white p-3 rounded-xl hover:bg-gray-50 transition transform hover:-translate-y-1 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-75 group"
    >
      {icon}
      <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900">
        {text}
      </span>
    </button>
  );
}

// Reusable Contact Button
function ContactButton({
  icon,
  text,
  color,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  color: string;
  href?: string;
}) {
  const getColors = (baseColor: string) => {
    switch (baseColor) {
      case "whatsapp":
        return "bg-green-50 text-green-700 hover:bg-green-100 border-green-200";
      case "blue":
        return "bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200";
      case "gray":
        return "bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200";
      case "red":
        return "bg-red-50 text-red-700 hover:bg-red-100 border-red-200";
      case "yellow":
        return "bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border-yellow-200";
      default:
        return "bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200";
    }
  };

  const colors = getColors(color);

  return (
    <a
      href={href || "#"}
      target={href?.startsWith("/") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={`flex flex-col items-center gap-1 p-3 rounded-xl transition transform hover:-translate-y-1 shadow-sm border ${colors} focus:outline-none focus:ring-2 focus:ring-opacity-75 focus:ring-${color}-300`}
    >
      {icon}
      <span className="text-xs font-medium">{text}</span>
    </a>
  );
}
