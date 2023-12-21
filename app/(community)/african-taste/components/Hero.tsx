"use client";
import React from "react";
import style from "./styles.module.css";
import { AFRICANTASTEBANNER } from "@/lib/data2";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <div className={` mx-auto ${style.ban} lg:pl-[8.063rem`}>
      <main className="container text-center lg:text-start max-w-7xl">
      {AFRICANTASTEBANNER.map((taste, i) => (
        <div
          key={i}
          className="lg:w-[45.313rem] lg:ms-[8.063rem lg:pt-[11.306rem] pt-12 lg:pb-[12.868rem] pb-12"
        >
          <p className="lg:text-[40px] font-bold lg:leading-[56px] break-words text-white mb-[1.023rem]">
            {taste.label}
          </p>
          <p className="lg:w-[42.75rem] text-white lg:text-xl text-sm font-normal lg:leading-7 break-words">
            {taste.text}
          </p>
          <Button
            onClick={() => router.push("/find-a-restaurant")}
            className="hover:bg-primary text-base font-semibold break-words mt-[2.305rem] py-[11px] px-[25px]"
          >
            Find a restaurant
          </Button>
        </div>
      ))}
      </main>
    </div>
  );
}