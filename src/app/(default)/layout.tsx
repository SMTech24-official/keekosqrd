"use client";


import Footer from "@/shared/Footer";
// import Footer from "@/shared/Footer";
import { NavBar } from "@/shared/Navbar";
// import { Navbar } from "@/shared/Navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {


  return (
    <div className="">
     <NavBar/>

      <main style={{ minHeight: "calc(100vh - 360px)" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
