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
    <div className={`${style.bgg} lg:mt-40 mt-12`}>
      {Communtyhubs.map((Hubs,i) => (
        <main key={i} className=" lg:flex flex-row ">
          <div className="mx-auto pt-5">
            <div className=" ml-10 pt-4 lg:border-[10px] lg:border-primary lg:ps-[2.438rem] lg:border-t-0 lg:border-b-0 lg:border-r-0 rounded-t-[10px] rounded-b-[10px] lg:h-[22.125rem]  containr mx-auto  ">
              <p className="text-white">{Hubs.text}</p>
              <p className="mt6 text-primary font-[700] pt-2 lg:text-3xl  text-xl  lg:w-[36rem] mb">
                {Hubs.text1}
              </p>
              <p className="text-white lg:font-[600] font-[400] lg:text-xl mt-5 lg:mt-0 text-sm lg:leading-7 break-words lg:py-[1.063rem] lg:w-[47rem]">
                {Hubs.content}
              </p>

              <Button className="border bg-transparent border-white mt-5 lg:mt-0">
                {Hubs.button}
              </Button>
             </div>
           
          </div>
          <Image src={hwx} alt="" className="lg:h-[26rem] lg:w-[28rem] mx-auto mt-6 lg:mt-0 lg:py-7 py-5 px-5 h-[22rem] w-[22rem]  "/>
        </main>
      ))}
    </div>
  );
}
