"use client";
import { foodSection } from "@/lib/data2";
import Image from "next/image";
import guy from "@/public/Rectangle 5707 (1).png";
import React from "react";
import style from "./styles.module.css";
import { Button } from "@/components/ui/button";
import { FaGlobe, FaPaperPlane, FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { DividerVerticalIcon } from "@radix-ui/react-icons";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";

export default function FoodPage({ params }: { params: { foodId: string } }) {
  const renderFood = foodSection.find((item) => item.id === params.foodId);
  console.log(renderFood);

  return (
    <div className="mx-auto w-full max-w-[90rem] bg-white">
      <div className={`${style.ban} pt-[8.625rem] pb-[6rem] m`}>
        <p className="text-white text-[40px]  font-bold leaing-[56px] break-words text-center mb-[1.563rem]">
          {renderFood?.label}
        </p>
        <div className="flex justify-center">
          <Button className="bg-white hover:bg-white text-[#DA5001] text-xl font-normal break-words py-[1.125rem] px-[4.813rem]">
            {renderFood?.text}
          </Button>
        </div>
      </div>

      <main className=" mx-auto container lg:flex justify-around pt-[4.438rem]">
        <div className="max-w-[51rem]">
          <p className="text-[#14202d] text-4xl font-bold leading-[56px] break-words mb-[1.563rem]">
            {renderFood?.label2}
          </p>
          <p className="text-[#14202D] text-sm font-normal leading-6 break-words max-w-[47.438rem]">
            {renderFood?.text2}
          </p>
        </div>

        <div className=" max-w-[27.813rem] rounded-[9px] mb-[8.063rem]">
          <p className="text-[#14202D] text-2xl font-bold leading-8 break-words mb-[0.25rem] px-12">
            Make a Booking
          </p>
          <p className="text-[#2a2c30] text-base font-normal leading-5 break-words pb-[0.75rem] px-12">
            Contact this restaurant to make a booking
          </p>
          <hr className="mb-[2.375rem]" />
          <p className="text-[#212924] text-lg font-normal leading-8 break-words pb-[1.438rem] flex items-center px-12">
            <span className=" bg-[#da5001] rounded-full p-2 mr-4">
              <FaPhone className="text-white" />
            </span>
            {renderFood?.phone}
          </p>
          <p className="text-[#212924] text-lg font-normal leading-8 break-words pb-[1.438rem] px-12 flex items-center">
            <span className=" bg-[#da5001] rounded-full p-2 mr-4">
              <FaPaperPlane className="text-white" />
            </span>
            {renderFood?.email}
          </p>
          <p className="text-[#212924] text-lg font-normal leading-8 break-words pb-[1.438rem] px-12 flex items-center">
            <span className=" bg-[#da5001] rounded-full p-2 mr-4">
              <FaGlobe className="text-white" />
            </span>
            {renderFood?.website}
          </p>
          <p className="text-[#212924] text-lg font-normal leading-8 break-words px-12 flex items-start">
            <span className=" bg-[#da5001] rounded-full p-2 mr-4">
              <FaLocationPin className="text-white" />
            </span>
            {renderFood?.location2}
          </p>
        </div>
      </main>

      <section className="mx-auto w-full containe bg-[#fcf1e5] mb-[2.563rem]">
        <div className="w-full mx-auto containe">
          <p
            className="lg:mx-[6.063rem] pt-[2.875rem] text-[#1402D] text-center lg:text-start
                 lg:text-[40px] font-bold lg:leading-[50px] lg:pb-[4rem] break-words lg:w-[58.313rem] w-full"
          >
            How it Works
          </p>
        </div>

        <div className="mx-[6.063rem] lg:flex justify-between ">
          <Image src={guy} alt="" className="lg:pb-24" />

          <div className=" pt-12 lg:pt-0">
            <p className="text-black text-xl font-normal leading-5 break-words lg:px-[9.563rem lg:py-[1.9rem] rounded-[7px] flex justifyevenly items-center bg-white">
              <FaPeopleGroup className="mr-[4.813rem] ml-[1.625rem] lg:text-[30px] text-[#0BA1BA]" />{" "}
              Become a Member by Registering
            </p>

            <div className="flex lg:justify-between justify-around lg:px-20 px-0 text-[#0BA1BC]">
              <div className="">
                <span>
                  <DividerVerticalIcon />
                </span>
                <span>
                  <DividerVerticalIcon />
                </span>
              </div>
              <div>
                <span>
                  <DividerVerticalIcon />
                </span>
                <span>
                  <DividerVerticalIcon />
                </span>
              </div>
            </div>
            <p className="text-black text-xl font-normal leading-5 break-words lg:px-[9.563rem lg:py-[1.9rem] rounded-[7px] flex justifyevenly items-center bg-white">
              <FaCreditCard className="mr-[4.813rem] ml-[1.625rem] lg:text-[30px] text-[#0BA1BA] text-center" />
              Get your membership card
            </p>
            <div className="flex lg:justify-between justify-around lg:px-20 px-0 text-[#0BA1BC]">
              <div>
                <span>
                  <DividerVerticalIcon />
                </span>
                <span>
                  <DividerVerticalIcon />
                </span>
              </div>
              <div>
                <span>
                  <DividerVerticalIcon />
                </span>
                <span>
                  <DividerVerticalIcon />
                </span>
              </div>
            </div>
            <div className="text-black text-xl font-normal leading-5 break-words lg:px-[9.563rem lg:py-[1.9rem] rounded-[7px] flex justifyevenly items-center py3 px12  bg-white">
              <FaGlobe className="mr-[0.9rem] ml-[1.625rem] lg:text-[30px] text-[#0BA1BA] text-center" />
              Explore the website to see offers and partners
            </div>
            <div className="flex lg:justify-between justify-around lg:px-20 px-0 text-[#0BA1BC]">
              <div>
                <span>
                  <DividerVerticalIcon />
                </span>
                <span>
                  <DividerVerticalIcon />
                </span>
              </div>
              <div>
                <span>
                  <DividerVerticalIcon />
                </span>
                <span>
                  <DividerVerticalIcon />
                </span>
              </div>
            </div>
            <p className="text-black text-xl font-normal leading-5 break-words lg:px-[9.563rem lg:py-[1.9rem] rounded-[7px] flex items-center  bg-white">
              <FaLocationPin className="mr-[0.9rem] ml-[1.625rem] lg:text-[30px] text-[#0BA1BA] text-center" />
              Visit the nearest restaurant in your location
            </p>
            <div className="flex lg:justify-between justify-around lg:px-20 px-0 text-[#0BA1BC]">
              <div>
                <span>
                  <DividerVerticalIcon />
                </span>
                <span>
                  <DividerVerticalIcon />
                </span>
              </div>
              <div>
                <span>
                  <DividerVerticalIcon />
                </span>
                <span>
                  <DividerVerticalIcon />
                </span>
              </div>
            </div>
            <p className="text-black text-xl font-normal leading-5 break-words lg:px-[9.563rem lg:py-[1.9rem] rounded-[7px] flex items-center bg-white">
              <FaCreditCard className="mr-[0.9rem] ml-[1.625rem] lg:text-[30px] text-[#0BA1BA] text-center" />
              Show them your Fatherland Membership card
            </p>
            <div className="flex lg:justify-between justify-around lg:px-20 px-0 text-[#0BA1BC]">
              <div>
                <span>
                  <DividerVerticalIcon />
                </span>
                <span>
                  <DividerVerticalIcon />
                </span>
              </div>
              <div>
                <span>
                  <DividerVerticalIcon />
                </span>
                <span>
                  <DividerVerticalIcon />
                </span>
              </div>
            </div>
            <p className="w-full text-black text-xl font-normal leading-5 break-words lg:px-[9.563rem] lg:py-[1.9rem] rounded-[7px] flex items-center bg-white">
              Sit back & Enjoy your Meal!
            </p>
            <div className="flex lg:justify-between justify-around lg:px-20 px-0 text-[#0BA1BC]">
              <div>
                <span>
                  <DividerVerticalIcon />
                </span>
                <span>
                  <DividerVerticalIcon />
                </span>
                <span className="hidden lg:block">
                  <DividerVerticalIcon />
                </span>
                <span className="hidden lg:block">
                  <DividerVerticalIcon />
                </span>
                <span className="hidden lg:block">
                  <DividerVerticalIcon />
                </span>
                <span className="hidden lg:block">
                  <DividerVerticalIcon />
                </span>
              </div>
              <div>
                <span>
                  <DividerVerticalIcon />
                </span>
                <span>
                  <DividerVerticalIcon />
                </span>
                <span className="hidden lg:block">
                  <DividerVerticalIcon />
                </span>
                <span className="hidden lg:block">
                  <DividerVerticalIcon />
                </span>
                <span className="hidden lg:block">
                  <DividerVerticalIcon />
                </span>
                <span className="hidden lg:block">
                  <DividerVerticalIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
