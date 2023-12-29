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
    <div className=" mx-auto conatiner ">
      <div className="lg:flex justify-center items-center mx-auto w-full max-w-[97.813rem]  ">
        <input
          type="text"
          placeholder="Search for anything"
          className="bg-white w-full mxauto h-[3.9rem] pl5 text-gray-200 text-xl mt-10 :pl-4"
        />
        <BiSearch className="bg-black text-[#ffffff] h-[4rem] w-[3rem] lg:mt-10  " />
        <HeartIcon className="text-black bg- h-[3rem] w-[3rem] lg:ml-6 lh:mt-10" />
        <LiaShoppingCartSolid className="h-[3rem] w-[3rem] lg:ml-4 lg:mt-10" />
      </div>
      <div className={`${style.storebg} mt-10 container objrct-cover lg:w-full lg:max-w-[97.813rem]  mx-auto  `}>
        <p className="text-bold font-bold lg:text-5xl pt-28 pl-[2.188rem] ">
          Handcrafted products <br /> inspired by{" "}
          <span className="text-[#DA5001]">Africans</span>{" "}
        </p>
        <p className=" pt-5 lg:text-bold font-[500] pl-[2.188rem]  text-lg text-gray-500">
          Fatherland Store is a destination for unique and creative products.
        </p>
      </div>
    </div>
  );
}
