"use client";
import React from "react";
import Image from "next/image";
import img from "@/public/Rectangle 244.png";

export default function Breakbarriers() {
  return (
    <div className="mx-auto bg-[#fff3e5] lg:py-[6.25rem] py-5 lg:mb-[5.375rem] mb-5">
      <div className="container lg:flex justify-around gap-4 items-center max-w-7xl">
        <div className="">
          <p className="text-black lg:text-[40px] text-xl font-bold lg:leading-[65px] break-words mb-[1.5rem] text-center lg:text-start">
            Break barriers from reaching out to Africans in Diaspora
          </p>
          <p className="text-[#55525D] text-xs lg:w-[38.375rem] lg:text-[15px] font-normal leading-6 break-words mb-[1.438rem] text-center lg:text-start">
            Explore Cultural Learning Program is an (educational Culturally
            Based Platform) Organization that focuses on connecting potential
            learners about Africa cultures with skilled tutors. Our interest is
            to break barriers from reaching out to Africans in Africa and
            especially reaching to Africans in diaspora. The norm of formal
            education by providing tutors for basically African cultural
            learning in which Explore Cultural Learning has everything it takes
            to reach out to all Africans worldwide. The learners from the age of
            4 to adulthood can easily signed up online for sessions that will
            take place online & video at the learners’ comfortable home and
            time.{" "}
          </p>
        </div>
        <Image src={img} alt="" />
      </div>
    </div>
  );
}
