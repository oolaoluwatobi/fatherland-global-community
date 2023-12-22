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
import { StoreRelate } from "@/lib/data";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import Agent from "@/public/support_agent.png";
import packagee from "@/public/package.png";
import style from "./styles.module.css";
import creditstore from "@/public/credit_score.png";
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

  const storehomes = () => {
    const discover = document.querySelector("#store");
    discover?.scrollBy({ left: -discover.clientWidth, behavior: "smooth" });
  };
  const storehomess = () => {
    const discover = document.querySelector("#store");
    discover?.scrollBy({ left: discover.clientWidth, behavior: "smooth" });
  };
  return (
    <div className="max-w-[97.813rem] w-full mx-auto lg:mb36 sm:mb-36">
      <div className="mx-auto">
        <div className="lg:flex justify-center items-center mx-auto w-full max-w-[97.813rem]  ">
          <input
            type="text"
            placeholder="Search for anything"
            className="bg-[#fff]  w-full mxauto h-[3.9rem] pl5 text-gray-200 text-xl mt-10  pl-4"
          />
          <BiSearch className="bg-black text-[#ffffff] h-[4rem] w-[3rem] mt-10  " />
          <HeartIcon className="text-black bg- h-[3rem] w-[3rem] ml-6 mt-10" />
          <LiaShoppingCartSolid className="h-[3rem] w-[3rem] ml-4 mt-10" />
        </div>
        <div className="lg:flex justify-between mt-10">
          <p className="text-[#b3b0b0] lg:text-lg ml-2 font-[500] pl-2 ">Shopping Basket</p>

          <div className="flex gap-2 mr-2 mt10">
            <p>Back to results</p>
            <IoIosArrowForward className="mt-1" />
          </div>
        </div>
        <h1 className="lg:text-3xl ml-4 font-[700] mt-[2rem]">Shopping Basket</h1>
        <div className="lg:flex gap-[1.25rem] ml-4 mx-auto max-w-[97.813rem]  w-full">
          <div className="  mt-12  shadow-lg">
            <div className="lg:flex gap5 bg-orange-100">
              <p className="py-6 font-[600] text-[#686868] pl-5 lg:text-lg">
                Product
              </p>

              <div className="lg:flex ml-[20rem] gap-[6rem] h-[4.6rem] w-[52.25rem] py-6 bg-orange-100">
                <p className="font-[600] text-[#686868] lg:text-lg">Price</p>
                <p className="font-[600] text-[#686868] lg:text-lg">Quantity</p>
                <p className="font-[600] text-[#686868] lg:text-lg">Subtotal</p>
                <p className="font-[600] text-[#686868] lg:text-lg">Remove</p>
              </div>
            </div>

            <div className="w-[59.25rem]  ">
              {ShoppingBasket.map((shopping,i) => (
                <div key={i} className="lg:flex gap-5 shadowlg -mt-4  ml-4">
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
              ))}
            </div>
          </div>
          <div>
            <div className="shadow-lg lg:pb-[1.25rem] mt-12 h-[22.938rem] lg:w-[18.875rem]">
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
                <div className="lg:flex gap-[8rem]  pt-3 pb-2  px-3">
                  <p className="text-[#686868]  font-[400]">Delivery Charges</p>
                  <p className="text-[#686868] lg:text-lg font-[400]">$7.00</p>
                </div>
                <div className="lg:flex justify-between border  px-3 border-gray-200  pt-4 pb-4">
                  <p className="text-[#686868]  font-[600]">Total Amount</p>
                  <p className="text-[#686868] lg:text-lg font-[600]">$57.00</p>
                </div>
                <p className="text-[#FD6906] lg:text-sm px-3 py-3 font-[500]">
                  You will save $4.00 on this order
                </p>
              </div>
              <Button className="w-[16.938rem] h-[3.25rem] mt-[rem] mx-[1em]">
                Proceed to Checkout
              </Button>
            </div>
            <div className=" px-3 py-4 lg:flex gap-2">
              <MdLocalPolice className="w-[1.563rem] h-[1.563rem] mt1" />
              <p className="lg:text-sm  ">
                {" "}
                Safe and Secure Payments.Easy returns.100%  Authentic
                products.
              </p>
            </div>
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
            <Image src={creditstore} alt="" className="h-[2.75rem] w-[3rem]" />
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

      <div className="mt-24 ml-4">
        <div>
          <p className=" text-2xl font-[700]">Related Products</p>

          <div className=" relative mt-5 shadow-xl shadow-blue-50">
            <button className="absolute left-2 top-0 bottom-0 my-auto">
              <BsArrowLeftSquareFill
                onClick={() => storehomes()}
                className="w-12 h-12 text-primary"
              />
            </button>
            <button className="absolute right-12 top-0 bottom-0 my-auto">
              <BsArrowRightSquareFill
                className="w-12 h-12 text-primary "
                onClick={storehomess}
              />
            </button>

            <aside id="store" className="flex gap-6 overflow-x-auto no-scroll ">
              {StoreRelate.map((storesrelate ,i) => (
                <div
                  className="shadow-lg min-w-[17.188rem] h-auto"
                  key={storesrelate.id}>
                  <Image
                    src={storesrelate.image}
                    alt=""
                    className="w-[17.188rem] h-[16.4rem] mt-4 bg-"
                  />
                  <div className="p-5 mt-4  ">
                    <p className="font-[800] text-lg">{storesrelate.title}</p>
                    <p className="font-normal text-[#686868] pt-2">
                      {storesrelate.description}
                    </p>

                    <div className="lg:flex justify-between ">
                      <div className="text-[#050A1E] font-[800] mb-5 pt-4 ">
                        {storesrelate.price}
                        <p className="font-normal">{storesrelate.price1}</p>
                      </div>
                      <div>
                        <Image src={storesrelate.image2} alt="" className="" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </div>


    </div>
    
  );
}
