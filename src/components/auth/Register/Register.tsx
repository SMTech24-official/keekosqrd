"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Cookies from "js-cookie";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/types/RegisterSchema";
import { useRegisterMutation } from "@/redux/api/registerApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// Define Zod schema for form validation

// Define TypeScript types for form data
type RegisterFormInputs = z.infer<typeof RegisterSchema>;

export default function Register() {
  const [registerUser, { isLoading }] = useRegisterMutation();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(RegisterSchema),
  });

  interface ApiError {
    data?: {
      message?: string;
    };
  }

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      const response = await registerUser(data).unwrap();
      Cookies.set("token", response?.data?.token, { expires: 7 });

      if (response?.data?.token) {
        if (!isLoading) {
          router.push("/payment");
          toast.success("Registration successful!");
        }
      }
    } catch (err: unknown) {
      const error = err as ApiError;
      const errorMessage =
        error?.data?.message || "An error occurred during registration.";
      console.error("Registration failed:", error);
      toast.error(errorMessage); // Show API error message in toast
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 rounded-lg mt-20 shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-default">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label
              htmlFor="first_name"
              className="block text-gray-600 font-medium mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              {...register("first_name")}
              placeholder="John"
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.first_name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.first_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.first_name.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="last_name"
              className="block text-gray-600 font-medium mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              {...register("last_name")}
              placeholder="Doe"
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.last_name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.last_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.last_name.message}
              </p>
            )}
          </div>

          {/* Country */}
          <div>
            <label
              htmlFor="country"
              className="block text-gray-600 font-medium mb-1"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              {...register("country")}
              placeholder="USA"
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.country ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>

          {/* City */}
          <div>
            <label
              htmlFor="city"
              className="block text-gray-600 font-medium mb-1"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              {...register("city")}
              placeholder="New York"
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.city ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}
          </div>

          {/* Zip Code */}
          <div>
            <label
              htmlFor="zip_code"
              className="block text-gray-600 font-medium mb-1"
            >
              Zip Code
            </label>
            <input
              type="text"
              id="zip_code"
              {...register("zip_code")}
              placeholder="10001"
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.zip_code ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.zip_code && (
              <p className="text-red-500 text-sm mt-1">
                {errors.zip_code.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-gray-600 font-medium mb-1"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              {...register("address")}
              placeholder="123 Main Street"
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="test5@test.com"
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              placeholder="••••••••"
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Password Confirmation */}
          <div className="col-span-full">
            <label
              htmlFor="password_confirmation"
              className="block text-gray-600 font-medium mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password_confirmation"
              {...register("password_confirmation")}
              placeholder="••••••••"
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password_confirmation
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.password_confirmation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password_confirmation.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-6 py-2 rounded-lg focus:outline-none ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-grey text-default"
            }`}
          >
            {isLoading ? "Registering..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
