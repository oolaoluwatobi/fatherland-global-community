import React from 'react'
import { BiSearch, BiVector } from "react-icons/bi";
import { HeartIcon } from "@radix-ui/react-icons";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";

export default function Checkoutlink() {
  return (
    <div>
          <div className="mx-auto lg:w-full max-w-[97.813rem]">
      <div className="flex justify-center items-center mx-auto px-7 lg:w-full max-w-[97.813rem]  ">
        <input
          type="text"
          placeholder="Search for anything"
          className="bg-white w-full mxauto lg:py-2 pl5 text-gray-200 lg:text-xl py-2 text-xs px-4 mt-10 :pl-4"
        />
        <BiSearch className="bg-black text-[#ffffff] h-8 w-8 lg:h-11 lg
        :w-11 p-0.5 lg:p-1  aspect-square mt-10  " />
        <HeartIcon className="text-black  lg:h-[3rem] lg:w-[3rem] w-[2rem] h-[1.5rem] lg:ml-6 mt-10" />
        <LiaShoppingCartSolid className="lg:h-[3rem] lg:w-[3rem] w-[2rem] h-[1.5rem] lg:ml-4 mt-10" />
      </div>

      <div className="flex justify-between px-10 mt-10 border-b-2 py-3">
        <p className="text-[#b3b0b0] text-xs lg:text-lg  font-[500] pl ">
          checkout
        </p>

        <div className="flex gap-2 mr-2 mt10">
          <p className="lg:text-lg text-sm">Back to results</p>
          <IoIosArrowForward className="mt-1" />
        </div>
      </div>
      <p className="lg:text-2xl px-10 text-sm text-[#232323] font-[700]  mt-[2rem] ">
        Checkout
      </p>
    </div>
    </div>
  )
}
