"use client";
import React from "react";
import Image from "next/image";
// import k1 from '@/public/joingroup.png'
import { joinFatherlandCommunityBanner } from "@/lib/data2";
export default function Join() {
  return (
    <div className=" bg-[#fcf1e5] mx-auto">
     <main className="max-w-7xl mx-auto">
     {joinFatherlandCommunityBanner.map((list, i) => (
        <div
          key={i}
          className={`pb-[4.438rem] pt-[3.25rem] lg:flex justify-around gap-12 items-center mx-auto container`}
        >
          <Image src={list.image} alt="" className="mx-auto lg:pt-12 mb-8 lg:mb-0"></Image>
          <div
            className={`mx-auto lg:w-[45rem] h[23.125rem] mb5 border-[10px] border-primary border-l-0 border-t-0 border-b-0 lg:ps12`}
          >
            <p className="lg:text-4xl font-extrabold lg:leading-10 break-words lg:pb-[1.375rem] pb-4 pr-[0.563rem] text-black">
              {list.label}
            </p>
            <p className="lg:w-[35.688rem] lg:text-base text-xs font-normal lg:leading-6 break-words lg:pb-[2.25rem] pb-4">
              {" "}
              {list.text}
            </p>
            <button className="bg-[#FF8800] text-white font-semibold lg:text-base text-sm break-words lg:px-[1.188rem] px-4 rounded-[5px] py-[0.688rem]">
              Join Fatherland Community
            </button>
          </div>
        </div>
      ))}
     </main>
    </div>  );
}
