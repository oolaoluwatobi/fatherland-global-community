import React from "react";

import Image from "next/image";
import appstore from "@/public/appstore.png.png";
import playstore from "@/public/playstore.png.png";
export default function StoreCard() {
  return (
    <div>
      <div className="bg-black p-16 rounded-3xl container lg:w-full max-w-[97.813rem] mx-auto ">
        <div className="mx-auto lg:grid grid-cols-2 relative gap-4 lg:mt-10 mt-5 bg-gradient-to-r from-cyan-600  to-green-500 lg:p-10 p-5">
          <h3 className="lg:text-2xl  text-white font-bold ]">
            Latest Product trends and discount <br /> news straight to you{" "}
          </h3>
          <div className="relative w-full h-full lg:mt-0 mt-3">
            <input
              type="text"
              className="bg-white w-full rounded-full py-4 lg:py-6 pl-5 text-sm"
              placeholder="Quick Links"
            />
            <button className=" lg: absolute top10 mt-2 lg:mr-0 mr2 right-2 bg-gradient-to-r from-cyan-600  to-green-500  py-3 px-5 mt3 text-center lg:text-lg text-xs text-[#ffffff] rounded-full">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex justify-around mt-20">
          <p className="text-white lg:text-3xl text-lg pt-3 font-bold ">
            Download Fatherland <br /> Community App
          </p>
          <div className="lg:flex  gap-4 ">
            <Image
              src={playstore}
              alt="" width={0} height={0} priority
              className="bg-white my-4  w-36 lg:w-48 h12 rounded-2xl"
            />
            <Image
              src={appstore}
              alt=""
              className="bg-white my-4 w-36 lg:w-48 h12 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
