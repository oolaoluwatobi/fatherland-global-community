"use client";
import React from "react";
import Image from "next/image";
import img1 from "@/public/welcome2.png";
import img2 from "@/public/welcome3.png";
import img3 from "@/public/welcome4.png";
import img4 from "@/public/welcome5.png";
import { Button } from "@/components/ui/button";

export default function Imagecollection() {
  return (
    <div className="mx-auto container lg:flex justify-between">
      <div>
        <Image
          src={img1}
          alt=""
          className="lg:mb-[4.813rem] mb-4 lg:w-[38.063rem]"
        />
        <div className="bg-[#F1F4FB] lg:w-[37.813rem] lg:h-[24.563rem] lg:py-[3.688rem] lg:px-[1.625rem] lg:mb-[3.688rem] mb-4 rounded-[10px]">
          <div className=" pl-[1.75rem] lg:w-[36.875rem] border-[10px] border-primary border-r-0 border-t-0 border-b-0 rounded-t-[10px] rounded-b-[10px]  ">
            <p className="text-[#14202D] lg:text-3xl text-xl font-normal leading-8 break-words pb-4">
              {" "}
              Community- Navigating the <br /> Website
            </p>
            <p className="lg:w-[29.502rem] text-[#14202d] lg:text-xl text-sm font-normal leading-7 break-words">
              Fatherland Community organizes unique tours that explore the
              history, spirituality, landscapes, culture, and culinary
              traditions of locations in Africa which is our specialization. It
              provides you with a travel experience that is creative, exciting,
              safe, and genuinely inspiring.
            </p>
          </div>
        </div>

        <Image src={img3} alt="" className="lg:mb-[4.813rem] mb-4" />

        <main className="bg-[#F1F4FB] lg:w-[37.813rem] lg:h-[22.938rem] lg:py-[3.688rem] lg:px-[1.625rem] lg:mb-[8rem] mb-4 rounded-[10px]">
          <div className=" pl-[1.75rem] lg:w-[36.875rem] border-[10px] border-primary border-r-0 border-t-0 border-b-0 rounded-t-[10px] rounded-b-[10px] ">
            <p className="text-[#14202D] lg:text-3xl text-xl font-normal leading-8 break-words pb-4 pt-10">
              Who We are
            </p>
            <p className="lg:w-[29.502rem] text-[#14202d] lg:text-xl text-sm font-normal leading-7 break-words">
              Fatherland Community organizes unique tours that explore the
              history, spirituality, landscapes, culture, and culinary
              traditions of locations in Africa which is our specialization. It
              provides you with a travel experience that is creative, exciting,
              safe, and genuinely inspiring.
            </p>
          </div>
        </main>
      </div>

      <div>
        <main className="bg-[#F1F4FB] lg:w-[37.813rem] lg:h-[22.938rem] lg:py-[3.688rem] lg:px-[1.625rem] mb-4 lg:mb-[4.125rem] rounded-[10px]">
          <div className=" pe-[1.75rem]  border-[10px] border-[#ff8800] border-l-0 border-t-0 border-b-0 rounded-t-[10px] rounded-b-[10px] mr-[1.625rem">
            <p className="text-[#14202D] lg:text-3xl text-xl font-normal lg:leading-8 break-words pb-4 pt-10">
              Induction- Get Started and Learn <br />
              about the Community
            </p>
            <p className="lg:w-[29.502rem] text-[#14202d] lg:text-xl text-sm font-normal leading-7 break-words">
              Fatherland Community organizes unique tours that explore the
              history, spirituality, landscapes, culture, and culinary
              traditions of locations in Africa which is our specialization. It
              provides you with a travel experience that is creative, exciting,
              safe, and genuinely inspiring.
            </p>
          </div>
        </main>
        <Image src={img2} alt="" className="lg:mb-[6.325rem] mb-4" />

        <div className="bg-[#F1F4FB] lg:w-[37.813rem] lg:h-[24.563rem] lg:py-[3.688rem] lg:px-[1.625rem] mb-4 lg:mb-[3.375rem] rounded-[10px]">
          <div className=" pe-[1.75rem] border-[10px] border-[#CF0989] border-l-0 border-t-0 border-b-0 rounded-t-[10px] rounded-b-[10px]  ">
            <p className="text-[#14202D] lg:text-3xl text-xl font-normal leading-8 break-words pb-4">
              {" "}
              Our Brand Partners
            </p>
            <p className="lg:w-[29.502rem] text-[#14202d] lg:text-xl text-sm font-normal leading-7 break-words pb-[1.648rem]">
              Fatherland Community organizes unique tours that explore the
              history, spirituality, landscapes, culture, and culinary
              traditions of locations in Africa which is our specialization. It
              provides you with a travel experience that is creative, exciting,
              safe, and genuinely inspiring.
            </p>

            <Button className="w-full bg-[#ff8800] py-[1.25rem]">
              Explore Now
            </Button>
          </div>
        </div>

        <Image src={img4} alt="" className=" mb-12 lg:mb-0" />
      </div>
    </div>
  );
}
