import React from "react";
import Link from "next/link";
import style from "./styles.module.css";
import Image from "next/image";
import { AdvertSolutions } from "@/lib/data";
// import { Advertsolution2 } from '@/lib/data'
import { Button } from "@/components/ui/button";

export default function AdevertSolution() {
  return (
    <div className={` {style.bgg} bg-[#14202d]  sm:bg-cover pt-20 pb-10`}>
      <p className="text-white font-bold text-center lg:text-2xl text:lg ">
        Our Solutions
      </p>

      <div className="lg:grid grid-cols-3 max-w-4xl mx-auto pt-6 gap-5">
        {AdvertSolutions.map((advert, i) => (
          <div 
            key={i}
            className="   ">
            <div className={` bg-white pt6 border-[7px] border-primary lg:grid-cols1 pt-[45px] pb-[24px] border-t-0 border-b-0 border-r-0 rounded-t-[10px] rounded-b-[10px] rounded-[10px] font-[700] hover:border-primary active:border-primary shadow-lg shadow-blue-0 ${advert.color === 'green' ? "border-[#26D44B]" :"border-red-500"} `}>
              <Image src={advert.image!!} alt="" className="mx-auto" />{" "}
              <p className="text-xs px0 text-center">{advert.text}</p>
            </div>
            ${advert.color === 'green' ? 'bg-[#1abc94]' : 'bg-red-400'}
          </div>
        ))}
      </div>

      <Link href={`advertisements/link`} className="flex justify-center">
        <Button className="py-5 px-5 mt-14 ">Find Out More</Button>
      </Link>
    </div>
  );
}
