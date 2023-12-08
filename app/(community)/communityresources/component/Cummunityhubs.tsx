import React from "react";
import style from "./styles.module.css";
import Image from 'next/image'
import hwx from '@/public/hwx.png'
import { Button } from "@/components/ui/button";
// import {Raleway } from 'next/font/google'
// import { Poppins } from 'next/font/google'

// const rale = Raleway({
//    subsets:['latin']
// });

// const rale = Raleway({
//    subsets:['latin']
// });
const Communtyhubs = [
  {
    id: "1",
    text: "COMMUNITY HUBS",
    text1: "We are in exciting locations in all parts of the world",
    content:
      "Community Hubs are local centers of activities and co-working spaces with media studio facilities strictly for Community Hub   Members in the United States and around the World. FCH will provide flexible solutions, inspiring, safety-focused spaces, and unmatched community experiences for its   members. The Fatherland Community Hub operates physical and online activities.",
    button: "View all Locations",
  },
];

export default function Communityhub() {
  return (
    <div className={`${style.bgg}   mb32 mt-40 lg:h[578px`}>
      {Communtyhubs.map((Hubs,i) => (
        <main key={i} className=" flex flex-row lg:flex itemscenter justifyaround contaier">
          <div className="mx-auto pt-5 container">
            <div className=" ml-10 pt-6 border-[10px] border-primary ps-[2.438rem] border-t-0 border-b-0 border-r-0 rounded-t-[10px] rounded-b-[10px] lg:h-[22.125rem]  container mx-auto lg:ml-[3rem  ">
              <p className="text-white">{Hubs.text}</p>
              <p className="mt6 text-primary font-[700] pt-2 lg:text-3xl  lg:w-[36rem] mb">
                {Hubs.text1}
              </p>
              <p className="text-white font-[600] text-2xl text-[16px] leading-7 break-words py-[1.063rem] lg:w-[47rem]">
                {Hubs.content}
              </p>

              <Button className="border bg-transparent border-white">
                {Hubs.button}
              </Button>
             </div>
           
          </div>
          <Image src={hwx} alt="" className="max-h-[26rem] max-w-[2rem]]"/>
        </main>
      ))}
    </div>
  );
}
