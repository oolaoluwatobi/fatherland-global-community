'use client'
import React, { useState } from 'react'
import { RecommendedCourses } from "@/lib/data2";
import { AllCategories } from "@/lib/data2";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Aside() {

  const pathname = usePathname()

  return (
    <div>
        <div className="max-w7xl bg-white w-full mxauto lg:w-[281px] py-[1.563rem] mr-[2.3rem] lg:h-[67rem] shadow shadow-[#ff8800] ">
          <div className="">
            <p className="pl-[1.25rem] py-[0.688rem] text-base font-semibold">
              Recommended Courses
            </p>
            <hr className="mx-[1.25rem] mb-4" />

            {RecommendedCourses.map((course, i) => (
              <Link
                href={course.href}
                key={i}
                className="hover hover:active:bg-slate-400"
              >
                <p className={`pl-[1.25rem] py-[1.563rem] text-[#55525D] text-sm font-semibold ${
             pathname.includes(course.href) ? 'bg-[#26D44B33] border-[7px] border-secondary border-t-0 border-b-0 border-r-0' : ''
           }`}>
                  {course.label}
                </p>
              </Link>
            ))}
          </div>
          <div className="">
            <p className="px-[1.25rem] py-[0.688rem] text-base font-semibold">
              All Categories
            </p>
            <hr className="mx-[1.25rem] mb-4" />
            {AllCategories.map((cat, i) => (
             <Link href={`/category/${cat.href}`} key={i} className="">
             <p className={`pl-[1.25rem] py-[1.563rem] text-sm font-semibold text-[#55525D] cursor-pointer p-2 ${
             pathname.includes(cat.href) ? 'bg-[#26D44B33] border-[7px] border-secondary border-t-0 border-b-0 border-r-0' : ''
           }`}>
               {cat.label}
             </p>
           </Link>
            ))}
          </div>
        </div>
    </div>
  )
}
