import React from "react";
import { STORES } from "@/lib/data";
import Image from "next/image";
import { BiSearch, BiVector } from "react-icons/bi";
import { HeartIcon, HomeIcon } from "@radix-ui/react-icons";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";
// HomeIcon

export default function StorePage({ params }: { params: { storeId: string } }) {
  console.log(params.storeId, "ID============================");
  const renderStore = STORES.find(
    (item) => String(item.id) === String(params.storeId)
  );
  console.log(renderStore);
  return (
    <div className="max-w-[90rem] mx-auto">
    <div className="mx-auto max-w-7xl">
      <div className="flex justify- items-center mt-5">
        <input
          type="text"
          placeholder="Search for anything"
          className="bg-white lg:w-[72rem] w-full mxauto h-[3.9rem] pl5 text-gray-200 text-xl mt-10 shadow-lg pl-4"
        />
        <BiSearch className="bg-black text-[#ffffff] h-[3.5rem] w-[3rem] mt-10  " />
        <HeartIcon className="text-black bg- h-[3rem] w-[3rem] ml-6 mt-10" />
        <LiaShoppingCartSolid className="h-[3rem] w-[3rem] ml-4 mt-10" />
      </div>

      <div className=" ml-20 mt-10 flex">
        <div className="flex">
          <HomeIcon className=" text-pt-1 w-[2.125rem h-[0.938rem bg-red-00 h-6 w-6 " />
          <p className="font-rubik pl-2 ">Home</p>
        </div>

        <div className="flex">
          <IoIosArrowForward className=" ml-2 text-pt-1 bg-red-00 text-[#525258] h-6 w-6 " />
          <p className="font-rubik pl2 ">Fashion</p>
        </div>

        <div className="flex">
          <IoIosArrowForward className=" ml-2 text-pt-1 bg-red-00 text-[#525258] h-6 w-6 " />
          <p className="font-rubik   font-normal ">Clothing</p>
        </div>
        <div className="flex">
          <IoIosArrowForward className=" ml-2 text-pt-1 bg-red-00 text-[#525258] h-6 w-6 " />
          <p className="font-rubik  text-primary font-normal ">
            Ankara Headwear
          </p>
        </div>
      </div>
      <div className="flex gap mt-5">
        <div className="">
          <Image
            className="w-[6.5rem] h-[6.5rem]"
            src={renderStore?.image!!}
            alt=""
          />
          <Image
            className="w-[6.5rem] h-[6.5rem] mt-2"
            src={renderStore?.image1!!}
            alt=""
          />
          <Image
            className="w-[7rem] h-[6.5rem] mt-2"
            src={renderStore?.image2!!}
            alt=""
          />
          <Image
            className="w-[7rem] h-[7rem] mt-2"
            src={renderStore?.image3!!}
            alt=""
          />
        </div>
        <Image
          className="w-[28rem] h-[29.75re]"
          src={renderStore?.image!!}
          alt=""
        />
        <div className="ml-14">
          <div>
            <p className="text-lg font-[600]">
              By <span className="text-primary">ForeMedia</span>
            </p>
            <p>{renderStore?.content}</p>
            <div className="flex gap-4 mt-3 border-b-2 pb-4">
              <Image
                src={renderStore?.image4!!}
                alt=""
                className="h-[1.5rem] w-[10rem]"
              />
              <p>{renderStore?.rate}</p>
            </div>
            <div className=""> <p className="text-2xl font-bold">{renderStore?.price}</p>
              <p className="text-[#FD6906] text-lg font-[600]">{renderStore?.price1}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
