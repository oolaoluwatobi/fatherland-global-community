"use client";

import React from "react";
import Image from "next/image";
import no1 from "@/public/no1.png";
import card1 from "@/public/card1.png";
import card2 from "@/public/card2.png";

export default function Join() {
  return (
    <div className="mx-auto lg:pt-[5.563rem] pt-12 max-w-7xl">
      <div className="bg-red300 mx-auto lg:mb-[3.813rem] mb-12">
        <p className="text-[#14202D] lg:text-4xl text-2xl font-bold lg:leading-[56px] break-words text-center lg:pb-[1.313rem] pb-4">
          Join Fatherland Community
        </p>
        <p className="text-[#14202D] lg:text-xl text-base font-normal leading-7 break-words text-center container">
          We will use the information entered here for your membership card
        </p>
      </div>

      <section className="lg:flex justify-around max-w-7xl mx-auto container">
        <main className="bg-white bg-red500 rounded-[15px] px2 max-w-[50rem mxauto mb-12">
          <div className="flex items-center py-[2.044rem] px-[2.25rem]">
            <Image src={no1} alt="" className="" />
            <p className="text-[#14202D] lg:text-2xl text-base font-normal break-words pl-7">
              Create Your Account
            </p>
          </div>

          <form action="" className="mxauto px-[2.25rem] pb-[2.914rem]">
            <div className="lg:flex justify-around lg:pb-[2.688rem] pb-4 gap-4 mx-auto">
              <div>
                <label htmlFor="" className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
                  First Name
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="w-full lg:w-[20rem] lg:h-[65px] h-12 mb-4 bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] lg:mb-0 placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
                />
              </div>
              <div>
                <label htmlFor="" className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
                  Last Name
                </label>{" "}
                <br />
                <input
                  type="text"
                  className=" w-full lg:w-[20rem] lg:h-[65px] h-12 bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
                />
              </div>
            </div>
            <label htmlFor="" className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words ">
              Email Address
            </label>{" "}
            <br />
            <input
              type="text"
              className="bg-[#f4f4f4] w-full lg:h-[65px] h-12 mb-4 lg:mb-[2.688rem] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
            <label htmlFor="" className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
              Phone Number
            </label>{" "}
            <br />
            <input
              type="text"
              className="bg-[#f4f4f4] w-full lg:h-[65px] h-12 mb-4 lg:mb-[2.688rem] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
            <label htmlFor="" className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
              Date of Birth
            </label>{" "}
            <br />
            <input
              type="text"
              className="bg-[#f4f4f4] w-full lg:h-[65px] h-12 mb-4 lg:mb-[2.688rem] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
            <div className="lg:flex justify-between mx-auto gap-4 pb-[2.688rem]">
              <div>
                <label htmlFor="" className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
                  Country
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="w-full lg:w-[20rem] lg:h-[65px] h-12 bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px]  mb-4 lg:mb-0 placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
                />
              </div>
              <div>
                <label htmlFor="" className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
                  CIty/State/Province
                </label>{" "}
                <br />
                <input
                  type="text"
                  className=" w-full lg:w-[20rem] lg:h-[65px] h-12 bg-[#f4f4f4 bg-[#f4f4f4] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
                />
              </div>
            </div>
            <label htmlFor="" className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
              Select preferred community hub
            </label>{" "}
            <br />
            <select
              name=""
              id=""
              className="w-full bg-[#f4f4f4] lg:h-[65px] h-12 mb-4 lg:mb-[2.688rem] rounded-[6px]"
            >
              <option value="" className="px-[2rem text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
                Fatherland Lagos
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
            <label htmlFor="" className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
              Password
            </label>{" "}
            <br />
            <input
              type="Password"
              className="bg-[#f4f4f4] w-full lg:h-[65px] h-12 mb-4 lg:mb-[2.688rem] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
            <label htmlFor="" className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
              Confirm Password
            </label>{" "}
            <br />
            <input
              type="password"
              className="bg-[#f4f4f4] w-full lg:h-[65px] mb-4 h-12 rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
            <div className="flex justify-center">
              <button className=" py-[0.646rem] px-[1.375rem] rounded-[5px] bg-[#FF8800] text-white text-base font-semibold break-words mx-auto">
                Continue
              </button>
            </div>
          </form>
        </main>

        <div className="containe mx-auto text-center">
          <p className=" pb-[3px] text-[#14202D] text-xl font-normal leading-7 text-center">
            Your Membership Card
          </p>
          <p className="text-[#14202D] lg:text-sm text-xs font-normal leading-7 w-full lg:w-[26.5rem] lg:mb-[3.625rem] mb-4 text-center">
            Your membership card will look like this. It&apos;s important that
            the name on your membership card is correct, as they will be
            required to gain access to community hubs in your location
          </p>

          <Image
            src={card1}
            alt=""
            className="lg:mb-[2.5rem] mb-4 lg:w-[357px] mx-auto"
          />
          <Image
            src={card2}
            alt=""
            className="lg:w-[357px] mb-[2.5rem] mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
