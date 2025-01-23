import { SneakerCardProps } from "@/types/Interfaces";
import Image from "next/image";

export function SneakerCard({
  id,
  product_image,
  daysLeft,
  product_name,
  price,
  brand_name,
  model,
  size,
  // isVoted = false
}: SneakerCardProps) {


  return (
    <div className="rounded-lg relative bg-white">
      <div className="absolute right-0 top-3 z-10">
        <span className="bg-[#FF5F00] text-white px-4 py-3 rounded-md  font-medium">
          {daysLeft} Days Left
        </span>
      </div>

      <div className="relative h-[290px] mb-4">
        <Image
          src={`http://10.0.20.59:8001/storage/${product_image}`}
          alt={"product"}
          fill
          className="object-cover h-full"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-default">{product_name}</h3>
          <span className="text-orange-500 text-2xl font-bold">${price}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[#090043] font-medium mt-7">
          <div>
            <span className="font-medium">Brand :</span> {brand_name}
          </div>
          <div>
            <span className="font-medium">Model :</span>{model}
          </div>
          <div className="mt-[20px]">
            <span className="font-medium">Size :</span>{size}
          </div>
        </div>

        <div>
          <button
            // variant={isVoted ? "secondary" : "outline"} 
            className="w-full px-6 py-3 border border-grey rounded-[4px] text-[18px] font-medium text-default mt-8 hover:bg-grey"
          >
            Voting Now
          </button>
        </div>
      </div>
    </div>
  )
}