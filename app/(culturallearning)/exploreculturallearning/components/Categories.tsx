"use client";
import React from "react";
import style from "./styles.module.css";
import { ExploreCulturalLearningCategories } from "@/lib/data2";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export default function Categories() {
  return (
    <div className={` mx-auto ${style.cat} pt-12`}>
      <p className="text-center font-bold text-2xl lg:text-[40px] lg:leading-[58px] break-words container pb-4">
        {" "}
        Explore Cultural Learning Categories
      </p>
      <p className="text-black text-sm lg:text-base font-normal leading-6 break-words text-center pb-14 container">
        We make it easy video courses with professional, creative
        <br />
        experts from around the world
      </p>

      <div className="bg-red500 lg:grid grid-cols-3 gap-[2.413rem] container max-w-6xl lg:px-[14.5rem">
        {ExploreCulturalLearningCategories.map((list, i) => (
          <div
            key={i}
            className={`bg-white max-w-[17.563rem] lg:h-[13.438rem] mb-[2.563rem] container py-4
            border shadow-lg shadow-blue-50 border-[#EFF1FD] rounded-[7px] `}
          >
            <Image src={list.images} alt="" className="mx-auto mb-[1.478rem]" />
            <p className="text-center text-base font-semibold break-words leading-6 mb-[1.446rem]">
              {list.label}
            </p>
            <Link
              href={list.href}
              className="flex items-center justify-center text-[#26D44B] text-sm font-normal
                leading-6 break-words mx-auto"
            >
              Join the community <BiChevronRight />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
