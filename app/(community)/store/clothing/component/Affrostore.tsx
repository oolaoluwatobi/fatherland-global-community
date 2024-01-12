import React from "react";
import { BiSearch } from "react-icons/bi";
import { HeartIcon, HomeIcon } from "@radix-ui/react-icons";
import { LiaShoppingCartSolid } from "react-icons/lia";
import style from "./styles.module.css";
// import { Fair Prosper } from 'next/font/google';
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io"; // MdArrowForwardIos

import image54 from "@/public/image 54.png";
import { MdArrowForward, MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
export default function Affrostore() {
  return (
    <div className="mx-auto max-w-[90rem] lg:mb-14 mb-14">
      <div className="flex justify-center items-center mx-auto lg:w-full px-4 max-w-[97.813rem]  ">
        <input
          type="text"
          placeholder="Search for anything"
          className="bg-white w-full mxauto lg:py-2 pl5 text-gray-200 lg:text-xl py-2 text-xs px-4 mt-10 :pl-4"
        />
        <BiSearch
          className="bg-black text-[#ffffff] h-8 w-8 lg:h-11 lg
        :w-11 p-0.5 lg:p-1  aspect-square mt-10  "
        />
        <HeartIcon className="text-black w-[1.5rem] h-[1.5rem] lg:ml-4 mt-10" />
        <Link href={'/store/shopping-basket'}>
            <LiaShoppingCartSolid className=" w-[1.5rem] h-[1.5rem] lg:ml-4 mt-10" />
          </Link>
      </div>

      <div
        className={`${style.Affrobg}  mt-10  mx-auto lg:x-w-[90rem]  `}>
        <div className="flex justify-between">
          <div className=" border-l-[5px] border-t-[5px]  border-b-[5px] w-full  p[2.75rem]  items-center h-fit my-auto ml-[14rem] py-10 px-20">
            <p className={`font-normal text-[#fff] text-3xl  `}>Afrocentric</p>
            <p className={` text-[#fff] font-sans font-[700] text-3xl ml-24 `}>
              {" "}
              Clothing
            </p>
          </div>
          <Image
            src={image54}
            alt=""
            className="mt-24 ml-5 w-[36.563rem] h-[20.875rem]  "
          />
        </div>
      </div>

      <div className=" px-10 mt-10 lg:flex">
        <div className="flex">
          <HomeIcon className=" text-pt-1  h-[0.938rem bg-red-00 h-6 w-6 " />
          <p className="font-rubik pl-2 ">Home</p>
        </div>

        <div className="flex">
          <IoIosArrowForward className=" lg:ml-2 text-pt-1 bg-red-00 text-[#525258] h-6 w-6 " />
          <p className="font-rubik pl2 ">Fashion</p>
        </div>

        <div className="flex">
          <IoIosArrowForward className=" lg:ml-2 text-pt-1 bg-red-00 text-[#525258] h-6 w-6 " />
          <p className="font-rubik  text-[#FD6906] font-normal ">Clothing</p>
        </div>
      </div>
    </div>
  );
}
