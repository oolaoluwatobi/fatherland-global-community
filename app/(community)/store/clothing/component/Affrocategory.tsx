import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Affrocategories } from "@/lib/data";
import Image from "next/image";
import bar from '@/public/bar.png'
// import { BarChartIcon } from "@radix-ui/react-icons";



export default function Affrocategory() {
  return (
    <div className="">
      <div className="lg:flex justify-between w-[79.375rem] h-[7rem] shadow-lg mt-5 text[#52525] mb-10 mx-auto border:active border-primary ">
        <div className="lg:w[15.188rem] mxauto h[-2rem]  text-xl pt-10 pl-5">
          {" "}
          Showing 1–9 of 14 results{" "}
        </div>
        <div className="flex gap-[6rem] text-xl text-[#525258] pt-10 pl-5 h-[2rem] ">
          Default sorting <IoIosArrowDown className=" mr-10 pt-1 " />{" "}
        </div>
      </div>

      <main className="mt-10 w-[79.375rem]  lg:flex mx-auto max-w-7xl  ">
        <div className="h-[65.5rem] w-[17.25rem] shadow-xl">
          <div className=" hover:border-primary">
            <p className="font-[600] flex justify-between border-b-2 text-lg mx-auto ml-4 mr-7 h-[2.5rem] border-b-red-500 shadow-sm mt-10">
              Categories
              <IoIosArrowDown className="mt-2" />
            </p>
           <div className="flex gap-3 mt-7">
            <input type="checkbox" className="h-5 w-5 ml-5  " />
            <p className="font-[400]">Sweatshirt</p>
           </div>

           <div className="flex gap-3 mt-2">
            <input type="checkbox" className="h-5 w-5 ml-5  " />
            <p className="font-[400]">Jackets</p>
           </div>

           <div className="flex gap-3 mt-2">
            <input type="checkbox" className="h-5 w-5 ml-5  " />
            <p className="font-[400]">kurta</p>
           </div>

           <div className="flex gap-3 mt-2">
            <input type="checkbox" className="h-5 w-5 ml-5  " />
            <p className="font-[400]">Shirts</p>
           </div>

           <div className="flex gap-3 mt-2">
            <input type="checkbox" className="h-5 w-5 ml-5  " />
            <p className="font-[400]">T-shirt</p>
           </div>

           <div className="flex gap-3 mt-2">
            <input type="checkbox" className="h-5 w-5 ml-5  " />
            <p className="font-[400]">Track pants</p>
           </div>

          </div>

          <div className=" hover:border-primary">
            <p className="font-[600] flex justify-between border-b-2 text-lg mx-auto ml-4 mr-7 h-[2.5rem] border-b-red-500 shadow-sm mt-10">
              Color
              <IoIosArrowDown className="mt-2" />
            </p>
           <div className="flex gap-3 mt-7">
            <input type="checkbox" className="h-5 w-5 ml-5  " />
            <p className="font-[400]">Black</p>
           </div>

           <div className="flex gap-3 mt-2">
            <input type="checkbox" className="h-5 w-5 ml-5  " />
            <p className="font-[400]">Grey</p>
           </div>

           <div className="flex gap-3 mt-2">
            <input type="checkbox" className="h-5 w-5 ml-5  " />
            <p className="font-[400]">White</p>
           </div>

           <div className="flex gap-3 mt-2">
            <input type="checkbox" className="h-5 w-5 ml-5  " />
            <p className="font-[400]">Blue</p>
           </div>

           <div className="flex gap-3 mt-2">
            <input type="checkbox" className="h-5 w-5 ml-5  " />
            <p className="font-[400]">Light Blue</p>
           </div>

           <div className="flex gap-3 mt-2">
            <input type="checkbox" className="h-5 w-5 ml-5  " />
            <p className="font-[400]">Dark Blue</p>
           </div>
          </div>

          <div className=" hover:border-primary">
            <p className="font-[600] flex justify-between border-b-2 text-lg mx-auto ml-4 mr-[] h-[2.5rem] border-b-red-500 shadow-sm mt-10">
              Size
              <IoIosArrowDown className="mt-2" />
            </p>
            <div className="flex gap-3 mt-7">
            <input type="checkbox" className="h-5 w-5 ml-5  " />
            <p className="font-[400]">M</p>
           </div>
           <div className="flex gap-3 mt-3">
            <input type="checkbox" className="h-5 w-5 ml-5  " />
            <p className="font-[400]">L</p>
           </div>
           <div className="flex gap-3 mt-3">
            <input type="checkbox" className="h-5 w-5 ml-5  " />
            <p className="font-[400]">XL</p>
           </div>
           <div className="flex gap-3 mt-3">
            <input type="checkbox" className="h-5 w-5 ml-5  " />
            <p className="font-[400]">XXL</p>
           </div>
           <div className="flex gap-3 mt-3">
            <input type="checkbox" className="h-5 w-5 ml-5  " />
            <p className="font-[400]">XXXL</p>
           </div>
           <div className="flex gap-3 mt-3">
            <input type="checkbox" className="h-5 w-5 ml-5  " />
            <p className="font-[400]">XS</p>
           </div>
           </div>

           <div className=" hover:border-primary">
            <p className="font-[600] flex justify-between border-b-2 text-lg mx-auto ml-4 mr-7 h-[2.5rem] border-b-orange-400 shadow-sm mt-7">
             Price
              <IoIosArrowDown className="mt-2" />
            </p>
            <Image src={bar} alt="" className="mt-4 ml-3" />
             <div className="flex justify-between ml-4 mr-4 mt-4">
             <div className="border-b2 border-b-orange-0">
              <p> price: <span className="font-[700] text-sm text-[#03041C]"> $10 — $580</span></p>
            </div>
            <p  className="font-[700] text-sm text-[#03041C]">Filter</p>
             </div>
            </div>
           
        </div>

        <div className="lg:grid grid-cols-3 mt-5 mb-5 ml-20 gap-6 shadow-lg shadow-blue-50   ">
          {Affrocategories.map((Affrocategory, i) => (
            <div className="shadow-lg hover:border-secondary active:border active:border-primary hover:border " key={i}>
              <Image
                src={Affrocategory.image}
                alt=""
                className="lg:w-full mt-4 bg-"
              />
              <div className="p-5 mt-4">
                <p className="font-[800] text-lg">{Affrocategory.title}</p>
                <p className="font-normal text-[#686868] pt-2">
                  {Affrocategory.description}
                </p>

                <div className="lg:flex justify-between ">
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
