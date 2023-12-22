"use client";
import React from "react";
import Image from "next/image";
import { joinFatherlandCommunityBanner } from "@/lib/data2";
import style from "./styles.module.css";

export default function Join() {
  return (
    <div className="bg-[#e6f5f9] mx-auto">
      <main className="max-w-7xl mx-auto">
        {joinFatherlandCommunityBanner.map((list, i) => (
          <div
            key={i}
            className={`pb-[4.438rem] pt-[3.25rem] lg:flex justify-around gap-12 items-center mx-auto container`}
          >
            <Image
              src={list.image}
              alt=""
              className="mx-auto lg:pt-12 mb-8 lg:mb-0"
            ></Image>
            <div
              className={` mx-auto lg:w-[45rem] h[23.125rem] mb5 border-[10px] borderprimary border-l-0 border-t-0 border-b-0 lg:ps12 ${style.bfd} rounded-t-[10px] rounded-b-[10px]`}
            >
              <p className="lg:text-5xl font-extrabold lg:leading-10 break-words lg:pb-[1.375rem] pb-4 text-[#0BA1BA] pr-[0.563rem]">
                {list.label2}
              </p>
              <p className="lg:w-[35.688rem] lg:text-base text-xs text-[#14202D] font-normal lg:leading-6 break-words lg:pb-[2.25rem] pb-4">
                {" "}
                {list.text}
              </p>
              <button
                className={`text-white font-semibold lg:text-base text-sm break-words lg:px-[1.188rem] px-4 rounded-[5px] py-[0.688rem] ${style.fb1}`}
              >
                Join Fatherland Community
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
