"use client";
import React from "react";
import img1 from "@/public/campus/ben 1.png";
import img2 from "@/public/campus/ben 2.png";
import img3 from "@/public/campus/ben 3.png";
import img4 from "@/public/campus/ben 4.png";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRightCircle } from "react-icons/bi";

const Videos = [
  {
    id: "1",
    name: "Spectacular Events for You",
    details: "Access Regular Networking and Community Events.",
    bgImage: img1,
    href: "/",
  },
  {
    id: "2",
    name: "Enjoy Great Discounts Offers on Spiritual and Cultural Tours.",
    details: "",
    bgImage: img2,
    href: "/",
  },
  {
    id: "3",
    name: "Embark on a discounted culinary exploration of diverse African cuisines at global restaurants.",
    details: "",
    bgImage: img3,
    href: "/",
  },
  {
    id: "4",
    name: "Discover and acquire one-of-a-kind artisanal treasures crafted with expert skill at the Community Store.",
    details: "",
    bgImage: img4,
    href: "/",
  },
];

export default function PremiunBenefits() {
  return (
    <>
      <p
        className="text-[#14202D] lg:text-[50px] lg:mb-[4.125rem] mb-8
       text-2xl font-bold lg:leading-[58px] break-words text-center"
      >
        Standard and Premium Benefits
      </p>
      <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-[2.938rem]">
        {Videos.map((video) => {
          return (
            <div key={video.id} className="bg-red500 lg:w-[37.938rem]">
              <Image src={video.bgImage} alt="video" />
              <div className="lg:h-[152px] py-[1.438rem]">
                <p
                  className="text-[#14202D] mb-[1.438rem] lg:text-2xl text-base
                 font-bold lg:leading-9 break-words"
                >
                  {video.name}
                </p>
                <p>{video.details}</p>
                <Link
                href={video.href}
                className=" mt-4 text-[#FF8800] cursor-pointer font-[600] w-auto inline-flex"
              >
                Learn More <BiChevronRightCircle className="my-auto ml-2  " />{" "}
              </Link>
              </div>
             
            </div>
          );
        })}
      </div>
    </>
  );
}
