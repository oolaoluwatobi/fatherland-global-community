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
    <div className=" shadow pb-7 hover:border-secondary  active:border active:border-primary hover:border bg-white">
      <div className="relative">
        <Image src={image!!} alt="" className="w-full" />
        {discount ?  <p className="absolute top-6 left-0 bg-[#FE5104] text-white px-4 text-xs py-2  ">{discount}</p> : null}
      </div>
      <div className="ml-4">
        <p className="font-[500] text-lg w-[18rem] pt-4">{content}</p>
        <p className="text-gray-400  lg:text-lg pt-1">{content1}</p>
        <p className="pt-1">{content2}</p>
        <div className="lg:flex gap-2">
          <p className="">{price}</p>
          <p className="text-orange-400">{price1}</p>
        </div>
      </div>
    </div>
  );
}
