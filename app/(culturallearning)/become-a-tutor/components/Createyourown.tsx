"use client";
import React from "react";
import Image from "next/image";
import img from "@/public/campus/camp8.png";

export default function Createyourown() {
  return (
    <div className="max-w-[90rem] mx-auto lg:py-[6.25rem] py-5 lg:mb-[5.375rem] mb-5  lg:pl-8">
      <div className="container lg:flex justify-around items-center gap-12 max-w-7xl">
        <Image src={img} alt="" className=" mb-5 lg:mb-0"/>
        <div className="">
          <p className="text-black lg:text-[45px] text-xl font-bold lg:leading-[65px] break-words mb-[1.5rem] text-center lg:text-start lg:w-[38rem]">
            Create your own educational video learning materials
          </p>
          <p className="text-[#55525D] text-xs lg:w-[38.375rem lg:text-[15px] font-normal leading-6 break-words text-center lg:text-start">
            The online platform like that of Explore Cultural Learning, serial
            nature of videos allow users and the contents to be shared all
            across the world and at all hours of the day or night by reaching
            out to target audience which are Africans, especially those in
            diaspora. Educational institutions and Explore Cultural Learning
            platforms like Explore Cultural Learning can gain great autonomy by
            using videos to reach a broader audience than ever before. They can
            be used to keep potential, current, and former students involved and
            engaged.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
