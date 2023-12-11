"use client";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";
import { useState } from "react";
import { Questions } from "@/lib/data2";
import { Contactdetails } from "@/lib/data2";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGlobe, FaLocationPin } from "react-icons/fa6";





export default function Frequentlyaskedqustn() {
  const [isBlockDisplayed, setIsBlockDisplayed] = useState<boolean[]>(
    Array(11).fill(false)
  );

  const toggleDisplay = (index: number) => {
    const updatedDisplay = [...isBlockDisplayed];
    updatedDisplay[index] = !updatedDisplay[index];
    setIsBlockDisplayed(updatedDisplay);
  };

  return (
    <div className="bg-red500 max-w-7xl mx-auto">
      <p className="mx-auto container text-[#14202D] text-base lg:text-4xl font-bold leading-[56px] break-words lg:pt-[6.482rem] lg:mb-[3.134rem] text-center lg:text-start">
        Frequently Asked Questions
      </p>
      <main className="mx-auto container lg:grid grid-cols-3 gap-4 lg:pb-[6.651rem]">
        {Questions.map((list, index) => (
          <div key={index} className="">
            <div>
              <p
                className="flex justify-between items-center gap-4 relative border lg:py-[2.138rem] px-[1.835rem] shadow-lg bg-white
                 shadow-blue-50 rounded-[10px] mb-[2.174rem]"
                onClick={() => toggleDisplay(index)}
              >
                {list.label}
                <span>
                  <ChevronDownIcon />
                </span>
              </p>
              <p
                className={`mt-4 ${
                  isBlockDisplayed[index] ? "block" : "hidden"
                } pb-4`}
              >
                {list.answer}
              </p>
            </div>
          </div>
        ))}
      </main>

        <main className="mx-auto container  lg:pb-[6.07rem] pb-4">
            <p className="text-[#14202D] text-base lg:text-4xl font-bold leading-[56px] break-words mb-[2.111rem]">Contact Details</p>
        {Contactdetails.map((contact, index) => (
          <div key={index} className="lg:grid grid-cols-2 gap-4 ">
            
                    <p className="flex items-center gap-4 shadow-lg bg-white shadow-blue-50 rounded-[10px] mb-[2.174rem] py-4 lg:py-[2rem] px-[1.835rem]"><MdEmail className=''/>{contact.email}</p>
                    <p className="flex items-center gap-4 shadow-lg bg-white shadow-blue-50 rounded-[10px] mb-[2.174rem] py-4 lg:py-[2rem] px-[1.835rem]"><span><FaPhone /></span>{contact.phoneNumber}</p>
                    <p className="flex items-center gap-4 shadow-lg bg-white shadow-blue-50 rounded-[10px] mb-[2.174rem] py-4 lg:py-[2rem] px-[1.835rem]"><FaGlobe />{contact.website}</p>
                    <p className="flex items-center gap-4 shadow-lg bg-white shadow-blue-50 rounded-[10px] mb-[2.174rem] py-4 lg:py-[2rem] px-[1.835rem]"><FaLocationPin /> {contact.address}</p>            
          </div>
        ))}
        </main>



    </div>
  );
}
