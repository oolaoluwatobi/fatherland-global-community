import React from 'react'
import Image from 'next/image'
import { Advertcreative } from '@/lib/data'

export default function AdvertCreative(){
  return (
    
    <div className="mx-auto  bg-red-40  mt-20 lg max-w-6xl ">
     {Advertcreative.map((advertt, i)=>(
           <div key={i} className="mx-auto lg:grid grid-cols-3 gap-10 mb-5 justify-around">
    
           <div className=" justify-center lg:flex flex-col border rounded-[10px] font-[700]  hover:border-primary active:border-primary shadow-lg shadow-blue-100  h-auto w-auto  text-center ">
               <Image src={advertt.image} alt="" className='max-w-[430px]' />
                 </div>
       
             <div className=" col-span-2 p-4  mx-auto pr-4 bg-[#E8F7FD] ">
               <p className="mt-3 font-bold lg:text-4xl textxl ">
                 {advertt.heading}
               </p>
               <p className="lg:text-xl text-sm max-w-[34rem] bg-emerald500 my-3 ">
                 {advertt.content}
               </p>
             </div>
           </div>
     ))}
  </div>
  )
}
