import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Affrocategories } from "@/lib/data";
import Image from "next/image";

export default function Affrocategory() {
  return (
    <div className="">
      <div className="flex justify-between w-[79.375rem] h-[7rem] shadow-lg mt-5 text[#52525] mb-10 mx-auto border:active border-primary ">
        <div className="lg:w[15.188rem] mxauto h[-2rem]  text-xl pt-10 pl-5">
          {" "}
          Showing 1–9 of 14 results{" "}
        </div>
        <div className="flex gap-[6rem] text-xl text-[#525258] pt-10 pl-5 h-[2rem] ">
          Default sorting <IoIosArrowDown className=" mr-10 pt-1" />{" "}
        </div>
      </div>

      <main className="mt-10 w-[79.375rem]  flex mx-auto max-w-7xl  ">
        <div className="h-[57.5rem] w-[17.25rem] shadow-xl">
          <div>
            <p className="font-[500] flex justify-around pl5 text-[#000">
              Categories
              <IoIosArrowDown className="pt-1" />
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 mt-5 mb-5 ml-20 gap-6 shadow-lg shadow-blue-50 ">
          {Affrocategories.map((Affrocategory, i) => (
            <div className="shadow-lg " key={i}>
              <Image
                src={Affrocategory.image}
                alt=""
                className="w-full mt-4 bg-"
              />
              <div className="p-5 mt-4">
                <p className="font-[800] text-lg">{Affrocategory.title}</p>
                <p className="font-normal text-[#686868] pt-2">
                  {Affrocategory.description}
                </p>

                <div className="flex justify-between ">
                  <p className="text-[#050A1E] font-[800] mb-5 pt-4 ">
                    {Affrocategory.price}
                    <Image
                      src={Affrocategory.image1}
                      alt=""
                      className="pt-3 font-bold"
                    />{" "}
                  </p>
                  <div>
                    <Image src={Affrocategory.image2} alt="" className="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
