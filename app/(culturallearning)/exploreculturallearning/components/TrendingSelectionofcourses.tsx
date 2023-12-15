"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { Tutors } from "@/lib/data2";
// import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Youmayalsolike from "../../category/[categoryId]/components/Youmayalsolike";

export default function TrendingSelectionofcourses() {

  return (
    <div className=" relative bg-[#fff3e5] mx-auto pt-5 lg:pt-[6.375rem] pb-[4.313rem] mb-8 lg:mb-[5.5rem]">
        <div className="lg:flex justify-between items-center max-w7xl mx-auto container lg:pb-[3.875rem] pb-5 absolute">
        <p className="text-black lg:text-[40px] text-base font-bold lg:leading-10 break-words text-center lg:text-start lg:pl-[4.5rem]">
          Trending selection of courses
        </p>
        <Link
          href="/category"
          className="text-[#FF8800] text-lg font-medium leading-5 break-words"
        >
          See all
        </Link>
      </div>
        <Youmayalsolike />
  </div>

  );
}
