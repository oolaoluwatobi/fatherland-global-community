"use client";
import React from "react";
import style from "./styles.module.css";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import img from "@/public/campus/camp5.png";

export default function Becomeatutor2() {
  const router = useRouter();
  return (
    <div className={`${style.bft} pt-[2.556rem] rounded-[10px] max-w-[77rem] mx-auto lg:pl8 lg:mb-40 mb-5 container`}>
        <div
      className={`mx-auto max-w-5xl  pb-[2rem] flex justify-between items-center`}
    >
      <main>
        <p className="text-white lg:text-[40px] text-xl font-bold lg:leaing-[50px] break-words pb-4 text-center lg:text-start">
          Become A Tutor
        </p>
        <p
          className="max-w-[34.313rem] text-white lg:text-xl text-sm
         font-medium break-words mb-[1.886rem]  text-center lg:text-start"
        >
          Join Explore Cultural learning and Gain great autonomy by using videos
          to reach a broader audience than ever before.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button
            className="text-[#15375F] text-base font-semibold break-words px-[3.125rem] py-[0.938rem] bg-white hover:bg-white
          "
            onClick={() => router.push("/become-a-tutor")}
          >
            Become a Tutor
          </Button>
        </div>
      </main>
      <Image src={img} alt="" />
    </div>
    </div>
  );
}
