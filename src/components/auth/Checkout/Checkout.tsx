
"use client";

import logo from "@/assets/home/kkk-logo.png";
import { useStripeCheckOutMutation } from "@/redux/api/CheckoutApi";

import Image from "next/image";
import Link from "next/link";

export default function Checkout() {
  const [checkOutFn, { isLoading }] = useStripeCheckOutMutation();

  const handleCheckOut = async () => {
    try {
      const response = await checkOutFn({}).unwrap();
      console.log("response: ", response);
      if (response?.url) {
        window.location.href = response.url;
      } else {
        console.error("No URL returned from checkout:", response);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <section className="flex items-center justify-center px-5 h-screen">
      <div className="w-[450px] p-6 bg-white rounded-lg">
        <div className="flex justify-center mb-8">
          <Image
            src={logo}
            height={100}
            width={100}
            className="w-[120px]"
            alt="Keekosqrd Logo"
          />
        </div>

        <button
          onClick={handleCheckOut}
          className={`w-full py-3 bg-[#0872BA] text-white rounded-lg`}
          disabled={isLoading}
        >
          {isLoading ? "Processing" : "Proceed to payment"}
        </button>
        <div className="flex justify-center items-center mt-8">
          <Link
            className="bg-grey text-default px-4 py-2 rounded-md hover:bg-slate-400 cursor-pointer"
            href="/"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
