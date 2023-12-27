"use client";
import React from "react";
import { foodSection } from "@/lib/data2";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Foodsection() {
  const router = useRouter();
  return (
    <div className="mx-auto bg-green950 container max-w-7xl">
      <main className="mx-auto bg-red500 lg:grid grid-cols-3 gap-[2.125rem] lg:pt-[8.313rem] pt-12 lg:mb-32 mb-12">
        {foodSection.map((food, i) => (
          <div
            key={i}
            className={`max-w-[24.25rem] shadow-lg shadow-blue-100 lg:mb-[5.063rem] mb-8 rounded-[8px]`}
          >
            <Image src={food.image} alt="" className="mb-[1.688rem]" />
            <p className="max-w-[6.813rem] mx-[1.063rem] bg-[#e7f6f8] rounded-[16.50px] border-none text-[#0BA1BA] text-sm 
            font-normal leading-5 break-words pl-[1.063rem] py-[0.25rem] mb-[1.438rem]">
              {food.location}
            </p>
            <p className="text-[#14202d] font-normal lg:text-xl text-sm leading-4 break-words mb-[1.063rem] px-[1.063rem]">
              {food.label}
            </p>
            <div className="flex justify-between items-center pb-[1.188rem] px-[1.063rem]">
              <p className="text-[#666666] lg:text-sm text-xs font-normal leading-5 break-words">
                {food.text}
              </p>

              <Button
                className="text-[#0BA0BD] bg-white hover:bg-white mb8
                            text-sm font-semibold break-words border border-[#0BA0BD]"
                onClick={() => router.push(`/find-a-restaurant/${food.id}`)}
              >
                Book Now
              </Button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
