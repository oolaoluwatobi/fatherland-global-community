"use client";
import React from "react";
// import { Advertcontent } from '@/lib/data'
import { Advertcontents } from "@/lib/data";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const monserat = Montserrat({
  subsets: ["latin"],
});
export default function Advertcontent() {
  return (
    <div className="lg:grid grid-cols-2 gap-2  mx-auto justify-around    px0">
      {Advertcontents.map((content, i) => (
        <div key={i} className=" mx-2 my-2 px-2  w-ful">
          <Image src={content.image!!} alt="" className="mt-8 w-full " />
          <p
            className={`${monserat.className}text-5xl  text-[#14202D] font-bold mb-4 pt-5`}>
            {content.text}
          </p>
          <p className="w-[35rem max-w-lg">{content.text1}</p>
        </div>
      ))}
    </div>
  );
}
