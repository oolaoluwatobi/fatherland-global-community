import React from "react";
import Image from "next/image";
import { BiSearch, BiVector } from "react-icons/bi";
import { HeartIcon } from "@radix-ui/react-icons";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";
import { Poppins, Inter } from "next/font/google";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ subsets: ["latin"] });

export default function Checkout() {
  return (
    <div className="mx-auto lg:w-full max-w-[97.813rem] ">
      <div className="flex justify-center items-center mx-auto lg:w-full px-4 max-w-[97.813rem]  ">
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

      <div className="flex justify-between mt-10 border-b-2 py-3">
        <p className="text-[#b3b0b0] text-xs lg:text-lg pl-7 font-[500] pl ">
          checkout
        </p>

        <div className="flex gap-2 mr-2 mt10">
          <p className="lg:text-lg text-sm">Back to results</p>
          <IoIosArrowForward className="mt-1" />
        </div>
      </div>
      <p className="lg:text-2xl text-sm text-[#232323] font-[700] pl-7 mt-[2rem] ">
        Checkout
      </p>
      <main>
        <div className="lg:w-[59.25rem] mt-[2.5rem] ml-7   bg-[#FFFFFF]">
          <div className="bg-[#FF88001A] flex gap-2  py-[1rem] items-baseline">
            <p className="bg-orange-600 rounded-full px-2  aspect-square flex place-items-center ml-[1.5rem] lg:text-center text-[#fff] font-[600]">
              1
            </p>
            <p className=" font-[600] text-[#000] lg:text-xl text-sm">
              Billing Details
            </p>
          </div>
          <div className="px-10">
            <div className="w-full  lg:flex lg:gap-[1.875rem]">
              <div className="mt-[1.875rem] w-full">
                <p className="font-[500] lg:text-lg text-xs font-sans text-[#686868]">
                  First Name
                </p>
                <input type="text" className="border-2 py-2 w-full" />
              </div>
              <div className="lg:mt-[1.875rem] lg:text-lg text-xs mt-5 md:ml-0 w-full">
                <p className="  font-[500] font-sans text-[#686868]">
                  Last Name
                </p>
                <input
                  type="text"
                  className="border-2 py-2 w-full"
                  placeholder=""
                />
              </div>
            </div>
            <div className="mt-[1.563rem] ">
              <p className="font-[500] lg:text-lg text-xs font-sans text-[#686868]">
                Country / Region
              </p>
              <select
                name=""
                id=""
                className=" w-full border-2 lg:text-lg text-xs py-2 ps-[1.25rem] text-[#666666] font-normal lg:ps-[2.688rem ">
                <option value="" className=" font-[400] text-[#686868]">
                  United States (US)
                </option>
                <option value="" className="">
                  Nigeria
                </option>
              </select>
            </div>
            <div className="mt-[1.563rem] ">
              <label
                htmlFor="street"
                className="lg:text-lg text-xs font-[500] font-sans text-[#686868] leading-6 break-words">
                Street Address
              </label>{" "}
              <br />
              <input
                type="text"
                id="street"
                name="street"
                className=" border-2 w-full py-2 h-12 mb-4 rounded-[6px] text-[#666666] lg:text-xs font-[400] text-xs  ps-[1.875rem]"
                placeholder="House number and street name"
              />
            </div>
            <div>
              <input
                type="text"
                id="street"
                name="street"
                className=" border-2 w-full py-2 h-12 mb-4 rounded-[6px] text-[#666666] lg:text-xs font-[400] text-xs  ps-[1.875rem]"
                placeholder="Apartment, suite, unit, etc. (optional)"
              />
            </div>

            <div className="w-full bgred-200 lg:flex lg:gap-[1.875rem]">
              <div className="mt-[1.875rem] w-full">
                <p className="font-[500] font-sans lg:text-lg text-xs text-[#686868]">
                  Town / City
                </p>
                <input type="text" className="border-2 py-2 w-full" />
              </div>
              <div className="lg:mt-[1.875rem] mt-5 md:ml-0 w-full">
                <p className="font-[500] lg:text-lg text-xs font-sans text-[#686868]">ZIP code</p>
                <p className="  font-[500] font-sans text-[#686868]">State</p>
                <select
                  name="text"
                  id=" state"
                  className=" w-full border-2  lg:text-lg text-xs py-2 ps-[1.25rem] text-[#666666]  font-normal lg:ps-[2.688rem ">
                  <option value="" className=" font-[400] text-[#686868]">
                    California
                  </option>
                  <option value="" className=""></option>
                </select>
              </div>
            </div>

            <div className="w-full bgred-200 lg:flex lg:gap-[1.875rem]">
              <div className="mt-[1.875rem] w-full">
                <p className="font-[500] lg:text-lg text-xs font-sans text-[#686868]">ZIP code</p>
                <input
                  type="text"
                  id="Zip code"
                  name="zip code"
                  className="border-2 py-2 w-full"
                />
              </div>
              <div className="lg:mt-[1.875rem] mt-5 md:ml-0 w-full">
                <p className="  font-[500] lg:text-lg  text-xs font-sans text-[#686868]">
                  Contact Number
                </p>
                <input
                  type="text"
                  id="contact number"
                  name="contact number"
                  className="border-2 py-2 w-full"
                  placeholder=""
                />
              </div>
            </div>
            <div className="mt-[1.563rem]">
              <label
                htmlFor=""
                className=" font-[500] lg:text-lg text-xs font-sans text-[#686868] leading-6 break-words">
                Email Address
              </label>{" "}
              <br />
              <input
                type="text"
                className=" border-2 py-2 w-full font-normal lg:text-base text-xs "
              />
            </div>

            <div className="mt[1.563rem]">
              <p className="font-[500] lg:text-lg text-xs font-sans text-[#686868] leading-6">
                Address Type
              </p>
              <div className="flex gap[2.75rem] mt-[2rem]">
                <div className="flex items-center space-x-2 ">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="form-checkbx text-green-500 transition duration-150 ease-in-out"
                  />
                  <label
                    htmlFor="myCheckbox"
                    className="font-sans lg:text-lg text-x font-[500] text-[#B3B3B3] ">
                    Home (All day delivery)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="form-checkbox rounded-full text-green-500 transition duration-150 ease-in-out"
                  />
                  <label
                    htmlFor="myCheckbox"
                    className="font-sans font-[500] lg:text-lg text-xs text-[#B3B3B3] ">
                    Work (Delivery between 10 AM - 5 PM)
                  </label>
                </div>
              </div>
              <div className="mt-[3.75rem] flex gap-[1.25rem]">
                <Button className="lg:text-lg text-xs">Save And Deliver Here</Button>
                <Button className="bg-[#fff] lg:text-lg text-xs text-[#878787]">Cancel</Button>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
