import React from "react";

export default function HeroSetion() {
  return (
    <main className=" bg-[#14202D] pt-10 lg:pt-[6.576rem] mx-auto lg:pl-[6.625rem pb-10 lg:pb-[9.75rem]">
    <div className="max-w-7xl mx-auto container">
      <p className="text-white text-xl lg:text-[40px] font-bold lg:leading-[56px] break-words mb-[1.088rem] text-center lg:text-start">
        Help & Support
      </p>
      <p className="text-white lg:text-xl font-normal leading-7 break-words mb-[1.466rem] text-center lg:text-start">
        Get quick answers to your profound questions
      </p>

      <input
        type="text"
        placeholder="Search"
        className="mx-auto py-4 lg:py-[1.75rem] pl-[1.75rem] rounded-[16px] text-white bg-[#4b545d] lg:w-[50rem] container"
      />
    </div>
    </main>

  );
}
