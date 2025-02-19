/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/ui/input";

import logo from "@/assets/home/kkk-logo.png";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { setPayment } from "@/redux/allSlice/paymentSlice";
import {
  useCreatePaymentIntentMutation,
  useSubscribtionMutation,
} from "@/redux/api/registerApi";
import { useCreatePaymentMethodMutation } from "@/redux/api/stripeApi";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";


// Zod schema for form validation
const paymentSchema = z.object({
  number: z
    .string()
    .min(16, "Card number must be 16 digits")
    .max(16, "Card number must be 16 digits"),
  exp_month: z
    .string()
    .min(2, "Expiration month is required")
    .max(2, "Invalid month format")
    .regex(/^(0[1-9]|1[0-2])$/, "Expiration month must be between 01 and 12"),
  exp_year: z
    .string()
    .min(2, "Expiration year is required")
    .max(2, "Invalid year format"),
  cvc: z.string().min(3, "CVC must be 3 digits").max(3, "CVC must be 3 digits"),
  type: z.string().min(1, "Card type is required"),
  // post_code: z.string().min(4, "Post code is required"),
});

export default function Payment() {
  const router = useRouter();
  const [payMethod, { isLoading: isPyLoading }] =
    useCreatePaymentMethodMutation();
  const [createPaymentIntent, { isLoading }] = useCreatePaymentIntentMutation();
  const [subscription, { isLoading: isSubscribing }] =
    useSubscribtionMutation();

  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      number: "",
      exp_month: "",
      exp_year: "",
      cvc: "",
      type: "",
      // post_code: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof paymentSchema>) => {
    const formData = new FormData();
    formData.append("card[number]", values.number);
    formData.append("card[exp_month]", values.exp_month);
    formData.append("card[exp_year]", values.exp_year);
    formData.append("card[cvc]", values.cvc);
    formData.append("type", values.type);
  
    try {
      // Step 1: Create payment method
      const paymentMethodResult = await payMethod(formData).unwrap();
      if (!paymentMethodResult?.id) {
        toast.error("Failed to create payment method.");
        return;
      }
      const paymentMethodId = paymentMethodResult.id;
      dispatch(setPayment({ paymentId: paymentMethodId }));
  
      // Step 2: Create payment intent
      let paymentIntentId = "";
      try {
        const paymentIntentResult = await createPaymentIntent({
          payment_method: paymentMethodId,
          price_id: "price_1Qmk5j09AAAGge5I0YT1bEdp",
        }).unwrap();
  
        paymentIntentId = paymentIntentResult?.data?.payment_intent_id;
      } catch (err: any) {
        // Handle payment intent error
        console.log(err)
      }
  
      console.log("Using paymentIntentId: ", paymentIntentId);
  
      // Step 3: Subscribe
      const subscriptionResult = await subscription({
        price_id: "price_1Qmk5j09AAAGge5I0YT1bEdp",
      }).unwrap();
  
      if (subscriptionResult.status) {
        router.push("/");
      }
      toast.success(subscriptionResult?.message);
    } catch (err: any) {
      // Check if redirect_url exists in the error data and redirect
      if (err?.data?.data?.redirect_url) {
        window.location.href = err.data.data.redirect_url;
        return;
      }
      // Show error message if no redirect_url
      toast.error(err?.data?.error?.message || "Something went wrong.");
    }
  };
  
  

  return (
    <section className="flex items-center justify-center px-5 h-screen">
      <div className="max-w-[550px] p-6 bg-white rounded-lg">
        <div className="flex justify-center mb-6">
          <Image
            src={logo}
            height={100}
            width={100}
            className="w-[120px]"
            alt="Keekosqrd Logo"
          />
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="text-sm font-medium">Card Information</label>
            <div className="relative">
              <Input
                {...form.register("number")}
                placeholder="4242 4242 4242 4242"
                className="pr-12"
              />
            </div>
            {form.formState.errors.number && (
              <span className="text-sm text-red-500">
                {form.formState.errors.number.message}
              </span>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Input
                {...form.register("exp_month")}
                placeholder="MM"
                className="w-full"
              />
              {form.formState.errors.exp_month && (
                <span className="text-sm text-red-500">
                  {form.formState.errors.exp_month.message}
                </span>
              )}
            </div>
            <div>
              <Input
                {...form.register("exp_year")}
                placeholder="YY"
                className="w-full"
              />
              {form.formState.errors.exp_year && (
                <span className="text-sm text-red-500">
                  {form.formState.errors.exp_year.message}
                </span>
              )}
            </div>
            <div>
              <Input
                {...form.register("cvc")}
                placeholder="CVC"
                className="w-full"
              />
              {form.formState.errors.cvc && (
                <span className="text-sm text-red-500">
                  {form.formState.errors.cvc.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Type</label>
            <select
              {...form.register("type")}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Type</option>
              <option value="card">Card</option>
            </select>
            {form.formState.errors.type && (
              <span className="text-sm text-red-500">
                {form.formState.errors.type.message}
              </span>
            )}
          </div>

          {/* New Post Code Field */}

          <button
            type="submit"
            disabled={isPyLoading || isLoading || isSubscribing}
            className={`w-full py-3 bg-[#0872BA] text-white rounded-lg ${
              isLoading || isPyLoading || isSubscribing
                ? "bg-[#0872BA] text-white"
                : "bg-[#0872BA]"
            }`}
          >
            {isLoading || isPyLoading || isSubscribing
              ? "Processing"
              : "Pay Now"}
          </button>
        </form>
        <div className="flex justify-center items-center mt-4">
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
