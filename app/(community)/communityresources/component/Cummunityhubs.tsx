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
      {Communtyhubs.map((Hubs) => (
        <main className=" flex flex-row lg:flex itemscenter justifyaround contaier">
          <div className="mx-auto containr">
            <div className="mt-[-10]  border-[10px] border-primary ps-[2.438rem] mt7 border-t-0 border-b-0 border-r-0 rounded-t-[10px] rounded-b-[10px] lg:h-[22.125rem]  container mx-auto lg:ml-[3rem  bg-red-500 ">
              <p className="text-white">{Hubs.text}</p>
              <p className="mt-6 text-primary font-[700]  lg:text-3xl  lg:w-[36rem] mb-5">
                {Hubs.text1}
              </p>
              <p className="text-white ml28 font-[600] text-[16px] leading-7 break-words py-[1.063rem] lg:w-[45rem]">
                {Hubs.content}
              </p>

              <Button className="border bg-transparent border-white">
                {Hubs.button}
              </Button>
             </div>
           
          </div>
          <Image src={hwx} alt="" className="max-h-[rem] max-w-[10rem]]"/>
        </main>
      ))}
    </div>
  );
}
