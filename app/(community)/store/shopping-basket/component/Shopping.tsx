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
      <div className="flex justify-center items-center mx-auto lg:w-full px4 max-w-[97.813rem] container ">
        <input
          type="text"
          placeholder="Search for anything"
          className="bg-white w-full mxauto lg:py-2 text-gray-200 lg:text-lg py-2 text-xs px-4 mt-10 "
        />
        <BiSearch
          className="bg-black text-[#ffffff] h-8 w-8 lg:h-11 lg
        :w-11 p-0.5 lg:p-1  aspect-square mt-10  "
        />
        <HeartIcon className="text-black w-[1.5rem] h-[1.5rem] lg:ml-4 mt-10" />
        <LiaShoppingCartSolid className=" w-[1.5rem] h-[1.5rem] lg:ml-4 mt-10" />
      </div>
        <div className="lg:flex justify-between px-10 mt-10">
          <p className="text-[#b3b0b0] lg:text-lg  font-[500]  ">
            Shopping Basket
          </p>

          <div className="flex gap-2 mt10">
            <p>Back to results</p>
            <IoIosArrowForward className="mt-1" />
          </div>
        </div>
        <h1 className="lg:text-3xl text-xl px-10 font-[700] mt-[2rem]">
          Shopping Basket
        </h1>
        <div className="lg:grid grid-cols-7 px-10 gap-4 bg-[#F8FAFE] mx-auto max-w-[97.813rem] mt-10 w-full ">
          <div className=" shadow-md col-span-5">
            <div className="lg:flex ">
              <ShoppingBasketTable />
            </div>
          </div>

          <div className="col-span-2 ">
            <div className=" lg:pb-[1.25rem]  mt4 h-fit bg-white  px-[0.938rem]">
              <div className="text-[#686868] lg:text-lg font-[600]">
                <p className="px-2 py-2 w-[1.875]">Price Details</p>
              </div>
              <div className=" shadow-sm border-t border-t-gray-200">
                <div className="lg:flex justify-between  pt-3 pb-2 px-3">
                  <p className="text-[#686868] w-[10rem  font-[400]">
                    Price (2 items)
                  </p>
                  <p className="text-[#686868]  font-[400]">$54.00</p>
                </div>
                <div className="lg:flex justify-between  pt-3 pb-2  px-3">
                  <p className="text-[#686868] w-[3.688rem] font-[400]">
                    Discount
                  </p>
                  <p className="text-[#686868] font-[400]">-$4.00</p>
                </div>
                <div className="lg:flex justify-between  pt-3 pb-2 px-3">
                  <p className="text-[#686868] w-[10rem  font-[400]">
                    Delivery Charges
                  </p>
                  <p className="text-[#686868]  font-[400]">$7.00</p>
                </div>
                <div className="lg:flex justify-between border  px-3 border-gray-200  pt-4 pb-4">
                  <p className="text-[#686868]  font-[600]">Total Amount</p>
                  <p className="text-[#686868] lg:text-lg font-[600]">$57.00</p>
                </div>
                <p className="text-[#FD6906] lg:text-sm px-3 py-3 font-[500]">
                  You will save $4.00 on this order
                </p>
              </div>
              <Button className="px-5 py-7 w-full">Proceed to Checkout</Button>
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
