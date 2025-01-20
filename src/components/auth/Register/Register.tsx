"use client";

// import { useState } from "react";
import mastercard from "@/assets/testimonials/master.svg";
import visa from "@/assets/testimonials/vsa.svg";
import Image from "next/image";

export default function Register() {
//   const [paymentMethod, setPaymentMethod] = useState("");

//   interface PaymentChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

//   const handlePaymentChange = (e: PaymentChangeEvent) => {
//     setPaymentMethod(e.target.value);
//   };

  return (
    <div className="max-w-7xl mx-auto p-8 rounded-lg   mt-20">
      <h2 className="text-2xl font-semibold mb-6 text-default">Register</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Personal Information */}
        <div className="border border-[#C7C2D7] p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-600 font-medium mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="John"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-600 font-medium mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Smith"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="country"
                className="block text-gray-600 font-medium mb-1"
              >
                Country
              </label>
              <select
                id="country"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Country</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="block text-gray-600 font-medium mb-1"
              >
                City
              </label>
              <select
                id="city"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select City</option>
                <option value="NY">New York</option>
                <option value="LA">Los Angeles</option>
              </select>
            </div>

            {/* Zip Code */}
            <div>
              <label
                htmlFor="zipCode"
                className="block text-gray-600 font-medium mb-1"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                placeholder="12345"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
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
                placeholder="123 Main St"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
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
                placeholder="john.smith@example.com"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
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
                placeholder="••••••••"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>

       
       {/* Right Section: Payment Method */}
       <div className="border border-[#C7C2D7] p-6 shadow-md rounded-lg h-[213px]">
          <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Payment Option: Stripe */}
            <label className="flex gap-4 items-center border border-gray-300 px-6 py-4 rounded-lg cursor-pointer hover:border-blue-500 focus:border-blue-500 transition-all">
              <input
                type="radio"
                name="paymentMethod"
                value="stripe"
                className="payment-radio peer"
                // onChange={handlePaymentChange}
              />
              <span className="text-blue-500 text-[30px] font-medium peer-checked:text-blue-700">
                Stripe
              </span>
            </label>

            {/* Payment Option: Mastercard */}
            <label className="flex gap-4 items-center border border-gray-300 px-6 py-4 rounded-lg cursor-pointer hover:border-blue-500 focus:border-blue-500 transition-all">
              <input
                type="radio"
                name="paymentMethod"
                value="mastercard"
                className="payment-radio peer "
                // onChange={handlePaymentChange}
              />
              <Image
                src={mastercard}
                alt="Mastercard"
                className="h-6 mb-2 peer-checked:h-8 transition-all"
              />
              
            </label>

            {/* Payment Option: Visa */}
            <label className="flex gap-4 items-center border border-gray-300 px-6 py-4 rounded-lg cursor-pointer hover:border-blue-500 focus:border-blue-500 transition-all">
              <input
                type="radio"
                name="paymentMethod"
                value="visa"
                className="payment-radio peer"
                // onChange={handlePaymentChange}
              />
              <Image
                src={visa}
                alt="Visa"
                className="h-6 mb-2 peer-checked:h-8 transition-all"
              />
             
            </label>
          </div>
        </div>
      </div>

      
    </div>
  );
}
