"use client";
import React from "react";
import style from "./styles.module.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

export default function Bookaticket() {
  const router = useRouter();
  return (
    <main className="mx-auto container max-w-7xl">
      <div
        className={`mx-auto container ${style.tourft} lg:mb-[7.063rem] mb-12`}
      >
        <div
          className={`text-center text-white lg:text-5xl text-2xl font-extrabold 
          leading-[58px] break-words lg:pt-[6.5rem] pt-8`}
        >
          {" "}
          Book a Ticket Now
        </div>
        <div className="flex justify-center lg:mt-[9.563rem] mt-12">
          <Button
            className="text-center bg-0 border border-white text-[15px] font-semibold break-words mb-[4.688rem]"
            onClick={() => router.push("/book-a-ticket")}
          >
            {" "}
            Making a Booking
          </Button>
        </div>
      </div>
    </main>
  );
}
