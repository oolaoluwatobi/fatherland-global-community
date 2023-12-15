"use client";

import React from "react";
import { StoreHomes } from "@/lib/data";
import Image from "next/image";
import mask from "@/public/categorie banner.png";
import { storeHomes2 } from "@/lib/data";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

export default function StoreHome() {
  const storehomes = () => {
    const discover = document.querySelector("#store");
    discover?.scrollBy({ left: -discover.clientWidth, behavior: "smooth" });
  };
  const storehomess = () => {
    const discover = document.querySelector("#store");
    discover?.scrollBy({ left: discover.clientWidth, behavior: "smooth" });
  };
  return (
    <div>
      <div>
        <div className="mt-10 ml-5">
          <p className="font-bold text-3xl text-[#232323]">
            Home and <span className="text-primary">Living</span>
          </p>
          <p className="pt-2 texl-2xl tex-[#686868]">
            Curated home accessories handpicked by our best Editors
          </p>
        </div>
        <div className=" relative mt-5 shadow-xl shadow-blue-50">
          <button className="absolute left-2 top-0 bottom-0 my-auto">
            <BsArrowLeftSquareFill
              onClick={() => storehomes()}
              className="w-12 h-12 text-primary"
            />
          </button>
          <button className="absolute right-12 top-0 bottom-0 my-auto">
            <BsArrowRightSquareFill
              className="w-12 h-12 text-primary "
              onClick={storehomess}
            />
          </button>

          <aside id="stor" className="flex gap-6 overflow-x-auto no-scroll">
            {StoreHomes.map((discoverhome) => (
              <div
                className="shadow-lg min-w-[17.188rem]"
                key={discoverhome.id}>
                <Image
                  src={discoverhome.image}
                  alt=""
                  className="w-[17.188rem] mt-4 bg-"
                />
                <div className="p-5 mt-4">
                  <p className="font-[800] text-lg">{discoverhome.title}</p>
                  <p className="font-normal text-[#686868] pt-2">{discoverhome.description}</p>

                  <div className="flex justify-between ">
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

        <div className="grid grid-cols-5 mt-10 gap-6 mx-auto ml-5 shadow-xl  shadow-blue-50 ">
          <div>
            <Image src={mask} alt="" className="h-[28.188rem] w-[16.25rem]" />
          </div>
          {storeHomes2.map((storehome2, i) => (
            <div key={i} className="shadow-lg  ">
              <Image
                src={storehome2.image}
                alt=""
                className="h-[16.5rem] w-[17.125rem] "
              />
              <div className="p-5 mt-2">
                <p className="font-[800] text-lg">{storehome2.title}</p>
                <p className="font-normal text-[#686868] pt-2">{storehome2.description}</p>

                <div className="flex justify-between ">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
