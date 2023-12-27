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
    <div className="mx-auto w-full bg-white">
      <div className={`${style.ban} pt-[8.625rem] pb-[6rem] m`}>
        <p className="text-white lg:text-[40px] container text-3xl font-bold lg:leading-[56px] break-words text-center mb-[1.563rem]">
          {renderFood?.label}
        </p>
        <div className="flex justify-center">
          <div className="bg-white rounded-[8px] text-[#DA5001] text-xl font-normal break-words py-[1.125rem] px-[4.813rem]">
            {renderFood?.text}
          </div>
        </div>
      </div>

      <main className=" mx-auto max-w-7xl container lg:flex justify-around lg:pt-[4.438rem] pt-8">
        <div className="max-w-[51rem] mb-8 lg:mb-0">
          <p className="text-[#14202d] lg:text-4xl text-xl font-bold lg:leading-[56px] break-words mb-[1.563rem]">
            {renderFood?.label2}
          </p>
          <p className="text-[#14202D] lg:text-sm text-xs font-normal leading-6 break-words max-w-[47.438rem]">
            {renderFood?.text2}
          </p>
        </div>

        <div className=" max-w-[27.813rem] rounded-[9px] lg:mb-[8.063rem] mb-12">
          <p className="text-[#14202D] lg:text-2xl text-lg font-bold lg:leading-8 break-words mb-[0.25rem] px-12">
            Make a Booking
          </p>
          <p className="text-[#2a2c30] lg:text-base text-sm font-normal leading-5 break-words pb-[0.75rem] px-12">
            Contact this restaurant to make a booking
          </p>
          <hr className="mb-[2.375rem]" />
          <p className="text-[#212924] lg:text-lg text-sm font-normal lg:leading-8 break-words pb-[1.438rem] flex items-center lg:px-12">
            <span className=" bg-[#da5001] rounded-full p-2 mr-4">
              <FaPhone className="text-white" />
            </span>
            {renderFood?.phone}
          </p>
          <p className="text-[#212924] lg:text-lg text-sm font-normal lg:leading-8 break-words pb-[1.438rem] lg:px-12 flex items-center">
            <span className=" bg-[#da5001] rounded-full p-2 mr-4">
              <FaPaperPlane className="text-white" />
            </span>
            {renderFood?.email}
          </p>
          <p className="text-[#212924] lg:text-lg text-sm font-normal lg:leading-8 break-words pb-[1.438rem] lg:px-12 flex items-center">
            <span className=" bg-[#da5001] rounded-full p-2 mr-4">
              <FaGlobe className="text-white" />
            </span>
            {renderFood?.website}
          </p>
          <p className="text-[#212924] lg:text-lg text-sm font-normal lg:leading-8 break-words lg:px-12 flex items-start">
            <span className=" bg-[#da5001] rounded-full p-2 mr-4">
              <FaLocationPin className="text-white" />
            </span>
            {renderFood?.location2}
          </p>
        </div>
      </main>

      <div className='bg-[#fcf1e5] mx-auto lg:mb-[2.563rem] mb-8'>

        <main className='mx-auto max-w-7xl'>
        <section className='' >
            <div className='container'>
                <p className='lg:pt-[2.875rem] pt-4 text-[#1402D] text-center lg:text-start
                 lg:text-[40px] font-bold lg:leading-[50px] lg:pb-[4rem] pb-4 break-words lg:w-[58.313rem] w-full'>
                   How it Works 
                </p>
            </div>

        <div className=' container lg:flex justify-between'>
            <Image src={guy} alt="" className='lg:pb-24'/>


            <div className=' pt-12 lg:pt-0'>
                <p className='text-black lg:text-xl text-sm lg:w-[38.125rem] font-normal lg:h-[5.956rem] lg:leading-5 break-words px-[9.563rem py-[1.9rem] rounded-[7px] flex justifyevenly items-center bg-white'>
                    <FaPeopleGroup className='lg:mr-[4.813rem] mr-8 ml-2 lg:ml-[1.625rem] lg:text-[30px] text-[#0BA1BA]'/>  Become a Member by Registering</p>

                <div className='flex lg:justify-between justify-around lg:px-20 px-0 text-[#0BA1BC]'>
                    <div className=''>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                </div>
                <p className='text-black lg:text-xl text-sm lg:w-[38.125rem] font-normal lg:leading-5 text-center break-words px-[9.563rem py-[1.9rem] rounded-[7px] flex justifycenter items-center bg-white'>
                <FaCreditCard className='lg:mr-[4.813rem] mr-12 ml-2 lg:ml-[1.625rem] lg:text-[30px] text-[#0BA1BA]'/>Get your membership card</p>
                <div className='flex lg:justify-between justify-around lg:px-20 px-0 text-[#0BA1BC]'>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                </div>
                <div className='text-black lg:text-xl text-sm font-normal lg:w-[38.125rem] text-center lg:leading-5 break-words px-[9.563rem py-[1.9rem] rounded-[7px] flex justifyevenly items-center py3 px12  bg-white'>
                    <FaGlobe className='lg:mr-[4.813rem lg:mr-8 mr-2 ml-2 lg:ml-[1.625rem] lg:text-[30px] text-[#0BA1BA]'/>Explore the website to see offers and partners</div>
                <div className='flex lg:justify-between justify-around lg:px-20 px-0 text-[#0BA1BC]'>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                </div>
                <p className='text-black lg:text-xl text-sm lg:w-[38.125rem] text-center font-normal lg:leading-5 break-words px-[9.563rem py-[1.9rem] rounded-[7px] flex items-center  bg-white'>
                <FaLocationPin className='lg:mr-[4.813rem lg:mr-8 mr-2 ml-2 lg:ml-[1.625rem] lg:text-[30px] text-[#0BA1BA]'/>Visit the nearest restaurant in your location</p>
                <div className='flex lg:justify-between justify-around lg:px-20 px-0 text-[#0BA1BC]'>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                </div>
                <p className='text-black lg:text-xl text-sm lg:w-[38.125rem] text-center font-normal lg:leading-5 break-words px-[9.563rem py-[1.9rem] rounded-[7px] flex items-center bg-white'>
                <FaCreditCard className='lg:mr-[4.813rem lg:mr-8 mr-2 ml-2 lg:ml-[1.625rem] lg:text-[30px] text-[#0BA1BA]'/>Show them your Fatherland Membership card</p>
                <div className='flex lg:justify-between justify-around lg:px-20 px-0 text-[#0BA1BC]'>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                </div>
                <p className='text-black lg:text-xl text-sm font-normal lg:leading-5 break-words px-[4rem] py-[1.9rem] text-center rounded-[7px] flex justify-center bg-white'>
                Sit back & Enjoy your Meal!</p>
                <div className='flex lg:justify-between justify-around lg:px-20 px-0 text-[#0BA1BC]'>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>  
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>
                    </div>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>  
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>
                    </div>
                </div>
            </div>
        </div>
        </section>


            </main>  
              </div>
    </div>
  );
}
