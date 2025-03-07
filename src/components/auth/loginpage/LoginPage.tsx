"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";

import logo from "@/assets/home/kkk-logo.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/redux/api/registerApi";
import { loginSchema, LoginSchemaType } from "@/types/loginschema";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      const response = await login(data).unwrap(); // Call login API
      Cookies.set("token", response?.data?.token, { expires: 7 }); // Store token in cookies

      if (response?.data?.token) {
        toast.success("Login successful!");
        router.push("/"); // Redirect to the payment page
      }
    } catch (err: unknown) {
      // Handle errors
      const error = err as { data?: { message?: string } };
      const errorMessage =
        error?.data?.message || "An error occurred during login.";
      console.error("Login failed:", error);
      toast.error(errorMessage); // Show API error message
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="space-y-1 text-center">
          <Image
            className="w-[100px] mx-auto object-contain"
            src={logo}
            alt="logo"
          />
          <CardDescription className="md:text-[16px] text-[15px] pt-3 font-[400] text-[#475467]">
            Please Enter Your Email And Password Below!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                placeholder="johndoe@example.com"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2"></div>
              <Link href="/forgot-password" className="px-0 text-[#0061FF]">
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              disabled={isLoading}
              className="w-full z-50 bg-grey text-default"
              type="submit"
            >
              Sign In
            </Button>

            {/* Register Link */}
            <div className="text-center flex flex-col md:flex-row">
              <span className="text-[17px] text-[#98A2B3]">
                If you don&apos;t have any account please{" "}
              </span>
              <Link href={"/register"}>
                <span className="px-1 text-[#0061FF] text-[17px] font-[500] lg:text-nowrap">
                  Register Here!
                </span>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
