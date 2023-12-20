"use client";
import React from "react";
import style from "./styles.module.css";

export default function Diversityandinclusion() {
  return (
    <div
      className={`max-w-[90rem] ${style.hero} mx-auto flex justify-center pt-12 pb-16 lg:pt-[11.875rem] lg:pb-[15.063rem] mt-5 lg:mt-[5.125rem]`}
    >
      <main className="mx-auto containe">
        <div className="flex justify-center">
          <p
            className="text-white lg:text-xl text-sm font-medium break-words text-center bg-[#FFFFFF30] 
     lg:w-[17.5rem] px-[2rem] py-[0.313rem] rounded-[20px] mb-[1.75rem]"
          >
            Diversity & Inclusion
          </p>
        </div>
        <p className="lg:w-[64.563rem] text-white lg:text-[58px] font-bold lg:leading-[65px] break-words text-center container">
          Explore Cultural Learning Diversity, Equity, & Inclusion
        </p>
      </main>
    </div>
  );
}
