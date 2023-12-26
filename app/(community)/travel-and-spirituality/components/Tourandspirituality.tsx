"use client";
import React from "react";
import style from "./styles.module.css";
import Image from "next/image";
import jeru from "@/public/herochild2pic.png";

export default function Tourandspirituality() {
  return (
    <div className={`${style.hero} mxauto lg:h-[44.75rem]`}>
      <main
        className={` mxauto max-w-7xl lg:flex justify-between items-center container lg:h-[44.75rem] pt-12 md:pt-0`}
      >
        <div
          className={` mb-12 mxauto rounded-t-[10px] rounded-b-[10px] h-[23.125rem border-[6px] border-[#DA5001] border-t-0 border-b-0 border-r-0 lg:h-[17.25rem]`}
        >
          <p className="text-[#DA5001] lg:px-[2.75rem] px-4 lg:mb-2 lg:text-xl text-base font-medium leading-5 break-words">
            TOUR & SPIRITUALITY
          </p>
          <div className="lg:w-[29.5rem] lg:h-[6.25rem] lg:px-[2.75rem] lg:p-4 p-4">
            <p className="text-[#F8FAFE] lg:text-4xl text-2xl font-bold lg:leading-[50px]">
              Explore Africa With Fatherland
            </p>
            <p className="text-white lg:text-xl text-sm font-normal lg:leading-7">
              Our travel and spirituality feature unveils  Afrocentric and
              adventourous travel offers  transformative workshops designed to
              awaken  your consciousness and elevate your soul.
            </p>
          </div>
        </div>

        <div className="self-end border-[6px]  border-primary border-b-0 border-r-0 border-l-0 rounded-t-[10px] md:w-[25rem]">
          <Image
            src={jeru}
            alt="Banner Image"
            className="object-cover lg:w-[25rem] rounded-t-[10px] "
          />
          <div className="bg-white lg:py-[22px] py-4 px-[17px]">
            <div className="bg-[#e1e6f1] w-[76px] lg:h-[28px] rounded-[16.50px] text-center lg:px-[17px] lg:py-[4px] text-[#26499D] lg:text-sm text-xs font-normal leading-5 break-words mt-[22px lg:mb-[14px] mb-2">
              Africa
            </div>
            <p className="text-[#14202D] lg:text-xl text-lg font-normal leading-5 break-words lg:pb-[12px] pb-2">
              Bethlehem and Jerusalem
            </p>
            <p className="text-[#666666] lg:text-sm text-xs font-normal leading-5 break-words">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor.
            </p>

            <div className="flex justify-between items-center mt-[12px]">
              <span>
                <p className="text-[#66666] text-xs font-normal leading-5 break-words">
                  Ticket
                </p>
                <p className="text-[#14202D] lg:text-2xl text-xl font-normal leading-5 break-words">
                  $46700
                </p>
              </span>
              <button className="text-[#CF0989] rounded-[5px] border-[#CF0989] border text-sm font-semibold break-words py-[9px] px-[22px]">
                Book Ticket
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
