"use client";
import React from "react";
import style from "./styles.module.css";
import img from "@/public/campus/nerr.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Platform() {
  return (
    <div
      className={`mx-auto max-w-[90rem] ${style.hero} lg:mt-[5.938rem] mt-5 lg:mb-[10rem] mb-5`}
    >
      <main className="container lg:flex justify-around items-center max-w-7xl">
        <div className="mb-5 lg:mb-0">
          <p
            className="text-black bg-[#fff3e5] px-[2.313rem] mb-[1.188rem] rounded-[20px] lg:text-lg text-sm 
            font-semibold break-words py-[7px] lg:w-[24.75rem] w-full"
          >
            Explore Cultural Learning Campus
          </p>
          <p
            className="lg:w-[35.25rem] text-[#263238] lg:text-[58px] mb-[1.563rem] 
            text-xl font-bold lg:leading-[65px] break-words text-center lg:text-start"
          >
            A Cultural Learning Platform to Upscale Knowledge About Africa
          </p>
          <p className="text-[#263238rem] lg:text-base text-sm font-medium lg:w-[32.75rem] 
          text-center lg:text-start leading-6 break-words mb-[1.588rem]">
            Learn from the best Africa Learning platform and be the best you
            can. Get unlimited access to various bite-sized lessons on Africa.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button className="px-[25px] py-[11px] mr-[1.938rem] hover:bg-primary">
              Get Started
            </Button>
            <Button className="px-[25px] py-[11px] text-[#03004D] border border-primary bg-white">
              Log In
            </Button>
          </div>
        </div>
        <Image src={img} alt="" className=" lg:w-[36.688rem]" />
      </main>
    </div>
  );
}
