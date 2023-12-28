"use client";
import Link from "next/link";
import React from "react";
import Youmayalsolike from "../../category/[categoryId]/components/Youmayalsolike";

export default function TrendingSelectionofcourses() {
  return (
    <div className=" relativ-e bg-[#fff3e5] mx-auto pt-5 lg:pt-[6.375rem] lg:pb-[4.313rem] pb-5 mb-8 lg:mb-[5.5rem]">
      <div className="lg:flex justify-between items-center max-w-7xl mx-auto container lg:pb-[3.875rem] pb-5 a-bsolute">
        <p className="text-black mxauto lg:text-[40px] text-2xl font-bold lg:leading-10 break-words text-center lg:text-start lg:pl-[4.5rem">
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
