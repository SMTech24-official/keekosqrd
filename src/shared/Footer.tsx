import footerLogo from "@/assets/footer-logo.svg";
import {
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
  LinkedinIcon,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#212121] py-20">
      <div className="container mx-auto max-w-[1200px] md:px-0 px-4 grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start text-white col-span-2 w-[350px]">
          <Image src={footerLogo} alt="Footer Logo" className="w-24 mb-4" />
          <p className="text-center md:text-left">
            Dive into a space designed just for you. You&apos;re looking to engage
            with like-minded individuals, plan exciting events.
          </p>
        </div>

        {/* Explore Links */}
        <div className="flex flex-col text-white md:text-left text-center">
          <h3 className="font-semibold mb-4 text-2xl">Explore</h3>
          <ul>
            <li className="mb-3">
              <a href="/faq" className="hover:underline text-grey">
                FAQ
              </a>
            </li>
            <li className="mb-3">
              <a href="/terms" className="hover:underline text-grey">
                Terms & Conditions
              </a>
            </li>
            <li className="mb-3">
              <a href="/about" className="hover:underline text-grey">
                About Us
              </a>
            </li>
            <li className="mb-3">
              <a href="/contact" className="hover:underline text-grey">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Links Section */}
        <div className="flex flex-col text-white md:text-left text-center">
          <h3 className="font-semibold mb-4 text-2xl">Links</h3>
          <ul>
            <li className="mb-3">
              <a href="https://facebook.com" className="hover:underline text-grey">
                facebook.com
              </a>
            </li>
            <li className="mb-3">
              <a href="https://youtube.com" className="hover:underline text-grey">
                youtube.com
              </a>
            </li>
            <li className="mb-3">
              <a href="https://skypee.com" className="hover:underline text-grey">
                skypee.com
              </a>
            </li>
            <li className="mb-3">
              <a href="https://linkedin.com" className="hover:underline text-grey">
                linkedin.com
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col items-center md:items-start text-white">
          <h3 className="font-semibold mb-4 text-2xl">Follow Us</h3>
          <div className="flex space-x-4">
            <div className="bg-[#CCCCCC] w-8 h-8 rounded-md flex items-center justify-center">
              <FacebookIcon className="text-default" size={24} />
            </div>
            <div className="bg-[#CCCCCC] w-8 h-8 rounded-md flex items-center justify-center">
              <YoutubeIcon className="text-default" size={24} />
            </div>
            <div className="bg-[#CCCCCC] w-8 h-8 rounded-md flex items-center justify-center">
              <TwitterIcon className="text-default" size={24} />
            </div>
            <div className="bg-[#CCCCCC] w-8 h-8 rounded-md flex items-center justify-center">
              <LinkedinIcon className="text-default" size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
