"use client";
import Link from "next/link";
import   bonnet from "@/public/fashionbonnet.png"
import fash4   from '@/public/fas4.png'
 import image54 from '@/public/image 54.png'
 import rectan from '@/public/Rectangle 210.png'
import React from "react";
import { STORES } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import { BiPackage, BiSearch, BiVector } from "react-icons/bi";
import { HeartIcon, HomeIcon } from "@radix-ui/react-icons";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { LuShoppingCart } from "react-icons/lu";
import { MdElectricBolt } from "react-icons/md";
import { StoresDiscription } from "@/lib/data";
import { MdOutlineLocalShipping } from "react-icons/md";
import creditstore from "@/public/credit_score.png";
import { useState } from "react";
import Agent from "@/public/support_agent.png";
import packagee from "@/public/package.png";

const imageData = [
  {
    id: "1",
    image:  fash4 
  },
  {
    id: "2",
    image:bonnet
  },
  {
    id: "3",
    image:image54
  },
  {
    id: "4",
    image:rectan
  }
]

export default function StoreComponent({
  params,
}: {
  params: { storeId: string };
}) {
  console.log(params.storeId, "ID============================");
  const renderStore = STORES.find(
    (item) => String(item.id) === String(params.storeId)
  );
  console.log(renderStore);

  const renderStoredescription = StoresDiscription.find(
    (item) => String(item.id) === String(params.storeId)
  );
  console.log(renderStoredescription);

  const [img, setImg] = useState<StaticImageData | undefined>(renderStore?.image!!);

  return (
    <div className=" mx-auto mb-24 lg:mb-24  w-full max-w-[97.813rem]  ">
      <div className="mx-auto   ">
        <div className="lg:flex justify-center items-center mx-auto">
          <input
            type="text"
            placeholder="Search for anything"
            className="bg-white  w-full mxauto h-[3.9rem] pl5 text-gray-200 text-xl mt-10 shadowlg pl-4"
          />
          <BiSearch className="bg-black text-[#ffffff] h-[4rem] w-[3rem] mt-10  " />
          <HeartIcon className="text-black h-[3rem] w-[3rem] lg:ml-6 lg:mt-10" />
          <LiaShoppingCartSolid className="h-[3rem] w-[3rem] lg:ml-4 lg:mt-10" />
        </div>
        <div className="lg:flex justify-between">
          <div className=" ml-2 mt-10 flex mb-10 ">
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
          <div className="flex gap-2 mr-2 mt-10">
            <p>Back to results</p>
            <IoIosArrowForward className="mt-1" />
          </div>
        </div>

        <div className="lg:flex gap-2 justify-between mt-5">
          <div className="mt-6 w-[6.5rem] lg:h-[6.5rem] ">
            <button  onClick={e => setImg(renderStore?.image)}>
              <Image
                className="w-[6.5rem] h-[6.5rem] rounded-lg"
                src={renderStore?.image!!}
                alt=""
              />
            </button>
            <button onClick={e => setImg(renderStore?.image1)}>
              <Image
                className="w-[7rem] h-[6.5rem] rounded-lg mt-2"
                src={renderStore?.image1!!}
                alt=""
              />
            </button>
            <button onClick={e => setImg(renderStore?.image2)}>
              <Image
                className="w-[7rem] h-[6.5rem] rounded-lg mt-2"
                src={renderStore?.image2!!}
                alt=""
              />
            </button>
            <button onClick={e => setImg(renderStore?.image3)}>
              <Image
                className="w-[7rem] h-[7rem] rounded-lg mt-2"
                src={renderStore?.image3!!}
                alt=""
              />
            </button>
          </div>
          <Image
            className="w-[28rem] h-[28rem]  mt-7 ml2 pl-2  rounded-lg "
            src={img!!}
            alt=""
          />
          <div className="ml-14">
            <div>
              <p className="lg:text-lg font-[600]">
                By <span className="text-primary">ForeMedia</span>
              </p>
              <p className="lg:text-3xl text-[12px]  mt-2 font-[700]">
                {renderStore?.content}
              </p>
              <div className="lg:flex gap-4 mt-3  shadow-sm pb-4">
                <Image
                  src={renderStore?.image4!!}
                  alt=""
                  className="h-[1.5rem] w-[10rem]"
                />
                <p>{renderStore?.rate}</p>
              </div>
              <p className="text-2xl pt-4 font-bold">{renderStore?.price}</p>
              <div className="lg:flex gap-4 mt-1 mb-2 shadow-sm">
                <Image
                  src={renderStore?.image5!!}
                  alt=""
                  className="mt-1 w-[3.188rem] h-[1.225rem]"
                />
                <p className="text-[#FD6906] text-lg font-[600]">
                  {renderStore?.price1}
                </p>
              </div>
              <div className="lg:flex gap-20 mt-[1.063rem] ">
                <p>Size</p>

                <div className="lg:flex gap-[0.625rem]">
                  <p className="h-[2.375rem] w-[4.375rem] border-2 text-center pt-1 font-[600] bg-[#f6f8fc] text-[#686868] lg:text-xl ">
                    S
                  </p>
                  <p className="h-[2.375rem] w-[4.375rem] border-2 text-center pt-1 font-[600] bg-[#fff] text-[#686868] lg:text-xl ">
                    M
                  </p>
                  <p className="h-[2.375rem] w-[4.375rem] border-2 text-center pt-1 font-[600] bg-[#fff] text-[#686868] lg:text-xl ">
                    L
                  </p>
                  <p className="h-[2.375rem] w-[4.375rem] border-2 text-center pt-1 font-[600] bg-[#fff] text-[#686868] lg:text-xl ">
                    {" "}
                    XL
                  </p>
                  <p className="h-[2.375rem] w-[4.375rem] border-2 text-center pt-1 font-[600] bg-[#fff] text-[#c9c7c7] lg:text-xl ">
                    {" "}
                    XXL
                  </p>
                </div>
              </div>
              <div className="lg:flex gap-20 mt-[3.063rem] ">
                <p>Color</p>

                <div className="lg:flex gap-[0.625rem]">
                  <div>
                    {" "}
                    <Image
                      src={renderStore?.image!!}
                      alt=""
                      className="h-[4.375rem] w-[4.375rem]"
                    />
                    <p className="text-[#A6A6A6] text-sm pl-3">Green</p>
                  </div>
                  <div>
                    {" "}
                    <Image
                      src={renderStore?.image1!!}
                      alt=""
                      className="h-[4.375rem] w-[4.375rem]"
                    />
                    <p className="text-[#FD6906;] text-sm pl-3">Orange</p>
                  </div>
                  <div>
                    {" "}
                    <Image
                      src={renderStore?.image3!!}
                      alt=""
                      className="h-[4.375rem] w-[4.375rem]"
                    />
                    <p className="text-[#A6A6A6] text-sm pl-3">Purple</p>
                  </div>
                  <div>
                    {" "}
                    <Image
                      src={renderStore?.image6!!}
                      alt=""
                      className="h-[4.375rem] w-[4.375rem]"
                    />
                    <p className="text-[#A6A6A6] text-sm pl-3">Lime</p>
                  </div>
                  <div>
                    {" "}
                    <Image
                      src={renderStore?.image7!!}
                      alt=""
                      className="h-[4.375rem] w-[4.375rem]"
                    />
                    <p className="text-[#A6A6A6] text-sm pl-3">Multi</p>
                  </div>
                </div>
              </div>
              <div className="lg:flex gap-14 mt-9 ">
                <p className="text-sm">{renderStore?.deliveryDate}</p>
                <p className="text-sm  ">{renderStore?.deliveryTime}</p>
              </div>
            </div>
            <div className="lg:flex gap-[1.875rem] mt-14">
              <div className="">
                <Button className=" w-[15.625rem] pl-2 h-[3.438rem] bg-gradient-to-r from-cyan-500 to-green-500 text-sm ">
                  <LuShoppingCart className="text-lg h-[1.25rem] w-[1.25rem] mr-2" />{" "}
                  ADD TO CART
                </Button>
              </div>
              <div className="">
                <Button className="sm:mt-3 w-[15.625rem] border-2 border-green-500 pl-2 h-[3.438rem] bg-white text-black text-sm ">
                  <MdElectricBolt className="text-lg h-[1.25rem] w-[1.25rem] mr-2" />{" "}
                  BUY NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-full lg:max-w-[90rem] mx-auto">
        <div className=" ml4 lg:flex bg-orange-100 pt-3 pl-8 mt-5 h-[3rem] lg:gap-24">
          <Link rel="stylesheet" href="description" ><Button variant={"navlink"} className=" font-[500] ">
            Description
          </Button></Link>
          <Button variant={"navlink"} className=" text-[#b8b4b4]">
            Specifications
          </Button>
          <Button variant={"navlink"} className="text-[#b8b4b4]">
            review
          </Button>
          <Button variant={"navlink"} className="text-[#b8b4b4]">
            Questions
          </Button>
        </div>
        <div>
          <p className="text-[#949191] text-[12px] ml-5 mt-5 lg:spacing-2 lg:leading-7">
            {renderStoredescription?.content}
          </p>
          <p className="text-[#949191] ml-5 mt-2 spacing-2 leading-7">
            {renderStoredescription?.content1}
          </p>
          <p className="text-[#949191] ml-5 mt-2 spacing-2 leading-7">
            {renderStoredescription?.content2}
          </p>
          <p className="text-[#949191] ml-5 mt-2 spacing-2 leading-7">
            {renderStoredescription?.content3}
          </p>
          <p className="text-[#949191] ml-5 mt-2 spacing-2 leading-7">
            {renderStoredescription?.content4}
          </p>
        </div>
        <div className="mt-24 ">
          <div className="lg:flex gap-10">
            <div className="lg:flex gap-4 ml-20">
              <MdOutlineLocalShipping className="h-[2.75rem] w-[3rem]" />
              <div>
                {" "}
                <p>Free Delivery</p>
                <p>From $99.00</p>
              </div>
            </div>
            <div className="lg:flex gap-4 ml-20">
              <Image src={packagee} alt="" className="h-[2.75rem] w-[3rem]" />
              <div>
                {" "}
                <p>
                  Easy Return & <br />
                  Exchange
                </p>
              </div>
            </div>

            <div className="lg:flex gap-4 ml-20">
              <Image
                src={creditstore}
                alt=""
                className="h-[2.75rem] w-[3rem]"
              />
              <div>
                {" "}
                <p>
                  Secure Payment <br />
                  Method
                </p>
              </div>
            </div>
            <div className="lg:flex gap-4 ml-20">
              <Image src={Agent} alt="" className="h-[2.75rem] w-[3rem]" />
              <div>
                {" "}
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
