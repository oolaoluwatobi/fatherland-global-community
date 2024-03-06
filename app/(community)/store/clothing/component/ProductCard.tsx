"use client"
import { useShoppingBasketStore } from "@/app/Store/ShoppingBasket";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { MdOutlineStarPurple500 } from "react-icons/md";

type props = {
  id: string;
  image: StaticImageData;
  title: string;
  description?: string;
  price: string;
  price1?: string;
  discount?: string;
  color?: string;
  size?: string;
  quantity?: string;
};

export default function  ProductCard({
  image,
  id,
  title,
  description,
  price,
  price1,
  discount,
}: props) {
  const {  addProduct } = useShoppingBasketStore()

  
  const handleAddToBasket = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, { id, image, title, color, price }: props) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Add to basket logic here.
    const newProduct = {
      id: Date.now(),
      productId: id,
      image,
      title,
      color,
      price,
      // size,
      // quantity
    }

    addProduct(newProduct)


  };

  return (
    <div
      className="shadowlg hover:border-secondary active:border active:border-primary hover:border bg-white "
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
        {discount ? (
          <p className="absolute top-4 right-0 bg-[#FD6906] px-4 py-1 text-white ">
            {discount}
          </p>
        ) : null}
      </div>
      <div className="p-5 mt-4  ">
        <p className="font-[800] text-lg">{title}</p>
        <p className="font-normal text-[#686868] pt-2">{description}</p>

        <div className="lg:flex justify-between  ">
          <div className="text-[#050A1E] font-[800] mb-5 pt-4 space-y-1">
            <p>{price}</p>
            {price1 ? (
              <p className="font-normal">{price1}</p>
            ) : (
              <div className="flex text-[#F2CB00]  ">
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
              </div>
            )}
          </div>
          <button onClick={e => handleAddToBasket(e, {id, image, title, price})}>
            <LiaShoppingCartSolid className="  w-12 h-12 p-2 bg-[#F0F2EE] hover:bg-gradient-to-r  transition-all  from-[#0A9FBF] to-[#28D744] hover:text-white rounded-full lg:ml-2 mt-3" />

          </button>
        </div>
      </div>
    </div>
  );
}
