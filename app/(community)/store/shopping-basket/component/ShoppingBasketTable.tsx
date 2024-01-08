"use client";
import React from "react";
import { useState } from "react";
import { ShoppingBasket } from "@/lib/data";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";



import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Shopping from "./Shopping";
import { MdOutlineDeleteForever } from "react-icons/md";

export default function ShoppingBasketTable() {
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
    <table className="contain">
      <thead className=" gap5 bg-orange-100 py2">
        <tr>
          <th className="px py-6 lg:w-[20rem] font-[600] text-[#686868] pl5 lg:text-lg text-start lg:px-[1.125rem]">
            Product
          </th>
          <th className={`p8 lg:px-[3.813rem]`}>Price</th>
          <th className={`p8 lg:px-[6.813rem]`}>Quantity</th>
          <th className={`p8 lg:px-[3.813rem]`}>Subtotal</th>
          <th className={`p8 lg:px-[3.813rem]`}>Remove</th>
        </tr>
      </thead>
      <tbody className=" bgred-500 ">
        {ShoppingBasket.map((shopping, i) => (
          <tr key={i} className="gap5 shadowlg border-b wfull  ">
            <td className=" lg:flex justifybetween gap-[1.25rem] lg:py-4">
              <Image
                src={shopping.image!!}
                alt=""
                className="w-[7.5rem] h[9rem] mt3  pt3 object-cover "
              />
              <div
                className="lg:flex
               flex-col ">
                <div className=" px2 ">
                <p className="lg:text-lg mt-5 text-[#232323] w-[12.5rem] leading-7 font-[700]"> {shopping.product1}</p>
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
            <td className=" text-center">{shopping.price1}</td>
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
            
           <p className="flex items-center gap-2 justify-center"><MdOutlineDeleteForever  className="w-5 h-5"/>{shopping.remove}</p>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
