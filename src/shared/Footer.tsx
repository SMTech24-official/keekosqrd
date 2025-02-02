import footerLogo from "@/assets/home/kkk-logo.png";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-grey py-20">
      <div className="container mx-auto   px-4 grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-start md:items-start text-default col-span-2 w-[350px]">
          <Image src={footerLogo} alt="Footer Logo" className="w-[120px] mb-4" />
          {/* <p className=" md:text-left text-start">
            Dive into a space designed just for you. You&apos;re looking to
            engage with like-minded individuals, plan exciting events.
          </p> */}
        </div>

        {/* Explore Links */}
        <div className="flex flex-col text-default md:text-left text-start">
          <h3 className="font-semibold mb-4 text-2xl">Explore</h3>
          <ul>
            <li className="mb-3">
              <Link href="/faq" className="hover:underline text-gray">
                FAQ
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/voting" className="hover:underline text-gray">
                Terms & Conditions
              </Link>
            </li>
           
          </ul>
        </div>

        {/* Links Section */}
        <div className="flex flex-col text-default md:text-left text-center">
          <h3 className="font-semibold mb-4 text-2xl">Links</h3>
          <ul>
            <li className="mb-3">
              <a
                href="https://www.instagram.com/ksquaredsourced"
                target="_blank"
                className="hover:underline text-gray"
              >
                instagram.com
              </a>
            </li>
            <li className="mb-3">
              <a
                href="https://www.tiktok.com/@ksquaredsourced"
                target="_blank"
                className="hover:underline text-gray"
              >
                tiktok.com
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col items-start md:items-start text-default">
          <h3 className="font-semibold mb-4 text-2xl">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/ksquaredsourced"
              target="_blank"
              className="bg-white w-8 h-8 rounded-md flex items-center justify-center"
            >
              <Instagram className="text-default" size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@ksquaredsourced"
              target="_blank"
              className="bg-white w-8 h-8 rounded-md flex items-center justify-center"
            >
              <FaTiktok className="text-default" size={24} />
            </a>
            <a
              href="https://www.facebook.com/people/Ksquared-sourced-city/61572353114820"
              target="_blank"
              className="bg-white w-8 h-8 rounded-md flex items-center justify-center"
            >
             <FaFacebookF className="text-default" size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
