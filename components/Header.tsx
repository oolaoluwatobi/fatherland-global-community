"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/WhatsApp_Image_2023-11-15_at_09.58 1 (1).png";
import { Button } from "./ui/button";
import Link from "next/link";
import Dropdown from "./ui/dropdown";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";

export default function Header() {
  const router = useRouter();
  return (
    <div className="mx-auto w-full bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto bg-red400 py-[10px] flex justify-between items-center">
        <Link href="/" className="ml4 lg:ml-0">
          <Image src={logo} alt="" className="" />
        </Link>
        <div className="flex justify-between items-center gap-8">
          <Link  href='/about-us' className="hidden lg:inline">Who we are</Link>
          <div className="hidden lg:inline"><Dropdown /></div>
          <Link href='/membershipplans'  className="hidden lg:inline">Benefits & Brands</Link>
          <Button
            className="bg-[#FF8800] text-white hidden lg:inline hover:bg-[#ff8800d9] text-sm font-medium transition-colors"
            onClick={() => router.push("/becomeamember")}
          >
            Become a Member
          </Button>
          <Button
            variant="outline"
            className="border-[#FF8800] hover:bg-white text-sm font-medium transition-colors text-[#ff8800]"
            onClick={() => router.push("/loginpage")}
          >
            Log In
          </Button>
          <div className="lg:hidden mr-4">
              <Sidebar />
              </div>
        </div>
      </nav>
    </div>
  );
}
