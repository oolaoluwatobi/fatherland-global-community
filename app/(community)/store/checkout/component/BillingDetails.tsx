import React from "react";

import { Button } from "@/components/ui/button";
import CheckoutSummary from "./CheckoutSummary";

// const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ subsets: ["latin"] });

export default function BillingDetails() {
  return (
    
        <div className=" mt[2.5rem] ml7 col-span-3  ">
          <div className="mb-6 pb-10 bg-[#FFFFFF] shadow-md ">
        
            <div className="px-10">
              <div className="w-full lg:mt[1.875rem] mt4 lg:flex lg:gap-[1.875rem]">
                <div className=" w-full">
                  <p className="font-[500] lg:text-lg text-xs font-sans text-[#686868]">
                    First Name
                  </p>
                  <input type="text" className="border py-2 w-full " />
                </div>
                <div className=" w-full ">
                  <p className="font-[500] lg:text-lg text-xs font-sans text-[#686868]">
                    Last Name
                  </p>
                  <input type="text" className="border py-2 w-full " />
                </div>
              </div>
              <div className="mt-[1.563rem] ">
                <p className="font-[500] lg:text-lg text-xs font-sans text-[#686868]">
                  Country / Region
                </p>
                <select
                  name=""
                  id=""
                  className=" w-full border lg:text-lg text-xs py-2 ps-[1.25rem] text-[#666666] font-normal lg:ps-[2.688rem ">
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
                  className=" border w-full py-2 h-12 mb-4 rounded-[6px] text-[#666666] lg:text-xs font-[400] text-xs  ps-[1.875rem]"
                  placeholder="House number and street name"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="street"
                  name="street"
                  className=" border w-full py-2 h-12 mb-4 rounded-[6px] text-[#666666] lg:text-xs font-[400] text-xs  ps-[1.875rem]"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
              </div>

              <div className="w-full bgred-200 lg:flex lg:gap-[1.875rem] bggreen-100">
                <div className="mt-[1.875rem] w-full bgyellow-100">
                  <p className="font-[500] font-sans lg:text-lg text-xs text-[#686868]">
                    Town / City
                  </p>
                  <input type="text" className="border py-2 w-full" />
                </div>

                <div className="mt-[1.875rem] w-full   ">
                  <p className="font-[500] font-sans lg:text-lg text-xs text-[#686868]">
                    State
                  </p>
                  <select
                    name="text"
                    id="state"
                    className="py-2 mt-0.5 w-full border ">
                    <option
                      value="Califonia"
                      className="text-[#686868] text-xs font-[400]">
                      {" "}
                      California
                    </option>
                    <option value="">Europe</option>
                  </select>
                </div>
              </div>

              <div className="w-full bgred-200 mt-[1.875rem] lg:flex lg:gap-[1.875rem]">
                <div className=" w-full">
                  <p className="font-[500] lg:text-lg text-xs font-sans text-[#686868]">
                    ZIP code
                  </p>
                  <input
                    type="text"
                    id="Zip code"
                    name="zip code"
                    className="border py-2 w-full"
                  />
                </div>
                <div className="w-full">
                  <p className="font-[500] lg:text-lg text-xs font-sans text-[#686868]">
                    Contact Number
                  </p>
                  <input
                    type="text"
                    id=" Contact Number"
                    name=" Contact Number"
                    className="border py-2 w-full"
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

              <div className="mt-6">
                <p className="font-[500] lg:text-lg text-xs font-sans text-[#686868] leading-6">
                  Address Type
                </p>
                <div className="flex gap-20 mt-[2rem]">
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
                <div className="mt-8 flex gap-[1.25rem]">
                  <Button className="lg:text-sm text-xs">
                    Save And Deliver Here
                  </Button>
                  <Button className="bg-[#fff] lg:text-lg text-xs text-[#878787]">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* <CheckoutSummary /> */}
        </div>
        
    //   </main>
    // </div>
  );
}
