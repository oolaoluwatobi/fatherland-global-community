import React from "react";

import { Button } from "@/components/ui/button";

// const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ subsets: ["latin"] });

export default function Checkout() {
  return (
    <div className="mx-auto lg:w-full max-w-[97.813rem] ">
      <main className="lg:grid grid-cols-4 gap-6 px-10 h-fit mx-auto max-w-[97.813rem]  w-full ">
        <div className="lg:] mt-[2.5rem] ml7 col-span-3  bg-[#FFFFFF] ">
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
                <p className="font-[500] lg:text-lg text-xs font-sans text-[#686868]">
                </p>
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
                <p className="font-[500] lg:text-lg text-xs font-sans text-[#686868]">
                  ZIP code
                </p>
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
                <Button className="lg:text-lg text-xs">
                  Save And Deliver Here
                </Button>
                <Button className="bg-[#fff] lg:text-lg text-xs text-[#878787]">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md lg:pb-[1.25rem]  col-span-1 mt-12 h-fit bg-white">
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
              <p className="text-[#686868] w-[3.688rem] font-[400]">Discount</p>
              <p className="text-[#686868] font-[400]">-$4.00</p>
            </div>
            <div className="lg:flex gap-24  pt-3 pb-2  px-3">
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
          {/* <Button className="w-[16.938rem] h-[3.25rem] mt-[rem] mx-[1em]">
                Proceed to Checkout
              </Button> */}
        </div>
      </main>
    </div>
  );
}
