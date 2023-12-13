"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tutors } from "@/lib/data2";

export default function TrendingSelectionofcourses() {
  return (
    <div className="bg-[#fff3e5] max-w-[90rem] mx-auto pt-5 lg:pt-[6.375rem] pb-[4.313rem] mb-8 lg:mb-[5.5rem]">
      <div className="lg:flex justify-between items-center max-w-7xl mx-auto container lg:pb-[3.875rem] pb-5">
        <p className="text-black lg:text-[40px] text-base font-bold lg:leading-10 break-words text-center lg:text-start">
          Trending selection of courses
        </p>
        <Link
          href=""
          className="text-[#FF8800] text-lg font-medium leading-5 break-words"
        >
          See all
        </Link>
      </div>

      <div className=" overflow-x-scroll no-scrollbar lg:flex justify-between gap-[1.438rem] container mx-auto max-w-7xl">
        {Tutors.slice(3, 9).map((tutor, i) => (
          <Image
            key={i}
            src={tutor.image}
            alt=""
            className="mx-auto mb-[1.478rem] containe max-h-[23.438rem] max-w-[18.125rem]"
          />
          
        ))}
      </div>
      
    </div>
  );
}
