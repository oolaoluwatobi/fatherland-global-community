"use client";
import React from "react";
import style from "./styles.module.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import hey from "@/public/Rectangle 58255.png";
import { useRouter } from "next/navigation";

export default function Findanafricantaste() {
  const router = useRouter();
  return (
   <section className="container max-w-7xl">
     <div
      className={`mx-auto container ${style.fb} lg:mb-[8rem] mb-8 rounded-[10px] container`}
    >
      <main className="lg:flex justify-around items-center pt-12 lg:pt-0">
        <div className="mx-auto container">
          <p className="text-white lg:text-[44px] font-extrabold lg:leading-[58px] break-words max-w-[41rem] pb-2">
            Find an African Taste Restaurant close to you
          </p>
          <p className="text-white lg:text-base text-xs font-normal leading-6 break-words max-w-[32.25rem] lg:mb-[2.813rem] mb-4">
            With over 50 restaurants on African taste, search for any restaurant
            around you
          </p>

          <Button
            className={`text-white font-semibold break-words text-base ${style.fb1} py-[0.688rem] ps-[1.188rem] pe-[1.563rem]`}
            onClick={() => router.push("/find-a-restaurant")}
          >
            Find Now
          </Button>
        </div>

        <Image
          src={hey}
          alt=""
          className="pt-[3.813rem] pb-[5.625rem] lg:pr-[4.188rem]"
        />
      </main>
    </div>
   </section>
  );
}
