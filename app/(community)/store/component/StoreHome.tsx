"use client";

import React from "react";
import { StoreHomes } from "@/lib/data";
import Image from "next/image";
import mask from "@/public/categorie banner.png";
import { storeHomes2 } from "@/lib/data";
import Link from "next/link";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import ProductCard from "../clothing/component/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function StoreHome({ params }: { params: { storeId: string } }) {
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

        <div className=" relative mt-5 shadow-xl lg:w-full">
          <Carousel className="hidden lg:block">
            <aside className="lg:flex gap-6 overflow-x-auto no-scrollbar">
              <CarouselContent>
                {StoreHomes.map((discoverhome) => (
                  <CarouselItem className="lg:basis-1/5">
                    <div
                      className="shadow-lg min-w-[17.188rem]"
                      key={discoverhome.id}>
                      <Link href={`/store/${discoverhome.id}`}>
                        <ProductCard {...discoverhome} />
                      </Link>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </aside>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <Carousel className="hidden lg:block">
          <div
            className=" relative mt-5 shadow-xl shadow-blue-50"
            id="storehomes">
            <div className="lg:flex gap6 overflow-x-auto no-scrollbar ">
              <Image src={mask} alt="" className="h-[30.3rem] w-[16.25rem]" />
              <CarouselContent className="">
                {storeHomes2.map((storehome2, i) => (
                  <CarouselItem className="lg:basis-1/4 gap-6 ">
                    <div key={i} className="shadow-lg min-w-[17.188rem] gap-8 ">
                      <Link href={`/store/${storehome2.id}`}>
                        <ProductCard {...storehome2} />
                      </Link>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
          </div>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
