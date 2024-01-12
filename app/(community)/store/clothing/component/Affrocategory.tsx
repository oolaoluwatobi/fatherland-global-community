import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Affrocategories } from "@/lib/data";
import Image from "next/image";
import bar from "@/public/bar.png";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Link from "next/link";
import ProductCard from "./ProductCard";
// import { BarChartIcon } from "@radix-ui/react-icons";

export default function Affrocategory() {
  return (
    <div className="w-full max-w-[90rem] mx-auto container ">
      <div className="flex justify-between py-4 lg:px-7 px-3 bg-[#FFFFFF]  mx-auto border:active border-primary ">
        <div className=" text-xs lg:text-lg pt10 ">
          {" "}
          Showing 1–9 of 14 results{" "}
        </div>
        <div className="flex lg:gap-[3rem] gap-3 lg:text-lg text-[#525258] text-xs ">
          Default sorting <IoIosArrowDown className=" mr10 pt-1 " />{" "}
        </div>
      </div>

      <main className="mt-10 max-w-[90rem] grid-cols-4 gap-6 lg:flex mx-auto w-full ">
        <div className="h-fit col-span-1 bg-[#FFFFFF] lg:max-w-[17rem] w-full shadow-lg">
          <div className=" hover:border-primary  ">
            <p className="font-[600] flex justify-between border-b-2 text-lg mx-auto ml-4 mr-7  border-b-red-500 shadow-sm mt-10">
              Categories
              <IoIosArrowDown className="mt-2" />
            </p>
            <div className="flex gap-3 mt-7">
              <input type="checkbox" className="h-5 w-5 ml-5  " />
              <p className="font-[400]">Sweatshirt</p>
            </div>

            <div className="flex gap-3 mt-2">
              <input type="checkbox" className="h-5 w-5 ml-5  " />
              <p className="font-[400]">Jackets</p>
            </div>

            <div className="flex gap-3 mt-2">
              <input type="checkbox" className="h-5 w-5 ml-5  " />
              <p className="font-[400]">kurta</p>
            </div>

            <div className="flex gap-3 mt-2">
              <input type="checkbox" className="h-5 w-5 ml-5  " />
              <p className="font-[400]">Shirts</p>
            </div>

            <div className="flex gap-3 mt-2">
              <input type="checkbox" className="h-5 w-5 ml-5  " />
              <p className="font-[400]">T-shirt</p>
            </div>

            <div className="flex gap-3 mt-2">
              <input type="checkbox" className="h-5 w-5 ml-5  " />
              <p className="font-[400]">Track pants</p>
            </div>
          </div>

          <div className=" hover:border-primary">
            <p className="font-[600] flex justify-between border-b-2 text-lg mx-auto ml-4 mr-7 border-b-red-500 shadow-sm mt-10">
              Color
              <IoIosArrowDown className="mt-2" />
            </p>
            <div className="flex gap-3 mt-7">
              <input type="checkbox" className="h-5 w-5 ml-5  " />
              <p className="font-[400]">Black</p>
            </div>

            <div className="flex gap-3 mt-2">
              <input type="checkbox" className="h-5 w-5 ml-5  " />
              <p className="font-[400]">Grey</p>
            </div>

            <div className="flex gap-3 mt-2">
              <input type="checkbox" className="h-5 w-5 ml-5  " />
              <p className="font-[400]">White</p>
            </div>

            <div className="flex gap-3 mt-2">
              <input type="checkbox" className="h-5 w-5 ml-5  " />
              <p className="font-[400]">Blue</p>
            </div>

            <div className="flex gap-3 mt-2">
              <input type="checkbox" className="h-5 w-5 ml-5  " />
              <p className="font-[400]">Light Blue</p>
            </div>

            <div className="flex gap-3 mt-2">
              <input type="checkbox" className="h-5 w-5 ml-5  " />
              <p className="font-[400]">Dark Blue</p>
            </div>
          </div>

          <div className=" hover:border-primary">
            <p className="font-[600] flex justify-between border-b-2 text-lg mx-auto ml-4 mr-7 border-b-red-500 shadow-sm mt-10">
              Size
              <IoIosArrowDown className="mt-2" />
            </p>
            <div className="flex gap-3 mt-7">
              <input type="checkbox" className="h-5 w-5 ml-5  " />
              <p className="font-[400]">M</p>
            </div>
            <div className="flex gap-3 mt-3">
              <input type="checkbox" className="h-5 w-5 ml-5  " />
              <p className="font-[400]">L</p>
            </div>
            <div className="flex gap-3 mt-3">
              <input type="checkbox" className="h-5 w-5 ml-5  " />
              <p className="font-[400]">XL</p>
            </div>
            <div className="flex gap-3 mt-3">
              <input type="checkbox" className="h-5 w-5 ml-5  " />
              <p className="font-[400]">XXL</p>
            </div>
            <div className="flex gap-3 mt-3">
              <input type="checkbox" className="h-5 w-5 ml-5  " />
              <p className="font-[400]">XXXL</p>
            </div>
            <div className="flex gap-3 mt-3">
              <input type="checkbox" className="h-5 w-5 ml-5  " />
              <p className="font-[400]">XS</p>
            </div>
          </div>

          <div className=" hover:border-primary">
            <p className="font-[600] flex justify-between border-b-2 text-lg mx-auto ml-4 mr-7 border-b-orange-400 shadow-sm mt-7">
              Price
              <IoIosArrowDown className="mt-2" />
            </p>
            <Image src={bar} alt="" className="mt-4 ml-3" />
            <div className="flex justify-between ml-4 mr-4 mt-4">
              <div className="border-b2 border-b-orange-0">
                <p>
                  {" "}
                  price:{" "}
                  <span className="font-[700] text-sm text-[#03041C]">
                    {" "}
                    $10 — $580
                  </span>
                </p>
              </div>
              <p className="font-[700] text-sm text-[#03041C]">Filter</p>
            </div>
          </div>
        </div>

        <div className="lg:grid grid-cols-3 gap-4 mt-8 mb-5 shadow-lg shadow-blue-50 w-full  ">
          {Affrocategories.map((Affrocategory, i) => (
            <Link href={`/store/${Affrocategory.id}`}>
              <ProductCard {...Affrocategory} />
             </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
