"use client";
import React from "react";
import Image from "next/image";
import { BiPackage, BiSearch, BiVector } from "react-icons/bi";
import {
  HeartIcon,
  HomeIcon,
  MinusIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";
MinusIcon;
import { ShoppingBasket } from "@/lib/data";
import { useState } from "react";

export default function Shopping() {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
    if (count == 0) {
      setCount(0);
    }
  };
  return (
    <div className="max-w-[97.8rem] mx-auto mb-24">
      <div className="mx-auto max-w-[70rem]">
        <div className="flex justify- items-center mt-5">
          <input
            type="text"
            placeholder="Search for anything"
            className="bg-white lg:w-[72rem] w-full mxauto h-[3.9rem] pl5 text-gray-200 text-xl mt-10 shadow-lg pl-4"
          />
          <BiSearch className="bg-black text-[#ffffff] h-[3.5rem] w-[3rem] mt-10  " />
          <HeartIcon className="text-black bg- h-[3rem] w-[3rem] ml-6 mt-10" />
          <LiaShoppingCartSolid className="h-[3rem] w-[3rem] ml-4 mt-10" />
        </div>
        <div className="flex justify-between mt-10">
          <p className="font-rubik pl-2 ">Shopping Basket</p>

          <div className="flex gap-2 mr-2 mt10">
            <p>Back to results</p>
            <IoIosArrowForward className="mt-1" />
          </div>
        </div>
        <h1 className="lg:text-3xl font-[700] mt-[2rem]">Shopping Basket</h1>
        <div>
          <div className=" mt-12 flex gap5 bg-orange-100">
            <p className="py-6 font-[600] text-[#686868] pl-5 lg:text-lg">
              Product
            </p>

            <div className="flex ml-[20rem] gap-[6rem] h-[4.6rem] w-[59.25rem] py-6 bg-orange-100">
              <p className="font-[600] text-[#686868] lg:text-lg">Price</p>
              <p className="font-[600] text-[#686868] lg:text-lg">Quantity</p>
              <p className="font-[600] text-[#686868] lg:text-lg">Subtotal</p>
              <p className="font-[600] text-[#686868] lg:text-lg">Remove</p>
            </div>
          </div>
          <div className="w-[62.25rem] ">
            {ShoppingBasket.map((shopping) => (
              <div className="flex gap-5 shadowlg -mt-4  ml-4">
                <Image
                  src={shopping.image!!}
                  alt=""
                  className="w-[7.5rem] h[9rem] mt-3  pt-3 "
                />

                <div className="pb-5 ml-4 mt-2">
                  <p className="lg:text-lg mt-5 text-[#232323] w-[12.5rem] leading-7 font-[700]">
                    {shopping.product1}
                  </p>
                  <p className="mt-3 font-[600] text-[#686868]">
                    {shopping.size}
                  </p>
                  <p className="mt-2 font-[600]  text-[#686868]">
                    {shopping.color}
                  </p>
                </div>
                <div>
                  <p className="text-[#686868] font-[600] ml-3 pt-7 ">
                    {shopping.price1}
                  </p>
                </div>

                <div className="flex gap-5 ml-14 pt-10">
                  <p>
                    <button className="px-[4px] py-[4px] " onClick={plus}>
                      <PlusIcon />
                    </button>
                    <span className="px-[1.313rem] text-base font-normal leading-5">
                      {count}
                    </span>
                    <button className="px-[4px] py-[4px]" onClick={minus}>
                      <MinusIcon />
                    </button>
                  </p>
                </div>
                <div>
                  <p className="ml-20 mt-10 font-[600] text-[#686868]">
                    {shopping.subtotal}
                  </p>
                </div>
                <div>
                  {" "}
                  <p className="ml-20 mt-10">{shopping.remove}</p>
                </div>
              </div>
            ))}
            </div>
            <div>
              <div>
                <h1>Price Details</h1>
              </div>
            </div>
        </div>

            
          </div>
      </div>
  );
}
