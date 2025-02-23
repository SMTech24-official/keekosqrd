import { useGiveVoteMutation, useVoteMeQuery } from "@/redux/api/voteApi";
import { SneakerCardProps } from "@/types/Interfaces";
import Cookies from "js-cookie";
import Image from "next/image";
import { toast } from "sonner";

export function SneakerCard({
  id,
  product_image,
  daysLeft,
  product_name,
  brand_name,
  model,
}: SneakerCardProps) {
  const [giveVote] = useGiveVoteMutation();
  // const { data } = useGetUserQuery(undefined);
  // const userData = data?.data?.user;
  const token = Cookies.get("token");
  const { data: voteMe } = useVoteMeQuery({});
  // console.log("votelist", voteMe)

  // const hasSubscription = userData?.payments[0]?.status&&token;

  const handleVote = async (productId: number) => {
    if (!token) {
      toast.error("You need an active subscription to vote.");
      return;
    }

    try {
      await giveVote(productId).unwrap();
      toast.success("Your vote has been submitted successfully!");
    } catch (error: unknown) {
      const errorMessage =
        (error as { data?: { message?: string } })?.data?.message ||
        "An error occurred while submitting your vote.";
      toast.error(errorMessage);
    }
  };

  const voting = voteMe?.data?.votes[0]?.product?.id;
  const isVoted = voting == id;

  return (
    <div className="rounded-lg relative bg-white flex flex-col h-full">
      {/* Days Left Badge */}
      <div className="absolute right-0 top-3 z-10">
        <span className="bg-[#FF5F00] text-white px-4 py-3 rounded-md font-medium">
          {daysLeft} Days Left
        </span>
      </div>

      {/* Product Image */}
      <div className="relative h-[290px] mb-4">
        <Image
          src={`${process.env.NEXT_PUBLIC_STORAGE}/${product_image} `}
          alt={"product"}
          fill
          className="object-cover h-full rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col p-6 flex-grow">
        {/* Name and Price */}
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-default">{product_name}</h3>
        </div>

        {/* Brand, Model, and Size */}
        <div className="grid grid-cols-2 gap-2 text-[#090043] font-medium mt-7">
          <div>
            <span className="font-medium">Brand:</span> {brand_name}
          </div>
          <div>
            <span className="font-medium">Model :</span> {model}
          </div>
        </div>

        {/* Vote Button */}
        <div className="mt-auto">
          <button
            onClick={() => handleVote(id)}
            disabled={isVoted} // Disable button if already voted or no subscription
            className={`w-full px-6 py-3 border z-[9999] border-grey rounded-[4px] text-[18px] font-medium mt-8 
              ${
                isVoted
                  ? "bg-primary cursor-not-allowed"
                  : "bg-grey hover:bg-gray-300"
              }`}
          >
            {isVoted ? "Vote Completed" : "Vote Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
