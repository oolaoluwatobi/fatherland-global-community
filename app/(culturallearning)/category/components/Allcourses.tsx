"use client";
import React from "react";
import { RecommendedCourses } from "@/lib/data2";
import { AllCategories } from "@/lib/data2";
import { Tutors } from "@/lib/data2";
import Link from "next/link";
import Image from "next/image";

export default function Allcourses() {
  return (
    <div className="max-w-[90rem] mx-auto bggreen-700 lg:pl-[7.7rem] lg:pr-[5rem] lg:flex container">
      <div className="max-w7xl bg-white w-full mxauto lg:w-[281px] py-[1.563rem] mr-5 lg:h-[65rem] shadow shadow-[#ff8800] ">
        <div className="">
          <p className="pl-[1.25rem] py-[0.688rem] text-base font-semibold">
            Recommended Courses
          </p>
          <hr className="mx-[1.25rem] " />

          {RecommendedCourses.map((course, i) => (
            <Link href={course.href} key={i} className="">
              <p className="pl-[1.25rem] py-[1.563rem] text-[#55525D] text-sm font-semibold">
                {course.label}
              </p>
            </Link>
          ))}
        </div>
        <div className="">
          <p className="px-[1.25rem] py-[0.688rem] text-base font-semibold">
            All Categories
          </p>
          <hr className="mx-[1.25rem]" />
          {AllCategories.map((cat, i) => (
            <Link href={`/category/${cat.href}`} key={i} className="">
              <p className="pl-[1.25rem] py-[1.563rem] text-sm font-semibold text-[#55525D]">
                {cat.label}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <section className="containe lg:grid grid-cols-3 gap-4 ">
        {Tutors.map((tutor, i) => (
          <Link href="" key={i} className="">
            <Image
              src={tutor.image}
              alt=""
              className="lg:w-[290px] lg:h-[375px] mb-5 lg:mb-0"
            />
          </Link>
        ))}
      </section>
    </div>
  );
}
