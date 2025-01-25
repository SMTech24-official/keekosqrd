"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useResetPassMutation } from "@/redux/api/registerApi";

// Define Zod schema for password validation
const changePasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[0-9]/, "Password must include a number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"], // Points the error to confirmPassword field
  });

type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
    mode: "onSubmit",
  });
  const [resetPas,{isLoading}]=useResetPassMutation()
  const userEmail = localStorage.getItem("email")
  const parsedEmail = userEmail ? JSON.parse(userEmail) as string : "";

  const onSubmit = async (data: ChangePasswordFormData) => {
    try {


   const kamran=   await resetPas({
        email: parsedEmail,
        password: data.newPassword,
        password_confirmation: data.confirmPassword,
      


      })
   console.log(kamran)
      
     
      // Simulate API call
      setTimeout(() => {
        router.push("/login");
        toast.success("Password reset successful!");
      }, 1000);
    } catch (error) {
      console.error("Error resetting password:", error);
      toast.error("An error occurred during password reset.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4 font-inter">
      <div className="w-full max-w-[454px] space-y-6 rounded">
        <div>
          <div className="space-y-2 mt-6 mb-8 text-center">
            <h1 className="lg:text-[36px] text-3xl text-[#1D2939] font-outfit font-semibold">
              Change New Password!
            </h1>
            <p className="text-sm md:text-base font-normal font-inter pt-1 text-[#1D2939]">
              Enter a different password than the previous one
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="new-password"
                className="text-sm md:text-[18px] font-outfit text-gray-600"
              >
                New Password
              </Label>
              <div className="relative">
                <Input
                  id="new-password"
                  placeholder="BFiofgvsb***JJ"
                  type={showPassword ? "text" : "password"}
                  {...register("newPassword")}
                  required
                  className={`w-full border ${
                    errors.newPassword ? "border-red-500" : "border-[#98A2B3]"
                  } pr-10`}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-gray-400" />
                  )}
                </Button>
              </div>
              {errors.newPassword && (
                <p className="text-red-500 text-sm">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirm-password"
                className="text-sm md:text-[18px] font-outfit text-[#475467]"
              >
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  placeholder="BFiofgvsb***JJ"
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword")}
                  required
                  className={`w-full border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-[#98A2B3]"
                  } pr-10`}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  disabled={isLoading}
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOffIcon className="h-4 w-4 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-gray-400" />
                  )}
                </Button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex justify-center rounded-lg items-center font-outfit text-white text-sm md:text-[18px] font-medium py-3 md:py-[10px] bg-gradient-to-t from-[#0061FF] to-[#003A99] hover:bg-blue-700 disabled:opacity-50"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
