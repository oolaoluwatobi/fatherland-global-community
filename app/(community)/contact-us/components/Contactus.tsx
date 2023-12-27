"use client";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Contactus() {
  return (
    <div className=" lg:pb-[6.563rem] pb-8 mx-auto">
      <div className="bg-[#2B3449] mx-auto mb-[3.813rem] lg:pl-[6.188rem]">
        <p className="text-white text-xl lg:text-[40px] font-bold leading-[56px] break-words mx-auto container py-10 lg:py-[6.5rem] text-center lg:text-start">
          Contact Us
        </p>
      </div>
<main className="container">
      <section className="max-w-[50rem] mxauto bg-white border border-[#f4d2bf] rounded-[15px] mx-auto">
        <p className="pt-[2.125rem] lg:pb-[0.938rem] lg:pl-[2.25rem] text-[#14202d] text-center lg:text-start text-base lg:text-xl font-normal leading-5 break-words">
          Make an Inquiry
        </p>
        <p className="pl-[2.25rem] text-[#14202d] lg:text-base text-sm text-center lg:text-start font-normal leading-7 break-words pb-[2.875rem] container">
          Tell us your inquiry by filling the form and we will get back to you
        </p>

        <div className="pl-[2.25rem] lg:flex justify-between lg:pb-[2.688rem] pb-8 gap-4 mx-auto container">
          <div>
            <label htmlFor="" className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
              First Name
            </label>{" "}
            <br />
            <input
              type="text"
              className="w-full lg:w-[20rem] lg:h-[65px] h-12 mb-4 bg-[#f4f4f4 bg-[#f4f4f4] rounded-[6px] lg:mb-0 placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
          </div>
          <div>
            <label htmlFor="" className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
              Last Name
            </label>{" "}
            <br />
            <input
              type="password"
              className="w-full lg:w-[20rem] lg:h-[65px] h-12 bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
          </div>
        </div>

        <main className=" mx-auto container ">
          <label htmlFor="" className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
            Location
          </label>{" "}
          <br />
          <select
            name=""
            id=""
            className="bg-[#f4f4f4] w-full lg:h-[65px] h-12 mb-4 lg:mb-[2.688rem] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
          >
            <option value="" className="px-[2rem"></option>
            <option value="" className="px-[0.999rem">
              Nigeria
            </option>
          </select>
          <label htmlFor="" className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
            Email Address
          </label>{" "}
          <br />
          <input
            type="text"
            className="bg-[#f4f4f4] w-full lg:h-[65px] h-12 mb-4 lg:mb-[2.688rem] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
          />
          <label htmlFor="" className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
            What does your Inquiry relate to?
          </label>{" "}
          <br />
          <select
            name=""
            id=""
            className="w-full bg-[#f4f4f4] h-[65px] px-[0.999rem] mb-[2.688rem] rounded-[6px]"
          >
            <option value="" className="px-[2rem text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
              Community hubs
            </option>
            <option value="" className="px-[0.999rem"></option>
          </select>
          <label htmlFor="" className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
            Comments
          </label>{" "}
          <br />
          <textarea className="bg-[#f4f4f4] w-full rounded-[6px] lg:h-[11rem] py-4 px-4 lg:mb-[4.688rem] mb-8" />
          <div className="flex justify-center lg:pb-[3.188rem] pb-8">
            <Button className="bg-primary hover:bg-primary">Submit</Button>
          </div>
        </main>
      </section>
      </main>
    </div>
  );
}
