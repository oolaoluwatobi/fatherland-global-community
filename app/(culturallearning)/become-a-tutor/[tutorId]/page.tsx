"use client";
import React, { useState } from "react";
import sytle from "./components/style.module.css";
import { Tutorsinfo } from "@/lib/data2";
import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa6";
import Image from "next/image";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { Instructions } from "@/lib/data2";
import Banner from "./components/Banner";
import Youmayalsolike from "../../category/[categoryId]/components/Youmayalsolike";
import Faq from "../../exploreculturallearning/components/Faq";

export default function Tutorpage({ params }: { params: { tutorId: string } }) {
  const renderTutors = Tutorsinfo.find(
    (teacher) => teacher.id === params.tutorId
  );
  console.log(renderTutors);

  const [isBlockDisplayed, setIsBlockDisplayed] = useState<boolean[]>(
    Array(8).fill(false)
  );

  const toggleDisplay = (index: number) => {
    const updatedDisplay = [...isBlockDisplayed];
    updatedDisplay[index] = !updatedDisplay[index];
    setIsBlockDisplayed(updatedDisplay);
  };

  const [showHiddenDiv, setShowHiddenDiv] = useState(false);

  const toggleHiddenDiv = () => {
    setShowHiddenDiv(!showHiddenDiv);
  };

  return (
    <div className={`max-w-[90rem] mx-auto`}>
      <main
        className={`max-w-[90rem] mx-auto ${sytle.hero} container lg:pt-[3.938rem] pt-5 pb-[3.25rem] lg:flex justify-between items-center lg:pl-[8rem]`}
      >
        <div>
          <p className="text-[#161915] lg:text-[48px] text-xl font-black lg:leading-[58px] break-words mb-[2.75rem] text-center lg:text-start">
            {renderTutors?.name}
          </p>
          <p className="text-[#161915] lg:text-xl text-base font-bold break-words lg:mb-[2.875rem] text-center lg:text-start">
            {renderTutors?.course}
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button className="text-[#16355F] text-sm font-medium break-words py-[13px] px-[8px] mb-[1.625rem] bg-[#badbc9] hover:bg-[#badbc9]">
              5 Section Series
            </Button>
          </div>
          <p className="lg:w-[32.75rem] lg:h-[75px] mb-[1.125rem] text-[#55525D] lg:text-base text-xs font-normal break-words">
            {renderTutors?.info}
          </p>
          <p className="text-[#252525] text-base font-medium leading-6 break-words lg:w-[28.938rem] lg:h-[46px] mb-[1.221rem]">
            Starting at $4.99/month (billed annually) for all classes and
            sessions
          </p>
          <form action="" className="mb-[2.25rem]">
            <label
              htmlFor=""
              className="text-[#252525] text-sm font-semibold leading-5 break-words"
            >
              {" "}
              Email*
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="Enter your address"
              className="text-[#a9a9a9] lg:w-[19.813rem] text-sm font-normal leading-4 break-words py-[1.125rem] pl-[17px] rounded-[5px]"
            />
            <Button className="hover:bg-primary text-sm font-semibold break-words py-[1.5rem] lg:w-[8.5rem] ml-[0.625rem]">
              {" "}
              Sign up
            </Button>
          </form>
          <div className="flex justify-center lg:justify-start mb-5 lg:mb-0">
            <Button className="bg-[#da5001] hover:bg-[#da5001] py-[0.875rem]">
              <FaPlay className="pr-[5px]" /> Watch Sample
            </Button>
          </div>
        </div>

        <Image src={renderTutors?.image1!!} alt="" />
      </main>
      <div className="max-w-[90rem] mx-auto lg:pl-[8rem] container pt-[2.688rem] mb-[1.625rem]">
        <p className="text-[#1619115] lg:text-3xl text-xl font-bold lg:leading-[62px] break-words mb-[2.188rem]">
          Class Overview
        </p>
        <main className="lg:flex justify-between">
          <div>
            <Image
              src={renderTutors?.image2!!}
              alt=""
              className="mb-[1.438rem]"
            />
            <p className="text-[#272727] font-semibold lg:text-2xl text-xl lg:leading-8 break-words mb-[0.813rem] lg:w-[44.5rem]">
              {renderTutors?.coursedetails}
            </p>
            <p className="text-[#55525d] font-normal text-sm leading-6 break-words mb-[0.938rem] lg:w-[41.313rem]">
              {renderTutors?.text}
            </p>
            <p className="text-[#272727] mb-[10px] text-sm font-medium leading-6 break-words">
              <span className="text-[#8f8f8f] text-sm font-medium leading-6 break-words pr-1">
                Instructor(s):
              </span>
              {renderTutors?.instructor}
            </p>
            <p className="text-[#272727] mb-[10px] text-sm font-medium leading-6 break-words">
              <span className="text-[#8f8f8f] text-sm font-medium leading-6 break-words pr-1">
                Class Length:
              </span>
              {renderTutors?.classlenght}
            </p>
            <p className="text-[#272727] text-sm font-medium leading-6 break-words">
              <span className="text-[#8f8f8f] text-sm font-medium leading-6 break-words pr-1">
                Category:
              </span>
              {renderTutors?.category}
            </p>
          </div>

          <div
            className={`lg:w-[27.875rem] lg:h-[455px] overflow-y-auto ${sytle.win1} mt-5 lg-mt-0`}
          >
            <div className="mb-[0.563rem]">
              <p
                className="bg-secondary text-white text-base font-semibold leading-5 break-words px-[1.25rem] py-[13px] flex justify-between items-center
                 focus:bg-blue-900 focus:outline-none rounded-md border-r-0 border-b-0 cursor-pointer"
                onClick={toggleHiddenDiv}
              >
                Instruction <ChevronUpIcon />
              </p>

              {showHiddenDiv && (
                <div className="py-[15px] bg-[#f6f6f6] px-[1.25rem]">
                  <div className="flex gap-[0.875rem] mb-[15px]">
                    <Image
                      src={renderTutors?.image2!!}
                      alt=""
                      className="w-[98px] h-[71px]"
                    />

                    <div>
                      <p className="text-[#333333] text-sm font-semibold break-words leading-6 ">
                        Promo
                      </p>
                      <p className="text-[#8F8F8F] text-xs font-medium leading-5 break-words">
                        2Min 40Sec
                      </p>
                    </div>
                  </div>
                  <hr className="mx-[1.25rem]" />
                  <div className="flex gap-[0.875rem] mt-[15px]">
                    <Image
                      src={renderTutors?.image2!!}
                      alt=""
                      className="w-[98px] h-[71px]"
                    />

                    <div>
                      <p className="text-[#333333] text-sm font-semibold break-words leading-6">
                        Instructions
                      </p>
                      <p className="text-[#8F8F8F] text-xs font-medium leading-5 break-words">
                        3Min 11Sec
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {Instructions.map((list, index) => (
              <div key={index} className="">
                <div className={`mb-[0.563rem]`}>
                  <p
                    className={`bg-[#f6f6f6] text-black text-base font-semibold leading-5 break-words px-[1.25rem] py-[13px] flex justify-between items-center cursor-pointer `}
                    onClick={() => toggleDisplay(index)} 
                  >
                    {list.label}
                    <span>
                      <ChevronUpIcon />
                    </span>
                  </p>
                  <div
                    className={`${
                      isBlockDisplayed[index] ? "block" : "hidden"
                    } bg-[#f6f6f6] py-[15px] px-[1.25rem]`}
                  >
                    {list.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
     <main className="lg:pl-[7rem] container lg:mb-{4.563rem] mb-5">
     <Banner />
     </main>
     <div className='max-w-7xl bg-red500 mx-auto lg:pl-[2rem]'>
      <p className="text-[#14202E] font-bold lg:text-3xl text-lg lg:leading-[40px] lg:text-start text-center lg:ml-[2rem]">Other Related Classes</p>
      <Youmayalsolike />
     </div>
     <Faq />
    
    </div>
  );
}
