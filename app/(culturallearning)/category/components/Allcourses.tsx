"use client";
import React from "react";
import { Tutors } from "@/lib/data2";
import Link from "next/link";
import Image from "next/image";
import Aside from "../[categoryId]/components/Aside";


export default function Allcourses() {

  return (
    <div className=" mx-auto bggreen-700 max-w-7xl lg:pr-[5rem] lg:flex container">
<Aside />
      <section className="containe lg:grid grid-cols-3 gap-4 ">
        {Tutors.map((tutor, i) => (
          <Link href="" key={i} className="">
            <Image
              src={tutor.image}
              alt=""
              className="lg:w-[290px] lg:h-[375px] mb-5 lg:mb-0"
            />
          </Link>
        ))}
      </section>
    </div>
  );
}
