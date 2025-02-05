"use client";

import { useGetAllCommunityQuery } from "@/redux/api/productApi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ph1 from "@/assets/ph1.svg";

interface GalleryItem {
  product_image: string;
  product_name: string;
  brand: string;
}

// const galleryItems: GalleryItem[] = [
//   {
//     image: ph1,
//     name: "Orlando Diggs",
//     sneaker: "Nike Air Jordans",
//   },
//   {
//     image: ph2,
//     name: "Orlando Diggs",
//     sneaker: "Nike Air Jordans",
//   },
//   {
//     image: ph3,
//     name: "James",
//     sneaker: "Nike Air Jordans",
//   },
//   {
//     image: ph1,
//     name: "Orlando Diggs",
//     sneaker: "Nike Air Jordans",
//   },
//   {
//     image: ph2,
//     name: "Orlando Diggs",
//     sneaker: "Nike Air Jordans",
//   },
//   {
//     image: ph3,
//     name: "James",
//     sneaker: "Nike Air Jordans",
//   },
// ];

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
      <Image
        src={
          `https://api.ksquaredsourcedcity.com/storage/${item?.product_image}` ||
          ph1
        }
        alt={item.product_name}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0" />
      <div className="absolute bottom-0 left-0 pb-6 pt-2 text-white bg-[#FFFFFF1A] backdrop-blur-[24px] w-full text-center">
        <h3 className="text-2xl font-semibold mb-1">
          {item?.product_name !== "undefined" &&
          item?.product_name !== null &&
          item?.product_name !== ""
            ? item?.product_name
            : ""}
        </h3>
        <p className="text-gray-200">
          {" "}
          {item?.brand !== "undefined" &&
          item?.brand !== null &&
          item?.brand !== ""
            ? item?.brand
            : ""}
        </p>
      </div>
    </div>
  );
}

export function PhotoGallery() {
  const { data } = useGetAllCommunityQuery({});
  const galleryItems = data?.data?.communities || [];
  console.log("data", data);
  console.log("community data", galleryItems);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const maxSlide = Math.max(0, galleryItems.length - slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // Adjust slidesToShow based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  return (
    <section className="pt-[160px] pb-[120px]">
      <div className="container mx-auto md:px-0 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-default">
            Our Photo Gallery
          </h2>
          <p className="text-gray">A look into our sneaker-loving community.</p>
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
              {galleryItems.map((item: GalleryItem, index: number) => (
                <div
                  key={index}
                  className={`w-full ${
                    slidesToShow === 3 ? "md:w-1/3" : "w-full"
                  } flex-shrink-0 px-2`}
                >
                  <GalleryCard item={item} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-9">
            <button
              onClick={prevSlide}
              className="bg-grey rounded-full p-2 disabled:opacity-50 mt-8"
              disabled={currentSlide === 0}
              aria-label="Previous photos"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(maxSlide + 1)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? "bg-gray" : "bg-grey"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-grey rounded-full p-2 disabled:opacity-50 mt-8"
              disabled={currentSlide === maxSlide}
              aria-label="Next photos"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
