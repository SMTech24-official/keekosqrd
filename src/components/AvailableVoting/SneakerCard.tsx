import { useState } from "react";
import { useGiveVoteMutation } from "@/redux/api/voteApi";
import { SneakerCardProps } from "@/types/Interfaces";
import Image from "next/image";
import { toast } from "sonner";

export function SneakerCard({
  id,
  product_image,
  daysLeft,
  product_name,
  price,
  brand_name,
  model,
  size,
}: SneakerCardProps) {
  const [giveVote, { isLoading }] = useGiveVoteMutation(); // Removed isError as it's not needed
  const [votedIds, setVotedIds] = useState<number[]>([]);

  const handleVote = async (id: number) => {
    try {
      const response = await giveVote(id).unwrap();
      toast.success("Vote Successful!");
      setVotedIds((prev) => [...prev, id]); // Add this ID to the voted list
      console.log("Vote Successful:", response);
    } catch (error) {
      toast.error("Vote Failed. Please try again.");
      console.error("Vote Failed:", error);
    }
  };

  const isVoted = votedIds.includes(id); // Check if this ID has already been voted

  return (
    <div className="rounded-lg relative bg-white">
      {/* Days Left Badge */}
      <div className="absolute right-0 top-3 z-10">
        <span className="bg-[#FF5F00] text-white px-4 py-3 rounded-md font-medium">
          {daysLeft} Days Left
        </span>
      </div>

      {/* Product Image */}
      <div className="relative h-[290px] mb-4">
        <Image
          src={`http://10.0.20.59:8001/storage/${product_image}`}
          alt={"product"}
          fill
          className="object-cover h-full"
        />
      </div>

      {/* Product Details */}
      <div className="p-6">
        {/* Name and Price */}
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-default">{product_name}</h3>
          <span className="text-orange-500 text-2xl font-bold">${price}</span>
        </div>

        {/* Brand, Model, Size */}
        <div className="grid grid-cols-2 gap-2 text-[#090043] font-medium mt-7">
          <div>
            <span className="font-medium">Brand:</span> {brand_name}
          </div>
          <div>
            <span className="font-medium">Model:</span> {model}
          </div>
          <div className="mt-[20px]">
            <span className="font-medium">Size:</span> {size}
          </div>
        </div>

        {/* Voting Button */}
        <div>
          <button
            onClick={() => handleVote(id)}
            disabled={isLoading || isVoted} // Disable button if loading or already voted
            className={`w-full px-6 py-3 border border-grey rounded-[4px] text-[18px] font-medium text-default mt-8 ${
              isLoading || isVoted
                ? "opacity-50 cursor-not-allowed bg-gray-300"
                : "hover:bg-grey"
            }`}
          >
            {isVoted ? "Voted" : "Vote"}
          </button>
        </div>
      </div>
    </div>
  );
}
