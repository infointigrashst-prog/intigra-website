"use client";

import { Loader2, PlaySquare, Volume2, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";

export default function VideoSection() {
  const [open, setOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [loading, setLoading] = useState(true);

  const videoId = "1196947679";
useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 200);

  return () => clearTimeout(timer);
}, []);
  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-video overflow-hidden">
          {loading && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                <span className="mt-4 text-white tracking-widest text-sm uppercase">
                  INTIGRA
                </span>
              </div>
            </div>
          )}

          <iframe
            key={isMuted ? "muted" : "unmuted"}
            onLoad={() => setLoading(false)}
            src={`https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&muted=${
              isMuted ? 1 : 0
            }`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
          />
        </div>

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute bottom-3 right-3 md:bottom-6 md:right-6 flex gap-2 md:gap-3">
          {/* Mute / Unmute */}
          <button
            onClick={() => {
              setLoading(true);
              setIsMuted(!isMuted);
            }}
            className="bg-black/60 hover:bg-black/80 text-white rounded-lg md:rounded-xl p-2 md:p-3 backdrop-blur-md transition"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 md:w-6 md:h-6" />
            ) : (
              <Volume2 className="w-4 h-4 md:w-6 md:h-6" />
            )}
          </button>

          {/* Open Popup */}
          <button
            onClick={() => setOpen(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg md:rounded-xl shadow-xl p-2 md:p-3 transition-all duration-300"
          >
            <PlaySquare className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>
      </section>

      {/* Popup */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-3 md:p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-12 right-0 text-white text-5xl z-50"
            >
              ×
            </button>

            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <iframe
                src={`https://player.vimeo.com/video/${videoId}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
