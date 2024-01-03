'use client'
import Image from "next/image";
import React from "react";
import objectivesImg from "@/public/campus/Mask obj.png";

export default function Objectives() {
  return (
    <div className=" bg-[#fafafa]">
      <div className="lg:flex justify-between itemscenter lg:py-16 py-8 mx-auto max-w-7xl container">
        <div className="col-span2 lg:col-span1 p4 mb-8 lg:mb-0">
          <Image
            src={objectivesImg}
            alt="background image"
            className=" aspect-auto bg-red-40 rounded-md  object-cover  "
          />
        </div>
        <div className="pt-[1.063rem]">
          <h3 className="text-primary text-2xl font-[700] mb-[1rem]">Our Objectives</h3>
          <h2 className="capitalize lg:text-4xl text-2xl font-[700] lg:w-[37.188rem] mb-[1.813rem]">
            Unlocking the full potential of black purchasing power
          </h2>
          <p className="leading-8 lg:w-[36.125rem] text-[#333333] lg:text-lg text-sm font-normal break-words">
            With the rapid growth of the African community and their increasing
            purchasing power, we take pride in being the foremost brand that
            utilizes technology to tap into the opportunities within the local
            and global black community.
          </p>
        </div>
      </div>
    </div>
  );
}
