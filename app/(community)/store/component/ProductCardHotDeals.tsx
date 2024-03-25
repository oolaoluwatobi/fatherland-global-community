import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  id: string;
  image: StaticImageData;
  content: string;
  content1: string;
  price?: string;
  discount?: string;
  price1?: string;
  content2?: string;
};


// type props = {
//   id: string;
//   image: StaticImageData;
//   title: string;
//   description: string;
//   price: string;
//   price1?: string;
//   discount?: string;
//   content?: string;
//   content1?: string;
//   content2?: string;
// };

export default function ProductCardHotDeals({
  image,
  id,
 content,
 content1,
 content2,
  price,
  price1,
  discount,
}: Props) {
  return (
    <div
    className="shadowlg hover:border-secondary active:border active:border-primary hover:border bg-white w-full"
    key={id}>
    <div className="relative">
      <Image
        src={image}
        alt=""
        width={0}
        height={0}
        priority
        className="max-w-72 w-full h-72 mt4 object-cover"
      />
        {discount ?  <p className="absolute top-6 left-0 bg-[#FE5104] text-white px-4 text-xs py-2  ">{discount}</p> : null}
      </div> 

      <div className="ml-4">
        <p className="font-[500] lg:text-lg  text-sm lg:w-[18rem] pt-4">{content}</p>
        <p className="text-gray-400  lg:text-lg  pt-1">{content1}</p>
        <p className="pt-1">{content2}</p>
        <div className="lg:flex gap-2">
          <p className="bg-blue-5">{price}</p>
        {price1 ?  <p className="text-orange-400 ">{price1}</p> : null } 
        </div>
      </div>
    </div>
  );
}
