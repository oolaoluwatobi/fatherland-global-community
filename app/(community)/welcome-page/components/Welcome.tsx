"use client";
import React from "react";
import Image from "next/image";
import welcome1 from "@/public/campus/wel11.png";
// import grop from "@/public/Group abt.png";
import { Button } from "@/components/ui/button";
import style from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter();
  return (
    <div className="">
      <main className="container max-w-8xl lg:flex justify-between itemscenter lg:mt-[4.188rem] mt-8 mb-[2.5rem] lg:mb-[4.875rem]">
        <div className="">
          <p className="lg:w-[36rem] text-[#14202d] font-bold lg:text-[40px] text-2xl lg:leading-[56px]">
            Welcome to an <br /> extraordinary Afrocentric world!
          </p>
          <p className="lg:w-[33.063rem] lg:text-[22px] text-sm font-normal lg:leading-8 break-words mb-4 lg:mb-0">
            Discover the dynamic world of Fatherland Community, meticulously
            designed to cater to your economic, recreational, educational, and
            entertainment needs. Uncover vibrant community hubs, explore
            cultural and artistic enclaves, delve into spiritual sanctuaries,
            and embark on thrilling tourist destinations. Enjoy an enriching
            adventure and unlock the full spectrum of opportunities that we have
            to offer
          </p>
        </div>

        <Image src={welcome1} alt="" className="lg:h-[524px]"/>
      </main>

      <div
        className={`lg:mb-[5.313rem] mb-12 ${style.bkg} pt-[53px] pb-[67px]  `}
      >
        <div className="lg:flex justify-between items-center max-w 8xl container">
          <p className="text-white lg:text-4xl text-2xl font-bold lg:leading-[58px] lg:w-[40.938rem] mb-12 lg:mb-0 text-center lg:text-start">
            Enjoy Exclusive Benefits when you become a Member
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button
              className=" bg-white hover:bg-white lg:px-[2.188rem] lg:py-[0.688rem] text-secondary"
              onClick={() => router.push("/benefits-and-brands")}
            >
              Explore Brands & Benefits
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
