"use client";

import React from "react";
import { StoreHomes } from "@/lib/data";
import Image from "next/image";
import mask from "@/public/categorie banner.png";
import { storeHomes2 } from "@/lib/data";
import Link from "next/link";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

export default function StoreHome({ params }: { params: { storeId: string } }) {
  const storehomes = () => {
    const discover = document.querySelector("#store");
    discover?.scrollBy({ left: -discover.clientWidth, behavior: "smooth" });
  };
  const storehomess = () => {
    const discover = document.querySelector("#store");
    discover?.scrollBy({ left: discover.clientWidth, behavior: "smooth" });
  };
  const container = () => {
    const right = document.querySelector("#storehomes");
    right?.scrollBy({ left: -right.clientWidth, behavior: "smooth" });
  };
  const containers = () => {
    const right = document.querySelector("#storehomes");
    right?.scrollBy({ left: right.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="mx-auto lg:w-full container max-w-[97.813rem]  ">
      <div>
        <div className="mt-10 ml-5 mx-auto   ">
          <p className="font-bold lg:text-3xl text-2xl text-[#232323]">
            Home and <span className="text-primary ">Living</span>
          </p>
          <p className="pt-3 lg:texl-2xl text-[#686868]">
            Curated home accessories handpicked by our best Editors
          </p>
        </div>

        <div className=" relative mt-5 shadow-xl shadow-blue-50">
          <button className="absolute left-2 top-0 bottom-0 my-auto hidden lg:inline-block">
            <BsArrowLeftSquareFill
              onClick={() => storehomes()}
              className="w-12 h-12 text-primary"
            />
          </button>
          <button className="absolute right-12 top-0 bottom-0 my-auto hidden lg:inline-block">
            <BsArrowRightSquareFill
              className="w-12 h-12 text-primary "
              onClick={storehomess}
            />
          </button>

          <aside id="store" className="lg:flex gap-6 overflow-x-auto no-scrollbar">
            {StoreHomes.map((discoverhome) => ( 
              <div
                className="shadow-lg min-w-[17.188rem]"
                key={discoverhome.id}>
                <Image
                  src={discoverhome.image}
                  alt=""
                  className="lg:w-[17.188rem] mt-4 bg-"
                />
                <div className="p-5 mt-4">
                  <p className="font-[800] text-lg">{discoverhome.title}</p>
                  <p className="font-normal text-[#686868] pt-2">
                    {discoverhome.description}
                  </p>

                  <div className="lg:flex justify-between ">
                    <div className="text-[#050A1E] font-[800] mb-5 pt-4 ">
                      {discoverhome.price}
                      <p className="font-normal">{discoverhome.price1}</p>
                    </div>
                    <div>
                      <Image src={discoverhome.image2} alt="" className="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </aside>
        </div>

        <div className=" relative mt-5 shadow-xl shadow-blue-50">
          <button className="absolute hidden lg:inline-block left-2 top-0 bottom-0 my-auto">
            <BsArrowLeftSquareFill
              onClick={() => container()}
              className="w-12 h-12 text-white bg-black"
            />
          </button>
          <button className="absolute right-12 top-0 bottom-0 my-auto hidden lg:inline-block">
            <BsArrowRightSquareFill
              className="w-12 h-12 text-white bg-black "
              onClick={containers}
            />
          </button>
          {/* <aside> */}
            <div id="storehomes"
            className="lg:flex gap-6 overflow-x-auto no-scrollbar">
              <Image src={mask} alt="" className="h-[28.188rem] w-[16.25rem]" />
            
            {storeHomes2.map((storehome2, i) => (
              
              <div key={i} className="shadow-lg min-w-[17.188rem]  ">
                <Link href={`/store/${storehome2.id}`} >
                <Image
                  src={storehome2.image}
                  alt=""
                  className="h-[16.5rem] lg:w-[17.125rem] w-full "
                />
                <div className="p-5 mt-2">
                  <p className="font-[800] text-lg">{storehome2.title}</p>
                  <p className="font-normal text-[#686868] pt-2">
                    {storehome2.description}
                  </p>

                  <div className="lg:flex justify-between ">
                    <p className="text-[#050A1E] font-[800] pt-4 ">
                      {storehome2.price}
                      <Image
                        src={storehome2.image1!!}
                        alt=""
                        className="pt-3 font-bold"
                      />{" "}
                    </p>
                    <div>
                    <Image src={storehome2.image2} alt="" className="" />
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}
