// import Press from '@/app/pressRelease/component/Press'
import { PRESS } from "@/lib/data";
import { GoClock } from "react-icons/go";
import Image from "next/image";
// import Group from "@/public/assets/Group.png";
import Link from "next/link";
import { Entertainment } from "@/lib/data";

import React from "react";

export default function PressPage({ params }: { params: { pressId: string } }) {
  const renderPress = PRESS.find((item) => item.id === params.pressId);
  console.log(renderPress);
  const renderEnt = Entertainment.find((enter) => enter.id === params.pressId);
  console.log(renderEnt);

  return (
    <div className="mx-auto w-full max-w-7xl bg-white  ">
      <div>
        <Image className="mx-auto w-full  " src={renderPress?.image!!} alt="" />
      </div>
      <div className="lg:ml-7 lg:px-0 px-8">
        <p className="bg-[#f6e8d8] inline text-[#FF8800] lg:text-lg text-sm px-7 py-3 mb font-[550] lg:mt-2 mt-3 rounded-full">
          {renderPress?.text}
        </p>
        <div className="px2 mt-5 ml5  text-[#26D44B] lg:text-4xl text-lg  font-[590] py3">
          <span className="">{renderPress?.title}</span>
        </div>
        <div className=" md:font-[00] flex flex-row mt-4 items-center  lg:pb-3">
          <span className="lg:text-xl text-xs">
            <GoClock />
          </span>
          <p className="lg:text-sm text-xs pl-1 text-[#6f6d6d] ">30 May 2021</p>
        </div>
        <div className={` lg:mt-4 mt-2 ml8 text-lg`}>
          <p className="mt-5 text-sm lg:text-lg ">{renderPress?.content}</p>
        </div>

        <div>
          <p className="font-[700] text-3xl mt-9">{renderPress?.text1}</p>
          <div className="mt-1 fontbold">
            <Image src={renderPress?.image1!!} alt="" />
          </div>
        </div>
      </div>

      <div className="mt-5 mx-auto mb-20 w-full  max-w-7xl container ">
        <div className=" w-full grid lg:grid-cols-3 gap-4  mx-auto">
          {Entertainment.map((enter) => (
            <div
              key={enter.id}
              className=" bg-white border border-red-200 rounded-[10px] mx-auto w-ful ">
              <Image
                src={enter.image}
                alt=""
                className="objectcover mx-auto pt-2 pb-2 px- lg:px-0 "></Image>

              <div className="font-[650] text-start lg:pl-[2.5rem pl-1 text-lg mx-auto lg:w-[21.375rem] lg:h-[60px]">
                {enter.text}
              </div>
              <div className="lg:flex justifyaround items-center ml-7 ">
                <Link
                  href={`/press/${params.pressId}`}
                  className=" mt-3 mb-3 font-[600] text inline text-amber-500 underline decoration-orange-40">
                  {enter.goto}
                </Link>
                <div className="ml-14 text-xs md:font-[00] flex flex-row mt-4 items-center pb-3">
                  <span className="pr-1">
                    <GoClock />
                  </span>{" "}
                  {enter.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
