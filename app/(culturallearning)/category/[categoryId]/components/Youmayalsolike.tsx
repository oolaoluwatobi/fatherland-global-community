"use client";
import Image from "next/image";
import React from "react";
import { Tutors } from "@/lib/data2";
import Link from "next/link";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export default function Youmayalsolike() {

  const storehomes = () => {
    const discover = document.querySelector("#store");
    discover?.scrollBy({ left: -discover.clientWidth, behavior: "smooth" });
  };
  const storehomess = () => {
    const discover = document.querySelector("#store");
    discover?.scrollBy({ left: discover.clientWidth, behavior: "smooth" });
  };
  return (
    <div className=" relative mx-auto lg:mt24 lg:pt[6.375rem] pb[4.313rem] mb-8 lg:mb[5.5rem] max-w-[90rem]">
    <button className="absolute left-12 top-0 bottom-0 my-auto hidden lg:block">
      <BsChevronLeft
        onClick={() => storehomes()}
        className="w-12 h-12 text-black bg-white rounded-[50px]"
      />
    </button>
    <button className="absolute right-12 top-0 bottom-0 my-auto hidden lg:block">
      <BsChevronRight
        className="w-12 h-12 text-black bg-white rounded-[50px]"
        onClick={storehomess}
      />
    </button>

    <div id="store" className="overflow-x-auto no-scrollbar max-w-7xl mx-auto bg-red500 pb-4">
    <div className="mx-auto pt-5 lg:pt-[6.375rem]">


      <div className="lg:flex mt-12 lg:mt-0 justify-between gap-[1.438rem] container mx-auto max-w-7xl">
        {Tutors.map((tutor, i) => (
         <Link  key={i} href={`/become-a-tutor/${tutor.id}`}>
           <Image
           
            src={tutor.image}
            alt=""
            className="mx-auto mb-[1.478rem] containe max-h-[23.438rem] max-w-[18.125rem]"
          />
         </Link>
          
        ))}
      </div>
      
    </div>
    </div>
  </div>

  );
}
