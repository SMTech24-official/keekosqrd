"use client";
// import cimage2 from "@/assets/products/c2.jpeg"
import cimage from "@/assets/products/c1.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
// import bimg2 from "@/assets/home/bannerImag.webp"
import mortimg from "@/assets/home/mortgage.svg";

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: cimage,
    },
    // {
    //   image: bimg2,
    //   discount: 60,
    // },
    {
      image: cimage,
    },
    // Add more slides as needed
  ];

  return (
    <div className="relative w-[250px] h-[250px] md:w-[515px] md:h-[515px] ">
      <div className="absolute w-full h-full rounded-full right">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-300 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={`Sneaker ${index + 1}`}
                className="rounded-full object-cover"
              />
              {/* <div className="absolute -top-4 left-2 md:top-9 md:left-4 bg-white rounded-lg px-3 py-2 shadow-lg flex items-center gap-4">
                <Image src={mortimg} alt="mort image" />
                <div>
                  <div className="text-lg font-bold">{slide.discount}%</div>
                  <div className="text-sm text-gray-600">Discount</div>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-gray" : "bg-grey"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
