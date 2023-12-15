import React from "react";
import style from "./styles.module.css";
import Image from "next/image";
import icon from "@/public/Icon.png";
import { BiSearch, BiVector } from "react-icons/bi";
import { HeartIcon } from "@radix-ui/react-icons";
// lia LiaShoppingCartSolid
import { LiaShoppingCartSolid } from "react-icons/lia";

export default function Store() {
  return (
    <div className="max-w-7xl mx-auto container ">
      <div className="flex justify- items-center">
        <input
          type="text"
          placeholder="Search for anything"
          className="bg-white lg:w-[72rem] w-full mxauto h-[3.9rem] pl5 text-gray-200 text-xl mt-10 shadow-lg pl-4"
        />
        <BiSearch className="bg-black text-[#ffffff] h-[3.5rem] w-[3rem] mt-10  " />
        <HeartIcon className="text-black bg- h-[3rem] w-[3rem] ml-6 mt-10" />
        <LiaShoppingCartSolid className="h-[3rem] w-[3rem] ml-4 mt-10" />
      </div>
      <div className={`${style.storebg} mt-10 pl-[2.188rem] mx-auto `}>
        <p className="text-bold font-bold lg:text-6xl pt-28">
          Handcrafted products <br /> inspired by{" "}
          <span className="text-[#DA5001]">Africans</span>{" "}
        </p>
        <p className=" pt-5 text-bold font-[500] text-2xl text-gray-500">
          Fatherland Store is a destination for unique and creative products.
        </p>
      </div>
    </div>
  );
}
