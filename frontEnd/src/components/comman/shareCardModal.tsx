"use client";
import { Phone, Mail, Facebook, Twitter, Linkedin, X } from "lucide-react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useState } from "react";

export default function ShareCardModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const shareMessage =
    "Shree Hari Yogi - Digital Business Card @ https://www.integracoatings.com/business-profile Click the above link & connect with us";

  const icons = [
    {
      icon: <Phone size={22} />,
      href: "tel:+917984528778",
    },
    {
      icon: <Facebook size={22} />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        "https://www.integracoatings.com/business-profile"
      )}`,
    },
    {
      icon: <Twitter size={22} />,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`,
    },
    {
      icon: <Linkedin size={22} />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        "https://www.integracoatings.com/business-profile"
      )}`,
    },
    {
      icon: <AiOutlineWhatsApp size={22} />,
      href: `https://wa.me/?text=${encodeURIComponent(shareMessage)}`,
    },
    {
      icon: <Mail size={22} />,
      href: `mailto:?subject=Shree Hari Yogi - Digital Business Card&body=${encodeURIComponent(shareMessage)}`,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xs overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2">
          <h2 className="text-white text-sm font-semibold">Share</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="bg-orange-50 px-5 py-6 flex flex-wrap justify-center gap-4">
          {icons.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-md bg-orange-100 text-orange-600 hover:bg-orange-200 hover:scale-105 transition transform shadow-sm"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
