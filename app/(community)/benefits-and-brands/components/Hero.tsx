import React from "react";
import style from "./styles.module.css";
import Image from "next/image";
import barcode from "@/public/campus/barcode.png";

export default function Hero() {
  return (
    <section className="lg:mb-[4.125rem] mb-12">
        <div
      className={`${style.get} mx-auto lg:pt-[13.625rem] pt-8 lg:pb-[14.563rem] pb-8`}
    >
      <div className="lg:pl-[41.5rem] container">
        <p className="lg:text-[50px] text-2xl font-bold lg:leading-[58px] text-white break-words mb-[1.063rem] text-center lg:text-start">
          Explore the world with a click.
        </p>
        <p className="text-white lg:text-base text-xs font-normal lg:leading-7 break-words lg:w-[662px]">
          Fatherland invites you to explore the world through a click, offering
          a dynamic and inspirational environment where creativity flourishes,
          connections thrive, and innovative ideas come to life. The Community
          Hubs serve as inclusive spaces, fostering collaboration and empowering
          individuals globally. This transformative experience blends virtual
          and physical elements to create a harmonious environment where diverse
          perspectives converge, sparking innovation. Fatherland transcends
          geographical boundaries, providing a global ecosystem for impactful
          collaboration and redefining the way we connect, create, and
          innovate.F
        </p>
      </div>
      
    </div>
    <div className="bg-[#050556] lg:flex justify-around items-center lg:py-[2.313rem]">
        <div className="max-w-7xl container mb-8 lg:mb-0 lg:w-[655px]">
          <p className="text-white text-base font-bold leading-7 break-words mb-[8px]">COMMUNITY MEMBERSHIP</p>
          <p className={`${style.l1} lg:text-50px] text-3xl font-bold lg:leading-[58px break-words]`}>
            Enjoy Exclusive Benefits when you become a Member
          </p>
          <p className="text-white text-base font-normal leading-7 break-words">
            Our community delivers exclusive benefits and brands to the global
            population targeting over 100 million members.
          </p>
        </div>
        <Image src={barcode} alt="Barcode" className="container lg:w-[267px] lg:h[267px] pb-8 lg:pb-0"/>
      </div>
    </section>
  );
}
