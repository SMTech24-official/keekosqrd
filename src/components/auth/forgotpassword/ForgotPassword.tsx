"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ForgotPasswordData, forgotPasswordSchema } from "@/types/forgotPasswordSchema ";
import { useForgotPassMutation } from "@/redux/api/registerApi";


export default function ForgotPassword() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
  });
const [forgot]=useForgotPassMutation()


  const onSubmit = async (data: ForgotPasswordData) => {
    try {
      // Mock API call to handle the forgot password process
      console.log("Submitted Data:", data);
      forgot(data)
      reset();
      localStorage.setItem('email', JSON.stringify(data.email))
      router.push("/otp");
      toast.success("Enter your received OTP");
    } catch (err) {
      console.error("An error occurred:", err);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-[454px] space-y-6">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-semibold text-[#1D2939]">
            Forget Password!
          </h1>
          <p className="text-xs sm:text-sm md:text-base mt-4 font-outfit text-gray-500">
            Enter Your Registered Email Below.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="mt-7">
            <Label
              htmlFor="email"
              className="text-base sm:text-lg md:text-[18px] font-normal font-outfit text-[#475467]"
            >
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="georgia.young@example.com"
              className="w-full text-[18px] text-[#475467] border-[#98A2B3] pr-10 placeholder:text-[#98A2B3] placeholder:text-sm placeholder:font-normal"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="flex items-center justify-start text-xs sm:text-sm">
            <span className="text-gray-600">Remember the password?</span>
            <Link
              href="/login"
              className="ml-1 underline text-[#00008B] font-medium font-inter hover:underline"
            >
              Sign in
            </Link>
          </div>

          <button
            type="submit"
            className="w-full mt-2 flex justify-center rounded-lg items-center font-outfit text-white text-[18px] font-medium py-[10px] z-50 bg-gradient-to-t from-[#0061FF] to-[#003A99] hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
