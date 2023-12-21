import React from "react";
import { EMBRACE, LIST } from "@/lib/data2";
import style from "./styles.module.css";
import Image from "next/image";

export default function Embrace() {
  return (
    <div className="mx-auto container">
      {EMBRACE.map((brace, i) => (
        <div key={i} className="lg:pt-[9.188rem] pt-12">
          <p className="mx-auto text-center text-[#14202d] lg:text-[2.5rem] font-bold lg:leading-[3.5rem] break-words lg:w-[45.313rem] mb-[2.457rem]">
            {brace.label}
          </p>
        </div>
      ))}

      <main className="lg:flex justify-around max-w-7xl mx-auto containe">
        {LIST.map((list, i) => (
          <div
            key={i}
            className={` ${
              list.id === 2 ? style.specialStyle : ""
            } lg:w-[36.625rem] mx-auto lg:pt-[3rem] pt-4 bg-[#f0f9fe] rounded-[10px] border border-[#26499D] lg:mb-[8.125rem] mb-8`}
          >
            <p className="text-[#14202d] lg:text-[2.5rem] font-bold lg:leading-8 break-words text-center lg:mb-[1.791rem] mb-4">
              {list.label}
            </p>
            <p className="text-center text-[#14202d] lg:w-[32.5rem] mx-auto lg:text-base text-sm font-normal lg:leading-8 break-words">
              {list.text}
            </p>
            <Image src={list.image} alt="" className="w-full" />
          </div>
        ))}
      </main>
    </div>
  );
}
