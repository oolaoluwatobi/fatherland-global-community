import React from "react";

import Image from "next/image";
import appstore from '@/public/appstore.png.png'
import playstore from '@/public/playstore.png.png'
export default function StoreCard() {
  return (
    <div>
      <div className="bg-black p-16 rounded-3xl  lg:w-full max-w-[97.813rem]  mx-auto ">
        <div className="mx-auto lg:grid grid-cols-2 relative  gap-4 mt-10 bg-gradient-to-r from-cyan-600  to-green-500  p-10 ">
          <h3 className="text-3xl lg:w-[34rem] text-white font-bold ]">Latest Product trends and discount news straight to you </h3>
          <input type="text" className="bg-white rounded-full pl-5" placeholder="Quick Links"  />
          <button className=" lg:absolute top-11 mr-7   right-4 bg-gradient-to-r from-cyan-600  to-green-500  lg:w-[7.05rem] lg:h-[4rem] text-center px- text-[#ffffff] rounded-full">Subscribe</button>
        </div>
        <div className="lg:flex justify-around mt-20">
            <p className="text-white text-2xl lg:w-[24rem]  font-bold ]">Download Fatherland Community App</p>
            <div className="lg:flex  gap-4 "> 
             <Image src={playstore} alt="" className="bg-white  rounded-2xl" />
             <Image src={appstore} alt="" className="bg-white rounded-2xl" />
            </div>
        </div>
      </div>
    </div>
  );
}
