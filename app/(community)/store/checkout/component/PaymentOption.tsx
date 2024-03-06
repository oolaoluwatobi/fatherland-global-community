"use client"
import Image from "next/image";
import React, { useState } from "react";

export default function PaymentOption() {
  const [isChecked, setIschecked] = useState(false);
  const [isCheckedd,setIscheckedd] =useState(false);


  const handleClick =() =>{
    setIschecked(!isChecked)
  }
  const handleClick1 =() =>{
    setIscheckedd(!isCheckedd)
  }
  return (
      <div className="lg:flex mr-4 bg-white items-center px-10 rounded-xl  gap-8 py-5">
        <div className="inline-flex items-center gap-4">
          <input
            type="checkbox"
            id="checkbox"
            checked={isChecked}
            onChange={() => {}}
            className={`h-4 w-4 rounded-full`}
          />
          <button
            onClick={handleClick}
            className="text-[17px] font-normal gap-4 lg:leading-4 text-[#000000] text-start flex items-center">
            {" "}
            <Image src="/paypal.svg" alt="logo" width={30} height={30} />{" "}
            <span >
              <span className="font-700  text-[#000000]  "> Pay with Paypal </span> <br />{" "}
              <span className="text-xs font-norma lg:leading-2 text-[#000000]">
                Available in all country
              </span>
            </span>
          </button>
        </div>

        <div className="inline-flex items-center gap-4">
          <input
            type="checkbox"
            id="checkbox"
            checked={isCheckedd}
            onChange={() => {}}
            className={`h-4 w-4 rounded-full `}
          />
          <button
            onClick={handleClick1}
            className="text-[17px] gap-4 font-normal lg:leading-4 text-[#000000] text-start flex items-center">
            {" "}
            <Image src="/paystack.svg" alt="logo" width={30} height={30} />{" "}
            <span>
              Pay with Paystack <br />{" "}
              <span className="text-xs font-normal lg:leading-3 text-[#000000]">
                Available in Nigeria
              </span>
            </span>
          </button>
        </div>
      </div>
  );
}
