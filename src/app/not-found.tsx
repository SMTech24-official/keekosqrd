// src/app/404.tsx

import Link from "next/link";
import logo from "@/assets/home/c-logo.jpeg";
import Image from "next/image";

// import Link from "next/link";

// import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="bg-white dark:bg-gray-900 h-screen flex items-center justify-center">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 bg-primary shadow-md rounded-md">
        <div className="mx-auto max-w-screen-sm text-center">
            <Image src={logo} alt="logo" className="w-[150px] mx-auto object-cover mb-4"/>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something &apos;s missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page. </p>
            <Link href="/" className="bg-blue-500 px-10 py-3 rounded-md text-white mt-5">Back to Homepage</Link>
        </div>   
    </div>
</section>
  );
};

export default NotFound;
