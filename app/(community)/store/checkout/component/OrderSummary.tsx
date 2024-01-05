import Image from "next/image";
import React from "react";
import bonnet from "@/public/fashionbonnet.png";
import { ShoppingBasket } from "@/lib/data";
export default function OrderSummary() {
  return (
    <div className="flex justify-between pl-6 pr-14   mb-4">
        <div className="flex">
            <Image
                src={bonnet}
                width={0}
                height={0}
                priority
                className="w-[7.5rem] h[9rem] mt3  pt3"
                alt="woman"
            />
            <div className="flex flex-col justify-between ml-5">
                <p className="font-[600] text-lg  ">Ankara Alice band - Ankara Headwear</p>
                <p className="font-[600] text-lg text-[#686868] ">Size: L</p>
                <p className="font-[600] text-lg  text-[#686868]">Color: Green </p>
            </div>

        </div>
      <p>X 1</p>
      <div>
        <p>$14.00</p>
        <p>Delivery by Sat Mar 11</p>
      </div>
    </div>
  );
}
