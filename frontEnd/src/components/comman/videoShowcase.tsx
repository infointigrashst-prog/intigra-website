"use client";

import { PlaySquare, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export default function VideoSection() {
  const [open, setOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const videoId = "1196947679";

  return (
    <>
      <section className="relative w-full overflow-hidden">
        <iframe
          key={isMuted ? "muted" : "unmuted"}
          src={`https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&muted=${
            isMuted ? 1 : 0
          }`}
          className="w-full h-[250px] md:h-[600px]"
          allow="autoplay; fullscreen; picture-in-picture"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex gap-3">
          {/* Mute / Unmute */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="bg-black/60 hover:bg-black/80 text-white rounded-xl p-3 backdrop-blur-md"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 md:w-6 md:h-6" />
            ) : (
              <Volume2 className="w-5 h-5 md:w-6 md:h-6" />
            )}
          </button>

          {/* Open Popup */}
          <button
            onClick={() => setOpen(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-xl p-3"
          >
            <PlaySquare className="w-5 h-5 md:w-6 md:h-6" />
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