import React from "react";
import Image from "next/image";
import bannerImage from "@/assets/products/c55.jpg"; 

export default function CommunityBanner() {
  return (
    <div className="relative pt-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-default">
              Welcome to KSquared Sourced City
            </h2>
            <p className="text-lg text-default leading-relaxed">
              Where sneaker lovers come together for exclusive chances to win
              their favorite kicks at a fraction of the retail price!
            </p>
            <p className="text-gray">
              I’m <span className="font-semibold">KSquared Sourced</span>, a
              dedicated sneaker reseller with over five years of experience in
              sourcing the most sought-after sneakers in the game. After years
              of working in the sneaker resell market, I realized how tough it
              can be for true sneaker enthusiasts to get their hands on the
              pairs they love—whether due to limited stock, high resale prices,
              or expensive retail costs.
            </p>
            <p className="text-gray">
              That’s why I created{" "}
              <span className="font-semibold">KSquared Sourced City</span>—a
              community-driven platform designed to give everyone a fair shot at
              winning their dream sneakers.
            </p>
            <p className="text-gray">
              For just <span className="font-bold">£10 a month</span>, members
              get access to multiple sneaker raffles, increasing their chances
              of adding heat to their collection without breaking the bank.
            </p>
            <p className="text-gray">
              So join the family, invite your friends, and let’s build something
              great together. The bigger we get, the more sneakers I can bring
              to the table for you!
            </p>
            {/* Call to Action */}
            <div className="mt-4">
              <button className="px-6 py-3 bg-grey text-default font-semibold rounded-lg shadow hover:bg-gray hover:text-white">
                Join the Community
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[500px] w-full">
            <Image
              src={bannerImage}
              alt="Community Banner"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
