"use client";
import { useEffect, useState } from "react";
import logo from "@/assets/home/kkk-logo.png";
import profile from "@/assets/profile.jpg";
import Banner from "@/components/Home/Banner/Banner";
import {
  useCancelSubscriptionMutation,
  useResumeSubscriptionMutation,
  useUpdateSubsCardMutation,
} from "@/redux/api/CheckoutApi";
import { useGetUserQuery } from "@/redux/api/registerApi";
import Cookies from "js-cookie"; // Import js-cookie
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

export function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);

  const { data } = useGetUserQuery(undefined);
  const pathname = usePathname();
  const userData = data?.data?.user;
  const token = Cookies.get("token");
  const router = useRouter();

  console.log("userdata me", userData);

  // Check localStorage on mount to set cancellation state
  useEffect(() => {
    const storedState = localStorage.getItem("isCanceled");
    if (storedState === "true") {
      setIsCanceled(true);
    }
  }, []);

  const isActive = (path: string) => pathname === path;
  console.log("userdata", userData)
  const hasSubscription = userData?.payments?.length > 0 && userData?.payments[0]?.stripe_status === "active";

  // console.log("userdata hasSubscription", userData?.payments[0].stripe_status)
  // console.log("hasSubscription idfdfsadf", hasSubscription);

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/");
    window.location.reload();
  };

  const [cancelSubscriptionFn] = useCancelSubscriptionMutation();
  const [resumeSubscriptionFn] = useResumeSubscriptionMutation();

  // Cancel subscription
  const handleCancel = async () => {
    try {
      const response = await cancelSubscriptionFn({}).unwrap();
      console.log("Cancel response: ", response);
      toast.success("Subscription has been cancelled successfully!");
      setIsCanceled(true);
      localStorage.setItem("isCanceled", "true");
    } catch (error: unknown) {
      toast.error(
        typeof error === "string"
          ? error
          : "An error occurred while cancelling the subscription."
      );
    }
  };

  // Resume subscription
  const handleResume = async () => {
    try {
      const response = await resumeSubscriptionFn({}).unwrap();
      console.log("Resume response: ", response);
      toast.success("Subscription has been resumed successfully!");
      setIsCanceled(false);
      localStorage.setItem("isCanceled", "false");
    } catch (error: unknown) {
      toast.error(
        typeof error === "string"
          ? error
          : "An error occurred while resuming the subscription."
      );
    }
  };

  const subscriptionId = userData?.payments[0]?.items[0]?.stripe_id;
  console.log("subscriptionId", subscriptionId);

  const [updateCardSubscriptionFn] = useUpdateSubsCardMutation();

  // handle update card subscription
  const handleUpdateCard = async () => {
    try {
      const response = await updateCardSubscriptionFn({
        id: subscriptionId,
      }).unwrap();
      console.log("update card response", response);
      if (response?.url) {
        window.location.href = response.url;
      }
    } catch (error) {
      toast.error(
        typeof error === "string"
          ? error
          : "An error occurred while updating the subscription card."
      );
    }
  };

  return (
    <div className="container mx-auto px-4">
      <nav className="py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Sneakers Logo"
            width={100}
            height={100}
            className="object-contain w-[120px]"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center md:space-x-[56px]">
          <Link
            href="/"
            className={`text-lg hover:text-gray-600 ${
              isActive("/") ? "text-default font-bold" : "text-default"
            }`}
          >
            Home
          </Link>
          <Link
            href="/voting"
            className={`text-lg hover:text-gray-600 ${
              isActive("/voting") ? "text-default font-bold" : "text-default"
            }`}
          >
            Vote
          </Link>
          <Link
            href="/community"
            className={`text-lg hover:text-gray-600 ${
              isActive("/community") ? "text-default font-bold" : "text-default"
            }`}
          >
            Community
          </Link>
          <Link
            href="/faq"
            className={`text-lg hover:text-gray-600 z-30 ${
              isActive("/faq") ? "text-default font-bold" : "text-default"
            }`}
          >
            FAQ
          </Link>
        </div>

        {hasSubscription && token ? (
          // Profile dropdown when both subscription and token exist
          <div className="relative">
            <div
              className="flex items-center gap-4 cursor-pointer z-50"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Image
                src={
                  userData?.profile_image
                    ? `${process.env.NEXT_PUBLIC_STORAGE}/${userData?.profile_image}`
                    : profile
                }
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full object-cover z-50"
              />
              <span className="text-lg font-medium z-50">
                {userData?.first_name + " " + userData?.last_name || "User"}
              </span>
            </div>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg w-60 p-4 z-50">
                <Link
                  href="https://dashboard.ksquaredsourcedcity.com"
                  className="block text-gray-700 py-2 px-4 hover:bg-gray-200 rounded-lg"
                >
                  Dashboard
                </Link>

                {/* Toggle between Cancel and Resume based on isCanceled */}
                {!isCanceled ? (
                  <button
                    className="block text-gray-700 py-2 px-4 w-full text-left hover:bg-gray-200 rounded-lg z-50"
                    onClick={handleCancel}
                  >
                    Cancel Subscription
                  </button>
                ) : (
                  <button
                    className="block text-gray-700 py-2 px-4 w-full text-left hover:bg-gray-200 rounded-lg z-50"
                    onClick={handleResume}
                  >
                    Resume Subscription
                  </button>
                )}

                <button
                  className="block text-gray-700 py-2 px-4 w-full text-left hover:bg-gray-200 rounded-lg z-50"
                  onClick={handleUpdateCard}
                >
                  Update Card
                </button>
                <button
                  className="block text-gray-700 py-2 px-4 w-full text-left hover:bg-gray-200 rounded-lg z-50"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : token ? (
          // If only token exists, show the "Continue" button
          <div className="flex items-center gap-6">
            <Link
              href="/Checkout"
              className="bg-grey text-default px-4 py-2 z-50 rounded-lg text-lg font-medium"
            >
              Continue
            </Link>
            <button
              onClick={handleLogout}
              className="bg-grey text-default px-4 py-2 z-50 rounded-lg text-lg font-medium"
            >
              Logout
            </button>
          </div>
        ) : (
          // Sign In/Sign Up if no token exists
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/register"
              className="bg-transparent text-default border border-gray px-4 py-2 rounded-[4px] text-lg font-medium z-[300]"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="bg-grey text-default hover:bg-gray-300 px-4 py-2 rounded-[4px] text-lg font-medium z-[300]"
            >
              Sign In
            </Link>
          </div>
        )}

        {/* Hamburger Icon for Mobile */}
        <div className="flex md:hidden">
          {!isDrawerOpen && (
            <Menu
              className="w-8 h-8 text-gray-700 cursor-pointer"
              onClick={() => setIsDrawerOpen(true)}
            />
          )}
        </div>
      </nav>

      {/* Drawer for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 z-[100] ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Sneakers Logo"
              width={100}
              height={100}
              className="object-contain w-16 h-16"
            />
          </Link>
          <X
            className="w-6 h-6 text-gray-700 cursor-pointer"
            onClick={() => setIsDrawerOpen(false)}
          />
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col px-4 py-6 space-y-4">
          <Link
            href="/"
            className={`text-lg ${
              isActive("/") ? "text-default font-bold" : "text-default"
            }`}
            onClick={() => setIsDrawerOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/voting"
            className={`text-lg ${
              isActive("/voting") ? "text-default font-bold" : "text-default"
            }`}
            onClick={() => setIsDrawerOpen(false)}
          >
            Vote
          </Link>
          <Link
            href="/community"
            className={`text-lg ${
              isActive("/community") ? "text-default font-bold" : "text-default"
            }`}
            onClick={() => setIsDrawerOpen(false)}
          >
            Community
          </Link>
          <Link
            href="/faq"
            className={`text-lg ${
              isActive("/faq") ? "text-default font-bold" : "text-default"
            }`}
            onClick={() => setIsDrawerOpen(false)}
          >
            FAQ
          </Link>
          
          {!token && (
            <div className="flex flex-col gap-6">
              <Link
                href="/register"
                className="bg-transparent text-default border border-gray px-4 py-2 rounded-[4px] text-lg font-medium"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="bg-grey text-default hover:bg-gray-300 px-4 py-2 rounded-[4px] text-lg font-medium"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Background Overlay for Drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
      {pathname !== "/faq" && <Banner />}
    </div>
  );
}
