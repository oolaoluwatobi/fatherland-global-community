"use client";
import React from "react";
import img from "@/public/Video tutorial-bro 1.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import style from './styles.module.css'
export default function HeroCat() {
  return (
    <div
      className={`mx-auto max-w-[90rem] bg-red500 h52 lg:px-[6.225rem container lg:pt-[3.938rem] pt-5  lg:pb-[4rem] pb-5 lg:px-[7rem]`}
    >
      <main
        className={`max-w-7xl mx-auto ${style.cat} h52 bg-[#d4f6db] lg:flex justify-between items-center rounded-[15px] lg:pl-[3.125rem]
        lg:pr-[7.5rem] lg:py-[4.25rem]`}
      >
        <div className="container">
          <p className="text-[#14202E] text-center lg:text-start lg:text-[60px] text-xl font-bold lg:leading-[63px] break-words">
            Categories
          </p>
          <p className="lg:w-[22rem] text-center lg:text-start text-[#55525D] lg:text-lg text-sm font-medium leading-7 break-words">
            Learn in-demand skills with over 800+ video courses
          </p>
          <div className="flex justify-center lg:justify-start"><Button className="mt-[1.313rem] text-base font-semibold break-words hover:bg-primary">Sign Up</Button></div>
        </div>
        <Image
          src={img}
          alt=""
          className="lg:w-[23rem] lg:h-[15.563rem]"
        />
      </main>
    </div>
  );
}
