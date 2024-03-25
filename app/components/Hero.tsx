'use client'
import React from "react";
import Image from "next/image";
import Images from "@/public/data/HeroGallery";
import { Button } from "@/components/ui/button";
import { Raleway } from "next/font/google";
import { useRouter } from "next/navigation";
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export default function Hero() {
  const router =useRouter()
  return (
    <section className="bg-red-300 py[7rem] pt-[4rem] pb-[5rem] hero_background max-w-[90rem mx-auto ">
      <div className="hero_backgroun pt5 bg-red-20 container">
        <div className="gri sm:grid-cols1 lg:grid-cols2 gap10  px4 sm:px6 lg:px20 py20  bg-red-20 lg:flex justify-between itemscenter">
          <div className="gri gap10 lg:py20">
            <article className="text-[#263238] myauto lg:mt-[12rem]">
              <h1
                className={`hero-heading ${raleway.className} max-w-[37.188rem] font-extrabold text-xl md:text-3xl lg:text-[60px]
                 xl:text5xl 2xl:text6xl lg:leading-[72px]`}
              >
                The #1 Afrocentric <br /> Community
              </h1>
              <Button
                size="lg"
                className="font-[700] lg:mt-14 mt-8 mb-8 lg:mb-0 bg-[#ff8800] hover:bg-[#ff8800]"
                onClick={()=>router.push('/becomeamember')}
              >
                Join Fatherland Now
              </Button>
            </article>
          </div>

          <div className="hfit lg:pb-20 bg-red200 lg:mt-[4.25rem] lg:mb-[5rem] mb-8">
            <ul className="grid grid-cols-4 lg:grid-cols-5 lg:gap-[1.641rem] gap-3">
              {Images.map((image) => (
                <li key={image.id} className="">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="lg:w-[6.5rem]"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
