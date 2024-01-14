import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
// import { ProductArray } from "./ExclusiveProducts";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from './styles.module.css'
import { ChevronRightCircle } from "lucide-react";
import { BiChevronRightCircle } from "react-icons/bi";


// import people from "@/public/assets/people.png";

type Product = {
  id: string;
  name: string;
  details: string;
  href: string;
  bgImage: StaticImageData;
};

interface ProductProps {
  product: Product
}
export default function ExclusiveProductsCard({product}: ProductProps) {

  return <div className="">
  <div
    key={product.id}
    className={`space-y2 mt4 w-[22rem h-[16.5rem lg:h-[349px] lg:w-[607px] h-full aspect-[4/3] py-4 px-4 ${product.id === '1'? styles.id1 : ''}
    ${product.id === '2'? styles.id2 : ''}
    ${product.id === '3'? styles.id3 : ''}
    ${product.id === '4'? styles.id4 : ''}
     text-white  rounded-lg  bg-red-30`}
  >
    <h4 className="text-xl lg:text-4xl font-[600] lg:mt-[9.063rem] mt-20">{product.name}</h4>
    <p className="mt-4 text-justify text-xs lg:text-xl">{product.details}</p>
    <Link href={product.href} className="text-white mt-4 cursor-pointer font-[600] w-auto inline-flex   bg-red-30">
      Learn More <BiChevronRightCircle className="my-auto ml-2  " />{" "} 
    </Link>
  </div>

  </div>;
}
