import React from "react";
// import Image from "next/image";
import { BiSearch, BiVector } from "react-icons/bi";
import { HeartIcon } from "@radix-ui/react-icons";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";
// import { Poppins, Inter } from "next/font/google";
import { MdLocalPolice, MdOutlineArrowDropDown } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BillingDetails from "./BillingDetails";
import OrderSummary from "./OrderSummary";

export default function CheckoutSearch() {
  return (
    <div className="mx-auto lg:w-full max-w-[97.813rem]  ">
      <div className="flex justify-center items-center mx-auto px-7 lg:w-full max-w-[97.813rem]  ">
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

      <div className="lg:grid grid-cols-4 gap-6 px-10 h-fit mx-auto max-w-[97.813rem]   w-full  bg-red-50 ">
        <div className="col-span-3 w-full">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="bg-[#FF88001A] flex gap-2  py-[1rem] items-baseline w-full">
                  <p className="bg-orange-600 rounded-full px-2  aspect-square flex place-items-center ml-[1.5rem] lg:text-center text-[#fff] font-[600]">
                    1
                  </p>
                  <p className=" font-[600] text-[#000] lg:text-xl text-sm">
                    Billing Details
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <BillingDetails />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="bg-[#FF88001A] flex gap-2  py-[1rem] items-baseline w-full">
                  <p className="bg-orange-600 rounded-full px-2  aspect-square flex place-items-center ml-[1.5rem] lg:text-center text-[#fff] font-[600]">
                    2
                  </p>
                  <p className=" font-[600] text-[#000] lg:text-xl text-sm">
                    Order Summary
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <OrderSummary />
                <OrderSummary />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="bg-[#fff] flex gap-2  py-[1rem] items-baseline w-full">
            <p className="bg-[#e6e6e6] rounded-full px-2  aspect-square flex place-items-center ml-[1.5rem] lg:text-center text-[#878787] font-[600]">
              3
            </p>
            <p className=" font-[600] text-[#878787] lg:text-xl text-sm">
              Payment Options
            </p>
          </div>
        </div>

        <div className="col-span-1">
            <div className=" lg:pb-[1.25rem]  col-span-1 mt-4 h-fit bg-white  px-[0.938rem]">
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
              {/* <Button className="px-5 py-7 w-full">Proceed to Checkout</Button> */}
            </div>

            <div className="flex mt-4 px-5 space-x-2">
              <MdLocalPolice className="w-6 h-6 mt1" />
              <p className="text-[10px]">
                Safe and Secure Payments. Easy returns. 100% Authentic products.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
}
