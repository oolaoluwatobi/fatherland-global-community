"use client";
import React from "react";
import styles from "../loginpage/styles.module.css";

export default function Loginform() {
  return (
    <main
      className={`${styles.login_backgrounds} pt-[9rem] pb-[120px container mx-auto pb-[120px]`}
    >
      <div className="border border-[#1ABC94] rounded-[15px] mx-auto bg-white max-w-[51.813rem] lg:h-[41.813rem] mb-[20rem">
        <div>
          <p className="text-[#333333] lg:text-3xl text-xl container font-bold break-words text-center lg:pt-[4.188rem] pt-8 pb-[0.5rem]">
            Login to Fatherland Community
          </p>
          <p className="text-[#333333] lg:text-base text-sm container font-normal leading-6 break-words text-center">
            Welcome back to your Afrocentric community
          </p>
        </div>

        <form
          action=""
          className="lg:mt-[3.125rem] mt-4 md:ms-[2.375rem] mx-[1rem] md:mx-auto"
        >
          <label
            htmlFor=""
            className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words"
          >
            Email Address
          </label>{" "}
          <br />
          <input
            type="text"
            className="bg-[#F7F9FB] outline-0 w-full lg:w-[47.063rem] lg:mb-[2.688rem] mb-4 lg:h-[5rem] h-12 mx-auto placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            placeholder=" example@gmail.com"
          />
          <label
            htmlFor=""
            className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words"
          >
            Password
          </label>{" "}
          <br />
          <input
            type="password"
            className="bg-[#F7F9FB] outline-0 w-full lg:w-[47.063rem] mb-[2.688rem lg:h-[5rem] h-12 mx-auto placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            placeholder=" *************"
          />{" "}
          <br />
          <div className="flex justify-center lg:mt-[7.625rem] mb-4 mt-4">
            <button className="text-white text-base font-semibold break-words bg-[#FF8800] px-[2.375rem] py-[0.6888rem] rounded-[5px] mx-auto">
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
