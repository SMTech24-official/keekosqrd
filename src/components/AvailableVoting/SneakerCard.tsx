import { useGetUserQuery } from "@/redux/api/registerApi";
import { useGiveVoteMutation } from "@/redux/api/voteApi";
import { SneakerCardProps } from "@/types/Interfaces";
import Image from "next/image";
import Cookies from "js-cookie";
import { toast } from "sonner"; // Import Sonner for toast notifications

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
  const [giveVote] = useGiveVoteMutation();
  const { data } = useGetUserQuery(undefined);
  const userData = data?.data?.user;
  const token = Cookies.get("token");


  const hasSubscription = userData?.stripe_customer_id && token;

  const handleVote = async (productId: number) => {
    if (!hasSubscription) {

      toast.error("You need an active subscription to vote.");
      return;
    }

    try {
      // Call the giveVote mutation
      const response = await giveVote(productId).unwrap();
      toast.success("Your vote has been submitted successfully!");
      console.log(response.data.product.id)
      


    } catch (error: unknown) {
   
      const errorMessage =
        (error as { data?: { message?: string } })?.data?.message ||
        "An error occurred while submitting your vote.";
      toast.error(errorMessage);
    }
  };


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
          src={`${process.env.NEXT_PUBLIC_STORAGE}/${product_image}`}
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

        {/* Brand, Model, and Size */}
        <div className="grid grid-cols-2 gap-2 text-[#090043] font-medium mt-7">
          <div>
            <span className="font-medium">Brand :</span> {brand_name}
          </div>
          <div>
            <span className="font-medium">Model :</span> {model}
          </div>
          <div className="mt-[20px]">
            <span className="font-medium">Size :</span> {size}
          </div>
        </div>

        {/* Vote Button */}
        <div>
          <button
            onClick={() => handleVote(id)}
            disabled={ !hasSubscription} // Disable button if already voted or no subscription
            className={`w-full px-6 py-3 border border-grey rounded-[4px] text-[18px] font-medium mt-8 
             `}
          >
           Vote Now
          </button>
        </div>
      </div>
    </div>
  );
}
