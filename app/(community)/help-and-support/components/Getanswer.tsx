"use  client";
import React from "react";
import { Button } from "@/components/ui/button";
import { channels } from "@/lib/data2";
import Link from "next/link";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";

export default function Getanswer() {
  return (
    <div className="mx-auto">
      <div className="bg-[#14202D] pt-4 lg:pt-[4.375rem] mx-auto text-center lg:text-start pb-4 lg:pb-[4rem]">
        <div className="max-w-7xl container">
          <p className="max-w-[40.813rem] text-white text-base lg:text-[40px] font-bold leading-[56px] break-words pb-[3.149rem]">
            Get Answers Immediately with Live Chat
          </p>
          <Button className="bg-primary text-white hover:bg-primary">
            Live Chat
          </Button>
        </div>
      </div>
      <main className="mx-auto container  lg:pb-[6.07rem] pb-4 mt-8 lg:mt-[6.482rem] max-w-7xl">
        <p className="text-[#14202D] text-2xl lg:text-4xl font-bold lg:leading-[56px] break-words">
          Our Communication Channels
        </p>
        <p className="max-w-[76.375rem] text-base lg:text-xl  font-normal pb-[2.494rem]">
          Our Communication channels include newsletters, email updates, social
          media platforms, and a dedicated community <br /> website.{" "}
        </p>
        {channels.map((channel, i) => (
          <div key={i} className="lg:grid grid-cols-2 gap-4 ">
            <Link
              href=""
              className="flex items-center gap-4 shadow-lg bg-white shadow-blue-50 rounded-[10px] mb-[2.174rem] py-4 lg:py-[2rem] px-[1.835rem]"
            >
              <AiFillTwitterCircle className="text-4xl" />
              {channel.twitter}
            </Link>
            <Link
              href=""
              className="flex items-center gap-4 shadow-lg bg-white shadow-blue-50 rounded-[10px] mb-[2.174rem] py-4 lg:py-[2rem] px-[1.835rem]"
            >
              <span>
                <FaInstagramSquare className="text-4xl" />
              </span>
              {channel.instagram}
            </Link>
            <Link
              href=""
              className="flex items-center gap-4 shadow-lg bg-white shadow-blue-50 rounded-[10px] mb-[2.174rem] py-4 lg:py-[2rem] px-[1.835rem]"
            >
              <FaFacebook className="text-4xl" />
              {channel.facebook}
            </Link>
            <Link
              href=""
              className="flex items-center gap-4 shadow-lg bg-white shadow-blue-50 rounded-[10px] mb-[2.174rem] py-4 lg:py-[2rem] px-[1.835rem]"
            >
              <FaYoutube className="text-[#fc0002] text-4xl" />{" "}
              {channel.youtube}
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}
