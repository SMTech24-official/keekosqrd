import { usePathname } from "next/navigation";
import { HeroCarousel } from "../HeroCarousel/HeroCarousel";
import { useGetUserQuery } from "@/redux/api/registerApi";
import { useRouter } from "next/navigation";

export default function Banner() {
  const path = usePathname();
  const { data } = useGetUserQuery(undefined);
  const userData = data?.data?.user;
  const router = useRouter(); 

  if (path == "/faq" || path == "/contact") {
    return null;
  }

  const handleSubscribeClick = () => {
    if (!userData) {
      router.push("/register"); 
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-[35px] md:pt-[62px]">
      <div className="space-y-6 text-justify md:text-start">
        <h1 className="text-[30px] md:text-[40px] lg:text-[53px] font-bold  text-default">
          Win Your Favourite Sneakers only £10 a month
        </h1>
        <p className="text-gray text-base md:text-lg">
          Exclusive trainers for less than retail! Join the community
        </p>

        {/* Show button only if user is not logged in */}
        {!userData && (
          <button
            className="bg-grey text-default hover:bg-gray-300 uppercase font-bold px-6 py-3 rounded-[4px]"
            onClick={handleSubscribeClick}
          >
            Subscribe Vote Win
          </button>
        )}
      </div>

      <div className="flex justify-center">
        <HeroCarousel />
      </div>
    </div>
  );
}
