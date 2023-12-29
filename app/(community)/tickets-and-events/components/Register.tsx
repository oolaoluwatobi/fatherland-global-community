"use client";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Register() {
  return (
    <div className="bg-[#282828] py-20 lg:mt-[6.063rem] mt-8">
      <div className=" text-white my20 px8 max-w-7xl container mx-auto">
        <h3 className="text-center lg:text-4xl text-2xl mx-auto px10 lg:w-[58rem]">
          Register below for latest news and event updates from Fatherland.
        </h3>
        <form
          action=""
          className="mt-10 pb-10 bg-white rounded text-[#282828] text-lg font-[500] lg:grid lg:grid-cols2 px-[2.25rem] py-8 gap-x-4 gap-y-6"
        >
          <div>
            <label
              htmlFor=""
              className="font-[600] text-[#282828] lg:text-base text-sm fontnormal leading-6 break-words"
            >
              First Name
            </label>{" "}
            <br />
            <input
              type="text"
              className="w-full lg:w-[35.25rem] lg:h-[65px] h-12 mb-4 bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] lg:mb-0 placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-[600] text-[#282828] lg:text-base text-sm fontnormal leading-6 break-words"
            >
              Last Name
            </label>{" "}
            <br />
            <input
              type="text"
              className=" w-full lg:w-[35.25rem] lg:h-[65px] h-12 bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-[600] text-[#282828] lg:text-base text-sm fontnormal leading-6 break-words"
            >
              Email Address
            </label>{" "}
            <br />
            <input
              type="text"
              className="w-full lg:w-[35.25rem] lg:h-[65px] h-12 mb-4 bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] lg:mb-0 placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-[600] text-[#282828] lg:text-base text-sm fontnormal leading-6 break-words"
            >
              Phone Number
            </label>{" "}
            <br />
            <input
              type="text"
              className=" w-full lg:w-[35.25rem] lg:h-[65px] h-12 bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-[600] text-[#282828] lg:text-base text-sm fontnormal leading-6 break-words"
            >
              Your Company
            </label>{" "}
            <br />
            <input
              type="text"
              className="w-full lg:w-[35.25rem] lg:h-[65px] h-12 mb-4 bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] lg:mb-0 placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-[600] text-[#282828] lg:text-base text-sm fontnormal leading-6 break-words"
            >
              Your Position
            </label>{" "}
            <br />
            <input
              type="text"
              className=" w-full lg:w-[35.25rem] lg:h-[65px] h-12 bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-[600] text-[#282828] lg:text-base text-sm fontnormal leading-6 break-words"
            >
              Signing Up as
            </label>{" "}
            <br />
            <select
              name=""
              id=""
              className="w-full lg:ps-[2.688rem] ps-4 bg-[#f4f4f4] lg:h-[65px] h-12 mb4 lgmb-[2.688rem] rounded-[6px]"
            >
              <option
                value=""
                className="px-[2rem font-[600] text-[#282828] lg:text-base text-sm fontnormal leading-6 break-words"
              >
                Individual
              </option>
              <option value="" className="px-[0.999rem">
                2
              </option>
              <option value="" className="px-[0.999rem">
                3
              </option>
              <option value="" className="px-[0.999rem">
                4
              </option>
              <option value="" className="px-[0.999rem">
                5
              </option>
            </select>
          </div>
          <div>
            <label
              htmlFor=""
              className="font-[600] text-[#282828] lg:text-base text-sm fontnormal leading-6 break-words"
            >
              City
            </label>{" "}
            <br />
            <input
              type="text"
              className=" w-full lg:w-[35.25rem] lg:h-[65px] h-12 bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-[600] text-[#282828] lg:text-base text-sm fontnormal leading-6 break-words"
            >
              Country
            </label>{" "}
            <br />
            <input
              type="text"
              className="w-full lg:w-[35.25rem] lg:h-[65px] h-12 mb-4 bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] lg:mb-0 placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-[600] text-[#282828] lg:text-base text-sm fontnormal leading-6 break-words"
            >
              Province
            </label>{" "}
            <br />
            <input
              type="text"
              className=" w-full lg:w-[35.25rem] lg:h-[65px] h-12 bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
          </div>

          <div className="flex flex-col col-span-2 space-y-2">
            <label
              htmlFor="information"
              className="font-[600] text-[#282828] lg:text-base text-sm leading-6 break-words"
            >
              Any Other Information that you would like to share with us?
            </label>

            <textarea
              id="information"
              name="information"
              placeholder=""
              className="px-4 py-6 bg-[#D9D9D94A] rounded-lg"
              required
            />
            <div className="flex justify-center lg:pt-[3.813rem] pt-8">
              <Button className="bg-secondary hover:bg-secondary">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
