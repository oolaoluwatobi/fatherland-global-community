import Image from "next/image";
import React from "react";
import { orderSummary } from "@/lib/data";
export default function OrderSummary() {
  return (
    <div className=" justify-between pl-6 pr-14   mb-4">
      {orderSummary.map((summary, i) => (
        <div className=" lg:flex justify-between pl-6 pr-14 mb-4">
          <Image
            src={summary.image}
            width={0}
            height={0}
            priority
            className="w-[7.5rem] h[9rem] mt3  pt3"
            alt="woman"
          />
          <div className="flex">
            <div className="flex flex-col justify-between ml-5">
              <p className="font-[600] text-lg  ">
                {summary.product1}
              </p>
              <p className="font-[600] text-lg text-[#686868] ">{summary.size}</p>
              <p className="font-[600] text-lg  text-[#686868]">
              {summary.color}
              </p>
            </div>
          </div>

          <p className="ml-5 lg:ml-0 py-5 text-[#686868] font-[600]">{summary.add}</p>
          <div className="ml-5 flex justify-between py-4 flex-col lg:ml-0">
            <p>{summary.price1}</p>
            <p className="">{summary.delivery}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
