import React from "react";
import style from "./styles.module.css";

export default function ClothingCard() {
  return (
    <div
    className={`${style.Afrobg} w-full max-w[97.813rem] ax-w-7xl h-[27rem] mx-auto mb-5 hidden lg:inline-block`}>
    <div className="">
      <p className="text-[#fff] font-[500] pt-[10rem] px-[28rem] font-sans text-3xl">
        Get every Special Offer
      </p>
      <p className="text-5xl pl[6.938rem]  px-[26rem] text-[#fff] font-[600] pt-[1rem]">
        BIG FASHION SALE
      </p>
    </div>
  </div>
  );
}
