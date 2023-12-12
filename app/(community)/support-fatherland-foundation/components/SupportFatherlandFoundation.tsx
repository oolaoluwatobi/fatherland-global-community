"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import style from './styles.module.css'

export default function SupportFatherlandFoundation() {
  return (
    <div className="max-w-[90rem] pb-[6.563rem] lg:pb-[28rem] mx-auto">
      <div className="bg-[#2B3449] mx-auto mb-[3.813rem] lg:pl-[6.188rem]">
        <p className="text-white text-xl lg:text-[40px] font-bold leading-[56px] break-words mx-auto container py-10 lg:py-[6.5rem] text-center lg:text-start">
        Support Fatherland Foundation
        </p>
      </div>

      <section className="max-w-[50rem] mxauto bg-white border border-[#f4d2bf] rounded-[15px] containe mx-auto ">
        <p className="pt-[2.125rem] pb-[0.938rem] pl-[2.25rem] text-[#14202d] text-base lg:text-xl font-normal leading-5 break-words">
          Make an Inquiry
        </p>
        <p className="pl-[2.25rem] text-[#14202d] text-sm lg:text-base font-normal leading-7 break-words pb-[2.875rem] container">
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
            Email
          </label>{" "}
          <br />
          <input
            type="text"
            className="bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]"
          />
          <label htmlFor="" className="">
            Enter Amount (min $20)
          </label>{" "}
          <br />
          <input
            type="text"
            className="bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]"
          />
  
          <div className="flex justify-center pb-[3.188rem]">
            <Button className={`hover:bg-inhert ${style.fb1}`}>Donate</Button>
          </div>
        </main>
      </section>
    </div>
  );
}
