import React from "react";

import Image from "next/image";
import appstore from '@/public/appstore.png.png'
import playstore from '@/public/playstore.png.png'
export default function StoreCard() {
  return (
    <div>
      <div className="bg-black p-16 rounded-3xl container lg:w-full max-w-[97.813rem] mx-auto ">
        <div className="mx-auto lg:grid grid-cols-2 relative gap-4 lg:mt-10 mt-5 bg-gradient-to-r from-cyan-600  to-green-500 lg:p-10 p-5">
          <h3 className="lg:text-3xl lg:w-[34rem] text-white font-bold ]">Latest Product trends and discount news straight to you </h3>
          <input type="text" className="bg-white rounded-full pl-5 text-sm" placeholder="Quick Links"  />
          <button className=" lg:absolute top-11 mr-7 right-4 bg-gradient-to-r from-cyan-600  to-green-500  lg:w-[7.05rem] mt-3  lg:h-[4rem] w-[4rem] h-[2rem] text-center lg:text-lg text-xs text-[#ffffff] rounded-full">Subscribe</button>
        </div>
        <div className="lg:flex justify-around mt-20">
            <p className="text-white lg:text-2xl text-lg lg:w-[24rem] font-bold ]">Download Fatherland Community App</p>
            <div className="lg:flex  gap-4 "> 
             <Image src={playstore} alt="" className="bg-white my-4 rounded-2xl" />
             <Image src={appstore} alt="" className="bg-white rounded-2xl" />
            </div>
        </div>
      </div>
    </div>
  );
}
