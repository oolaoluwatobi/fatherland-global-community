"use client";
import React from "react";
import { Diveristy } from "@/lib/data2";
import { MdOutlineChevronRight } from "react-icons/md";




export default function Team() {
  return (
    <div className="max-w-[90rem] lg:px-[7rem] mx-auto lg:mb-32 mb-5">
        <p className="mb-[1.813rem] lg:w-[69.563rem] mx-auto container text-center lg:text-xl font-normal lg:leading-7 break-words">As a team, it is pertinent to assist in developing greater empathy, bias awareness, and emotional intelligence and to understand the fact that each member of the team comes from different background and this should foster a more inclusive Africa cultural learning platform. Explore Cultural Learning also promotes these qualities in the sense that;</p>
      <main className="max-w-7xl container">
        {Diveristy.map((list, i) => (
          <div key={i} className="mb-5 bg-[#03004D0A] lg:w[69.125rem] lg:h-[6.563rem]
          text-black text-xl font-normal lg:leading-7 break-words border border-[#03004D] rounded-[18px] 
          flex itemscenter p-[1.75rem]"> <MdOutlineChevronRight className='mr-[1.75rem]'/> {list.text}</div>
        ))}
      </main>
    </div>
  );
}
