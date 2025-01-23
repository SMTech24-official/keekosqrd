"use client"

import React, { useEffect} from "react"
import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import Link from "next/link"
import { useCreatePaymentIntentMutation } from "@/redux/api/registerApi"

export default function Complete() {
    const [createPaymentIntent, { data, isLoading, isError, error }] = useCreatePaymentIntentMutation()
    const [paymentStatus, setPaymentStatus] = useState<"processing" | "success" | "error">("processing")
    const paymentId = useSelector((state: RootState) => state.payment.paymentId)
  
    useEffect(() => {
      if (paymentId) {
        createPaymentIntent({ payment_method: paymentId })
          .unwrap()
          .then(() => setPaymentStatus("success"))
          .catch(() => setPaymentStatus("error"))
      }
    }, [paymentId, createPaymentIntent])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Confirm Your Payment</h2>
          <div className="mt-2 text-center text-sm text-gray-600">Thank you for your purchase!</div>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-b-md">
              <p className="text-xs font-medium text-gray-500 uppercase">Status</p>
              <p className="mt-1 text-sm text-green-600 font-semibold">Successful</p>
            </div>
          </div>
          <div>
            <Link
              href="/"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

