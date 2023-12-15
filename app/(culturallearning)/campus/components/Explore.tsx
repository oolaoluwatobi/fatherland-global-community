"use client";
import React from "react";
import Image from "next/image";
import img1 from "@/public/campus/camp10.png";
import img2 from "@/public/campus/camp9.png";
import { FaCircle } from "react-icons/fa6";

export default function Explore() {
  return (
    <div className="max-w-[90rem] bg-white lg:mb-[13.25rem] mb-5">
      <main className="container max-w7xl lg:flex justify-around items-center lg:gap-12 lg:pl-[100px]">
        <div>
          <Image src={img1} alt="" className="mb-[1.188rem]" />
          <Image src={img2} alt="" />
        </div>
        <div>
          <p
            className="lg:w-[36.188rem] text-black lg:text-[40px] text-xl text-center
                 lg:text-start font-bold lg:leading-[65px] break-words mb-[10px] mt-5 lg:mt-0"
          >
            Explore Cultural Learning Campus
          </p>

          <div className="flex">
            <FaCircle className="text-secondary mr-4 lg:mt-1" />
            <p className="mb-[1rem] text-xs font-normal lg:leading-7 break-words lg:w-[36.25rem] ">
              <span className="font-medium">
                Cultural & Traditional Values, Alternative Medicine, Business &
                Economy, Arts & Entertainment, Community & Governance, Beauty &
                Wellness and Food & Healthy Eating.
              </span>
              <span className="">
                Generally, the aim is to both educate and entertain Africans,
                especially, Africans in diaspora with a lot of Africa contents.
              </span>
            </p>
          </div>

          <div className="flex">
            <FaCircle className="text-secondary mr-4 lg:mt-1" />
            <p className="mb-[1rem] text-xs font-normal lg:leading-7 break-words lg:w-[36.25rem] ">
              <span className="font-medium">
                Hands-on learning African rich values that are almost endangered
                due to modernization,
              </span>
              <span className="">
                through which Africans in diaspora will avail to trace their
                Africa origin that the outcome will worth investing on.
              </span>
            </p>
          </div>

          <div className="flex">
            <FaCircle className="text-secondary mr-4 lg:mt-1" />
            <p className="mb-[1rem] text-xs font-normal lg:leading-7 break-words lg:w-[36.25rem] ">
              <span className="font-medium">
                Custom learning pathways tailored to Africa setting in which
                Explore Cultural Learning has taken the responsibility,
              </span>
              <span className="">
                to contribute their quota in this respect to the upliftment of
                dying Africa customs and values.
              </span>
            </p>
          </div>

          <div className="flex">
            <FaCircle className="text-secondary mr-4 lg:mt-1" />
            <p className="mb-[1rem] text-xs font-normal lg:leading-7 break-words lg:w-[36.25rem] ">
              <span className="font-medium">
                Explore Cultural Learning has rich insights to measure and
                upscale the impact of Africa customs and values,
              </span>
              <span className="">
                across every aspect of Africa setting for Africans, especially
                the those in diaspora.
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
