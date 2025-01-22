import Link from "next/link";
import React from "react";

export default function Breadcrumb() {
  return <div className="container mx-auto">
    <ol className="flex items-center whitespace-nowrap py-4">
  <li className="inline-flex items-center">
    <Link className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" href="/">
      Home
    </Link>
    <svg className="shrink-0 size-5 text-gray-400 dark:text-neutral-600 mx-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"></path>
    </svg>
  </li>
  <li className="inline-flex items-center">
    <Link className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" href="/faq">
     FAQ
      
    </Link>
  </li>
  
</ol>
  </div>;
}
