"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";




import { toast } from "sonner";



import { useCreatePaymentMethodMutation } from "@/redux/api/stripeApi";
import { setPayment } from "@/redux/allSlice/paymentSlice";
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
});


export default function Payment() {
  const router = useRouter();
  const [payMethod,{data}]=useCreatePaymentMethodMutation()
  const dispatch=useDispatch()


  

  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      number: "",
      exp_month: "",
      exp_year: "",
      cvc: "",
      type: "",
    },
  });


  const onSubmit = async (values: z.infer<typeof paymentSchema>) => {
    const formData = new FormData()
    formData.append("card[number]", values.number)
    formData.append("card[exp_month]", values.exp_month)
    formData.append("card[exp_year]", values.exp_year)
    formData.append("card[cvc]", values.cvc)
    formData.append("type", values.type)

    try {
     await payMethod(formData).unwrap()
      console.log(data?.id)
      if (data && data?.id) {
        dispatch(setPayment({ paymentId: data?.id }))

         router.push("/complete_payment");
      } else {
        throw new Error("Payment ID not received")
      }
    } catch (err) {
      toast.error(`Payment failed: ${(err as Error).message || "Please try again."}`)
    }
  }


    return (
      <div className=" fixed inset-0  z-50 flex items-center justify-center">
        <div className="sm:max-w-[500px] p-6 bg-white rounded-lg">
          <div className="flex justify-center mb-6">
           
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
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                
                </div>
              </div>
              {/* Display error message for number */}
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
                {/* Display error message for exp_month */}
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
                {/* Display error message for exp_year */}
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
                {/* Display error message for cvc */}
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
              {/* Display error message for type */}
              {form.formState.errors.type && (
                <span className="text-sm text-red-500">
                  {form.formState.errors.type.message}
                </span>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-[#0872BA] text-white rounded-lg"
            
            >
             Pay Now
            </Button>
          </form>
        </div>
      </div>
    );

}
