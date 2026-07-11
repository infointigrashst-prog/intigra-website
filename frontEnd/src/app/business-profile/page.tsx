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
import BubbleBackground from "@/components/comman/BubbleBackground";

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
FN:Yash Kapadiya
ORG:INTIGRA Coatings
TEL;TYPE=CELL:+918128228778
EMAIL:info.intigra.shst@gmail.com
ADR:;;Aanand liner gate, Dhwani Industrial area 5, Shree Hari Surface Technology, Veraval (Shapar), Rajkot-360024;India
URL:https://intigracoatings.com
END:VCARD
  `.trim();

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "YashKapadiya_Intigra.vcf"; // File name
    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 flex flex-col items-center py-8 px-4 relative overflow-hidden">
      {/* Background watercolor bubbles */}
      <BubbleBackground opacity={0.5} theme="light" />

      {/* Card Container */}
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md overflow-hidden border border-gray-100 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out relative z-10">
        {/* Banner & Logo */}
        <div className="relative h-60 bg-gradient-to-tr from-[#1E3A8A] via-[#0d0d15] to-[#ff6b2b] flex items-center justify-center overflow-visible">
          {/* Reusable Background bubbles canvas */}
          <BubbleBackground opacity={0.4} theme="dark" />

          {/* Decorative Wave Shape */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
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
          <div className="absolute -bottom-20 flex justify-center w-full z-20">
            <div className="relative bg-white rounded-full p-1.5 shadow-2xl">
              <div className="absolute inset-0 bg-orange-400 blur-3xl opacity-60 rounded-full animate-pulse"></div>
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-slate-100 flex items-center justify-center bg-white">
                <Image
                  src="/images/header_logo.png"
                  alt="INTIGRA Coatings Logo"
                  width={110}
                  height={110}
                  className="object-contain transform hover:scale-110 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* Title Overlay */}
          <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-lg px-5 py-2.5 rounded-2xl shadow-lg border border-white/10">
            <h1 className="text-xl font-extrabold text-white tracking-wider uppercase font-display">
              INTIGRA Coatings
            </h1>
            <p className="text-[10px] text-zinc-300 uppercase tracking-widest mt-0.5 font-ui">
              Powder Coating Excellence
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-24 text-center px-6 pb-8 relative">
          <h2 className="text-2xl font-extrabold text-gray-900 leading-tight mb-1 font-display uppercase tracking-wide">
            Yash Kapadiya
          </h2>
          <p className="text-orange-600 font-semibold text-xs uppercase tracking-widest font-ui mb-3">
            Managing Director
          </p>
          <p className="text-gray-500 text-xs mb-6 max-w-[280px] mx-auto leading-relaxed">
            Aanand liner gate, Dhwani Industrial area 5, Shree Hari Surface Technology, Veraval (Shapar), Rajkot-360024
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
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-2xl text-xs text-gray-700 mb-8 shadow-inner border border-gray-200 text-left reveal">
              <p className="font-bold text-gray-800">
                GSTIN: <span className="font-mono text-orange-600 font-semibold ml-1">24AAJFI8128R1Z1</span>
              </p>
            </div>
          )}
          {activeInfo === "bank" && (
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-2xl text-xs text-gray-700 mb-8 shadow-inner border border-gray-200 text-left reveal">
              <p className="font-bold text-gray-800 mb-3 border-b border-gray-200/80 pb-1.5 uppercase tracking-wide">Bank details:</p>
              <ul className="space-y-1.5 text-gray-600">
                <li className="flex justify-between">
                  <span className="font-semibold text-gray-500">A/C Name:</span>
                  <span className="font-bold text-gray-800">INTIGRA COATINGS</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-gray-500">A/C No:</span>
                  <span className="font-mono font-bold text-gray-800">50200062481282</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-gray-500">IFSC Code:</span>
                  <span className="font-mono font-bold text-orange-600">HDFC0000213</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-gray-500">Bank Name:</span>
                  <span className="font-bold text-gray-800">HDFC BANK</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-gray-500">Branch:</span>
                  <span className="font-bold text-gray-800">Veraval Shapar</span>
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
              href="https://wa.me/918128228778?text=Hello%20INTIGRA%20Coatings,%20I%20am%20interested%20in%20your%20powder%20coating%20services."
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
              href="mailto:info.intigra.shst@gmail.com"
            />
            <ContactButton
              icon={<Phone size={20} />}
              text="Call Now"
              color="yellow"
              href="tel:+918128228778"
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
