"use client";
import React from "react";
import { foodSection } from "@/lib/data2";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Foodsection() {
  const router = useRouter();
  return (
    <div className="mx-auto bg-green950 ">
      <main className="mx-auto bg-red500 lg:flex flex-wrap justify-around max-w-7xl pt-[8.313rem]">
        {foodSection.map((food, i) => (
          <div
            key={i}
            className={`max-w-[24.25rem] container mb-[5.063rem shadow-lg shadow-blue-100 mb-[7.813rem]`}
          >
            <Image src={food.image} alt="" className="mb-[1.688rem]" />
            <p className="max-w-[6.813rem] bg-[#e7f6f8] rounded-[16.50px] border-none text-[#0BA1BA] text-sm font-normal leading-5 break-words pl-[1.063rem] py-[0.25rem] mb-[1.438rem]">
              {food.location}
            </p>
            <p className="text-[#14202d] font-normal text-xl leading-4 break-words mb-[1.063rem]">
              {food.label}
            </p>
            <div className="flex justify-between items-center mb-[1.188rem]">
              <p className="text-[#666666] text-sm font-normal leading-5 break-words">
                {food.text}
              </p>

              <Button
                className="text-[#0BA0BD] bg-white hover:bg-white 
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
