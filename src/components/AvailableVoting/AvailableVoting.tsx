'use client'
import { SneakerCard } from "./SneakerCard";
import { usePathname } from "next/navigation";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { SneakerCardProps } from "@/types/Interfaces";

export function AvailableVoting() {
  const pathname = usePathname();
  const dynamicPadding = pathname === "/voting" ? "pt-[160px]" : "pb-[120px]";

  const { result, isLoading } = useGetProductsQuery({}, {
    selectFromResult: ({ data, isLoading }) => ({
      result: data?.data?.products?.data,
      isLoading: isLoading
    })
  });

  const displayedResults = pathname === "/voting" ? result : result?.slice(0, 3);

  return (
    <section className={dynamicPadding}>
      <div className="container mx-auto md:px-0 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-default">
            Available Voting
          </h2>
          <p className="text-gray max-w-3xl mx-auto">
            Subscribe for $10/month and vote on your favorite sneakers. At the
            end of the month, a winner is randomly selected by the admin to
            receive the chosen sneaker.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            isLoading ? (
              "Loading"
            ) : displayedResults?.length === 0 ? (
              <p className="text-center text-red-500 col-span-full mt-10 font-semibold">Not voting product available!</p>
            ) : (
              displayedResults?.map((sneaker : SneakerCardProps, index : number) => (
                <SneakerCard key={index} {...sneaker} />
              ))
            )
          }
        </div>
      </div>
    </section>
  );
}
