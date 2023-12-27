"use client";
import React from "react";
import Image from "next/image";
import welcome1 from "@/public/welcome1.png";
// import grop from "@/public/Group abt.png";
import { Button } from "@/components/ui/button";
import style from './styles.module.css'

export default function Welcome() {
  return (
<div className="">
      <main className="container max-w-7xl lg:flex items-center lg:mt-[4.188rem] mt-8 mb-[2.5rem]">
        <div className="">
          <p className="lg:w-[36rem] text-[#14202d] font-bold lg:text-[40px] text-2xl lg:leading-[56px]">
            Welcome to a world of{" "}
            <span className="text-[#da5001]">Extraordinary Afrocentric</span>{" "}
            Experiences
          </p>
          <p className="lg:w-[33.063rem] lg:text-[22px] text-sm font-normal leading-8 break-words mb-4 lg:mb-0">
            Get started on Fatherland Community and learn how it works with
            resources provided for you. Fatherland Community aimed to meet
            people&apos;s economic, recreational, educational, and entertainment
            needs by creating community hubs, cultural, art, spiritual, and
            tourist destinations.
          </p>
        </div>

        <Image src={welcome1} alt="" />
      </main>
          <div className={`lg:mb-[5.313rem] mb-12 ${style.bkg} pt-[9.625rem] pb-[2.688rem] lg:ps-[11.5rem] flex justify-center lg:justify-start`}>
              <Button className=" bg-[#FF8800] hover:bg-[#FF8800] lg:px-[2.188rem] lg:py-[0.688rem]">Explore Brands & Benefits</Button>
          </div>
    </div>

  );
}
