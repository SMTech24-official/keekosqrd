"use client"
import { UpcomingSenakerCard } from "./UpcomingSenakerCard"; // Import the component
import Upcomingsneakers from "@/constants/Upcomingdata/UpcomingData"; // Import sneaker data

export function UpcomingVoting() {
  return (
    <section className="pb-[120px]">
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
            <UpcomingSenakerCard
              key={index}
              id={index + 1} // Assuming index as id, or you can use unique id if available
              product_image={sneaker.image}
              daysLeft={sneaker.daysLeft}
              product_name={sneaker.name}
              price={sneaker.price}
              brand_name={sneaker.brand}
              model={sneaker.model}
              size={sneaker.size}
              // isVoted={sneaker.isVoted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
