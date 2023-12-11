"use client";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Contactus() {
  return (
    <div className="max-w-[90rem] pb-[6.563rem] mx-auto">
      <div className="bg-[#2B3449] mx-auto mb-[3.813rem] lg:pl-[6.188rem]">
        <p className="text-white text-xl lg:text-[40px] font-bold leading-[56px] break-words mx-auto container py-10 lg:py-[6.5rem] text-center lg:text-start">
          Contact Us
        </p>
      </div>

      <section className="max-w-[50rem] mxauto bg-white border border-[#f4d2bf] rounded-[15px] containe mx-auto">
        <p className="pt-[2.125rem] pb-[0.938rem] pl-[2.25rem] text-[#14202d] text-base lg:text-xl font-normal leading-5 break-words">
          Make an Inquiry
        </p>
        <p className="pl-[2.25rem] text-[#14202d] lg:text-base font-normal leading-7 break-words pb-[2.875rem] container">
          Tell us your inquiry by filling the form and we will get back to you
        </p>

        <div className="pl-[2.25rem] lg:flex justify-between pb-[2.688rem] gap-4 mx-auto container">
          <div>
            <label htmlFor="" className="">
              First Name
            </label>{" "}
            <br />
            <input
              type="text"
              className="w-full lg:w-[22rem] h-[65px] bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] mb-[2.688rem] lg:mb-0"
            />
          </div>
          <div>
            <label htmlFor="" className="">
              Last Name
            </label>{" "}
            <br />
            <input
              type="password"
              className=" w-full lg:w-[22rem] h-[65px] bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px]"
            />
          </div>
        </div>

        <main className=" mx-auto container ">
          <label htmlFor="" className="">
            Location
          </label>{" "}
          <br />
          <select
            name=""
            id=""
            className="w-full bg-[#f4f4f4] h-[65px] px-[0.999rem] mb-[2.688rem] rounded-[6px]"
          >
            <option value="" className="px-[2rem"></option>
            <option value="" className="px-[0.999rem">
              Nigeria
            </option>
          </select>
          <label htmlFor="" className="">
            Email Address
          </label>{" "}
          <br />
          <input
            type="text"
            className="bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]"
          />
          <label htmlFor="" className="">
            What does your Inquiry relate to?
          </label>{" "}
          <br />
          <select
            name=""
            id=""
            className="w-full bg-[#f4f4f4] h-[65px] px-[0.999rem] mb-[2.688rem] rounded-[6px]"
          >
            <option value="" className="px-[2rem">
              Community hubs
            </option>
            <option value="" className="px-[0.999rem"></option>
          </select>
          <label htmlFor="" className="">
            Comments
          </label>{" "}
          <br />
          <textarea className="bg-[#f4f4f4] w-full rounded-[6px] h-[11rem] py-4 px-4 mb-[4.688rem]" />
          <div className="flex justify-center pb-[3.188rem]">
            <Button className="bg-primary hover:bg-primary">Submit</Button>
          </div>
        </main>
      </section>
    </div>
  );
}
