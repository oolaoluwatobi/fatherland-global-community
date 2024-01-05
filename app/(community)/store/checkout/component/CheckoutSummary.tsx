import React from "react";

export default function CheckoutSummary() {
  return (
    <div className="lg:mb-28 mb-5 ">
    <div className=" mt-5 bg-[#FFF] ">
      <div className=" flex gap-2   py-[1rem] items-baseline">
        <p className="bg-[#E6E6E6] rounded-full px-2  aspect-square flex place-items-center ml-[1.5rem] lg:text-center text-[#878787] font-[600]">
          2
        </p>
        <p className=" font-[600] text-[#000] lg:text-xl text-sm">
          Order Summary
        </p>
      </div>
    </div>
    <div className=" mt-5 bg-[#FFF] ">
      <div className=" flex gap-2   py-[1rem] items-baseline">
        <p className="bg-[#E6E6E6] rounded-full px-2  aspect-square flex place-items-center ml-[1.5rem] lg:text-center text-[#878787] font-[600]">
          3
        </p>
        <p className=" font-[600] text-[#000] lg:text-xl text-sm">
        Payment Options
        </p>
      </div>
    </div>
    </div>
  );
}
