'use client'
import React from "react";
import style from "./styles.module.css";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Getstarted() {
    const router = useRouter();
  return (
    <div className="max-w-7xl  container bg-red500 mx-auto lg:my-[5rem] my-8">
      <div
        className={`${style.get} rounded-[10px] lg:h-[25.563rem] max-w-7xl mx-auto container text-center py-[5rem]`}
      >
        <p className="text-[#14202D] lg:text-[48px] text-2xl lg:leading-[70px] font-bold">
          Ready to Get Started?
        </p>
        <p className="text-center lg:w-[48.563rem] text-[#14202D] mx-auto my-6 lg:text-xl text-base font-normal lg:leading-9">
          Our passion lies in leveraging technology to craft transformative
          experiences that enhance the lives and communities we serve.
        </p>
        <Button onClick={()=>router.push('/becomeamember')} className="bg-secondary hover:bg-secondary px-[2.125rem]">Join Community</Button>
      </div>
    </div>
  );
}
