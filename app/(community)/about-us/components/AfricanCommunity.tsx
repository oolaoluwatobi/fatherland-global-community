'use client'
import Image from "next/image";
import React from "react";
import bgImg from "@/public/assets/bg-image.png";
import textBg from "@/public/assets/brush-stroke-yellow.png";

export default function AfricanCommunity() {
  return (
    <div className="">
      <div className=" lg:flex items-center justify-between mx-auto pt-8">
        <div className="bg-red-20 my-auto col-span2 lg:col-span1 max-w-7xl mx-auto">
          <div className="mx-auto max-w7xl container mb-8 lg:mb-0 lg:ps-[11.5rem">
            <h1
              className={`lg:text-[48px] text-2xl font-bold lg:leading-[52px] break-words lg:w-[32.563rem] text-[#14202D] relative mb-[1.125rem]`}
            >
              Empowering the African community through technology
              <Image
                src={textBg}
                alt="background image"
                className="absolute bottom-0 w8 aspect-auto bg-red-40 rounded-md  object-cover  -z-20"
              />
            </h1>
            <p className="lg:text-base lg:w-[32.438rem] text-xs font-normal lg:leading-6 break-words">
              Fatherland is a pioneering company that specializes in creating
              technologically advanced products and services that celebrate
              African culture. Our goal is to unite the global African
              population by providing them with products and services that
              reflect their intrinsic values. Through our innovative approach,
              we cater to the unique needs of our targeted market and offer
              culturally designed solutions for the African community worldwide.{" "}
            </p>
          </div>
        </div>
        <div className="relative col-span2 lg:col-span1">
          <div className="bg-gradient-to-br from-[#ff8800] to-[#7fb432] absolute top-[-.5rem] -z-10 left-[-2rem] h-[15rem] w-[15rem] rounded-full blur-[10rem sm:w-[68.75rem dark:bg-[#946263"></div>
          <div className="bg-primary absolute top-[10rem] -z-20 left-[-2rem] h-[20rem] w-[20rem] rounded-full blur-[10rem] sm:w-[68.75rem dark:bg-[#946263"></div>
          <Image src={bgImg} alt="african-lady" className="w-full" />
        </div>
      </div>
    </div>
  );
}
