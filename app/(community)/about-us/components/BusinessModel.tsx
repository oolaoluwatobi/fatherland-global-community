'use client'
import Image from "next/image";
import React from "react";
import image from "@/public/campus/chess.png"

export default function BusinessModel() {
  return (
    <div className="mx-auto max-w-7xl container">
      <div className="lg:flex justify-between items-center lg:mt-40">
        <div className="">
          <h4 className="lg:text-4xl text-2xl font-[800] text-[#282828] break-words lg:leading-[54px] mb-[1.5rem]">Diversified Business Model</h4>
          <p className="text-[#14202d] lg:text-lg text-xs lg:leading-9 leading-6 font-medium lg:w-[43.125rem] mb-8 lg:mb-0">
            Fatherland, under the visionary leadership of Hareter B. Oralusi,
            generates revenue through various streams such as premium membership
            subscriptions, travel packages, store sales, ticket and event
            services, and advertising. The company`s diversified business model
            ensures financial growth and success.
          </p>
        </div>

          <Image src={image} alt="chess-piece" className="object-cover" />
        
      </div>
    </div>
  );
}
