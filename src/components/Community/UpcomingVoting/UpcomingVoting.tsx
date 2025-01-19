"use client";
import { SneakerCard } from "@/components/AvailableVoting/SneakerCard";
// import sneakers from "@/constants/productData/ProductData";
// import { SneakerCard } from "./SneakerCard";
import { usePathname } from "next/navigation";
import Upcomingsneakers from "@/constants/Upcomingdata/UpcomingData";

export function UpcomingVoting() {
  const pathname = usePathname();
  const dynamicPadding = pathname === "/community" ? "pb-[120px]" : "pb-[120px]";
  return (
    <section className={dynamicPadding}>
      <div className="container mx-auto md:px-0 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-default">
            Upcoming Sneakers
          </h2>
          <p className="text-gray max-w-3xl mx-auto">
            Subscribe for $10/month and vote on your favorite sneakers. At the
            end of the month, a winner is randomly selected by the admin to
            receive the chosen sneaker.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Upcomingsneakers.map((sneaker, index) => (
            <SneakerCard key={index} {...sneaker} />
          ))}
        </div>
      </div>
    </section>
  );
}
