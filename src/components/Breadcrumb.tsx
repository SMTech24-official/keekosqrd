"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function BreadCrumb() {
  const pathname = usePathname();

  // Extract the route segments to display as breadcrumb
  const segments = pathname.split("/").filter(Boolean); // Remove empty strings

  return (
    <div className="flex items-center gap-4 py-7 container mx-auto px-4">
      <h1 className="text-dark flex items-center gap-2">
        <Link href="/">Home</Link>
        {segments.map((segment, index) => (
          <React.Fragment key={index}>
            <ChevronRight />
            <span
              className={`${
                index === segments.length - 1 ? "text-blue-600" : "text-dark"
              } capitalize`}
            >
              {segment.replace(/-/g, " ")} 
            </span>
          </React.Fragment>
        ))}
      </h1>
    </div>
  );
}