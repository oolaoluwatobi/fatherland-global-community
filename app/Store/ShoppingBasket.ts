import { StoreApi, UseBoundStore, create } from "zustand";
import { immer } from "zustand/middleware/immer";
import rectange6 from "@/public/Rectangle 23 (2).png";
import rectange1 from "@/public/palm wine.png";
import { StaticImageData } from "next/image";
import { toast } from "react-toastify";

type Product = {
  id: string;
  productId?: string;
  image: string | StaticImageData;
  title: string;
  description?: string;
  price: number;
  quantity: number;
  color: string;
  subtotal: number;
  size: string;
};

type ShoppingBasket = {
  products: Product;
  addProduct: (newProduct: Product) => void;
};

export const useShoppingBasketStore: UseBoundStore<StoreApi<any>> = create(
  (set) => ({
    products: [
      {
        id: "1",
        image: rectange1,
        title: "Palm wine topper",
        description: "Art & collectibles",
        price: 36.0,
        quantity: 2,
        color: "Green",
        subtotal: 72.0,
        size: "L",
      },
      {
        id: "2",
        image: rectange6,
        title: "Topper",
        description: "Art & collectibles",
        price: 25.0,
        quantity: 3,
        color: "Green",
        subtotal: 5.0,
        size: "m",
      },
    ],

    addProduct: (newProduct: Product) => {
      set((state: any) => {
        
        // console.log(state.products.find((item: any) => item.productId ===  newProduct.productId));
        // console.log(state.products, newProduct);
        if (state.products.find((item: any) => item.productId ===  newProduct.productId)) {
         toast.success("item already in cart")
          // console.log('includes');
          return { products: [...state.products] }
        } else {
          // console.log('does not include');
          toast.success("item  added to cart ")
          return { products: [...state.products, newProduct] };
        } 
      });
    },

    deleteProduct: (productId: string) => {
      set((state: any) => {
        
        console.log(state.products, 'state products')
        const filteredProduct = state.products.filter((item: any) => item.id !==  productId)
        
    
          toast.success("item Removed from Cart.")
          
          console.log(filteredProduct, 'filter products')
         return { products: [...filteredProduct] }
      });
    },
  })
);
