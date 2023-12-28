"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import style from "./styles.module.css";

export default function SupportFatherlandFoundation() {
  return (
    <div className=" pb-[6.563rem] lg:pb-[28rem] mx-auto">
      <div className="bg-[#2B3449] mx-auto mb-[3.813rem] ">
        <p className="text-white max-w-7xl text-2xl lg:text-[40px] font-bold lg:leading-[56px] break-words mx-auto container py-10 lg:py-[6.5rem] text-center lg:text-start">
          Support Fatherland Foundation
        </p>
      </div>

      <main className="container">
        <section className="max-w-[50rem] bg-white border border-[#f4d2bf] rounded-[15px] mx-auto ">
          <p className="pt-[2.125rem] pb-[0.938rem] pl-[2.25rem] text-[#14202d] text-base lg:text-xl font-normal lg:leading-5 break-words">
            Make an Inquiry
          </p>
          <p className="pl-[2.25rem] text-[#14202d] text-sm lg:text-base font-normal lg:leading-7 break-words pb-[2.875rem] container">
            Tell us your inquiry by filling the form and we will get back to you
          </p>

          <div className="pl-[2.25rem] lg:flex justify-between lg:pb-[2.688rem] pb-4 gap-4 mx-auto container">
            <div>
              <label
                htmlFor=""
                className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words"
              >
                First Name
              </label>{" "}
              <br />
              <input
                type="text"
                className="w-full lg:w-[20rem] lg:h-[65px] h-12 mb-4 bg-[#f4f4f4 bg-[#f4f4f4] rounded-[6px] lg:mb-0 placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words"
              >
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
            <label
              htmlFor=""
              className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words"
            >
              Email
            </label>{" "}
            <br />
            <input
              type="text"
              className="bg-[#f4f4f4] w-full lg:h-[65px] h-12 mb-4 lg:mb-[2.688rem] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
            <label
              htmlFor=""
              className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words"
            >
              Enter Amount (min $20)
            </label>{" "}
            <br />
            <input
              type="text"
              className="bg-[#f4f4f4] w-full lg:h-[65px] h-12 mb-4 lg:mb-[2.688rem] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
            <div className="flex justify-center lg:pb-[3.188rem] pb-8">
              <Button className={`hover:bg-inhert ${style.fb1}`}>Donate</Button>
            </div>
          </main>
        </section>
      </main>
    </div>
  );
}
