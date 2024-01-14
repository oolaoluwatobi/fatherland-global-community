'use client'
import React from "react";
import videoPlaceholder from "@/public/assets/video-placeholder.png";
import play from "@/public/assets/videoplay1.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";



export default function FatherlandConcept() {
  const router = useRouter()
  return (
    <section className="mt-20 max-w-7xl container">
      <div>
        <div className="lg:grid grid-cols-2 border-l-8 border-secondary rounded-l-xl    bg-red-20">
          <div className="lg:p-10 p-4 text-dark my-auto">
            <h1 className="lg:text-[46px] text-2xl font-[800] lg:leading-[58px]">
              Fatherland <span className="text-secondary ">Community</span>{" "}
            </h1>
            <p className="lg:text-base text-sm font-normal lg:leading-6 break-words lg:mb-[2.25rem] mb-4">
              Fatherland unites Africans, providing an Afrocentric lifestyle and
              diverse products. Members immerse in Africa&apos;s rich heritage and
              experience
            </p>
            <div className=" flex justify-center lg:justify-start mt-4 lg:mt-0">
              <Button onClick={()=>{router.push('/becomeamember')}} variant="default" size="lg" className="bg-secondary hover:bg-secondary">
                Join Now
              </Button>
            </div>
          </div>

          <div className="relative p-4 lg:p-0">
            <Image
              className="rounded-lg"
              src={videoPlaceholder}
              alt="video-playback"
            />
            <Image
              className="absolute inset-0 mx-auto my-auto cursor-not-allowed"
              src={play}
              alt="play"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
