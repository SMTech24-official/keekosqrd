import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/home/nav-logo.svg"
import Banner from "@/components/Home/Banner/Banner"


export function NavBar() {
  return (
   <div className="container mx-auto px-0">
     <nav className=" py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image
          src={logo}
          alt="Sneakers Logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </Link>
      
      <div className="hidden md:flex items-center md:space-x-[56px]">
        <Link href="/" className="text-default text-lg hover:text-gray-600">
          Home
        </Link>
        <Link href="/voting" className="text-default text-lg hover:text-gray-600">
          Vote
        </Link>
        <Link href="/community" className="text-default text-lg hover:text-gray-600">
          community
        </Link>
        <Link href="/faq" className="text-default text-lg hover:text-gray-600">
          FAQ
        </Link>
        <Link href="/contact" className="text-default text-lg hover:text-gray-600">
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <button  className="bg-transparent text-default border border-gray px-4 py-2 rounded-[4px] text-lg font-medium">
          Sign Up
        </button>
        <button  className="bg-grey text-default hover:bg-gray-300 px-4 py-2 rounded-[4px] text-lg font-medium">
          Sign In
        </button>
      </div>
    </nav>
    <Banner/>
   </div>
  )
}

