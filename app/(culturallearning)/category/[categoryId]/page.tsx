import React from "react";
import { classTeachers } from "@/lib/data2";
import Image from "next/image";
import { RecommendedCourses } from "@/lib/data2";
import { AllCategories } from "@/lib/data2";
import Link from "next/link";
import HeroCat from "../components/HeroCat";
import Getstarted from "../components/Getstarted";
import Faq from "../../exploreculturallearning/components/Faq";
import Youmayalsolike from "./components/Youmayalsolike";
export default function page({ params }: { params: { categoryId: string } }) {
  const renderTutors = classTeachers.find(
    (teacher) => teacher.id === params.categoryId
  );
  console.log(renderTutors);
  return (
    <section>
      <HeroCat />
      <div className="max-w-[90rem] mx-auto lg:pl-[7.7rem] lg:pr-[5rem] lg:flex container">
        <div className="max-w7xl bg-white w-full mxauto lg:w-[281px] py-[1.563rem] mr-[2.3rem] lg:h-[65rem] shadow shadow-[#ff8800] ">
          <div className="">
            <p className="pl-[1.25rem] py-[0.688rem] text-base font-semibold">
              Recommended Courses
            </p>
            <hr className="mx-[1.25rem] " />

            {RecommendedCourses.map((course, i) => (
              <Link
                href={course.href}
                key={i}
                className="hover hover:active:bg-slate-400"
              >
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
              <Link href={cat.href} key={i} className="">
                <p className="pl-[1.25rem] py-[1.563rem] text-sm font-semibold text-[#55525D]">
                  {cat.label}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:grid grid-cols-2 gap-12 ">
          <Image
            src={renderTutors?.image1!!}
            alt={renderTutors?.id!!}
            className="lg:w-[25.875rem] lg:h-[375px] mb-5 lg:mb-0"
          />
          <Image
            src={renderTutors?.image2!!}
            alt={renderTutors?.id!!}
            className="lg:w-[25.875rem] lg:h-[375px] mb-5 lg:mb-0"
          />
          <Image
            src={renderTutors?.image3!!}
            alt={renderTutors?.id!!}
            className="lg:w-[25.875rem] lg:h-[375px] mb-5 lg:mb-0"
          />
          <Image
            src={renderTutors?.image4!!}
            alt={renderTutors?.id!!}
            className="lg:w-[25.875rem] lg:h-[375px] mb-5 lg:mb-0"
          />
        </div>
      </div>
      <div className="items-center max-w7xl mx-auto container lg:pb[3.875rem] pb5 lg:mt-24 lg:pt[6.375rem ">
        <p className="text-black lg:text-[40px] text-base font-bold lg:leading-10 break-words text-center lg:text-start lg:pl-[4.5rem]">
        You May Also Like
        </p>
      </div>
      <Youmayalsolike />
      <Getstarted />
      <Faq />
    </section>
  );
}
