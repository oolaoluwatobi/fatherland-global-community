import { StorehotDeal } from "@/lib/data";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React from "react";
import { BiPalette } from "react-icons/bi";
import {
  MdCardGiftcard,
  MdLocalMall,
  MdLocalMovies,
  MdLocalOffer,
  MdMenuBook,
  MdQueueMusic,
} from "react-icons/md";
import Image from "next/image";
import styles from "./styles.module.css";
import ProductCardHotDeals from "./ProductCardHotDeals";
import Link from "next/link";
// import offerbanner from '@/public/OFFER-BANNER.png.png'

export default function Storecategory() {
  return (
    <div
      className={`${styles.griddisplay} grid lg:grid-cols-4 gap-7 mx-auto max-w-[97.813rem] mt-10 bg-[#fff] `}>
      <div className="hidden xl:block ml-4 h-fit pb-5 grid-cols-1  px-[1.125rem] shadow-lg  hover:border-primary">
        <div className="flex gap-2  pt-4 h-14 border-b-2 ">
          <HamburgerMenuIcon className=" font-bold h-[1.5rem] w-[1.5rem]" />
          <h1 className="text-xl ml-3 font-bold text-gray-800">Categories</h1>
        </div>

        <div className="border-t-1"></div>

        <div className="flex gap-3 mt-[1.875rem] ml[1.125rem]">
          <MdMenuBook className="pt-1 font-bold h-[1.5rem] w-[1.5rem]" />
          <p className="font-[600] text-[#14202D]">Books & Magazines</p>
        </div>

        <div className="flex gap-3 mt-[1.875rem]">
          <BiPalette className="pt-1 font-bold h-[1.5rem] w-[1.5rem]" />
          <p className="font-[600] text-[#14202D]"> Crafts & Supplies </p>
        </div>

        <div className="flex gap-3 mt-[1.875rem]">
          <MdQueueMusic className="pt-1 font-bold h-[1.5rem] w-[1.5rem]" />
          <p className="font-[600] text-[#14202D]"> Music & Entertainment </p>
        </div>

        <div className="flex gap-3 mt-[1.875rem]">
          <BiPalette className="pt-1 font-bold h-[1.5rem] w-[1.5rem]" />
          <p className="font-[600] text-[#14202D]"> Art & Collectibles </p>
        </div>

        <div className="flex gap-3 mt-[1.875rem]">
          <MdLocalMall className="pt-1 font-bold h-[1.5rem] w-[1.5rem]" />
          <p className="font-[600] text-[#14202D]">
            {" "}
            Jewelry Bags & Accessories
          </p>
        </div>

        <div className="flex gap-3 mt-[1.875rem] ">
          <MdLocalOffer className="pt-1 font-bold h-[1.5rem] w-[1.5rem]" />
          <p className="font-[600] text-[#14202D]"> Clothing</p>
        </div>

        <div className="flex gap-3 mt-[1.875rem]">
          <MdLocalMovies className="pt-1 font-bold h-[1.5rem] w-[1.5rem]" />
          <p className="font-[600] text-[#14202D]"> Vintage</p>
        </div>

        <div className="flex gap-3 mt-[1.875rem]">
          <MdCardGiftcard className="pt-1 font-bold h-[1.5rem] w-[1.5rem]" />
          <p className="font-[600] text-[#14202D]"> Popular Gifts & Toy</p>
        </div>
      </div>
      <main className=" w-full lg:grid mx-auto container">
        <div className=" pt-6 lg:flex flex lg:px-12 px-6 justify-between py-5 shadow-md mb-5">
          <h1 className="  lg:text-2xl text-lg font-bold">Hot Deals</h1>
          <p className=" text-lg text-gray-600">see all</p>
        </div>
        <div className="lg:grid grid-cols-3 gap-6 space-y-4 object-cover w-full mx-auto cursor-pointer  ">
          {StorehotDeal.map((store, i) => (
            <Link href={`/store/${store.id}`}>
            <ProductCardHotDeals key={i} {...store}  />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
