"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BiPackage, BiSearch, BiVector } from "react-icons/bi";
import { HeartIcon, MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";
import { MdLocalPolice } from "react-icons/md";
import { ShoppingBasket } from "@/lib/data";
import { useState } from "react";

import { MdOutlineLocalShipping } from "react-icons/md";
import Agent from "@/public/support_agent.png";
import packagee from "@/public/package.png";

import creditstore from "@/public/credit_score.png";
import ShoppingBasketTable from "./ShoppingBasketTable";

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
    <div className="max-w[97.813rem] wfull mx-auto lg:mb36 sm:mb-36">
      <div className="mx-auto">
        <div className="flex justify-center items-center mx-auto lg:w-full px-4 max-w-[97.813rem]  ">
          <input
            type="text"
            placeholder="Search for anything"
            className="bg-white w-full mxauto lg:py-2 pl5 text-gray-200 lg:text-xl py-2 text-xs px-4 mt-10 :pl-4"
          />
          <BiSearch
            className="bg-black text-[#ffffff] h-8 w-8 lg:h-11 lg
        :w-11 p-0.5 lg:p-1  aspect-square mt-10  "
          />
          <HeartIcon className="text-black  lg:h-[3rem] lg:w-[3rem] w-[2rem] h-[1.5rem] lg:ml-6 mt-10" />
          <LiaShoppingCartSolid className="lg:h-[3rem] lg:w-[3rem] w-[2rem] h-[1.5rem] lg:ml-4 mt-10" />
        </div>
        <div className="lg:flex justify-between px-10 mt-10">
          <p className="text-[#b3b0b0] lg:text-lg  font-[500]  ">
            Shopping Basket
          </p>

          <div className="flex gap-2 mr-2 mt10">
            <p>Back to results</p>
            <IoIosArrowForward className="mt-1" />
          </div>
        </div>
        <h1 className="lg:text-3xl text-xl px-10 font-[700] mt-[2rem]">
          Shopping Basket
        </h1>
        <div className="lg:grid grid-cols-4 px-10 gap-6 mx-auto max-w-[97.813rem]  w-full">
          <div className="  mt-12  shadow-md col-span-3">
            <div className="lg:flex gap5 bg-orange100 py-2">
           
              
              <ShoppingBasketTable />
            </div>

            <div className="w-[59.25rem bg-red-200 w-full">
              {/* {ShoppingBasket.map((shopping,i) => (
                <div key={i} className="lg:flex gap-5 shadowlg -mt-4  ml-4">
                  <Image
                    src={shopping.image!!}
                    alt=""
                    className="w-[7.5rem] h[9rem] mt-3  pt-3 object-cover "
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

                  <div className="lg:flex gap-5 ml-14 pt-10">
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
              ))} */}
              
            </div>
          </div>
          
        </div>
        <div className="mt-24 ">
          <div className="flex gap-10">
            <div className="flex gap-4 ml-20">
              <MdOutlineLocalShipping className="h-[2.75rem] w-[3rem]" />
              <div>
                {" "}
                <p>Free Delivery</p>
                <p>From $99.00</p>
              </div>
            </div>
            <div className="flex gap-4 ml-20">
              <Image src={packagee} alt="" className="h-[2.75rem] w-[3rem]" />
              <div>
                {" "}
                <p>
                  Easy Return & <br />
                  Exchange
                </p>
              </div>
            </div>

            <div className="flex gap-4 ml-20">
              <Image
                src={creditstore}
                alt=""
                className="h-[2.75rem] w-[3rem]"
              />
              <div>
                {" "}
                <p>
                  Secure Payment <br />
                  Method
                </p>
              </div>
            </div>
            <div className="flex gap-4 ml-20">
              <Image src={Agent} alt="" className="h-[2.75rem] w-[3rem]" />
              <div>
                {" "}
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
