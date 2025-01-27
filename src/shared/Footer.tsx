import footerLogo from "@/assets/home/c-logo.jpeg";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#212121] py-20">
      <div className="container mx-auto  md:px-0 px-4 grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-start md:items-start text-white col-span-2 w-[350px]">
          <Image src={footerLogo} alt="Footer Logo" className="w-24 mb-4" />
          {/* <p className=" md:text-left text-start">
            Dive into a space designed just for you. You&apos;re looking to
            engage with like-minded individuals, plan exciting events.
          </p> */}
        </div>

        {/* Explore Links */}
        <div className="flex flex-col text-white md:text-left text-start">
          <h3 className="font-semibold mb-4 text-2xl">Explore</h3>
          <ul>
            <li className="mb-3">
              <Link href="/faq" className="hover:underline text-grey">
                FAQ
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/voting" className="hover:underline text-grey">
                Terms & Conditions
              </Link>
            </li>
           
          </ul>
        </div>

        {/* Links Section */}
        <div className="flex flex-col text-white md:text-left text-center">
          <h3 className="font-semibold mb-4 text-2xl">Links</h3>
          <ul>
            <li className="mb-3">
              <a
                href="https://www.instagram.com/ksquaredsourced"
                target="_blank"
                className="hover:underline text-grey"
              >
                instagram.com
              </a>
            </li>
            <li className="mb-3">
              <a
                href="https://www.tiktok.com/@ksquaredsourced"
                target="_blank"
                className="hover:underline text-grey"
              >
                tiktok.com
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col items-start md:items-start text-white">
          <h3 className="font-semibold mb-4 text-2xl">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/ksquaredsourced"
              target="_blank"
              className="bg-[#CCCCCC] w-8 h-8 rounded-md flex items-center justify-center"
            >
              <Instagram className="text-default" size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@ksquaredsourced"
              target="_blank"
              className="bg-[#CCCCCC] w-8 h-8 rounded-md flex items-center justify-center"
            >
              <FaTiktok className="text-default" size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
