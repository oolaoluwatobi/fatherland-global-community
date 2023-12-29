import Container from "@/components/ui/container";
import React from "react";
import videoPlaceholder from "@/public/assets/video-placeholder.png";
import play from "@/public/assets/videoplay1.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FatherlandConcept() {
  return (
    <section className="mt-20 max-w-7xl container">
      <div>
        <div className="lg:grid grid-cols-2 border-l-8 border-secondary rounded-l-xl    bg-red-20">
          <div className="lg:p-10 p-4 flex flex-col justify-between text-dark ">
            <Link  href="/about-us">
              <Button
                variant="secondaryAccent"
                size="lg"
                className="inline rounded-full text-black"
              >
                  About Us
              </Button>
            </Link>
            <h1 className="lg:text-4xl text-2xl font-[800] leading-normal lg:w-[27rem]">
              Fatherland{" "}
              <span className="text-secondary ">
                African  Forum{" "}
              </span>{" "}
              and <span className="text-secondary ">Marketplace</span>{" "}
            </h1>
            <p className="lg:text-base text-sm">
              Fatherland unites Africans, providing an Afrocentric lifestyle and
              diverse products. Members immerse in Africa’s rich heritage and
              experience
            </p>
            <div className=" flex justify-center lg:justify-start mt-4 lg:mt-0">
              <Button variant="default" size="lg">
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
