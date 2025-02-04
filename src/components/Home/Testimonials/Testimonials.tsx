"use client";

import { testimonials } from "@/constants/TestimonialData/Testimonialdata";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// function StarRating({ rating }: { rating: number }) {
//   return (
//     <div className="flex gap-1">
//       {[...Array(5)].map((_, i) => (
//         <Star
//           key={i}
//           className={`w-5 h-5 ${
//             i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
//           }`}
//         />
//       ))}
//     </div>
//   );
// }

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // Default to 3 slides

  // Dynamically calculate maxSlide based on slidesToShow
  const maxSlide = Math.max(0, testimonials.length - slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // Adjust slidesToShow based on screen width
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1); // Show 1 slide on mobile
      } else {
        setSlidesToShow(3); // Show 3 slides on larger screens
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  return (
    <section className="pb-[60px] md:pb-[90px] lg:pb-[120px]">
      <div className="container mx-auto md:px-0 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-default">
            What Our Client Say
          </h2>
          <p className="text-gray max-w-3xl mx-auto">
            Our members love the thrill of voting for their favorite sneakers
            and the excitement of a chance to win every month.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / slidesToShow)
                }%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`w-full ${
                    slidesToShow === 3 ? "md:w-1/3" : "w-full"
                  } flex-shrink-0 px-4`}
                >
                  <div
                    className={`p-8 rounded-lg text-center h-full ${
                      Math.floor(currentSlide) === index
                        ? "bg-[#E4E4E4]"
                        : "bg-white"
                    }`}
                  >
                    <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={"testimonial pic"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-gray-600">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-9">
            <button
              onClick={prevSlide}
              className="bg-white rounded-full p-2 disabled:opacity-50 mt-8"
              disabled={currentSlide === 0}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(maxSlide + 1)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? "bg-[#AAAAAA]" : "bg-[#E0E0E0]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white rounded-full p-2 disabled:opacity-50 mt-8"
              disabled={currentSlide === maxSlide}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
