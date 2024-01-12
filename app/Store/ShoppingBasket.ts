import { StoreApi, UseBoundStore, create } from "zustand";

import rectange6 from "@/public/Rectangle 23 (2).png";
import rectange1 from "@/public/palm wine.png";
import { StaticImageData } from "next/image";

type Product = {
    id: string;
    productId?: string;
    image:string | StaticImageData;
    title:string;
    description?:string;
    price: number;
    quantity: number;
    color: string;
    subtotal: number;
    size: string
}

type ShoppingBasket = {
    products: Product;
    addProduct: (newProduct: Product) => void
}

export const useShoppingBasketStore: UseBoundStore<StoreApi<any>> = create((set) => ({
  products: [
    {
      id: "1",
      image: rectange1,
      title: "Palm wine topper",
      description: "Art & collectibles",
      price: 36.00,
      quantity: 2,
      color: "Green",
      subtotal: 72.00,
      size: 'l'
    },
    {
      id: "2",
      image: rectange6,
      title: "Topper",
      description: "Art & collectibles",
      price: 25.00,
      quantity: 3,
      color: "Green",
      subtotal: 5.00,
      size: 'm'
    },
  ],
  addProduct: (newProduct: Product) => {
    set((state: any) => {
        return { products: [...state.products, newProduct]}
    })
  }
}));
