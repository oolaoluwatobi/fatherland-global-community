import React from 'react'
import tickets_and_events from "@/public/campus/ticketsandevent.png";
import african_taste from "@/public/campus/africantaste.png";
import spirituality from "@/public/campus/travel.png";
import community from "@/public/campus/store.png";

import ExclusiveProductsCard from "./ExclusiveProductsCard";
import { StaticImageData } from "next/image";

type Product = {
    id: string;
    name: string;
    details: string;
    href: string;
    bgImage: StaticImageData;
  };
  
  export type ProductArray = Product[];
  
  const PRODUCTS: ProductArray = [
    {
      id: "1",
      name: "Tickets and Events",
      details:
        "Experience life's highlight by finding your perfect events and securing your tickets",
      bgImage: tickets_and_events,
      href: '/tickets-and-events'
    },
    {
      id: "2",
      name: "African Taste",
      details:
        "Experience discounted culinary journey of rich African cuisines at restaurants worldwide.",
      bgImage: african_taste,
      href: '/african-taste'
    },
    {
      id: "3",
      name: "Travel and Spirituality",
      details:
        "Experience a transformative journey of adventure that awakens your consciousness and soul.",
      bgImage: spirituality,
      href: '/travel-and-spirituality'
    },
    {
      id: "4",
      name: "Community Store",
      details:
        "Buy original and unique, artisanal handcrafted items made with skilled craftmanship",
      bgImage: community,
      href: '/store'
    },

  ];
  

export default function Xclusivecard() {
    const renderProducts = PRODUCTS.map((product) => {
        return (
          <div key={product.id} className='bg-red500 lg:w-[37.938rem] lg:h-[21.813rem]'>
            <ExclusiveProductsCard product={product} />
          </div>
        );
      });
  return (
    <div>
         <div className="pt-14 max-w-7xl container lg:pb-[6.688rem] pb-12  bg-red-20">
        <div className="grid grid-cols-1 lg:gridcols-2 lg:grid-cols-2 space-y4 gap-[1.875rem] bg-red-10">
          {renderProducts}
          
        </div>
      </div>
    </div>
  )
}
