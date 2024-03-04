"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "@/lib/data";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";


import Image from "next/image";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useShoppingBasketStore } from "@/app/Store/ShoppingBasket";

export default function ShoppingBasketTable() {
  const { products, addProducts } = useShoppingBasketStore()
  console.log(products, '[PRODUCTS________]')
  
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
    if (count == 0) {
      setCount(0);
    }
  };
  return (
    <div className=" lg:grid grid-cols4 gap6 px10 h-fit mx-auto max-w-[97.813rem]  bg-white w-full " >
      <table className=" w-full pr-4">
        <thead className="w-full gap5 bg-orange-100 pl4">
          <tr>
            <th className=" py-6 lg:w-[20rem] font-[600] text-[#686868] pl5 lg:text-lg text-start lg:px-[1.125rem lg:px-">
              Product
            </th>
            <th className={`p8 lg:px-[1.813rem`}>Price</th>
            <th className={`p8 lg:px-[7.813rem`}>Quantity</th>
            <th className={`p8 lg:px-[3.813rem`}>Subtotal</th>
            <th className={`p8 lg:px-[3.813rem`}>Remove</th>
          </tr>
        </thead>
        <tbody className=" bgred-500 ">
          {products.map((shopping: any, i: any) => (
            <tr key={i} className="gap5 shadowlg border-b wfull  ">
              <td className=" pl4 lg:flex justifybetween gap-[1.25rem] lg:py-4">
                <Image
                  src={shopping.image!!}
                  alt=""
                  className="w-[7.5rem] h[9rem] mt3  pt3 object-cover "
                />
                <div
                  className="lg:flex
               flex-col ">
                  <div className=" px2 ">
                    <p className="lg:text-lg mt-5 text-[#232323] w-[12.5rem] leading-7 font-[700]">
                      {" "}
                      {shopping.title}
                    </p>
                    <p className="mt-2 font-[600] text-[#686868]">
                      {" "}
                      {shopping.size}
                    </p>
                    <p className="mt-2 font-[600]  text-[#686868]">
                      {" "}
                      {shopping.color}
                    </p>
                  </div>
                </div>
              </td>
              <td className=" text-center">${shopping.price}</td>
              <td className=" text-center">
                <div className="lg:flex">
                  <p className="text-center mx-auto">
                    <button className=" " onClick={plus}>
                      <PlusIcon />
                    </button>
                    <span className="lg:px-[1.313rem] text-base font-normal leading-5">
                      {count}
                    </span>
                    <button className="" onClick={minus}>
                      <MinusIcon />
                    </button>
                  </p>
                </div>
              </td>

              <td className="text-center">{shopping.subtotal!!}</td>

              <td className=" items-center">
                <p className="flex items-center gap-2 justify-center">
                  <MdOutlineDeleteForever className="w-5 h-5" />
                  {shopping.remove}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
