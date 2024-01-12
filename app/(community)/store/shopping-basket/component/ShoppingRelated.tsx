'use client'
import Link from "next/link";

import React from "react";
import Image from "next/image";
import { StoreRelate } from "@/lib/data";
// import style from "./styles.module.css";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import ProductCard from "../../clothing/component/ProductCard";

export default function ShoppingRelated() {
  const storehomes = () => {
    const discover = document.querySelector("#store");
    discover?.scrollBy({ left: -discover.clientWidth, behavior: "smooth" });
  };
  const storehomess = () => {
    const discover = document.querySelector("#store");
    discover?.scrollBy({ left: discover.clientWidth, behavior: "smooth" });
  };
  return (
    <div className="w-full max-w[97.813rem] containe px-8 mx-auto ">
      <div className="mt-24 lg:ml-4">
        <div>
          <p className=" lg:text-2xl font-[700]">Related Products</p>

          <div className=" relative mt-5 shadow-xl shado">
            <button className="absolute left-2 top-0 bottom-0 my-auto hidden lg:block">
              <BsArrowLeftSquareFill
                onClick={() => storehomes()}
                className="w-12 h-12 text-primary"
              />
            </button>
            <button className="absolute right-12 top-0 bottom-0 my-auto hidden lg:block">
              <BsArrowRightSquareFill
                className="w-12 h-12 text-primary "
                onClick={storehomess}
              />
            </button>

            <aside
              id="store"
              className="lg:flex gap-6 overflow-x-auto no-scrollbar ">
              {StoreRelate.map((storesrelate, i) => (
                <div
                  className="shadow-md min-w-[17.188rem] h-auto mx-auto contaier"
                  key={storesrelate.id}>
                    <ProductCard {...storesrelate}/>
                    {/* <Link href={`${}`}> */}
                  {/* <Image
                    src={storesrelate.image}
                    alt=""
                    className="lg:w-[17.188rem] lg:h-[16.4rem] mt-4 w-full-"
                  />
                  <div className="p-5 mt-4  ">
                    <p className="font-[800] text-lg">{storesrelate.title}</p>
                    <p className="font-normal text-[#686868] pt-2">
                      {storesrelate.description}
                    </p>

                    <div className="lg:flex justify-between ">
                      <div className="text-[#050A1E] font-[800] mb-5 pt-4 ">
                        {storesrelate.price}
                        <p className="font-normal">{storesrelate.price1}</p>
                      </div>
                      <div>
                        <Image src={storesrelate.image2} alt="" className="" />
                      </div>
                    </div>
                  </div> */}
                  {/* </Link> */}
                </div>
              ))}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
