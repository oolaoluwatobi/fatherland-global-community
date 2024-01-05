import React from "react";
// import { Image } from "lucide-react";
import bonnet from "@/public/fashionbonnet.png"

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

export default function ShoppingBasketTable() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="">Subtotal</TableHead>
          <TableHead className="text-right">Remove</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">
                <div  className="flex bg-green-200">
                  <Image
                    src={bonnet!!}
                    alt=""
                    className="w-[7.5rem] h[9rem] mt-3  pt-3 object-cover "
                  />

                  <div className=" ">
                    <p className="lg:text-lg text-[#232323]  leading-7 font-[700]">
                      {/* {shopping.product1} */}Ankara
                    </p>
                    <p className=" font-[600] text-[#686868]">
                      {/* {shopping.size} */} L
                    </p>
                    <p className="font-[600]  text-[#686868]">
                      {/* {shopping.color} */} Brown
                    </p>
                  </div>
                </div></TableCell>
          <TableCell>$14</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
