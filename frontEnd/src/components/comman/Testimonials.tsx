"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaRegStar } from "react-icons/fa";
import Modal from "react-modal";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { REVIEWS_DATA as reviews } from "@/lib/staticData";

const Testimonials = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeReview, setActiveReview] = useState<any>(null);

  return (
    <>
      <div className="py-5 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              What Our Clients Say
            </h2>
            <h3 className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-10">
              INTIGRA Powder Coating — Trusted by Industries for Quality &
              Precision
            </h3>
          </div>

          {/* Top bar */}
          <div className="flex justify-between items-center mb-3">
            <div></div>
            <Link
              href="https://g.page/r/CbZsX7rQrSSVEBM/review"
              target="_blank"
              className="text-sm text-orange-600 font-medium hover:underline"
            >
              Write a Review
            </Link>
          </div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            // navigation
            spaceBetween={20}
            breakpoints={{
              1280: { slidesPerView: 4 },
              1024: { slidesPerView: 3 },
              640: { slidesPerView: 1 }, // Mobile shows 1 slide
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col justify-between min-h-[150px]">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
                        {review.initial}
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm truncate w-[120px]">
                          {review.author_name}
                        </h3>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <Image
                      src="/images/icons8-google-96.png"
                      width={25}
                      height={25}
                      title="Google"
                      alt="Google"
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex mb-2">
                    {Array.from({ length: 5 }).map((_, i) =>
                      i < review.rating ? (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ) : (
                        <FaRegStar
                          key={i}
                          className="text-yellow-400 text-sm"
                        />
                      )
                    )}
                  </div>

                  {/* Comment */}
                  <p className="text-sm text-gray-800">
                    {review.text ? (
                      <>
                        {review.text.slice(0, 50)}...
                        {review.text.length > 50 && (
                          <button
                            className="text-blue-600 text-xs ml-1 hover:underline"
                            onClick={() => {
                              setActiveReview(review);
                              setModalIsOpen(true);
                            }}
                          >
                            Show more
                          </button>
                        )}
                      </>
                    ) : (
                      <span className="text-gray-400 italic">
                        No comment provided.
                      </span>
                    )}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Footer */}
          <div className="flex justify-between items-center mt-6">
            <div></div>
            <Link
              href="https://www.google.com/maps/place/Intigra+Coatings/@22.1691844,70.8067727,41m/data=!3m1!1e3!4m18!1m9!3m8!1s0x3958356a0e8a57ef:0x9524add0ba5f6cb6!2sIntigra+Coatings!8m2!3d22.1690515!4d70.8067547!9m1!1b1!16s%2Fg%2F11msfp0v32!3m7!1s0x3958356a0e8a57ef:0x9524add0ba5f6cb6!8m2!3d22.1690515!4d70.8067547!9m1!1b1!16s%2Fg%2F11msfp0v32?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="inline-flex items-center text-sm text-gray-700 hover:underline"
            >
              <Image
                src="/images/icons8-google-96.png"
                alt="Google"
                width={22}
                height={22}
                title="Google"
                className="mr-1"
              />
              See all Google Reviews
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="bg-white w-[90%] sm:w-full max-w-lg mx-auto p-6 rounded-xl shadow-2xl mt-24 outline-none relative"
        overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-start z-50 px-2"
      >
        {/* Close button */}
        <button
          onClick={() => setModalIsOpen(false)}
          className="absolute top-2 right-3 text-3xl text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>

        {/* Reviewer Info */}
        <div className="flex justify-between items-start mt-6 mb-4 flex-wrap gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-semibold text-lg">
              {activeReview?.initial || "U"}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">
                {activeReview?.author_name || "Anonymous"}
              </p>
              <p className="text-xs text-gray-500">
                {activeReview?.date || ""}
              </p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/Intigra+Coatings/@22.1691844,70.8067727,41m/data=!3m1!1e3!4m18!1m9!3m8!1s0x3958356a0e8a57ef:0x9524add0ba5f6cb6!2sIntigra+Coatings!8m2!3d22.1690515!4d70.8067547!9m1!1b1!16s%2Fg%2F11msfp0v32!3m7!1s0x3958356a0e8a57ef:0x9524add0ba5f6cb6!8m2!3d22.1690515!4d70.8067547!9m1!1b1!16s%2Fg%2F11msfp0v32?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 mt-1"
          >
            <Image
              src="/images/icons8-google-96.png"
              width={20}
              height={20}
              alt="Google"
              title="Google"
            />
            <span className="text-sm text-orange-600 hover:underline">
              View on Google
            </span>
          </a>
        </div>

        {/* Stars */}
        <div className="flex mb-3">
          {Array.from({ length: 5 }).map((_, i) =>
            i < activeReview?.rating ? (
              <FaStar key={i} className="text-yellow-400 text-base" />
            ) : (
              <FaRegStar key={i} className="text-yellow-400 text-base" />
            )
          )}
        </div>

        {/* Full Review */}
        <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
          {activeReview?.text || "No review text available."}
        </div>
      </Modal>
    </>
  );
};

export default Testimonials;
