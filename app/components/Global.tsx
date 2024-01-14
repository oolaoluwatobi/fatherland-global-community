import React from "react";
import style from "./styles.module.css";


export default function Global() {
  return (
    <div className="max-w-7xl container bg-red500 mx-auto lg:my-[5rem] my-8">
      <div
        className={`${style.global} lg:h-[49.688rem] max-w-7xl mx-auto container lg:flex justify-between itemscenter lg:pt-[5.938rem] pt-8 pb-8 lg:pb-0 gap-[4.5rem]`}
      >

          <p className="lg:w-[32.25rem lg:text-[45px] lg:h[49.688rem] text-2xl font-extrabold lg:leading-[57.60px] break-words text-[#14202D] mb-4 lg-mb-0">
            The Global <br /> Community for People <br /> of African Descent:{" "} <br />
            <span className={`${style.l1}`}>Connecting</span> Everyone, <br />
            Everywhere.
          </p>

        <div className="lg:flex justify-between gap-4">
          <div className="gap-4 flex flex-col mb-4 lg:mb-0">
            <div
              className={`${style.id11} lg:w-[18.125rem] lg:h-[16.5rem] flex flex-col justify-center items-center text-white py-8 lg:py-0 rounded-[10px]`}
            >
              {" "}
              <p className="lg:text-[96px] text-2xl font-extrabold lg:leading-[144px]">
                100m
              </p>
              <p className="text-[16px] font-medium">of Africans</p>{" "}
              <p className="lg:text-2xl text-lg font-extrabold lg:leading-9">
                In America
              </p>
            </div>
            <div
              className={`${style.id33} lg:w-[18.125rem] lg:h-[20.125rem] flex flex-col justify-center items-center text-white py-8 lg:py-0 rounded-[10px]`}
            >
              <p className="lg:text-[96px] text-2xl font-extrabold lg:leading-[144px]">
                11m
              </p>{" "}
              <p className="text-[16px] font-medium">Africans</p>{" "}
              <p className="lg:text-2xl text-lg font-extrabold lg:leading-9">
                In Europe
              </p>
            </div>
          </div>
          <div className="gap-4 flex flex-col">
            <div
              className={`${style.id22} lg:w-[18.125rem] lg:h-[20.125rem] flex flex-col justify-center items-center text-white py-8 lg:py-0 rounded-[10px]`}
            >
              <p className="lg:text-[96px] text-2xl font-extrabold lg:leading-[144px]">
                1.2b
              </p>{" "}
              <p className="text-[16px] font-medium">Africans</p>{" "}
              <p className="lg:text-2xl text-lg font-extrabold lg:leading-9">
                Africa
              </p>
            </div>

            <div
              className={`${style.id44} lg:w-[18.125rem] lg:h-[16.5rem] flex flex-col justify-center items-center text-white py-8 lg:py-0 rounded-[10px]`}
            >
              <p className="lg:text-[96px] text-2xl font-extrabold lg:leading-[144px]">
                5m
              </p>{" "}
              <p className="text-[16px] font-medium">Africans</p>{" "}
              <p className="lg:text-2xl text-lg font-extrabold lg:leading-9">
                In Asia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
