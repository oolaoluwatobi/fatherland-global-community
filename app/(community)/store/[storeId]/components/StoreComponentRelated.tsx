"use client"
import React from 'react'
import { Link } from 'lucide-react';
import Image from 'next/image'
import { StoreRelate } from "@/lib/data";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import style from "../styles.module.css";

export default function StoreComponentRelated() {

  const storehomes = () => {
    const discover = document.querySelector("#store");
    discover?.scrollBy({ left: -discover.clientWidth, behavior: "smooth" });
  };
  const storehomess = () => {
    const discover = document.querySelector("#store");
    discover?.scrollBy({ left: discover.clientWidth, behavior: "smooth" });
  };

  return (
    <div className='w-full mb-14 max-w-[90rem] mx-auto'>
      <div className="mt-24">
          <div>
            <p className="text-2xl font-[700] px-10">Related Products</p>

            <div className=" relative mt-5 shadow-lg shadow-blue-0">
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

              <main
                id="store"
                className="lg:flex gap-6 overflow-x-auto no-scrollbar px-16 ">
                  {/* <Link href={`/store/storeComponent`}> */}
                {StoreRelate.map((storesrelate) => (
                  <div
                    className="shadow-lg min-w-[17.188rem] h-auto"
                    key={storesrelate.id}>
                      
                    <Image
                      src={storesrelate.image}
                      alt=""
                      className="w-[17.188rem] h-[16.4rem] mt-4 bg-"
                    />
                    <div className="p-5 mt-4 ">
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
                          <Image
                            src={storesrelate.image2}
                            alt=""
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                   
                  </div>
                  
                ))}
                 {/* </Link> */}
              </main>
            </div>
          </div>
        </div>
        <div
          className={`${style.Afrobg} w-full max-w[97.813rem] ax-w-7xl hidden lg:inline-block h-[27rem] mx-auto mb-5`}>
          <div className="">
            <p className="text-[#fff] font-[500] pt-[10rem] px-[16rem] font-sans text-3xl">
              Get every Special Offer
            </p>
            <p className="text-5xl   px-[14rem] text-[#fff] font-[600] pt-[rem]">
              BIG FASHION SALE
            </p>
          </div>
        </div>
    </div>
  )
}
