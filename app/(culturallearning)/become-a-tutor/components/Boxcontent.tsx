"use client";
import React from "react";
import icon1 from "@/public/campus/icon1.png";
import icon2 from "@/public/campus/icon2.png";
import icon3 from "@/public/campus/icon3.png";
import icon4 from "@/public/campus/icon4.png";
import icon5 from "@/public/campus/icon5.png";
import Image from "next/image";

export default function Boxcontent() {
  return (
    <div className="mx-auto max-w-7xl container bg-red500 lg:pl-8 lg:mb-[14.5rem] mb-5">
      <main className="bg-green500  lg:flex flex-wrap gap-10 ">
        <div className="lg:w-[23.625rem] lg:h-[22.563rem] bg-white mb-4 container py-[1.75rem] rounded-[1px] shadow-lg shadow-blue-100">
          <div className="flex justify-center">
            <Image src={icon4} alt="" className="mb-[1.125rem]"/>
          </div>
          <p className="text-[#263238] mb-[0.688rem] text-center text-base font-semibold leading-6 break-words">
            Introducing Your Institution to Potential Students & Learners
          </p>
          <p className="text-[#55525D] text-sm font-normal leading-6 break-words text-center">
            This is a great solution for students & learners who could not visit
            in person. An informative learning facility tour video can mean the
            difference between a student choosing to apply to your
            school/organization and nixing it from the list because of other
            barriers.
          </p>
        </div>
        <div className="lg:w-[23.625rem] lg:h-[22.563rem] bg-white mb-4 container py-[1.75rem] rounded-[1px] shadow-lg shadow-blue-100">
          <div className="flex justify-center">
            <Image src={icon5} alt="" className="mb-[1.125rem]"/>
          </div>
          <p className="text-[#263238] mb-[0.688rem] text-center text-base  font-semibold leading-6 break-words">
            Facilitating the Admissions and Acceptance Process
          </p>
          <p className="text-[#55525D] text-sm font-normal leading-6 break-words text-center">
            Once students have been accepted, having access to the platform,
            videos can be used to assist incoming students/learners with
            completing the in-take process. These can include information for
            enrolling in courses, and even investigating extracurricular
            activities.
          </p>
        </div>
        <div className="lg:w-[23.625rem] lg:h-[22.563rem] bg-white mb-4 container py-[1.75rem] rounded-[1px] shadow-lg shadow-blue-100">
          <div className="flex justify-center">
            <Image src={icon3} alt="" className="mb-[1.125rem]"/>
          </div>
          <p className="text-[#263238] mb-[0.688rem] text-center text-base container font-semibold leading-6 break-words">
            Introducing Potential Students & Learners to Institution’ &
            Organization Proper
          </p>
          <p className="text-[#55525D] text-sm font-normal leading-6 break-words text-center">
            It is duty of the tutor to create a short video showcasing the
            landmarks, history, pass record and achievements and culture
            surrounding Africa and their new prospect that can help them feel
            more at home and get acclimatized quicker.
          </p>
        </div>
        <div className="lg:w-[23.625rem] lg:h-[22.563rem] bg-white mb-4 container py-[1.75rem] rounded-[1px] shadow-lg shadow-blue-100">
          <div className="flex justify-center">
            <Image src={icon2} alt="" className="mb-[1.125rem]"/>
          </div>
          <p className="text-[#263238] mb-[0.688rem] text-center text-base container font-semibold leading-6 break-words">
            Teaching Course Material
          </p>
          <p className="text-[#55525D] text-sm font-normal leading-6 break-words text-center">
            Tutors can use videos to deliver course information that can be
            extremely helpful in opening up class time. Lectures and other
            introductory information can be watched from the already made lesson
            videos before class, which allows for more practice- and
            skill-related class activities.
          </p>
        </div>
        <div className="lg:w-[23.625rem] lg:h-[22.563rem] bg-white mb-4 container py-[1.75rem] rounded-[1px] shadow-lg shadow-blue-100">
          <div className="flex justify-center">
            <Image src={icon1} alt="" className="mb-[1.125rem]"/>
          </div>
          <p className="text-[#263238] mb-[0.688rem] text-center text-base container font-semibold leading-6 break-words">
            Keeping Alumni Updated
          </p>
          <p className="text-[#55525D] text-sm font-normal leading-6 break-words text-center">
            Alumni who feel engaged and informed about the current status of
            their alma mater will be much more likely to recommend it to
            potential students than those who don’t have prior knowledge of the
            organization.
          </p>
        </div>
      </main>
    </div>
  );
}
