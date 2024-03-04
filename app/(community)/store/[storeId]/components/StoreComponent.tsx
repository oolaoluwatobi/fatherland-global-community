"use client";
import Link from "next/link";
import bonnet from "@/public/fashionbonnet.png";
import fash4 from "@/public/fas4.png";
// import rectangle211 from "@/public/rectangle211.png";
import rectan from "@/public/Rectangle 210.png";
// import rectangle212 from "@/public/rectangle212.png";
import React, { useEffect } from "react";
import { STORES } from "@/lib/data";
import { useRouter, useSearchParams } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import { BiSearch } from "react-icons/bi";
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
import { useShoppingBasketStore } from "@/app/Store/ShoppingBasket";
import { Router } from "lucide-react";

const colorVariants = [
  {
    id: "1",
    image: bonnet,
    color: "Green",
  },
  {
    id: "2",
    image: fash4,
    color: "Orange",
  },
  {
    id: "3",
    image: rectan,
    color: "Purple",
  },
  // {
  //   id: "4",
  //   image:  rectangle211,
  //   color:"Lime"
  // },
  // {
  //   id: "5",
  //   image: rectangle212,
  //   color:"Multi"
  // },
];
const sizeVariants = ["XS", "S", "MD", "L", "XL"];

type BasketProps = {
  id: string;
  image: StaticImageData;
  title: string;
  description?: string;
  price: string;
  price1?: string;
  discount?: string;
  color?: string;
  size?: string;
  quantity?: string;
};

export default function StoreComponent({
  params,
}: {
  params: { storeId: string };
}) {
  const { addProduct } = useShoppingBasketStore();
  console.log(params.storeId, "ID============================");
  const renderStore = STORES.find(
    (item) => String(item.id) === String(params.storeId)
  );
  console.log(renderStore);

  const renderStoredescription = StoresDiscription.find(
    (item) => String(item.id) === String(params.storeId)
  );
  console.log(renderStoredescription);

  const [img, setImg] = useState<StaticImageData | undefined>(
    renderStore?.image!!
  );
const router = useRouter();
  const handleAddToBasket = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    { id, image, title, color, price }: any
  ) => {
    e.preventDefault();
    // e.stopPropagation()

    // Add to basket logic here.
    const newProduct = {
      id: Date.now(),
      productId: id,
      image,
      title,
      color,
      price,
      // size,
      // quantity
    };

    addProduct(newProduct);
  };
    const searchParams= useSearchParams();
    const selectedColor = searchParams.get("color")
    const selectedSize = searchParams.get("size")
    
  // const [selectedSize, setSelectectedSize] = useState("MD");
  // const [selectedColor, setSelectectedColor] = useState("orange");

  // useEffect(() => {
  //   //  window.history.pushState(
  //   //    null,
  //   //    "",
       
  //   //     `?color=${selectedColor}&size=${selectedSize}`
  //   router.push(
  //     `?color=${selectedColor}&size=${selectedSize}`,{
  //       scroll: false,
  //     })
  //     window.location.search
  // }, [selectedColor, selectedSize,router]);

  return (
    <div className=" mx-auto mb-24 lg:mb-24  w-full max-w-[97.813rem]  ">
      <div className="mx-auto lg:px-0 px-4  ">
        <div className="flex justify-center items-center mx-auto w-full  max-w-[97.813rem]  ">
          <input
            type="text"
            placeholder="Search for anything"
            className="bg-white w-full mxauto lg:py-2 pl5 text-gray-200 lg:text-lg py-2 text-xs px-4 mt-10 pl-4"
          />
          <BiSearch
            className="bg-black text-[#ffffff] h-8 w-8 lg:h-11 lg
        :w-11 p-0.5 lg:p-1  aspect-square mt-10  "
          />
          <HeartIcon className="text-black w-[1.5rem] h-[1.5rem] lg:ml-6 mt-10" />
          <Link href={"/store/shopping-basket"}>
            <LiaShoppingCartSolid className=" w-[1.5rem] h-[1.5rem] lg:ml-4 mt-10" />
          </Link>
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
              <Link
                href={`/store/clothing`}
                className="font-rubik   font-normal ">
                Clothing
              </Link>
            </div>
            <div className="flex">
              <IoIosArrowForward className=" ml-2 text-pt-1 bg-red-00 text-[#525258] h-6 w-6 " />
              <p className="font-rubik  text-primary font-normal ">
                {renderStore?.content.slice(0, 18)}...
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
            <button onClick={(e) => setImg(renderStore?.image)}>
              <Image
                className="w-[6.5rem] h-[6.5rem] rounded-lg object-cover"
                src={renderStore?.image!!}
                alt=""
              />
            </button>
            <button onClick={(e) => setImg(renderStore?.image1)}>
              <Image
                className="w-[6.5rem] h-[6.5rem] rounded-lg object-cover"
                src={renderStore?.image1!!}
                alt=""
              />
            </button>
            <button onClick={(e) => setImg(renderStore?.image2)}>
              <Image
                className="w-[6.5rem] h-[6.5rem] rounded-lg object-cover"
                src={renderStore?.image2!!}
                alt=""
              />
            </button>
            <button onClick={(e) => setImg(renderStore?.image3)}>
              <Image
                className="w-[6.5rem] h-[6.5rem] rounded-lg object-cover"
                src={renderStore?.image3!!}
                alt=""
              />
            </button>
          </div>
          <Image
            className="w-[28rem] h-[28rem] mt-0 lg:mt-7 lg:pl-2 pl-0  rounded-lg "
            src={img!!}
            alt=""
          />
          <div className="lg:ml-14 ml-0 mt-5 lg:mt-0">
            <div>
              <p className="lg:text-lg font-[600]">
                By <span className="text-primary">ForeMedia</span>
              </p>
              <p className="lg:text-3xl text-[12px]  mt-2 font-[700]">
                {renderStore?.content}
              </p>
              <div className="lg:flex gap-4 lg:mt-3 mt-0 px shadow-sm pb-4">
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

                <div className="lg:flex gap-[0.625rem] ">
                  {sizeVariants.map((size, index) => (
                    <Link   href={`?color=${selectedColor}$size=${size}`}
                      key={index}
                      className={`bg-gray-50 text-[#686868] font-[600] rounded-full px-4 py-1 border-2  ${
                        selectedSize === size
                          ? "border-orange-400"
                          : "border-gray-300"
                      }`}
                      >
                      {size}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="lg:flex gap-20 mt-[3.063rem] ">
                <p>Color</p>
                <div className="lg:flex gap-[0.625rem]">
                  {colorVariants.map((color: any, index) => (
                    <Link href={`?color=${color}&size=${selectedSize}`}
                      key={index}
                      className="bg-gray-50 text-[#686868] font-[600] roundedfull px-4 py-1 border">
                      <Image
                        src={color?.image}
                        alt=""
                        className="h-[4.375rem] w-[4.375rem] bg-red-800"
                      />

                      <button
                        className={`text-[] text-sm pl-3 ${
                          selectedColor === color
                            ? "border-blue-400"
                            : "border-gray-300"
                        }`}
                        >
                        {color.color}
                      </button>
                    </Link>
                  ))}
                </div>

                {/* <div className="lg:flex gap-[0.625rem]">
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
                </div> */}
              </div>
              <div className="lg:flex gap-14 mt-9 ">
                <p className="text-sm">{renderStore?.deliveryDate}</p>
                <p className="text-sm  ">{renderStore?.deliveryTime}</p>
              </div>
            </div>
            <div className="lg:flex gap-8 mt-14">
              <div className="">
                <Button
                  onClick={(e) =>
                    handleAddToBasket(e, {
                      id: renderStore?.id,
                      image: renderStore?.image,
                      title: renderStore?.content,
                      price: renderStore?.price,
                    })
                  }
                  className=" pl- px-[4rem] py-6 bg-gradient-to-r from-cyan-500 to-green-500 text-sm ">
                  <LuShoppingCart className="text-lg h-[1.25rem] w-[1.25rem] mr-2" />{" "}
                  ADD TO CART
                </Button>
              </div>
              <div className="">
                <Button className="lg:mt-0  mt-3 px-[4rem] border-2 border-green-500  py-6 bg-white text-black text-sm ">
                  <MdElectricBolt className="text-lg h-[1.25rem] w-[1.25rem] mx-auto" />{" "}
                  BUY NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-full lg:max-w-[97.813rem] container mx-auto">
        <div className=" lg:flex bg-orange-100 pt-3 pl-8 mt-5 py-3 lg:gap-24">
          <Link rel="stylesheet" href="description">
            <Button variant={"navlink"} className=" font-[500] ">
              Description
            </Button>
          </Link>
          <Link rel="stylesheet" href="specifications">
            <Button variant={"navlink"} className=" text-[#b8b4b4]">
              Specifications
            </Button>
          </Link>
          <Link rel="stylesheet" href="review">
            <Button variant={"navlink"} className="text-[#b8b4b4]">
              review
            </Button>
          </Link>
          <Link rel="stylesheet" href="Questions">
            <Button variant={"navlink"} className="text-[#b8b4b4]">
              Questions
            </Button>
          </Link>
        </div>
        <div className="">
          <p className="text-[#949191] lg:text-lg text-sm ml-5 mt-5 lg:spacing-2 lg:leading-7">
            {renderStoredescription?.content}
          </p>
          <p className="text-[#949191] lg:text-lg text-sm ml ml-5 mt-2 spacing-2 leading-7">
            {renderStoredescription?.content1}
          </p>
          <p className="text-[#949191] lg:text-lg text-sm ml ml-5 mt-2 spacing-2 leading-7">
            {renderStoredescription?.content2}
          </p>
          <p className="text-[#949191] lg:text-lg text-sm ml ml-5 mt-2 spacing-2 leading-7">
            {renderStoredescription?.content3}
          </p>
          <p className="text-[#949191] lg:text-lg text-sm ml ml-5 mt-2 spacing-2 leading-7">
            {renderStoredescription?.content4}
          </p>
        </div>
        <div className="mt-24 ">
          <div className="lg:flex gap-10">
            <div className="lg:flex gap-4 ml-6">
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
