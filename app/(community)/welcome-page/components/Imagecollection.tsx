"use client";
import React from "react";
import Image from "next/image";
import img1 from "@/public/campus/wel 1.png";
import img2 from "@/public/campus/wel 2.png";
import img3 from "@/public/campus/wel 3.png";
import img4 from "@/public/welcome5.png";
import { Button } from "@/components/ui/button";

export default function Imagecollection() {
  return (
    <div className="mx-auto container max-w-8xl">
      <div className="lg:flex justify-between gap-[3.063rem]">
        <Image
          src={img1}
          alt=""
          className="lg:mb-[4.813rem] mb-4 lg:w-[609px] lg:h-[367px]"
        />
        <main className="bg-[#FFF4E6] lg:mb-[8rem] mb-4 rounded-[10px] lg:w-[605px] lg:h-[367px] lg:ps-[1.625rem] p-8 lg:pt-[2.125rem]">
          <p className="text-[#14202D] lg:text-[32px] text-xl font-bold lg:leading-[35px] break-words mb-[1.375rem]">
            Induction- Get Started and Learn about the Community
          </p>
          <p className="lg:w-[517px text-[#14202d] lg:text-xl text-sm font-normal lg:leading-7 break-words">
            Welcome to the Fatherland Community! Begin by understanding our
            vision, connecting with others, and actively participating in
            events. Educate yourself, contribute your skills, and respect
            diversity. Ask questions, engage positively, and play a key role in
            shaping our community&apos;s future. Enjoy a rich and rewarding
            experience by embracing our principles and fostering unity among
            members.
          </p>
        </main>
      </div>
      <div className="lg:flex justify-between ">
      <Image
          src={img2}
          alt=""
          className="lg:mb-[4.813rem] mb-4 lg:w-[609px] lg:h-[33.789rem]"
        />
        <main className="bg-[#FFF4E6] lg:mb-[8rem] mb-4 rounded-[10px] lg:w-[605px] lg:h-[33.789rem] lg:ps-[3.688rem] p-8 lg:pt-[3.875rem]">
          <p className="text-[#14202D] lg:text-[32px] text-xl font-bold lg:leading-[56px] break-words mb-[1.188rem]">
          Our Brand Partners
          </p>
          <p className="lg:w-[517px text-[#14202d] lg:text-xl text-sm font-normal lg:leading-7 break-words bg-red500 lg:mb-[3.75rem] mb-4">
          Fatherland Community proudly collaborates with esteemed brand
              partners who share our passion for exploring the diverse facets of
              Africa. Together, we redefine travel, prioritizing safety and
              offering a creative, exciting, and inspiring journey that fosters
              a deeper connection with the continent&apos;s beauty and significance.
          </p>
          <Button className="w-full bg-[#ff8800] py-[1.25rem]">
              Explore Now
            </Button>
        </main>
        

      </div>
      <div className="lg:flex justify-between ">
        <main className="bg-[#F1F4FB] lg:mb-[8rem] mb-4 rounded-[10px] lg:w-[605px] lg:h-[465px] lg:ps-[3.688rem] p-8 lg:pt-[3.875rem]">
          <p className="text-[#14202D] lg:text-[32px] text-xl font-bold lg:leading-[56px] break-words mb-[1.188rem]">
            Who We are
          </p>
          <p className="lg:w-[517px text-[#14202d] lg:text-xl text-sm font-normal lg:leading-7 break-words">
            At Fatherland Community, we&apos;re a tight-knit family united by a
            shared vision of unity and empowerment. Our diverse members
            celebrate respect, integrity, and service, creating a dynamic space
            where everyone belongs. Join us in fostering connections, personal
            growth, and positive change – together, we&rsquo;re building a community
            that stands strong and supports each other. Here, we are more than a
            collective; we are a family making a positive impact. Welcome to
            Fatherland Community.
          </p>
        </main>
        <Image
          src={img3}
          alt=""
          className="lg:mb-[4.813rem] mb-4 lg:w-[609px] lg:h-[465px]"
        />
      </div>

      {/* <div>
        <main className="bg-[#F1F4FB] lg:w-[37.813rem] lg:h-[22.938rem lg:py-[3.688rem] lg:px-[1.625rem] mb-4 lg:mb-[4.125rem] rounded-[10px]">
          
            <p className="text-[#14202D] lg:text-3xl text-xl font-normal lg:leading-8 break-words pb-4 pt-10">
              Induction- Get Started and Learn <br />
              about the Community
            </p>
            <p className="lg:w-[29.502rem] text-[#14202d] lg:text-xl text-sm font-normal leading-7 break-words">
              Welcome to the Fatherland Community! Begin by understanding our
              vision, connecting with others, and actively participating in
              events. Educate yourself, contribute your skills, and respect
              diversity. Ask questions, engage positively, and play a key role
              in shaping our community's future. Enjoy a rich and rewarding
              experience by embracing our principles and fostering unity among
              members.
            </p>
        </main>
        <Image src={img2} alt="" className="lg:mb-[6.325rem] mb-4" />

        <div className="bg-[#F1F4FB] lg:w-[37.813rem] lg:h-[24.563rem] lg:py-[3.688rem] lg:px-[1.625rem] mb-4 lg:mb-[3.375rem] rounded-[10px]">
         
            <p className="text-[#14202D] lg:text-3xl text-xl font-normal leading-8 break-words pb-4">
              {" "}
              Our Brand Partners
            </p>
            <p className="lg:w-[29.502rem] text-[#14202d] lg:text-xl text-sm font-normal leading-7 break-words pb-[1.648rem]">
              Fatherland Community proudly collaborates with esteemed brand
              partners who share our passion for exploring the diverse facets of
              Africa. Together, we redefine travel, prioritizing safety and
              offering a creative, exciting, and inspiring journey that fosters
              a deeper connection with the continent's beauty and significance.
            </p>

            <Button className="w-full bg-[#ff8800] py-[1.25rem]">
              Explore Now
            </Button>
          
        </div>

        <Image src={img4} alt="" className=" mb-12 lg:mb-0" />
      </div> */}
    </div>
  );
}
