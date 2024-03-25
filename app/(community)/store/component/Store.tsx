import React from "react";
import style from "./styles.module.css";
import Image from "next/image";
import icon from "@/public/Icon.png";
import { BiSearch, BiVector } from "react-icons/bi";
import { HeartIcon } from "@radix-ui/react-icons";
// lia LiaShoppingCartSolid
import { LiaShoppingCartSolid } from "react-icons/lia";
import Link from "next/link";

export default function Store() {
  return (
    <div className=" mx-auto  ">
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
        <HeartIcon className="text-black w-[1.5rem] h-[1.5rem] lg:ml-4 mt-10" />{" "}
        <Link href={"/store/shopping-basket"}>
          <LiaShoppingCartSolid className=" w-[1.5rem] h-[1.5rem] lg:ml-4 mt-10" />
        </Link>
      </div>
      <div
        className={`${style.storebg} mt-10 container object-cover lg:w-full lg:max-w-[97.813rem]  mx-auto  `}>
        <p className="text-bold font-bold lg:text-5xl text-3xl pt-28 pl-[2.188rem] ">
          Handcrafted products <br /> inspired by{" "}
          <span className="text-[#DA5001]">Africans</span>{" "}
        </p>
        <p className=" pt-5 lg:text-bold font-[500] lg:pl-[2.188rem] container lg:text-xl text-lg text-gray-500">
          Fatherland Store is a destination for unique and creative products.
        </p>
      </div>
    </div>
  );
}
