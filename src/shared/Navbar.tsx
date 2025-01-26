"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logo from "@/assets/home/c-logo.jpeg";
import Banner from "@/components/Home/Banner/Banner";

export function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); 
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="container mx-auto md:px-0 px-4">
      <nav className="py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Sneakers Logo"
            width={100}
            height={100}
            className="object-contain w-full"
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
          {/* <Link
            href="/community"
            className={`text-lg hover:text-gray-600 ${
              isActive("/community") ? "text-default font-bold" : "text-default"
            }`}
          >
            Community
          </Link> */}
          <Link
            href="/faq"
            className={`text-lg hover:text-gray-600 ${
              isActive("/faq") ? "text-default font-bold" : "text-default"
            }`}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className={`text-lg hover:text-gray-600 ${
              isActive("/contact") ? "text-blue-500 font-bold" : "text-default"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <Link href={"/register"} className="bg-transparent text-default border border-gray px-4 py-2 rounded-[4px] text-lg font-medium z-[300]">
            Sign Up
          </Link>
          <Link href={"/login"} className="bg-grey text-default hover:bg-gray-300 px-4 py-2 rounded-[4px] text-lg font-medium z-[300]">
            Sign In
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="flex md:hidden">
          {isDrawerOpen ? "" : <Menu
            className="w-8 h-8 text-gray-700 cursor-pointer"
            onClick={() => setIsDrawerOpen(true)}
          />}
        </div>
      </nav>

      {/* Drawer for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-[100]  ${
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
          <Link
            href="/contact"
            className={`text-lg ${
              isActive("/contact") ? "text-blue-500 font-bold" : "text-gray-700"
            }`}
            onClick={() => setIsDrawerOpen(false)}
          >
            Contact
          </Link>
          <div className="flex flex-col gap-6">
          <button className="bg-transparent text-default border border-gray px-4 py-2 rounded-[4px] text-lg font-medium">
            Sign Up
          </button>
          <button className="bg-grey text-default hover:bg-gray-300 px-4 py-2 rounded-[4px] text-lg font-medium">
            Sign In
          </button>
        </div>
        </div>
      </div>

      {/* Background Overlay for Drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      <Banner />
    </div>
  );
}
