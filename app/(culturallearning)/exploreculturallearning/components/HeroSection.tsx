"use client";
import Image from "next/image";
import style from "./styles.module.css";
import ban from "@/public/Rectangle 6hero.png";
import { Button } from "@/components/ui/button";
import React from "react";

export default function HeroSection() {
  return (
    <div className={` ${style.hero}  pb-[5rem] pt-8 lg:pt-0`}>
      <section className="lg:flex justify-between items-center max-w-7xl mx-auto">
        <div className="container mx-auto lg:pl-[8rem lg:pt-[7rem] lg:pl-[6.25rem">
          <p className="text-[#17335A] text-2xl lg:text-[50px] lg:leading-[65px] font-bold break-words max-w-[39.188rem] text-center lg:text-start">
            Hang in to Explore Cultural Learning Class Live
          </p>
          <p className="text-[#17335a] lg:text-xl font-bold lg:leading-7 break-words mb-[1.625rem] text-center lg:text-start">
            Powered by Fatherland Community
          </p>
          <p className="max-w-[33.5rem] text-[#17335a] text-sm lg:text-xl font-medium lg:leading-7 break-words mb-[1.875rem]">
            Browse through recordings of previous live sessions on Africa
            cultures and values from our world-class instructors & tutors.
          </p>
          <p className="text-[#263238] text-sm lg:text-base font-medium lg:leading-6 break-words mb-[1.221rem] lg:w-[28.938rem] text-center lg:text-start">
            Starting at $4.99/month (billed annually) for all classes and
            sessions
          </p>

          <div className="mb-[1.533rem]">
            <label htmlFor="" className="mb-[0.467rem]">
              Email
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="Enter your email address "
              className="pl-[1.063rem] py-[1.125rem] 
                        lg:w-[19.813rem] rounded-[5px] mr-[0.625rem] w-full mb-4 lg:mb-0"
            />
            <Button className="py-[1.75rem] px-8 hover:bg-primary w-full lg:w-[8.5rem] text-sm font-semibold break-words">
              Sign Up
            </Button>
          </div>
          <div className="flex items-center">
            <input type="checkbox" name="" id="" />
            <p className="text-[#263238] text-[13.05px] font-normal leading-6 break-words pl-3 pb-5 lg:pb-0">
              Keep me up to date on class events and new releases.
            </p>
          </div>
        </div>

        <Image
          src={ban}
          alt=""
          className="lg:w-[44.188rem lg:h-[35.188rem] container"
        />
      </section>
    </div>
  );
}
