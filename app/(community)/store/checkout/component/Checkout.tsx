import React from 'react'
import Image from "next/image";
import { BiSearch, BiVector } from "react-icons/bi";
import { HeartIcon } from "@radix-ui/react-icons";
import { LiaShoppingCartSolid } from "react-icons/lia";
export default function Checkout() {
  return (
    <div> <div className="flex justify- items-center">
    <input
      type="text"
      placeholder="Search for anything"
      className="bg-white lg:w-[72rem] w-full mxauto h-[3.9rem] pl5 text-gray-200 text-xl mt-10 shadow-lg pl-4"
    />
    <BiSearch className="bg-black text-[#ffffff] h-[4rem] w-[3rem] mt-10  " />
    <HeartIcon className="text-black bg- h-[3rem] w-[3rem] ml-6 mt-10" />
    <LiaShoppingCartSolid className="h-[3rem] w-[3rem] ml-4 mt-10" />
  </div></div>
  )
}
