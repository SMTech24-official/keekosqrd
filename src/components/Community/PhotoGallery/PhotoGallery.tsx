"use client";

import { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ph1 from "@/assets/1.png";
import ph2 from "@/assets/2.png";
import ph3 from "@/assets/3.png";

// Define the type for the gallery items
interface GalleryItem {
  name: string;
  avatar: StaticImageData;
  sneaker: string;
}

const galleryData: GalleryItem[] = [
  {
    name: "Orlando Diggs",
    avatar: ph1,
    sneaker: "Nike Air Jordans",
  },
  {
    name: "Orlando Diggs",
    avatar: ph2,
    sneaker: "Nike Air Jordans",
  },
  {
    name: "James",
    avatar: ph3,
    sneaker: "Nike Air Jordans",
  },
  {
    name: "Orlando Diggs",
    avatar: ph1,
    sneaker: "Nike Air Jordans",
  },
  {
    name: "Orlando Diggs",
    avatar: ph2,
    sneaker: "Nike Air Jordans",
  },
  {
    name: "James",
    avatar: ph3,
    sneaker: "Nike Air Jordans",
  },
];

export function PhotoGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 3;
  const maxSlide = Math.max(0, galleryData.length - slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="pb-[60px] md:pb-[90px] lg:pb-[120px] pt-[160px]">
      <div className="container mx-auto px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-default">
            Our Photo Gallery
          </h2>
          <p className="text-gray max-w-3xl mx-auto">
            A look into our sneaker-loving community.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
              }}
            >
              {galleryData.map((photo, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="">
                    <div className="">
                      <Image
                        src={photo.avatar.src || ph1}
                        alt={photo.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-9 mt-8">
            <button
              onClick={prevSlide}
              className="bg-white rounded-full p-2 disabled:opacity-50"
              disabled={currentSlide === 0}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex justify-center space-x-2">
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
              className="bg-white rounded-full p-2 disabled:opacity-50"
              disabled={currentSlide === maxSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
