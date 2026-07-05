"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaRegStar } from "react-icons/fa";
import Modal from "react-modal";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { REVIEWS_DATA as reviews } from "@/lib/staticData";

export default function Testimonials() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeReview, setActiveReview] = useState<any>(null);

  return (
    <section 
      className="py-16 relative overflow-hidden border-b border-slate-100" 
      style={{ background: "linear-gradient(180deg, #F0FDF4 0%, #ecfdf5 100%)" }}
    >
      {/* Decorative ambient soft glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-orange-500 opacity-[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="font-ui text-[11px] tracking-[6px] uppercase text-orange-500 mb-4">
            Client Testimonials
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1E3A8A] tracking-[2px] uppercase mb-4">
            Trusted By{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Manufacturers
            </span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-[600px] mx-auto leading-relaxed">
            See why leading OEMs and fabricators in Rajkot choose INTIGRA for high-durability electrostatic powder coating.
          </p>
        </div>

        {/* Top bar with Google rating CTA */}
        <div className="flex justify-between items-center mb-6 reveal">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-[#1E3A8A] font-ui">Google Review Rating: 5.0</span>
            <div className="flex text-yellow-500 text-xs">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
          </div>
          <Link
            href="https://g.page/r/CbZsX7rQrSSVEBM/review"
            target="_blank"
            className="text-xs text-orange-500 font-ui tracking-[2px] uppercase font-semibold hover:text-orange-600 transition-colors border-b border-orange-500/20 pb-1"
          >
            Write a Review
          </Link>
        </div>

        {/* Swiper Slider */}
        <div className="reveal" style={{ transitionDelay: "100ms" }}>
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={reviews.length > 3}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            className="w-full !pb-12"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-slate-200 p-6 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 flex flex-col justify-between min-h-[220px]">
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-sm">
                          {review.initial}
                        </div>
                        <div>
                          <h3 className="font-ui font-semibold text-sm text-[#1E3A8A] truncate max-w-[150px]">
                            {review.author_name}
                          </h3>
                          <p className="text-[10px] text-slate-400">{review.date}</p>
                        </div>
                      </div>
                      <Image
                        src="/images/icons8-google-96.png"
                        width={22}
                        height={22}
                        alt="Google"
                        className="opacity-80"
                      />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5 mb-3 text-yellow-500">
                      {Array.from({ length: 5 }).map((_, i) =>
                        i < review.rating ? (
                          <FaStar key={i} className="text-xs" />
                        ) : (
                          <FaRegStar key={i} className="text-xs" />
                        )
                      )}
                    </div>

                    {/* Comment */}
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {review.text ? (
                        <>
                          {review.text.length > 120 ? (
                            <>
                              {review.text.slice(0, 110)}...
                              <button
                                className="text-orange-500 text-xs ml-1 hover:underline focus:outline-none"
                                onClick={() => {
                                  setActiveReview(review);
                                  setModalIsOpen(true);
                                }}
                              >
                                Read more
                              </button>
                            </>
                          ) : (
                            review.text
                          )}
                        </>
                      ) : (
                        <span className="text-slate-400 italic">No comment provided.</span>
                      )}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* See all Reviews link */}
        <div className="flex justify-center mt-6 reveal">
          <Link
            href="https://www.google.com/maps/place/Intigra+Coatings/@22.1691844,70.8067727,41m/data=!3m1!1e3!4m18!1m9!3m8!1s0x3958356a0e8a57ef:0x9524add0ba5f6cb6!2sIntigra+Coatings!8m2!3d22.1690515!4d70.8067547!9m1!1b1!16s%2Fg%2F11msfp0v32!3m7!1s0x3958356a0e8a57ef:0x9524add0ba5f6cb6!8m2!3d22.1690515!4d70.8067547!9m1!1b1!16s%2Fg%2F11msfp0v32?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="inline-flex items-center text-xs text-zinc-400 hover:text-white transition-colors gap-2 border border-white/10 hover:border-orange-500/40 px-5 py-3"
          >
            <Image
              src="/images/icons8-google-96.png"
              alt="Google"
              width={18}
              height={18}
            />
            <span className="font-ui tracking-[1px] uppercase font-semibold">See all Google Reviews</span>
          </Link>
        </div>

      </div>

      {/* Review Modal popup */}
      {modalIsOpen && activeReview && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          ariaHideApp={false}
          className="bg-[#0d0d15] border border-white/10 w-[90%] sm:w-full max-w-lg mx-auto p-8 shadow-2xl mt-24 outline-none relative text-white"
          overlayClassName="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <button
            onClick={() => setModalIsOpen(false)}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white text-2xl"
          >
            ×
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold">
              {activeReview.initial}
            </div>
            <div>
              <h3 className="font-ui font-semibold text-base">{activeReview.author_name}</h3>
              <p className="text-xs text-zinc-500">{activeReview.date}</p>
            </div>
          </div>

          <div className="flex gap-0.5 mb-4 text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) =>
              i < activeReview.rating ? (
                <FaStar key={i} className="text-sm" />
              ) : (
                <FaRegStar key={i} className="text-sm" />
              )
            )}
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed font-light">
            {activeReview.text}
          </p>
        </Modal>
      )}
    </section>
  );
}
